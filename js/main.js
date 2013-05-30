var DEFAULT_HASH = 'home';

//setup crossroads
var route1 = crossroads.addRoute('/home');
var route2 = crossroads.addRoute('/about');

crossroads.routed.add(function(request, data){
    
});


//setup hasher

//only required if you want to set a default value
if(! hasher.getHash()){
    hasher.setHash(DEFAULT_HASH);
}

function parseHash(newHash, oldHash){
    // second parameter of crossroads.parse() is the "defaultArguments" and should be an array
    // so we ignore the "oldHash" argument to avoid issues.
    crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes

hasher.init(); //start listening for hash changes