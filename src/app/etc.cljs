(ns app.etc
  (:require
   [reagent.core :as r]
   [app.pieces :refer [wall blank corner hallway
                       entrance-n entrance-e entrance-s entrance-w
                       wall-n wall-e wall-s wall-w
                       corner-ne corner-se corner-sw corner-nw
                       hallway-ew hallway-ns]]))

(defn pieces-page []
  [:section {:class "pieces-demo"}

   [:h1 "Pieces"]
   [:p "These are the individual pieces that a map is built from"]
   [:p [:a {:href "/"} "👈 Go back to the generator"]]
   [:section
   [:h2 "entrance-n"]
   [entrance-n]]
[:section
   [:h2 "entrance-e"]
   [entrance-e]]
[:section
   [:h2 "entrance-s"]
   [entrance-s]]
[:section
   [:h2 "entrance-w"]
   [entrance-w]]
[:section
   [:h2 "wall"]
   [wall]]
[:section
   [:h2 "corner"]
   [corner]]
[:section
   [:h2 "hallway"]
   [hallway]]
[:section
   [:h2 "North wall"]
   [wall-n]]
[:section
   [:h2 "East wall"]
   [wall-e]]
[:section
   [:h2 "South wall"]
   [wall-s]]
[:section
   [:h2 "West wall"]
   [wall-w]]
[:section
   [:h2 "East-West hallway"]
   [hallway-ew]]
[:section
   [:h2 "North-South hallway"]
   [hallway-ns]]
[:section
   [:h2 "North-East corner"]
   [corner-ne]]
[:section
   [:h2 "South-East corner"]
   [corner-se]]
[:section
   [:h2 "South-West corner"]
   [corner-sw]]
[:section
   [:h2 "North-West corner"]
   [corner-nw]]])
