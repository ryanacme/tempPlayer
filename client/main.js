import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import $ from 'jquery';
import 'mediaelement/full';
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

Template.player.helpers({
  sounds: function(){
    return Sounds.find({});
  },
});