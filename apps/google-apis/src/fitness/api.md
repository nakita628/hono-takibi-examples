<h1 id="fitness-api">Fitness API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Fitness API for managing users' fitness tracking data.

Base URLs:

* <a href="https://fitness.googleapis.com/fitness/v1/users">https://fitness.googleapis.com/fitness/v1/users</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/fit/rest/v1/get-started">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/fitness.activity.read|Use Google Fit to see and store your physical activity data|
|https://www.googleapis.com/auth/fitness.activity.write|Add to your Google Fit physical activity data|
|https://www.googleapis.com/auth/fitness.blood_glucose.read|See info about your blood glucose in Google Fit. I consent to Google sharing my blood glucose information with this app.|
|https://www.googleapis.com/auth/fitness.blood_glucose.write|Add info about your blood glucose to Google Fit. I consent to Google using my blood glucose information with this app.|
|https://www.googleapis.com/auth/fitness.blood_pressure.read|See info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app.|
|https://www.googleapis.com/auth/fitness.blood_pressure.write|Add info about your blood pressure in Google Fit. I consent to Google using my blood pressure information with this app.|
|https://www.googleapis.com/auth/fitness.body.read|See info about your body measurements in Google Fit|
|https://www.googleapis.com/auth/fitness.body.write|Add info about your body measurements to Google Fit|
|https://www.googleapis.com/auth/fitness.body_temperature.read|See info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app.|
|https://www.googleapis.com/auth/fitness.body_temperature.write|Add to info about your body temperature in Google Fit. I consent to Google using my body temperature information with this app.|
|https://www.googleapis.com/auth/fitness.heart_rate.read|See your heart rate data in Google Fit. I consent to Google sharing my heart rate information with this app.|
|https://www.googleapis.com/auth/fitness.heart_rate.write|Add to your heart rate data in Google Fit. I consent to Google using my heart rate information with this app.|
|https://www.googleapis.com/auth/fitness.location.read|See your Google Fit speed and distance data|
|https://www.googleapis.com/auth/fitness.location.write|Add to your Google Fit location data|
|https://www.googleapis.com/auth/fitness.nutrition.read|See info about your nutrition in Google Fit|
|https://www.googleapis.com/auth/fitness.nutrition.write|Add to info about your nutrition in Google Fit|
|https://www.googleapis.com/auth/fitness.oxygen_saturation.read|See info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app.|
|https://www.googleapis.com/auth/fitness.oxygen_saturation.write|Add info about your oxygen saturation in Google Fit. I consent to Google using my oxygen saturation information with this app.|
|https://www.googleapis.com/auth/fitness.reproductive_health.read|See info about your reproductive health in Google Fit. I consent to Google sharing my reproductive health information with this app.|
|https://www.googleapis.com/auth/fitness.reproductive_health.write|Add info about your reproductive health in Google Fit. I consent to Google using my reproductive health information with this app.|
|https://www.googleapis.com/auth/fitness.sleep.read|See your sleep data in Google Fit. I consent to Google sharing my sleep information with this app.|
|https://www.googleapis.com/auth/fitness.sleep.write|Add to your sleep data in Google Fit. I consent to Google using my sleep information with this app.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/fitness.activity.read|Use Google Fit to see and store your physical activity data|
|https://www.googleapis.com/auth/fitness.activity.write|Add to your Google Fit physical activity data|
|https://www.googleapis.com/auth/fitness.blood_glucose.read|See info about your blood glucose in Google Fit. I consent to Google sharing my blood glucose information with this app.|
|https://www.googleapis.com/auth/fitness.blood_glucose.write|Add info about your blood glucose to Google Fit. I consent to Google using my blood glucose information with this app.|
|https://www.googleapis.com/auth/fitness.blood_pressure.read|See info about your blood pressure in Google Fit. I consent to Google sharing my blood pressure information with this app.|
|https://www.googleapis.com/auth/fitness.blood_pressure.write|Add info about your blood pressure in Google Fit. I consent to Google using my blood pressure information with this app.|
|https://www.googleapis.com/auth/fitness.body.read|See info about your body measurements in Google Fit|
|https://www.googleapis.com/auth/fitness.body.write|Add info about your body measurements to Google Fit|
|https://www.googleapis.com/auth/fitness.body_temperature.read|See info about your body temperature in Google Fit. I consent to Google sharing my body temperature information with this app.|
|https://www.googleapis.com/auth/fitness.body_temperature.write|Add to info about your body temperature in Google Fit. I consent to Google using my body temperature information with this app.|
|https://www.googleapis.com/auth/fitness.heart_rate.read|See your heart rate data in Google Fit. I consent to Google sharing my heart rate information with this app.|
|https://www.googleapis.com/auth/fitness.heart_rate.write|Add to your heart rate data in Google Fit. I consent to Google using my heart rate information with this app.|
|https://www.googleapis.com/auth/fitness.location.read|See your Google Fit speed and distance data|
|https://www.googleapis.com/auth/fitness.location.write|Add to your Google Fit location data|
|https://www.googleapis.com/auth/fitness.nutrition.read|See info about your nutrition in Google Fit|
|https://www.googleapis.com/auth/fitness.nutrition.write|Add to info about your nutrition in Google Fit|
|https://www.googleapis.com/auth/fitness.oxygen_saturation.read|See info about your oxygen saturation in Google Fit. I consent to Google sharing my oxygen saturation information with this app.|
|https://www.googleapis.com/auth/fitness.oxygen_saturation.write|Add info about your oxygen saturation in Google Fit. I consent to Google using my oxygen saturation information with this app.|
|https://www.googleapis.com/auth/fitness.reproductive_health.read|See info about your reproductive health in Google Fit. I consent to Google sharing my reproductive health information with this app.|
|https://www.googleapis.com/auth/fitness.reproductive_health.write|Add info about your reproductive health in Google Fit. I consent to Google using my reproductive health information with this app.|
|https://www.googleapis.com/auth/fitness.sleep.read|See your sleep data in Google Fit. I consent to Google sharing my sleep information with this app.|
|https://www.googleapis.com/auth/fitness.sleep.write|Add to your sleep data in Google Fit. I consent to Google using my sleep information with this app.|

<h1 id="fitness-api-users">users</h1>

## fitness.users.dataSources.list

<a id="opIdfitness.users.dataSources.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/dataSources`

Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.

<h3 id="fitnessusersdatasourceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataTypeName|query|[string]|false|The names of data types to include in the list. If not specified, all data sources will be returned.|
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
  "dataSource": [
    {
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "dataQualityStandard": [
        "dataQualityUnknown"
      ],
      "dataStreamId": "string",
      "dataStreamName": "string",
      "dataType": {
        "field": [
          {
            "format": "integer",
            "name": "string",
            "optional": true
          }
        ],
        "name": "string"
      },
      "device": {
        "manufacturer": "string",
        "model": "string",
        "type": "unknown",
        "uid": "string",
        "version": "string"
      },
      "name": "string",
      "type": "raw"
    }
  ]
}
```

<h3 id="fitnessusersdatasourceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDataSourcesResponse](#schemalistdatasourcesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.create

<a id="opIdfitness.users.dataSources.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "application": {
      "detailsUrl": "string",
      "name": "string",
      "packageName": "string",
      "version": "string"
    },
    "dataQualityStandard": [
      "dataQualityUnknown"
    ],
    "dataStreamId": "string",
    "dataStreamName": "string",
    "dataType": {
      "field": [
        {
          "format": "integer",
          "name": "string",
          "optional": true
        }
      ],
      "name": "string"
    },
    "device": {
      "manufacturer": "string",
      "model": "string",
      "type": "unknown",
      "uid": "string",
      "version": "string"
    },
    "name": "string",
    "type": "raw"
  }'
```

`POST /{userId}/dataSources`

Creates a new data source that is unique across all data sources belonging to this user. A data source is a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point in every dataset inserted into or read from the Fitness API has an associated data source. Each data source produces a unique stream of dataset updates, with a unique data source identifier. Not all changes to data source affect the data stream ID, so that data collected by updated versions of the same application/device can still be considered to belong to the same data source. Data sources are identified using a string generated by the server, based on the contents of the source being created. The dataStreamId field should not be set when invoking this method. It will be automatically generated by the server with the correct format. If a dataStreamId is set, it must match the format that the server would generate. This format is a combination of some fields from the data source, and has a specific order. If it doesn't match, the request will fail with an error. Specifying a DataType which is not a known type (beginning with "com.google.") will create a DataSource with a *custom data type*. Custom data types are only readable by the application that created them. Custom data types are *deprecated*; use standard data types instead. In addition to the data source fields included in the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.

> Body parameter

```json
{
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
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
|body|body|[DataSource](#schemadatasource)|false|none|
|» application|body|[Application](#schemaapplication)|false|Information about an application which feeds sensor data into the platform.|
|» dataQualityStandard|body|[string]|false|DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.|
|» dataStreamId|body|string|false|A unique identifier for the data stream produced by this data source. The identifier includes: - The physical device's manufacturer, model, and serial number (UID). - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. - The data source's type. - The data source's stream name. Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal. The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.|
|» dataStreamName|body|string|false|The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.|
|» dataType|body|[DataType](#schemadatatype)|false|The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.|
|» device|body|[Device](#schemadevice)|false|Representation of an integrated device (such as a phone or a wearable) that can hold sensors.|
|» name|body|string|false|An end-user visible name for this data source.|
|» type|body|string|false|A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataQualityStandard|dataQualityUnknown|
|» dataQualityStandard|dataQualityBloodPressureEsh2002|
|» dataQualityStandard|dataQualityBloodPressureEsh2010|
|» dataQualityStandard|dataQualityBloodPressureAami|
|» dataQualityStandard|dataQualityBloodPressureBhsAA|
|» dataQualityStandard|dataQualityBloodPressureBhsAB|
|» dataQualityStandard|dataQualityBloodPressureBhsBA|
|» dataQualityStandard|dataQualityBloodPressureBhsBB|
|» dataQualityStandard|dataQualityBloodGlucoseIso151972003|
|» dataQualityStandard|dataQualityBloodGlucoseIso151972013|
|» type|raw|
|» type|derived|

> Example responses

> 200 Response

```json
{
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DataSource](#schemadatasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.get

<a id="opIdfitness.users.dataSources.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/dataSources/{dataSourceId}`

Returns the specified data source.

<h3 id="fitnessusersdatasourcesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source to retrieve.|
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
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DataSource](#schemadatasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.update

<a id="opIdfitness.users.dataSources.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "application": {
      "detailsUrl": "string",
      "name": "string",
      "packageName": "string",
      "version": "string"
    },
    "dataQualityStandard": [
      "dataQualityUnknown"
    ],
    "dataStreamId": "string",
    "dataStreamName": "string",
    "dataType": {
      "field": [
        {
          "format": "integer",
          "name": "string",
          "optional": true
        }
      ],
      "name": "string"
    },
    "device": {
      "manufacturer": "string",
      "model": "string",
      "type": "unknown",
      "uid": "string",
      "version": "string"
    },
    "name": "string",
    "type": "raw"
  }'
```

`PUT /{userId}/dataSources/{dataSourceId}`

Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified. Data sources are identified by their dataStreamId.

> Body parameter

```json
{
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source to update.|
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
|body|body|[DataSource](#schemadatasource)|false|none|
|» application|body|[Application](#schemaapplication)|false|Information about an application which feeds sensor data into the platform.|
|» dataQualityStandard|body|[string]|false|DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.|
|» dataStreamId|body|string|false|A unique identifier for the data stream produced by this data source. The identifier includes: - The physical device's manufacturer, model, and serial number (UID). - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. - The data source's type. - The data source's stream name. Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal. The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.|
|» dataStreamName|body|string|false|The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.|
|» dataType|body|[DataType](#schemadatatype)|false|The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.|
|» device|body|[Device](#schemadevice)|false|Representation of an integrated device (such as a phone or a wearable) that can hold sensors.|
|» name|body|string|false|An end-user visible name for this data source.|
|» type|body|string|false|A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» dataQualityStandard|dataQualityUnknown|
|» dataQualityStandard|dataQualityBloodPressureEsh2002|
|» dataQualityStandard|dataQualityBloodPressureEsh2010|
|» dataQualityStandard|dataQualityBloodPressureAami|
|» dataQualityStandard|dataQualityBloodPressureBhsAA|
|» dataQualityStandard|dataQualityBloodPressureBhsAB|
|» dataQualityStandard|dataQualityBloodPressureBhsBA|
|» dataQualityStandard|dataQualityBloodPressureBhsBB|
|» dataQualityStandard|dataQualityBloodGlucoseIso151972003|
|» dataQualityStandard|dataQualityBloodGlucoseIso151972013|
|» type|raw|
|» type|derived|

> Example responses

> 200 Response

```json
{
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DataSource](#schemadatasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.delete

<a id="opIdfitness.users.dataSources.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{userId}/dataSources/{dataSourceId}`

Deletes the specified data source. The request will fail if the data source contains any data points.

<h3 id="fitnessusersdatasourcesdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source to delete.|
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
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

<h3 id="fitnessusersdatasourcesdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DataSource](#schemadatasource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.dataPointChanges.list

<a id="opIdfitness.users.dataSources.dataPointChanges.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string/dataPointChanges \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/dataSources/{dataSourceId}/dataPointChanges`

Queries for user's data point changes for a particular data source.

<h3 id="fitnessusersdatasourcesdatapointchangeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source that created the dataset.|
|limit|query|integer|false|If specified, no more than this many data point changes will be included in the response.|
|pageToken|query|string|false|The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.|
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
  "dataSourceId": "string",
  "deletedDataPoint": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ],
  "insertedDataPoint": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="fitnessusersdatasourcesdatapointchangeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDataPointChangesResponse](#schemalistdatapointchangesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.datasets.get

<a id="opIdfitness.users.dataSources.datasets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string/datasets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/dataSources/{dataSourceId}/datasets/{datasetId}`

Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.

<h3 id="fitnessusersdatasourcesdatasetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source that created the dataset.|
|datasetId|path|string|true|Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.|
|limit|query|integer|false|If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response. The limit is applied from the end of the time range. That is, if pageToken is absent, the limit most recent data points will be returned.|
|pageToken|query|string|false|The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.|
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
  "dataSourceId": "string",
  "maxEndTimeNs": "string",
  "minStartTimeNs": "string",
  "nextPageToken": "string",
  "point": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ]
}
```

<h3 id="fitnessusersdatasourcesdatasetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.datasets.delete

<a id="opIdfitness.users.dataSources.datasets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string/datasets/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{userId}/dataSources/{dataSourceId}/datasets/{datasetId}`

Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.

<h3 id="fitnessusersdatasourcesdatasetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source that created the dataset.|
|datasetId|path|string|true|Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.|
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

<h3 id="fitnessusersdatasourcesdatasetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataSources.datasets.patch

<a id="opIdfitness.users.dataSources.datasets.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataSources/string/datasets/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dataSourceId": "string",
    "maxEndTimeNs": "string",
    "minStartTimeNs": "string",
    "nextPageToken": "string",
    "point": [
      {
        "computationTimeMillis": "string",
        "dataTypeName": "string",
        "endTimeNanos": "string",
        "modifiedTimeMillis": "string",
        "originDataSourceId": "string",
        "rawTimestampNanos": "string",
        "startTimeNanos": "string",
        "value": [
          {
            "fpVal": 0,
            "intVal": 0,
            "mapVal": [
              {
                "key": "string",
                "value": {
                  "fpVal": 0
                }
              }
            ],
            "stringVal": "string"
          }
        ]
      }
    ]
  }'
```

`PATCH /{userId}/dataSources/{dataSourceId}/datasets/{datasetId}`

Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics: the data points provided are merely inserted, with no existing data replaced.

> Body parameter

```json
{
  "dataSourceId": "string",
  "maxEndTimeNs": "string",
  "minStartTimeNs": "string",
  "nextPageToken": "string",
  "point": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ]
}
```

<h3 id="fitnessusersdatasourcesdatasetspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|dataSourceId|path|string|true|The data stream ID of the data source that created the dataset.|
|datasetId|path|string|true|This field is not used, and can be safely omitted.|
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
|body|body|[Dataset](#schemadataset)|false|none|
|» dataSourceId|body|string|false|The data stream ID of the data source that created the points in this dataset.|
|» maxEndTimeNs|body|string(int64)|false|The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier.|
|» minStartTimeNs|body|string(int64)|false|The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.|
|» nextPageToken|body|string|false|This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset.|
|» point|body|[[DataPoint](#schemadatapoint)]|false|A partial list of data points contained in the dataset, ordered by endTimeNanos. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response.|

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
  "dataSourceId": "string",
  "maxEndTimeNs": "string",
  "minStartTimeNs": "string",
  "nextPageToken": "string",
  "point": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ]
}
```

<h3 id="fitnessusersdatasourcesdatasetspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Dataset](#schemadataset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.dataset.aggregate

<a id="opIdfitness.users.dataset.aggregate"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/dataset:aggregate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aggregateBy": [
      {
        "dataSourceId": "string",
        "dataTypeName": "string"
      }
    ],
    "bucketByActivitySegment": {
      "activityDataSourceId": "string",
      "minDurationMillis": "string"
    },
    "bucketByActivityType": {
      "activityDataSourceId": "string",
      "minDurationMillis": "string"
    },
    "bucketBySession": {
      "minDurationMillis": "string"
    },
    "bucketByTime": {
      "durationMillis": "string",
      "period": {
        "timeZoneId": "string",
        "type": "day",
        "value": 0
      }
    },
    "endTimeMillis": "string",
    "filteredDataQualityStandard": [
      "dataQualityUnknown"
    ],
    "startTimeMillis": "string"
  }'
```

`POST /{userId}/dataset:aggregate`

Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggregated into exactly one bucket type per request.

> Body parameter

```json
{
  "aggregateBy": [
    {
      "dataSourceId": "string",
      "dataTypeName": "string"
    }
  ],
  "bucketByActivitySegment": {
    "activityDataSourceId": "string",
    "minDurationMillis": "string"
  },
  "bucketByActivityType": {
    "activityDataSourceId": "string",
    "minDurationMillis": "string"
  },
  "bucketBySession": {
    "minDurationMillis": "string"
  },
  "bucketByTime": {
    "durationMillis": "string",
    "period": {
      "timeZoneId": "string",
      "type": "day",
      "value": 0
    }
  },
  "endTimeMillis": "string",
  "filteredDataQualityStandard": [
    "dataQualityUnknown"
  ],
  "startTimeMillis": "string"
}
```

<h3 id="fitnessusersdatasetaggregate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
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
|body|body|[AggregateRequest](#schemaaggregaterequest)|false|none|
|» aggregateBy|body|[[AggregateBy](#schemaaggregateby)]|false|The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.|
|» bucketByActivitySegment|body|[BucketByActivity](#schemabucketbyactivity)|false|Specifies that data be aggregated each activity segment recorded for a user. Similar to bucketByActivitySegment, but bucketing is done for each activity segment rather than all segments of the same type. Mutually exclusive of other bucketing specifications.|
|» bucketByActivityType|body|[BucketByActivity](#schemabucketbyactivity)|false|Specifies that data be aggregated by the type of activity being performed when the data was recorded. All data that was recorded during a certain activity type (.for the given time range) will be aggregated into the same bucket. Data that was recorded while the user was not active will not be included in the response. Mutually exclusive of other bucketing specifications.|
|» bucketBySession|body|[BucketBySession](#schemabucketbysession)|false|Specifies that data be aggregated by user sessions. Data that does not fall within the time range of a session will not be included in the response. Mutually exclusive of other bucketing specifications.|
|» bucketByTime|body|[BucketByTime](#schemabucketbytime)|false|Specifies that data be aggregated by a single time interval. Mutually exclusive of other bucketing specifications.|
|» endTimeMillis|body|string(int64)|false|The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. The maximum allowed difference between start_time_millis // and end_time_millis is 7776000000 (roughly 90 days).|
|» filteredDataQualityStandard|body|[string]|false|DO NOT POPULATE THIS FIELD. It is ignored.|
|» startTimeMillis|body|string(int64)|false|The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» filteredDataQualityStandard|dataQualityUnknown|
|» filteredDataQualityStandard|dataQualityBloodPressureEsh2002|
|» filteredDataQualityStandard|dataQualityBloodPressureEsh2010|
|» filteredDataQualityStandard|dataQualityBloodPressureAami|
|» filteredDataQualityStandard|dataQualityBloodPressureBhsAA|
|» filteredDataQualityStandard|dataQualityBloodPressureBhsAB|
|» filteredDataQualityStandard|dataQualityBloodPressureBhsBA|
|» filteredDataQualityStandard|dataQualityBloodPressureBhsBB|
|» filteredDataQualityStandard|dataQualityBloodGlucoseIso151972003|
|» filteredDataQualityStandard|dataQualityBloodGlucoseIso151972013|

> Example responses

> 200 Response

```json
{
  "bucket": [
    {
      "activity": 0,
      "dataset": [
        {
          "dataSourceId": "string",
          "maxEndTimeNs": "string",
          "minStartTimeNs": "string",
          "nextPageToken": "string",
          "point": [
            {
              "computationTimeMillis": "string",
              "dataTypeName": "string",
              "endTimeNanos": "string",
              "modifiedTimeMillis": "string",
              "originDataSourceId": "string",
              "rawTimestampNanos": "string",
              "startTimeNanos": "string",
              "value": [
                {
                  "fpVal": 0,
                  "intVal": 0,
                  "mapVal": [
                    {
                      "key": "string",
                      "value": {
                        "fpVal": 0
                      }
                    }
                  ],
                  "stringVal": "string"
                }
              ]
            }
          ]
        }
      ],
      "endTimeMillis": "string",
      "session": {
        "activeTimeMillis": "string",
        "activityType": 0,
        "application": {
          "detailsUrl": "string",
          "name": "string",
          "packageName": "string",
          "version": "string"
        },
        "description": "string",
        "endTimeMillis": "string",
        "id": "string",
        "modifiedTimeMillis": "string",
        "name": "string",
        "startTimeMillis": "string"
      },
      "startTimeMillis": "string",
      "type": "unknown"
    }
  ]
}
```

<h3 id="fitnessusersdatasetaggregate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AggregateResponse](#schemaaggregateresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.sessions.list

<a id="opIdfitness.users.sessions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{userId}/sessions`

Lists sessions previously created.

<h3 id="fitnessuserssessionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|activityType|query|[integer]|false|If non-empty, only sessions with these activity types should be returned.|
|endTime|query|string|false|An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but startTime is specified, all sessions from startTime to the end of time will be returned.|
|includeDeleted|query|boolean|false|If true, and if both startTime and endTime are omitted, session deletions will be returned.|
|pageToken|query|string|false|The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.|
|startTime|query|string|false|An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but endTime is specified, all sessions from the start of time up to endTime will be returned.|
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
  "deletedSession": [
    {
      "activeTimeMillis": "string",
      "activityType": 0,
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "description": "string",
      "endTimeMillis": "string",
      "id": "string",
      "modifiedTimeMillis": "string",
      "name": "string",
      "startTimeMillis": "string"
    }
  ],
  "hasMoreData": true,
  "nextPageToken": "string",
  "session": [
    {
      "activeTimeMillis": "string",
      "activityType": 0,
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "description": "string",
      "endTimeMillis": "string",
      "id": "string",
      "modifiedTimeMillis": "string",
      "name": "string",
      "startTimeMillis": "string"
    }
  ]
}
```

<h3 id="fitnessuserssessionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListSessionsResponse](#schemalistsessionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_glucose.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.blood_pressure.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.body_temperature.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.heart_rate.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.location.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.location.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.nutrition.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.oxygen_saturation.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.reproductive_health.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.read ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.sessions.update

<a id="opIdfitness.users.sessions.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/sessions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activeTimeMillis": "string",
    "activityType": 0,
    "application": {
      "detailsUrl": "string",
      "name": "string",
      "packageName": "string",
      "version": "string"
    },
    "description": "string",
    "endTimeMillis": "string",
    "id": "string",
    "modifiedTimeMillis": "string",
    "name": "string",
    "startTimeMillis": "string"
  }'
```

`PUT /{userId}/sessions/{sessionId}`

Updates or insert a given session.

> Body parameter

```json
{
  "activeTimeMillis": "string",
  "activityType": 0,
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "description": "string",
  "endTimeMillis": "string",
  "id": "string",
  "modifiedTimeMillis": "string",
  "name": "string",
  "startTimeMillis": "string"
}
```

<h3 id="fitnessuserssessionsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|sessionId|path|string|true|The ID of the session to be created.|
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
|body|body|[Session](#schemasession)|false|none|
|» activeTimeMillis|body|string(int64)|false|Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value|
|» activityType|body|integer(int32)|false|The type of activity this session represents.|
|» application|body|[Application](#schemaapplication)|false|The application that created the session.|
|» description|body|string|false|A description for this session.|
|» endTimeMillis|body|string(int64)|false|An end time, in milliseconds since epoch, inclusive.|
|» id|body|string|false|A client-generated identifier that is unique across all sessions owned by this particular user.|
|» modifiedTimeMillis|body|string(int64)|false|A timestamp that indicates when the session was last modified.|
|» name|body|string|false|A human readable name of the session.|
|» startTimeMillis|body|string(int64)|false|A start time, in milliseconds since epoch, inclusive.|

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
  "activeTimeMillis": "string",
  "activityType": 0,
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "description": "string",
  "endTimeMillis": "string",
  "id": "string",
  "modifiedTimeMillis": "string",
  "name": "string",
  "startTimeMillis": "string"
}
```

<h3 id="fitnessuserssessionsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Session](#schemasession)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

## fitness.users.sessions.delete

<a id="opIdfitness.users.sessions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/string/sessions/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{userId}/sessions/{sessionId}`

Deletes a session specified by the given session ID.

<h3 id="fitnessuserssessionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.|
|sessionId|path|string|true|The ID of the session to be deleted.|
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

<h3 id="fitnessuserssessionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.activity.write ), Oauth2 ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/fitness.sleep.write )
</aside>

# Schemas

<h2 id="tocS_AggregateBucket">AggregateBucket</h2>
<!-- backwards compatibility -->
<a id="schemaaggregatebucket"></a>
<a id="schema_AggregateBucket"></a>
<a id="tocSaggregatebucket"></a>
<a id="tocsaggregatebucket"></a>

```json
{
  "activity": 0,
  "dataset": [
    {
      "dataSourceId": "string",
      "maxEndTimeNs": "string",
      "minStartTimeNs": "string",
      "nextPageToken": "string",
      "point": [
        {
          "computationTimeMillis": "string",
          "dataTypeName": "string",
          "endTimeNanos": "string",
          "modifiedTimeMillis": "string",
          "originDataSourceId": "string",
          "rawTimestampNanos": "string",
          "startTimeNanos": "string",
          "value": [
            {
              "fpVal": 0,
              "intVal": 0,
              "mapVal": [
                {
                  "key": "string",
                  "value": {
                    "fpVal": 0
                  }
                }
              ],
              "stringVal": "string"
            }
          ]
        }
      ]
    }
  ],
  "endTimeMillis": "string",
  "session": {
    "activeTimeMillis": "string",
    "activityType": 0,
    "application": {
      "detailsUrl": "string",
      "name": "string",
      "packageName": "string",
      "version": "string"
    },
    "description": "string",
    "endTimeMillis": "string",
    "id": "string",
    "modifiedTimeMillis": "string",
    "name": "string",
    "startTimeMillis": "string"
  },
  "startTimeMillis": "string",
  "type": "unknown"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|integer(int32)|false|none|Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT|
|dataset|[[Dataset](#schemadataset)]|false|none|There will be one dataset per AggregateBy in the request.|
|endTimeMillis|string(int64)|false|none|The end time for the aggregated data, in milliseconds since epoch, inclusive.|
|session|[Session](#schemasession)|false|none|Available for Bucket.Type.SESSION|
|startTimeMillis|string(int64)|false|none|The start time for the aggregated data, in milliseconds since epoch, inclusive.|
|type|string|false|none|The type of a bucket signifies how the data aggregation is performed in the bucket.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|unknown|
|type|time|
|type|session|
|type|activityType|
|type|activitySegment|

<h2 id="tocS_AggregateBy">AggregateBy</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateby"></a>
<a id="schema_AggregateBy"></a>
<a id="tocSaggregateby"></a>
<a id="tocsaggregateby"></a>

```json
{
  "dataSourceId": "string",
  "dataTypeName": "string"
}
```

The specification of which data to aggregate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceId|string|false|none|A data source ID to aggregate. Only data from the specified data source ID will be included in the aggregation. If specified, this data source must exist; the OAuth scopes in the supplied credentials must grant read access to this data type. The dataset in the response will have the same data source ID. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.|
|dataTypeName|string|false|none|The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived::com.google.android.gms:aggregated. If the user has no data for this data type, an empty data set will be returned. Note: Data can be aggregated by either the dataTypeName or the dataSourceId, not both.|

<h2 id="tocS_AggregateRequest">AggregateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaggregaterequest"></a>
<a id="schema_AggregateRequest"></a>
<a id="tocSaggregaterequest"></a>
<a id="tocsaggregaterequest"></a>

```json
{
  "aggregateBy": [
    {
      "dataSourceId": "string",
      "dataTypeName": "string"
    }
  ],
  "bucketByActivitySegment": {
    "activityDataSourceId": "string",
    "minDurationMillis": "string"
  },
  "bucketByActivityType": {
    "activityDataSourceId": "string",
    "minDurationMillis": "string"
  },
  "bucketBySession": {
    "minDurationMillis": "string"
  },
  "bucketByTime": {
    "durationMillis": "string",
    "period": {
      "timeZoneId": "string",
      "type": "day",
      "value": 0
    }
  },
  "endTimeMillis": "string",
  "filteredDataQualityStandard": [
    "dataQualityUnknown"
  ],
  "startTimeMillis": "string"
}
```

Next id: 10

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aggregateBy|[[AggregateBy](#schemaaggregateby)]|false|none|The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.|
|bucketByActivitySegment|[BucketByActivity](#schemabucketbyactivity)|false|none|Specifies that data be aggregated each activity segment recorded for a user. Similar to bucketByActivitySegment, but bucketing is done for each activity segment rather than all segments of the same type. Mutually exclusive of other bucketing specifications.|
|bucketByActivityType|[BucketByActivity](#schemabucketbyactivity)|false|none|Specifies that data be aggregated by the type of activity being performed when the data was recorded. All data that was recorded during a certain activity type (.for the given time range) will be aggregated into the same bucket. Data that was recorded while the user was not active will not be included in the response. Mutually exclusive of other bucketing specifications.|
|bucketBySession|[BucketBySession](#schemabucketbysession)|false|none|Specifies that data be aggregated by user sessions. Data that does not fall within the time range of a session will not be included in the response. Mutually exclusive of other bucketing specifications.|
|bucketByTime|[BucketByTime](#schemabucketbytime)|false|none|Specifies that data be aggregated by a single time interval. Mutually exclusive of other bucketing specifications.|
|endTimeMillis|string(int64)|false|none|The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive. The maximum allowed difference between start_time_millis // and end_time_millis is 7776000000 (roughly 90 days).|
|filteredDataQualityStandard|[string]|false|none|DO NOT POPULATE THIS FIELD. It is ignored.|
|startTimeMillis|string(int64)|false|none|The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.|

#### Enumerated Values

|Property|Value|
|---|---|
|filteredDataQualityStandard|dataQualityUnknown|
|filteredDataQualityStandard|dataQualityBloodPressureEsh2002|
|filteredDataQualityStandard|dataQualityBloodPressureEsh2010|
|filteredDataQualityStandard|dataQualityBloodPressureAami|
|filteredDataQualityStandard|dataQualityBloodPressureBhsAA|
|filteredDataQualityStandard|dataQualityBloodPressureBhsAB|
|filteredDataQualityStandard|dataQualityBloodPressureBhsBA|
|filteredDataQualityStandard|dataQualityBloodPressureBhsBB|
|filteredDataQualityStandard|dataQualityBloodGlucoseIso151972003|
|filteredDataQualityStandard|dataQualityBloodGlucoseIso151972013|

<h2 id="tocS_AggregateResponse">AggregateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaggregateresponse"></a>
<a id="schema_AggregateResponse"></a>
<a id="tocSaggregateresponse"></a>
<a id="tocsaggregateresponse"></a>

```json
{
  "bucket": [
    {
      "activity": 0,
      "dataset": [
        {
          "dataSourceId": "string",
          "maxEndTimeNs": "string",
          "minStartTimeNs": "string",
          "nextPageToken": "string",
          "point": [
            {
              "computationTimeMillis": "string",
              "dataTypeName": "string",
              "endTimeNanos": "string",
              "modifiedTimeMillis": "string",
              "originDataSourceId": "string",
              "rawTimestampNanos": "string",
              "startTimeNanos": "string",
              "value": [
                {
                  "fpVal": 0,
                  "intVal": 0,
                  "mapVal": [
                    {
                      "key": "string",
                      "value": {
                        "fpVal": 0
                      }
                    }
                  ],
                  "stringVal": "string"
                }
              ]
            }
          ]
        }
      ],
      "endTimeMillis": "string",
      "session": {
        "activeTimeMillis": "string",
        "activityType": 0,
        "application": {
          "detailsUrl": "string",
          "name": "string",
          "packageName": "string",
          "version": "string"
        },
        "description": "string",
        "endTimeMillis": "string",
        "id": "string",
        "modifiedTimeMillis": "string",
        "name": "string",
        "startTimeMillis": "string"
      },
      "startTimeMillis": "string",
      "type": "unknown"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bucket|[[AggregateBucket](#schemaaggregatebucket)]|false|none|A list of buckets containing the aggregated data.|

<h2 id="tocS_Application">Application</h2>
<!-- backwards compatibility -->
<a id="schemaapplication"></a>
<a id="schema_Application"></a>
<a id="tocSapplication"></a>
<a id="tocsapplication"></a>

```json
{
  "detailsUrl": "string",
  "name": "string",
  "packageName": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailsUrl|string|false|none|An optional URI that can be used to link back to the application.|
|name|string|false|none|The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source.|
|packageName|string|false|none|Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName.|
|version|string|false|none|Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data.|

<h2 id="tocS_BucketByActivity">BucketByActivity</h2>
<!-- backwards compatibility -->
<a id="schemabucketbyactivity"></a>
<a id="schema_BucketByActivity"></a>
<a id="tocSbucketbyactivity"></a>
<a id="tocsbucketbyactivity"></a>

```json
{
  "activityDataSourceId": "string",
  "minDurationMillis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activityDataSourceId|string|false|none|The default activity stream will be used if a specific activityDataSourceId is not specified.|
|minDurationMillis|string(int64)|false|none|Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data.|

<h2 id="tocS_BucketBySession">BucketBySession</h2>
<!-- backwards compatibility -->
<a id="schemabucketbysession"></a>
<a id="schema_BucketBySession"></a>
<a id="tocSbucketbysession"></a>
<a id="tocsbucketbysession"></a>

```json
{
  "minDurationMillis": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minDurationMillis|string(int64)|false|none|Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data.|

<h2 id="tocS_BucketByTime">BucketByTime</h2>
<!-- backwards compatibility -->
<a id="schemabucketbytime"></a>
<a id="schema_BucketByTime"></a>
<a id="tocSbucketbytime"></a>
<a id="tocsbucketbytime"></a>

```json
{
  "durationMillis": "string",
  "period": {
    "timeZoneId": "string",
    "type": "day",
    "value": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationMillis|string(int64)|false|none|Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset.|
|period|[BucketByTimePeriod](#schemabucketbytimeperiod)|false|none|none|

<h2 id="tocS_BucketByTimePeriod">BucketByTimePeriod</h2>
<!-- backwards compatibility -->
<a id="schemabucketbytimeperiod"></a>
<a id="schema_BucketByTimePeriod"></a>
<a id="tocSbucketbytimeperiod"></a>
<a id="tocsbucketbytimeperiod"></a>

```json
{
  "timeZoneId": "string",
  "type": "day",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeZoneId|string|false|none|org.joda.timezone.DateTimeZone|
|type|string|false|none|none|
|value|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|day|
|type|week|
|type|month|

<h2 id="tocS_DataPoint">DataPoint</h2>
<!-- backwards compatibility -->
<a id="schemadatapoint"></a>
<a id="schema_DataPoint"></a>
<a id="tocSdatapoint"></a>
<a id="tocsdatapoint"></a>

```json
{
  "computationTimeMillis": "string",
  "dataTypeName": "string",
  "endTimeNanos": "string",
  "modifiedTimeMillis": "string",
  "originDataSourceId": "string",
  "rawTimestampNanos": "string",
  "startTimeNanos": "string",
  "value": [
    {
      "fpVal": 0,
      "intVal": 0,
      "mapVal": [
        {
          "key": "string",
          "value": {
            "fpVal": 0
          }
        }
      ],
      "stringVal": "string"
    }
  ]
}
```

Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type. A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type. Data points always contain one value for each field of the data type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|computationTimeMillis|string(int64)|false|none|DO NOT USE THIS FIELD. It is ignored, and not stored.|
|dataTypeName|string|false|none|The data type defining the format of the values in this data point.|
|endTimeNanos|string(int64)|false|none|The end time of the interval represented by this data point, in nanoseconds since epoch.|
|modifiedTimeMillis|string(int64)|false|none|Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data.|
|originDataSourceId|string|false|none|If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally. WARNING: do not rely on this field for anything other than debugging. The value of this field, if it is set at all, is an implementation detail and is not guaranteed to remain consistent.|
|rawTimestampNanos|string(int64)|false|none|The raw timestamp from the original SensorEvent.|
|startTimeNanos|string(int64)|false|none|The start time of the interval represented by this data point, in nanoseconds since epoch.|
|value|[[Value](#schemavalue)]|false|none|Values of each data type field for the data point. It is expected that each value corresponding to a data type field will occur in the same order that the field is listed with in the data type specified in a data source. Only one of integer and floating point fields will be populated, depending on the format enum value within data source's type field.|

<h2 id="tocS_DataSource">DataSource</h2>
<!-- backwards compatibility -->
<a id="schemadatasource"></a>
<a id="schema_DataSource"></a>
<a id="tocSdatasource"></a>
<a id="tocsdatasource"></a>

```json
{
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "dataQualityStandard": [
    "dataQualityUnknown"
  ],
  "dataStreamId": "string",
  "dataStreamName": "string",
  "dataType": {
    "field": [
      {
        "format": "integer",
        "name": "string",
        "optional": true
      }
    ],
    "name": "string"
  },
  "device": {
    "manufacturer": "string",
    "model": "string",
    "type": "unknown",
    "uid": "string",
    "version": "string"
  },
  "name": "string",
  "type": "raw"
}
```

Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source. The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type. Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|[Application](#schemaapplication)|false|none|Information about an application which feeds sensor data into the platform.|
|dataQualityStandard|[string]|false|none|DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.|
|dataStreamId|string|false|none|A unique identifier for the data stream produced by this data source. The identifier includes: - The physical device's manufacturer, model, and serial number (UID). - The application's package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client. - The data source's type. - The data source's stream name. Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn't used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they're not equal. The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number Finally, the developer project number and device UID are obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form. This means a client will see a different set of data_stream_ids than another client with different credentials.|
|dataStreamName|string|false|none|The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.|
|dataType|[DataType](#schemadatatype)|false|none|The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.|
|device|[Device](#schemadevice)|false|none|Representation of an integrated device (such as a phone or a wearable) that can hold sensors.|
|name|string|false|none|An end-user visible name for this data source.|
|type|string|false|none|A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataQualityStandard|dataQualityUnknown|
|dataQualityStandard|dataQualityBloodPressureEsh2002|
|dataQualityStandard|dataQualityBloodPressureEsh2010|
|dataQualityStandard|dataQualityBloodPressureAami|
|dataQualityStandard|dataQualityBloodPressureBhsAA|
|dataQualityStandard|dataQualityBloodPressureBhsAB|
|dataQualityStandard|dataQualityBloodPressureBhsBA|
|dataQualityStandard|dataQualityBloodPressureBhsBB|
|dataQualityStandard|dataQualityBloodGlucoseIso151972003|
|dataQualityStandard|dataQualityBloodGlucoseIso151972013|
|type|raw|
|type|derived|

<h2 id="tocS_DataType">DataType</h2>
<!-- backwards compatibility -->
<a id="schemadatatype"></a>
<a id="schema_DataType"></a>
<a id="tocSdatatype"></a>
<a id="tocsdatatype"></a>

```json
{
  "field": [
    {
      "format": "integer",
      "name": "string",
      "optional": true
    }
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|[[DataTypeField](#schemadatatypefield)]|false|none|A field represents one dimension of a data type.|
|name|string|false|none|Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform.|

<h2 id="tocS_DataTypeField">DataTypeField</h2>
<!-- backwards compatibility -->
<a id="schemadatatypefield"></a>
<a id="schema_DataTypeField"></a>
<a id="tocSdatatypefield"></a>
<a id="tocsdatatypefield"></a>

```json
{
  "format": "integer",
  "name": "string",
  "optional": true
}
```

In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.). This message is only instantiated in code and not used for wire comms or stored in any way.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The different supported formats for each field in a data type.|
|name|string|false|none|Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type.|
|optional|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|format|integer|
|format|floatPoint|
|format|string|
|format|map|
|format|integerList|
|format|floatList|
|format|blob|

<h2 id="tocS_Dataset">Dataset</h2>
<!-- backwards compatibility -->
<a id="schemadataset"></a>
<a id="schema_Dataset"></a>
<a id="tocSdataset"></a>
<a id="tocsdataset"></a>

```json
{
  "dataSourceId": "string",
  "maxEndTimeNs": "string",
  "minStartTimeNs": "string",
  "nextPageToken": "string",
  "point": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ]
}
```

A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceId|string|false|none|The data stream ID of the data source that created the points in this dataset.|
|maxEndTimeNs|string(int64)|false|none|The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier.|
|minStartTimeNs|string(int64)|false|none|The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.|
|nextPageToken|string|false|none|This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset.|
|point|[[DataPoint](#schemadatapoint)]|false|none|A partial list of data points contained in the dataset, ordered by endTimeNanos. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response.|

<h2 id="tocS_Device">Device</h2>
<!-- backwards compatibility -->
<a id="schemadevice"></a>
<a id="schema_Device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "manufacturer": "string",
  "model": "string",
  "type": "unknown",
  "uid": "string",
  "version": "string"
}
```

Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source. The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including: - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|manufacturer|string|false|none|Manufacturer of the product/hardware.|
|model|string|false|none|End-user visible model name for the device.|
|type|string|false|none|A constant representing the type of the device.|
|uid|string|false|none|The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form. The obfuscation preserves equality; that is, given two IDs, if id1 == id2, obfuscated(id1) == obfuscated(id2).|
|version|string|false|none|Version string for the device hardware/software.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|unknown|
|type|phone|
|type|tablet|
|type|watch|
|type|chestStrap|
|type|scale|
|type|headMounted|
|type|smartDisplay|

<h2 id="tocS_ListDataPointChangesResponse">ListDataPointChangesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatapointchangesresponse"></a>
<a id="schema_ListDataPointChangesResponse"></a>
<a id="tocSlistdatapointchangesresponse"></a>
<a id="tocslistdatapointchangesresponse"></a>

```json
{
  "dataSourceId": "string",
  "deletedDataPoint": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ],
  "insertedDataPoint": [
    {
      "computationTimeMillis": "string",
      "dataTypeName": "string",
      "endTimeNanos": "string",
      "modifiedTimeMillis": "string",
      "originDataSourceId": "string",
      "rawTimestampNanos": "string",
      "startTimeNanos": "string",
      "value": [
        {
          "fpVal": 0,
          "intVal": 0,
          "mapVal": [
            {
              "key": "string",
              "value": {
                "fpVal": 0
              }
            }
          ],
          "stringVal": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSourceId|string|false|none|The data stream ID of the data source with data point changes.|
|deletedDataPoint|[[DataPoint](#schemadatapoint)]|false|none|Deleted data points for the user. Note, for modifications this should be parsed before handling insertions.|
|insertedDataPoint|[[DataPoint](#schemadatapoint)]|false|none|Inserted data points for the user.|
|nextPageToken|string|false|none|The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|

<h2 id="tocS_ListDataSourcesResponse">ListDataSourcesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatasourcesresponse"></a>
<a id="schema_ListDataSourcesResponse"></a>
<a id="tocSlistdatasourcesresponse"></a>
<a id="tocslistdatasourcesresponse"></a>

```json
{
  "dataSource": [
    {
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "dataQualityStandard": [
        "dataQualityUnknown"
      ],
      "dataStreamId": "string",
      "dataStreamName": "string",
      "dataType": {
        "field": [
          {
            "format": "integer",
            "name": "string",
            "optional": true
          }
        ],
        "name": "string"
      },
      "device": {
        "manufacturer": "string",
        "model": "string",
        "type": "unknown",
        "uid": "string",
        "version": "string"
      },
      "name": "string",
      "type": "raw"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSource|[[DataSource](#schemadatasource)]|false|none|A previously created data source.|

<h2 id="tocS_ListSessionsResponse">ListSessionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsessionsresponse"></a>
<a id="schema_ListSessionsResponse"></a>
<a id="tocSlistsessionsresponse"></a>
<a id="tocslistsessionsresponse"></a>

```json
{
  "deletedSession": [
    {
      "activeTimeMillis": "string",
      "activityType": 0,
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "description": "string",
      "endTimeMillis": "string",
      "id": "string",
      "modifiedTimeMillis": "string",
      "name": "string",
      "startTimeMillis": "string"
    }
  ],
  "hasMoreData": true,
  "nextPageToken": "string",
  "session": [
    {
      "activeTimeMillis": "string",
      "activityType": 0,
      "application": {
        "detailsUrl": "string",
        "name": "string",
        "packageName": "string",
        "version": "string"
      },
      "description": "string",
      "endTimeMillis": "string",
      "id": "string",
      "modifiedTimeMillis": "string",
      "name": "string",
      "startTimeMillis": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedSession|[[Session](#schemasession)]|false|none|If includeDeleted is set to true in the request, and startTime and endTime are omitted, this will include sessions which were deleted since the last sync.|
|hasMoreData|boolean|false|none|Flag to indicate server has more data to transfer. DO NOT USE THIS FIELD. It is never populated in responses from the server.|
|nextPageToken|string|false|none|The sync token which is used to sync further changes. This will only be provided if both startTime and endTime are omitted from the request.|
|session|[[Session](#schemasession)]|false|none|Sessions with an end time that is between startTime and endTime of the request.|

<h2 id="tocS_MapValue">MapValue</h2>
<!-- backwards compatibility -->
<a id="schemamapvalue"></a>
<a id="schema_MapValue"></a>
<a id="tocSmapvalue"></a>
<a id="tocsmapvalue"></a>

```json
{
  "fpVal": 0
}
```

Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpVal|number(double)|false|none|Floating point value.|

<h2 id="tocS_Session">Session</h2>
<!-- backwards compatibility -->
<a id="schemasession"></a>
<a id="schema_Session"></a>
<a id="tocSsession"></a>
<a id="tocssession"></a>

```json
{
  "activeTimeMillis": "string",
  "activityType": 0,
  "application": {
    "detailsUrl": "string",
    "name": "string",
    "packageName": "string",
    "version": "string"
  },
  "description": "string",
  "endTimeMillis": "string",
  "id": "string",
  "modifiedTimeMillis": "string",
  "name": "string",
  "startTimeMillis": "string"
}
```

Sessions contain metadata, such as a user-friendly name and time interval information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeTimeMillis|string(int64)|false|none|Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value|
|activityType|integer(int32)|false|none|The type of activity this session represents.|
|application|[Application](#schemaapplication)|false|none|The application that created the session.|
|description|string|false|none|A description for this session.|
|endTimeMillis|string(int64)|false|none|An end time, in milliseconds since epoch, inclusive.|
|id|string|false|none|A client-generated identifier that is unique across all sessions owned by this particular user.|
|modifiedTimeMillis|string(int64)|false|none|A timestamp that indicates when the session was last modified.|
|name|string|false|none|A human readable name of the session.|
|startTimeMillis|string(int64)|false|none|A start time, in milliseconds since epoch, inclusive.|

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
{
  "fpVal": 0,
  "intVal": 0,
  "mapVal": [
    {
      "key": "string",
      "value": {
        "fpVal": 0
      }
    }
  ],
  "stringVal": "string"
}
```

Holder object for the value of a single field in a data point. A field value has a particular format and is only ever set to one of an integer or a floating point value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fpVal|number(double)|false|none|Floating point value. When this is set, other values must not be set.|
|intVal|integer(int32)|false|none|Integer value. When this is set, other values must not be set.|
|mapVal|[[ValueMapValEntry](#schemavaluemapvalentry)]|false|none|Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled.|
|stringVal|string|false|none|String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled.|

<h2 id="tocS_ValueMapValEntry">ValueMapValEntry</h2>
<!-- backwards compatibility -->
<a id="schemavaluemapvalentry"></a>
<a id="schema_ValueMapValEntry"></a>
<a id="tocSvaluemapvalentry"></a>
<a id="tocsvaluemapvalentry"></a>

```json
{
  "key": "string",
  "value": {
    "fpVal": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|[MapValue](#schemamapvalue)|false|none|Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.|
