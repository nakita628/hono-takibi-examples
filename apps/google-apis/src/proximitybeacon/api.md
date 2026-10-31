<h1 id="proximity-beacon-api">Proximity Beacon API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Registers, manages, indexes, and searches beacons.

Base URLs:

* <a href="https://proximitybeacon.googleapis.com/">https://proximitybeacon.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/beacons/proximity/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userlocation.beacon.registry|View and modify your beacons|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/userlocation.beacon.registry|View and modify your beacons|

<h1 id="proximity-beacon-api-beaconinfo">beaconinfo</h1>

## proximitybeacon.beaconinfo.getforobserved

<a id="opIdproximitybeacon.beaconinfo.getforobserved"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/beaconinfo:getforobserved \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "namespacedTypes": [
      "string"
    ],
    "observations": [
      {
        "advertisedId": {
          "id": "string",
          "type": "TYPE_UNSPECIFIED"
        },
        "telemetry": "string",
        "timestampMs": "string"
      }
    ]
  }'
```

`POST /v1beta1/beaconinfo:getforobserved`

Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key) for the application.

> Body parameter

```json
{
  "namespacedTypes": [
    "string"
  ],
  "observations": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "telemetry": "string",
      "timestampMs": "string"
    }
  ]
}
```

<h3 id="proximitybeaconbeaconinfogetforobserved-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GetInfoForObservedBeaconsRequest](#schemagetinfoforobservedbeaconsrequest)|false|none|
|» namespacedTypes|body|[string]|false|Specifies what kind of attachments to include in the response. When given, the response will include only attachments of the given types. When empty, no attachments will be returned. Must be in the format namespace/type. Accepts `*` to specify all types in all namespaces owned by the client. Optional.|
|» observations|body|[[Observation](#schemaobservation)]|false|The beacons that the client has encountered. At least one must be given.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "beacons": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "attachments": [
        {
          "data": "string",
          "maxDistanceMeters": 0,
          "namespacedType": "string"
        }
      ],
      "beaconName": "string"
    }
  ]
}
```

<h3 id="proximitybeaconbeaconinfogetforobserved-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetInfoForObservedBeaconsResponse](#schemagetinfoforobservedbeaconsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="proximity-beacon-api-beacons">beacons</h1>

## proximitybeacon.beacons.list

<a id="opIdproximitybeacon.beacons.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/beacons \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/beacons`

Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of records to return for this request, up to a server-defined upper limit.|
|pageToken|query|string|false|A pagination token obtained from a previous request to list beacons.|
|projectId|query|string|false|The project id to list beacons under. If not present then the project credential that made the request is used as the project. Optional.|
|q|query|string|false|Filter query string that supports the following field filters: * **description:`""`** For example: **description:"Room 3"** Returns beacons whose description matches tokens in the string "Room 3" (not necessarily that exact string). The string must be double-quoted. * **status:``** For example: **status:active** Returns beacons whose status matches the given value. Values must be one of the Beacon.Status enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * **stability:``** For example: **stability:mobile** Returns beacons whose expected stability matches the given value. Values must be one of the Beacon.Stability enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * **place\_id:`""`** For example: **place\_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="** Returns beacons explicitly registered at the given place, expressed as a Place ID obtained from [Google Places API](/places/place-id). Does not match places inside the given place. Does not consider the beacon's actual location (which may be different from its registered place). Accepts multiple filters that will be combined with OR logic. The place ID must be double-quoted. * **registration\_time`[<\|>\|<=\|>=]`** For example: **registration\_time>=1433116800** Returns beacons whose registration time matches the given filter. Supports the operators: <, >, <=, and >=. Timestamp must be expressed as an integer number of seconds since midnight January 1, 1970 UTC. Accepts at most two filters that will be combined with AND logic, to support "between" semantics. If more than two are supplied, the latter ones are ignored. * **lat:` lng: radius:`** For example: **lat:51.1232343 lng:-1.093852 radius:1000** Returns beacons whose registered location is within the given circle. When any of these fields are given, all are required. Latitude and longitude must be decimal degrees between -90.0 and 90.0 and between -180.0 and 180.0 respectively. Radius must be an integer number of meters between 10 and 1,000,000 (1000 km). * **property:`"="`** For example: **property:"battery-type=CR2032"** Returns beacons which have a property of the given name and value. Supports multiple filters which will be combined with OR logic. The entire name=value string must be double-quoted as one string. * **attachment\_type:`""`** For example: **attachment_type:"my-namespace/my-type"** Returns beacons having at least one attachment of the given namespaced type. Supports "any within this namespace" via the partial wildcard syntax: "my-namespace/*". Supports multiple filters which will be combined with OR logic. The string must be double-quoted. * **indoor\_level:`""`** For example: **indoor\_level:"1"** Returns beacons which are located on the given indoor level. Accepts multiple filters that will be combined with OR logic. Multiple filters on the same field are combined with OR logic (except registration_time which is combined with AND logic). Multiple filters on different fields are combined with AND logic. Filters should be separated by spaces. As with any HTTP query string parameter, the whole filter expression must be URL-encoded. Example REST request: `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "beacons": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "beaconName": "string",
      "description": "string",
      "ephemeralIdRegistration": {
        "beaconEcdhPublicKey": "string",
        "beaconIdentityKey": "string",
        "initialClockValue": "string",
        "initialEid": "string",
        "rotationPeriodExponent": 0,
        "serviceEcdhPublicKey": "string"
      },
      "expectedStability": "STABILITY_UNSPECIFIED",
      "indoorLevel": {
        "name": "string"
      },
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "placeId": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "provisioningKey": "string",
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalCount": "string"
}
```

<h3 id="proximitybeaconbeaconslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBeaconsResponse](#schemalistbeaconsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.register

<a id="opIdproximitybeacon.beacons.register"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/beacons:register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "advertisedId": {
      "id": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "beaconName": "string",
    "description": "string",
    "ephemeralIdRegistration": {
      "beaconEcdhPublicKey": "string",
      "beaconIdentityKey": "string",
      "initialClockValue": "string",
      "initialEid": "string",
      "rotationPeriodExponent": 0,
      "serviceEcdhPublicKey": "string"
    },
    "expectedStability": "STABILITY_UNSPECIFIED",
    "indoorLevel": {
      "name": "string"
    },
    "latLng": {
      "latitude": 0,
      "longitude": 0
    },
    "placeId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "provisioningKey": "string",
    "status": "STATUS_UNSPECIFIED"
  }'
```

`POST /v1beta1/beacons:register`

Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

> Body parameter

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="proximitybeaconbeaconsregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|false|The project id of the project the beacon will be registered to. If the project id is not specified then the project making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Beacon](#schemabeacon)|false|none|
|» advertisedId|body|[AdvertisedId](#schemaadvertisedid)|false|The identifier of a beacon as advertised by it. This field must be populated when registering. It may be empty when updating a beacon record because it is ignored in updates. When registering a beacon that broadcasts Eddystone-EID, this field should contain a "stable" Eddystone-UID that identifies the beacon and links it to its attachments. The stable Eddystone-UID is only used for administering the beacon.|
|» beaconName|body|string|false|Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.|
|» description|body|string|false|Free text used to identify and describe the beacon. Maximum length 140 characters. Optional.|
|» ephemeralIdRegistration|body|[EphemeralIdRegistration](#schemaephemeralidregistration)|false|Write-only registration parameters for beacons using Eddystone-EID (remotely resolved ephemeral ID) format. This information will not be populated in API responses. When submitting this data, the `advertised_id` field must contain an ID of type Eddystone-UID. Any other ID type will result in an error.|
|» expectedStability|body|string|false|Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional.|
|» indoorLevel|body|[IndoorLevel](#schemaindoorlevel)|false|The indoor level information for this beacon, if known. As returned by the Google Maps API. Optional.|
|» latLng|body|[LatLng](#schemalatlng)|false|The location of the beacon, expressed as a latitude and longitude pair. This location is given when the beacon is registered or updated. It does not necessarily indicate the actual current location of the beacon. Optional.|
|» placeId|body|string|false|The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional.|
|» properties|body|object|false|Properties of the beacon device, for example battery type or firmware version. Optional.|
|» » **additionalProperties**|body|string|false|none|
|» provisioningKey|body|string(byte)|false|Some beacons may require a user to provide an authorization key before changing any of its configuration (e.g. broadcast frames, transmit power). This field provides a place to store and control access to that key. This field is populated in responses to `GET /v1beta1/beacons/3!beaconId` from users with write access to the given beacon. That is to say: If the user is authorized to write the beacon's confidential data in the service, the service considers them authorized to configure the beacon. Note that this key grants nothing on the service, only on the beacon itself.|
|» status|body|string|false|Current status of the beacon. Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» expectedStability|STABILITY_UNSPECIFIED|
|» expectedStability|STABLE|
|» expectedStability|PORTABLE|
|» expectedStability|MOBILE|
|» expectedStability|ROVING|
|» status|STATUS_UNSPECIFIED|
|» status|ACTIVE|
|» status|DECOMMISSIONED|
|» status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="proximitybeaconbeaconsregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Beacon](#schemabeacon)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.attachments.delete

<a id="opIdproximitybeacon.beacons.attachments.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{attachmentName}`

Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsattachmentsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachmentName|path|string|true|The attachment name (`attachmentName`) of the attachment to remove. For example: `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the beacon's current EID, or its "stable" Eddystone-UID. Required.|
|projectId|query|string|false|The project id of the attachment to delete. If not provided, the project that is making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="proximitybeaconbeaconsattachmentsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.get

<a id="opIdproximitybeacon.beacons.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{beaconName}`

Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.

<h3 id="proximitybeaconbeaconsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the beacon to request. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="proximitybeaconbeaconsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Beacon](#schemabeacon)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.update

<a id="opIdproximitybeacon.beacons.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "advertisedId": {
      "id": "string",
      "type": "TYPE_UNSPECIFIED"
    },
    "beaconName": "string",
    "description": "string",
    "ephemeralIdRegistration": {
      "beaconEcdhPublicKey": "string",
      "beaconIdentityKey": "string",
      "initialClockValue": "string",
      "initialEid": "string",
      "rotationPeriodExponent": 0,
      "serviceEcdhPublicKey": "string"
    },
    "expectedStability": "STABILITY_UNSPECIFIED",
    "indoorLevel": {
      "name": "string"
    },
    "latLng": {
      "latitude": 0,
      "longitude": 0
    },
    "placeId": "string",
    "properties": {
      "property1": "string",
      "property2": "string"
    },
    "provisioningKey": "string",
    "status": "STATUS_UNSPECIFIED"
  }'
```

`PUT /v1beta1/{beaconName}`

Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

> Body parameter

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="proximitybeaconbeaconsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.|
|projectId|query|string|false|The project id of the beacon to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Beacon](#schemabeacon)|false|none|
|» advertisedId|body|[AdvertisedId](#schemaadvertisedid)|false|The identifier of a beacon as advertised by it. This field must be populated when registering. It may be empty when updating a beacon record because it is ignored in updates. When registering a beacon that broadcasts Eddystone-EID, this field should contain a "stable" Eddystone-UID that identifies the beacon and links it to its attachments. The stable Eddystone-UID is only used for administering the beacon.|
|» beaconName|body|string|false|Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.|
|» description|body|string|false|Free text used to identify and describe the beacon. Maximum length 140 characters. Optional.|
|» ephemeralIdRegistration|body|[EphemeralIdRegistration](#schemaephemeralidregistration)|false|Write-only registration parameters for beacons using Eddystone-EID (remotely resolved ephemeral ID) format. This information will not be populated in API responses. When submitting this data, the `advertised_id` field must contain an ID of type Eddystone-UID. Any other ID type will result in an error.|
|» expectedStability|body|string|false|Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional.|
|» indoorLevel|body|[IndoorLevel](#schemaindoorlevel)|false|The indoor level information for this beacon, if known. As returned by the Google Maps API. Optional.|
|» latLng|body|[LatLng](#schemalatlng)|false|The location of the beacon, expressed as a latitude and longitude pair. This location is given when the beacon is registered or updated. It does not necessarily indicate the actual current location of the beacon. Optional.|
|» placeId|body|string|false|The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional.|
|» properties|body|object|false|Properties of the beacon device, for example battery type or firmware version. Optional.|
|» » **additionalProperties**|body|string|false|none|
|» provisioningKey|body|string(byte)|false|Some beacons may require a user to provide an authorization key before changing any of its configuration (e.g. broadcast frames, transmit power). This field provides a place to store and control access to that key. This field is populated in responses to `GET /v1beta1/beacons/3!beaconId` from users with write access to the given beacon. That is to say: If the user is authorized to write the beacon's confidential data in the service, the service considers them authorized to configure the beacon. Note that this key grants nothing on the service, only on the beacon itself.|
|» status|body|string|false|Current status of the beacon. Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» expectedStability|STABILITY_UNSPECIFIED|
|» expectedStability|STABLE|
|» expectedStability|PORTABLE|
|» expectedStability|MOBILE|
|» expectedStability|ROVING|
|» status|STATUS_UNSPECIFIED|
|» status|ACTIVE|
|» status|DECOMMISSIONED|
|» status|INACTIVE|

> Example responses

> 200 Response

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

<h3 id="proximitybeaconbeaconsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Beacon](#schemabeacon)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.delete

<a id="opIdproximitybeacon.beacons.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{beaconName}`

Deletes the specified beacon including all diagnostics data for the beacon as well as any attachments on the beacon (including those belonging to other projects). This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon that should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the beacon to delete. If not provided, the project that is making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="proximitybeaconbeaconsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.attachments.list

<a id="opIdproximitybeacon.beacons.attachments.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{beaconName}/attachments`

Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `*/*`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsattachmentslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon whose attachments should be fetched. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|namespacedType|query|string|false|Specifies the namespace and type of attachment to include in response in namespace/type format. Accepts `*/*` to specify "all types in all namespaces".|
|projectId|query|string|false|The project id to list beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "attachmentName": "string",
      "creationTimeMs": "string",
      "data": "string",
      "maxDistanceMeters": 0,
      "namespacedType": "string"
    }
  ]
}
```

<h3 id="proximitybeaconbeaconsattachmentslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBeaconAttachmentsResponse](#schemalistbeaconattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.attachments.create

<a id="opIdproximitybeacon.beacons.attachments.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachmentName": "string",
    "creationTimeMs": "string",
    "data": "string",
    "maxDistanceMeters": 0,
    "namespacedType": "string"
  }'
```

`POST /v1beta1/{beaconName}/attachments`

Associates the given data with the specified beacon. Attachment data must contain two parts: - A namespaced type. - The actual attachment data itself. The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

> Body parameter

```json
{
  "attachmentName": "string",
  "creationTimeMs": "string",
  "data": "string",
  "maxDistanceMeters": 0,
  "namespacedType": "string"
}
```

<h3 id="proximitybeaconbeaconsattachmentscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon on which the attachment should be created. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the project the attachment will belong to. If the project id is not specified then the project making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[BeaconAttachment](#schemabeaconattachment)|false|none|
|» attachmentName|body|string|false|Resource name of this attachment. Attachment names have the format: beacons/ beacon_id/attachments/attachment_id. Leave this empty on creation.|
|» creationTimeMs|body|string(google-datetime)|false|The UTC time when this attachment was created, in milliseconds since the UNIX epoch.|
|» data|body|string(byte)|false|An opaque data container for client-provided data. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. Required.|
|» maxDistanceMeters|body|number(double)|false|The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is "seen" when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon's outer limit of detection. Negative values are invalid and return an error.|
|» namespacedType|body|string|false|Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type. Namespace provides type separation between clients. Type describes the type of `data`, for use by the client when parsing the `data` field. Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attachmentName": "string",
  "creationTimeMs": "string",
  "data": "string",
  "maxDistanceMeters": 0,
  "namespacedType": "string"
}
```

<h3 id="proximitybeaconbeaconsattachmentscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BeaconAttachment](#schemabeaconattachment)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.attachments.batchDelete

<a id="opIdproximitybeacon.beacons.attachments.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/attachments:batchDelete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{beaconName}/attachments:batchDelete`

Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `*/*` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsattachmentsbatchdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|The beacon whose attachments should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|namespacedType|query|string|false|Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `*/*` to specify "all types in all namespaces". Optional.|
|projectId|query|string|false|The project id to delete beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "numDeleted": 0
}
```

<h3 id="proximitybeaconbeaconsattachmentsbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteAttachmentsResponse](#schemadeleteattachmentsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.diagnostics.list

<a id="opIdproximitybeacon.beacons.diagnostics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/diagnostics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{beaconName}/diagnostics`

List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsdiagnosticslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon that the diagnostics are for.|
|alertFilter|query|string|false|Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.|
|pageSize|query|integer|false|Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.|
|pageToken|query|string|false|Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.|
|projectId|query|string|false|Requests only diagnostic records for the given project id. If not set, then the project making the request will be used for looking up diagnostic records. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alertFilter|ALERT_UNSPECIFIED|
|alertFilter|WRONG_LOCATION|
|alertFilter|LOW_BATTERY|
|alertFilter|LOW_ACTIVITY|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "diagnostics": [
    {
      "alerts": [
        "ALERT_UNSPECIFIED"
      ],
      "beaconName": "string",
      "estimatedLowBatteryDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="proximitybeaconbeaconsdiagnosticslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDiagnosticsResponse](#schemalistdiagnosticsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.activate

<a id="opIdproximitybeacon.beacons.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{beaconName}:activate`

Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon that should be activated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the beacon to activate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="proximitybeaconbeaconsactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.deactivate

<a id="opIdproximitybeacon.beacons.deactivate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:deactivate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{beaconName}:deactivate`

Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsdeactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon that should be deactivated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the beacon to deactivate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="proximitybeaconbeaconsdeactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.beacons.decommission

<a id="opIdproximitybeacon.beacons.decommission"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:decommission \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1beta1/{beaconName}:decommission`

Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconbeaconsdecommission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|beaconName|path|string|true|Beacon that should be decommissioned. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID of the beacon's "stable" UID. Required.|
|projectId|query|string|false|The project id of the beacon to decommission. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="proximitybeaconbeaconsdecommission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

<h1 id="proximity-beacon-api-namespaces">namespaces</h1>

## proximitybeacon.namespaces.list

<a id="opIdproximitybeacon.namespaces.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/namespaces \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/namespaces`

Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.

<h3 id="proximitybeaconnamespaceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|string|false|The project id to list namespaces under. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "namespaces": [
    {
      "namespaceName": "string",
      "servingVisibility": "VISIBILITY_UNSPECIFIED"
    }
  ]
}
```

<h3 id="proximitybeaconnamespaceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNamespacesResponse](#schemalistnamespacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

## proximitybeacon.namespaces.update

<a id="opIdproximitybeacon.namespaces.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "namespaceName": "string",
    "servingVisibility": "VISIBILITY_UNSPECIFIED"
  }'
```

`PUT /v1beta1/{namespaceName}`

Updates the information about the specified namespace. Only the namespace visibility can be updated.

> Body parameter

```json
{
  "namespaceName": "string",
  "servingVisibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="proximitybeaconnamespacesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|namespaceName|path|string|true|Resource name of this namespace. Namespaces names have the format: namespaces/namespace.|
|projectId|query|string|false|The project id of the namespace to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Namespace](#schemanamespace)|false|none|
|» namespaceName|body|string|false|Resource name of this namespace. Namespaces names have the format: namespaces/namespace.|
|» servingVisibility|body|string|false|Specifies what clients may receive attachments under this namespace via `beaconinfo.getforobserved`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» servingVisibility|VISIBILITY_UNSPECIFIED|
|» servingVisibility|UNLISTED|
|» servingVisibility|PUBLIC|

> Example responses

> 200 Response

```json
{
  "namespaceName": "string",
  "servingVisibility": "VISIBILITY_UNSPECIFIED"
}
```

<h3 id="proximitybeaconnamespacesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Namespace](#schemanamespace)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

<h1 id="proximity-beacon-api-v1beta1">v1beta1</h1>

## proximitybeacon.getEidparams

<a id="opIdproximitybeacon.getEidparams"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/eidparams \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/eidparams`

Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.

<h3 id="proximitybeacongeteidparams-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "maxRotationPeriodExponent": 0,
  "minRotationPeriodExponent": 0,
  "serviceEcdhPublicKey": "string"
}
```

<h3 id="proximitybeacongeteidparams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EphemeralIdRegistrationParams](#schemaephemeralidregistrationparams)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/userlocation.beacon.registry )
</aside>

# Schemas

<h2 id="tocS_AdvertisedId">AdvertisedId</h2>
<!-- backwards compatibility -->
<a id="schemaadvertisedid"></a>
<a id="schema_AdvertisedId"></a>
<a id="tocSadvertisedid"></a>
<a id="tocsadvertisedid"></a>

```json
{
  "id": "string",
  "type": "TYPE_UNSPECIFIED"
}
```

Defines a unique identifier of a beacon as broadcast by the device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(byte)|false|none|The actual beacon identifier, as broadcast by the beacon hardware. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. The base64 encoding should be of the binary byte-stream and not any textual (such as hex) representation thereof. Required.|
|type|string|false|none|Specifies the identifier type. Required.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|EDDYSTONE|
|type|IBEACON|
|type|ALTBEACON|
|type|EDDYSTONE_EID|

<h2 id="tocS_AttachmentInfo">AttachmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentinfo"></a>
<a id="schema_AttachmentInfo"></a>
<a id="tocSattachmentinfo"></a>
<a id="tocsattachmentinfo"></a>

```json
{
  "data": "string",
  "maxDistanceMeters": 0,
  "namespacedType": "string"
}
```

A subset of attachment information served via the `beaconinfo.getforobserved` method, used when your users encounter your beacons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string(byte)|false|none|An opaque data container for client-provided data.|
|maxDistanceMeters|number(double)|false|none|The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is "seen" when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon's outer limit of detection.|
|namespacedType|string|false|none|Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type, for example scrupulous-wombat-12345/welcome-message|

<h2 id="tocS_Beacon">Beacon</h2>
<!-- backwards compatibility -->
<a id="schemabeacon"></a>
<a id="schema_Beacon"></a>
<a id="tocSbeacon"></a>
<a id="tocsbeacon"></a>

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "beaconName": "string",
  "description": "string",
  "ephemeralIdRegistration": {
    "beaconEcdhPublicKey": "string",
    "beaconIdentityKey": "string",
    "initialClockValue": "string",
    "initialEid": "string",
    "rotationPeriodExponent": 0,
    "serviceEcdhPublicKey": "string"
  },
  "expectedStability": "STABILITY_UNSPECIFIED",
  "indoorLevel": {
    "name": "string"
  },
  "latLng": {
    "latitude": 0,
    "longitude": 0
  },
  "placeId": "string",
  "properties": {
    "property1": "string",
    "property2": "string"
  },
  "provisioningKey": "string",
  "status": "STATUS_UNSPECIFIED"
}
```

Details of a beacon device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisedId|[AdvertisedId](#schemaadvertisedid)|false|none|The identifier of a beacon as advertised by it. This field must be populated when registering. It may be empty when updating a beacon record because it is ignored in updates. When registering a beacon that broadcasts Eddystone-EID, this field should contain a "stable" Eddystone-UID that identifies the beacon and links it to its attachments. The stable Eddystone-UID is only used for administering the beacon.|
|beaconName|string|false|none|Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.|
|description|string|false|none|Free text used to identify and describe the beacon. Maximum length 140 characters. Optional.|
|ephemeralIdRegistration|[EphemeralIdRegistration](#schemaephemeralidregistration)|false|none|Write-only registration parameters for beacons using Eddystone-EID (remotely resolved ephemeral ID) format. This information will not be populated in API responses. When submitting this data, the `advertised_id` field must contain an ID of type Eddystone-UID. Any other ID type will result in an error.|
|expectedStability|string|false|none|Expected location stability. This is set when the beacon is registered or updated, not automatically detected in any way. Optional.|
|indoorLevel|[IndoorLevel](#schemaindoorlevel)|false|none|The indoor level information for this beacon, if known. As returned by the Google Maps API. Optional.|
|latLng|[LatLng](#schemalatlng)|false|none|The location of the beacon, expressed as a latitude and longitude pair. This location is given when the beacon is registered or updated. It does not necessarily indicate the actual current location of the beacon. Optional.|
|placeId|string|false|none|The [Google Places API](/places/place-id) Place ID of the place where the beacon is deployed. This is given when the beacon is registered or updated, not automatically detected in any way. Optional.|
|properties|object|false|none|Properties of the beacon device, for example battery type or firmware version. Optional.|
|provisioningKey|string(byte)|false|none|Some beacons may require a user to provide an authorization key before changing any of its configuration (e.g. broadcast frames, transmit power). This field provides a place to store and control access to that key. This field is populated in responses to `GET /v1beta1/beacons/3!beaconId` from users with write access to the given beacon. That is to say: If the user is authorized to write the beacon's confidential data in the service, the service considers them authorized to configure the beacon. Note that this key grants nothing on the service, only on the beacon itself.|
|status|string|false|none|Current status of the beacon. Required.|

#### Enumerated Values

|Property|Value|
|---|---|
|expectedStability|STABILITY_UNSPECIFIED|
|expectedStability|STABLE|
|expectedStability|PORTABLE|
|expectedStability|MOBILE|
|expectedStability|ROVING|
|status|STATUS_UNSPECIFIED|
|status|ACTIVE|
|status|DECOMMISSIONED|
|status|INACTIVE|

<h2 id="tocS_BeaconAttachment">BeaconAttachment</h2>
<!-- backwards compatibility -->
<a id="schemabeaconattachment"></a>
<a id="schema_BeaconAttachment"></a>
<a id="tocSbeaconattachment"></a>
<a id="tocsbeaconattachment"></a>

```json
{
  "attachmentName": "string",
  "creationTimeMs": "string",
  "data": "string",
  "maxDistanceMeters": 0,
  "namespacedType": "string"
}
```

Project-specific data associated with a beacon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentName|string|false|none|Resource name of this attachment. Attachment names have the format: beacons/ beacon_id/attachments/attachment_id. Leave this empty on creation.|
|creationTimeMs|string(google-datetime)|false|none|The UTC time when this attachment was created, in milliseconds since the UNIX epoch.|
|data|string(byte)|false|none|An opaque data container for client-provided data. Must be [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP requests, and will be so encoded (with padding) in responses. Required.|
|maxDistanceMeters|number(double)|false|none|The distance away from the beacon at which this attachment should be delivered to a mobile app. Setting this to a value greater than zero indicates that the app should behave as if the beacon is "seen" when the mobile device is less than this distance away from the beacon. Different attachments on the same beacon can have different max distances. Note that even though this value is expressed with fractional meter precision, real-world behavior is likley to be much less precise than one meter, due to the nature of current Bluetooth radio technology. Optional. When not set or zero, the attachment should be delivered at the beacon's outer limit of detection. Negative values are invalid and return an error.|
|namespacedType|string|false|none|Specifies what kind of attachment this is. Tells a client how to interpret the `data` field. Format is namespace/type. Namespace provides type separation between clients. Type describes the type of `data`, for use by the client when parsing the `data` field. Required.|

<h2 id="tocS_BeaconInfo">BeaconInfo</h2>
<!-- backwards compatibility -->
<a id="schemabeaconinfo"></a>
<a id="schema_BeaconInfo"></a>
<a id="tocSbeaconinfo"></a>
<a id="tocsbeaconinfo"></a>

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "attachments": [
    {
      "data": "string",
      "maxDistanceMeters": 0,
      "namespacedType": "string"
    }
  ],
  "beaconName": "string"
}
```

A subset of beacon information served via the `beaconinfo.getforobserved` method, which you call when users of your app encounter your beacons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisedId|[AdvertisedId](#schemaadvertisedid)|false|none|The ID advertised by the beacon.|
|attachments|[[AttachmentInfo](#schemaattachmentinfo)]|false|none|Attachments matching the type(s) requested. May be empty if no attachment types were requested.|
|beaconName|string|false|none|The name under which the beacon is registered.|

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DeleteAttachmentsResponse">DeleteAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteattachmentsresponse"></a>
<a id="schema_DeleteAttachmentsResponse"></a>
<a id="tocSdeleteattachmentsresponse"></a>
<a id="tocsdeleteattachmentsresponse"></a>

```json
{
  "numDeleted": 0
}
```

Response for a request to delete attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numDeleted|integer(int32)|false|none|The number of attachments that were deleted.|

<h2 id="tocS_Diagnostics">Diagnostics</h2>
<!-- backwards compatibility -->
<a id="schemadiagnostics"></a>
<a id="schema_Diagnostics"></a>
<a id="tocSdiagnostics"></a>
<a id="tocsdiagnostics"></a>

```json
{
  "alerts": [
    "ALERT_UNSPECIFIED"
  ],
  "beaconName": "string",
  "estimatedLowBatteryDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Diagnostics for a single beacon.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alerts|[string]|false|none|An unordered list of Alerts that the beacon has.|
|beaconName|string|false|none|Resource name of the beacon. For Eddystone-EID beacons, this may be the beacon's current EID, or the beacon's "stable" Eddystone-UID.|
|estimatedLowBatteryDate|[Date](#schemadate)|false|none|The date when the battery is expected to be low. If the value is missing then there is no estimate for when the battery will be low. This value is only an estimate, not an exact date.|

#### Enumerated Values

|Property|Value|
|---|---|
|alerts|ALERT_UNSPECIFIED|
|alerts|WRONG_LOCATION|
|alerts|LOW_BATTERY|
|alerts|LOW_ACTIVITY|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

<h2 id="tocS_EphemeralIdRegistration">EphemeralIdRegistration</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralidregistration"></a>
<a id="schema_EphemeralIdRegistration"></a>
<a id="tocSephemeralidregistration"></a>
<a id="tocsephemeralidregistration"></a>

```json
{
  "beaconEcdhPublicKey": "string",
  "beaconIdentityKey": "string",
  "initialClockValue": "string",
  "initialEid": "string",
  "rotationPeriodExponent": 0,
  "serviceEcdhPublicKey": "string"
}
```

Write-only registration parameters for beacons using Eddystone-EID format. Two ways of securely registering an Eddystone-EID beacon with the service are supported: 1. Perform an ECDH key exchange via this API, including a previous call to `GET /v1beta1/eidparams`. In this case the fields `beacon_ecdh_public_key` and `service_ecdh_public_key` should be populated and `beacon_identity_key` should not be populated. This method ensures that only the two parties in the ECDH key exchange can compute the identity key, which becomes a secret between them. 2. Derive or obtain the beacon's identity key via other secure means (perhaps an ECDH key exchange between the beacon and a mobile device or any other secure method), and then submit the resulting identity key to the service. In this case `beacon_identity_key` field should be populated, and neither of `beacon_ecdh_public_key` nor `service_ecdh_public_key` fields should be. The security of this method depends on how securely the parties involved (in particular the bluetooth client) handle the identity key, and obviously on how securely the identity key was generated. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beaconEcdhPublicKey|string(byte)|false|none|The beacon's public key used for the Elliptic curve Diffie-Hellman key exchange. When this field is populated, `service_ecdh_public_key` must also be populated, and `beacon_identity_key` must not be.|
|beaconIdentityKey|string(byte)|false|none|The private key of the beacon. If this field is populated, `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be populated.|
|initialClockValue|string(uint64)|false|none|The initial clock value of the beacon. The beacon's clock must have begun counting at this value immediately prior to transmitting this value to the resolving service. Significant delay in transmitting this value to the service risks registration or resolution failures. If a value is not provided, the default is zero.|
|initialEid|string(byte)|false|none|An initial ephemeral ID calculated using the clock value submitted as `initial_clock_value`, and the secret key generated by the Diffie-Hellman key exchange using `service_ecdh_public_key` and `service_ecdh_public_key`. This initial EID value will be used by the service to confirm that the key exchange process was successful.|
|rotationPeriodExponent|integer(uint32)|false|none|Indicates the nominal period between each rotation of the beacon's ephemeral ID. "Nominal" because the beacon should randomize the actual interval. See [the spec at github](https://github.com/google/eddystone/tree/master/eddystone-eid) for details. This value corresponds to a power-of-two scaler on the beacon's clock: when the scaler value is K, the beacon will begin broadcasting a new ephemeral ID on average every 2^K seconds.|
|serviceEcdhPublicKey|string(byte)|false|none|The service's public key used for the Elliptic curve Diffie-Hellman key exchange. When this field is populated, `beacon_ecdh_public_key` must also be populated, and `beacon_identity_key` must not be.|

<h2 id="tocS_EphemeralIdRegistrationParams">EphemeralIdRegistrationParams</h2>
<!-- backwards compatibility -->
<a id="schemaephemeralidregistrationparams"></a>
<a id="schema_EphemeralIdRegistrationParams"></a>
<a id="tocSephemeralidregistrationparams"></a>
<a id="tocsephemeralidregistrationparams"></a>

```json
{
  "maxRotationPeriodExponent": 0,
  "minRotationPeriodExponent": 0,
  "serviceEcdhPublicKey": "string"
}
```

Information a client needs to provision and register beacons that broadcast Eddystone-EID format beacon IDs, using Elliptic curve Diffie-Hellman key exchange. See [the Eddystone specification](https://github.com/google/eddystone/tree/master/eddystone-eid) at GitHub.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxRotationPeriodExponent|integer(uint32)|false|none|Indicates the maximum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent|
|minRotationPeriodExponent|integer(uint32)|false|none|Indicates the minimum rotation period supported by the service. See EddystoneEidRegistration.rotation_period_exponent|
|serviceEcdhPublicKey|string(byte)|false|none|The beacon service's public key for use by a beacon to derive its Identity Key using Elliptic Curve Diffie-Hellman key exchange.|

<h2 id="tocS_GetInfoForObservedBeaconsRequest">GetInfoForObservedBeaconsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetinfoforobservedbeaconsrequest"></a>
<a id="schema_GetInfoForObservedBeaconsRequest"></a>
<a id="tocSgetinfoforobservedbeaconsrequest"></a>
<a id="tocsgetinfoforobservedbeaconsrequest"></a>

```json
{
  "namespacedTypes": [
    "string"
  ],
  "observations": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "telemetry": "string",
      "timestampMs": "string"
    }
  ]
}
```

Request for beacon and attachment information about beacons that a mobile client has encountered "in the wild".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespacedTypes|[string]|false|none|Specifies what kind of attachments to include in the response. When given, the response will include only attachments of the given types. When empty, no attachments will be returned. Must be in the format namespace/type. Accepts `*` to specify all types in all namespaces owned by the client. Optional.|
|observations|[[Observation](#schemaobservation)]|false|none|The beacons that the client has encountered. At least one must be given.|

<h2 id="tocS_GetInfoForObservedBeaconsResponse">GetInfoForObservedBeaconsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetinfoforobservedbeaconsresponse"></a>
<a id="schema_GetInfoForObservedBeaconsResponse"></a>
<a id="tocSgetinfoforobservedbeaconsresponse"></a>
<a id="tocsgetinfoforobservedbeaconsresponse"></a>

```json
{
  "beacons": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "attachments": [
        {
          "data": "string",
          "maxDistanceMeters": 0,
          "namespacedType": "string"
        }
      ],
      "beaconName": "string"
    }
  ]
}
```

Information about the requested beacons, optionally including attachment data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beacons|[[BeaconInfo](#schemabeaconinfo)]|false|none|Public information about beacons. May be empty if the request matched no beacons.|

<h2 id="tocS_IndoorLevel">IndoorLevel</h2>
<!-- backwards compatibility -->
<a id="schemaindoorlevel"></a>
<a id="schema_IndoorLevel"></a>
<a id="tocSindoorlevel"></a>
<a id="tocsindoorlevel"></a>

```json
{
  "name": "string"
}
```

Indoor level, a human-readable string as returned by Google Maps APIs, useful to indicate which floor of a building a beacon is located on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of this level.|

<h2 id="tocS_LatLng">LatLng</h2>
<!-- backwards compatibility -->
<a id="schemalatlng"></a>
<a id="schema_LatLng"></a>
<a id="tocSlatlng"></a>
<a id="tocslatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_ListBeaconAttachmentsResponse">ListBeaconAttachmentsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbeaconattachmentsresponse"></a>
<a id="schema_ListBeaconAttachmentsResponse"></a>
<a id="tocSlistbeaconattachmentsresponse"></a>
<a id="tocslistbeaconattachmentsresponse"></a>

```json
{
  "attachments": [
    {
      "attachmentName": "string",
      "creationTimeMs": "string",
      "data": "string",
      "maxDistanceMeters": 0,
      "namespacedType": "string"
    }
  ]
}
```

Response to `ListBeaconAttachments` that contains the requested attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[BeaconAttachment](#schemabeaconattachment)]|false|none|The attachments that corresponded to the request params.|

<h2 id="tocS_ListBeaconsResponse">ListBeaconsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbeaconsresponse"></a>
<a id="schema_ListBeaconsResponse"></a>
<a id="tocSlistbeaconsresponse"></a>
<a id="tocslistbeaconsresponse"></a>

```json
{
  "beacons": [
    {
      "advertisedId": {
        "id": "string",
        "type": "TYPE_UNSPECIFIED"
      },
      "beaconName": "string",
      "description": "string",
      "ephemeralIdRegistration": {
        "beaconEcdhPublicKey": "string",
        "beaconIdentityKey": "string",
        "initialClockValue": "string",
        "initialEid": "string",
        "rotationPeriodExponent": 0,
        "serviceEcdhPublicKey": "string"
      },
      "expectedStability": "STABILITY_UNSPECIFIED",
      "indoorLevel": {
        "name": "string"
      },
      "latLng": {
        "latitude": 0,
        "longitude": 0
      },
      "placeId": "string",
      "properties": {
        "property1": "string",
        "property2": "string"
      },
      "provisioningKey": "string",
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string",
  "totalCount": "string"
}
```

Response that contains list beacon results and pagination help.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beacons|[[Beacon](#schemabeacon)]|false|none|The beacons that matched the search criteria.|
|nextPageToken|string|false|none|An opaque pagination token that the client may provide in their next request to retrieve the next page of results.|
|totalCount|string(int64)|false|none|Estimate of the total number of beacons matched by the query. Higher values may be less accurate.|

<h2 id="tocS_ListDiagnosticsResponse">ListDiagnosticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdiagnosticsresponse"></a>
<a id="schema_ListDiagnosticsResponse"></a>
<a id="tocSlistdiagnosticsresponse"></a>
<a id="tocslistdiagnosticsresponse"></a>

```json
{
  "diagnostics": [
    {
      "alerts": [
        "ALERT_UNSPECIFIED"
      ],
      "beaconName": "string",
      "estimatedLowBatteryDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response that contains the requested diagnostics.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diagnostics|[[Diagnostics](#schemadiagnostics)]|false|none|The diagnostics matching the given request.|
|nextPageToken|string|false|none|Token that can be used for pagination. Returned only if the request matches more beacons than can be returned in this response.|

<h2 id="tocS_ListNamespacesResponse">ListNamespacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnamespacesresponse"></a>
<a id="schema_ListNamespacesResponse"></a>
<a id="tocSlistnamespacesresponse"></a>
<a id="tocslistnamespacesresponse"></a>

```json
{
  "namespaces": [
    {
      "namespaceName": "string",
      "servingVisibility": "VISIBILITY_UNSPECIFIED"
    }
  ]
}
```

Response to ListNamespacesRequest that contains all the project's namespaces.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaces|[[Namespace](#schemanamespace)]|false|none|The attachments that corresponded to the request params.|

<h2 id="tocS_Namespace">Namespace</h2>
<!-- backwards compatibility -->
<a id="schemanamespace"></a>
<a id="schema_Namespace"></a>
<a id="tocSnamespace"></a>
<a id="tocsnamespace"></a>

```json
{
  "namespaceName": "string",
  "servingVisibility": "VISIBILITY_UNSPECIFIED"
}
```

An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namespaceName|string|false|none|Resource name of this namespace. Namespaces names have the format: namespaces/namespace.|
|servingVisibility|string|false|none|Specifies what clients may receive attachments under this namespace via `beaconinfo.getforobserved`.|

#### Enumerated Values

|Property|Value|
|---|---|
|servingVisibility|VISIBILITY_UNSPECIFIED|
|servingVisibility|UNLISTED|
|servingVisibility|PUBLIC|

<h2 id="tocS_Observation">Observation</h2>
<!-- backwards compatibility -->
<a id="schemaobservation"></a>
<a id="schema_Observation"></a>
<a id="tocSobservation"></a>
<a id="tocsobservation"></a>

```json
{
  "advertisedId": {
    "id": "string",
    "type": "TYPE_UNSPECIFIED"
  },
  "telemetry": "string",
  "timestampMs": "string"
}
```

Represents one beacon observed once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisedId|[AdvertisedId](#schemaadvertisedid)|false|none|The ID advertised by the beacon the client has encountered. If the submitted `advertised_id` type is Eddystone-EID, then the client must be authorized to resolve the given beacon. Otherwise no data will be returned for that beacon. Required.|
|telemetry|string(byte)|false|none|The array of telemetry bytes received from the beacon. The server is responsible for parsing it. This field may frequently be empty, as with a beacon that transmits telemetry only occasionally.|
|timestampMs|string(google-datetime)|false|none|Time when the beacon was observed.|
