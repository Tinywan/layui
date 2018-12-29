<?php

/**.-------------------------------------------------------------------------------------------------------------------
 * |  Github: https://github.com/Tinywan
 * |  Blog: http://www.cnblogs.com/Tinywan
 * |--------------------------------------------------------------------------------------------------------------------
 * |  Author: Tinywan(ShaoBo Wan)
 * |  DateTime: 2018/12/28 16:48
 * |  Mail: 756684177@qq.com
 * |  Desc: 描述信息
 * '------------------------------------------------------------------------------------------------------------------*/
// {
// "name": "QQ截图20181228133225.png",
// "type": "image/png",
// "tmp_name": "C:\\Windows\\php6A67.tmp",
// "error": 0,
// "size": 146273
// }
$res = [
    'code' => 0,
    'msg' => 'upload file',
    'data' => $_FILES["file"],
];
exit(json_encode($res));
if (file_exists("upload/" . $_FILES["file"]["name"])) {
    $res = [
        'code' => -1,
        'msg' => 'upload file',
        'data' => $_FILES["file"]["name"],
    ];
    exit(json_encode($res));
} else {
     // 如果 upload 目录不存在该文件则将文件上传到 upload 目录下
    move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
    $res = [
        'code' => 0,
        'msg' => 'upload success',
        'data' => $_FILES["file"]["name"],
    ];
    exit(json_encode($res));
}