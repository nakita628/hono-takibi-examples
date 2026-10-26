<h1 id="cloud-device-api">Cloud device API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the Cloud device API you can: 
* **Send Terminal API requests to a cloud endpoint**. 
  You can use this communication method when it is not an option to send Terminal API requests over your local network directly to a payment terminal.
* **Check the cloud connection** of a payment terminal or of a device used in a Mobile solution for in-person payments.

## Authentication
Each request to the Cloud device API must be signed with an API key that has the **Cloud Device API** role. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in your test Customer Area and then set this key to the X-API-Key header value. For example:

```
curl
-H 'Content-Type: application/json' 
-H 'X-API-Key: ADYEN_API_KEY' 
...
```

## Usage with Terminal API
When using [cloud communications](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/) for sending and receiving [Terminal API requests](https://docs.adyen.com/api-explorer/terminal-api/latest/overview), your POS system uses the internet to access the cloud and send your Terminal API request to Adyen. Adyen then forwards the request to the payment device. 

The Cloud device API has different endpoints for synchronous or asynchronous cloud communications:
* If your POS system is designed to keep the connection open to wait for the response, use the endpoints ending in `/sync`.

  In the test environment the endpoint for synchronous communication is `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/sync` 

* If your POS system is designed to close the connection so that it can initiate a new request, use the endpoints ending in `/async`. 
  You will then receive the Terminal API response asynchronously in an event notification, which is sent as a webhook to an endpoint set up by you.

  In the test environment the endpoint for asynchronous communication is `https://device-api-test.adyen.com/v1/merchants/{merchantAccount}/devices/{deviceId}/async`
## Going live
To access the live endpoints, you must generate a new API key with the **Cloud Device API** role in your live Customer Area. 

You must use the data center and live endpoint that is geographically closest to your location: 
* In your Customer Area, go to **Developers** > **API URLs** > **Select a data center** and select the closest data center. 
* Switch to the live endpoint that is geographically closest to your location. See the base URLs below.
### Australia:
https://device-api-live-au.adyen.com

### East Asia:
https://device-api-live-apse.adyen.com

### Europe:
https://device-api-live.adyen.com

### United States:
https://device-api-live-us.adyen.com

## Methods

Base URLs:

* <a href="https://device-api-test.adyen.com/v1">https://device-api-test.adyen.com/v1</a> - Test environment

* <a href="https://device-api-live-au.adyen.com/v1">https://device-api-live-au.adyen.com/v1</a> - Live environment for Australia

* <a href="https://device-api-live-apse.adyen.com/v1">https://device-api-live-apse.adyen.com/v1</a> - Live environment for East Asia

* <a href="https://device-api-live.adyen.com/v1">https://device-api-live.adyen.com/v1</a> - Live environment for Europe

* <a href="https://device-api-live-us.adyen.com/v1">https://device-api-live-us.adyen.com/v1</a> - Live environment for United States of America

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="cloud-device-api-cloud-endpoints-and-connection">Cloud endpoints and connection</h1>

## Get a list of connected devices

<a id="opIdget-merchants-merchantAccount-connectedDevices"></a>

> Code samples

```bash
curl https://device-api-test.adyen.com/v1/merchants/string/connectedDevices \
  -H 'Accept: application/json'
```

`GET /merchants/{merchantAccount}/connectedDevices`

Get a list of payment terminals or SDK installation IDs (in a Mobile solution) belonging to the specified merchant account that have an active cloud connection.  The `store` query parameter limits the list of devices to those belonging to a specific store under the specified merchant account. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


* **Cloud Device API role**

<h3 id="get-a-list-of-connected-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantAccount|path|string|true|The unique identifier of the merchant account.|
|store|query|string|false|The store ID of the store belonging to the merchant account specified in the path. |

> Example responses

> 200 Response

```json
{
  "uniqueDeviceIds": [
    "S1F2-000158215131748",
    "S1F2-000158215131749",
    "S1F2-000158215131750",
    "M400-401972710",
    "M400-401972715",
    "M400-401972720"
  ]
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "User doesn't have access to all token policy resources",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

<h3 id="get-a-list-of-connected-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ConnectedDevicesResponse](#schemaconnecteddevicesresponse)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Send a Terminal API request and receive an asynchronous response

<a id="opIdpost-merchants-merchantAccount-devices-deviceId-async"></a>

> Code samples

```bash
curl https://device-api-test.adyen.com/v1/merchants/string/devices/string/async \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"string"'
```

`POST /merchants/{merchantAccount}/devices/{deviceId}/async`

Sends a Terminal API request and receives the response asynchronously.

The request body is a JSON object containing a Terminal API request. For the structure, see the various request types under [Terminal API](https://docs.adyen.com/api-explorer/terminal-api/1/overview).

A HTTP status code of **200 OK** is returned when the payment device is online and our backend has sent the request. The actual Terminal API response is returned as an event notification webhook to your event notification endpoint. See [Receiving an asynchronous result](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/#async).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


* **Cloud Device API role**

> Body parameter

```json
"string"
```

<h3 id="send-a-terminal-api-request-and-receive-an-asynchronous-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantAccount|path|string|true|The unique identifier of the merchant account.|
|deviceId|path|string|true|The unique identifier of the payment device that you send this request to. Must be the same as the `POIID` in the `MessageHeader` of the Terminal API request. <br><br>In an integration with payment terminals, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. In a Mobile solution, use the installation ID of the SDK.<br> |
|body|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="send-a-terminal-api-request-and-receive-an-asynchronous-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Get the connection status of a device

<a id="opIdget-merchants-merchantAccount-devices-deviceId-status"></a>

> Code samples

```bash
curl https://device-api-test.adyen.com/v1/merchants/string/devices/string/status \
  -H 'Accept: application/json'
```

`GET /merchants/{merchantAccount}/devices/{deviceId}/status`

Check if the specified payment terminal or SDK installation ID (in an IPP Mobile solution) has an active cloud connection.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


* **Cloud Device API role**

<h3 id="get-the-connection-status-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantAccount|path|string|true|The unique identifier of the merchant account.|
|deviceId|path|string|true|The unique identifier of the device. <br><br>For a payment terminal, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. <br>In a Mobile solution, use the installation ID of the SDK.<br> |

> Example responses

> 200 Response

```json
{
  "deviceId": "AMS1-000168242800763",
  "status": "ONLINE"
}
```

> 401 Response

```json
{
  "type": "https://docs.adyen.com/errors/unauthorized",
  "title": "Unauthorized",
  "status": 401,
  "errorCode": "00_401"
}
```

> 403 Response

```json
{
  "type": "https://docs.adyen.com/errors/forbidden",
  "errorCode": "00_403",
  "title": "Forbidden",
  "detail": "User doesn't have access to all token policy resources",
  "requestId": "d42c493b5176df89e51516c6060cc34c",
  "status": 403
}
```

<h3 id="get-the-connection-status-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DeviceStatusResponse](#schemadevicestatusresponse)|
|401|Unauthorized|Unauthorized|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Send a Terminal API request and receive a synchronous response

<a id="opIdpost-merchants-merchantAccount-devices-deviceId-sync"></a>

> Code samples

```bash
curl https://device-api-test.adyen.com/v1/merchants/string/devices/string/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"string"'
```

`POST /merchants/{merchantAccount}/devices/{deviceId}/sync`

Sends a Terminal API request and receives the response synchronously.

The request body is a JSON object containing a Terminal API request. For the structure, see the various request types under [Terminal API](https://docs.adyen.com/api-explorer/terminal-api/1/overview).

The response returns a Terminal API response. See [Receiving a synchronous result](https://docs.adyen.com/point-of-sale/design-your-integration/choose-your-architecture/cloud/#sync).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):


* **Cloud Device API role**

> Body parameter

```json
"string"
```

<h3 id="send-a-terminal-api-request-and-receive-a-synchronous-response-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantAccount|path|string|true|The unique identifier of the merchant account.|
|deviceId|path|string|true|The unique identifier of the payment device that you send this request to. Must be the same as the `POIID` in the `MessageHeader` of the Terminal API request. <br><br>In an integration with payment terminals, use the terminal ID in the format _[terminal model]-[serial number]_, for example, **P400‑123456789**. In a Mobile solution, use the installation ID of the SDK.<br> |
|body|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="send-a-terminal-api-request-and-receive-a-synchronous-response-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|Inline|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ConnectedDevicesResponse">ConnectedDevicesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaconnecteddevicesresponse"></a>
<a id="schema_ConnectedDevicesResponse"></a>
<a id="tocSconnecteddevicesresponse"></a>
<a id="tocsconnecteddevicesresponse"></a>

```json
{
  "uniqueDeviceIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uniqueDeviceIds|[string]|false|none|A list of the unique IDs of the devices that have an active cloud connection. <br>The IDs are payment terminal IDs in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or SDK installation IDs as used in Mobile solutions. |

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "name": "string",
      "value": "string",
      "message": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "name": "string",
  "value": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|
|message|string|true|none|Description of the validation error.|

<h2 id="tocS_DeviceStatus">DeviceStatus</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatus"></a>
<a id="schema_DeviceStatus"></a>
<a id="tocSdevicestatus"></a>
<a id="tocsdevicestatus"></a>

```json
"ONLINE"
```

<h2 id="tocS_DeviceStatusResponse">DeviceStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadevicestatusresponse"></a>
<a id="schema_DeviceStatusResponse"></a>
<a id="tocSdevicestatusresponse"></a>
<a id="tocsdevicestatusresponse"></a>

```json
{
  "deviceId": "string",
  "status": "ONLINE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceId|string|false|none|The unique identification of the device. <br>This can be a payment terminal ID in the format _[terminal model]-[serial number]_ (for example, P400‑123456789), or an SDK installation ID as used in Mobile solutions. |
|status|[DeviceStatus](#schemadevicestatus)|false|none|Indicates if the device has an active cloud connection. Possible values: <br>* **ONLINE** <br>* **OFFLINE** |

#### Enumerated Values

|Property|Value|
|---|---|
|status|ONLINE|
|status|OFFLINE|
