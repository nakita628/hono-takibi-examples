<h1 id="hardware-sentry-truesight-presentation-server-rest-api">Hardware Sentry TrueSight Presentation Server REST API v11.1.00</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Hardware Sentry TrueSight Presentation Server REST API

Base URLs:

* <a href="http://truesight.local">http://truesight.local</a>

* <a href="https://api.apis.guru/tsws/10.0/api/">https://api.apis.guru/tsws/10.0/api/</a> - On this TrueSight Server

* <a href="https://localhost:8043/tsws/10.0/api/">https://localhost:8043/tsws/10.0/api/</a> - TrueSight Presentation Server

Web: <a href="https://community.bmc.com/s/group/0F93n000000PlUtCAK/sentry-software">Sentry on BMC Community</a> 
License: <a href="https://www.bmc.com/content/dam/bmc/corporate/Connector_SDK_License_Agreement.pdf">BMC Connector SDK License Agreement</a>

# Authentication

* API Key (Cookie)
    - Parameter Name: **Cookie**, in: header.

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-actions">Actions</h1>

API operations to interact with the PATROL Agent.

## Triggers a new collect on a specific device.

<a id="opIdcollectNow"></a>

> Code samples

```bash
curl 'https://example.com/hardware/actions/42/collect-now?monitorClass=MS_HW_FAN' \
  -X POST
```

`POST /hardware/actions/{deviceId}/collect-now`

You need to provide the <b>Device ID</b> and <b>Monitor Class</b> parameters to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> of a device.

<h3 id="triggers-a-new-collect-on-a-specific-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|monitorClass|query|string|true|The Monitor Class of the device.|

<h3 id="triggers-a-new-collect-on-a-specific-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActionResponse](#schemaactionresponse)|
|403|Forbidden|Forbidden operation|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Triggers a new discovery on a specific device.

<a id="opIdrediscover"></a>

> Code samples

```bash
curl https://example.com/hardware/actions/42/rediscover \
  -X POST
```

`POST /hardware/actions/{deviceId}/rediscover`

You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

<h3 id="triggers-a-new-discovery-on-a-specific-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|

<h3 id="triggers-a-new-discovery-on-a-specific-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActionResponse](#schemaactionresponse)|
|403|Forbidden|Forbidden operation|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Sends a 'Reinitialize KM' command.

<a id="opIdreinitialize"></a>

> Code samples

```bash
curl https://example.com/hardware/actions/42/reinitialize \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "resetAlertActions": 1,
    "resetAlertAfterNTimes": 1,
    "resetDebugMode": 1,
    "resetDiscoveryAndPollingIntervals": 1,
    "resetJavaSettings": 1,
    "resetOtherAlertSettings": 1,
    "resetRemovedPausedObjectList": 1,
    "resetReportSettings": 1,
    "resetThresholds": 1
  }'
```

`POST /hardware/actions/{deviceId}/reinitialize`

Launches a 'Reinitialize KM' command for the following parameters:<br>- resetDiscoveryAndPollingIntervals<br>- resetAlertAfterNTimes<br>- resetAlertActions<br>- resetOtherA<br>- resetSettings<br>- resetDebugMode<br>- resetRemovedPausedObjectList<br>- resetReportSettings<br>- resetJavaSettings<br>- resetThresholds<br><br>You need to provide the <b>Device ID</b> to identify the device:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of a device.

> Body parameter

```json
{
  "resetAlertActions": 1,
  "resetAlertAfterNTimes": 1,
  "resetDebugMode": 1,
  "resetDiscoveryAndPollingIntervals": 1,
  "resetJavaSettings": 1,
  "resetOtherAlertSettings": 1,
  "resetRemovedPausedObjectList": 1,
  "resetReportSettings": 1,
  "resetThresholds": 1
}
```

<h3 id="sends-a-reinitialize-km-command-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|body|body|[ReinitializeActionConfiguration](#schemareinitializeactionconfiguration)|true|The request body as a JSON payload.|
|» resetAlertActions|body|integer(int32)|false|When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.|
|» resetAlertAfterNTimes|body|integer(int32)|false|When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.|
|» resetDebugMode|body|integer(int32)|false|When set to <em>1</em>, deactivates the debug mode when it was manually enabled.|
|» resetDiscoveryAndPollingIntervals|body|integer(int32)|false|When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).|
|» resetJavaSettings|body|integer(int32)|false|When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.|
|» resetOtherAlertSettings|body|integer(int32)|false|When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.|
|» resetRemovedPausedObjectList|body|integer(int32)|false|When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.|
|» resetReportSettings|body|integer(int32)|false|When set to <em>1</em>, clears the report schedule.|
|» resetThresholds|body|integer(int32)|false|When set to <em>1</em>, resets all thresholds.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» resetAlertActions|0|
|» resetAlertActions|1|
|» resetAlertAfterNTimes|0|
|» resetAlertAfterNTimes|1|
|» resetDebugMode|0|
|» resetDebugMode|1|
|» resetDiscoveryAndPollingIntervals|0|
|» resetDiscoveryAndPollingIntervals|1|
|» resetJavaSettings|0|
|» resetJavaSettings|1|
|» resetOtherAlertSettings|0|
|» resetOtherAlertSettings|1|
|» resetRemovedPausedObjectList|0|
|» resetRemovedPausedObjectList|1|
|» resetReportSettings|0|
|» resetReportSettings|1|
|» resetThresholds|0|
|» resetThresholds|1|

<h3 id="sends-a-reinitialize-km-command-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActionResponse](#schemaactionresponse)|
|403|Forbidden|Forbidden operation|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Removes a specific instance from the monitoring environment.

<a id="opIdremove"></a>

> Code samples

```bash
curl 'https://example.com/hardware/actions/42/remove?monitorClass=MS_HW_FAN&monitorSid=cisco-c240-imc' \
  -X POST
```

`POST /hardware/actions/{deviceId}/remove`

You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the Monitor SID).

<h3 id="removes-a-specific-instance-from-the-monitoring-environment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|monitorClass|query|string|true|The Monitor Class of the device.|
|monitorSid|query|string|true|The Monitor SID of the device.|

<h3 id="removes-a-specific-instance-from-the-monitoring-environment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActionResponse](#schemaactionresponse)|
|403|Forbidden|Forbidden operation|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Resets the Error Count parameter.

<a id="opIdreset"></a>

> Code samples

```bash
curl 'https://example.com/hardware/actions/42/reset-error-count?monitorClass=MS_HW_FAN&monitorSid=cisco-c240-imc' \
  -X POST
```

`POST /hardware/actions/{deviceId}/reset-error-count`

Sets the Error Count parameter to 0.<br><br>You need to provide the <b>Device ID</b>, the <b>Monitor Class</b> and the <b>Monitor SID</b> parameters:<br>- Use the <b>/hardware/devices</b> service in the <b>Device</b> section to retrieve the <b>Device ID</b> of any device.<br>- Use the <b>/hardware/device-monitors/{deviceId}</b> service in the <b>Device</b> section to retrieve the <b>Monitor Class</b> and the <b>Monitor SID</b> for a device.<br><br>(Example:"path":"/MS_HW_MAIN/10025150" where <em>MS_HW_MAIN</em> is the Monitor Class and <em>10025150</em> is the monitorSid).

<h3 id="resets-the-error-count-parameter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|monitorClass|query|string|true|The Monitor Class of the device.|
|monitorSid|query|string|true|The Monitor SID of the device.|

<h3 id="resets-the-error-count-parameter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ActionResponse](#schemaactionresponse)|
|403|Forbidden|Forbidden operation|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-applications">Applications</h1>

API operations to interact with the monitored Applications.

## Gets summarized information about all monitored applications.

<a id="opIdgetApplications"></a>

> Code samples

```bash
curl https://example.com/hardware/applications
```

`GET /hardware/applications`

Lists all the available ApplicationSummary instances.

<h3 id="gets-summarized-information-about-all-monitored-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|
|direction|query|string|false|The sorting order (case insensitive).|
|sort|query|string|false|The column to sort by (case insensitive).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

<h3 id="gets-summarized-information-about-all-monitored-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No applications found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets detailed information for a specific application.

<a id="opIdgetOneApplication"></a>

> Code samples

```bash
curl https://example.com/hardware/applications/0
```

`GET /hardware/applications/{applicationId}`

You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.

<h3 id="gets-detailed-information-for-a-specific-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|applicationId|path|string|true|The ID of the application.|

<h3 id="gets-detailed-information-for-a-specific-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ApplicationSummary](#schemaapplicationsummary)|
|404|Not Found|No applications found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-devices">Devices</h1>

API operations to interact with the monitored Devices.

## Gets the Monitors for a specific device.

<a id="opIdgetDeviceMonitors"></a>

> Code samples

```bash
curl https://example.com/hardware/device-monitors/42
```

`GET /hardware/device-monitors/{deviceId}`

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

<h3 id="gets-the-monitors-for-a-specific-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|

<h3 id="gets-the-monitors-for-a-specific-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|None|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets summarized information about all monitored devices.

<a id="opIdgetDevices"></a>

> Code samples

```bash
curl https://example.com/hardware/devices
```

`GET /hardware/devices`

Lists the available DeviceSummary instances.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

<h3 id="gets-summarized-information-about-all-monitored-devices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|
|direction|query|string|false|The sorting order (case insensitive).|
|sort|query|string|false|The column to sort by (case insensitive).|
|groupId|query|string|false|The ID of the group.|
|applicationId|query|string|false|The ID of the application.|
|serviceId|query|string|false|The ID of the service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

<h3 id="gets-summarized-information-about-all-monitored-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No devices found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets overall information for all devices.

<a id="opIdgetDevicesSummary"></a>

> Code samples

```bash
curl https://example.com/hardware/devices-summary
```

`GET /hardware/devices-summary`

Lists the GlobalSummary instance for all the monitored devices.

<h3 id="gets-overall-information-for-all-devices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalSummary](#schemaglobalsummary)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets detailed information about a specific device.

<a id="opIdgetDevice"></a>

> Code samples

```bash
curl https://example.com/hardware/devices/42
```

`GET /hardware/devices/{deviceId}`

You need to provide a <b>Device ID</b>:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

<h3 id="gets-detailed-information-about-a-specific-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|

<h3 id="gets-detailed-information-about-a-specific-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DeviceSummary](#schemadevicesummary)|
|404|Not Found|No devices found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets detailed information about an Agent.

<a id="opIdgetDeviceAgent"></a>

> Code samples

```bash
curl https://example.com/hardware/devices/42/agent
```

`GET /hardware/devices/{deviceId}/agent`

You need to provide a <b>Device ID</b> to retrieve detailed information about the Agent that Monitors the device:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

<h3 id="gets-detailed-information-about-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|

<h3 id="gets-detailed-information-about-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[DeviceAgent](#schemadeviceagent)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a list of all the devices monitored by an Agent.

<a id="opIdgetAgentDevices"></a>

> Code samples

```bash
curl https://example.com/hardware/devices/42/agent-devices
```

`GET /hardware/devices/{deviceId}/agent-devices`

You need to provide the <b>Device ID</b> of a device to retrieve any other devices monitored by the same Agent:<br>-use the <b>hardware/devices</b> service to get all available device IDs.

<h3 id="gets-a-list-of-all-the-devices-monitored-by-an-agent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|

<h3 id="gets-a-list-of-all-the-devices-monitored-by-an-agent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets data history for a parameter of a specific device over a given period.

<a id="opIdgetDeviceParameterHistory"></a>

> Code samples

```bash
curl 'https://example.com/hardware/devices/42/parameter-history?parameterName=Power%20Consumption&monitorType=_PATROL__MS_HW_REPORT'
```

`GET /hardware/devices/{deviceId}/parameter-history`

You need to provide the <b>Device ID</b>, <b>Parameter Name</b>, <b>Monitor Type</b> and <b>Monitor SID</b>:<br>- use the <b>hardware/devices</b> service to get all available device IDs<br>- use the <b>/hardware/device-monitors/{deviceId}</b> to get the parameter name, the Monitor type and the Monitor SID.<br><br>Finally, define the period for which you wish to retrieve data history.

<h3 id="gets-data-history-for-a-parameter-of-a-specific-device-over-a-given-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|parameterName|query|string|true|The name of the parameter.|
|monitorType|query|string|true|The unique name of the Monitor type.|
|from|query|integer(int64)|false|Beginning of the period (Epoch time, in seconds).|
|to|query|integer(int64)|false|End of the period (Epoch time, in seconds).|
|monitorSid|query|string|false|The Monitor SID (to filter the list of Monitors).|

<h3 id="gets-data-history-for-a-parameter-of-a-specific-device-over-a-given-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the energy usage for a specific device and a given period.

<a id="opIdgetDeviceEnergyUsage"></a>

> Code samples

```bash
curl https://example.com/hardware/energy-usage/42
```

`GET /hardware/energy-usage/{deviceId}`

You need to provide the device ID:<br>- use the <b>hardware/devices</b> service to get all available device IDs.

<h3 id="gets-the-energy-usage-for-a-specific-device-and-a-given-period-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deviceId|path|integer(int32)|true|The ID of the device.|
|rollPeriod|query|string|false|The period for which you wish to retrieve energy usage data.|
|basis|query|string|false|Subdivision of the period for which you wish to retrieve energy usage data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|rollPeriod|ONE_DAY|
|rollPeriod|ONE_WEEK|
|rollPeriod|ONE_MONTH|
|rollPeriod|SIX_MONTHS|
|rollPeriod|ONE_YEAR|
|basis|MONTHLY|
|basis|DAILY|
|basis|HOURLY|

<h3 id="gets-the-energy-usage-for-a-specific-device-and-a-given-period-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets the heating margin values for each monitored device, when available.

<a id="opIdgetHeatingMarginCoverage"></a>

> Code samples

```bash
curl https://example.com/hardware/heating-margin-devices
```

`GET /hardware/heating-margin-devices`

If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

<h3 id="gets-the-heating-margin-values-for-each-monitored-device-when-available-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|covered|query|boolean|false|If set to <em>true</em>, only gets devices whose heating margin information is available.<br>Otherwise, gets any other devices.|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|
|direction|query|string|false|The sorting order (case insensitive).|
|sort|query|string|false|The column to sort by (case insensitive).|
|groupId|query|string|false|The ID of the group.|
|applicationId|query|string|false|The ID of the application.|
|serviceId|query|string|false|The ID of the service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

<h3 id="gets-the-heating-margin-values-for-each-monitored-device-when-available-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No devices found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Searches devices by name, model, manufacturer or serial number.

<a id="opIdsearchDevices"></a>

> Code samples

```bash
curl 'https://example.com/hardware/search-devices?searchTerms=EMC%20Unity'
```

`GET /hardware/search-devices`

Gets the DeviceSummary instances whose name, model, manufacturer or serial number match the specified criteria.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

<h3 id="searches-devices-by-name-model-manufacturer-or-serial-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|searchTerms|query|string|true|Space-separated search criteria.|
|groupId|query|string|false|The ID of the group.|
|applicationId|query|string|false|The ID of the application.|
|serviceId|query|string|false|The ID of the service.|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|

<h3 id="searches-devices-by-name-model-manufacturer-or-serial-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No devices found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-groups">Groups</h1>

API operations to interact with the monitored Groups.

## Gets all group summaries.

<a id="opIdgetGroups"></a>

> Code samples

```bash
curl https://example.com/hardware/groups
```

`GET /hardware/groups`

Lists the available GroupSummary instances.

<h3 id="gets-all-group-summaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|
|direction|query|string|false|The sorting order (case insensitive).|
|sort|query|string|false|The column to sort by (case insensitive).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

<h3 id="gets-all-group-summaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No groups found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets detailed information about a specific group.

<a id="opIdgetOneGroup"></a>

> Code samples

```bash
curl https://example.com/hardware/groups/0
```

`GET /hardware/groups/{groupId}`

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.

<h3 id="gets-detailed-information-about-a-specific-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The ID of the group.|

<h3 id="gets-detailed-information-about-a-specific-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GroupSummary](#schemagroupsummary)|
|404|Not Found|No groups found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Updates the values of the energy footprint parameter for a specific group.

<a id="opIdupdateEnergyCost"></a>

> Code samples

```bash
curl https://example.com/hardware/groups/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "co2Emission": 0.3,
    "energyCost": 0.3,
    "groupNameFilter": "Group [0-9]+"
  }'
```

`PUT /hardware/groups/{groupId}`

You need to provide a <b>Device ID</b>:<br>- use the <b>hardware/groups</b> service to get all available group ID.<br><br>If the ID is <em>"global"</em>, then the group being updated is the GlobalSummary.

> Body parameter

```json
{
  "co2Emission": 0.3,
  "energyCost": 0.3,
  "groupNameFilter": "Group [0-9]+"
}
```

<h3 id="updates-the-values-of-the-energy-footprint-parameter-for-a-specific-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|path|string|true|The ID of the group.|
|body|body|[GroupConfiguration](#schemagroupconfiguration)|false|The values you wish to assign.|
|» co2Emission|body|number(double)|false|Updates the CO<sub>2</sub> emission (unit: kg/kWh).|
|» energyCost|body|number(double)|false|Updates the electricity rate (unit: $/kWh).|
|» groupNameFilter|body|string|false|Updates the regular expression used to filter the groups for which the power consumption should be reported.|

<h3 id="updates-the-values-of-the-energy-footprint-parameter-for-a-specific-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[GlobalSummary](#schemaglobalsummary)|
|404|Not Found|No settings or groups found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-historical-data">Historical Data</h1>

API operations to get historical data.

## Gets historical data for a specific group, application or service.

<a id="opIdgetHistory"></a>

> Code samples

```bash
curl https://example.com/hardware/history
```

`GET /hardware/history`

Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

<h3 id="gets-historical-data-for-a-specific-group-application-or-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupId|query|string|false|The ID of the group.|
|applicationId|query|string|false|The ID of the application.|
|serviceId|query|string|false|The ID of the service.|
|from|query|integer(int64)|false|Beginning of the period (Epoch time, in seconds).|
|to|query|integer(int64)|false|End of the period (Epoch time, in seconds).|

<h3 id="gets-historical-data-for-a-specific-group-application-or-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="hardware-sentry-truesight-presentation-server-rest-api-services">Services</h1>

API operations to interact with the monitored Services.

## Gets summarized information about all monitored services.

<a id="opIdgetServices"></a>

> Code samples

```bash
curl https://example.com/hardware/services
```

`GET /hardware/services`

Lists the available ServiceSummary instances.

<h3 id="gets-summarized-information-about-all-monitored-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string(int32)|false|The page number to retrieve (first page is 0).|
|limit|query|integer(int32)|false|The maximum number of entries per page.|
|direction|query|string|false|The sorting order (case insensitive).|
|sort|query|string|false|The column to sort by (case insensitive).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|

<h3 id="gets-summarized-information-about-all-monitored-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ResultPage](#schemaresultpage)|
|404|Not Found|No services found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Gets detailed information about a specific service.

<a id="opIdgetOneService"></a>

> Code samples

```bash
curl https://example.com/hardware/services/0
```

`GET /hardware/services/{serviceId}`

You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.

<h3 id="gets-detailed-information-about-a-specific-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceId|path|string|true|The ID of the service.|

<h3 id="gets-detailed-information-about-a-specific-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful operation|[ServiceSummary](#schemaservicesummary)|
|404|Not Found|No services found|[ErrorResponse](#schemaerrorresponse)|
|500|Internal Server Error|Unexpected error|[ErrorResponse](#schemaerrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ActionResponse">ActionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaactionresponse"></a>
<a id="schema_ActionResponse"></a>
<a id="tocSactionresponse"></a>
<a id="tocsactionresponse"></a>

```json
{
  "pslOutput": "!!!SUCCESS!!!"
}
```

The object encapsulating the output of an operation affecting the PATROL Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pslOutput|string|false|none|The output of the underlying PSL operation.|

<h2 id="tocS_ApplicationSummary">ApplicationSummary</h2>
<!-- backwards compatibility -->
<a id="schemaapplicationsummary"></a>
<a id="schema_ApplicationSummary"></a>
<a id="tocSapplicationsummary"></a>
<a id="tocsapplicationsummary"></a>

```json
{
  "costUnit": "string",
  "deviceSummaries": [
    {
      "agentId": 42,
      "agentName": "name.domain",
      "ambientTemperature": 0,
      "collectTime": "string",
      "deviceTSMOKey": "2+501040 462",
      "deviceUrl": "#/hardware-sentry/devices/42/details",
      "heatingMargin": 0,
      "heatingMarginUnit": "Celsius degrees",
      "id": 42,
      "name": "string",
      "powerConsumption": 0,
      "powerConsumptionUnit": "string",
      "productVersion": "string",
      "serverId": 42,
      "serverName": "name.domain",
      "sid": "cisco-c240-imc",
      "type": "DEFAULT",
      "updateTimestamp": 0
    }
  ],
  "emittedCo2Unit": "string",
  "energyConsumptionUnit": "string",
  "heatingMargin": 0,
  "heatingMarginCoverage": 0,
  "heatingMarginDeviceName": "string",
  "heatingMarginDeviceUrl": "string",
  "heatingMarginUnit": "string",
  "historyParentIdKey": "string",
  "id": "42",
  "name": "string",
  "numberOfDevices": 0,
  "oneDayConfidence": 0,
  "oneDayCost": 0,
  "oneDayEmittedCo2": 0,
  "oneDayEnergyConsumption": 0,
  "oneMonthConfidence": 0,
  "oneMonthCost": 0,
  "oneMonthEmittedCo2": 0,
  "oneMonthEnergyConsumption": 0,
  "oneYearConfidence": 0,
  "oneYearCost": 0,
  "oneYearEmittedCo2": 0,
  "oneYearEnergyConsumption": 0,
  "totalPowerConsumption": 0,
  "totalPowerConsumptionUnit": "string",
  "updateTimestamp": 0,
  "url": "#/green-it/applications/349676/details"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costUnit|string|false|none|The currency in which all energy cost values are being expressed.|
|deviceSummaries|[[DeviceSummary](#schemadevicesummary)]|false|none|The list of devices attached to the application.<br><u>Note</u>: when using the <b>Applications</b> service, this list is always empty. It is populated only when using the <b>Application Details</b> service.|
|emittedCo2Unit|string|false|none|The unit in which all CO<sub>2</sub> emission values are being expressed.|
|energyConsumptionUnit|string|false|none|The unit in which all energy consumption values are being expressed.|
|heatingMargin|number(double)|false|none|The lowest heating margin among the heating margins of the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginCoverage|number(double)|false|none|The percentage of devices attached to the application, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceName|string|false|none|The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceUrl|string|false|none|The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginUnit|string|false|none|The unit in which the heating margin of the application is being expressed.|
|historyParentIdKey|string|false|none|The name of the key used to identify the application in the history table.|
|id|string|false|none|The ID of the application.|
|name|string|false|none|The name of the application.|
|numberOfDevices|integer(int32)|false|none|The number of devices attached to the application.|
|oneDayConfidence|number(double)|false|none|The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneDayCost|number(double)|false|none|The daily cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one day.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the application during one day.|
|oneMonthConfidence|number(double)|false|none|The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneMonthCost|number(double)|false|none|The monthly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one month.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the application during one month.|
|oneYearConfidence|number(double)|false|none|The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneYearCost|number(double)|false|none|The yearly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the application in one year.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the application during one year.|
|totalPowerConsumption|number(double)|false|none|The total power consumption of the devices attached to the application.|
|totalPowerConsumptionUnit|string|false|none|The unit in which the total power consumption of the devices attached to the application is being expressed.|
|updateTimestamp|integer(int64)|false|none|The data collection time (as an Epoch time, in seconds).|
|url|string|false|none|The link to the application details.|

<h2 id="tocS_DeviceAgent">DeviceAgent</h2>
<!-- backwards compatibility -->
<a id="schemadeviceagent"></a>
<a id="schema_DeviceAgent"></a>
<a id="tocSdeviceagent"></a>
<a id="tocsdeviceagent"></a>

```json
{
  "connectionStatus": "Connection Active",
  "id": "9",
  "name": "name.domain",
  "os": "Linux",
  "port": "3181",
  "url": "#/devices/42/2/monitorTab",
  "version": "V11.3.02i"
}
```

Contains all information regarding a specific PATROL Agent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connectionStatus|string|false|none|The status of the PATROL Agent's connection.|
|id|string|false|none|The ID of the PATROL Agent.|
|name|string|false|none|The FQDN of the PATROL Agent.|
|os|string|false|none|The operating system the PATROL Agent is running on.|
|port|string|false|none|The port the PATROL Agent is running on.|
|url|string|false|none|The link to the 'Monitors' tab of the PATROL Agent.|
|version|string|false|none|The version of the PATROL Agent.|

<h2 id="tocS_DeviceSummary">DeviceSummary</h2>
<!-- backwards compatibility -->
<a id="schemadevicesummary"></a>
<a id="schema_DeviceSummary"></a>
<a id="tocSdevicesummary"></a>
<a id="tocsdevicesummary"></a>

```json
{
  "agentId": 42,
  "agentName": "name.domain",
  "ambientTemperature": 0,
  "collectTime": "string",
  "deviceTSMOKey": "2+501040 462",
  "deviceUrl": "#/hardware-sentry/devices/42/details",
  "heatingMargin": 0,
  "heatingMarginUnit": "Celsius degrees",
  "id": 42,
  "name": "string",
  "powerConsumption": 0,
  "powerConsumptionUnit": "string",
  "productVersion": "string",
  "serverId": 42,
  "serverName": "name.domain",
  "sid": "cisco-c240-imc",
  "type": "DEFAULT",
  "updateTimestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agentId|integer(int32)|false|none|The ID of the PATROL Agent the device is attached to.|
|agentName|string|false|none|The name of the PATROL Agent the device is attached to.|
|ambientTemperature|number(double)|false|none|The ambient temperature of the device.|
|collectTime|string|false|none|The collection time of the heating margin (as an Epoch time, in seconds).<br><u>Note</u>:This field will only be present if a value could be found.|
|deviceTSMOKey|string|false|none|The TSMOKey of the device.|
|deviceUrl|string|false|none|The link to the device details.|
|heatingMargin|number(double)|false|none|The heating margin of the device.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginUnit|string|false|none|The unit in which the heating margin of the device is being expressed.<br><u>Note</u>:This field will only be present if a value could be found.|
|id|integer(int32)|false|none|The ID of the device.|
|name|string|false|none|The ID of the device.|
|powerConsumption|number(double)|false|none|The power consumption of the device.|
|powerConsumptionUnit|string|false|none|The unit in which the power consumption of the device is being expressed.|
|productVersion|string|false|none|The Hardware Sentry KM version of the device's Monitor.<br><u>Note</u>:This field will only be present if a value could be found.|
|serverId|integer(int32)|false|none|The ID of the server the device is attached to.|
|serverName|string|false|none|The name of the server the device is attached to.|
|sid|string|false|none|The SID of the device.|
|type|string|false|none|none|
|updateTimestamp|integer(int64)|false|none|The data collection time (as an Epoch time, in seconds).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DEFAULT|
|type|ESX_HOST|
|type|VIRTUAL_MACHINE|
|type|VIRTUAL_CENTER|
|type|XEN_HOST|
|type|XEN_MASTER_SERVER|
|type|XEN_VIRTUAL_MACHINE|
|type|XENAPP_CONTROLLER|
|type|XENAPP_MACHINE|
|type|VBLOCK_ESX|
|type|VBLOCK_VIRTUAL_MACHINE|
|type|VBLOCK_SWITCH|
|type|VBLOCK_STORAGE|
|type|VBLOCK_CHASSIS|
|type|VBLOCK_BLADE|
|type|VBLOCK_ENV|
|type|AIX_BOX|
|type|AIX_HARD_PARTITION|
|type|AIX_POOL|
|type|AIX_LPAR|
|type|AIX_WPAR|
|type|SOL_SYSTEM|
|type|SOL_FRAME|
|type|SOL_ZONE|
|type|SOL_LDOM|
|type|REDHAT_KVM_HOST|
|type|REDHAT_KVM_GUEST_INSTANCE|
|type|REDHAT_XEN_HOST|
|type|REDHAT_VM|
|type|HP_SYSTEM|
|type|HP_NPAR|
|type|HP_VPAR|
|type|HP_INT_VM|
|type|HP_INT_HOST|
|type|MS_HOST|
|type|MS_VM|
|type|AZURE_VIRTUALMACHINE|
|type|AMAZON_EC2|
|type|OS400_HOST|
|type|DOCKER_HOST|
|type|DOCKER_NODE|
|type|DOCKER_CONTAINER|
|type|ROUTER|
|type|HUB|
|type|PRINTER|
|type|REPEATER|
|type|WORKSTATION|
|type|NTSERVER|
|type|PRINETSERVER|
|type|RMONPROBE|
|type|WEBSERVER|
|type|DBSERVER|
|type|MAILSERVER|
|type|FIREWALL|
|type|OTHERS|
|type|APPSERVER|
|type|DEDICATEDAGENT|
|type|REMOTEAGENT|
|type|LAYER_3_SWITCH|
|type|CENTRAL_OFFICE_SWITCH|
|type|ACCESS_SERVER|
|type|I_O|
|type|WEB_CACHING|
|type|MANAGEMENT|
|type|BLOCK_SERVER|
|type|FILE_SERVER|
|type|MOBILE_USER_DEVICE|
|type|BRIDGE_OR_EXTENDER|
|type|GATEWAY|
|type|LOADBALANCER|
|type|MAINFRAME|
|type|SANSWITCH|
|type|SANHUB|
|type|SANBRIDGE|
|type|SANROUTER|
|type|SANDIRECTOR|
|type|RAIDSTORAGEDEVICE|
|type|VIRTUAL_TAPE_LIBRARY|
|type|JBOD|
|type|STORAGESUBSYSTEM|
|type|STORAGE_VIRTUALIZER|
|type|MEDIA_LIBRARY|
|type|EXTENDERNODE|
|type|NAS_HEAD|
|type|SELFCONTAINED_NAS|
|type|UPS|
|type|IP_PHONE|
|type|MANAGEMENT_CONTROLLER|
|type|CHASSIS_MANAGER|
|type|HOSTBASED_RAID_CONTROLLER|
|type|STORAGE_DEVICE_ENCLOSURE|
|type|DESKTOP|
|type|LAPTOP|
|type|VIRTUAL_LIBRARY_SYSTEM|
|type|BLADE_SYSTEM|
|type|BLADE_SERVER|
|type|VPN_CONCENTRATOR|
|type|PROXY_SERVER|
|type|LAYER_3_PROXY_SERVER|
|type|WAN_ACCELERATOR|
|type|SAN_PROCESSOR|
|type|VIRTUAL_SERVER_RHL|
|type|VIRTUAL_SERVER_WINDOWS|
|type|ESXi|
|type|VIRTUAL_SERVER|
|type|HYPERVISOR|
|type|AWS_AMI|
|type|MS_AZURE|
|type|UNKNOWN|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "code": "GENERAL_ERROR",
  "date": "1970-01-01T00:00:00Z",
  "message": "No data found"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error's business identifier.|
|date|string(date-time)|false|none|The timestamp of the error.|
|message|string|false|none|The error message.|

<h2 id="tocS_GlobalSummary">GlobalSummary</h2>
<!-- backwards compatibility -->
<a id="schemaglobalsummary"></a>
<a id="schema_GlobalSummary"></a>
<a id="tocSglobalsummary"></a>
<a id="tocsglobalsummary"></a>

```json
{
  "co2Emission": 0,
  "co2EmissionUnit": "string",
  "editable": true,
  "energyCost": 0,
  "energyCostUnit": "string",
  "groupNameFilter": "Group [0-9]+",
  "heatingMargin": 0,
  "heatingMarginCoverage": 0,
  "heatingMarginDeviceName": "string",
  "heatingMarginDeviceUrl": "#/hardware-sentry/devices/3/details",
  "heatingMarginUnit": "string",
  "id": "string",
  "totalPowerConsumption": 0,
  "totalPowerConsumptionUnit": "string",
  "updateTimestamp": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|co2Emission|number(double)|false|none|The CO<sub>2</sub> emissions for all devices. This value can be updated by users with sufficient permissions.|
|co2EmissionUnit|string|false|none|The unit in which the CO<sub>2</sub> emission is being expressed.|
|editable|boolean|false|none|If <em>true</em>, indicates that you do not have sufficient rights to update the global settings. However, you may still have sufficient rights to update a specific group's setting.|
|energyCost|number(double)|false|none|The electricity rate for all devices. This value can be updated by users with sufficient permissions.|
|energyCostUnit|string|false|none|The unit in which the electricity rate is being expressed.|
|groupNameFilter|string|false|none|Regular expression used to filter the groups for which the power consumption will be reported.|
|heatingMargin|number(double)|false|none|The lowest heating margin among the heating margins of all the devices.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginCoverage|number(double)|false|none|The percentage of devices whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceName|string|false|none|The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceUrl|string|false|none|The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginUnit|string|false|none|The unit in which the heating margin is being expressed.|
|id|string|false|none|The ID of the global summary (this ID will always be "global").|
|totalPowerConsumption|number(double)|false|none|The total power consumption of all the devices.|
|totalPowerConsumptionUnit|string|false|none|The unit in which the total power consumption is being expressed.|
|updateTimestamp|integer(int64)|false|none|The data collection time (as an Epoch time, in seconds).|

<h2 id="tocS_GroupConfiguration">GroupConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemagroupconfiguration"></a>
<a id="schema_GroupConfiguration"></a>
<a id="tocSgroupconfiguration"></a>
<a id="tocsgroupconfiguration"></a>

```json
{
  "co2Emission": 0.3,
  "energyCost": 0.3,
  "groupNameFilter": "Group [0-9]+"
}
```

The deserialized form of the <b>Energy Footprint Update</b> service's request payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|co2Emission|number(double)|false|none|Updates the CO<sub>2</sub> emission (unit: kg/kWh).|
|energyCost|number(double)|false|none|Updates the electricity rate (unit: $/kWh).|
|groupNameFilter|string|false|none|Updates the regular expression used to filter the groups for which the power consumption should be reported.|

<h2 id="tocS_GroupSummary">GroupSummary</h2>
<!-- backwards compatibility -->
<a id="schemagroupsummary"></a>
<a id="schema_GroupSummary"></a>
<a id="tocSgroupsummary"></a>
<a id="tocsgroupsummary"></a>

```json
{
  "ambientTemperature": 0,
  "ambientTemperatureUnit": "string",
  "co2Emission": 0,
  "co2EmissionUnit": "string",
  "costUnit": "string",
  "deviceSummaries": [
    {
      "agentId": 42,
      "agentName": "name.domain",
      "ambientTemperature": 0,
      "collectTime": "string",
      "deviceTSMOKey": "2+501040 462",
      "deviceUrl": "#/hardware-sentry/devices/42/details",
      "heatingMargin": 0,
      "heatingMarginUnit": "Celsius degrees",
      "id": 42,
      "name": "string",
      "powerConsumption": 0,
      "powerConsumptionUnit": "string",
      "productVersion": "string",
      "serverId": 42,
      "serverName": "name.domain",
      "sid": "cisco-c240-imc",
      "type": "DEFAULT",
      "updateTimestamp": 0
    }
  ],
  "editable": true,
  "emittedCo2Unit": "string",
  "energyConsumptionUnit": "string",
  "energyCost": 0,
  "energyCostUnit": "string",
  "heatingMargin": 0,
  "heatingMarginCoverage": 0,
  "heatingMarginDeviceName": "string",
  "heatingMarginDeviceUrl": "string",
  "heatingMarginUnit": "string",
  "historyParentIdKey": "string",
  "id": "42",
  "name": "string",
  "numberOfDevices": 0,
  "oneDayConfidence": 0,
  "oneDayCost": 0,
  "oneDayEmittedCo2": 0,
  "oneDayEnergyConsumption": 0,
  "oneMonthConfidence": 0,
  "oneMonthCost": 0,
  "oneMonthEmittedCo2": 0,
  "oneMonthEnergyConsumption": 0,
  "oneYearConfidence": 0,
  "oneYearCost": 0,
  "oneYearEmittedCo2": 0,
  "oneYearEnergyConsumption": 0,
  "serverId": 42,
  "totalPowerConsumption": 0,
  "totalPowerConsumptionUnit": "string",
  "updateTimestamp": 0,
  "url": "#/green-it/groups/13/details"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ambientTemperature|number(double)|false|none|The average ambient temperature based on the ambient temperatures of the devices attached to the group.|
|ambientTemperatureUnit|string|false|none|The unit in which the ambient temperature value is being expressed.|
|co2Emission|number(double)|false|none|The CO<sub>2</sub> emissions for all devices attached to the group. This value can be updated by users with sufficient permissions.|
|co2EmissionUnit|string|false|none|The unit in which the user-defined CO<sub>2</sub> emission value is being expressed.|
|costUnit|string|false|none|The currency in which all energy cost values are being expressed.|
|deviceSummaries|[[DeviceSummary](#schemadevicesummary)]|false|none|none|
|editable|boolean|false|none|The name of the key used to identify the group in the history table.|
|emittedCo2Unit|string|false|none|The unit in which all emitted CO<sub>2</sub> quantities are being expressed.|
|energyConsumptionUnit|string|false|none|The unit in which all energy consumption values are being expressed.|
|energyCost|number(double)|false|none|The electricity rate for all devices attached to the group. This value can be updated by users with sufficient permissions.|
|energyCostUnit|string|false|none|The unit in which th euser-defined electricity rate value is being expressed.|
|heatingMargin|number(double)|false|none|The lowest heating margin among the heating margins of the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginCoverage|number(double)|false|none|The percentage of devices attached to the group, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceName|string|false|none|The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceUrl|string|false|none|The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginUnit|string|false|none|The unit in which the heating margin of the group is being expressed.|
|historyParentIdKey|string|false|none|none|
|id|string|false|none|The ID of the group.|
|name|string|false|none|The name of the group.|
|numberOfDevices|integer(int32)|false|none|The number of devices attached to the group.|
|oneDayConfidence|number(double)|false|none|The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneDayCost|number(double)|false|none|The daily cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one day.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the group during one day.|
|oneMonthConfidence|number(double)|false|none|The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneMonthCost|number(double)|false|none|The monthly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one month.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the group during one month.|
|oneYearConfidence|number(double)|false|none|The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneYearCost|number(double)|false|none|The yearly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the group in one year.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the group during one year.|
|serverId|integer(int32)|false|none|The ID of the server the group is attached to.|
|totalPowerConsumption|number(double)|false|none|The total power consumption of the devices attached to the group.|
|totalPowerConsumptionUnit|string|false|none|The unit in which the total power consumption of the devices attached to the group is being expressed.|
|updateTimestamp|integer(int64)|false|none|The data collection time (as an Epoch time, in seconds).|
|url|string|false|none|The link to the group details.|

<h2 id="tocS_ReinitializeActionConfiguration">ReinitializeActionConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemareinitializeactionconfiguration"></a>
<a id="schema_ReinitializeActionConfiguration"></a>
<a id="tocSreinitializeactionconfiguration"></a>
<a id="tocsreinitializeactionconfiguration"></a>

```json
{
  "resetAlertActions": 1,
  "resetAlertAfterNTimes": 1,
  "resetDebugMode": 1,
  "resetDiscoveryAndPollingIntervals": 1,
  "resetJavaSettings": 1,
  "resetOtherAlertSettings": 1,
  "resetRemovedPausedObjectList": 1,
  "resetReportSettings": 1,
  "resetThresholds": 1
}
```

The deserialized form of the <b>Reinitialize</b> service's request payload.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resetAlertActions|integer(int32)|false|none|When set to <em>1</em>, removes all manually set Alert Actions and reverts to basic default actions i.e. trigger a PATROL event and annotate a parameter graph.|
|resetAlertAfterNTimes|integer(int32)|false|none|When set to <em>1</em>, resets the number of times thresholds can be breached before triggering an alert to their default values (1 time) for numeric, discrete, connector status and present parameters.|
|resetDebugMode|integer(int32)|false|none|When set to <em>1</em>, deactivates the debug mode when it was manually enabled.|
|resetDiscoveryAndPollingIntervals|integer(int32)|false|none|When set to <em>1</em>, removes all user-defined frequencies for discovery and polling processes to their default values (respectively 1 hour and 2 minutes).|
|resetJavaSettings|integer(int32)|false|none|When set to <em>1</em>, removes the custom Java settings (path and credentials). The KM will try to automatically find a suitable JRE.|
|resetOtherAlertSettings|integer(int32)|false|none|When set to <em>1</em>, reverts any manually performed configuration changes to the default Hardware Sentry values.|
|resetRemovedPausedObjectList|integer(int32)|false|none|When set to <em>1</em>, reactivates the monitoring of all paused or removed objects.|
|resetReportSettings|integer(int32)|false|none|When set to <em>1</em>, clears the report schedule.|
|resetThresholds|integer(int32)|false|none|When set to <em>1</em>, resets all thresholds.|

#### Enumerated Values

|Property|Value|
|---|---|
|resetAlertActions|0|
|resetAlertActions|1|
|resetAlertAfterNTimes|0|
|resetAlertAfterNTimes|1|
|resetDebugMode|0|
|resetDebugMode|1|
|resetDiscoveryAndPollingIntervals|0|
|resetDiscoveryAndPollingIntervals|1|
|resetJavaSettings|0|
|resetJavaSettings|1|
|resetOtherAlertSettings|0|
|resetOtherAlertSettings|1|
|resetRemovedPausedObjectList|0|
|resetRemovedPausedObjectList|1|
|resetReportSettings|0|
|resetReportSettings|1|
|resetThresholds|0|
|resetThresholds|1|

<h2 id="tocS_ResultPage">ResultPage</h2>
<!-- backwards compatibility -->
<a id="schemaresultpage"></a>
<a id="schema_ResultPage"></a>
<a id="tocSresultpage"></a>
<a id="tocsresultpage"></a>

```json
{
  "items": [
    {}
  ],
  "restrictedRights": false,
  "total": 0
}
```

Encapsulates a list of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|false|none|The list of currently accessible results.|
|restrictedRights|boolean|false|none|If <em>true</em>, indicates that you are denied access to part of, or all the results.|
|total|integer(int64)|false|none|The total number of accessible results, including the results not listed in <em>items</em>.|

<h2 id="tocS_ServiceSummary">ServiceSummary</h2>
<!-- backwards compatibility -->
<a id="schemaservicesummary"></a>
<a id="schema_ServiceSummary"></a>
<a id="tocSservicesummary"></a>
<a id="tocsservicesummary"></a>

```json
{
  "costUnit": "string",
  "deviceSummaries": [
    {
      "agentId": 42,
      "agentName": "name.domain",
      "ambientTemperature": 0,
      "collectTime": "string",
      "deviceTSMOKey": "2+501040 462",
      "deviceUrl": "#/hardware-sentry/devices/42/details",
      "heatingMargin": 0,
      "heatingMarginUnit": "Celsius degrees",
      "id": 42,
      "name": "string",
      "powerConsumption": 0,
      "powerConsumptionUnit": "string",
      "productVersion": "string",
      "serverId": 42,
      "serverName": "name.domain",
      "sid": "cisco-c240-imc",
      "type": "DEFAULT",
      "updateTimestamp": 0
    }
  ],
  "emittedCo2Unit": "string",
  "energyConsumptionUnit": "string",
  "heatingMargin": 0,
  "heatingMarginCoverage": 0,
  "heatingMarginDeviceName": "string",
  "heatingMarginDeviceUrl": "string",
  "heatingMarginUnit": "string",
  "historyParentIdKey": "string",
  "id": "2+mc.pncell_dev-tsim.internal.sentrysoftware.net.1f485a2f.0",
  "name": "string",
  "numberOfDevices": 0,
  "oneDayConfidence": 0,
  "oneDayCost": 0,
  "oneDayEmittedCo2": 0,
  "oneDayEnergyConsumption": 0,
  "oneMonthConfidence": 0,
  "oneMonthCost": 0,
  "oneMonthEmittedCo2": 0,
  "oneMonthEnergyConsumption": 0,
  "oneYearConfidence": 0,
  "oneYearCost": 0,
  "oneYearEmittedCo2": 0,
  "oneYearEnergyConsumption": 0,
  "providerId": "42",
  "totalPowerConsumption": 0,
  "totalPowerConsumptionUnit": "string",
  "updateTimestamp": 0,
  "url": "#/green-it/services/2+mc.pncell_dev-tsim.internal.sentrysoftware.net.1f485a2f.0/details"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|costUnit|string|false|none|The currency in which all energy cost values are being expressed.|
|deviceSummaries|[[DeviceSummary](#schemadevicesummary)]|false|none|The list of devices attached to the service.<br><u>Note</u>: when using the <b>Services</b> service, this list is always empty. It is populated only when using the <b>Service Details</b> service.|
|emittedCo2Unit|string|false|none|The unit in which all CO<sub>2</sub> emission values are being expressed.|
|energyConsumptionUnit|string|false|none|The unit in which all energy consumption values are being expressed.|
|heatingMargin|number(double)|false|none|The lowest heating margin among the heating margins of the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginCoverage|number(double)|false|none|The percentage of devices attached to the service, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceName|string|false|none|The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginDeviceUrl|string|false|none|The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.|
|heatingMarginUnit|string|false|none|The unit in which the heating margin of the service is being expressed.|
|historyParentIdKey|string|false|none|The name of the key used to identify the service in the history table.|
|id|string|false|none|The ID of the service.|
|name|string|false|none|The name of the service.|
|numberOfDevices|integer(int32)|false|none|The number of devices attached to the service.|
|oneDayConfidence|number(double)|false|none|The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneDayCost|number(double)|false|none|The daily cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one day.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneDayEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the service during one day.|
|oneMonthConfidence|number(double)|false|none|The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneMonthCost|number(double)|false|none|The monthly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the service during one month.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneMonthEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the service during one month.|
|oneYearConfidence|number(double)|false|none|The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.|
|oneYearCost|number(double)|false|none|The yearly cost of the energy consumed by the devices attached to the service.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEmittedCo2|number(double)|false|none|The quantity of CO<sub>2</sub> emitted by the devices attached to the service in one year.<br><u>Note</u>:This field will only be present if a value could be computed.|
|oneYearEnergyConsumption|number(double)|false|none|The quantity of energy consumed by the devices attached to the service during one year.|
|providerId|string|false|none|The ID of the server providing the service.|
|totalPowerConsumption|number(double)|false|none|The total power consumption of the devices attached to the service.|
|totalPowerConsumptionUnit|string|false|none|The unit in which the total power consumption of the devices attached to the service is being expressed.|
|updateTimestamp|integer(int64)|false|none|The data collection time (as an Epoch time, in seconds).|
|url|string|false|none|The link to the service details.|
