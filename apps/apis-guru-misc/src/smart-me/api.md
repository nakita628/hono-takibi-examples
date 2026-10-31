<h1 id="smart-me">smart-me v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

With the smart-me REST API you get Access to all your devices in the smart-me Cloud and you can add your own devices. So its an easy way to add the smart-me Cloud support to your Hardware or Software Product.

Base URLs:

* <a href="https://smart-me.com:443">https://smart-me.com:443</a>

# Authentication

- HTTP Authentication, scheme: basic Basic HTTP Authentication

<h1 id="smart-me-accesstoken">AccessToken</h1>

## Creates a Access Token to write on a Card (e.g. NFC)

<a id="opIdAccessToken_Put"></a>

> Code samples

```bash
curl https://example.com/api/AccessToken \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "CardId": 0,
    "UserId": 0
  }'
```

`PUT /api/AccessToken`

Creates a Access Token to write on a Card (e.g. NFC)

> Body parameter

```json
{
  "CardId": 0,
  "UserId": 0
}
```

<h3 id="creates-a-access-token-to-write-on-a-card-eg-nfc-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccessTokenToPut](#schemaaccesstokentoput)|true|none|
|» CardId|body|integer(int64)|false|The ID of the Card|
|» UserId|body|integer(int64)|false|The ID of the User. The credentials provided must have permission to edit the user.<br>            If no ID is provided, the user in the credentials is taken.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="creates-a-access-token-to-write-on-a-card-eg-nfc-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-account">Account</h1>

## Account_Login

<a id="opIdAccount_Login"></a>

> Code samples

```bash
curl https://example.com/api/Account/login \
  -H 'Accept: application/json'
```

`GET /api/Account/login`

> Example responses

> 200 Response

```json
{}
```

<h3 id="accountlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/Account/login

> Code samples

```bash
curl https://example.com/api/Account/login \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/Account/login`

> Example responses

> 200 Response

```json
{}
```

<h3 id="postapiaccountlogin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-actions">Actions</h1>

## Set an action for the specified device.

<a id="opIdActions_Post"></a>

> Code samples

```bash
curl https://example.com/api/Actions \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "Actions": [
      {
        "ObisCode": "string",
        "Value": 0
      }
    ],
    "DeviceID": "string"
  }'
```

`POST /api/Actions`

Set an action for the specified device.

> Body parameter

```json
{
  "Actions": [
    {
      "ObisCode": "string",
      "Value": 0
    }
  ],
  "DeviceID": "string"
}
```

<h3 id="set-an-action-for-the-specified-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ActionToPost](#schemaactiontopost)|true|The Action Data|
|» Actions|body|[[ActionToPostItem](#schemaactiontopostitem)]|false|List with all Actions for this device|
|» DeviceID|body|string|false|The ID of the Device|

<h3 id="set-an-action-for-the-specified-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all available Actions of a Device

<a id="opIdActions_Get"></a>

> Code samples

```bash
curl https://example.com/api/Actions/string \
  -H 'Accept: application/json'
```

`GET /api/Actions/{id}`

Gets all available Actions of a Device

<h3 id="gets-all-available-actions-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|

> Example responses

> 200 Response

```json
[
  {
    "ActionType": "OnOffAction",
    "MaxValue": 0,
    "MinValue": 0,
    "Name": "string",
    "ObisCode": "string"
  }
]
```

<h3 id="gets-all-available-actions-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-available-actions-of-a-device-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ActionInformation](#schemaactioninformation)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-additionaldeviceinformation">AdditionalDeviceInformation</h1>

## Gets the additional information (e.g. Firmware Version) about a device.

<a id="opIdAdditionalDeviceInformation_Get"></a>

> Code samples

```bash
curl https://example.com/api/AdditionalDeviceInformation/string \
  -H 'Accept: application/json'
```

`GET /api/AdditionalDeviceInformation/{id}`

Gets the additional information (e.g. Firmware Version) about a device.

<h3 id="gets-the-additional-information-eg-firmware-version-about-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|

> Example responses

> 200 Response

```json
{
  "AdditionalMeterSerialNumber": "string",
  "FirmwareVersion": 0,
  "HardwareVersion": 0,
  "ID": "string",
  "NetworkConnection": "string",
  "NetworkConnectionRSSI": 0
}
```

<h3 id="gets-the-additional-information-eg-firmware-version-about-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AdditionalDeviceInformation](#schemaadditionaldeviceinformation)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-customdevice">CustomDevice</h1>

## Gets all Custom Devices

<a id="opIdCustomDevice_Get"></a>

> Code samples

```bash
curl https://example.com/api/CustomDevice \
  -H 'Accept: application/json'
```

`GET /api/CustomDevice`

Gets all Devices

> Example responses

> 200 Response

```json
[
  {
    "Id": "string",
    "Name": "string",
    "Serial": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Values": [
      {
        "Name": "string",
        "Value": 0
      }
    ]
  }
]
```

<h3 id="gets-all-custom-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-custom-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomDeviceToPost](#schemacustomdevicetopost)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates or updates a Custom Device or updates it's values.

<a id="opIdCustomDevice_Post"></a>

> Code samples

```bash
curl https://example.com/api/CustomDevice \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Id": "string",
    "Name": "string",
    "Serial": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Values": [
      {
        "Name": "string",
        "Value": 0
      }
    ]
  }'
```

`POST /api/CustomDevice`

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

> Body parameter

```json
{
  "Id": "string",
  "Name": "string",
  "Serial": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Values": [
    {
      "Name": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="creates-or-updates-a-custom-device-or-updates-its-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomDeviceToPost](#schemacustomdevicetopost)|true|Device object with all the data|
|» Id|body|string|false|The ID of the device|
|» Name|body|string|false|The Name of the Device|
|» Serial|body|integer(int64)|false|The Serial number|
|» ValueDate|body|string(date-time)|false|The Date of the Value (in UTC). If this is null the Server Time is used.|
|» Values|body|[[CustomDeviceValues](#schemacustomdevicevalues)]|false|The Values of the custom Device|

> Example responses

> 200 Response

```json
{
  "Id": "string",
  "Name": "string",
  "Serial": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Values": [
    {
      "Name": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="creates-or-updates-a-custom-device-or-updates-its-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomDeviceToPost](#schemacustomdevicetopost)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a Custom Device by it's ID

> Code samples

```bash
curl https://example.com/api/CustomDevice/string \
  -H 'Accept: application/json'
```

`GET /api/CustomDevice/{id}`

Gets a Device by it's ID

<h3 id="gets-a-custom-device-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|

> Example responses

> 200 Response

```json
{
  "Id": "string",
  "Name": "string",
  "Serial": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Values": [
    {
      "Name": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="gets-a-custom-device-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomDeviceToPost](#schemacustomdevicetopost)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-devicebyserial">DeviceBySerial</h1>

## Gets a Device by it's Serial Number. The Serial is the part before the &quot;-&quot;.

<a id="opIdDeviceBySerial_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/DeviceBySerial?serial=0' \
  -H 'Accept: application/json'
```

`GET /api/DeviceBySerial`

Gets a Device by it's Serial Number. The Serial is the part before the "-".

<h3 id="gets-a-device-by-its-serial-number-the-serial-is-the-part-before-the---parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|query|integer(int64)|true|The Serial Number of the device|

> Example responses

> 200 Response

```json
{
  "ActivePower": 0,
  "ActivePowerL1": 0,
  "ActivePowerL2": 0,
  "ActivePowerL3": 0,
  "ActivePowerUnit": "string",
  "ActiveTariff": 0,
  "AdditionalMeterSerialNumber": "string",
  "AnalogOutput1": 0,
  "AnalogOutput2": 0,
  "ChargingStationState": "Booting",
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingImport": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "DigitalInput2": true,
  "DigitalOutput1": true,
  "DigitalOutput2": true,
  "FamilyType": "MeterFamilyTypeUnknown",
  "FlowRate": 0,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "SwitchOn": true,
  "SwitchPhaseL1On": true,
  "SwitchPhaseL2On": true,
  "SwitchPhaseL3On": true,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="gets-a-device-by-its-serial-number-the-serial-is-the-part-before-the---responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-devices">Devices</h1>

## Gets all Devices

<a id="opIdDevices_Get"></a>

> Code samples

```bash
curl https://example.com/api/Devices \
  -H 'Accept: application/json'
```

`GET /api/Devices`

Gets all Devices

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="gets-all-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-devices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates or updates a Device or updates it's values.

<a id="opIdDevices_Post"></a>

> Code samples

```bash
curl https://example.com/api/Devices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ActivePower": 0,
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingExportT1": 0,
    "CounterReadingExportT2": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }'
```

`POST /api/Devices`

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

> Body parameter

```json
{
  "ActivePower": 0,
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingExportT1": 0,
  "CounterReadingExportT2": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="creates-or-updates-a-device-or-updates-its-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceToPost](#schemadevicetopost)|true|Device object with all the data|
|» ActivePower|body|number(double)|false|The Active Power or current flow rate. In kW or m3/h|
|» CounterReading|body|number(double)|false|The Meter Counter Reading (Total Energy used) in kWh or m3.|
|» CounterReadingExport|body|number(double)|false|The Meter Counter Reading only export|
|» CounterReadingExportT1|body|number(double)|false|The Meter Counter Reading only export (Tariff 1)|
|» CounterReadingExportT2|body|number(double)|false|The Meter Counter Reading only export (Tariff 2)|
|» CounterReadingT1|body|number(double)|false|The Meter Counter Reading Tariff 1 in kWh or m3.|
|» CounterReadingT2|body|number(double)|false|The Meter Counter Reading Tariff 2 in kWh or m3.|
|» Current|body|number(double)|false|The Current (in A)|
|» CurrentL1|body|number(double)|false|The Current Phase L1 (in A)|
|» CurrentL2|body|number(double)|false|The Current Phase L2 (in A)|
|» CurrentL3|body|number(double)|false|The Current Phase L3 (in A)|
|» DeviceEnergyType|body|string|false|The Energy Type of this device|
|» DigitalInput1|body|boolean|false|The digital input number 1|
|» Id|body|string|false|The ID of the device|
|» MeterSubType|body|string|false|The Sub Type of this Meter.|
|» Name|body|string|false|The Name of the Device|
|» PowerFactor|body|number(double)|false|The Power Factor (cos phi). Range: 0 - 1|
|» PowerFactorL1|body|number(double)|false|The Power Factor (cos phi) Phase L1. Range: 0 - 1|
|» PowerFactorL2|body|number(double)|false|The Power Factor (cos phi) Phase L2. Range: 0 - 1|
|» PowerFactorL3|body|number(double)|false|The Power Factor (cos phi) Phase L3. Range: 0 - 1|
|» Serial|body|integer(int64)|false|The Serial number|
|» Temperature|body|number(double)|false|The Temperature (in degree celsius)|
|» ValueDate|body|string(date-time)|false|The Date of the Value (in UTC). If this is null the Server Time is used.|
|» Voltage|body|number(double)|false|The Voltage (in V)|
|» VoltageL1|body|number(double)|false|The Voltage Phase L1 (in V)|
|» VoltageL2|body|number(double)|false|The Voltage Phase L2 (in V)|
|» VoltageL3|body|number(double)|false|The Voltage Phase L3 (in V)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DeviceEnergyType|MeterTypeUnknown|
|» DeviceEnergyType|MeterTypeElectricity|
|» DeviceEnergyType|MeterTypeWater|
|» DeviceEnergyType|MeterTypeGas|
|» DeviceEnergyType|MeterTypeHeat|
|» DeviceEnergyType|MeterTypeHCA|
|» DeviceEnergyType|MeterTypeAllMeters|
|» DeviceEnergyType|MeterTypeTemperature|
|» DeviceEnergyType|MeterTypeMBusGateway|
|» DeviceEnergyType|MeterTypeRS485Gateway|
|» DeviceEnergyType|MeterTypeCustomDevice|
|» DeviceEnergyType|MeterTypeCompressedAir|
|» DeviceEnergyType|MeterTypeSolarLog|
|» DeviceEnergyType|MeterTypeVirtualMeter|
|» DeviceEnergyType|MeterTypeWMBusGateway|
|» MeterSubType|MeterSubTypeUnknown|
|» MeterSubType|MeterSubTypeCold|
|» MeterSubType|MeterSubTypeHeat|
|» MeterSubType|MeterSubTypeChargingStation|
|» MeterSubType|MeterSubTypeElectricity|
|» MeterSubType|MeterSubTypeWater|
|» MeterSubType|MeterSubTypeGas|
|» MeterSubType|MeterSubTypeElectricityHeat|
|» MeterSubType|MeterSubTypeTemperature|
|» MeterSubType|MeterSubTypeVirtualBattery|

> Example responses

> 200 Response

```json
{
  "ActivePower": 0,
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingExportT1": 0,
  "CounterReadingExportT2": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="creates-or-updates-a-device-or-updates-its-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeviceToPost](#schemadevicetopost)|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a Device by it's ID

> Code samples

```bash
curl https://example.com/api/Devices/string \
  -H 'Accept: application/json'
```

`GET /api/Devices/{id}`

Gets a Device by it's ID

<h3 id="gets-a-device-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|

> Example responses

> 200 Response

```json
{
  "ActivePower": 0,
  "ActivePowerL1": 0,
  "ActivePowerL2": 0,
  "ActivePowerL3": 0,
  "ActivePowerUnit": "string",
  "ActiveTariff": 0,
  "AdditionalMeterSerialNumber": "string",
  "AnalogOutput1": 0,
  "AnalogOutput2": 0,
  "ChargingStationState": "Booting",
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingImport": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "DigitalInput2": true,
  "DigitalOutput1": true,
  "DigitalOutput2": true,
  "FamilyType": "MeterFamilyTypeUnknown",
  "FlowRate": 0,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "SwitchOn": true,
  "SwitchPhaseL1On": true,
  "SwitchPhaseL2On": true,
  "SwitchPhaseL3On": true,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="gets-a-device-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the On/Off Switch on a device. For new implementations please use the &quot;actions&quot; command

<a id="opIdDevices_Put"></a>

> Code samples

```bash
curl 'https://example.com/api/Devices/string?switchState=true' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /api/Devices/{id}`

Updates the On/Off Switch on a device
            For new implementations please use the "actions" command

<h3 id="updates-the-onoff-switch-on-a-device-for-new-implementations-please-use-the-actions-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|
|switchState|query|boolean|true|The new state of the switch|
|switchNumber|query|integer(int32)|false|The number of the switch if there are multiple (1 for L1, 3 for L3)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="updates-the-onoff-switch-on-a-device-for-new-implementations-please-use-the-actions-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|
|401|Unauthorized|Unauthorized|None|
|405|Method Not Allowed|MethodNotAllowed|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-devicesbyenergy">DevicesByEnergy</h1>

## Gets all Devices for an Energy Type

<a id="opIdDevicesByEnergy_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/DevicesByEnergy?meterEnergyType=MeterTypeUnknown' \
  -H 'Accept: application/json'
```

`GET /api/DevicesByEnergy`

Gets all Devices for an Energy Type

<h3 id="gets-all-devices-for-an-energy-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meterEnergyType|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|meterEnergyType|MeterTypeUnknown|
|meterEnergyType|MeterTypeElectricity|
|meterEnergyType|MeterTypeWater|
|meterEnergyType|MeterTypeGas|
|meterEnergyType|MeterTypeHeat|
|meterEnergyType|MeterTypeHCA|
|meterEnergyType|MeterTypeAllMeters|
|meterEnergyType|MeterTypeTemperature|
|meterEnergyType|MeterTypeMBusGateway|
|meterEnergyType|MeterTypeRS485Gateway|
|meterEnergyType|MeterTypeCustomDevice|
|meterEnergyType|MeterTypeCompressedAir|
|meterEnergyType|MeterTypeSolarLog|
|meterEnergyType|MeterTypeVirtualMeter|
|meterEnergyType|MeterTypeWMBusGateway|

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="gets-all-devices-for-an-energy-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-devices-for-an-energy-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-devicesbysubtype">DevicesBySubType</h1>

## Gets all Devices by it's Sub Type (e.g. E-Charging Station)

<a id="opIdDevicesBySubType_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/DevicesBySubType?meterSubType=MeterSubTypeUnknown' \
  -H 'Accept: application/json'
```

`GET /api/DevicesBySubType`

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

<h3 id="gets-all-devices-by-its-sub-type-eg-e-charging-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|meterSubType|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|meterSubType|MeterSubTypeUnknown|
|meterSubType|MeterSubTypeCold|
|meterSubType|MeterSubTypeHeat|
|meterSubType|MeterSubTypeChargingStation|
|meterSubType|MeterSubTypeElectricity|
|meterSubType|MeterSubTypeWater|
|meterSubType|MeterSubTypeGas|
|meterSubType|MeterSubTypeElectricityHeat|
|meterSubType|MeterSubTypeTemperature|
|meterSubType|MeterSubTypeVirtualBattery|

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="gets-all-devices-by-its-sub-type-eg-e-charging-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-devices-by-its-sub-type-eg-e-charging-station-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-fastsenddevicevalues">FastSendDeviceValues</h1>

## Force a device to send the data every second (if supported). This for about 30s. Don't use this call to force a device to send the data every second for a longer time.

<a id="opIdFastSendDeviceValues_Get"></a>

> Code samples

```bash
curl https://example.com/api/FastSendDeviceValues/string
```

`GET /api/FastSendDeviceValues/{id}`

<h3 id="force-a-device-to-send-the-data-every-second-if-supported-this-for-about-30s-dont-use-this-call-to-force-a-device-to-send-the-data-every-second-for-a-longer-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="force-a-device-to-send-the-data-every-second-if-supported-this-for-about-30s-dont-use-this-call-to-force-a-device-to-send-the-data-every-second-for-a-longer-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-folder">Folder</h1>

## Gets the Values for a folder or a meter

<a id="opIdFolder_Get"></a>

> Code samples

```bash
curl https://example.com/api/Folder/string \
  -H 'Accept: application/json'
```

`GET /api/Folder/{id}`

Gets the Values for a folder or a meter

<h3 id="gets-the-values-for-a-folder-or-a-meter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ElectricityCounterValue": 0,
  "ElectricityPower": 0,
  "GasCounterValue": 0,
  "GasFlowRate": 0,
  "HeatCounterValue": 0,
  "HeatPower": 0,
  "WaterCounterValue": 0,
  "WaterFlowRate": 0
}
```

<h3 id="gets-the-values-for-a-folder-or-a-meter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FolderData](#schemafolderdata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-foldermenu">FolderMenu</h1>

## Gets the folder menu items (each item might contain child items)

<a id="opIdFolderMenu_Get"></a>

> Code samples

```bash
curl https://example.com/api/FolderMenu \
  -H 'Accept: application/json'
```

`GET /api/FolderMenu`

<h3 id="gets-the-folder-menu-items-each-item-might-contain-child-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|(optional) Filter for the folders and meters: <br>            all: load everything<br>            assigned: load only folders and meters that are assigend to a folder<br>            unassigend: load only meters that are not assigend to a folder<br>            user: load only folder and all users assigned to this folders<br>            subuserlist: load all subusers as a list|

> Example responses

> 200 Response

```json
{
  "BrowserTimeZoneName": "string",
  "BrowserUtcTime": "string",
  "Items": [
    {
      "AutoExportSettings": {
        "ExportFormat": "string",
        "ExportInterval": "NoExport",
        "MeterPointId": "string",
        "UploadType": "string"
      },
      "Children": [
        {}
      ],
      "Description": "string",
      "FolderType": "Folder",
      "Icon": "string",
      "Id": "string",
      "MeterSerialNumber": "string",
      "Name": "string",
      "UserId": "string"
    }
  ]
}
```

<h3 id="gets-the-folder-menu-items-each-item-might-contain-child-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FolderMenuConfiguration](#schemafoldermenuconfiguration)|

<aside class="success">
This operation does not require authentication
</aside>

## Creates and updates the folder menu items

<a id="opIdFolderMenu_Post"></a>

> Code samples

```bash
curl https://example.com/api/FolderMenu \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "BrowserTimeZoneName": "string",
    "BrowserUtcTime": "string",
    "Items": [
      {
        "AutoExportSettings": {
          "ExportFormat": "string",
          "ExportInterval": "NoExport",
          "MeterPointId": "string",
          "UploadType": "string"
        },
        "Children": [
          {}
        ],
        "Description": "string",
        "FolderType": "Folder",
        "Icon": "string",
        "Id": "string",
        "MeterSerialNumber": "string",
        "Name": "string",
        "UserId": "string"
      }
    ]
  }'
```

`POST /api/FolderMenu`

> Body parameter

```json
{
  "BrowserTimeZoneName": "string",
  "BrowserUtcTime": "string",
  "Items": [
    {
      "AutoExportSettings": {
        "ExportFormat": "string",
        "ExportInterval": "NoExport",
        "MeterPointId": "string",
        "UploadType": "string"
      },
      "Children": [
        {}
      ],
      "Description": "string",
      "FolderType": "Folder",
      "Icon": "string",
      "Id": "string",
      "MeterSerialNumber": "string",
      "Name": "string",
      "UserId": "string"
    }
  ]
}
```

<h3 id="creates-and-updates-the-folder-menu-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FolderMenuConfiguration](#schemafoldermenuconfiguration)|true|none|
|» BrowserTimeZoneName|body|string|false|The time zone name taken from the browser|
|» BrowserUtcTime|body|string|false|The UTC time taken from the browser|
|» Items|body|[[FolderMenuItem](#schemafoldermenuitem)]|false|none|

<h3 id="creates-and-updates-the-folder-menu-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-health">Health</h1>

## A method returning HTTP 200 OK when queried. It is used by Kubernetes probes to determine whether the app is healthy.

<a id="opIdHealth_Get"></a>

> Code samples

```bash
curl https://example.com/api/Health \
  -H 'Accept: application/json'
```

`GET /api/Health`

> Example responses

> 200 Response

```json
{}
```

<h3 id="a-method-returning-http-200-ok-when-queried-it-is-used-by-kubernetes-probes-to-determine-whether-the-app-is-healthy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-mbus">MBus</h1>

## M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud. Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

<a id="opIdMBus_Post"></a>

> Code samples

```bash
curl https://example.com/api/MBus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Date": "1970-01-01T00:00:00Z",
    "Telegram": "string"
  }'
```

`POST /api/MBus`

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.
            Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

> Body parameter

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "Telegram": "string"
}
```

<h3 id="m-bus-api-adds-data-of-a-m-bus-meter-to-the-smart-me-cloud-just-send-us-the-m-bus-telegram-rspud-and-we-will-do-the-rest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MBusData](#schemambusdata)|true|The M-BUS Telegram|
|» Date|body|string(date-time)|false|The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used.|
|» Telegram|body|string|false|The M-BUS Telegram as Hex string. <br>            Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16|

> Example responses

> 200 Response

```json
{}
```

<h3 id="m-bus-api-adds-data-of-a-m-bus-meter-to-the-smart-me-cloud-just-send-us-the-m-bus-telegram-rspud-and-we-will-do-the-rest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|
|400|Bad Request|BadRequest|None|
|401|Unauthorized|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-meterfolderinformation">MeterFolderInformation</h1>

## Sets the Name of a Meter or a Folder

<a id="opIdMeterFolderInformation_Post"></a>

> Code samples

```bash
curl https://example.com/api/MeterFolderInformation \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "Id": "string",
    "Name": "string"
  }'
```

`POST /api/MeterFolderInformation`

Sets the Name of a Meter or a Folder

> Body parameter

```json
{
  "Id": "string",
  "Name": "string"
}
```

<h3 id="sets-the-name-of-a-meter-or-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MeterFolderInformationToPost](#schemameterfolderinformationtopost)|true|none|
|» Id|body|string|false|The ID of the device or folder|
|» Name|body|string|false|Name of the Meter or Folder|

<h3 id="sets-the-name-of-a-meter-or-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Beta: Gets the General Information for a Meter or a Folder

<a id="opIdMeterFolderInformation_Get"></a>

> Code samples

```bash
curl https://example.com/api/MeterFolderInformation/string \
  -H 'Accept: application/json'
```

`GET /api/MeterFolderInformation/{id}`

Beta: Gets the General Information for a Meter or a Folder

<h3 id="beta-gets-the-general-information-for-a-meter-or-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "CommunicationModuleFirmwareVersion": 0,
  "CommunicationModuleHardwareVersion": 0,
  "FirmwareVersion": 0,
  "HardwareVersion": 0,
  "InputInformations": [
    {
      "Name": "string",
      "Number": 0
    }
  ],
  "IsFolder": true,
  "Name": "string",
  "OutputInformations": [
    {
      "ActionType": "OnOffAction",
      "Name": "string",
      "Number": 0,
      "ObisCode": "string"
    }
  ]
}
```

<h3 id="beta-gets-the-general-information-for-a-meter-or-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MeterFolderInformation](#schemameterfolderinformation)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-metervalues">MeterValues</h1>

## Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

<a id="opIdMeterValues_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/MeterValues/string?date=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /api/MeterValues/{id}`

Gets the Values for a Meter at a given Date. The first Value found before the given Date is returned.

<h3 id="gets-the-values-for-a-meter-at-a-given-date-the-first-value-found-before-the-given-date-is-returned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|date|query|string(date-time)|true|none|

> Example responses

> 200 Response

```json
{
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingExportT1": 0,
  "CounterReadingExportT2": 0,
  "CounterReadingExportT3": 0,
  "CounterReadingExportT4": 0,
  "CounterReadingImport": 0,
  "CounterReadingImportT1": 0,
  "CounterReadingImportT2": 0,
  "CounterReadingImportT3": 0,
  "CounterReadingImportT4": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Date": "1970-01-01T00:00:00Z",
  "Id": "string",
  "Serial": 0
}
```

<h3 id="gets-the-values-for-a-meter-at-a-given-date-the-first-value-found-before-the-given-date-is-returned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DeviceInPast](#schemadeviceinpast)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-registerforrealtimeapi">RegisterForRealtimeApi</h1>

## Gets all registrations for the Realtime API.

<a id="opIdRegisterForRealtimeApi_Get"></a>

> Code samples

```bash
curl https://example.com/api/RegisterForRealtimeApi \
  -H 'Accept: application/json'
```

`GET /api/RegisterForRealtimeApi`

Gets all registrations for the Realtime API.

> Example responses

> 200 Response

```json
[
  {
    "ApiUrl": "string",
    "BasicAuthPassword": "string",
    "BasicAuthUsername": "string",
    "Id": "string",
    "MeterId": "string",
    "RegistrationType": "Disabled",
    "SerialNumber": "string"
  }
]
```

<h3 id="gets-all-registrations-for-the-realtime-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-registrations-for-the-realtime-api-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[RegisterRealtimeApiData](#schemaregisterrealtimeapidata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

<a id="opIdRegisterForRealtimeApi_Post"></a>

> Code samples

```bash
curl https://example.com/api/RegisterForRealtimeApi \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "ApiUrl": "string",
    "BasicAuthPassword": "string",
    "BasicAuthUsername": "string",
    "Id": "string",
    "MeterId": "string",
    "RegistrationType": "Disabled",
    "SerialNumber": "string"
  }'
```

`POST /api/RegisterForRealtimeApi`

Creates a new registration for the realtime API. The Realtime API sends you the data of the registred devices as soon as we have them on the cloud. More Information about the realtime API: https://www.smart-me.com/Description/api/realtimeapi.aspx

> Body parameter

```json
{
  "ApiUrl": "string",
  "BasicAuthPassword": "string",
  "BasicAuthUsername": "string",
  "Id": "string",
  "MeterId": "string",
  "RegistrationType": "Disabled",
  "SerialNumber": "string"
}
```

<h3 id="creates-a-new-registration-for-the-realtime-api-the-realtime-api-sends-you-the-data-of-the-registred-devices-as-soon-as-we-have-them-on-the-cloud-more-information-about-the-realtime-api-httpswwwsmart-mecomdescriptionapirealtimeapiaspx-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterRealtimeApiData](#schemaregisterrealtimeapidata)|true|none|
|» ApiUrl|body|string|false|The URL of your endpoint. To this endpoint all the values are send to.|
|» BasicAuthPassword|body|string|false|The Password (basic auth) of your endpoint. Leave empty of none.|
|» BasicAuthUsername|body|string|false|The Username (basic auth) of your endpoint. Leave empty of none.|
|» Id|body|string|false|The ID of the registration|
|» MeterId|body|string|false|The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration".|
|» RegistrationType|body|string|false|The Type of this registration (per meter, per user, ...)|
|» SerialNumber|body|string|false|The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null. <br>            Example: 1 SME 01 63000000 or 6300000|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» RegistrationType|Disabled|
|» RegistrationType|SingleMeterRegistration|
|» RegistrationType|UserRegistration|

<h3 id="creates-a-new-registration-for-the-realtime-api-the-realtime-api-sends-you-the-data-of-the-registred-devices-as-soon-as-we-have-them-on-the-cloud-more-information-about-the-realtime-api-httpswwwsmart-mecomdescriptionapirealtimeapiaspx-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a realtime API registration.

<a id="opIdRegisterForRealtimeApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/RegisterForRealtimeApi/string \
  -X DELETE
```

`DELETE /api/RegisterForRealtimeApi/{id}`

Deletes a realtime API registration.

<h3 id="deletes-a-realtime-api-registration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the realtime API registration|

<h3 id="deletes-a-realtime-api-registration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-smartmedeviceconfiguration">SmartMeDeviceConfiguration</h1>

## Sets the configuration of a smart-me device. The device needs to be online.

<a id="opIdSmartMeDeviceConfiguration_Post"></a>

> Code samples

```bash
curl https://example.com/api/SmartMeDeviceConfiguration \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "DeviceEncryptionKey": "string",
    "DevicePinCode": "string",
    "DnsUpdateState": "NoUpdate",
    "EnableModbusTcp": true,
    "Id": "string",
    "InputConfiguration": [
      {
        "Name": "string",
        "Number": 0,
        "OffText": "string",
        "OnText": "string",
        "Type": "TariffInput"
      }
    ],
    "OutputConfiguration": [
      {
        "DigitalOutputNoConnectionAction": "Nothing",
        "Name": "string",
        "Number": 0,
        "S0PulseValue": "PulseValue1000Kwh",
        "Type": "ImpulseOutputActiveEnergy"
      }
    ],
    "ShowReactiveEnergy": true,
    "SwitchConfiguration": [
      {
        "CanSwitchOff": true,
        "Number": 0
      }
    ],
    "UploadInterval": "UploadInterval_1s"
  }'
```

`POST /api/SmartMeDeviceConfiguration`

> Body parameter

```json
{
  "DeviceEncryptionKey": "string",
  "DevicePinCode": "string",
  "DnsUpdateState": "NoUpdate",
  "EnableModbusTcp": true,
  "Id": "string",
  "InputConfiguration": [
    {
      "Name": "string",
      "Number": 0,
      "OffText": "string",
      "OnText": "string",
      "Type": "TariffInput"
    }
  ],
  "OutputConfiguration": [
    {
      "DigitalOutputNoConnectionAction": "Nothing",
      "Name": "string",
      "Number": 0,
      "S0PulseValue": "PulseValue1000Kwh",
      "Type": "ImpulseOutputActiveEnergy"
    }
  ],
  "ShowReactiveEnergy": true,
  "SwitchConfiguration": [
    {
      "CanSwitchOff": true,
      "Number": 0
    }
  ],
  "UploadInterval": "UploadInterval_1s"
}
```

<h3 id="sets-the-configuration-of-a-smart-me-device-the-device-needs-to-be-online-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SmartMeDeviceConfigurationContainer](#schemasmartmedeviceconfigurationcontainer)|true|none|
|» DeviceEncryptionKey|body|string|false|The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules)|
|» DevicePinCode|body|string|false|PIN code to enter on a external meter (e.g. for the FNN meters)|
|» DnsUpdateState|body|string|false|Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS|
|» EnableModbusTcp|body|boolean|false|Enables or disables Modbus TCP (if the meter supports it).|
|» Id|body|string|false|The ID of the device|
|» InputConfiguration|body|[[InputConfigurationContainer](#schemainputconfigurationcontainer)]|false|The configuration for the intput outputs|
|» OutputConfiguration|body|[[OutputConfigurationContainer](#schemaoutputconfigurationcontainer)]|false|The configuration for the external outputs|
|» ShowReactiveEnergy|body|boolean|false|Shows the reactive energy values (if the meter supports it).|
|» SwitchConfiguration|body|[[SwitchConfigurationContainer](#schemaswitchconfigurationcontainer)]|false|The configuration for the phase switches|
|» UploadInterval|body|string|false|Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DnsUpdateState|NoUpdate|
|» DnsUpdateState|DnsUpdatePublicIp|
|» DnsUpdateState|DnsUpdateInternalIp|
|» UploadInterval|UploadInterval_1s|
|» UploadInterval|UploadInterval_5s|
|» UploadInterval|UploadInterval_10s|
|» UploadInterval|UploadInterval_30s|
|» UploadInterval|UploadInterval_60s|
|» UploadInterval|UploadInterval_5min|
|» UploadInterval|UploadInterval_15min|
|» UploadInterval|UploadInterval_30min|
|» UploadInterval|UploadInterval_60min|
|» UploadInterval|UploadInterval_6h|
|» UploadInterval|UploadInterval_12h|
|» UploadInterval|UploadInterval_24h|

<h3 id="sets-the-configuration-of-a-smart-me-device-the-device-needs-to-be-online-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the configuration of a smart-me device.

<a id="opIdSmartMeDeviceConfiguration_Get"></a>

> Code samples

```bash
curl https://example.com/api/SmartMeDeviceConfiguration/string \
  -H 'Accept: application/json'
```

`GET /api/SmartMeDeviceConfiguration/{id}`

<h3 id="gets-the-configuration-of-a-smart-me-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "DeviceEncryptionKey": "string",
  "DevicePinCode": "string",
  "DnsUpdateState": "NoUpdate",
  "EnableModbusTcp": true,
  "Id": "string",
  "InputConfiguration": [
    {
      "Name": "string",
      "Number": 0,
      "OffText": "string",
      "OnText": "string",
      "Type": "TariffInput"
    }
  ],
  "OutputConfiguration": [
    {
      "DigitalOutputNoConnectionAction": "Nothing",
      "Name": "string",
      "Number": 0,
      "S0PulseValue": "PulseValue1000Kwh",
      "Type": "ImpulseOutputActiveEnergy"
    }
  ],
  "ShowReactiveEnergy": true,
  "SwitchConfiguration": [
    {
      "CanSwitchOff": true,
      "Number": 0
    }
  ],
  "UploadInterval": "UploadInterval_1s"
}
```

<h3 id="gets-the-configuration-of-a-smart-me-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SmartMeDeviceConfigurationContainer](#schemasmartmedeviceconfigurationcontainer)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-subuser">SubUser</h1>

## Creates or updates a subuser. To create a new user set no ID (empty)

<a id="opIdSubUser_Post"></a>

> Code samples

```bash
curl https://example.com/api/SubUser \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "AccessEndDate": "1970-01-01T00:00:00Z",
    "AccessTimeStartDate": "1970-01-01T00:00:00Z",
    "Email": "string",
    "Id": "string",
    "NewPassword": "string",
    "PermissionLevel": "SelectedFolderAndSubfoldersMeters",
    "Username": "string"
  }'
```

`POST /api/SubUser`

> Body parameter

```json
{
  "AccessEndDate": "1970-01-01T00:00:00Z",
  "AccessTimeStartDate": "1970-01-01T00:00:00Z",
  "Email": "string",
  "Id": "string",
  "NewPassword": "string",
  "PermissionLevel": "SelectedFolderAndSubfoldersMeters",
  "Username": "string"
}
```

<h3 id="creates-or-updates-a-subuser-to-create-a-new-user-set-no-id-empty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SubUserData](#schemasubuserdata)|true|none|
|» AccessEndDate|body|string(date-time)|false|The end date. until this date the user has access|
|» AccessTimeStartDate|body|string(date-time)|false|The start date. From this date the user has access|
|» Email|body|string|false|The Email adress|
|» Id|body|string|false|The ID of the user|
|» NewPassword|body|string|false|If set this is used a new password|
|» PermissionLevel|body|string|false|The permission level of the user|
|» Username|body|string|false|The username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PermissionLevel|SelectedFolderAndSubfoldersMeters|
|» PermissionLevel|SelectedFolderOnly|

<h3 id="creates-or-updates-a-subuser-to-create-a-new-user-set-no-id-empty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a sub user. The user must be assigend to the user that makes this call.

<a id="opIdSubUser_Get"></a>

> Code samples

```bash
curl https://example.com/api/SubUser/string \
  -H 'Accept: application/json'
```

`GET /api/SubUser/{id}`

<h3 id="get-a-sub-user-the-user-must-be-assigend-to-the-user-that-makes-this-call-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "AccessEndDate": "1970-01-01T00:00:00Z",
  "AccessTimeStartDate": "1970-01-01T00:00:00Z",
  "Email": "string",
  "Id": "string",
  "NewPassword": "string",
  "PermissionLevel": "SelectedFolderAndSubfoldersMeters",
  "Username": "string"
}
```

<h3 id="get-a-sub-user-the-user-must-be-assigend-to-the-user-that-makes-this-call-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubUserData](#schemasubuserdata)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a subuser

<a id="opIdSubUser_Delete"></a>

> Code samples

```bash
curl https://example.com/api/SubUser/string \
  -X DELETE
```

`DELETE /api/SubUser/{id}`

<h3 id="delete-a-subuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete-a-subuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-user">User</h1>

## Gets the informations for the user.

<a id="opIdUser_Get"></a>

> Code samples

```bash
curl https://example.com/api/User \
  -H 'Accept: application/json'
```

`GET /api/User`

Gets the informations for the user.

> Example responses

> 200 Response

```json
{
  "ChildUsers": [
    {}
  ],
  "Email": "string",
  "Id": 0,
  "IdAsString": "string",
  "IsAdmin": true,
  "Permissions": [
    "string"
  ],
  "Username": "string"
}
```

<h3 id="gets-the-informations-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Triggers user account deletion.

<a id="opIdUser_Delete"></a>

> Code samples

```bash
curl https://example.com/api/User \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /api/User`

> Example responses

> 200 Response

```json
{}
```

<h3 id="triggers-user-account-deletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-values">Values</h1>

## Gets all (last) values of a device

<a id="opIdValues_Get"></a>

> Code samples

```bash
curl https://example.com/api/Values/string \
  -H 'Accept: application/json'
```

`GET /api/Values/{id}`

<h3 id="gets-all-last-values-of-a-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|

> Example responses

> 200 Response

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "DeviceId": "string",
  "Values": [
    {
      "Obis": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="gets-all-last-values-of-a-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ValuesData](#schemavaluesdata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-valuesinpast">ValuesInPast</h1>

## Gets all (last) values of a device The first Value found before the given Date is returned.

<a id="opIdValuesInPast_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/ValuesInPast/string?date=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /api/ValuesInPast/{id}`

Gets the Values for a device at a given Date. The first Value found before the given Date is returned.

<h3 id="gets-all-last-values-of-a-device-the-first-value-found-before-the-given-date-is-returned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|
|date|query|string(date-time)|true|the date of the value|

> Example responses

> 200 Response

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "DeviceId": "string",
  "Values": [
    {
      "Obis": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="gets-all-last-values-of-a-device-the-first-value-found-before-the-given-date-is-returned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ValuesData](#schemavaluesdata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-valuesinpastmultiple">ValuesInPastMultiple</h1>

## Gets multiple values of a device. This call needs a smart-me professional licence.

<a id="opIdValuesInPastMultiple_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/ValuesInPastMultiple/string?startDate=1970-01-01T00%3A00%3A00Z&endDate=1970-01-01T00%3A00%3A00Z&interval=0' \
  -H 'Accept: application/json'
```

`GET /api/ValuesInPastMultiple/{id}`

<h3 id="gets-multiple-values-of-a-device-this-call-needs-a-smart-me-professional-licence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the device|
|startDate|query|string(date-time)|true|The date when the first value should start|
|endDate|query|string(date-time)|true|The date when the last value should start|
|interval|query|integer(int32)|true|The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call.|

> Example responses

> 200 Response

```json
[
  {
    "Date": "1970-01-01T00:00:00Z",
    "DeviceId": "string",
    "Values": [
      {
        "Obis": "string",
        "Value": 0
      }
    ]
  }
]
```

<h3 id="gets-multiple-values-of-a-device-this-call-needs-a-smart-me-professional-licence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-multiple-values-of-a-device-this-call-needs-a-smart-me-professional-licence-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ValuesData](#schemavaluesdata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualbillingmeteractive">VirtualBillingMeterActive</h1>

## Beta: Gets all active virtual meters

<a id="opIdVirtualBillingMeterActive_Get"></a>

> Code samples

```bash
curl https://example.com/api/VirtualBillingMeterActive \
  -H 'Accept: application/json'
```

`GET /api/VirtualBillingMeterActive`

Beta: Gets all active virtual meters.

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="beta-gets-all-active-virtual-meters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="beta-gets-all-active-virtual-meters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

<a id="opIdVirtualBillingMeterActive_Post"></a>

> Code samples

```bash
curl https://example.com/api/VirtualBillingMeterActive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "SerialNumber": "string"
  }'
```

`POST /api/VirtualBillingMeterActive`

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

> Body parameter

```json
{
  "SerialNumber": "string"
}
```

<h3 id="beta-virtual-meter-api-activates-a-meter-and-add-the-consumption-to-a-virtual-meter-assosiated-with-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VMeterToActivate](#schemavmetertoactivate)|true|The Meter to activate|
|» SerialNumber|body|string|false|The Serialnumber of the Meter to activate.|

> Example responses

> 200 Response

```json
{
  "ActivePower": 0,
  "ActivePowerL1": 0,
  "ActivePowerL2": 0,
  "ActivePowerL3": 0,
  "ActivePowerUnit": "string",
  "ActiveTariff": 0,
  "AdditionalMeterSerialNumber": "string",
  "AnalogOutput1": 0,
  "AnalogOutput2": 0,
  "ChargingStationState": "Booting",
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingImport": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "DigitalInput2": true,
  "DigitalOutput1": true,
  "DigitalOutput2": true,
  "FamilyType": "MeterFamilyTypeUnknown",
  "FlowRate": 0,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "SwitchOn": true,
  "SwitchPhaseL1On": true,
  "SwitchPhaseL2On": true,
  "SwitchPhaseL3On": true,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="beta-virtual-meter-api-activates-a-meter-and-add-the-consumption-to-a-virtual-meter-assosiated-with-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|
|400|Bad Request|BadRequest|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualbillingmeterdeactivate">VirtualBillingMeterDeactivate</h1>

## Beta: Virtual Meter API: Deactivates a Virtual Meter.

<a id="opIdVirtualBillingMeterDeactivate_Post"></a>

> Code samples

```bash
curl https://example.com/api/VirtualBillingMeterDeactivate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ID": "string"
  }'
```

`POST /api/VirtualBillingMeterDeactivate`

Beta: Virtual Meter API: Deactivates a Virtual Meter.

> Body parameter

```json
{
  "ID": "string"
}
```

<h3 id="beta-virtual-meter-api-deactivates-a-virtual-meter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VMeterToDeactivate](#schemavmetertodeactivate)|true|The Meter to activate|
|» ID|body|string|false|The ID of the Virtual meter to deactivate|

> Example responses

> 200 Response

```json
{}
```

<h3 id="beta-virtual-meter-api-deactivates-a-virtual-meter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|
|400|Bad Request|BadRequest|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualbillingmeters">VirtualBillingMeters</h1>

## Beta: Gets all Meters available to activate as a Virtual Meter.

<a id="opIdVirtualBillingMeters_Get"></a>

> Code samples

```bash
curl https://example.com/api/VirtualBillingMeters \
  -H 'Accept: application/json'
```

`GET /api/VirtualBillingMeters`

Beta: Gets all Meters available to activate as a Virtual Meter.

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="beta-gets-all-meters-available-to-activate-as-a-virtual-meter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="beta-gets-all-meters-available-to-activate-as-a-virtual-meter-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualmetercalculateformula">VirtualMeterCalculateFormula</h1>

## Calculates a virtual meter from a formula. A meter is coded as ID(&quot;METERID&quot;)

<a id="opIdVirtualMeterCalculateFormula_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/VirtualMeterCalculateFormula?formula=string' \
  -H 'Accept: application/json'
```

`GET /api/VirtualMeterCalculateFormula`

Calculates a virtual meter from a formula.
            
            A meter is coded as ID("METERID")
            Ariphmetical operators:
             ()  parentheses;  
             +   plus (a + b); 
             -  minus (a - b); 
             *  multiplycation symbol (a * b); 
             /  divide symbol (a / b); 
            Example: (ID("63ac09cb-4e5f-4f3e-bd27-ad8c30bdfc0c") + ID("0209555e-9dc4-4e84-a166-a864488b4b12")) * 2

<h3 id="calculates-a-virtual-meter-from-a-formula-a-meter-is-coded-as-idmeterid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|formula|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "ActivePower": 0,
  "ActivePowerL1": 0,
  "ActivePowerL2": 0,
  "ActivePowerL3": 0,
  "ActivePowerUnit": "string",
  "ActiveTariff": 0,
  "AdditionalMeterSerialNumber": "string",
  "AnalogOutput1": 0,
  "AnalogOutput2": 0,
  "ChargingStationState": "Booting",
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingImport": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "DigitalInput2": true,
  "DigitalOutput1": true,
  "DigitalOutput2": true,
  "FamilyType": "MeterFamilyTypeUnknown",
  "FlowRate": 0,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "SwitchOn": true,
  "SwitchPhaseL1On": true,
  "SwitchPhaseL2On": true,
  "SwitchPhaseL3On": true,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

<h3 id="calculates-a-virtual-meter-from-a-formula-a-meter-is-coded-as-idmeterid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Device](#schemadevice)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualtariff">VirtualTariff</h1>

## Gets all Virtual Tariffs of a user

<a id="opIdVirtualTariff_Get"></a>

> Code samples

```bash
curl https://example.com/api/VirtualTariff \
  -H 'Accept: application/json'
```

`GET /api/VirtualTariff`

Gets all Virtual Tariffs of a user

> Example responses

> 200 Response

```json
[
  {
    "Date": "1970-01-01T00:00:00Z",
    "FolderId": "string",
    "Name": "string",
    "VirtualTariffs": [
      {
        "Factor": 0,
        "Id": "string",
        "Name": "string",
        "Type": "Battery",
        "Unit": "string",
        "Value": 0
      }
    ]
  }
]
```

<h3 id="gets-all-virtual-tariffs-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-virtual-tariffs-of-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VirtualTariffsOfFolder](#schemavirtualtariffsoffolder)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Gets all virtual tariffs of a folder

> Code samples

```bash
curl https://example.com/api/VirtualTariff/string \
  -H 'Accept: application/json'
```

`GET /api/VirtualTariff/{id}`

Gets all virtual tariffs of a folder

<h3 id="gets-all-virtual-tariffs-of-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Folder|

> Example responses

> 200 Response

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "FolderId": "string",
  "Name": "string",
  "VirtualTariffs": [
    {
      "Factor": 0,
      "Id": "string",
      "Name": "string",
      "Type": "Battery",
      "Unit": "string",
      "Value": 0
    }
  ]
}
```

<h3 id="gets-all-virtual-tariffs-of-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VirtualTariffsOfFolder](#schemavirtualtariffsoffolder)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualtariffconsumption">VirtualTariffConsumption</h1>

## Gets the consumption of a folder with a virtuall tariffs.

<a id="opIdVirtualTariffConsumption_Get"></a>

> Code samples

```bash
curl 'https://example.com/api/VirtualTariffConsumption?folderId=string&startDate=1970-01-01T00%3A00%3A00Z&endDate=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json'
```

`GET /api/VirtualTariffConsumption`

Gets the consumption of a folder with a virtuall tariffs.

<h3 id="gets-the-consumption-of-a-folder-with-a-virtuall-tariffs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|query|string|true|The ID of the Folder|
|startDate|query|string(date-time)|true|The start date (UTC)|
|endDate|query|string(date-time)|true|The end date (UTC)|

> Example responses

> 200 Response

```json
[
  {
    "Consumption": 0,
    "Currency": "string",
    "Name": "string",
    "Price": 0,
    "TariffType": "Battery"
  }
]
```

<h3 id="gets-the-consumption-of-a-folder-with-a-virtuall-tariffs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-consumption-of-a-folder-with-a-virtuall-tariffs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VirtualTariffConsumptionData](#schemavirtualtariffconsumptiondata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualtariffsforproperty">VirtualTariffsForProperty</h1>

## Gets all Virtual Tariffs for a property (folder)

<a id="opIdVirtualTariffsForProperty_Get"></a>

> Code samples

```bash
curl https://example.com/api/VirtualTariffsForProperty/string \
  -H 'Accept: application/json'
```

`GET /api/VirtualTariffsForProperty/{id}`

Gets all Virtual Tariffs for a property (folder)

<h3 id="gets-all-virtual-tariffs-for-a-property-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Date": "1970-01-01T00:00:00Z",
    "FolderId": "string",
    "Name": "string",
    "VirtualTariffs": [
      {
        "Factor": 0,
        "Id": "string",
        "Name": "string",
        "Type": "Battery",
        "Unit": "string",
        "Value": 0
      }
    ]
  }
]
```

<h3 id="gets-all-virtual-tariffs-for-a-property-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-virtual-tariffs-for-a-property-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[VirtualTariffsOfFolder](#schemavirtualtariffsoffolder)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-virtualtariffsstatusforproperty">VirtualTariffsStatusForProperty</h1>

## Gets the calculation status for a virtual tariff property

<a id="opIdVirtualTariffsStatusForProperty_Get"></a>

> Code samples

```bash
curl https://example.com/api/VirtualTariffsStatusForProperty/string \
  -H 'Accept: application/json'
```

`GET /api/VirtualTariffsStatusForProperty/{id}`

<h3 id="gets-the-calculation-status-for-a-virtual-tariff-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="gets-the-calculation-status-for-a-virtual-tariff-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-folderassign">FolderAssign</h1>

## Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

<a id="opIdFolderAssign_Post"></a>

> Code samples

```bash
curl 'https://example.com/api/folder/assign?source=string&target=string' \
  -X POST
```

`POST /api/folder/assign`

<h3 id="assign-a-folder-source-or-meter-to-another-folder-target-can-be-used-to-create-a-folder-structure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|true|The ID of the meter or folder that should be assign|
|target|query|string|true|The ID of the meter or folder that should be the parent|

<h3 id="assign-a-folder-source-or-meter-to-another-folder-target-can-be-used-to-create-a-folder-structure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-foldersettings">FolderSettings</h1>

## Gets the settings of a folder or meter

<a id="opIdFolderSettings_Get"></a>

> Code samples

```bash
curl https://example.com/api/folder/settings/string \
  -H 'Accept: application/json'
```

`GET /api/folder/settings/{id}`

<h3 id="gets-the-settings-of-a-folder-or-meter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "Description": "string",
  "Enable": true,
  "FolderType": "Folder",
  "Name": "string",
  "ParentFolderId": "string",
  "SerialNumber": 0,
  "UseableForVirtualBillingMeters": true,
  "ValueCorrection": 0,
  "ValueCorrectionParentFolder": 0,
  "VisualizationName": "string"
}
```

<h3 id="gets-the-settings-of-a-folder-or-meter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FolderSettings](#schemafoldersettings)|

<aside class="success">
This operation does not require authentication
</aside>

## Add or edit a folder or a meter. To add a new folder use and empty ID

<a id="opIdFolderSettings_Post"></a>

> Code samples

```bash
curl https://example.com/api/folder/settings/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Description": "string",
    "Enable": true,
    "FolderType": "Folder",
    "Name": "string",
    "ParentFolderId": "string",
    "SerialNumber": 0,
    "UseableForVirtualBillingMeters": true,
    "ValueCorrection": 0,
    "ValueCorrectionParentFolder": 0,
    "VisualizationName": "string"
  }'
```

`POST /api/folder/settings/{id}`

> Body parameter

```json
{
  "Description": "string",
  "Enable": true,
  "FolderType": "Folder",
  "Name": "string",
  "ParentFolderId": "string",
  "SerialNumber": 0,
  "UseableForVirtualBillingMeters": true,
  "ValueCorrection": 0,
  "ValueCorrectionParentFolder": 0,
  "VisualizationName": "string"
}
```

<h3 id="add-or-edit-a-folder-or-a-meter-to-add-a-new-folder-use-and-empty-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the folder or meter to edit. Use and empty ID to add a new folder|
|body|body|[FolderSettings](#schemafoldersettings)|true|The folder or meter data|
|» Description|body|string|false|The Description of the folder or meter|
|» Enable|body|boolean|false|Flag if the meter is enabled (folder not supported yet)|
|» FolderType|body|string|false|The Type of the folder|
|» Name|body|string|false|The Name of the folder or meter|
|» ParentFolderId|body|string|false|The parent folder ID of this item|
|» SerialNumber|body|integer(int64)|false|The serial number (meter only)|
|» UseableForVirtualBillingMeters|body|boolean|false|Flag if the meter is usable for virtual billing meters (e.g. washroom)|
|» ValueCorrection|body|number(double)|false|The value correction on this meter|
|» ValueCorrectionParentFolder|body|number(double)|false|The value correction on all parent folders. but not on the meter itself|
|» VisualizationName|body|string|false|The name of the visualization of the folder|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» FolderType|Folder|
|» FolderType|Location|
|» FolderType|Factory|
|» FolderType|House|
|» FolderType|Office|
|» FolderType|Machine|
|» FolderType|VirtualMeter|
|» FolderType|ElecticityFolder|
|» FolderType|WaterFolder|
|» FolderType|HeatFolder|
|» FolderType|GasFolder|
|» FolderType|TemperatureFolder|
|» FolderType|Sun|
|» FolderType|Light|
|» FolderType|Ice|
|» FolderType|Sofa|
|» FolderType|Food|
|» FolderType|Coffee|
|» FolderType|Car|
|» FolderType|ChargingStation|
|» FolderType|Meter|
|» FolderType|User|
|» FolderType|Trash|
|» FolderType|GridPhotovoltaicPowerSystem|

> Example responses

> 200 Response

```json
{
  "AutoExportSettings": {
    "ExportFormat": "string",
    "ExportInterval": "NoExport",
    "MeterPointId": "string",
    "UploadType": "string"
  },
  "Children": [
    {}
  ],
  "Description": "string",
  "FolderType": "Folder",
  "Icon": "string",
  "Id": "string",
  "MeterSerialNumber": "string",
  "Name": "string",
  "UserId": "string"
}
```

<h3 id="add-or-edit-a-folder-or-a-meter-to-add-a-new-folder-use-and-empty-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FolderMenuItem](#schemafoldermenuitem)|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a folder

<a id="opIdFolderSettings_Delete"></a>

> Code samples

```bash
curl https://example.com/api/folder/settings/string \
  -X DELETE
```

`DELETE /api/folder/settings/{id}`

<h3 id="deletes-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the folder|

<h3 id="deletes-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-usertofolderassign">UserToFolderAssign</h1>

## Assign a user to a folder

<a id="opIdUserToFolderAssign_Post"></a>

> Code samples

```bash
curl 'https://example.com/api/folder/user/assign?source=string&target=string&oldFolder=string' \
  -X POST
```

`POST /api/folder/user/assign`

<h3 id="assign-a-user-to-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|true|The ID of the user that should be assign|
|target|query|string|true|The ID of the folder that should be the parent|
|oldFolder|query|string|true|The ID of the old folder (in case of a drag and drop to a new folder)|

<h3 id="assign-a-user-to-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Deletes a user to folder assignement

<a id="opIdUserToFolderAssign_Delete"></a>

> Code samples

```bash
curl 'https://example.com/api/folder/user/assign?source=string&target=string' \
  -X DELETE
```

`DELETE /api/folder/user/assign`

<h3 id="deletes-a-user-to-folder-assignement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|true|The ID of the user that should be de-assign|
|target|query|string|true|The ID of the folder|

<h3 id="deletes-a-user-to-folder-assignement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-oauth">OAuth</h1>

## OAuth_Authorize

<a id="opIdOAuth_Authorize"></a>

> Code samples

```bash
curl 'https://example.com/api/oauth/authorize?client_id=string&redirect_uri=string&state=string' \
  -H 'Accept: application/json'
```

`GET /api/oauth/authorize`

<h3 id="oauthauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|none|
|redirect_uri|query|string|true|none|
|state|query|string|true|none|
|scope|query|string|false|none|
|client_secret|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="oauthauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## post/api/oauth/authorize

> Code samples

```bash
curl 'https://example.com/api/oauth/authorize?client_id=string&redirect_uri=string&state=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/oauth/authorize`

<h3 id="postapioauthauthorize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|none|
|redirect_uri|query|string|true|none|
|state|query|string|true|none|
|scope|query|string|false|none|
|client_secret|query|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="postapioauthauthorize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-pico">Pico</h1>

## Gets all pico charging stations for this user

<a id="opIdPico_Get"></a>

> Code samples

```bash
curl https://example.com/api/pico \
  -H 'Accept: application/json'
```

`GET /api/pico`

> Example responses

> 200 Response

```json
[
  {
    "ActivePower": 0,
    "ActivePowerL1": 0,
    "ActivePowerL2": 0,
    "ActivePowerL3": 0,
    "ActivePowerUnit": "string",
    "ActiveTariff": 0,
    "AdditionalMeterSerialNumber": "string",
    "AnalogOutput1": 0,
    "AnalogOutput2": 0,
    "ChargingStationState": "Booting",
    "CounterReading": 0,
    "CounterReadingExport": 0,
    "CounterReadingImport": 0,
    "CounterReadingT1": 0,
    "CounterReadingT2": 0,
    "CounterReadingT3": 0,
    "CounterReadingT4": 0,
    "CounterReadingUnit": "string",
    "Current": 0,
    "CurrentL1": 0,
    "CurrentL2": 0,
    "CurrentL3": 0,
    "DeviceEnergyType": "MeterTypeUnknown",
    "DigitalInput1": true,
    "DigitalInput2": true,
    "DigitalOutput1": true,
    "DigitalOutput2": true,
    "FamilyType": "MeterFamilyTypeUnknown",
    "FlowRate": 0,
    "Id": "string",
    "MeterSubType": "MeterSubTypeUnknown",
    "Name": "string",
    "PowerFactor": 0,
    "PowerFactorL1": 0,
    "PowerFactorL2": 0,
    "PowerFactorL3": 0,
    "Serial": 0,
    "SwitchOn": true,
    "SwitchPhaseL1On": true,
    "SwitchPhaseL2On": true,
    "SwitchPhaseL3On": true,
    "Temperature": 0,
    "ValueDate": "1970-01-01T00:00:00Z",
    "Voltage": 0,
    "VoltageL1": 0,
    "VoltageL2": 0,
    "VoltageL3": 0
  }
]
```

<h3 id="gets-all-pico-charging-stations-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-all-pico-charging-stations-for-this-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Device](#schemadevice)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picocharging">PicoCharging</h1>

## Gets the active charging data of a pico station

<a id="opIdPicoCharging_Get"></a>

> Code samples

```bash
curl https://example.com/api/pico/charging/string \
  -H 'Accept: application/json'
```

`GET /api/pico/charging/{id}`

<h3 id="gets-the-active-charging-data-of-a-pico-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "ActiveChargingEnergy": 0,
  "ActiveChargingPower": 0,
  "ConnectionMode": "NetworkToCloudConnectionMode_NoConnection",
  "Duration": 0,
  "LastWarningOrError": "MeterDataloggerEvent",
  "LastWarningOrErrorMessage": "string",
  "LastWarningOrErrorTime": "1970-01-01T00:00:00Z",
  "LoadSheddingState": "MaxCurrent",
  "LoadmanagementGroupName": "string",
  "MaxAllowedChargingCurrent": 0,
  "MaxDynamicCurrent": 0,
  "MaxLoadmanagementGroupCurrent": 0,
  "MaxStationCurrent": 0,
  "MinStationCurrent": 0,
  "State": "Booting",
  "ValueDate": "1970-01-01T00:00:00Z"
}
```

<h3 id="gets-the-active-charging-data-of-a-pico-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PicoChargingData](#schemapicochargingdata)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picocharginghistory">PicoChargingHistory</h1>

## Gets the last charging history for a pico station

<a id="opIdPicoChargingHistory_Get"></a>

> Code samples

```bash
curl https://example.com/api/pico/history/string \
  -H 'Accept: application/json'
```

`GET /api/pico/history/{id}`

<h3 id="gets-the-last-charging-history-for-a-pico-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Duration": 0,
    "EnergyUsed": 0,
    "StartTime": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="gets-the-last-charging-history-for-a-pico-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="gets-the-last-charging-history-for-a-pico-station-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PicoChargingHistoryData](#schemapicocharginghistorydata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picoloadmanagementgroup">PicoLoadmanagementGroup</h1>

## GET: api/pico/loadmanagementgroup Returns all available load management groups

> Code samples

```bash
curl https://example.com/api/pico/loadmanagementgroup \
  -H 'Accept: application/json'
```

`GET /api/pico/loadmanagementgroup`

> Example responses

> 200 Response

```json
[
  {
    "Id": "string",
    "MaxCurrent": 0,
    "Name": "string",
    "NumberOfStations": 0
  }
]
```

<h3 id="get-apipicoloadmanagementgroup-returns-all-available-load-management-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-apipicoloadmanagementgroup-returns-all-available-load-management-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PicoLoadmanagementGroupDto](#schemapicoloadmanagementgroupdto)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## GET: api/pico/loadmanagementgroup Returns a pico load management group by it's id

<a id="opIdPicoLoadmanagementGroup_Get"></a>

> Code samples

```bash
curl https://example.com/api/pico/loadmanagementgroup/string \
  -H 'Accept: application/json'
```

`GET /api/pico/loadmanagementgroup/{id}`

<h3 id="get-apipicoloadmanagementgroup-returns-a-pico-load-management-group-by-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "Id": "string",
  "MaxCurrent": 0,
  "Name": "string",
  "NumberOfStations": 0
}
```

<h3 id="get-apipicoloadmanagementgroup-returns-a-pico-load-management-group-by-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PicoLoadmanagementGroupDto](#schemapicoloadmanagementgroupdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picoloadmanagementsetdynamiccurrent">PicoLoadmanagementSetDynamicCurrent</h1>

## Sets the dynamic current of a load management group or a single station.

<a id="opIdPicoLoadmanagementSetDynamicCurrent_Post"></a>

> Code samples

```bash
curl 'https://example.com/api/pico/loadmanagementgroup/current/0?current=0' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/pico/loadmanagementgroup/current/{serial}`

<h3 id="sets-the-dynamic-current-of-a-load-management-group-or-a-single-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serial|path|integer(int64)|true|The serial number can be any pico serial in the group (e.g. 700001)|
|current|query|integer(int32)|true|The dynamic current of the group (in mA)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="sets-the-dynamic-current-of-a-load-management-group-or-a-single-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picosettings">PicoSettings</h1>

## GET: api/pico/settings Returns the settings of a pico charging station.

<a id="opIdPicoSettings_Get"></a>

> Code samples

```bash
curl https://example.com/api/pico/settings/string \
  -H 'Accept: application/json'
```

`GET /api/pico/settings/{id}`

<h3 id="get-apipicosettings-returns-the-settings-of-a-pico-charging-station-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "AuthenticationType": "None",
  "CarIdDetection": true,
  "DisplayBrightness": "string",
  "DnsName": "string",
  "FixCableLockEnable": true,
  "IdleImageUrl": "string",
  "InternalIp": "string",
  "LoadmanagementGroupId": "string",
  "MaxCurrent": 0,
  "MinCurrent": 0,
  "ModbusTcp": true,
  "Name": "string",
  "SerialNumber": "string"
}
```

<h3 id="get-apipicosettings-returns-the-settings-of-a-pico-charging-station-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PicoSettingsDto](#schemapicosettingsdto)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="smart-me-picoenablefixcablelock">PicoEnableFixCableLock</h1>

## Try to fix lock the cable of a pico. The pico must be online and a cable (without car) needs to be connected. Otherwise this will fail.

<a id="opIdPicoEnableFixCableLock_Post"></a>

> Code samples

```bash
curl https://example.com/api/pico/tryenablecablelock/string \
  -X POST \
  -H 'Accept: application/json'
```

`POST /api/pico/tryenablecablelock/{id}`

<h3 id="try-to-fix-lock-the-cable-of-a-pico-the-pico-must-be-online-and-a-cable-without-car-needs-to-be-connected-otherwise-this-will-fail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the pico|

> Example responses

> 200 Response

```json
{}
```

<h3 id="try-to-fix-lock-the-cable-of-a-pico-the-pico-must-be-online-and-a-cable-without-car-needs-to-be-connected-otherwise-this-will-fail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessTokenToPut">AccessTokenToPut</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokentoput"></a>
<a id="schema_AccessTokenToPut"></a>
<a id="tocSaccesstokentoput"></a>
<a id="tocsaccesstokentoput"></a>

```json
{
  "CardId": 0,
  "UserId": 0
}
```

Container Class for the Put action of an Access Token

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CardId|integer(int64)|false|none|The ID of the Card|
|UserId|integer(int64)|false|none|The ID of the User. The credentials provided must have permission to edit the user.<br>            If no ID is provided, the user in the credentials is taken.|

<h2 id="tocS_ActionInformation">ActionInformation</h2>
<!-- backwards compatibility -->
<a id="schemaactioninformation"></a>
<a id="schema_ActionInformation"></a>
<a id="tocSactioninformation"></a>
<a id="tocsactioninformation"></a>

```json
{
  "ActionType": "OnOffAction",
  "MaxValue": 0,
  "MinValue": 0,
  "Name": "string",
  "ObisCode": "string"
}
```

The Information about an Action of a device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|string|false|none|The Type of this action.|
|MaxValue|number(double)|false|none|The maximum value of this action (e.g. for an AnalogAction)|
|MinValue|number(double)|false|none|The minimum value of this action (e.g. for an AnalogAction)|
|Name|string|false|none|The Name of this action|
|ObisCode|string|false|none|The Obis Code of this action. This is used as ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|ActionType|OnOffAction|
|ActionType|AnalogAction|

<h2 id="tocS_ActionToPost">ActionToPost</h2>
<!-- backwards compatibility -->
<a id="schemaactiontopost"></a>
<a id="schema_ActionToPost"></a>
<a id="tocSactiontopost"></a>
<a id="tocsactiontopost"></a>

```json
{
  "Actions": [
    {
      "ObisCode": "string",
      "Value": 0
    }
  ],
  "DeviceID": "string"
}
```

Container Class for an action to post

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Actions|[[ActionToPostItem](#schemaactiontopostitem)]|false|none|List with all Actions for this device|
|DeviceID|string|false|none|The ID of the Device|

<h2 id="tocS_ActionToPostItem">ActionToPostItem</h2>
<!-- backwards compatibility -->
<a id="schemaactiontopostitem"></a>
<a id="schema_ActionToPostItem"></a>
<a id="tocSactiontopostitem"></a>
<a id="tocsactiontopostitem"></a>

```json
{
  "ObisCode": "string",
  "Value": 0
}
```

Container class for an action item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ObisCode|string|false|none|The ObisCode (ID) of the Action|
|Value|number(double)|false|none|The Value to Post|

<h2 id="tocS_AdditionalDeviceInformation">AdditionalDeviceInformation</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaldeviceinformation"></a>
<a id="schema_AdditionalDeviceInformation"></a>
<a id="tocSadditionaldeviceinformation"></a>
<a id="tocsadditionaldeviceinformation"></a>

```json
{
  "AdditionalMeterSerialNumber": "string",
  "FirmwareVersion": 0,
  "HardwareVersion": 0,
  "ID": "string",
  "NetworkConnection": "string",
  "NetworkConnectionRSSI": 0
}
```

Additional Information For a device

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalMeterSerialNumber|string|false|none|An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.|
|FirmwareVersion|integer(int32)|false|none|The Firmware Version of a Meter|
|HardwareVersion|integer(int32)|false|none|The Hardware Version of a Meter.|
|ID|string|false|none|The ID of the device|
|NetworkConnection|string|false|none|The mode how the device is connected to the network. Valid values are:<br>            wifi, gprs, ltecatm1, ltenbiot, meshmobile, meshwifi|
|NetworkConnectionRSSI|integer(int32)|false|none|The connection RSSI value (0 is bad, 100 is best)|

<h2 id="tocS_AutoExportSettings">AutoExportSettings</h2>
<!-- backwards compatibility -->
<a id="schemaautoexportsettings"></a>
<a id="schema_AutoExportSettings"></a>
<a id="tocSautoexportsettings"></a>
<a id="tocsautoexportsettings"></a>

```json
{
  "ExportFormat": "string",
  "ExportInterval": "NoExport",
  "MeterPointId": "string",
  "UploadType": "string"
}
```

Settings for the auto export functionality of a meter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExportFormat|string|false|none|The export format|
|ExportInterval|string|false|none|The export interval of the auto export|
|MeterPointId|string|false|none|The meter point id set by the user|
|UploadType|string|false|none|The upload type|

#### Enumerated Values

|Property|Value|
|---|---|
|ExportInterval|NoExport|
|ExportInterval|Hourly|
|ExportInterval|Daily|
|ExportInterval|Weekly|
|ExportInterval|Monthly|
|ExportInterval|QuaterYearly|
|ExportInterval|HalfYearly|
|ExportInterval|Yearly|

<h2 id="tocS_CustomDeviceToPost">CustomDeviceToPost</h2>
<!-- backwards compatibility -->
<a id="schemacustomdevicetopost"></a>
<a id="schema_CustomDeviceToPost"></a>
<a id="tocScustomdevicetopost"></a>
<a id="tocscustomdevicetopost"></a>

```json
{
  "Id": "string",
  "Name": "string",
  "Serial": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Values": [
    {
      "Name": "string",
      "Value": 0
    }
  ]
}
```

Container Class for the Web API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The ID of the device|
|Name|string|false|none|The Name of the Device|
|Serial|integer(int64)|false|none|The Serial number|
|ValueDate|string(date-time)|false|none|The Date of the Value (in UTC). If this is null the Server Time is used.|
|Values|[[CustomDeviceValues](#schemacustomdevicevalues)]|false|none|The Values of the custom Device|

<h2 id="tocS_CustomDeviceValues">CustomDeviceValues</h2>
<!-- backwards compatibility -->
<a id="schemacustomdevicevalues"></a>
<a id="schema_CustomDeviceValues"></a>
<a id="tocScustomdevicevalues"></a>
<a id="tocscustomdevicevalues"></a>

```json
{
  "Name": "string",
  "Value": 0
}
```

Container Class for the Custom Device Values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The Name of the Value.|
|Value|number(double)|false|none|The Value|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "ActivePower": 0,
  "ActivePowerL1": 0,
  "ActivePowerL2": 0,
  "ActivePowerL3": 0,
  "ActivePowerUnit": "string",
  "ActiveTariff": 0,
  "AdditionalMeterSerialNumber": "string",
  "AnalogOutput1": 0,
  "AnalogOutput2": 0,
  "ChargingStationState": "Booting",
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingImport": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "DigitalInput2": true,
  "DigitalOutput1": true,
  "DigitalOutput2": true,
  "FamilyType": "MeterFamilyTypeUnknown",
  "FlowRate": 0,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "SwitchOn": true,
  "SwitchPhaseL1On": true,
  "SwitchPhaseL2On": true,
  "SwitchPhaseL3On": true,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

Container Class for the Web API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivePower|number(double)|false|none|The Actvie Power or current flow rate|
|ActivePowerL1|number(double)|false|none|The Actvie Power Phase L1|
|ActivePowerL2|number(double)|false|none|The Actvie Power Phase L2|
|ActivePowerL3|number(double)|false|none|The Actvie Power Phase L3|
|ActivePowerUnit|string|false|none|The Unit of the Active Power Value|
|ActiveTariff|integer(int32)|false|none|The Number of the Active Tariff|
|AdditionalMeterSerialNumber|string|false|none|An additional Meter serial number. e.g. the number of a meter a smart-me device is connected to.|
|AnalogOutput1|integer(int32)|false|none|The analog output number 1 (PWM signal) (0 - 32183)|
|AnalogOutput2|integer(int32)|false|none|The analog output number 2 (PWM signal) (0 - 32183)|
|ChargingStationState|string|false|none|The state of a pico charging station. (Only available for pico charging stations)|
|CounterReading|number(double)|false|none|The Meter Counter Reading (Total Energy used)|
|CounterReadingExport|number(double)|false|none|The Meter Counter Reading only export|
|CounterReadingImport|number(double)|false|none|The Meter Counter Reading only import|
|CounterReadingT1|number(double)|false|none|The Meter Counter Reading Tariff 1|
|CounterReadingT2|number(double)|false|none|The Meter Counter Reading Tariff 2|
|CounterReadingT3|number(double)|false|none|The Meter Counter Reading Tariff 3|
|CounterReadingT4|number(double)|false|none|The Meter Counter Reading Tariff 4|
|CounterReadingUnit|string|false|none|The Unit of the Counter Reading|
|Current|number(double)|false|none|The Current (in A)|
|CurrentL1|number(double)|false|none|The Current Phase L1 (in A)|
|CurrentL2|number(double)|false|none|The Current Phase L2 (in A)|
|CurrentL3|number(double)|false|none|The Current Phase L3 (in A)|
|DeviceEnergyType|string|false|none|The Energy Type of this device|
|DigitalInput1|boolean|false|none|The digital input number 1|
|DigitalInput2|boolean|false|none|The digital input number 2|
|DigitalOutput1|boolean|false|none|The digital output number 1|
|DigitalOutput2|boolean|false|none|The digital output number 2|
|FamilyType|string|false|none|The Family Type of the device.|
|FlowRate|number(double)|false|none|The current flow rate (e.g. m3/h)|
|Id|string|false|none|The ID of the device|
|MeterSubType|string|false|none|The sub meter type (e.g. warmwater or coldwater)|
|Name|string|false|none|The Name of the Device|
|PowerFactor|number(double)|false|none|The Power Factor (cos phi). Range: 0 - 1|
|PowerFactorL1|number(double)|false|none|The Power Factor (cos phi) Phase L1. Range: 0 - 1|
|PowerFactorL2|number(double)|false|none|The Power Factor (cos phi) Phase L2. Range: 0 - 1|
|PowerFactorL3|number(double)|false|none|The Power Factor (cos phi) Phase L3. Range: 0 - 1|
|Serial|integer(int64)|false|none|The Serial number|
|SwitchOn|boolean|false|none|Flag if the Switch is on on this device.|
|SwitchPhaseL1On|boolean|false|none|Flag if the Phase L1 is on on this device.|
|SwitchPhaseL2On|boolean|false|none|Flag if the Phase L2 is on on this device.|
|SwitchPhaseL3On|boolean|false|none|Flag if the Phase L3 is on on this device.|
|Temperature|number(double)|false|none|The Temperature (in degree celsius)|
|ValueDate|string(date-time)|false|none|Time of last successful connection the the smart-me Cloud.|
|Voltage|number(double)|false|none|The Voltage (in V)|
|VoltageL1|number(double)|false|none|The Voltage Phase L1 (in V)|
|VoltageL2|number(double)|false|none|The Voltage Phase L2 (in V)|
|VoltageL3|number(double)|false|none|The Voltage Phase L3 (in V)|

#### Enumerated Values

|Property|Value|
|---|---|
|ChargingStationState|Booting|
|ChargingStationState|ReadyNoCarConnected|
|ChargingStationState|ReadyCarConnected|
|ChargingStationState|StartedWaitForCar|
|ChargingStationState|Charging|
|ChargingStationState|Installation|
|ChargingStationState|Authorize|
|ChargingStationState|Offline|
|DeviceEnergyType|MeterTypeUnknown|
|DeviceEnergyType|MeterTypeElectricity|
|DeviceEnergyType|MeterTypeWater|
|DeviceEnergyType|MeterTypeGas|
|DeviceEnergyType|MeterTypeHeat|
|DeviceEnergyType|MeterTypeHCA|
|DeviceEnergyType|MeterTypeAllMeters|
|DeviceEnergyType|MeterTypeTemperature|
|DeviceEnergyType|MeterTypeMBusGateway|
|DeviceEnergyType|MeterTypeRS485Gateway|
|DeviceEnergyType|MeterTypeCustomDevice|
|DeviceEnergyType|MeterTypeCompressedAir|
|DeviceEnergyType|MeterTypeSolarLog|
|DeviceEnergyType|MeterTypeVirtualMeter|
|DeviceEnergyType|MeterTypeWMBusGateway|
|FamilyType|MeterFamilyTypeUnknown|
|FamilyType|MeterFamilyTypeSmartMeConnectV1|
|FamilyType|MeterFamiliyTypeSmartMeMeter|
|FamilyType|MeterFamiliyTypeSmartMeMeterWithSwitch|
|FamilyType|MeterFamilyTypeMBusGatewayV1|
|FamilyType|MeterFamilyTypeRS485GatewayV1|
|FamilyType|MeterFamilyTypeKamstrupModule|
|FamilyType|MeterFamilyTypeSmartMe3PhaseMeter80A|
|FamilyType|MeterFamilyTypeSmartMe3PhaseMeter32A|
|FamilyType|MeterFamilyTypeSmartMe3PhaseTelstarTransformer|
|FamilyType|MeterFamilyTypeLandisGyrModule|
|FamilyType|MeterFamilyTypeFnnOpticalModule|
|FamilyType|MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi|
|FamilyType|MeterFamilyTypeSmartMe3PhaseTelstar80AMobile|
|FamilyType|MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi|
|FamilyType|MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi|
|FamilyType|MeterFamilyTypeSmartMe1PhaseMeter80AGprs|
|FamilyType|MeterFamilyTypeSmartMe1PhaseMeter32AGprs|
|FamilyType|MeterFamilyTypeWMBusGatewayV1|
|FamilyType|MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile|
|FamilyType|MeterFamilyTypeMithralHallV1|
|FamilyType|MeterFamilyTypeRestApiMeter|
|FamilyType|MeterFamilyTypeVirtualBillingMeter|
|MeterSubType|MeterSubTypeUnknown|
|MeterSubType|MeterSubTypeCold|
|MeterSubType|MeterSubTypeHeat|
|MeterSubType|MeterSubTypeChargingStation|
|MeterSubType|MeterSubTypeElectricity|
|MeterSubType|MeterSubTypeWater|
|MeterSubType|MeterSubTypeGas|
|MeterSubType|MeterSubTypeElectricityHeat|
|MeterSubType|MeterSubTypeTemperature|
|MeterSubType|MeterSubTypeVirtualBattery|

<h2 id="tocS_DeviceInPast">DeviceInPast</h2>
<!-- backwards compatibility -->
<a id="schemadeviceinpast"></a>
<a id="schema_DeviceInPast"></a>
<a id="tocSdeviceinpast"></a>
<a id="tocsdeviceinpast"></a>

```json
{
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingExportT1": 0,
  "CounterReadingExportT2": 0,
  "CounterReadingExportT3": 0,
  "CounterReadingExportT4": 0,
  "CounterReadingImport": 0,
  "CounterReadingImportT1": 0,
  "CounterReadingImportT2": 0,
  "CounterReadingImportT3": 0,
  "CounterReadingImportT4": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "CounterReadingT3": 0,
  "CounterReadingT4": 0,
  "CounterReadingUnit": "string",
  "Date": "1970-01-01T00:00:00Z",
  "Id": "string",
  "Serial": 0
}
```

Container Class for the Web API. Conatinas the MeterValues in the Past

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CounterReading|number(double)|false|none|The Meter Counter Reading (Total Energy used)|
|CounterReadingExport|number(double)|false|none|The Meter Counter Reading Export|
|CounterReadingExportT1|number(double)|false|none|The Meter Counter Reading Export Tariff 1|
|CounterReadingExportT2|number(double)|false|none|The Meter Counter Reading Export Tariff 2|
|CounterReadingExportT3|number(double)|false|none|The Meter Counter Reading Export Tariff 3|
|CounterReadingExportT4|number(double)|false|none|The Meter Counter Reading Export Tariff 4|
|CounterReadingImport|number(double)|false|none|The Meter Counter Reading Import|
|CounterReadingImportT1|number(double)|false|none|The Meter Counter Reading Import Tariff 1|
|CounterReadingImportT2|number(double)|false|none|The Meter Counter Reading Import Tariff 2|
|CounterReadingImportT3|number(double)|false|none|The Meter Counter Reading Import Tariff 3|
|CounterReadingImportT4|number(double)|false|none|The Meter Counter Reading Import Tariff 4|
|CounterReadingT1|number(double)|false|none|The Meter Counter Reading Tariff 1|
|CounterReadingT2|number(double)|false|none|The Meter Counter Reading Tariff 2|
|CounterReadingT3|number(double)|false|none|The Meter Counter Reading Tariff 3|
|CounterReadingT4|number(double)|false|none|The Meter Counter Reading Tariff 4|
|CounterReadingUnit|string|false|none|The Unit of the Counter Reading|
|Date|string(date-time)|false|none|The Date of the Values|
|Id|string|false|none|The ID of the device|
|Serial|integer(int64)|false|none|The Serial number|

<h2 id="tocS_DeviceToPost">DeviceToPost</h2>
<!-- backwards compatibility -->
<a id="schemadevicetopost"></a>
<a id="schema_DeviceToPost"></a>
<a id="tocSdevicetopost"></a>
<a id="tocsdevicetopost"></a>

```json
{
  "ActivePower": 0,
  "CounterReading": 0,
  "CounterReadingExport": 0,
  "CounterReadingExportT1": 0,
  "CounterReadingExportT2": 0,
  "CounterReadingT1": 0,
  "CounterReadingT2": 0,
  "Current": 0,
  "CurrentL1": 0,
  "CurrentL2": 0,
  "CurrentL3": 0,
  "DeviceEnergyType": "MeterTypeUnknown",
  "DigitalInput1": true,
  "Id": "string",
  "MeterSubType": "MeterSubTypeUnknown",
  "Name": "string",
  "PowerFactor": 0,
  "PowerFactorL1": 0,
  "PowerFactorL2": 0,
  "PowerFactorL3": 0,
  "Serial": 0,
  "Temperature": 0,
  "ValueDate": "1970-01-01T00:00:00Z",
  "Voltage": 0,
  "VoltageL1": 0,
  "VoltageL2": 0,
  "VoltageL3": 0
}
```

Container Class for the Web API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActivePower|number(double)|false|none|The Active Power or current flow rate. In kW or m3/h|
|CounterReading|number(double)|false|none|The Meter Counter Reading (Total Energy used) in kWh or m3.|
|CounterReadingExport|number(double)|false|none|The Meter Counter Reading only export|
|CounterReadingExportT1|number(double)|false|none|The Meter Counter Reading only export (Tariff 1)|
|CounterReadingExportT2|number(double)|false|none|The Meter Counter Reading only export (Tariff 2)|
|CounterReadingT1|number(double)|false|none|The Meter Counter Reading Tariff 1 in kWh or m3.|
|CounterReadingT2|number(double)|false|none|The Meter Counter Reading Tariff 2 in kWh or m3.|
|Current|number(double)|false|none|The Current (in A)|
|CurrentL1|number(double)|false|none|The Current Phase L1 (in A)|
|CurrentL2|number(double)|false|none|The Current Phase L2 (in A)|
|CurrentL3|number(double)|false|none|The Current Phase L3 (in A)|
|DeviceEnergyType|string|false|none|The Energy Type of this device|
|DigitalInput1|boolean|false|none|The digital input number 1|
|Id|string|false|none|The ID of the device|
|MeterSubType|string|false|none|The Sub Type of this Meter.|
|Name|string|false|none|The Name of the Device|
|PowerFactor|number(double)|false|none|The Power Factor (cos phi). Range: 0 - 1|
|PowerFactorL1|number(double)|false|none|The Power Factor (cos phi) Phase L1. Range: 0 - 1|
|PowerFactorL2|number(double)|false|none|The Power Factor (cos phi) Phase L2. Range: 0 - 1|
|PowerFactorL3|number(double)|false|none|The Power Factor (cos phi) Phase L3. Range: 0 - 1|
|Serial|integer(int64)|false|none|The Serial number|
|Temperature|number(double)|false|none|The Temperature (in degree celsius)|
|ValueDate|string(date-time)|false|none|The Date of the Value (in UTC). If this is null the Server Time is used.|
|Voltage|number(double)|false|none|The Voltage (in V)|
|VoltageL1|number(double)|false|none|The Voltage Phase L1 (in V)|
|VoltageL2|number(double)|false|none|The Voltage Phase L2 (in V)|
|VoltageL3|number(double)|false|none|The Voltage Phase L3 (in V)|

#### Enumerated Values

|Property|Value|
|---|---|
|DeviceEnergyType|MeterTypeUnknown|
|DeviceEnergyType|MeterTypeElectricity|
|DeviceEnergyType|MeterTypeWater|
|DeviceEnergyType|MeterTypeGas|
|DeviceEnergyType|MeterTypeHeat|
|DeviceEnergyType|MeterTypeHCA|
|DeviceEnergyType|MeterTypeAllMeters|
|DeviceEnergyType|MeterTypeTemperature|
|DeviceEnergyType|MeterTypeMBusGateway|
|DeviceEnergyType|MeterTypeRS485Gateway|
|DeviceEnergyType|MeterTypeCustomDevice|
|DeviceEnergyType|MeterTypeCompressedAir|
|DeviceEnergyType|MeterTypeSolarLog|
|DeviceEnergyType|MeterTypeVirtualMeter|
|DeviceEnergyType|MeterTypeWMBusGateway|
|MeterSubType|MeterSubTypeUnknown|
|MeterSubType|MeterSubTypeCold|
|MeterSubType|MeterSubTypeHeat|
|MeterSubType|MeterSubTypeChargingStation|
|MeterSubType|MeterSubTypeElectricity|
|MeterSubType|MeterSubTypeWater|
|MeterSubType|MeterSubTypeGas|
|MeterSubType|MeterSubTypeElectricityHeat|
|MeterSubType|MeterSubTypeTemperature|
|MeterSubType|MeterSubTypeVirtualBattery|

<h2 id="tocS_FolderData">FolderData</h2>
<!-- backwards compatibility -->
<a id="schemafolderdata"></a>
<a id="schema_FolderData"></a>
<a id="tocSfolderdata"></a>
<a id="tocsfolderdata"></a>

```json
{
  "ElectricityCounterValue": 0,
  "ElectricityPower": 0,
  "GasCounterValue": 0,
  "GasFlowRate": 0,
  "HeatCounterValue": 0,
  "HeatPower": 0,
  "WaterCounterValue": 0,
  "WaterFlowRate": 0
}
```

Container class for the folder API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ElectricityCounterValue|number(double)|false|none|The Counter values for electricity (kWh)|
|ElectricityPower|number(double)|false|none|The Power for electricity (kW)|
|GasCounterValue|number(double)|false|none|The Counter values for Gas (m3)|
|GasFlowRate|number(double)|false|none|The Flow Rate for Gas (m3/h)|
|HeatCounterValue|number(double)|false|none|The Counter values for Heat (kWh)|
|HeatPower|number(double)|false|none|The Power for Heat (kW)|
|WaterCounterValue|number(double)|false|none|The Counter values for Water (m3)|
|WaterFlowRate|number(double)|false|none|The Flow Rate for Water (m3/h)|

<h2 id="tocS_FolderMenuConfiguration">FolderMenuConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemafoldermenuconfiguration"></a>
<a id="schema_FolderMenuConfiguration"></a>
<a id="tocSfoldermenuconfiguration"></a>
<a id="tocsfoldermenuconfiguration"></a>

```json
{
  "BrowserTimeZoneName": "string",
  "BrowserUtcTime": "string",
  "Items": [
    {
      "AutoExportSettings": {
        "ExportFormat": "string",
        "ExportInterval": "NoExport",
        "MeterPointId": "string",
        "UploadType": "string"
      },
      "Children": [
        {}
      ],
      "Description": "string",
      "FolderType": "Folder",
      "Icon": "string",
      "Id": "string",
      "MeterSerialNumber": "string",
      "Name": "string",
      "UserId": "string"
    }
  ]
}
```

Container Class for the Web API representing a folder menu and it's items

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BrowserTimeZoneName|string|false|none|The time zone name taken from the browser|
|BrowserUtcTime|string|false|none|The UTC time taken from the browser|
|Items|[[FolderMenuItem](#schemafoldermenuitem)]|false|none|none|

<h2 id="tocS_FolderMenuItem">FolderMenuItem</h2>
<!-- backwards compatibility -->
<a id="schemafoldermenuitem"></a>
<a id="schema_FolderMenuItem"></a>
<a id="tocSfoldermenuitem"></a>
<a id="tocsfoldermenuitem"></a>

```json
{
  "AutoExportSettings": {
    "ExportFormat": "string",
    "ExportInterval": "NoExport",
    "MeterPointId": "string",
    "UploadType": "string"
  },
  "Children": [
    {
      "AutoExportSettings": {
        "ExportFormat": "string",
        "ExportInterval": "NoExport",
        "MeterPointId": "string",
        "UploadType": "string"
      },
      "Children": [
        {}
      ],
      "Description": "string",
      "FolderType": "Folder",
      "Icon": "string",
      "Id": "string",
      "MeterSerialNumber": "string",
      "Name": "string",
      "UserId": "string"
    }
  ],
  "Description": "string",
  "FolderType": "Folder",
  "Icon": "string",
  "Id": "string",
  "MeterSerialNumber": "string",
  "Name": "string",
  "UserId": "string"
}
```

A folder menu item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AutoExportSettings|[AutoExportSettings](#schemaautoexportsettings)|false|none|Settings for the auto export functionality of a meter|
|Children|[[FolderMenuItem](#schemafoldermenuitem)]|false|none|Children folder menu items (sub folder menu items)|
|Description|string|false|none|The Description of the folder|
|FolderType|string|false|none|The folder type of the item|
|Icon|string|false|none|The path to the Icon of this folder|
|Id|string|false|none|The id of the folder menu item|
|MeterSerialNumber|string|false|none|The serial number if the folder menu item is a meter. <br>            Serial number is handled as a string, as javascript on client side cannot handle long integers properly.|
|Name|string|false|none|The Name of the item|
|UserId|string|false|none|The ID of the user of this folder (only for foldertype user)|

#### Enumerated Values

|Property|Value|
|---|---|
|FolderType|Folder|
|FolderType|Location|
|FolderType|Factory|
|FolderType|House|
|FolderType|Office|
|FolderType|Machine|
|FolderType|VirtualMeter|
|FolderType|ElecticityFolder|
|FolderType|WaterFolder|
|FolderType|HeatFolder|
|FolderType|GasFolder|
|FolderType|TemperatureFolder|
|FolderType|Sun|
|FolderType|Light|
|FolderType|Ice|
|FolderType|Sofa|
|FolderType|Food|
|FolderType|Coffee|
|FolderType|Car|
|FolderType|ChargingStation|
|FolderType|Meter|
|FolderType|User|
|FolderType|Trash|
|FolderType|GridPhotovoltaicPowerSystem|

<h2 id="tocS_FolderSettings">FolderSettings</h2>
<!-- backwards compatibility -->
<a id="schemafoldersettings"></a>
<a id="schema_FolderSettings"></a>
<a id="tocSfoldersettings"></a>
<a id="tocsfoldersettings"></a>

```json
{
  "Description": "string",
  "Enable": true,
  "FolderType": "Folder",
  "Name": "string",
  "ParentFolderId": "string",
  "SerialNumber": 0,
  "UseableForVirtualBillingMeters": true,
  "ValueCorrection": 0,
  "ValueCorrectionParentFolder": 0,
  "VisualizationName": "string"
}
```

Container for the folder settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|string|false|none|The Description of the folder or meter|
|Enable|boolean|false|none|Flag if the meter is enabled (folder not supported yet)|
|FolderType|string|false|none|The Type of the folder|
|Name|string|false|none|The Name of the folder or meter|
|ParentFolderId|string|false|none|The parent folder ID of this item|
|SerialNumber|integer(int64)|false|none|The serial number (meter only)|
|UseableForVirtualBillingMeters|boolean|false|none|Flag if the meter is usable for virtual billing meters (e.g. washroom)|
|ValueCorrection|number(double)|false|none|The value correction on this meter|
|ValueCorrectionParentFolder|number(double)|false|none|The value correction on all parent folders. but not on the meter itself|
|VisualizationName|string|false|none|The name of the visualization of the folder|

#### Enumerated Values

|Property|Value|
|---|---|
|FolderType|Folder|
|FolderType|Location|
|FolderType|Factory|
|FolderType|House|
|FolderType|Office|
|FolderType|Machine|
|FolderType|VirtualMeter|
|FolderType|ElecticityFolder|
|FolderType|WaterFolder|
|FolderType|HeatFolder|
|FolderType|GasFolder|
|FolderType|TemperatureFolder|
|FolderType|Sun|
|FolderType|Light|
|FolderType|Ice|
|FolderType|Sofa|
|FolderType|Food|
|FolderType|Coffee|
|FolderType|Car|
|FolderType|ChargingStation|
|FolderType|Meter|
|FolderType|User|
|FolderType|Trash|
|FolderType|GridPhotovoltaicPowerSystem|

<h2 id="tocS_InputConfigurationContainer">InputConfigurationContainer</h2>
<!-- backwards compatibility -->
<a id="schemainputconfigurationcontainer"></a>
<a id="schema_InputConfigurationContainer"></a>
<a id="tocSinputconfigurationcontainer"></a>
<a id="tocsinputconfigurationcontainer"></a>

```json
{
  "Name": "string",
  "Number": 0,
  "OffText": "string",
  "OnText": "string",
  "Type": "TariffInput"
}
```

Configuration for the input of a meter (digital inputs)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The Name of the Input|
|Number|integer(int32)|false|none|The number of the Input. (1 for Input 1)|
|OffText|string|false|none|The visualization text for an OFF action|
|OnText|string|false|none|The visualization text for an ON action|
|Type|string|false|none|The Type of the output|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|TariffInput|
|Type|DigitalInput|

<h2 id="tocS_InputInformation">InputInformation</h2>
<!-- backwards compatibility -->
<a id="schemainputinformation"></a>
<a id="schema_InputInformation"></a>
<a id="tocSinputinformation"></a>
<a id="tocsinputinformation"></a>

```json
{
  "Name": "string",
  "Number": 0
}
```

Informations about the Inputs of a Meter or Folder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|The Name of the Input|
|Number|integer(int32)|false|none|The Number of this Input. Use this as ID to switch it on or off.|

<h2 id="tocS_MBusData">MBusData</h2>
<!-- backwards compatibility -->
<a id="schemambusdata"></a>
<a id="schema_MBusData"></a>
<a id="tocSmbusdata"></a>
<a id="tocsmbusdata"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "Telegram": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|none|The Date of the M-BUS Telegram Readout (in UTC). If this is null the Server Time is used.|
|Telegram|string|false|none|The M-BUS Telegram as Hex string. <br>            Example: 68 1F 1F 68 08 02 72 78 56 34 12 24 40 01 07 55 00 00 00 03 13 15 31 00 DA 02 3B 13 01 8B 60 04 37 18 02 18 16|

<h2 id="tocS_MeterFolderInformation">MeterFolderInformation</h2>
<!-- backwards compatibility -->
<a id="schemameterfolderinformation"></a>
<a id="schema_MeterFolderInformation"></a>
<a id="tocSmeterfolderinformation"></a>
<a id="tocsmeterfolderinformation"></a>

```json
{
  "CommunicationModuleFirmwareVersion": 0,
  "CommunicationModuleHardwareVersion": 0,
  "FirmwareVersion": 0,
  "HardwareVersion": 0,
  "InputInformations": [
    {
      "Name": "string",
      "Number": 0
    }
  ],
  "IsFolder": true,
  "Name": "string",
  "OutputInformations": [
    {
      "ActionType": "OnOffAction",
      "Name": "string",
      "Number": 0,
      "ObisCode": "string"
    }
  ]
}
```

Container Class for the Web API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CommunicationModuleFirmwareVersion|integer(int32)|false|none|The Version of the Communication Module (if exists)|
|CommunicationModuleHardwareVersion|integer(int32)|false|none|The Version of the Communication Module (if exists)|
|FirmwareVersion|integer(int32)|false|none|The Firmware Version of a Meter|
|HardwareVersion|integer(int32)|false|none|The Hardware Version of a Meter.|
|InputInformations|[[InputInformation](#schemainputinformation)]|false|none|Informations about the available Inputs|
|IsFolder|boolean|false|none|Flag if it's a Folder or a Meter|
|Name|string|false|none|Name of the Meter or Folder|
|OutputInformations|[[OutputInformation](#schemaoutputinformation)]|false|none|Informations about the available Outputs|

<h2 id="tocS_MeterFolderInformationToPost">MeterFolderInformationToPost</h2>
<!-- backwards compatibility -->
<a id="schemameterfolderinformationtopost"></a>
<a id="schema_MeterFolderInformationToPost"></a>
<a id="tocSmeterfolderinformationtopost"></a>
<a id="tocsmeterfolderinformationtopost"></a>

```json
{
  "Id": "string",
  "Name": "string"
}
```

Container for a Meter or Folder Information to Post

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The ID of the device or folder|
|Name|string|false|none|Name of the Meter or Folder|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{}
```

<h2 id="tocS_OutputConfigurationContainer">OutputConfigurationContainer</h2>
<!-- backwards compatibility -->
<a id="schemaoutputconfigurationcontainer"></a>
<a id="schema_OutputConfigurationContainer"></a>
<a id="tocSoutputconfigurationcontainer"></a>
<a id="tocsoutputconfigurationcontainer"></a>

```json
{
  "DigitalOutputNoConnectionAction": "Nothing",
  "Name": "string",
  "Number": 0,
  "S0PulseValue": "PulseValue1000Kwh",
  "Type": "ImpulseOutputActiveEnergy"
}
```

Configuration for the outputs of a meter (analog/digital outputs)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DigitalOutputNoConnectionAction|string|false|none|The Action when the device has lost the connection|
|Name|string|false|none|The Name of the Output|
|Number|integer(int32)|false|none|The number of the Output. (1 for Output 1, 2 for Output 2)|
|S0PulseValue|string|false|none|The S0 Pulse Value|
|Type|string|false|none|The Type of the output|

#### Enumerated Values

|Property|Value|
|---|---|
|DigitalOutputNoConnectionAction|Nothing|
|DigitalOutputNoConnectionAction|TurnOff|
|DigitalOutputNoConnectionAction|TurnOn|
|DigitalOutputNoConnectionAction|SetPwmValue|
|S0PulseValue|PulseValue1000Kwh|
|S0PulseValue|PulseValue10000Kwh|
|Type|ImpulseOutputActiveEnergy|
|Type|ImpulseOutputActiveEnergyImport|
|Type|ImpulseOutputActiveEnergyExport|
|Type|ImpulseOutputReactiveEnergy|
|Type|DigitalOutput|
|Type|AnalogPwmSignalOutput|
|Type|Disabled|

<h2 id="tocS_OutputInformation">OutputInformation</h2>
<!-- backwards compatibility -->
<a id="schemaoutputinformation"></a>
<a id="schema_OutputInformation"></a>
<a id="tocSoutputinformation"></a>
<a id="tocsoutputinformation"></a>

```json
{
  "ActionType": "OnOffAction",
  "Name": "string",
  "Number": 0,
  "ObisCode": "string"
}
```

Informations about the Outputs of a Meter or Folder

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionType|string|false|none|The type of the Output|
|Name|string|false|none|The Name of the Output|
|Number|integer(int32)|false|none|The Number of this Output. Use this as ID to switch it on or off.|
|ObisCode|string|false|none|The Obis Code for this Output|

#### Enumerated Values

|Property|Value|
|---|---|
|ActionType|OnOffAction|
|ActionType|AnalogAction|

<h2 id="tocS_PicoChargingData">PicoChargingData</h2>
<!-- backwards compatibility -->
<a id="schemapicochargingdata"></a>
<a id="schema_PicoChargingData"></a>
<a id="tocSpicochargingdata"></a>
<a id="tocspicochargingdata"></a>

```json
{
  "ActiveChargingEnergy": 0,
  "ActiveChargingPower": 0,
  "ConnectionMode": "NetworkToCloudConnectionMode_NoConnection",
  "Duration": 0,
  "LastWarningOrError": "MeterDataloggerEvent",
  "LastWarningOrErrorMessage": "string",
  "LastWarningOrErrorTime": "1970-01-01T00:00:00Z",
  "LoadSheddingState": "MaxCurrent",
  "LoadmanagementGroupName": "string",
  "MaxAllowedChargingCurrent": 0,
  "MaxDynamicCurrent": 0,
  "MaxLoadmanagementGroupCurrent": 0,
  "MaxStationCurrent": 0,
  "MinStationCurrent": 0,
  "State": "Booting",
  "ValueDate": "1970-01-01T00:00:00Z"
}
```

Container class for the pico charging station API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActiveChargingEnergy|number(double)|false|none|The energy used by this active charging (in kWh)|
|ActiveChargingPower|number(double)|false|none|The power of the active charging (in kW)|
|ConnectionMode|string|false|none|The mode how this station is connected to the cloud|
|Duration|integer(int32)|false|none|The duration of this charging in seconds|
|LastWarningOrError|string|false|none|The last warning or error of the station. This message is only shown if the warning or error happend in the last 5 minutes.|
|LastWarningOrErrorMessage|string|false|none|The message of the last warning or error of the station.|
|LastWarningOrErrorTime|string(date-time)|false|none|The time when the LastWarningOrError happend|
|LoadSheddingState|string|false|none|Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A|
|LoadmanagementGroupName|string|false|none|The name of the loadmanagement group. Or string.empty if the station is not in a group|
|MaxAllowedChargingCurrent|integer(int32)|false|none|Max allowed charging current in A|
|MaxDynamicCurrent|integer(int32)|false|none|Max. dynamic current (e.g. set over API or Modbus TCP) of this station or the loadmanagement group of the station if the station is in a group. in A|
|MaxLoadmanagementGroupCurrent|integer(int32)|false|none|Max. current of the loadmanagement group of this station (if there is any) in A|
|MaxStationCurrent|integer(int32)|false|none|Max. current of the station in A|
|MinStationCurrent|integer(int32)|false|none|Min. current of the station in A|
|State|string|false|read-only|The state of the charging station|
|ValueDate|string(date-time)|false|none|The date of this values|

#### Enumerated Values

|Property|Value|
|---|---|
|ConnectionMode|NetworkToCloudConnectionMode_NoConnection|
|ConnectionMode|NetworkToCloudConnectionMode_DirectWiFiConnection|
|ConnectionMode|NetworkToCloudConnectionMode_GPRSConnection|
|ConnectionMode|NetworkToCloudConnectionMode_NBIotConnection|
|ConnectionMode|NetworkToCloudConnectionMode_LteCatM1Connection|
|ConnectionMode|NetworkToCloudConnectionMode_MeshWiFiConnection|
|ConnectionMode|NetworkToCloudConnectionMode_MeshMobileConnection|
|LastWarningOrError|MeterDataloggerEvent|
|LastWarningOrError|MeterRestart|
|LastWarningOrError|PowerDown|
|LastWarningOrError|MissingPhaseL1|
|LastWarningOrError|MissingPhaseL2|
|LastWarningOrError|MissingPhaseL3|
|LastWarningOrError|TamperDetectionCover|
|LastWarningOrError|MagneticFieldDetection|
|LastWarningOrError|ClockAdjusted|
|LastWarningOrError|Overvoltage|
|LastWarningOrError|Undervoltage|
|LastWarningOrError|OvervoltageL1|
|LastWarningOrError|OvervoltageL2|
|LastWarningOrError|OvervoltageL3|
|LastWarningOrError|ChargingTransaction|
|LastWarningOrError|PicoErrorControllerPanic|
|LastWarningOrError|PicoErrorMidServicePanic|
|LastWarningOrError|PicoWarningRcdTriggered|
|LastWarningOrError|PicoWarningCableLockError|
|LastWarningOrError|PicoWarningDiodeFailure|
|LastWarningOrError|PicoWarningOverload|
|LastWarningOrError|PicoWarningHighTemperature|
|LoadSheddingState|MaxCurrent|
|LoadSheddingState|HalfCurrent|
|LoadSheddingState|MinCurrent|
|LoadSheddingState|NoCurrent|
|State|Booting|
|State|ReadyNoCarConnected|
|State|ReadyCarConnected|
|State|StartedWaitForCar|
|State|Charging|
|State|Installation|
|State|Authorize|
|State|Offline|

<h2 id="tocS_PicoChargingHistoryData">PicoChargingHistoryData</h2>
<!-- backwards compatibility -->
<a id="schemapicocharginghistorydata"></a>
<a id="schema_PicoChargingHistoryData"></a>
<a id="tocSpicocharginghistorydata"></a>
<a id="tocspicocharginghistorydata"></a>

```json
{
  "Duration": 0,
  "EnergyUsed": 0,
  "StartTime": "1970-01-01T00:00:00Z"
}
```

Api container for the charging station history

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Duration|integer(int32)|false|none|The duration in seconds|
|EnergyUsed|number(double)|false|none|The energy used (in kWh)|
|StartTime|string(date-time)|false|none|The starttime of the charging (in UTC)|

<h2 id="tocS_PicoLoadmanagementGroupDto">PicoLoadmanagementGroupDto</h2>
<!-- backwards compatibility -->
<a id="schemapicoloadmanagementgroupdto"></a>
<a id="schema_PicoLoadmanagementGroupDto"></a>
<a id="tocSpicoloadmanagementgroupdto"></a>
<a id="tocspicoloadmanagementgroupdto"></a>

```json
{
  "Id": "string",
  "MaxCurrent": 0,
  "Name": "string",
  "NumberOfStations": 0
}
```

DTO for the pico loadmanagement group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|The ID of the loadmanagement group|
|MaxCurrent|number(double)|false|none|The max current of this loadmanagement group|
|Name|string|false|none|The name of the station|
|NumberOfStations|integer(int32)|false|none|The number of assigned stations|

<h2 id="tocS_PicoSettingsDto">PicoSettingsDto</h2>
<!-- backwards compatibility -->
<a id="schemapicosettingsdto"></a>
<a id="schema_PicoSettingsDto"></a>
<a id="tocSpicosettingsdto"></a>
<a id="tocspicosettingsdto"></a>

```json
{
  "AuthenticationType": "None",
  "CarIdDetection": true,
  "DisplayBrightness": "string",
  "DnsName": "string",
  "FixCableLockEnable": true,
  "IdleImageUrl": "string",
  "InternalIp": "string",
  "LoadmanagementGroupId": "string",
  "MaxCurrent": 0,
  "MinCurrent": 0,
  "ModbusTcp": true,
  "Name": "string",
  "SerialNumber": "string"
}
```

DTO for the pico charging station settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthenticationType|string|false|none|The authentication type|
|CarIdDetection|boolean|false|none|Flag if the car id detection is enabled|
|DisplayBrightness|string(byte)|false|none|The Brightness of the LCD Matrix display. 0 = minimum, 255 = maximum|
|DnsName|string|false|none|The DNS name of the pico's internal ip|
|FixCableLockEnable|boolean|false|none|Enable the fix lock of the charging cable|
|IdleImageUrl|string|false|none|The url of the idle image|
|InternalIp|string|false|none|The internal IP address|
|LoadmanagementGroupId|string|false|none|The ID of the loadmanagement group|
|MaxCurrent|integer(int32)|false|none|The max current of this station (in A)|
|MinCurrent|integer(int32)|false|none|The max current of this station (in A)|
|ModbusTcp|boolean|false|none|Flag if ModbusTcp is enabled|
|Name|string|false|none|The name of the station|
|SerialNumber|string|false|none|The Serial number of the station|

#### Enumerated Values

|Property|Value|
|---|---|
|AuthenticationType|None|
|AuthenticationType|Backend|

<h2 id="tocS_RegisterRealtimeApiData">RegisterRealtimeApiData</h2>
<!-- backwards compatibility -->
<a id="schemaregisterrealtimeapidata"></a>
<a id="schema_RegisterRealtimeApiData"></a>
<a id="tocSregisterrealtimeapidata"></a>
<a id="tocsregisterrealtimeapidata"></a>

```json
{
  "ApiUrl": "string",
  "BasicAuthPassword": "string",
  "BasicAuthUsername": "string",
  "Id": "string",
  "MeterId": "string",
  "RegistrationType": "Disabled",
  "SerialNumber": "string"
}
```

Container class for the register realtime API API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ApiUrl|string|false|none|The URL of your endpoint. To this endpoint all the values are send to.|
|BasicAuthPassword|string|false|none|The Password (basic auth) of your endpoint. Leave empty of none.|
|BasicAuthUsername|string|false|none|The Username (basic auth) of your endpoint. Leave empty of none.|
|Id|string|false|none|The ID of the registration|
|MeterId|string|false|none|The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration".|
|RegistrationType|string|false|none|The Type of this registration (per meter, per user, ...)|
|SerialNumber|string|false|none|The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null. <br>            Example: 1 SME 01 63000000 or 6300000|

#### Enumerated Values

|Property|Value|
|---|---|
|RegistrationType|Disabled|
|RegistrationType|SingleMeterRegistration|
|RegistrationType|UserRegistration|

<h2 id="tocS_SmartMeDeviceConfigurationContainer">SmartMeDeviceConfigurationContainer</h2>
<!-- backwards compatibility -->
<a id="schemasmartmedeviceconfigurationcontainer"></a>
<a id="schema_SmartMeDeviceConfigurationContainer"></a>
<a id="tocSsmartmedeviceconfigurationcontainer"></a>
<a id="tocssmartmedeviceconfigurationcontainer"></a>

```json
{
  "DeviceEncryptionKey": "string",
  "DevicePinCode": "string",
  "DnsUpdateState": "NoUpdate",
  "EnableModbusTcp": true,
  "Id": "string",
  "InputConfiguration": [
    {
      "Name": "string",
      "Number": 0,
      "OffText": "string",
      "OnText": "string",
      "Type": "TariffInput"
    }
  ],
  "OutputConfiguration": [
    {
      "DigitalOutputNoConnectionAction": "Nothing",
      "Name": "string",
      "Number": 0,
      "S0PulseValue": "PulseValue1000Kwh",
      "Type": "ImpulseOutputActiveEnergy"
    }
  ],
  "ShowReactiveEnergy": true,
  "SwitchConfiguration": [
    {
      "CanSwitchOff": true,
      "Number": 0
    }
  ],
  "UploadInterval": "UploadInterval_1s"
}
```

API Container class for the meter configuration

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceEncryptionKey|string|false|none|The encryption key used to decrypt messages received from an external meter (used only for the smart-me modules)|
|DevicePinCode|string|false|none|PIN code to enter on a external meter (e.g. for the FNN meters)|
|DnsUpdateState|string|false|none|Configuration of the dynamic DNS service. More information: http://wiki.smart-me.com/index.php/Dynamisches_DNS|
|EnableModbusTcp|boolean|false|none|Enables or disables Modbus TCP (if the meter supports it).|
|Id|string|false|none|The ID of the device|
|InputConfiguration|[[InputConfigurationContainer](#schemainputconfigurationcontainer)]|false|none|The configuration for the intput outputs|
|OutputConfiguration|[[OutputConfigurationContainer](#schemaoutputconfigurationcontainer)]|false|none|The configuration for the external outputs|
|ShowReactiveEnergy|boolean|false|none|Shows the reactive energy values (if the meter supports it).|
|SwitchConfiguration|[[SwitchConfigurationContainer](#schemaswitchconfigurationcontainer)]|false|none|The configuration for the phase switches|
|UploadInterval|string|false|none|Number of seconds the device will upload the data. For smaller values maybe a professional license is needed.|

#### Enumerated Values

|Property|Value|
|---|---|
|DnsUpdateState|NoUpdate|
|DnsUpdateState|DnsUpdatePublicIp|
|DnsUpdateState|DnsUpdateInternalIp|
|UploadInterval|UploadInterval_1s|
|UploadInterval|UploadInterval_5s|
|UploadInterval|UploadInterval_10s|
|UploadInterval|UploadInterval_30s|
|UploadInterval|UploadInterval_60s|
|UploadInterval|UploadInterval_5min|
|UploadInterval|UploadInterval_15min|
|UploadInterval|UploadInterval_30min|
|UploadInterval|UploadInterval_60min|
|UploadInterval|UploadInterval_6h|
|UploadInterval|UploadInterval_12h|
|UploadInterval|UploadInterval_24h|

<h2 id="tocS_SubUserData">SubUserData</h2>
<!-- backwards compatibility -->
<a id="schemasubuserdata"></a>
<a id="schema_SubUserData"></a>
<a id="tocSsubuserdata"></a>
<a id="tocssubuserdata"></a>

```json
{
  "AccessEndDate": "1970-01-01T00:00:00Z",
  "AccessTimeStartDate": "1970-01-01T00:00:00Z",
  "Email": "string",
  "Id": "string",
  "NewPassword": "string",
  "PermissionLevel": "SelectedFolderAndSubfoldersMeters",
  "Username": "string"
}
```

Container data for the sub user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessEndDate|string(date-time)|false|none|The end date. until this date the user has access|
|AccessTimeStartDate|string(date-time)|false|none|The start date. From this date the user has access|
|Email|string|false|none|The Email adress|
|Id|string|false|none|The ID of the user|
|NewPassword|string|false|none|If set this is used a new password|
|PermissionLevel|string|false|none|The permission level of the user|
|Username|string|false|none|The username|

#### Enumerated Values

|Property|Value|
|---|---|
|PermissionLevel|SelectedFolderAndSubfoldersMeters|
|PermissionLevel|SelectedFolderOnly|

<h2 id="tocS_SwitchConfigurationContainer">SwitchConfigurationContainer</h2>
<!-- backwards compatibility -->
<a id="schemaswitchconfigurationcontainer"></a>
<a id="schema_SwitchConfigurationContainer"></a>
<a id="tocSswitchconfigurationcontainer"></a>
<a id="tocsswitchconfigurationcontainer"></a>

```json
{
  "CanSwitchOff": true,
  "Number": 0
}
```

The configuration for a phase switch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanSwitchOff|boolean|false|none|Flag if the switch can be turned off or is always on.|
|Number|integer(int32)|false|none|The number of the phase. (e.g. 1 for Phase L1)|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "ChildUsers": [
    {
      "ChildUsers": [
        {}
      ],
      "Email": "string",
      "Id": 0,
      "IdAsString": "string",
      "IsAdmin": true,
      "Permissions": [
        "string"
      ],
      "Username": "string"
    }
  ],
  "Email": "string",
  "Id": 0,
  "IdAsString": "string",
  "IsAdmin": true,
  "Permissions": [
    "string"
  ],
  "Username": "string"
}
```

Container Class for the Web API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChildUsers|[[User](#schemauser)]|false|none|The Users created by this users.|
|Email|string|false|none|The EMail Address of the User|
|Id|integer(int64)|false|none|The ID of the User|
|IdAsString|string|false|none|The ID of the user as string|
|IsAdmin|boolean|false|none|Flag if this User is an Admin User|
|Permissions|[string]|false|none|Additional Permissions|
|Username|string|false|none|The Username of the User|

<h2 id="tocS_VMeterToActivate">VMeterToActivate</h2>
<!-- backwards compatibility -->
<a id="schemavmetertoactivate"></a>
<a id="schema_VMeterToActivate"></a>
<a id="tocSvmetertoactivate"></a>
<a id="tocsvmetertoactivate"></a>

```json
{
  "SerialNumber": "string"
}
```

Actives a virtual Meter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SerialNumber|string|false|none|The Serialnumber of the Meter to activate.|

<h2 id="tocS_VMeterToDeactivate">VMeterToDeactivate</h2>
<!-- backwards compatibility -->
<a id="schemavmetertodeactivate"></a>
<a id="schema_VMeterToDeactivate"></a>
<a id="tocSvmetertodeactivate"></a>
<a id="tocsvmetertodeactivate"></a>

```json
{
  "ID": "string"
}
```

Deactivates a virtual Meter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ID|string|false|none|The ID of the Virtual meter to deactivate|

<h2 id="tocS_ValueData">ValueData</h2>
<!-- backwards compatibility -->
<a id="schemavaluedata"></a>
<a id="schema_ValueData"></a>
<a id="tocSvaluedata"></a>
<a id="tocsvaluedata"></a>

```json
{
  "Obis": "string",
  "Value": 0
}
```

API Container for a (Device) Value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Obis|string|false|none|The Obis code of this value. <br>            A description you can find here:<br>            http://wiki.smart-me.com/index.php/Obis_codes|
|Value|number(double)|false|none|The Value|

<h2 id="tocS_ValuesData">ValuesData</h2>
<!-- backwards compatibility -->
<a id="schemavaluesdata"></a>
<a id="schema_ValuesData"></a>
<a id="tocSvaluesdata"></a>
<a id="tocsvaluesdata"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "DeviceId": "string",
  "Values": [
    {
      "Obis": "string",
      "Value": 0
    }
  ]
}
```

API Container for a Meter Value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|none|The Date of the Value|
|DeviceId|string|false|none|The ID of the device|
|Values|[[ValueData](#schemavaluedata)]|false|none|All values|

<h2 id="tocS_VirtualTariff">VirtualTariff</h2>
<!-- backwards compatibility -->
<a id="schemavirtualtariff"></a>
<a id="schema_VirtualTariff"></a>
<a id="tocSvirtualtariff"></a>
<a id="tocsvirtualtariff"></a>

```json
{
  "Factor": 0,
  "Id": "string",
  "Name": "string",
  "Type": "Battery",
  "Unit": "string",
  "Value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Factor|number(double)|false|none|Says how many of the active power is used in this tariff. This is calculated from the last meter values.|
|Id|string|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|
|Unit|string|false|none|none|
|Value|number(double)|false|none|The Counter Value of this tariff|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Battery|
|Type|Solar|
|Type|Normal|

<h2 id="tocS_VirtualTariffConsumptionData">VirtualTariffConsumptionData</h2>
<!-- backwards compatibility -->
<a id="schemavirtualtariffconsumptiondata"></a>
<a id="schema_VirtualTariffConsumptionData"></a>
<a id="tocSvirtualtariffconsumptiondata"></a>
<a id="tocsvirtualtariffconsumptiondata"></a>

```json
{
  "Consumption": 0,
  "Currency": "string",
  "Name": "string",
  "Price": 0,
  "TariffType": "Battery"
}
```

Container class for the virtual tariff consumption

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Consumption|number(double)|false|none|The consumption (e.g. kWh) of this tariff|
|Currency|string|false|none|The currency of the price|
|Name|string|false|none|The Name of this virtual tariff|
|Price|number(double)|false|none|The price of the energy in this timerange|
|TariffType|string|false|none|The type of the virtual tariff (e.g. solar)|

#### Enumerated Values

|Property|Value|
|---|---|
|TariffType|Battery|
|TariffType|Solar|
|TariffType|Normal|

<h2 id="tocS_VirtualTariffsOfFolder">VirtualTariffsOfFolder</h2>
<!-- backwards compatibility -->
<a id="schemavirtualtariffsoffolder"></a>
<a id="schema_VirtualTariffsOfFolder"></a>
<a id="tocSvirtualtariffsoffolder"></a>
<a id="tocsvirtualtariffsoffolder"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "FolderId": "string",
  "Name": "string",
  "VirtualTariffs": [
    {
      "Factor": 0,
      "Id": "string",
      "Name": "string",
      "Type": "Battery",
      "Unit": "string",
      "Value": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|read-only|The DateTime (UTC) of this virtual tarfifs|
|FolderId|string|false|read-only|none|
|Name|string|false|read-only|The name of this folder|
|VirtualTariffs|[[VirtualTariff](#schemavirtualtariff)]|false|read-only|none|
