/**
  扩展一个 API 模块
  直接调用接口API实现功能
**/
layui.define(['upload', 'layer'], function (exports) { //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var domain = 'https://www.tinywan.com';
  var upload = layui.upload;
  var layer = layui.layer;
  var obj = {
    // 显示弹框
    show: function (params) {
      //墨绿深蓝风
      layer.alert('墨绿风格，点击确认看深蓝', {
        skin: 'layui-layer-molv' //样式类名
        , closeBtn: 0
      }, function () {
        layer.alert('偶吧深蓝style', {
          skin: 'layui-layer-lan'
          , closeBtn: 0
          , anim: 4 //动画类型
        });
      });
    }

    /**
     * @author Tinywan
     * 图片转换为文字
     */
    , images_to_text: function (params) {
      var uploadInst = upload.render({
        elem: '#test1' //绑定元素
        // , url: 'upload.php' //上传接口
        , url: domain+'/tianchi/index/imageChangeTextContentPost' //上传接口
        , accept: 'file' //允许上传的文件类型
        // , size: 100 //最大允许上传的文件大小 单位 KB
        // , exts: 'zip|rar|7z' //允许上传的文件后缀
        // , field: 'chepai_file' //设定文件域的字段名
        , before: function (obj) { //obj参数包含的信息，跟 choose回调完全一致，可参见上文。
          layer.load(4, {
            shade: [0.8, '#393D49'],
            time: 3000
          }
          );
        }
        , done: function (res) {
          //上传完毕回调 {"code":0,"msg":"upload success","file_name":"const.rar"}
          layer.closeAll('loading'); //关闭loading
          if (res.code == 200) {
            //do something （比如将res返回的图片链接保存到表单的隐藏域）
            layer.open({
              type: 1 //Page层类型
              , area: ['600px', '600px']
              , title: '自动识别内容如下所示'
              , shade: 0.6 //遮罩透明度
              , maxmin: true //允许全屏最小化
              , anim: 5 //0-6的动画形式，-1不开启
              , content: '<div style="padding:10px;">' + res.data.content + '</div>'
            });
          } else {
            layer.alert(res.msg, {
              icon: 7,
              skin: 'layer-ext-moon'
            })
          }
          // layer.alert(JSON.stringify(res))
        }
        , error: function () { //请求异常回调
          layer.closeAll('loading'); //关闭loading
          layer.alert('请求异常回调', {
            icon: 7,
            skin: 'layer-ext-moon'
          })
        }
      });
    }
  };
  exports('openapi', obj);
});  