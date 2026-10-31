<h1 id="tailscale-api">Tailscale API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

### Overview

**The API endpoints documented here are stable unless otherwise noted. However, the OpenAPI spec used to generate this documentation is unstable. It may change or break without notice.**

The Tailscale API is a (mostly) RESTful API. Typically, both POST bodies and responses are JSON-encoded.

### Base URL

The base URL for the Tailscale API is https://api.tailscale.com/api/v2/.

Examples in this document may abbreviate this to `/api/v2/`.

### Authentication

Requests to the Tailscale API are authenticated with an API access token (sometimes called an API key).
Access tokens can be supplied as the username portion of HTTP Basic authentication
(leave the password blank) or as an OAuth Bearer token:

```sh
# passing token with basic auth
curl -u "tskey-api-xxxxx:" https://api.tailscale.com/api/v2/...

# passing token as bearer token
curl -H "Authorization: Bearer tskey-api-xxxxx" https://api.tailscale.com/api/v2/...
```

Access tokens for individual users can be created and managed from the [Keys](https://login.tailscale.com/admin/settings/keys) page of the admin console. These tokens will have the same permissions as the owning user, and can be set to expire in 1 to 90 days. Access tokens are identifiable by the prefix tskey-api-.

Alternatively, a trust credential (OAuth client or federated identity) can be used to create short-lived access tokens with scoped permission. Trust credentials don't expire, and can therefore be used to provide ongoing access to the API, creating access tokens as needed. Trust credentials and the access tokens they create are not tied to an individual Tailscale user. OAuth client secrets are identifiable by the prefix tskey-client-. Learn more about [trust credentials][docs-trust-credentials].

[docs-trust-credentials]: https://tailscale.com/docs/reference/trust-credentials

### Errors

The Tailscale API returns status codes consistent with standard HTTP conventions. In addition to the status code, errors may include additional information in the response body:

```json
{
  "message": "additional error information"
}
```

### Pagination

The Tailscale API does not currently support pagination. All results are returned at once.

Base URLs:

* <a href="https://api.tailscale.com/api/v2">https://api.tailscale.com/api/v2</a>

<a href="https://tailscale.com/terms">Terms of service</a>
License: <a href="https://github.com/tailscale/tailscale/blob/main/LICENSE">BSD 3-Clause</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="tailscale-api-devices">Devices</h1>

Manage devices.
Learn more about [managing devices](/docs/features/access-control/device-management).


## List tailnet devices

<a id="opIdlistTailnetDevices"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/devices`

Lists the devices in a tailnet.

OAuth Scope: `devices:core:read`.


<h3 id="list-tailnet-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|fields|query|string|false|Optionally controls whether the response returns **all** fields or only a predefined subset of fields.<br>Currently, there are two supported options:<br><br>- **`all`:** return all fields in the response<br>- **`default`:** return the following fields<br>  - `addresses`<br>  - `id`<br>  - `nodeId`<br>  - `user`<br>  - `name`<br>  - `hostname`<br>  - `clientVersion`<br>  - `updateAvailable`<br>  - `os`<br>  - `created`<br>  - `connectedToControl`<br>  - `lastSeen`<br>  - `keyExpiryDisabled`<br>  - `expires`<br>  - `authorized`<br>  - `isExternal`<br>  - `machineKey`<br>  - `nodeKey`<br>  - `blocksIncomingConnections`<br>  - `tailnetLockKey`<br>  - `tailnetLockError`<br>  - `tags`<br>  - `isEphemeral`<br><br>If the `fields` parameter is not supplied, then the default (limited fields) option is used.<br>|
|<field>=<value> filters|query|string|false|This endpoint supports server-side filtering of devices by specifying one<br>or more filters in the form `<field>=<value>`. Fields must be a top-level<br>device property - e.g. `isEphemeral`, `tags`, `hostname`, etc. Values are<br>matched as _exact_ matches. Properties with simple types (strings, numbers,<br>dates, etc) and lists are supported. Properties that are complex objects<br>(e.g. `clientConnectivity`) are not supported. When multiple parameters are<br>provided, the server performs a logical `AND` across all filter parameters<br>before returning results. For example,<br>`isEphemeral=true&tags=tag:prod&tags=tag:subnetrouter` would return devices<br>where `isEphemeral` is `true` and `tags` contains both `tag:prod` and<br>`tag:subnetrouter`.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|default|

> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "addresses": [
        "100.87.74.78",
        "fd7a:115c:a1e0:ac82:4843:ca90:697d:c36e"
      ],
      "id": "92960230385",
      "nodeId": "n292kg92CNTRL",
      "user": "amelie@example.com",
      "name": "pangolin.tailfe8c.ts.net",
      "hostname": "pangolin",
      "clientVersion": "v1.36.0",
      "updateAvailable": false,
      "os": "linux",
      "created": "2022-12-01T05:23:30Z",
      "connectedToControl": true,
      "lastSeen": "2022-12-01T05:23:30Z",
      "keyExpiryDisabled": false,
      "expires": "2023-05-30T04:44:05Z",
      "authorized": false,
      "isExternal": false,
      "multipleConnections": true,
      "machineKey": "",
      "nodeKey": "nodekey:01234567890abcdef",
      "blocksIncomingConnections": false,
      "enabledRoutes": [
        "10.0.0.0/16",
        "192.168.1.0/24"
      ],
      "advertisedRoutes": [
        "10.0.0.0/16",
        "192.168.1.0/24"
      ],
      "clientConnectivity": {
        "endpoints": [
          "199.9.14.201:59128",
          "192.68.0.21:59128"
        ],
        "latency": {
          "Dallas": {
            "latencyMs": 60.463043
          },
          "New York City": {
            "preferred": true,
            "latencyMs": 31.323811
          }
        },
        "mappingVariesByDestIP": false,
        "clientSupports": {
          "hairPinning": null,
          "ipv6": false,
          "pcp": false,
          "pmp": false,
          "udp": false,
          "upnp": false
        }
      },
      "tags": [
        "tag:golink"
      ],
      "tailnetLockError": "",
      "tailnetLockKey": "",
      "sshEnabled": false,
      "postureIdentity": {
        "serialNumbers": [
          "CP74LFQJXM"
        ]
      },
      "postureStatus": {
        "passing": true,
        "impacting": true,
        "failingAssertions": [
          "string"
        ]
      },
      "isEphemeral": false,
      "distro": {
        "name": "ubuntu",
        "version": "25.04",
        "codeName": "Plucky Puffin"
      }
    }
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="list-tailnet-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<h3 id="list-tailnet-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[[Device](#schemadevice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Batch update custom device posture attributes

<a id="opIdbatchUpdateCustomDevicePostureAttributes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/device-attributes \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "nodes": {
      "nPM2KNuedB21DEVEL": {
        "custom:myattr": {
          "value": "my_value"
        }
      },
      "nPpz3VEKzX11DEVEL": {
        "custom:flag": {
          "value": true,
          "expiry": "2025-09-19T15:00:00Z"
        }
      }
    },
    "comment": "bulk posture attribute update"
  }'
```

`PATCH /tailnet/{tailnet}/device-attributes`

Batch updates posture attributes across devices in a tailnet.

This endpoint uses [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7396) semantics.
Specifying `null` for an attribute will delete that attribute.

Attributes must be in the `custom:` namespace.

OAuth Scope: `devices:posture_attributes`.


> Body parameter

```json
{
  "nodes": {
    "nPM2KNuedB21DEVEL": {
      "custom:myattr": {
        "value": "my_value"
      }
    },
    "nPpz3VEKzX11DEVEL": {
      "custom:flag": {
        "value": true,
        "expiry": "2025-09-19T15:00:00Z"
      }
    }
  },
  "comment": "bulk posture attribute update"
}
```

<h3 id="batch-update-custom-device-posture-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|true|none|
|» nodes|body|object|false|A mapping of deviceId → posture attributes.<br>|
|» » **additionalProperties**|body|object|false|A mapping of attribute name → attribute configuration for this device.<br>|
|» » » **additionalProperties**|body|object \| null|false|Attribute configuration with value and optional expiry, or `null` to delete the attribute.<br>|
|» » » » *anyOf*|body|object|false|none|
|» » » » value|body|string \| number \| boolean|true|Attribute value.<br>|
|» » » » » *anyOf*|body|string|false|none|
|» » » » » *anyOf*|body|number|false|none|
|» » » » » *anyOf*|body|boolean|false|none|
|» » » » expiry|body|string(date-time)|false|Optional expiry time for the attribute.<br>If set, Tailscale automatically removes the attribute within<br>a few minutes after the specified time.<br>|
|» » » » *anyOf*|body|null|false|none|
|» comment|body|string|false|An optional comment indicating why attributes are being set,<br>which will be added to the audit log.<br>|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="batch-update-custom-device-posture-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a device

<a id="opIdgetDevice"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /device/{deviceId}`

Retrieve the details for the specified device.

OAuth Scope: `devices:core:read`.


<h3 id="get-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|Optionally controls whether the response returns **all** fields or only a predefined subset of fields.<br>Currently, there are two supported options:<br><br>- **`all`:** return all fields in the response<br>- **`default`:** return the following fields<br>  - `addresses`<br>  - `id`<br>  - `nodeId`<br>  - `user`<br>  - `name`<br>  - `hostname`<br>  - `clientVersion`<br>  - `updateAvailable`<br>  - `os`<br>  - `created`<br>  - `connectedToControl`<br>  - `lastSeen`<br>  - `keyExpiryDisabled`<br>  - `expires`<br>  - `authorized`<br>  - `isExternal`<br>  - `machineKey`<br>  - `nodeKey`<br>  - `blocksIncomingConnections`<br>  - `tailnetLockKey`<br>  - `tailnetLockError`<br>  - `tags`<br>  - `isEphemeral`<br><br>If the `fields` parameter is not supplied, then the default (limited fields) option is used.<br>|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|default|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "100.87.74.78",
    "fd7a:115c:a1e0:ac82:4843:ca90:697d:c36e"
  ],
  "id": "92960230385",
  "nodeId": "n292kg92CNTRL",
  "user": "amelie@example.com",
  "name": "pangolin.tailfe8c.ts.net",
  "hostname": "pangolin",
  "clientVersion": "v1.36.0",
  "updateAvailable": false,
  "os": "linux",
  "created": "2022-12-01T05:23:30Z",
  "connectedToControl": true,
  "lastSeen": "2022-12-01T05:23:30Z",
  "keyExpiryDisabled": false,
  "expires": "2023-05-30T04:44:05Z",
  "authorized": false,
  "isExternal": false,
  "multipleConnections": true,
  "machineKey": "",
  "nodeKey": "nodekey:01234567890abcdef",
  "blocksIncomingConnections": false,
  "enabledRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "advertisedRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "clientConnectivity": {
    "endpoints": [
      "199.9.14.201:59128",
      "192.68.0.21:59128"
    ],
    "latency": {
      "Dallas": {
        "latencyMs": 60.463043
      },
      "New York City": {
        "preferred": true,
        "latencyMs": 31.323811
      }
    },
    "mappingVariesByDestIP": false,
    "clientSupports": {
      "hairPinning": null,
      "ipv6": false,
      "pcp": false,
      "pmp": false,
      "udp": false,
      "upnp": false
    }
  },
  "tags": [
    "tag:golink"
  ],
  "tailnetLockError": "",
  "tailnetLockKey": "",
  "sshEnabled": false,
  "postureIdentity": {
    "serialNumbers": [
      "CP74LFQJXM"
    ]
  },
  "postureStatus": {
    "passing": true,
    "impacting": true,
    "failingAssertions": [
      "string"
    ]
  },
  "isEphemeral": false,
  "distro": {
    "name": "ubuntu",
    "version": "25.04",
    "codeName": "Plucky Puffin"
  }
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="get-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Device](#schemadevice)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a device

<a id="opIddeleteDevice"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /device/{deviceId}`

Deletes the device from its tailnet.
The device must belong to the requesting user's tailnet.
Deleting devices shared with the tailnet is not supported.

OAuth Scope: `devices:core`.


<h3 id="delete-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 501 Response

```json
{
  "message": "not implemented"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="delete-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|501|Not Implemented|Not implemented.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Expire a device's key

<a id="opIdexpireDeviceKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/expire \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /device/{deviceId}/expire`

Mark a device's node key as expired.
This will require the device to re-authenticate in order to connect to the tailnet.
The device must belong to the requesting user's tailnet.

OAuth Scope: `devices:core`.


<h3 id="expire-a-devices-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="expire-a-devices-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List device routes

<a id="opIdlistDeviceRoutes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/routes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /device/{deviceId}/routes`

Retrieve the list of subnet routes that a device is advertising,
as well as those that are enabled for it.

Routes must be both advertised and enabled for a device to act as a subnet router or exit node.
If a device has advertised routes, they are not exposed to traffic until they are enabled.
Conversely, if routes are enabled before they are advertised, they are not available for routing until the device in question has advertised them.

Learn more about [subnet routers](/docs/features/subnet-routers) and [exit nodes](/docs/features/exit-nodes).

OAuth Scope: `devices:routes:read`.


<h3 id="list-device-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 200 Response

```json
{
  "advertisedRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "enabledRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="list-device-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DeviceRoutes](#schemadeviceroutes)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set device routes

<a id="opIdsetDeviceRoutes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/routes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "routes": [
      "10.0.0.0/16",
      "192.168.1.0/24"
    ]
  }'
```

`POST /device/{deviceId}/routes`

Set a device's enabled subnet routes by replacing the existing list of subnet routes with the supplied parameters.
[Advertised routes](/docs/features/subnet-routers#advertise-subnet-routes) cannot be set through the API, since they must be set directly on the device.

Routes must be both advertised and enabled for a device to act as a subnet router or exit node.
If a device has advertised routes, they are not exposed to traffic until they are enabled.
Conversely, if routes are enabled before they are advertised, they are not available for routing until the device in question has advertised them.

Learn more about [subnet routers](/docs/features/subnet-routers) and [exit nodes](/docs/features/exit-nodes).

OAuth Scope: `devices:routes`.


> Body parameter

```json
{
  "routes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ]
}
```

<h3 id="set-device-routes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|true|none|
|» routes|body|[string]|false|The new list of enabled subnet routes.<br>|

> Example responses

> 200 Response

```json
{
  "advertisedRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "enabledRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="set-device-routes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DeviceRoutes](#schemadeviceroutes)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Authorize device

<a id="opIdauthorizeDevice"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/authorized \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorized": true
  }'
```

`POST /device/{deviceId}/authorized`

This call marks a device as authorized or revokes its authorization for tailnets where device authorization is required,
according to the authorized field in the payload.

OAuth Scope: `devices:core`.


> Body parameter

```json
{
  "authorized": true
}
```

<h3 id="authorize-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|false|none|
|» authorized|body|boolean|true|- If `true`, authorize a new device or re-authorize a previously deauthorized device.<br>- If `false`, deauthorize an authorized device.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 402 Response

```json
{
  "message": "payment required"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="authorize-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|402|Payment Required|Payment required. The tailnet's plan or billing state does not allow the<br>operation, and resolving it requires a billing change rather than a<br>different request. The `message` field says which change.<br>|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set device name

<a id="opIdsetDeviceName"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/name \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "dev-server"
  }'
```

`POST /device/{deviceId}/name`

When a device is added to a tailnet, its Tailscale [device name](https://tailscale.com/docs/concepts/machine-names) (also sometimes referred to as machine name) is generated from its OS hostname.
The device name is the canonical name for the device on your tailnet.

Device name changes immediately get propogated through your tailnet, so be aware that any existing [Magic DNS](https://tailscale.com/docs/features/magicdns) URLs using the old name will no longer work.

OAuth Scope: `devices:core`.


> Body parameter

```json
{
  "name": "dev-server"
}
```

<h3 id="set-device-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|false|none|
|» name|body|string|true|The new name for the device.<br><br>This can be provided as either the fully qualified domain name for the device (e.g. "nodename.your-domain.ts.net")<br>or just the base name (e.g. "nodename").<br><br>If `name` is unset or provided empty, the device's name is reset to be<br>generated from its OS hostname.<br>|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="set-device-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set device tags

<a id="opIdsetDeviceTags"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tags": [
      "tag:foo",
      "tag:bar"
    ]
  }'
```

`POST /device/{deviceId}/tags`

Tags let you assign an identity to a device that is separate from human users, and use that identity as part of an ACL to restrict access.
Tags are similar to role accounts, but more flexible.

Tags are created in the tailnet policy file by defining the tag and an owner of the tag.
Once a device is tagged, the tag is the owner of that device.
A single node can have multiple tags assigned.

Consult the policy file for your tailnet in the [admin console](https://login.tailscale.com/admin/acls) for the list of tags that have been created for your tailnet.
Learn more about [tags](https://tailscale.com/docs/features/tags).

OAuth Scope: `devices:core`.


> Body parameter

```json
{
  "tags": [
    "tag:foo",
    "tag:bar"
  ]
}
```

<h3 id="set-device-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|false|none|
|» tags|body|[string]|false|The new list of tags for the device.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="set-device-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update device key

<a id="opIdupdateDeviceKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/key \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "keyExpiryDisabled": true
  }'
```

`POST /device/{deviceId}/key`

When a device is added to a tailnet, its key expiry is set according to the tailnet's key expiry setting.
If the key is not refreshed and expires, the device can no longer communicate with other devices in the tailnet.

OAuth Scope: `devices:core`.


> Body parameter

```json
{
  "keyExpiryDisabled": true
}
```

<h3 id="update-device-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|false|none|
|» keyExpiryDisabled|body|boolean|true|- If `true`, disable the device's key expiry. The original key expiry time is still maintained. Upon re-enabling, the key will expire at that original time.<br>- If `false`, enable the device's key expiry. Sets the key to expire at the original expiry time prior to disabling. The key may already have expired. In that case, the device must be re-authenticated.<br>|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="update-device-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set device IPv4 address

<a id="opIdsetDeviceIp"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/ip \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ipv4": "100.80.0.1"
  }'
```

`POST /device/{deviceId}/ip`

When a device is added to a tailnet, its Tailscale IPv4 address is set at random either from the CGNAT range,
or a subset of the CGNAT range specified by an [ip pool](https://tailscale.com/docs/reference/ip-pool).
This endpoint can be used to replace the existing IPv4 address with a specific value.

This action will break any existing connections to this machine.
You will need to reconnect to this machine using the new IP address.
You may also need to flush your DNS cache.

OAuth Scope: `devices:core`.


> Body parameter

```json
{
  "ipv4": "100.80.0.1"
}
```

<h3 id="set-device-ipv4-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|false|none|
|» ipv4|body|string|true|The new IPv4 address for the device.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="set-device-ipv4-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get device posture attributes

<a id="opIdgetDevicePostureAttributes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/attributes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /device/{deviceId}/attributes`

Retrieve all posture attributes for the specified device.
This returns a JSON object of all the key-value pairs of posture attributes for the device.

OAuth Scope: `devices:posture_attributes:read`.


<h3 id="get-device-posture-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "custom:myScore": 80,
    "custom:diskEncryption": true,
    "custom:myAttribute": "my_value",
    "node:os": "linux",
    "node:osVersion": "5.19.0-42-generic",
    "node:tsReleaseTrack": "stable",
    "node:tsVersion": "1.40.0",
    "node:tsAutoUpdate": false,
    "node:tsStateEncrypted": false
  },
  "expiries": {
    "custom:myScore": "2024-04-23T18:25:43.511Z"
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="get-device-posture-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DevicePostureAttributes](#schemadevicepostureattributes)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set custom device posture attributes

<a id="opIdsetCustomDevicePostureAttributes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/attributes/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": "my_value",
    "expiry": "2022-12-01T05:23:30Z",
    "comment": "string"
  }'
```

`POST /device/{deviceId}/attributes/{attributeKey}`

Create or update a custom posture attribute on the specified device.
User-managed attributes must be in the custom namespace,
which is indicated by prefixing the attribute key with `custom:`.

OAuth Scope: `devices:posture_attributes`.


> Body parameter

```json
{
  "value": "my_value",
  "expiry": "2022-12-01T05:23:30Z",
  "comment": "string"
}
```

<h3 id="set-custom-device-posture-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|attributeKey|path|string|true|The name of the posture attribute to set.<br>This must be prefixed with `custom`:<br><br>Keys have a maximum length of 128 characters including the namespace,<br>and can only contain letters, numbers, underscores, and colon.<br><br>Keys are case-sensitive. Keys must be unique,<br>but are checked for uniqueness in a case-insensitive manner.<br>For example, `custom:MyAttribute` and `custom:myattribute` cannot both be set within a single tailnet.<br><br>All values for a given key need to be of the same type,<br>which is determined when the first value is written for a given key.<br>For example, `custom:myattribute` cannot have a numeric value (`87`) for one node and a string value (`"78"`)<br>for another node within the same tailnet.<br>|
|body|body|object|true|none|
|» value|body|string \| number \| boolean|false|A value can be either a string, number or boolean.<br><br>A string value can have a maximum length of 50 characters,<br>and can only contain letters, numbers, underscores, and periods.<br><br>A number value is an integer and must be a JSON safe number (up to 2^53 - 1).<br>|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|boolean|false|none|
|» expiry|body|string(date-time)|false|An optional expiry time for a given posture attribute. If set, Tailscale<br>will automatically remove the attribute within a few minutes after the specified<br>time.<br>|
|» comment|body|string|false|An optional comment indicating a reason why an attribute is set,<br>which will be added to the audit log.<br>|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "custom:myScore": 80,
    "custom:diskEncryption": true,
    "custom:myAttribute": "my_value",
    "node:os": "linux",
    "node:osVersion": "5.19.0-42-generic",
    "node:tsReleaseTrack": "stable",
    "node:tsVersion": "1.40.0",
    "node:tsAutoUpdate": false,
    "node:tsStateEncrypted": false
  },
  "expiries": {
    "custom:myScore": "2024-04-23T18:25:43.511Z"
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 429 Response

```json
{
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="set-custom-device-posture-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DevicePostureAttributes](#schemadevicepostureattributes)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete custom device posture attributes

<a id="opIddeleteCustomDevicePostureAttributes"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/attributes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /device/{deviceId}/attributes/{attributeKey}`

Delete a posture attribute from the specified device.
This is only applicable to user-managed posture attributes in the custom namespace,
which is indicated by prefixing the attribute key with `custom:`.

OAuth Scope: `devices:posture_attributes`.


<h3 id="delete-custom-device-posture-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|attributeKey|path|string|true|The name of the posture attribute to set.<br>This must be prefixed with `custom`:<br><br>Keys have a maximum length of 128 characters including the namespace,<br>and can only contain letters, numbers, underscores, and colon.<br><br>Keys are case-sensitive. Keys must be unique,<br>but are checked for uniqueness in a case-insensitive manner.<br>For example, `custom:MyAttribute` and `custom:myattribute` cannot both be set within a single tailnet.<br><br>All values for a given key need to be of the same type,<br>which is determined when the first value is written for a given key.<br>For example, `custom:myattribute` cannot have a numeric value (`87`) for one node and a string value (`"78"`)<br>for another node within the same tailnet.<br>|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 429 Response

```json
{
  "message": "too many requests"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="delete-custom-device-posture-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|429|Too Many Requests|Too Many Requests.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-policyfile">PolicyFile</h1>

Manage a tailnet's policy file.
Learn more about the [policy file and ACLs](/docs/features/access-control/acls).


## Get policy file

<a id="opIdgetPolicyFile"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/acl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/acl`

Retrieves the current policy file for the given tailnet; 
this includes the ACL along with the rules and tests that have been defined.

This method can return the policy file as JSON or HuJSON, depending on the Accept header.
The response also includes an `ETag` header, which can be optionally included when [setting the policy file](#tag/policyfile/post/tailnet/{tailnet}/acl) to avoid missed updates.

Learn more about [policy file ACL syntax](https://tailscale.com/docs/reference/syntax/policy-file).

OAuth Scope: `policy_file:read`.


<h3 id="get-policy-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|details|query|boolean|false|Request a detailed description of the tailnet policy file by providing `details=true` in the URL query string.<br>Supplying any other value for `details`, or not sending the param, is treated as sending `details=false`.<br>If using this, do not supply an `Accept` parameter in the header.<br><br>The response will contain a JSON object with the fields:<br>- `acl`: a base64-encoded string representation of the huJSON format.<br>- `warnings`: array of strings for syntactically valid but nonsensical entries.<br>- `errors`: an array of strings for parsing failures.<br>|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|Accept|header|string|false|Response is encoded as JSON if `application/json` is requested, otherwise HuJSON will be returned.|

> Example responses

> 200 Response

```json
{
  "acls": [
    {
      "action": "accept",
      "ports": [
        "*:*"
      ],
      "users": [
        "*"
      ]
    }
  ],
  "groups": {
    "group:example": [
      "user1@example.com",
      "user2@example.com"
    ]
  },
  "hosts": {
    "example-host-1": "100.100.100.100"
  }
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-policy-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set policy file

<a id="opIdsetPolicyFile"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/acl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acls": [
      {
        "action": "accept",
        "ports": [
          "*:*"
        ],
        "users": [
          "*"
        ]
      }
    ],
    "groups": {
      "group:example": [
        "user1@example.com",
        "user2@example.com"
      ]
    },
    "hosts": {
      "example-host-1": "100.100.100.100"
    }
  }'
```

`POST /tailnet/{tailnet}/acl`

Sets the ACL for the given tailnet. HuJSON and JSON are both accepted inputs.
An `If-Match` header can be set to avoid missed updates.

On success, returns the updated ACL in JSON or HuJSON according to the `Accept` header.
Otherwise, errors are returned for incorrectly defined ACLs, ACLs with failing tests on attempted updates, and mismatched `If-Match` header and `ETag`.

Learn more about [policy file ACL syntax](https://tailscale.com/docs/reference/syntax/policy-file).

OAuth Scope: `policy_file`.


> Body parameter

```json
{
  "acls": [
    {
      "action": "accept",
      "ports": [
        "*:*"
      ],
      "users": [
        "*"
      ]
    }
  ],
  "groups": {
    "group:example": [
      "user1@example.com",
      "user2@example.com"
    ]
  },
  "hosts": {
    "example-host-1": "100.100.100.100"
  }
}
```

<h3 id="set-policy-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Match|header|string|false|This is a safety mechanism to avoid overwriting other users' updates to the tailnet policy file.<br><br>- Set the `If-Match` value to that of the `ETag` header returned in a `GET` request to `/api/v2/tailnet/{tailnet}/acl`.<br>  Tailscale compares the `ETag` value in your request to that of the current tailnet file and only replaces the file if there's a match.<br>  (A mismatch indicates that another update has been made to the file.) For example: `-H "If-Match: \"e0b2816b418\""`.<br>- Alternately, set the `If-Match` value to `ts-default` to ensure that the policy file is replaced *only if the current policy file is still the untouched default created automatically* for each tailnet.<br>  For example: `-H "If-Match: \"ts-default\""`.<br>|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|Accept|header|string|false|Response is encoded as JSON if `application/json` is requested, otherwise HuJSON will be returned.|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "acls": [
    {
      "action": "accept",
      "ports": [
        "*:*"
      ],
      "users": [
        "*"
      ]
    }
  ],
  "groups": {
    "group:example": [
      "user1@example.com",
      "user2@example.com"
    ]
  },
  "hosts": {
    "example-host-1": "100.100.100.100"
  }
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 412 Response

```json
{
  "message": "precondition failed, invalid old hash"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-policy-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|412|Precondition Failed|If-Match hash mismatch.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Preview rule matches

<a id="opIdpreviewRuleMatches"></a>

> Code samples

```bash
curl 'https://api.tailscale.com/api/v2/tailnet/example.com/acl/preview?type=user&previewFor=10.0.0.1%3A80' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "acls": [
      {
        "action": "accept",
        "ports": [
          "*:*"
        ],
        "users": [
          "*"
        ]
      }
    ],
    "groups": {
      "group:example": [
        "user1@example.com",
        "user2@example.com"
      ]
    },
    "hosts": {
      "example-host-1": "100.100.100.100"
    }
  }'
```

`POST /tailnet/{tailnet}/acl/preview`

When given a user or IP port to match against,
returns the tailnet policy rules that apply to that resource,
without saving the policy file to the server.


> Body parameter

```json
{
  "acls": [
    {
      "action": "accept",
      "ports": [
        "*:*"
      ],
      "users": [
        "*"
      ]
    }
  ],
  "groups": {
    "group:example": [
      "user1@example.com",
      "user2@example.com"
    ]
  },
  "hosts": {
    "example-host-1": "100.100.100.100"
  }
}
```

<h3 id="preview-rule-matches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|type|query|string|true|Specify for which type of resource (user or IP port) matching rules are to be fetched.<br>Read about [previewing changes in the admin console](https://tailscale.com/docs/features/tailnet-policy-file/manage-tailnet-policies#preview-changes).<br><br>OAuth Scope: `policy_file:read`.<br>|
|previewFor|query|string|true|- If `type` is `user`, provide the email of a valid user with registered machines.<br>- If `type` is `ipport`, provide an IP address + port: `10.0.0.1:80`.<br><br>The supplied policy file is queried with this parameter to determine which rules match.<br>|
|body|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|user|
|type|ipport|

> Example responses

> 200 Response

```json
{
  "matches": [
    {
      "users": [
        "*"
      ],
      "ports": [
        "*.*"
      ],
      "lineNumber": 19
    }
  ],
  "type": "user",
  "previewFor": "user1@example.com"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="preview-rule-matches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of rules that apply to the resource.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="preview-rule-matches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[object]|true|none|none|
|» users|[string]|true|none|Source entities affected by the rule.<br>|
|» ports|[string]|true|none|Destinations that can be accessed.<br>|
|» lineNumber|integer|true|none|The rule's location in the policy file.<br>|
|type|string|true|none|Echoes the `type` provided in the request.<br>|
|previewFor|string|true|none|Echoes the `previewFor` provided in the request.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Validate and test policy file

<a id="opIdvalidateAndTestPolicyFile"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/acl/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "src": "user1@example.com",
      "accept": [
        "example-host-1:22"
      ],
      "deny": [
        "example-host-2:100"
      ]
    }
  ]'
```

`POST /tailnet/{tailnet}/acl/validate`

This endpoint works in one of two modes, neither of which modifies your current tailnet policy file:

- Run ACL tests: When the request body contains ACL tests as a JSON array,
  Tailscale runs ACL tests against the tailnet's current policy file.
  Learn more about [ACL tests](https://tailscale.com/docs/reference/syntax/policy-file#tests).
- Validate a new policy file: When the request body is a JSON object,
  Tailscale interprets the body as a hypothetical new tailnet policy file with new ACLs,
  including any new rules and tests.
  It validates that the policy file is parsable and runs tests to validate the existing rules.

In either case, this method does not modify the tailnet policy file in any way.

OAuth Scope: `policy_file:read`.


> Body parameter

```json
[
  {
    "src": "user1@example.com",
    "accept": [
      "example-host-1:22"
    ],
    "deny": [
      "example-host-2:100"
    ]
  }
]
```

<h3 id="validate-and-test-policy-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[object] \| string|false|none|
|» *oneOf*|body|[object]|false|Array of ACL tests.<br>|
|» src|body|string|true|Specifies the user identity to test, which can be <br>a [user's email address](https://tailscale.com/docs/reference/syntax/policy-file#reference-users),<br>a [group](https://tailscale.com/docs/reference/syntax/policy-file#groups),<br>a [tag](https://tailscale.com/docs/features/tags),<br>or a [host](https://tailscale.com/docs/reference/syntax/policy-file#hosts) that maps to an IP address.<br>The test case runs from the perspective of a device authenticated with the provided identity.<br>|
|» srcPostureAttrs|body|object|false|Specifies the [device posture attributes](https://tailscale.com/docs/reference/syntax/policy-file#proto-1)<br>as key-value pairs to use when evaluating posture conditions in access rules.<br>You only need to use this field if the access rules contain <br>[device posture conditions](https://tailscale.com/docs/features/device-posture#device-posture-conditions).<br>|
|» » **additionalProperties**|body|string \| number \| boolean|false|none|
|» » » *anyOf*|body|string|false|none|
|» » » *anyOf*|body|number|false|none|
|» » » *anyOf*|body|boolean|false|none|
|» proto|body|string|false|Specifies the IP protocol for `accept` and `deny` rules,<br>similar to the `proto` field in [ACL rules](https://tailscale.com/docs/reference/syntax/policy-file#acls).<br>When omitted, the test checks for either TCP or UDP access.<br>|
|» accept|body|[string]|false|Specifies destinations to accept. Each destination in the list is of the form `host:port`<br>where `port` is a single numeric port and `host` is in the format described in the<br>[acl syntax](https://tailscale.com/docs/reference/syntax/policy-file#accept-and-deny-destinations) documentation.<br><br>Sources in `src` and `destinations` must refer to specific entities and do not support `*` wildcards.<br>For example, an `accept` destination cannot be `tags:*`.<br>|
|» deny|body|[string]|false|Specifies destinations to deny. Each destination in the list is of the form `host:port`<br>where `port` is a single numeric port and `host` is in the format described in the<br>[acl syntax](https://tailscale.com/docs/reference/syntax/policy-file#accept-and-deny-destinations) documentation.<br><br>Sources in `src` and `destinations` must refer to specific entities and do not support `*` wildcards.<br>For example, a `deny` destination cannot be `tags:*`.<br>|
|» *oneOf*|body|string|false|The JSON representation of the policy file.<br>|

> Example responses

> 200 Response

```json
{
  "message": "test(s) failed",
  "data": [
    {
      "user": "user1@example.com",
      "errors": [
        "address \"2.2.2.2:22\": want: Drop, got: Accept"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="validate-and-test-policy-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Validation or tests have run. An empty response body implies passing validation or tests.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="validate-and-test-policy-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|data|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-keys">Keys</h1>

Manage auth keys and API access tokens.
Learn more about [auth keys](/docs/features/access-control/auth-keys) and [API access tokens](/docs/reference/tailscale-api#authentication).


## List tailnet keys

<a id="opIdlistTailnetKeys"></a>

> Code samples

```bash
curl 'https://api.tailscale.com/api/v2/tailnet/example.com/keys?all=true' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/keys`

Returns a list of active auth keys, API access tokens and trust credentials.

If the parameter {all} was not specified, the set of keys returned depends on the access token used to make the request:
- If the API call is made with a user-owned API access token, this returns only the keys owned by that user.
- If the API call is made with an access token derived from an OAuth client, this returns all OAuth clients for the tailnet.
- If the API call is made with an access token derived from a federated identity, this returns all federated identities for the tailnet.

OAuth Scope: `api_access_tokens:read` grants access to personal API access tokens.

OAuth Scope: `auth_keys:read` grants access to machine auth keys.

OAuth Scope: `oauth_keys:read` grants access to OAuth clients and OAuth tokens.

OAuth Scope: `federated_keys:read` grants access to federated identities.


<h3 id="list-tailnet-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|all|query|boolean|true|If set to true, this will return all auth keys, API access tokens and OAuth clients for the tailnet.|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "keys": [
    {
      "id": "XXXX14CNTRL",
      "keyType": "client",
      "created": "2021-12-09T23:22:39Z",
      "scopes": [
        "all"
      ],
      "description": "test key",
      "userId": "uscwcTtzzo11DEVEL"
    },
    {
      "id": "XXXXZ3CNTRL",
      "keyType": "api",
      "expirySeconds": 7776000,
      "created": "2021-12-09T23:22:39Z",
      "expires": "2022-03-09T23:22:39Z",
      "scopes": [
        "all"
      ],
      "description": "production key",
      "userId": "uscwcTtzzo11DEVEL"
    },
    {
      "id": "XXXX43CNTRL",
      "keyType": "auth",
      "expirySeconds": 7776000,
      "created": "2021-12-09T23:22:39Z",
      "expires": "2022-03-09T23:22:39Z",
      "capabilities": {
        "devices": {
          "create": {
            "reusable": true,
            "ephemeral": false,
            "preauthorized": true,
            "tags": [
              "tag:example"
            ]
          }
        }
      },
      "description": "dev access",
      "userId": "uscwcTtzzo11DEVEL"
    }
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-tailnet-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-tailnet-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[Key](#schemakey)]|false|none|A list of the active keys.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an auth key or trust credential

<a id="opIdcreateKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "keyType": "auth",
    "description": "dev access",
    "capabilities": {
      "devices": {
        "create": {
          "reusable": true,
          "ephemeral": false,
          "preauthorized": true,
          "tags": [
            "tag:example"
          ]
        }
      }
    },
    "expirySeconds": 86400,
    "scopes": [
      "all:read"
    ],
    "tags": [
      "tag:example"
    ],
    "issuer": "https://example.com",
    "subject": "my-example-subject-*",
    "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
    "customClaimRules": {
      "exampleAdditionalClaim": "valueToMatch",
      "otherAdditionalClaim": "valueWithWildcard*"
    }
  }'
```

`POST /tailnet/{tailnet}/keys`

Creates a new [auth key](https://tailscale.com/docs/features/access-control/auth-keys), or [trust credential](https://tailscale.com/docs/reference/trust-credentials) in the specified tailnet.
Trust credentials include [OAuth clients](https://tailscale.com/docs/features/oauth-clients) and [federated identities](https://tailscale.com/docs/features/workload-identity-federation).
The key will be associated with the user who owns the API access token used to make this call,
or, if the call is made with an access token derived from an OAuth client or federated identity, the key will be owned by the tailnet.

Returns a JSON object with the generated key.
The key should be recorded and kept safe and secure because it wields the capabilities or scopes specified in the request.
The identity of the key is embedded in the key itself and can be used to perform operations on the key (e.g., revoking it or retrieving information about it).
The full key can no longer be retrieved after the initial response.

OAuth Scope: `auth_keys` grants access to create machine auth keys.

OAuth Scope: `oauth_keys` grants access to create OAuth clients.

OAuth Scope: `federated_keys` grants access to created federated identities.


> Body parameter

```json
{
  "keyType": "auth",
  "description": "dev access",
  "capabilities": {
    "devices": {
      "create": {
        "reusable": true,
        "ephemeral": false,
        "preauthorized": true,
        "tags": [
          "tag:example"
        ]
      }
    }
  },
  "expirySeconds": 86400,
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

<h3 id="create-an-auth-key-or-trust-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|false|The supported fields vary depending on the value of the `keyType` field.<br><br>For auth keys, at a minimum, the request POST body must have a `capabilities` object with a `devices` object,<br>though it can be an empty JSON object.<br>With nothing else supplied, such a request generates a single-use key with no tags.<br><br>For OAuth clients, at a minimum the request POST body must have at least one scope.<br><br>For federated identities, at a minimum the request POST body must have at least one scope, a valid issuer, and a subject.<br>|
|» keyType|body|string|false|The type of key to create. Defaults to "auth" if omitted.<br>|
|» description|body|string|false|A short string specifying the purpose of the key. Can be a maximum of 50 alphanumeric characters. Hyphens and spaces are also allowed.<br>|
|» capabilities|body|[KeyCapabilities](#schemakeycapabilities)|false|`capabilities` is a mapping of resources to permissible actions.<br>|
|» expirySeconds|body|integer(int64)|false|Specifies the duration in seconds until the key expires. Defaults to 90 days if not supplied.<br><br>Only applies to auth keys.<br>|
|» scopes|body|[string]|false|A list of scopes to grant to the key. At least one scope is required for OAuth clients and federated identities.<br>See [trust credentials scopes](https://tailscale.com/docs/reference/trust-credentials#scopes) for a list of available scopes.<br><br>Only applies to OAuth clients and federated identities.<br>|
|» tags|body|[string]|false|A list of tags associated to the trust credential. Auth keys created with this credential must have these exact tags, or tags owned by the credential's tags.<br>Mandatory if the scopes include "devices:core" or "auth_keys".<br><br>Only applies to OAuth clients and federated identities.<br>|
|» issuer|body|string(uri)|false|The issuer of the OIDC identity token used in the token exchange. Must be a valid and publicly reachable https:// URL.<br><br>Only applies to federated identities.<br>|
|» subject|body|string|false|The pattern used when matching against the `sub` claim from an OIDC identity token.<br>Patterns can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|
|» audience|body|string|false|The value used when matching against the `aud` claim from an OIDC identity token.<br><br>Specifying the audience is optional as Tailscale will generate a secure audience at creation time by default.<br>It is recommended to let Tailscale generate the audience unless the identity provider you are integrating with<br>requires a specific audience format.<br><br>Only applies to federated identities.<br>|
|» customClaimRules|body|object|false|A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.<br>Patterns can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keyType|auth|
|» keyType|client|
|» keyType|federated|

> Example responses

> 200 Response

```json
{
  "id": "k123456CNTRL",
  "key": "tskey-auth-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "keyType": "auth",
  "expirySeconds": 7776000,
  "created": "2021-12-09T23:22:39Z",
  "updated": "2021-12-09T23:22:39Z",
  "expires": "2022-03-09T23:22:39Z",
  "revoked": "2022-03-12T23:22:39Z",
  "capabilities": {
    "devices": {
      "create": {
        "reusable": true,
        "ephemeral": false,
        "preauthorized": true,
        "tags": [
          "tag:example"
        ]
      }
    }
  },
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "description": "dev access",
  "invalid": false,
  "userId": "uscwcTtzzo11DEVEL",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="create-an-auth-key-or-trust-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Key](#schemakey)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get key

<a id="opIdgetKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/keys/k123456CNTRL \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/keys/{keyId}`

Returns a JSON object with information about a specific api access token, OAuth client, federated identity, or auth key, such as its creation and expiration dates and its capabilities.

OAuth Scope: `api_access_tokens:read` grants access to personal API access tokens.

OAuth Scope: `auth_keys:read` grants access to machine auth keys.

OAuth Scope: `oauth_keys:read` grants access to OAuth clients and OAuth tokens.

OAuth Scope: `federated_keys:read` grants access to federated identities.


<h3 id="get-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|keyId|path|string|true|The id of the key.<br>The key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).<br>|

> Example responses

> 200 Response

```json
{
  "id": "k123456CNTRL",
  "key": "tskey-auth-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "keyType": "auth",
  "expirySeconds": 7776000,
  "created": "2021-12-09T23:22:39Z",
  "updated": "2021-12-09T23:22:39Z",
  "expires": "2022-03-09T23:22:39Z",
  "revoked": "2022-03-12T23:22:39Z",
  "capabilities": {
    "devices": {
      "create": {
        "reusable": true,
        "ephemeral": false,
        "preauthorized": true,
        "tags": [
          "tag:example"
        ]
      }
    }
  },
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "description": "dev access",
  "invalid": false,
  "userId": "uscwcTtzzo11DEVEL",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.<br><br>Response for a revoked (deleted) or expired key will have an `invalid` field set to true.<br>|[Key](#schemakey)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set key

<a id="opIdsetKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/keys/k123456CNTRL \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "keyType": "client",
    "description": "dev access",
    "scopes": [
      "all:read"
    ],
    "tags": [
      "tag:example"
    ],
    "issuer": "https://example.com",
    "subject": "my-example-subject-*",
    "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
    "customClaimRules": {
      "exampleAdditionalClaim": "valueToMatch",
      "otherAdditionalClaim": "valueWithWildcard*"
    }
  }'
```

`PUT /tailnet/{tailnet}/keys/{keyId}`

Set the configuration for an existing OAuth client or federated identity.

OAuth Scope: `oauth_keys` grants access to OAuth clients.

OAuth Scope: `federated_keys` grants access to federated identities.


> Body parameter

```json
{
  "keyType": "client",
  "description": "dev access",
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

<h3 id="set-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|keyId|path|string|true|The id of the key.<br>The key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).<br>|
|body|body|object|false|The supported fields vary depending on the value of the `keyType` field.<br>|
|» keyType|body|string|false|The type of the key being updated.<br>|
|» description|body|string|false|A short string specifying the purpose of the key. Can be a maximum of 50 alphanumeric characters. Hyphens and spaces are also allowed.<br>|
|» scopes|body|[string]|false|A list of scopes to grant to the key. At least one scope is required.<br>See [trust credentials scopes](https://tailscale.com/docs/reference/trust-credentials#scopes) for a list of available scopes.<br>|
|» tags|body|[string]|false|A list of tags associated to the trust credential. Auth keys created with this credential must have these exact tags, or tags owned by the credential's tags.<br>Mandatory if the scopes include "devices:core" or "auth_keys".<br>|
|» issuer|body|string(uri)|false|The issuer of the OIDC identity token used in the token exchange. Must be a valid https:// URL.<br><br>Only applies to federated identities.<br>|
|» subject|body|string|false|The pattern used when matching against the `sub` claim from an OIDC identity token.<br>Patterns can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|
|» audience|body|string|false|The value used when matching against the `aud` claim from an OIDC identity token.<br><br>Only applies to federated identities.<br>|
|» customClaimRules|body|object|false|A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.<br>Patterns can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» keyType|client|
|» keyType|federated|

> Example responses

> 200 Response

```json
{
  "id": "k123456CNTRL",
  "key": "tskey-auth-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "keyType": "auth",
  "expirySeconds": 7776000,
  "created": "2021-12-09T23:22:39Z",
  "updated": "2021-12-09T23:22:39Z",
  "expires": "2022-03-09T23:22:39Z",
  "revoked": "2022-03-12T23:22:39Z",
  "capabilities": {
    "devices": {
      "create": {
        "reusable": true,
        "ephemeral": false,
        "preauthorized": true,
        "tags": [
          "tag:example"
        ]
      }
    }
  },
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "description": "dev access",
  "invalid": false,
  "userId": "uscwcTtzzo11DEVEL",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Key](#schemakey)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete key

<a id="opIddeleteKey"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/keys/k123456CNTRL \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tailnet/{tailnet}/keys/{keyId}`

Deletes a specific api access token or auth key.

OAuth Scope: `api_access_tokens` grants access to personal API access tokens.

OAuth Scope: `auth_keys` grants access to machine auth keys.

OAuth Scope: `oauth_keys` grants access to OAuth clients and OAuth tokens.

OAuth Scope: `federated_keys` grants access to federated identities.


<h3 id="delete-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|keyId|path|string|true|The id of the key.<br>The key ID can be found in the [admin console](https://login.tailscale.com/admin/settings/keys).<br>|

> Example responses

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-dns">DNS</h1>

Manage a tailnet's DNS settings.
Learn more about [DNS in Tailscale](/docs/reference/dns-in-tailscale).


## List DNS nameservers

<a id="opIdlistDnsNameservers"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/nameservers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/dns/nameservers`

Lists the global DNS nameservers for a tailnet.


<h3 id="list-dns-nameservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "dns": [
    "8.8.8.8",
    "1.2.3.4"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-dns-nameservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-dns-nameservers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dns|[string]|false|none|DNS nameservers.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set DNS nameservers

<a id="opIdsetDnsNameservers"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/nameservers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dns": [
      "8.8.8.8",
      "1.2.3.4"
    ]
  }'
```

`POST /tailnet/{tailnet}/dns/nameservers`

Replaces the list of global DNS nameservers for the given tailnet with the list supplied in the request.

Note that changing the list of DNS nameservers may also affect the status of MagicDNS (if MagicDNS is on; learn about [MagicDNS](https://tailscale.com/docs/features/magicdns)).
If all nameservers have been removed, MagicDNS will be automatically disabled (until explicitly turned back on by the user).


> Body parameter

```json
{
  "dns": [
    "8.8.8.8",
    "1.2.3.4"
  ]
}
```

<h3 id="set-dns-nameservers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|false|none|
|» dns|body|[string]|false|DNS nameservers.<br>|

> Example responses

> 200 Response

```json
{
  "dns": [
    "8.8.8.8",
    "1.2.3.4"
  ],
  "magicDNS": true
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-dns-nameservers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="set-dns-nameservers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dns|[string]|false|none|DNS nameservers.<br>|
|magicDNS|boolean|false|none|Whether MagicDNS is active for this tailnet.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get DNS preferences

<a id="opIdgetDnsPreferences"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/preferences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/dns/preferences`

Retrieves the DNS preferences that are currently set for the given tailnet.


<h3 id="get-dns-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "magicDNS": true
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-dns-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|[DnsPreferences](#schemadnspreferences)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set DNS preferences

<a id="opIdsetDnsPreferences"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/preferences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "magicDNS": true
  }'
```

`POST /tailnet/{tailnet}/dns/preferences`

Set the DNS preferences for a tailnet; specifically, the MagicDNS setting.
Note that MagicDNS is dependent on DNS servers.
Learn about [MagicDNS](https://tailscale.com/docs/features/magicdns).

If there is at least one DNS server, then MagicDNS can be enabled.
Otherwise, it returns an error.

Note that removing all nameservers will turn off MagicDNS.
To reenable it, nameservers must be added back, and MagicDNS must be explicitly turned on.


> Body parameter

```json
{
  "magicDNS": true
}
```

<h3 id="set-dns-preferences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[DnsPreferences](#schemadnspreferences)|false|none|
|» magicDNS|body|boolean|true|Whether MagicDNS is active for this tailnet.<br>|

> Example responses

> 200 Response

```json
{
  "magicDNS": true
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-dns-preferences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|[DnsPreferences](#schemadnspreferences)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List DNS search paths

<a id="opIdlistDnsSearchPaths"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/searchpaths \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/dns/searchpaths`

Retrieves the list of search paths, also referred to as *search domains*, that is currently set for the given tailnet.


<h3 id="list-dns-search-paths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-dns-search-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DnsSearchPaths](#schemadnssearchpaths)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set DNS search paths

<a id="opIdsetDnsSearchPaths"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/searchpaths \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "searchPaths": [
      "user1.example.com",
      "user2.example.com"
    ]
  }'
```

`POST /tailnet/{tailnet}/dns/searchpaths`

Replaces the list of search paths for the given tailnet.


> Body parameter

```json
{
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ]
}
```

<h3 id="set-dns-search-paths-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[DnsSearchPaths](#schemadnssearchpaths)|false|none|
|» searchPaths|body|[string]|true|The search domains for the given tailnet.<br>|

> Example responses

> 200 Response

```json
{
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-dns-search-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DnsSearchPaths](#schemadnssearchpaths)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get split DNS

<a id="opIdgetSplitDns"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/split-dns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/dns/split-dns`

Retrieves the split DNS settings, which is a map from domains to lists of nameservers, that is currently set for the given tailnet.


<h3 id="get-split-dns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-split-dns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|[SplitDns](#schemasplitdns)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set split DNS

<a id="opIdsetSplitDns"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/split-dns \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "example.com": [
      "1.1.1.1",
      "1.2.3.4"
    ],
    "other.com": [
      "2.2.2.2"
    ]
  }'
```

`PUT /tailnet/{tailnet}/dns/split-dns`

Replaces the split DNS settings for a given tailnet.
Setting the value of a mapping to `null` clears the nameservers for that domain.
Sending an empty object clears nameservers for all domains.


> Body parameter

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

<h3 id="set-split-dns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[SplitDns](#schemasplitdns)|false|none|
|» **additionalProperties**|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-split-dns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|[SplitDns](#schemasplitdns)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update split DNS

<a id="opIdupdateSplitDns"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/split-dns \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "example.com": [
      "1.1.1.1",
      "1.2.3.4"
    ],
    "other.com": [
      "2.2.2.2"
    ]
  }'
```

`PATCH /tailnet/{tailnet}/dns/split-dns`

Performs partial updates of the split DNS settings for a given tailnet.
Only domains specified in the request map will be modified.
Setting the value of a mapping to `null` clears the nameservers for that domain.


> Body parameter

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

<h3 id="update-split-dns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[SplitDns](#schemasplitdns)|false|none|
|» **additionalProperties**|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-split-dns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Succesful operation.|[SplitDns](#schemasplitdns)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get DNS configuration

<a id="opIdgetDnsConfiguration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/configuration \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/dns/configuration`

Retrieves the full DNS configuration for a tailnet, including global nameservers, split DNS routes, search paths, and MagicDNS configuration.


<h3 id="get-dns-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "nameservers": [
    {
      "address": "8.8.8.8",
      "useWithExitNode": true
    },
    {
      "address": "1.1.1.1",
      "useWithExitNode": false
    }
  ],
  "splitDNS": {
    "corp.example.com": [
      {
        "address": "10.0.0.53",
        "useWithExitNode": true
      },
      {
        "address": "10.0.1.53",
        "useWithExitNode": true
      }
    ],
    "other.internal": [
      {
        "address": "10.0.2.53",
        "useWithExitNode": false
      }
    ]
  },
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ],
  "preferences": {
    "overrideLocalDNS": true,
    "magicDNS": true
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-dns-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DnsConfiguration](#schemadnsconfiguration)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set DNS configuration

<a id="opIdsetDnsConfiguration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/dns/configuration \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "nameservers": [
      {
        "address": "8.8.8.8",
        "useWithExitNode": true
      },
      {
        "address": "1.1.1.1",
        "useWithExitNode": false
      }
    ],
    "splitDNS": {
      "corp.example.com": [
        {
          "address": "10.0.0.53",
          "useWithExitNode": true
        },
        {
          "address": "10.0.1.53",
          "useWithExitNode": true
        }
      ],
      "other.internal": [
        {
          "address": "10.0.2.53",
          "useWithExitNode": false
        }
      ]
    },
    "searchPaths": [
      "user1.example.com",
      "user2.example.com"
    ],
    "preferences": {
      "overrideLocalDNS": true,
      "magicDNS": true
    }
  }'
```

`POST /tailnet/{tailnet}/dns/configuration`

Replaces the DNS configuration for the given tailnet.

- `nameservers` defines the global resolvers to use when `preferences.overrideLocalDNS` is true.
- `splitDNS` maps DNS name suffixes (domains) to lists of resolvers for Split DNS.
- `searchPaths` sets custom DNS search domain paths.
- `preferences.overrideLocalDNS` controls whether resolvers in `nameservers` override the local OS configuration (true) or are used or local resolvers are used (false). Defaults to false.
- `preferences.magicDNS` enables MagicDNS. Defaults to false.


> Body parameter

```json
{
  "nameservers": [
    {
      "address": "8.8.8.8",
      "useWithExitNode": true
    },
    {
      "address": "1.1.1.1",
      "useWithExitNode": false
    }
  ],
  "splitDNS": {
    "corp.example.com": [
      {
        "address": "10.0.0.53",
        "useWithExitNode": true
      },
      {
        "address": "10.0.1.53",
        "useWithExitNode": true
      }
    ],
    "other.internal": [
      {
        "address": "10.0.2.53",
        "useWithExitNode": false
      }
    ]
  },
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ],
  "preferences": {
    "overrideLocalDNS": true,
    "magicDNS": true
  }
}
```

<h3 id="set-dns-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[DnsConfiguration](#schemadnsconfiguration)|false|none|
|» nameservers|body|[[DnsConfigurationResolver](#schemadnsconfigurationresolver)]|false|Global DNS resolvers to use. If `preferences.overrideLocalDNS` is true, these override the local OS configuration; otherwise they are used as fallback resolvers.<br>|
|» splitDNS|body|object|false|Map of DNS name suffixes (domains) to lists of resolvers for Split DNS and advanced routing overlays.<br>|
|» » **additionalProperties**|body|[[DnsConfigurationResolver](#schemadnsconfigurationresolver)]|false|none|
|» searchPaths|body|[string]|false|Search domain paths to apply.<br>|
|» preferences|body|[DnsConfigurationPreferences](#schemadnsconfigurationpreferences)|false|none|

> Example responses

> 200 Response

```json
{
  "nameservers": [
    {
      "address": "8.8.8.8",
      "useWithExitNode": true
    },
    {
      "address": "1.1.1.1",
      "useWithExitNode": false
    }
  ],
  "splitDNS": {
    "corp.example.com": [
      {
        "address": "10.0.0.53",
        "useWithExitNode": true
      },
      {
        "address": "10.0.1.53",
        "useWithExitNode": true
      }
    ],
    "other.internal": [
      {
        "address": "10.0.2.53",
        "useWithExitNode": false
      }
    ]
  },
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ],
  "preferences": {
    "overrideLocalDNS": true,
    "magicDNS": true
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="set-dns-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DnsConfiguration](#schemadnsconfiguration)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-logging">Logging</h1>

Manage and configure network logging, configuration logging, and log streaming for a tailnet.
Learn more about [logging and events](/docs/reference/logging-streaming-events).


## List configuration audit logs

<a id="opIdlistConfigurationAuditLogs"></a>

> Code samples

```bash
curl 'https://api.tailscale.com/api/v2/tailnet/example.com/logging/configuration?start=2023-12-19T16%3A39%3A57-08%3A00&end=2023-12-22T02%3A15%3A23-08%3A00' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/logging/configuration`

List all configuration audit logs for a tailnet.

OAuth Scope: `logs:configuration:read`.


<h3 id="list-configuration-audit-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|start|query|string|true|The start of the time window for which to retrieve logs, in RFC 3339 format.|
|end|query|string|true|The end of the time window for which to retrieve logs, in RFC 3339 format.|
|actor|query|[string]|false|List of filters on actors, either exact actor IDs or a wildcard search on login name or display name indicated as `~search`.|
|target|query|[string]|false|List of target elements for which to filter, attempts to match any part of any of the targets to any of the given strings.|
|event|query|[string]|false|List of events for which to filter.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event|ADMIN_CONSOLE.LOGIN|
|event|ADMIN_CONSOLE.LOGOUT|
|event|API_KEY.CREATE|
|event|API_KEY.EXPIRED|
|event|API_KEY.REVOKE|
|event|BILLING.CANCEL.SUBSCRIPTION|
|event|BILLING.CREATE.SUBSCRIPTION|
|event|BILLING.UPDATE.ADDRESS|
|event|BILLING.UPDATE.BILLING_OWNER|
|event|BILLING.UPDATE.EMAIL|
|event|BILLING.UPDATE.PAYMENT_INFO|
|event|BILLING.UPDATE.STRIPE_CUSTOMER_ID|
|event|BILLING.UPDATE.SUBSCRIPTION|
|event|FAILED_REQUEST.UPDATE|
|event|GROUP.PUSH_GROUP.ATTRIBUTES|
|event|GROUP.UPDATE.USER_ROLE|
|event|INVITE.ACCEPT.FEATURE|
|event|INVITE.ACCEPT.NODE_SHARE|
|event|INVITE.ACCEPT.TAILNET_INVITE|
|event|INVITE.CREATE.FEATURE|
|event|INVITE.CREATE.NODE_SHARE|
|event|INVITE.CREATE.TAILNET_INVITE|
|event|INVITE.DELETE.NODE_SHARE|
|event|INVITE.DELETE.TAILNET_INVITE|
|event|INVITE.RESEND.NODE_SHARE|
|event|INVITE.RESEND.TAILNET_INVITE|
|event|NODE.APPROVE|
|event|NODE.CREATE|
|event|NODE.CREATE.ATTRIBUTES|
|event|NODE.DELETE|
|event|NODE.DELETE.ATTRIBUTES|
|event|NODE.DISABLE.KEY_EXPIRY|
|event|NODE.DISCONNECT_NODE.CLIENT_LOG|
|event|NODE.ENABLE.KEY_EXPIRY|
|event|NODE.EXPIRED.KEY_EXPIRY_TIME|
|event|NODE.LOGIN|
|event|NODE.LOGOUT|
|event|NODE.REVOKE|
|event|NODE.UPDATE.ACL_TAGS|
|event|NODE.UPDATE.ALLOWED_IPS|
|event|NODE.UPDATE.ATTRIBUTES|
|event|NODE.UPDATE.AUTO_APPROVED_ROUTES|
|event|NODE.UPDATE.EXIT_NODE|
|event|NODE.UPDATE.KEY_EXPIRY_TIME|
|event|NODE.UPDATE.MACHINE_NAME|
|event|NODE.UPDATE.POSTURE_IDENTITY|
|event|NODE.UPDATE.TKA|
|event|SHARE.CREATE|
|event|SHARE.DELETE|
|event|SHARE.UPDATE|
|event|TAILNET.ACCEPT.FEATURE|
|event|TAILNET.CREATE|
|event|TAILNET.CREATE.LOGSTREAM_ENDPOINT|
|event|TAILNET.CREATE.POSTURE_INTEGRATION|
|event|TAILNET.CREATE.TKA|
|event|TAILNET.DELETE.LOGSTREAM_ENDPOINT|
|event|TAILNET.DELETE.POSTURE_INTEGRATION|
|event|TAILNET.DELETE.TKA|
|event|TAILNET.DISABLE.COLLECT_POSTURE_IDENTITY|
|event|TAILNET.DISABLE.COLLECT_SERVICES|
|event|TAILNET.DISABLE.FILE_SHARING|
|event|TAILNET.DISABLE.GEOSTEERING|
|event|TAILNET.DISABLE.HTTPS|
|event|TAILNET.DISABLE.LOG_EXIT_FLOWS|
|event|TAILNET.DISABLE.MACHINE_APPROVAL_NEEDED|
|event|TAILNET.DISABLE.MAGIC_DNS|
|event|TAILNET.DISABLE.MULLVAD_VPN|
|event|TAILNET.DISABLE.NETWORK_FLOW_LOGGING|
|event|TAILNET.DISABLE.SCIM|
|event|TAILNET.DISABLE.TKA|
|event|TAILNET.DISABLE.USER_APPROVAL_REQUIRED|
|event|TAILNET.ENABLE.COLLECT_POSTURE_IDENTITY|
|event|TAILNET.ENABLE.COLLECT_SERVICES|
|event|TAILNET.ENABLE.FILE_SHARING|
|event|TAILNET.ENABLE.GEOSTEERING|
|event|TAILNET.ENABLE.HTTPS|
|event|TAILNET.ENABLE.LOG_EXIT_FLOWS|
|event|TAILNET.ENABLE.MACHINE_APPROVAL_NEEDED|
|event|TAILNET.ENABLE.MAGIC_DNS|
|event|TAILNET.ENABLE.MULLVAD_VPN|
|event|TAILNET.ENABLE.NETWORK_FLOW_LOGGING|
|event|TAILNET.ENABLE.SCIM|
|event|TAILNET.ENABLE.TKA|
|event|TAILNET.ENABLE.USER_APPROVAL_REQUIRED|
|event|TAILNET.JOIN|
|event|TAILNET.JOIN_WAITLIST.FEATURE|
|event|TAILNET.LEAVE|
|event|TAILNET.UPDATE.ACCOUNT_EMAIL|
|event|TAILNET.UPDATE.ACL|
|event|TAILNET.UPDATE.DNS_CONFIG|
|event|TAILNET.UPDATE.LOGSTREAM_ENDPOINT|
|event|TAILNET.UPDATE.MAX_KEY_DURATION|
|event|TAILNET.UPDATE.POSTURE_INTEGRATION|
|event|TAILNET.UPDATE.ROUTE_SELECTION|
|event|TAILNET.UPDATE.SECURITY_EMAIL|
|event|TAILNET.UPDATE.SUPPORT_EMAIL|
|event|TAILNET.UPDATE.TCD|
|event|TAILNET.UPDATE.TKA|
|event|TAILNET.VERIFY.ACCOUNT_EMAIL|
|event|TAILNET.VERIFY.SECURITY_EMAIL|
|event|TAILNET.VERIFY.SUPPORT_EMAIL|
|event|USER.APPROVE|
|event|USER.CREATE|
|event|USER.DELETE|
|event|USER.INVITE|
|event|USER.PUSH_USER.ATTRIBUTES|
|event|USER.RESEND.TAILNET_INVITE|
|event|USER.RESTORE|
|event|USER.RESTORE_GLOBAL|
|event|USER.SUSPEND|
|event|USER.SUSPEND_GLOBAL|
|event|USER.UPDATE.USER_ROLE|
|event|WEBHOOK_ENDPOINT.CREATE|
|event|WEBHOOK_ENDPOINT.DELETE|
|event|WEBHOOK_ENDPOINT.UPDATE.SECRET|
|event|WEBHOOK_ENDPOINT.UPDATE.SUBSCRIBED_EVENTS|
|event|WEB_INTERFACE.LOGIN|
|event|WEB_INTERFACE.LOGOUT|
|event|PAM_CONNECTOR.CREATE|
|event|PAM_CONNECTOR.CREATE.ACCESS_TOKEN|
|event|PAM_CONNECTOR.DELETE|
|event|PAM_CONNECTOR.DISABLE.ACCESS_TOKEN|
|event|PAM_CONNECTOR.UPDATE|
|event|PAM_SERVICE.CREATE|
|event|PAM_SERVICE.DELETE|
|event|PAM_SERVICE.UPDATE|
|event|PAM_SERVICE_ACCOUNT.CREATE|
|event|PAM_SERVICE_ACCOUNT.CREATE.ACCESS_TOKEN|
|event|PAM_SERVICE_ACCOUNT.DELETE|
|event|PAM_SERVICE_ACCOUNT.UPDATE|
|event|PAM_SETTINGS.CREATE.CUSTOM_DOMAIN|
|event|PAM_SETTINGS.CREATE.NOTIFICATION|
|event|PAM_SETTINGS.CREATE.RECORDING_STORAGE|
|event|PAM_SETTINGS.DELETE.CUSTOM_DOMAIN|
|event|PAM_SETTINGS.DELETE.NOTIFICATION|
|event|PAM_SETTINGS.DELETE.RECORDING_STORAGE|
|event|PAM_SETTINGS.UPDATE|
|event|PAM_SETTINGS.UPDATE.CUSTOM_DOMAIN|
|event|PAM_SETTINGS.UPDATE.NOTIFICATION|
|event|PAM_SETTINGS.UPDATE.SETUP_WIZARD|

> Example responses

> 200 Response

```json
{
  "version": "1.1",
  "tailnet": "example.com",
  "logs": [
    {
      "action": "CREATE",
      "actor": {
        "displayName": "Lion Dahlia Armadillo",
        "id": "uZKk3KSfrH11DEVEL",
        "loginName": "lion.dahlia.armadillo@example.com",
        "type": "USER"
      },
      "deferredAt": "0001-01-01T00:00:00Z",
      "eventGroupID": "0378d8f57300d172ef7ae3826e097ef0",
      "eventTime": "2024-06-06T15:25:26.583893Z",
      "origin": "ADMIN_CONSOLE",
      "target": {
        "id": "nBLYviWLGB21DEVEL",
        "isEphemeral": true,
        "name": "silver-robin-horse-albatross-armadillo.taile18a.ts.net",
        "type": "NODE"
      },
      "type": "CONFIG"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="list-configuration-audit-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<h3 id="list-configuration-audit-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|Version of audit logs response.|
|tailnet|string|false|none|The tailnet on which the logged configuration changes were made.|
|logs|[[ConfigurationAuditLog](#schemaconfigurationauditlog)]|false|none|Matching log entries, ordered chronologically.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List network flow logs

<a id="opIdlistNetworkFlowLogs"></a>

> Code samples

```bash
curl 'https://api.tailscale.com/api/v2/tailnet/example.com/logging/network?start=2023-12-19T16%3A39%3A57-08%3A00&end=2023-12-22T02%3A15%3A23-08%3A00' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/logging/network`

List all network flow logs for a tailnet.

OAuth Scope: `logs:network:read`.


<h3 id="list-network-flow-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|start|query|string|true|The start of the time window for which to retrieve logs, in RFC 3339 format.|
|end|query|string|true|The end of the time window for which to retrieve logs, in RFC 3339 format.|

> Example responses

> 200 Response

```json
{
  "logs": [
    {
      "logged": "2024-06-06T15:27:26.583893Z",
      "nodeId": "nBLYviWLGB21DEVEL",
      "start": "2024-06-06T15:25:26.583893Z",
      "end": "2024-06-06T15:26:26.583893Z",
      "virtualTraffic": [
        {
          "proto": "ipv4",
          "src": "108.86.185.125:52343",
          "dst": "108.86.185.126:443",
          "txPkts": 10,
          "txBytes": 10000,
          "rxPkts": 10,
          "rxBytes": 10000
        }
      ],
      "subnetTraffic": [
        {
          "proto": "ipv4",
          "src": "108.86.185.125:52343",
          "dst": "108.86.185.126:443",
          "txPkts": 10,
          "txBytes": 10000,
          "rxPkts": 10,
          "rxBytes": 10000
        }
      ],
      "exitTraffic": [
        {
          "proto": "ipv4",
          "src": "108.86.185.125:52343",
          "dst": "108.86.185.126:443",
          "txPkts": 10,
          "txBytes": 10000,
          "rxPkts": 10,
          "rxBytes": 10000
        }
      ],
      "physicalTraffic": [
        {
          "proto": "ipv4",
          "src": "108.86.185.125:52343",
          "dst": "108.86.185.126:443",
          "txPkts": 10,
          "txBytes": 10000,
          "rxPkts": 10,
          "rxBytes": 10000
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 502 Response

```json
{
  "message": "bad gateway"
}
```

<h3 id="list-network-flow-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation. The `logs` field contains an array of [NetworkFlowLog](#model/networkflowlog) objects.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|502|Bad Gateway|Bad gateway.|[Error](#schemaerror)|

<h3 id="list-network-flow-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|[[NetworkFlowLog](#schemanetworkflowlog)]|false|none|Matching log entries, ordered chronologically.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get log streaming status

<a id="opIdgetLogStreamingStatus"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/logging/configuration/stream/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/logging/{logType}/stream/status`

Retrieve the log streaming status for the provided log type.

OAuth Scope: `log_streaming:read`.


<h3 id="get-log-streaming-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|logType|path|[LogType](#schemalogtype)|true|The type of log.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logType|configuration|
|logType|network|

> Example responses

> 200 Response

```json
{
  "lastActivity": "2024-06-10T15:42:13.984555636Z",
  "lastError": "",
  "maxBodySize": 524288,
  "numBytesSent": 17238983,
  "numEntriesSent": 8363,
  "numFailedRequests": 5434,
  "numSpoofedEntries": 0,
  "numTotalRequests": 10610,
  "rateBytesSent": 3.524073767296142,
  "rateEntriesSent": 0.008564949767446907,
  "rateFailedRequests": 4.1431119220540763e-157,
  "rateTotalRequests": 0.0037038341100629453
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 502 Response

```json
{
  "message": "bad gateway"
}
```

<h3 id="get-log-streaming-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[LogstreamEndpointPublishingStatus](#schemalogstreamendpointpublishingstatus)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|502|Bad Gateway|Bad gateway.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get log streaming configuration

<a id="opIdgetLogStreamingConfiguration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/logging/configuration/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/logging/{logType}/stream`

Retrieve the log streaming configuration for the provided log type.

OAuth Scope: `log_streaming:read`.


<h3 id="get-log-streaming-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|logType|path|[LogType](#schemalogtype)|true|The type of log.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logType|configuration|
|logType|network|

> Example responses

> 200 Response

```json
{
  "logType": "configuration",
  "destinationType": "elastic",
  "url": "http://100.71.134.73:80/config-log-datastream",
  "user": "myusername"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="get-log-streaming-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[LogstreamEndpointConfiguration](#schemalogstreamendpointconfiguration)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Set log streaming configuration

<a id="opIdsetLogStreamingConfiguration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/logging/configuration/stream \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationType": "elastic",
    "url": "http://100.71.134.73:80/config-log-datastream",
    "user": "myusername",
    "token": "mytoken"
  }'
```

`PUT /tailnet/{tailnet}/logging/{logType}/stream`

Set the log streaming configuration for the provided log type.

OAuth Scope: `log_streaming`. `device_invites` and `policy_file` are also required if streaming to a [private endpoint](https://tailscale.com/docs/features/logging/log-streaming#private-endpoints).


> Body parameter

```json
{
  "destinationType": "elastic",
  "url": "http://100.71.134.73:80/config-log-datastream",
  "user": "myusername",
  "token": "mytoken"
}
```

<h3 id="set-log-streaming-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|logType|path|[LogType](#schemalogtype)|true|The type of log.|
|body|body|[LogstreamEndpointConfiguration](#schemalogstreamendpointconfiguration)|false|The [LogstreamEndpointConfiguration](#model/logstreamendpointconfiguration) to set.<br>`logType` is specified in the request URL rather than the body.<br>|
|» destinationType|body|string|false|The type of system to which logs are being streamed.|
|» url|body|string|false|The URL to which log streams are being posted. If the DestinationType is `s3`, the URL may be (and often is) empty to use the official Amazon S3 endpoint.|
|» user|body|string|false|The username with which log streams to this endpoint are authenticated.|
|» uploadPeriodMinutes|body|integer|false|An optional number of minutes to wait in between uploading new logs. If the quantity of logs does not fit within a single upload, multiple uploads will be made.|
|» compressionFormat|body|string|false|The compression algorithm with which to compress logs. `none` disables compression. Defaults to `none`.|
|» token|body|string|false|The token/password with which log streams to this endpoint should be authenticated.|
|» s3Bucket|body|string|false|The S3 bucket name. Required if the destinationType is `s3`.|
|» s3Region|body|string|false|The region in which the S3 bucket is located. Required if the destinationType is `s3`.|
|» s3KeyPrefix|body|string|false|An optional S3 key prefix to prepend to the auto-generated S3 key name.|
|» s3AuthenticationType|body|string|false|What type of authentication to use for S3. Required if the destinationType is `s3`. Tailscale recommends using `rolearn`. See [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html).|
|» s3AccessKeyId|body|string|false|The S3 access key ID. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.|
|» s3SecretAccessKey|body|string|false|The S3 secret access key. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.|
|» s3RoleArn|body|string|false|The Role ARN that Tailscale should supply to AWS when authenticating using role-based authentication. Required if the destinationType is `s3` and `authenticationType` is `rolearn`.|
|» gcsBucket|body|string|false|The GCS bucket name. Required if the destinationType is `gcs`.|
|» gcsKeyPrefix|body|string|false|An optional GCS key prefix to append to the GCS bucket name.|
|» gcsScopes|body|[string]|false|The GCS scopes needed to be able to write to the GCS bucket.|
|» gcsCredentials|body|string|false|The JSON workload identity credentials from GCS needed for accessing the GCS account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logType|configuration|
|logType|network|
|» destinationType|splunk|
|» destinationType|elastic|
|» destinationType|panther|
|» destinationType|cribl|
|» destinationType|crowdstrike|
|» destinationType|datadog|
|» destinationType|axiom|
|» destinationType|s3|
|» compressionFormat|zstd|
|» compressionFormat|gzip|
|» compressionFormat|none|
|» s3AuthenticationType|accesskey|
|» s3AuthenticationType|rolearn|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="set-log-streaming-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Disable log streaming

<a id="opIddisableLogStreaming"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/logging/configuration/stream \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tailnet/{tailnet}/logging/{logType}/stream`

Delete the log streaming configuration for the provided log type.

OAuth Scope: `log_streaming`.


<h3 id="disable-log-streaming-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|logType|path|[LogType](#schemalogtype)|true|The type of log.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|logType|configuration|
|logType|network|

> Example responses

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="disable-log-streaming-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create or get AWS external id

<a id="opIdgetAwsExternalId"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/aws-external-id \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reusable": true
  }'
```

`POST /tailnet/{tailnet}/aws-external-id`

Get an AWS external id to use for streaming tailnet logs to S3 using role-based authentication,
creating a new one for this tailnet when necessary.

OAuth Scope: `log_streaming`.


> Body parameter

```json
{
  "reusable": true
}
```

<h3 id="create-or-get-aws-external-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|false|none|
|» reusable|body|boolean|false|If set to true, this same AWS external id will be returned on future calls to this endpoint, if and only if those calls also mark `reusable` as true, and the ID has not yet been linked with an AWS account.|

> Example responses

> 200 Response

```json
{
  "externalId": "60fe9ce7-7791-4ab3-ab34-4294f5972725",
  "tailscaleAwsAccountId": "001234567890"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="create-or-get-aws-external-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[AwsExternalId](#schemaawsexternalid)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Validate external ID integration with IAM role trust policy

<a id="opIdvalidateAwsExternalId"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/aws-external-id/60fe9ce7-7791-4ab3-ab34-4294f5972725/validate-aws-trust-policy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "roleArn": "arn:aws:iam::000000000000:role/tailscale-log-writer"
  }'
```

`POST /tailnet/{tailnet}/aws-external-id/{id}/validate-aws-trust-policy`

Validate that Tailscale can assume your IAM role with (and only with)
this external ID.

OAuth Scope: `log_streaming`.


> Body parameter

```json
{
  "roleArn": "arn:aws:iam::000000000000:role/tailscale-log-writer"
}
```

<h3 id="validate-external-id-integration-with-iam-role-trust-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|id|path|string|true|The AWS external ID to validate.|
|body|body|object|false|none|
|» roleArn|body|string|false|ARN of the AWS IAM role to validate with this external ID.|

> Example responses

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 422 Response

```json
{
  "message": "string"
}
```

<h3 id="validate-external-id-integration-with-iam-role-trust-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Validation succeeded for this external ID and IAM role.|None|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation failed for this external ID and IAM role.|Inline|

<h3 id="validate-external-id-integration-with-iam-role-trust-policy-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The reason for validation failure.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-users">Users</h1>

Manage and query users.
Learn more about [managing users](/docs/manage-users).


## List users

<a id="opIdlistUsers"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/users`

List all users of a tailnet.

OAuth Scope: `users:read`.


<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|type|query|string|false|Allows for filtering the output by user type.<br>|
|role|query|string|false|Allows for filtering the output by user role. Learn more about [user roles](/docs/reference/user-roles).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|member|
|type|shared|
|type|all|
|role|owner|
|role|member|
|role|admin|
|role|it-admin|
|role|network-admin|
|role|billing-admin|
|role|auditor|
|role|all|

> Example responses

> 200 Response

```json
{
  "users": [
    {
      "id": "123456",
      "displayName": "Some User",
      "loginName": "someuser@example.com",
      "profilePicUrl": "",
      "tailnetId": "example.com",
      "created": "2022-12-01T05:23:30Z",
      "type": "member",
      "role": "member",
      "status": "active",
      "deviceCount": 4,
      "lastSeen": "2022-12-01T05:23:30Z",
      "currentlyConnected": true
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[[User](#schemauser)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a user

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{userId}`

Retrieve details about the specified user.

OAuth Scope: `users:read`.


<h3 id="get-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|

> Example responses

> 200 Response

```json
{
  "id": "123456",
  "displayName": "Some User",
  "loginName": "someuser@example.com",
  "profilePicUrl": "",
  "tailnetId": "example.com",
  "created": "2022-12-01T05:23:30Z",
  "type": "member",
  "role": "member",
  "status": "active",
  "deviceCount": 4,
  "lastSeen": "2022-12-01T05:23:30Z",
  "currentlyConnected": true
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[User](#schemauser)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update user role

<a id="opIdupdateUserRole"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string/role \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "member"
  }'
```

`POST /users/{userId}/role`

Update the role for the specified user.

Learn more about [user roles](/docs/reference/user-roles).

OAuth Scope: `users`.

> ⓘ User-based access tokens cannot update their own user's role.


> Body parameter

```json
{
  "role": "member"
}
```

<h3 id="update-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|
|body|body|object|false|none|
|» role|body|string|false|The role of the user. Learn more about [user roles](/docs/reference/user-roles).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|owner|
|» role|member|
|» role|admin|
|» role|it-admin|
|» role|network-admin|
|» role|billing-admin|
|» role|auditor|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve a user

<a id="opIdapproveUser"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/approve`

Approve a pending user's access to the tailnet.
This is a no-op if user approval has not been enabled for the tailnet, or if the user is already approved.

User approval can be managed using the [tailnet settings endpoints](#tag/tailnetsettings).

Learn more about [user approval](/docs/features/access-control/user-approval) and [enabling user approval for your network](/docs/features/access-control/user-approval#enable-user-approval-for-your-network).

OAuth Scope: `users`.

> ⓘ User-based access tokens cannot approve their own user.


<h3 id="approve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 402 Response

```json
{
  "message": "payment required"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="approve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|402|Payment Required|Payment required. The tailnet's plan or billing state does not allow the<br>operation, and resolving it requires a billing change rather than a<br>different request. The `message` field says which change.<br>|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Suspend a user

<a id="opIdsuspendUser"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string/suspend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/suspend`

Suspends a user from their tailnet. Learn more about [suspending users](/docs/features/sharing/how-to/remove-team-members#suspending-users).

OAuth Scope: `users`.

> ⓘ User-based access tokens cannot suspend their own user.


<h3 id="suspend-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="suspend-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Restore a user

<a id="opIdrestoreUser"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string/restore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/restore`

Restores a suspended user's access to their tailnet. Learn more about [restoring users](/docs/features/sharing/how-to/remove-team-members#restoring-users).

OAuth Scope: `users`.

> ⓘ User-based access tokens cannot restore their own user.


<h3 id="restore-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="restore-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/users/string/delete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{userId}/delete`

Delete a user from their tailnet. Learn more about [deleting users](/docs/features/sharing/how-to/remove-team-members#deleting-users).

OAuth Scope: `users`.

> ⓘ User-based access tokens cannot delete their own user.


<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|ID of the user.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-userinvites">UserInvites</h1>

Manage user invites.
Learn more about [inviting users](/docs/features/sharing/how-to/invite-users).


## List user invites

<a id="opIdlistUserInvites"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/user-invites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/user-invites`

List all open (not yet accepted) user invites to the tailnet.

<h3 id="list-user-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
[
  {
    "id": "29214",
    "role": "admin",
    "tailnetId": 12345,
    "inviterId": 34567,
    "email": "user@example.com",
    "lastEmailSentAt": "2024-05-09T16:23:26.91778771Z",
    "inviteUrl": "https://login.tailscale.com/uinv/<code>"
  },
  {
    "id": "29215",
    "role": "admin",
    "tailnetId": 12345,
    "inviterId": 34567,
    "email": "someoneelse@example.com",
    "lastEmailSentAt": "2024-05-09T17:23:30.91778771Z",
    "inviteUrl": "https://login.tailscale.com/uinv/<code>"
  }
]
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-user-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-user-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserInvite](#schemauserinvite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create user invites

<a id="opIdcreateUserInvites"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/user-invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "role": "admin",
      "email": "user@example.com"
    }
  ]'
```

`POST /tailnet/{tailnet}/user-invites`

Create, and optionally email out, new user invites to join the tailnet.

> ⓘ Only permitted for user-owned keys, because invites require an inviting user.


> Body parameter

```json
[
  {
    "role": "admin",
    "email": "user@example.com"
  }
]
```

<h3 id="create-user-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[object]|false|none|
|» role|body|string|false|Optionally specifies a user role to assign the invited user.<br>|
|» email|body|string|false|Optionally specifies the email to send the created invite.<br>If not set, the endpoint generates and returns an invite URL, but does not email it out.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|member|
|» role|admin|
|» role|it-admin|
|» role|network-admin|
|» role|billing-admin|
|» role|auditor|

> Example responses

> 200 Response

```json
[
  {
    "id": "29214",
    "role": "admin",
    "tailnetId": 12345,
    "inviterId": 34567,
    "email": "user@example.com",
    "lastEmailSentAt": "2024-05-09T16:23:26.91778771Z",
    "inviteUrl": "https://login.tailscale.com/uinv/<code>"
  }
]
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="create-user-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="create-user-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserInvite](#schemauserinvite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a user invite

<a id="opIdgetUserInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/user-invites/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user-invites/{userInviteId}`

Retrieve a specific user invite.


<h3 id="get-a-user-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userInviteId|path|string|true|ID of the user invite.|

> Example responses

> 200 Response

```json
{
  "id": "12346",
  "role": "admin",
  "tailnetId": 59954,
  "inviterId": 22012,
  "email": "user@example.com",
  "lastEmailSentAt": "2024-04-03T21:38:49.333829261Z",
  "inviteUrl": "https://login.tailscale.com/admin/invite/<code>"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-a-user-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[UserInvite](#schemauserinvite)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a user invite

<a id="opIddeleteUserInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/user-invites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /user-invites/{userInviteId}`

Deletes a specific user invite.

> ⓘ Only permitted for user-owned keys, because invites require an inviting user.


<h3 id="delete-a-user-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userInviteId|path|string|true|ID of the user invite.|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-a-user-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Resend a user invite

<a id="opIdresendUserInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/user-invites/string/resend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /user-invites/{userInviteId}/resend`

Resend a user invite by email. You can only use this if the specified invite
was originally created with an email specified.
Refer to [creating user invites for a tailnet](#tag/userinvites/post/tailnet/{tailnet}/user-invites).

Note: Invite resends are rate limited to one per minute.

> ⓘ Only permitted for user-owned keys, because invites require an inviting user.


<h3 id="resend-a-user-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userInviteId|path|string|true|ID of the user invite.|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="resend-a-user-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-deviceinvites">DeviceInvites</h1>

Manage device invites.
Learn more about [sharing devices](/docs/features/sharing).


## List device invites

<a id="opIdlistDeviceInvites"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/device-invites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /device/{deviceId}/device-invites`

List all share invites for a device.

OAuth Scope: `device_invites:read`.


<h3 id="list-device-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 200 Response

```json
[
  {
    "id": "12345",
    "created": "2024-05-08T20:19:51.777861756Z",
    "tailnetId": 59954,
    "deviceId": 11055,
    "sharerId": 22011,
    "allowExitNode": true,
    "email": "user@example.com",
    "lastEmailSentAt": "2024-05-08T20:19:51.777861756Z",
    "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
    "accepted": false
  },
  {
    "id": "12346",
    "created": "2024-04-03T21:38:49.333829261Z",
    "tailnetId": 59954,
    "deviceId": 11055,
    "sharerId": 22012,
    "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
    "accepted": true,
    "acceptedBy": {
      "id": 33223,
      "loginName": "someone@example.com",
      "profilePicUrl": ""
    }
  }
]
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="list-device-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<h3 id="list-device-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceInvite](#schemadeviceinvite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create device invites

<a id="opIdcreateDeviceInvites"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device/string/device-invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "multiUse": false,
      "allowExitNode": false,
      "email": "user@example.com"
    }
  ]'
```

`POST /device/{deviceId}/device-invites`

Create new share invites for a device.

Note that device invites cannot be created using an API access token generated from an OAuth client as the shared device is scoped to a user.


> Body parameter

```json
[
  {
    "multiUse": false,
    "allowExitNode": false,
    "email": "user@example.com"
  }
]
```

<h3 id="create-device-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|[object]|false|Device invites to create.|
|» multiUse|body|boolean|false|Whether the invite can be accepted more than once.<br>When set to `true`, it results in an invite that can be accepted up to 1,000 times.<br>|
|» allowExitNode|body|boolean|false|Whether the invited user can use the device as an exit node when it advertises as one.<br>|
|» email|body|string|false|The email to send the created invite to.<br>If not set, the endpoint generates and returns an invite URL (but doesn't send it out).<br>|

> Example responses

> 200 Response

```json
[
  {
    "id": "12345",
    "created": "2024-05-08T20:19:51.777861756Z",
    "tailnetId": 59954,
    "deviceId": 11055,
    "sharerId": 22011,
    "allowExitNode": true,
    "email": "user@example.com",
    "lastEmailSentAt": "2024-05-08T20:19:51.777861756Z",
    "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
    "accepted": false
  },
  {
    "id": "12346",
    "created": "2024-04-03T21:38:49.333829261Z",
    "tailnetId": 59954,
    "deviceId": 11055,
    "sharerId": 22012,
    "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
    "accepted": false
  }
]
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="create-device-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<h3 id="create-device-invites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DeviceInvite](#schemadeviceinvite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a device invite

<a id="opIdgetDeviceInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device-invites/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /device-invites/{deviceInviteId}`

Retrieve a specific device invite.

OAuth Scope: `device_invites:read`.


<h3 id="get-a-device-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceInviteId|path|string|true|ID of the device invite.|

> Example responses

> 200 Response

```json
{
  "id": "12346",
  "created": "2024-04-03T21:38:49.333829261Z",
  "tailnetId": 59954,
  "deviceId": 11055,
  "sharerId": 22012,
  "multiUse": false,
  "allowExitNode": false,
  "email": "user@example.com",
  "lastEmailSentAt": "2024-04-03T21:38:49.333829261Z",
  "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
  "accepted": false,
  "acceptedBy": {
    "id": 33223,
    "loginName": "someone@example.com",
    "profilePicUrl": ""
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-a-device-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[DeviceInvite](#schemadeviceinvite)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a device invite

<a id="opIddeleteDeviceInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device-invites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /device-invites/{deviceInviteId}`

Delete a specific device invite.

OAuth Scope: `device_invites`.


<h3 id="delete-a-device-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceInviteId|path|string|true|ID of the device invite.|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-a-device-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Resend a device invite

<a id="opIdresendDeviceInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device-invites/string/resend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /device-invites/{deviceInviteId}/resend`

Resend a device invite by email. You can only use this if the specified invite
was originally created with an email specified.
Refer to [creating device invites for a device](#tag/deviceinvites/post/device/{deviceId}/device-invites).

Note: Invite resends are rate limited to one per minute.

Note that device invites cannot be resent using an API access token generated from an OAuth client as the shared device is scoped to a user.


<h3 id="resend-a-device-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceInviteId|path|string|true|ID of the device invite.|

> Example responses

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="resend-a-device-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Accept a device invite

<a id="opIdacceptDeviceInvite"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/device-invites/-/accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "invite": "https://login.tailscale.com/admin/invite/xxxxxx"
  }'
```

`POST /device-invites/-/accept`

Accepts the invitation to share a device into the requesting user's tailnet.

Note that device invites cannot be accepted using an API access token generated from an OAuth client as the shared device is scoped to a user.


> Body parameter

```json
{
  "invite": "https://login.tailscale.com/admin/invite/xxxxxx"
}
```

<h3 id="accept-a-device-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» invite|body|string|true|The URL of the invite (in the form `https://login.tailscale.com/admin/invite/{code}`) or the `{code}` component of the URL.<br>|

> Example responses

> 200 Response

```json
{
  "device": {
    "id": "12346",
    "os": "iOS",
    "name": "my-phone",
    "fqdn": "my-phone.something.ts.net",
    "ipv4": "100.x.y.z",
    "ipv6": "fd7a:115c:x::y:z",
    "includeExitNode": false
  },
  "sharer": {
    "id": "22012",
    "displayName": "Some User",
    "loginName": "someuser@example.com",
    "profilePicURL": ""
  },
  "acceptedBy": {
    "id": "33233",
    "displayName": "Another User",
    "loginName": "anotheruser@example2.com",
    "profilePicURL": ""
  }
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="accept-a-device-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="accept-a-device-invite-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|object|false|none|Information about the device being shared.<br>|
|» id|string|false|none|The `nodeId` for the device.<br>|
|» os|string|false|none|The operating system that the device is running.<br>|
|» name|string|false|none|The name of the device.<br>|
|» fqdn|string|false|none|The MagicDNS name of the device.<br>Learn more about MagicDNS at https://tailscale.com/docs/features/magicdns.<br>|
|» ipv4|string|false|none|The IPv4 address of the device.<br>|
|» ipv6|string|false|none|The IPv6 address of the device.<br>|
|» includeExitNode|boolean|false|none|Specifies whether the invited user is able to use the<br>device as an exit node when the device is advertising as one.<br>|
|sharer|object|false|none|The user who create the device share invite.<br>|
|» id|string|false|none|The ID of the user who created the share invite.<br>|
|» displayName|string|false|none|The display name of the user who created the share invite.<br>|
|» loginName|string|false|none|The email address of the user who created the share invite.<br>|
|» profilePicURL|string|false|none|The profile pic URL for the user who created the share invite.<br>|
|acceptedBy|object|false|none|The user accepting the device share invite.<br>|
|» id|string|false|none|The ID of the user who accepted the share invite.<br>|
|» displayName|string|false|none|The display name of the user who accepted the share invite.<br>|
|» loginName|string|false|none|The email address of the user who accepted the share invite.<br>|
|» profilePicURL|string|false|none|The profile pic URL for the user who accepted the share invite.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-deviceposture">DevicePosture</h1>

Manage integrations with device posture data providers.
Learn more about how to use [device posture data to secure a tailnet](/docs/features/device-posture).


## List all posture integrations

<a id="opIdgetPostureIntegrations"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/posture/integrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/posture/integrations`

List all of the posture integrations for a tailnet.

OAuth Scope: `feature_settings:read`.


<h3 id="list-all-posture-integrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "integrations": [
    {
      "clientId": "myclientid",
      "cloudId": "us-1",
      "configUpdated": "2024-06-18T13:43:43.239839Z",
      "id": "pcBEPQVMpki7DEVEL",
      "provider": "falcon",
      "status": {
        "error": "oauth2: cannot fetch token: 401 Unauthorized\nResponse: {\n \"meta\": {\n  \"query_time\": 2.63e-7,\n  \"powered_by\": \"crowdstrike-api-gateway\",\n  \"trace_id\": \"f36431bf-cda6-40c9-9afe-6d3db7c55026\"\n },\n \"errors\": [\n  {\n   \"code\": 401,\n   \"message\": \"access denied, authorization failed\"\n  }\n ]\n}",
        "lastSync": "2024-06-18T08:43:43.777283-05:00",
        "matchedCount": 0,
        "possibleMatchedCount": 0,
        "providerHostCount": 0
      }
    },
    {
      "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
      "cloudId": "global",
      "configUpdated": "2024-06-18T13:44:28.250168Z",
      "id": "p56wQiqrn7mfDEVEL",
      "provider": "intune",
      "status": {
        "error": "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
        "lastSync": "2024-06-18T08:44:33.872282-05:00",
        "matchedCount": 0,
        "possibleMatchedCount": 0,
        "providerHostCount": 0
      },
      "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3"
    },
    {
      "clientId": "6cabf059-21c9-44d6-bbde-02898f7430dd",
      "cloudId": "mysubdomain.jamfcloud.com",
      "configUpdated": "2024-06-18T13:44:56.333103Z",
      "id": "pFKyGf5YerWbDEVEL",
      "provider": "jamfpro"
    },
    {
      "clientId": "",
      "cloudId": "mydomain.kandji.io",
      "configUpdated": "2024-06-18T13:45:13.631878Z",
      "id": "ph4mxtePUR2LDEVEL",
      "provider": "kandji"
    },
    {
      "clientId": "",
      "cloudId": "",
      "configUpdated": "2024-06-18T13:45:20.919656Z",
      "id": "pvvTj3FGQAh8DEVEL",
      "provider": "kolide",
      "status": {
        "error": "Kolide returned unexpected status code: 401 Unauthorized",
        "lastSync": "2024-06-18T08:45:23.74563-05:00",
        "matchedCount": 0,
        "possibleMatchedCount": 0,
        "providerHostCount": 0
      }
    },
    {
      "clientId": "",
      "cloudId": "mydomain.sentinelone.net",
      "configUpdated": "2024-06-18T13:45:36.128461Z",
      "id": "pg9Wqc8sZW2TDEVEL",
      "provider": "sentinelone"
    }
  ]
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

<h3 id="list-all-posture-integrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|

<h3 id="list-all-posture-integrations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|integrations|[[PostureIntegration](#schemapostureintegration)]|false|none|List of PostureIntegrations.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a posture integration

<a id="opIdcreatePostureIntegration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/posture/integrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "provider": "intune",
    "cloudId": "global",
    "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
    "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
    "clientSecret": "as32598d#@%asdf"
  }'
```

`POST /tailnet/{tailnet}/posture/integrations`

Create a posture integration, returning the resulting [PostureIntegration](#model/postureintegration).

Must include `provider` and `clientSecret`.

Currently, only one integration for each provider is supported.

OAuth Scope: `feature_settings`.


> Body parameter

```json
{
  "provider": "intune",
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "clientSecret": "as32598d#@%asdf"
}
```

<h3 id="create-a-posture-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[PostureIntegration](#schemapostureintegration)|false|none|
|» provider|body|string|false|The device posture provider.<br><br>Required on POST requests, ignored on PATCH requests.<br>|
|» cloudId|body|string|false|Identifies which of the provider's clouds to integrate with.<br><br>- For CrowdStrike Falcon, it will be one of `us-1`, `us-2`, `eu-1` or `us-gov`.<br>- For Microsoft Intune, it will be one of `global` or `us-gov`. <br>- For Jamf Pro, Kandji and Sentinel One, it is the FQDN of your subdomain, for example `mydomain.sentinelone.net`.<br>- For Kolide, this is left blank.<br>|
|» clientId|body|string|false|Unique identifier for your client.<br><br>- For Microsoft Intune, it will be your application's UUID.<br>- For CrowdStrike Falcon and Jamf Pro, it will be your client id.<br>- For Kandji, Kolide and Sentinel One, this is left blank.<br>|
|» tenantId|body|string|false|The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.|
|» clientSecret|body|string|false|The secret (auth key, token, etc.) used to authenticate with the provider.<br><br>Required when creating a new integration, may be omitted when updating an existing integration, in which case we retain the existing password.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|falcon|
|» provider|intune|
|» provider|jamfpro|
|» provider|kandji|
|» provider|kolide|
|» provider|sentinelone|

> Example responses

> 200 Response

```json
{
  "id": "p56wQiqrn7mfDEVEL",
  "provider": "intune",
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "configUpdated": "2024-06-18T13:44:28.250168Z",
  "status": {
    "error": "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
    "lastSync": "2024-06-18T08:44:33.872282-05:00",
    "matchedCount": 0,
    "possibleMatchedCount": 0,
    "providerHostCount": 0
  }
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 409 Response

```json
{
  "message": "conflict"
}
```

<h3 id="create-a-posture-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[PostureIntegration](#schemapostureintegration)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|409|Conflict|Conflict.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a posture integration

<a id="opIdgetPostureIntegration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/posture/integrations/p56wQiqrn7mfDEVEL \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posture/integrations/{id}`

Gets the posture integration identified by `{id}`.

OAuth Scope: `feature_settings:read`.


<h3 id="get-a-posture-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for a posture integration.|

> Example responses

> 200 Response

```json
{
  "id": "p56wQiqrn7mfDEVEL",
  "provider": "intune",
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "configUpdated": "2024-06-18T13:44:28.250168Z",
  "status": {
    "error": "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
    "lastSync": "2024-06-18T08:44:33.872282-05:00",
    "matchedCount": 0,
    "possibleMatchedCount": 0,
    "providerHostCount": 0
  }
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="get-a-posture-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[PostureIntegration](#schemapostureintegration)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a posture integration

<a id="opIddeletePostureIntegration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/posture/integrations/p56wQiqrn7mfDEVEL \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /posture/integrations/{id}`

Delete a specific posture integration.

OAuth Scope: `feature_settings`.


<h3 id="delete-a-posture-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for a posture integration.|

> Example responses

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="delete-a-posture-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a posture integration

<a id="opIdupdatePostureIntegration"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/posture/integrations/p56wQiqrn7mfDEVEL \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "cloudId": "global",
    "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
    "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
    "clientSecret": "as32598d#@%asdf"
  }'
```

`PATCH /posture/integrations/{id}`

Updates the posture integration identified by `{id}`. You may omit the `clientSecret` from your request to retain the previously configured `clientSecret`.

OAuth Scope: `feature_settings`.


> Body parameter

```json
{
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "clientSecret": "as32598d#@%asdf"
}
```

<h3 id="update-a-posture-integration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Unique identifier for a posture integration.|
|body|body|[PostureIntegration](#schemapostureintegration)|false|none|
|» provider|body|string|false|The device posture provider.<br><br>Required on POST requests, ignored on PATCH requests.<br>|
|» cloudId|body|string|false|Identifies which of the provider's clouds to integrate with.<br><br>- For CrowdStrike Falcon, it will be one of `us-1`, `us-2`, `eu-1` or `us-gov`.<br>- For Microsoft Intune, it will be one of `global` or `us-gov`. <br>- For Jamf Pro, Kandji and Sentinel One, it is the FQDN of your subdomain, for example `mydomain.sentinelone.net`.<br>- For Kolide, this is left blank.<br>|
|» clientId|body|string|false|Unique identifier for your client.<br><br>- For Microsoft Intune, it will be your application's UUID.<br>- For CrowdStrike Falcon and Jamf Pro, it will be your client id.<br>- For Kandji, Kolide and Sentinel One, this is left blank.<br>|
|» tenantId|body|string|false|The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.|
|» clientSecret|body|string|false|The secret (auth key, token, etc.) used to authenticate with the provider.<br><br>Required when creating a new integration, may be omitted when updating an existing integration, in which case we retain the existing password.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|falcon|
|» provider|intune|
|» provider|jamfpro|
|» provider|kandji|
|» provider|kolide|
|» provider|sentinelone|

> Example responses

> 200 Response

```json
{
  "id": "p56wQiqrn7mfDEVEL",
  "provider": "intune",
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "configUpdated": "2024-06-18T13:44:28.250168Z",
  "status": {
    "error": "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
    "lastSync": "2024-06-18T08:44:33.872282-05:00",
    "matchedCount": 0,
    "possibleMatchedCount": 0,
    "providerHostCount": 0
  }
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

<h3 id="update-a-posture-integration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[PostureIntegration](#schemapostureintegration)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-contacts">Contacts</h1>

Manage [contact preferences](/docs/reference/contact-preferences).


## Get contacts

<a id="opIdgetContacts"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/contacts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/contacts`

Retrieve the tailnet's current contacts.

OAuth Scope: `account_settings:read`.


<h3 id="get-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "account": {
    "email": "owner@example.com"
  },
  "support": {
    "email": "support@example.com"
  },
  "security": {
    "email": "security@example.com"
  }
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="get-contacts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[Contact](#schemacontact)|false|none|A tailnet contact.|
|support|[Contact](#schemacontact)|false|none|A tailnet contact.|
|security|[Contact](#schemacontact)|false|none|A tailnet contact.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update contact

<a id="opIdupdateContact"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/contacts/account \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "newuser@example.com"
  }'
```

`PATCH /tailnet/{tailnet}/contacts/{contactType}`

Update the preferences for this type of contact. If the email address has changed, the system will send a verification email to confirm the change.

OAuth Scope: `account_settings`.


> Body parameter

```json
{
  "email": "newuser@example.com"
}
```

<h3 id="update-contact-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|contactType|path|string|true|Type of contact.|
|body|body|object|false|none|
|» email|body|string|true|The contact's email address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contactType|account|
|contactType|support|
|contactType|security|

> Example responses

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-contact-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Resend verification email

<a id="opIdresendContactVerificationEmail"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/contacts/account/resend-verification-email \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tailnet/{tailnet}/contacts/{contactType}/resend-verification-email`

Resends the verification email for this contact, if and only if verification is still pending.

OAuth Scope: `account_settings`.


<h3 id="resend-verification-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|contactType|path|string|true|Type of contact.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|contactType|account|
|contactType|support|
|contactType|security|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="resend-verification-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-webhooks">Webhooks</h1>

Manage webhook endpoints for a tailnet.
Learn more about [webhooks](/docs/features/webhooks).


## List webhooks

<a id="opIdlistWebhooks"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/webhooks`

List all webhooks for a tailnet.

OAuth Scope: `webhooks:read`.


<h3 id="list-webhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "webhooks": [
    {
      "endpointId": "123456",
      "endpointUrl": "https://example.com/endpoint",
      "providerType": "slack",
      "creatorLoginName": "user@example.com",
      "created": "2022-12-01T05:23:30Z",
      "lastModified": "2022-12-01T05:23:30Z",
      "subscriptions": [
        "nodeCreated",
        "userDeleted"
      ],
      "secret": "xxxxx"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-webhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-webhooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|webhooks|[[Webhook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a webhook

<a id="opIdcreateWebhook"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "endpointUrl": "https://example.com/endpoint",
    "providerType": "slack",
    "subscriptions": [
      "nodeCreated",
      "userDeleted"
    ]
  }'
```

`POST /tailnet/{tailnet}/webhooks`

Create a webhook within a tailnet.

OAuth Scope: `webhooks`.


> Body parameter

```json
{
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ]
}
```

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|false|none|
|» endpointUrl|body|string|true|The endpoint that events are sent to from Tailscale via POST requests.<br>|
|» providerType|body|[providerType](#schemaprovidertype)|false|The provider type for the webhook destination, or an empty string if none are applicable.<br>Outgoing webhook events are sent in the format expected by the provider type if non-empty.<br>|
|» subscriptions|body|[subscriptions](#schemasubscriptions)|true|The list of subscribed events that trigger POST requests to the configured endpoint URL.<br>Learn more about [webhook events](/docs/features/webhooks#events).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» providerType|slack|
|» providerType|mattermost|
|» providerType|googlechat|
|» providerType|discord|
|» subscriptions|nodeCreated|
|» subscriptions|nodeNeedsApproval|
|» subscriptions|nodeApproved|
|» subscriptions|nodeKeyExpiringInOneDay|
|» subscriptions|nodeKeyExpired|
|» subscriptions|nodeDeleted|
|» subscriptions|nodeSigned|
|» subscriptions|nodeNeedsSignature|
|» subscriptions|policyUpdate|
|» subscriptions|userCreated|
|» subscriptions|userNeedsApproval|
|» subscriptions|userSuspended|
|» subscriptions|userRestored|
|» subscriptions|userDeleted|
|» subscriptions|userApproved|
|» subscriptions|userRoleUpdated|
|» subscriptions|subnetIPForwardingNotEnabled|
|» subscriptions|exitNodeIPForwardingNotEnabled|

> Example responses

> 200 Response

```json
{
  "endpointId": "123456",
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "creatorLoginName": "user@example.com",
  "created": "2022-12-01T05:23:30Z",
  "lastModified": "2022-12-01T05:23:30Z",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ],
  "secret": "xxxxx"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Webhook](#schemawebhook)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get webhook

<a id="opIdgetWebhook"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/webhooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{endpointId}`

Retrieve a specific webhook.

OAuth Scope: `webhooks:read`.


<h3 id="get-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|ID for the webhook endpoint.<br>|

> Example responses

> 200 Response

```json
{
  "endpointId": "123456",
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "creatorLoginName": "user@example.com",
  "created": "2022-12-01T05:23:30Z",
  "lastModified": "2022-12-01T05:23:30Z",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ],
  "secret": "xxxxx"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Webhook](#schemawebhook)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete webhook

<a id="opIddeleteWebhook"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/webhooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{endpointId}`

Delete a specific webhook.

OAuth Scope: `webhooks`.


<h3 id="delete-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|ID for the webhook endpoint.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update webhook

<a id="opIdupdateWebhook"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/webhooks/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subscriptions": [
      "nodeCreated",
      "userDeleted"
    ]
  }'
```

`PATCH /webhooks/{endpointId}`

Update a specific webhook.

OAuth Scope: `webhooks`.


> Body parameter

```json
{
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ]
}
```

<h3 id="update-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|ID for the webhook endpoint.<br>|
|body|body|object|false|none|
|» subscriptions|body|[subscriptions](#schemasubscriptions)|false|The list of subscribed events that trigger POST requests to the configured endpoint URL.<br>Learn more about [webhook events](/docs/features/webhooks#events).<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subscriptions|nodeCreated|
|» subscriptions|nodeNeedsApproval|
|» subscriptions|nodeApproved|
|» subscriptions|nodeKeyExpiringInOneDay|
|» subscriptions|nodeKeyExpired|
|» subscriptions|nodeDeleted|
|» subscriptions|nodeSigned|
|» subscriptions|nodeNeedsSignature|
|» subscriptions|policyUpdate|
|» subscriptions|userCreated|
|» subscriptions|userNeedsApproval|
|» subscriptions|userSuspended|
|» subscriptions|userRestored|
|» subscriptions|userDeleted|
|» subscriptions|userApproved|
|» subscriptions|userRoleUpdated|
|» subscriptions|subnetIPForwardingNotEnabled|
|» subscriptions|exitNodeIPForwardingNotEnabled|

> Example responses

> 200 Response

```json
{
  "endpointId": "123456",
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "creatorLoginName": "user@example.com",
  "created": "2022-12-01T05:23:30Z",
  "lastModified": "2022-12-01T05:23:30Z",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ],
  "secret": "xxxxx"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Webhook](#schemawebhook)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Test a webhook

<a id="opIdtestWebhook"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/webhooks/string/test \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{endpointId}/test`

Test a specific webhook by sending out a test event to the endpoint URL.
This endpoint queues the event which is sent out asynchronously.

If your webhook is configured correctly, within a few seconds your webhook endpoint should receive an event with type of "test".

OAuth Scope: `webhooks`.


<h3 id="test-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|ID for the webhook endpoint.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="test-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successfully queued test event.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Rotate webhook secret

<a id="opIdrotateWebhookSecret"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/webhooks/string/rotate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/{endpointId}/rotate`

Rotate and generate a new secret for a specific webhook.

This secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.
Learn more about [verifying webhook event signatures](/docs/features/webhooks#verifying-an-event-signature).

OAuth Scope: `webhooks`.


<h3 id="rotate-webhook-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|endpointId|path|string|true|ID for the webhook endpoint.<br>|

> Example responses

> 200 Response

```json
{
  "endpointId": "123456",
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "creatorLoginName": "user@example.com",
  "created": "2022-12-01T05:23:30Z",
  "lastModified": "2022-12-01T05:23:30Z",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ],
  "secret": "xxxxx"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="rotate-webhook-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[Webhook](#schemawebhook)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-tailnetsettings">TailnetSettings</h1>

Manage settings for a tailnet.


## Get tailnet settings

<a id="opIdgetTailnetSettings"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/settings`

Retrieve the settings for a specific tailnet.

OAuth Scope: `feature_settings:read` - required to view all settings except those governed by the below scopes.

OAuth Scope: `logs:network:read` - required to view the `networkFlowLoggingOn` setting.

OAuth Scope: `networking_settings:read` - required to view the `httpsCertificates` setting.

OAuth Scope: `policy_file:read` - required to view the `aclsExternallyManagedOn` & `aclsExternalLink` settings.


<h3 id="get-tailnet-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "aclsExternallyManagedOn": false,
  "aclsExternalLink": "https://github.com/example/tailnet-policy",
  "adminConsoleSessionTimeoutMinutes": 180,
  "devicesApprovalOn": false,
  "devicesAutoUpdatesOn": false,
  "devicesKeyDurationDays": 180,
  "usersApprovalOn": true,
  "usersRoleAllowedToJoinExternalTailnets": "admin",
  "networkFlowLoggingOn": false,
  "regionalRoutingOn": false,
  "routeSelection": "active-passive-failover",
  "postureIdentityCollectionOn": false,
  "httpsEnabled": false
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-tailnet-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[TailnetSettings](#schematailnetsettings)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update tailnet settings

<a id="opIdupdateTailnetSettings"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/settings \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aclsExternallyManagedOn": false,
    "aclsExternalLink": "https://github.com/example/tailnet-policy",
    "adminConsoleSessionTimeoutMinutes": 180,
    "devicesApprovalOn": false,
    "devicesAutoUpdatesOn": false,
    "devicesKeyDurationDays": 180,
    "usersApprovalOn": true,
    "usersRoleAllowedToJoinExternalTailnets": "admin",
    "networkFlowLoggingOn": false,
    "routeSelection": "active-passive-failover",
    "postureIdentityCollectionOn": false,
    "httpsEnabled": false
  }'
```

`PATCH /tailnet/{tailnet}/settings`

Update the settings for a specific tailnet.

OAuth Scope: `feature_settings` - required to update all settings except those governed by the below scopes.

OAuth Scope: `logs:network` - required to update the `networkFlowLoggingOn` setting.

OAuth Scope: `networking_settings` - required to update the `httpsCertificates` setting.

OAuth Scope: `policy_file` - required to update the `aclsExternallyManagedOn` & `aclsExternalLink` settings.


> Body parameter

```json
{
  "aclsExternallyManagedOn": false,
  "aclsExternalLink": "https://github.com/example/tailnet-policy",
  "adminConsoleSessionTimeoutMinutes": 180,
  "devicesApprovalOn": false,
  "devicesAutoUpdatesOn": false,
  "devicesKeyDurationDays": 180,
  "usersApprovalOn": true,
  "usersRoleAllowedToJoinExternalTailnets": "admin",
  "networkFlowLoggingOn": false,
  "routeSelection": "active-passive-failover",
  "postureIdentityCollectionOn": false,
  "httpsEnabled": false
}
```

<h3 id="update-tailnet-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|[TailnetSettings](#schematailnetsettings)|false|none|
|» aclsExternallyManagedOn|body|boolean \| null|false|Prevents users from editing policies in the admin console to avoid conflicts with external management workflows like GitOps or Terraform.<br>|
|» aclsExternalLink|body|string(uri)|false|Link to the external tailnet policy definition or management solution for this tailnet.<br>|
|» adminConsoleSessionTimeoutMinutes|body|integer|false|The [admin console session timeout](/docs/account/admin-console-session-timeout) for members of this tailnet.<br>Setting it to 0 disables the timeout.<br>|
|» devicesApprovalOn|body|boolean \| null|false|Whether [device approval](/docs/features/access-control/device-management/device-approval) is enabled for the tailnet.<br>|
|» devicesAutoUpdatesOn|body|boolean \| null|false|Whether [auto updates](/docs/features/client/update#auto-updates) are enabled for devices that belong to this tailnet.<br>|
|» devicesKeyDurationDays|body|integer|false|The [key expiry](/docs/features/access-control/key-expiry) duration for devices on this tailnet.<br>|
|» usersApprovalOn|body|boolean \| null|false|Whether [user approval](/docs/features/access-control/user-approval) is enabled for this tailnet.<br>|
|» usersRoleAllowedToJoinExternalTailnets|body|string|false|Which user roles are allowed to [join external tailnets](/docs/features/sharing/how-to/invite-any-user).<br>|
|» networkFlowLoggingOn|body|boolean \| null|false|Whether [network flog logs](/docs/features/logging/network-flow-logs) are enabled for the tailnet.<br>|
|» routeSelection|body|string|false|The [route selection](/docs/features/route-selection) algorithm used by the tailnet:<br>* `active-passive-failover` - Active-passive failover (formerly known as "Failover")<br>* `regional-routing` - Regional routing<br>* `regional-routing-failover` - Regional routing with in-region failover<br>* `magicroute` - MagicRoute<br><br>A PATCH request must not specify both the `regionalRoutingOn` and `routeSelection` fields.<br>|
|» postureIdentityCollectionOn|body|boolean \| null|false|Whether [identity collection](/docs/features/access-control/device-management/how-to/manage-identity) is enabled for [device posture](/docs/features/device-posture) integrations for the tailnet.<br>|
|» httpsEnabled|body|boolean \| null|false|Whether provisioning of [HTTPS certificates](/docs/how-to/set-up-https-certificates) is enabled for this tailnet.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» usersRoleAllowedToJoinExternalTailnets|none|
|» usersRoleAllowedToJoinExternalTailnets|admin|
|» usersRoleAllowedToJoinExternalTailnets|member|
|» routeSelection|active-passive-failover|
|» routeSelection|regional-routing|
|» routeSelection|regional-routing-failover|
|» routeSelection|magicroute|

> Example responses

> 200 Response

```json
{
  "aclsExternallyManagedOn": false,
  "aclsExternalLink": "https://github.com/example/tailnet-policy",
  "adminConsoleSessionTimeoutMinutes": 180,
  "devicesApprovalOn": false,
  "devicesAutoUpdatesOn": false,
  "devicesKeyDurationDays": 180,
  "usersApprovalOn": true,
  "usersRoleAllowedToJoinExternalTailnets": "admin",
  "networkFlowLoggingOn": false,
  "regionalRoutingOn": false,
  "routeSelection": "active-passive-failover",
  "postureIdentityCollectionOn": false,
  "httpsEnabled": false
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-tailnet-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[TailnetSettings](#schematailnetsettings)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-services">Services</h1>

Manage Tailscale Services for a tailnet.
Learn more about [Tailscale Services](/docs/features/tailscale-services).


## List all Services

<a id="opIdlistServices"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/services`

List all Services configured for the tailnet. This includes all Services in the "advertised"
tab of the Services page in the Tailscale admin console.

OAuth Scope: `services:read`.


<h3 id="list-all-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "vipServices": [
    {
      "name": "svc:example",
      "displayName": "Example Service",
      "addrs": [
        "100.93.49.180",
        "fd7a:115c:a1e0::3456:3cb4"
      ],
      "comment": "Example Service",
      "ports": [
        "tcp:80",
        "tcp:443"
      ],
      "tags": [
        "tag:example"
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-all-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-all-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vipServices|[[VIPServiceInfo](#schemavipserviceinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get a Service

<a id="opIdgetService"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/services/{serviceName}`

Retrieve the details for the specified Service.

OAuth Scope: `services:read`.


<h3 id="get-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|

> Example responses

> 200 Response

```json
{
  "name": "svc:example",
  "displayName": "Example Service",
  "addrs": [
    "100.93.49.180",
    "fd7a:115c:a1e0::3456:3cb4"
  ],
  "comment": "Example Service",
  "ports": [
    "tcp:80",
    "tcp:443"
  ],
  "tags": [
    "tag:example"
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="get-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[VIPServiceInfo](#schemavipserviceinfo)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a Service

<a id="opIdupdateService"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addrs": [
      "100.93.49.180",
      "fd7a:115c:a1e0::3456:3cb4"
    ],
    "name": "svc:example",
    "displayName": "Example Service",
    "comment": "Example Service",
    "ports": [
      "tcp:80",
      "tcp:443"
    ],
    "tags": [
      "tag:example"
    ]
  }'
```

`PUT /tailnet/{tailnet}/services/{serviceName}`

Update or create the specified Service. If the Service does not exist, it will
create a Service with the provided details. When creating a new Service, the name
in the request body must match the serviceName path parameter. When updating an existing
Service, the path parameter is the current name of the Service, and the name in the request
body can be used to rename the Service.

OAuth Scope: `services`.


> Body parameter

```json
{
  "addrs": [
    "100.93.49.180",
    "fd7a:115c:a1e0::3456:3cb4"
  ],
  "name": "svc:example",
  "displayName": "Example Service",
  "comment": "Example Service",
  "ports": [
    "tcp:80",
    "tcp:443"
  ],
  "tags": [
    "tag:example"
  ]
}
```

<h3 id="update-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|
|body|body|[VIPServiceInfoPut](#schemavipserviceinfoput)|true|The Service details to create or update.|
|» addrs|body|[string]|false|The IP addresses assigned to the Service.<br><br>- For new Services: either unset or a single IPv4 to assign the Service.<br>- For existing Services: an IPv4 and an IPv6. The IPv4 can be updated, but not the IPv6.<br>|
|» name|body|string|false|The unique name of the Service.|
|» displayName|body|string|false|An optional human-readable label for the Service, shown in the Tailscale admin console<br>and to clients with access to the Service.<br>Must be 64 characters or fewer.<br>|
|» addrs|body|[string]|false|The IP addresses assigned to the Service: the IPv4 followed by the IPv6.<br>|
|» comment|body|string|false|An optional comment for the Service.|
|» ports|body|[string]|false|A list of protocol:port pairs to be exposed by the Service.<br><br>The only supported protocol is "tcp" at this time. "do-not-validate" can be used to skip validation.<br>|
|» tags|body|[string]|false|A list of optional tags associated with the Service.|

> Example responses

> 200 Response

```json
{
  "name": "svc:example",
  "displayName": "Example Service",
  "addrs": [
    "100.93.49.180",
    "fd7a:115c:a1e0::3456:3cb4"
  ],
  "comment": "Example Service",
  "ports": [
    "tcp:80",
    "tcp:443"
  ],
  "tags": [
    "tag:example"
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="update-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[VIPServiceInfo](#schemavipserviceinfo)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete a Service

<a id="opIddeleteService"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tailnet/{tailnet}/services/{serviceName}`

Delete the specified Service from the tailnet.

OAuth Scope: `services`.


<h3 id="delete-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="delete-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List devices hosting a Service

<a id="opIdlistServiceHosts"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample/devices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/services/{serviceName}/devices`

List all devices that are hosting the specified Service.

OAuth Scope: `services`, `devices:core`.


<h3 id="list-devices-hosting-a-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|

> Example responses

> 200 Response

```json
{
  "hosts": [
    {
      "stableNodeID": "n292kg92CNTRL",
      "approvalLevel": "not-approved",
      "configured": "ready"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="list-devices-hosting-a-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<h3 id="list-devices-hosting-a-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hosts|[[ServiceHostInfo](#schemaservicehostinfo)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get approval status of Service on a device

<a id="opIdgetServiceDeviceApproval"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample/device/string/approved \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/services/{serviceName}/device/{deviceId}/approved`

Retrieve the approval status of the specified Service on a specific device.

OAuth Scope: `services`, `devices:core`.


<h3 id="get-approval-status-of-service-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|

> Example responses

> 200 Response

```json
{
  "approved": true,
  "autoApproved": true
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="get-approval-status-of-service-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[VIPServiceApproval](#schemavipserviceapproval)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update approval status of Service on a device

<a id="opIdupdateServiceDeviceApproval"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/services/svc%3Aexample/device/string/approved \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "approved": true
  }'
```

`POST /tailnet/{tailnet}/services/{serviceName}/device/{deviceId}/approved`

Update the approval status of the specified Service on a specific device.

OAuth Scope: `services`, `devices:core`.


> Body parameter

```json
{
  "approved": true
}
```

<h3 id="update-approval-status-of-service-on-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|serviceName|path|string|true|The unique name of a Service. The name should be prefixed with "svc:". It should be unique<br>across the tailnet, so names already used for a machine cannot be reused for a Service.<br>|
|deviceId|path|string|true|ID of the device. Using the device's `nodeId` is preferred, but its numeric `id` value can also be used.<br>|
|body|body|object|true|The approval status to set for the Service on the device.|
|» approved|body|boolean|false|Indicates whether to approve or revoke approval for the Service on the device.<br>|

> Example responses

> 200 Response

```json
{
  "approved": true,
  "autoApproved": true
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

> 504 Response

```json
{
  "message": "request took too long to process, please try again later"
}
```

<h3 id="update-approval-status-of-service-on-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[VIPServiceApproval](#schemavipserviceapproval)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|
|504|Gateway Timeout|Gateway timeout.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-oauthapps">OAuthApps</h1>

Manage OAuth apps for a tailnet.
Learn more about [OAuth apps](/docs/features/oauth-apps).


## List OAuth apps

<a id="opIdlistOAuthApps"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/oauth-apps \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/oauth-apps`

List all OAuth apps for a tailnet.

OAuth Scope: `oauth_apps:read`.


<h3 id="list-oauth-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 200 Response

```json
{
  "oauthApps": [
    {
      "id": "a123456CNTRL",
      "name": "my-oauth-app",
      "description": "An OAuth app used to provision devices.",
      "redirectURIs": [
        "https://example.com/oauth/callback"
      ],
      "scopes": [
        "auth_keys:create"
      ],
      "allowedNodeAttributes": [
        "custom:myattribute"
      ],
      "clientSecret": "xxxxx",
      "created": "2022-12-01T05:23:30Z",
      "updated": "2022-12-01T05:23:30Z"
    }
  ]
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-oauth-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|Inline|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<h3 id="list-oauth-apps-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauthApps|[[OAuthApp](#schemaoauthapp)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an OAuth app

<a id="opIdcreateOAuthApp"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/oauth-apps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my-oauth-app",
    "description": "An OAuth app used to provision devices.",
    "redirectURIs": [
      "https://example.com/oauth/callback"
    ],
    "scopes": [
      "auth_keys:create"
    ],
    "allowedNodeAttributes": [
      "custom:myattribute"
    ]
  }'
```

`POST /tailnet/{tailnet}/oauth-apps`

Create an OAuth app within a tailnet.

The generated client secret is returned only in this response and cannot be retrieved later, so be sure to record it.

OAuth Scope: `oauth_apps`.  If you include `allowedNodeAttributes` in the request body, you must also have `devices:posture_attributes`.


> Body parameter

```json
{
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ]
}
```

<h3 id="create-an-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|body|body|object|false|none|
|» name|body|[name](#schemaname)|true|The name of the OAuth app.<br>Must be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.<br>|
|» description|body|[description](#schemadescription)|false|A human-readable description of the OAuth app.<br>Must be at most 300 characters.<br>|
|» redirectURIs|body|[redirectURIs](#schemaredirecturis)|true|The list of permitted redirect URIs for the OAuth authorization code flow.<br>At least one redirect URI is required.<br><br>Each URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,<br>which may use any scheme. Raw IP address hosts are not permitted.<br>|
|» scopes|body|[scopes](#schemascopes)|true|The list of OAuth scopes granted to the app.<br>Must be non-empty.<br>Learn more about [OAuth clients and scopes](/docs/features/oauth-clients).<br>|
|» allowedNodeAttributes|body|[allowedNodeAttributes](#schemaallowednodeattributes)|false|The list of custom device attributes that the OAuth app is allowed to set.<br>|

> Example responses

> 200 Response

```json
{
  "id": "a123456CNTRL",
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ],
  "clientSecret": "xxxxx",
  "created": "2022-12-01T05:23:30Z",
  "updated": "2022-12-01T05:23:30Z"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="create-an-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[OAuthApp](#schemaoauthapp)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get OAuth app

<a id="opIdgetOAuthApp"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/oauth-apps/a123456CNTRL \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tailnet/{tailnet}/oauth-apps/{appId}`

Retrieve a specific OAuth app.

OAuth Scope: `oauth_apps:read`.


<h3 id="get-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|appId|path|string|true|The ID of the OAuth app.<br>|

> Example responses

> 200 Response

```json
{
  "id": "a123456CNTRL",
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ],
  "clientSecret": "xxxxx",
  "created": "2022-12-01T05:23:30Z",
  "updated": "2022-12-01T05:23:30Z"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="get-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[OAuthApp](#schemaoauthapp)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update OAuth app

<a id="opIdupdateOAuthApp"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/oauth-apps/a123456CNTRL \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my-oauth-app",
    "description": "An OAuth app used to provision devices.",
    "redirectURIs": [
      "https://example.com/oauth/callback"
    ],
    "scopes": [
      "auth_keys:create"
    ],
    "allowedNodeAttributes": [
      "custom:myattribute"
    ]
  }'
```

`PUT /tailnet/{tailnet}/oauth-apps/{appId}`

Update a specific OAuth app.

The client secret is not regenerated and is not returned in this response.

OAuth Scope: `oauth_apps`.


> Body parameter

```json
{
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ]
}
```

<h3 id="update-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|appId|path|string|true|The ID of the OAuth app.<br>|
|body|body|object|false|none|
|» name|body|[name](#schemaname)|true|The name of the OAuth app.<br>Must be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.<br>|
|» description|body|[description](#schemadescription)|false|A human-readable description of the OAuth app.<br>Must be at most 300 characters.<br>|
|» redirectURIs|body|[redirectURIs](#schemaredirecturis)|true|The list of permitted redirect URIs for the OAuth authorization code flow.<br>At least one redirect URI is required.<br><br>Each URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,<br>which may use any scheme. Raw IP address hosts are not permitted.<br>|
|» scopes|body|[scopes](#schemascopes)|true|The list of OAuth scopes granted to the app.<br>Must be non-empty.<br>Learn more about [OAuth clients and scopes](/docs/features/oauth-clients).<br>|
|» allowedNodeAttributes|body|[allowedNodeAttributes](#schemaallowednodeattributes)|false|The list of custom device attributes that the OAuth app is allowed to set.<br>|

> Example responses

> 200 Response

```json
{
  "id": "a123456CNTRL",
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ],
  "clientSecret": "xxxxx",
  "created": "2022-12-01T05:23:30Z",
  "updated": "2022-12-01T05:23:30Z"
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="update-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[OAuthApp](#schemaoauthapp)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Delete OAuth app

<a id="opIddeleteOAuthApp"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com/oauth-apps/a123456CNTRL \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tailnet/{tailnet}/oauth-apps/{appId}`

Delete a specific OAuth app.

OAuth Scope: `oauth_apps`.


<h3 id="delete-oauth-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|
|appId|path|string|true|The ID of the OAuth app.<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-oauth-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="tailscale-api-organizations">Organizations</h1>

Manage organization-level resources.


## Delete a tailnet

<a id="opIddeleteTailnet"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/tailnet/example.com \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tailnet/{tailnet}`

Delete the specified tailnet and all of its users, devices, and configuration.

[API-only tailnets](https://tailscale.com/docs/features/tailnet-creation-api) can be deleted using an access
token for the tailnet being deleted. You can get a tailnet-specific access token by exchanging either the OAuth
client credentials returned when the tailnet was created or an OAuth client from the creating tailnet that has
the `all` scope.

OAuth Scope: `all`.


<h3 id="delete-a-tailnet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tailnet|path|string|true|The tailnet ID. <br><br>Tailnets created before Oct 2025 can still use the legacy ID, but the Tailnet ID is the preferred identifier.<br><br>When specifying a tailnet in the API, you can:<br><br>- Provide a dash (`-`) to reference the default tailnet of the access token being used to make the API call.<br>  This is the best option for most users.<br>  Your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/-/..."<br>  ```<br><br>- Provide the **tailnet ID** found on the **[General Settings](https://login.tailscale.com/admin/settings/general)**<br>  page of the Tailscale admin console.<br><br>  For example, if your tailnet ID name is `T1234CNTRL`, your API calls would start:<br><br>  ```sh<br>  curl "https://api.tailscale.com/api/v2/tailnet/T1234CNTRL/..."<br>  ```<br><br>  Learn more about [tailnet ID](https://tailscale.com/docs/concepts/tailnet-name#tailnet-id).<br>|

> Example responses

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="delete-a-tailnet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|None|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List tailnets

<a id="opIdlistOrganizationTailnets"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/organizations/-/tailnets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{organization}/tailnets`

List all tailnets in the organization, including the original tailnet and any
[API-only tailnets](https://tailscale.com/docs/features/tailnet-creation-api) created with the tailnet creation
API.

OAuth Scope: `tailnets:read`.


<h3 id="list-tailnets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Maximum number of tailnets to return per page; defaults to the maximum of 100.|
|cursor|query|string|false|Opaque pagination cursor from a previous response.|
|organization|path|string|true|The organization identifier.<br><br>Use a dash (`-`) to reference the organization of the access token being used to make the API call.<br>|

> Example responses

> 200 Response

```json
{
  "tailnets": [
    {
      "id": "T123456CNTRL",
      "displayName": "Production staging",
      "orgId": "o123456CNTRL",
      "createdAt": "2025-01-01T12:00:00Z"
    }
  ],
  "cursor": "eyJhZnRlciI6IlQxMjM0NTZDTlRSTCJ9",
  "totalCount": 50
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="list-tailnets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[ListOrganizationTailnetsResponse](#schemalistorganizationtailnetsresponse)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a tailnet

<a id="opIdcreateOrganizationTailnet"></a>

> Code samples

```bash
curl https://api.tailscale.com/api/v2/organizations/-/tailnets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "Production staging"
  }'
```

`POST /organizations/{organization}/tailnets`

Create an [API-only tailnet](https://tailscale.com/docs/features/tailnet-creation-api) in the organization.
API-only tailnets have no human users and do not appear in the admin console. Use them for applications and
infrastructure that manage tailnets entirely through the API.

All plans can create a maximum of 10 tailnets, including their original tailnet. If your use case requires
more than 10 tailnets, [contact sales](https://tailscale.com/contact/sales).

The response includes an OAuth client for the new tailnet. The client secret is returned only in this response
and cannot be retrieved later, so be sure to record it.

OAuth Scope: `tailnets`.


> Body parameter

```json
{
  "displayName": "Production staging"
}
```

<h3 id="create-a-tailnet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization|path|string|true|The organization identifier.<br><br>Use a dash (`-`) to reference the organization of the access token being used to make the API call.<br>|
|body|body|[CreateOrganizationTailnetRequest](#schemacreateorganizationtailnetrequest)|true|none|
|» displayName|body|string|true|A custom name for the tailnet. It can contain letters, numbers, spaces, apostrophes, and hyphens, and must<br>be unique within the organization.<br>|

> Example responses

> 200 Response

```json
{
  "id": "T123456CNTRL",
  "displayName": "Production staging",
  "orgId": "o123456CNTRL",
  "dnsName": "tail1234.ts.net",
  "createdAt": "2025-01-01T12:00:00Z",
  "oauthClient": {
    "id": "k123456CNTRL",
    "secret": "tskey-client-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "alreadyExists": true
}
```

> 400 Response

```json
{
  "message": "bad request"
}
```

> 403 Response

```json
{
  "message": "forbidden"
}
```

> 404 Response

```json
{
  "message": "not found"
}
```

> 500 Response

```json
{
  "message": "internal server error"
}
```

<h3 id="create-a-tailnet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation.|[CreateOrganizationTailnetResponse](#schemacreateorganizationtailnetresponse)|
|400|Bad Request|Bad request.|[Error](#schemaerror)|
|403|Forbidden|Forbidden.|[Error](#schemaerror)|
|404|Not Found|Not found.|[Error](#schemaerror)|
|500|Internal Server Error|Internal server error.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "addresses": [
    "100.87.74.78",
    "fd7a:115c:a1e0:ac82:4843:ca90:697d:c36e"
  ],
  "id": "92960230385",
  "nodeId": "n292kg92CNTRL",
  "user": "amelie@example.com",
  "name": "pangolin.tailfe8c.ts.net",
  "hostname": "pangolin",
  "clientVersion": "v1.36.0",
  "updateAvailable": false,
  "os": "linux",
  "created": "2022-12-01T05:23:30Z",
  "connectedToControl": true,
  "lastSeen": "2022-12-01T05:23:30Z",
  "keyExpiryDisabled": false,
  "expires": "2023-05-30T04:44:05Z",
  "authorized": false,
  "isExternal": false,
  "multipleConnections": true,
  "machineKey": "",
  "nodeKey": "nodekey:01234567890abcdef",
  "blocksIncomingConnections": false,
  "enabledRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "advertisedRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "clientConnectivity": {
    "endpoints": [
      "199.9.14.201:59128",
      "192.68.0.21:59128"
    ],
    "latency": {
      "Dallas": {
        "latencyMs": 60.463043
      },
      "New York City": {
        "preferred": true,
        "latencyMs": 31.323811
      }
    },
    "mappingVariesByDestIP": false,
    "clientSupports": {
      "hairPinning": null,
      "ipv6": false,
      "pcp": false,
      "pmp": false,
      "udp": false,
      "upnp": false
    }
  },
  "tags": [
    "tag:golink"
  ],
  "tailnetLockError": "",
  "tailnetLockKey": "",
  "sshEnabled": false,
  "postureIdentity": {
    "serialNumbers": [
      "CP74LFQJXM"
    ]
  },
  "postureStatus": {
    "passing": true,
    "impacting": true,
    "failingAssertions": [
      "string"
    ]
  },
  "isEphemeral": false,
  "distro": {
    "name": "ubuntu",
    "version": "25.04",
    "codeName": "Plucky Puffin"
  }
}
```

A Tailscale device (sometimes referred to as *node* or *machine*), is any computer or mobile device that joins a tailnet.

Each device has a unique ID (`nodeId` in the schema below) that is used to identify the device in API calls.
This ID can be found by going to the [Machines](https://login.tailscale.com/admin/machines) page in the admin console,
selecting the relevant device, then finding the ID in the Machine Details section.
You can also [list all devices](#tag/devices/get/tailnet/{tailnet}/devices) in the tailnet to get their `nodeId` values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|A list of Tailscale IP addresses for the device,<br>including both IPv4 (formatted as 100.x.y.z)<br>and IPv6 (formatted as fd7a:115c:a1e0:a:b:c:d:e) addresses.<br>|
|id|string|false|none|The legacy identifier for a device; you<br>can supply this value wherever {deviceId} is indicated in the<br>endpoint. Note that although "id" is still accepted, "nodeId" is<br>preferred.<br>|
|nodeId|string|false|none|The preferred identifier for a device;<br>supply this value wherever {deviceId} is indicated in the endpoint.<br>|
|user|string|false|none|The user who registered the node. For untagged nodes,<br> this user is the device owner.<br>|
|name|string|false|none|The MagicDNS name of the device.<br>Learn more about MagicDNS at https://tailscale.com/docs/features/magicdns.<br>|
|hostname|string|false|none|The machine name in the admin console.<br>Learn more about machine names at https://tailscale.com/docs/concepts/machine-names.<br>|
|clientVersion|string|false|none|The version of the Tailscale client<br>software; this is empty for external devices.<br>|
|updateAvailable|boolean|false|none|'true' if a Tailscale client version<br>upgrade is available. This value is empty for external devices.<br>|
|os|string|false|none|The operating system that the device is running.<br>|
|created|string(date-time)|false|none|The date on which the device was added<br>to the tailnet; this is empty for external devices.<br>|
|connectedToControl|boolean|false|none|Indicates if the device recently maintained a TCP connection to the Tailscale control server.<br>|
|lastSeen|string(date-time)|false|none|When the device was last connected to the Tailscale control server. Omitted if the device has never been online or `connectedToControl` is true.<br>|
|keyExpiryDisabled|boolean|false|none|'true' if the keys for the device will not expire.<br>Learn more at https://tailscale.com/docs/features/access-control/key-expiry.<br>|
|expires|string(date-time)|false|none|The expiration date of the device's auth key.<br>Learn more about key expiry at https://tailscale.com/docs/features/access-control/key-expiry.<br>|
|authorized|boolean|false|none|'true' if the device has been authorized to join the tailnet; otherwise, 'false'.<br>Learn more about device authorization at https://tailscale.com/docs/features/access-control/device-management/device-approval.<br>|
|isExternal|boolean|false|none|'true', indicates that a device is not a member of the tailnet, but is shared in to the tailnet;<br>if 'false', the device is a member of the tailnet.<br>Learn more about node sharing at https://tailscale.com/docs/features/sharing.<br>|
|multipleConnections|boolean|false|none|'true', indicates that multiple devices are currently connected using the same node key, which is usually a sign of node state being copied between machines.<br>If only one device is connected using this node's key, the field is omitted.<br>If the number of live connections goes back to 0 or 1, this field is also omitted, meaning it's not sticky. In case an attacker steals node state from a legitimate node, they can mask their activities by not connecting concurrently with the legitimate node.<br>|
|machineKey|string|false|none|For internal use and is not required for any API operations.<br>This value is empty for external devices.<br>|
|nodeKey|string|false|none|Mostly for internal use, required for select operations, such as adding a node to a locked tailnet.<br>Learn about tailnet locks at https://tailscale.com/docs/features/tailnet-lock.<br>|
|blocksIncomingConnections|boolean|false|none|'true' if the device is not allowed to accept any connections over Tailscale, including pings.<br>Learn more in the "Allow incoming connections" section of https://tailscale.com/docs/features/client/manage-preferences.<br>|
|enabledRoutes|[string]|false|none|The subnet routes for this device that have been approved by a tailnet admin.<br>Learn more about subnet routes at https://tailscale.com/docs/features/subnet-routers.<br>|
|advertisedRoutes|[string]|false|none|The subnets this device requests to expose.<br>Learn more about subnet routes at https://tailscale.com/docs/features/subnet-routers.<br>|
|clientConnectivity|object|false|none|clientConnectivity provides a report on the device's current physical network conditions.<br>|
|tags|[string]|false|none|Lets you assign an identity to a device that is separate from human users, and use it as part of an ACL to restrict access.<br>Once a device is tagged, the tag is the owner of that device.<br>A single node can have multiple tags assigned.<br>This value is empty for external devices.<br>Learn more about tags at https://tailscale.com/docs/features/tags.<br>|
|tailnetLockError|string|false|none|Indicates an issue with the tailnet lock node-key signature on this device.<br>This field is only populated when tailnet lock is enabled.<br>|
|tailnetLockKey|string|false|none|The node's tailnet lock key.<br>Every node generates a tailnet lock key (so the value will be present) even if tailnet lock is not enabled.<br>Learn more about tailnet lock at https://tailscale.com/docs/features/tailnet-lock.<br>|
|sshEnabled|boolean|false|none|'true' if Tailscale SSH is enabled on this device.<br>Learn more about Tailscale SSH at https://tailscale.com/docs/features/tailscale-ssh.<br>|
|postureIdentity|object|false|none|Contains extra identifiers from the device when the tailnet it is connected to has device posture identification collection enabled.<br>If the device has not opted-in to posture identification collection, this will contain {"disabled": true}.<br>Learn more about posture identity at https://tailscale.com/docs/features/access-control/device-management/how-to/manage-identity.<br>|
|postureStatus|object|false|none|Reports the status of a single posture for a device.<br>|
|isEphemeral|boolean|false|none|'true' if the device is ephemeral.<br>Learn more about ephemeral nodes at https://tailscale.com/docs/features/ephemeral-nodes.<br>|
|distro|object|false|none|distro provides details of the operating system distribution, if available.<br>|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_DeviceRoutes">DeviceRoutes</h2>
<!-- backwards compatibility -->
<a id="schemadeviceroutes"></a>
<a id="schema_DeviceRoutes"></a>
<a id="tocSdeviceroutes"></a>
<a id="tocsdeviceroutes"></a>

```json
{
  "advertisedRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ],
  "enabledRoutes": [
    "10.0.0.0/16",
    "192.168.1.0/24"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisedRoutes|[string]|false|none|The subnets this device requests to expose.<br>|
|enabledRoutes|[string]|false|none|The subnet routes for this device that have been approved by a tailnet admin.<br>|

<h2 id="tocS_DevicePostureAttributes">DevicePostureAttributes</h2>
<!-- backwards compatibility -->
<a id="schemadevicepostureattributes"></a>
<a id="schema_DevicePostureAttributes"></a>
<a id="tocSdevicepostureattributes"></a>
<a id="tocsdevicepostureattributes"></a>

```json
{
  "attributes": {
    "custom:myScore": 80,
    "custom:diskEncryption": true,
    "custom:myAttribute": "my_value",
    "node:os": "linux",
    "node:osVersion": "5.19.0-42-generic",
    "node:tsReleaseTrack": "stable",
    "node:tsVersion": "1.40.0",
    "node:tsAutoUpdate": false,
    "node:tsStateEncrypted": false
  },
  "expiries": {
    "custom:myScore": "2024-04-23T18:25:43.511Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Contains all the posture attributes assigned to a node.<br>Attribute values can be strings, numbers or booleans.<br>|
|expiries|object|false|none|Contains the expiry time for each posture attribute, if set.<br>|

<h2 id="tocS_DeviceInvite">DeviceInvite</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinvite"></a>
<a id="schema_DeviceInvite"></a>
<a id="tocSdeviceinvite"></a>
<a id="tocsdeviceinvite"></a>

```json
{
  "id": "12346",
  "created": "2024-04-03T21:38:49.333829261Z",
  "tailnetId": 59954,
  "deviceId": 11055,
  "sharerId": 22012,
  "multiUse": false,
  "allowExitNode": false,
  "email": "user@example.com",
  "lastEmailSentAt": "2024-04-03T21:38:49.333829261Z",
  "inviteUrl": "https://login.tailscale.com/admin/invite/<code>",
  "accepted": false,
  "acceptedBy": {
    "id": 33223,
    "loginName": "someone@example.com",
    "profilePicUrl": ""
  }
}
```

A device invite is an invitation that shares a device with an external
user (a user not in the device's tailnet).

Each device invite has a unique ID that is used to identify the invite
in API calls. You can find all device invite IDs for a particular device
by [listing all device invites](#tag/deviceinvites/POST/device/{deviceId}/device-invites)
for a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier for the invite.<br>Supply this value wherever {deviceInviteId} is indicated in the endpoint.<br>|
|created|string(date-time)|false|none|The creation time of the invite.<br>|
|tailnetId|integer(int64)|false|none|The ID of the tailnet to which the shared device belongs.<br>|
|deviceId|integer(int64)|false|none|The ID of the device being shared.<br>|
|sharerId|integer(int64)|false|none|The ID of the user who created the share invite.<br>|
|multiUse|boolean|false|none|Specifies whether this device invite can be accepted<br>more than once.<br>|
|allowExitNode|boolean|false|none|Specifies whether the invited user is able to use the<br>device as an exit node when the device is advertising as one.<br>|
|email|string|false|none|The email to which the invite was sent.<br>If empty, the invite was not emailed to anyone,<br>but the inviteUrl can be shared manually.<br>|
|lastEmailSentAt|string(date-time)|false|none|The last time the invite was attempted to be sent to Email.<br>Only ever set if `email` is not empty.<br>|
|inviteUrl|string|false|none|The link to accept the invite.<br>Anyone with this link can accept the invite.<br>It is not restricted to the person to which the invite was emailed.<br>|
|accepted|boolean|false|none|`true` when the share invite has been accepted.<br>|
|acceptedBy|object|false|none|Set when the invite has been accepted.<br>It holds information about the user who accepted the share invite.<br>|

<h2 id="tocS_UserInvite">UserInvite</h2>
<!-- backwards compatibility -->
<a id="schemauserinvite"></a>
<a id="schema_UserInvite"></a>
<a id="tocSuserinvite"></a>
<a id="tocsuserinvite"></a>

```json
{
  "id": "12346",
  "role": "admin",
  "tailnetId": 59954,
  "inviterId": 22012,
  "email": "user@example.com",
  "lastEmailSentAt": "2024-04-03T21:38:49.333829261Z",
  "inviteUrl": "https://login.tailscale.com/admin/invite/<code>"
}
```

A user invite is an active invitation that lets a user join a tailnet
with a preassigned [user role](https://tailscale.com/docs/reference/user-roles).

Each user invite has a unique ID that is used to identify the invite
in API calls. You can find all user invite IDs for a particular tailnet
by [listing user invites](#tag/userinvites/get/tailnet/{tailnet}/user-invites).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique identifier for the invite.<br>Supply this value wherever `userInviteId` is indicated in the endpoint.<br>|
|role|string|true|none|The tailnet user role to assign to the invited user upon accepting the invite.<br>|
|tailnetId|integer(int64)|true|none|The ID of the tailnet to which the user was invited.<br>|
|inviterId|integer(int64)|true|none|The ID of the user who created the invite.<br>|
|email|string|false|none|The email to which the invite was sent.<br>If empty, the invite was not emailed to anyone,<br>but the inviteUrl can be shared manually.<br>|
|lastEmailSentAt|string(date-time)|false|none|The last time the invite was attempted to be sent to Email.<br>Only ever set if `email` is not empty.<br>|
|inviteUrl|string|false|none|Included when `email` is not part of the tailnet's domain,<br>or when `email` is empty. It is the link to accept the invite.<br><br>When included, anyone with this link can accept the invite.<br>It is not restricted to the person to which the invite was emailed.<br><br>When `email` is part of the tailnet's domain (has the same @domain.com<br>suffix as the tailnet), the user can join the tailnet automatically by<br>logging in with their domain email at https://login.tailscale.com/start.<br>They'll be assigned the specified `role` upon signing in for the first<br>time.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|role|member|
|role|admin|
|role|it-admin|
|role|network-admin|
|role|billing-admin|
|role|auditor|

<h2 id="tocS_ConfigurationAuditLog">ConfigurationAuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaconfigurationauditlog"></a>
<a id="schema_ConfigurationAuditLog"></a>
<a id="tocSconfigurationauditlog"></a>
<a id="tocsconfigurationauditlog"></a>

```json
{
  "action": "CREATE",
  "actor": {
    "displayName": "Lion Dahlia Armadillo",
    "id": "uZKk3KSfrH11DEVEL",
    "loginName": "lion.dahlia.armadillo@example.com",
    "type": "USER"
  },
  "deferredAt": "0001-01-01T00:00:00Z",
  "eventGroupID": "0378d8f57300d172ef7ae3826e097ef0",
  "eventTime": "2024-06-06T15:25:26.583893Z",
  "origin": "ADMIN_CONSOLE",
  "target": {
    "id": "nBLYviWLGB21DEVEL",
    "isEphemeral": true,
    "name": "silver-robin-horse-albatross-armadillo.taile18a.ts.net",
    "type": "NODE"
  },
  "type": "CONFIG"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTime|string|true|none|Timestamp of the audit log event, in RFC 3339 format.|
|type|string|true|none|The type of log (always "CONFIG").|
|deferredAt|string|false|none|Timestamp recording the time that the audit log rate limiter enqueued the record to be logged at a future time, in RFC 3339 format.|
|eventGroupID|string|true|none|Identifier assigned to one or more audit log events, all of which are the result of a single operation.|
|origin|string|true|none|The initiator of the action that generated the event, typically an API or user interface, like the Tailscale admin panel.|
|actor|object|true|none|The person who caused the action related to this event.|
|target|object|true|none|The object of this event's action.|
|action|string|true|none|The type of change attempted against the `target`.|
|old|string \| number \| integer \| boolean \| [object] \| object|false|none|The value of `target.property`` prior to the event.|
|new|string \| number \| integer \| boolean \| [object] \| object|false|none|The value of `target.property` after the event.|
|actionDetails|string|false|none|Additional information about the event, such as a client-provided reason, if it exists.|
|error|string|false|none|Provided when the configuration change failed to be completed. It is a user-presentable reason for the failure.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CONFIG|
|origin|ADMIN_CONSOLE|
|origin|CONFIG_API|
|origin|CONTROL|
|origin|IDENTITY_PROVIDER|
|origin|NODE|
|origin|SUPPORT_REQUEST|
|origin|STRIPE|
|origin|SECURITY_NOTIFICATION|
|origin|LEGAL_NOTIFICATION|
|origin|BORDER0_API|
|action|LOGIN|
|action|LOGOUT|
|action|CREATE|
|action|UPDATE|
|action|DELETE|
|action|CANCEL|
|action|REVOKE|
|action|APPROVE|
|action|SUSPEND|
|action|RESTORE|
|action|ENABLE|
|action|DISABLE|
|action|ACCEPT|
|action|EXPIRED|
|action|PUSH_USER|
|action|PUSH_GROUP|
|action|VERIFY|
|action|JOIN_WAITLIST|
|action|INVITE|
|action|JOIN|
|action|LEAVE|
|action|RESEND|
|action|MIGRATE_AUTH_PROVIDER|

<h2 id="tocS_ConnectionCounts">ConnectionCounts</h2>
<!-- backwards compatibility -->
<a id="schemaconnectioncounts"></a>
<a id="schema_ConnectionCounts"></a>
<a id="tocSconnectioncounts"></a>
<a id="tocsconnectioncounts"></a>

```json
{
  "proto": "ipv4",
  "src": "108.86.185.125:52343",
  "dst": "108.86.185.126:443",
  "txPkts": 10,
  "txBytes": 1000,
  "rxPkts": 10,
  "rxBytes": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proto|string|false|none|IP protocol name (or number if no name used).|
|src|string|false|none|Source addr:port.|
|dst|string|false|none|Destination addr:port.|
|txPkts|integer|false|none|Number of packets sent.|
|txBytes|integer|false|none|Number of bytes sent.|
|rxPkts|integer|false|none|Number of packets received.|
|rxBytes|integer|false|none|Number of bytes received.|

#### Enumerated Values

|Property|Value|
|---|---|
|proto|ah|
|proto|dccp|
|proto|egp|
|proto|esp|
|proto|gre|
|proto|icmp|
|proto|igmp|
|proto|igp|
|proto|ipv4|
|proto|ipv6-icmp|
|proto|sctp|
|proto|tcp|
|proto|udp|

<h2 id="tocS_NetworkFlowLog">NetworkFlowLog</h2>
<!-- backwards compatibility -->
<a id="schemanetworkflowlog"></a>
<a id="schema_NetworkFlowLog"></a>
<a id="tocSnetworkflowlog"></a>
<a id="tocsnetworkflowlog"></a>

```json
{
  "logged": "2024-06-06T15:27:26.583893Z",
  "nodeId": "nBLYviWLGB21DEVEL",
  "start": "2024-06-06T15:25:26.583893Z",
  "end": "2024-06-06T15:26:26.583893Z",
  "virtualTraffic": [
    {
      "proto": "ipv4",
      "src": "108.86.185.125:52343",
      "dst": "108.86.185.126:443",
      "txPkts": 10,
      "txBytes": 10000,
      "rxPkts": 10,
      "rxBytes": 10000
    }
  ],
  "subnetTraffic": [
    {
      "proto": "ipv4",
      "src": "108.86.185.125:52343",
      "dst": "108.86.185.126:443",
      "txPkts": 10,
      "txBytes": 10000,
      "rxPkts": 10,
      "rxBytes": 10000
    }
  ],
  "exitTraffic": [
    {
      "proto": "ipv4",
      "src": "108.86.185.125:52343",
      "dst": "108.86.185.126:443",
      "txPkts": 10,
      "txBytes": 10000,
      "rxPkts": 10,
      "rxBytes": 10000
    }
  ],
  "physicalTraffic": [
    {
      "proto": "ipv4",
      "src": "108.86.185.125:52343",
      "dst": "108.86.185.126:443",
      "txPkts": 10,
      "txBytes": 10000,
      "rxPkts": 10,
      "rxBytes": 10000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logged|string|false|none|Timestamp of the flow log, in RFC 3339 format.|
|nodeId|string|false|none|Identifier of the node.|
|start|string|false|none|Time at which flow started, in RFC 3339 format.|
|end|string|false|none|Time at which flow ended, in RFC 3339 format.|
|virtualTraffic|[[ConnectionCounts](#schemaconnectioncounts)]|false|none|none|
|subnetTraffic|[[ConnectionCounts](#schemaconnectioncounts)]|false|none|none|
|exitTraffic|[[ConnectionCounts](#schemaconnectioncounts)]|false|none|none|
|physicalTraffic|[[ConnectionCounts](#schemaconnectioncounts)]|false|none|none|

<h2 id="tocS_LogType">LogType</h2>
<!-- backwards compatibility -->
<a id="schemalogtype"></a>
<a id="schema_LogType"></a>
<a id="tocSlogtype"></a>
<a id="tocslogtype"></a>

```json
"configuration"
```

The type of log for logging endpoints.

<h2 id="tocS_LogstreamEndpointPublishingStatus">LogstreamEndpointPublishingStatus</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamendpointpublishingstatus"></a>
<a id="schema_LogstreamEndpointPublishingStatus"></a>
<a id="tocSlogstreamendpointpublishingstatus"></a>
<a id="tocslogstreamendpointpublishingstatus"></a>

```json
{
  "lastActivity": "2024-06-10T15:42:13.984555636Z",
  "lastError": "",
  "maxBodySize": 524288,
  "numBytesSent": 17238983,
  "numEntriesSent": 8363,
  "numFailedRequests": 5434,
  "numSpoofedEntries": 0,
  "numTotalRequests": 10610,
  "rateBytesSent": 3.524073767296142,
  "rateEntriesSent": 0.008564949767446907,
  "rateFailedRequests": 4.1431119220540763e-157,
  "rateTotalRequests": 0.0037038341100629453
}
```

Latest status of log stream publishing for a specific type of log.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lastActivity|string|true|none|Timestamp of the most recent publishing activity, in RFC 3339 format.|
|lastError|string|true|none|The most recent error (if any).|
|maxBodySize|integer|true|none|The size of the largest single request body.|
|numBytesSent|integer|true|none|Total bytes published across all requests.|
|numEntriesSent|integer|true|none|The total number of entries published.|
|numSpoofedEntries|integer|true|none|The number of spoofed entries published. A spoofed entry is one that failed to validate because we did not see receive a matching flow log from the other side of the connection.|
|numTotalRequests|integer|true|none|The total number of requests made to the streaming endpoint.|
|numFailedRequests|integer|true|none|The total number of requests to the streaming endpoint that have failed.|
|rateBytesSent|number|true|none|The exponentially weighted moving average rate at which data is being streamed to the endpoint, in bytes per second.|
|rateEntriesSent|number|true|none|The exponentially weighted moving average rate at which entries are being sent to the endpoint, in entries per second.|
|rateTotalRequests|number|true|none|The exponentially weighted moving average rate at which requests are being made to the endpoint, in requests per second.|
|rateFailedRequests|number|true|none|The exponentially weighted moving average rate at which requests are failing, in requests per second.|

<h2 id="tocS_LogstreamEndpointConfiguration">LogstreamEndpointConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemalogstreamendpointconfiguration"></a>
<a id="schema_LogstreamEndpointConfiguration"></a>
<a id="tocSlogstreamendpointconfiguration"></a>
<a id="tocslogstreamendpointconfiguration"></a>

```json
{
  "logType": "configuration",
  "destinationType": "elastic",
  "url": "http://100.71.134.73:80/config-log-datastream",
  "user": "myusername"
}
```

The current configuration of a log streaming endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logType|[LogType](#schemalogtype)|false|none|The type of log that is streamed to this endpoint.|
|destinationType|string|false|none|The type of system to which logs are being streamed.|
|url|string|false|none|The URL to which log streams are being posted. If the DestinationType is `s3`, the URL may be (and often is) empty to use the official Amazon S3 endpoint.|
|user|string|false|none|The username with which log streams to this endpoint are authenticated.|
|uploadPeriodMinutes|integer|false|none|An optional number of minutes to wait in between uploading new logs. If the quantity of logs does not fit within a single upload, multiple uploads will be made.|
|compressionFormat|string|false|none|The compression algorithm with which to compress logs. `none` disables compression. Defaults to `none`.|
|token|string|false|write-only|The token/password with which log streams to this endpoint should be authenticated.|
|s3Bucket|string|false|none|The S3 bucket name. Required if the destinationType is `s3`.|
|s3Region|string|false|none|The region in which the S3 bucket is located. Required if the destinationType is `s3`.|
|s3KeyPrefix|string|false|none|An optional S3 key prefix to prepend to the auto-generated S3 key name.|
|s3AuthenticationType|string|false|none|What type of authentication to use for S3. Required if the destinationType is `s3`. Tailscale recommends using `rolearn`. See [Amazon documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html).|
|s3AccessKeyId|string|false|none|The S3 access key ID. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.|
|s3SecretAccessKey|string|false|write-only|The S3 secret access key. Required if the destinationType is `s3` and `authenticationType` is `accesskey`.|
|s3RoleArn|string|false|none|The Role ARN that Tailscale should supply to AWS when authenticating using role-based authentication. Required if the destinationType is `s3` and `authenticationType` is `rolearn`.|
|s3ExternalId|string|false|read-only|The AWS external id that Tailscale supplies when authenticating using role-based authentication. Populated if the destinationType is `s3` and `authenticationType` is `rolearn`. This corresponds to the `externalId` field obtained from [tailnet/{tailnet}/aws-external-id](#tag/logging/POST/tailnet/{tailnet}/aws-external-id).|
|gcsBucket|string|false|none|The GCS bucket name. Required if the destinationType is `gcs`.|
|gcsKeyPrefix|string|false|none|An optional GCS key prefix to append to the GCS bucket name.|
|gcsScopes|[string]|false|none|The GCS scopes needed to be able to write to the GCS bucket.|
|gcsCredentials|string|false|none|The JSON workload identity credentials from GCS needed for accessing the GCS account.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|configuration|
|logType|network|
|destinationType|splunk|
|destinationType|elastic|
|destinationType|panther|
|destinationType|cribl|
|destinationType|crowdstrike|
|destinationType|datadog|
|destinationType|axiom|
|destinationType|s3|
|compressionFormat|zstd|
|compressionFormat|gzip|
|compressionFormat|none|
|s3AuthenticationType|accesskey|
|s3AuthenticationType|rolearn|

<h2 id="tocS_AwsExternalId">AwsExternalId</h2>
<!-- backwards compatibility -->
<a id="schemaawsexternalid"></a>
<a id="schema_AwsExternalId"></a>
<a id="tocSawsexternalid"></a>
<a id="tocsawsexternalid"></a>

```json
{
  "externalId": "60fe9ce7-7791-4ab3-ab34-4294f5972725",
  "tailscaleAwsAccountId": "001234567890"
}
```

An external ID for use in authenticating to AWS using role-based authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalId|string|false|none|The external id that Tailscale will supply to AWS when authenticating using role-based authentication.|
|tailscaleAwsAccountId|string|false|none|The AWS account id that Tailscale will supply to AWS when authenticating using role-based authentication.|

<h2 id="tocS_DnsPreferences">DnsPreferences</h2>
<!-- backwards compatibility -->
<a id="schemadnspreferences"></a>
<a id="schema_DnsPreferences"></a>
<a id="tocSdnspreferences"></a>
<a id="tocsdnspreferences"></a>

```json
{
  "magicDNS": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|magicDNS|boolean|true|none|Whether MagicDNS is active for this tailnet.<br>|

<h2 id="tocS_DnsSearchPaths">DnsSearchPaths</h2>
<!-- backwards compatibility -->
<a id="schemadnssearchpaths"></a>
<a id="schema_DnsSearchPaths"></a>
<a id="tocSdnssearchpaths"></a>
<a id="tocsdnssearchpaths"></a>

```json
{
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|searchPaths|[string]|true|none|The search domains for the given tailnet.<br>|

<h2 id="tocS_SplitDns">SplitDns</h2>
<!-- backwards compatibility -->
<a id="schemasplitdns"></a>
<a id="schema_SplitDns"></a>
<a id="tocSsplitdns"></a>
<a id="tocssplitdns"></a>

```json
{
  "example.com": [
    "1.1.1.1",
    "1.2.3.4"
  ],
  "other.com": [
    "2.2.2.2"
  ]
}
```

Map of domain names to lists of nameservers or to `null`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<h2 id="tocS_DnsConfigurationResolver">DnsConfigurationResolver</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfigurationresolver"></a>
<a id="schema_DnsConfigurationResolver"></a>
<a id="tocSdnsconfigurationresolver"></a>
<a id="tocsdnsconfigurationresolver"></a>

```json
{
  "address": "1.1.1.1",
  "useWithExitNode": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|IPv4 or IPv6 address of the DNS resolver.<br>|
|useWithExitNode|boolean|false|none|If true, this resolver should still be used when a device is configured to use a Tailscale exit node. Requires Tailscale v1.88.1 or later.<br>|

<h2 id="tocS_DnsConfigurationPreferences">DnsConfigurationPreferences</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfigurationpreferences"></a>
<a id="schema_DnsConfigurationPreferences"></a>
<a id="tocSdnsconfigurationpreferences"></a>
<a id="tocsdnsconfigurationpreferences"></a>

```json
{
  "overrideLocalDNS": true,
  "magicDNS": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overrideLocalDNS|boolean|false|none|If true, resolvers in `nameservers` override the local OS DNS configuration; if false, local resolvers are used.<br>|
|magicDNS|boolean|false|none|Whether MagicDNS is enabled for this tailnet.<br>|

<h2 id="tocS_DnsConfiguration">DnsConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadnsconfiguration"></a>
<a id="schema_DnsConfiguration"></a>
<a id="tocSdnsconfiguration"></a>
<a id="tocsdnsconfiguration"></a>

```json
{
  "nameservers": [
    {
      "address": "8.8.8.8",
      "useWithExitNode": true
    },
    {
      "address": "1.1.1.1",
      "useWithExitNode": false
    }
  ],
  "splitDNS": {
    "corp.example.com": [
      {
        "address": "10.0.0.53",
        "useWithExitNode": true
      },
      {
        "address": "10.0.1.53",
        "useWithExitNode": true
      }
    ],
    "other.internal": [
      {
        "address": "10.0.2.53",
        "useWithExitNode": false
      }
    ]
  },
  "searchPaths": [
    "user1.example.com",
    "user2.example.com"
  ],
  "preferences": {
    "overrideLocalDNS": true,
    "magicDNS": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nameservers|[[DnsConfigurationResolver](#schemadnsconfigurationresolver)]|false|none|Global DNS resolvers to use. If `preferences.overrideLocalDNS` is true, these override the local OS configuration; otherwise they are used as fallback resolvers.<br>|
|splitDNS|object|false|none|Map of DNS name suffixes (domains) to lists of resolvers for Split DNS and advanced routing overlays.<br>|
|searchPaths|[string]|false|none|Search domain paths to apply.<br>|
|preferences|[DnsConfigurationPreferences](#schemadnsconfigurationpreferences)|false|none|none|

<h2 id="tocS_KeyCapabilities">KeyCapabilities</h2>
<!-- backwards compatibility -->
<a id="schemakeycapabilities"></a>
<a id="schema_KeyCapabilities"></a>
<a id="tocSkeycapabilities"></a>
<a id="tocskeycapabilities"></a>

```json
{
  "devices": {
    "create": {
      "reusable": true,
      "ephemeral": false,
      "preauthorized": true,
      "tags": [
        "tag:example"
      ]
    }
  }
}
```

`capabilities` is a mapping of resources to permissible actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|object|false|none|`devices` specifies the key's permissions over devices.<br>This field is only populated for auth keys.<br>|

<h2 id="tocS_Key">Key</h2>
<!-- backwards compatibility -->
<a id="schemakey"></a>
<a id="schema_Key"></a>
<a id="tocSkey"></a>
<a id="tocskey"></a>

```json
{
  "id": "k123456CNTRL",
  "key": "tskey-auth-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "keyType": "auth",
  "expirySeconds": 7776000,
  "created": "2021-12-09T23:22:39Z",
  "updated": "2021-12-09T23:22:39Z",
  "expires": "2022-03-09T23:22:39Z",
  "revoked": "2022-03-12T23:22:39Z",
  "capabilities": {
    "devices": {
      "create": {
        "reusable": true,
        "ephemeral": false,
        "preauthorized": true,
        "tags": [
          "tag:example"
        ]
      }
    }
  },
  "scopes": [
    "all:read"
  ],
  "tags": [
    "tag:example"
  ],
  "description": "dev access",
  "invalid": false,
  "userId": "uscwcTtzzo11DEVEL",
  "audience": "api.tailscale.com/Tz8TefihCR11DEVEL-kqc11MVpwu11DEVEL",
  "issuer": "https://example.com",
  "subject": "my-example-subject-*",
  "customClaimRules": {
    "exampleAdditionalClaim": "valueToMatch",
    "otherAdditionalClaim": "valueWithWildcard*"
  }
}
```

An API access token or Auth Key.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|key|string|false|none|The secret key material (only populated at creation time).|
|keyType|string|false|none|The type of key. Can be one of "auth", "client", "federated", or "api".<br>- "auth" refers to machine auth keys.<br>- "client" refers to OAuth clients.<br>- "federated" refers to federated identities.<br>- "api" refers to personal API access tokens or tokens generated using an OAuth client or federated identity.<br>|
|expirySeconds|integer(int64)|false|none|Duration in seconds until the key expires.<br>Only applies to auth keys.<br>|
|created|string(date-time)|false|none|none|
|updated|string(date-time)|false|none|none|
|expires|string(date-time)|false|none|none|
|revoked|string(date-time)|false|none|none|
|capabilities|[KeyCapabilities](#schemakeycapabilities)|false|none|`capabilities` is a mapping of resources to permissible actions.<br>|
|scopes|[string]|false|none|A list of scopes granted to the key.<br><br>Only applies to OAuth clients, API access tokens, and federated identities.<br>|
|tags|[string]|false|none|A list of tags associated to the trust credential. <br>Auth keys created with this client must have these exact tags, or tags owned by the client's tags. <br>Mandatory if the scopes include "devices:core" or "auth_keys". <br><br>Only applies to OAuth clients and federated identities.<br>|
|description|string|false|none|none|
|invalid|boolean|false|none|Response for a revoked (deleted) or expired key will have an `invalid` field set to true.<br>|
|userId|string|false|none|ID of the user who created this key, empty for keys created by trust credentials.<br>|
|audience|string|false|none|The value used when matching against the `aud` claim from an OIDC identity token.<br><br>Specifying the audience is optional as Tailscale will generate a secure audience at creation time by default.<br>It is recommended to let Tailscale generate the audience unless the identity provider you are integrating with<br>requires a specific audience format.<br><br>Only applies to federated identities.<br>|
|issuer|string(uri)|false|none|The issuer of the OIDC identity token used in the token exchange. Must be a valid and publicly reachable https:// URL.<br><br>Only applies to federated identities.<br>|
|subject|string|false|none|The pattern used when matching against the `sub` claim from an OIDC identity token.<br>This pattern can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|
|customClaimRules|object|false|none|A map of claim names to pattern strings used to match against arbitrary claims in the OIDC identity token.<br>Patterns can include `*` characters to match against any character.<br><br>Only applies to federated identities.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|keyType|auth|
|keyType|client|
|keyType|api|
|keyType|federated|

<h2 id="tocS_PostureIntegration">PostureIntegration</h2>
<!-- backwards compatibility -->
<a id="schemapostureintegration"></a>
<a id="schema_PostureIntegration"></a>
<a id="tocSpostureintegration"></a>
<a id="tocspostureintegration"></a>

```json
{
  "id": "p56wQiqrn7mfDEVEL",
  "provider": "intune",
  "cloudId": "global",
  "clientId": "93013672-b00c-4344-80ca-7ecf74f9dce1",
  "tenantId": "d1ae389b-5207-43a2-afca-2de6b03ac7e3",
  "configUpdated": "2024-06-18T13:44:28.250168Z",
  "status": {
    "error": "Invalid Tenant ID.\nMicrosoft error: AADSTS90002: Tenant 'd1ae389b-5207-43a2-afca-2de6b03ac7e3' not found. Check to make sure you have the correct tenant ID and are signing into the correct cloud. Check with your subscription administrator, this may happen if there are no active subscriptions for the tenant. Trace ID: f6237360-98a2-4889-913b-e3d80aba7d00 Correlation ID: a2024a6e-7757-4406-8a8d-1b6ac2e03ad5 Timestamp: 2024-06-18 13:44:33Z",
    "lastSync": "2024-06-18T08:44:33.872282-05:00",
    "matchedCount": 0,
    "possibleMatchedCount": 0,
    "providerHostCount": 0
  }
}
```

A configured PostureIntegration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|string|false|none|The device posture provider.<br><br>Required on POST requests, ignored on PATCH requests.<br>|
|cloudId|string|false|none|Identifies which of the provider's clouds to integrate with.<br><br>- For CrowdStrike Falcon, it will be one of `us-1`, `us-2`, `eu-1` or `us-gov`.<br>- For Microsoft Intune, it will be one of `global` or `us-gov`. <br>- For Jamf Pro, Kandji and Sentinel One, it is the FQDN of your subdomain, for example `mydomain.sentinelone.net`.<br>- For Kolide, this is left blank.<br>|
|clientId|string|false|none|Unique identifier for your client.<br><br>- For Microsoft Intune, it will be your application's UUID.<br>- For CrowdStrike Falcon and Jamf Pro, it will be your client id.<br>- For Kandji, Kolide and Sentinel One, this is left blank.<br>|
|tenantId|string|false|none|The Microsoft Intune directory (tenant) ID. For other providers, this is left blank.|
|clientSecret|string|false|write-only|The secret (auth key, token, etc.) used to authenticate with the provider.<br><br>Required when creating a new integration, may be omitted when updating an existing integration, in which case we retain the existing password.<br>|
|id|string|false|read-only|A unique identifier for the integration (generated by the system).|
|configUpdated|string|false|read-only|Timestamp of the last time this configuration was updated, in RFC 3339 format.|
|status|object|false|read-only|Most recent status for this integration.|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|falcon|
|provider|intune|
|provider|jamfpro|
|provider|kandji|
|provider|kolide|
|provider|sentinelone|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "123456",
  "displayName": "Some User",
  "loginName": "someuser@example.com",
  "profilePicUrl": "",
  "tailnetId": "example.com",
  "created": "2022-12-01T05:23:30Z",
  "type": "member",
  "role": "member",
  "status": "active",
  "deviceCount": 4,
  "lastSeen": "2022-12-01T05:23:30Z",
  "currentlyConnected": true
}
```

Representation of a user within a tailnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier for the user.<br>Supply this value wherever {userId} is indicated in an endpoint.<br>|
|displayName|string|false|none|The name of the user.<br>|
|loginName|string|false|none|The emailish login name of the user.<br>|
|profilePicUrl|string|false|none|The profile pic URL for the user.<br>|
|tailnetId|string|false|none|The tailnet that owns the user.<br>|
|created|string(date-time)|false|none|The time the user joined their tailnet.<br>|
|type|string|false|none|The type of relation this user has to the tailnet associated with the request.<br>|
|role|string|false|none|The role of the user. Learn more about [user roles](/docs/reference/user-roles).<br>|
|status|string|false|none|The status of the user.<br>|
|deviceCount|integer|false|none|Number of devices the user owns.<br>|
|lastSeen|string(date-time)|false|none|The later of either:<br>- The last time any of the user's nodes were connected to the network.<br>- The last time the user authenticated to any tailscale service, including the admin panel.<br>|
|currentlyConnected|boolean|false|none|`true` when the user has a node currently connected to the control server.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|type|member|
|type|shared|
|role|owner|
|role|member|
|role|admin|
|role|it-admin|
|role|network-admin|
|role|billing-admin|
|role|auditor|
|status|active|
|status|idle|
|status|suspended|
|status|needs-approval|
|status|over-billing-limit|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "user@example.com",
  "fallbackEmail": "otheruser@example.com\"",
  "needsVerification": true
}
```

A tailnet contact.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The contact's email address.|
|fallbackEmail|string|false|none|The email address used when contact's email address has not been verified.|
|needsVerification|boolean|false|none|Indicates whether the contact's email address still needs to be verified.|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "endpointId": "123456",
  "endpointUrl": "https://example.com/endpoint",
  "providerType": "slack",
  "creatorLoginName": "user@example.com",
  "created": "2022-12-01T05:23:30Z",
  "lastModified": "2022-12-01T05:23:30Z",
  "subscriptions": [
    "nodeCreated",
    "userDeleted"
  ],
  "secret": "xxxxx"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointId|string|false|none|ID of the webhook endpoint.<br>|
|endpointUrl|string|false|none|The endpoint that events are sent to from Tailscale via POST requests.<br>|
|providerType|string|false|none|The provider type for the webhook destination, or an empty string if none are applicable.<br>Outgoing webhook events are sent in the format expected by the provider type if non-empty.<br>|
|creatorLoginName|string|false|none|The login name for the creator of the webhook endpoint.<br>In some cases, such as webhooks created with an OAuth client, this can be blank.<br>|
|created|string(date-time)|false|none|The time the webhook endpoint was created.<br>|
|lastModified|string(date-time)|false|none|The time the webhook endpoint was last modified.<br>|
|subscriptions|[string]|false|none|The list of subscribed events that trigger POST requests to the configured endpoint URL.<br>Learn more about [webhook events](/docs/features/webhooks#events).<br>|
|secret|string(password)|false|none|The webhook secret associated with the endpoint.<br>Only populated on creation or when the secret is rotated.<br><br>This secret is used for generating the `Tailscale-Webhook-Signature` header in requests sent to the endpoint URL.<br>Learn more about [verifying webhook event signatures](/docs/features/webhooks#verifying-an-event-signature).<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|providerType|slack|
|providerType|mattermost|
|providerType|googlechat|
|providerType|discord|
|subscriptions|nodeCreated|
|subscriptions|nodeNeedsApproval|
|subscriptions|nodeApproved|
|subscriptions|nodeKeyExpiringInOneDay|
|subscriptions|nodeKeyExpired|
|subscriptions|nodeDeleted|
|subscriptions|nodeSigned|
|subscriptions|nodeNeedsSignature|
|subscriptions|policyUpdate|
|subscriptions|userCreated|
|subscriptions|userNeedsApproval|
|subscriptions|userSuspended|
|subscriptions|userRestored|
|subscriptions|userDeleted|
|subscriptions|userApproved|
|subscriptions|userRoleUpdated|
|subscriptions|subnetIPForwardingNotEnabled|
|subscriptions|exitNodeIPForwardingNotEnabled|

<h2 id="tocS_providerType">providerType</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype"></a>
<a id="schema_providerType"></a>
<a id="tocSprovidertype"></a>
<a id="tocsprovidertype"></a>

```json
"slack"
```

The provider type for the webhook destination, or an empty string if none are applicable.
Outgoing webhook events are sent in the format expected by the provider type if non-empty.

<h2 id="tocS_subscriptions">subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
[
  "nodeCreated",
  "userDeleted"
]
```

The list of subscribed events that trigger POST requests to the configured endpoint URL.
Learn more about [webhook events](/docs/features/webhooks#events).

<h2 id="tocS_TailnetSettings">TailnetSettings</h2>
<!-- backwards compatibility -->
<a id="schematailnetsettings"></a>
<a id="schema_TailnetSettings"></a>
<a id="tocStailnetsettings"></a>
<a id="tocstailnetsettings"></a>

```json
{
  "aclsExternallyManagedOn": false,
  "aclsExternalLink": "https://github.com/example/tailnet-policy",
  "adminConsoleSessionTimeoutMinutes": 180,
  "devicesApprovalOn": false,
  "devicesAutoUpdatesOn": false,
  "devicesKeyDurationDays": 180,
  "usersApprovalOn": true,
  "usersRoleAllowedToJoinExternalTailnets": "admin",
  "networkFlowLoggingOn": false,
  "regionalRoutingOn": false,
  "routeSelection": "active-passive-failover",
  "postureIdentityCollectionOn": false,
  "httpsEnabled": false
}
```

Settings for a tailnet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aclsExternallyManagedOn|boolean \| null|false|none|Prevents users from editing policies in the admin console to avoid conflicts with external management workflows like GitOps or Terraform.<br>|
|aclsExternalLink|string(uri)|false|none|Link to the external tailnet policy definition or management solution for this tailnet.<br>|
|adminConsoleSessionTimeoutMinutes|integer|false|none|The [admin console session timeout](/docs/account/admin-console-session-timeout) for members of this tailnet.<br>Setting it to 0 disables the timeout.<br>|
|devicesApprovalOn|boolean \| null|false|none|Whether [device approval](/docs/features/access-control/device-management/device-approval) is enabled for the tailnet.<br>|
|devicesAutoUpdatesOn|boolean \| null|false|none|Whether [auto updates](/docs/features/client/update#auto-updates) are enabled for devices that belong to this tailnet.<br>|
|devicesKeyDurationDays|integer|false|none|The [key expiry](/docs/features/access-control/key-expiry) duration for devices on this tailnet.<br>|
|usersApprovalOn|boolean \| null|false|none|Whether [user approval](/docs/features/access-control/user-approval) is enabled for this tailnet.<br>|
|usersRoleAllowedToJoinExternalTailnets|string|false|none|Which user roles are allowed to [join external tailnets](/docs/features/sharing/how-to/invite-any-user).<br>|
|networkFlowLoggingOn|boolean \| null|false|none|Whether [network flog logs](/docs/features/logging/network-flow-logs) are enabled for the tailnet.<br>|
|regionalRoutingOn|boolean \| null|false|read-only|Whether [regional routing](/docs/features/route-selection#regional-routing) is enabled for the tailnet.<br>A PATCH request should prefer setting `routeSelection`.<br>A PATCH request must not specify both the `regionalRoutingOn` and `routeSelection` fields.<br>|
|routeSelection|string|false|none|The [route selection](/docs/features/route-selection) algorithm used by the tailnet:<br>* `active-passive-failover` - Active-passive failover (formerly known as "Failover")<br>* `regional-routing` - Regional routing<br>* `regional-routing-failover` - Regional routing with in-region failover<br>* `magicroute` - MagicRoute<br><br>A PATCH request must not specify both the `regionalRoutingOn` and `routeSelection` fields.<br>|
|postureIdentityCollectionOn|boolean \| null|false|none|Whether [identity collection](/docs/features/access-control/device-management/how-to/manage-identity) is enabled for [device posture](/docs/features/device-posture) integrations for the tailnet.<br>|
|httpsEnabled|boolean \| null|false|none|Whether provisioning of [HTTPS certificates](/docs/how-to/set-up-https-certificates) is enabled for this tailnet.<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|usersRoleAllowedToJoinExternalTailnets|none|
|usersRoleAllowedToJoinExternalTailnets|admin|
|usersRoleAllowedToJoinExternalTailnets|member|
|routeSelection|active-passive-failover|
|routeSelection|regional-routing|
|routeSelection|regional-routing-failover|
|routeSelection|magicroute|

<h2 id="tocS_VIPServiceInfo">VIPServiceInfo</h2>
<!-- backwards compatibility -->
<a id="schemavipserviceinfo"></a>
<a id="schema_VIPServiceInfo"></a>
<a id="tocSvipserviceinfo"></a>
<a id="tocsvipserviceinfo"></a>

```json
{
  "name": "svc:example",
  "displayName": "Example Service",
  "addrs": [
    "100.93.49.180",
    "fd7a:115c:a1e0::3456:3cb4"
  ],
  "comment": "Example Service",
  "ports": [
    "tcp:80",
    "tcp:443"
  ],
  "tags": [
    "tag:example"
  ]
}
```

An information summary for a Service.

Each Service has a unique name within the tailnet, one IPv4 and one IPv6 address, optional comment, list of ports, 
and optional tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The unique name of the Service.|
|displayName|string|false|none|An optional human-readable label for the Service, shown in the Tailscale admin console<br>and to clients with access to the Service.<br>Must be 64 characters or fewer.<br>|
|addrs|[string]|false|none|The IP addresses assigned to the Service: the IPv4 followed by the IPv6.<br>|
|comment|string|false|none|An optional comment for the Service.|
|ports|[string]|false|none|A list of protocol:port pairs to be exposed by the Service.<br><br>The only supported protocol is "tcp" at this time. "do-not-validate" can be used to skip validation.<br>|
|tags|[string]|false|none|A list of optional tags associated with the Service.|

<h2 id="tocS_VIPServiceInfoPut">VIPServiceInfoPut</h2>
<!-- backwards compatibility -->
<a id="schemavipserviceinfoput"></a>
<a id="schema_VIPServiceInfoPut"></a>
<a id="tocSvipserviceinfoput"></a>
<a id="tocsvipserviceinfoput"></a>

```json
{
  "addrs": [
    "100.93.49.180",
    "fd7a:115c:a1e0::3456:3cb4"
  ],
  "name": "svc:example",
  "displayName": "Example Service",
  "comment": "Example Service",
  "ports": [
    "tcp:80",
    "tcp:443"
  ],
  "tags": [
    "tag:example"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addrs|[string]|false|none|The IP addresses assigned to the Service.<br><br>- For new Services: either unset or a single IPv4 to assign the Service.<br>- For existing Services: an IPv4 and an IPv6. The IPv4 can be updated, but not the IPv6.<br>|
|name|string|false|none|The unique name of the Service.|
|displayName|string|false|none|An optional human-readable label for the Service, shown in the Tailscale admin console<br>and to clients with access to the Service.<br>Must be 64 characters or fewer.<br>|
|addrs|[string]|false|none|The IP addresses assigned to the Service: the IPv4 followed by the IPv6.<br>|
|comment|string|false|none|An optional comment for the Service.|
|ports|[string]|false|none|A list of protocol:port pairs to be exposed by the Service.<br><br>The only supported protocol is "tcp" at this time. "do-not-validate" can be used to skip validation.<br>|
|tags|[string]|false|none|A list of optional tags associated with the Service.|

<h2 id="tocS_ServiceHostInfo">ServiceHostInfo</h2>
<!-- backwards compatibility -->
<a id="schemaservicehostinfo"></a>
<a id="schema_ServiceHostInfo"></a>
<a id="tocSservicehostinfo"></a>
<a id="tocsservicehostinfo"></a>

```json
{
  "stableNodeID": "n292kg92CNTRL",
  "approvalLevel": "not-approved",
  "configured": "ready"
}
```

An information summary for a device hosting a Service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stableNodeID|string|false|none|The preferred identifier for a device.<br>|
|approvalLevel|string|false|none|The approval level of the device hosting the Service.<br>|
|configured|string|false|none|The configuration status of the device hosting the Service.|

#### Enumerated Values

|Property|Value|
|---|---|
|approvalLevel|not-approved|
|approvalLevel|approved:auto|
|approvalLevel|approved:manual|

<h2 id="tocS_VIPServiceApproval">VIPServiceApproval</h2>
<!-- backwards compatibility -->
<a id="schemavipserviceapproval"></a>
<a id="schema_VIPServiceApproval"></a>
<a id="tocSvipserviceapproval"></a>
<a id="tocsvipserviceapproval"></a>

```json
{
  "approved": true,
  "autoApproved": true
}
```

The approval status of a Service on a specific device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approved|boolean|false|none|Indicates whether the Service is approved on the device.<br>|
|autoApproved|boolean|false|none|Indicates whether the Service was auto-approved by an auto-approver.<br>|

<h2 id="tocS_OAuthApp">OAuthApp</h2>
<!-- backwards compatibility -->
<a id="schemaoauthapp"></a>
<a id="schema_OAuthApp"></a>
<a id="tocSoauthapp"></a>
<a id="tocsoauthapp"></a>

```json
{
  "id": "a123456CNTRL",
  "name": "my-oauth-app",
  "description": "An OAuth app used to provision devices.",
  "redirectURIs": [
    "https://example.com/oauth/callback"
  ],
  "scopes": [
    "auth_keys:create"
  ],
  "allowedNodeAttributes": [
    "custom:myattribute"
  ],
  "clientSecret": "xxxxx",
  "created": "2022-12-01T05:23:30Z",
  "updated": "2022-12-01T05:23:30Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier for the OAuth app.<br>|
|name|string|false|none|The name of the OAuth app.<br>Must be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.<br>|
|description|string|false|none|A human-readable description of the OAuth app.<br>Must be at most 300 characters.<br>|
|redirectURIs|[string]|false|none|The list of permitted redirect URIs for the OAuth authorization code flow.<br>At least one redirect URI is required.<br><br>Each URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,<br>which may use any scheme. Raw IP address hosts are not permitted.<br>|
|scopes|[string]|false|none|The list of OAuth scopes granted to the app.<br>Must be non-empty.<br>Learn more about [OAuth clients and scopes](/docs/features/oauth-clients).<br>|
|allowedNodeAttributes|[string]|false|none|The list of custom device attributes that the OAuth app is allowed to set.<br>|
|clientSecret|string(password)|false|none|The client secret for the OAuth app.<br>Only populated when the app is created and cannot be retrieved afterwards.<br>|
|created|string(date-time)|false|none|The time the OAuth app was created.<br>|
|updated|string(date-time)|false|none|The time the OAuth app was last updated.<br>|

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
"my-oauth-app"
```

The name of the OAuth app.
Must be between 3 and 50 characters and contain only alphanumeric characters, dashes, periods, and underscores.

<h2 id="tocS_description">description</h2>
<!-- backwards compatibility -->
<a id="schemadescription"></a>
<a id="schema_description"></a>
<a id="tocSdescription"></a>
<a id="tocsdescription"></a>

```json
"An OAuth app used to provision devices."
```

A human-readable description of the OAuth app.
Must be at most 300 characters.

<h2 id="tocS_redirectURIs">redirectURIs</h2>
<!-- backwards compatibility -->
<a id="schemaredirecturis"></a>
<a id="schema_redirectURIs"></a>
<a id="tocSredirecturis"></a>
<a id="tocsredirecturis"></a>

```json
[
  "https://example.com/oauth/callback"
]
```

The list of permitted redirect URIs for the OAuth authorization code flow.
At least one redirect URI is required.

Each URI must use the `https` scheme, except for `localhost`, `127.0.0.1`, and `::1`,
which may use any scheme. Raw IP address hosts are not permitted.

<h2 id="tocS_scopes">scopes</h2>
<!-- backwards compatibility -->
<a id="schemascopes"></a>
<a id="schema_scopes"></a>
<a id="tocSscopes"></a>
<a id="tocsscopes"></a>

```json
[
  "auth_keys:create"
]
```

The list of OAuth scopes granted to the app.
Must be non-empty.
Learn more about [OAuth clients and scopes](/docs/features/oauth-clients).

<h2 id="tocS_allowedNodeAttributes">allowedNodeAttributes</h2>
<!-- backwards compatibility -->
<a id="schemaallowednodeattributes"></a>
<a id="schema_allowedNodeAttributes"></a>
<a id="tocSallowednodeattributes"></a>
<a id="tocsallowednodeattributes"></a>

```json
[
  "custom:myattribute"
]
```

The list of custom device attributes that the OAuth app is allowed to set.

<h2 id="tocS_OrganizationTailnet">OrganizationTailnet</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationtailnet"></a>
<a id="schema_OrganizationTailnet"></a>
<a id="tocSorganizationtailnet"></a>
<a id="tocsorganizationtailnet"></a>

```json
{
  "id": "T123456CNTRL",
  "displayName": "Production staging",
  "orgId": "o123456CNTRL",
  "createdAt": "2025-01-01T12:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A stable, globally unique identifier for the tailnet.|
|displayName|string|false|none|The tailnet's display name.|
|orgId|string|false|none|A stable, globally unique identifier for the organization.|
|createdAt|string(date-time)|false|none|RFC3339 timestamp of when the tailnet was created.|

<h2 id="tocS_ListOrganizationTailnetsResponse">ListOrganizationTailnetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistorganizationtailnetsresponse"></a>
<a id="schema_ListOrganizationTailnetsResponse"></a>
<a id="tocSlistorganizationtailnetsresponse"></a>
<a id="tocslistorganizationtailnetsresponse"></a>

```json
{
  "tailnets": [
    {
      "id": "T123456CNTRL",
      "displayName": "Production staging",
      "orgId": "o123456CNTRL",
      "createdAt": "2025-01-01T12:00:00Z"
    }
  ],
  "cursor": "eyJhZnRlciI6IlQxMjM0NTZDTlRSTCJ9",
  "totalCount": 50
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tailnets|[[OrganizationTailnet](#schemaorganizationtailnet)]|false|none|Tailnets in the organization.|
|cursor|string|false|none|Opaque pagination cursor for the next page.|
|totalCount|integer|false|none|Total number of tailnets in the organization.|

<h2 id="tocS_CreateOrganizationTailnetRequest">CreateOrganizationTailnetRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationtailnetrequest"></a>
<a id="schema_CreateOrganizationTailnetRequest"></a>
<a id="tocScreateorganizationtailnetrequest"></a>
<a id="tocscreateorganizationtailnetrequest"></a>

```json
{
  "displayName": "Production staging"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|A custom name for the tailnet. It can contain letters, numbers, spaces, apostrophes, and hyphens, and must<br>be unique within the organization.<br>|

<h2 id="tocS_TailnetOAuthClient">TailnetOAuthClient</h2>
<!-- backwards compatibility -->
<a id="schematailnetoauthclient"></a>
<a id="schema_TailnetOAuthClient"></a>
<a id="tocStailnetoauthclient"></a>
<a id="tocstailnetoauthclient"></a>

```json
{
  "id": "k123456CNTRL",
  "secret": "tskey-client-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

OAuth client credentials with the `all` scope for the newly created tailnet. The secret is returned only once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A stable, globally unique identifier for the OAuth client.|
|secret|string|false|none|The OAuth client secret.|

<h2 id="tocS_CreateOrganizationTailnetResponse">CreateOrganizationTailnetResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateorganizationtailnetresponse"></a>
<a id="schema_CreateOrganizationTailnetResponse"></a>
<a id="tocScreateorganizationtailnetresponse"></a>
<a id="tocscreateorganizationtailnetresponse"></a>

```json
{
  "id": "T123456CNTRL",
  "displayName": "Production staging",
  "orgId": "o123456CNTRL",
  "dnsName": "tail1234.ts.net",
  "createdAt": "2025-01-01T12:00:00Z",
  "oauthClient": {
    "id": "k123456CNTRL",
    "secret": "tskey-client-xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  "alreadyExists": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A stable, globally unique identifier for the tailnet.|
|displayName|string|false|none|The tailnet name provided in the request.|
|orgId|string|false|none|A stable, globally unique identifier for the organization.|
|dnsName|string|false|none|The DNS suffix used to construct fully qualified domain names for devices in this tailnet.|
|createdAt|string(date-time)|false|none|RFC3339 timestamp of when the tailnet was created.|
|oauthClient|[TailnetOAuthClient](#schematailnetoauthclient)|false|none|OAuth client credentials with the `all` scope for the newly created tailnet. The secret is returned only once.<br>|
|alreadyExists|boolean|false|none|True if the requested tailnet already exists.|
