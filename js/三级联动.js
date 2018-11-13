window.onload = function () {
    var pre = document.getElementById("pre");
    var city = document.getElementById("city");
    var area = document.getElementById("area");

    var pres = ["天津市","北京市","河北省"];
    var cities = [["河西区","河东区"],
        ["海淀区","朝阳区"],
        ["保定市","唐山市"]];
    var areas = [[["西一","西二"],["西三","西四"]],
        [["西三环","西四环"],["东三环","东四环"]],
        [["东风路","裕华路"],["建设路","华岩路"]]];

    //抽象添加select的方法
    function addArea(arr,sel) {
        if (arr.length>0){
            for(var i=0;i<arr.length;i++){
                var option = new Option(arr[i],i);
                sel.appendChild(option);
            }
        }

    }
    addArea(pres,pre);
    //改变省市的下拉框之后追加到city
    pre.onchange = function () {
        city.options.length = 1;
        var index = this.value;
        if (index != -1) {
            var cArr = cities[index];
            middle = areas[index];
            addArea(cArr,city);
        }

    }
    //设置一个中间变量
    var middle;
    //改变city的下拉框之后追加到area
    city.onchange = function () {
        area.options.length = 1;
        var index = this.value;
        if (index != -1) {
            var as = middle[index];
            addArea(as,area);
        }

    }

}
