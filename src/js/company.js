(function($){

    var mainfun = {
        init:function(){     
            this.handle();
        },
        dom:function(){

        },
        handle:function(){
            var that = this;
            $("#navs li").bind(startevent,function(){
                $("#navs li").removeClass("select");
                $(this).addClass("select");
            });
            $("#typenav li").bind(startevent,function(){
                var index = $(this).index();
                $("#typenav li").removeClass("select");
                $(this).addClass("select");
            });    
        }
    }

    mainfun.init();

})(jQuery)