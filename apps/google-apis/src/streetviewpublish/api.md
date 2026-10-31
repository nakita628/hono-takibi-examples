<h1 id="street-view-publish-api">Street View Publish API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.

Base URLs:

* <a href="https://streetviewpublish.googleapis.com/">https://streetviewpublish.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/streetview/publish/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/streetviewpublish|Publish and manage your 360 photos on Google Street View|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/streetviewpublish|Publish and manage your 360 photos on Google Street View|

<h1 id="street-view-publish-api-photo">photo</h1>

## streetviewpublish.photo.create

<a id="opIdstreetviewpublish.photo.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photo \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "captureTime": "string",
    "connections": [
      {
        "target": {
          "id": "string"
        }
      }
    ],
    "places": [
      {
        "placeId": "string"
      }
    ],
    "pose": {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    },
    "uploadReference": {
      "uploadUrl": "string"
    }
  }'
```

`POST /v1/photo`

After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.

> Body parameter

```json
{
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "places": [
    {
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "uploadReference": {
    "uploadUrl": "string"
  }
}
```

<h3 id="streetviewpublishphotocreate-parameters">Parameters</h3>

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
|body|body|[Photo](#schemaphoto)|false|none|
|» captureTime|body|string(google-datetime)|false|Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.|
|» connections|body|[[Connection](#schemaconnection)]|false|Optional. Connections to other photos. A connection represents the link from this photo to another photo.|
|» places|body|[[Place](#schemaplace)]|false|Optional. Places where this photo belongs.|
|» pose|body|[Pose](#schemapose)|false|Optional. Pose of the photo.|
|» uploadReference|body|[UploadRef](#schemauploadref)|false|Input only. Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.|

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
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "downloadUrl": "string",
  "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
  "photoId": {
    "id": "string"
  },
  "places": [
    {
      "languageCode": "string",
      "name": "string",
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "shareLink": "string",
  "thumbnailUrl": "string",
  "transferStatus": "TRANSFER_STATUS_UNKNOWN",
  "uploadReference": {
    "uploadUrl": "string"
  },
  "uploadTime": "string",
  "viewCount": "string"
}
```

<h3 id="streetviewpublishphotocreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Photo](#schemaphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photo.update

<a id="opIdstreetviewpublish.photo.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photo/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "captureTime": "string",
    "connections": [
      {
        "target": {
          "id": "string"
        }
      }
    ],
    "places": [
      {
        "placeId": "string"
      }
    ],
    "pose": {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    },
    "uploadReference": {
      "uploadUrl": "string"
    }
  }'
```

`PUT /v1/photo/{id}`

Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

> Body parameter

```json
{
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "places": [
    {
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "uploadReference": {
    "uploadUrl": "string"
  }
}
```

<h3 id="streetviewpublishphotoupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A unique identifier for a photo.|
|updateMask|query|string|false|Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.|
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
|body|body|[Photo](#schemaphoto)|false|none|
|» captureTime|body|string(google-datetime)|false|Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.|
|» connections|body|[[Connection](#schemaconnection)]|false|Optional. Connections to other photos. A connection represents the link from this photo to another photo.|
|» places|body|[[Place](#schemaplace)]|false|Optional. Places where this photo belongs.|
|» pose|body|[Pose](#schemapose)|false|Optional. Pose of the photo.|
|» uploadReference|body|[UploadRef](#schemauploadref)|false|Input only. Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.|

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
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "downloadUrl": "string",
  "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
  "photoId": {
    "id": "string"
  },
  "places": [
    {
      "languageCode": "string",
      "name": "string",
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "shareLink": "string",
  "thumbnailUrl": "string",
  "transferStatus": "TRANSFER_STATUS_UNKNOWN",
  "uploadReference": {
    "uploadUrl": "string"
  },
  "uploadTime": "string",
  "viewCount": "string"
}
```

<h3 id="streetviewpublishphotoupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Photo](#schemaphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photo.get

<a id="opIdstreetviewpublish.photo.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photo/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/photo/{photoId}`

Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

<h3 id="streetviewpublishphotoget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|photoId|path|string|true|Required. ID of the Photo.|
|languageCode|query|string|false|The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.|
|view|query|string|false|Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.|
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
|view|BASIC|
|view|INCLUDE_DOWNLOAD_URL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "downloadUrl": "string",
  "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
  "photoId": {
    "id": "string"
  },
  "places": [
    {
      "languageCode": "string",
      "name": "string",
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "shareLink": "string",
  "thumbnailUrl": "string",
  "transferStatus": "TRANSFER_STATUS_UNKNOWN",
  "uploadReference": {
    "uploadUrl": "string"
  },
  "uploadTime": "string",
  "viewCount": "string"
}
```

<h3 id="streetviewpublishphotoget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Photo](#schemaphoto)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photo.delete

<a id="opIdstreetviewpublish.photo.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photo/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/photo/{photoId}`

Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.

<h3 id="streetviewpublishphotodelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|photoId|path|string|true|Required. ID of the Photo.|
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

<h3 id="streetviewpublishphotodelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photo.startUpload

<a id="opIdstreetviewpublish.photo.startUpload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photo:startUpload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/photo:startUpload`

Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.

> Body parameter

```json
{}
```

<h3 id="streetviewpublishphotostartupload-parameters">Parameters</h3>

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
|body|body|[Empty](#schemaempty)|false|none|

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
  "uploadUrl": "string"
}
```

<h3 id="streetviewpublishphotostartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UploadRef](#schemauploadref)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

<h1 id="street-view-publish-api-photos">photos</h1>

## streetviewpublish.photos.list

<a id="opIdstreetviewpublish.photos.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photos \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/photos`

Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.

<h3 id="streetviewpublishphotoslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The filters supported are: `placeId`, `min_latitude`, `max_latitude`, `min_longitude`, and `max_longitude`. See https://google.aip.dev/160 for more information.|
|languageCode|query|string|false|Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.|
|pageSize|query|integer|false|Optional. The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.|
|pageToken|query|string|false|Optional. The nextPageToken value returned from a previous ListPhotos request, if any.|
|view|query|string|false|Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.|
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
|view|BASIC|
|view|INCLUDE_DOWNLOAD_URL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "photos": [
    {
      "captureTime": "string",
      "connections": [
        {
          "target": {
            "id": "string"
          }
        }
      ],
      "downloadUrl": "string",
      "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
      "photoId": {
        "id": "string"
      },
      "places": [
        {
          "languageCode": "string",
          "name": "string",
          "placeId": "string"
        }
      ],
      "pose": {
        "accuracyMeters": 0,
        "altitude": 0,
        "gpsRecordTimestampUnixEpoch": "string",
        "heading": 0,
        "latLngPair": {
          "latitude": 0,
          "longitude": 0
        },
        "level": {
          "name": "string",
          "number": 0
        },
        "pitch": 0,
        "roll": 0
      },
      "shareLink": "string",
      "thumbnailUrl": "string",
      "transferStatus": "TRANSFER_STATUS_UNKNOWN",
      "uploadReference": {
        "uploadUrl": "string"
      },
      "uploadTime": "string",
      "viewCount": "string"
    }
  ]
}
```

<h3 id="streetviewpublishphotoslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPhotosResponse](#schemalistphotosresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photos.batchDelete

<a id="opIdstreetviewpublish.photos.batchDelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photos:batchDelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "photoIds": [
      "string"
    ]
  }'
```

`POST /v1/photos:batchDelete`

Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.

> Body parameter

```json
{
  "photoIds": [
    "string"
  ]
}
```

<h3 id="streetviewpublishphotosbatchdelete-parameters">Parameters</h3>

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
|body|body|[BatchDeletePhotosRequest](#schemabatchdeletephotosrequest)|false|none|
|» photoIds|body|[string]|false|Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`.|

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
  "status": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ]
}
```

<h3 id="streetviewpublishphotosbatchdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchDeletePhotosResponse](#schemabatchdeletephotosresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photos.batchGet

<a id="opIdstreetviewpublish.photos.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photos:batchGet \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/photos:batchGet`

Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.

<h3 id="streetviewpublishphotosbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.|
|photoIds|query|[string]|false|Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.|
|view|query|string|false|Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.|
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
|view|BASIC|
|view|INCLUDE_DOWNLOAD_URL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "results": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "downloadUrl": "string",
        "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
        "photoId": {
          "id": "string"
        },
        "places": [
          {
            "languageCode": "string",
            "name": "string",
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "shareLink": "string",
        "thumbnailUrl": "string",
        "transferStatus": "TRANSFER_STATUS_UNKNOWN",
        "uploadReference": {
          "uploadUrl": "string"
        },
        "uploadTime": "string",
        "viewCount": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

<h3 id="streetviewpublishphotosbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetPhotosResponse](#schemabatchgetphotosresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photos.batchUpdate

<a id="opIdstreetviewpublish.photos.batchUpdate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photos:batchUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "updatePhotoRequests": [
      {
        "photo": {
          "captureTime": "string",
          "connections": [
            {
              "target": {
                "id": "string"
              }
            }
          ],
          "places": [
            {
              "placeId": "string"
            }
          ],
          "pose": {
            "accuracyMeters": 0,
            "altitude": 0,
            "gpsRecordTimestampUnixEpoch": "string",
            "heading": 0,
            "latLngPair": {
              "latitude": 0,
              "longitude": 0
            },
            "level": {
              "name": "string",
              "number": 0
            },
            "pitch": 0,
            "roll": 0
          },
          "uploadReference": {
            "uploadUrl": "string"
          }
        },
        "updateMask": "string"
      }
    ]
  }'
```

`POST /v1/photos:batchUpdate`

Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.

> Body parameter

```json
{
  "updatePhotoRequests": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "places": [
          {
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "uploadReference": {
          "uploadUrl": "string"
        }
      },
      "updateMask": "string"
    }
  ]
}
```

<h3 id="streetviewpublishphotosbatchupdate-parameters">Parameters</h3>

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
|body|body|[BatchUpdatePhotosRequest](#schemabatchupdatephotosrequest)|false|none|
|» updatePhotoRequests|body|[[UpdatePhotoRequest](#schemaupdatephotorequest)]|false|Required. List of UpdatePhotoRequests.|

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
  "results": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "downloadUrl": "string",
        "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
        "photoId": {
          "id": "string"
        },
        "places": [
          {
            "languageCode": "string",
            "name": "string",
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "shareLink": "string",
        "thumbnailUrl": "string",
        "transferStatus": "TRANSFER_STATUS_UNKNOWN",
        "uploadReference": {
          "uploadUrl": "string"
        },
        "uploadTime": "string",
        "viewCount": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

<h3 id="streetviewpublishphotosbatchupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchUpdatePhotosResponse](#schemabatchupdatephotosresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

<h1 id="street-view-publish-api-photosequence">photoSequence</h1>

## streetviewpublish.photoSequence.create

<a id="opIdstreetviewpublish.photoSequence.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photoSequence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "captureTimeOverride": "string",
    "gpsSource": "PHOTO_SEQUENCE",
    "imu": {
      "accelMpsps": [
        {
          "captureTime": "string",
          "x": 0,
          "y": 0,
          "z": 0
        }
      ],
      "gyroRps": [
        {
          "captureTime": "string",
          "x": 0,
          "y": 0,
          "z": 0
        }
      ],
      "magUt": [
        {
          "captureTime": "string",
          "x": 0,
          "y": 0,
          "z": 0
        }
      ]
    },
    "rawGpsTimeline": [
      {
        "accuracyMeters": 0,
        "altitude": 0,
        "gpsRecordTimestampUnixEpoch": "string",
        "heading": 0,
        "latLngPair": {
          "latitude": 0,
          "longitude": 0
        },
        "level": {
          "name": "string",
          "number": 0
        },
        "pitch": 0,
        "roll": 0
      }
    ],
    "uploadReference": {
      "uploadUrl": "string"
    }
  }'
```

`POST /v1/photoSequence`

After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.

> Body parameter

```json
{
  "captureTimeOverride": "string",
  "gpsSource": "PHOTO_SEQUENCE",
  "imu": {
    "accelMpsps": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ],
    "gyroRps": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ],
    "magUt": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ]
  },
  "rawGpsTimeline": [
    {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    }
  ],
  "uploadReference": {
    "uploadUrl": "string"
  }
}
```

<h3 id="streetviewpublishphotosequencecreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inputType|query|string|false|Required. The input form of PhotoSequence.|
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
|body|body|[PhotoSequence](#schemaphotosequence)|false|none|
|» captureTimeOverride|body|string(google-datetime)|false|Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file.|
|» gpsSource|body|string|false|Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence.|
|» imu|body|[Imu](#schemaimu)|false|Input only. Three axis IMU data for the collection. If this data is too large to put in the request, then it should be put in the CAMM track for the video. This data always takes precedence over the equivalent CAMM data, if it exists.|
|» rawGpsTimeline|body|[[Pose](#schemapose)]|false|Input only. Raw GPS measurements with increasing timestamps from the device that aren't time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM).|
|» uploadReference|body|[UploadRef](#schemauploadref)|false|Input only. Required when creating photo sequence. The resource name where the bytes of the photo sequence (in the form of video) are uploaded.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inputType|INPUT_TYPE_UNSPECIFIED|
|inputType|VIDEO|
|inputType|XDM|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» gpsSource|PHOTO_SEQUENCE|
|» gpsSource|CAMERA_MOTION_METADATA_TRACK|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="streetviewpublishphotosequencecreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photoSequence.get

<a id="opIdstreetviewpublish.photoSequence.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photoSequence/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/photoSequence/{sequenceId}`

Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.

<h3 id="streetviewpublishphotosequenceget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|Required. ID of the photo sequence.|
|filter|query|string|false|Optional. The filter expression. For example: `published_status=PUBLISHED`. The filters supported are: `published_status`. See https://google.aip.dev/160 for more information.|
|view|query|string|false|Specifies if a download URL for the photo sequence should be returned in `download_url` of individual photos in the PhotoSequence response. > Note: Currently not implemented.|
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
|view|BASIC|
|view|INCLUDE_DOWNLOAD_URL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="streetviewpublishphotosequenceget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Operation](#schemaoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photoSequence.delete

<a id="opIdstreetviewpublish.photoSequence.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photoSequence/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1/photoSequence/{sequenceId}`

Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.

<h3 id="streetviewpublishphotosequencedelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sequenceId|path|string|true|Required. ID of the PhotoSequence.|
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

<h3 id="streetviewpublishphotosequencedelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

## streetviewpublish.photoSequence.startUpload

<a id="opIdstreetviewpublish.photoSequence.startUpload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photoSequence:startUpload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1/photoSequence:startUpload`

Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.

> Body parameter

```json
{}
```

<h3 id="streetviewpublishphotosequencestartupload-parameters">Parameters</h3>

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
|body|body|[Empty](#schemaempty)|false|none|

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
  "uploadUrl": "string"
}
```

<h3 id="streetviewpublishphotosequencestartupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[UploadRef](#schemauploadref)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

<h1 id="street-view-publish-api-photosequences">photoSequences</h1>

## streetviewpublish.photoSequences.list

<a id="opIdstreetviewpublish.photoSequences.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/photoSequences \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/photoSequences`

Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.

<h3 id="streetviewpublishphotosequenceslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. The filter expression. For example: `imagery_type=SPHERICAL`. The filters supported are: `imagery_type`, `processing_state`, `min_latitude`, `max_latitude`, `min_longitude`, `max_longitude`, and `filename_query`. See https://google.aip.dev/160 for more information. Filename queries should sent as a Phrase in order to support multple words and special characters by adding escaped quotes. Ex: filename_query="example of a phrase.mp4"|
|pageSize|query|integer|false|Optional. The maximum number of photo sequences to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photo sequences returned in the response may be less than `pageSize` if the number of matches is less than `pageSize`. This is currently unimplemented but is in process.|
|pageToken|query|string|false|Optional. The nextPageToken value returned from a previous ListPhotoSequences request, if any.|
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
  "nextPageToken": "string",
  "photoSequences": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="streetviewpublishphotosequenceslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPhotoSequencesResponse](#schemalistphotosequencesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/streetviewpublish ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/streetviewpublish )
</aside>

# Schemas

<h2 id="tocS_BatchDeletePhotosRequest">BatchDeletePhotosRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletephotosrequest"></a>
<a id="schema_BatchDeletePhotosRequest"></a>
<a id="tocSbatchdeletephotosrequest"></a>
<a id="tocsbatchdeletephotosrequest"></a>

```json
{
  "photoIds": [
    "string"
  ]
}
```

Request to delete multiple Photos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photoIds|[string]|false|none|Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`.|

<h2 id="tocS_BatchDeletePhotosResponse">BatchDeletePhotosResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchdeletephotosresponse"></a>
<a id="schema_BatchDeletePhotosResponse"></a>
<a id="tocSbatchdeletephotosresponse"></a>
<a id="tocsbatchdeletephotosresponse"></a>

```json
{
  "status": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ]
}
```

Response to batch delete of one or more Photos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[[Status](#schemastatus)]|false|none|The status for the operation to delete a single Photo in the batch request.|

<h2 id="tocS_BatchGetPhotosResponse">BatchGetPhotosResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetphotosresponse"></a>
<a id="schema_BatchGetPhotosResponse"></a>
<a id="tocSbatchgetphotosresponse"></a>
<a id="tocsbatchgetphotosresponse"></a>

```json
{
  "results": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "downloadUrl": "string",
        "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
        "photoId": {
          "id": "string"
        },
        "places": [
          {
            "languageCode": "string",
            "name": "string",
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "shareLink": "string",
        "thumbnailUrl": "string",
        "transferStatus": "TRANSFER_STATUS_UNKNOWN",
        "uploadReference": {
          "uploadUrl": "string"
        },
        "uploadTime": "string",
        "viewCount": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

Response to batch get of Photos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PhotoResponse](#schemaphotoresponse)]|false|none|List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.|

<h2 id="tocS_BatchUpdatePhotosRequest">BatchUpdatePhotosRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatephotosrequest"></a>
<a id="schema_BatchUpdatePhotosRequest"></a>
<a id="tocSbatchupdatephotosrequest"></a>
<a id="tocsbatchupdatephotosrequest"></a>

```json
{
  "updatePhotoRequests": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "downloadUrl": "string",
        "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
        "photoId": {
          "id": "string"
        },
        "places": [
          {
            "languageCode": "string",
            "name": "string",
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "shareLink": "string",
        "thumbnailUrl": "string",
        "transferStatus": "TRANSFER_STATUS_UNKNOWN",
        "uploadReference": {
          "uploadUrl": "string"
        },
        "uploadTime": "string",
        "viewCount": "string"
      },
      "updateMask": "string"
    }
  ]
}
```

Request to update the metadata of photos. Updating the pixels of photos is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updatePhotoRequests|[[UpdatePhotoRequest](#schemaupdatephotorequest)]|false|none|Required. List of UpdatePhotoRequests.|

<h2 id="tocS_BatchUpdatePhotosResponse">BatchUpdatePhotosResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchupdatephotosresponse"></a>
<a id="schema_BatchUpdatePhotosResponse"></a>
<a id="tocSbatchupdatephotosresponse"></a>
<a id="tocsbatchupdatephotosresponse"></a>

```json
{
  "results": [
    {
      "photo": {
        "captureTime": "string",
        "connections": [
          {
            "target": {
              "id": "string"
            }
          }
        ],
        "downloadUrl": "string",
        "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
        "photoId": {
          "id": "string"
        },
        "places": [
          {
            "languageCode": "string",
            "name": "string",
            "placeId": "string"
          }
        ],
        "pose": {
          "accuracyMeters": 0,
          "altitude": 0,
          "gpsRecordTimestampUnixEpoch": "string",
          "heading": 0,
          "latLngPair": {
            "latitude": 0,
            "longitude": 0
          },
          "level": {
            "name": "string",
            "number": 0
          },
          "pitch": 0,
          "roll": 0
        },
        "shareLink": "string",
        "thumbnailUrl": "string",
        "transferStatus": "TRANSFER_STATUS_UNKNOWN",
        "uploadReference": {
          "uploadUrl": "string"
        },
        "uploadTime": "string",
        "viewCount": "string"
      },
      "status": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      }
    }
  ]
}
```

Response to batch update of metadata of one or more Photos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PhotoResponse](#schemaphotoresponse)]|false|none|List of results for each individual Photo updated, in the same order as the request.|

<h2 id="tocS_Connection">Connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_Connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "target": {
    "id": "string"
  }
}
```

A connection is the link from a source photo to a destination photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|[PhotoId](#schemaphotoid)|false|none|Required. The destination of the connection from the containing photo to another photo.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GpsDataGapFailureDetails">GpsDataGapFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemagpsdatagapfailuredetails"></a>
<a id="schema_GpsDataGapFailureDetails"></a>
<a id="tocSgpsdatagapfailuredetails"></a>
<a id="tocsgpsdatagapfailuredetails"></a>

```json
{
  "gapDuration": "string",
  "gapStartTime": "string"
}
```

Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gapDuration|string(google-duration)|false|none|The duration of the gap in GPS data that was found.|
|gapStartTime|string(google-duration)|false|none|Relative time (from the start of the video stream) when the gap started.|

<h2 id="tocS_Imu">Imu</h2>
<!-- backwards compatibility -->
<a id="schemaimu"></a>
<a id="schema_Imu"></a>
<a id="tocSimu"></a>
<a id="tocsimu"></a>

```json
{
  "accelMpsps": [
    {
      "captureTime": "string",
      "x": 0,
      "y": 0,
      "z": 0
    }
  ],
  "gyroRps": [
    {
      "captureTime": "string",
      "x": 0,
      "y": 0,
      "z": 0
    }
  ],
  "magUt": [
    {
      "captureTime": "string",
      "x": 0,
      "y": 0,
      "z": 0
    }
  ]
}
```

IMU data from the device sensors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accelMpsps|[[Measurement3d](#schemameasurement3d)]|false|none|The accelerometer measurements in meters/sec^2 with increasing timestamps from devices.|
|gyroRps|[[Measurement3d](#schemameasurement3d)]|false|none|The gyroscope measurements in radians/sec with increasing timestamps from devices.|
|magUt|[[Measurement3d](#schemameasurement3d)]|false|none|The magnetometer measurements of the magnetic field in microtesla (uT) with increasing timestamps from devices.|

<h2 id="tocS_ImuDataGapFailureDetails">ImuDataGapFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimudatagapfailuredetails"></a>
<a id="schema_ImuDataGapFailureDetails"></a>
<a id="tocSimudatagapfailuredetails"></a>
<a id="tocsimudatagapfailuredetails"></a>

```json
{
  "gapDuration": "string",
  "gapStartTime": "string"
}
```

Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gapDuration|string(google-duration)|false|none|The duration of the gap in IMU data that was found.|
|gapStartTime|string(google-duration)|false|none|Relative time (from the start of the video stream) when the gap started.|

<h2 id="tocS_InsufficientGpsFailureDetails">InsufficientGpsFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemainsufficientgpsfailuredetails"></a>
<a id="schema_InsufficientGpsFailureDetails"></a>
<a id="tocSinsufficientgpsfailuredetails"></a>
<a id="tocsinsufficientgpsfailuredetails"></a>

```json
{
  "gpsPointsFound": 0
}
```

Details related to ProcessingFailureReason#INSUFFICIENT_GPS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gpsPointsFound|integer(int32)|false|none|The number of GPS points that were found in the video.|

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

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_LatLngBounds">LatLngBounds</h2>
<!-- backwards compatibility -->
<a id="schemalatlngbounds"></a>
<a id="schema_LatLngBounds"></a>
<a id="tocSlatlngbounds"></a>
<a id="tocslatlngbounds"></a>

```json
{
  "northeast": {
    "latitude": 0,
    "longitude": 0
  },
  "southwest": {
    "latitude": 0,
    "longitude": 0
  }
}
```

A rectangle in geographical coordinates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|northeast|[LatLng](#schemalatlng)|false|none|The northeast corner of these bounds.|
|southwest|[LatLng](#schemalatlng)|false|none|The southwest corner of these bounds.|

<h2 id="tocS_Level">Level</h2>
<!-- backwards compatibility -->
<a id="schemalevel"></a>
<a id="schema_Level"></a>
<a id="tocSlevel"></a>
<a id="tocslevel"></a>

```json
{
  "name": "string",
  "number": 0
}
```

Level information containing level number and its corresponding name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.|
|number|number(double)|false|none|Optional. Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.|

<h2 id="tocS_ListPhotoSequencesResponse">ListPhotoSequencesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphotosequencesresponse"></a>
<a id="schema_ListPhotoSequencesResponse"></a>
<a id="tocSlistphotosequencesresponse"></a>
<a id="tocslistphotosequencesresponse"></a>

```json
{
  "nextPageToken": "string",
  "photoSequences": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

Response to list all photo sequences that belong to a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|photoSequences|[[Operation](#schemaoperation)]|false|none|List of photo sequences via Operation interface. The maximum number of items returned is based on the pageSize field in the request. Each item in the list can have three possible states, * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` contains a PhotoSequence message, In each sequence, only Id is populated.|

<h2 id="tocS_ListPhotosResponse">ListPhotosResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistphotosresponse"></a>
<a id="schema_ListPhotosResponse"></a>
<a id="tocSlistphotosresponse"></a>
<a id="tocslistphotosresponse"></a>

```json
{
  "nextPageToken": "string",
  "photos": [
    {
      "captureTime": "string",
      "connections": [
        {
          "target": {
            "id": "string"
          }
        }
      ],
      "downloadUrl": "string",
      "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
      "photoId": {
        "id": "string"
      },
      "places": [
        {
          "languageCode": "string",
          "name": "string",
          "placeId": "string"
        }
      ],
      "pose": {
        "accuracyMeters": 0,
        "altitude": 0,
        "gpsRecordTimestampUnixEpoch": "string",
        "heading": 0,
        "latLngPair": {
          "latitude": 0,
          "longitude": 0
        },
        "level": {
          "name": "string",
          "number": 0
        },
        "pitch": 0,
        "roll": 0
      },
      "shareLink": "string",
      "thumbnailUrl": "string",
      "transferStatus": "TRANSFER_STATUS_UNKNOWN",
      "uploadReference": {
        "uploadUrl": "string"
      },
      "uploadTime": "string",
      "viewCount": "string"
    }
  ]
}
```

Response to list all photos that belong to a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results, or empty if there are no more results in the list.|
|photos|[[Photo](#schemaphoto)]|false|none|List of photos. The pageSize field in the request determines the number of items returned.|

<h2 id="tocS_Measurement3d">Measurement3d</h2>
<!-- backwards compatibility -->
<a id="schemameasurement3d"></a>
<a id="schema_Measurement3d"></a>
<a id="tocSmeasurement3d"></a>
<a id="tocsmeasurement3d"></a>

```json
{
  "captureTime": "string",
  "x": 0,
  "y": 0,
  "z": 0
}
```

A Generic 3d measurement sample.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureTime|string(google-datetime)|false|none|The timestamp of the IMU measurement.|
|x|number(float)|false|none|The sensor measurement in the x axis.|
|y|number(float)|false|none|The sensor measurement in the y axis.|
|z|number(float)|false|none|The sensor measurement in the z axis.|

<h2 id="tocS_NoOverlapGpsFailureDetails">NoOverlapGpsFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemanooverlapgpsfailuredetails"></a>
<a id="schema_NoOverlapGpsFailureDetails"></a>
<a id="tocSnooverlapgpsfailuredetails"></a>
<a id="tocsnooverlapgpsfailuredetails"></a>

```json
{
  "gpsEndTime": "string",
  "gpsStartTime": "string",
  "videoEndTime": "string",
  "videoStartTime": "string"
}
```

Details related to PhotoSequenceProcessingFailureReason#NO_OVERLAP_GPS.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gpsEndTime|string(google-datetime)|false|none|Time of last recorded GPS point.|
|gpsStartTime|string(google-datetime)|false|none|Time of first recorded GPS point.|
|videoEndTime|string(google-datetime)|false|none|End time of video.|
|videoStartTime|string(google-datetime)|false|none|Start time of video.|

<h2 id="tocS_NotOutdoorsFailureDetails">NotOutdoorsFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemanotoutdoorsfailuredetails"></a>
<a id="schema_NotOutdoorsFailureDetails"></a>
<a id="tocSnotoutdoorsfailuredetails"></a>
<a id="tocsnotoutdoorsfailuredetails"></a>

```json
{
  "startTime": "string"
}
```

Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTime|string(google-duration)|false|none|Relative time (from the start of the video stream) when an indoor frame was found.|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[Status](#schemastatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "captureTime": "string",
  "connections": [
    {
      "target": {
        "id": "string"
      }
    }
  ],
  "downloadUrl": "string",
  "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
  "photoId": {
    "id": "string"
  },
  "places": [
    {
      "languageCode": "string",
      "name": "string",
      "placeId": "string"
    }
  ],
  "pose": {
    "accuracyMeters": 0,
    "altitude": 0,
    "gpsRecordTimestampUnixEpoch": "string",
    "heading": 0,
    "latLngPair": {
      "latitude": 0,
      "longitude": 0
    },
    "level": {
      "name": "string",
      "number": 0
    },
    "pitch": 0,
    "roll": 0
  },
  "shareLink": "string",
  "thumbnailUrl": "string",
  "transferStatus": "TRANSFER_STATUS_UNKNOWN",
  "uploadReference": {
    "uploadUrl": "string"
  },
  "uploadTime": "string",
  "viewCount": "string"
}
```

Photo is used to store 360 photos along with photo metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureTime|string(google-datetime)|false|none|Optional. Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.|
|connections|[[Connection](#schemaconnection)]|false|none|Optional. Connections to other photos. A connection represents the link from this photo to another photo.|
|downloadUrl|string|false|read-only|Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.|
|mapsPublishStatus|string|false|read-only|Output only. Status in Google Maps, whether this photo was published or rejected.|
|photoId|[PhotoId](#schemaphotoid)|false|none|Required. Output only. Required when updating a photo. Output only when creating a photo. Identifier for the photo, which is unique among all photos in Google.|
|places|[[Place](#schemaplace)]|false|none|Optional. Places where this photo belongs.|
|pose|[Pose](#schemapose)|false|none|Optional. Pose of the photo.|
|shareLink|string|false|read-only|Output only. The share link for the photo.|
|thumbnailUrl|string|false|read-only|Output only. The thumbnail URL for showing a preview of the given photo.|
|transferStatus|string|false|read-only|Output only. Status of rights transfer on this photo.|
|uploadReference|[UploadRef](#schemauploadref)|false|none|Input only. Required when creating a photo. Input only. The resource URL where the photo bytes are uploaded to.|
|uploadTime|string(google-datetime)|false|read-only|Output only. Time when the image was uploaded.|
|viewCount|string(int64)|false|read-only|Output only. View count of the photo.|

#### Enumerated Values

|Property|Value|
|---|---|
|mapsPublishStatus|UNSPECIFIED_MAPS_PUBLISH_STATUS|
|mapsPublishStatus|PUBLISHED|
|mapsPublishStatus|REJECTED_UNKNOWN|
|transferStatus|TRANSFER_STATUS_UNKNOWN|
|transferStatus|NEVER_TRANSFERRED|
|transferStatus|PENDING|
|transferStatus|COMPLETED|
|transferStatus|REJECTED|
|transferStatus|EXPIRED|
|transferStatus|CANCELLED|
|transferStatus|RECEIVED_VIA_TRANSFER|

<h2 id="tocS_PhotoId">PhotoId</h2>
<!-- backwards compatibility -->
<a id="schemaphotoid"></a>
<a id="schema_PhotoId"></a>
<a id="tocSphotoid"></a>
<a id="tocsphotoid"></a>

```json
{
  "id": "string"
}
```

Identifier for a Photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|A unique identifier for a photo.|

<h2 id="tocS_PhotoResponse">PhotoResponse</h2>
<!-- backwards compatibility -->
<a id="schemaphotoresponse"></a>
<a id="schema_PhotoResponse"></a>
<a id="tocSphotoresponse"></a>
<a id="tocsphotoresponse"></a>

```json
{
  "photo": {
    "captureTime": "string",
    "connections": [
      {
        "target": {
          "id": "string"
        }
      }
    ],
    "downloadUrl": "string",
    "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
    "photoId": {
      "id": "string"
    },
    "places": [
      {
        "languageCode": "string",
        "name": "string",
        "placeId": "string"
      }
    ],
    "pose": {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    },
    "shareLink": "string",
    "thumbnailUrl": "string",
    "transferStatus": "TRANSFER_STATUS_UNKNOWN",
    "uploadReference": {
      "uploadUrl": "string"
    },
    "uploadTime": "string",
    "viewCount": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|[Photo](#schemaphoto)|false|none|The Photo resource, if the request was successful.|
|status|[Status](#schemastatus)|false|none|The status for the operation to get or update a single photo in the batch request.|

<h2 id="tocS_PhotoSequence">PhotoSequence</h2>
<!-- backwards compatibility -->
<a id="schemaphotosequence"></a>
<a id="schema_PhotoSequence"></a>
<a id="tocSphotosequence"></a>
<a id="tocsphotosequence"></a>

```json
{
  "captureTimeOverride": "string",
  "distanceMeters": 0,
  "failureDetails": {
    "gpsDataGapDetails": {
      "gapDuration": "string",
      "gapStartTime": "string"
    },
    "imuDataGapDetails": {
      "gapDuration": "string",
      "gapStartTime": "string"
    },
    "insufficientGpsDetails": {
      "gpsPointsFound": 0
    },
    "noOverlapGpsDetails": {
      "gpsEndTime": "string",
      "gpsStartTime": "string",
      "videoEndTime": "string",
      "videoStartTime": "string"
    },
    "notOutdoorsDetails": {
      "startTime": "string"
    }
  },
  "failureReason": "PROCESSING_FAILURE_REASON_UNSPECIFIED",
  "filename": "string",
  "gpsSource": "PHOTO_SEQUENCE",
  "id": "string",
  "imu": {
    "accelMpsps": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ],
    "gyroRps": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ],
    "magUt": [
      {
        "captureTime": "string",
        "x": 0,
        "y": 0,
        "z": 0
      }
    ]
  },
  "photos": [
    {
      "captureTime": "string",
      "connections": [
        {
          "target": {
            "id": "string"
          }
        }
      ],
      "downloadUrl": "string",
      "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
      "photoId": {
        "id": "string"
      },
      "places": [
        {
          "languageCode": "string",
          "name": "string",
          "placeId": "string"
        }
      ],
      "pose": {
        "accuracyMeters": 0,
        "altitude": 0,
        "gpsRecordTimestampUnixEpoch": "string",
        "heading": 0,
        "latLngPair": {
          "latitude": 0,
          "longitude": 0
        },
        "level": {
          "name": "string",
          "number": 0
        },
        "pitch": 0,
        "roll": 0
      },
      "shareLink": "string",
      "thumbnailUrl": "string",
      "transferStatus": "TRANSFER_STATUS_UNKNOWN",
      "uploadReference": {
        "uploadUrl": "string"
      },
      "uploadTime": "string",
      "viewCount": "string"
    }
  ],
  "processingState": "PROCESSING_STATE_UNSPECIFIED",
  "rawGpsTimeline": [
    {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    }
  ],
  "sequenceBounds": {
    "northeast": {
      "latitude": 0,
      "longitude": 0
    },
    "southwest": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "uploadReference": {
    "uploadUrl": "string"
  },
  "uploadTime": "string",
  "viewCount": "string"
}
```

A sequence of 360 photos along with metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|captureTimeOverride|string(google-datetime)|false|none|Optional. Absolute time when the photo sequence starts to be captured. If the photo sequence is a video, this is the start time of the video. If this field is populated in input, it overrides the capture time in the video or XDM file.|
|distanceMeters|number(double)|false|read-only|Output only. The computed distance of the photo sequence in meters.|
|failureDetails|[ProcessingFailureDetails](#schemaprocessingfailuredetails)|false|none|Output only. If this sequence has `failure_reason` set, this may contain additional details about the failure.|
|failureReason|string|false|read-only|Output only. If this sequence has processing_state = FAILED, this will contain the reason why it failed. If the processing_state is any other value, this field will be unset.|
|filename|string|false|read-only|Output only. The filename of the upload. Does not include the directory path. Only available if the sequence was uploaded on a platform that provides the filename.|
|gpsSource|string|false|none|Input only. If both raw_gps_timeline and the Camera Motion Metadata Track (CAMM) contain GPS measurements, indicate which takes precedence.|
|id|string|false|read-only|Output only. Unique identifier for the photo sequence. This also acts as a long running operation ID if uploading is performed asynchronously.|
|imu|[Imu](#schemaimu)|false|none|Input only. Three axis IMU data for the collection. If this data is too large to put in the request, then it should be put in the CAMM track for the video. This data always takes precedence over the equivalent CAMM data, if it exists.|
|photos|[[Photo](#schemaphoto)]|false|read-only|Output only. Photos with increasing timestamps.|
|processingState|string|false|read-only|Output only. The processing state of this sequence.|
|rawGpsTimeline|[[Pose](#schemapose)]|false|none|Input only. Raw GPS measurements with increasing timestamps from the device that aren't time synced with each photo. These raw measurements will be used to infer the pose of each frame. Required in input when InputType is VIDEO and raw GPS measurements are not in Camera Motion Metadata Track (CAMM). User can indicate which takes precedence using gps_source if raw GPS measurements are provided in both raw_gps_timeline and Camera Motion Metadata Track (CAMM).|
|sequenceBounds|[LatLngBounds](#schemalatlngbounds)|false|none|Output only. A rectangular box that encapsulates every image in this photo sequence.|
|uploadReference|[UploadRef](#schemauploadref)|false|none|Input only. Required when creating photo sequence. The resource name where the bytes of the photo sequence (in the form of video) are uploaded.|
|uploadTime|string(google-datetime)|false|read-only|Output only. The time this photo sequence was created in uSV Store service.|
|viewCount|string(int64)|false|read-only|Output only. The total number of views that all the published images in this PhotoSequence have received.|

#### Enumerated Values

|Property|Value|
|---|---|
|failureReason|PROCESSING_FAILURE_REASON_UNSPECIFIED|
|failureReason|LOW_RESOLUTION|
|failureReason|DUPLICATE|
|failureReason|INSUFFICIENT_GPS|
|failureReason|NO_OVERLAP_GPS|
|failureReason|INVALID_GPS|
|failureReason|FAILED_TO_REFINE_POSITIONS|
|failureReason|TAKEDOWN|
|failureReason|CORRUPT_VIDEO|
|failureReason|INTERNAL|
|failureReason|INVALID_VIDEO_FORMAT|
|failureReason|INVALID_VIDEO_DIMENSIONS|
|failureReason|INVALID_CAPTURE_TIME|
|failureReason|GPS_DATA_GAP|
|failureReason|JUMPY_GPS|
|failureReason|INVALID_IMU|
|failureReason|INSUFFICIENT_IMU|
|failureReason|INSUFFICIENT_OVERLAP_TIME_SERIES|
|failureReason|IMU_DATA_GAP|
|failureReason|UNSUPPORTED_CAMERA|
|failureReason|NOT_OUTDOORS|
|failureReason|INSUFFICIENT_VIDEO_FRAMES|
|failureReason|INSUFFICIENT_MOVEMENT|
|gpsSource|PHOTO_SEQUENCE|
|gpsSource|CAMERA_MOTION_METADATA_TRACK|
|processingState|PROCESSING_STATE_UNSPECIFIED|
|processingState|PENDING|
|processingState|PROCESSING|
|processingState|PROCESSED|
|processingState|FAILED|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "languageCode": "string",
  "name": "string",
  "placeId": "string"
}
```

Place metadata for an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|languageCode|string|false|read-only|Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback.|
|name|string|false|read-only|Output only. The name of the place, localized to the language_code.|
|placeId|string|false|none|Place identifier, as described in https://developers.google.com/places/place-id.|

<h2 id="tocS_Pose">Pose</h2>
<!-- backwards compatibility -->
<a id="schemapose"></a>
<a id="schema_Pose"></a>
<a id="tocSpose"></a>
<a id="tocspose"></a>

```json
{
  "accuracyMeters": 0,
  "altitude": 0,
  "gpsRecordTimestampUnixEpoch": "string",
  "heading": 0,
  "latLngPair": {
    "latitude": 0,
    "longitude": 0
  },
  "level": {
    "name": "string",
    "number": 0
  },
  "pitch": 0,
  "roll": 0
}
```

Raw pose measurement for an entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accuracyMeters|number(float)|false|none|The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.|
|altitude|number(double)|false|none|Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.|
|gpsRecordTimestampUnixEpoch|string(google-datetime)|false|none|Time of the GPS record since UTC epoch.|
|heading|number(double)|false|none|The following pose parameters pertain to the center of the photo. They match https://developers.google.com/streetview/spherical-metadata. Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be >=0 and <360. NaN indicates an unmeasured quantity.|
|latLngPair|[LatLng](#schemalatlng)|false|none|Latitude and longitude pair of the pose, as explained here: https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng When creating a Photo, if the latitude and longitude pair are not provided, the geolocation from the exif header is used. A latitude and longitude pair not provided in the photo or exif header causes the photo process to fail.|
|level|[Level](#schemalevel)|false|none|Level (the floor in a building) used to configure vertical navigation.|
|pitch|number(double)|false|none|Pitch, measured at the center of the photo in degrees. Value must be >=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.|
|roll|number(double)|false|none|Roll, measured in degrees. Value must be >= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.|

<h2 id="tocS_ProcessingFailureDetails">ProcessingFailureDetails</h2>
<!-- backwards compatibility -->
<a id="schemaprocessingfailuredetails"></a>
<a id="schema_ProcessingFailureDetails"></a>
<a id="tocSprocessingfailuredetails"></a>
<a id="tocsprocessingfailuredetails"></a>

```json
{
  "gpsDataGapDetails": {
    "gapDuration": "string",
    "gapStartTime": "string"
  },
  "imuDataGapDetails": {
    "gapDuration": "string",
    "gapStartTime": "string"
  },
  "insufficientGpsDetails": {
    "gpsPointsFound": 0
  },
  "noOverlapGpsDetails": {
    "gpsEndTime": "string",
    "gpsStartTime": "string",
    "videoEndTime": "string",
    "videoStartTime": "string"
  },
  "notOutdoorsDetails": {
    "startTime": "string"
  }
}
```

Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gpsDataGapDetails|[GpsDataGapFailureDetails](#schemagpsdatagapfailuredetails)|false|none|See GpsDataGapFailureDetails.|
|imuDataGapDetails|[ImuDataGapFailureDetails](#schemaimudatagapfailuredetails)|false|none|See ImuDataGapFailureDetails.|
|insufficientGpsDetails|[InsufficientGpsFailureDetails](#schemainsufficientgpsfailuredetails)|false|none|See InsufficientGpsFailureDetails.|
|noOverlapGpsDetails|[NoOverlapGpsFailureDetails](#schemanooverlapgpsfailuredetails)|false|none|See NoOverlapGpsFailureDetails.|
|notOutdoorsDetails|[NotOutdoorsFailureDetails](#schemanotoutdoorsfailuredetails)|false|none|See NotOutdoorsFailureDetails.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_UpdatePhotoRequest">UpdatePhotoRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatephotorequest"></a>
<a id="schema_UpdatePhotoRequest"></a>
<a id="tocSupdatephotorequest"></a>
<a id="tocsupdatephotorequest"></a>

```json
{
  "photo": {
    "captureTime": "string",
    "connections": [
      {
        "target": {
          "id": "string"
        }
      }
    ],
    "downloadUrl": "string",
    "mapsPublishStatus": "UNSPECIFIED_MAPS_PUBLISH_STATUS",
    "photoId": {
      "id": "string"
    },
    "places": [
      {
        "languageCode": "string",
        "name": "string",
        "placeId": "string"
      }
    ],
    "pose": {
      "accuracyMeters": 0,
      "altitude": 0,
      "gpsRecordTimestampUnixEpoch": "string",
      "heading": 0,
      "latLngPair": {
        "latitude": 0,
        "longitude": 0
      },
      "level": {
        "name": "string",
        "number": 0
      },
      "pitch": 0,
      "roll": 0
    },
    "shareLink": "string",
    "thumbnailUrl": "string",
    "transferStatus": "TRANSFER_STATUS_UNKNOWN",
    "uploadReference": {
      "uploadUrl": "string"
    },
    "uploadTime": "string",
    "viewCount": "string"
  },
  "updateMask": "string"
}
```

Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|[Photo](#schemaphoto)|false|none|Required. Photo object containing the new metadata.|
|updateMask|string(google-fieldmask)|false|none|Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.lat_lng_pair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` > Note: When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.|

<h2 id="tocS_UploadRef">UploadRef</h2>
<!-- backwards compatibility -->
<a id="schemauploadref"></a>
<a id="schema_UploadRef"></a>
<a id="tocSuploadref"></a>
<a id="tocsuploadref"></a>

```json
{
  "uploadUrl": "string"
}
```

Upload reference for media files.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uploadUrl|string|false|none|An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"|
