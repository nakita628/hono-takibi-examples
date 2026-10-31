<h1 id="amazon-location-service">Amazon Location Service v2020-11-19</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"

Base URLs:

* <a href="http://geo.us-east-1.amazonaws.com">http://geo.us-east-1.amazonaws.com</a> - The Amazon Location Service multi-region endpoint

* <a href="https://geo.us-east-1.amazonaws.com">https://geo.us-east-1.amazonaws.com</a> - The Amazon Location Service multi-region endpoint

* <a href="http://geo.cn-north-1.amazonaws.com.cn">http://geo.cn-north-1.amazonaws.com.cn</a> - The Amazon Location Service endpoint for China (Beijing) and China (Ningxia)

* <a href="https://geo.cn-north-1.amazonaws.com.cn">https://geo.cn-north-1.amazonaws.com.cn</a> - The Amazon Location Service endpoint for China (Beijing) and China (Ningxia)

<a href="https://aws.amazon.com/service-terms/">Terms of service</a>
Email: <a href="mailto:mike.ralphson@gmail.com">Mike Ralphson</a> 
Web: <a href="https://github.com/mermade/aws2openapi">Mike Ralphson</a> 
License: <a href="http://www.apache.org/licenses/">Apache 2.0 License</a>

<a href="https://docs.aws.amazon.com/geo/">Amazon Web Services documentation</a>

# Authentication

* API Key (hmac)
    - Parameter Name: **Authorization**, in: header. Amazon Signature authorization v4

<h1 id="amazon-location-service-default">Default</h1>

## AssociateTrackerConsumer

<a id="opIdAssociateTrackerConsumer"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "ConsumerArn": "string"
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/consumers`

<p>Creates an association between a geofence collection and a tracker resource. This allows the tracker resource to communicate location data to the linked geofence collection. </p> <p>You can associate up to five geofence collections to each tracker resource.</p> <note> <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p> </note>

> Body parameter

```json
{
  "ConsumerArn": "string"
}
```

<h3 id="associatetrackerconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource to be associated with a geofence collection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» ConsumerArn|body|string|true|<p>The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all Amazon Web Services.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

> 486 Response

```json
null
```

<h3 id="associatetrackerconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssociateTrackerConsumerResponse](#schemaassociatetrackerconsumerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|486|486|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteDevicePositionHistory

<a id="opIdBatchDeleteDevicePositionHistory"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/delete-positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceIds": [
      "string"
    ]
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/delete-positions`

Deletes the position history of one or more devices from a tracker resource.

> Body parameter

```json
{
  "DeviceIds": [
    "string"
  ]
}
```

<h3 id="batchdeletedevicepositionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource to delete the device position history from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceIds|body|[[Id](#schemaid)]|true|<p>Devices whose position history you want to delete.</p> <ul> <li> <p>For example, for two devices: <code>“DeviceIds” : [DeviceId1,DeviceId2]</code> </p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "Errors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchdeletedevicepositionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteDevicePositionHistoryResponse](#schemabatchdeletedevicepositionhistoryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchDeleteGeofence

<a id="opIdBatchDeleteGeofence"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/delete-geofences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "GeofenceIds": [
      "string"
    ]
  }'
```

`POST /geofencing/v0/collections/{CollectionName}/delete-geofences`

<p>Deletes a batch of geofences from a geofence collection.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

> Body parameter

```json
{
  "GeofenceIds": [
    "string"
  ]
}
```

<h3 id="batchdeletegeofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The geofence collection storing the geofences to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» GeofenceIds|body|[[Id](#schemaid)]|true|The batch of geofences to be deleted.|

> Example responses

> 200 Response

```json
{
  "Errors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchdeletegeofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchDeleteGeofenceResponse](#schemabatchdeletegeofenceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchEvaluateGeofences

<a id="opIdBatchEvaluateGeofences"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DevicePositionUpdates": [
      {
        "Accuracy": {
          "Horizontal": {}
        },
        "DeviceId": {},
        "Position": {},
        "PositionProperties": {
          "property1": "string",
          "property2": "string"
        },
        "SampleTime": {}
      }
    ]
  }'
```

`POST /geofencing/v0/collections/{CollectionName}/positions`

<p>Evaluates device positions against the geofence geometries from a given geofence collection.</p> <p>This operation always returns an empty response because geofences are asynchronously evaluated. The evaluation determines if the device has entered or exited a geofenced area, and then publishes one of the following events to Amazon EventBridge:</p> <ul> <li> <p> <code>ENTER</code> if Amazon Location determines that the tracked device has entered a geofenced area.</p> </li> <li> <p> <code>EXIT</code> if Amazon Location determines that the tracked device has exited a geofenced area.</p> </li> </ul> <note> <p>The last geofence that a device was observed within is tracked for 30 days after the most recent device position update.</p> </note> <note> <p>Geofence evaluation uses the given device position. It does not account for the optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p> </note> <note> <p>The <code>DeviceID</code> is used as a string to represent the device. You do not need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p> </note>

> Body parameter

```json
{
  "DevicePositionUpdates": [
    {
      "Accuracy": {
        "Horizontal": {}
      },
      "DeviceId": {},
      "Position": {},
      "PositionProperties": {
        "property1": "string",
        "property2": "string"
      },
      "SampleTime": {}
    }
  ]
}
```

<h3 id="batchevaluategeofences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The geofence collection used in evaluating the position of devices against its geofences.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DevicePositionUpdates|body|[[DevicePositionUpdate](#schemadevicepositionupdate)]|true|Contains device details for each device to be evaluated against the given geofence collection.|

> Example responses

> 200 Response

```json
{
  "Errors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchevaluategeofences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchEvaluateGeofencesResponse](#schemabatchevaluategeofencesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchGetDevicePosition

<a id="opIdBatchGetDevicePosition"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/get-positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DeviceIds": [
      "string"
    ]
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/get-positions`

Lists the latest device positions for requested devices.

> Body parameter

```json
{
  "DeviceIds": [
    "string"
  ]
}
```

<h3 id="batchgetdeviceposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The tracker resource retrieving the device position.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DeviceIds|body|[[Id](#schemaid)]|true|<p>Devices whose position you want to retrieve.</p> <ul> <li> <p>For example, for two devices: <code>device-ids=DeviceId1&amp;device-ids=DeviceId2</code> </p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "DevicePositions": {},
  "Errors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchgetdeviceposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchGetDevicePositionResponse](#schemabatchgetdevicepositionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchPutGeofence

<a id="opIdBatchPutGeofence"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/put-geofences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Entries": [
      {
        "GeofenceId": {},
        "Geometry": {
          "Circle": {
            "Center": {},
            "Radius": {}
          },
          "Polygon": {}
        }
      }
    ]
  }'
```

`POST /geofencing/v0/collections/{CollectionName}/put-geofences`

A batch request for storing geofence geometries into a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request.

> Body parameter

```json
{
  "Entries": [
    {
      "GeofenceId": {},
      "Geometry": {
        "Circle": {
          "Center": {},
          "Radius": {}
        },
        "Polygon": {}
      }
    }
  ]
}
```

<h3 id="batchputgeofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The geofence collection storing the geofences.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Entries|body|[[BatchPutGeofenceRequestEntry](#schemabatchputgeofencerequestentry)]|true|The batch of geofences to be stored in a geofence collection.|

> Example responses

> 200 Response

```json
{
  "Errors": {},
  "Successes": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchputgeofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchPutGeofenceResponse](#schemabatchputgeofenceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## BatchUpdateDevicePosition

<a id="opIdBatchUpdateDevicePosition"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Updates": [
      {
        "Accuracy": {
          "Horizontal": {}
        },
        "DeviceId": {},
        "Position": {},
        "PositionProperties": {
          "property1": "string",
          "property2": "string"
        },
        "SampleTime": {}
      }
    ]
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/positions`

<p>Uploads position update data for one or more devices to a tracker resource. Amazon Location uses the data when it reports the last known device position and position history. Amazon Location retains location data for 30 days.</p> <note> <p>Position updates are handled based on the <code>PositionFiltering</code> property of the tracker. When <code>PositionFiltering</code> is set to <code>TimeBased</code>, updates are evaluated against linked geofence collections, and location data is stored at a maximum of one position per 30 second interval. If your update frequency is more often than every 30 seconds, only one update per 30 seconds is stored for each unique device ID.</p> <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than 30 m (98.4 ft).</p> <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, location data is stored and evaluated against linked geofence collections only if the device has moved more than the measured accuracy. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is neither stored or evaluated if the device has moved less than 15 m. If <code>PositionFiltering</code> is set to <code>AccuracyBased</code> filtering, Amazon Location uses the default value <code>{ "Horizontal": 0}</code> when accuracy is not provided on a <code>DevicePositionUpdate</code>.</p> </note>

> Body parameter

```json
{
  "Updates": [
    {
      "Accuracy": {
        "Horizontal": {}
      },
      "DeviceId": {},
      "Position": {},
      "PositionProperties": {
        "property1": "string",
        "property2": "string"
      },
      "SampleTime": {}
    }
  ]
}
```

<h3 id="batchupdatedeviceposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Updates|body|[[DevicePositionUpdate](#schemadevicepositionupdate)]|true|Contains the position update details for each device.|

> Example responses

> 200 Response

```json
{
  "Errors": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="batchupdatedeviceposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BatchUpdateDevicePositionResponse](#schemabatchupdatedevicepositionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CalculateRoute

<a id="opIdCalculateRoute"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators/string/calculate/route \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CarModeOptions": {
      "AvoidFerries": {},
      "AvoidTolls": {}
    },
    "DepartNow": true,
    "DeparturePosition": [
      0,
      0
    ],
    "DepartureTime": "1970-01-01T00:00:00Z",
    "DestinationPosition": [
      0,
      0
    ],
    "DistanceUnit": "Kilometers",
    "IncludeLegGeometry": true,
    "TravelMode": "Car",
    "TruckModeOptions": {
      "AvoidFerries": {},
      "AvoidTolls": {},
      "Dimensions": {
        "Height": {},
        "Length": {},
        "Unit": {},
        "Width": {}
      },
      "Weight": {
        "Total": {},
        "Unit": {}
      }
    },
    "WaypointPositions": [
      [
        0,
        0
      ]
    ]
  }'
```

`POST /routes/v0/calculators/{CalculatorName}/calculate/route`

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters: <code>DeparturePosition</code> and <code>DestinationPosition</code>. Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html">Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates a route based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> <note> <p>If you specify <code>walking</code> for the travel mode and your data provider is Esri, the start and destination must be within 40km.</p> </note> </li> </ul>

> Body parameter

```json
{
  "CarModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {}
  },
  "DepartNow": true,
  "DeparturePosition": [
    0,
    0
  ],
  "DepartureTime": "1970-01-01T00:00:00Z",
  "DestinationPosition": [
    0,
    0
  ],
  "DistanceUnit": "Kilometers",
  "IncludeLegGeometry": true,
  "TravelMode": "Car",
  "TruckModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {},
    "Dimensions": {
      "Height": {},
      "Length": {},
      "Unit": {},
      "Width": {}
    },
    "Weight": {
      "Total": {},
      "Unit": {}
    }
  },
  "WaypointPositions": [
    [
      0,
      0
    ]
  ]
}
```

<h3 id="calculateroute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CalculatorName|path|string|true|The name of the route calculator resource that you want to use to calculate the route. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CarModeOptions|body|object|false|Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.|
|» » AvoidFerries|body|object|false|none|
|» » AvoidTolls|body|object|false|none|
|» DepartNow|body|boolean|false|<p>Sets the time of departure as the current time. Uses the current time to calculate a route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> \| <code>true</code> </p>|
|» DeparturePosition|body|[[Double](#schemadouble)]|true|<p>The start position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p>For example, <code>[-123.115, 49.285]</code> </p> </li> </ul> <note> <p>If you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>|
|» DepartureTime|body|string(date-time)|false|<p>Specifies the desired time of departure. Uses the given time to calculate the route. Otherwise, the best time of day to travel with the best traffic conditions is used to calculate the route.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>|
|» DestinationPosition|body|[[Double](#schemadouble)]|true|<p>The finish position for the route. Defined in <a href="https://earth-info.nga.mil/index.php?dir=wgs84&amp;action=wgs84">World Geodetic System (WGS 84)</a> format: <code>[longitude, latitude]</code>.</p> <ul> <li> <p> For example, <code>[-122.339, 47.615]</code> </p> </li> </ul> <note> <p>If you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>|
|» DistanceUnit|body|string|false|<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>|
|» IncludeLegGeometry|body|boolean|false|<p>Set to include the geometry details in the result for each path between a pair of positions.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> \| <code>true</code> </p>|
|» TravelMode|body|string|false|<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. You can choose <code>Car</code>, <code>Truck</code>, <code>Walking</code>, <code>Bicycle</code> or <code>Motorcycle</code> as options for the <code>TravelMode</code>.</p> <note> <p> <code>Bicycle</code> and <code>Motorcycle</code> are only valid when using Grab as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more details on the using Grab for routing, including areas of coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <p>Default Value: <code>Car</code> </p>|
|» TruckModeOptions|body|object|false|Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.|
|» » AvoidFerries|body|object|false|none|
|» » AvoidTolls|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Height|body|object|false|none|
|» » » Length|body|object|false|none|
|» » » Unit|body|object|false|none|
|» » » Width|body|object|false|none|
|» » Weight|body|object|false|none|
|» » » Total|body|object|false|none|
|» » » Unit|body|object|false|none|
|» WaypointPositions|body|[[Position](#schemaposition)]|false|<p>Specifies an ordered list of up to 23 intermediate positions to include along a route between the departure position and destination position. </p> <ul> <li> <p>For example, from the <code>DeparturePosition</code> <code>[-123.115, 49.285]</code>, the route follows the order that the waypoint positions are given <code>[[-122.757, 49.0021],[-122.349, 47.620]]</code> </p> </li> </ul> <note> <p>If you specify a waypoint position that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">moves the position to the nearest road</a>. </p> <p>Specifying more than 23 waypoints returns a <code>400 ValidationException</code> error.</p> <p>If Esri is the provider for your route calculator, specifying a route that is longer than 400 km returns a <code>400 RoutesValidationException</code> error.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DistanceUnit|Kilometers|
|» DistanceUnit|Miles|
|» TravelMode|Car|
|» TravelMode|Truck|
|» TravelMode|Walking|
|» TravelMode|Bicycle|
|» TravelMode|Motorcycle|

> Example responses

> 200 Response

```json
{
  "Legs": {},
  "Summary": {
    "DataSource": {},
    "Distance": {},
    "DistanceUnit": {},
    "DurationSeconds": {},
    "RouteBBox": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="calculateroute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalculateRouteResponse](#schemacalculaterouteresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CalculateRouteMatrix

<a id="opIdCalculateRouteMatrix"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators/string/calculate/route-matrix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CarModeOptions": {
      "AvoidFerries": {},
      "AvoidTolls": {}
    },
    "DepartNow": true,
    "DeparturePositions": [
      [
        0,
        0
      ]
    ],
    "DepartureTime": "1970-01-01T00:00:00Z",
    "DestinationPositions": [
      [
        0,
        0
      ]
    ],
    "DistanceUnit": "Kilometers",
    "TravelMode": "Car",
    "TruckModeOptions": {
      "AvoidFerries": {},
      "AvoidTolls": {},
      "Dimensions": {
        "Height": {},
        "Length": {},
        "Unit": {},
        "Width": {}
      },
      "Weight": {
        "Total": {},
        "Unit": {}
      }
    }
  }'
```

`POST /routes/v0/calculators/{CalculatorName}/calculate/route-matrix`

<p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html"> Calculates a route matrix</a> given the following required parameters: <code>DeparturePositions</code> and <code>DestinationPositions</code>. <code>CalculateRouteMatrix</code> calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, <code>CalculateRouteMatrix</code> will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of <code>DeparturePositions</code> times the number of <code>DestinationPositions</code>.</p> <note> <p>Your account is charged for each route calculated, not the number of requests.</p> </note> <p>Requires that you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create a route calculator resource</a>.</p> <p>By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.</p> <p>Additional options include:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/departure-time.html"> Specifying a departure time</a> using either <code>DepartureTime</code> or <code>DepartNow</code>. This calculates routes based on predictive traffic data at the given time. </p> <note> <p>You can't specify both <code>DepartureTime</code> and <code>DepartNow</code> in a single request. Specifying both parameters returns a validation error.</p> </note> </li> <li> <p> <a href="https://docs.aws.amazon.com/location/latest/developerguide/travel-mode.html">Specifying a travel mode</a> using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in <code>CarModeOptions</code> if traveling by <code>Car</code>, or <code>TruckModeOptions</code> if traveling by <code>Truck</code>.</p> </li> </ul>

> Body parameter

```json
{
  "CarModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {}
  },
  "DepartNow": true,
  "DeparturePositions": [
    [
      0,
      0
    ]
  ],
  "DepartureTime": "1970-01-01T00:00:00Z",
  "DestinationPositions": [
    [
      0,
      0
    ]
  ],
  "DistanceUnit": "Kilometers",
  "TravelMode": "Car",
  "TruckModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {},
    "Dimensions": {
      "Height": {},
      "Length": {},
      "Unit": {},
      "Width": {}
    },
    "Weight": {
      "Total": {},
      "Unit": {}
    }
  }
}
```

<h3 id="calculateroutematrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CalculatorName|path|string|true|The name of the route calculator resource that you want to use to calculate the route matrix. |
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CarModeOptions|body|object|false|Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.|
|» » AvoidFerries|body|object|false|none|
|» » AvoidTolls|body|object|false|none|
|» DepartNow|body|boolean|false|<p>Sets the time of departure as the current time. Uses the current time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <p>Default Value: <code>false</code> </p> <p>Valid Values: <code>false</code> \| <code>true</code> </p>|
|» DeparturePositions|body|[[Position](#schemaposition)]|true|<p>The list of departure (origin) positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-123.115, 49.285]</code>.</p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a departure that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDeparturePositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>|
|» DepartureTime|body|string(date-time)|false|<p>Specifies the desired time of departure. Uses the given time to calculate the route matrix. You can't set both <code>DepartureTime</code> and <code>DepartNow</code>. If neither is set, the best time of day to travel with the best traffic conditions is used to calculate the route matrix.</p> <note> <p>Setting a departure time in the past returns a <code>400 ValidationException</code> error.</p> </note> <ul> <li> <p>In <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. For example, <code>2020–07-2T12:15:20.000Z+01:00</code> </p> </li> </ul>|
|» DestinationPositions|body|[[Position](#schemaposition)]|true|<p>The list of destination positions for the route matrix. An array of points, each of which is itself a 2-value array defined in <a href="https://earth-info.nga.mil/GandG/wgs84/index.html">WGS 84</a> format: <code>[longitude, latitude]</code>. For example, <code>[-122.339, 47.615]</code> </p> <important> <p>Depending on the data provider selected in the route calculator resource there may be additional restrictions on the inputs you can choose. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route-matrix.html#matrix-routing-position-limits"> Position restrictions</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </important> <note> <p>For route calculators that use Esri as the data provider, if you specify a destination that's not located on a road, Amazon Location <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html"> moves the position to the nearest road</a>. The snapped value is available in the result in <code>SnappedDestinationPositions</code>.</p> </note> <p>Valid Values: <code>[-180 to 180,-90 to 90]</code> </p>|
|» DistanceUnit|body|string|false|<p>Set the unit system to specify the distance.</p> <p>Default Value: <code>Kilometers</code> </p>|
|» TravelMode|body|string|false|<p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>The <code>TravelMode</code> you specify also determines how you specify route preferences: </p> <ul> <li> <p>If traveling by <code>Car</code> use the <code>CarModeOptions</code> parameter.</p> </li> <li> <p>If traveling by <code>Truck</code> use the <code>TruckModeOptions</code> parameter.</p> </li> </ul> <note> <p> <code>Bicycle</code> or <code>Motorcycle</code> are only valid when using <code>Grab</code> as a data provider, and only within Southeast Asia.</p> <p> <code>Truck</code> is not available for Grab.</p> <p>For more information about using Grab as a data provider, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>Default Value: <code>Car</code> </p>|
|» TruckModeOptions|body|object|false|Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.|
|» » AvoidFerries|body|object|false|none|
|» » AvoidTolls|body|object|false|none|
|» » Dimensions|body|object|false|none|
|» » » Height|body|object|false|none|
|» » » Length|body|object|false|none|
|» » » Unit|body|object|false|none|
|» » » Width|body|object|false|none|
|» » Weight|body|object|false|none|
|» » » Total|body|object|false|none|
|» » » Unit|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» DistanceUnit|Kilometers|
|» DistanceUnit|Miles|
|» TravelMode|Car|
|» TravelMode|Truck|
|» TravelMode|Walking|
|» TravelMode|Bicycle|
|» TravelMode|Motorcycle|

> Example responses

> 200 Response

```json
{
  "RouteMatrix": {},
  "SnappedDeparturePositions": {},
  "SnappedDestinationPositions": {},
  "Summary": {
    "DataSource": {},
    "DistanceUnit": {},
    "ErrorCount": {},
    "RouteCount": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="calculateroutematrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CalculateRouteMatrixResponse](#schemacalculateroutematrixresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateGeofenceCollection

<a id="opIdCreateGeofenceCollection"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CollectionName": "string",
    "Description": "string",
    "KmsKeyId": "string",
    "PricingPlan": "RequestBasedUsage",
    "PricingPlanDataSource": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /geofencing/v0/collections`

Creates a geofence collection, which manages and stores geofences.

> Body parameter

```json
{
  "CollectionName": "string",
  "Description": "string",
  "KmsKeyId": "string",
  "PricingPlan": "RequestBasedUsage",
  "PricingPlanDataSource": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="creategeofencecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CollectionName|body|string|true|<p>A custom name for the geofence collection.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique geofence collection name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleGeofenceCollection</code>.</p> </li> </ul>|
|» Description|body|string|false|An optional description for the geofence collection.|
|» KmsKeyId|body|string|false|A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN. |
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» PricingPlanDataSource|body|string|false|This parameter is no longer used.|
|» Tags|body|object|false|<p>Applies one or more tags to the geofence collection. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "CreateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="creategeofencecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateGeofenceCollectionResponse](#schemacreategeofencecollectionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateKey

<a id="opIdCreateKey"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/metadata/v0/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "ExpireTime": "1970-01-01T00:00:00Z",
    "KeyName": "string",
    "NoExpiry": true,
    "Restrictions": {
      "AllowActions": {},
      "AllowReferers": {},
      "AllowResources": {}
    },
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /metadata/v0/keys`

<p>Creates an API key resource in your Amazon Web Services account, which lets you grant <code>geo:GetMap*</code> actions for Amazon Location Map resources to the API key bearer.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

> Body parameter

```json
{
  "Description": "string",
  "ExpireTime": "1970-01-01T00:00:00Z",
  "KeyName": "string",
  "NoExpiry": true,
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createkey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|An optional description for the API key resource.|
|» ExpireTime|body|string(date-time)|false|The optional timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.|
|» KeyName|body|string|true|<p>A custom name for the API key resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique API key name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleAPIKey</code>.</p> </li> </ul>|
|» NoExpiry|body|boolean|false|Optionally set to <code>true</code> to set no expiration time for the API key. One of <code>NoExpiry</code> or <code>ExpireTime</code> must be set.|
|» Restrictions|body|object|true|API Restrictions on the allowed actions, resources, and referers for an API key resource.|
|» » AllowActions|body|object|false|none|
|» » AllowReferers|body|object|false|none|
|» » AllowResources|body|object|false|none|
|» Tags|body|object|false|<p>Applies one or more tags to the map resource. A tag is a key-value pair that helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "Key": {},
  "KeyArn": {},
  "KeyName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createkey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateKeyResponse](#schemacreatekeyresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateMap

<a id="opIdCreateMap"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Configuration": {
      "Style": {}
    },
    "Description": "string",
    "MapName": "string",
    "PricingPlan": "RequestBasedUsage",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /maps/v0/maps`

<p>Creates a map resource in your Amazon Web Services account, which provides map tiles of different styles sourced from global location data providers.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

> Body parameter

```json
{
  "Configuration": {
    "Style": {}
  },
  "Description": "string",
  "MapName": "string",
  "PricingPlan": "RequestBasedUsage",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createmap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Configuration|body|object|true|Specifies the map tile style selected from an available provider.|
|» » Style|body|object|false|none|
|» Description|body|string|false|An optional description for the map resource.|
|» MapName|body|string|true|<p>The name for the map resource.</p> <p>Requirements:</p> <ul> <li> <p>Must contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_). </p> </li> <li> <p>Must be a unique map resource name. </p> </li> <li> <p>No spaces allowed. For example, <code>ExampleMap</code>.</p> </li> </ul>|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» Tags|body|object|false|<p>Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "MapArn": {},
  "MapName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createmap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateMapResponse](#schemacreatemapresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreatePlaceIndex

<a id="opIdCreatePlaceIndex"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DataSource": "string",
    "DataSourceConfiguration": {
      "IntendedUse": {}
    },
    "Description": "string",
    "IndexName": "string",
    "PricingPlan": "RequestBasedUsage",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /places/v0/indexes`

<p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to geocode addresses and other text queries by using the <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

> Body parameter

```json
{
  "DataSource": "string",
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": "string",
  "IndexName": "string",
  "PricingPlan": "RequestBasedUsage",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createplaceindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DataSource|body|string|true|<p>Specifies the geospatial data provider for the new place index.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm">Esri details on geocoding coverage</a>.</p> </li> <li> <p> <code>Grab</code> – Grab provides place index functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/geocoder/dev_guide/topics/coverage-geocoder.html">HERE details on goecoding coverage</a>.</p> <important> <p>If you specify HERE Technologies (<code>Here</code>) as the data provider, you may not <a href="https://docs.aws.amazon.com/location-places/latest/APIReference/API_DataSourceConfiguration.html">store results</a> for locations in Japan. For more information, see the <a href="http://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> for Amazon Location Service.</p> </important> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>|
|» DataSourceConfiguration|body|object|false|<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>|
|» » IntendedUse|body|object|false|none|
|» Description|body|string|false|The optional description for the place index resource.|
|» IndexName|body|string|true|<p>The name of the place index resource. </p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A–Z, a–z, 0–9), hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique place index resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExamplePlaceIndex</code>.</p> </li> </ul>|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» Tags|body|object|false|<p>Applies one or more tags to the place index resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "IndexArn": {},
  "IndexName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createplaceindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreatePlaceIndexResponse](#schemacreateplaceindexresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateRouteCalculator

<a id="opIdCreateRouteCalculator"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "CalculatorName": "string",
    "DataSource": "string",
    "Description": "string",
    "PricingPlan": "RequestBasedUsage",
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /routes/v0/calculators`

<p>Creates a route calculator resource in your Amazon Web Services account.</p> <p>You can send requests to a route calculator resource to estimate travel time, distance, and get directions. A route calculator sources traffic and road network data from your chosen data provider.</p> <note> <p>If your application is tracking or routing assets you use in your business, such as delivery vehicles or employees, you must not use Esri as your geolocation provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services service terms</a> for more details.</p> </note>

> Body parameter

```json
{
  "CalculatorName": "string",
  "DataSource": "string",
  "Description": "string",
  "PricingPlan": "RequestBasedUsage",
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="createroutecalculator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» CalculatorName|body|string|true|<p>The name of the route calculator resource. </p> <p>Requirements:</p> <ul> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique Route calculator resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleRouteCalculator</code>.</p> </li> </ul>|
|» DataSource|body|string|true|<p>Specifies the data provider of traffic and road network data.</p> <note> <p>This field is case-sensitive. Enter the valid values as shown. For example, entering <code>HERE</code> returns an error.</p> </note> <p>Valid values include:</p> <ul> <li> <p> <code>Esri</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a>'s coverage in your region of interest, see <a href="https://doc.arcgis.com/en/arcgis-online/reference/network-coverage.htm">Esri details on street networks and traffic coverage</a>.</p> <p>Route calculators that use Esri as a data source only calculate routes that are shorter than 400 km.</p> </li> <li> <p> <code>Grab</code> – Grab provides routing functionality for Southeast Asia. For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a>' coverage, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html#grab-coverage-area">GrabMaps countries and areas covered</a>.</p> </li> <li> <p> <code>Here</code> – For additional information about <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a>' coverage in your region of interest, see <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/car-routing.html">HERE car routing coverage</a> and <a href="https://developer.here.com/documentation/routing-api/dev_guide/topics/coverage/truck-routing.html">HERE truck routing coverage</a>.</p> </li> </ul> <p>For additional information , see <a href="https://docs.aws.amazon.com/location/latest/developerguide/what-is-data-provider.html">Data providers</a> on the <i>Amazon Location Service Developer Guide</i>.</p>|
|» Description|body|string|false|The optional description for the route calculator resource.|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» Tags|body|object|false|<p>Applies one or more tags to the route calculator resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <ul> <li> <p>For example: { <code>"tag1" : "value1"</code>, <code>"tag2" : "value2"</code>}</p> </li> </ul> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "CreateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="createroutecalculator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateRouteCalculatorResponse](#schemacreateroutecalculatorresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ServiceQuotaExceededException|[ServiceQuotaExceededException](#schemaservicequotaexceededexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## CreateTracker

<a id="opIdCreateTracker"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "KmsKeyId": "string",
    "PositionFiltering": "TimeBased",
    "PricingPlan": "RequestBasedUsage",
    "PricingPlanDataSource": "string",
    "Tags": {
      "property1": "string",
      "property2": "string"
    },
    "TrackerName": "string"
  }'
```

`POST /tracking/v0/trackers`

Creates a tracker resource in your Amazon Web Services account, which lets you retrieve current and historical location of devices.

> Body parameter

```json
{
  "Description": "string",
  "KmsKeyId": "string",
  "PositionFiltering": "TimeBased",
  "PricingPlan": "RequestBasedUsage",
  "PricingPlanDataSource": "string",
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TrackerName": "string"
}
```

<h3 id="createtracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|An optional description for the tracker resource.|
|» KmsKeyId|body|string|false|A key identifier for an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html">Amazon Web Services KMS customer managed key</a>. Enter a key ID, key ARN, alias name, or alias ARN.|
|» PositionFiltering|body|string|false|<p>Specifies the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this area are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This can reduce the effects of GPS noise when displaying device trajectories on a map, and can help control your costs by reducing the number of geofence evaluations. </p> </li> </ul> <p>This field is optional. If not specified, the default value is <code>TimeBased</code>.</p>|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» PricingPlanDataSource|body|string|false|This parameter is no longer used.|
|» Tags|body|object|false|<p>Applies one or more tags to the tracker resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource</p> </li> <li> <p>Each resource tag must be unique with a maximum of one value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @. </p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|
|» TrackerName|body|string|true|<p>The name for the tracker resource.</p> <p>Requirements:</p> <ul> <li> <p>Contain only alphanumeric characters (A-Z, a-z, 0-9) , hyphens (-), periods (.), and underscores (_).</p> </li> <li> <p>Must be a unique tracker resource name.</p> </li> <li> <p>No spaces allowed. For example, <code>ExampleTracker</code>.</p> </li> </ul>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PositionFiltering|TimeBased|
|» PositionFiltering|DistanceBased|
|» PositionFiltering|AccuracyBased|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "TrackerArn": {},
  "TrackerName": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="createtracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreateTrackerResponse](#schemacreatetrackerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ConflictException|[ConflictException](#schemaconflictexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeGeofenceCollection

<a id="opIdDescribeGeofenceCollection"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /geofencing/v0/collections/{CollectionName}`

Retrieves the geofence collection details.

<h3 id="describegeofencecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The name of the geofence collection.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "CreateTime": {},
  "Description": {},
  "KmsKeyId": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describegeofencecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeGeofenceCollectionResponse](#schemadescribegeofencecollectionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteGeofenceCollection

<a id="opIdDeleteGeofenceCollection"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /geofencing/v0/collections/{CollectionName}`

<p>Deletes a geofence collection from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the geofence collection is the target of a tracker resource, the devices will no longer be monitored.</p> </note>

<h3 id="deletegeofencecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The name of the geofence collection to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletegeofencecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteGeofenceCollectionResponse](#schemadeletegeofencecollectionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateGeofenceCollection

<a id="opIdUpdateGeofenceCollection"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "PricingPlan": "RequestBasedUsage",
    "PricingPlanDataSource": "string"
  }'
```

`PATCH /geofencing/v0/collections/{CollectionName}`

Updates the specified properties of a given geofence collection.

> Body parameter

```json
{
  "Description": "string",
  "PricingPlan": "RequestBasedUsage",
  "PricingPlanDataSource": "string"
}
```

<h3 id="updategeofencecollection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The name of the geofence collection to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Updates the description for the geofence collection.|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» PricingPlanDataSource|body|string|false|This parameter is no longer used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updategeofencecollection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateGeofenceCollectionResponse](#schemaupdategeofencecollectionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeKey

<a id="opIdDescribeKey"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/metadata/v0/keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /metadata/v0/keys/{KeyName}`

<p>Retrieves the API key resource details.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

<h3 id="describekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|KeyName|path|string|true|The name of the API key resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "Description": {},
  "ExpireTime": {},
  "Key": {},
  "KeyArn": {},
  "KeyName": {},
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeKeyResponse](#schemadescribekeyresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteKey

<a id="opIdDeleteKey"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/metadata/v0/keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /metadata/v0/keys/{KeyName}`

Deletes the specified API key. The API key must have been deactivated more than 90 days previously.

<h3 id="deletekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|KeyName|path|string|true|The name of the API key to delete.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteKeyResponse](#schemadeletekeyresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateKey

<a id="opIdUpdateKey"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/metadata/v0/keys/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "ExpireTime": "1970-01-01T00:00:00Z",
    "ForceUpdate": true,
    "NoExpiry": true,
    "Restrictions": {
      "AllowActions": {},
      "AllowReferers": {},
      "AllowResources": {}
    }
  }'
```

`PATCH /metadata/v0/keys/{KeyName}`

<p>Updates the specified properties of a given API key resource.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

> Body parameter

```json
{
  "Description": "string",
  "ExpireTime": "1970-01-01T00:00:00Z",
  "ForceUpdate": true,
  "NoExpiry": true,
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  }
}
```

<h3 id="updatekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|KeyName|path|string|true|The name of the API key resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Updates the description for the API key resource.|
|» ExpireTime|body|string(date-time)|false|Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. |
|» ForceUpdate|body|boolean|false|<p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p>|
|» NoExpiry|body|boolean|false|Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time.|
|» Restrictions|body|object|false|API Restrictions on the allowed actions, resources, and referers for an API key resource.|
|» » AllowActions|body|object|false|none|
|» » AllowReferers|body|object|false|none|
|» » AllowResources|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "KeyArn": {},
  "KeyName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateKeyResponse](#schemaupdatekeyresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeMap

<a id="opIdDescribeMap"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /maps/v0/maps/{MapName}`

Retrieves the map resource details.

<h3 id="describemap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MapName|path|string|true|The name of the map resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Configuration": {
    "Style": {}
  },
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "MapArn": {},
  "MapName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describemap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeMapResponse](#schemadescribemapresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteMap

<a id="opIdDeleteMap"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /maps/v0/maps/{MapName}`

<p>Deletes a map resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the map is being used in an application, the map may not render.</p> </note>

<h3 id="deletemap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MapName|path|string|true|The name of the map resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletemap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteMapResponse](#schemadeletemapresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateMap

<a id="opIdUpdateMap"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "PricingPlan": "RequestBasedUsage"
  }'
```

`PATCH /maps/v0/maps/{MapName}`

Updates the specified properties of a given map resource.

> Body parameter

```json
{
  "Description": "string",
  "PricingPlan": "RequestBasedUsage"
}
```

<h3 id="updatemap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MapName|path|string|true|The name of the map resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Updates the description for the map resource.|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "MapArn": {},
  "MapName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatemap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateMapResponse](#schemaupdatemapresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribePlaceIndex

<a id="opIdDescribePlaceIndex"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /places/v0/indexes/{IndexName}`

Retrieves the place index resource details.

<h3 id="describeplaceindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "DataSource": {},
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": {},
  "IndexArn": {},
  "IndexName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describeplaceindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribePlaceIndexResponse](#schemadescribeplaceindexresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeletePlaceIndex

<a id="opIdDeletePlaceIndex"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /places/v0/indexes/{IndexName}`

<p>Deletes a place index resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

<h3 id="deleteplaceindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteplaceindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeletePlaceIndexResponse](#schemadeleteplaceindexresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdatePlaceIndex

<a id="opIdUpdatePlaceIndex"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "DataSourceConfiguration": {
      "IntendedUse": {}
    },
    "Description": "string",
    "PricingPlan": "RequestBasedUsage"
  }'
```

`PATCH /places/v0/indexes/{IndexName}`

Updates the specified properties of a given place index resource.

> Body parameter

```json
{
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": "string",
  "PricingPlan": "RequestBasedUsage"
}
```

<h3 id="updateplaceindex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» DataSourceConfiguration|body|object|false|<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>|
|» » IntendedUse|body|object|false|none|
|» Description|body|string|false|Updates the description for the place index resource.|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "IndexArn": {},
  "IndexName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateplaceindex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdatePlaceIndexResponse](#schemaupdateplaceindexresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeRouteCalculator

<a id="opIdDescribeRouteCalculator"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /routes/v0/calculators/{CalculatorName}`

Retrieves the route calculator resource details.

<h3 id="describeroutecalculator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CalculatorName|path|string|true|The name of the route calculator resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describeroutecalculator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeRouteCalculatorResponse](#schemadescriberoutecalculatorresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteRouteCalculator

<a id="opIdDeleteRouteCalculator"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /routes/v0/calculators/{CalculatorName}`

<p>Deletes a route calculator resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently.</p> </note>

<h3 id="deleteroutecalculator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CalculatorName|path|string|true|The name of the route calculator resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deleteroutecalculator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteRouteCalculatorResponse](#schemadeleteroutecalculatorresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateRouteCalculator

<a id="opIdUpdateRouteCalculator"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/calculators/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "PricingPlan": "RequestBasedUsage"
  }'
```

`PATCH /routes/v0/calculators/{CalculatorName}`

Updates the specified properties for a given route calculator resource.

> Body parameter

```json
{
  "Description": "string",
  "PricingPlan": "RequestBasedUsage"
}
```

<h3 id="updateroutecalculator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CalculatorName|path|string|true|The name of the route calculator resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Updates the description for the route calculator resource.|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updateroutecalculator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateRouteCalculatorResponse](#schemaupdateroutecalculatorresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DescribeTracker

<a id="opIdDescribeTracker"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tracking/v0/trackers/{TrackerName}`

Retrieves the tracker resource details.

<h3 id="describetracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "Description": {},
  "KmsKeyId": {},
  "PositionFiltering": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TrackerArn": {},
  "TrackerName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="describetracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DescribeTrackerResponse](#schemadescribetrackerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DeleteTracker

<a id="opIdDeleteTracker"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tracking/v0/trackers/{TrackerName}`

<p>Deletes a tracker resource from your Amazon Web Services account.</p> <note> <p>This operation deletes the resource permanently. If the tracker resource is in use, you may encounter an error. Make sure that the target resource isn't a dependency for your applications.</p> </note>

<h3 id="deletetracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource to be deleted.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="deletetracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DeleteTrackerResponse](#schemadeletetrackerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UpdateTracker

<a id="opIdUpdateTracker"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Description": "string",
    "PositionFiltering": "TimeBased",
    "PricingPlan": "RequestBasedUsage",
    "PricingPlanDataSource": "string"
  }'
```

`PATCH /tracking/v0/trackers/{TrackerName}`

Updates the specified properties of a given tracker resource.

> Body parameter

```json
{
  "Description": "string",
  "PositionFiltering": "TimeBased",
  "PricingPlan": "RequestBasedUsage",
  "PricingPlanDataSource": "string"
}
```

<h3 id="updatetracker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The name of the tracker resource to update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Description|body|string|false|Updates the description for the tracker resource.|
|» PositionFiltering|body|string|false|<p>Updates the position filtering for the tracker resource.</p> <p>Valid values:</p> <ul> <li> <p> <code>TimeBased</code> - Location updates are evaluated against linked geofence collections, but not every location update is stored. If your update frequency is more often than 30 seconds, only one update per 30 seconds is stored for each unique device ID. </p> </li> <li> <p> <code>DistanceBased</code> - If the device has moved less than 30 m (98.4 ft), location updates are ignored. Location updates within this distance are neither evaluated against linked geofence collections, nor stored. This helps control costs by reducing the number of geofence evaluations and historical device positions to paginate through. Distance-based filtering can also reduce the effects of GPS noise when displaying device trajectories on a map. </p> </li> <li> <p> <code>AccuracyBased</code> - If the device has moved less than the measured accuracy, location updates are ignored. For example, if two consecutive updates from a device have a horizontal accuracy of 5 m and 10 m, the second update is ignored if the device has moved less than 15 m. Ignored location updates are neither evaluated against linked geofence collections, nor stored. This helps educe the effects of GPS noise when displaying device trajectories on a map, and can help control costs by reducing the number of geofence evaluations. </p> </li> </ul>|
|» PricingPlan|body|string|false|No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.|
|» PricingPlanDataSource|body|string|false|This parameter is no longer used.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» PositionFiltering|TimeBased|
|» PositionFiltering|DistanceBased|
|» PositionFiltering|AccuracyBased|
|» PricingPlan|RequestBasedUsage|
|» PricingPlan|MobileAssetTracking|
|» PricingPlan|MobileAssetManagement|

> Example responses

> 200 Response

```json
{
  "TrackerArn": {},
  "TrackerName": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="updatetracker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UpdateTrackerResponse](#schemaupdatetrackerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## DisassociateTrackerConsumer

<a id="opIdDisassociateTrackerConsumer"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/consumers/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}`

<p>Removes the association between a tracker resource and a geofence collection.</p> <note> <p>Once you unlink a tracker resource from a geofence collection, the tracker positions will no longer be automatically evaluated against geofences.</p> </note>

<h3 id="disassociatetrackerconsumer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsumerArn|path|string|true|<p>The Amazon Resource Name (ARN) for the geofence collection to be disassociated from the tracker resource. Used when you need to specify a resource across all Amazon Web Services. </p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:geofence-collection/ExampleGeofenceCollectionConsumer</code> </p> </li> </ul>|
|TrackerName|path|string|true|The name of the tracker resource to be dissociated from the consumer.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="disassociatetrackerconsumer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DisassociateTrackerConsumerResponse](#schemadisassociatetrackerconsumerresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevicePosition

<a id="opIdGetDevicePosition"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/devices/string/positions/latest \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest`

<p>Retrieves a device's most recent position according to its sample time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

<h3 id="getdeviceposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceId|path|string|true|The device whose position you want to retrieve.|
|TrackerName|path|string|true|The tracker resource receiving the position update.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Accuracy": {
    "Horizontal": {}
  },
  "DeviceId": {},
  "Position": {},
  "PositionProperties": {
    "property1": "string",
    "property2": "string"
  },
  "ReceivedTime": {},
  "SampleTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getdeviceposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicePositionResponse](#schemagetdevicepositionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetDevicePositionHistory

<a id="opIdGetDevicePositionHistory"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/devices/string/list-positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "EndTimeExclusive": "1970-01-01T00:00:00Z",
    "MaxResults": 1,
    "NextToken": "string",
    "StartTimeInclusive": "1970-01-01T00:00:00Z"
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions`

<p>Retrieves the device position history from a tracker resource within a specified range of time.</p> <note> <p>Device positions are deleted after 30 days.</p> </note>

> Body parameter

```json
{
  "EndTimeExclusive": "1970-01-01T00:00:00Z",
  "MaxResults": 1,
  "NextToken": "string",
  "StartTimeInclusive": "1970-01-01T00:00:00Z"
}
```

<h3 id="getdevicepositionhistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|DeviceId|path|string|true|The device whose position history you want to retrieve.|
|TrackerName|path|string|true|The tracker resource receiving the request for the device position history.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» EndTimeExclusive|body|string(date-time)|false|<p>Specify the end time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>EndTimeExclusive</code> must be after the time for <code>StartTimeInclusive</code>.</p> </li> </ul>|
|» MaxResults|body|integer|false|<p>An optional limit for the number of device positions returned in a single call.</p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|
|» StartTimeInclusive|body|string(date-time)|false|<p>Specify the start time for the position history in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>. By default, the value will be 24 hours prior to the time that the request is made.</p> <p>Requirement:</p> <ul> <li> <p>The time specified for <code>StartTimeInclusive</code> must be before <code>EndTimeExclusive</code>.</p> </li> </ul>|

> Example responses

> 200 Response

```json
{
  "DevicePositions": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getdevicepositionhistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetDevicePositionHistoryResponse](#schemagetdevicepositionhistoryresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetGeofence

<a id="opIdGetGeofence"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/geofences/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}`

Retrieves the geofence details from a geofence collection.

<h3 id="getgeofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The geofence collection storing the target geofence.|
|GeofenceId|path|string|true|The geofence you're retrieving details for.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  },
  "Status": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getgeofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetGeofenceResponse](#schemagetgeofenceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## PutGeofence

<a id="opIdPutGeofence"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/geofences/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Geometry": {
      "Circle": {
        "Center": {},
        "Radius": {}
      },
      "Polygon": {}
    }
  }'
```

`PUT /geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}`

Stores a geofence geometry in a given geofence collection, or updates the geometry of an existing geofence if a geofence ID is included in the request. 

> Body parameter

```json
{
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  }
}
```

<h3 id="putgeofence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The geofence collection to store the geofence in.|
|GeofenceId|path|string|true|An identifier for the geofence. For example, <code>ExampleGeofence-1</code>.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Geometry|body|object|true|<p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>|
|» » Circle|body|object|false|none|
|» » » Center|body|object|true|none|
|» » » Radius|body|object|true|none|
|» » Polygon|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "UpdateTime": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

> 485 Response

```json
null
```

<h3 id="putgeofence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PutGeofenceResponse](#schemaputgeofenceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|ConflictException|[ConflictException](#schemaconflictexception)|
|483|483|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|484|484|ValidationException|[ValidationException](#schemavalidationexception)|
|485|485|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMapGlyphs

<a id="opIdGetMapGlyphs"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string/glyphs/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}`

Retrieves glyphs used to display labels on a map.

<h3 id="getmapglyphs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FontStack|path|string|true|<p>A comma-separated list of fonts to load glyphs from in order of preference. For example, <code>Noto Sans Regular, Arial Unicode</code>.</p> <p>Valid fonts stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/esri.html">Esri</a> styles: </p> <ul> <li> <p>VectorEsriDarkGrayCanvas – <code>Ubuntu Medium Italic</code> \| <code>Ubuntu Medium</code> \| <code>Ubuntu Italic</code> \| <code>Ubuntu Regular</code> \| <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriLightGrayCanvas – <code>Ubuntu Italic</code> \| <code>Ubuntu Regular</code> \| <code>Ubuntu Light</code> \| <code>Ubuntu Bold</code> </p> </li> <li> <p>VectorEsriTopographic – <code>Noto Sans Italic</code> \| <code>Noto Sans Regular</code> \| <code>Noto Sans Bold</code> \| <code>Noto Serif Regular</code> \| <code>Roboto Condensed Light Italic</code> </p> </li> <li> <p>VectorEsriStreets – <code>Arial Regular</code> \| <code>Arial Italic</code> \| <code>Arial Bold</code> </p> </li> <li> <p>VectorEsriNavigation – <code>Arial Regular</code> \| <code>Arial Italic</code> \| <code>Arial Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/HERE.html">HERE Technologies</a> styles:</p> <ul> <li> <p>VectorHereContrast – <code>Fira GO Regular</code> \| <code>Fira GO Bold</code> </p> </li> <li> <p>VectorHereExplore, VectorHereExploreTruck, HybridHereExploreSatellite – <code>Fira GO Italic</code> \| <code>Fira GO Map</code> \| <code>Fira GO Map Bold</code> \| <code>Noto Sans CJK JP Bold</code> \| <code>Noto Sans CJK JP Light</code> \| <code>Noto Sans CJK JP Regular</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/grab.html">GrabMaps</a> styles:</p> <ul> <li> <p>VectorGrabStandardLight, VectorGrabStandardDark – <code>Noto Sans Regular</code> \| <code>Noto Sans Medium</code> \| <code>Noto Sans Bold</code> </p> </li> </ul> <p>Valid font stacks for <a href="https://docs.aws.amazon.com/location/latest/developerguide/open-data.html">Open Data</a> styles:</p> <ul> <li> <p>VectorOpenDataStandardLight, VectorOpenDataStandardDark, VectorOpenDataVisualizationLight, VectorOpenDataVisualizationDark – <code>Amazon Ember Regular,Noto Sans Regular</code> \| <code>Amazon Ember Bold,Noto Sans Bold</code> \| <code>Amazon Ember Medium,Noto Sans Medium</code> \| <code>Amazon Ember Regular Italic,Noto Sans Italic</code> \| <code>Amazon Ember Condensed RC Regular,Noto Sans Regular</code> \| <code>Amazon Ember Condensed RC Bold,Noto Sans Bold</code> </p> </li> </ul> <note> <p>The fonts used by the Open Data map styles are combined fonts that use <code>Amazon Ember</code> for most glyphs but <code>Noto Sans</code> for glyphs unsupported by <code>Amazon Ember</code>.</p> </note>|
|FontUnicodeRange|path|string|true|A Unicode range of characters to download glyphs for. Each response will contain 256 characters. For example, 0–255 includes all characters from range <code>U+0000</code> to <code>00FF</code>. Must be aligned to multiples of 256.|
|key|query|string(password)|false|The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.|
|MapName|path|string|true|The map resource associated with the glyph ﬁle.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Blob": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getmapglyphs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMapGlyphsResponse](#schemagetmapglyphsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMapSprites

<a id="opIdGetMapSprites"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string/sprites/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /maps/v0/maps/{MapName}/sprites/{FileName}`

Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.

<h3 id="getmapsprites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|FileName|path|string|true|<p>The name of the sprite ﬁle. Use the following ﬁle names for the sprite sheet:</p> <ul> <li> <p> <code>sprites.png</code> </p> </li> <li> <p> <code>sprites@2x.png</code> for high pixel density displays</p> </li> </ul> <p>For the JSON document containing image offsets. Use the following ﬁle names:</p> <ul> <li> <p> <code>sprites.json</code> </p> </li> <li> <p> <code>sprites@2x.json</code> for high pixel density displays</p> </li> </ul>|
|key|query|string(password)|false|The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.|
|MapName|path|string|true|The map resource associated with the sprite ﬁle.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Blob": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getmapsprites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMapSpritesResponse](#schemagetmapspritesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMapStyleDescriptor

<a id="opIdGetMapStyleDescriptor"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string/style-descriptor \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /maps/v0/maps/{MapName}/style-descriptor`

<p>Retrieves the map style descriptor from a map resource. </p> <p>The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.</p>

<h3 id="getmapstyledescriptor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string(password)|false|The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.|
|MapName|path|string|true|The map resource to retrieve the style descriptor from.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Blob": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getmapstyledescriptor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMapStyleDescriptorResponse](#schemagetmapstyledescriptorresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetMapTile

<a id="opIdGetMapTile"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/maps/string/tiles/string/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}`

<p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level. </p> <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>

<h3 id="getmaptile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string(password)|false|The optional <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">API key</a> to authorize the request.|
|MapName|path|string|true|The map resource to retrieve the map tiles from.|
|X|path|string|true|The X axis value for the map tile.|
|Y|path|string|true|The Y axis value for the map tile. |
|Z|path|string|true|The zoom value for the map tile.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Blob": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getmaptile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetMapTileResponse](#schemagetmaptileresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## GetPlace

<a id="opIdGetPlace"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string/places/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /places/v0/indexes/{IndexName}/places/{PlaceId}`

<p>Finds a place by its unique ID. A <code>PlaceId</code> is returned by other search operations.</p> <note> <p>A PlaceId is valid only if all of the following are the same in the original search request and the call to <code>GetPlace</code>.</p> <ul> <li> <p>Customer Amazon Web Services account</p> </li> <li> <p>Amazon Web Services Region</p> </li> <li> <p>Data provider specified in the place index resource</p> </li> </ul> </note>

<h3 id="getplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource that you want to use for the search.|
|language|query|string|false|<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>|
|PlaceId|path|string|true|The identifier of the place to find.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Place": {
    "AddressNumber": {},
    "Country": {},
    "Geometry": {
      "Point": {}
    },
    "Interpolated": {},
    "Label": {},
    "Municipality": {},
    "Neighborhood": {},
    "PostalCode": {},
    "Region": {},
    "Street": {},
    "SubRegion": {},
    "TimeZone": {
      "Name": {},
      "Offset": {}
    },
    "UnitNumber": {},
    "UnitType": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="getplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetPlaceResponse](#schemagetplaceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListDevicePositions

<a id="opIdListDevicePositions"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/list-positions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/list-positions`

A batch request to retrieve all device positions.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listdevicepositions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The tracker resource containing the requested devices.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of entries returned in a single call.</p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listdevicepositions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListDevicePositionsResponse](#schemalistdevicepositionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGeofenceCollections

<a id="opIdListGeofenceCollections"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/list-collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /geofencing/v0/list-collections`

Lists geofence collections in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listgeofencecollections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listgeofencecollections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGeofenceCollectionsResponse](#schemalistgeofencecollectionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListGeofences

<a id="opIdListGeofences"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/geofencing/v0/collections/string/list-geofences \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /geofencing/v0/collections/{CollectionName}/list-geofences`

Lists geofences stored in a given geofence collection.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listgeofences-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|CollectionName|path|string|true|The name of the geofence collection storing the list of geofences.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of geofences returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listgeofences-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListGeofencesResponse](#schemalistgeofencesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListKeys

<a id="opIdListKeys"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/metadata/v0/list-keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Filter": {
      "KeyStatus": {}
    },
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /metadata/v0/list-keys`

<p>Lists API key resources in your Amazon Web Services account.</p> <important> <p>The API keys feature is in preview. We may add, change, or remove features before announcing general availability. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/using-apikeys.html">Using API keys</a>.</p> </important>

> Body parameter

```json
{
  "Filter": {
    "KeyStatus": {}
  },
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listkeys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Filter|body|object|false|Options for filtering API keys.|
|» » KeyStatus|body|object|false|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listkeys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListKeysResponse](#schemalistkeysresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListMaps

<a id="opIdListMaps"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/maps/v0/list-maps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /maps/v0/list-maps`

Lists map resources in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listmaps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listmaps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListMapsResponse](#schemalistmapsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListPlaceIndexes

<a id="opIdListPlaceIndexes"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/list-indexes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /places/v0/list-indexes`

Lists place index resources in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listplaceindexes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the maximum number of results returned in a single call.</p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listplaceindexes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListPlaceIndexesResponse](#schemalistplaceindexesresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListRouteCalculators

<a id="opIdListRouteCalculators"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/routes/v0/list-calculators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /routes/v0/list-calculators`

Lists route calculator resources in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listroutecalculators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional maximum number of results returned in a single call.</p> <p>Default Value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page.</p> <p>Default Value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listroutecalculators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListRouteCalculatorsResponse](#schemalistroutecalculatorsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTagsForResource

<a id="opIdListTagsForResource"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tags/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /tags/{ResourceArn}`

Returns a list of tags that are applied to the specified Amazon Location resource.

<h3 id="listtagsforresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|<p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtagsforresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTagsForResourceResponse](#schemalisttagsforresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## TagResource

<a id="opIdTagResource"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tags/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Tags": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /tags/{ResourceArn}`

<p>Assigns one or more tags (key-value pairs) to the specified Amazon Location Service resource.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values.</p> <p>You can use the <code>TagResource</code> operation with an Amazon Location Service resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the tags already associated with the resource. If you specify a tag key that's already associated with the resource, the new tag value that you specify replaces the previous value for that tag. </p> <p>You can associate up to 50 tags with a resource.</p>

> Body parameter

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="tagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|<p>The Amazon Resource Name (ARN) of the resource whose tags you want to update.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Tags|body|object|true|<p>Applies one or more tags to specific resource. A tag is a key-value pair that helps you manage, identify, search, and filter your resources.</p> <p>Format: <code>"key" : "value"</code> </p> <p>Restrictions:</p> <ul> <li> <p>Maximum 50 tags per resource.</p> </li> <li> <p>Each tag key must be unique and must have exactly one associated value.</p> </li> <li> <p>Maximum key length: 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length: 256 Unicode characters in UTF-8.</p> </li> <li> <p>Can use alphanumeric characters (A–Z, a–z, 0–9), and the following characters: + - = . _ : / @</p> </li> <li> <p>Cannot use "aws:" as a prefix for a key.</p> </li> </ul>|
|» » **additionalProperties**|body|[TagValue](#schematagvalue)|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="tagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TagResourceResponse](#schematagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrackerConsumers

<a id="opIdListTrackerConsumers"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/trackers/string/list-consumers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /tracking/v0/trackers/{TrackerName}/list-consumers`

Lists geofence collections currently associated to the given tracker resource.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listtrackerconsumers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TrackerName|path|string|true|The tracker resource whose associated geofence collections you want to list.|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "ConsumerArns": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="listtrackerconsumers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrackerConsumersResponse](#schemalisttrackerconsumersresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## ListTrackers

<a id="opIdListTrackers"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/tracking/v0/list-trackers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "MaxResults": 1,
    "NextToken": "string"
  }'
```

`POST /tracking/v0/list-trackers`

Lists tracker resources in your Amazon Web Services account.

> Body parameter

```json
{
  "MaxResults": 1,
  "NextToken": "string"
}
```

<h3 id="listtrackers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MaxResults|query|string|false|Pagination limit|
|NextToken|query|string|false|Pagination token|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» MaxResults|body|integer|false|<p>An optional limit for the number of resources returned in a single call. </p> <p>Default value: <code>100</code> </p>|
|» NextToken|body|string|false|<p>The pagination token specifying which page of results to return in the response. If no token is provided, the default page is the first page. </p> <p>Default value: <code>null</code> </p>|

> Example responses

> 200 Response

```json
{
  "Entries": {},
  "NextToken": {}
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

<h3 id="listtrackers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ListTrackersResponse](#schemalisttrackersresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|482|482|ValidationException|[ValidationException](#schemavalidationexception)|
|483|483|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchPlaceIndexForPosition

<a id="opIdSearchPlaceIndexForPosition"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string/search/position \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "Language": "string",
    "MaxResults": 1,
    "Position": [
      0,
      0
    ]
  }'
```

`POST /places/v0/indexes/{IndexName}/search/position`

Reverse geocodes a given coordinate and returns a legible address. Allows you to search for Places or points of interest near a given position.

> Body parameter

```json
{
  "Language": "string",
  "MaxResults": 1,
  "Position": [
    0,
    0
  ]
}
```

<h3 id="searchplaceindexforposition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource you want to use for the search.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» Language|body|string|false|<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for a location around Athens, Greece, with the <code>language</code> parameter set to <code>en</code>. The <code>city</code> in the results will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the <code>city</code> in the results will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>|
|» MaxResults|body|integer|false|<p>An optional parameter. The maximum number of results returned per request.</p> <p>Default value: <code>50</code> </p>|
|» Position|body|[[Double](#schemadouble)]|true|<p>Specifies the longitude and latitude of the position to query.</p> <p> This parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents a position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p>|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "Summary": {
    "DataSource": {},
    "Language": {},
    "MaxResults": {},
    "Position": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="searchplaceindexforposition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchPlaceIndexForPositionResponse](#schemasearchplaceindexforpositionresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchPlaceIndexForSuggestions

<a id="opIdSearchPlaceIndexForSuggestions"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string/search/suggestions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BiasPosition": [
      0,
      0
    ],
    "FilterBBox": [
      0,
      0,
      0,
      0
    ],
    "FilterCountries": [
      "string"
    ],
    "Language": "string",
    "MaxResults": 1,
    "Text": "password"
  }'
```

`POST /places/v0/indexes/{IndexName}/search/suggestions`

<p>Generates suggestions for addresses and points of interest based on partial or misspelled free-form text. This operation is also known as autocomplete, autosuggest, or fuzzy matching.</p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for suggested place names near a specified position by using <code>BiasPosition</code>, or filter results within a bounding box by using <code>FilterBBox</code>. These parameters are mutually exclusive; using both <code>BiasPosition</code> and <code>FilterBBox</code> in the same command returns an error.</p> </note>

> Body parameter

```json
{
  "BiasPosition": [
    0,
    0
  ],
  "FilterBBox": [
    0,
    0,
    0,
    0
  ],
  "FilterCountries": [
    "string"
  ],
  "Language": "string",
  "MaxResults": 1,
  "Text": "password"
}
```

<h3 id="searchplaceindexforsuggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource you want to use for the search.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BiasPosition|body|[[Double](#schemadouble)]|false|<p>An optional parameter that indicates a preference for place suggestions that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>|
|» FilterBBox|body|[[Double](#schemadouble)]|false|<p>An optional parameter that limits the search results by returning only suggestions within a specified bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>|
|» FilterCountries|body|[[CountryCode](#schemacountrycode)]|false|<p>An optional parameter that limits the search results by returning only suggestions within the provided list of countries.</p> <ul> <li> <p>Use the <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country code. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>|
|» Language|body|string|false|<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Gr</code> to get suggestions with the <code>language</code> parameter set to <code>en</code>. The results found will most likely be returned as <code>Athens, Greece</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα, Ελλάδα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>|
|» MaxResults|body|integer|false|<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>5</code> </p>|
|» Text|body|string(password)|true|The free-form partial text to use to generate place suggestions. For example, <code>eiffel tow</code>.|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "Summary": {
    "BiasPosition": {},
    "DataSource": {},
    "FilterBBox": {},
    "FilterCountries": {},
    "Language": {},
    "MaxResults": {},
    "Text": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="searchplaceindexforsuggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchPlaceIndexForSuggestionsResponse](#schemasearchplaceindexforsuggestionsresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## SearchPlaceIndexForText

<a id="opIdSearchPlaceIndexForText"></a>

> Code samples

```bash
curl https://location.us-east-1.amazonaws.com/places/v0/indexes/string/search/text \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "BiasPosition": [
      0,
      0
    ],
    "FilterBBox": [
      0,
      0,
      0,
      0
    ],
    "FilterCountries": [
      "string"
    ],
    "Language": "string",
    "MaxResults": 1,
    "Text": "password"
  }'
```

`POST /places/v0/indexes/{IndexName}/search/text`

<p>Geocodes free-form text, such as an address, name, city, or region to allow you to search for Places or points of interest. </p> <p>Optional parameters let you narrow your search results by bounding box or country, or bias your search toward a specific position on the globe.</p> <note> <p>You can search for places near a given position using <code>BiasPosition</code>, or filter results within a bounding box using <code>FilterBBox</code>. Providing both parameters simultaneously returns an error.</p> </note> <p>Search results are returned in order of highest to lowest relevance.</p>

> Body parameter

```json
{
  "BiasPosition": [
    0,
    0
  ],
  "FilterBBox": [
    0,
    0,
    0,
    0
  ],
  "FilterCountries": [
    "string"
  ],
  "Language": "string",
  "MaxResults": 1,
  "Text": "password"
}
```

<h3 id="searchplaceindexfortext-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|IndexName|path|string|true|The name of the place index resource you want to use for the search.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|
|body|body|object|true|none|
|» BiasPosition|body|[[Double](#schemadouble)]|false|<p>An optional parameter that indicates a preference for places that are closer to a specified position.</p> <p> If provided, this parameter must contain a pair of numbers. The first number represents the X coordinate, or longitude; the second number represents the Y coordinate, or latitude.</p> <p>For example, <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>.</p> <note> <p> <code>BiasPosition</code> and <code>FilterBBox</code> are mutually exclusive. Specifying both options results in an error. </p> </note>|
|» FilterBBox|body|[[Double](#schemadouble)]|false|<p>An optional parameter that limits the search results by returning only places that are within the provided bounding box.</p> <p> If provided, this parameter must contain a total of four consecutive numbers in two pairs. The first pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the southwest corner of the bounding box; the second pair of numbers represents the X and Y coordinates (longitude and latitude, respectively) of the northeast corner of the bounding box.</p> <p>For example, <code>[-12.7935, -37.4835, -12.0684, -36.9542]</code> represents a bounding box where the southwest corner has longitude <code>-12.7935</code> and latitude <code>-37.4835</code>, and the northeast corner has longitude <code>-12.0684</code> and latitude <code>-36.9542</code>.</p> <note> <p> <code>FilterBBox</code> and <code>BiasPosition</code> are mutually exclusive. Specifying both options results in an error. </p> </note>|
|» FilterCountries|body|[[CountryCode](#schemacountrycode)]|false|<p>An optional parameter that limits the search results by returning only places that are in a specified list of countries.</p> <ul> <li> <p>Valid values include <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> 3-digit country codes. For example, Australia uses three upper-case characters: <code>AUS</code>.</p> </li> </ul>|
|» Language|body|string|false|<p>The preferred language used to return results. The value must be a valid <a href="https://tools.ietf.org/search/bcp47">BCP 47</a> language tag, for example, <code>en</code> for English.</p> <p>This setting affects the languages used in the results, but not the results themselves. If no language is specified, or not supported for a particular result, the partner automatically chooses a language for the result.</p> <p>For an example, we'll use the Greek language. You search for <code>Athens, Greece</code>, with the <code>language</code> parameter set to <code>en</code>. The result found will most likely be returned as <code>Athens</code>.</p> <p>If you set the <code>language</code> parameter to <code>el</code>, for Greek, then the result found will more likely be returned as <code>Αθήνα</code>.</p> <p>If the data provider does not have a value for Greek, the result will be in a language that the provider does support.</p>|
|» MaxResults|body|integer|false|<p>An optional parameter. The maximum number of results returned per request. </p> <p>The default: <code>50</code> </p>|
|» Text|body|string(password)|true|The address, name, city, or region to be used in the search in free-form text format. For example, <code>123 Any Street</code>.|

> Example responses

> 200 Response

```json
{
  "Results": {},
  "Summary": {
    "BiasPosition": {},
    "DataSource": {},
    "FilterBBox": {},
    "FilterCountries": {},
    "Language": {},
    "MaxResults": {},
    "ResultBBox": {},
    "Text": {}
  }
}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="searchplaceindexfortext-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchPlaceIndexForTextResponse](#schemasearchplaceindexfortextresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

## UntagResource

<a id="opIdUntagResource"></a>

> Code samples

```bash
curl 'https://location.us-east-1.amazonaws.com/tags/string#tagKeys?tagKeys=string' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /tags/{ResourceArn}#tagKeys`

Removes one or more tags from the specified Amazon Location resource.

<h3 id="untagresource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ResourceArn|path|string|true|<p>The Amazon Resource Name (ARN) of the resource from which you want to remove tags.</p> <ul> <li> <p>Format example: <code>arn:aws:geo:region:account-id:resourcetype/ExampleResource</code> </p> </li> </ul>|
|tagKeys|query|[[String](#schemastring)]|true|The list of tag keys to remove from the specified resource.|
|X-Amz-Content-Sha256|header|string|false|none|
|X-Amz-Date|header|string|false|none|
|X-Amz-Algorithm|header|string|false|none|
|X-Amz-Credential|header|string|false|none|
|X-Amz-Security-Token|header|string|false|none|
|X-Amz-Signature|header|string|false|none|
|X-Amz-SignedHeaders|header|string|false|none|

> Example responses

> 200 Response

```json
{}
```

> 480 Response

```json
null
```

> 481 Response

```json
null
```

> 482 Response

```json
null
```

> 483 Response

```json
null
```

> 484 Response

```json
null
```

<h3 id="untagresource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[UntagResourceResponse](#schemauntagresourceresponse)|
|480|480|InternalServerException|[InternalServerException](#schemainternalserverexception)|
|481|481|ResourceNotFoundException|[ResourceNotFoundException](#schemaresourcenotfoundexception)|
|482|482|AccessDeniedException|[AccessDeniedException](#schemaaccessdeniedexception)|
|483|483|ValidationException|[ValidationException](#schemavalidationexception)|
|484|484|ThrottlingException|[ThrottlingException](#schemathrottlingexception)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
hmac
</aside>

# Schemas

<h2 id="tocS_AssociateTrackerConsumerResponse">AssociateTrackerConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetrackerconsumerresponse"></a>
<a id="schema_AssociateTrackerConsumerResponse"></a>
<a id="tocSassociatetrackerconsumerresponse"></a>
<a id="tocsassociatetrackerconsumerresponse"></a>

```json
{}
```

<h2 id="tocS_InternalServerException">InternalServerException</h2>
<!-- backwards compatibility -->
<a id="schemainternalserverexception"></a>
<a id="schema_InternalServerException"></a>
<a id="tocSinternalserverexception"></a>
<a id="tocsinternalserverexception"></a>

```json
null
```

<h2 id="tocS_ResourceNotFoundException">ResourceNotFoundException</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundexception"></a>
<a id="schema_ResourceNotFoundException"></a>
<a id="tocSresourcenotfoundexception"></a>
<a id="tocsresourcenotfoundexception"></a>

```json
null
```

<h2 id="tocS_ConflictException">ConflictException</h2>
<!-- backwards compatibility -->
<a id="schemaconflictexception"></a>
<a id="schema_ConflictException"></a>
<a id="tocSconflictexception"></a>
<a id="tocsconflictexception"></a>

```json
null
```

<h2 id="tocS_AccessDeniedException">AccessDeniedException</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdeniedexception"></a>
<a id="schema_AccessDeniedException"></a>
<a id="tocSaccessdeniedexception"></a>
<a id="tocsaccessdeniedexception"></a>

```json
null
```

<h2 id="tocS_ValidationException">ValidationException</h2>
<!-- backwards compatibility -->
<a id="schemavalidationexception"></a>
<a id="schema_ValidationException"></a>
<a id="tocSvalidationexception"></a>
<a id="tocsvalidationexception"></a>

```json
null
```

<h2 id="tocS_ServiceQuotaExceededException">ServiceQuotaExceededException</h2>
<!-- backwards compatibility -->
<a id="schemaservicequotaexceededexception"></a>
<a id="schema_ServiceQuotaExceededException"></a>
<a id="tocSservicequotaexceededexception"></a>
<a id="tocsservicequotaexceededexception"></a>

```json
null
```

<h2 id="tocS_ThrottlingException">ThrottlingException</h2>
<!-- backwards compatibility -->
<a id="schemathrottlingexception"></a>
<a id="schema_ThrottlingException"></a>
<a id="tocSthrottlingexception"></a>
<a id="tocsthrottlingexception"></a>

```json
null
```

<h2 id="tocS_BatchDeleteDevicePositionHistoryResponse">BatchDeleteDevicePositionHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedevicepositionhistoryresponse"></a>
<a id="schema_BatchDeleteDevicePositionHistoryResponse"></a>
<a id="tocSbatchdeletedevicepositionhistoryresponse"></a>
<a id="tocsbatchdeletedevicepositionhistoryresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_Id">Id</h2>
<!-- backwards compatibility -->
<a id="schemaid"></a>
<a id="schema_Id"></a>
<a id="tocSid"></a>
<a id="tocsid"></a>

```json
"string"
```

<h2 id="tocS_BatchDeleteGeofenceResponse">BatchDeleteGeofenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletegeofenceresponse"></a>
<a id="schema_BatchDeleteGeofenceResponse"></a>
<a id="tocSbatchdeletegeofenceresponse"></a>
<a id="tocsbatchdeletegeofenceresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_BatchEvaluateGeofencesResponse">BatchEvaluateGeofencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchevaluategeofencesresponse"></a>
<a id="schema_BatchEvaluateGeofencesResponse"></a>
<a id="tocSbatchevaluategeofencesresponse"></a>
<a id="tocsbatchevaluategeofencesresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_DevicePositionUpdate">DevicePositionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemadevicepositionupdate"></a>
<a id="schema_DevicePositionUpdate"></a>
<a id="tocSdevicepositionupdate"></a>
<a id="tocsdevicepositionupdate"></a>

```json
{
  "Accuracy": {
    "Horizontal": {}
  },
  "DeviceId": {},
  "Position": {},
  "PositionProperties": {
    "property1": "string",
    "property2": "string"
  },
  "SampleTime": {}
}
```

Contains the position update details for a device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accuracy|object|false|none|none|
|DeviceId|object|true|none|none|
|Position|object|true|none|none|
|PositionProperties|object|false|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_BatchGetDevicePositionResponse">BatchGetDevicePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionresponse"></a>
<a id="schema_BatchGetDevicePositionResponse"></a>
<a id="tocSbatchgetdevicepositionresponse"></a>
<a id="tocsbatchgetdevicepositionresponse"></a>

```json
{
  "DevicePositions": {},
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevicePositions|object|true|none|none|
|Errors|object|true|none|none|

<h2 id="tocS_BatchPutGeofenceResponse">BatchPutGeofenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofenceresponse"></a>
<a id="schema_BatchPutGeofenceResponse"></a>
<a id="tocSbatchputgeofenceresponse"></a>
<a id="tocsbatchputgeofenceresponse"></a>

```json
{
  "Errors": {},
  "Successes": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|
|Successes|object|true|none|none|

<h2 id="tocS_BatchPutGeofenceRequestEntry">BatchPutGeofenceRequestEntry</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofencerequestentry"></a>
<a id="schema_BatchPutGeofenceRequestEntry"></a>
<a id="tocSbatchputgeofencerequestentry"></a>
<a id="tocsbatchputgeofencerequestentry"></a>

```json
{
  "GeofenceId": {},
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  }
}
```

Contains geofence geometry details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeofenceId|object|true|none|none|
|Geometry|object|true|none|none|

<h2 id="tocS_BatchUpdateDevicePositionResponse">BatchUpdateDevicePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedevicepositionresponse"></a>
<a id="schema_BatchUpdateDevicePositionResponse"></a>
<a id="tocSbatchupdatedevicepositionresponse"></a>
<a id="tocsbatchupdatedevicepositionresponse"></a>

```json
{
  "Errors": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Errors|object|true|none|none|

<h2 id="tocS_CalculateRouteResponse">CalculateRouteResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculaterouteresponse"></a>
<a id="schema_CalculateRouteResponse"></a>
<a id="tocScalculaterouteresponse"></a>
<a id="tocscalculaterouteresponse"></a>

```json
{
  "Legs": {},
  "Summary": {
    "DataSource": {},
    "Distance": {},
    "DistanceUnit": {},
    "DurationSeconds": {},
    "RouteBBox": {}
  }
}
```

Returns the result of the route calculation. Metadata includes legs and route summary.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Legs|object|true|none|none|
|Summary|object|true|none|none|

<h2 id="tocS_Boolean">Boolean</h2>
<!-- backwards compatibility -->
<a id="schemaboolean"></a>
<a id="schema_Boolean"></a>
<a id="tocSboolean"></a>
<a id="tocsboolean"></a>

```json
true
```

<h2 id="tocS_Double">Double</h2>
<!-- backwards compatibility -->
<a id="schemadouble"></a>
<a id="schema_Double"></a>
<a id="tocSdouble"></a>
<a id="tocsdouble"></a>

```json
0
```

<h2 id="tocS_TruckDimensions">TruckDimensions</h2>
<!-- backwards compatibility -->
<a id="schematruckdimensions"></a>
<a id="schema_TruckDimensions"></a>
<a id="tocStruckdimensions"></a>
<a id="tocstruckdimensions"></a>

```json
{
  "Height": {},
  "Length": {},
  "Unit": {},
  "Width": {}
}
```

Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Height|object|false|none|none|
|Length|object|false|none|none|
|Unit|object|false|none|none|
|Width|object|false|none|none|

<h2 id="tocS_TruckWeight">TruckWeight</h2>
<!-- backwards compatibility -->
<a id="schematruckweight"></a>
<a id="schema_TruckWeight"></a>
<a id="tocStruckweight"></a>
<a id="tocstruckweight"></a>

```json
{
  "Total": {},
  "Unit": {}
}
```

Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Total|object|false|none|none|
|Unit|object|false|none|none|

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
[
  0,
  0
]
```

<h2 id="tocS_CalculateRouteMatrixResponse">CalculateRouteMatrixResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixresponse"></a>
<a id="schema_CalculateRouteMatrixResponse"></a>
<a id="tocScalculateroutematrixresponse"></a>
<a id="tocscalculateroutematrixresponse"></a>

```json
{
  "RouteMatrix": {},
  "SnappedDeparturePositions": {},
  "SnappedDestinationPositions": {},
  "Summary": {
    "DataSource": {},
    "DistanceUnit": {},
    "ErrorCount": {},
    "RouteCount": {}
  }
}
```

Returns the result of the route matrix calculation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|RouteMatrix|object|true|none|none|
|SnappedDeparturePositions|object|false|none|none|
|SnappedDestinationPositions|object|false|none|none|
|Summary|object|true|none|none|

<h2 id="tocS_CreateGeofenceCollectionResponse">CreateGeofenceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreategeofencecollectionresponse"></a>
<a id="schema_CreateGeofenceCollectionResponse"></a>
<a id="tocScreategeofencecollectionresponse"></a>
<a id="tocscreategeofencecollectionresponse"></a>

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "CreateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionArn|object|true|none|none|
|CollectionName|object|true|none|none|
|CreateTime|object|true|none|none|

<h2 id="tocS_TagValue">TagValue</h2>
<!-- backwards compatibility -->
<a id="schematagvalue"></a>
<a id="schema_TagValue"></a>
<a id="tocStagvalue"></a>
<a id="tocstagvalue"></a>

```json
"string"
```

<h2 id="tocS_CreateKeyResponse">CreateKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyresponse"></a>
<a id="schema_CreateKeyResponse"></a>
<a id="tocScreatekeyresponse"></a>
<a id="tocscreatekeyresponse"></a>

```json
{
  "CreateTime": {},
  "Key": {},
  "KeyArn": {},
  "KeyName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|Key|object|true|none|none|
|KeyArn|object|true|none|none|
|KeyName|object|true|none|none|

<h2 id="tocS_ApiKeyRestrictionsAllowActionsList">ApiKeyRestrictionsAllowActionsList</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrestrictionsallowactionslist"></a>
<a id="schema_ApiKeyRestrictionsAllowActionsList"></a>
<a id="tocSapikeyrestrictionsallowactionslist"></a>
<a id="tocsapikeyrestrictionsallowactionslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApiKeyRestrictionsAllowReferersList">ApiKeyRestrictionsAllowReferersList</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrestrictionsallowrefererslist"></a>
<a id="schema_ApiKeyRestrictionsAllowReferersList"></a>
<a id="tocSapikeyrestrictionsallowrefererslist"></a>
<a id="tocsapikeyrestrictionsallowrefererslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ApiKeyRestrictionsAllowResourcesList">ApiKeyRestrictionsAllowResourcesList</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrestrictionsallowresourceslist"></a>
<a id="schema_ApiKeyRestrictionsAllowResourcesList"></a>
<a id="tocSapikeyrestrictionsallowresourceslist"></a>
<a id="tocsapikeyrestrictionsallowresourceslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_CreateMapResponse">CreateMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatemapresponse"></a>
<a id="schema_CreateMapResponse"></a>
<a id="tocScreatemapresponse"></a>
<a id="tocscreatemapresponse"></a>

```json
{
  "CreateTime": {},
  "MapArn": {},
  "MapName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|MapArn|object|true|none|none|
|MapName|object|true|none|none|

<h2 id="tocS_MapStyle">MapStyle</h2>
<!-- backwards compatibility -->
<a id="schemamapstyle"></a>
<a id="schema_MapStyle"></a>
<a id="tocSmapstyle"></a>
<a id="tocsmapstyle"></a>

```json
"string"
```

<h2 id="tocS_CreatePlaceIndexResponse">CreatePlaceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateplaceindexresponse"></a>
<a id="schema_CreatePlaceIndexResponse"></a>
<a id="tocScreateplaceindexresponse"></a>
<a id="tocscreateplaceindexresponse"></a>

```json
{
  "CreateTime": {},
  "IndexArn": {},
  "IndexName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|IndexArn|object|true|none|none|
|IndexName|object|true|none|none|

<h2 id="tocS_IntendedUse">IntendedUse</h2>
<!-- backwards compatibility -->
<a id="schemaintendeduse"></a>
<a id="schema_IntendedUse"></a>
<a id="tocSintendeduse"></a>
<a id="tocsintendeduse"></a>

```json
"SingleUse"
```

<h2 id="tocS_CreateRouteCalculatorResponse">CreateRouteCalculatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateroutecalculatorresponse"></a>
<a id="schema_CreateRouteCalculatorResponse"></a>
<a id="tocScreateroutecalculatorresponse"></a>
<a id="tocscreateroutecalculatorresponse"></a>

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "CreateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatorArn|object|true|none|none|
|CalculatorName|object|true|none|none|
|CreateTime|object|true|none|none|

<h2 id="tocS_CreateTrackerResponse">CreateTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrackerresponse"></a>
<a id="schema_CreateTrackerResponse"></a>
<a id="tocScreatetrackerresponse"></a>
<a id="tocscreatetrackerresponse"></a>

```json
{
  "CreateTime": {},
  "TrackerArn": {},
  "TrackerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|TrackerArn|object|true|none|none|
|TrackerName|object|true|none|none|

<h2 id="tocS_DeleteGeofenceCollectionResponse">DeleteGeofenceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletegeofencecollectionresponse"></a>
<a id="schema_DeleteGeofenceCollectionResponse"></a>
<a id="tocSdeletegeofencecollectionresponse"></a>
<a id="tocsdeletegeofencecollectionresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteKeyResponse">DeleteKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeyresponse"></a>
<a id="schema_DeleteKeyResponse"></a>
<a id="tocSdeletekeyresponse"></a>
<a id="tocsdeletekeyresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteMapResponse">DeleteMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletemapresponse"></a>
<a id="schema_DeleteMapResponse"></a>
<a id="tocSdeletemapresponse"></a>
<a id="tocsdeletemapresponse"></a>

```json
{}
```

<h2 id="tocS_DeletePlaceIndexResponse">DeletePlaceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaceindexresponse"></a>
<a id="schema_DeletePlaceIndexResponse"></a>
<a id="tocSdeleteplaceindexresponse"></a>
<a id="tocsdeleteplaceindexresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteCalculatorResponse">DeleteRouteCalculatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroutecalculatorresponse"></a>
<a id="schema_DeleteRouteCalculatorResponse"></a>
<a id="tocSdeleteroutecalculatorresponse"></a>
<a id="tocsdeleteroutecalculatorresponse"></a>

```json
{}
```

<h2 id="tocS_DeleteTrackerResponse">DeleteTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrackerresponse"></a>
<a id="schema_DeleteTrackerResponse"></a>
<a id="tocSdeletetrackerresponse"></a>
<a id="tocsdeletetrackerresponse"></a>

```json
{}
```

<h2 id="tocS_DescribeGeofenceCollectionResponse">DescribeGeofenceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribegeofencecollectionresponse"></a>
<a id="schema_DescribeGeofenceCollectionResponse"></a>
<a id="tocSdescribegeofencecollectionresponse"></a>
<a id="tocsdescribegeofencecollectionresponse"></a>

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "CreateTime": {},
  "Description": {},
  "KmsKeyId": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionArn|object|true|none|none|
|CollectionName|object|true|none|none|
|CreateTime|object|true|none|none|
|Description|object|true|none|none|
|KmsKeyId|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|Tags|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DescribeKeyResponse">DescribeKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyresponse"></a>
<a id="schema_DescribeKeyResponse"></a>
<a id="tocSdescribekeyresponse"></a>
<a id="tocsdescribekeyresponse"></a>

```json
{
  "CreateTime": {},
  "Description": {},
  "ExpireTime": {},
  "Key": {},
  "KeyArn": {},
  "KeyName": {},
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|Description|object|false|none|none|
|ExpireTime|object|true|none|none|
|Key|object|true|none|none|
|KeyArn|object|true|none|none|
|KeyName|object|true|none|none|
|Restrictions|[ApiKeyRestrictions](#schemaapikeyrestrictions)|true|none|API Restrictions on the allowed actions, resources, and referers for an API key resource.|
|Tags|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DescribeMapResponse">DescribeMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribemapresponse"></a>
<a id="schema_DescribeMapResponse"></a>
<a id="tocSdescribemapresponse"></a>
<a id="tocsdescribemapresponse"></a>

```json
{
  "Configuration": {
    "Style": {}
  },
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "MapArn": {},
  "MapName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|true|none|none|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|true|none|none|
|MapArn|object|true|none|none|
|MapName|object|true|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DescribePlaceIndexResponse">DescribePlaceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplaceindexresponse"></a>
<a id="schema_DescribePlaceIndexResponse"></a>
<a id="tocSdescribeplaceindexresponse"></a>
<a id="tocsdescribeplaceindexresponse"></a>

```json
{
  "CreateTime": {},
  "DataSource": {},
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": {},
  "IndexArn": {},
  "IndexName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|DataSourceConfiguration|object|true|none|none|
|Description|object|true|none|none|
|IndexArn|object|true|none|none|
|IndexName|object|true|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DescribeRouteCalculatorResponse">DescribeRouteCalculatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescriberoutecalculatorresponse"></a>
<a id="schema_DescribeRouteCalculatorResponse"></a>
<a id="tocSdescriberoutecalculatorresponse"></a>
<a id="tocsdescriberoutecalculatorresponse"></a>

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatorArn|object|true|none|none|
|CalculatorName|object|true|none|none|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|true|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DescribeTrackerResponse">DescribeTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrackerresponse"></a>
<a id="schema_DescribeTrackerResponse"></a>
<a id="tocSdescribetrackerresponse"></a>
<a id="tocsdescribetrackerresponse"></a>

```json
{
  "CreateTime": {},
  "Description": {},
  "KmsKeyId": {},
  "PositionFiltering": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TrackerArn": {},
  "TrackerName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|Description|object|true|none|none|
|KmsKeyId|object|false|none|none|
|PositionFiltering|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|Tags|object|false|none|none|
|TrackerArn|object|true|none|none|
|TrackerName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_DisassociateTrackerConsumerResponse">DisassociateTrackerConsumerResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetrackerconsumerresponse"></a>
<a id="schema_DisassociateTrackerConsumerResponse"></a>
<a id="tocSdisassociatetrackerconsumerresponse"></a>
<a id="tocsdisassociatetrackerconsumerresponse"></a>

```json
{}
```

<h2 id="tocS_GetDevicePositionResponse">GetDevicePositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepositionresponse"></a>
<a id="schema_GetDevicePositionResponse"></a>
<a id="tocSgetdevicepositionresponse"></a>
<a id="tocsgetdevicepositionresponse"></a>

```json
{
  "Accuracy": {
    "Horizontal": {}
  },
  "DeviceId": {},
  "Position": {},
  "PositionProperties": {
    "property1": "string",
    "property2": "string"
  },
  "ReceivedTime": {},
  "SampleTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accuracy|object|false|none|none|
|DeviceId|object|false|none|none|
|Position|object|true|none|none|
|PositionProperties|object|false|none|none|
|ReceivedTime|object|true|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_GetDevicePositionHistoryResponse">GetDevicePositionHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepositionhistoryresponse"></a>
<a id="schema_GetDevicePositionHistoryResponse"></a>
<a id="tocSgetdevicepositionhistoryresponse"></a>
<a id="tocsgetdevicepositionhistoryresponse"></a>

```json
{
  "DevicePositions": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevicePositions|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_GetGeofenceResponse">GetGeofenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetgeofenceresponse"></a>
<a id="schema_GetGeofenceResponse"></a>
<a id="tocSgetgeofenceresponse"></a>
<a id="tocsgetgeofenceresponse"></a>

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  },
  "Status": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|GeofenceId|object|true|none|none|
|Geometry|object|true|none|none|
|Status|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_GetMapGlyphsResponse">GetMapGlyphsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmapglyphsresponse"></a>
<a id="schema_GetMapGlyphsResponse"></a>
<a id="tocSgetmapglyphsresponse"></a>
<a id="tocsgetmapglyphsresponse"></a>

```json
{
  "Blob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blob|object|false|none|none|

<h2 id="tocS_GetMapSpritesResponse">GetMapSpritesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmapspritesresponse"></a>
<a id="schema_GetMapSpritesResponse"></a>
<a id="tocSgetmapspritesresponse"></a>
<a id="tocsgetmapspritesresponse"></a>

```json
{
  "Blob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blob|object|false|none|none|

<h2 id="tocS_GetMapStyleDescriptorResponse">GetMapStyleDescriptorResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmapstyledescriptorresponse"></a>
<a id="schema_GetMapStyleDescriptorResponse"></a>
<a id="tocSgetmapstyledescriptorresponse"></a>
<a id="tocsgetmapstyledescriptorresponse"></a>

```json
{
  "Blob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blob|object|false|none|none|

<h2 id="tocS_GetMapTileResponse">GetMapTileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetmaptileresponse"></a>
<a id="schema_GetMapTileResponse"></a>
<a id="tocSgetmaptileresponse"></a>
<a id="tocsgetmaptileresponse"></a>

```json
{
  "Blob": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Blob|object|false|none|none|

<h2 id="tocS_GetPlaceResponse">GetPlaceResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetplaceresponse"></a>
<a id="schema_GetPlaceResponse"></a>
<a id="tocSgetplaceresponse"></a>
<a id="tocsgetplaceresponse"></a>

```json
{
  "Place": {
    "AddressNumber": {},
    "Country": {},
    "Geometry": {
      "Point": {}
    },
    "Interpolated": {},
    "Label": {},
    "Municipality": {},
    "Neighborhood": {},
    "PostalCode": {},
    "Region": {},
    "Street": {},
    "SubRegion": {},
    "TimeZone": {
      "Name": {},
      "Offset": {}
    },
    "UnitNumber": {},
    "UnitType": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Place|object|true|none|none|

<h2 id="tocS_ListDevicePositionsResponse">ListDevicePositionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepositionsresponse"></a>
<a id="schema_ListDevicePositionsResponse"></a>
<a id="tocSlistdevicepositionsresponse"></a>
<a id="tocslistdevicepositionsresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGeofenceCollectionsResponse">ListGeofenceCollectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencecollectionsresponse"></a>
<a id="schema_ListGeofenceCollectionsResponse"></a>
<a id="tocSlistgeofencecollectionsresponse"></a>
<a id="tocslistgeofencecollectionsresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGeofencesResponse">ListGeofencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencesresponse"></a>
<a id="schema_ListGeofencesResponse"></a>
<a id="tocSlistgeofencesresponse"></a>
<a id="tocslistgeofencesresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListKeysResponse">ListKeysResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysresponse"></a>
<a id="schema_ListKeysResponse"></a>
<a id="tocSlistkeysresponse"></a>
<a id="tocslistkeysresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"Active"
```

<h2 id="tocS_ListMapsResponse">ListMapsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmapsresponse"></a>
<a id="schema_ListMapsResponse"></a>
<a id="tocSlistmapsresponse"></a>
<a id="tocslistmapsresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPlaceIndexesResponse">ListPlaceIndexesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceindexesresponse"></a>
<a id="schema_ListPlaceIndexesResponse"></a>
<a id="tocSlistplaceindexesresponse"></a>
<a id="tocslistplaceindexesresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRouteCalculatorsResponse">ListRouteCalculatorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistroutecalculatorsresponse"></a>
<a id="schema_ListRouteCalculatorsResponse"></a>
<a id="tocSlistroutecalculatorsresponse"></a>
<a id="tocslistroutecalculatorsresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTagsForResourceResponse">ListTagsForResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourceresponse"></a>
<a id="schema_ListTagsForResourceResponse"></a>
<a id="tocSlisttagsforresourceresponse"></a>
<a id="tocslisttagsforresourceresponse"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|false|none|none|

<h2 id="tocS_ListTrackerConsumersResponse">ListTrackerConsumersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackerconsumersresponse"></a>
<a id="schema_ListTrackerConsumersResponse"></a>
<a id="tocSlisttrackerconsumersresponse"></a>
<a id="tocslisttrackerconsumersresponse"></a>

```json
{
  "ConsumerArns": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerArns|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrackersResponse">ListTrackersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackersresponse"></a>
<a id="schema_ListTrackersResponse"></a>
<a id="tocSlisttrackersresponse"></a>
<a id="tocslisttrackersresponse"></a>

```json
{
  "Entries": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_PutGeofenceResponse">PutGeofenceResponse</h2>
<!-- backwards compatibility -->
<a id="schemaputgeofenceresponse"></a>
<a id="schema_PutGeofenceResponse"></a>
<a id="tocSputgeofenceresponse"></a>
<a id="tocsputgeofenceresponse"></a>

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|GeofenceId|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_Circle">Circle</h2>
<!-- backwards compatibility -->
<a id="schemacircle"></a>
<a id="schema_Circle"></a>
<a id="tocScircle"></a>
<a id="tocscircle"></a>

```json
{
  "Center": {},
  "Radius": {}
}
```

A circle on the earth, as defined by a center point and a radius.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Center|object|true|none|none|
|Radius|object|true|none|none|

<h2 id="tocS_LinearRings">LinearRings</h2>
<!-- backwards compatibility -->
<a id="schemalinearrings"></a>
<a id="schema_LinearRings"></a>
<a id="tocSlinearrings"></a>
<a id="tocslinearrings"></a>

```json
[
  [
    [
      0,
      0
    ],
    [
      0,
      0
    ],
    [
      0,
      0
    ],
    [
      0,
      0
    ]
  ]
]
```

<h2 id="tocS_SearchPlaceIndexForPositionResponse">SearchPlaceIndexForPositionResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforpositionresponse"></a>
<a id="schema_SearchPlaceIndexForPositionResponse"></a>
<a id="tocSsearchplaceindexforpositionresponse"></a>
<a id="tocssearchplaceindexforpositionresponse"></a>

```json
{
  "Results": {},
  "Summary": {
    "DataSource": {},
    "Language": {},
    "MaxResults": {},
    "Position": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|true|none|none|
|Summary|object|true|none|none|

<h2 id="tocS_SearchPlaceIndexForSuggestionsResponse">SearchPlaceIndexForSuggestionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforsuggestionsresponse"></a>
<a id="schema_SearchPlaceIndexForSuggestionsResponse"></a>
<a id="tocSsearchplaceindexforsuggestionsresponse"></a>
<a id="tocssearchplaceindexforsuggestionsresponse"></a>

```json
{
  "Results": {},
  "Summary": {
    "BiasPosition": {},
    "DataSource": {},
    "FilterBBox": {},
    "FilterCountries": {},
    "Language": {},
    "MaxResults": {},
    "Text": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|true|none|none|
|Summary|object|true|none|none|

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"
```

<h2 id="tocS_SearchPlaceIndexForTextResponse">SearchPlaceIndexForTextResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexfortextresponse"></a>
<a id="schema_SearchPlaceIndexForTextResponse"></a>
<a id="tocSsearchplaceindexfortextresponse"></a>
<a id="tocssearchplaceindexfortextresponse"></a>

```json
{
  "Results": {},
  "Summary": {
    "BiasPosition": {},
    "DataSource": {},
    "FilterBBox": {},
    "FilterCountries": {},
    "Language": {},
    "MaxResults": {},
    "ResultBBox": {},
    "Text": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Results|object|true|none|none|
|Summary|object|true|none|none|

<h2 id="tocS_TagResourceResponse">TagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schematagresourceresponse"></a>
<a id="schema_TagResourceResponse"></a>
<a id="tocStagresourceresponse"></a>
<a id="tocstagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_UntagResourceResponse">UntagResourceResponse</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourceresponse"></a>
<a id="schema_UntagResourceResponse"></a>
<a id="tocSuntagresourceresponse"></a>
<a id="tocsuntagresourceresponse"></a>

```json
{}
```

<h2 id="tocS_String">String</h2>
<!-- backwards compatibility -->
<a id="schemastring"></a>
<a id="schema_String"></a>
<a id="tocSstring"></a>
<a id="tocsstring"></a>

```json
"string"
```

<h2 id="tocS_UpdateGeofenceCollectionResponse">UpdateGeofenceCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdategeofencecollectionresponse"></a>
<a id="schema_UpdateGeofenceCollectionResponse"></a>
<a id="tocSupdategeofencecollectionresponse"></a>
<a id="tocsupdategeofencecollectionresponse"></a>

```json
{
  "CollectionArn": {},
  "CollectionName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionArn|object|true|none|none|
|CollectionName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_UpdateKeyResponse">UpdateKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeyresponse"></a>
<a id="schema_UpdateKeyResponse"></a>
<a id="tocSupdatekeyresponse"></a>
<a id="tocsupdatekeyresponse"></a>

```json
{
  "KeyArn": {},
  "KeyName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyArn|object|true|none|none|
|KeyName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_UpdateMapResponse">UpdateMapResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemapresponse"></a>
<a id="schema_UpdateMapResponse"></a>
<a id="tocSupdatemapresponse"></a>
<a id="tocsupdatemapresponse"></a>

```json
{
  "MapArn": {},
  "MapName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MapArn|object|true|none|none|
|MapName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_UpdatePlaceIndexResponse">UpdatePlaceIndexResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateplaceindexresponse"></a>
<a id="schema_UpdatePlaceIndexResponse"></a>
<a id="tocSupdateplaceindexresponse"></a>
<a id="tocsupdateplaceindexresponse"></a>

```json
{
  "IndexArn": {},
  "IndexName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IndexArn|object|true|none|none|
|IndexName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_UpdateRouteCalculatorResponse">UpdateRouteCalculatorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutecalculatorresponse"></a>
<a id="schema_UpdateRouteCalculatorResponse"></a>
<a id="tocSupdateroutecalculatorresponse"></a>
<a id="tocsupdateroutecalculatorresponse"></a>

```json
{
  "CalculatorArn": {},
  "CalculatorName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatorArn|object|true|none|none|
|CalculatorName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_UpdateTrackerResponse">UpdateTrackerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrackerresponse"></a>
<a id="schema_UpdateTrackerResponse"></a>
<a id="tocSupdatetrackerresponse"></a>
<a id="tocsupdatetrackerresponse"></a>

```json
{
  "TrackerArn": {},
  "TrackerName": {},
  "UpdateTime": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TrackerArn|object|true|none|none|
|TrackerName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ApiKey">ApiKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_ApiKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
"password"
```

<h2 id="tocS_ApiKeyAction">ApiKeyAction</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyaction"></a>
<a id="schema_ApiKeyAction"></a>
<a id="tocSapikeyaction"></a>
<a id="tocsapikeyaction"></a>

```json
"string"
```

<h2 id="tocS_ApiKeyFilter">ApiKeyFilter</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyfilter"></a>
<a id="schema_ApiKeyFilter"></a>
<a id="tocSapikeyfilter"></a>
<a id="tocsapikeyfilter"></a>

```json
{
  "KeyStatus": {}
}
```

Options for filtering API keys.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KeyStatus|object|false|none|none|

<h2 id="tocS_ApiKeyRestrictions">ApiKeyRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyrestrictions"></a>
<a id="schema_ApiKeyRestrictions"></a>
<a id="tocSapikeyrestrictions"></a>
<a id="tocsapikeyrestrictions"></a>

```json
{
  "AllowActions": {},
  "AllowReferers": {},
  "AllowResources": {}
}
```

API Restrictions on the allowed actions, resources, and referers for an API key resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AllowActions|object|true|none|none|
|AllowReferers|object|false|none|none|
|AllowResources|object|true|none|none|

<h2 id="tocS_RefererPattern">RefererPattern</h2>
<!-- backwards compatibility -->
<a id="schemarefererpattern"></a>
<a id="schema_RefererPattern"></a>
<a id="tocSrefererpattern"></a>
<a id="tocsrefererpattern"></a>

```json
"string"
```

<h2 id="tocS_GeoArn">GeoArn</h2>
<!-- backwards compatibility -->
<a id="schemageoarn"></a>
<a id="schema_GeoArn"></a>
<a id="tocSgeoarn"></a>
<a id="tocsgeoarn"></a>

```json
"string"
```

<h2 id="tocS_Arn">Arn</h2>
<!-- backwards compatibility -->
<a id="schemaarn"></a>
<a id="schema_Arn"></a>
<a id="tocSarn"></a>
<a id="tocsarn"></a>

```json
"string"
```

<h2 id="tocS_ArnList">ArnList</h2>
<!-- backwards compatibility -->
<a id="schemaarnlist"></a>
<a id="schema_ArnList"></a>
<a id="tocSarnlist"></a>
<a id="tocsarnlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceName">ResourceName</h2>
<!-- backwards compatibility -->
<a id="schemaresourcename"></a>
<a id="schema_ResourceName"></a>
<a id="tocSresourcename"></a>
<a id="tocsresourcename"></a>

```json
"string"
```

<h2 id="tocS_AssociateTrackerConsumerRequest">AssociateTrackerConsumerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatetrackerconsumerrequest"></a>
<a id="schema_AssociateTrackerConsumerRequest"></a>
<a id="tocSassociatetrackerconsumerrequest"></a>
<a id="tocsassociatetrackerconsumerrequest"></a>

```json
{
  "ConsumerArn": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ConsumerArn|object|true|none|none|

<h2 id="tocS_BatchItemError">BatchItemError</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemerror"></a>
<a id="schema_BatchItemError"></a>
<a id="tocSbatchitemerror"></a>
<a id="tocsbatchitemerror"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

Contains the batch request error details associated with the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|false|none|none|
|Message|object|false|none|none|

<h2 id="tocS_BatchDeleteDevicePositionHistoryError">BatchDeleteDevicePositionHistoryError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedevicepositionhistoryerror"></a>
<a id="schema_BatchDeleteDevicePositionHistoryError"></a>
<a id="tocSbatchdeletedevicepositionhistoryerror"></a>
<a id="tocsbatchdeletedevicepositionhistoryerror"></a>

```json
{
  "DeviceId": {},
  "Error": {
    "Code": {},
    "Message": {}
  }
}
```

Contains the tracker resource details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|Error|[BatchItemError](#schemabatchitemerror)|true|none|Contains the batch request error details associated with the request.|

<h2 id="tocS_BatchDeleteDevicePositionHistoryErrorList">BatchDeleteDevicePositionHistoryErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedevicepositionhistoryerrorlist"></a>
<a id="schema_BatchDeleteDevicePositionHistoryErrorList"></a>
<a id="tocSbatchdeletedevicepositionhistoryerrorlist"></a>
<a id="tocsbatchdeletedevicepositionhistoryerrorlist"></a>

```json
[
  {
    "DeviceId": {},
    "Error": {
      "Code": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_BatchDeleteDevicePositionHistoryRequestDeviceIdsList">BatchDeleteDevicePositionHistoryRequestDeviceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedevicepositionhistoryrequestdeviceidslist"></a>
<a id="schema_BatchDeleteDevicePositionHistoryRequestDeviceIdsList"></a>
<a id="tocSbatchdeletedevicepositionhistoryrequestdeviceidslist"></a>
<a id="tocsbatchdeletedevicepositionhistoryrequestdeviceidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeleteDevicePositionHistoryRequest">BatchDeleteDevicePositionHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletedevicepositionhistoryrequest"></a>
<a id="schema_BatchDeleteDevicePositionHistoryRequest"></a>
<a id="tocSbatchdeletedevicepositionhistoryrequest"></a>
<a id="tocsbatchdeletedevicepositionhistoryrequest"></a>

```json
{
  "DeviceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceIds|object|true|none|none|

<h2 id="tocS_BatchDeleteGeofenceError">BatchDeleteGeofenceError</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletegeofenceerror"></a>
<a id="schema_BatchDeleteGeofenceError"></a>
<a id="tocSbatchdeletegeofenceerror"></a>
<a id="tocsbatchdeletegeofenceerror"></a>

```json
{
  "Error": {
    "Code": {},
    "Message": {}
  },
  "GeofenceId": {}
}
```

Contains error details for each geofence that failed to delete from the geofence collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|true|none|none|
|GeofenceId|object|true|none|none|

<h2 id="tocS_BatchDeleteGeofenceErrorList">BatchDeleteGeofenceErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletegeofenceerrorlist"></a>
<a id="schema_BatchDeleteGeofenceErrorList"></a>
<a id="tocSbatchdeletegeofenceerrorlist"></a>
<a id="tocsbatchdeletegeofenceerrorlist"></a>

```json
[
  {
    "Error": {
      "Code": {},
      "Message": {}
    },
    "GeofenceId": {}
  }
]
```

<h2 id="tocS_BatchDeleteGeofenceRequestGeofenceIdsList">BatchDeleteGeofenceRequestGeofenceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletegeofencerequestgeofenceidslist"></a>
<a id="schema_BatchDeleteGeofenceRequestGeofenceIdsList"></a>
<a id="tocSbatchdeletegeofencerequestgeofenceidslist"></a>
<a id="tocsbatchdeletegeofencerequestgeofenceidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchDeleteGeofenceRequest">BatchDeleteGeofenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletegeofencerequest"></a>
<a id="schema_BatchDeleteGeofenceRequest"></a>
<a id="tocSbatchdeletegeofencerequest"></a>
<a id="tocsbatchdeletegeofencerequest"></a>

```json
{
  "GeofenceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GeofenceIds|object|true|none|none|

<h2 id="tocS_Timestamp">Timestamp</h2>
<!-- backwards compatibility -->
<a id="schematimestamp"></a>
<a id="schema_Timestamp"></a>
<a id="tocStimestamp"></a>
<a id="tocstimestamp"></a>

```json
"1970-01-01T00:00:00Z"
```

<h2 id="tocS_BatchEvaluateGeofencesError">BatchEvaluateGeofencesError</h2>
<!-- backwards compatibility -->
<a id="schemabatchevaluategeofenceserror"></a>
<a id="schema_BatchEvaluateGeofencesError"></a>
<a id="tocSbatchevaluategeofenceserror"></a>
<a id="tocsbatchevaluategeofenceserror"></a>

```json
{
  "DeviceId": {},
  "Error": {
    "Code": {},
    "Message": {}
  },
  "SampleTime": {}
}
```

Contains error details for each device that failed to evaluate its position against the geofences in a given geofence collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|Error|object|true|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_BatchEvaluateGeofencesErrorList">BatchEvaluateGeofencesErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchevaluategeofenceserrorlist"></a>
<a id="schema_BatchEvaluateGeofencesErrorList"></a>
<a id="tocSbatchevaluategeofenceserrorlist"></a>
<a id="tocsbatchevaluategeofenceserrorlist"></a>

```json
[
  {
    "DeviceId": {},
    "Error": {
      "Code": {},
      "Message": {}
    },
    "SampleTime": {}
  }
]
```

<h2 id="tocS_BatchEvaluateGeofencesRequestDevicePositionUpdatesList">BatchEvaluateGeofencesRequestDevicePositionUpdatesList</h2>
<!-- backwards compatibility -->
<a id="schemabatchevaluategeofencesrequestdevicepositionupdateslist"></a>
<a id="schema_BatchEvaluateGeofencesRequestDevicePositionUpdatesList"></a>
<a id="tocSbatchevaluategeofencesrequestdevicepositionupdateslist"></a>
<a id="tocsbatchevaluategeofencesrequestdevicepositionupdateslist"></a>

```json
[
  {
    "Accuracy": {
      "Horizontal": {}
    },
    "DeviceId": {},
    "Position": {},
    "PositionProperties": {
      "property1": "string",
      "property2": "string"
    },
    "SampleTime": {}
  }
]
```

<h2 id="tocS_BatchEvaluateGeofencesRequest">BatchEvaluateGeofencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchevaluategeofencesrequest"></a>
<a id="schema_BatchEvaluateGeofencesRequest"></a>
<a id="tocSbatchevaluategeofencesrequest"></a>
<a id="tocsbatchevaluategeofencesrequest"></a>

```json
{
  "DevicePositionUpdates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DevicePositionUpdates|object|true|none|none|

<h2 id="tocS_BatchGetDevicePositionError">BatchGetDevicePositionError</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionerror"></a>
<a id="schema_BatchGetDevicePositionError"></a>
<a id="tocSbatchgetdevicepositionerror"></a>
<a id="tocsbatchgetdevicepositionerror"></a>

```json
{
  "DeviceId": {},
  "Error": {
    "Code": {},
    "Message": {}
  }
}
```

Contains error details for each device that didn't return a position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|Error|object|true|none|none|

<h2 id="tocS_BatchGetDevicePositionErrorList">BatchGetDevicePositionErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionerrorlist"></a>
<a id="schema_BatchGetDevicePositionErrorList"></a>
<a id="tocSbatchgetdevicepositionerrorlist"></a>
<a id="tocsbatchgetdevicepositionerrorlist"></a>

```json
[
  {
    "DeviceId": {},
    "Error": {
      "Code": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_BatchGetDevicePositionRequestDeviceIdsList">BatchGetDevicePositionRequestDeviceIdsList</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionrequestdeviceidslist"></a>
<a id="schema_BatchGetDevicePositionRequestDeviceIdsList"></a>
<a id="tocSbatchgetdevicepositionrequestdeviceidslist"></a>
<a id="tocsbatchgetdevicepositionrequestdeviceidslist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_BatchGetDevicePositionRequestTrackerNameString">BatchGetDevicePositionRequestTrackerNameString</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionrequesttrackernamestring"></a>
<a id="schema_BatchGetDevicePositionRequestTrackerNameString"></a>
<a id="tocSbatchgetdevicepositionrequesttrackernamestring"></a>
<a id="tocsbatchgetdevicepositionrequesttrackernamestring"></a>

```json
"string"
```

<h2 id="tocS_BatchGetDevicePositionRequest">BatchGetDevicePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetdevicepositionrequest"></a>
<a id="schema_BatchGetDevicePositionRequest"></a>
<a id="tocSbatchgetdevicepositionrequest"></a>
<a id="tocsbatchgetdevicepositionrequest"></a>

```json
{
  "DeviceIds": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceIds|object|true|none|none|

<h2 id="tocS_DevicePositionList">DevicePositionList</h2>
<!-- backwards compatibility -->
<a id="schemadevicepositionlist"></a>
<a id="schema_DevicePositionList"></a>
<a id="tocSdevicepositionlist"></a>
<a id="tocsdevicepositionlist"></a>

```json
[
  {
    "Accuracy": {
      "Horizontal": {}
    },
    "DeviceId": {},
    "Position": {},
    "PositionProperties": {
      "property1": "string",
      "property2": "string"
    },
    "ReceivedTime": {},
    "SampleTime": {}
  }
]
```

<h2 id="tocS_BatchItemErrorCode">BatchItemErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemabatchitemerrorcode"></a>
<a id="schema_BatchItemErrorCode"></a>
<a id="tocSbatchitemerrorcode"></a>
<a id="tocsbatchitemerrorcode"></a>

```json
"AccessDeniedError"
```

<h2 id="tocS_BatchPutGeofenceError">BatchPutGeofenceError</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofenceerror"></a>
<a id="schema_BatchPutGeofenceError"></a>
<a id="tocSbatchputgeofenceerror"></a>
<a id="tocsbatchputgeofenceerror"></a>

```json
{
  "Error": {
    "Code": {},
    "Message": {}
  },
  "GeofenceId": {}
}
```

Contains error details for each geofence that failed to be stored in a given geofence collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Error|object|true|none|none|
|GeofenceId|object|true|none|none|

<h2 id="tocS_BatchPutGeofenceErrorList">BatchPutGeofenceErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofenceerrorlist"></a>
<a id="schema_BatchPutGeofenceErrorList"></a>
<a id="tocSbatchputgeofenceerrorlist"></a>
<a id="tocsbatchputgeofenceerrorlist"></a>

```json
[
  {
    "Error": {
      "Code": {},
      "Message": {}
    },
    "GeofenceId": {}
  }
]
```

<h2 id="tocS_BatchPutGeofenceRequestEntriesList">BatchPutGeofenceRequestEntriesList</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofencerequestentrieslist"></a>
<a id="schema_BatchPutGeofenceRequestEntriesList"></a>
<a id="tocSbatchputgeofencerequestentrieslist"></a>
<a id="tocsbatchputgeofencerequestentrieslist"></a>

```json
[
  {
    "GeofenceId": {},
    "Geometry": {
      "Circle": {
        "Center": {},
        "Radius": {}
      },
      "Polygon": {}
    }
  }
]
```

<h2 id="tocS_BatchPutGeofenceRequest">BatchPutGeofenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofencerequest"></a>
<a id="schema_BatchPutGeofenceRequest"></a>
<a id="tocSbatchputgeofencerequest"></a>
<a id="tocsbatchputgeofencerequest"></a>

```json
{
  "Entries": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Entries|object|true|none|none|

<h2 id="tocS_GeofenceGeometry">GeofenceGeometry</h2>
<!-- backwards compatibility -->
<a id="schemageofencegeometry"></a>
<a id="schema_GeofenceGeometry"></a>
<a id="tocSgeofencegeometry"></a>
<a id="tocsgeofencegeometry"></a>

```json
{
  "Circle": {
    "Center": {},
    "Radius": {}
  },
  "Polygon": {}
}
```

<p>Contains the geofence geometry details.</p> <p>A geofence geometry is made up of either a polygon or a circle. Can be either a polygon or a circle. Including both will return a validation error.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Circle|object|false|none|none|
|Polygon|object|false|none|none|

<h2 id="tocS_BatchPutGeofenceSuccessList">BatchPutGeofenceSuccessList</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofencesuccesslist"></a>
<a id="schema_BatchPutGeofenceSuccessList"></a>
<a id="tocSbatchputgeofencesuccesslist"></a>
<a id="tocsbatchputgeofencesuccesslist"></a>

```json
[
  {
    "CreateTime": {},
    "GeofenceId": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_BatchPutGeofenceSuccess">BatchPutGeofenceSuccess</h2>
<!-- backwards compatibility -->
<a id="schemabatchputgeofencesuccess"></a>
<a id="schema_BatchPutGeofenceSuccess"></a>
<a id="tocSbatchputgeofencesuccess"></a>
<a id="tocsbatchputgeofencesuccess"></a>

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "UpdateTime": {}
}
```

Contains a summary of each geofence that was successfully stored in a given geofence collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|GeofenceId|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_BatchUpdateDevicePositionError">BatchUpdateDevicePositionError</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedevicepositionerror"></a>
<a id="schema_BatchUpdateDevicePositionError"></a>
<a id="tocSbatchupdatedevicepositionerror"></a>
<a id="tocsbatchupdatedevicepositionerror"></a>

```json
{
  "DeviceId": {},
  "Error": {
    "Code": {},
    "Message": {}
  },
  "SampleTime": {}
}
```

Contains error details for each device that failed to update its position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DeviceId|object|true|none|none|
|Error|object|true|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_BatchUpdateDevicePositionErrorList">BatchUpdateDevicePositionErrorList</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedevicepositionerrorlist"></a>
<a id="schema_BatchUpdateDevicePositionErrorList"></a>
<a id="tocSbatchupdatedevicepositionerrorlist"></a>
<a id="tocsbatchupdatedevicepositionerrorlist"></a>

```json
[
  {
    "DeviceId": {},
    "Error": {
      "Code": {},
      "Message": {}
    },
    "SampleTime": {}
  }
]
```

<h2 id="tocS_BatchUpdateDevicePositionRequestUpdatesList">BatchUpdateDevicePositionRequestUpdatesList</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedevicepositionrequestupdateslist"></a>
<a id="schema_BatchUpdateDevicePositionRequestUpdatesList"></a>
<a id="tocSbatchupdatedevicepositionrequestupdateslist"></a>
<a id="tocsbatchupdatedevicepositionrequestupdateslist"></a>

```json
[
  {
    "Accuracy": {
      "Horizontal": {}
    },
    "DeviceId": {},
    "Position": {},
    "PositionProperties": {
      "property1": "string",
      "property2": "string"
    },
    "SampleTime": {}
  }
]
```

<h2 id="tocS_BatchUpdateDevicePositionRequest">BatchUpdateDevicePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatedevicepositionrequest"></a>
<a id="schema_BatchUpdateDevicePositionRequest"></a>
<a id="tocSbatchupdatedevicepositionrequest"></a>
<a id="tocsbatchupdatedevicepositionrequest"></a>

```json
{
  "Updates": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Updates|object|true|none|none|

<h2 id="tocS_Blob">Blob</h2>
<!-- backwards compatibility -->
<a id="schemablob"></a>
<a id="schema_Blob"></a>
<a id="tocSblob"></a>
<a id="tocsblob"></a>

```json
"string"
```

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
[
  0,
  0,
  0,
  0
]
```

<h2 id="tocS_CalculateRouteCarModeOptions">CalculateRouteCarModeOptions</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutecarmodeoptions"></a>
<a id="schema_CalculateRouteCarModeOptions"></a>
<a id="tocScalculateroutecarmodeoptions"></a>
<a id="tocscalculateroutecarmodeoptions"></a>

```json
{
  "AvoidFerries": {},
  "AvoidTolls": {}
}
```

Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Car</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvoidFerries|object|false|none|none|
|AvoidTolls|object|false|none|none|

<h2 id="tocS_CalculateRouteMatrixRequestDeparturePositionsList">CalculateRouteMatrixRequestDeparturePositionsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixrequestdeparturepositionslist"></a>
<a id="schema_CalculateRouteMatrixRequestDeparturePositionsList"></a>
<a id="tocScalculateroutematrixrequestdeparturepositionslist"></a>
<a id="tocscalculateroutematrixrequestdeparturepositionslist"></a>

```json
[
  [
    0,
    0
  ]
]
```

<h2 id="tocS_CalculateRouteMatrixRequestDestinationPositionsList">CalculateRouteMatrixRequestDestinationPositionsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixrequestdestinationpositionslist"></a>
<a id="schema_CalculateRouteMatrixRequestDestinationPositionsList"></a>
<a id="tocScalculateroutematrixrequestdestinationpositionslist"></a>
<a id="tocscalculateroutematrixrequestdestinationpositionslist"></a>

```json
[
  [
    0,
    0
  ]
]
```

<h2 id="tocS_DistanceUnit">DistanceUnit</h2>
<!-- backwards compatibility -->
<a id="schemadistanceunit"></a>
<a id="schema_DistanceUnit"></a>
<a id="tocSdistanceunit"></a>
<a id="tocsdistanceunit"></a>

```json
"Kilometers"
```

<h2 id="tocS_TravelMode">TravelMode</h2>
<!-- backwards compatibility -->
<a id="schematravelmode"></a>
<a id="schema_TravelMode"></a>
<a id="tocStravelmode"></a>
<a id="tocstravelmode"></a>

```json
"Car"
```

<h2 id="tocS_CalculateRouteTruckModeOptions">CalculateRouteTruckModeOptions</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutetruckmodeoptions"></a>
<a id="schema_CalculateRouteTruckModeOptions"></a>
<a id="tocScalculateroutetruckmodeoptions"></a>
<a id="tocscalculateroutetruckmodeoptions"></a>

```json
{
  "AvoidFerries": {},
  "AvoidTolls": {},
  "Dimensions": {
    "Height": {},
    "Length": {},
    "Unit": {},
    "Width": {}
  },
  "Weight": {
    "Total": {},
    "Unit": {}
  }
}
```

Contains details about additional route preferences for requests that specify <code>TravelMode</code> as <code>Truck</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AvoidFerries|object|false|none|none|
|AvoidTolls|object|false|none|none|
|Dimensions|object|false|none|none|
|Weight|object|false|none|none|

<h2 id="tocS_CalculateRouteMatrixRequest">CalculateRouteMatrixRequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixrequest"></a>
<a id="schema_CalculateRouteMatrixRequest"></a>
<a id="tocScalculateroutematrixrequest"></a>
<a id="tocscalculateroutematrixrequest"></a>

```json
{
  "CarModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {}
  },
  "DepartNow": {},
  "DeparturePositions": {},
  "DepartureTime": {},
  "DestinationPositions": {},
  "DistanceUnit": {},
  "TravelMode": {},
  "TruckModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {},
    "Dimensions": {
      "Height": {},
      "Length": {},
      "Unit": {},
      "Width": {}
    },
    "Weight": {
      "Total": {},
      "Unit": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CarModeOptions|object|false|none|none|
|DepartNow|object|false|none|none|
|DeparturePositions|object|true|none|none|
|DepartureTime|object|false|none|none|
|DestinationPositions|object|true|none|none|
|DistanceUnit|object|false|none|none|
|TravelMode|object|false|none|none|
|TruckModeOptions|object|false|none|none|

<h2 id="tocS_RouteMatrix">RouteMatrix</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrix"></a>
<a id="schema_RouteMatrix"></a>
<a id="tocSroutematrix"></a>
<a id="tocsroutematrix"></a>

```json
[
  [
    {
      "Distance": {},
      "DurationSeconds": {},
      "Error": {
        "Code": {},
        "Message": {}
      }
    }
  ]
]
```

<h2 id="tocS_CalculateRouteMatrixResponseSnappedDeparturePositionsList">CalculateRouteMatrixResponseSnappedDeparturePositionsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixresponsesnappeddeparturepositionslist"></a>
<a id="schema_CalculateRouteMatrixResponseSnappedDeparturePositionsList"></a>
<a id="tocScalculateroutematrixresponsesnappeddeparturepositionslist"></a>
<a id="tocscalculateroutematrixresponsesnappeddeparturepositionslist"></a>

```json
[
  [
    0,
    0
  ]
]
```

<h2 id="tocS_CalculateRouteMatrixResponseSnappedDestinationPositionsList">CalculateRouteMatrixResponseSnappedDestinationPositionsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixresponsesnappeddestinationpositionslist"></a>
<a id="schema_CalculateRouteMatrixResponseSnappedDestinationPositionsList"></a>
<a id="tocScalculateroutematrixresponsesnappeddestinationpositionslist"></a>
<a id="tocscalculateroutematrixresponsesnappeddestinationpositionslist"></a>

```json
[
  [
    0,
    0
  ]
]
```

<h2 id="tocS_CalculateRouteMatrixSummary">CalculateRouteMatrixSummary</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixsummary"></a>
<a id="schema_CalculateRouteMatrixSummary"></a>
<a id="tocScalculateroutematrixsummary"></a>
<a id="tocscalculateroutematrixsummary"></a>

```json
{
  "DataSource": {},
  "DistanceUnit": {},
  "ErrorCount": {},
  "RouteCount": {}
}
```

A summary of the calculated route matrix.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|object|true|none|none|
|DistanceUnit|object|true|none|none|
|ErrorCount|object|true|none|none|
|RouteCount|object|true|none|none|

<h2 id="tocS_CalculateRouteMatrixSummaryErrorCountInteger">CalculateRouteMatrixSummaryErrorCountInteger</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixsummaryerrorcountinteger"></a>
<a id="schema_CalculateRouteMatrixSummaryErrorCountInteger"></a>
<a id="tocScalculateroutematrixsummaryerrorcountinteger"></a>
<a id="tocscalculateroutematrixsummaryerrorcountinteger"></a>

```json
1
```

<h2 id="tocS_CalculateRouteMatrixSummaryRouteCountInteger">CalculateRouteMatrixSummaryRouteCountInteger</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutematrixsummaryroutecountinteger"></a>
<a id="schema_CalculateRouteMatrixSummaryRouteCountInteger"></a>
<a id="tocScalculateroutematrixsummaryroutecountinteger"></a>
<a id="tocscalculateroutematrixsummaryroutecountinteger"></a>

```json
1
```

<h2 id="tocS_CalculateRouteRequestWaypointPositionsList">CalculateRouteRequestWaypointPositionsList</h2>
<!-- backwards compatibility -->
<a id="schemacalculaterouterequestwaypointpositionslist"></a>
<a id="schema_CalculateRouteRequestWaypointPositionsList"></a>
<a id="tocScalculaterouterequestwaypointpositionslist"></a>
<a id="tocscalculaterouterequestwaypointpositionslist"></a>

```json
[
  [
    0,
    0
  ]
]
```

<h2 id="tocS_CalculateRouteRequest">CalculateRouteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacalculaterouterequest"></a>
<a id="schema_CalculateRouteRequest"></a>
<a id="tocScalculaterouterequest"></a>
<a id="tocscalculaterouterequest"></a>

```json
{
  "CarModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {}
  },
  "DepartNow": {},
  "DeparturePosition": {},
  "DepartureTime": {},
  "DestinationPosition": {},
  "DistanceUnit": {},
  "IncludeLegGeometry": {},
  "TravelMode": {},
  "TruckModeOptions": {
    "AvoidFerries": {},
    "AvoidTolls": {},
    "Dimensions": {
      "Height": {},
      "Length": {},
      "Unit": {},
      "Width": {}
    },
    "Weight": {
      "Total": {},
      "Unit": {}
    }
  },
  "WaypointPositions": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CarModeOptions|object|false|none|none|
|DepartNow|object|false|none|none|
|DeparturePosition|object|true|none|none|
|DepartureTime|object|false|none|none|
|DestinationPosition|object|true|none|none|
|DistanceUnit|object|false|none|none|
|IncludeLegGeometry|object|false|none|none|
|TravelMode|object|false|none|none|
|TruckModeOptions|object|false|none|none|
|WaypointPositions|object|false|none|none|

<h2 id="tocS_LegList">LegList</h2>
<!-- backwards compatibility -->
<a id="schemaleglist"></a>
<a id="schema_LegList"></a>
<a id="tocSleglist"></a>
<a id="tocsleglist"></a>

```json
[
  {
    "Distance": {},
    "DurationSeconds": {},
    "EndPosition": {},
    "Geometry": {
      "LineString": {}
    },
    "StartPosition": {},
    "Steps": {}
  }
]
```

<h2 id="tocS_CalculateRouteSummary">CalculateRouteSummary</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutesummary"></a>
<a id="schema_CalculateRouteSummary"></a>
<a id="tocScalculateroutesummary"></a>
<a id="tocscalculateroutesummary"></a>

```json
{
  "DataSource": {},
  "Distance": {},
  "DistanceUnit": {},
  "DurationSeconds": {},
  "RouteBBox": {}
}
```

A summary of the calculated route.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|object|true|none|none|
|Distance|object|true|none|none|
|DistanceUnit|object|true|none|none|
|DurationSeconds|object|true|none|none|
|RouteBBox|object|true|none|none|

<h2 id="tocS_CalculateRouteSummaryDistanceDouble">CalculateRouteSummaryDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutesummarydistancedouble"></a>
<a id="schema_CalculateRouteSummaryDistanceDouble"></a>
<a id="tocScalculateroutesummarydistancedouble"></a>
<a id="tocscalculateroutesummarydistancedouble"></a>

```json
0
```

<h2 id="tocS_CalculateRouteSummaryDurationSecondsDouble">CalculateRouteSummaryDurationSecondsDouble</h2>
<!-- backwards compatibility -->
<a id="schemacalculateroutesummarydurationsecondsdouble"></a>
<a id="schema_CalculateRouteSummaryDurationSecondsDouble"></a>
<a id="tocScalculateroutesummarydurationsecondsdouble"></a>
<a id="tocscalculateroutesummarydurationsecondsdouble"></a>

```json
0
```

<h2 id="tocS_CountryCodeList">CountryCodeList</h2>
<!-- backwards compatibility -->
<a id="schemacountrycodelist"></a>
<a id="schema_CountryCodeList"></a>
<a id="tocScountrycodelist"></a>
<a id="tocscountrycodelist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ResourceDescription">ResourceDescription</h2>
<!-- backwards compatibility -->
<a id="schemaresourcedescription"></a>
<a id="schema_ResourceDescription"></a>
<a id="tocSresourcedescription"></a>
<a id="tocsresourcedescription"></a>

```json
"string"
```

<h2 id="tocS_KmsKeyId">KmsKeyId</h2>
<!-- backwards compatibility -->
<a id="schemakmskeyid"></a>
<a id="schema_KmsKeyId"></a>
<a id="tocSkmskeyid"></a>
<a id="tocskmskeyid"></a>

```json
"string"
```

<h2 id="tocS_PricingPlan">PricingPlan</h2>
<!-- backwards compatibility -->
<a id="schemapricingplan"></a>
<a id="schema_PricingPlan"></a>
<a id="tocSpricingplan"></a>
<a id="tocspricingplan"></a>

```json
"RequestBasedUsage"
```

<h2 id="tocS_TagMap">TagMap</h2>
<!-- backwards compatibility -->
<a id="schematagmap"></a>
<a id="schema_TagMap"></a>
<a id="tocStagmap"></a>
<a id="tocstagmap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[TagValue](#schematagvalue)|false|none|none|

<h2 id="tocS_CreateGeofenceCollectionRequest">CreateGeofenceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreategeofencecollectionrequest"></a>
<a id="schema_CreateGeofenceCollectionRequest"></a>
<a id="tocScreategeofencecollectionrequest"></a>
<a id="tocscreategeofencecollectionrequest"></a>

```json
{
  "CollectionName": {},
  "Description": {},
  "KmsKeyId": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionName|object|true|none|none|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateKeyRequest">CreateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatekeyrequest"></a>
<a id="schema_CreateKeyRequest"></a>
<a id="tocScreatekeyrequest"></a>
<a id="tocscreatekeyrequest"></a>

```json
{
  "Description": {},
  "ExpireTime": {},
  "KeyName": {},
  "NoExpiry": {},
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  },
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|ExpireTime|object|false|none|none|
|KeyName|object|true|none|none|
|NoExpiry|object|false|none|none|
|Restrictions|object|true|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_MapConfiguration">MapConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemamapconfiguration"></a>
<a id="schema_MapConfiguration"></a>
<a id="tocSmapconfiguration"></a>
<a id="tocsmapconfiguration"></a>

```json
{
  "Style": {}
}
```

Specifies the map tile style selected from an available provider.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Style|object|true|none|none|

<h2 id="tocS_CreateMapRequest">CreateMapRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemaprequest"></a>
<a id="schema_CreateMapRequest"></a>
<a id="tocScreatemaprequest"></a>
<a id="tocscreatemaprequest"></a>

```json
{
  "Configuration": {
    "Style": {}
  },
  "Description": {},
  "MapName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Configuration|object|true|none|none|
|Description|object|false|none|none|
|MapName|object|true|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_DataSourceConfiguration">DataSourceConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourceconfiguration"></a>
<a id="schema_DataSourceConfiguration"></a>
<a id="tocSdatasourceconfiguration"></a>
<a id="tocsdatasourceconfiguration"></a>

```json
{
  "IntendedUse": {}
}
```

<p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IntendedUse|object|false|none|none|

<h2 id="tocS_CreatePlaceIndexRequest">CreatePlaceIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateplaceindexrequest"></a>
<a id="schema_CreatePlaceIndexRequest"></a>
<a id="tocScreateplaceindexrequest"></a>
<a id="tocscreateplaceindexrequest"></a>

```json
{
  "DataSource": {},
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": {},
  "IndexName": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|object|true|none|none|
|DataSourceConfiguration|object|false|none|none|
|Description|object|false|none|none|
|IndexName|object|true|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_CreateRouteCalculatorRequest">CreateRouteCalculatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateroutecalculatorrequest"></a>
<a id="schema_CreateRouteCalculatorRequest"></a>
<a id="tocScreateroutecalculatorrequest"></a>
<a id="tocscreateroutecalculatorrequest"></a>

```json
{
  "CalculatorName": {},
  "DataSource": {},
  "Description": {},
  "PricingPlan": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatorName|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|false|none|none|
|PricingPlan|object|false|none|none|
|Tags|object|false|none|none|

<h2 id="tocS_PositionFiltering">PositionFiltering</h2>
<!-- backwards compatibility -->
<a id="schemapositionfiltering"></a>
<a id="schema_PositionFiltering"></a>
<a id="tocSpositionfiltering"></a>
<a id="tocspositionfiltering"></a>

```json
"TimeBased"
```

<h2 id="tocS_CreateTrackerRequest">CreateTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetrackerrequest"></a>
<a id="schema_CreateTrackerRequest"></a>
<a id="tocScreatetrackerrequest"></a>
<a id="tocscreatetrackerrequest"></a>

```json
{
  "Description": {},
  "KmsKeyId": {},
  "PositionFiltering": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "Tags": {
    "property1": "string",
    "property2": "string"
  },
  "TrackerName": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|KmsKeyId|object|false|none|none|
|PositionFiltering|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|Tags|object|false|none|none|
|TrackerName|object|true|none|none|

<h2 id="tocS_DeleteGeofenceCollectionRequest">DeleteGeofenceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletegeofencecollectionrequest"></a>
<a id="schema_DeleteGeofenceCollectionRequest"></a>
<a id="tocSdeletegeofencecollectionrequest"></a>
<a id="tocsdeletegeofencecollectionrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteKeyRequest">DeleteKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletekeyrequest"></a>
<a id="schema_DeleteKeyRequest"></a>
<a id="tocSdeletekeyrequest"></a>
<a id="tocsdeletekeyrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteMapRequest">DeleteMapRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletemaprequest"></a>
<a id="schema_DeleteMapRequest"></a>
<a id="tocSdeletemaprequest"></a>
<a id="tocsdeletemaprequest"></a>

```json
{}
```

<h2 id="tocS_DeletePlaceIndexRequest">DeletePlaceIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteplaceindexrequest"></a>
<a id="schema_DeletePlaceIndexRequest"></a>
<a id="tocSdeleteplaceindexrequest"></a>
<a id="tocsdeleteplaceindexrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteRouteCalculatorRequest">DeleteRouteCalculatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteroutecalculatorrequest"></a>
<a id="schema_DeleteRouteCalculatorRequest"></a>
<a id="tocSdeleteroutecalculatorrequest"></a>
<a id="tocsdeleteroutecalculatorrequest"></a>

```json
{}
```

<h2 id="tocS_DeleteTrackerRequest">DeleteTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeletetrackerrequest"></a>
<a id="schema_DeleteTrackerRequest"></a>
<a id="tocSdeletetrackerrequest"></a>
<a id="tocsdeletetrackerrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeGeofenceCollectionRequest">DescribeGeofenceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribegeofencecollectionrequest"></a>
<a id="schema_DescribeGeofenceCollectionRequest"></a>
<a id="tocSdescribegeofencecollectionrequest"></a>
<a id="tocsdescribegeofencecollectionrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeKeyRequest">DescribeKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribekeyrequest"></a>
<a id="schema_DescribeKeyRequest"></a>
<a id="tocSdescribekeyrequest"></a>
<a id="tocsdescribekeyrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeMapRequest">DescribeMapRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribemaprequest"></a>
<a id="schema_DescribeMapRequest"></a>
<a id="tocSdescribemaprequest"></a>
<a id="tocsdescribemaprequest"></a>

```json
{}
```

<h2 id="tocS_DescribePlaceIndexRequest">DescribePlaceIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribeplaceindexrequest"></a>
<a id="schema_DescribePlaceIndexRequest"></a>
<a id="tocSdescribeplaceindexrequest"></a>
<a id="tocsdescribeplaceindexrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeRouteCalculatorRequest">DescribeRouteCalculatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescriberoutecalculatorrequest"></a>
<a id="schema_DescribeRouteCalculatorRequest"></a>
<a id="tocSdescriberoutecalculatorrequest"></a>
<a id="tocsdescriberoutecalculatorrequest"></a>

```json
{}
```

<h2 id="tocS_DescribeTrackerRequest">DescribeTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadescribetrackerrequest"></a>
<a id="schema_DescribeTrackerRequest"></a>
<a id="tocSdescribetrackerrequest"></a>
<a id="tocsdescribetrackerrequest"></a>

```json
{}
```

<h2 id="tocS_PositionalAccuracy">PositionalAccuracy</h2>
<!-- backwards compatibility -->
<a id="schemapositionalaccuracy"></a>
<a id="schema_PositionalAccuracy"></a>
<a id="tocSpositionalaccuracy"></a>
<a id="tocspositionalaccuracy"></a>

```json
{
  "Horizontal": {}
}
```

Defines the level of certainty of the position.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Horizontal|object|true|none|none|

<h2 id="tocS_PropertyMap">PropertyMap</h2>
<!-- backwards compatibility -->
<a id="schemapropertymap"></a>
<a id="schema_PropertyMap"></a>
<a id="tocSpropertymap"></a>
<a id="tocspropertymap"></a>

```json
{
  "property1": "string",
  "property2": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[PropertyMapValueString](#schemapropertymapvaluestring)|false|none|none|

<h2 id="tocS_DevicePosition">DevicePosition</h2>
<!-- backwards compatibility -->
<a id="schemadeviceposition"></a>
<a id="schema_DevicePosition"></a>
<a id="tocSdeviceposition"></a>
<a id="tocsdeviceposition"></a>

```json
{
  "Accuracy": {
    "Horizontal": {}
  },
  "DeviceId": {},
  "Position": {},
  "PositionProperties": {
    "property1": "string",
    "property2": "string"
  },
  "ReceivedTime": {},
  "SampleTime": {}
}
```

Contains the device position details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accuracy|object|false|none|none|
|DeviceId|object|false|none|none|
|Position|object|true|none|none|
|PositionProperties|object|false|none|none|
|ReceivedTime|object|true|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_DimensionUnit">DimensionUnit</h2>
<!-- backwards compatibility -->
<a id="schemadimensionunit"></a>
<a id="schema_DimensionUnit"></a>
<a id="tocSdimensionunit"></a>
<a id="tocsdimensionunit"></a>

```json
"Meters"
```

<h2 id="tocS_DisassociateTrackerConsumerRequest">DisassociateTrackerConsumerRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisassociatetrackerconsumerrequest"></a>
<a id="schema_DisassociateTrackerConsumerRequest"></a>
<a id="tocSdisassociatetrackerconsumerrequest"></a>
<a id="tocsdisassociatetrackerconsumerrequest"></a>

```json
{}
```

<h2 id="tocS_GetDevicePositionHistoryRequestMaxResultsInteger">GetDevicePositionHistoryRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepositionhistoryrequestmaxresultsinteger"></a>
<a id="schema_GetDevicePositionHistoryRequestMaxResultsInteger"></a>
<a id="tocSgetdevicepositionhistoryrequestmaxresultsinteger"></a>
<a id="tocsgetdevicepositionhistoryrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
"string"
```

<h2 id="tocS_GetDevicePositionHistoryRequest">GetDevicePositionHistoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepositionhistoryrequest"></a>
<a id="schema_GetDevicePositionHistoryRequest"></a>
<a id="tocSgetdevicepositionhistoryrequest"></a>
<a id="tocsgetdevicepositionhistoryrequest"></a>

```json
{
  "EndTimeExclusive": {},
  "MaxResults": {},
  "NextToken": {},
  "StartTimeInclusive": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EndTimeExclusive|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|
|StartTimeInclusive|object|false|none|none|

<h2 id="tocS_GetDevicePositionRequest">GetDevicePositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetdevicepositionrequest"></a>
<a id="schema_GetDevicePositionRequest"></a>
<a id="tocSgetdevicepositionrequest"></a>
<a id="tocsgetdevicepositionrequest"></a>

```json
{}
```

<h2 id="tocS_GetGeofenceRequest">GetGeofenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetgeofencerequest"></a>
<a id="schema_GetGeofenceRequest"></a>
<a id="tocSgetgeofencerequest"></a>
<a id="tocsgetgeofencerequest"></a>

```json
{}
```

<h2 id="tocS_GetMapGlyphsRequestFontUnicodeRangeString">GetMapGlyphsRequestFontUnicodeRangeString</h2>
<!-- backwards compatibility -->
<a id="schemagetmapglyphsrequestfontunicoderangestring"></a>
<a id="schema_GetMapGlyphsRequestFontUnicodeRangeString"></a>
<a id="tocSgetmapglyphsrequestfontunicoderangestring"></a>
<a id="tocsgetmapglyphsrequestfontunicoderangestring"></a>

```json
"string"
```

<h2 id="tocS_GetMapGlyphsRequest">GetMapGlyphsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmapglyphsrequest"></a>
<a id="schema_GetMapGlyphsRequest"></a>
<a id="tocSgetmapglyphsrequest"></a>
<a id="tocsgetmapglyphsrequest"></a>

```json
{}
```

<h2 id="tocS_GetMapSpritesRequestFileNameString">GetMapSpritesRequestFileNameString</h2>
<!-- backwards compatibility -->
<a id="schemagetmapspritesrequestfilenamestring"></a>
<a id="schema_GetMapSpritesRequestFileNameString"></a>
<a id="tocSgetmapspritesrequestfilenamestring"></a>
<a id="tocsgetmapspritesrequestfilenamestring"></a>

```json
"string"
```

<h2 id="tocS_GetMapSpritesRequest">GetMapSpritesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmapspritesrequest"></a>
<a id="schema_GetMapSpritesRequest"></a>
<a id="tocSgetmapspritesrequest"></a>
<a id="tocsgetmapspritesrequest"></a>

```json
{}
```

<h2 id="tocS_GetMapStyleDescriptorRequest">GetMapStyleDescriptorRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmapstyledescriptorrequest"></a>
<a id="schema_GetMapStyleDescriptorRequest"></a>
<a id="tocSgetmapstyledescriptorrequest"></a>
<a id="tocsgetmapstyledescriptorrequest"></a>

```json
{}
```

<h2 id="tocS_GetMapTileRequestXString">GetMapTileRequestXString</h2>
<!-- backwards compatibility -->
<a id="schemagetmaptilerequestxstring"></a>
<a id="schema_GetMapTileRequestXString"></a>
<a id="tocSgetmaptilerequestxstring"></a>
<a id="tocsgetmaptilerequestxstring"></a>

```json
"string"
```

<h2 id="tocS_GetMapTileRequestYString">GetMapTileRequestYString</h2>
<!-- backwards compatibility -->
<a id="schemagetmaptilerequestystring"></a>
<a id="schema_GetMapTileRequestYString"></a>
<a id="tocSgetmaptilerequestystring"></a>
<a id="tocsgetmaptilerequestystring"></a>

```json
"string"
```

<h2 id="tocS_GetMapTileRequestZString">GetMapTileRequestZString</h2>
<!-- backwards compatibility -->
<a id="schemagetmaptilerequestzstring"></a>
<a id="schema_GetMapTileRequestZString"></a>
<a id="tocSgetmaptilerequestzstring"></a>
<a id="tocsgetmaptilerequestzstring"></a>

```json
"string"
```

<h2 id="tocS_GetMapTileRequest">GetMapTileRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetmaptilerequest"></a>
<a id="schema_GetMapTileRequest"></a>
<a id="tocSgetmaptilerequest"></a>
<a id="tocsgetmaptilerequest"></a>

```json
{}
```

<h2 id="tocS_LanguageTag">LanguageTag</h2>
<!-- backwards compatibility -->
<a id="schemalanguagetag"></a>
<a id="schema_LanguageTag"></a>
<a id="tocSlanguagetag"></a>
<a id="tocslanguagetag"></a>

```json
"string"
```

<h2 id="tocS_PlaceId">PlaceId</h2>
<!-- backwards compatibility -->
<a id="schemaplaceid"></a>
<a id="schema_PlaceId"></a>
<a id="tocSplaceid"></a>
<a id="tocsplaceid"></a>

```json
"string"
```

<h2 id="tocS_GetPlaceRequest">GetPlaceRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetplacerequest"></a>
<a id="schema_GetPlaceRequest"></a>
<a id="tocSgetplacerequest"></a>
<a id="tocsgetplacerequest"></a>

```json
{}
```

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "AddressNumber": {},
  "Country": {},
  "Geometry": {
    "Point": {}
  },
  "Interpolated": {},
  "Label": {},
  "Municipality": {},
  "Neighborhood": {},
  "PostalCode": {},
  "Region": {},
  "Street": {},
  "SubRegion": {},
  "TimeZone": {
    "Name": {},
    "Offset": {}
  },
  "UnitNumber": {},
  "UnitType": {}
}
```

<p>Contains details about addresses or points of interest that match the search criteria.</p> <p>Not all details are included with all responses. Some details may only be returned by specific data partners.</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressNumber|object|false|none|none|
|Country|object|false|none|none|
|Geometry|[PlaceGeometry](#schemaplacegeometry)|true|none|Places uses a point geometry to specify a location or a Place.|
|Interpolated|object|false|none|none|
|Label|object|false|none|none|
|Municipality|object|false|none|none|
|Neighborhood|object|false|none|none|
|PostalCode|object|false|none|none|
|Region|object|false|none|none|
|Street|object|false|none|none|
|SubRegion|object|false|none|none|
|TimeZone|object|false|none|none|
|UnitNumber|object|false|none|none|
|UnitType|object|false|none|none|

<h2 id="tocS_Integer">Integer</h2>
<!-- backwards compatibility -->
<a id="schemainteger"></a>
<a id="schema_Integer"></a>
<a id="tocSinteger"></a>
<a id="tocsinteger"></a>

```json
0
```

<h2 id="tocS_LegDistanceDouble">LegDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemalegdistancedouble"></a>
<a id="schema_LegDistanceDouble"></a>
<a id="tocSlegdistancedouble"></a>
<a id="tocslegdistancedouble"></a>

```json
0
```

<h2 id="tocS_LegDurationSecondsDouble">LegDurationSecondsDouble</h2>
<!-- backwards compatibility -->
<a id="schemalegdurationsecondsdouble"></a>
<a id="schema_LegDurationSecondsDouble"></a>
<a id="tocSlegdurationsecondsdouble"></a>
<a id="tocslegdurationsecondsdouble"></a>

```json
0
```

<h2 id="tocS_LegGeometry">LegGeometry</h2>
<!-- backwards compatibility -->
<a id="schemaleggeometry"></a>
<a id="schema_LegGeometry"></a>
<a id="tocSleggeometry"></a>
<a id="tocsleggeometry"></a>

```json
{
  "LineString": {}
}
```

Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LineString|object|false|none|none|

<h2 id="tocS_StepList">StepList</h2>
<!-- backwards compatibility -->
<a id="schemasteplist"></a>
<a id="schema_StepList"></a>
<a id="tocSsteplist"></a>
<a id="tocssteplist"></a>

```json
[
  {
    "Distance": {},
    "DurationSeconds": {},
    "EndPosition": {},
    "GeometryOffset": {},
    "StartPosition": {}
  }
]
```

<h2 id="tocS_Leg">Leg</h2>
<!-- backwards compatibility -->
<a id="schemaleg"></a>
<a id="schema_Leg"></a>
<a id="tocSleg"></a>
<a id="tocsleg"></a>

```json
{
  "Distance": {},
  "DurationSeconds": {},
  "EndPosition": {},
  "Geometry": {
    "LineString": {}
  },
  "StartPosition": {},
  "Steps": {}
}
```

<p>Contains the calculated route's details for each path between a pair of positions. The number of legs returned corresponds to one fewer than the total number of positions in the request. </p> <p>For example, a route with a departure position and destination position returns one leg with the positions <a href="https://docs.aws.amazon.com/location/latest/developerguide/snap-to-nearby-road.html">snapped to a nearby road</a>:</p> <ul> <li> <p>The <code>StartPosition</code> is the departure position.</p> </li> <li> <p>The <code>EndPosition</code> is the destination position.</p> </li> </ul> <p>A route with a waypoint between the departure and destination position returns two legs with the positions snapped to a nearby road:</p> <ul> <li> <p>Leg 1: The <code>StartPosition</code> is the departure position . The <code>EndPosition</code> is the waypoint positon.</p> </li> <li> <p>Leg 2: The <code>StartPosition</code> is the waypoint position. The <code>EndPosition</code> is the destination position.</p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distance|object|true|none|none|
|DurationSeconds|object|true|none|none|
|EndPosition|object|true|none|none|
|Geometry|object|false|none|none|
|StartPosition|object|true|none|none|
|Steps|object|true|none|none|

<h2 id="tocS_LineString">LineString</h2>
<!-- backwards compatibility -->
<a id="schemalinestring"></a>
<a id="schema_LineString"></a>
<a id="tocSlinestring"></a>
<a id="tocslinestring"></a>

```json
[
  [
    0,
    0
  ],
  [
    0,
    0
  ]
]
```

<h2 id="tocS_LinearRing">LinearRing</h2>
<!-- backwards compatibility -->
<a id="schemalinearring"></a>
<a id="schema_LinearRing"></a>
<a id="tocSlinearring"></a>
<a id="tocslinearring"></a>

```json
[
  [
    0,
    0
  ],
  [
    0,
    0
  ],
  [
    0,
    0
  ],
  [
    0,
    0
  ]
]
```

<h2 id="tocS_ListDevicePositionsRequestMaxResultsInteger">ListDevicePositionsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepositionsrequestmaxresultsinteger"></a>
<a id="schema_ListDevicePositionsRequestMaxResultsInteger"></a>
<a id="tocSlistdevicepositionsrequestmaxresultsinteger"></a>
<a id="tocslistdevicepositionsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListDevicePositionsRequest">ListDevicePositionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepositionsrequest"></a>
<a id="schema_ListDevicePositionsRequest"></a>
<a id="tocSlistdevicepositionsrequest"></a>
<a id="tocslistdevicepositionsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListDevicePositionsResponseEntryList">ListDevicePositionsResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepositionsresponseentrylist"></a>
<a id="schema_ListDevicePositionsResponseEntryList"></a>
<a id="tocSlistdevicepositionsresponseentrylist"></a>
<a id="tocslistdevicepositionsresponseentrylist"></a>

```json
[
  {
    "Accuracy": {
      "Horizontal": {}
    },
    "DeviceId": {},
    "Position": {},
    "PositionProperties": {
      "property1": "string",
      "property2": "string"
    },
    "SampleTime": {}
  }
]
```

<h2 id="tocS_ListDevicePositionsResponseEntry">ListDevicePositionsResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistdevicepositionsresponseentry"></a>
<a id="schema_ListDevicePositionsResponseEntry"></a>
<a id="tocSlistdevicepositionsresponseentry"></a>
<a id="tocslistdevicepositionsresponseentry"></a>

```json
{
  "Accuracy": {
    "Horizontal": {}
  },
  "DeviceId": {},
  "Position": {},
  "PositionProperties": {
    "property1": "string",
    "property2": "string"
  },
  "SampleTime": {}
}
```

Contains the tracker resource details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Accuracy|object|false|none|none|
|DeviceId|object|true|none|none|
|Position|object|true|none|none|
|PositionProperties|object|false|none|none|
|SampleTime|object|true|none|none|

<h2 id="tocS_ListGeofenceCollectionsRequestMaxResultsInteger">ListGeofenceCollectionsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencecollectionsrequestmaxresultsinteger"></a>
<a id="schema_ListGeofenceCollectionsRequestMaxResultsInteger"></a>
<a id="tocSlistgeofencecollectionsrequestmaxresultsinteger"></a>
<a id="tocslistgeofencecollectionsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListGeofenceCollectionsRequest">ListGeofenceCollectionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencecollectionsrequest"></a>
<a id="schema_ListGeofenceCollectionsRequest"></a>
<a id="tocSlistgeofencecollectionsrequest"></a>
<a id="tocslistgeofencecollectionsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListGeofenceCollectionsResponseEntryList">ListGeofenceCollectionsResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencecollectionsresponseentrylist"></a>
<a id="schema_ListGeofenceCollectionsResponseEntryList"></a>
<a id="tocSlistgeofencecollectionsresponseentrylist"></a>
<a id="tocslistgeofencecollectionsresponseentrylist"></a>

```json
[
  {
    "CollectionName": {},
    "CreateTime": {},
    "Description": {},
    "PricingPlan": {},
    "PricingPlanDataSource": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListGeofenceCollectionsResponseEntry">ListGeofenceCollectionsResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencecollectionsresponseentry"></a>
<a id="schema_ListGeofenceCollectionsResponseEntry"></a>
<a id="tocSlistgeofencecollectionsresponseentry"></a>
<a id="tocslistgeofencecollectionsresponseentry"></a>

```json
{
  "CollectionName": {},
  "CreateTime": {},
  "Description": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "UpdateTime": {}
}
```

Contains the geofence collection details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CollectionName|object|true|none|none|
|CreateTime|object|true|none|none|
|Description|object|true|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListGeofenceResponseEntry">ListGeofenceResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofenceresponseentry"></a>
<a id="schema_ListGeofenceResponseEntry"></a>
<a id="tocSlistgeofenceresponseentry"></a>
<a id="tocslistgeofenceresponseentry"></a>

```json
{
  "CreateTime": {},
  "GeofenceId": {},
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  },
  "Status": {},
  "UpdateTime": {}
}
```

Contains a list of geofences stored in a given geofence collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|GeofenceId|object|true|none|none|
|Geometry|object|true|none|none|
|Status|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListGeofenceResponseEntryList">ListGeofenceResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofenceresponseentrylist"></a>
<a id="schema_ListGeofenceResponseEntryList"></a>
<a id="tocSlistgeofenceresponseentrylist"></a>
<a id="tocslistgeofenceresponseentrylist"></a>

```json
[
  {
    "CreateTime": {},
    "GeofenceId": {},
    "Geometry": {
      "Circle": {
        "Center": {},
        "Radius": {}
      },
      "Polygon": {}
    },
    "Status": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListGeofencesRequestMaxResultsInteger">ListGeofencesRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencesrequestmaxresultsinteger"></a>
<a id="schema_ListGeofencesRequestMaxResultsInteger"></a>
<a id="tocSlistgeofencesrequestmaxresultsinteger"></a>
<a id="tocslistgeofencesrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListGeofencesRequest">ListGeofencesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistgeofencesrequest"></a>
<a id="schema_ListGeofencesRequest"></a>
<a id="tocSlistgeofencesrequest"></a>
<a id="tocslistgeofencesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListKeysRequestMaxResultsInteger">ListKeysRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysrequestmaxresultsinteger"></a>
<a id="schema_ListKeysRequestMaxResultsInteger"></a>
<a id="tocSlistkeysrequestmaxresultsinteger"></a>
<a id="tocslistkeysrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListKeysRequest">ListKeysRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysrequest"></a>
<a id="schema_ListKeysRequest"></a>
<a id="tocSlistkeysrequest"></a>
<a id="tocslistkeysrequest"></a>

```json
{
  "Filter": {
    "KeyStatus": {}
  },
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Filter|object|false|none|none|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListKeysResponseEntryList">ListKeysResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysresponseentrylist"></a>
<a id="schema_ListKeysResponseEntryList"></a>
<a id="tocSlistkeysresponseentrylist"></a>
<a id="tocslistkeysresponseentrylist"></a>

```json
[
  {
    "CreateTime": {},
    "Description": {},
    "ExpireTime": {},
    "KeyName": {},
    "Restrictions": {
      "AllowActions": {},
      "AllowReferers": {},
      "AllowResources": {}
    },
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListKeysResponseEntry">ListKeysResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistkeysresponseentry"></a>
<a id="schema_ListKeysResponseEntry"></a>
<a id="tocSlistkeysresponseentry"></a>
<a id="tocslistkeysresponseentry"></a>

```json
{
  "CreateTime": {},
  "Description": {},
  "ExpireTime": {},
  "KeyName": {},
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  },
  "UpdateTime": {}
}
```

An API key resource listed in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|Description|object|false|none|none|
|ExpireTime|object|true|none|none|
|KeyName|object|true|none|none|
|Restrictions|[ApiKeyRestrictions](#schemaapikeyrestrictions)|true|none|API Restrictions on the allowed actions, resources, and referers for an API key resource.|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListMapsRequestMaxResultsInteger">ListMapsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistmapsrequestmaxresultsinteger"></a>
<a id="schema_ListMapsRequestMaxResultsInteger"></a>
<a id="tocSlistmapsrequestmaxresultsinteger"></a>
<a id="tocslistmapsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListMapsRequest">ListMapsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmapsrequest"></a>
<a id="schema_ListMapsRequest"></a>
<a id="tocSlistmapsrequest"></a>
<a id="tocslistmapsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListMapsResponseEntryList">ListMapsResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistmapsresponseentrylist"></a>
<a id="schema_ListMapsResponseEntryList"></a>
<a id="tocSlistmapsresponseentrylist"></a>
<a id="tocslistmapsresponseentrylist"></a>

```json
[
  {
    "CreateTime": {},
    "DataSource": {},
    "Description": {},
    "MapName": {},
    "PricingPlan": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListMapsResponseEntry">ListMapsResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistmapsresponseentry"></a>
<a id="schema_ListMapsResponseEntry"></a>
<a id="tocSlistmapsresponseentry"></a>
<a id="tocslistmapsresponseentry"></a>

```json
{
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "MapName": {},
  "PricingPlan": {},
  "UpdateTime": {}
}
```

Contains details of an existing map resource in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|true|none|none|
|MapName|object|true|none|none|
|PricingPlan|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListPlaceIndexesRequestMaxResultsInteger">ListPlaceIndexesRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceindexesrequestmaxresultsinteger"></a>
<a id="schema_ListPlaceIndexesRequestMaxResultsInteger"></a>
<a id="tocSlistplaceindexesrequestmaxresultsinteger"></a>
<a id="tocslistplaceindexesrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListPlaceIndexesRequest">ListPlaceIndexesRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceindexesrequest"></a>
<a id="schema_ListPlaceIndexesRequest"></a>
<a id="tocSlistplaceindexesrequest"></a>
<a id="tocslistplaceindexesrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListPlaceIndexesResponseEntryList">ListPlaceIndexesResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceindexesresponseentrylist"></a>
<a id="schema_ListPlaceIndexesResponseEntryList"></a>
<a id="tocSlistplaceindexesresponseentrylist"></a>
<a id="tocslistplaceindexesresponseentrylist"></a>

```json
[
  {
    "CreateTime": {},
    "DataSource": {},
    "Description": {},
    "IndexName": {},
    "PricingPlan": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListPlaceIndexesResponseEntry">ListPlaceIndexesResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceindexesresponseentry"></a>
<a id="schema_ListPlaceIndexesResponseEntry"></a>
<a id="tocSlistplaceindexesresponseentry"></a>
<a id="tocslistplaceindexesresponseentry"></a>

```json
{
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "IndexName": {},
  "PricingPlan": {},
  "UpdateTime": {}
}
```

A place index resource listed in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|true|none|none|
|IndexName|object|true|none|none|
|PricingPlan|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListRouteCalculatorsRequestMaxResultsInteger">ListRouteCalculatorsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalistroutecalculatorsrequestmaxresultsinteger"></a>
<a id="schema_ListRouteCalculatorsRequestMaxResultsInteger"></a>
<a id="tocSlistroutecalculatorsrequestmaxresultsinteger"></a>
<a id="tocslistroutecalculatorsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListRouteCalculatorsRequest">ListRouteCalculatorsRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistroutecalculatorsrequest"></a>
<a id="schema_ListRouteCalculatorsRequest"></a>
<a id="tocSlistroutecalculatorsrequest"></a>
<a id="tocslistroutecalculatorsrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListRouteCalculatorsResponseEntryList">ListRouteCalculatorsResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalistroutecalculatorsresponseentrylist"></a>
<a id="schema_ListRouteCalculatorsResponseEntryList"></a>
<a id="tocSlistroutecalculatorsresponseentrylist"></a>
<a id="tocslistroutecalculatorsresponseentrylist"></a>

```json
[
  {
    "CalculatorName": {},
    "CreateTime": {},
    "DataSource": {},
    "Description": {},
    "PricingPlan": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListRouteCalculatorsResponseEntry">ListRouteCalculatorsResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalistroutecalculatorsresponseentry"></a>
<a id="schema_ListRouteCalculatorsResponseEntry"></a>
<a id="tocSlistroutecalculatorsresponseentry"></a>
<a id="tocslistroutecalculatorsresponseentry"></a>

```json
{
  "CalculatorName": {},
  "CreateTime": {},
  "DataSource": {},
  "Description": {},
  "PricingPlan": {},
  "UpdateTime": {}
}
```

A route calculator resource listed in your Amazon Web Services account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CalculatorName|object|true|none|none|
|CreateTime|object|true|none|none|
|DataSource|object|true|none|none|
|Description|object|true|none|none|
|PricingPlan|object|false|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_ListTagsForResourceRequest">ListTagsForResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttagsforresourcerequest"></a>
<a id="schema_ListTagsForResourceRequest"></a>
<a id="tocSlisttagsforresourcerequest"></a>
<a id="tocslisttagsforresourcerequest"></a>

```json
{}
```

<h2 id="tocS_ListTrackerConsumersRequestMaxResultsInteger">ListTrackerConsumersRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackerconsumersrequestmaxresultsinteger"></a>
<a id="schema_ListTrackerConsumersRequestMaxResultsInteger"></a>
<a id="tocSlisttrackerconsumersrequestmaxresultsinteger"></a>
<a id="tocslisttrackerconsumersrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListTrackerConsumersRequest">ListTrackerConsumersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackerconsumersrequest"></a>
<a id="schema_ListTrackerConsumersRequest"></a>
<a id="tocSlisttrackerconsumersrequest"></a>
<a id="tocslisttrackerconsumersrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrackersRequestMaxResultsInteger">ListTrackersRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackersrequestmaxresultsinteger"></a>
<a id="schema_ListTrackersRequestMaxResultsInteger"></a>
<a id="tocSlisttrackersrequestmaxresultsinteger"></a>
<a id="tocslisttrackersrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_ListTrackersRequest">ListTrackersRequest</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackersrequest"></a>
<a id="schema_ListTrackersRequest"></a>
<a id="tocSlisttrackersrequest"></a>
<a id="tocslisttrackersrequest"></a>

```json
{
  "MaxResults": {},
  "NextToken": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MaxResults|object|false|none|none|
|NextToken|object|false|none|none|

<h2 id="tocS_ListTrackersResponseEntryList">ListTrackersResponseEntryList</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackersresponseentrylist"></a>
<a id="schema_ListTrackersResponseEntryList"></a>
<a id="tocSlisttrackersresponseentrylist"></a>
<a id="tocslisttrackersresponseentrylist"></a>

```json
[
  {
    "CreateTime": {},
    "Description": {},
    "PricingPlan": {},
    "PricingPlanDataSource": {},
    "TrackerName": {},
    "UpdateTime": {}
  }
]
```

<h2 id="tocS_ListTrackersResponseEntry">ListTrackersResponseEntry</h2>
<!-- backwards compatibility -->
<a id="schemalisttrackersresponseentry"></a>
<a id="schema_ListTrackersResponseEntry"></a>
<a id="tocSlisttrackersresponseentry"></a>
<a id="tocslisttrackersresponseentry"></a>

```json
{
  "CreateTime": {},
  "Description": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {},
  "TrackerName": {},
  "UpdateTime": {}
}
```

Contains the tracker resource details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreateTime|object|true|none|none|
|Description|object|true|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
|TrackerName|object|true|none|none|
|UpdateTime|object|true|none|none|

<h2 id="tocS_PlaceGeometry">PlaceGeometry</h2>
<!-- backwards compatibility -->
<a id="schemaplacegeometry"></a>
<a id="schema_PlaceGeometry"></a>
<a id="tocSplacegeometry"></a>
<a id="tocsplacegeometry"></a>

```json
{
  "Point": {}
}
```

Places uses a point geometry to specify a location or a Place.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Point|object|false|none|none|

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "Name": {},
  "Offset": {}
}
```

Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|object|true|none|none|
|Offset|object|false|none|none|

<h2 id="tocS_PlaceIndexSearchResultLimit">PlaceIndexSearchResultLimit</h2>
<!-- backwards compatibility -->
<a id="schemaplaceindexsearchresultlimit"></a>
<a id="schema_PlaceIndexSearchResultLimit"></a>
<a id="tocSplaceindexsearchresultlimit"></a>
<a id="tocsplaceindexsearchresultlimit"></a>

```json
1
```

<h2 id="tocS_PositionalAccuracyHorizontalDouble">PositionalAccuracyHorizontalDouble</h2>
<!-- backwards compatibility -->
<a id="schemapositionalaccuracyhorizontaldouble"></a>
<a id="schema_PositionalAccuracyHorizontalDouble"></a>
<a id="tocSpositionalaccuracyhorizontaldouble"></a>
<a id="tocspositionalaccuracyhorizontaldouble"></a>

```json
0
```

<h2 id="tocS_PropertyMapValueString">PropertyMapValueString</h2>
<!-- backwards compatibility -->
<a id="schemapropertymapvaluestring"></a>
<a id="schema_PropertyMapValueString"></a>
<a id="tocSpropertymapvaluestring"></a>
<a id="tocspropertymapvaluestring"></a>

```json
"string"
```

<h2 id="tocS_PropertyMapKeyString">PropertyMapKeyString</h2>
<!-- backwards compatibility -->
<a id="schemapropertymapkeystring"></a>
<a id="schema_PropertyMapKeyString"></a>
<a id="tocSpropertymapkeystring"></a>
<a id="tocspropertymapkeystring"></a>

```json
"string"
```

<h2 id="tocS_PutGeofenceRequest">PutGeofenceRequest</h2>
<!-- backwards compatibility -->
<a id="schemaputgeofencerequest"></a>
<a id="schema_PutGeofenceRequest"></a>
<a id="tocSputgeofencerequest"></a>
<a id="tocsputgeofencerequest"></a>

```json
{
  "Geometry": {
    "Circle": {
      "Center": {},
      "Radius": {}
    },
    "Polygon": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Geometry|object|true|none|none|

<h2 id="tocS_RouteMatrixRow">RouteMatrixRow</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixrow"></a>
<a id="schema_RouteMatrixRow"></a>
<a id="tocSroutematrixrow"></a>
<a id="tocsroutematrixrow"></a>

```json
[
  {
    "Distance": {},
    "DurationSeconds": {},
    "Error": {
      "Code": {},
      "Message": {}
    }
  }
]
```

<h2 id="tocS_RouteMatrixEntryDistanceDouble">RouteMatrixEntryDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixentrydistancedouble"></a>
<a id="schema_RouteMatrixEntryDistanceDouble"></a>
<a id="tocSroutematrixentrydistancedouble"></a>
<a id="tocsroutematrixentrydistancedouble"></a>

```json
0
```

<h2 id="tocS_RouteMatrixEntryDurationSecondsDouble">RouteMatrixEntryDurationSecondsDouble</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixentrydurationsecondsdouble"></a>
<a id="schema_RouteMatrixEntryDurationSecondsDouble"></a>
<a id="tocSroutematrixentrydurationsecondsdouble"></a>
<a id="tocsroutematrixentrydurationsecondsdouble"></a>

```json
0
```

<h2 id="tocS_RouteMatrixEntryError">RouteMatrixEntryError</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixentryerror"></a>
<a id="schema_RouteMatrixEntryError"></a>
<a id="tocSroutematrixentryerror"></a>
<a id="tocsroutematrixentryerror"></a>

```json
{
  "Code": {},
  "Message": {}
}
```

<p>An error corresponding to the calculation of a route between the <code>DeparturePosition</code> and <code>DestinationPosition</code>.</p> <p>The error code can be one of the following:</p> <ul> <li> <p> <code>RouteNotFound</code> - Unable to find a valid route with the given parameters.</p> </li> </ul> <ul> <li> <p> <code>RouteTooLong</code> - Route calculation went beyond the maximum size of a route and was terminated before completion.</p> </li> </ul> <ul> <li> <p> <code>PositionsNotFound</code> - One or more of the input positions were not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DestinationPositionNotFound</code> - The destination position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>DeparturePositionNotFound</code> - The departure position was not found on the route network.</p> </li> </ul> <ul> <li> <p> <code>OtherValidationError</code> - The given inputs were not valid or a route was not found. More information is given in the error <code>Message</code> </p> </li> </ul>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|object|true|none|none|
|Message|object|false|none|none|

<h2 id="tocS_RouteMatrixEntry">RouteMatrixEntry</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixentry"></a>
<a id="schema_RouteMatrixEntry"></a>
<a id="tocSroutematrixentry"></a>
<a id="tocsroutematrixentry"></a>

```json
{
  "Distance": {},
  "DurationSeconds": {},
  "Error": {
    "Code": {},
    "Message": {}
  }
}
```

The result for the calculated route of one <code>DeparturePosition</code> <code>DestinationPosition</code> pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distance|object|false|none|none|
|DurationSeconds|object|false|none|none|
|Error|object|false|none|none|

<h2 id="tocS_RouteMatrixErrorCode">RouteMatrixErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaroutematrixerrorcode"></a>
<a id="schema_RouteMatrixErrorCode"></a>
<a id="tocSroutematrixerrorcode"></a>
<a id="tocsroutematrixerrorcode"></a>

```json
"RouteNotFound"
```

<h2 id="tocS_SearchForPositionResultDistanceDouble">SearchForPositionResultDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemasearchforpositionresultdistancedouble"></a>
<a id="schema_SearchForPositionResultDistanceDouble"></a>
<a id="tocSsearchforpositionresultdistancedouble"></a>
<a id="tocssearchforpositionresultdistancedouble"></a>

```json
0
```

<h2 id="tocS_SearchForPositionResult">SearchForPositionResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchforpositionresult"></a>
<a id="schema_SearchForPositionResult"></a>
<a id="tocSsearchforpositionresult"></a>
<a id="tocssearchforpositionresult"></a>

```json
{
  "Distance": {},
  "Place": {
    "AddressNumber": {},
    "Country": {},
    "Geometry": {
      "Point": {}
    },
    "Interpolated": {},
    "Label": {},
    "Municipality": {},
    "Neighborhood": {},
    "PostalCode": {},
    "Region": {},
    "Street": {},
    "SubRegion": {},
    "TimeZone": {
      "Name": {},
      "Offset": {}
    },
    "UnitNumber": {},
    "UnitType": {}
  },
  "PlaceId": {}
}
```

Contains a search result from a position search query that is run on a place index resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distance|object|true|none|none|
|Place|object|true|none|none|
|PlaceId|object|false|none|none|

<h2 id="tocS_SearchForPositionResultList">SearchForPositionResultList</h2>
<!-- backwards compatibility -->
<a id="schemasearchforpositionresultlist"></a>
<a id="schema_SearchForPositionResultList"></a>
<a id="tocSsearchforpositionresultlist"></a>
<a id="tocssearchforpositionresultlist"></a>

```json
[
  {
    "Distance": {},
    "Place": {
      "AddressNumber": {},
      "Country": {},
      "Geometry": {
        "Point": {}
      },
      "Interpolated": {},
      "Label": {},
      "Municipality": {},
      "Neighborhood": {},
      "PostalCode": {},
      "Region": {},
      "Street": {},
      "SubRegion": {},
      "TimeZone": {
        "Name": {},
        "Offset": {}
      },
      "UnitNumber": {},
      "UnitType": {}
    },
    "PlaceId": {}
  }
]
```

<h2 id="tocS_SearchForSuggestionsResult">SearchForSuggestionsResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchforsuggestionsresult"></a>
<a id="schema_SearchForSuggestionsResult"></a>
<a id="tocSsearchforsuggestionsresult"></a>
<a id="tocssearchforsuggestionsresult"></a>

```json
{
  "PlaceId": {},
  "Text": {}
}
```

Contains a place suggestion resulting from a place suggestion query that is run on a place index resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PlaceId|object|false|none|none|
|Text|object|true|none|none|

<h2 id="tocS_SearchForSuggestionsResultList">SearchForSuggestionsResultList</h2>
<!-- backwards compatibility -->
<a id="schemasearchforsuggestionsresultlist"></a>
<a id="schema_SearchForSuggestionsResultList"></a>
<a id="tocSsearchforsuggestionsresultlist"></a>
<a id="tocssearchforsuggestionsresultlist"></a>

```json
[
  {
    "PlaceId": {},
    "Text": {}
  }
]
```

<h2 id="tocS_SearchForTextResultDistanceDouble">SearchForTextResultDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemasearchfortextresultdistancedouble"></a>
<a id="schema_SearchForTextResultDistanceDouble"></a>
<a id="tocSsearchfortextresultdistancedouble"></a>
<a id="tocssearchfortextresultdistancedouble"></a>

```json
0
```

<h2 id="tocS_SearchForTextResultRelevanceDouble">SearchForTextResultRelevanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemasearchfortextresultrelevancedouble"></a>
<a id="schema_SearchForTextResultRelevanceDouble"></a>
<a id="tocSsearchfortextresultrelevancedouble"></a>
<a id="tocssearchfortextresultrelevancedouble"></a>

```json
0
```

<h2 id="tocS_SearchForTextResult">SearchForTextResult</h2>
<!-- backwards compatibility -->
<a id="schemasearchfortextresult"></a>
<a id="schema_SearchForTextResult"></a>
<a id="tocSsearchfortextresult"></a>
<a id="tocssearchfortextresult"></a>

```json
{
  "Distance": {},
  "Place": {
    "AddressNumber": {},
    "Country": {},
    "Geometry": {
      "Point": {}
    },
    "Interpolated": {},
    "Label": {},
    "Municipality": {},
    "Neighborhood": {},
    "PostalCode": {},
    "Region": {},
    "Street": {},
    "SubRegion": {},
    "TimeZone": {
      "Name": {},
      "Offset": {}
    },
    "UnitNumber": {},
    "UnitType": {}
  },
  "PlaceId": {},
  "Relevance": {}
}
```

Contains a search result from a text search query that is run on a place index resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distance|object|false|none|none|
|Place|object|true|none|none|
|PlaceId|object|false|none|none|
|Relevance|object|false|none|none|

<h2 id="tocS_SearchForTextResultList">SearchForTextResultList</h2>
<!-- backwards compatibility -->
<a id="schemasearchfortextresultlist"></a>
<a id="schema_SearchForTextResultList"></a>
<a id="tocSsearchfortextresultlist"></a>
<a id="tocssearchfortextresultlist"></a>

```json
[
  {
    "Distance": {},
    "Place": {
      "AddressNumber": {},
      "Country": {},
      "Geometry": {
        "Point": {}
      },
      "Interpolated": {},
      "Label": {},
      "Municipality": {},
      "Neighborhood": {},
      "PostalCode": {},
      "Region": {},
      "Street": {},
      "SubRegion": {},
      "TimeZone": {
        "Name": {},
        "Offset": {}
      },
      "UnitNumber": {},
      "UnitType": {}
    },
    "PlaceId": {},
    "Relevance": {}
  }
]
```

<h2 id="tocS_SearchPlaceIndexForPositionRequest">SearchPlaceIndexForPositionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforpositionrequest"></a>
<a id="schema_SearchPlaceIndexForPositionRequest"></a>
<a id="tocSsearchplaceindexforpositionrequest"></a>
<a id="tocssearchplaceindexforpositionrequest"></a>

```json
{
  "Language": {},
  "MaxResults": {},
  "Position": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|Position|object|true|none|none|

<h2 id="tocS_SearchPlaceIndexForPositionSummary">SearchPlaceIndexForPositionSummary</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforpositionsummary"></a>
<a id="schema_SearchPlaceIndexForPositionSummary"></a>
<a id="tocSsearchplaceindexforpositionsummary"></a>
<a id="tocssearchplaceindexforpositionsummary"></a>

```json
{
  "DataSource": {},
  "Language": {},
  "MaxResults": {},
  "Position": {}
}
```

A summary of the request sent by using <code>SearchPlaceIndexForPosition</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSource|object|true|none|none|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|Position|object|true|none|none|

<h2 id="tocS_SearchPlaceIndexForSuggestionsRequestMaxResultsInteger">SearchPlaceIndexForSuggestionsRequestMaxResultsInteger</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforsuggestionsrequestmaxresultsinteger"></a>
<a id="schema_SearchPlaceIndexForSuggestionsRequestMaxResultsInteger"></a>
<a id="tocSsearchplaceindexforsuggestionsrequestmaxresultsinteger"></a>
<a id="tocssearchplaceindexforsuggestionsrequestmaxresultsinteger"></a>

```json
1
```

<h2 id="tocS_SearchPlaceIndexForSuggestionsRequestTextString">SearchPlaceIndexForSuggestionsRequestTextString</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforsuggestionsrequesttextstring"></a>
<a id="schema_SearchPlaceIndexForSuggestionsRequestTextString"></a>
<a id="tocSsearchplaceindexforsuggestionsrequesttextstring"></a>
<a id="tocssearchplaceindexforsuggestionsrequesttextstring"></a>

```json
"password"
```

<h2 id="tocS_SearchPlaceIndexForSuggestionsRequest">SearchPlaceIndexForSuggestionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforsuggestionsrequest"></a>
<a id="schema_SearchPlaceIndexForSuggestionsRequest"></a>
<a id="tocSsearchplaceindexforsuggestionsrequest"></a>
<a id="tocssearchplaceindexforsuggestionsrequest"></a>

```json
{
  "BiasPosition": {},
  "FilterBBox": {},
  "FilterCountries": {},
  "Language": {},
  "MaxResults": {},
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BiasPosition|object|false|none|none|
|FilterBBox|object|false|none|none|
|FilterCountries|object|false|none|none|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|Text|object|true|none|none|

<h2 id="tocS_SearchPlaceIndexForSuggestionsSummary">SearchPlaceIndexForSuggestionsSummary</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexforsuggestionssummary"></a>
<a id="schema_SearchPlaceIndexForSuggestionsSummary"></a>
<a id="tocSsearchplaceindexforsuggestionssummary"></a>
<a id="tocssearchplaceindexforsuggestionssummary"></a>

```json
{
  "BiasPosition": {},
  "DataSource": {},
  "FilterBBox": {},
  "FilterCountries": {},
  "Language": {},
  "MaxResults": {},
  "Text": {}
}
```

A summary of the request sent by using <code>SearchPlaceIndexForSuggestions</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BiasPosition|object|false|none|none|
|DataSource|object|true|none|none|
|FilterBBox|object|false|none|none|
|FilterCountries|object|false|none|none|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|Text|object|true|none|none|

<h2 id="tocS_SensitiveString">SensitiveString</h2>
<!-- backwards compatibility -->
<a id="schemasensitivestring"></a>
<a id="schema_SensitiveString"></a>
<a id="tocSsensitivestring"></a>
<a id="tocssensitivestring"></a>

```json
"password"
```

<h2 id="tocS_SearchPlaceIndexForTextRequestTextString">SearchPlaceIndexForTextRequestTextString</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexfortextrequesttextstring"></a>
<a id="schema_SearchPlaceIndexForTextRequestTextString"></a>
<a id="tocSsearchplaceindexfortextrequesttextstring"></a>
<a id="tocssearchplaceindexfortextrequesttextstring"></a>

```json
"password"
```

<h2 id="tocS_SearchPlaceIndexForTextRequest">SearchPlaceIndexForTextRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexfortextrequest"></a>
<a id="schema_SearchPlaceIndexForTextRequest"></a>
<a id="tocSsearchplaceindexfortextrequest"></a>
<a id="tocssearchplaceindexfortextrequest"></a>

```json
{
  "BiasPosition": {},
  "FilterBBox": {},
  "FilterCountries": {},
  "Language": {},
  "MaxResults": {},
  "Text": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BiasPosition|object|false|none|none|
|FilterBBox|object|false|none|none|
|FilterCountries|object|false|none|none|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|Text|object|true|none|none|

<h2 id="tocS_SearchPlaceIndexForTextSummary">SearchPlaceIndexForTextSummary</h2>
<!-- backwards compatibility -->
<a id="schemasearchplaceindexfortextsummary"></a>
<a id="schema_SearchPlaceIndexForTextSummary"></a>
<a id="tocSsearchplaceindexfortextsummary"></a>
<a id="tocssearchplaceindexfortextsummary"></a>

```json
{
  "BiasPosition": {},
  "DataSource": {},
  "FilterBBox": {},
  "FilterCountries": {},
  "Language": {},
  "MaxResults": {},
  "ResultBBox": {},
  "Text": {}
}
```

A summary of the request sent by using <code>SearchPlaceIndexForText</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BiasPosition|object|false|none|none|
|DataSource|object|true|none|none|
|FilterBBox|object|false|none|none|
|FilterCountries|object|false|none|none|
|Language|object|false|none|none|
|MaxResults|object|false|none|none|
|ResultBBox|object|false|none|none|
|Text|object|true|none|none|

<h2 id="tocS_StepDistanceDouble">StepDistanceDouble</h2>
<!-- backwards compatibility -->
<a id="schemastepdistancedouble"></a>
<a id="schema_StepDistanceDouble"></a>
<a id="tocSstepdistancedouble"></a>
<a id="tocsstepdistancedouble"></a>

```json
0
```

<h2 id="tocS_StepDurationSecondsDouble">StepDurationSecondsDouble</h2>
<!-- backwards compatibility -->
<a id="schemastepdurationsecondsdouble"></a>
<a id="schema_StepDurationSecondsDouble"></a>
<a id="tocSstepdurationsecondsdouble"></a>
<a id="tocsstepdurationsecondsdouble"></a>

```json
0
```

<h2 id="tocS_StepGeometryOffsetInteger">StepGeometryOffsetInteger</h2>
<!-- backwards compatibility -->
<a id="schemastepgeometryoffsetinteger"></a>
<a id="schema_StepGeometryOffsetInteger"></a>
<a id="tocSstepgeometryoffsetinteger"></a>
<a id="tocsstepgeometryoffsetinteger"></a>

```json
0
```

<h2 id="tocS_Step">Step</h2>
<!-- backwards compatibility -->
<a id="schemastep"></a>
<a id="schema_Step"></a>
<a id="tocSstep"></a>
<a id="tocsstep"></a>

```json
{
  "Distance": {},
  "DurationSeconds": {},
  "EndPosition": {},
  "GeometryOffset": {},
  "StartPosition": {}
}
```

 Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Distance|object|true|none|none|
|DurationSeconds|object|true|none|none|
|EndPosition|object|true|none|none|
|GeometryOffset|object|false|none|none|
|StartPosition|object|true|none|none|

<h2 id="tocS_TagKey">TagKey</h2>
<!-- backwards compatibility -->
<a id="schematagkey"></a>
<a id="schema_TagKey"></a>
<a id="tocStagkey"></a>
<a id="tocstagkey"></a>

```json
"string"
```

<h2 id="tocS_TagKeys">TagKeys</h2>
<!-- backwards compatibility -->
<a id="schematagkeys"></a>
<a id="schema_TagKeys"></a>
<a id="tocStagkeys"></a>
<a id="tocstagkeys"></a>

```json
[
  "string"
]
```

<h2 id="tocS_TagResourceRequest">TagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schematagresourcerequest"></a>
<a id="schema_TagResourceRequest"></a>
<a id="tocStagresourcerequest"></a>
<a id="tocstagresourcerequest"></a>

```json
{
  "Tags": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Tags|object|true|none|none|

<h2 id="tocS_TruckDimensionsHeightDouble">TruckDimensionsHeightDouble</h2>
<!-- backwards compatibility -->
<a id="schematruckdimensionsheightdouble"></a>
<a id="schema_TruckDimensionsHeightDouble"></a>
<a id="tocStruckdimensionsheightdouble"></a>
<a id="tocstruckdimensionsheightdouble"></a>

```json
0
```

<h2 id="tocS_TruckDimensionsLengthDouble">TruckDimensionsLengthDouble</h2>
<!-- backwards compatibility -->
<a id="schematruckdimensionslengthdouble"></a>
<a id="schema_TruckDimensionsLengthDouble"></a>
<a id="tocStruckdimensionslengthdouble"></a>
<a id="tocstruckdimensionslengthdouble"></a>

```json
0
```

<h2 id="tocS_TruckDimensionsWidthDouble">TruckDimensionsWidthDouble</h2>
<!-- backwards compatibility -->
<a id="schematruckdimensionswidthdouble"></a>
<a id="schema_TruckDimensionsWidthDouble"></a>
<a id="tocStruckdimensionswidthdouble"></a>
<a id="tocstruckdimensionswidthdouble"></a>

```json
0
```

<h2 id="tocS_TruckWeightTotalDouble">TruckWeightTotalDouble</h2>
<!-- backwards compatibility -->
<a id="schematruckweighttotaldouble"></a>
<a id="schema_TruckWeightTotalDouble"></a>
<a id="tocStruckweighttotaldouble"></a>
<a id="tocstruckweighttotaldouble"></a>

```json
0
```

<h2 id="tocS_VehicleWeightUnit">VehicleWeightUnit</h2>
<!-- backwards compatibility -->
<a id="schemavehicleweightunit"></a>
<a id="schema_VehicleWeightUnit"></a>
<a id="tocSvehicleweightunit"></a>
<a id="tocsvehicleweightunit"></a>

```json
"Kilograms"
```

<h2 id="tocS_UntagResourceRequest">UntagResourceRequest</h2>
<!-- backwards compatibility -->
<a id="schemauntagresourcerequest"></a>
<a id="schema_UntagResourceRequest"></a>
<a id="tocSuntagresourcerequest"></a>
<a id="tocsuntagresourcerequest"></a>

```json
{}
```

<h2 id="tocS_UpdateGeofenceCollectionRequest">UpdateGeofenceCollectionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdategeofencecollectionrequest"></a>
<a id="schema_UpdateGeofenceCollectionRequest"></a>
<a id="tocSupdategeofencecollectionrequest"></a>
<a id="tocsupdategeofencecollectionrequest"></a>

```json
{
  "Description": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|

<h2 id="tocS_UpdateKeyRequest">UpdateKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatekeyrequest"></a>
<a id="schema_UpdateKeyRequest"></a>
<a id="tocSupdatekeyrequest"></a>
<a id="tocsupdatekeyrequest"></a>

```json
{
  "Description": {},
  "ExpireTime": {},
  "ForceUpdate": {},
  "NoExpiry": {},
  "Restrictions": {
    "AllowActions": {},
    "AllowReferers": {},
    "AllowResources": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|ExpireTime|object|false|none|none|
|ForceUpdate|object|false|none|none|
|NoExpiry|object|false|none|none|
|Restrictions|object|false|none|none|

<h2 id="tocS_UpdateMapRequest">UpdateMapRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatemaprequest"></a>
<a id="schema_UpdateMapRequest"></a>
<a id="tocSupdatemaprequest"></a>
<a id="tocsupdatemaprequest"></a>

```json
{
  "Description": {},
  "PricingPlan": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|PricingPlan|object|false|none|none|

<h2 id="tocS_UpdatePlaceIndexRequest">UpdatePlaceIndexRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateplaceindexrequest"></a>
<a id="schema_UpdatePlaceIndexRequest"></a>
<a id="tocSupdateplaceindexrequest"></a>
<a id="tocsupdateplaceindexrequest"></a>

```json
{
  "DataSourceConfiguration": {
    "IntendedUse": {}
  },
  "Description": {},
  "PricingPlan": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DataSourceConfiguration|object|false|none|none|
|Description|object|false|none|none|
|PricingPlan|object|false|none|none|

<h2 id="tocS_UpdateRouteCalculatorRequest">UpdateRouteCalculatorRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateroutecalculatorrequest"></a>
<a id="schema_UpdateRouteCalculatorRequest"></a>
<a id="tocSupdateroutecalculatorrequest"></a>
<a id="tocsupdateroutecalculatorrequest"></a>

```json
{
  "Description": {},
  "PricingPlan": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|PricingPlan|object|false|none|none|

<h2 id="tocS_UpdateTrackerRequest">UpdateTrackerRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetrackerrequest"></a>
<a id="schema_UpdateTrackerRequest"></a>
<a id="tocSupdatetrackerrequest"></a>
<a id="tocsupdatetrackerrequest"></a>

```json
{
  "Description": {},
  "PositionFiltering": {},
  "PricingPlan": {},
  "PricingPlanDataSource": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Description|object|false|none|none|
|PositionFiltering|object|false|none|none|
|PricingPlan|object|false|none|none|
|PricingPlanDataSource|object|false|none|none|
