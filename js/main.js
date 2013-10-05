require.config({
    baseUrl: 'js/lib',
    paths : {
        domReady: 'domReady/domReady',
        text: 'text/text',
        json: 'requirejs-plugins/src/json',
        hogan: 'requirejs-hogan-plugin/hogan',
        hgn: 'requirejs-hogan-plugin/hgn'
    },
    hgn: {templateExtension: ".html"}
});

require(
    [
        'mout/src/object/size', 
        'mout/src/array/forEach', 
        'mout/src/string/contains', 
        'json!../../tools.json',
        'hgn!../../quantity-template',
        'hgn!../../project-template',
        'domReady'
    ],
    function(size, forEach, contains, tools, template, projectTemplate){
        var data = {
            "quantity": {
                "name": "total projects", 
                "number":size(tools)
            }
        };
        document.getElementById('projects').innerHTML = template(data);
        document.getElementById('search')
                .addEventListener("keyup", function(){
                    var value = this.value;
                    document.getElementById('projects').innerHTML  = '';
                    document.getElementById('look')
                            .innerHTML  = 'look for ' + value;
                    tools.filter(function(a){
                        forEach(a.meta,function(meta){
                            if (contains(meta, value)){
                                document.getElementById('projects')
                                        .innerHTML += projectTemplate(a);
                            }
                        });
                    });
                }, false);
    }
);

