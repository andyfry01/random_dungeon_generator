(ns app.core
  (:require [reagent.dom]
            [goog.dom :as gdom]
            [reagent.core :as r]

            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [reitit.frontend.controllers :as rfc]

            [app.etc :refer [pieces-page]]
            [app.main :refer [root]]))

(def routes
  [["/" {:name ::root :view root}]
   ["/pieces" {:name ::pieces :view pieces-page}]])

(defonce match (r/atom nil))

(defn current-page []
  (println "matchh? " @match)
  [:main
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))])


(defn- render []
  (reagent.dom/render [current-page] (gdom/getElement "root")))

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
   ;; set to false to enable HistoryAPI
   {:use-fragment false})
  (render))

(defn- ^:dev/after-load re-render
  "The `:dev/after-load` metadata causes this function to be called after
  shadow-cljs hot-reloads code. This function is called implicitly by its
  annotation."
  []
  (init))

