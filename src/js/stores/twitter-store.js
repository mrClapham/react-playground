var AppDispatcher   = require("../dispatchers/app-dispatcher");
var AppConstatnts   = require("../constants/app-constatnts");
var merge           = require("react/lib/merge");
var EventEmmitter   = require("events").EventEmitter;
var $               = require('jquery');

var TWITTER_CHANGE_EVENT = "twitterChangeEvent";

var _tweets = []


// Declare variables to hold twitter API url and user name
var twitter_api_url = 'http://search.twitter.com/search.json';
var twitter_user    = 'lupomontero';

// Enable caching
$.ajaxSetup({ cache: true });

var _onTwitterResults = function(data) {
    console.log("TWEETS ARE : ",data);
}

var TwitterStore = merge(EventEmmitter.prototype, {
    emitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    getTweets:function(){
        return _tweets;
    },
    loadTwitterSearch : function(){
        console.log("Load Twitter Search called...")
        $.getJSON(twitter_api_url + '?callback=?&rpp=5&q=from:' + twitter_user, _onTwitterResults);
//This function returns the data as json object from server.

    },

    dt:AppDispatcher.register(function(payload){

        console.log("TWITTER PAYLOAD ", payload)
        var action = payload.action;
        switch(action.actionType){
            case AppConstatnts.TWITTER_CHANGED :
                _increaseCount(action.value)
                break;
        }
        AppStore.emitChange();
        return true;
    })
})

module.exports = TwitterStore;



