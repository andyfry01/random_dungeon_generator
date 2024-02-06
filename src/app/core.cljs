(ns app.core
  (:require [reagent.dom]
            [goog.dom :as gdom]
            [reagent.core :as r]
            [app.pages :refer [root]]))

(defn- render []
  (reagent.dom/render [root] (gdom/getElement "root")))

(defn ^:export init
  []
  (rfe/start!
   (rf/router routes {:data {:coercion rss/coercion}})
   (fn [new-match]
     (swap! match
            (fn [old-match]
              (when new-match
                (assoc new-match
                       :controllers (rfc/apply-controllers (:controllers old-match) new-match))))))
   {:use-fragment false})
  (render))

(defn- ^:dev/after-load re-render
  "The `:dev/after-load` metadata causes this function to be called after
  shadow-cljs hot-reloads code. This function is called implicitly by its
  annotation."
  []
  (init))

