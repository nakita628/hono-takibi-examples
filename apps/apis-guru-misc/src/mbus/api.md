<h1 id="m-bus-httpd-api">M-Bus HTTPD API v0.3.5</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://mbus.local">http://mbus.local</a>

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

<h1 id="m-bus-httpd-api-default">Default</h1>

## mbus_api

<a id="opIdmbus_api"></a>

> Code samples

```bash
curl https://example.com/mbus/api
```

`GET /mbus/api`

Returns this API specification

> Example responses

> 404 Response

```text
File not found
```

<h3 id="mbusapi-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[yaml](#schemayaml)|
|404|Not Found|Not found|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## get

<a id="opIdget"></a>

> Code samples

```bash
curl https://example.com/mbus/get/ttyAMA0/2400/48 \
  -X POST
```

`POST /mbus/get/{device}/{baudrate}/{address}`

Gets data from the slave identified by {address}

<h3 id="get-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device|path|[device](#schemadevice)|true|The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning|
|baudrate|path|[baudrate](#schemabaudrate)|true|Baudrate to communicate with M-Bus devices|
|address|path|[address](#schemaaddress)|true|The slave device to get data from|

#### Enumerated Values

|Parameter|Value|
|---|---|
|baudrate|300|
|baudrate|600|
|baudrate|1200|
|baudrate|2400|
|baudrate|4800|
|baudrate|9600|

> Example responses

> 400 Response

```text
Baudrate {baudrate} is invalid
```

> 404 Response

```text
Slave {address} not responding
```

<h3 id="get-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[mbusData](#schemambusdata)|
|400|Bad Request|Bad request|[textError](#schematexterror)|
|404|Not Found|Not found (or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, etc)|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## getMulti

<a id="opIdgetMulti"></a>

> Code samples

```bash
curl https://example.com/mbus/getMulti/ttyAMA0/2400/48/16 \
  -X POST
```

`POST /mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}`

Gets data from the slave identified by {address}, and supports multiple responses from the slave

<h3 id="getmulti-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device|path|[device](#schemadevice)|true|The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning|
|baudrate|path|[baudrate](#schemabaudrate)|true|Baudrate to communicate with M-Bus devices|
|address|path|[address](#schemaaddress)|true|The slave device to get data from|
|maxframes|path|[maxframes](#schemamaxframes)|true|The slave device to get data from|

#### Enumerated Values

|Parameter|Value|
|---|---|
|baudrate|300|
|baudrate|600|
|baudrate|1200|
|baudrate|2400|
|baudrate|4800|
|baudrate|9600|

> Example responses

> 400 Response

```text
Baudrate {baudrate} is invalid
```

> 404 Response

```text
Slave {address} not responding
```

<h3 id="getmulti-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[mbusData](#schemambusdata)|
|400|Bad Request|Bad request|[textError](#schematexterror)|
|404|Not Found|Not found (or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, etc)|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## hat

<a id="opIdhat"></a>

> Code samples

```bash
curl https://example.com/mbus/hat \
  -H 'Accept: application/json'
```

`GET /mbus/hat`

Gets Raspberry Pi Hat information

> Example responses

> 200 Response

```json
{
  "addr": 30,
  "enabled": true,
  "index": 1
}
```

> 404 Response

```text
Hat information not found
```

<h3 id="hat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[hat](#schemahat)|
|404|Not Found|Not found|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## hatOff

<a id="opIdhatOff"></a>

> Code samples

```bash
curl https://example.com/mbus/hat/off \
  -X POST
```

`POST /mbus/hat/off`

Turns off power to the M-Bus

> Example responses

> 404 Response

```text
M-Bus Master Hat not installed
```

<h3 id="hatoff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Not found|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## hatOn

<a id="opIdhatOn"></a>

> Code samples

```bash
curl https://example.com/mbus/hat/on \
  -X POST
```

`POST /mbus/hat/on`

Turns on power to the M-Bus

> Example responses

> 404 Response

```text
M-Bus Master Hat not installed
```

<h3 id="haton-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|404|Not Found|Not found|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

## scan

<a id="opIdscan"></a>

> Code samples

```bash
curl https://example.com/mbus/scan/ttyAMA0/2400 \
  -X POST
```

`POST /mbus/scan/{device}/{baudrate}`

Scan the specified device for slaves

<h3 id="scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device|path|[device](#schemadevice)|true|The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning|
|baudrate|path|[baudrate](#schemabaudrate)|true|Baudrate to communicate with M-Bus devices|

#### Enumerated Values

|Parameter|Value|
|---|---|
|baudrate|300|
|baudrate|600|
|baudrate|1200|
|baudrate|2400|
|baudrate|4800|
|baudrate|9600|

> Example responses

> 200 Response

```text
Found a M-Bus device at address 1
```

> 400 Response

```text
Baudrate {baudrate} is invalid
```

> 404 Response

```text
Device /dev/{device} does not exist
```

<h3 id="scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[slaves](#schemaslaves)|
|400|Bad Request|Bad request|[textError](#schematexterror)|
|404|Not Found|Not found (e.g. device not found, or M-Bus HTTPD is unauthorized to access it, or to change baud rate to that specified, device not responding etc)|[textError](#schematexterror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
"48"
```

Slave address (primary or secondary)

<h2 id="tocS_baudrate">baudrate</h2>
<!-- backwards compatibility -->
<a id="schemabaudrate"></a>
<a id="schema_baudrate"></a>
<a id="tocSbaudrate"></a>
<a id="tocsbaudrate"></a>

```json
2400
```

Baudrate to use for the communication - valid values 300, 600, 1200, 2400, 4800, 9600

<h2 id="tocS_device">device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
"ttyAMA0"
```

The device the M-Bus is connected to - /dev/ is prepended to {device} by M-Bus HTTPD

<h2 id="tocS_hat">hat</h2>
<!-- backwards compatibility -->
<a id="schemahat"></a>
<a id="schema_hat"></a>
<a id="tocShat"></a>
<a id="tocshat"></a>

```json
{
  "addr": 30,
  "enabled": true,
  "index": 1
}
```

Raspberry Pi Hat Information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|string|false|none|Product|
|productId|string|false|none|Product ID|
|productVer|string|false|none|Product Version|
|uuid|string|false|none|Hat UUID|
|vendor|string|false|none|Hat Vendor|

<h2 id="tocS_maxframes">maxframes</h2>
<!-- backwards compatibility -->
<a id="schemamaxframes"></a>
<a id="schema_maxframes"></a>
<a id="tocSmaxframes"></a>
<a id="tocsmaxframes"></a>

```json
16
```

Max frames to listen for

<h2 id="tocS_mbusData">mbusData</h2>
<!-- backwards compatibility -->
<a id="schemambusdata"></a>
<a id="schema_mbusData"></a>
<a id="tocSmbusdata"></a>
<a id="tocsmbusdata"></a>

```json
"<?xml version=\"1.0\" encoding=\"UTF-8\"?>..."
```

M-Bus device data as an XML document

<h2 id="tocS_slaves">slaves</h2>
<!-- backwards compatibility -->
<a id="schemaslaves"></a>
<a id="schema_slaves"></a>
<a id="tocSslaves"></a>
<a id="tocsslaves"></a>

```json
"Found a M-Bus device at address 1"
```

Output of libmbus scan command

<h2 id="tocS_textError">textError</h2>
<!-- backwards compatibility -->
<a id="schematexterror"></a>
<a id="schema_textError"></a>
<a id="tocStexterror"></a>
<a id="tocstexterror"></a>

```json
"Device /dev/{device} does not exist"
```

Some error text

<h2 id="tocS_yaml">yaml</h2>
<!-- backwards compatibility -->
<a id="schemayaml"></a>
<a id="schema_yaml"></a>
<a id="tocSyaml"></a>
<a id="tocsyaml"></a>

```json
"A YAML file"
```

A YAML file
