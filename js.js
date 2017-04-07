(function(){
    function createData(obj) {
        var data = obj;

        return{
            getName:function(obj){
                return data[obj];
            },
            setName: function(obj,name){
                if(obj && name){
                    data[obj] = name;
                }
            }
        }

    }
    var data = createData({});

    data.setName("name", "Janek");

    console.log( data.getName("name") );
})();