(ns app.pages
  (:require [reagent.core :as r]
            [goog.dom :as gdom :refer [animationFrame]]
            [clojure.string :as str]))

(defonce app-state (r/atom {:what "huh?"}))

(defn animation-loop []
  (let [current-time (js/Date.)]
    (swap! app-state assoc :last-time current-time)))

(defn update-function [] (change))

(defn interval-function []
  (let [current-time (js/Date.)
        last-time (:last-time @app-state)
        interval-ms (:interval-ms @app-state)]
    (when (>= (- current-time last-time) interval-ms)
      (swap! app-state assoc :last-time current-time)
      (update-function))))

(defn start-animation-loop []
  (swap! app-state assoc :interval-num (js/setInterval interval-function (:interval-ms @app-state))))

(defn stop-animation-loop []
  (println @app-state)
  (js/clearInterval (:interval-num @app-state)))

(defn root []
   [:section "hi"])
