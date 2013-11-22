var Silence = Silence || {} ;

Silence.Lamb = {
  index: function(callback) {
    $.ajax({
      type: "GET",
      url: ""
    }).done(callback);
  },

  create: function(lambParams, callback) {
    $.ajax({
      type: "POST",
      url: "",
      data: lambParams
    }).done(callback);
  },

  update: function(lambParams, callback) {
    $.ajax({
      type: "PUT",
      url: "",
      data: lambParams
    }).done(callback);
  }
};

Silence.initialize = function() {
  console.log("gets chomp");
  $('#silenceLamby').on('click', Silence.createLamb);
};

Silence.createLamb = function(e) {
  e.preventDefault();
  var lambParams = {
    lamb: {
    }
  };
    Silence.Lamb.create(lambParams, Silence.getLamb);
};

$(document).ready(Silence.initialize);