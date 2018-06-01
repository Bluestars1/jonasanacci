$.getJSON("https://sbm-it.github.io/fibonacci/jonasanacci.json")
 .then(function(x){
     sbmApps.insertApp(x)
     console.log('inserted jonasanacci jonasanacci.json')
  })