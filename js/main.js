require.config({
    baseUrl: 'js/lib',
    paths : {hgn: 'hgn'},
    hgn: {templateExtension: ".html"}
});

require(
    [
        'mout/src/object/size', 
        'mout/src/array/forEach', 
        'mout/src/string/contains', 
        'json!../../tools.json',
        'hgn!../../quantity-template',
        'hgn!../../project-template'
    ],
    function(size, forEach, contains, tools, template, projectTemplate){
        var data = {"quantity": {
                        "name": "total projects", 
                        "number":size(tools)
                    }};

        var projects = document.getElementById('projects')
                               .innerHTML = template(data);

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

