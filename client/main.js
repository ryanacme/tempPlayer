import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import $ from 'jquery';
// import 'mediaelement/full';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.player.onRendered(function() {

  $('video, audio').mediaelementplayer({
	// pluginPath: '/packages/johndyer_mediaelement/build/',
  });
  // console.log("hiiiii");
});

Meteor.subscribe('sounds', function onReady() {
  Session.set('tasksLoaded', true);
});


Template.player.helpers({
  sounds: function(){
    var obj = Sounds.find();
    // if (obj.length>0){
      var obj2 = [{_id: "pe6x76NkJXbm4wh8Q", snd_alt: "Sound 3"}, {_id: "WNbZ63ffdny5NPkuD", snd_alt: "Sound 4"}]
      console.log("hiiiiii");
      console.log(obj);
      console.log(obj2);
      // console.log(typeof obj);
      // console.log(Array.isArray(obj2));
      // return obj;
      return obj;
    // }else{
      // console.log("000000000");
      // return null;
    // }
    // console.log(obj);
    // return [1,2,3];
  },

  tasksLoaded: function () {
    return Session.get('tasksLoaded');
  },
});