(ns app.pieces
  (:require [reagent.core :as r]
            [clojure.string :as str]))

;; basic shapes
(defn blank [{:keys [cls]}]
  [:div {:class (str "unit" " " cls)}
   (repeat 9 [:div.blank])])

(defn wall [{:keys [cls]}]
  [:div {:class (str "unit" " " cls)}
   (repeat 3 [:div.cell])
   (repeat 6 [:div.blank])])

(defn corner [{:keys [cls]}]
  [:div {:class (str "unit" " " cls)}
   (repeat 3 [:div.cell])
   (repeat 2 [:div.blank])
   [:div.cell]
   (repeat 2 [:div.blank])
   [:div.cell]])

(defn hallway [{:keys [cls]}]
  [:div {:class (str "unit" " " cls)}
   (repeat 3 [:div.cell])
   (repeat 3 [:div.blank])
   (repeat 3 [:div.cell])])

(defn entrance [{:keys [cls]}]
  [:div {:class (str "unit" " " cls)}
   [:div.cell] [:div.blank] [:div.cell]
   (repeat 6 [:div.blank])])

;; Wall variants
(defn wall-n
  "Wall on the north"
  []
  [wall])

(defn wall-e
  "Wall on the east"
  []
  [wall {:cls "quarter-turn"}])

(defn wall-s
  "Wall on the south"
  []
  [wall {:cls "half-turn"}])

(defn wall-w
  "Wall on the west"
  []
  [wall {:cls "three-quarter-turn"}])

(defn entrance-n
  "Entrance on the north"
  []
  [entrance])

(defn entrance-e
  "Entrance on the east"
  []
  [entrance {:cls "quarter-turn"}])

(defn entrance-s
  "Entrance on the south"
  []
  [entrance {:cls "half-turn"}])

(defn entrance-w
  "Entrance on the west"
  []
  [entrance {:cls "three-quarter-turn"}])

;; Hallway variants
(defn hallway-ns
  "north-south oriented hallway"
  []
  [hallway {:cls "quarter-turn"}])

(defn hallway-ew
  "east-west oriented hallway"
  []
  [hallway])

;; Corner variants
(defn corner-ne
  "Corner piece with corner at North-East"
  []
  [corner])

(defn corner-se
  "Corner piece with corner at South-East"
  []
  [corner {:cls "quarter-turn"}])

(defn corner-sw
  "Corner piece with corner at South-West"
  []
  [corner {:cls "half-turn"}])

(defn corner-nw
  "Corner piece with corner at North-West"
  []
  [corner {:cls "three-quarter-turn"}]) 
