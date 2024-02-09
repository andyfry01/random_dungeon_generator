(ns app.main
  (:require [reagent.core :as r]
            [app.pieces :refer [wall blank corner hallway
                                entrance-n entrance-e entrance-s entrance-w
                                wall-n wall-e wall-s wall-w
                                corner-ne corner-se corner-sw corner-nw
                                hallway-ew hallway-ns]]
            [app.etc :refer [pieces-page]]))

;; Pieces grouped into categories
(def corners [corner-ne corner-nw corner-se corner-sw])
(def walls [wall-n wall-e wall-s wall-w])
(def hallways [hallway-ew hallway-ns])
(def entrances [entrance-n entrance-e entrance-s entrance-w])

(def starting-pieces
  "The initial \"pool\" from which random pieces are selected.
  In this array, some pieces only appear once, some appear many times in order to weight their appearance in the generated map."
  (flatten (conj
            corners walls hallways entrances
            (repeat 50 blank)
            (repeat 20 wall-e)
            (repeat 50 wall-n)
            (repeat 5 corner-se))))

(def starting-weights
  "All the pieces, with a count corresponding to each piece.
  Bigger count, higher probability of that piece appearing in the map"
  {:entrance-n 1 :entrance-e 1 :entrance-s 1 :entrance-w 1
   :wall-n 0 :wall-e 0 :wall-s 4 :wall-w 0
   :corner-ne 34 :corner-se 17 :corner-sw 18 :corner-nw 1
   :hallway-ew 1 :hallway-ns 1
   :blank 50 })

;; The global state for the whole app. Can be defined outside a component in Reagent (cannot in "normal" React)
(defonce state
  (r/atom {:grid-height 8
           :grid-width 20
           :piece-weights starting-weights
           :piece-pile starting-pieces
           :css-vars {:cell-color "gray" :blank-color "transparent"}
           }))

(defn next-piece
  "Defines some special conditions for corners and edges (only corner pieces at corners, only walls or entrances for edges).
  Renders the appropriate piece at these locations, and otherwise, picks a random piece from the weighted piece pool."
  [{:keys [x y]}]
  (let [h (- (:grid-height @state) 1)
        w (- (:grid-width @state) 1)
        corner-ne? (and (= x w) (= y 0))
        corner-se? (and (= x w) (= y h))
        corner-sw? (and (= x 0) (= y h))
        corner-nw? (and (= x 0) (= y 0))
        edge-n? (= y 0)
        edge-e? (= x w)
        edge-s? (= y h)
        edge-w? (= x 0)
        edge? (or (= x 0) (= x h)
                  (= y 0) (= y w))]

    (cond
      corner-ne? corner-ne
      corner-se? corner-se
      corner-sw? corner-sw
      corner-nw? corner-nw
      edge-n? (rand-nth [wall-n entrance-n])
      edge-e? (rand-nth [wall-e entrance-e])
      edge-s? (rand-nth [wall-s entrance-s])
      edge-w? (rand-nth [wall-w entrance-w])
      :else (rand-nth (:piece-pile @state)))))


(defn make-map
  "Runs next-piece for height * width number of map pieces, partitions that flat array of pieces into rows.
  Then sets each piece into the app state one-by-one, as fast as the user has configured it."
  []
  (let [h (:grid-height @state)
        w (:grid-width @state)
        cell-range (range (* h w))
        flat-grid (for [i cell-range
                        :let [x (mod i w)
                              y (quot i w)]]
                    (next-piece {:x x :y y}))
        partitioned-grid (partition w flat-grid)]

    (swap! state assoc :pieces [])

    (loop [remaining-rows partitioned-grid
           timeout 0]
      (when-let [row (first remaining-rows)]
        (js/setTimeout (fn [] (swap! state assoc :pieces (conj (:pieces @state) row))) timeout)

        (recur (rest remaining-rows) (+ timeout 100))))))


(defn dungeon-map
  "Creates dungeon map element, iterates through map pieces, and renders."
  []
  [:div {:class "map"
         :style {"--width" (:grid-width @state) "--height" (:grid-height @state)
                 "--cell-color" (get-in @state [:css-vars :cell-color])
                 "--blank-color" (get-in @state [:css-vars :blank-color])
                 }}
   (for [rows (:pieces @state)]
     (for [piece rows]
       [piece]))])


(defn update-css-var [var value]
  (swap! state #(assoc-in @state [:css-vars var] value)))

(def colors ["grey" "maroon" "rebeccapurple" "springgreen" "tomato" "dodgerblue" "burlywood"])

(def slider-tmp-state (r/atom {:width (:grid-width @state) :height (:grid-height @state)}))


(defn update-weights []
  (let [mapping {:wall wall :blank blank :corner corner :hallway hallway
                 :entrance-n entrance-n :entrance-e entrance-e :entrance-s entrance-s :entrance-w entrance-w
                 :wall-n wall-n :wall-e wall-e :wall-s wall-s :wall-w wall-w
                 :corner-ne corner-ne :corner-se corner-se :corner-sw corner-sw :corner-nw corner-nw
                 :hallway-ew hallway-ew :hallway-ns hallway-ns}]
    (as-> (map vec (:piece-weights @state)) $
      (map
       (fn [pair]
         (let [piece-symbol (first pair)
               count (second pair)]
           (repeat count (get mapping piece-symbol))))
       $)
      (flatten $)
      (swap! state assoc :piece-pile $))))


(defn weight-slider [{:keys [init-state label state-path min max]}]
  (let [tmp (r/atom init-state)]
    (fn []
      [:fieldset {:class "dimension-ui"}
       [:legend label]
       [:input
        {:name label :type "range" :min min :max max :step 1
         :value @tmp
         :on-input (fn [e] (do
                             (reset! tmp (-> e .-target .-value int))))
         :on-mouse-up (fn [] (do
                               (swap! state assoc-in state-path @tmp)
                               (update-weights)
                               (make-map)))}]
       [:br]
       [:label {:for label} @tmp]])))



(defn weights-ui []
  [:<>
   [:div {:class "weight-row"}
    [:form {:class "weight-group" :on-submit (fn [] nil)}
     [weight-slider {:init-state (get-in @state [:piece-weights :entrance-n]) :label "Entrance North" :state-path [:piece-weights :entrance-n] :min 0 :max 50}]
     [weight-slider {:init-state (get-in @state [:piece-weights :entrance-e]) :label "Entrance East" :state-path [:piece-weights :entrance-e] :min 0 :max 50}]
     [weight-slider {:init-state (get-in @state [:piece-weights :entrance-s]) :label "Entrance South" :state-path [:piece-weights :entrance-s] :min 0 :max 50}]
     [weight-slider {:init-state (get-in @state [:piece-weights :entrance-w]) :label "Entrance West" :state-path [:piece-weights :entrance-w] :min 0 :max 50}]]

   [:form {:class "weight-group" :on-submit (fn [] nil)}
    [weight-slider {:init-state (get-in @state [:piece-weights :wall-n]) :label "Wall North" :state-path [:piece-weights :wall-n] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :wall-e]) :label "Wall East" :state-path [:piece-weights :wall-e] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :wall-s]) :label "Wall South" :state-path [:piece-weights :wall-s] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :wall-w]) :label "Wall West" :state-path [:piece-weights :wall-w] :min 0 :max 50}]]]


   [:div {:class "weight-row"}
   [:form {:class "weight-group" :on-submit (fn [] nil)}
    [weight-slider {:init-state (get-in @state [:piece-weights :corner-ne]) :label "Corner North-East" :state-path [:piece-weights :corner-ne] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :corner-se]) :label "Corner South-East" :state-path [:piece-weights :corner-se] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :corner-sw]) :label "Corner South-West" :state-path [:piece-weights :corner-sw] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :corner-nw]) :label "Corner North-West" :state-path [:piece-weights :corner-nw] :min 0 :max 50}]]

   [:form {:class "weight-group" :on-submit (fn [] nil)}
    [weight-slider {:init-state (get-in @state [:piece-weights :hallway-ns]) :label "Hallway North-South" :state-path [:piece-weights :hallway-ns] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :hallway-ew]) :label "Hallway East-West" :state-path [:piece-weights :hallway-ew] :min 0 :max 50}]
    [weight-slider {:init-state (get-in @state [:piece-weights :blank]) :label "Blanks" :state-path [:piece-weights :blank] :min 0 :max 50}]
    ]]])


(defn info []
  [:<>
   [:section
    [:h1 "Random Dungeon Map Generator"]

    [:p {:style {"font-size" "1.25rem"}} [:strong "Q: "] "What is this thing?"]
    [:details
     [:summary "Find out!"]

     [:p [:strong "A: "] "This is a random dungeon map generator, and it has some nice things you can play with!"]
     [:ul
      [:li [:p "The generator uses "
            [:a {:href "https://css-tricks.com/snippets/css/complete-guide-grid/" :_target "blank"} "CSS Grid"]
            " to create \"pieces\" like walls, corners, and entrances to fill in the center of the map."]
       [:p "The pieces are 3x3 templates consisting of "
        [:select {:name "cell fill color"
                  :on-change (fn [e] (update-css-var :cell-color (-> e .-target .-value))) }
         (for [color colors] [:option color])]
        " fill and "
        [:select {:name "cell background color"
                  :on-change (fn [e] (update-css-var :blank-color (-> e .-target .-value))) }
         (for [color (into ["transparent"] colors)] [:option color])]
        " background color div elements"]
       [:p "(If you want to see what the pieces are, you can go " [:a {:href "/pieces"} "here"] ")." ]]

      [:li [:p "The map is laid out in a "

            [:form {:class "size-selector" :on-submit (fn [e] nil)}
             [:fieldset {:class "dimension-ui"}
              [:legend "Width"]
              [:input {:name "width" :type "range" :min 5 :max 50 :step 1
                       :value (:width @slider-tmp-state)
                       :on-input #(swap! slider-tmp-state assoc :width (int (-> % .-target .-value)))
                       :on-mouse-up (fn []
                                      (do
                                        (swap! state assoc :grid-width (:width @slider-tmp-state))
                                        (make-map)))}]
              [:br]
              [:label {:for "width"} (:grid-width @state)]]

             [:p " by "]

             [:fieldset {:class "dimension-ui"}
              [:legend "Height"]
              [:input
               {:name "height" :type "range" :min 5 :max 25 :step 1
                :value (:height @slider-tmp-state)
                :on-input #(swap! slider-tmp-state assoc :height (int (-> % .-target .-value)))
                :on-mouse-up (fn []
                               (do
                                 (swap! state assoc :grid-height (:height @slider-tmp-state))
                                 (make-map)))}]
              [:br]
              [:label {:for "height"} (:grid-height @state)]]]

            " grid."]]
      [:li
       [:p "While generating the map, map pieces are randomly selected from a pile of pieces."]
       [:p "If there are more pieces of a particular type in the pile, those pieces will show up more frequently in the map."]
       [:p "These are the weights:"]
       [weights-ui]]]

     [:section
      [:h2 "Etc."]
      [:p "This UI was inspired by the demo from " [:a {:href "http://worrydream.com/MagicInk/" :target "_blank"} "this blog post."]]]]]])


;; First run to create a map on page load
(make-map)

(defn root []
  [:<>
   [info]
   [:div
    [:button {:on-click make-map} "Regenerate map"]
    [dungeon-map]]])

