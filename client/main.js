import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import $ from 'jquery';
// import 'mediaelement/full';
import './main.html';


// var player = new MediaElement('player', {
//    pluginPath: '/packages/johndyer_mediaelement/build/',
//     success: function(mediaElement, originalNode) {
//       console.log("111111111111");
//     }
//   });




// Template.player.onRendered(function() {
//   $('video, audio').mediaelementplayer({
// 	   pluginPath: '/packages/johndyer_mediaelement/build/',
//   });
// });

// Meteor.subscribe('sounds', function onReady() {
//   Session.set('tasksLoaded', true);
// });

Meteor.subscribe('sounds');

Template.player.helpers({
  sounds: function(){
    var obj = Sounds.find().fetch();
    // if (obj.length>0){
      var obj2 = [{_id: "pe6x76NkJXbm4wh8Q", snd_alt: "Sound 3"}, {_id: "WNbZ63ffdny5NPkuD", snd_alt: "Sound 4"}]
      console.log("hiiiiii");
      console.log(obj);
      console.log(obj2);
      // console.log(typeof obj);
      // console.log(Array.isArray(obj2));
      // return obj;
      return obj;
    // }
    // console.log("00000000000");
    // return [1,2];
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