$(document).ready(function(){
   var apiKey = "94dc18323ec46ad8e5d2b1a45f2bb122";
    console.log(apiKey);







    $("#search-button").click(function(){
        console.log("coton de search clicleado");

        var search = $("#search").val();

        $.ajax({
        url: "https://gateway.marvel.com:443/v1/public/characters?apikey="  + apiKey + "&nameStartsWith=" + search,
            success: function(response){

                // diferent template
                var template = document.getElementById("template_content").innerHTML;
                console.log("template");

                var $characters = $("#characters");
                
                response.data.results.forEach(function(character){
                    // console.log(character);   
                    // console.log(character.name); 
                    var data = {
                        name: character.name,
                        description: character.description,
                        img: character.thumbnail.path + "." + character.thumbnail.extension,
                    } 
                    console.log(data);
                    var filledTemplate = fillTemplate(template,data);
                    console.log(filledTemplate);
                    $characters.append(filledTemplate);

                })
            }
        })

    })
});

// utilities
function fillTemplate(template, data) {
    for(var index in data){
        var value = data[index];
        template = template.replace(new RegExp('{{'+index+'}}', 'g'), escapeHtml(value) );
    };
    return template;
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}