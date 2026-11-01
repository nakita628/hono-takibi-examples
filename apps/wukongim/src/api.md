<h1 id="wukongim-api">WuKongIM API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

WuKongIM is a high-performance instant messaging system. This API documentation covers all REST endpoints for managing users, channels, messages, connections, and system operations.

Base URLs:

* <a href="http://localhost:5001">http://localhost:5001</a> - Local development server

* <a href="https://api.wukongim.com">https://api.wukongim.com</a> - Production server

Web: <a href="https://github.com/WuKongIM/WuKongIM">WuKongIM Team</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="wukongim-api-system">System</h1>

System health and status endpoints

## Health Check

> Code samples

```bash
curl https://api.wukongim.com/health \
  -H 'Accept: application/json'
```

`GET /health`

Check the health status of the WuKongIM server and cluster

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 500 Response

```json
{
  "status": "error",
  "message": "Cluster status check failed"
}
```

<h3 id="health-check-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Server is healthy|Inline|
|500|Internal Server Error|Server is unhealthy|Inline|

<h3 id="health-check-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|message|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Migration Result

> Code samples

```bash
curl https://api.wukongim.com/migrate/result \
  -H 'Accept: application/json'
```

`GET /migrate/result`

Get the result of database migration operations

> Example responses

> 200 Response

```json
{
  "status": "string",
  "message": "string"
}
```

<h3 id="get-migration-result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Migration result|Inline|

<h3 id="get-migration-result-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Migration status|
|message|string|false|none|Migration message|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-route">Route</h1>

User routing and connection address endpoints

## Get User IM Address

> Code samples

```bash
curl https://api.wukongim.com/route \
  -H 'Accept: application/json'
```

`GET /route`

Get the IM connection address for users

<h3 id="get-user-im-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intranet|query|integer|false|Whether to return intranet address (1 for true, 0 for false)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intranet|0|
|intranet|1|

> Example responses

> 200 Response

```json
{
  "tcp_addr": "127.0.0.1:5100",
  "ws_addr": "ws://127.0.0.1:5200",
  "wss_addr": "wss://127.0.0.1:5300"
}
```

<h3 id="get-user-im-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|IM connection addresses|[IMAddressResponse](#schemaimaddressresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Batch Get User IM Addresses

> Code samples

```bash
curl https://api.wukongim.com/route/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "user1",
    "user2",
    "user3"
  ]'
```

`POST /route/batch`

Get IM connection addresses for multiple users

> Body parameter

```json
[
  "user1",
  "user2",
  "user3"
]
```

<h3 id="batch-get-user-im-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|intranet|query|integer|false|Whether to return intranet address (1 for true, 0 for false)|
|body|body|[string]|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|intranet|0|
|intranet|1|

> Example responses

> 200 Response

```json
[
  {
    "uids": [
      "string"
    ],
    "tcp_addr": "127.0.0.1:5100",
    "ws_addr": "ws://127.0.0.1:5200",
    "wss_addr": "wss://127.0.0.1:5300"
  }
]
```

<h3 id="batch-get-user-im-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch IM connection addresses|Inline|

<h3 id="batch-get-user-im-addresses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BatchIMAddressResponse](#schemabatchimaddressresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-user">User</h1>

User management and authentication endpoints

## Update User Token

> Code samples

```bash
curl https://api.wukongim.com/user/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "token": "new_auth_token_here",
    "device_flag": 1,
    "device_level": 1
  }'
```

`POST /user/token`

Update authentication token for a user

> Body parameter

```json
{
  "uid": "user123",
  "token": "new_auth_token_here",
  "device_flag": 1,
  "device_level": 1
}
```

<h3 id="update-user-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateTokenRequest](#schemaupdatetokenrequest)|true|none|
|» uid|body|string|true|none|
|» token|body|string|true|none|
|» device_flag|body|integer|false|none|
|» device_level|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="update-user-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Token updated successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Force Device Quit

> Code samples

```bash
curl https://api.wukongim.com/user/device_quit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "device_flag": 1
  }'
```

`POST /user/device_quit`

Force a user device to quit/disconnect

> Body parameter

```json
{
  "uid": "user123",
  "device_flag": 1
}
```

<h3 id="force-device-quit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceQuitRequest](#schemadevicequitrequest)|true|none|
|» uid|body|string|true|none|
|» device_flag|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="force-device-quit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Device quit successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get User Online Status

> Code samples

```bash
curl https://api.wukongim.com/user/onlinestatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "user1",
    "user2",
    "user3"
  ]'
```

`POST /user/onlinestatus`

Get online status for multiple users

> Body parameter

```json
[
  "user1",
  "user2",
  "user3"
]
```

<h3 id="get-user-online-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "uid": "user123",
    "online": 1,
    "device_flag": 1
  }
]
```

<h3 id="get-user-online-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User online status|Inline|

<h3 id="get-user-online-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OnlineStatusResponse](#schemaonlinestatusresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get System UIDs

> Code samples

```bash
curl https://api.wukongim.com/user/systemuids \
  -H 'Accept: application/json'
```

`GET /user/systemuids`

Get list of system user IDs

> Example responses

> 200 Response

```json
[
  "system",
  "admin",
  "bot"
]
```

<h3 id="get-system-uids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of system UIDs|Inline|

<h3 id="get-system-uids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add System UIDs

> Code samples

```bash
curl https://api.wukongim.com/user/systemuids_add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uids": [
      "system",
      "admin",
      "bot"
    ]
  }'
```

`POST /user/systemuids_add`

Add users to system UID list

> Body parameter

```json
{
  "uids": [
    "system",
    "admin",
    "bot"
  ]
}
```

<h3 id="add-system-uids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SystemUidsRequest](#schemasystemuidsrequest)|true|none|
|» uids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="add-system-uids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System UIDs added successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove System UIDs

> Code samples

```bash
curl https://api.wukongim.com/user/systemuids_remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uids": [
      "system",
      "admin",
      "bot"
    ]
  }'
```

`POST /user/systemuids_remove`

Remove users from system UID list

> Body parameter

```json
{
  "uids": [
    "system",
    "admin",
    "bot"
  ]
}
```

<h3 id="remove-system-uids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SystemUidsRequest](#schemasystemuidsrequest)|true|none|
|» uids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="remove-system-uids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System UIDs removed successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add System UIDs to Cache

> Code samples

```bash
curl https://api.wukongim.com/user/systemuids_add_to_cache \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uids": [
      "system",
      "admin",
      "bot"
    ]
  }'
```

`POST /user/systemuids_add_to_cache`

Add system UIDs to cache only (internal use)

> Body parameter

```json
{
  "uids": [
    "system",
    "admin",
    "bot"
  ]
}
```

<h3 id="add-system-uids-to-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SystemUidsRequest](#schemasystemuidsrequest)|true|none|
|» uids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="add-system-uids-to-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System UIDs added to cache successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove System UIDs from Cache

> Code samples

```bash
curl https://api.wukongim.com/user/systemuids_remove_from_cache \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uids": [
      "system",
      "admin",
      "bot"
    ]
  }'
```

`POST /user/systemuids_remove_from_cache`

Remove system UIDs from cache only (internal use)

> Body parameter

```json
{
  "uids": [
    "system",
    "admin",
    "bot"
  ]
}
```

<h3 id="remove-system-uids-from-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SystemUidsRequest](#schemasystemuidsrequest)|true|none|
|» uids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="remove-system-uids-from-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System UIDs removed from cache successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Plugin Number

> Code samples

```bash
curl https://api.wukongim.com/user/update_plugin_no \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "plugin_no": "plugin_001"
  }'
```

`POST /user/update_plugin_no`

Update plugin number for a user

> Body parameter

```json
{
  "uid": "user123",
  "plugin_no": "plugin_001"
}
```

<h3 id="update-plugin-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdatePluginNoRequest](#schemaupdatepluginnorequest)|true|none|
|» uid|body|string|true|User ID|
|» plugin_no|body|string|true|Plugin number|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="update-plugin-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plugin number updated successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-connection">Connection</h1>

Connection management endpoints

## Remove Connection

> Code samples

```bash
curl https://api.wukongim.com/conn/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "conn_id": 12345,
    "node_id": 1,
    "op_node_id": 1
  }'
```

`POST /conn/remove`

Remove a specific user connection

> Body parameter

```json
{
  "uid": "user123",
  "conn_id": 12345,
  "node_id": 1,
  "op_node_id": 1
}
```

<h3 id="remove-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionRequest](#schemaconnectionrequest)|true|none|
|» uid|body|string|true|none|
|» conn_id|body|integer(int64)|true|none|
|» node_id|body|integer(int64)|false|none|
|» op_node_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="remove-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection removed successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Kick Connection

> Code samples

```bash
curl https://api.wukongim.com/conn/kick \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "conn_id": 12345,
    "node_id": 1,
    "op_node_id": 1
  }'
```

`POST /conn/kick`

Kick/disconnect a specific user connection

> Body parameter

```json
{
  "uid": "user123",
  "conn_id": 12345,
  "node_id": 1,
  "op_node_id": 1
}
```

<h3 id="kick-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConnectionRequest](#schemaconnectionrequest)|true|none|
|» uid|body|string|true|none|
|» conn_id|body|integer(int64)|true|none|
|» node_id|body|integer(int64)|false|none|
|» op_node_id|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="kick-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection kicked successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-channel">Channel</h1>

Channel and group management endpoints

## Create or Update Channel | 创建或更新频道

> Code samples

```bash
curl https://api.wukongim.com/channel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "large": 0,
    "ban": 0,
    "send_ban": 0,
    "subscribers": [
      "user1",
      "user2",
      "user3"
    ]
  }'
```

`POST /channel`

Create a new channel or update an existing channel with basic information and initial subscribers. This is the primary endpoint for channel management.

**功能说明：**
- 创建新频道或更新现有频道
- 设置频道基本信息（大群、禁言、解散等状态）
- 添加初始订阅者（不支持个人频道）
- 支持重置订阅者列表
- 个人频道支持陌生人消息设置

**Channel Types:**
- 1: Person channel (个人频道) - Direct messaging
- 2: Group channel (群组频道) - Group messaging
- Other values: Custom channel types

**Important Notes:**
- Person channels (channel_type=1) do not support subscribers
- Use reset=1 to replace all existing subscribers
- Special characters in channel_id are not allowed
- System will automatically route to appropriate cluster node

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "large": 0,
  "ban": 0,
  "send_ban": 0,
  "subscribers": [
    "user1",
    "user2",
    "user3"
  ]
}
```

<h3 id="create-or-update-channel-创建或更新频道-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelCreateRequest](#schemachannelcreaterequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» large|body|integer|false|Whether it's a large group (0=no, 1=yes). Large groups have different performance characteristics.|
|» ban|body|integer|false|Whether the channel is banned (0=no, 1=yes). Banned channels prevent all users from sending/receiving messages except system accounts.|
|» disband|body|integer|false|Whether the channel is disbanded (0=no, 1=yes). Disbanded channels are marked as deleted.|
|» send_ban|body|integer|false|Whether sending messages is banned (0=no, 1=yes). When enabled, all members cannot send messages but can receive them. For person channels, the user can receive but not send messages.|
|» allow_stranger|body|integer|false|Whether to allow strangers to send messages (0=no, 1=yes). Currently only supported for person channels. When enabled, strangers can send messages to the user.|
|» reset|body|integer|false|Whether to reset subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.|
|» subscribers|body|[string]|false|List of initial subscriber user IDs. Not supported for person channels (channel_type=1).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» large|0|
|» large|1|
|» ban|0|
|» ban|1|
|» disband|0|
|» disband|1|
|» send_ban|0|
|» send_ban|1|
|» allow_stranger|0|
|» allow_stranger|1|
|» reset|0|
|» reset|1|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="create-or-update-channel-创建或更新频道-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Channel created/updated successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update Channel Info | 更新频道信息

> Code samples

```bash
curl https://api.wukongim.com/channel/info \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "large": 1,
    "ban": 0,
    "send_ban": 0
  }'
```

`POST /channel/info`

Update or add channel basic information without affecting subscribers. This endpoint only modifies channel metadata and settings.

**功能说明：**
- 更新或添加频道基本信息
- 不影响现有订阅者
- 支持设置大群、禁言、解散等状态
- 个人频道支持陌生人消息设置
- 自动路由到相应集群节点

**Use Cases:**
- Change channel ban status
- Enable/disable large group mode
- Update send ban settings
- Configure stranger message permissions for person channels

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "large": 1,
  "ban": 0,
  "send_ban": 0
}
```

<h3 id="update-channel-info-更新频道信息-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelInfoRequest](#schemachannelinforequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» large|body|integer|false|Whether it's a large group (0=no, 1=yes)|
|» ban|body|integer|false|Whether the channel is banned (0=no, 1=yes)|
|» disband|body|integer|false|Whether the channel is disbanded (0=no, 1=yes)|
|» send_ban|body|integer|false|Whether sending messages is banned (0=no, 1=yes)|
|» allow_stranger|body|integer|false|Whether to allow strangers to send messages (0=no, 1=yes). Only supported for person channels.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» large|0|
|» large|1|
|» ban|0|
|» ban|1|
|» disband|0|
|» disband|1|
|» send_ban|0|
|» send_ban|1|
|» allow_stranger|0|
|» allow_stranger|1|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="update-channel-info-更新频道信息-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Channel info updated successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Channel | 删除频道

> Code samples

```bash
curl https://api.wukongim.com/channel/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2
  }'
```

`POST /channel/delete`

Delete a channel permanently. This will disband the channel and clear all messages. Not supported for person channels.

**功能说明：**
- 永久删除频道
- 解散频道并清除所有消息
- 不支持个人频道（channel_type=1）
- 会自动清理相关订阅者和会话
- 操作不可逆，请谨慎使用

**Warning:** This operation is irreversible. All channel data including messages, subscribers, and settings will be permanently lost.

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

<h3 id="delete-channel-删除频道-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelDeleteRequest](#schemachanneldeleterequest)|true|none|
|» channel_id|body|string|true|Channel ID to delete. Cannot be empty.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 1 (person channel). (2=group, etc.)|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="delete-channel-删除频道-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Channel deleted successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Channel Subscribers | 添加频道订阅者

> Code samples

```bash
curl https://api.wukongim.com/channel/subscriber_add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "reset": 0,
    "subscribers": [
      "user4",
      "user5"
    ]
  }'
```

`POST /channel/subscriber_add`

Add subscribers to a channel. Not supported for person channels. Will create the channel if it doesn't exist.

**功能说明：**
- 向频道添加订阅者
- 不支持个人频道（channel_type=1）
- 如果频道不存在会自动创建
- 支持重置现有订阅者
- 会自动创建相关会话

**Use Cases:**
- Add new members to a group
- Bulk add subscribers
- Reset entire subscriber list
- Create channel with initial subscribers

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "reset": 0,
  "subscribers": [
    "user4",
    "user5"
  ]
}
```

<h3 id="add-channel-subscribers-添加频道订阅者-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberAddRequest](#schemasubscriberaddrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Defaults to 2 (group) if 0. Cannot be 1 (person channel).|
|» reset|body|integer|false|Whether to reset existing subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.|
|» temp_subscriber|body|integer|false|Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.|
|» subscribers|body|[string]|true|List of user IDs to add as subscribers. Cannot be empty.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reset|0|
|» reset|1|
|» temp_subscriber|0|
|» temp_subscriber|1|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="add-channel-subscribers-添加频道订阅者-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscribers added successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Channel Subscribers | 移除频道订阅者

> Code samples

```bash
curl https://api.wukongim.com/channel/subscriber_remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "temp_subscriber": 0,
    "subscribers": [
      "user1",
      "user2",
      "user3"
    ]
  }'
```

`POST /channel/subscriber_remove`

Remove subscribers from a channel. Not supported for person channels. Will also delete their conversations with the channel.

**功能说明：**
- 从频道移除订阅者
- 不支持个人频道（channel_type=1）
- 会自动删除被移除用户的相关会话
- 被移除用户将无法接收频道消息

**Use Cases:**
- Remove members from a group
- Bulk remove subscribers
- Clean up inactive users
- Manage group membership

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "temp_subscriber": 0,
  "subscribers": [
    "user1",
    "user2",
    "user3"
  ]
}
```

<h3 id="remove-channel-subscribers-移除频道订阅者-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubscriberRemoveRequest](#schemasubscriberremoverequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 1 (person channel). (2=group, etc.)|
|» temp_subscriber|body|integer|false|Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.|
|» subscribers|body|[string]|true|List of user IDs to remove from subscribers. Cannot be empty.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» temp_subscriber|0|
|» temp_subscriber|1|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="remove-channel-subscribers-移除频道订阅者-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscribers removed successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove All Channel Subscribers | 移除频道所有订阅者

> Code samples

```bash
curl https://api.wukongim.com/channel/subscriber_remove_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2
  }'
```

`POST /channel/subscriber_remove_all`

Remove all subscribers from a channel. Not supported for person channels. Will also delete all related conversations and tags.

**功能说明：**
- 移除频道的所有订阅者
- 不支持个人频道（channel_type=1）
- 会自动删除所有相关会话
- 会清除频道标签（tag）

**Use Cases:**
- Clear all members from a group
- Reset channel membership
- Prepare channel for deletion

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

<h3 id="remove-all-channel-subscribers-移除频道所有订阅者-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelRequest](#schemachannelrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty.|
|» channel_type|body|integer(uint8)|true|Channel type (1=person, 2=group, etc.)|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="remove-all-channel-subscribers-移除频道所有订阅者-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All subscribers removed successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Set Temporary Channel Subscribers | 设置临时频道订阅者

> Code samples

```bash
curl https://api.wukongim.com/tmpchannel/subscriber_set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "tmp_channel_123",
    "uids": [
      "user1",
      "user2",
      "user3"
    ]
  }'
```

`POST /tmpchannel/subscriber_set`

Set subscribers for a temporary channel. This is an internal API used for cluster node communication to manage temporary channel subscriptions.

**功能说明：**
- 设置临时频道的订阅者
- 这是内部API，用于集群节点间通信
- 临时频道用于特殊场景，如临时群组或会话
- 会自动创建和管理频道标签（tag）

**注意：** 此接口主要用于系统内部调用，不建议外部直接使用。

> Body parameter

```json
{
  "channel_id": "tmp_channel_123",
  "uids": [
    "user1",
    "user2",
    "user3"
  ]
}
```

<h3 id="set-temporary-channel-subscribers-设置临时频道订阅者-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TmpChannelSubscriberSetRequest](#schematmpchannelsubscribersetrequest)|true|none|
|» channel_id|body|string|true|Temporary channel ID. Cannot contain special characters.|
|» uids|body|[string]|true|List of user IDs to set as subscribers for the temporary channel|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="set-temporary-channel-subscribers-设置临时频道订阅者-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Temporary channel subscribers set successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Channel Blacklist | 添加频道黑名单

> Code samples

```bash
curl https://api.wukongim.com/channel/blacklist_add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/blacklist_add`

Add users to channel blacklist. Blacklisted users cannot send or receive messages in the channel and their conversations will be deleted.

**功能说明：**
- 将用户添加到频道黑名单
- 黑名单用户无法在频道中发送或接收消息
- 会自动删除黑名单用户的相关会话
- 不支持个人频道（channel_type=1）
- 直播频道（live channel）不处理会话删除

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="add-channel-blacklist-添加频道黑名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlacklistRequest](#schemablacklistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from blacklist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="add-channel-blacklist-添加频道黑名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users added to blacklist successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Blacklist | 设置频道黑名单

> Code samples

```bash
curl https://api.wukongim.com/channel/blacklist_set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/blacklist_set`

Set (replace) the entire blacklist for a channel. This will remove all existing blacklist entries and replace them with the provided list.

**功能说明：**
- 设置（替换）频道的完整黑名单
- 会先清除所有现有黑名单条目，然后添加新的条目
- 如果UIDs为空，则清空整个黑名单
- 会自动删除黑名单用户的相关会话
- 直播频道（live channel）不处理会话删除

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="set-channel-blacklist-设置频道黑名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlacklistRequest](#schemablacklistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from blacklist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "频道ID不能为空！"
}
```

> 500 Response

```json
{
  "error": "移除所有黑名单失败！"
}
```

<h3 id="set-channel-blacklist-设置频道黑名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Blacklist set successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Channel Blacklist | 移除频道黑名单

> Code samples

```bash
curl https://api.wukongim.com/channel/blacklist_remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/blacklist_remove`

Remove specific users from channel blacklist. Removed users will have their conversations restored if applicable.

**功能说明：**
- 从频道黑名单中移除指定用户
- 会恢复被移除用户的会话（如果适用）
- 直播频道（live channel）不处理会话恢复

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="remove-channel-blacklist-移除频道黑名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlacklistRequest](#schemablacklistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from blacklist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "移除黑名单失败！"
}
```

<h3 id="remove-channel-blacklist-移除频道黑名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users removed from blacklist successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove All Channel Blacklist | 移除频道所有黑名单

> Code samples

```bash
curl https://api.wukongim.com/channel/blacklist_remove_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2
  }'
```

`POST /channel/blacklist_remove_all`

Remove all users from channel blacklist.

**功能说明：**
- 移除频道的所有黑名单用户
- 清空后所有之前被拉黑的用户可以重新访问频道
- 支持所有频道类型

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

<h3 id="remove-all-channel-blacklist-移除频道所有黑名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelRequest](#schemachannelrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty.|
|» channel_type|body|integer(uint8)|true|Channel type (1=person, 2=group, etc.)|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="remove-all-channel-blacklist-移除频道所有黑名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All blacklist entries removed successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add Channel Whitelist | 添加频道白名单

> Code samples

```bash
curl https://api.wukongim.com/channel/whitelist_add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/whitelist_add`

Add users to channel whitelist. Only whitelisted users can send messages to the channel when whitelist mode is enabled.

**功能说明：**
- 将用户添加到频道白名单
- 启用白名单模式时，只有白名单用户可以向频道发送消息
- 对于个人频道，会自动创建相关会话
- 支持所有频道类型

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="add-channel-whitelist-添加频道白名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WhitelistRequest](#schemawhitelistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from whitelist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "添加白名单失败！"
}
```

<h3 id="add-channel-whitelist-添加频道白名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users added to whitelist successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Set Channel Whitelist | 设置频道白名单

> Code samples

```bash
curl https://api.wukongim.com/channel/whitelist_set \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/whitelist_set`

Set (replace) the entire whitelist for a channel. This will remove all existing whitelist entries and replace them with the provided list.

**功能说明：**
- 设置（替换）频道的完整白名单
- 会先清除所有现有白名单条目，然后添加新的条目
- 如果UIDs为空，则清空整个白名单
- 支持所有频道类型

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="set-channel-whitelist-设置频道白名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WhitelistRequest](#schemawhitelistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from whitelist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "频道ID不能为空！"
}
```

> 500 Response

```json
{
  "error": "移除所有白明单失败！"
}
```

<h3 id="set-channel-whitelist-设置频道白名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Whitelist set successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Channel Whitelist | 移除频道白名单

> Code samples

```bash
curl https://api.wukongim.com/channel/whitelist_remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2,
    "uids": [
      "user1",
      "user2"
    ]
  }'
```

`POST /channel/whitelist_remove`

Remove specific users from channel whitelist.

**功能说明：**
- 从频道白名单中移除指定用户
- 移除后用户将无法向频道发送消息（如果启用白名单模式）
- 支持所有频道类型

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

<h3 id="remove-channel-whitelist-移除频道白名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WhitelistRequest](#schemawhitelistrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty or contain special characters.|
|» channel_type|body|integer(uint8)|true|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|» uids|body|[string]|false|List of user IDs to add/remove from whitelist. Required for add/remove operations, optional for set operation.|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "移除白名单失败！"
}
```

<h3 id="remove-channel-whitelist-移除频道白名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Users removed from whitelist successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove All Channel Whitelist | 移除频道所有白名单

> Code samples

```bash
curl https://api.wukongim.com/channel/whitelist_remove_all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "group123",
    "channel_type": 2
  }'
```

`POST /channel/whitelist_remove_all`

Remove all users from channel whitelist.

**功能说明：**
- 移除频道的所有白名单用户
- 清空后如果频道启用白名单模式，将没有用户可以发送消息
- 支持所有频道类型

> Body parameter

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

<h3 id="remove-all-channel-whitelist-移除频道所有白名单-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelRequest](#schemachannelrequest)|true|none|
|» channel_id|body|string|true|Channel ID. Cannot be empty.|
|» channel_type|body|integer(uint8)|true|Channel type (1=person, 2=group, etc.)|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

> 400 Response

```json
{
  "error": "channel_id不能为空！"
}
```

> 500 Response

```json
{
  "error": "获取频道所在节点失败！"
}
```

<h3 id="remove-all-channel-whitelist-移除频道所有白名单-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|All whitelist entries removed successfully|[SuccessResponse](#schemasuccessresponse)|
|400|Bad Request|Bad request - invalid parameters|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Internal server error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Channel Whitelist

> Code samples

```bash
curl 'https://api.wukongim.com/channel/whitelist?channel_id=string&channel_type=0' \
  -H 'Accept: application/json'
```

`GET /channel/whitelist`

Get channel whitelist users

<h3 id="get-channel-whitelist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|query|string|true|Channel ID|
|channel_type|query|integer(int8)|true|Channel type|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="get-channel-whitelist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Channel whitelist users|Inline|

<h3 id="get-channel-whitelist-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-message">Message</h1>

Message sending and management endpoints

## Send Message

> Code samples

```bash
curl https://api.wukongim.com/message/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "header": {
      "no_persist": 0,
      "red_dot": 1,
      "sync_once": 0
    },
    "client_msg_no": "client_msg_123",
    "stream_no": "stream_456",
    "from_uid": "user123",
    "channel_id": "group123",
    "channel_type": 2,
    "expire": 0,
    "subscribers": [
      "string"
    ],
    "payload": "SGVsbG8gV29ybGQ=",
    "tag_key": "important"
  }'
```

`POST /message/send`

Send a message to a channel

> Body parameter

```json
{
  "header": {
    "no_persist": 0,
    "red_dot": 1,
    "sync_once": 0
  },
  "client_msg_no": "client_msg_123",
  "stream_no": "stream_456",
  "from_uid": "user123",
  "channel_id": "group123",
  "channel_type": 2,
  "expire": 0,
  "subscribers": [
    "string"
  ],
  "payload": "SGVsbG8gV29ybGQ=",
  "tag_key": "important"
}
```

<h3 id="send-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageSendRequest](#schemamessagesendrequest)|true|none|
|» header|body|[MessageHeader](#schemamessageheader)|false|none|
|» client_msg_no|body|string|false|none|
|» stream_no|body|string|false|none|
|» from_uid|body|string|false|none|
|» channel_id|body|string|false|none|
|» channel_type|body|integer(int8)|false|none|
|» expire|body|integer(int32)|false|Message expiration time in seconds|
|» subscribers|body|[string]|false|Specific subscribers to send message to|
|» payload|body|string(byte)|true|Base64 encoded message content|
|» tag_key|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message_id": 123456789,
  "message_seq": 1001,
  "client_msg_no": "client_msg_123"
}
```

<h3 id="send-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message sent successfully|[MessageSendResponse](#schemamessagesendresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Send Batch Messages

> Code samples

```bash
curl https://api.wukongim.com/message/sendbatch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "header": {
        "no_persist": 0,
        "red_dot": 1,
        "sync_once": 0
      },
      "client_msg_no": "client_msg_123",
      "stream_no": "stream_456",
      "from_uid": "user123",
      "channel_id": "group123",
      "channel_type": 2,
      "expire": 0,
      "subscribers": [
        "string"
      ],
      "payload": "SGVsbG8gV29ybGQ=",
      "tag_key": "important"
    }
  ]'
```

`POST /message/sendbatch`

Send multiple messages in batch

> Body parameter

```json
[
  {
    "header": {
      "no_persist": 0,
      "red_dot": 1,
      "sync_once": 0
    },
    "client_msg_no": "client_msg_123",
    "stream_no": "stream_456",
    "from_uid": "user123",
    "channel_id": "group123",
    "channel_type": 2,
    "expire": 0,
    "subscribers": [
      "string"
    ],
    "payload": "SGVsbG8gV29ybGQ=",
    "tag_key": "important"
  }
]
```

<h3 id="send-batch-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[[MessageSendRequest](#schemamessagesendrequest)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "message_id": 123456789,
    "message_seq": 1001,
    "client_msg_no": "client_msg_123"
  }
]
```

<h3 id="send-batch-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Batch messages sent successfully|Inline|

<h3 id="send-batch-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageSendResponse](#schemamessagesendresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Message Sync (Deprecated)

> Code samples

```bash
curl https://api.wukongim.com/message/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "message_seq": 12345,
    "limit": 200
  }'
```

`POST /message/sync`

<aside class="warning">
This operation is deprecated
</aside>

Message synchronization in write mode (will be deprecated)

> Body parameter

```json
{
  "uid": "user123",
  "message_seq": 12345,
  "limit": 200
}
```

<h3 id="message-sync-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageSyncRequest](#schemamessagesyncrequest)|true|none|
|» uid|body|string|true|User ID|
|» message_seq|body|integer(uint64)|false|Client's maximum message sequence number for incremental sync|
|» limit|body|integer|false|Maximum number of messages to sync|

> Example responses

> 200 Response

```json
[
  {
    "header": {
      "no_persist": 0,
      "red_dot": 1,
      "sync_once": 0
    },
    "setting": 0,
    "message_id": 123456789,
    "message_idstr": "123456789",
    "message_seq": 1001,
    "client_msg_no": "client_msg_123",
    "end": 0,
    "end_reason": 0,
    "error": "",
    "stream_data": "string",
    "event_meta": {
      "has_events": true,
      "event_version": 12,
      "last_msg_event_seq": 12,
      "event_key_count": 2,
      "open_event_key_count": 1,
      "event_keys": [
        {
          "event_key": "main",
          "status": "open",
          "last_msg_event_seq": 12,
          "snapshot": null,
          "end_reason": 0,
          "error": ""
        }
      ]
    },
    "event_sync_hint": {
      "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
      "from_msg_event_seq": 0
    },
    "from_uid": "user123",
    "channel_id": "group123",
    "channel_type": 2,
    "topic": "topic_1",
    "expire": 0,
    "timestamp": 1640995200,
    "payload": "SGVsbG8gV29ybGQ="
  }
]
```

<h3 id="message-sync-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages synchronized successfully|Inline|

<h3 id="message-sync-deprecated-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageResponse](#schemamessageresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Message Sync Acknowledgment (Deprecated)

> Code samples

```bash
curl https://api.wukongim.com/message/syncack \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "last_message_seq": 12345
  }'
```

`POST /message/syncack`

<aside class="warning">
This operation is deprecated
</aside>

Message synchronization acknowledgment in write mode (will be deprecated)

> Body parameter

```json
{
  "uid": "user123",
  "last_message_seq": 12345
}
```

<h3 id="message-sync-acknowledgment-deprecated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageSyncAckRequest](#schemamessagesyncackrequest)|true|none|
|» uid|body|string|true|User ID|
|» last_message_seq|body|integer|true|Last message sequence number acknowledged|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="message-sync-acknowledgment-deprecated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Sync acknowledgment processed successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Search Messages

> Code samples

```bash
curl https://api.wukongim.com/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "message_ids": [
      123456789,
      123456790,
      123456791
    ]
  }'
```

`POST /messages`

Search for multiple messages

> Body parameter

```json
{
  "message_ids": [
    123456789,
    123456790,
    123456791
  ]
}
```

<h3 id="search-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessagesSearchRequest](#schemamessagessearchrequest)|true|none|
|» message_ids|body|[integer(int64)]|true|none|

> Example responses

> 200 Response

```json
[
  {
    "header": {
      "no_persist": 0,
      "red_dot": 1,
      "sync_once": 0
    },
    "setting": 0,
    "message_id": 123456789,
    "message_idstr": "123456789",
    "message_seq": 1001,
    "client_msg_no": "client_msg_123",
    "end": 0,
    "end_reason": 0,
    "error": "",
    "stream_data": "string",
    "event_meta": {
      "has_events": true,
      "event_version": 12,
      "last_msg_event_seq": 12,
      "event_key_count": 2,
      "open_event_key_count": 1,
      "event_keys": [
        {
          "event_key": "main",
          "status": "open",
          "last_msg_event_seq": 12,
          "snapshot": null,
          "end_reason": 0,
          "error": ""
        }
      ]
    },
    "event_sync_hint": {
      "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
      "from_msg_event_seq": 0
    },
    "from_uid": "user123",
    "channel_id": "group123",
    "channel_type": 2,
    "topic": "topic_1",
    "expire": 0,
    "timestamp": 1640995200,
    "payload": "SGVsbG8gV29ybGQ="
  }
]
```

<h3 id="search-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Messages found|Inline|

<h3 id="search-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[MessageResponse](#schemamessageresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Search Single Message

> Code samples

```bash
curl https://api.wukongim.com/message \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "message_id": 123456789
  }'
```

`POST /message`

Search for a single message

> Body parameter

```json
{
  "message_id": 123456789
}
```

<h3 id="search-single-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MessageSearchRequest](#schemamessagesearchrequest)|true|none|
|» message_id|body|integer(int64)|true|none|

> Example responses

> 200 Response

```json
{
  "header": {
    "no_persist": 0,
    "red_dot": 1,
    "sync_once": 0
  },
  "setting": 0,
  "message_id": 123456789,
  "message_idstr": "123456789",
  "message_seq": 1001,
  "client_msg_no": "client_msg_123",
  "end": 0,
  "end_reason": 0,
  "error": "",
  "stream_data": "string",
  "event_meta": {
    "has_events": true,
    "event_version": 12,
    "last_msg_event_seq": 12,
    "event_key_count": 2,
    "open_event_key_count": 1,
    "event_keys": [
      {
        "event_key": "main",
        "status": "open",
        "last_msg_event_seq": 12,
        "snapshot": null,
        "end_reason": 0,
        "error": ""
      }
    ]
  },
  "event_sync_hint": {
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "from_msg_event_seq": 0
  },
  "from_uid": "user123",
  "channel_id": "group123",
  "channel_type": 2,
  "topic": "topic_1",
  "expire": 0,
  "timestamp": 1640995200,
  "payload": "SGVsbG8gV29ybGQ="
}
```

<h3 id="search-single-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message found|[MessageResponse](#schemamessageresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Sync Channel Messages

> Code samples

```bash
curl https://api.wukongim.com/channel/messagesync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "login_uid": "user123",
    "channel_id": "channel456",
    "channel_type": 1,
    "start_message_seq": 100,
    "end_message_seq": 200,
    "limit": 50,
    "pull_mode": 0,
    "event_summary_mode": "full"
  }'
```

`POST /channel/messagesync`

Synchronize messages from a channel with pagination support. For stream messages, response can include merged event state (`event_meta`) and sync hint (`event_sync_hint`).

> Body parameter

```json
{
  "login_uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1,
  "start_message_seq": 100,
  "end_message_seq": 200,
  "limit": 50,
  "pull_mode": 0,
  "event_summary_mode": "full"
}
```

<h3 id="sync-channel-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChannelMessageSyncRequest](#schemachannelmessagesyncrequest)|true|none|
|» login_uid|body|string|true|Current logged in user ID|
|» channel_id|body|string|true|Channel ID|
|» channel_type|body|integer|true|Channel type (1=person, 2=group)|
|» start_message_seq|body|integer|false|Start message sequence (inclusive)|
|» end_message_seq|body|integer|false|End message sequence (exclusive)|
|» limit|body|integer|false|Maximum number of messages to return|
|» pull_mode|body|integer|false|Pull mode (0=down, 1=up)|
|» event_summary_mode|body|string|false|Event summary mode for stream messages (`basic` or `full`). `full` includes snapshot payload.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel_type|1|
|» channel_type|2|
|» pull_mode|0|
|» pull_mode|1|
|» event_summary_mode|basic|
|» event_summary_mode|full|

> Example responses

> 200 Response

```json
{
  "start_message_seq": 100,
  "end_message_seq": 200,
  "more": 0,
  "messages": [
    {
      "header": {
        "no_persist": 0,
        "red_dot": 1,
        "sync_once": 0
      },
      "setting": 0,
      "message_id": 123456789,
      "message_idstr": "123456789",
      "message_seq": 1001,
      "client_msg_no": "client_msg_123",
      "end": 0,
      "end_reason": 0,
      "error": "",
      "stream_data": "string",
      "event_meta": {
        "has_events": true,
        "event_version": 12,
        "last_msg_event_seq": 12,
        "event_key_count": 2,
        "open_event_key_count": 1,
        "event_keys": [
          {
            "event_key": "main",
            "status": "open",
            "last_msg_event_seq": 12,
            "snapshot": null,
            "end_reason": 0,
            "error": ""
          }
        ]
      },
      "event_sync_hint": {
        "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
        "from_msg_event_seq": 0
      },
      "from_uid": "user123",
      "channel_id": "group123",
      "channel_type": 2,
      "topic": "topic_1",
      "expire": 0,
      "timestamp": 1640995200,
      "payload": "SGVsbG8gV29ybGQ="
    }
  ]
}
```

<h3 id="sync-channel-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Channel messages synchronized successfully|[ChannelMessageSyncResponse](#schemachannelmessagesyncresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get Channel Max Message Sequence

> Code samples

```bash
curl 'https://api.wukongim.com/channel/max_message_seq?channel_id=string&channel_type=1' \
  -H 'Accept: application/json'
```

`GET /channel/max_message_seq`

Get the maximum message sequence number for a channel

<h3 id="get-channel-max-message-sequence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|query|string|true|Channel ID|
|channel_type|query|integer|true|Channel type (1=person, 2=group)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel_type|1|
|channel_type|2|

> Example responses

> 200 Response

```json
{
  "message_seq": 12345
}
```

<h3 id="get-channel-max-message-sequence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Maximum message sequence|Inline|

<h3 id="get-channel-max-message-sequence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_seq|integer|false|none|Maximum message sequence number|

<aside class="success">
This operation does not require authentication
</aside>

## Get Channel Last Message

> Code samples

```bash
curl 'https://api.wukongim.com/channel/last_message?channel_id=string&channel_type=1' \
  -H 'Accept: application/json'
```

`GET /channel/last_message`

Get the last message of a channel. For personal channels, login_uid is required to construct the correct channel identifier.

<h3 id="get-channel-last-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|query|string|true|Channel ID|
|channel_type|query|integer|true|Channel type (1=person, 2=group)|
|login_uid|query|string|false|Login user ID (required for personal channels, channel_type=1)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel_type|1|
|channel_type|2|

> Example responses

> 200 Response

```json
{
  "header": {
    "no_persist": 0,
    "red_dot": 1,
    "sync_once": 0
  },
  "setting": 0,
  "message_id": 123456789,
  "message_idstr": "123456789",
  "message_seq": 1001,
  "client_msg_no": "client_msg_123",
  "end": 0,
  "end_reason": 0,
  "error": "",
  "stream_data": "string",
  "event_meta": {
    "has_events": true,
    "event_version": 12,
    "last_msg_event_seq": 12,
    "event_key_count": 2,
    "open_event_key_count": 1,
    "event_keys": [
      {
        "event_key": "main",
        "status": "open",
        "last_msg_event_seq": 12,
        "snapshot": null,
        "end_reason": 0,
        "error": ""
      }
    ]
  },
  "event_sync_hint": {
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "from_msg_event_seq": 0
  },
  "from_uid": "user123",
  "channel_id": "group123",
  "channel_type": 2,
  "topic": "topic_1",
  "expire": 0,
  "timestamp": 1640995200,
  "payload": "SGVsbG8gV29ybGQ="
}
```

<h3 id="get-channel-last-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Last message of the channel|[MessageResponse](#schemamessageresponse)|
|404|Not Found|Channel not found or no messages in channel|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-conversation">Conversation</h1>

Conversation and chat management endpoints

## Clear Conversation Unread

> Code samples

```bash
curl https://api.wukongim.com/conversations/clearUnread \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "channel_id": "group123",
    "channel_type": 2
  }'
```

`POST /conversations/clearUnread`

Advance the membership badge baseline to the latest committed ordinary message

> Body parameter

```json
{
  "uid": "user123",
  "channel_id": "group123",
  "channel_type": 2
}
```

<h3 id="clear-conversation-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClearUnreadRequest](#schemaclearunreadrequest)|true|none|
|» uid|body|string|true|none|
|» channel_id|body|string|true|none|
|» channel_type|body|integer(int8)|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="clear-conversation-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unread count cleared successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Set Conversation Unread

> Code samples

```bash
curl https://api.wukongim.com/conversations/setUnread \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "channel_id": "channel456",
    "channel_type": 1,
    "unread": 5
  }'
```

`POST /conversations/setUnread`

Monotonically advance the membership badge baseline so unread is capped at the requested count

> Body parameter

```json
{
  "uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1,
  "unread": 5
}
```

<h3 id="set-conversation-unread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SetUnreadRequest](#schemasetunreadrequest)|true|none|
|» uid|body|string|true|User ID|
|» channel_id|body|string|true|Channel ID|
|» channel_type|body|integer|true|Channel type (1=person, 2=group)|
|» unread|body|integer|true|Maximum unread count; the stored read_seq never moves backward|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel_type|1|
|» channel_type|2|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="set-conversation-unread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Unread count set successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Conversation

> Code samples

```bash
curl https://api.wukongim.com/conversations/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "channel_id": "channel456",
    "channel_type": 1
  }'
```

`POST /conversations/delete`

Hide currently visible history while preserving channel membership

> Body parameter

```json
{
  "uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1
}
```

<h3 id="delete-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteConversationRequest](#schemadeleteconversationrequest)|true|none|
|» uid|body|string|true|User ID|
|» channel_id|body|string|true|Channel ID|
|» channel_type|body|integer|true|Channel type (1=person, 2=group)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel_type|1|
|» channel_type|2|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="delete-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation deleted successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List Membership-Backed Conversations

> Code samples

```bash
curl https://api.wukongim.com/conversation/list \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "cursor": "string",
    "limit": 1,
    "completed_coverage": 0
  }'
```

`POST /conversation/list`

Reads Leader-persisted messages without runtime activation. Failed SENDs may appear. Any read error fails the page; retry the original cursor.

> Body parameter

```json
{
  "uid": "user123",
  "cursor": "string",
  "limit": 1,
  "completed_coverage": 0
}
```

<h3 id="list-membership-backed-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ConversationListRequest](#schemaconversationlistrequest)|true|none|
|» uid|body|string|true|User ID|
|» cursor|body|string|false|Opaque membership directory cursor|
|» limit|body|integer|false|Maximum membership candidates scanned|
|» completed_coverage|body|integer(int64)|false|Coverage timestamp from the client's last completed directory pass|

> Example responses

> 200 Response

```json
{
  "conversations": [
    {
      "channel_id": "group123",
      "channel_type": 2,
      "active_at": 0,
      "read_seq": 0,
      "deleted_to_seq": 0,
      "unread": 0,
      "last_message": {
        "message_id": 1001,
        "message_idstr": "1001",
        "message_seq": 0,
        "from_uid": "user123",
        "client_msg_no": "string",
        "server_timestamp_ms": 0,
        "payload": "string"
      }
    }
  ],
  "deletes": [
    {
      "channel_id": "group123",
      "channel_type": 2
    }
  ],
  "next_cursor": "string",
  "done": true,
  "coverage": 0,
  "tombstones_retained_since": 0,
  "reset_required": true
}
```

> 500 Response

```json
{
  "msg": "string",
  "status": 0
}
```

<h3 id="list-membership-backed-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Membership candidates scanned and conversations constructed|[ConversationListResponse](#schemaconversationlistresponse)|
|500|Internal Server Error|Channel or storage read failed; no partial page or cursor is returned.|Inline|
|503|Service Unavailable|Maintenance, page admission exhaustion, or deadline exceeded; retry the original page.|None|

<h3 id="list-membership-backed-conversations-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg|string|false|none|none|
|status|integer|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Sync Conversations (Legacy)

> Code samples

```bash
curl https://api.wukongim.com/conversation/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "version": 0,
    "last_msg_seqs": "group123:2:100|user456:1:20",
    "msg_count": 20,
    "only_unread": 0,
    "exclude_channel_types": [
      0
    ],
    "page": 0,
    "page_size": 0
  }'
```

`POST /conversation/sync`

Legacy heads and recents read current-Leader persisted storage without runtime activation. Failed SENDs may appear. Any read failure aborts the request; retry the original request. Legacy fields, filters and cursor rules remain unchanged. List and sync share 16 active requests and a five-second deadline. Sync allows up to 1,000 candidates, 200 Channels per batch, 10,000 requested recent messages and 32 MiB of base/stream payloads; exhausted budgets fail without partial data.

> Body parameter

```json
{
  "uid": "user123",
  "version": 0,
  "last_msg_seqs": "group123:2:100|user456:1:20",
  "msg_count": 20,
  "only_unread": 0,
  "exclude_channel_types": [
    0
  ],
  "page": 0,
  "page_size": 0
}
```

<h3 id="sync-conversations-legacy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LegacyConversationSyncRequest](#schemalegacyconversationsyncrequest)|true|none|
|» uid|body|string|true|User ID|
|» version|body|integer(int64)|false|Legacy sync version. A positive value resumes from the effective read position when no channel cursor is supplied.|
|» last_msg_seqs|body|string|false|Legacy per-channel cursors encoded as channel_id:channel_type:last_message_seq entries separated by \|.|
|» msg_count|body|integer|false|Maximum recent messages returned per conversation.|
|» only_unread|body|integer(uint8)|false|Return unread conversations and channels explicitly present in last_msg_seqs.|
|» exclude_channel_types|body|[integer(uint8)]|false|Legacy channel types to exclude unless explicitly present in last_msg_seqs.|
|» page|body|integer|false|Legacy one-based page number. Zero disables pagination.|
|» page_size|body|integer|false|Legacy page size. Values at or below zero default to 100 when page is positive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» only_unread|0|
|» only_unread|1|

> Example responses

> 200 Response

```json
[
  {
    "channel_id": "string",
    "channel_type": 0,
    "unread": 0,
    "timestamp": 0,
    "last_msg_seq": 0,
    "last_client_msg_no": "string",
    "offset_msg_seq": 0,
    "readed_to_msg_seq": 0,
    "version": 0,
    "recents": [
      {
        "header": {
          "no_persist": 0,
          "red_dot": 1,
          "sync_once": 0
        },
        "setting": 0,
        "message_id": 123456789,
        "message_idstr": "123456789",
        "message_seq": 1001,
        "client_msg_no": "client_msg_123",
        "end": 0,
        "end_reason": 0,
        "error": "",
        "stream_data": "string",
        "event_meta": {
          "has_events": true,
          "event_version": 12,
          "last_msg_event_seq": 12,
          "event_key_count": 2,
          "open_event_key_count": 1,
          "event_keys": [
            {
              "event_key": "main",
              "status": "open",
              "last_msg_event_seq": 12,
              "snapshot": null,
              "end_reason": 0,
              "error": ""
            }
          ]
        },
        "event_sync_hint": {
          "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
          "from_msg_event_seq": 0
        },
        "from_uid": "user123",
        "channel_id": "group123",
        "channel_type": 2,
        "topic": "topic_1",
        "expire": 0,
        "timestamp": 1640995200,
        "payload": "SGVsbG8gV29ybGQ="
      }
    ]
  }
]
```

<h3 id="sync-conversations-legacy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Legacy conversation synchronization result|Inline|

<h3 id="sync-conversations-legacy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LegacyConversationSyncItem](#schemalegacyconversationsyncitem)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Activate Conversation

> Code samples

```bash
curl https://api.wukongim.com/conversations/activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "uid": "user123",
    "channel_id": "channel456",
    "channel_type": 1
  }'
```

`POST /conversations/activate`

Prioritize a valid membership in future directory pages

> Body parameter

```json
{
  "uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1
}
```

<h3 id="activate-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteConversationRequest](#schemadeleteconversationrequest)|true|none|
|» uid|body|string|true|User ID|
|» channel_id|body|string|true|Channel ID|
|» channel_type|body|integer|true|Channel type (1=person, 2=group)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel_type|1|
|» channel_type|2|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="activate-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation activated successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-manager">Manager</h1>

Administrative management endpoints

## Manager Login

> Code samples

```bash
curl https://api.wukongim.com/manager/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

`POST /manager/login`

Login for manager access

> Body parameter

```json
{
  "username": "admin",
  "password": "password123"
}
```

<h3 id="manager-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ManagerLoginRequest](#schemamanagerloginrequest)|true|none|
|» username|body|string|true|Manager username|
|» password|body|string|true|Manager password|

> Example responses

> 200 Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
```

<h3 id="manager-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login successful|[ManagerLoginResponse](#schemamanagerloginresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-monitoring">Monitoring</h1>

System monitoring and metrics endpoints

## Get Connection Information

> Code samples

```bash
curl https://api.wukongim.com/connz \
  -H 'Accept: application/json'
```

`GET /connz`

Get detailed information about connections

<h3 id="get-connection-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sort order for connections|
|offset|query|integer|false|Offset for pagination|
|limit|query|integer|false|Limit for pagination|
|uid|query|string|false|Filter by user ID|
|node_id|query|integer(int64)|false|Filter by node ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|in_msgs|
|sort|out_msgs|
|sort|in_bytes|
|sort|out_bytes|

> Example responses

> 200 Response

```json
{
  "now": "2023-01-01T12:00:00Z",
  "num_connections": 1000,
  "total": 1000,
  "offset": 0,
  "limit": 20,
  "connections": [
    {
      "cid": 12345,
      "uid": "user123",
      "device_id": "device_456",
      "device_flag": 1,
      "uptime": "1h30m",
      "idle": "5m",
      "in_msgs": 100,
      "out_msgs": 95,
      "in_bytes": 10240,
      "out_bytes": 9728
    }
  ]
}
```

<h3 id="get-connection-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Connection information|[ConnzResponse](#schemaconnzresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get System Variables

> Code samples

```bash
curl https://api.wukongim.com/varz \
  -H 'Accept: application/json'
```

`GET /varz`

Get system variables and metrics

<h3 id="get-system-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|show|query|string|false|What information to show|
|conn_limit|query|integer|false|Limit for connection information|
|node_id|query|integer(int64)|false|Node ID to query|

#### Enumerated Values

|Parameter|Value|
|---|---|
|show|conn|

> Example responses

> 200 Response

```json
{
  "server_id": "1",
  "server_name": "WuKongIM",
  "version": "2.0.0",
  "connections": 1000,
  "uptime": "24h30m",
  "cpu": 15.5,
  "mem": 536870912,
  "in_msgs": 10000,
  "out_msgs": 9500,
  "in_bytes": 1048576,
  "out_bytes": 972800
}
```

<h3 id="get-system-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System variables and metrics|[VarzResponse](#schemavarzresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get System Settings

> Code samples

```bash
curl https://api.wukongim.com/varz/setting \
  -H 'Accept: application/json'
```

`GET /varz/setting`

Get system configuration settings

> Example responses

> 200 Response

```json
{
  "logger": {
    "trace_on": 0,
    "loki_on": 0
  },
  "prometheus_on": 0,
  "stress_on": 0
}
```

<h3 id="get-system-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|System settings|[SystemSettingsResponse](#schemasystemsettingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-documentation">Documentation</h1>

API documentation and specification endpoints

## API Documentation

> Code samples

```bash
curl https://api.wukongim.com/docs \
  -H 'Accept: application/json'
```

`GET /docs`

Swagger UI interface for API documentation (available in development mode only)

> Example responses

> 403 Response

```json
{
  "error": "Invalid request",
  "message": "The provided parameters are invalid"
}
```

<h3 id="api-documentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Swagger UI HTML page|Inline|
|403|Forbidden|Documentation disabled in release mode|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## OpenAPI Specification

> Code samples

```bash
curl https://api.wukongim.com/docs/openapi.json \
  -H 'Accept: application/json'
```

`GET /docs/openapi.json`

Get the OpenAPI 3.0 specification file

> Example responses

> 200 Response

```json
{}
```

> 403 Response

```json
{
  "error": "Invalid request",
  "message": "The provided parameters are invalid"
}
```

<h3 id="openapi-specification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OpenAPI specification|Inline|
|403|Forbidden|Documentation disabled in release mode|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Documentation Service Health

> Code samples

```bash
curl https://api.wukongim.com/docs/health \
  -H 'Accept: application/json'
```

`GET /docs/health`

Health check for the documentation service

> Example responses

> 200 Response

```json
{
  "status": "ok",
  "service": "docs",
  "description": "WuKongIM API Documentation Service",
  "endpoints": {
    "swagger_ui": "/docs",
    "openapi_spec": "/docs/openapi.json",
    "health_check": "/docs/health"
  }
}
```

<h3 id="documentation-service-health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Documentation service status|Inline|

<h3 id="documentation-service-health-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|service|string|false|none|none|
|description|string|false|none|none|
|endpoints|object|false|none|none|
|» swagger_ui|string|false|none|none|
|» openapi_spec|string|false|none|none|
|» health_check|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-tag">Tag</h1>

Tag management endpoints

## Get Tag

> Code samples

```bash
curl 'https://api.wukongim.com/tag?tag=string' \
  -H 'Accept: application/json'
```

`GET /tag`

Get tag information

<h3 id="get-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|query|string|true|Tag name|

> Example responses

> 200 Response

```json
{
  "tag": "important",
  "count": 42
}
```

<h3 id="get-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tag information|[TagResponse](#schematagresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove Tag

> Code samples

```bash
curl https://api.wukongim.com/tag/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "tag": "obsolete"
  }'
```

`POST /tag/remove`

Remove a tag

> Body parameter

```json
{
  "tag": "obsolete"
}
```

<h3 id="remove-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TagRemoveRequest](#schematagremoverequest)|true|none|
|» tag|body|string|true|Tag name to remove|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="remove-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tag removed successfully|[SuccessResponse](#schemasuccessresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List Tags

> Code samples

```bash
curl https://api.wukongim.com/tags \
  -H 'Accept: application/json'
```

`GET /tags`

Get list of all tags

> Example responses

> 200 Response

```json
[
  {
    "tag": "important",
    "count": 42
  }
]
```

<h3 id="list-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tags|Inline|

<h3 id="list-tags-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TagResponse](#schematagresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="wukongim-api-message-event">Message Event</h1>

## Append Message Event

> Code samples

```bash
curl https://api.wukongim.com/message/event \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "user_002",
    "channel_type": 1,
    "from_uid": "user_001",
    "message_id": 123456789,
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "event_id": "evt_abc123",
    "event_type": "stream.delta",
    "event_key": "main",
    "visibility": "public",
    "occurred_at": 1709827200000,
    "payload": {
      "kind": "text",
      "delta": "Hello"
    },
    "headers": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /message/event`

Append an event on a message identified by `client_msg_no`. Message is the anchor entity; events are projections on top of that message.

`event_key` identifies an event lane within the same message (defaults to `main`).

**Routing:**
- `stream.delta` is handled in memory cache for low latency.
- All other event types are persisted through Raft.
- Requests are automatically forwarded to the slot leader node.

> Body parameter

```json
{
  "channel_id": "user_002",
  "channel_type": 1,
  "from_uid": "user_001",
  "message_id": 123456789,
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "event_id": "evt_abc123",
  "event_type": "stream.delta",
  "event_key": "main",
  "visibility": "public",
  "occurred_at": 1709827200000,
  "payload": {
    "kind": "text",
    "delta": "Hello"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="append-message-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventAppendRequest](#schemaeventappendrequest)|true|none|
|» channel_id|body|string|true|Channel ID. For person-to-person channels, this is the peer's UID.|
|» channel_type|body|integer|true|Channel type. 1 = person-to-person, 2 = group.|
|» from_uid|body|string|false|Sender UID. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node. Defaults to system UID if both cache miss and omitted.|
|» message_id|body|integer(int64)|false|Message ID of the anchor message, used for online push correlation. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node.|
|» client_msg_no|body|string|true|Client message number of the anchor message. The message must already exist.|
|» event_id|body|string|true|Unique event identifier. Used for idempotency on persisted events (terminal events like stream.close / stream.error / stream.cancel).|
|» event_type|body|string|true|Event type. Case-insensitive. `stream.delta` uses in-memory fast path; other event types are persisted.|
|» event_key|body|string|false|Event key for partitioning multiple event lanes within the same message. Defaults to `main`.|
|» visibility|body|string|false|Event visibility.|
|» occurred_at|body|integer(int64)|false|Event timestamp in milliseconds since epoch. Auto-filled with current time if omitted.|
|» payload|body|object|false|Event payload. Structure depends on event_type. For text deltas: `{"kind":"text","delta":"..."}`. For close: `{"end_reason":0}`. For error: `{"error":"..."}`. For non-text deltas: any JSON object.|
|» headers|body|object|false|Optional key-value headers attached to the event.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|public|
|» visibility|private|
|» visibility|restricted|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "data": {
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "event_key": "main",
    "event_id": "evt_abc123",
    "msg_event_seq": 5,
    "stream_status": "open",
    "channel_id": "user_002",
    "channel_type": 1,
    "from_uid": "user_001"
  }
}
```

> 400 Response

```json
{
  "error": "Invalid request",
  "message": "The provided parameters are invalid"
}
```

<h3 id="append-message-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event appended successfully|Inline|
|400|Bad Request|Bad request. Possible causes: missing required fields, stream already closed.|[ErrorResponse](#schemaerrorresponse)|

<h3 id="append-message-event-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|none|
|data|[EventAppendResponse](#schemaeventappendresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Sync Message Events

> Code samples

```bash
curl https://api.wukongim.com/message/eventsync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel_id": "user_002",
    "channel_type": 1,
    "from_uid": "user_001",
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "event_key": "main",
    "from_msg_event_seq": 0,
    "limit": 50,
    "include_private": 0
  }'
```

`POST /message/eventsync`

Retrieve projected event states for a specific message by `client_msg_no`, ordered by `msg_event_seq`. Supports cursor-based pagination via `from_msg_event_seq` and optional `event_key` filtering.

Requests are automatically forwarded to the slot leader node.

> Body parameter

```json
{
  "channel_id": "user_002",
  "channel_type": 1,
  "from_uid": "user_001",
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "event_key": "main",
  "from_msg_event_seq": 0,
  "limit": 50,
  "include_private": 0
}
```

<h3 id="sync-message-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventSyncRequest](#schemaeventsyncrequest)|true|none|
|» channel_id|body|string|true|Channel ID.|
|» channel_type|body|integer|true|Channel type. 1 = person, 2 = group.|
|» from_uid|body|string|false|Sender UID. Required for person-to-person channels to compute the internal channel ID.|
|» client_msg_no|body|string|true|Client message number to sync events for.|
|» event_key|body|string|false|Optional event_key filter. If set, only projected state for this event key is returned.|
|» from_msg_event_seq|body|integer(uint64)|false|Cursor: only return events with `msg_event_seq > from_msg_event_seq`. Use 0 to fetch from the beginning.|
|» limit|body|integer|false|Maximum number of events to return. Default 200, max 2000.|
|» include_private|body|integer|false|Set to 1 to include events with `private` or `restricted` visibility. Default 0 (exclude).|

> Example responses

> 200 Response

```json
{
  "status": 200,
  "data": {
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "from_msg_event_seq": 0,
    "next_msg_event_seq": 5,
    "more": 0,
    "filtered_by_event_key": "",
    "events": [
      {
        "msg_event_seq": 3,
        "event_id": "evt_close_1",
        "event_key": "main",
        "event_type": "stream.close",
        "visibility": "public",
        "occurred_at": 1709827200000,
        "payload": {}
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": "Invalid request",
  "message": "The provided parameters are invalid"
}
```

<h3 id="sync-message-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Events synced successfully|Inline|
|400|Bad Request|Bad request|[ErrorResponse](#schemaerrorresponse)|

<h3 id="sync-message-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|integer|false|none|none|
|data|[EventSyncResponse](#schemaeventsyncresponse)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_IMAddressResponse">IMAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimaddressresponse"></a>
<a id="schema_IMAddressResponse"></a>
<a id="tocSimaddressresponse"></a>
<a id="tocsimaddressresponse"></a>

```json
{
  "tcp_addr": "127.0.0.1:5100",
  "ws_addr": "ws://127.0.0.1:5200",
  "wss_addr": "wss://127.0.0.1:5300"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tcp_addr|string|false|none|none|
|ws_addr|string|false|none|none|
|wss_addr|string|false|none|none|

<h2 id="tocS_BatchIMAddressResponse">BatchIMAddressResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchimaddressresponse"></a>
<a id="schema_BatchIMAddressResponse"></a>
<a id="tocSbatchimaddressresponse"></a>
<a id="tocsbatchimaddressresponse"></a>

```json
{
  "uids": [
    "string"
  ],
  "tcp_addr": "127.0.0.1:5100",
  "ws_addr": "ws://127.0.0.1:5200",
  "wss_addr": "wss://127.0.0.1:5300"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uids|[string]|false|none|none|
|tcp_addr|string|false|none|none|
|ws_addr|string|false|none|none|
|wss_addr|string|false|none|none|

<h2 id="tocS_UpdateTokenRequest">UpdateTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetokenrequest"></a>
<a id="schema_UpdateTokenRequest"></a>
<a id="tocSupdatetokenrequest"></a>
<a id="tocsupdatetokenrequest"></a>

```json
{
  "uid": "user123",
  "token": "new_auth_token_here",
  "device_flag": 1,
  "device_level": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|none|
|token|string|true|none|none|
|device_flag|integer|false|none|none|
|device_level|integer|false|none|none|

<h2 id="tocS_DeviceQuitRequest">DeviceQuitRequest</h2>
<!-- backwards compatibility -->
<a id="schemadevicequitrequest"></a>
<a id="schema_DeviceQuitRequest"></a>
<a id="tocSdevicequitrequest"></a>
<a id="tocsdevicequitrequest"></a>

```json
{
  "uid": "user123",
  "device_flag": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|none|
|device_flag|integer|false|none|none|

<h2 id="tocS_OnlineStatusResponse">OnlineStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaonlinestatusresponse"></a>
<a id="schema_OnlineStatusResponse"></a>
<a id="tocSonlinestatusresponse"></a>
<a id="tocsonlinestatusresponse"></a>

```json
{
  "uid": "user123",
  "online": 1,
  "device_flag": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|none|
|online|integer|false|none|none|
|device_flag|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|online|0|
|online|1|

<h2 id="tocS_SystemUidsRequest">SystemUidsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasystemuidsrequest"></a>
<a id="schema_SystemUidsRequest"></a>
<a id="tocSsystemuidsrequest"></a>
<a id="tocssystemuidsrequest"></a>

```json
{
  "uids": [
    "system",
    "admin",
    "bot"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uids|[string]|true|none|none|

<h2 id="tocS_SuccessResponse">SuccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemasuccessresponse"></a>
<a id="schema_SuccessResponse"></a>
<a id="tocSsuccessresponse"></a>
<a id="tocssuccessresponse"></a>

```json
{
  "status": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<h2 id="tocS_ConnectionRequest">ConnectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionrequest"></a>
<a id="schema_ConnectionRequest"></a>
<a id="tocSconnectionrequest"></a>
<a id="tocsconnectionrequest"></a>

```json
{
  "uid": "user123",
  "conn_id": 12345,
  "node_id": 1,
  "op_node_id": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|none|
|conn_id|integer(int64)|true|none|none|
|node_id|integer(int64)|false|none|none|
|op_node_id|integer(int64)|false|none|none|

<h2 id="tocS_ChannelCreateRequest">ChannelCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelcreaterequest"></a>
<a id="schema_ChannelCreateRequest"></a>
<a id="tocSchannelcreaterequest"></a>
<a id="tocschannelcreaterequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "large": 0,
  "ban": 0,
  "send_ban": 0,
  "subscribers": [
    "user1",
    "user2",
    "user3"
  ]
}
```

Request to create or update a channel with its basic information and initial subscribers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty or contain special characters.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|large|integer|false|none|Whether it's a large group (0=no, 1=yes). Large groups have different performance characteristics.|
|ban|integer|false|none|Whether the channel is banned (0=no, 1=yes). Banned channels prevent all users from sending/receiving messages except system accounts.|
|disband|integer|false|none|Whether the channel is disbanded (0=no, 1=yes). Disbanded channels are marked as deleted.|
|send_ban|integer|false|none|Whether sending messages is banned (0=no, 1=yes). When enabled, all members cannot send messages but can receive them. For person channels, the user can receive but not send messages.|
|allow_stranger|integer|false|none|Whether to allow strangers to send messages (0=no, 1=yes). Currently only supported for person channels. When enabled, strangers can send messages to the user.|
|reset|integer|false|none|Whether to reset subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.|
|subscribers|[string]|false|none|List of initial subscriber user IDs. Not supported for person channels (channel_type=1).|

#### Enumerated Values

|Property|Value|
|---|---|
|large|0|
|large|1|
|ban|0|
|ban|1|
|disband|0|
|disband|1|
|send_ban|0|
|send_ban|1|
|allow_stranger|0|
|allow_stranger|1|
|reset|0|
|reset|1|

<h2 id="tocS_ChannelInfoRequest">ChannelInfoRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelinforequest"></a>
<a id="schema_ChannelInfoRequest"></a>
<a id="tocSchannelinforequest"></a>
<a id="tocschannelinforequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "large": 1,
  "ban": 0,
  "send_ban": 0
}
```

Request to update or add channel basic information without affecting subscribers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|large|integer|false|none|Whether it's a large group (0=no, 1=yes)|
|ban|integer|false|none|Whether the channel is banned (0=no, 1=yes)|
|disband|integer|false|none|Whether the channel is disbanded (0=no, 1=yes)|
|send_ban|integer|false|none|Whether sending messages is banned (0=no, 1=yes)|
|allow_stranger|integer|false|none|Whether to allow strangers to send messages (0=no, 1=yes). Only supported for person channels.|

#### Enumerated Values

|Property|Value|
|---|---|
|large|0|
|large|1|
|ban|0|
|ban|1|
|disband|0|
|disband|1|
|send_ban|0|
|send_ban|1|
|allow_stranger|0|
|allow_stranger|1|

<h2 id="tocS_ChannelRequest">ChannelRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelrequest"></a>
<a id="schema_ChannelRequest"></a>
<a id="tocSchannelrequest"></a>
<a id="tocschannelrequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

Generic channel request containing only channel_id and channel_type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty.|
|channel_type|integer(uint8)|true|none|Channel type (1=person, 2=group, etc.)|

<h2 id="tocS_ChannelDeleteRequest">ChannelDeleteRequest</h2>
<!-- backwards compatibility -->
<a id="schemachanneldeleterequest"></a>
<a id="schema_ChannelDeleteRequest"></a>
<a id="tocSchanneldeleterequest"></a>
<a id="tocschanneldeleterequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

Request to delete a channel. This will disband the channel and clear all messages. Not supported for person channels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID to delete. Cannot be empty.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 1 (person channel). (2=group, etc.)|

<h2 id="tocS_SubscriberAddRequest">SubscriberAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberaddrequest"></a>
<a id="schema_SubscriberAddRequest"></a>
<a id="tocSsubscriberaddrequest"></a>
<a id="tocssubscriberaddrequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "reset": 0,
  "subscribers": [
    "user4",
    "user5"
  ]
}
```

Request to add subscribers to a channel. Not supported for person channels. Will create the channel if it doesn't exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty or contain special characters.|
|channel_type|integer(uint8)|true|none|Channel type. Defaults to 2 (group) if 0. Cannot be 1 (person channel).|
|reset|integer|false|none|Whether to reset existing subscribers (0=no, 1=yes). When enabled, all existing subscribers will be removed before adding new ones.|
|temp_subscriber|integer|false|none|Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.|
|subscribers|[string]|true|none|List of user IDs to add as subscribers. Cannot be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|reset|0|
|reset|1|
|temp_subscriber|0|
|temp_subscriber|1|

<h2 id="tocS_SubscriberRemoveRequest">SubscriberRemoveRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriberremoverequest"></a>
<a id="schema_SubscriberRemoveRequest"></a>
<a id="tocSsubscriberremoverequest"></a>
<a id="tocssubscriberremoverequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "temp_subscriber": 0,
  "subscribers": [
    "user1",
    "user2",
    "user3"
  ]
}
```

Request to remove subscribers from a channel. Not supported for person channels. Will also delete their conversations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty or contain special characters.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 1 (person channel). (2=group, etc.)|
|temp_subscriber|integer|false|none|Whether these are temporary subscribers (0=no, 1=yes). Temporary subscribers are no longer supported in new versions.|
|subscribers|[string]|true|none|List of user IDs to remove from subscribers. Cannot be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|temp_subscriber|0|
|temp_subscriber|1|

<h2 id="tocS_MessageSendRequest">MessageSendRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesendrequest"></a>
<a id="schema_MessageSendRequest"></a>
<a id="tocSmessagesendrequest"></a>
<a id="tocsmessagesendrequest"></a>

```json
{
  "header": {
    "no_persist": 0,
    "red_dot": 1,
    "sync_once": 0
  },
  "client_msg_no": "client_msg_123",
  "stream_no": "stream_456",
  "from_uid": "user123",
  "channel_id": "group123",
  "channel_type": 2,
  "expire": 0,
  "subscribers": [
    "string"
  ],
  "payload": "SGVsbG8gV29ybGQ=",
  "tag_key": "important"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[MessageHeader](#schemamessageheader)|false|none|none|
|client_msg_no|string|false|none|none|
|stream_no|string|false|none|none|
|from_uid|string|false|none|none|
|channel_id|string|false|none|none|
|channel_type|integer(int8)|false|none|none|
|expire|integer(int32)|false|none|Message expiration time in seconds|
|subscribers|[string]|false|none|Specific subscribers to send message to|
|payload|string(byte)|true|none|Base64 encoded message content|
|tag_key|string|false|none|none|

<h2 id="tocS_MessageSendResponse">MessageSendResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessagesendresponse"></a>
<a id="schema_MessageSendResponse"></a>
<a id="tocSmessagesendresponse"></a>
<a id="tocsmessagesendresponse"></a>

```json
{
  "message_id": 123456789,
  "message_seq": 1001,
  "client_msg_no": "client_msg_123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|integer(int64)|false|none|none|
|message_seq|integer(int64)|false|none|none|
|client_msg_no|string|false|none|none|

<h2 id="tocS_MessageHeader">MessageHeader</h2>
<!-- backwards compatibility -->
<a id="schemamessageheader"></a>
<a id="schema_MessageHeader"></a>
<a id="tocSmessageheader"></a>
<a id="tocsmessageheader"></a>

```json
{
  "no_persist": 0,
  "red_dot": 1,
  "sync_once": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|no_persist|integer|false|none|Whether message should not be persisted (0=persist, 1=no persist)|
|red_dot|integer|false|none|Whether to show red dot notification (0=no, 1=yes)|
|sync_once|integer|false|none|Whether message should be synced only once (0=no, 1=yes)|

#### Enumerated Values

|Property|Value|
|---|---|
|no_persist|0|
|no_persist|1|
|red_dot|0|
|red_dot|1|
|sync_once|0|
|sync_once|1|

<h2 id="tocS_MessageResponse">MessageResponse</h2>
<!-- backwards compatibility -->
<a id="schemamessageresponse"></a>
<a id="schema_MessageResponse"></a>
<a id="tocSmessageresponse"></a>
<a id="tocsmessageresponse"></a>

```json
{
  "header": {
    "no_persist": 0,
    "red_dot": 1,
    "sync_once": 0
  },
  "setting": 0,
  "message_id": 123456789,
  "message_idstr": "123456789",
  "message_seq": 1001,
  "client_msg_no": "client_msg_123",
  "end": 0,
  "end_reason": 0,
  "error": "",
  "stream_data": "string",
  "event_meta": {
    "has_events": true,
    "event_version": 12,
    "last_msg_event_seq": 12,
    "event_key_count": 2,
    "open_event_key_count": 1,
    "event_keys": [
      {
        "event_key": "main",
        "status": "open",
        "last_msg_event_seq": 12,
        "snapshot": null,
        "end_reason": 0,
        "error": ""
      }
    ]
  },
  "event_sync_hint": {
    "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
    "from_msg_event_seq": 0
  },
  "from_uid": "user123",
  "channel_id": "group123",
  "channel_type": 2,
  "topic": "topic_1",
  "expire": 0,
  "timestamp": 1640995200,
  "payload": "SGVsbG8gV29ybGQ="
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[MessageHeader](#schemamessageheader)|false|none|none|
|setting|integer(uint8)|false|none|Message setting flags.|
|message_id|integer(int64)|false|none|none|
|message_idstr|string|false|none|String representation of message_id.|
|message_seq|integer(uint64)|false|none|none|
|client_msg_no|string|false|none|none|
|end|integer(uint8)|false|none|Legacy stream end flag (1 means stream reached terminal state).|
|end_reason|integer(uint8)|false|none|Legacy stream end reason code.|
|error|string|false|none|Legacy stream error message.|
|stream_data|string(byte)|false|none|Legacy merged stream data from main event_key snapshot.|
|event_meta|[MessageEventMeta](#schemamessageeventmeta)|false|none|none|
|event_sync_hint|[MessageEventSyncHint](#schemamessageeventsynchint)|false|none|none|
|from_uid|string|false|none|none|
|channel_id|string|false|none|none|
|channel_type|integer(uint8)|false|none|none|
|topic|string|false|none|none|
|expire|integer(uint32)|false|none|none|
|timestamp|integer(int32)|false|none|none|
|payload|string(byte)|false|none|none|

<h2 id="tocS_MessageEventMeta">MessageEventMeta</h2>
<!-- backwards compatibility -->
<a id="schemamessageeventmeta"></a>
<a id="schema_MessageEventMeta"></a>
<a id="tocSmessageeventmeta"></a>
<a id="tocsmessageeventmeta"></a>

```json
{
  "has_events": true,
  "event_version": 12,
  "last_msg_event_seq": 12,
  "event_key_count": 2,
  "open_event_key_count": 1,
  "event_keys": [
    {
      "event_key": "main",
      "status": "open",
      "last_msg_event_seq": 12,
      "snapshot": null,
      "end_reason": 0,
      "error": ""
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|has_events|boolean|false|none|Whether this message has associated event states.|
|event_version|integer(uint64)|false|none|Version of event projection (currently equals last_msg_event_seq).|
|last_msg_event_seq|integer(uint64)|false|none|Largest msg_event_seq among all event keys.|
|event_key_count|integer|false|none|Count of event keys associated with this message.|
|open_event_key_count|integer|false|none|Count of event keys still in open state.|
|event_keys|[[MessageEventKeyMeta](#schemamessageeventkeymeta)]|false|none|none|

<h2 id="tocS_MessageEventKeyMeta">MessageEventKeyMeta</h2>
<!-- backwards compatibility -->
<a id="schemamessageeventkeymeta"></a>
<a id="schema_MessageEventKeyMeta"></a>
<a id="tocSmessageeventkeymeta"></a>
<a id="tocsmessageeventkeymeta"></a>

```json
{
  "event_key": "main",
  "status": "open",
  "last_msg_event_seq": 12,
  "snapshot": null,
  "end_reason": 0,
  "error": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_key|string|false|none|Event key identifier inside the message.|
|status|string|false|none|Current status of this event key projection.|
|last_msg_event_seq|integer(uint64)|false|none|Last msg_event_seq applied to this event key.|
|snapshot|object \| null|false|none|Optional merged snapshot payload (present in full summary mode).|
|end_reason|integer(uint8)|false|none|Terminal reason code for stream-like event types.|
|error|string|false|none|Terminal error text for stream.error.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|open|
|status|closed|
|status|error|
|status|cancelled|

<h2 id="tocS_MessageEventSyncHint">MessageEventSyncHint</h2>
<!-- backwards compatibility -->
<a id="schemamessageeventsynchint"></a>
<a id="schema_MessageEventSyncHint"></a>
<a id="tocSmessageeventsynchint"></a>
<a id="tocsmessageeventsynchint"></a>

```json
{
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "from_msg_event_seq": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_msg_no|string|false|none|Anchor message client message number.|
|from_msg_event_seq|integer(uint64)|false|none|Suggested cursor for `/message/eventsync`.|

<h2 id="tocS_MessagesSearchRequest">MessagesSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagessearchrequest"></a>
<a id="schema_MessagesSearchRequest"></a>
<a id="tocSmessagessearchrequest"></a>
<a id="tocsmessagessearchrequest"></a>

```json
{
  "message_ids": [
    123456789,
    123456790,
    123456791
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_ids|[integer(int64)]|true|none|none|

<h2 id="tocS_MessageSearchRequest">MessageSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesearchrequest"></a>
<a id="schema_MessageSearchRequest"></a>
<a id="tocSmessagesearchrequest"></a>
<a id="tocsmessagesearchrequest"></a>

```json
{
  "message_id": 123456789
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|integer(int64)|true|none|none|

<h2 id="tocS_ClearUnreadRequest">ClearUnreadRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclearunreadrequest"></a>
<a id="schema_ClearUnreadRequest"></a>
<a id="tocSclearunreadrequest"></a>
<a id="tocsclearunreadrequest"></a>

```json
{
  "uid": "user123",
  "channel_id": "group123",
  "channel_type": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|none|
|channel_id|string|true|none|none|
|channel_type|integer(int8)|true|none|none|

<h2 id="tocS_ConversationListRequest">ConversationListRequest</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlistrequest"></a>
<a id="schema_ConversationListRequest"></a>
<a id="tocSconversationlistrequest"></a>
<a id="tocsconversationlistrequest"></a>

```json
{
  "uid": "user123",
  "cursor": "string",
  "limit": 1,
  "completed_coverage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|cursor|string|false|none|Opaque membership directory cursor|
|limit|integer|false|none|Maximum membership candidates scanned|
|completed_coverage|integer(int64)|false|none|Coverage timestamp from the client's last completed directory pass|

<h2 id="tocS_LegacyConversationSyncRequest">LegacyConversationSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemalegacyconversationsyncrequest"></a>
<a id="schema_LegacyConversationSyncRequest"></a>
<a id="tocSlegacyconversationsyncrequest"></a>
<a id="tocslegacyconversationsyncrequest"></a>

```json
{
  "uid": "user123",
  "version": 0,
  "last_msg_seqs": "group123:2:100|user456:1:20",
  "msg_count": 20,
  "only_unread": 0,
  "exclude_channel_types": [
    0
  ],
  "page": 0,
  "page_size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|version|integer(int64)|false|none|Legacy sync version. A positive value resumes from the effective read position when no channel cursor is supplied.|
|last_msg_seqs|string|false|none|Legacy per-channel cursors encoded as channel_id:channel_type:last_message_seq entries separated by \|.|
|msg_count|integer|false|none|Maximum recent messages returned per conversation.|
|only_unread|integer(uint8)|false|none|Return unread conversations and channels explicitly present in last_msg_seqs.|
|exclude_channel_types|[integer(uint8)]|false|none|Legacy channel types to exclude unless explicitly present in last_msg_seqs.|
|page|integer|false|none|Legacy one-based page number. Zero disables pagination.|
|page_size|integer|false|none|Legacy page size. Values at or below zero default to 100 when page is positive.|

#### Enumerated Values

|Property|Value|
|---|---|
|only_unread|0|
|only_unread|1|

<h2 id="tocS_ConversationListKey">ConversationListKey</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlistkey"></a>
<a id="schema_ConversationListKey"></a>
<a id="tocSconversationlistkey"></a>
<a id="tocsconversationlistkey"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|none|
|channel_type|integer(int8)|true|none|none|

<h2 id="tocS_ConversationLastMessage">ConversationLastMessage</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlastmessage"></a>
<a id="schema_ConversationLastMessage"></a>
<a id="tocSconversationlastmessage"></a>
<a id="tocsconversationlastmessage"></a>

```json
{
  "message_id": 1001,
  "message_idstr": "1001",
  "message_seq": 0,
  "from_uid": "user123",
  "client_msg_no": "string",
  "server_timestamp_ms": 0,
  "payload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|integer(int64)|false|none|none|
|message_idstr|string|false|none|none|
|message_seq|integer(int64)|false|none|none|
|from_uid|string|false|none|none|
|client_msg_no|string|false|none|none|
|server_timestamp_ms|integer(int64)|false|none|none|
|payload|string(byte)|false|none|none|

<h2 id="tocS_ConversationListItem">ConversationListItem</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlistitem"></a>
<a id="schema_ConversationListItem"></a>
<a id="tocSconversationlistitem"></a>
<a id="tocsconversationlistitem"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "active_at": 0,
  "read_seq": 0,
  "deleted_to_seq": 0,
  "unread": 0,
  "last_message": {
    "message_id": 1001,
    "message_idstr": "1001",
    "message_seq": 0,
    "from_uid": "user123",
    "client_msg_no": "string",
    "server_timestamp_ms": 0,
    "payload": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|none|
|channel_type|integer(int8)|true|none|none|
|active_at|integer(int64)|false|none|none|
|read_seq|integer(int64)|false|none|none|
|deleted_to_seq|integer(int64)|false|none|none|
|unread|integer(int64)|false|none|none|
|last_message|object \| null|false|none|none|

<h2 id="tocS_ConversationListResponse">ConversationListResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconversationlistresponse"></a>
<a id="schema_ConversationListResponse"></a>
<a id="tocSconversationlistresponse"></a>
<a id="tocsconversationlistresponse"></a>

```json
{
  "conversations": [
    {
      "channel_id": "group123",
      "channel_type": 2,
      "active_at": 0,
      "read_seq": 0,
      "deleted_to_seq": 0,
      "unread": 0,
      "last_message": {
        "message_id": 1001,
        "message_idstr": "1001",
        "message_seq": 0,
        "from_uid": "user123",
        "client_msg_no": "string",
        "server_timestamp_ms": 0,
        "payload": "string"
      }
    }
  ],
  "deletes": [
    {
      "channel_id": "group123",
      "channel_type": 2
    }
  ],
  "next_cursor": "string",
  "done": true,
  "coverage": 0,
  "tombstones_retained_since": 0,
  "reset_required": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversations|[[ConversationListItem](#schemaconversationlistitem)]|true|none|none|
|deletes|[[ConversationListKey](#schemaconversationlistkey)]|true|none|none|
|next_cursor|string|false|none|none|
|done|boolean|true|none|none|
|coverage|integer(int64)|true|none|none|
|tombstones_retained_since|integer(int64)|true|none|none|
|reset_required|boolean|true|none|none|

<h2 id="tocS_LegacyConversationSyncItem">LegacyConversationSyncItem</h2>
<!-- backwards compatibility -->
<a id="schemalegacyconversationsyncitem"></a>
<a id="schema_LegacyConversationSyncItem"></a>
<a id="tocSlegacyconversationsyncitem"></a>
<a id="tocslegacyconversationsyncitem"></a>

```json
{
  "channel_id": "string",
  "channel_type": 0,
  "unread": 0,
  "timestamp": 0,
  "last_msg_seq": 0,
  "last_client_msg_no": "string",
  "offset_msg_seq": 0,
  "readed_to_msg_seq": 0,
  "version": 0,
  "recents": [
    {
      "header": {
        "no_persist": 0,
        "red_dot": 1,
        "sync_once": 0
      },
      "setting": 0,
      "message_id": 123456789,
      "message_idstr": "123456789",
      "message_seq": 1001,
      "client_msg_no": "client_msg_123",
      "end": 0,
      "end_reason": 0,
      "error": "",
      "stream_data": "string",
      "event_meta": {
        "has_events": true,
        "event_version": 12,
        "last_msg_event_seq": 12,
        "event_key_count": 2,
        "open_event_key_count": 1,
        "event_keys": [
          {
            "event_key": "main",
            "status": "open",
            "last_msg_event_seq": 12,
            "snapshot": null,
            "end_reason": 0,
            "error": ""
          }
        ]
      },
      "event_sync_hint": {
        "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
        "from_msg_event_seq": 0
      },
      "from_uid": "user123",
      "channel_id": "group123",
      "channel_type": 2,
      "topic": "topic_1",
      "expire": 0,
      "timestamp": 1640995200,
      "payload": "SGVsbG8gV29ybGQ="
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|none|
|channel_type|integer(uint8)|true|none|none|
|unread|integer(uint64)|true|none|none|
|timestamp|integer(int64)|true|none|Last returned message timestamp in Unix seconds.|
|last_msg_seq|integer(uint64)|true|none|none|
|last_client_msg_no|string|true|none|none|
|offset_msg_seq|integer(int64)|true|none|none|
|readed_to_msg_seq|integer(uint64)|true|none|none|
|version|integer(int64)|true|none|Last returned message timestamp expressed as Unix nanoseconds.|
|recents|[[MessageResponse](#schemamessageresponse)]|true|none|none|

<h2 id="tocS_ConnzResponse">ConnzResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnzresponse"></a>
<a id="schema_ConnzResponse"></a>
<a id="tocSconnzresponse"></a>
<a id="tocsconnzresponse"></a>

```json
{
  "now": "2023-01-01T12:00:00Z",
  "num_connections": 1000,
  "total": 1000,
  "offset": 0,
  "limit": 20,
  "connections": [
    {
      "cid": 12345,
      "uid": "user123",
      "device_id": "device_456",
      "device_flag": 1,
      "uptime": "1h30m",
      "idle": "5m",
      "in_msgs": 100,
      "out_msgs": 95,
      "in_bytes": 10240,
      "out_bytes": 9728
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|now|string(date-time)|false|none|none|
|num_connections|integer|false|none|none|
|total|integer|false|none|none|
|offset|integer|false|none|none|
|limit|integer|false|none|none|
|connections|[[ConnectionInfo](#schemaconnectioninfo)]|false|none|none|

<h2 id="tocS_ConnectionInfo">ConnectionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioninfo"></a>
<a id="schema_ConnectionInfo"></a>
<a id="tocSconnectioninfo"></a>
<a id="tocsconnectioninfo"></a>

```json
{
  "cid": 12345,
  "uid": "user123",
  "device_id": "device_456",
  "device_flag": 1,
  "uptime": "1h30m",
  "idle": "5m",
  "in_msgs": 100,
  "out_msgs": 95,
  "in_bytes": 10240,
  "out_bytes": 9728
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|integer(int64)|false|none|none|
|uid|string|false|none|none|
|device_id|string|false|none|none|
|device_flag|integer|false|none|none|
|uptime|string|false|none|none|
|idle|string|false|none|none|
|in_msgs|integer(int64)|false|none|none|
|out_msgs|integer(int64)|false|none|none|
|in_bytes|integer(int64)|false|none|none|
|out_bytes|integer(int64)|false|none|none|

<h2 id="tocS_VarzResponse">VarzResponse</h2>
<!-- backwards compatibility -->
<a id="schemavarzresponse"></a>
<a id="schema_VarzResponse"></a>
<a id="tocSvarzresponse"></a>
<a id="tocsvarzresponse"></a>

```json
{
  "server_id": "1",
  "server_name": "WuKongIM",
  "version": "2.0.0",
  "connections": 1000,
  "uptime": "24h30m",
  "cpu": 15.5,
  "mem": 536870912,
  "in_msgs": 10000,
  "out_msgs": 9500,
  "in_bytes": 1048576,
  "out_bytes": 972800
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|server_id|string|false|none|none|
|server_name|string|false|none|none|
|version|string|false|none|none|
|connections|integer|false|none|none|
|uptime|string|false|none|none|
|cpu|number(float)|false|none|none|
|mem|integer(int64)|false|none|none|
|in_msgs|integer(int64)|false|none|none|
|out_msgs|integer(int64)|false|none|none|
|in_bytes|integer(int64)|false|none|none|
|out_bytes|integer(int64)|false|none|none|

<h2 id="tocS_LoginRequest">LoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemaloginrequest"></a>
<a id="schema_LoginRequest"></a>
<a id="tocSloginrequest"></a>
<a id="tocsloginrequest"></a>

```json
{
  "username": "admin",
  "password": "password123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_LoginResponse">LoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponse"></a>
<a id="schema_LoginResponse"></a>
<a id="tocSloginresponse"></a>
<a id="tocsloginresponse"></a>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expire": 1640995200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|expire|integer(int64)|false|none|none|

<h2 id="tocS_BlacklistRequest">BlacklistRequest</h2>
<!-- backwards compatibility -->
<a id="schemablacklistrequest"></a>
<a id="schema_BlacklistRequest"></a>
<a id="tocSblacklistrequest"></a>
<a id="tocsblacklistrequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

Request to manage channel blacklist. For blacklist_set operation, uids can be empty to clear the entire blacklist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty or contain special characters.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|uids|[string]|false|none|List of user IDs to add/remove from blacklist. Required for add/remove operations, optional for set operation.|

<h2 id="tocS_WhitelistRequest">WhitelistRequest</h2>
<!-- backwards compatibility -->
<a id="schemawhitelistrequest"></a>
<a id="schema_WhitelistRequest"></a>
<a id="tocSwhitelistrequest"></a>
<a id="tocswhitelistrequest"></a>

```json
{
  "channel_id": "group123",
  "channel_type": 2,
  "uids": [
    "user1",
    "user2"
  ]
}
```

Request to manage channel whitelist. For whitelist_set operation, uids can be empty to clear the entire whitelist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. Cannot be empty or contain special characters.|
|channel_type|integer(uint8)|true|none|Channel type. Cannot be 0. (1=person, 2=group, etc.)|
|uids|[string]|false|none|List of user IDs to add/remove from whitelist. Required for add/remove operations, optional for set operation.|

<h2 id="tocS_MigrateResultResponse">MigrateResultResponse</h2>
<!-- backwards compatibility -->
<a id="schemamigrateresultresponse"></a>
<a id="schema_MigrateResultResponse"></a>
<a id="tocSmigrateresultresponse"></a>
<a id="tocsmigrateresultresponse"></a>

```json
{
  "status": "completed",
  "step": "message",
  "last_err": null,
  "try_count": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|step|string|false|none|none|
|last_err|string \| null|false|none|none|
|try_count|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|running|
|status|completed|
|status|migrated|

<h2 id="tocS_ChannelMessageSyncRequest">ChannelMessageSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagesyncrequest"></a>
<a id="schema_ChannelMessageSyncRequest"></a>
<a id="tocSchannelmessagesyncrequest"></a>
<a id="tocschannelmessagesyncrequest"></a>

```json
{
  "login_uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1,
  "start_message_seq": 100,
  "end_message_seq": 200,
  "limit": 50,
  "pull_mode": 0,
  "event_summary_mode": "full"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|login_uid|string|true|none|Current logged in user ID|
|channel_id|string|true|none|Channel ID|
|channel_type|integer|true|none|Channel type (1=person, 2=group)|
|start_message_seq|integer|false|none|Start message sequence (inclusive)|
|end_message_seq|integer|false|none|End message sequence (exclusive)|
|limit|integer|false|none|Maximum number of messages to return|
|pull_mode|integer|false|none|Pull mode (0=down, 1=up)|
|event_summary_mode|string|false|none|Event summary mode for stream messages (`basic` or `full`). `full` includes snapshot payload.|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|1|
|channel_type|2|
|pull_mode|0|
|pull_mode|1|
|event_summary_mode|basic|
|event_summary_mode|full|

<h2 id="tocS_ChannelMessageSyncResponse">ChannelMessageSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelmessagesyncresponse"></a>
<a id="schema_ChannelMessageSyncResponse"></a>
<a id="tocSchannelmessagesyncresponse"></a>
<a id="tocschannelmessagesyncresponse"></a>

```json
{
  "start_message_seq": 100,
  "end_message_seq": 200,
  "more": 0,
  "messages": [
    {
      "header": {
        "no_persist": 0,
        "red_dot": 1,
        "sync_once": 0
      },
      "setting": 0,
      "message_id": 123456789,
      "message_idstr": "123456789",
      "message_seq": 1001,
      "client_msg_no": "client_msg_123",
      "end": 0,
      "end_reason": 0,
      "error": "",
      "stream_data": "string",
      "event_meta": {
        "has_events": true,
        "event_version": 12,
        "last_msg_event_seq": 12,
        "event_key_count": 2,
        "open_event_key_count": 1,
        "event_keys": [
          {
            "event_key": "main",
            "status": "open",
            "last_msg_event_seq": 12,
            "snapshot": null,
            "end_reason": 0,
            "error": ""
          }
        ]
      },
      "event_sync_hint": {
        "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
        "from_msg_event_seq": 0
      },
      "from_uid": "user123",
      "channel_id": "group123",
      "channel_type": 2,
      "topic": "topic_1",
      "expire": 0,
      "timestamp": 1640995200,
      "payload": "SGVsbG8gV29ybGQ="
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_message_seq|integer|false|none|Start message sequence|
|end_message_seq|integer|false|none|End message sequence|
|more|integer|false|none|Whether there are more messages (1=yes, 0=no)|
|messages|[[MessageResponse](#schemamessageresponse)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|more|0|
|more|1|

<h2 id="tocS_TagResponse">TagResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresponse"></a>
<a id="schema_TagResponse"></a>
<a id="tocStagresponse"></a>
<a id="tocstagresponse"></a>

```json
{
  "tag": "important",
  "count": 42
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|false|none|Tag name|
|count|integer|false|none|Number of items with this tag|

<h2 id="tocS_TagRemoveRequest">TagRemoveRequest</h2>
<!-- backwards compatibility -->
<a id="schematagremoverequest"></a>
<a id="schema_TagRemoveRequest"></a>
<a id="tocStagremoverequest"></a>
<a id="tocstagremoverequest"></a>

```json
{
  "tag": "obsolete"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|Tag name to remove|

<h2 id="tocS_ManagerLoginRequest">ManagerLoginRequest</h2>
<!-- backwards compatibility -->
<a id="schemamanagerloginrequest"></a>
<a id="schema_ManagerLoginRequest"></a>
<a id="tocSmanagerloginrequest"></a>
<a id="tocsmanagerloginrequest"></a>

```json
{
  "username": "admin",
  "password": "password123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|Manager username|
|password|string|true|none|Manager password|

<h2 id="tocS_ManagerLoginResponse">ManagerLoginResponse</h2>
<!-- backwards compatibility -->
<a id="schemamanagerloginresponse"></a>
<a id="schema_ManagerLoginResponse"></a>
<a id="tocSmanagerloginresponse"></a>
<a id="tocsmanagerloginresponse"></a>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|Authentication token|
|expires_in|integer|false|none|Token expiration time in seconds|

<h2 id="tocS_SystemSettingsResponse">SystemSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemsettingsresponse"></a>
<a id="schema_SystemSettingsResponse"></a>
<a id="tocSsystemsettingsresponse"></a>
<a id="tocssystemsettingsresponse"></a>

```json
{
  "logger": {
    "trace_on": 0,
    "loki_on": 0
  },
  "prometheus_on": 0,
  "stress_on": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logger|object|false|none|none|
|prometheus_on|integer|false|none|Whether Prometheus metrics are enabled (1=yes, 0=no)|
|stress_on|integer|false|none|Whether stress testing is enabled (1=yes, 0=no)|

#### Enumerated Values

|Property|Value|
|---|---|
|prometheus_on|0|
|prometheus_on|1|
|stress_on|0|
|stress_on|1|

<h2 id="tocS_MessageSyncRequest">MessageSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesyncrequest"></a>
<a id="schema_MessageSyncRequest"></a>
<a id="tocSmessagesyncrequest"></a>
<a id="tocsmessagesyncrequest"></a>

```json
{
  "uid": "user123",
  "message_seq": 12345,
  "limit": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|message_seq|integer(uint64)|false|none|Client's maximum message sequence number for incremental sync|
|limit|integer|false|none|Maximum number of messages to sync|

<h2 id="tocS_MessageSyncAckRequest">MessageSyncAckRequest</h2>
<!-- backwards compatibility -->
<a id="schemamessagesyncackrequest"></a>
<a id="schema_MessageSyncAckRequest"></a>
<a id="tocSmessagesyncackrequest"></a>
<a id="tocsmessagesyncackrequest"></a>

```json
{
  "uid": "user123",
  "last_message_seq": 12345
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|last_message_seq|integer|true|none|Last message sequence number acknowledged|

<h2 id="tocS_SetUnreadRequest">SetUnreadRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetunreadrequest"></a>
<a id="schema_SetUnreadRequest"></a>
<a id="tocSsetunreadrequest"></a>
<a id="tocssetunreadrequest"></a>

```json
{
  "uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1,
  "unread": 5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|channel_id|string|true|none|Channel ID|
|channel_type|integer|true|none|Channel type (1=person, 2=group)|
|unread|integer|true|none|Maximum unread count; the stored read_seq never moves backward|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|1|
|channel_type|2|

<h2 id="tocS_DeleteConversationRequest">DeleteConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteconversationrequest"></a>
<a id="schema_DeleteConversationRequest"></a>
<a id="tocSdeleteconversationrequest"></a>
<a id="tocsdeleteconversationrequest"></a>

```json
{
  "uid": "user123",
  "channel_id": "channel456",
  "channel_type": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|channel_id|string|true|none|Channel ID|
|channel_type|integer|true|none|Channel type (1=person, 2=group)|

#### Enumerated Values

|Property|Value|
|---|---|
|channel_type|1|
|channel_type|2|

<h2 id="tocS_ChannelResponse">ChannelResponse</h2>
<!-- backwards compatibility -->
<a id="schemachannelresponse"></a>
<a id="schema_ChannelResponse"></a>
<a id="tocSchannelresponse"></a>
<a id="tocschannelresponse"></a>

```json
{
  "channel_id": "channel456",
  "channel_type": 2,
  "large": 0,
  "ban": 0,
  "disband": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|false|none|Channel ID|
|channel_type|integer|false|none|Channel type|
|large|integer|false|none|Whether channel is large (1=yes, 0=no)|
|ban|integer|false|none|Whether channel is banned (1=yes, 0=no)|
|disband|integer|false|none|Whether channel is disbanded (1=yes, 0=no)|

#### Enumerated Values

|Property|Value|
|---|---|
|large|0|
|large|1|
|ban|0|
|ban|1|
|disband|0|
|disband|1|

<h2 id="tocS_TmpChannelSubscriberSetRequest">TmpChannelSubscriberSetRequest</h2>
<!-- backwards compatibility -->
<a id="schematmpchannelsubscribersetrequest"></a>
<a id="schema_TmpChannelSubscriberSetRequest"></a>
<a id="tocStmpchannelsubscribersetrequest"></a>
<a id="tocstmpchannelsubscribersetrequest"></a>

```json
{
  "channel_id": "tmp_channel_123",
  "uids": [
    "user1",
    "user2",
    "user3"
  ]
}
```

Request to set subscribers for a temporary channel. Used for internal cluster communication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Temporary channel ID. Cannot contain special characters.|
|uids|[string]|true|none|List of user IDs to set as subscribers for the temporary channel|

<h2 id="tocS_UpdatePluginNoRequest">UpdatePluginNoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepluginnorequest"></a>
<a id="schema_UpdatePluginNoRequest"></a>
<a id="tocSupdatepluginnorequest"></a>
<a id="tocsupdatepluginnorequest"></a>

```json
{
  "uid": "user123",
  "plugin_no": "plugin_001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|true|none|User ID|
|plugin_no|string|true|none|Plugin number|

<h2 id="tocS_EventAppendRequest">EventAppendRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventappendrequest"></a>
<a id="schema_EventAppendRequest"></a>
<a id="tocSeventappendrequest"></a>
<a id="tocseventappendrequest"></a>

```json
{
  "channel_id": "user_002",
  "channel_type": 1,
  "from_uid": "user_001",
  "message_id": 123456789,
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "event_id": "evt_abc123",
  "event_type": "stream.delta",
  "event_key": "main",
  "visibility": "public",
  "occurred_at": 1709827200000,
  "payload": {
    "kind": "text",
    "delta": "Hello"
  },
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

Append an event to a message's event stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID. For person-to-person channels, this is the peer's UID.|
|channel_type|integer|true|none|Channel type. 1 = person-to-person, 2 = group.|
|from_uid|string|false|none|Sender UID. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node. Defaults to system UID if both cache miss and omitted.|
|message_id|integer(int64)|false|none|Message ID of the anchor message, used for online push correlation. Auto-filled from cache if the anchor message was sent with `is_stream: 1` on the same node.|
|client_msg_no|string|true|none|Client message number of the anchor message. The message must already exist.|
|event_id|string|true|none|Unique event identifier. Used for idempotency on persisted events (terminal events like stream.close / stream.error / stream.cancel).|
|event_type|string|true|none|Event type. Case-insensitive. `stream.delta` uses in-memory fast path; other event types are persisted.|
|event_key|string|false|none|Event key for partitioning multiple event lanes within the same message. Defaults to `main`.|
|visibility|string|false|none|Event visibility.|
|occurred_at|integer(int64)|false|none|Event timestamp in milliseconds since epoch. Auto-filled with current time if omitted.|
|payload|object|false|none|Event payload. Structure depends on event_type. For text deltas: `{"kind":"text","delta":"..."}`. For close: `{"end_reason":0}`. For error: `{"error":"..."}`. For non-text deltas: any JSON object.|
|headers|object|false|none|Optional key-value headers attached to the event.|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|public|
|visibility|private|
|visibility|restricted|

<h2 id="tocS_EventAppendResponse">EventAppendResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventappendresponse"></a>
<a id="schema_EventAppendResponse"></a>
<a id="tocSeventappendresponse"></a>
<a id="tocseventappendresponse"></a>

```json
{
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "event_key": "main",
  "event_id": "evt_abc123",
  "msg_event_seq": 5,
  "stream_status": "open",
  "channel_id": "user_002",
  "channel_type": 1,
  "from_uid": "user_001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_msg_no|string|false|none|Client message number.|
|event_key|string|false|none|Normalized event key (e.g. empty -> `main`).|
|event_id|string|false|none|Event ID echoed back.|
|msg_event_seq|integer(uint64)|false|none|Message-level event sequence number. For delta events (cache path), this is the last persisted seq. For persisted events, this is the newly allocated seq.|
|stream_status|string|false|none|Current event-key status after applying this event.|
|channel_id|string|false|none|Channel ID (original, not fakeChannelID).|
|channel_type|integer|false|none|Channel type.|
|from_uid|string|false|none|Sender UID.|

#### Enumerated Values

|Property|Value|
|---|---|
|stream_status|open|
|stream_status|closed|
|stream_status|error|
|stream_status|cancelled|

<h2 id="tocS_EventSyncRequest">EventSyncRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeventsyncrequest"></a>
<a id="schema_EventSyncRequest"></a>
<a id="tocSeventsyncrequest"></a>
<a id="tocseventsyncrequest"></a>

```json
{
  "channel_id": "user_002",
  "channel_type": 1,
  "from_uid": "user_001",
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "event_key": "main",
  "from_msg_event_seq": 0,
  "limit": 50,
  "include_private": 0
}
```

Sync events for a specific message.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channel_id|string|true|none|Channel ID.|
|channel_type|integer|true|none|Channel type. 1 = person, 2 = group.|
|from_uid|string|false|none|Sender UID. Required for person-to-person channels to compute the internal channel ID.|
|client_msg_no|string|true|none|Client message number to sync events for.|
|event_key|string|false|none|Optional event_key filter. If set, only projected state for this event key is returned.|
|from_msg_event_seq|integer(uint64)|false|none|Cursor: only return events with `msg_event_seq > from_msg_event_seq`. Use 0 to fetch from the beginning.|
|limit|integer|false|none|Maximum number of events to return. Default 200, max 2000.|
|include_private|integer|false|none|Set to 1 to include events with `private` or `restricted` visibility. Default 0 (exclude).|

<h2 id="tocS_EventSyncResponse">EventSyncResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventsyncresponse"></a>
<a id="schema_EventSyncResponse"></a>
<a id="tocSeventsyncresponse"></a>
<a id="tocseventsyncresponse"></a>

```json
{
  "client_msg_no": "550e8400-e29b-41d4-a716-446655440000",
  "from_msg_event_seq": 0,
  "next_msg_event_seq": 5,
  "more": 0,
  "filtered_by_event_key": "",
  "events": [
    {
      "msg_event_seq": 3,
      "event_id": "evt_close_1",
      "event_key": "main",
      "event_type": "stream.close",
      "visibility": "public",
      "occurred_at": 1709827200000,
      "payload": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_msg_no|string|false|none|Echoed client message number.|
|from_msg_event_seq|integer(uint64)|false|none|The cursor that was passed in the request.|
|next_msg_event_seq|integer(uint64)|false|none|Cursor for the next page. Pass this as `from_msg_event_seq` in the next request.|
|more|integer|false|none|1 if there are more events beyond this page, 0 otherwise.|
|filtered_by_event_key|string|false|none|The event_key filter applied, empty string if no filter.|
|events|[[EventSyncItem](#schemaeventsyncitem)]|false|none|List of projected event states, ordered by msg_event_seq ascending.|

<h2 id="tocS_EventSyncItem">EventSyncItem</h2>
<!-- backwards compatibility -->
<a id="schemaeventsyncitem"></a>
<a id="schema_EventSyncItem"></a>
<a id="tocSeventsyncitem"></a>
<a id="tocseventsyncitem"></a>

```json
{
  "msg_event_seq": 3,
  "event_id": "evt_close_1",
  "event_key": "main",
  "event_type": "stream.close",
  "visibility": "public",
  "occurred_at": 1709827200000,
  "payload": {}
}
```

Projected event state built from stored message-event state, not the raw append log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|msg_event_seq|integer(uint64)|false|none|Event sequence number.|
|event_id|string|false|none|Last event ID applied to this event key.|
|event_key|string|false|none|Event key identifier.|
|event_type|string|false|none|Last event type applied to this event key.|
|visibility|string|false|none|Visibility of the last event.|
|occurred_at|integer(int64)|false|none|Timestamp of the last event in milliseconds.|
|payload|object|false|none|Projected payload/snapshot. For text streams, typically `{"kind":"text","text":"..."}`.|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": "Invalid request",
  "message": "The provided parameters are invalid"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|Error message|
|message|string|false|none|Detailed error description|
