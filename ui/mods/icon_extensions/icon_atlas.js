(function() {
  // PA limitation.  Perhaps texture size? 315*52 ~= 2^14
  var maxIcons = 315
  var number = maxIcons - model.strategicIcons().length
  var extensions = new Array(number)
  for (var i = 0;i < number;i++) {
    var n = '00' + i.toString()
    var l = n.length
    extensions[i] = 'icon_' + n.slice(l-3, l)
  }
  model.strategicIcons(model.strategicIcons().concat(extensions))
  model.iconPool = model.iconPool || []
  model.iconPool = extensions.concat(model.iconPool)
})()
