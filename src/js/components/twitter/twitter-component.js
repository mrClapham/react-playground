/** @jsx React.DOM */
var React = require('react');
var AppActions = require("../../actions/app-actions");
var TwitterStore = require("../../stores/twitter-store");

var Twitter = React.createClass({
    proptypes:{},
    getDefaultProps:function(){
        return{};
    },
    getInitialState:function(){
        return{}
    },
    componentWillMount:function(){

    },
    componentDidMount:function(){
        TwitterStore.loadTwitterSearch();
    },
    componentWillUpdate:function(nextProps, nextState){

    },

    handleClick:function(){
       // AppActions.testAction(1);
    },
    render:function(){
        return (<div>
                <h3>TWITTER</h3>
        </div>)
    }

})

module.exports = Twitter;