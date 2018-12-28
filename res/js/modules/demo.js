layui.define(['element','jquery'], function (exports) {
    var el = layui.element;
    var $ = layui.$;
    //do something
    function demo() {
        alert("DEMO")
    }
    exports('demo', function () {
        return demo;
    });
});