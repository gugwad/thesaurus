/**
 * Copyright (c) 2014 Sagar Gugwad <http://sagargugwad.co.nr>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Filename router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/MainView',
  'models/DictionaryModel',
  'vm'
], function($, _, Backbone, MainView, DictionaryModel, ViewManager) {

  var Router = Backbone.Router.extend({
    routes: {
      "" : "home"
    }
  });

  var initialize = function( options ) {
    window.router = new Router();

    window.router.on("route:home", function() {
      var model = new DictionaryModel();
      mainView = ViewManager.create({}, 'mainView', MainView, {model : model});
    });

    Backbone.history.start();
  };

  return {initialize: initialize};
});