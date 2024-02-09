# Random Dungeon Generator

## Prerequisites to run locally
- The `git` CLI
- Either `python` or `node`, along with an HTTP server package. See step four below for details.

## How to run locally
1. Open up your terminal
2. `git clone` this repository somewhere on your local: `git clone https://github.com/andyfry01/random_dungeon_generator`
3. Next, `cd` into the `public` directory within the repo: `cd random_dungeon_generator/public`
4. Finally, run a file server within the public directory. There are a couple ways to do this:
    - If you have Python installed, you can run `python3 -m http.server --cgi 8080` (for Python 3) or `python -m SimpleHTTPServer 8080` (for Python 2)
    - If you have NPM and Node installed, you can install and run the `serve` package: install it via `npm i -g serve` and invoke it with `serve .`
    - Other similar tools will probably work: they just need to be able to start a web server with a file root in the `public` directory, and serve up `public/index.html`
5. Head to whatever port your webserver has started on (perhaps `localhost:8080`) and check it out!

## Some things you might like to know
![xkcd lisp comic](https://imgs.xkcd.com/comics/lisp_cycles.png)

This was written in a language called [ClojureScript](https://clojurescript.org/), which is a "hosted" [lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) language that targets JavaScript. Similar to how languages like Kotlin and Scala target the JVM.

(Ok ok it's more like a compiler for an alternative [Clojure](https://clojure.org/) runtime target than a separate language, don't worry about it)

It is a pure, functional language with a great standard library. I used a ton of the built in utility functions within the code (e.g.: [cond](https://clojuredocs.org/clojure.core/cond), [partition](https://clojuredocs.org/clojure.core/partition), [rand-nth](https://clojuredocs.org/clojure.core/rand-nth)). If you see something interesting you can look it up in [the Clojure cheatsheet](https://clojure.org/api/cheatsheet) to learn more about what the function does and to see examples.

The app uses a library called [Reagent](https://reagent-project.github.io/), a ClojureScript interface for [React](https://react.dev/), for state management and rendering.

## Further reading
Here are some more links if you'd like to learn more about any of the above:

- [Clojure for the Brave and True](https://www.braveclojure.com/clojure-for-the-brave-and-true/), one of the defacto books for learning about Clojure. Also hilarious.
- [Land of Lisp](http://landoflisp.com/), a book that's actually about Commmon Lisp, but nevertheless a good introduction to lisps in general.



