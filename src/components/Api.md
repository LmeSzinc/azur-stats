# API Documentation

碧蓝统计局上传 API 文档。

Upload API Documentation of Azur Stats. Sorry this doc is in Chinese, you may need a translator.



## 科研统计

有两种需要上传的情况：

1. 刷新科研列表
   - 需要一张刷新前的科研列表截图。
2. 收获科研。
   - 需要收获前的科研项目列表截图。列表中需要有一个项目的状态为已完成。
   - 需要获得物品列表截图，物品将被统计到 "科研项目列表截图" 中已完成的科研项目名下。若物品数量大于 10，则需要提供第三张截图，以展示剩余的物品。

需要上传的图片应当有 1 - 3 张。

注意：由于日服科研列表只显示大类名称，不显示具体项目名称，后台会把日服截图标记为无效。日服玩家可以不用参与科研统计。



## 图片要求

- 分辨率应为 1280x720，其他分辨率需要在上传前进行缩放，但不接受非 16:9 高宽比的截图。

- 色彩空间 RGB。

- PNG 编码，未经过有损压缩（例如 JPEG 编码）。

- 来自国服、国际服、日服、台服均可。

- 将所有需要上传的图片从上往下垂直排列，合并为一张图片。可参考以下 python 代码：

  ```python
  import cv2
  import numpy as np
  from PIL import Image
  
  
  def pack(img_list):
      """
      Stack images vertically.
  
      Args:
          img_list (list): List of pillow image
  
      Returns:
          Pillow image
      """
      img_list = [np.array(i) for i in img_list]
      image = cv2.vconcat(img_list)
      image = Image.fromarray(image, mode='RGB')
      return image
  ```

多张截图合并的结果应该是这样的：[示例图片](/static/img/UploadApiExample.png)

你可以向 API 上传这张图片来进行测试（这并不会导致重复统计）



## API

- 接口地址：https://azurstats.lyoko.io/api/upload/

- 请求类型：POST

- 限制：游客每天限制上传2000张，单张图片不得超过10M



 ### 请求参数 


| 参数名 | 类型   | 是否必须 | 参数说明                          |
| ------ | ------ | -------- | --------------------------------- |
| file   | file   | 是       | 支持jpg/jgeg/png/gif/bmp/webp格式 |
| token  | string | 否       | 如果传递token则视为管理员上传     |

### 返回值 

如果请求成功，返回结果如下

```json
{
  "code": 200,
  "id": 35,
  "imgid": "ead2649f723a346c",
  "relative_path": "/imgs/2019/10/ead2649f723a346c.png",
  "url": "http://azurstats.lyoko.io/imgs/2019/10/ead2649f723a346c.png",
  "thumbnail_url": "http://azurstats.lyoko.io/imgs/2019/10/ead2649f723a346c_thumb.png",
  "width": 1381,
  "height": 645,
  "delete": "http://azurstats.lyoko.io/delete/849a3ae44d87b641"
}
```

| 参数名        | 类型   | 参数说明                                   |
| ------------- | ------ | ------------------------------------------ |
| code          | int    | 状态码，200：成功，0：失败                 |
| id            | int    | id（唯一）                                 |
| imgid         | string | 图片id（唯一）                             |
| relative_path | string | 图片相对路径                               |
| url           | string | 图片URL                                    |
| thumbnail_url | string | 缩略图URL                                  |
| width         | int    | 图片宽                                     |
| height        | int    | 图片高                                     |
| delete        | string | 图片删除链接，若此图片之前已上传过，返回空 |

如果失败，返回结果为

```json
{"code":0,"msg":"The filetype you are attempting to upload is not allowed."}
```

- code: 状态码，200(成功),0(失败)
- msg: 失败原因

注意1：azurstats.lyoko.io 只是一个反向代理服务器，并且只反向代理了 /api/upload，其余都是静态内容。因此API 返回的连接都是无法访问的。

注意2：azurstats.lyoko.io 部署于中国大陆以外的地区，调用 API 时应注意超时和重试。

### 表明身份

调用接口时，客户端声明的 User-Agent 将被用作身份识别。建议使用以下格式的 User-Agent 来表明自身的客户端名称和客户端实例。

```
<ClientName> (<ClientID>)
```

例如：`ExampleClient (abc123**************************)`

因为统计是匿名的，所以 ClientID 没有具体意义，你可以使用随机的 32 位 Hash 来保持自身的匿名，也可以使用自己的昵称来暴露身份。但是无论如何，都建议在同一客户端实例内使用相同的 ClientID，以便后台追踪，同时应避免将自己的 ClientID 共享给他人使用。