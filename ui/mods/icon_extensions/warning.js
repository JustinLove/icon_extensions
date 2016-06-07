(function() {
  var setupDialog = function() {
    $(".icon_extensions_dialog").dialog({
      dialogClass: "no-close",
      draggable: false,
      resizable: false,
      height: 400,
      width: 600,
      modal: true,
      autoOpen: true,
      buttons: {
          "OK": function () {
              $(this).dialog("close");
          }
      }
    });
  }

  //load html dynamically
  var loadTemplate = function (element, url, model) {
    element.load(url, function () {
      console.log("Loading html " + url);
      ko.applyBindings(model, element.get(0));
      setupDialog()
    });
  };

  var container = $('<div id="insertion_point"></div>')
  container.appendTo('body')
  loadTemplate(container, 'coui://ui/mods/icon_extensions/warning.html', model);
})()
