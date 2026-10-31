<h1 id="shutterstock-api-explorer">Shutterstock API Explorer v1.1.32</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

Base URLs:

* <a href="https://api.shutterstock.com">https://api.shutterstock.com</a> - Live server

* <a href="https://api-sandbox.shutterstock.com">https://api-sandbox.shutterstock.com</a> - Sandbox server

# Authentication

- HTTP Authentication, scheme: basic

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.shutterstock.com/oauth/authorize](https://accounts.shutterstock.com/oauth/authorize)
    - Token URL = [https://api.shutterstock.com/v2/oauth/access_token](https://api.shutterstock.com/v2/oauth/access_token)

|Scope|Scope Description|
|---|---|
|collections.edit|Grant the ability to create new collections, edit a collection, and modify the contents of a collection|
|collections.view|Grant read-only access to a collection and its contents.|
|licenses.create|Grant the ability to download and license media on behalf of the user.|
|licenses.view|Grant read-only access to a user's licenses.|
|purchases.view|Grant read-only access to a user's purchase history.|
|user.view|*Originally missing*|

<h1 id="shutterstock-api-explorer-custommusic">custom_music</h1>

## List computer audio descriptors

<a id="opIdlistCustomDescriptors"></a>

> Code samples

```bash
curl https://example.com/v2/ai/audio/descriptors \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/ai/audio/descriptors`

This endpoint lists the descriptors that you can use in the audio regions in an audio render.

<h3 id="list-computer-audio-descriptors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|render_speed_over|query|number|false|Show descriptors with an average render speed that is greater than or equal to the specified value|
|band_id|query|string|false|Show descriptors that contain the specified band (case-sentsitive)|
|band_name|query|string|false|Show descriptors with the specified band name (case-sensitive)|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|id|query|[string]|false|Show descriptors with the specified IDs (case-sensitive)|
|instrument_name|query|string|false|Show descriptors with the specified instrument name (case-sensitive)|
|instrument_id|query|string|false|Show descriptors with the specified instrument ID (case-sensitive)|
|tempo|query|number|false|Show descriptors whose tempo range includes the specified tempo in beats per minute|
|tempo_to|query|number|false|Show descriptors with a tempo that is less than or equal to the specified number|
|tempo_from|query|number|false|Show descriptors that have a tempo range that includes the specified tempo in beats per minute|
|name|query|string|false|Show descriptors with the specified name (case-sensitive)|
|tag|query|string|false|Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/DescriptorsListResult/example"
}
```

<h3 id="list-computer-audio-descriptors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DescriptorsListResult](#schemadescriptorslistresult)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List computer audio instruments

<a id="opIdlistCustomInstruments"></a>

> Code samples

```bash
curl https://example.com/v2/ai/audio/instruments \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/ai/audio/instruments`

This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.

<h3 id="list-computer-audio-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|false|Show instruments with the specified ID|
|per_page|query|integer|false|Number of results per page|
|page|query|integer|false|Page number|
|name|query|string|false|Show instruments with the specified name (case-sensitive)|
|tag|query|string|false|Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/InstrumentsListResult/example"
}
```

<h3 id="list-computer-audio-instruments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstrumentsListResult](#schemainstrumentslistresult)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get details about audio renders

<a id="opIdfetchRenders"></a>

> Code samples

```bash
curl 'https://example.com/v2/ai/audio/renders?id=L2w7h9VNFlkzpllSUunSYayenKjN&id=BeHx3UNXzMBB4dGsC9aa6VxnpcWl' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/ai/audio/renders`

This endpoint shows the status of one or more audio renders, including download links for completed audio.

<h3 id="get-details-about-audio-renders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|One or more render IDs|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/AudioRendersListResults/example"
}
```

<h3 id="get-details-about-audio-renders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AudioRendersListResults](#schemaaudiorenderslistresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Create rendered audio

<a id="opIdcreateAudioRenders"></a>

> Code samples

```bash
curl https://example.com/v2/ai/audio/renders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/CreateAudioRendersRequest/example"
  }'
```

`POST /v2/ai/audio/renders`

This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CreateAudioRendersRequest/example"
}
```

<h3 id="create-rendered-audio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAudioRendersRequest](#schemacreateaudiorendersrequest)|true|Parameters for the audio, including the timeline and information about the output file|
|» audio_renders|body|[[CreateAudioRender](#schemacreateaudiorender)]|true|Parameters to create computer audio renders|

> Example responses

> 200 Response

```json
{
  "audio_renders": [
    {
      "created_date": "2021-01-26T12:10:22-05:00",
      "files": [],
      "id": "njlpYoWWmb1AYs2nZyw7EcNWbAkZ",
      "preset": "MASTER_MP3",
      "progress_percent": 0,
      "status": "WAITING_COMPOSE",
      "timeline": {},
      "updated_date": "2021-01-26T13:10:22-05:00"
    }
  ]
}
```

<h3 id="create-rendered-audio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AudioRendersListResults](#schemaaudiorenderslistresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-audio">audio</h1>

## List audio tracks

<a id="opIdgetTrackList"></a>

> Code samples

```bash
curl 'https://example.com/v2/audio?id=442583&id=434750' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio`

This endpoint lists information about one or more audio tracks, including the description and publication date.

<h3 id="list-audio-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|One or more audio IDs|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/AudioDataList/example"
}
```

<h3 id="list-audio-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AudioDataList](#schemaaudiodatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List audio collections

<a id="opIdgetTrackCollectionList"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/audio/collections`

This endpoint lists your collections of audio tracks and their basic attributes.

<h3 id="list-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionDataList/example"
}
```

<h3 id="list-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDataList](#schemacollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Create audio collections

<a id="opIdcreateTrackCollection"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Best rock music"
  }'
```

`POST /v2/audio/collections`

This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.

> Body parameter

```json
{
  "name": "Best rock music"
}
```

<h3 id="create-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreateRequest](#schemacollectioncreaterequest)|true|Collection metadata|
|» name|body|string|true|The name of the collection|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/CollectionCreateResponse/example"
}
```

<h3 id="create-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created audio collection|[CollectionCreateResponse](#schemacollectioncreateresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Get the details of audio collections

<a id="opIdgetTrackCollection"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/48433107 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/audio/collections/{id}`

This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.

<h3 id="get-the-details-of-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|
|share_code|query|string|false|Code to retrieve a shared collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Collection/example"
}
```

<h3 id="get-the-details-of-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Collection](#schemacollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Rename audio collections

<a id="opIdrenameTrackCollection"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/48433107 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Best rock music"
  }'
```

`POST /v2/audio/collections/{id}`

This endpoint sets a new name for a collection.

> Body parameter

```json
{
  "name": "Best rock music"
}
```

<h3 id="rename-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|body|body|[CollectionUpdateRequest](#schemacollectionupdaterequest)|true|Collection changes|
|» name|body|string|true|The new name of the collection|

<h3 id="rename-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Delete audio collections

<a id="opIddeleteTrackCollection"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/48433111 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/audio/collections/{id}`

This endpoint deletes a collection.

<h3 id="delete-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|

<h3 id="delete-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Get the contents of audio collections

<a id="opIdgetTrackCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/126351027/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/audio/collections/{id}/items`

This endpoint lists the IDs of tracks in a collection and the date that each was added.

<h3 id="get-the-contents-of-audio-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|share_code|query|string|false|Code to retrieve the contents of a shared collection|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "added_time": "2016-08-18T18:52:59-04:00",
      "id": "76688182",
      "media_type": "audio"
    },
    {
      "added_time": "2016-08-18T18:52:59-04:00",
      "id": "40005859",
      "media_type": "audio"
    }
  ],
  "page": 1,
  "per_page": 2
}
```

<h3 id="get-the-contents-of-audio-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionItemDataList](#schemacollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Add audio tracks to collections

<a id="opIdaddTrackCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/48433115/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      {
        "id": "442583"
      },
      {
        "id": "7491192"
      }
    ]
  }'
```

`POST /v2/audio/collections/{id}/items`

This endpoint adds one or more tracks to a collection by track IDs.

> Body parameter

```json
{
  "items": [
    {
      "id": "442583"
    },
    {
      "id": "7491192"
    }
  ]
}
```

<h3 id="add-audio-tracks-to-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|body|body|[CollectionItemRequest](#schemacollectionitemrequest)|true|List of items to add to collection|
|» items|body|[[CollectionItem](#schemacollectionitem)]|true|List of items|

<h3 id="add-audio-tracks-to-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully added collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Remove audio tracks from collections

<a id="opIddeleteTrackCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/audio/collections/48433119/items \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/audio/collections/{id}/items`

This endpoint removes one or more tracks from a collection.

<h3 id="remove-audio-tracks-from-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|item_id|query|[string]|false|One or more item IDs to remove from the collection|

<h3 id="remove-audio-tracks-from-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## List audio genres

<a id="opIdlistGenres"></a>

> Code samples

```bash
curl https://example.com/v2/audio/genres \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio/genres`

This endpoint returns a list of all audio genres.

<h3 id="list-audio-genres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|Which language the genres will be returned|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/GenreList/example"
}
```

<h3 id="list-audio-genres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GenreList](#schemagenrelist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List audio instruments

<a id="opIdlistInstruments"></a>

> Code samples

```bash
curl https://example.com/v2/audio/instruments \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio/instruments`

This endpoint returns a list of all audio instruments.

<h3 id="list-audio-instruments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|Which language the instruments will be returned in|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/InstrumentList/example"
}
```

<h3 id="list-audio-instruments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InstrumentList](#schemainstrumentlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List audio licenses

<a id="opIdgetTrackLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/audio/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/audio/licenses`

This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.

<h3 id="list-audio-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|audio_id|query|string|false|Show licenses for the specified track ID|
|license|query|string|false|Restrict results by license. Prepending a `-` sign will exclude results by license|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "audio": {
        "format": {
          "size": "clean_audio"
        },
        "id": "420298"
      },
      "download_time": "2020-11-11T16:15:20.000Z",
      "id": "a10b7a7a5a02113a928f13e5ba196151d6",
      "is_downloadable": true,
      "license": "premier_music_extended",
      "metadata": {
        "purchase_order": "123"
      },
      "user": {
        "username": "jsmith"
      }
    }
  ],
  "page": 1,
  "per_page": 20,
  "total_count": 1
}
```

<h3 id="list-audio-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License audio tracks

<a id="opIdlicenseTrack"></a>

> Code samples

```bash
curl https://example.com/v2/audio/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseAudioRequest/example"
  }'
```

`POST /v2/audio/licenses`

This endpoint gets licenses for one or more tracks. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseAudioRequest/example"
}
```

<h3 id="license-audio-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|license|query|string|false|License type|
|search_id|query|string|false|The ID of the search that led to licensing this track|
|body|body|[LicenseAudioRequest](#schemalicenseaudiorequest)|true|Tracks to license|
|» audio|body|[[LicenseAudio](#schemalicenseaudio)]|true|List of audio tracks to license|

#### Enumerated Values

|Parameter|Value|
|---|---|
|license|audio_platform|
|license|premier_music_basic|
|license|premier_music_extended|
|license|premier_music_pro|
|license|premier_music_comp|
|license|asset_all_music|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/LicenseAudioResultDataList/example"
}
```

<h3 id="license-audio-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseAudioResultDataList](#schemalicenseaudioresultdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create )
</aside>

## Download audio tracks

<a id="opIddownloadTracks"></a>

> Code samples

```bash
curl https://example.com/v2/audio/licenses/e123/downloads \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/audio/licenses/{id}/downloads`

This endpoint redownloads tracks that you have already received a license for. The download links in the response are valid for 8 hours.

<h3 id="download-audio-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|License ID|

> Example responses

> 200 Response

```json
{
  "shorts_loops_stems": "http://download2.dev.shutterstock.com/gatekeeper/abc/original.zip",
  "url": "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
}
```

<h3 id="download-audio-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AudioUrl](#schemaaudiourl)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## List audio moods

<a id="opIdlistMoods"></a>

> Code samples

```bash
curl https://example.com/v2/audio/moods \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio/moods`

This endpoint returns a list of all audio moods.

<h3 id="list-audio-moods-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|string|false|Which language the moods will be returned in|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/MoodList/example"
}
```

<h3 id="list-audio-moods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[MoodList](#schemamoodlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Search for tracks

<a id="opIdsearchTracks"></a>

> Code samples

```bash
curl https://example.com/v2/audio/search \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio/search`

This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.

<h3 id="search-for-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|artists|query|[string]|false|Show tracks with one of the specified artist names or IDs|
|bpm|query|integer|false|**Deprecated.** (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute|
|bpm_from|query|integer|false|Show tracks with the specified beats per minute or faster|
|bpm_to|query|integer|false|Show tracks with the specified beats per minute or slower|
|duration|query|integer|false|Show tracks with the specified duration in seconds|
|duration_from|query|integer|false|Show tracks with the specified duration or longer in seconds|
|duration_to|query|integer|false|Show tracks with the specified duration or shorter in seconds|
|genre|query|[string]|false|Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`|
|is_instrumental|query|boolean|false|Show instrumental music only|
|instruments|query|[string]|false|Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`|
|moods|query|[string]|false|Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|query|query|string|false|One or more search terms separated by spaces|
|sort|query|string|false|Sort by|
|sort_order|query|string|false|Sort order|
|vocal_description|query|string|false|Show tracks with the specified vocal description (male, female)|
|view|query|string|false|Amount of detail to render in the response|
|fields|query|string|false|Fields to display in the response; see the documentation for the fields parameter in the overview section|
|library|query|string|false|Which library to search|
|language|query|string|false|Which language to search in|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|score|
|sort|ranking_all|
|sort|artist|
|sort|title|
|sort|bpm|
|sort|freshness|
|sort|duration|
|sort_order|asc|
|sort_order|desc|
|view|minimal|
|view|full|
|library|shutterstock|
|library|premier|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/AudioSearchResults/example"
}
```

<h3 id="search-for-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AudioSearchResults](#schemaaudiosearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get details about audio tracks

<a id="opIdgetTrack"></a>

> Code samples

```bash
curl https://example.com/v2/audio/442583 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/audio/{id}`

This endpoint shows information about a track, including its genres, instruments, and other attributes.

<h3 id="get-details-about-audio-tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Audio track ID|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Audio/example"
}
```

<h3 id="get-details-about-audio-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Audio](#schemaaudio)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-images">images</h1>

## Run multiple image searches

<a id="opIdbulkSearchImages"></a>

> Code samples

```bash
curl https://example.com/v2/bulk_search/images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/BulkImageSearchRequest/example"
  }'
```

`POST /v2/bulk_search/images`

This endpoint runs up to 5 image searches in a single request and returns up to 20 results per search. You can provide global search parameters in the query parameters and override them for each search in the body parameter. The query and body parameters are the same as in the `GET /v2/images/search` endpoint.

> Body parameter

```json
{
  "$ref": "#/components/schemas/BulkImageSearchRequest/example"
}
```

<h3 id="run-multiple-image-searches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|added_date|query|string(date)|false|Show images added on the specified date|
|added_date_start|query|string(date)|false|Show images added on or after the specified date|
|aspect_ratio_min|query|number|false|Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio_max|query|number|false|Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio|query|number|false|Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|added_date_end|query|string(date)|false|Show images added before the specified date|
|category|query|string|false|Show images with the specified Shutterstock-defined category; specify a category name or ID|
|color|query|string|false|Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors|
|contributor|query|[string]|false|Show images with the specified contributor names or IDs, allows multiple|
|contributor_country|query|[string(country-code-2)] \| [string(negated-country-code-2)]|false|Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search|
|fields|query|string|false|Fields to display in the response; see the documentation for the fields parameter in the overview section|
|height|query|integer|false|**Deprecated.** (Deprecated; use height_from and height_to instead) Show images with the specified height|
|height_from|query|integer|false|Show images with the specified height or larger, in pixels|
|height_to|query|integer|false|Show images with the specified height or smaller, in pixels|
|image_type|query|[string]|false|Show images of the specified type|
|keyword_safe_search|query|boolean|false|Hide results with potentially unsafe keywords|
|language|query|[Language](#schemalanguage)|false|Set query and result language (uses Accept-Language header if not set)|
|license|query|[string]|false|Show only images with the specified license|
|model|query|[string]|false|Show image results with the specified model IDs|
|orientation|query|string|false|Show image results with horizontal or vertical orientation|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|people_model_released|query|boolean|false|Show images of people with a signed model release|
|people_age|query|string|false|Show images that feature people of the specified age category|
|people_ethnicity|query|[string]|false|Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities|
|people_gender|query|string|false|Show images with people of the specified gender|
|people_number|query|integer|false|Show images with the specified number of people|
|region|query|string(country-code-2) \| string(ipv4)|false|Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country|
|safe|query|boolean|false|Enable or disable safe search|
|sort|query|string|false|Sort by|
|spellcheck_query|query|boolean|false|Spellcheck the search query and return results on suggested spellings|
|view|query|string|false|Amount of detail to render in the response|
|width|query|integer|false|**Deprecated.** (Deprecated; use width_from and width_to instead) Show images with the specified width|
|width_from|query|integer|false|Show images with the specified width or larger, in pixels|
|width_to|query|integer|false|Show images with the specified width or smaller, in pixels|
|body|body|[BulkImageSearchRequest](#schemabulkimagesearchrequest)|true|List of queries to request results for and filters to apply per query; these values override the defaults in the query parameters|

#### Enumerated Values

|Parameter|Value|
|---|---|
|image_type|photo|
|image_type|illustration|
|image_type|vector|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|license|commercial|
|license|editorial|
|license|enhanced|
|orientation|horizontal|
|orientation|vertical|
|people_age|infants|
|people_age|children|
|people_age|teenagers|
|people_age|20s|
|people_age|30s|
|people_age|40s|
|people_age|50s|
|people_age|60s|
|people_age|older|
|people_ethnicity|african|
|people_ethnicity|african_american|
|people_ethnicity|black|
|people_ethnicity|brazilian|
|people_ethnicity|chinese|
|people_ethnicity|caucasian|
|people_ethnicity|east_asian|
|people_ethnicity|hispanic|
|people_ethnicity|japanese|
|people_ethnicity|middle_eastern|
|people_ethnicity|native_american|
|people_ethnicity|pacific_islander|
|people_ethnicity|south_asian|
|people_ethnicity|southeast_asian|
|people_ethnicity|other|
|people_ethnicity|NOT african|
|people_ethnicity|NOT african_american|
|people_ethnicity|NOT black|
|people_ethnicity|NOT brazilian|
|people_ethnicity|NOT chinese|
|people_ethnicity|NOT caucasian|
|people_ethnicity|NOT east_asian|
|people_ethnicity|NOT hispanic|
|people_ethnicity|NOT japanese|
|people_ethnicity|NOT middle_eastern|
|people_ethnicity|NOT native_american|
|people_ethnicity|NOT pacific_islander|
|people_ethnicity|NOT south_asian|
|people_ethnicity|NOT southeast_asian|
|people_ethnicity|NOT other|
|people_gender|male|
|people_gender|female|
|people_gender|both|
|sort|newest|
|sort|popular|
|sort|relevance|
|sort|random|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/BulkImageSearchResults/example"
}
```

<h3 id="run-multiple-image-searches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BulkImageSearchResults](#schemabulkimagesearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List images

<a id="opIdgetImageList"></a>

> Code samples

```bash
curl 'https://example.com/v2/images?id=1110335168&id=465011609' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images`

This endpoint lists information about one or more images, including the available sizes.

<h3 id="list-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string(asset-id)]|true|One or more image IDs|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ImageDataList/example"
}
```

<h3 id="list-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageDataList](#schemaimagedatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List image categories

<a id="opIdlistImageCategories"></a>

> Code samples

```bash
curl https://example.com/v2/images/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/categories`

This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.

<h3 id="list-image-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CategoryDataList/example"
}
```

<h3 id="list-image-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategoryDataList](#schemacategorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List image collections

<a id="opIdgetImageCollectionList"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/images/collections`

This endpoint lists your collections of images and their basic attributes.

<h3 id="list-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionDataList/example"
}
```

<h3 id="list-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDataList](#schemacollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Create image collections

<a id="opIdcreateImageCollection"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CollectionCreateRequest/example"
  }'
```

`POST /v2/images/collections`

This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CollectionCreateRequest/example"
}
```

<h3 id="create-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreateRequest](#schemacollectioncreaterequest)|true|The names of the new collections|
|» name|body|string|true|The name of the collection|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/CollectionCreateResponse/example"
}
```

<h3 id="create-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created image collection|[CollectionCreateResponse](#schemacollectioncreateresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## List featured image collections

<a id="opIdgetFeaturedImageCollectionList"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/featured \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/collections/featured`

This endpoint lists featured collections of specific types and a name and cover image for each collection.

<h3 id="list-featured-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|Which sharing information to include in the response, such as a URL to the collection|
|type|query|[string]|false|The types of collections to return|
|asset_hint|query|string|false|Cover image size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_url|
|type|photo|
|type|editorial|
|type|vector|
|asset_hint|1x|
|asset_hint|2x|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/FeaturedCollectionDataList/example"
}
```

<h3 id="list-featured-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FeaturedCollectionDataList](#schemafeaturedcollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the details of featured image collections

<a id="opIdgetFeaturedImageCollection"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/featured/136351027 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/collections/featured/{id}`

This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.

<h3 id="get-the-details-of-featured-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|embed|query|string|false|Which sharing information to include in the response, such as a URL to the collection|
|asset_hint|query|string|false|Cover image size|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_url|
|asset_hint|1x|
|asset_hint|2x|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/FeaturedCollection/example"
}
```

<h3 id="get-the-details-of-featured-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FeaturedCollection](#schemafeaturedcollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Featured collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the contents of featured image collections

<a id="opIdgetFeaturedImageCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/featured/136351027/items \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/collections/featured/{id}/items`

This endpoint lists the IDs of images in a featured collection and the date that each was added.

<h3 id="get-the-contents-of-featured-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionItemDataList/example"
}
```

<h3 id="get-the-contents-of-featured-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionItemDataList](#schemacollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Featured collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the details of image collections

<a id="opIdgetImageCollection"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/126351027 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/images/collections/{id}`

This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.

<h3 id="get-the-details-of-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|
|share_code|query|string|false|Code to retrieve a shared collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Collection/example"
}
```

<h3 id="get-the-details-of-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Collection](#schemacollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Rename image collections

<a id="opIdrenameImageCollection"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/126351027 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CollectionUpdateRequest/example"
  }'
```

`POST /v2/images/collections/{id}`

This endpoint sets a new name for an image collection.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CollectionUpdateRequest/example"
}
```

<h3 id="rename-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|body|body|[CollectionUpdateRequest](#schemacollectionupdaterequest)|true|The new name for the collection|
|» name|body|string|true|The new name of the collection|

<h3 id="rename-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Delete image collections

<a id="opIddeleteImageCollection"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/136351027 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/images/collections/{id}`

This endpoint deletes an image collection.

<h3 id="delete-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|

<h3 id="delete-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Get the contents of image collections

<a id="opIdgetImageCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/126351027/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/images/collections/{id}/items`

This endpoint lists the IDs of images in a collection and the date that each was added.

<h3 id="get-the-contents-of-image-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|share_code|query|string|false|Code to retrieve the contents of a shared collection|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionItemDataList/example"
}
```

<h3 id="get-the-contents-of-image-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionItemDataList](#schemacollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Add images to collections

<a id="opIdaddImageCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/126351027/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      {
        "id": "49572945"
      }
    ]
  }'
```

`POST /v2/images/collections/{id}/items`

This endpoint adds one or more images to a collection by image IDs.

> Body parameter

```json
{
  "items": [
    {
      "id": "49572945"
    }
  ]
}
```

<h3 id="add-images-to-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|body|body|[CollectionItemRequest](#schemacollectionitemrequest)|true|Array of image IDs to add to the collection|
|» items|body|[[CollectionItem](#schemacollectionitem)]|true|List of items|

<h3 id="add-images-to-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully added collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Remove images from collections

<a id="opIddeleteImageCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/images/collections/126351027/items \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/images/collections/{id}/items`

This endpoint removes one or more images from a collection.

<h3 id="remove-images-from-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|item_id|query|[string]|false|One or more image IDs to remove from the collection|

<h3 id="remove-images-from-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## List image licenses

<a id="opIdgetImageLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/images/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/images/licenses`

This endpoint lists existing licenses.

<h3 id="list-image-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|image_id|query|string|false|Show licenses for the specified image ID|
|license|query|string|false|Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/DownloadHistoryDataList/example"
}
```

<h3 id="list-image-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License images

<a id="opIdlicenseImages"></a>

> Code samples

```bash
curl https://example.com/v2/images/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseImageRequest/example"
  }'
```

`POST /v2/images/licenses`

This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseImageRequest/example"
}
```

<h3 id="license-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscription_id|query|string|false|Subscription ID to use to license the image|
|format|query|string|false|**Deprecated.** (Deprecated) Image format|
|size|query|string|false|Image size|
|search_id|query|string|false|Search ID that was provided in the results of an image search|
|body|body|[LicenseImageRequest](#schemalicenseimagerequest)|true|List of images to request licenses for and information about each license transaction; these values override the defaults in the query parameters|
|» images|body|[[LicenseImage](#schemalicenseimage) \| [LicenseImageVector](#schemalicenseimagevector)]|true|Images to create licenses for|
|» » *anyOf*|body|[LicenseImage](#schemalicenseimage)|false|Data required to license an image|
|» » *anyOf*|body|[LicenseImageVector](#schemalicenseimagevector)|false|Data required to license an image|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|eps|
|format|jpg|
|size|small|
|size|medium|
|size|huge|
|size|vector|
|size|custom|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/LicenseImageResultDataList/example"
}
```

<h3 id="license-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseImageResultDataList](#schemalicenseimageresultdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create purchases.view )
</aside>

## Download images

<a id="opIddownloadImage"></a>

> Code samples

```bash
curl https://example.com/v2/images/licenses/e123/downloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/RedownloadImage/example"
  }'
```

`POST /v2/images/licenses/{id}/downloads`

This endpoint redownloads images that you have already received a license for. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/RedownloadImage/example"
}
```

<h3 id="download-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|License ID|
|body|body|[RedownloadImage](#schemaredownloadimage)|true|Information about the images to redownload|
|» auth_cookie|body|[Cookie](#schemacookie)|false|**Deprecated.** (Deprecated)|
|» show_modal|body|boolean|false|**Deprecated.** (Deprecated)|
|» size|body|string|false|Size of the image|
|» verification_code|body|string|false|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» size|small|
|» size|medium|
|» size|huge|
|» size|supersize|
|» size|vector|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Url/example"
}
```

<h3 id="download-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Url](#schemaurl)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## List recommended images

<a id="opIdgetImageRecommendations"></a>

> Code samples

```bash
curl 'https://example.com/v2/images/recommendations?id=465011609' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/recommendations`

This endpoint returns images that customers put in the same collection as the specified image IDs.

<h3 id="list-recommended-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|Image IDs|
|max_items|query|integer|false|Maximum number of results returned in the response|
|safe|query|boolean|false|Restrict results to safe images|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/RecommendationDataList/example"
}
```

<h3 id="list-recommended-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[RecommendationDataList](#schemarecommendationdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Search for images

<a id="opIdsearchImages"></a>

> Code samples

```bash
curl https://example.com/v2/images/search \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/search`

This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.

<h3 id="search-for-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|added_date|query|string(date)|false|Show images added on the specified date|
|added_date_start|query|string(date)|false|Show images added on or after the specified date|
|aspect_ratio_min|query|number|false|Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio_max|query|number|false|Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio|query|number|false|Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|ai_search|query|boolean|false|Set to true and specify the `ai_objective` and `ai_industry` parameters to use AI-powered search; the API returns information about how well images meet the objective for the industry |
|ai_labels_limit|query|integer|false|For AI-powered search, specify the maximum number of labels to return|
|ai_industry|query|string|false|For AI-powered search, specify the industry to target; requires that the `ai_search` parameter is set to true|
|ai_objective|query|string|false|For AI-powered search, specify the goal of the media; requires that the `ai_search` parameter is set to true|
|added_date_end|query|string(date)|false|Show images added before the specified date|
|category|query|string|false|Show images with the specified Shutterstock-defined category; specify a category name or ID|
|color|query|string|false|Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors|
|contributor|query|[string]|false|Show images with the specified contributor names or IDs, allows multiple|
|contributor_country|query|[string(country-code-2)] \| [string(negated-country-code-2)]|false|Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search|
|fields|query|string|false|Fields to display in the response; see the documentation for the fields parameter in the overview section|
|height|query|integer|false|**Deprecated.** (Deprecated; use height_from and height_to instead) Show images with the specified height|
|height_from|query|integer|false|Show images with the specified height or larger, in pixels|
|height_to|query|integer|false|Show images with the specified height or smaller, in pixels|
|image_type|query|[string]|false|Show images of the specified type|
|keyword_safe_search|query|boolean|false|Hide results with potentially unsafe keywords|
|language|query|[Language](#schemalanguage)|false|Set query and result language (uses Accept-Language header if not set)|
|license|query|[string]|false|Show only images with the specified license|
|model|query|[string]|false|Show image results with the specified model IDs|
|orientation|query|string|false|Show image results with horizontal or vertical orientation|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|people_model_released|query|boolean|false|Show images of people with a signed model release|
|people_age|query|string|false|Show images that feature people of the specified age category|
|people_ethnicity|query|[string]|false|Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities|
|people_gender|query|string|false|Show images with people of the specified gender|
|people_number|query|integer|false|Show images with the specified number of people|
|query|query|string|false|One or more search terms separated by spaces; you can use NOT to filter out images that match a term|
|region|query|string(country-code-2) \| string(ipv4)|false|Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country|
|safe|query|boolean|false|Enable or disable safe search|
|sort|query|string|false|Sort by|
|spellcheck_query|query|boolean|false|Spellcheck the search query and return results on suggested spellings|
|view|query|string|false|Amount of detail to render in the response|
|width|query|integer|false|**Deprecated.** (Deprecated; use width_from and width_to instead) Show images with the specified width|
|width_from|query|integer|false|Show images with the specified width or larger, in pixels|
|width_to|query|integer|false|Show images with the specified width or smaller, in pixels|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ai_industry|automotive|
|ai_industry|cpg|
|ai_industry|finance|
|ai_industry|healthcare|
|ai_industry|retail|
|ai_industry|technology|
|ai_objective|awareness|
|ai_objective|traffic|
|ai_objective|conversions|
|image_type|photo|
|image_type|illustration|
|image_type|vector|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|license|commercial|
|license|editorial|
|license|enhanced|
|orientation|horizontal|
|orientation|vertical|
|people_age|infants|
|people_age|children|
|people_age|teenagers|
|people_age|20s|
|people_age|30s|
|people_age|40s|
|people_age|50s|
|people_age|60s|
|people_age|older|
|people_ethnicity|african|
|people_ethnicity|african_american|
|people_ethnicity|black|
|people_ethnicity|brazilian|
|people_ethnicity|chinese|
|people_ethnicity|caucasian|
|people_ethnicity|east_asian|
|people_ethnicity|hispanic|
|people_ethnicity|japanese|
|people_ethnicity|middle_eastern|
|people_ethnicity|native_american|
|people_ethnicity|pacific_islander|
|people_ethnicity|south_asian|
|people_ethnicity|southeast_asian|
|people_ethnicity|other|
|people_ethnicity|NOT african|
|people_ethnicity|NOT african_american|
|people_ethnicity|NOT black|
|people_ethnicity|NOT brazilian|
|people_ethnicity|NOT chinese|
|people_ethnicity|NOT caucasian|
|people_ethnicity|NOT east_asian|
|people_ethnicity|NOT hispanic|
|people_ethnicity|NOT japanese|
|people_ethnicity|NOT middle_eastern|
|people_ethnicity|NOT native_american|
|people_ethnicity|NOT pacific_islander|
|people_ethnicity|NOT south_asian|
|people_ethnicity|NOT southeast_asian|
|people_ethnicity|NOT other|
|people_gender|male|
|people_gender|female|
|people_gender|both|
|sort|newest|
|sort|popular|
|sort|relevance|
|sort|random|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ImageSearchResults/example"
}
```

<h3 id="search-for-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchResults](#schemaimagesearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get suggestions for a search term

<a id="opIdgetImageSuggestions"></a>

> Code samples

```bash
curl 'https://example.com/v2/images/search/suggestions?query=cats' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/search/suggestions`

This endpoint provides autocomplete suggestions for partial search terms.

<h3 id="get-suggestions-for-a-search-term-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search term for which you want keyword suggestions|
|limit|query|integer|false|Limit the number of suggestions|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Suggestions/example"
}
```

<h3 id="get-suggestions-for-a-search-term-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Suggestions](#schemasuggestions)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get keywords from text

<a id="opIdgetImageKeywordSuggestions"></a>

> Code samples

```bash
curl https://example.com/v2/images/search/suggestions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/SearchEntitiesRequest/example"
  }'
```

`POST /v2/images/search/suggestions`

This endpoint returns up to 10 important keywords from a block of plain text.

> Body parameter

```json
{
  "$ref": "#/components/schemas/SearchEntitiesRequest/example"
}
```

<h3 id="get-keywords-from-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchEntitiesRequest](#schemasearchentitiesrequest)|true|Plain text to extract keywords from|
|» text|body|string|true|Plain text to extract keywords from|

> Example responses

> 200 Response

```json
{
  "data": [
    "beach",
    "place",
    "sand",
    "ocean"
  ]
}
```

<h3 id="get-keywords-from-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SearchEntitiesResponse](#schemasearchentitiesresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List updated images

<a id="opIdgetUpdatedImages"></a>

> Code samples

```bash
curl https://example.com/v2/images/updated \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/updated`

This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

<h3 id="list-updated-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[string]|false|Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways|
|start_date|query|string(date)|false|Show images updated on or after the specified date|
|end_date|query|string(date)|false|Show images updated before the specified date|
|interval|query|string|false|Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|addition|
|type|deletion|
|type|edit|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/UpdatedMediaDataList/example"
}
```

<h3 id="list-updated-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdatedMediaDataList](#schemaupdatedmediadatalist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get details about images

<a id="opIdgetImage"></a>

> Code samples

```bash
curl https://example.com/v2/images/465011609 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/{id}`

This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.

<h3 id="get-details-about-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(asset-id)|true|Image ID|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Image/example"
}
```

<h3 id="get-details-about-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Image](#schemaimage)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List similar images

<a id="opIdlistSimilarImages"></a>

> Code samples

```bash
curl https://example.com/v2/images/465011609/similar \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/images/{id}/similar`

This endpoint returns images that are visually similar to an image that you specify.

<h3 id="list-similar-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Image ID|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|view|query|string|false|Amount of detail to render in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ImageSearchResults/example"
}
```

<h3 id="list-similar-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchResults](#schemaimagesearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-catalog">catalog</h1>

## List catalog collections

<a id="opIdgetCollections"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/catalog/collections`

This endpoint returns a list of catalog collections.

<h3 id="list-catalog-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort by|
|shared|query|boolean|false|Set to true to omit collections that you own and return only collections  that are shared with you|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollectionDataList/example"
}
```

<h3 id="list-catalog-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CatalogCollectionDataList](#schemacatalogcollectiondatalist)|
|400|Bad Request|Invalid status value|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Create catalog collections

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CreateCatalogCollection/example"
  }'
```

`POST /v2/catalog/collections`

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CreateCatalogCollection/example"
}
```

<h3 id="create-catalog-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateCatalogCollection](#schemacreatecatalogcollection)|true|Create a catalog collection and, optionally, add items.|
|» items|body|[[CreateCatalogCollectionItem](#schemacreatecatalogcollectionitem)]|false|none|
|» name|body|string|true|none|
|» visibility|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|private|
|» visibility|public|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollection/example"
}
```

<h3 id="create-catalog-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[CatalogCollection](#schemacatalogcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view collections.edit )
</aside>

## Delete catalog collections

<a id="opIddeleteCollection"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections/126351028 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/catalog/collections/{collection_id}`

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

<h3 id="delete-catalog-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|The ID of the collection to delete|

<h3 id="delete-catalog-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|OK|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Update collection metadata

<a id="opIdupdateCollection"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections/126351028 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/UpdateCatalogCollection/example"
  }'
```

`PATCH /v2/catalog/collections/{collection_id}`

This endpoint updates the metadata of a catalog collection.

> Body parameter

```json
{
  "$ref": "#/components/schemas/UpdateCatalogCollection/example"
}
```

<h3 id="update-collection-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|ID of collection that needs to be modified|
|body|body|[UpdateCatalogCollection](#schemaupdatecatalogcollection)|true|Collections Metadata to update|
|» cover_asset|body|object|false|none|
|» » id|body|string|true|none|
|» name|body|string|false|none|
|» visibility|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» visibility|private|
|» visibility|public|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollection/example"
}
```

<h3 id="update-collection-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CatalogCollection](#schemacatalogcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view collections.edit )
</aside>

## Add items to catalog collections

<a id="opIdaddToCollection"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections/126351028/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CreateCatalogCollectionItems/example"
  }'
```

`POST /v2/catalog/collections/{collection_id}/items`

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CreateCatalogCollectionItems/example"
}
```

<h3 id="add-items-to-catalog-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|The ID of the collection to add assets to|
|body|body|[CreateCatalogCollectionItems](#schemacreatecatalogcollectionitems)|true|Collection item attributes to add to collection|
|» items|body|[[CreateCatalogCollectionItem](#schemacreatecatalogcollectionitem)]|true|none|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollection/example"
}
```

<h3 id="add-items-to-catalog-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CatalogCollection](#schemacatalogcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view collections.edit )
</aside>

## Remove items from catalog collection

<a id="opIddeleteFromCollection"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/collections/126351028/items \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/RemoveCatalogCollectionItems/example"
  }'
```

`DELETE /v2/catalog/collections/{collection_id}/items`

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

> Body parameter

```json
{
  "$ref": "#/components/schemas/RemoveCatalogCollectionItems/example"
}
```

<h3 id="remove-items-from-catalog-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection_id|path|string|true|The ID of the collection to remove assets from|
|body|body|[RemoveCatalogCollectionItems](#schemaremovecatalogcollectionitems)|true|Items to remove from the collection|
|» items|body|[[RemoveCatalogCollectionItem](#schemaremovecatalogcollectionitem)]|true|none|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollection/example"
}
```

<h3 id="remove-items-from-catalog-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CatalogCollection](#schemacatalogcollection)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view collections.edit )
</aside>

## Search catalogs for assets

<a id="opIdsearchCatalog"></a>

> Code samples

```bash
curl https://example.com/v2/catalog/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/catalog/search`

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

<h3 id="search-catalogs-for-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sort by|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|query|query|string|false|One or more search terms separated by spaces|
|collection_id|query|[string]|false|Filter by collection id|
|asset_type|query|[string]|false|Filter by asset type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|asset_type|image|
|asset_type|video|
|asset_type|audio|
|asset_type|elements|
|asset_type|editorial-image|
|asset_type|editorial-video|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CatalogCollectionItemDataList/example"
}
```

<h3 id="search-catalogs-for-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CatalogCollectionItemDataList](#schemacatalogcollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

<h1 id="shutterstock-api-explorer-contributors">contributors</h1>

## Get details about multiple contributors

<a id="opIdgetContributorList"></a>

> Code samples

```bash
curl 'https://example.com/v2/contributors?id=800506&id=1653538' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/contributors`

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

<h3 id="get-details-about-multiple-contributors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|One or more contributor IDs|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ContributorProfileDataList/example"
}
```

<h3 id="get-details-about-multiple-contributors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContributorProfileDataList](#schemacontributorprofiledatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode, basic
</aside>

## Get details about a single contributor

<a id="opIdgetContributor"></a>

> Code samples

```bash
curl https://example.com/v2/contributors/1653538 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/contributors/{contributor_id}`

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

<h3 id="get-details-about-a-single-contributor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contributor_id|path|string|true|Contributor ID|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ContributorProfile/example"
}
```

<h3 id="get-details-about-a-single-contributor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ContributorProfile](#schemacontributorprofile)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode, basic
</aside>

## List contributors' collections

<a id="opIdgetContributorCollectionsList"></a>

> Code samples

```bash
curl https://example.com/v2/contributors/800506/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/contributors/{contributor_id}/collections`

This endpoint lists collections based on contributor ID.

<h3 id="list-contributors-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contributor_id|path|string|true|Contributor ID|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|last_updated|
|sort|item_count|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionDataList/example"
}
```

<h3 id="list-contributors-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDataList](#schemacollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Contributor not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode, basic
</aside>

## Get details about contributors' collections

<a id="opIdgetContributorCollections"></a>

> Code samples

```bash
curl https://example.com/v2/contributors/800506/collections/1991678 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/contributors/{contributor_id}/collections/{id}`

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

<h3 id="get-details-about-contributors-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contributor_id|path|string|true|Contributor ID|
|id|path|string|true|Collection ID that belongs to the contributor|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Collection/example"
}
```

<h3 id="get-details-about-contributors-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Collection](#schemacollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Set not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode, basic
</aside>

## Get the items in contributors' collections

<a id="opIdgetContributorCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/contributors/800506/collections/1991678/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/contributors/{contributor_id}/collections/{id}/items`

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

<h3 id="get-the-items-in-contributors-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|contributor_id|path|string|true|Contributor ID|
|id|path|string|true|Collection ID that belongs to the contributor|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "added_time": "2014-05-01T05:49:46-04:00",
      "id": "168592952",
      "media_type": "image"
    },
    {
      "added_time": "2014-05-01T05:49:59-04:00",
      "id": "88269310",
      "media_type": "image"
    },
    {
      "added_time": "2014-05-01T05:50:21-04:00",
      "id": "94373977",
      "media_type": "image"
    }
  ]
}
```

<h3 id="get-the-items-in-contributors-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionItemDataList](#schemacollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Set not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode, basic
</aside>

<h1 id="shutterstock-api-explorer-computervision">computer_vision</h1>

## Upload images

<a id="opIduploadImage"></a>

> Code samples

```bash
curl https://example.com/v2/cv/images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/ImageCreateRequest/example"
  }'
```

`POST /v2/cv/images`

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

> Body parameter

```json
{
  "$ref": "#/components/schemas/ImageCreateRequest/example"
}
```

<h3 id="upload-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageCreateRequest](#schemaimagecreaterequest)|true|A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height|
|» base64_image|body|string|true|A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/ComputerVisionImageCreateResponse/example"
}
```

<h3 id="upload-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ComputerVisionImageCreateResponse](#schemacomputervisionimagecreateresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|413|Payload Too Large|Payload Too Large|None|
|415|Unsupported Media Type|Unsupported Media Type|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List suggested keywords

<a id="opIdgetKeywords"></a>

> Code samples

```bash
curl 'https://example.com/v2/cv/keywords?asset_id=U6ba16262e3bc2db470b8e3cfa8aaab25' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/cv/keywords`

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

<h3 id="list-suggested-keywords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|query|string(asset-upload-id) \| string(asset-id)|true|The asset ID or upload ID to suggest keywords for|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/KeywordDataList/example"
}
```

<h3 id="list-suggested-keywords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[KeywordDataList](#schemakeyworddatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|415|Unsupported Media Type|Unsupported Media Type|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List similar images

<a id="opIdgetSimilarImages"></a>

> Code samples

```bash
curl 'https://example.com/v2/cv/similar/images?asset_id=U6ba16262e3bc2db470b8e3cfa8aaab25' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/cv/similar/images`

This endpoint returns images that are visually similar to an image that you specify or upload.

<h3 id="list-similar-images-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|query|string|true|The asset ID or upload ID to find similar images for|
|license|query|[string]|false|Show only images with the specified license|
|safe|query|boolean|false|Enable or disable safe search|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|view|query|string|false|Amount of detail to render in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|license|commercial|
|license|editorial|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/ImageSearchResults/example"
}
```

<h3 id="list-similar-images-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchResults](#schemaimagesearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List similar videos

<a id="opIdgetSimilarVideos"></a>

> Code samples

```bash
curl 'https://example.com/v2/cv/similar/videos?asset_id=U6ba16262e3bc2db470b8e3cfa8aaab25' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/cv/similar/videos`

This endpoint returns videos that are visually similar to an image that you specify or upload.

<h3 id="list-similar-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|asset_id|query|string|true|The asset ID or upload ID to find similar videos for|
|license|query|[string]|false|Show only videos with the specified license|
|safe|query|boolean|false|Enable or disable safe search|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|view|query|string|false|Amount of detail to render in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|license|commercial|
|license|editorial|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/VideoSearchResults/example"
}
```

<h3 id="list-similar-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoSearchResults](#schemavideosearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Upload ephemeral images

<a id="opIduploadEphemeralImage"></a>

> Code samples

```bash
curl https://example.com/v2/images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/ImageCreateRequest/example"
  }'
```

`POST /v2/images`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

> Body parameter

```json
{
  "$ref": "#/components/schemas/ImageCreateRequest/example"
}
```

<h3 id="upload-ephemeral-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageCreateRequest](#schemaimagecreaterequest)|true|The image data in JPEG or PNG format|
|» base64_image|body|string|true|A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/ImageCreateResponse/example"
}
```

<h3 id="upload-ephemeral-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ImageCreateResponse](#schemaimagecreateresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|413|Payload Too Large|Payload Too Large|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-editorialimages">editorial_images</h1>

## (Deprecated) List editorial categories

<a id="opIdgetEditorialCategories"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/categories`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/categories` instead. This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialCategoryResults/example"
}
```

<h3 id="deprecated-list-editorial-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialCategoryResults](#schemaeditorialcategoryresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List editorial categories

<a id="opIdlistEditorialImageCategories"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/images/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/categories`

This endpoint lists the categories that editorial images can belong to, which are separate from the categories that other types of assets can belong to.

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialImageCategoryResults/example"
}
```

<h3 id="list-editorial-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialImageCategoryResults](#schemaeditorialimagecategoryresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List editorial image licenses

<a id="opIdgetEditorialImageLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/images/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/editorial/images/licenses`

This endpoint lists existing editorial image licenses.

<h3 id="list-editorial-image-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|image_id|query|string|false|Show licenses for the specified editorial image ID|
|license|query|string|false|Show editorial images that are available with the specified license name|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/DownloadHistoryDataList/example"
}
```

<h3 id="list-editorial-image-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License editorial content

<a id="opIdlicenseEditorialImages"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/images/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseEditorialContentRequest/example"
  }'
```

`POST /v2/editorial/images/licenses`

This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseEditorialContentRequest/example"
}
```

<h3 id="license-editorial-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LicenseEditorialContentRequest](#schemalicenseeditorialcontentrequest)|true|License editorial content|
|» country|body|[ISOCountryCode](#schemaisocountrycode)|true|Mandatory country code for where the editorial content will be distributed; this value is used for rights checks|
|» editorial|body|[[LicenseEditorialContent](#schemalicenseeditorialcontent)]|true|Editorial content to license|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/LicenseEditorialContentResults/example"
}
```

<h3 id="license-editorial-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseEditorialContentResults](#schemalicenseeditorialcontentresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create purchases.view )
</aside>

## Get editorial livefeed list

<a id="opIdgetEditorialImageLivefeedList"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/livefeeds?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/livefeeds`

<h3 id="get-editorial-livefeed-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string(country-code-3)|true|Returns only livefeeds that are available for distribution in a certain country|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialImageLivefeedList/example"
}
```

<h3 id="get-editorial-livefeed-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialImageLivefeedList](#schemaeditorialimagelivefeedlist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get editorial livefeed

<a id="opIdgetEditorialImageLivefeed"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/livefeeds/2018%252F10%252F15%252FWomen%2520of%2520the%2520Year%2520Lunch%2520%2526%2520Awards%252C%2520London?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/livefeeds/{id}`

<h3 id="get-editorial-livefeed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial livefeed ID; must be an URI encoded string|
|country|query|string(country-code-3)|true|Returns only if the livefeed is available for distribution in a certain country|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialImageLivefeed/example"
}
```

<h3 id="get-editorial-livefeed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialImageLivefeed](#schemaeditorialimagelivefeed)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get editorial livefeed items

<a id="opIdgetEditorialImageLivefeedItems"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/livefeeds/2018%252F10%252F15%252FWomen%2520of%2520the%2520Year%2520Lunch%2520%2526%2520Awards%252C%2520London/items?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/livefeeds/{id}/items`

<h3 id="get-editorial-livefeed-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial livefeed ID; must be an URI encoded string|
|country|query|string(country-code-3)|true|Returns only if the livefeed items are available for distribution in a certain country|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialImageContentDataList/example"
}
```

<h3 id="get-editorial-livefeed-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialImageContentDataList](#schemaeditorialimagecontentdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Search editorial images

<a id="opIdsearchEditorialImages"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/search?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/search`

This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only images that match the query and are in both the Alone and Performing categories. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

<h3 id="search-editorial-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|One or more search terms separated by spaces|
|sort|query|string|false|Sort by|
|category|query|string|false|Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list|
|country|query|string(country-code-3)|true|Show only editorial content that is available for distribution in a certain country|
|supplier_code|query|[string]|false|Show only editorial content from certain suppliers|
|date_start|query|string(date)|false|Show only editorial content generated on or after a specific date|
|date_end|query|string(date)|false|Show only editorial content generated on or before a specific date|
|per_page|query|integer|false|Number of results per page|
|cursor|query|string|false|The cursor of the page with which to start fetching results; this cursor is returned from previous requests|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|relevant|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialSearchResults/example"
}
```

<h3 id="search-editorial-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialSearchResults](#schemaeditorialsearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List updated content

<a id="opIdgetUpdatedEditorialImages"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/updated?type=edit&date_updated_start=2021-03-29T13%3A25%3A13.521Z&date_updated_end=2021-03-29T13%3A25%3A13.521Z&country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/updated`

This endpoint lists editorial images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the date_updated_start and date_updated_end parameters to specify a range updates based on when the updates happened. You can also use the date_taken_start and date_taken_end parameters to specify a range of updates based on when the image was taken.

<h3 id="list-updated-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted|
|date_updated_start|query|string(date-time)|true|Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.|
|date_updated_end|query|string(date-time)|true|Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.|
|date_taken_start|query|string(date)|false|Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets|
|date_taken_end|query|string(date)|false|Show images that were taken before the specified date|
|cursor|query|string|false|The cursor of the page with which to start fetching results; this cursor is returned from previous requests|
|sort|query|string|false|Sort by|
|supplier_code|query|[string]|false|Show only editorial content from certain suppliers|
|country|query|string(country-code-3)|true|Show only editorial content that is available for distribution in a certain country|
|per_page|query|integer|false|Number of results per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|edit|
|type|addition|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialUpdatedResults/example"
}
```

<h3 id="list-updated-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialUpdatedResults](#schemaeditorialupdatedresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get editorial content details

<a id="opIdgetEditorialImage"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/images/9926131a?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/images/{id}`

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

<h3 id="get-editorial-content-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial ID|
|country|query|string(country-code-3)|true|Returns only if the content is available for distribution in a certain country|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialContent/example"
}
```

<h3 id="get-editorial-content-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialContent](#schemaeditorialcontent)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) License editorial content

<a id="opIdlicenseEditorialImage"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseEditorialContentRequest/example"
  }'
```

`POST /v2/editorial/licenses`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `POST /v2/editorial/images/licenses` instead to get licenses for one or more editorial images. You must specify the country and one or more editorial images to license. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseEditorialContentRequest/example"
}
```

<h3 id="deprecated-license-editorial-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LicenseEditorialContentRequest](#schemalicenseeditorialcontentrequest)|true|License editorial content|
|» country|body|[ISOCountryCode](#schemaisocountrycode)|true|Mandatory country code for where the editorial content will be distributed; this value is used for rights checks|
|» editorial|body|[[LicenseEditorialContent](#schemalicenseeditorialcontent)]|true|Editorial content to license|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "download": {
        "url": "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323"
      },
      "editorial_id": "69656358"
    }
  ]
}
```

<h3 id="deprecated-license-editorial-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseEditorialContentResults](#schemalicenseeditorialcontentresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create )
</aside>

## (Deprecated) Get editorial livefeed list

<a id="opIdgetEditorialLivefeedList"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/livefeeds?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/livefeeds`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/livefeeds` instead to get a list of editorial livefeeds.

<h3 id="deprecated-get-editorial-livefeed-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string(country-code-3)|true|Returns only livefeeds that are available for distribution in a certain country|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialLivefeedList/example"
}
```

<h3 id="deprecated-get-editorial-livefeed-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialLivefeedList](#schemaeditoriallivefeedlist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) Get editorial livefeed

<a id="opIdgetEditorialLivefeed"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/livefeeds/2018%252F10%252F15%252FWomen%2520of%2520the%2520Year%2520Lunch%2520%2526%2520Awards%252C%2520London?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/livefeeds/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated: use `GET /v2/editorial/images/livefeeds/{id}` instead to get an editorial livefeed.

<h3 id="deprecated-get-editorial-livefeed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial livefeed ID; must be an URI encoded string|
|country|query|string(country-code-3)|true|Returns only if the livefeed is available for distribution in a certain country|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialLivefeed/example"
}
```

<h3 id="deprecated-get-editorial-livefeed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialLivefeed](#schemaeditoriallivefeed)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) Get editorial livefeed items

<a id="opIdgetEditorialLivefeedItems"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/livefeeds/2018%252F10%252F15%252FWomen%2520of%2520the%2520Year%2520Lunch%2520%2526%2520Awards%252C%2520London/items?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/livefeeds/{id}/items`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/livefeeds/{id}/items` instead to get editorial livefeed items.

<h3 id="deprecated-get-editorial-livefeed-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial livefeed ID; must be an URI encoded string|
|country|query|string(country-code-3)|true|Returns only if the livefeed items are available for distribution in a certain country|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialContentDataList/example"
}
```

<h3 id="deprecated-get-editorial-livefeed-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialContentDataList](#schemaeditorialcontentdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) Search editorial content

<a id="opIdsearchEditorial"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/search?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/search`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/search` instead to search for editorial images.

<h3 id="deprecated-search-editorial-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|One or more search terms separated by spaces|
|sort|query|string|false|Sort by|
|category|query|string|false|Show editorial content within a certain editorial category; specify by category name|
|country|query|string(country-code-3)|true|Show only editorial content that is available for distribution in a certain country|
|supplier_code|query|[string]|false|Show only editorial content from certain suppliers|
|date_start|query|string(date)|false|Show only editorial content generated on or after a specific date|
|date_end|query|string(date)|false|Show only editorial content generated on or before a specific date|
|per_page|query|integer|false|Number of results per page|
|cursor|query|string|false|The cursor of the page with which to start fetching results; this cursor is returned from previous requests|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|relevant|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialSearchResults/example"
}
```

<h3 id="deprecated-search-editorial-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialSearchResults](#schemaeditorialsearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) List updated content

<a id="opIdgetUpdatedEditorialImage"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/updated?type=edit&date_updated_start=2021-03-29T13%3A25%3A13.521Z&date_updated_end=2021-03-29T13%3A25%3A13.521Z&country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/updated`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/updated` instead to get recently updated items.

<h3 id="deprecated-list-updated-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Specify `addition` to return only images that were added or `edit` to return only images that were edited or deleted|
|date_updated_start|query|string(date-time)|true|Show images images added, edited, or deleted after the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.|
|date_updated_end|query|string(date-time)|true|Show images images added, edited, or deleted before the specified date. Acceptable range is 1970-01-01T00:00:01 to 2038-01-19T00:00:00.|
|date_taken_start|query|string(date)|false|Show images that were taken on or after the specified date; use this parameter if you want recently created images from the collection instead of updated older assets|
|date_taken_end|query|string(date)|false|Show images that were taken before the specified date|
|cursor|query|string|false|The cursor of the page with which to start fetching results; this cursor is returned from previous requests|
|sort|query|string|false|Sort by|
|supplier_code|query|[string]|false|Show only editorial content from certain suppliers|
|country|query|string(country-code-3)|true|Show only editorial content that is available for distribution in a certain country|
|per_page|query|integer|false|Number of results per page|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|edit|
|type|addition|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialUpdatedResults/example"
}
```

<h3 id="deprecated-list-updated-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialUpdatedResults](#schemaeditorialupdatedresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## (Deprecated) Get editorial content details

> Code samples

```bash
curl 'https://example.com/v2/editorial/9926131a?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/{id}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated; use `GET /v2/editorial/images/{id}` instead to show information about an editorial image, including a URL to a preview image and the sizes that it is available in.

<h3 id="deprecated-get-editorial-content-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial ID|
|country|query|string(country-code-3)|true|Returns only if the content is available for distribution in a certain country|
|search_id|query|string|false|The ID of the search that is related to this request|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialContent/example"
}
```

<h3 id="deprecated-get-editorial-content-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialContent](#schemaeditorialcontent)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-editorialvideo">editorial_video</h1>

## List editorial video categories

<a id="opIdlistEditorialVideoCategories"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/videos/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/videos/categories`

This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialVideoCategoryResults/example"
}
```

<h3 id="list-editorial-video-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialVideoCategoryResults](#schemaeditorialvideocategoryresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List editorial video licenses

<a id="opIdgetEditorialVideoLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/videos/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/editorial/videos/licenses`

This endpoint lists existing editorial video licenses.

<h3 id="list-editorial-video-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|video_id|query|string|false|Show licenses for the specified editorial video ID|
|license|query|string|false|Show editorial videos that are available with the specified license name|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "download_time": "2020-12-18T02:22:56.000Z",
      "id": "e1dbb15d5384725d292cf64f793ac45062",
      "is_downloadable": false,
      "license": "premier_editorial_all_digital",
      "metadata": {
        "client": "Company A",
        "job": "Important project",
        "other": "Important media",
        "purchase_order": "457234"
      },
      "subscription_id": "s12345678",
      "user": {
        "username": "username1"
      },
      "video": {
        "format": {
          "size": "original"
        },
        "id": "11231389im"
      }
    },
    {
      "download_time": "2020-12-11T01:24:22.000Z",
      "id": "e1dbb15d5384725d292cf64f793ac45114",
      "is_downloadable": false,
      "license": "premier_editorial_all_digital",
      "metadata": {
        "client": "Company B",
        "job": "Important project",
        "other": "Important image",
        "purchase_order": "5583831"
      },
      "subscription_id": "s12345678",
      "user": {
        "username": "username2"
      },
      "video": {
        "format": {
          "size": "original"
        },
        "id": "11231442aa"
      }
    }
  ],
  "page": 1,
  "per_page": 2
}
```

<h3 id="list-editorial-video-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License editorial video content

<a id="opIdlicenseEditorialVideo"></a>

> Code samples

```bash
curl https://example.com/v2/editorial/videos/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseEditorialVideoContentRequest/example"
  }'
```

`POST /v2/editorial/videos/licenses`

This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseEditorialVideoContentRequest/example"
}
```

<h3 id="license-editorial-video-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LicenseEditorialVideoContentRequest](#schemalicenseeditorialvideocontentrequest)|true|License editorial video content|
|» country|body|[ISOCountryCode](#schemaisocountrycode)|true|Mandatory country code for where the editorial content will be distributed; this value is used for rights checks|
|» editorial|body|[[LicenseEditorialVideoContent](#schemalicenseeditorialvideocontent)]|true|Editorial content to license|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "download": {
        "url": "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].mov?Expires=1524717323"
      },
      "editorial_id": "69656358"
    }
  ]
}
```

<h3 id="license-editorial-video-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseEditorialContentResults](#schemalicenseeditorialcontentresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create purchases.view )
</aside>

## Search editorial video content

<a id="opIdsearchEditorialVideos"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/videos/search?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/videos/search`

This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to "Alone,Performing" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

<h3 id="search-editorial-video-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|One or more search terms separated by spaces|
|sort|query|string|false|Sort by|
|category|query|string|false|Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list|
|country|query|string(country-code-3)|true|Show only editorial video content that is available for distribution in a certain country|
|supplier_code|query|[string]|false|Show only editorial video content from certain suppliers|
|date_start|query|string(date)|false|Show only editorial video content generated on or after a specific date|
|date_end|query|string(date)|false|Show only editorial video content generated on or before a specific date|
|resolution|query|string|false|Show only editorial video content with specific resolution|
|fps|query|number|false|Show only editorial video content generated with specific frames per second|
|per_page|query|integer|false|Number of results per page|
|cursor|query|string|false|The cursor of the page with which to start fetching results; this cursor is returned from previous requests|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|relevant|
|sort|newest|
|sort|oldest|
|resolution|4k|
|resolution|high_definition|
|resolution|standard_definition|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialVideoSearchResults/example"
}
```

<h3 id="search-editorial-video-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialVideoSearchResults](#schemaeditorialvideosearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get editorial video content details

<a id="opIdgetEditorialVideo"></a>

> Code samples

```bash
curl 'https://example.com/v2/editorial/videos/9926131a?country=USA' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/editorial/videos/{id}`

This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.

<h3 id="get-editorial-video-content-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Editorial ID|
|country|query|string(country-code-3)|true|Returns only if the content is available for distribution in a certain country|
|search_id|query|string|false|The ID of the search that is related to this request|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/EditorialVideoContent/example"
}
```

<h3 id="get-editorial-video-content-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialVideoContent](#schemaeditorialvideocontent)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|406|Not Acceptable|Not Acceptable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-oauth">oauth</h1>

## Get access tokens

<a id="opIdcreateAccessToken"></a>

> Code samples

```bash
curl https://example.com/v2/oauth/access_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "141024g14g28104gff1h"
  }'
```

`POST /v2/oauth/access_token`

This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.

> Body parameter

```json
{
  "client_id": "141024g14g28104gff1h"
}
```

<h3 id="get-access-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|Client ID (Consumer Key) of your application|
|» client_secret|body|string|false|Client Secret (Consumer Secret) of your application|
|» code|body|string|false|Response code from the /oauth/authorize flow; required if grant_type=authorization_code|
|» expires|body|boolean|false|Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token|
|» grant_type|body|string|true|Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants|
|» realm|body|string|false|User type to be authorized (usually 'customer')|
|» refresh_token|body|string|false|Pass this along with grant_type=refresh_token to get a fresh access token|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» grant_type|authorization_code|
|» grant_type|client_credentials|
|» grant_type|refresh_token|
|» realm|customer|
|» realm|contributor|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/OauthAccessTokenResponse/example"
}
```

<h3 id="get-access-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OauthAccessTokenResponse](#schemaoauthaccesstokenresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

## Authorize applications

<a id="opIdauthorize"></a>

> Code samples

```bash
curl 'https://example.com/v2/oauth/authorize?client_id=6d097450b209c6dcd859&redirect_uri=localhost&response_type=code&state=1540290465000'
```

`GET /v2/oauth/authorize`

This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.

<h3 id="authorize-applications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|Client ID (Consumer Key) of your application|
|realm|query|string|false|User type to be authorized (usually 'customer')|
|redirect_uri|query|string|true|The callback URI to send the request to after authorization; must use a host name that is registered with your application|
|response_type|query|string|true|Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'|
|scope|query|string|false|Space-separated list of scopes to be authorized|
|state|query|string|true|Unique value used by the calling app to verify the request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|realm|customer|
|realm|contributor|
|response_type|code|

> Example responses

> 302 Response

```json
{
  "$ref": "#/components/schemas/AuthorizeResponse/example"
}
```

<h3 id="authorize-applications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect user to authenticate with Shutterstock|[AuthorizeResponse](#schemaauthorizeresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="shutterstock-api-explorer-soundeffects">sound_effects</h1>

## List details about sound effects

<a id="opIdgetSfxListDetails"></a>

> Code samples

```bash
curl 'https://example.com/v2/sfx?id=1110335168&id=465011609' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/sfx`

This endpoint shows information about sound effects.

<h3 id="list-details-about-sound-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string(asset-id)]|true|One or more sound effect IDs|
|view|query|string|false|Amount of detail to render in the response|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|library|query|string|false|Which library to fetch from|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|minimal|
|view|full|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|library|shutterstock|
|library|premier|
|library|premiumbeat|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/SFXDataList/example"
}
```

<h3 id="list-details-about-sound-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SFXDataList](#schemasfxdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List sound effects licenses

<a id="opIdgetSfxLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/sfx/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/sfx/licenses`

This endpoint lists existing licenses.

<h3 id="list-sound-effects-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sfx_id|query|string|false|Show licenses for the specified sound effects ID|
|license|query|string|false|Show sound effects that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort order|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|license_id|query|string|false|Filter by the license ID|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/DownloadHistoryDataList/example"
}
```

<h3 id="list-sound-effects-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License sound effects

<a id="opIdlicensesSFX"></a>

> Code samples

```bash
curl https://example.com/v2/sfx/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "$ref": "#/components/schemas/LicenseSFXRequest/example"
  }'
```

`POST /v2/sfx/licenses`

This endpoint licenses sounds effect assets.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseSFXRequest/example"
}
```

<h3 id="license-sound-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LicenseSFXRequest](#schemalicensesfxrequest)|true|none|
|» sound_effects|body|[[LicenseSFX](#schemalicensesfx)]|true|Sound effects to license for|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/LicenseSFXResultDataList/example"
}
```

<h3 id="license-sound-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseSFXResultDataList](#schemalicensesfxresultdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Download sound effects

<a id="opIddownloadSfx"></a>

> Code samples

```bash
curl https://example.com/v2/sfx/licenses/123/downloads \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/sfx/licenses/{id}/downloads`

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

<h3 id="download-sound-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|License ID|

> Example responses

> 200 Response

```json
{
  "url": "http://download.dev.shutterstock.com/gatekeeper/abc/shutterstock_id.wav"
}
```

<h3 id="download-sound-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SfxUrl](#schemasfxurl)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## Search for sound effects

<a id="opIdsearchSFX"></a>

> Code samples

```bash
curl https://example.com/v2/sfx/search \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/sfx/search`

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

<h3 id="search-for-sound-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|added_date|query|string(date)|false|Show sound effects added on the specified date|
|added_date_start|query|string(date)|false|Show sound effects added on or after the specified date|
|added_date_end|query|string(date)|false|Show sound effects added before the specified date|
|duration|query|integer|false|Show sound effects with the specified duration in seconds|
|duration_from|query|integer|false|Show sound effects with the specified duration or longer in seconds|
|duration_to|query|integer|false|Show sound effects with the specified duration or shorter in seconds|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|query|query|string|false|One or more search terms separated by spaces|
|safe|query|boolean|false|Enable or disable safe search|
|sort|query|string|false|Sort by|
|view|query|string|false|Amount of detail to render in the response|
|language|query|[Language](#schemalanguage)|false|Set query and result language (uses Accept-Language header if not set)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|popular|
|sort|newest|
|sort|relevance|
|sort|random|
|sort|oldest|
|view|minimal|
|view|full|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/SFXSearchResults"
}
```

<h3 id="search-for-sound-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SFXSearchResults](#schemasfxsearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get details about sound effects

<a id="opIdgetSfxDetails"></a>

> Code samples

```bash
curl https://example.com/v2/sfx/442583 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/sfx/{id}`

This endpoint shows information about a sound effect.

<h3 id="get-details-about-sound-effects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Audio track ID|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|view|query|string|false|Amount of detail to render in the response|
|library|query|string|false|Which library to fetch from|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|
|library|shutterstock|
|library|premier|
|library|premiumbeat|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/SFX/example"
}
```

<h3 id="get-details-about-sound-effects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SFX](#schemasfx)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

<h1 id="shutterstock-api-explorer-test">test</h1>

## Echo text

<a id="opIdecho"></a>

> Code samples

```bash
curl https://example.com/v2/test \
  -H 'Accept: application/json'
```

`GET /v2/test`

<h3 id="echo-text-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|false|Text to echo|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/TestEcho/example"
}
```

<h3 id="echo-text-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TestEcho](#schematestecho)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

## Validate input

<a id="opIdvalidate"></a>

> Code samples

```bash
curl 'https://example.com/v2/test/validate?id=123' \
  -H 'Accept: application/json'
```

`GET /v2/test/validate`

<h3 id="validate-input-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer|true|Integer ID|
|tag|query|[string]|false|List of tags|
|user-agent|header|string|false|User agent|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/TestValidate/example"
}
```

<h3 id="validate-input-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[TestValidate](#schematestvalidate)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="shutterstock-api-explorer-users">users</h1>

## Get user details

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/v2/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/user`

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/UserDetails/example"
}
```

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UserDetails](#schemauserdetails)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: user.view )
</aside>

## Get access token details

<a id="opIdgetAccessToken"></a>

> Code samples

```bash
curl https://example.com/v2/user/access_token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/user/access_token`

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/AccessTokenDetails/example"
}
```

<h3 id="get-access-token-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AccessTokenDetails](#schemaaccesstokendetails)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode
</aside>

## List user subscriptions

<a id="opIdgetUserSubscriptionList"></a>

> Code samples

```bash
curl https://example.com/v2/user/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/user/subscriptions`

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/SubscriptionDataList/example"
}
```

<h3 id="list-user-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[SubscriptionDataList](#schemasubscriptiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: purchases.view )
</aside>

<h1 id="shutterstock-api-explorer-videos">videos</h1>

## List videos

<a id="opIdgetVideoList"></a>

> Code samples

```bash
curl 'https://example.com/v2/videos?id=639703&id=993721' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos`

This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.

<h3 id="list-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string(asset-id)]|true|One or more video IDs|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/VideoDataList/example"
}
```

<h3 id="list-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoDataList](#schemavideodatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List video categories

<a id="opIdlistVideoCategories"></a>

> Code samples

```bash
curl https://example.com/v2/videos/categories \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/categories`

This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.

<h3 id="list-video-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CategoryDataList/example"
}
```

<h3 id="list-video-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CategoryDataList](#schemacategorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List video collections

<a id="opIdgetVideoCollectionList"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/videos/collections`

This endpoint lists your collections of videos and their basic attributes.

<h3 id="list-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionDataList/example"
}
```

<h3 id="list-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionDataList](#schemacollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Create video collections

<a id="opIdcreateVideoCollection"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CollectionCreateRequest/example"
  }'
```

`POST /v2/videos/collections`

This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CollectionCreateRequest/example"
}
```

<h3 id="create-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreateRequest](#schemacollectioncreaterequest)|true|Collection metadata|
|» name|body|string|true|The name of the collection|

> Example responses

> 201 Response

```json
{
  "$ref": "#/components/schemas/CollectionCreateResponse/example"
}
```

<h3 id="create-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully created video collection|[CollectionCreateResponse](#schemacollectioncreateresponse)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## List featured video collections

<a id="opIdgetFeaturedVideoCollectionList"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/featured \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/collections/featured`

This endpoint lists featured video collections and a name and cover video for each collection.

<h3 id="list-featured-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|embed|query|string|false|What information to include in the response, such as a URL to the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/FeaturedCollectionDataList/example"
}
```

<h3 id="list-featured-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FeaturedCollectionDataList](#schemafeaturedcollectiondatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the details of featured video collections

<a id="opIdgetFeaturedVideoCollection"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/featured/136351027 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/collections/featured/{id}`

This endpoint gets more detailed information about a featured video collection, including its cover video and timestamps for its creation and most recent update. To get the videos, use `GET /v2/videos/collections/featured/{id}/items`.

<h3 id="get-the-details-of-featured-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|embed|query|string|false|What information to include in the response, such as a URL to the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/FeaturedCollection/example"
}
```

<h3 id="get-the-details-of-featured-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[FeaturedCollection](#schemafeaturedcollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Featured collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the contents of featured video collections

<a id="opIdgetFeaturedVideoCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/featured/136351027/items \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/collections/featured/{id}/items`

This endpoint lists the IDs of videos in a featured collection and the date that each was added.

<h3 id="get-the-contents-of-featured-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/VideoCollectionItemDataList/example"
}
```

<h3 id="get-the-contents-of-featured-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoCollectionItemDataList](#schemavideocollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Featured collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get the details of video collections

<a id="opIdgetVideoCollection"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/videos/collections/{id}`

This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.

<h3 id="get-the-details-of-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the collection to return|
|embed|query|[string]|false|Which sharing information to include in the response, such as a URL to the collection|
|share_code|query|string|false|Code to retrieve a shared collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|embed|share_code|
|embed|share_url|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Collection/example"
}
```

<h3 id="get-the-details-of-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Collection](#schemacollection)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Rename video collections

<a id="opIdrenameVideoCollection"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/CollectionUpdateRequest/example"
  }'
```

`POST /v2/videos/collections/{id}`

This endpoint sets a new name for a collection.

> Body parameter

```json
{
  "$ref": "#/components/schemas/CollectionUpdateRequest/example"
}
```

<h3 id="rename-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the collection to rename|
|body|body|[CollectionUpdateRequest](#schemacollectionupdaterequest)|true|The new name for the collection|
|» name|body|string|true|The new name of the collection|

<h3 id="rename-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully updated collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Delete video collections

<a id="opIddeleteVideoCollection"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/videos/collections/{id}`

This endpoint deletes a collection.

<h3 id="delete-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the collection to delete|

<h3 id="delete-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted collection|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Get the contents of video collections

<a id="opIdgetVideoCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176/items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/videos/collections/{id}/items`

This endpoint lists the IDs of videos in a collection and the date that each was added.

<h3 id="get-the-contents-of-video-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Collection ID|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|share_code|query|string|false|Code to retrieve the contents of a shared collection|
|sort|query|string|false|Sort order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/CollectionItemDataList/example"
}
```

<h3 id="get-the-contents-of-video-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionItemDataList](#schemacollectionitemdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.view )
</aside>

## Add videos to collections

<a id="opIdaddVideoCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "items": [
      {
        "id": "10120264"
      },
      {
        "id": "24419024"
      }
    ]
  }'
```

`POST /v2/videos/collections/{id}/items`

This endpoint adds one or more videos to a collection by video IDs.

> Body parameter

```json
{
  "items": [
    {
      "id": "10120264"
    },
    {
      "id": "24419024"
    }
  ]
}
```

<h3 id="add-videos-to-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the collection to which items should be added|
|body|body|[CollectionItemRequest](#schemacollectionitemrequest)|true|Array of video IDs to add to the collection|
|» items|body|[[CollectionItem](#schemacollectionitem)]|true|List of items|

<h3 id="add-videos-to-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully added collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## Remove videos from collections

<a id="opIddeleteVideoCollectionItems"></a>

> Code samples

```bash
curl https://example.com/v2/videos/collections/17555176/items \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/videos/collections/{id}/items`

This endpoint removes one or more videos from a collection.

<h3 id="remove-videos-from-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Collection from which items will be deleted|
|item_id|query|[string]|false|One or more video IDs to remove from the collection|

<h3 id="remove-videos-from-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully removed collection items|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Collection not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: collections.edit )
</aside>

## List video licenses

<a id="opIdgetVideoLicenseList"></a>

> Code samples

```bash
curl https://example.com/v2/videos/licenses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/videos/licenses`

This endpoint lists existing licenses.

<h3 id="list-video-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|video_id|query|string|false|Show licenses for the specified video ID|
|license|query|string|false|Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort by oldest or newest videos first|
|username|query|string|false|Filter licenses by username of licensee|
|start_date|query|string(date-time)|false|Show licenses created on or after the specified date|
|end_date|query|string(date-time)|false|Show licenses created before the specified date|
|download_availability|query|string|false|Filter licenses by download availability|
|team_history|query|boolean|false|Set to true to see license history for all members of your team.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|download_availability|all|
|download_availability|downloadable|
|download_availability|non_downloadable|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "download_time": "2018-05-24T14:26:25-04:00",
      "id": "e121",
      "is_downloadable": true,
      "license": "footage_premier",
      "metadata": {
        "customer_id": "12345",
        "geo_location": "US",
        "number_viewed": "15",
        "search_term": "dog"
      },
      "subscription_id": "s12345678",
      "user": {
        "username": "myusername"
      },
      "video": {
        "format": {
          "size": "sd"
        },
        "id": "2140697"
      }
    }
  ],
  "page": 1,
  "per_page": 20
}
```

<h3 id="list-video-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[DownloadHistoryDataList](#schemadownloadhistorydatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## License videos

<a id="opIdlicenseVideos"></a>

> Code samples

```bash
curl https://example.com/v2/videos/licenses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/LicenseVideoRequest/example"
  }'
```

`POST /v2/videos/licenses`

This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters. The download links in the response are valid for 8 hours.

> Body parameter

```json
{
  "$ref": "#/components/schemas/LicenseVideoRequest/example"
}
```

<h3 id="license-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscription_id|query|string|false|The subscription ID to use for licensing|
|size|query|string|false|The size of the video to license|
|search_id|query|string|false|The Search ID that led to this licensing event|
|body|body|[LicenseVideoRequest](#schemalicensevideorequest)|true|List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters|
|» videos|body|[[LicenseVideo](#schemalicensevideo)]|true|Videos to license|

#### Enumerated Values

|Parameter|Value|
|---|---|
|size|web|
|size|sd|
|size|hd|
|size|4k|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/LicenseVideoResultDataList/example"
}
```

<h3 id="license-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LicenseVideoResultDataList](#schemalicensevideoresultdatalist)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.create purchases.view )
</aside>

## Download videos

<a id="opIddownloadVideos"></a>

> Code samples

```bash
curl https://example.com/v2/videos/licenses/e123/downloads \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "$ref": "#/components/schemas/RedownloadVideo/example"
  }'
```

`POST /v2/videos/licenses/{id}/downloads`

This endpoint redownloads videos that you have already received a license for.

> Body parameter

```json
{
  "$ref": "#/components/schemas/RedownloadVideo/example"
}
```

<h3 id="download-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The license ID of the item to (re)download. The download links in the response are valid for 8 hours.|
|body|body|[RedownloadVideo](#schemaredownloadvideo)|true|Information about the videos to redownload|
|» auth_cookie|body|[Cookie](#schemacookie)|false|**Deprecated.** (Deprecated)|
|» show_modal|body|boolean|false|**Deprecated.** (Deprecated)|
|» size|body|string|false|Size of the video|
|» verification_code|body|string|false|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» size|web|
|» size|sd|
|» size|hd|
|» size|4k|

> Example responses

> 200 Response

```json
{
  "url": "https://download1.shutterstock.com/gatekeeper/W3siZSI6MTUzMzMzMzUzMCwiayI6InZpZGVvLzM5NjU4ODEvaGQubW92IiwibSI6MSwiZCI6InNodXR0ZXJzdG9jay1tZWRpYSJ9LCJjZ2lvRU14T09hNWZGTHZsN21iTWVPRVQ3MFEiXQ/shutterstock_v3965881.mov"
}
```

<h3 id="download-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Url](#schemaurl)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
customer_accessCode ( Scopes: licenses.view )
</aside>

## Search for videos

<a id="opIdsearchVideos"></a>

> Code samples

```bash
curl https://example.com/v2/videos/search \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/search`

This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

<h3 id="search-for-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|added_date|query|string(date)|false|Show videos added on the specified date|
|added_date_start|query|string(date)|false|Show videos added on or after the specified date|
|added_date_end|query|string(date)|false|Show videos added before the specified date|
|aspect_ratio|query|string|false|Show videos with the specified aspect ratio|
|category|query|string|false|Show videos with the specified Shutterstock-defined category; specify a category name or ID|
|contributor|query|[string]|false|Show videos with the specified artist names or IDs|
|contributor_country|query|[string(country-code-2)]|false|Show videos from contributors in one or more specified countries|
|duration|query|integer|false|**Deprecated.** (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration in seconds|
|duration_from|query|integer|false|Show videos with the specified duration or longer in seconds|
|duration_to|query|integer|false|Show videos with the specified duration or shorter in seconds|
|fps|query|number|false|**Deprecated.** (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second|
|fps_from|query|number|false|Show videos with the specified frames per second or more|
|fps_to|query|number|false|Show videos with the specified frames per second or fewer|
|keyword_safe_search|query|boolean|false|Hide results with potentially unsafe keywords|
|language|query|[Language](#schemalanguage)|false|Set query and result language (uses Accept-Language header if not set)|
|license|query|[string]|false|Show only videos with the specified license or licenses|
|model|query|[string]|false|Show videos with each of the specified models|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|people_age|query|string|false|Show videos that feature people of the specified age range|
|people_ethnicity|query|[string]|false|Show videos with people of the specified ethnicities|
|people_gender|query|string|false|Show videos with people with the specified gender|
|people_number|query|integer|false|Show videos with the specified number of people|
|people_model_released|query|boolean|false|Show only videos of people with a signed model release|
|query|query|string|false|One or more search terms separated by spaces; you can use NOT to filter out videos that match a term|
|resolution|query|string|false|Show videos with the specified resolution|
|safe|query|boolean|false|Enable or disable safe search|
|sort|query|string|false|Sort by one of these categories|
|view|query|string|false|Amount of detail to render in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|aspect_ratio|4_3|
|aspect_ratio|16_9|
|aspect_ratio|nonstandard|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|license|commercial|
|license|editorial|
|people_age|infants|
|people_age|children|
|people_age|teenagers|
|people_age|20s|
|people_age|30s|
|people_age|40s|
|people_age|50s|
|people_age|60s|
|people_age|older|
|people_ethnicity|african|
|people_ethnicity|african_american|
|people_ethnicity|black|
|people_ethnicity|brazilian|
|people_ethnicity|chinese|
|people_ethnicity|caucasian|
|people_ethnicity|east_asian|
|people_ethnicity|hispanic|
|people_ethnicity|japanese|
|people_ethnicity|middle_eastern|
|people_ethnicity|native_american|
|people_ethnicity|pacific_islander|
|people_ethnicity|south_asian|
|people_ethnicity|southeast_asian|
|people_ethnicity|other|
|people_gender|male|
|people_gender|female|
|people_gender|both|
|resolution|4k|
|resolution|standard_definition|
|resolution|high_definition|
|sort|newest|
|sort|popular|
|sort|relevance|
|sort|random|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/VideoSearchResults/example"
}
```

<h3 id="search-for-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoSearchResults](#schemavideosearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get suggestions for a search term

<a id="opIdgetVideoSuggestions"></a>

> Code samples

```bash
curl 'https://example.com/v2/videos/search/suggestions?query=cats' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/search/suggestions`

This endpoint provides autocomplete suggestions for partial search terms.

<h3 id="get-suggestions-for-a-search-term-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search term for which you want keyword suggestions|
|limit|query|integer|false|Limit the number of the suggestions|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Suggestions/example"
}
```

<h3 id="get-suggestions-for-a-search-term-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Suggestions](#schemasuggestions)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List updated videos

<a id="opIdgetUpdatedVideos"></a>

> Code samples

```bash
curl https://example.com/v2/videos/updated \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/updated`

This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.

<h3 id="list-updated-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string(date)|false|Show videos updated on or after the specified date|
|end_date|query|string(date)|false|Show videos updated before the specified date|
|interval|query|string|false|Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|sort|query|string|false|Sort by oldest or newest videos first|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/UpdatedMediaDataList/example"
}
```

<h3 id="list-updated-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[UpdatedMediaDataList](#schemaupdatedmediadatalist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## Get details about videos

<a id="opIdgetVideo"></a>

> Code samples

```bash
curl https://example.com/v2/videos/639703 \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/{id}`

This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.

<h3 id="get-details-about-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(asset-id)|true|Video ID|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|view|query|string|false|Amount of detail to render in the response|
|search_id|query|string|false|The ID of the search that is related to this request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/Video/example"
}
```

<h3 id="get-details-about-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Video](#schemavideo)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

## List similar videos

<a id="opIdfindSimilarVideos"></a>

> Code samples

```bash
curl https://example.com/v2/videos/2140697/similar \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /v2/videos/{id}/similar`

This endpoint searches for videos that are similar to a video that you specify.

<h3 id="list-similar-videos-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(asset-id)|true|The ID of a video for which similar videos should be returned|
|language|query|[Language](#schemalanguage)|false|Language for the keywords and categories in the response|
|page|query|integer|false|Page number|
|per_page|query|integer|false|Number of results per page|
|view|query|string|false|Amount of detail to render in the response|

#### Enumerated Values

|Parameter|Value|
|---|---|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|view|minimal|
|view|full|

> Example responses

> 200 Response

```json
{
  "$ref": "#/components/schemas/VideoSearchResults/example"
}
```

<h3 id="list-similar-videos-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[VideoSearchResults](#schemavideosearchresults)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basic, customer_accessCode
</aside>

# Schemas

<h2 id="tocS_AccessTokenDetails">AccessTokenDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokendetails"></a>
<a id="schema_AccessTokenDetails"></a>
<a id="tocSaccesstokendetails"></a>
<a id="tocsaccesstokendetails"></a>

```json
{
  "client_id": "c456b-26230-fa8ed-d19ab-05ce2-bf0aa",
  "customer_id": "123456789",
  "expires_in": 3600,
  "realm": "customer",
  "scopes": [
    "collections.edit",
    "collections.view",
    "licenses.create",
    "licenses.view",
    "purchases.view",
    "user.view"
  ],
  "user_id": "123456789",
  "username": "jdoe"
}
```

Access token details that are currently associated with this user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Client ID that is associated with the user|
|contributor_id|string|false|none|Contributor ID that is associated with the user|
|customer_id|string|false|none|Customer ID that is associated with the user|
|expires_in|integer|false|none|Number of seconds until the access token expires; no expiration if this value is null|
|organization_id|string|false|none|Organization ID that is associated with the user|
|realm|string|false|none|Type of access token|
|scopes|[string]|false|none|Scopes that this access token provides when used as authentication|
|user_id|string|false|none|User ID that is associated with the user|
|username|string|false|none|User name that is associated with the user|

#### Enumerated Values

|Property|Value|
|---|---|
|realm|customer|
|realm|contributor|

<h2 id="tocS_Album">Album</h2>
<!-- backwards compatibility -->
<a id="schemaalbum"></a>
<a id="schema_Album"></a>
<a id="tocSalbum"></a>
<a id="tocsalbum"></a>

```json
{
  "id": "1234567",
  "title": "Happy Music"
}
```

Album metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The album ID|
|title|string|true|none|The album title|

<h2 id="tocS_Allotment">Allotment</h2>
<!-- backwards compatibility -->
<a id="schemaallotment"></a>
<a id="schema_Allotment"></a>
<a id="tocSallotment"></a>
<a id="tocsallotment"></a>

```json
{
  "downloads_left": 5,
  "downloads_limit": 10,
  "end_time": "2020-05-29T12:10:22-05:00",
  "start_time": "2020-05-29T12:10:22-05:00"
}
```

An allotment of credits as part of a subscription

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloads_left|integer|false|none|Number of credits remaining in the subscription|
|downloads_limit|integer|false|none|Total number of credits available to this subscription|
|end_time|string(date-time)|false|none|Date the subscription ends|
|start_time|string(date-time)|false|none|Date the subscription started|

<h2 id="tocS_Artist">Artist</h2>
<!-- backwards compatibility -->
<a id="schemaartist"></a>
<a id="schema_Artist"></a>
<a id="tocSartist"></a>
<a id="tocsartist"></a>

```json
{
  "name": "The Happy Tunes Band"
}
```

Metadata about the artist that created the media

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The artist's name|

<h2 id="tocS_Audio">Audio</h2>
<!-- backwards compatibility -->
<a id="schemaaudio"></a>
<a id="schema_Audio"></a>
<a id="tocSaudio"></a>
<a id="tocsaudio"></a>

```json
{
  "added_date": "2016-08-16",
  "artists": [
    {
      "name": "Klimenko Music"
    }
  ],
  "assets": {
    "clean_audio": {
      "file_size": 35188408
    },
    "preview_mp3": {
      "file_size": 4400203,
      "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
    },
    "preview_ogg": {
      "file_size": 4453197,
      "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
    },
    "waveform": {
      "file_size": 18778,
      "url": "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
    }
  },
  "bpm": 110,
  "contributor": {
    "id": "2847971"
  },
  "description": "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
  "duration": 183,
  "genres": [
    "Dance/Electronic",
    "Electro Pop",
    "Pop/Rock"
  ],
  "id": "442583",
  "instruments": [
    "Piano",
    "Synth bass",
    "Synth drums",
    "Synthesizer"
  ],
  "is_adult": false,
  "is_instrumental": true,
  "isrc": "",
  "keywords": [
    "celebratory",
    "chic",
    "euphoric",
    "good times",
    "hip",
    "optimistic",
    "party",
    "soaring",
    "upbeat"
  ],
  "language": "en",
  "lyrics": "",
  "media_type": "audio",
  "moods": [
    "Bright",
    "Confident",
    "Fun",
    "Happy",
    "Inspiring",
    "Optimistic",
    "Playful",
    "Sophisticated",
    "Stylish",
    "Uplifting"
  ],
  "published_time": "2016-08-16T14:30:03-04:00",
  "recording_version": "",
  "releases": [],
  "similar_artists": [],
  "title": "Another Tomorrow",
  "updated_time": "2016-08-18T17:59:33-04:00",
  "url": "",
  "vocal_description": ""
}
```

Audio metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_date|string(date)|false|none|Date this track was added to the Shutterstock library|
|affiliate_url|string|false|none|Affiliate referral link; appears only for registered affiliate partners|
|album|[Album](#schemaalbum)|false|none|Album metadata|
|artists|[[Artist](#schemaartist)]|false|none|List of artists|
|assets|[AudioAssets](#schemaaudioassets)|false|none|Files that are available as part of an audio asset|
|bpm|integer|false|none|BPM (beats per minute) of this track|
|contributor|[Contributor](#schemacontributor)|true|none|Information about a contributor|
|deleted_time|string(date-time)|false|none|none|
|description|string|false|none|Description of this track|
|duration|number|false|none|Duration of this track in seconds|
|genres|[string]|false|none|List of all genres for this track|
|id|string|true|none|Shutterstock ID of this track|
|instruments|[string]|false|none|List of all instruments that appear in this track|
|is_adult|boolean|false|none|Whether or not this track contains adult content|
|is_instrumental|boolean|false|none|Whether or not this track is purely instrumental (lacking lyrics)|
|isrc|string|false|none|none|
|keywords|[string]|false|none|List of all keywords for this track|
|language|string|false|none|Language of this track's lyrics|
|lyrics|string|false|none|Lyrics of this track|
|media_type|string|true|none|Media type of this track; should always be "audio"|
|model_releases|[[ModelRelease](#schemamodelrelease)]|false|none|List of all model releases for this track|
|moods|[string]|false|none|List of all moods of this track|
|published_time|string(date-time)|false|none|Time this track was published|
|recording_version|string|false|none|Recording version of this track|
|releases|[string]|false|none|List of all releases of this track|
|similar_artists|[[Artist](#schemaartist)]|false|none|List of all similar artists of this track|
|submitted_time|string(date-time)|false|none|Time this track was submitted|
|title|string|false|none|Title of this track|
|updated_time|string(date-time)|false|none|Time this track was last updated|
|url|string|false|none|none|
|vocal_description|string|false|none|Vocal description of this track|

<h2 id="tocS_AudioAssetDetails">AudioAssetDetails</h2>
<!-- backwards compatibility -->
<a id="schemaaudioassetdetails"></a>
<a id="schema_AudioAssetDetails"></a>
<a id="tocSaudioassetdetails"></a>
<a id="tocsaudioassetdetails"></a>

```json
{
  "file_size": 4453197,
  "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
}
```

Information about a file that is part of an audio asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_size|integer|false|none|File size of the track|
|url|string|false|none|URL the track is available at|

<h2 id="tocS_AudioAssets">AudioAssets</h2>
<!-- backwards compatibility -->
<a id="schemaaudioassets"></a>
<a id="schema_AudioAssets"></a>
<a id="tocSaudioassets"></a>
<a id="tocsaudioassets"></a>

```json
{
  "clean_audio": {
    "file_size": 35188408
  },
  "preview_mp3": {
    "file_size": 4400203,
    "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
  },
  "preview_ogg": {
    "file_size": 4453197,
    "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
  },
  "waveform": {
    "file_size": 18778,
    "url": "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
  }
}
```

Files that are available as part of an audio asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_art|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|
|clean_audio|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|
|original_audio|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|
|preview_mp3|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|
|preview_ogg|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|
|shorts_loops_stems|[ShortsLoopsStems](#schemashortsloopsstems)|false|none|Links for Shorts, Loops and Stems previews|
|waveform|[AudioAssetDetails](#schemaaudioassetdetails)|false|none|Information about a file that is part of an audio asset|

<h2 id="tocS_AudioDataList">AudioDataList</h2>
<!-- backwards compatibility -->
<a id="schemaaudiodatalist"></a>
<a id="schema_AudioDataList"></a>
<a id="tocSaudiodatalist"></a>
<a id="tocsaudiodatalist"></a>

```json
{
  "data": [
    {
      "added_date": "2016-04-12",
      "artists": [
        {
          "name": "Fin Productions"
        }
      ],
      "assets": {
        "clean_audio": {
          "file_size": 30760372
        },
        "preview_mp3": {
          "file_size": 3846606,
          "url": "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.mp3"
        },
        "preview_ogg": {
          "file_size": 4402608,
          "url": "https://ak.picdn.net/shutterstock/audio/434750/preview/preview.ogg"
        },
        "waveform": {
          "file_size": 19822,
          "url": "https://ak.picdn.net/shutterstock/audio/434750/waveform/waveform.png"
        }
      },
      "bpm": 100,
      "contributor": {
        "id": "2847971"
      },
      "description": "Pulsing and feel-good, featuring slick electric guitar, synthesizer, bass, electronic drum pads and drums that create a positive, celebratory mood.",
      "duration": 160,
      "genres": [
        "Dance/Electronic",
        "Electro Pop",
        "Pop/Rock"
      ],
      "id": "434750",
      "instruments": [
        "Bass",
        "Drums",
        "Electric guitar",
        "Pads",
        "Percussion",
        "Synthesizer"
      ],
      "is_adult": false,
      "is_instrumental": true,
      "isrc": "",
      "keywords": [
        "breezy",
        "celebration",
        "festive",
        "good times",
        "hopeful",
        "optimistic",
        "party",
        "positive",
        "reflective"
      ],
      "language": "en",
      "lyrics": "",
      "media_type": "audio",
      "moods": [
        "Bright",
        "Confident",
        "Fun",
        "Happy",
        "Inspiring",
        "Optimistic",
        "Playful",
        "Sophisticated",
        "Stylish",
        "Uplifting"
      ],
      "published_time": "2016-04-12T17:45:29-04:00",
      "recording_version": "",
      "releases": [],
      "similar_artists": [],
      "title": "Fresh Love",
      "updated_time": "2016-08-18T18:03:11-04:00",
      "vocal_description": ""
    }
  ]
}
```

List of tracks

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Audio](#schemaaudio)]|false|none|Tracks|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_AudioRenderResult">AudioRenderResult</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorenderresult"></a>
<a id="schema_AudioRenderResult"></a>
<a id="tocSaudiorenderresult"></a>
<a id="tocsaudiorenderresult"></a>

```json
{
  "created_date": "2021-07-13T16:19:30-04:00",
  "files": [],
  "id": "2yZp13IhLqnjfh2KquDTOHUHzTiP",
  "preset": "MASTER_MP3",
  "progress_percent": 0,
  "status": "WAITING_COMPOSE",
  "timeline": {},
  "updated_date": "2021-07-13T16:19:30-04:00"
}
```

The output of an audio render in WAV or MP3 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_date|string(date-time)|false|none|The time the render was submitted to the API|
|files|[[AudioRendersFilesList](#schemaaudiorendersfileslist)]|false|none|The files associated with the render|
|id|string|true|none|The alphanumeric ID of the simple render|
|preset|string|false|none|The file format preset|
|progress_percent|integer|false|none|The current progress of the render as a percentage|
|status|string|true|none|A coarse progress indicator|
|timeline|[AudioRenderTimeline](#schemaaudiorendertimeline)|true|none|A timeline object that represents either a request for music to be created or an entire music composition|
|updated_date|string(date-time)|false|none|The time that the audio output was uploaded|

#### Enumerated Values

|Property|Value|
|---|---|
|preset|MASTER_MP3|
|preset|MASTER_WAV|
|preset|STEMS_WAV|
|status|WAITING_COMPOSE|
|status|RUNNING_COMPOSE|
|status|WAITING_RENDER|
|status|RUNNING_RENDER|
|status|CREATED|
|status|FAILED_CREATE|

<h2 id="tocS_AudioRenderTimeline">AudioRenderTimeline</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimeline"></a>
<a id="schema_AudioRenderTimeline"></a>
<a id="tocSaudiorendertimeline"></a>
<a id="tocsaudiorendertimeline"></a>

```json
{
  "spans": [
    {
      "id": 123456,
      "instrument_groups": [
        {
          "instrument_group": "The instrument ID",
          "statuses": [
            {
              "beat": 12,
              "status": "active"
            }
          ]
        }
      ],
      "regions": [
        {
          "beat": 12,
          "descriptor": "The descriptor ID needed to compose the music",
          "end_type": {
            "beat": 12,
            "event": "ending",
            "type": "ringout"
          },
          "id": 123456,
          "key": {
            "tonic_accidental": "double flat",
            "tonic_note": "c",
            "tonic_quality": "major"
          },
          "region": "music"
        }
      ],
      "span_type": "metered",
      "tempo": 12345,
      "tempo_changes": [
        {
          "tempo": 12345,
          "time": 5
        }
      ],
      "time": 5
    }
  ]
}
```

A timeline object that represents either a request for music to be created or an entire music composition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|spans|[[AudioRenderTimelineSpan](#schemaaudiorendertimelinespan)]|false|none|A span object that represents the beginning of a period of absolute time|

<h2 id="tocS_AudioRenderTimelineSpan">AudioRenderTimelineSpan</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimelinespan"></a>
<a id="schema_AudioRenderTimelineSpan"></a>
<a id="tocSaudiorendertimelinespan"></a>
<a id="tocsaudiorendertimelinespan"></a>

```json
{
  "id": 111,
  "regions": [
    {
      "beat": 12,
      "descriptor": "cinematic_minimal_tense",
      "end_type": {
        "beat": 24,
        "event": "ending",
        "type": "ringout"
      },
      "id": 222,
      "key": {
        "tonic_note": "c",
        "tonic_quality": "major"
      },
      "region": "music"
    }
  ],
  "span_type": "metered",
  "tempo": 76,
  "time": 0
}
```

The beginning of a non-overlapping period of absolute time

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|false|none|An identifier which must be unique within the parent span|
|instrument_groups|[[AudioRenderTimelineSpanInstrumentGroup](#schemaaudiorendertimelinespaninstrumentgroup)]|false|none|An array of instrument_group objects that are used in this span|
|regions|[[AudioRenderTimelineSpanRegion](#schemaaudiorendertimelinespanregion)]|false|none|An array of region objects within the span|
|span_type|string|true|none|Type of span; metered spans represent a pariod of time with music, and unmetered spans denote the end of the prior metered span|
|tempo|integer|false|none|The tempo, in beats per minute, at the start of the span; if not provided, the API selects a random tempo|
|tempo_changes|[[AudioRenderTimelineSpanTempoChanges](#schemaaudiorendertimelinespantempochanges)]|false|none|Two or more inflection points in a tempo curve; the API creates a smoothly changing tempo by using a linear interpolation of the time between each tempo change|
|time|integer|true|none|The absolute time, in seconds, at which the span starts|

#### Enumerated Values

|Property|Value|
|---|---|
|span_type|metered|
|span_type|unmetered|

<h2 id="tocS_AudioRenderTimelineSpanInstrumentGroup">AudioRenderTimelineSpanInstrumentGroup</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimelinespaninstrumentgroup"></a>
<a id="schema_AudioRenderTimelineSpanInstrumentGroup"></a>
<a id="tocSaudiorendertimelinespaninstrumentgroup"></a>
<a id="tocsaudiorendertimelinespaninstrumentgroup"></a>

```json
{
  "instrument_group": "bright_roomy_kit",
  "statuses": [
    {
      "beat": 12,
      "status": "active"
    }
  ]
}
```

An instrument and the status objects that specify when that instrument plays

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instrument_group|string|true|none|The instrument ID|
|statuses|[[AudioRenderTimelineSpanInstrumentGroupStatus](#schemaaudiorendertimelinespaninstrumentgroupstatus)]|false|none|An array of status objects|

<h2 id="tocS_AudioRenderTimelineSpanInstrumentGroupStatus">AudioRenderTimelineSpanInstrumentGroupStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimelinespaninstrumentgroupstatus"></a>
<a id="schema_AudioRenderTimelineSpanInstrumentGroupStatus"></a>
<a id="tocSaudiorendertimelinespaninstrumentgroupstatus"></a>
<a id="tocsaudiorendertimelinespaninstrumentgroupstatus"></a>

```json
{
  "beat": 12,
  "status": "active"
}
```

The status of an instrument at a specific beat

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beat|number|true|none|The beat, relative to the span, at which the status begins|
|status|string|true|none|Whether the instrument is playing or not|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|

<h2 id="tocS_AudioRenderTimelineSpanRegion">AudioRenderTimelineSpanRegion</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimelinespanregion"></a>
<a id="schema_AudioRenderTimelineSpanRegion"></a>
<a id="tocSaudiorendertimelinespanregion"></a>
<a id="tocsaudiorendertimelinespanregion"></a>

```json
{
  "beat": 12,
  "descriptor": "cinematic_minimal_tense",
  "end_type": {
    "beat": 24,
    "event": "ending",
    "type": "ringout"
  },
  "id": 222,
  "key": {
    "tonic_note": "c",
    "tonic_quality": "major"
  },
  "region": "music"
}
```

A period of music or silence, measured in beats

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|beat|integer|true|none|The beat, relative to the span, at which the region object's music begins|
|descriptor|string|true|none|The descriptor ID needed to compose the music|
|end_type|object|false|none|A high-level description of how a region ends|
|id|number|true|none|An identifier which must be unique within the parent span|
|key|object|false|none|The key signature active at the beginning of the region|
|region|string|true|none|The type of region|

#### Enumerated Values

|Property|Value|
|---|---|
|region|music|
|region|silence|

<h2 id="tocS_AudioRenderTimelineSpanTempoChanges">AudioRenderTimelineSpanTempoChanges</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendertimelinespantempochanges"></a>
<a id="schema_AudioRenderTimelineSpanTempoChanges"></a>
<a id="tocSaudiorendertimelinespantempochanges"></a>
<a id="tocsaudiorendertimelinespantempochanges"></a>

```json
{
  "tempo": 86,
  "time": 5
}
```

An inflection point in a tempo curve; the API creates the overall tempo by using a linear interpolation of the time between each tempo change

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tempo|number|true|none|The tempo, in beats per minute, active at this time|
|time|number|true|none|The time, in seconds, at which the tempo exists|

<h2 id="tocS_AudioRendersFilesList">AudioRendersFilesList</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorendersfileslist"></a>
<a id="schema_AudioRendersFilesList"></a>
<a id="tocSaudiorendersfileslist"></a>
<a id="tocsaudiorendersfileslist"></a>

```json
{
  "bits_sample": 16,
  "content_type": "audio/mp3",
  "download_url": "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3",
  "filename": "My_audio_ai.mp3",
  "frequency_hz": 44100,
  "kbits_second": 192,
  "size_bytes": 481556,
  "tracks": [
    "master"
  ]
}
```

Files associated with the render

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bits_sample|number|true|none|The bit depth of the audio files in bits/sample|
|content_type|string|true|none|The content-type of the file|
|download_url|string|true|none|The internet-accessible URL from which the file can be downloaded. Any redirects encountered when using this URL must be followed|
|filename|string|true|none|The user-specified file name suggestion from the render request; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file|
|frequency_hz|number|true|none|The Sample rate of the audio files in Hertz (Hz)|
|kbits_second|number|true|none|The data rate of the audio files in kilobits/second|
|size_bytes|number|true|none|Size of the file in bytes|
|tracks|[string]|true|none|An array of track names included in the file|

<h2 id="tocS_AudioRendersListResults">AudioRendersListResults</h2>
<!-- backwards compatibility -->
<a id="schemaaudiorenderslistresults"></a>
<a id="schema_AudioRendersListResults"></a>
<a id="tocSaudiorenderslistresults"></a>
<a id="tocsaudiorenderslistresults"></a>

```json
{
  "audio_renders": [
    {
      "created_date": "2021-07-13T16:19:30-04:00",
      "files": [],
      "id": "2yZp13IhLqnjfh2KquDTOHUHzTiP",
      "preset": "MASTER_MP3",
      "progress_percent": 20,
      "status": "WAITING_COMPOSE",
      "timeline": {},
      "updated_date": "2021-07-13T16:19:30-04:00"
    },
    {
      "created_date": "2021-07-12T16:39:59-04:00",
      "files": [
        {
          "bits_sample": 16,
          "content_type": "audio/mp3",
          "download_url": "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/0.mp3",
          "filename": "My_audio_ai.mp3",
          "frequency_hz": 44100,
          "kbits_second": 192,
          "size_bytes": 481556,
          "tracks": [
            "master"
          ]
        },
        {
          "bits_sample": 0,
          "content_type": "application/vnd.amper.waveform+json",
          "download_url": "https://s3.amazonaws.com/prod-amper-inferno-ephemeral/renders/2021/07/13/amper-api-QwAgKqXQAzr622KuXYZ25C9WRH3a/1.json",
          "filename": "render.json",
          "frequency_hz": 42,
          "kbits_second": 0,
          "size_bytes": 4420,
          "tracks": [
            "master"
          ]
        }
      ],
      "id": "QwAgKqXQAzr622KuXYZ25C9WRH3a",
      "preset": "MASTER_MP3",
      "progress_percent": 100,
      "status": "CREATED",
      "timeline": {},
      "updated_date": "2021-07-12T16:46:26-04:00"
    }
  ]
}
```

Audio render data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_renders|[[AudioRenderResult](#schemaaudiorenderresult)]|true|none|Audio render results|

<h2 id="tocS_AudioSearchResults">AudioSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaaudiosearchresults"></a>
<a id="schema_AudioSearchResults"></a>
<a id="tocSaudiosearchresults"></a>
<a id="tocsaudiosearchresults"></a>

```json
{
  "data": [
    {
      "added_date": "2016-08-16",
      "artists": [
        {
          "name": "Klimenko Music"
        }
      ],
      "assets": {
        "clean_audio": {
          "file_size": 35188408
        },
        "preview_mp3": {
          "file_size": 4400203,
          "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.mp3"
        },
        "preview_ogg": {
          "file_size": 4453197,
          "url": "https://ak.picdn.net/shutterstock/audio/442583/preview/preview.ogg"
        },
        "waveform": {
          "file_size": 18778,
          "url": "https://ak.picdn.net/shutterstock/audio/442583/waveform/waveform.png"
        }
      },
      "bpm": 110,
      "contributor": {
        "id": "2847971"
      },
      "description": "Pulsing and feel-good, featuring soaring synthesizer, groovy synth bass drums and synth drums that create a euphoric, upbeat mood.",
      "duration": 183,
      "genres": [
        "Dance/Electronic",
        "Electro Pop",
        "Pop/Rock"
      ],
      "id": "442583",
      "instruments": [
        "Piano",
        "Synth bass",
        "Synth drums",
        "Synthesizer"
      ],
      "is_adult": false,
      "is_instrumental": true,
      "isrc": "",
      "keywords": [
        "celebratory",
        "chic",
        "euphoric",
        "good times",
        "hip",
        "optimistic",
        "party",
        "soaring",
        "upbeat"
      ],
      "language": "en",
      "lyrics": "",
      "media_type": "audio",
      "moods": [
        "Bright",
        "Confident",
        "Fun",
        "Happy",
        "Inspiring",
        "Optimistic",
        "Playful",
        "Sophisticated",
        "Stylish",
        "Uplifting"
      ],
      "published_time": "2016-08-16T14:30:03-04:00",
      "recording_version": "",
      "releases": [],
      "similar_artists": [],
      "title": "Another Tomorrow",
      "updated_time": "2016-08-18T17:59:33-04:00",
      "url": "",
      "vocal_description": ""
    }
  ],
  "page": 1,
  "per_page": 5,
  "search_id": "749090bb-2967-4a20-b22e-c800dc845e10",
  "total_count": 123455
}
```

Audio search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Audio](#schemaaudio)]|true|none|List of tracks|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|search_id|string|true|none|ID of the search|
|total_count|integer|true|none|Total count of all results across all pages|

<h2 id="tocS_AudioUrl">AudioUrl</h2>
<!-- backwards compatibility -->
<a id="schemaaudiourl"></a>
<a id="schema_AudioUrl"></a>
<a id="tocSaudiourl"></a>
<a id="tocsaudiourl"></a>

```json
{
  "$ref": "#/components/schemas/Url/example"
}
```

Audio License URL object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|shorts_loops_stems|string|false|none|URL that can be used to download the .zip file containing shorts, loops, and stems|
|url|string|true|none|URL that can be used to download the unwatermarked, licensed asset|

<h2 id="tocS_AuthorizeResponse">AuthorizeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthorizeresponse"></a>
<a id="schema_AuthorizeResponse"></a>
<a id="tocSauthorizeresponse"></a>
<a id="tocsauthorizeresponse"></a>

```json
"Moved temporarily. Redirecting to https://accounts.shutterstock.com/login?next=%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26state%3D1539619928633%26scope%3Dlicenses.create%20licenses.view%20purchases.view%26client_id%3D6d097450b209c6dcd859%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2Fmyapp%2Fauth%2Fcallback%26realm%3Dcustomer"
```

HTML redirect URL that contains the application authorization 'code'

<h2 id="tocS_Bands">Bands</h2>
<!-- backwards compatibility -->
<a id="schemabands"></a>
<a id="schema_Bands"></a>
<a id="tocSbands"></a>
<a id="tocsbands"></a>

```json
{
  "id": "1234567",
  "name": "The Happy Tunes Band"
}
```

A band that can be used to generate music

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the band|
|name|string|false|none|The name of the band|

<h2 id="tocS_BulkImageSearchRequest">BulkImageSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemabulkimagesearchrequest"></a>
<a id="schema_BulkImageSearchRequest"></a>
<a id="tocSbulkimagesearchrequest"></a>
<a id="tocsbulkimagesearchrequest"></a>

```json
[
  {
    "license": [
      "editorial"
    ],
    "query": "cat",
    "sort": "popular"
  },
  {
    "orientation": "horizontal",
    "query": "dog"
  }
]
```

List of searches

<h2 id="tocS_BulkImageSearchResults">BulkImageSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemabulkimagesearchresults"></a>
<a id="schema_BulkImageSearchResults"></a>
<a id="tocSbulkimagesearchresults"></a>
<a id="tocsbulkimagesearchresults"></a>

```json
{
  "results": [
    {
      "data": [
        {
          "aspect": 1.5,
          "assets": {
            "huge_thumb": {
              "height": 260,
              "url": "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
              "width": 390
            },
            "large_thumb": {
              "height": 100,
              "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
              "width": 150
            },
            "preview": {
              "height": 300,
              "url": "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
              "width": 450
            },
            "preview_1000": {
              "height": 667,
              "url": "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
              "width": 1000
            },
            "preview_1500": {
              "height": 1000,
              "url": "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
              "width": 1500
            },
            "small_thumb": {
              "height": 67,
              "url": "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
              "width": 100
            }
          },
          "contributor": {
            "id": "250738318"
          },
          "description": "cropped image of woman gardening",
          "has_model_release": true,
          "id": "1572478477",
          "image_type": "photo",
          "media_type": "image"
        }
      ],
      "page": 1,
      "per_page": 5,
      "search_id": "749090bb-2967-4a20-b22e-c800dc845e10",
      "spellcheck_info": {},
      "total_count": 45
    },
    {
      "data": [],
      "page": 1,
      "per_page": 5,
      "search_id": "749090bb-2967-4a20-b22e-c800dc845e11",
      "spellcheck_info": {},
      "total_count": 0
    }
  ]
}
```

List of search results for each given query

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bulk_search_id|string|false|none|Unique identifier for the search request|
|results|[[ImageSearchResults](#schemaimagesearchresults)]|false|none|List of image search results|

<h2 id="tocS_CatalogCollection">CatalogCollection</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollection"></a>
<a id="schema_CatalogCollection"></a>
<a id="tocScatalogcollection"></a>
<a id="tocscatalogcollection"></a>

```json
{
  "cover_asset": {
    "asset": {
      "id": "1690105108",
      "name": "Young couple playing tennis at the court",
      "type": "image"
    },
    "created_time": "2021-06-10T13:26:09-04:00",
    "id": "123"
  },
  "created_time": "2021-05-20T16:15:22-04:00",
  "id": "126351028",
  "name": "My collection",
  "role_assignments": {
    "collection_id": "126351028",
    "roles": {
      "editors": [
        {
          "email": "userTwo@org.com",
          "id": "987",
          "type": "USER"
        }
      ],
      "owners": [
        {
          "email": "userOne@org.com",
          "id": "321",
          "type": "USER"
        }
      ],
      "viewers": []
    }
  },
  "total_item_count": 2,
  "updated_time": "2021-06-10T13:26:09-04:00",
  "visibility": "public"
}
```

Catalog collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_asset|[CatalogCollectionItem](#schemacatalogcollectionitem)|false|none|Metadata about an item that is part of a collection|
|created_time|string(date-time)|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|
|role_assignments|[CatalogCollectionRoleAssignments](#schemacatalogcollectionroleassignments)|true|none|List of role assignments for a catalog collection|
|total_item_count|number|true|none|none|
|updated_time|string(date-time)|true|none|none|
|visibility|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|private|
|visibility|public|

<h2 id="tocS_CatalogCollectionDataList">CatalogCollectionDataList</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollectiondatalist"></a>
<a id="schema_CatalogCollectionDataList"></a>
<a id="tocScatalogcollectiondatalist"></a>
<a id="tocscatalogcollectiondatalist"></a>

```json
{
  "data": [
    {
      "cover_asset": {
        "asset": {
          "id": "1690105108",
          "name": "Young couple playing tennis at the court",
          "type": "image"
        },
        "created_time": "2021-06-10T13:26:09-04:00",
        "id": "123"
      },
      "created_time": "2021-05-20T16:15:22-04:00",
      "id": "126351028",
      "name": "My collection",
      "role_assignments": {
        "collection_id": "126351028",
        "roles": {
          "editors": [
            {
              "email": "userTwo@org.com",
              "id": "987",
              "type": "USER"
            }
          ],
          "owners": [
            {
              "email": "userOne@org.com",
              "id": "321",
              "type": "USER"
            }
          ],
          "viewers": []
        }
      },
      "total_item_count": 2,
      "updated_time": "2021-06-10T13:26:09-04:00",
      "visibility": "public"
    }
  ],
  "page": 1,
  "per_page": 20,
  "total_count": 1
}
```

List of catalog collections

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CatalogCollection](#schemacatalogcollection)]|true|none|List of catalog collections|
|page|number|true|none|none|
|per_page|number|true|none|none|
|total_count|number|true|none|none|

<h2 id="tocS_CatalogCollectionItem">CatalogCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollectionitem"></a>
<a id="schema_CatalogCollectionItem"></a>
<a id="tocScatalogcollectionitem"></a>
<a id="tocscatalogcollectionitem"></a>

```json
{
  "asset": {
    "id": "1690105108",
    "name": "Young couple playing tennis at the court",
    "type": "image"
  },
  "collection_ids": [
    "126351028"
  ],
  "created_time": "2021-06-10T13:26:09-04:00",
  "id": "123"
}
```

Metadata about an item that is part of a collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|true|none|none|
|collection_ids|[string]|false|none|The collection IDs that this asset belongs to|
|created_time|string(date-time)|true|none|none|
|id|string|true|none|none|

<h2 id="tocS_CatalogCollectionItemDataList">CatalogCollectionItemDataList</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollectionitemdatalist"></a>
<a id="schema_CatalogCollectionItemDataList"></a>
<a id="tocScatalogcollectionitemdatalist"></a>
<a id="tocscatalogcollectionitemdatalist"></a>

```json
{
  "data": [
    {
      "asset": {
        "id": "1690105108",
        "name": "Young couple playing tennis at the court",
        "type": "image"
      },
      "collection_ids": [
        "126351028"
      ],
      "created_time": "2021-06-10T13:26:09-04:00",
      "id": "123"
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 82
}
```

List of catalog collection items

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CatalogCollectionItem](#schemacatalogcollectionitem)]|true|none|List of catalog collection items|
|page|number|true|none|none|
|per_page|number|true|none|none|
|total_count|number|true|none|none|

<h2 id="tocS_CatalogCollectionRole">CatalogCollectionRole</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollectionrole"></a>
<a id="schema_CatalogCollectionRole"></a>
<a id="tocScatalogcollectionrole"></a>
<a id="tocscatalogcollectionrole"></a>

```json
{
  "email": "user123@org.com",
  "id": "123",
  "type": "USER"
}
```

A user that has access to a catalog collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|id|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|USER|

<h2 id="tocS_CatalogCollectionRoleAssignments">CatalogCollectionRoleAssignments</h2>
<!-- backwards compatibility -->
<a id="schemacatalogcollectionroleassignments"></a>
<a id="schema_CatalogCollectionRoleAssignments"></a>
<a id="tocScatalogcollectionroleassignments"></a>
<a id="tocscatalogcollectionroleassignments"></a>

```json
{
  "collection_id": "126351028",
  "roles": {
    "editors": [
      {
        "email": "userTwo@org.com",
        "id": "987",
        "type": "USER"
      }
    ],
    "owners": [
      {
        "email": "userOne@org.com",
        "id": "321",
        "type": "USER"
      }
    ],
    "viewers": []
  }
}
```

List of role assignments for a catalog collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection_id|string|true|none|none|
|roles|object|true|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "id": "1",
  "name": "Animals/Wildlife"
}
```

Category information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Category ID|
|name|string|false|none|Category name|

<h2 id="tocS_CategoryDataList">CategoryDataList</h2>
<!-- backwards compatibility -->
<a id="schemacategorydatalist"></a>
<a id="schema_CategoryDataList"></a>
<a id="tocScategorydatalist"></a>
<a id="tocscategorydatalist"></a>

```json
{
  "data": [
    {
      "id": "1",
      "name": "Animals/Wildlife"
    },
    {
      "id": "11",
      "name": "The Arts"
    }
  ],
  "page": 1,
  "per_page": 2,
  "total_count": 13
}
```

List of categories that images can belong to

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Category](#schemacategory)]|false|none|Categories|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|The current page of results|
|per_page|integer|false|none|The number of results per page|
|total_count|integer|false|none|The total number of results across all pages|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "cover_item": {
    "id": "297886754"
  },
  "id": "293542904",
  "items_updated_time": "2021-05-20T16:15:22-04:00",
  "name": "My collection",
  "total_item_count": 85
}
```

Metadata about a collection of assets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_item|[CollectionItem](#schemacollectionitem)|false|none|Metadata about an item that is part of a collection|
|created_time|string(date-time)|false|none|When the collection was created|
|id|string|true|none|The collection ID|
|items_updated_time|string(date-time)|false|none|The last time this collection's items were updated|
|name|string|true|none|The name of the collection|
|share_code|string|false|none|A code that can be used to share the collection (optional)|
|share_url|string|false|none|The browser URL that can be used to share the collection (optional)|
|total_item_count|integer|true|none|The number of items in the collection|
|updated_time|string(date-time)|false|none|The last time the collection was update (other than changes to the items in it)|

<h2 id="tocS_CollectionCreateRequest">CollectionCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreaterequest"></a>
<a id="schema_CollectionCreateRequest"></a>
<a id="tocScollectioncreaterequest"></a>
<a id="tocscollectioncreaterequest"></a>

```json
{
  "name": "Test Collection 19cf"
}
```

Collection creation request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the collection|

<h2 id="tocS_CollectionCreateResponse">CollectionCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreateresponse"></a>
<a id="schema_CollectionCreateResponse"></a>
<a id="tocScollectioncreateresponse"></a>
<a id="tocscollectioncreateresponse"></a>

```json
{
  "id": "48433105"
}
```

Collection creation response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the new collection|

<h2 id="tocS_CollectionDataList">CollectionDataList</h2>
<!-- backwards compatibility -->
<a id="schemacollectiondatalist"></a>
<a id="schema_CollectionDataList"></a>
<a id="tocScollectiondatalist"></a>
<a id="tocscollectiondatalist"></a>

```json
{
  "data": [
    {
      "cover_item": {
        "id": "297886754"
      },
      "id": "293542904",
      "items_updated_time": "2021-05-20T16:15:22-04:00",
      "name": "My collection",
      "total_item_count": 85
    }
  ],
  "page": 1,
  "per_page": 100,
  "total_count": 1
}
```

List of collections

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Collection](#schemacollection)]|false|none|Collections|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|The current page of results|
|per_page|integer|false|none|The number of results per page|
|total_count|integer|false|none|The total number of results across all pages|

<h2 id="tocS_CollectionItem">CollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemacollectionitem"></a>
<a id="schema_CollectionItem"></a>
<a id="tocScollectionitem"></a>
<a id="tocscollectionitem"></a>

```json
{
  "added_time": "2020-05-29T12:10:22-05:00",
  "id": "1690105108",
  "media_type": "image"
}
```

Metadata about an item that is part of a collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_time|string(date-time)|false|none|The date the item was added to the collection|
|id|string|true|none|ID of the item|
|media_type|string|false|none|The media type of the item, such as image, video, or audio|

<h2 id="tocS_CollectionItemDataList">CollectionItemDataList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionitemdatalist"></a>
<a id="schema_CollectionItemDataList"></a>
<a id="tocScollectionitemdatalist"></a>
<a id="tocscollectionitemdatalist"></a>

```json
{
  "data": [
    {
      "added_time": "2021-07-08T12:33:37.000Z",
      "id": "1690105108",
      "media_type": "image"
    },
    {
      "added_time": "2021-07-08T12:31:43.000Z",
      "id": "1468703072",
      "media_type": "image"
    }
  ],
  "page": 1,
  "per_page": 2,
  "total_count": 82
}
```

List of items in a collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CollectionItem](#schemacollectionitem)]|false|none|Assets in the collection|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|The current page of results|
|per_page|integer|false|none|The number of results per page|
|total_count|integer|false|none|The total number of results across all pages|

<h2 id="tocS_CollectionItemRequest">CollectionItemRequest</h2>
<!-- backwards compatibility -->
<a id="schemacollectionitemrequest"></a>
<a id="schema_CollectionItemRequest"></a>
<a id="tocScollectionitemrequest"></a>
<a id="tocscollectionitemrequest"></a>

```json
{
  "items": [
    {
      "added_time": "2020-05-29T12:10:22-05:00",
      "id": "1690105108",
      "media_type": "image"
    }
  ]
}
```

Request to get a list of items in a collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CollectionItem](#schemacollectionitem)]|true|none|List of items|

<h2 id="tocS_CollectionUpdateRequest">CollectionUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacollectionupdaterequest"></a>
<a id="schema_CollectionUpdateRequest"></a>
<a id="tocScollectionupdaterequest"></a>
<a id="tocscollectionupdaterequest"></a>

```json
{
  "name": "My collection with a new name"
}
```

Collection update request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The new name of the collection|

<h2 id="tocS_ComputerVisionImageCreateResponse">ComputerVisionImageCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemacomputervisionimagecreateresponse"></a>
<a id="schema_ComputerVisionImageCreateResponse"></a>
<a id="tocScomputervisionimagecreateresponse"></a>
<a id="tocscomputervisionimagecreateresponse"></a>

```json
{
  "upload_id": "Udb14e1c3540bdbf82b4b3fe12d3a44f2"
}
```

Asset upload information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upload_id|string|true|none|none|

<h2 id="tocS_Contributor">Contributor</h2>
<!-- backwards compatibility -->
<a id="schemacontributor"></a>
<a id="schema_Contributor"></a>
<a id="tocScontributor"></a>
<a id="tocscontributor"></a>

```json
{
  "id": "12345678"
}
```

Information about a contributor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the contributor|

<h2 id="tocS_ContributorProfile">ContributorProfile</h2>
<!-- backwards compatibility -->
<a id="schemacontributorprofile"></a>
<a id="schema_ContributorProfile"></a>
<a id="tocScontributorprofile"></a>
<a id="tocscontributorprofile"></a>

```json
{
  "about": "John Doe's photographs",
  "contributor_type": [
    "photographer"
  ],
  "display_name": "John Doe",
  "equipment": [
    "Nikon",
    "Fuji"
  ],
  "id": "12345678",
  "location": "US",
  "portfolio_url": "https://www.shutterstock.com/g/jdoe",
  "social_media": {
    "facebook": "http://example.com/jdoe",
    "google_plus": "http://example.com/jdoe",
    "linkedin": "http://example.com/jdoe",
    "pinterest": "http://example.com/jdoe",
    "tumblr": "http://example.com/jdoe",
    "twitter": "http://example.com/jdoe"
  },
  "styles": [
    "landscape",
    "nature",
    "footage_travel"
  ],
  "subjects": [
    "animals",
    "landmarks",
    "nature",
    "objects",
    "recreation"
  ],
  "website": "http://example.com/profiles/jdoe"
}
```

Contributor profile data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|string|false|none|Short description of the contributors' library|
|contributor_type|[string]|false|none|Type of content that the contributor specializes in (photographer, illustrator, etc)|
|display_name|string|false|none|Preferred name to be displayed for the contributor|
|equipment|[string]|false|none|List of equipment used by the contributor (Canon EOS 5D Mark II, etc)|
|id|string|true|none|Contributor ID|
|location|string|false|none|Country code representing the contributor's locale|
|portfolio_url|string|false|none|Web URL for the contributors' profile|
|social_media|[ContributorProfileSocialMedia](#schemacontributorprofilesocialmedia)|false|none|Contributor profile social media links|
|styles|[string]|false|none|List of styles that the contributor specializes in (lifestyle, mixed media, etc)|
|subjects|[string]|false|none|Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)|
|website|string|false|none|Personal website for the contributor|

<h2 id="tocS_ContributorProfileDataList">ContributorProfileDataList</h2>
<!-- backwards compatibility -->
<a id="schemacontributorprofiledatalist"></a>
<a id="schema_ContributorProfileDataList"></a>
<a id="tocScontributorprofiledatalist"></a>
<a id="tocscontributorprofiledatalist"></a>

```json
{
  "data": [
    {
      "about": "John Doe's photographs",
      "contributor_type": [
        "photographer"
      ],
      "display_name": "John Doe",
      "equipment": [
        "Nikon",
        "Fuji"
      ],
      "id": "12345678",
      "location": "US",
      "portfolio_url": "https://www.shutterstock.com/g/jdoe",
      "social_media": {
        "facebook": "http://example.com/jdoe",
        "google_plus": "http://example.com/jdoe",
        "linkedin": "http://example.com/jdoe",
        "pinterest": "http://example.com/jdoe",
        "tumblr": "http://example.com/jdoe",
        "twitter": "http://example.com/jdoe"
      },
      "styles": [
        "landscape",
        "nature",
        "footage_travel"
      ],
      "subjects": [
        "animals",
        "landmarks",
        "nature",
        "objects",
        "recreation"
      ],
      "website": "http://example.com/profiles/jdoe"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 15
}
```

List of contributor profiles

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ContributorProfile](#schemacontributorprofile)]|false|none|Conributor profiles|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Error message|
|page|integer|false|none|Page of response|
|per_page|integer|false|none|Number of contributors per page|
|total_count|integer|false|none|Total count of contributors for this request|

<h2 id="tocS_ContributorProfileSocialMedia">ContributorProfileSocialMedia</h2>
<!-- backwards compatibility -->
<a id="schemacontributorprofilesocialmedia"></a>
<a id="schema_ContributorProfileSocialMedia"></a>
<a id="tocScontributorprofilesocialmedia"></a>
<a id="tocscontributorprofilesocialmedia"></a>

```json
{
  "facebook": "http://example.com/jdoe",
  "google_plus": "http://example.com/jdoe",
  "linkedin": "http://example.com/jdoe",
  "pinterest": "http://example.com/jdoe",
  "tumblr": "http://example.com/jdoe",
  "twitter": "http://example.com/jdoe"
}
```

Contributor profile social media links

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facebook|string|false|none|Facebook link for contributor|
|google_plus|string|false|none|Google+ link for contributor|
|linkedin|string|false|none|LinkedIn link for contributor|
|pinterest|string|false|none|Pinterest page for contributor|
|tumblr|string|false|none|Tumblr link for contributor|
|twitter|string|false|none|Twitter link for contributor|

<h2 id="tocS_Cookie">Cookie</h2>
<!-- backwards compatibility -->
<a id="schemacookie"></a>
<a id="schema_Cookie"></a>
<a id="tocScookie"></a>
<a id="tocscookie"></a>

```json
{
  "name": "The name of the cookie",
  "value": "The value of the cookie"
}
```

Cookie object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the cookie|
|value|string|true|none|The value of the cookie|

<h2 id="tocS_CreateAudioRender">CreateAudioRender</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudiorender"></a>
<a id="schema_CreateAudioRender"></a>
<a id="tocScreateaudiorender"></a>
<a id="tocscreateaudiorender"></a>

```json
{
  "filename": "My Project.mp3",
  "preset": "MASTER_MP3",
  "timeline": {
    "spans": [
      {
        "id": 111,
        "instrument_groups": [
          {
            "instrument_group": "roomy_kit",
            "statuses": [
              {
                "beat": 12,
                "status": "active"
              }
            ]
          }
        ],
        "regions": [
          {
            "beat": 12,
            "descriptor": "cinematic_minimal_tense",
            "end_type": {
              "beat": 24,
              "event": "ending",
              "type": "ringout"
            },
            "id": 222,
            "key": {
              "tonic_note": "c",
              "tonic_quality": "major"
            },
            "region": "music"
          }
        ],
        "span_type": "metered",
        "tempo": 76,
        "tempo_changes": [
          {
            "tempo": 86,
            "time": 5
          }
        ],
        "time": 5
      },
      {
        "span_type": "unmetered",
        "time": 20
      }
    ]
  }
}
```

Data required to create an audio render

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filename|string|true|none|A user-specified file name suggestion; this file name becomes the filename property of the Content-Disposition header when the user downloads the rendered audio file|
|preset|string|true|none|File format, such as MP3 file, combined WAV file, or individual track WAV files|
|timeline|[AudioRenderTimeline](#schemaaudiorendertimeline)|true|none|The timeline data with which to generate the render|

#### Enumerated Values

|Property|Value|
|---|---|
|preset|MASTER_MP3|
|preset|MASTER_WAV|
|preset|STEMS_WAV|

<h2 id="tocS_CreateAudioRendersRequest">CreateAudioRendersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateaudiorendersrequest"></a>
<a id="schema_CreateAudioRendersRequest"></a>
<a id="tocScreateaudiorendersrequest"></a>
<a id="tocscreateaudiorendersrequest"></a>

```json
{
  "audio_renders": [
    {
      "filename": "My Project.mp3",
      "preset": "MASTER_MP3",
      "timeline": {
        "spans": [
          {
            "id": 111,
            "instrument_groups": [
              {
                "instrument_group": "roomy_kit",
                "statuses": [
                  {
                    "beat": 12,
                    "status": "active"
                  }
                ]
              }
            ],
            "regions": [
              {
                "beat": 12,
                "descriptor": "cinematic_minimal_tense",
                "end_type": {
                  "beat": 24,
                  "event": "ending",
                  "type": "ringout"
                },
                "id": 222,
                "key": {
                  "tonic_note": "c",
                  "tonic_quality": "major"
                },
                "region": "music"
              }
            ],
            "span_type": "metered",
            "tempo": 76,
            "tempo_changes": [
              {
                "tempo": 86,
                "time": 5
              }
            ],
            "time": 5
          },
          {
            "span_type": "unmetered",
            "time": 20
          }
        ]
      }
    }
  ]
}
```

Render request data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_renders|[[CreateAudioRender](#schemacreateaudiorender)]|true|none|Parameters to create computer audio renders|

<h2 id="tocS_CreateCatalogCollection">CreateCatalogCollection</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalogcollection"></a>
<a id="schema_CreateCatalogCollection"></a>
<a id="tocScreatecatalogcollection"></a>
<a id="tocscreatecatalogcollection"></a>

```json
{
  "items": [
    {
      "asset": {
        "id": "1690105108",
        "type": "image"
      }
    }
  ],
  "name": "New Collection",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CreateCatalogCollectionItem](#schemacreatecatalogcollectionitem)]|false|none|none|
|name|string|true|none|none|
|visibility|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|private|
|visibility|public|

<h2 id="tocS_CreateCatalogCollectionItem">CreateCatalogCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalogcollectionitem"></a>
<a id="schema_CreateCatalogCollectionItem"></a>
<a id="tocScreatecatalogcollectionitem"></a>
<a id="tocscreatecatalogcollectionitem"></a>

```json
{
  "asset": {
    "id": "1690105108",
    "type": "image"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|true|none|none|

<h2 id="tocS_CreateCatalogCollectionItems">CreateCatalogCollectionItems</h2>
<!-- backwards compatibility -->
<a id="schemacreatecatalogcollectionitems"></a>
<a id="schema_CreateCatalogCollectionItems"></a>
<a id="tocScreatecatalogcollectionitems"></a>
<a id="tocscreatecatalogcollectionitems"></a>

```json
{
  "items": [
    {
      "asset": {
        "id": "1690105108",
        "type": "image"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[CreateCatalogCollectionItem](#schemacreatecatalogcollectionitem)]|true|none|none|

<h2 id="tocS_CustomSizeDimensions">CustomSizeDimensions</h2>
<!-- backwards compatibility -->
<a id="schemacustomsizedimensions"></a>
<a id="schema_CustomSizeDimensions"></a>
<a id="tocScustomsizedimensions"></a>
<a id="tocscustomsizedimensions"></a>

```json
{
  "height": 600,
  "width": 800
}
```

A custom height or a custom width to resize the image to, but not both (experimental)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|Custom height to resize the image to|
|width|integer|false|none|Custom width to resize the image to|

<h2 id="tocS_Descriptors">Descriptors</h2>
<!-- backwards compatibility -->
<a id="schemadescriptors"></a>
<a id="schema_Descriptors"></a>
<a id="tocSdescriptors"></a>
<a id="tocsdescriptors"></a>

```json
{
  "average_render_speed": 8.242664029014177,
  "bands": [
    {
      "id": "cinematic_minimal_tense_band_1",
      "name": "Cinematic Minimal Tense Band 1"
    },
    {
      "id": "cinematic_minimal_tense_band_2",
      "name": "Cinematic Minimal Tense Band 2"
    }
  ],
  "id": "cinematic_minimal_tense",
  "instruments": [
    {
      "id": "blue_synth_pad",
      "name": "Warm Pad - Lush"
    },
    {
      "id": "direct_round_1_synth_bass",
      "name": "Direct Round 1 Synth Bass"
    },
    {
      "id": "direct_crystal_breath_mid_pad",
      "name": "Direct Crystal Breath Mid Pad"
    }
  ],
  "max_tempo": 76,
  "min_tempo": 58,
  "name": "Cinematic Minimal Tense",
  "previews": [
    {
      "content_type": "audio/mp3",
      "url": "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3"
    },
    {
      "content_type": "audio/mp3",
      "url": "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3"
    }
  ],
  "tags": [
    "Tense",
    "Cinematic",
    "Negative",
    "Simple Meter",
    "4/4",
    "Natural Minor",
    "Dorian",
    "Minimal",
    "Adagio",
    "Single Region",
    "Main",
    "Entertainment",
    "Politics",
    "Keys",
    "Mid Pads",
    "Fast",
    "Slow",
    "Slow",
    "Voice",
    "Medium Bright",
    "Non Noisy",
    "Medium Thick",
    "Angelic",
    "Direct",
    "Percussion",
    "Perc FX",
    "Misc",
    "Acoustic Pianos",
    "Grand",
    "Nice",
    "Roomy",
    "Pop",
    "Upright",
    "Clean",
    "Classic",
    "Keyboards",
    "Digital Keyboard",
    "Strings",
    "Synth Basses",
    "Fast",
    "Dark",
    "Thick",
    "Sub",
    "Synth Mallets",
    "Dull",
    "Mid Synth Beds",
    "Slow",
    "None",
    "Medium Noisy",
    "Harsh",
    "Fast",
    "Airy",
    "Long Textures",
    "Ambience",
    "Synth Texture",
    "Ethereal",
    "Set Kicks",
    "Processed",
    "Hubcap Mallet",
    "Wide",
    "Tickie",
    "Airy",
    "Chamber",
    "Thin",
    "Organ",
    "Cello Ensemble",
    "Sweet",
    "Big",
    "Di",
    "Raw",
    "Bright",
    "Tight",
    "Chorus",
    "Buzzy",
    "Huge",
    "Warm",
    "Jazz",
    "Brass",
    "String",
    "Hollow",
    "Woodwind",
    "Breathy",
    "Crystal",
    "Rhodes",
    "Synth Piano",
    "Noisy",
    "Woody",
    "Metallic",
    "Reverse Piano",
    "Full",
    "Foley",
    "Piano",
    "Clean",
    "Delayed",
    "Reverb",
    "Low Passed",
    "Large",
    "Medium",
    "Small"
  ]
}
```

Information about a descriptor

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_render_speed|number|false|none|The average ratio of the length of the music to the time it takes to render; for example, a render speed of 3.0 generates 30 seconds of music in about 10 seconds|
|bands|[[Bands](#schemabands)]|false|none|The bands that are available to use this descriptor|
|id|string|false|none|The ID of the descriptor|
|instruments|[[Instruments](#schemainstruments)]|false|none|The instruments that can play with this descriptor|
|max_tempo|number|false|none|The maximum beats per minute that the descriptor is intended to be used with|
|min_tempo|number|false|none|The minimum beats per minute that the descriptor is intended to be used with|
|name|string|false|none|The name of the descriptor|
|previews|[[Preview](#schemapreview)]|false|none|Preview of the descriptor|
|tags|[string]|false|none|Tags that describe the descriptor|

<h2 id="tocS_DescriptorsListResult">DescriptorsListResult</h2>
<!-- backwards compatibility -->
<a id="schemadescriptorslistresult"></a>
<a id="schema_DescriptorsListResult"></a>
<a id="tocSdescriptorslistresult"></a>
<a id="tocsdescriptorslistresult"></a>

```json
{
  "data": [
    {
      "average_render_speed": 8.242664029014177,
      "bands": [
        {
          "id": "cinematic_minimal_tense_band_1",
          "name": "Cinematic Minimal Tense Band 1"
        },
        {
          "id": "cinematic_minimal_tense_band_2",
          "name": "Cinematic Minimal Tense Band 2"
        }
      ],
      "id": "cinematic_minimal_tense",
      "instruments": [
        {
          "id": "blue_synth_pad",
          "name": "Warm Pad - Lush"
        },
        {
          "id": "direct_round_1_synth_bass",
          "name": "Direct Round 1 Synth Bass"
        },
        {
          "id": "direct_crystal_breath_mid_pad",
          "name": "Direct Crystal Breath Mid Pad"
        }
      ],
      "max_tempo": 76,
      "min_tempo": 58,
      "name": "Cinematic Minimal Tense",
      "previews": [
        {
          "content_type": "audio/mp3",
          "url": "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_1_v1.mp3"
        },
        {
          "content_type": "audio/mp3",
          "url": "https://public-cdn.ampermusic.com/bands/previews/cinematic_minimal_tense_band_2_v1.mp3"
        }
      ],
      "tags": [
        "Tense",
        "Cinematic",
        "Negative",
        "Simple Meter",
        "4/4",
        "Natural Minor",
        "Dorian",
        "Minimal",
        "Adagio",
        "Single Region",
        "Main",
        "Entertainment",
        "Politics",
        "Keys",
        "Mid Pads",
        "Fast",
        "Slow",
        "Slow",
        "Voice",
        "Medium Bright",
        "Non Noisy",
        "Medium Thick",
        "Angelic",
        "Direct",
        "Percussion",
        "Perc FX",
        "Misc",
        "Acoustic Pianos",
        "Grand",
        "Nice",
        "Roomy",
        "Pop",
        "Upright",
        "Clean",
        "Classic",
        "Keyboards",
        "Digital Keyboard",
        "Strings",
        "Synth Basses",
        "Fast",
        "Dark",
        "Thick",
        "Sub",
        "Synth Mallets",
        "Dull",
        "Mid Synth Beds",
        "Slow",
        "None",
        "Medium Noisy",
        "Harsh",
        "Fast",
        "Airy",
        "Long Textures",
        "Ambience",
        "Synth Texture",
        "Ethereal",
        "Set Kicks",
        "Processed",
        "Hubcap Mallet",
        "Wide",
        "Tickie",
        "Airy",
        "Chamber",
        "Thin",
        "Organ",
        "Cello Ensemble",
        "Sweet",
        "Big",
        "Di",
        "Raw",
        "Bright",
        "Tight",
        "Chorus",
        "Buzzy",
        "Huge",
        "Warm",
        "Jazz",
        "Brass",
        "String",
        "Hollow",
        "Woodwind",
        "Breathy",
        "Crystal",
        "Rhodes",
        "Synth Piano",
        "Noisy",
        "Woody",
        "Metallic",
        "Reverse Piano",
        "Full",
        "Foley",
        "Piano",
        "Clean",
        "Delayed",
        "Reverb",
        "Low Passed",
        "Large",
        "Medium",
        "Small"
      ]
    }
  ],
  "page": 1,
  "per_page": 1
}
```

List Descriptors results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Descriptors](#schemadescriptors)]|false|none|List of descriptors|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|

<h2 id="tocS_DownloadHistory">DownloadHistory</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistory"></a>
<a id="schema_DownloadHistory"></a>
<a id="tocSdownloadhistory"></a>
<a id="tocsdownloadhistory"></a>

```json
{
  "download_time": "2021-05-20T20:31:46.000Z",
  "id": "a24499ca3ccd912a6d8316d45f953ef092",
  "image": {
    "format": {
      "size": "medium"
    },
    "id": "1234567"
  },
  "is_downloadable": true,
  "license": "standard",
  "subscription_id": "s12345678",
  "user": {
    "username": "jdoe"
  }
}
```

Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[DownloadHistoryMediaDetails](#schemadownloadhistorymediadetails)|false|none|Information about the downloaded media|
|download_time|string(date-time)|true|none|Date the media was downloaded the first time|
|id|string|true|none|ID of the download|
|image|[DownloadHistoryMediaDetails](#schemadownloadhistorymediadetails)|false|none|Information about the downloaded media|
|is_downloadable|boolean|false|none|Specifies if the media is downloadable via its respective downloads endpoint|
|license|string|true|none|The name of the license of this download|
|metadata|object|false|none|The metadata that was passed in the original licensing request|
|revshare|[DownloadHistoryRevshareDetails](#schemadownloadhistoryrevsharedetails)|false|none|Pricing information for revenue-sharing transactions|
|subscription_id|string|false|none|ID of the subscription used to perform this download|
|user|[DownloadHistoryUserDetails](#schemadownloadhistoryuserdetails)|false|none|Information about a user|
|video|[DownloadHistoryMediaDetails](#schemadownloadhistorymediadetails)|false|none|Information about the downloaded media|

<h2 id="tocS_DownloadHistoryDataList">DownloadHistoryDataList</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistorydatalist"></a>
<a id="schema_DownloadHistoryDataList"></a>
<a id="tocSdownloadhistorydatalist"></a>
<a id="tocsdownloadhistorydatalist"></a>

```json
{
  "data": [
    {
      "download_time": "2021-07-15T15:46:34.000Z",
      "id": "e1eba3833793e77188d22caae8bac9f2cd",
      "image": {
        "format": {
          "size": "original"
        },
        "id": "9763363ao"
      },
      "is_downloadable": false,
      "license": "premier_editorial_all_digital",
      "metadata": {
        "client": "Company A",
        "job": "Important project",
        "other": "Important media",
        "purchase_order": "123456"
      },
      "subscription_id": "s12345678",
      "user": {
        "username": "editorial_test_account_002"
      }
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 2890
}
```

List of download events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DownloadHistory](#schemadownloadhistory)]|false|none|Download events|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|The current page of results|
|per_page|integer|false|none|The number of results per page|
|total_count|integer|false|none|The total number of results across all pages|

<h2 id="tocS_DownloadHistoryFormatDetails">DownloadHistoryFormatDetails</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistoryformatdetails"></a>
<a id="schema_DownloadHistoryFormatDetails"></a>
<a id="tocSdownloadhistoryformatdetails"></a>
<a id="tocsdownloadhistoryformatdetails"></a>

```json
{
  "format": "jpg",
  "size": "medium"
}
```

Information about the format of a download

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|false|none|The format of the downloaded media|
|size|string|false|none|The size of the downloaded media|

<h2 id="tocS_DownloadHistoryMediaDetails">DownloadHistoryMediaDetails</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistorymediadetails"></a>
<a id="schema_DownloadHistoryMediaDetails"></a>
<a id="tocSdownloadhistorymediadetails"></a>
<a id="tocsdownloadhistorymediadetails"></a>

```json
{
  "format": {
    "format": "jpg",
    "size": "medium"
  },
  "id": "1234567"
}
```

Information about the downloaded media

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|[DownloadHistoryFormatDetails](#schemadownloadhistoryformatdetails)|false|none|Information about the format of a download|
|id|string|true|none|ID of the download history media details|

<h2 id="tocS_DownloadHistoryRevshareDetails">DownloadHistoryRevshareDetails</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistoryrevsharedetails"></a>
<a id="schema_DownloadHistoryRevshareDetails"></a>
<a id="tocSdownloadhistoryrevsharedetails"></a>
<a id="tocsdownloadhistoryrevsharedetails"></a>

```json
{
  "purchase_amount": "8.65",
  "purchase_currency": "USD"
}
```

Pricing information for revenue-sharing transactions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purchase_amount|string|true|none|The amount charged for the license|
|purchase_currency|string|true|none|The currency the amount was charged in|

<h2 id="tocS_DownloadHistoryUserDetails">DownloadHistoryUserDetails</h2>
<!-- backwards compatibility -->
<a id="schemadownloadhistoryuserdetails"></a>
<a id="schema_DownloadHistoryUserDetails"></a>
<a id="tocSdownloadhistoryuserdetails"></a>
<a id="tocsdownloadhistoryuserdetails"></a>

```json
{
  "username": "jdoe"
}
```

Information about a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|The name of the user who downloaded the item|

<h2 id="tocS_EditorialAssets">EditorialAssets</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialassets"></a>
<a id="schema_EditorialAssets"></a>
<a id="tocSeditorialassets"></a>
<a id="tocseditorialassets"></a>

```json
{
  "medium_jpg": {
    "display_name": "Med",
    "height": 617,
    "is_licensable": true,
    "width": 1000
  },
  "original": {
    "display_name": "Original",
    "height": 3693,
    "is_licensable": true,
    "width": 5985
  },
  "small_jpg": {
    "display_name": "Small",
    "height": 309,
    "is_licensable": true,
    "width": 500
  },
  "thumb_170": {
    "height": 105,
    "url": "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg",
    "width": 170
  },
  "thumb_220": {
    "height": 136,
    "url": "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg",
    "width": 220
  },
  "watermark_1500": {
    "height": 926,
    "url": "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg",
    "width": 1500
  },
  "watermark_450": {
    "height": 278,
    "url": "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg",
    "width": 450
  }
}
```

Asset information, including size and thumbnail URLs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|medium_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|original|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|small_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|thumb_170|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|thumb_220|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|watermark_1500|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|watermark_450|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|

<h2 id="tocS_EditorialCategory">EditorialCategory</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialcategory"></a>
<a id="schema_EditorialCategory"></a>
<a id="tocSeditorialcategory"></a>
<a id="tocseditorialcategory"></a>

```json
{
  "name": "Awards"
}
```

Name of an editorial category

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_EditorialCategoryResults">EditorialCategoryResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialcategoryresults"></a>
<a id="schema_EditorialCategoryResults"></a>
<a id="tocSeditorialcategoryresults"></a>
<a id="tocseditorialcategoryresults"></a>

```json
{
  "data": [
    {
      "name": "Animal"
    },
    {
      "name": "Awards"
    },
    {
      "name": "Art"
    }
  ]
}
```

List of editorial categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialCategory](#schemaeditorialcategory)]|false|none|List of editorial categories|

<h2 id="tocS_EditorialContent">EditorialContent</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialcontent"></a>
<a id="schema_EditorialContent"></a>
<a id="tocSeditorialcontent"></a>
<a id="tocseditorialcontent"></a>

```json
{
  "aspect": 1.621,
  "assets": {
    "medium_jpg": {
      "display_name": "Med",
      "height": 617,
      "is_licensable": true,
      "width": 1000
    },
    "original": {
      "display_name": "Original",
      "height": 3693,
      "is_licensable": true,
      "width": 5985
    },
    "small_jpg": {
      "display_name": "Small",
      "height": 309,
      "is_licensable": true,
      "width": 500
    },
    "thumb_170": {
      "height": 105,
      "url": "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg",
      "width": 170
    },
    "thumb_220": {
      "height": 136,
      "url": "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg",
      "width": 220
    },
    "watermark_1500": {
      "height": 926,
      "url": "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg",
      "width": 1500
    },
    "watermark_450": {
      "height": 278,
      "url": "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg",
      "width": 450
    }
  },
  "byline": "Jon Super/AP/Shutterstock",
  "caption": "",
  "categories": [
    {
      "name": "Sport"
    }
  ],
  "date_taken": "2021-05-11",
  "description": "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
  "id": "10687730b",
  "keywords": [
    "england",
    "europe",
    "leicester city fc",
    "manchester",
    "manchester united fc",
    "men's soccer",
    "men's sports",
    "premier league",
    "professional soccer",
    "soccer",
    "sports",
    "united kingdom",
    "western europe",
    "wsoc"
  ],
  "title": "Soccer Premier League, Manchester, United Kingdom - 11 May 2021"
}
```

Metadata about editorial content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|number|false|none|none|
|assets|[EditorialAssets](#schemaeditorialassets)|false|none|Asset information, including size and thumbnail URLs|
|byline|string|false|none|none|
|caption|string|false|none|none|
|categories|[[EditorialCategory](#schemaeditorialcategory)]|false|none|List of categories|
|date_taken|string(date)|false|none|none|
|description|string|false|none|none|
|id|string|true|none|none|
|keywords|[string]|false|none|none|
|special_instructions|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_EditorialContentDataList">EditorialContentDataList</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialcontentdatalist"></a>
<a id="schema_EditorialContentDataList"></a>
<a id="tocSeditorialcontentdatalist"></a>
<a id="tocseditorialcontentdatalist"></a>

```json
{
  "data": [
    {
      "aspect": 1.621,
      "assets": {
        "medium_jpg": {
          "display_name": "Med",
          "height": 617,
          "is_licensable": true,
          "width": 1000
        },
        "original": {
          "display_name": "Original",
          "height": 3693,
          "is_licensable": true,
          "width": 5985
        },
        "small_jpg": {
          "display_name": "Small",
          "height": 309,
          "is_licensable": true,
          "width": 500
        },
        "thumb_170": {
          "height": 105,
          "url": "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg",
          "width": 170
        },
        "thumb_220": {
          "height": 136,
          "url": "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg",
          "width": 220
        },
        "watermark_1500": {
          "height": 926,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg",
          "width": 1500
        },
        "watermark_450": {
          "height": 278,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg",
          "width": 450
        }
      },
      "byline": "Jon Super/AP/Shutterstock",
      "caption": "",
      "categories": [
        {
          "name": "Sport"
        }
      ],
      "date_taken": "2021-05-11",
      "description": "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
      "id": "10687730b",
      "keywords": [
        "england",
        "europe",
        "leicester city fc",
        "manchester",
        "manchester united fc",
        "men's soccer",
        "men's sports",
        "premier league",
        "professional soccer",
        "soccer",
        "sports",
        "united kingdom",
        "western europe",
        "wsoc"
      ],
      "title": "Soccer Premier League, Manchester, United Kingdom - 11 May 2021"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 16
}
```

List of editorial items

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialContent](#schemaeditorialcontent)]|false|none|Editorial items|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results|

<h2 id="tocS_EditorialCoverItem">EditorialCoverItem</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialcoveritem"></a>
<a id="schema_EditorialCoverItem"></a>
<a id="tocSeditorialcoveritem"></a>
<a id="tocseditorialcoveritem"></a>

```json
{
  "height": 117,
  "id": "9763363q",
  "url": "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
  "width": 170
}
```

Cover image for editorial livefeed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|false|none|none|
|id|string|true|none|none|
|url|string|true|none|none|
|width|integer|false|none|none|

<h2 id="tocS_EditorialImageCategoryResults">EditorialImageCategoryResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagecategoryresults"></a>
<a id="schema_EditorialImageCategoryResults"></a>
<a id="tocSeditorialimagecategoryresults"></a>
<a id="tocseditorialimagecategoryresults"></a>

```json
{
  "data": [
    {
      "name": "Animal"
    },
    {
      "name": "Awards"
    },
    {
      "name": "Art"
    },
    {
      "name": "Film Stills"
    }
  ]
}
```

List of editorial categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialCategory](#schemaeditorialcategory)]|false|none|none|

<h2 id="tocS_EditorialImageContentDataList">EditorialImageContentDataList</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagecontentdatalist"></a>
<a id="schema_EditorialImageContentDataList"></a>
<a id="tocSeditorialimagecontentdatalist"></a>
<a id="tocseditorialimagecontentdatalist"></a>

```json
{
  "data": [
    {
      "aspect": 1.621,
      "assets": {
        "medium_jpg": {
          "display_name": "Med",
          "height": 617,
          "is_licensable": true,
          "width": 1000
        },
        "original": {
          "display_name": "Original",
          "height": 3693,
          "is_licensable": true,
          "width": 5985
        },
        "small_jpg": {
          "display_name": "Small",
          "height": 309,
          "is_licensable": true,
          "width": 500
        },
        "thumb_170": {
          "height": 105,
          "url": "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg",
          "width": 170
        },
        "thumb_220": {
          "height": 136,
          "url": "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg",
          "width": 220
        },
        "watermark_1500": {
          "height": 926,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg",
          "width": 1500
        },
        "watermark_450": {
          "height": 278,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg",
          "width": 450
        }
      },
      "byline": "Jon Super/AP/Shutterstock",
      "caption": "",
      "categories": [
        {
          "name": "Sport"
        }
      ],
      "date_taken": "2021-05-11",
      "description": "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
      "id": "10687730b",
      "keywords": [
        "england",
        "europe",
        "leicester city fc",
        "manchester",
        "manchester united fc",
        "men's soccer",
        "men's sports",
        "premier league",
        "professional soccer",
        "soccer",
        "sports",
        "united kingdom",
        "western europe",
        "wsoc"
      ],
      "title": "Soccer Premier League, Manchester, United Kingdom - 11 May 2021"
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 23
}
```

List of editorial items

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialContent](#schemaeditorialcontent)]|false|none|Editorial items|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results|

<h2 id="tocS_EditorialImageLivefeed">EditorialImageLivefeed</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagelivefeed"></a>
<a id="schema_EditorialImageLivefeed"></a>
<a id="tocSeditorialimagelivefeed"></a>
<a id="tocseditorialimagelivefeed"></a>

```json
{
  "cover_item": {
    "height": 117,
    "id": "9763363q",
    "url": "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
    "width": 170
  },
  "created_time": "2018-07-17T12:42:03+00:00",
  "id": "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
  "name": "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
  "total_item_count": 38
}
```

Metadata about editorial livefeed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_item|[EditorialCoverItem](#schemaeditorialcoveritem)|false|none|Cover image for editorial livefeed|
|created_time|string(date-time)|false|none|When the livefeed was initially created|
|id|string|true|none|Livefeed ID|
|name|string|true|none|Name of the livefeed|
|total_item_count|integer|true|none|Total count of items in the livefeed|

<h2 id="tocS_EditorialImageLivefeedList">EditorialImageLivefeedList</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagelivefeedlist"></a>
<a id="schema_EditorialImageLivefeedList"></a>
<a id="tocSeditorialimagelivefeedlist"></a>
<a id="tocseditorialimagelivefeedlist"></a>

```json
{
  "data": [
    {
      "cover_item": {
        "height": 117,
        "id": "9763363q",
        "url": "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
        "width": 170
      },
      "created_time": "2018-07-17T12:42:03+00:00",
      "id": "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
      "name": "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
      "total_item_count": 38
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 5300
}
```

List of editorial livefeeds

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialLivefeed](#schemaeditoriallivefeed)]|true|none|Editorial livefeeds|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|true|none|Total count of all results|

<h2 id="tocS_EditorialLivefeed">EditorialLivefeed</h2>
<!-- backwards compatibility -->
<a id="schemaeditoriallivefeed"></a>
<a id="schema_EditorialLivefeed"></a>
<a id="tocSeditoriallivefeed"></a>
<a id="tocseditoriallivefeed"></a>

```json
{
  "cover_item": {
    "height": 117,
    "id": "9763363q",
    "url": "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
    "width": 170
  },
  "created_time": "2018-07-17T12:42:03+00:00",
  "id": "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
  "name": "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
  "total_item_count": 38
}
```

Metadata about editorial livefeed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_item|[EditorialCoverItem](#schemaeditorialcoveritem)|false|none|Cover image for editorial livefeed|
|created_time|string(date-time)|false|none|When the livefeed was initially created|
|id|string|true|none|Livefeed ID|
|name|string|true|none|Name of the livefeed|
|total_item_count|integer|true|none|Total count of items in the livefeed|

<h2 id="tocS_EditorialLivefeedList">EditorialLivefeedList</h2>
<!-- backwards compatibility -->
<a id="schemaeditoriallivefeedlist"></a>
<a id="schema_EditorialLivefeedList"></a>
<a id="tocSeditoriallivefeedlist"></a>
<a id="tocseditoriallivefeedlist"></a>

```json
{
  "data": [
    {
      "cover_item": {
        "height": 117,
        "id": "9763363q",
        "url": "https://editorial01.qa.shuttercorp.net/thumb/9763363q/51e28f39/Shutterstock_9763363q.jpg",
        "width": 170
      },
      "created_time": "2018-07-17T12:42:03+00:00",
      "id": "2018%2F07%2F17%2FPrince%20Charles%20and%20Camilla%20Duchess%20of%20Cornwall%20visit%20to%20Cornwall%2C%20Day%202",
      "name": "Prince Charles and Camilla Duchess of Cornwall visit to Cornwall, Day 2",
      "total_item_count": 38
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 56
}
```

List of editorial livefeeds

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialLivefeed](#schemaeditoriallivefeed)]|true|none|Editorial livefeeds|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|true|none|Total count of all results|

<h2 id="tocS_EditorialSearchResults">EditorialSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialsearchresults"></a>
<a id="schema_EditorialSearchResults"></a>
<a id="tocSeditorialsearchresults"></a>
<a id="tocseditorialsearchresults"></a>

```json
{
  "data": [
    {
      "aspect": 1.621,
      "assets": {
        "medium_jpg": {
          "display_name": "Med",
          "height": 617,
          "is_licensable": true,
          "width": 1000
        },
        "original": {
          "display_name": "Original",
          "height": 3693,
          "is_licensable": true,
          "width": 5985
        },
        "small_jpg": {
          "display_name": "Small",
          "height": 309,
          "is_licensable": true,
          "width": 500
        },
        "thumb_170": {
          "height": 105,
          "url": "https://editorial01.qa.shuttercorp.net/thumb/10687730b/272a999e/Shutterstock_10687730b.jpg",
          "width": 170
        },
        "thumb_220": {
          "height": 136,
          "url": "https://editorial01.qa.shuttercorp.net/thumb-220/10687730b/927a6ebe/Shutterstock_10687730b.jpg",
          "width": 220
        },
        "watermark_1500": {
          "height": 926,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-1500/10687730b/ee2d7ae1/Shutterstock_10687730b.jpg",
          "width": 1500
        },
        "watermark_450": {
          "height": 278,
          "url": "https://editorial01.qa.shuttercorp.net/wm-preview-450/10687730b/ff2443ad/Shutterstock_10687730b.jpg",
          "width": 450
        }
      },
      "byline": "Jon Super/AP/Shutterstock",
      "caption": "",
      "categories": [
        {
          "name": "Sport"
        }
      ],
      "date_taken": "2021-05-11",
      "description": "Security and stewards stand outside the Old Trafford stadium in Manchester, England, ahead of the English Premier League soccer match between Manchester United and Leicester City. This is the first Manchester United home match since fans protested against American owner Joel Glazer, forcing the postponement of the team's Premier League game against Liverpool. The protests prompted Glazer to publish a letter in which he pledged to accelerate discussions with fans about supporters being able to have a greater say at the club",
      "id": "10687730b",
      "keywords": [
        "england",
        "europe",
        "leicester city fc",
        "manchester",
        "manchester united fc",
        "men's soccer",
        "men's sports",
        "premier league",
        "professional soccer",
        "soccer",
        "sports",
        "united kingdom",
        "western europe",
        "wsoc"
      ],
      "title": "Soccer Premier League, Manchester, United Kingdom - 11 May 2021"
    }
  ],
  "next": "eyJ2IjoyLCJzIjoxLCJwIjpbMF19",
  "per_page": 1,
  "prev": "",
  "search_id": "BaMzOAkpHIvfnuWVRFs1ag",
  "total_count": 46845
}
```

Editorial search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialContent](#schemaeditorialcontent)]|true|none|Editorial items|
|message|string|false|none|Optional error message|
|next|string|false|none|Cursor value that represents the next page of results|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|prev|string|false|none|Cursor value that represents the previous page of results|
|search_id|string|false|none|Unique identifier for the search request|
|total_count|integer|true|none|Total count of all results|

<h2 id="tocS_EditorialUpdatedContent">EditorialUpdatedContent</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialupdatedcontent"></a>
<a id="schema_EditorialUpdatedContent"></a>
<a id="tocSeditorialupdatedcontent"></a>
<a id="tocseditorialupdatedcontent"></a>

```json
{
  "aspect": 1.481,
  "assets": {
    "medium_jpg": {
      "display_name": "Med",
      "height": 675,
      "is_licensable": true,
      "width": 1000
    },
    "original": {
      "display_name": "Original",
      "height": 3263,
      "is_licensable": true,
      "width": 4831
    },
    "small_jpg": {
      "display_name": "Small",
      "height": 337,
      "is_licensable": true,
      "width": 500
    },
    "thumb_170": {
      "height": 115,
      "url": "https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg",
      "width": 170
    },
    "thumb_220": {
      "height": 149,
      "url": "https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg",
      "width": 220
    },
    "watermark_1500": {
      "height": 1500,
      "url": "https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg",
      "width": 1040
    },
    "watermark_450": {
      "height": 304,
      "url": "https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg",
      "width": 450
    }
  },
  "byline": "ALEX HOFFORD/EPA-EFE/Shutterstock",
  "caption": "",
  "categories": [],
  "commercial_status": {
    "status": "available"
  },
  "date_taken": "2018-08-24",
  "description": "Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.",
  "id": "9804979n",
  "keywords": [],
  "rights": {
    "countries": "CAN,+DEU,+GBR,+USA,-*"
  },
  "supplier_code": "EPA",
  "title": "Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018",
  "updated_time": "2019-07-15T20:04:44-04:00",
  "updates": [
    "addition"
  ]
}
```

Metadata about updated editorial content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|number|false|none|none|
|assets|[EditorialAssets](#schemaeditorialassets)|false|none|Asset information, including size and thumbnail URLs|
|byline|string|false|none|none|
|caption|string|false|none|none|
|categories|[[EditorialCategory](#schemaeditorialcategory)]|false|none|List of categories|
|commercial_status|object|false|none|none|
|created_time|string(date-time)|false|none|none|
|date_taken|string(date)|false|none|none|
|description|string|false|none|none|
|id|string|true|none|none|
|keywords|[string]|false|none|none|
|rights|object|false|none|none|
|special_instructions|string|false|none|none|
|supplier_code|string|false|none|none|
|title|string|false|none|none|
|updated_time|string(date-time)|false|none|none|
|updates|[string]|false|none|none|

<h2 id="tocS_EditorialUpdatedResults">EditorialUpdatedResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialupdatedresults"></a>
<a id="schema_EditorialUpdatedResults"></a>
<a id="tocSeditorialupdatedresults"></a>
<a id="tocseditorialupdatedresults"></a>

```json
{
  "data": [
    {
      "aspect": 1.481,
      "assets": {
        "medium_jpg": {
          "display_name": "Med",
          "height": 675,
          "is_licensable": true,
          "width": 1000
        },
        "original": {
          "display_name": "Original",
          "height": 3263,
          "is_licensable": true,
          "width": 4831
        },
        "small_jpg": {
          "display_name": "Small",
          "height": 337,
          "is_licensable": true,
          "width": 500
        },
        "thumb_170": {
          "height": 115,
          "url": "https://editorial01.shutterstock.com/thumb/9804979n/c4377a53/Shutterstock_9804979n.jpg",
          "width": 170
        },
        "thumb_220": {
          "height": 149,
          "url": "https://editorial01.shutterstock.com/thumb-220/9804979n/c57a68c7/Shutterstock_9804979n.jpg",
          "width": 220
        },
        "watermark_1500": {
          "height": 1500,
          "url": "https://editorial01.shutterstock.com/wm-preview-1500/9933285a/ab82fea4/Shutterstock_9933285a.jpg",
          "width": 1040
        },
        "watermark_450": {
          "height": 304,
          "url": "https://editorial01.shutterstock.com/wm-preview-450/9804979n/37d19dce/Shutterstock_9804979n.jpg",
          "width": 450
        }
      },
      "byline": "ALEX HOFFORD/EPA-EFE/Shutterstock",
      "caption": "",
      "categories": [],
      "commercial_status": {
        "status": "available"
      },
      "date_taken": "2018-08-24",
      "description": "Members of the TyLoo e-Sports team from China prepare to face off against the Kinguin e-Sports team from Poland at the ICBC (Asia) e-Sports and Music Festival Hong Kong 2018, Hong Kong, China, 24 August 2018. The festival runs from 24 to 26 August with professional gamers from around the world competing in international e-sports tournaments.",
      "id": "9804979n",
      "keywords": [],
      "rights": {
        "countries": "CAN,+DEU,+GBR,+USA,-*"
      },
      "supplier_code": "EPA",
      "title": "Hong Kong kicks off international e-Sports competition, China - 24 Aug 2018",
      "updated_time": "2019-07-15T20:04:44-04:00",
      "updates": [
        "addition"
      ]
    }
  ],
  "next": "eyJ2IjoxLCJzIjoxfQ==",
  "per_page": 1,
  "prev": ""
}
```

Editorial updated results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialUpdatedContent](#schemaeditorialupdatedcontent)]|true|none|Editorial updated items|
|message|string|false|none|Optional error message|
|next|string|false|none|Cursor value that represents the next page of results|
|per_page|integer|false|none|Number of results per page|
|prev|string|false|none|Cursor value that represents the previous page of results|

<h2 id="tocS_EditorialVideoAssets">EditorialVideoAssets</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideoassets"></a>
<a id="schema_EditorialVideoAssets"></a>
<a id="tocSeditorialvideoassets"></a>
<a id="tocseditorialvideoassets"></a>

```json
{
  "original": {
    "display_name": "HD",
    "file_size": 82233387,
    "format": "avc1",
    "fps": 30,
    "height": 1080,
    "is_licensable": true,
    "width": 1080
  },
  "preview_mp4": {
    "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4"
  },
  "preview_webm": {
    "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm"
  },
  "thumb_jpg": {
    "url": "https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg"
  }
}
```

Asset information, including size and thumbnail URLs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|original|[VideoSizeDetails](#schemavideosizedetails)|false|none|Video asset information|
|preview_mp4|[VideoPreviewUrl](#schemavideopreviewurl)|false|none|Video preview information|
|preview_webm|[VideoPreviewUrl](#schemavideopreviewurl)|false|none|Video preview information|
|thumb_jpg|[VideoPreviewUrl](#schemavideopreviewurl)|false|none|Video preview information|

<h2 id="tocS_EditorialVideoCategoryResults">EditorialVideoCategoryResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideocategoryresults"></a>
<a id="schema_EditorialVideoCategoryResults"></a>
<a id="tocSeditorialvideocategoryresults"></a>
<a id="tocseditorialvideocategoryresults"></a>

```json
{
  "data": [
    {
      "name": "Animal"
    },
    {
      "name": "Awards"
    },
    {
      "name": "Art"
    },
    {
      "name": "Film Stills"
    }
  ]
}
```

List of editorial video categories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialCategory](#schemaeditorialcategory)]|false|none|none|

<h2 id="tocS_EditorialVideoContent">EditorialVideoContent</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideocontent"></a>
<a id="schema_EditorialVideoContent"></a>
<a id="tocSeditorialvideocontent"></a>
<a id="tocseditorialvideocontent"></a>

```json
{
  "aspect": 1,
  "assets": {
    "original": {
      "display_name": "HD",
      "file_size": 82233387,
      "format": "avc1",
      "fps": 30,
      "height": 1080,
      "is_licensable": true,
      "width": 1080
    },
    "preview_mp4": {
      "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4"
    },
    "preview_webm": {
      "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm"
    },
    "thumb_jpg": {
      "url": "https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg"
    }
  },
  "byline": "ViralHog/Shutterstock",
  "caption": "",
  "categories": [],
  "date_taken": "2020-11-13",
  "description": "Info from Licensor: \"Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski's, and boats. He has brought joy to many people during the pandemic including those with cancer.\"",
  "id": "10679854a",
  "keywords": [
    "2020",
    "adorable",
    "birds",
    "bizarre",
    "canadian goose",
    "cute",
    "domesticated animals",
    "entertainment",
    "feel good",
    "flew",
    "flies",
    "fly",
    "flying",
    "fun",
    "goose",
    "jet skis",
    "nature",
    "odd",
    "pets",
    "played",
    "playing",
    "plays",
    "prior lake",
    "sports",
    "strange",
    "sweet",
    "usa",
    "viralhog",
    "virals",
    "water sports",
    "weird"
  ],
  "title": "Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020"
}
```

Metadata about editorial content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect|number|false|none|none|
|assets|[EditorialVideoAssets](#schemaeditorialvideoassets)|false|none|Asset information, including size and thumbnail URLs|
|byline|string|false|none|none|
|caption|string|false|none|none|
|categories|[[EditorialCategory](#schemaeditorialcategory)]|false|none|List of categories|
|date_taken|string(date)|false|none|none|
|description|string|false|none|none|
|id|string|true|none|none|
|keywords|[string]|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_EditorialVideoSearchResults">EditorialVideoSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideosearchresults"></a>
<a id="schema_EditorialVideoSearchResults"></a>
<a id="tocSeditorialvideosearchresults"></a>
<a id="tocseditorialvideosearchresults"></a>

```json
{
  "data": [
    {
      "aspect": 1,
      "assets": {
        "original": {
          "display_name": "HD",
          "file_size": 82233387,
          "format": "avc1",
          "fps": 30,
          "height": 1080,
          "is_licensable": true,
          "width": 1080
        },
        "preview_mp4": {
          "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-mp4/10679854a/M0T7A13aNej2g82bMTI4NjY=/Shutterstock_10679854a.mp4"
        },
        "preview_webm": {
          "url": "https://qa.editorial-cdn.shuttercorp.net/wm-preview-webm/10679854a/M4T6A63fN2j5g929MTI4NjY=/Shutterstock_10679854a.webm"
        },
        "thumb_jpg": {
          "url": "https://qa.editorial-cdn.shuttercorp.net/thumb-1/10679854a/M5TcAf30Ncjcge2eMTI4NjY=/Shutterstock_10679854a.jpg"
        }
      },
      "byline": "ViralHog/Shutterstock",
      "caption": "",
      "categories": [],
      "date_taken": "2020-11-13",
      "description": "Info from Licensor: \"Peeps the Canadian Goose has been raised with our family since a gosling. Peeps has made appearances on our local news channels, TV shows, and local newspapers. He has been trained to fly next to four wheelers, jet ski's, and boats. He has brought joy to many people during the pandemic including those with cancer.\"",
      "id": "10679854a",
      "keywords": [
        "2020",
        "adorable",
        "birds",
        "bizarre",
        "canadian goose",
        "cute",
        "domesticated animals",
        "entertainment",
        "feel good",
        "flew",
        "flies",
        "fly",
        "flying",
        "fun",
        "goose",
        "jet skis",
        "nature",
        "odd",
        "pets",
        "played",
        "playing",
        "plays",
        "prior lake",
        "sports",
        "strange",
        "sweet",
        "usa",
        "viralhog",
        "virals",
        "water sports",
        "weird"
      ],
      "title": "Peeps the Goose Has a Blast on a Jet Ski, Prior Lake, Minnesota, USA - 13 Nov 2020"
    }
  ],
  "next": "eyJ2IjoyLCJzIjoyMCwicCI6WzBdfQ==",
  "per_page": 1,
  "prev": "",
  "search_id": "zhmz9zLmpQehdTPvg8cacQ",
  "total_count": 331
}
```

Editorial search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[EditorialVideoContent](#schemaeditorialvideocontent)]|true|none|Editorial items|
|message|string|false|none|Optional error message|
|next|string|false|none|Cursor value that represents the next page of results|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|prev|string|false|none|Cursor value that represents the previous page of results|
|search_id|string|false|none|Unique identifier for the search request|
|total_count|integer|true|none|Total count of all results|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "VALIDATION_INVALID_TYPE",
  "data": "'10'",
  "message": "Invalid type: string should be integer",
  "path": "$.query.page"
}
```

Error object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The error code of this error|
|data|string|false|none|Debugging information about the error|
|items|[object]|false|none|A list of items that produced the error|
|message|string|true|none|Specific details about this error|
|path|string|false|none|Internal code reference to the source of the error|

<h2 id="tocS_FeaturedCollection">FeaturedCollection</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedcollection"></a>
<a id="schema_FeaturedCollection"></a>
<a id="tocSfeaturedcollection"></a>
<a id="tocsfeaturedcollection"></a>

```json
{
  "cover_item": {
    "url": "https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg"
  },
  "created_time": "2021-07-07T13:10:24.000Z",
  "id": "19853",
  "items_updated_time": "2021-07-08T12:33:37.000Z",
  "name": "Exercise & Fitness",
  "total_item_count": 82,
  "updated_time": "2021-07-07T13:10:24.000Z"
}
```

Metadata about a featured collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_item|[FeaturedCollectionCoverItem](#schemafeaturedcollectioncoveritem)|false|none|Featured collection cover item metadata|
|created_time|string(date-time)|false|none|Date that the collection was created|
|hero_item|[FeaturedCollectionCoverItem](#schemafeaturedcollectioncoveritem)|false|none|Top-level item that is meant as a cover asset, as the first asset seen to represent the collection|
|id|string|true|none|Collection ID|
|items_updated_time|string(date-time)|false|none|Date that an item in the collection was last added or removed|
|name|string|true|none|Name of the collection|
|share_url|string|false|none|Unique share url for the collection|
|total_item_count|integer|true|none|Total number of items in the collection|
|updated_time|string(date-time)|false|none|Date that the collection was last modified|

<h2 id="tocS_FeaturedCollectionCoverItem">FeaturedCollectionCoverItem</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedcollectioncoveritem"></a>
<a id="schema_FeaturedCollectionCoverItem"></a>
<a id="tocSfeaturedcollectioncoveritem"></a>
<a id="tocsfeaturedcollectioncoveritem"></a>

```json
{
  "url": "https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg"
}
```

Featured collection cover item metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL of the collection cover item|

<h2 id="tocS_FeaturedCollectionDataList">FeaturedCollectionDataList</h2>
<!-- backwards compatibility -->
<a id="schemafeaturedcollectiondatalist"></a>
<a id="schema_FeaturedCollectionDataList"></a>
<a id="tocSfeaturedcollectiondatalist"></a>
<a id="tocsfeaturedcollectiondatalist"></a>

```json
{
  "data": [
    {
      "cover_item": {
        "url": "https://ak.picdn.net/assets/cms/b467415246debdab45825d915a548f8f79b57882-Collection_1_Thumnail.jpg"
      },
      "created_time": "2021-07-07T13:10:24.000Z",
      "id": "19853",
      "items_updated_time": "2021-07-08T12:33:37.000Z",
      "name": "Exercise & Fitness",
      "total_item_count": 82,
      "updated_time": "2021-07-07T13:10:24.000Z"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 123455
}
```

List of featured collections

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[FeaturedCollection](#schemafeaturedcollection)]|false|none|Featured collections|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_GenreList">GenreList</h2>
<!-- backwards compatibility -->
<a id="schemagenrelist"></a>
<a id="schema_GenreList"></a>
<a id="tocSgenrelist"></a>
<a id="tocsgenrelist"></a>

```json
{
  "data": [
    "Rock",
    "Pop > Singer-Songwriter",
    "Pop > Synth Pop",
    "Production / Film Scores"
  ]
}
```

List of audio genres

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|true|none|List of genres|

<h2 id="tocS_ISOCountryCode">ISOCountryCode</h2>
<!-- backwards compatibility -->
<a id="schemaisocountrycode"></a>
<a id="schema_ISOCountryCode"></a>
<a id="tocSisocountrycode"></a>
<a id="tocsisocountrycode"></a>

```json
"USA"
```

A valid ISO 3166-1 Alpha-2 or ISO 3166-1 Alpha-3 code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string(country-code-3)|false|none|none|
|*oneOf*|string(country-code-2)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|ABW|
|*oneOf*|AFG|
|*oneOf*|AGO|
|*oneOf*|AIA|
|*oneOf*|ALA|
|*oneOf*|ALB|
|*oneOf*|AND|
|*oneOf*|ARE|
|*oneOf*|ARG|
|*oneOf*|ARM|
|*oneOf*|ASM|
|*oneOf*|ATA|
|*oneOf*|ATF|
|*oneOf*|ATG|
|*oneOf*|AUS|
|*oneOf*|AUT|
|*oneOf*|AZE|
|*oneOf*|BDI|
|*oneOf*|BEL|
|*oneOf*|BEN|
|*oneOf*|BES|
|*oneOf*|BFA|
|*oneOf*|BGD|
|*oneOf*|BGR|
|*oneOf*|BHR|
|*oneOf*|BHS|
|*oneOf*|BIH|
|*oneOf*|BLM|
|*oneOf*|BLR|
|*oneOf*|BLZ|
|*oneOf*|BMU|
|*oneOf*|BOL|
|*oneOf*|BRA|
|*oneOf*|BRB|
|*oneOf*|BRN|
|*oneOf*|BTN|
|*oneOf*|BVT|
|*oneOf*|BWA|
|*oneOf*|CAF|
|*oneOf*|CAN|
|*oneOf*|CCK|
|*oneOf*|CHE|
|*oneOf*|CHL|
|*oneOf*|CHN|
|*oneOf*|CIV|
|*oneOf*|CMR|
|*oneOf*|COD|
|*oneOf*|COG|
|*oneOf*|COK|
|*oneOf*|COL|
|*oneOf*|COM|
|*oneOf*|CPV|
|*oneOf*|CRI|
|*oneOf*|CUB|
|*oneOf*|CUW|
|*oneOf*|CXR|
|*oneOf*|CYM|
|*oneOf*|CYP|
|*oneOf*|CZE|
|*oneOf*|DEU|
|*oneOf*|DJI|
|*oneOf*|DMA|
|*oneOf*|DNK|
|*oneOf*|DOM|
|*oneOf*|DZA|
|*oneOf*|ECU|
|*oneOf*|EGY|
|*oneOf*|ERI|
|*oneOf*|ESH|
|*oneOf*|ESP|
|*oneOf*|EST|
|*oneOf*|ETH|
|*oneOf*|FIN|
|*oneOf*|FJI|
|*oneOf*|FLK|
|*oneOf*|FRA|
|*oneOf*|FRO|
|*oneOf*|FSM|
|*oneOf*|GAB|
|*oneOf*|GBR|
|*oneOf*|GEO|
|*oneOf*|GGY|
|*oneOf*|GHA|
|*oneOf*|GIB|
|*oneOf*|GIN|
|*oneOf*|GLP|
|*oneOf*|GMB|
|*oneOf*|GNB|
|*oneOf*|GNQ|
|*oneOf*|GRC|
|*oneOf*|GRD|
|*oneOf*|GRL|
|*oneOf*|GTM|
|*oneOf*|GUF|
|*oneOf*|GUM|
|*oneOf*|GUY|
|*oneOf*|HKG|
|*oneOf*|HMD|
|*oneOf*|HND|
|*oneOf*|HRV|
|*oneOf*|HTI|
|*oneOf*|HUN|
|*oneOf*|IDN|
|*oneOf*|IMN|
|*oneOf*|IND|
|*oneOf*|IOT|
|*oneOf*|IRL|
|*oneOf*|IRN|
|*oneOf*|IRQ|
|*oneOf*|ISL|
|*oneOf*|ISR|
|*oneOf*|ITA|
|*oneOf*|JAM|
|*oneOf*|JEY|
|*oneOf*|JOR|
|*oneOf*|JPN|
|*oneOf*|KAZ|
|*oneOf*|KEN|
|*oneOf*|KGZ|
|*oneOf*|KHM|
|*oneOf*|KIR|
|*oneOf*|KNA|
|*oneOf*|KOR|
|*oneOf*|KWT|
|*oneOf*|LAO|
|*oneOf*|LBN|
|*oneOf*|LBR|
|*oneOf*|LBY|
|*oneOf*|LCA|
|*oneOf*|LIE|
|*oneOf*|LKA|
|*oneOf*|LSO|
|*oneOf*|LTU|
|*oneOf*|LUX|
|*oneOf*|LVA|
|*oneOf*|MAC|
|*oneOf*|MAF|
|*oneOf*|MAR|
|*oneOf*|MCO|
|*oneOf*|MDA|
|*oneOf*|MDG|
|*oneOf*|MDV|
|*oneOf*|MEX|
|*oneOf*|MHL|
|*oneOf*|MKD|
|*oneOf*|MLI|
|*oneOf*|MLT|
|*oneOf*|MMR|
|*oneOf*|MNE|
|*oneOf*|MNG|
|*oneOf*|MNP|
|*oneOf*|MOZ|
|*oneOf*|MRT|
|*oneOf*|MSR|
|*oneOf*|MTQ|
|*oneOf*|MUS|
|*oneOf*|MWI|
|*oneOf*|MYS|
|*oneOf*|MYT|
|*oneOf*|NAM|
|*oneOf*|NCL|
|*oneOf*|NER|
|*oneOf*|NFK|
|*oneOf*|NGA|
|*oneOf*|NIC|
|*oneOf*|NIU|
|*oneOf*|NLD|
|*oneOf*|NOR|
|*oneOf*|NPL|
|*oneOf*|NRU|
|*oneOf*|NZL|
|*oneOf*|OMN|
|*oneOf*|PAK|
|*oneOf*|PAN|
|*oneOf*|PCN|
|*oneOf*|PER|
|*oneOf*|PHL|
|*oneOf*|PLW|
|*oneOf*|PNG|
|*oneOf*|POL|
|*oneOf*|PRI|
|*oneOf*|PRK|
|*oneOf*|PRT|
|*oneOf*|PRY|
|*oneOf*|PSE|
|*oneOf*|PYF|
|*oneOf*|QAT|
|*oneOf*|REU|
|*oneOf*|ROU|
|*oneOf*|RUS|
|*oneOf*|RWA|
|*oneOf*|SAU|
|*oneOf*|SDN|
|*oneOf*|SEN|
|*oneOf*|SGP|
|*oneOf*|SGS|
|*oneOf*|SHN|
|*oneOf*|SJM|
|*oneOf*|SLB|
|*oneOf*|SLE|
|*oneOf*|SLV|
|*oneOf*|SMR|
|*oneOf*|SOM|
|*oneOf*|SPM|
|*oneOf*|SRB|
|*oneOf*|SSD|
|*oneOf*|STP|
|*oneOf*|SUR|
|*oneOf*|SVK|
|*oneOf*|SVN|
|*oneOf*|SWE|
|*oneOf*|SWZ|
|*oneOf*|SXM|
|*oneOf*|SYC|
|*oneOf*|SYR|
|*oneOf*|TCA|
|*oneOf*|TCD|
|*oneOf*|TGO|
|*oneOf*|THA|
|*oneOf*|TJK|
|*oneOf*|TKL|
|*oneOf*|TKM|
|*oneOf*|TLS|
|*oneOf*|TON|
|*oneOf*|TTO|
|*oneOf*|TUN|
|*oneOf*|TUR|
|*oneOf*|TUV|
|*oneOf*|TWN|
|*oneOf*|TZA|
|*oneOf*|UGA|
|*oneOf*|UKR|
|*oneOf*|UMI|
|*oneOf*|URY|
|*oneOf*|USA|
|*oneOf*|UZB|
|*oneOf*|VAT|
|*oneOf*|VCT|
|*oneOf*|VEN|
|*oneOf*|VGB|
|*oneOf*|VIR|
|*oneOf*|VNM|
|*oneOf*|VUT|
|*oneOf*|WLF|
|*oneOf*|WSM|
|*oneOf*|YEM|
|*oneOf*|ZAF|
|*oneOf*|ZMB|
|*oneOf*|ZWE|
|*oneOf*|AF|
|*oneOf*|AX|
|*oneOf*|AL|
|*oneOf*|DZ|
|*oneOf*|AS|
|*oneOf*|AD|
|*oneOf*|AO|
|*oneOf*|AI|
|*oneOf*|AQ|
|*oneOf*|AG|
|*oneOf*|AR|
|*oneOf*|AM|
|*oneOf*|AW|
|*oneOf*|AU|
|*oneOf*|AT|
|*oneOf*|AZ|
|*oneOf*|BS|
|*oneOf*|BH|
|*oneOf*|BD|
|*oneOf*|BB|
|*oneOf*|BY|
|*oneOf*|BE|
|*oneOf*|BZ|
|*oneOf*|BJ|
|*oneOf*|BM|
|*oneOf*|BT|
|*oneOf*|BO|
|*oneOf*|BA|
|*oneOf*|BW|
|*oneOf*|BV|
|*oneOf*|BR|
|*oneOf*|IO|
|*oneOf*|BN|
|*oneOf*|BG|
|*oneOf*|BF|
|*oneOf*|BI|
|*oneOf*|KH|
|*oneOf*|CM|
|*oneOf*|CA|
|*oneOf*|CV|
|*oneOf*|KY|
|*oneOf*|CF|
|*oneOf*|TD|
|*oneOf*|CL|
|*oneOf*|CN|
|*oneOf*|CX|
|*oneOf*|CC|
|*oneOf*|CO|
|*oneOf*|KM|
|*oneOf*|CG|
|*oneOf*|CD|
|*oneOf*|CK|
|*oneOf*|CR|
|*oneOf*|CI|
|*oneOf*|HR|
|*oneOf*|CU|
|*oneOf*|CY|
|*oneOf*|CZ|
|*oneOf*|DK|
|*oneOf*|DJ|
|*oneOf*|DM|
|*oneOf*|DO|
|*oneOf*|EC|
|*oneOf*|EG|
|*oneOf*|SV|
|*oneOf*|GQ|
|*oneOf*|ER|
|*oneOf*|EE|
|*oneOf*|ET|
|*oneOf*|FK|
|*oneOf*|FO|
|*oneOf*|FJ|
|*oneOf*|FI|
|*oneOf*|FR|
|*oneOf*|GF|
|*oneOf*|PF|
|*oneOf*|TF|
|*oneOf*|GA|
|*oneOf*|GM|
|*oneOf*|GE|
|*oneOf*|DE|
|*oneOf*|GH|
|*oneOf*|GI|
|*oneOf*|GR|
|*oneOf*|GL|
|*oneOf*|GD|
|*oneOf*|GP|
|*oneOf*|GU|
|*oneOf*|GT|
|*oneOf*|GG|
|*oneOf*|GN|
|*oneOf*|GW|
|*oneOf*|GY|
|*oneOf*|HT|
|*oneOf*|HM|
|*oneOf*|VA|
|*oneOf*|HN|
|*oneOf*|HK|
|*oneOf*|HU|
|*oneOf*|IS|
|*oneOf*|IN|
|*oneOf*|ID|
|*oneOf*|IR|
|*oneOf*|IQ|
|*oneOf*|IE|
|*oneOf*|IM|
|*oneOf*|IL|
|*oneOf*|IT|
|*oneOf*|JM|
|*oneOf*|JP|
|*oneOf*|JE|
|*oneOf*|JO|
|*oneOf*|KZ|
|*oneOf*|KE|
|*oneOf*|KI|
|*oneOf*|KR|
|*oneOf*|KW|
|*oneOf*|KG|
|*oneOf*|LA|
|*oneOf*|LV|
|*oneOf*|LB|
|*oneOf*|LS|
|*oneOf*|LR|
|*oneOf*|LY|
|*oneOf*|LI|
|*oneOf*|LT|
|*oneOf*|LU|
|*oneOf*|MO|
|*oneOf*|MK|
|*oneOf*|MG|
|*oneOf*|MW|
|*oneOf*|MY|
|*oneOf*|MV|
|*oneOf*|ML|
|*oneOf*|MT|
|*oneOf*|MH|
|*oneOf*|MQ|
|*oneOf*|MR|
|*oneOf*|MU|
|*oneOf*|YT|
|*oneOf*|MX|
|*oneOf*|FM|
|*oneOf*|MD|
|*oneOf*|MC|
|*oneOf*|MN|
|*oneOf*|ME|
|*oneOf*|MS|
|*oneOf*|MA|
|*oneOf*|MZ|
|*oneOf*|MM|
|*oneOf*|NA|
|*oneOf*|NR|
|*oneOf*|NP|
|*oneOf*|NL|
|*oneOf*|AN|
|*oneOf*|NC|
|*oneOf*|NZ|
|*oneOf*|NI|
|*oneOf*|NE|
|*oneOf*|NG|
|*oneOf*|NU|
|*oneOf*|NF|
|*oneOf*|MP|
|*oneOf*|NO|
|*oneOf*|OM|
|*oneOf*|PK|
|*oneOf*|PW|
|*oneOf*|PS|
|*oneOf*|PA|
|*oneOf*|PG|
|*oneOf*|PY|
|*oneOf*|PE|
|*oneOf*|PH|
|*oneOf*|PN|
|*oneOf*|PL|
|*oneOf*|PT|
|*oneOf*|PR|
|*oneOf*|QA|
|*oneOf*|RE|
|*oneOf*|RO|
|*oneOf*|RU|
|*oneOf*|RW|
|*oneOf*|BL|
|*oneOf*|SH|
|*oneOf*|KN|
|*oneOf*|LC|
|*oneOf*|MF|
|*oneOf*|PM|
|*oneOf*|VC|
|*oneOf*|WS|
|*oneOf*|SM|
|*oneOf*|ST|
|*oneOf*|SA|
|*oneOf*|SN|
|*oneOf*|RS|
|*oneOf*|SC|
|*oneOf*|SL|
|*oneOf*|SG|
|*oneOf*|SK|
|*oneOf*|SI|
|*oneOf*|SB|
|*oneOf*|SO|
|*oneOf*|ZA|
|*oneOf*|GS|
|*oneOf*|ES|
|*oneOf*|LK|
|*oneOf*|SD|
|*oneOf*|SR|
|*oneOf*|SJ|
|*oneOf*|SZ|
|*oneOf*|SE|
|*oneOf*|CH|
|*oneOf*|SY|
|*oneOf*|TW|
|*oneOf*|TJ|
|*oneOf*|TZ|
|*oneOf*|TH|
|*oneOf*|TL|
|*oneOf*|TG|
|*oneOf*|TK|
|*oneOf*|TO|
|*oneOf*|TT|
|*oneOf*|TN|
|*oneOf*|TR|
|*oneOf*|TM|
|*oneOf*|TC|
|*oneOf*|TV|
|*oneOf*|UG|
|*oneOf*|UA|
|*oneOf*|AE|
|*oneOf*|GB|
|*oneOf*|US|
|*oneOf*|UM|
|*oneOf*|UY|
|*oneOf*|UZ|
|*oneOf*|VU|
|*oneOf*|VE|
|*oneOf*|VN|
|*oneOf*|VG|
|*oneOf*|VI|
|*oneOf*|WF|
|*oneOf*|EH|
|*oneOf*|YE|
|*oneOf*|ZM|
|*oneOf*|ZW|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "aspect": 1.5,
  "assets": {
    "huge_thumb": {
      "height": 260,
      "url": "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
      "width": 390
    },
    "large_thumb": {
      "height": 100,
      "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width": 150
    },
    "preview": {
      "height": 300,
      "url": "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width": 450
    },
    "preview_1000": {
      "height": 667,
      "url": "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
      "width": 1000
    },
    "preview_1500": {
      "height": 1000,
      "url": "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width": 1500
    },
    "small_thumb": {
      "height": 67,
      "url": "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
      "width": 100
    }
  },
  "contributor": {
    "id": "250738318"
  },
  "description": "cropped image of woman gardening",
  "has_model_release": true,
  "id": "1572478477",
  "image_type": "photo",
  "media_type": "image",
  "original_filename": "123.jpg"
}
```

Information about an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_date|string(date)|false|none|Date that the image was added by the contributor|
|affiliate_url|string(uri)|false|none|Affiliate referral link; appears only for registered affiliate partners|
|aspect|number|false|none|Aspect ratio of the image in decimal format, such as 0.6667|
|assets|[ImageAssets](#schemaimageassets)|false|none|Image asset information|
|categories|[[Category](#schemacategory)]|false|none|Categories that this image is a part of|
|contributor|[Contributor](#schemacontributor)|true|none|Information about a contributor|
|description|string|false|none|Detailed description of the image|
|has_model_release|boolean|false|none|Indicates whether there are model releases for the image|
|has_property_release|boolean|false|none|Indicates whether there are property releases for the image|
|id|string|true|none|Image ID|
|image_type|string|false|none|Type of image|
|insights|object|false|none|AI-powered insights about how the asset will perform for the objective and audience|
|is_adult|boolean|false|none|Whether or not this image contains adult content|
|is_editorial|boolean|false|none|Whether or not this image is editorial content|
|is_illustration|boolean|false|none|Whether or not this image is an illustration|
|keywords|[string]|false|none|Keywords associated with the content of this image|
|media_type|string|true|none|Media type of this image, should always be "image"|
|model_releases|[[ModelRelease](#schemamodelrelease)]|false|none|List of model releases|
|models|[[Model](#schemamodel)]|false|none|List of models|
|releases|[string]|false|none|List of all releases of this image|
|url|string|false|none|Link to image information page; included only for certain accounts|

<h2 id="tocS_ImageAssets">ImageAssets</h2>
<!-- backwards compatibility -->
<a id="schemaimageassets"></a>
<a id="schema_ImageAssets"></a>
<a id="tocSimageassets"></a>
<a id="tocsimageassets"></a>

```json
{
  "huge_thumb": {
    "height": 260,
    "url": "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
    "width": 390
  },
  "large_thumb": {
    "height": 100,
    "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
    "width": 150
  },
  "preview": {
    "height": 300,
    "url": "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
    "width": 450
  },
  "preview_1000": {
    "height": 667,
    "url": "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
    "width": 1000
  },
  "preview_1500": {
    "height": 1000,
    "url": "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
    "width": 1500
  },
  "small_thumb": {
    "height": 67,
    "url": "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
    "width": 100
  }
}
```

Information about the assets that are part of an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|huge_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|huge_thumb|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|large_thumb|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|medium_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|preview|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|preview_1000|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|preview_1500|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|small_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|small_thumb|[Thumbnail](#schemathumbnail)|false|none|Image thumbnail information|
|supersize_jpg|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|
|vector_eps|[ImageSizeDetails](#schemaimagesizedetails)|false|none|Image size information|

<h2 id="tocS_ImageCreateRequest">ImageCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimagecreaterequest"></a>
<a id="schema_ImageCreateRequest"></a>
<a id="tocSimagecreaterequest"></a>
<a id="tocsimagecreaterequest"></a>

```json
{
  "base64_image": "R0lGODlhgACAAPcAAEwiBLyaLOzNUNmWFNjOrNSuN7x6PPzqeOTMgfKSDMyuTPzwsdi2dHwuBPzbVu"
}
```

Request to upload an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base64_image|string|true|none|A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height|

<h2 id="tocS_ImageCreateResponse">ImageCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimagecreateresponse"></a>
<a id="schema_ImageCreateResponse"></a>
<a id="tocSimagecreateresponse"></a>
<a id="tocsimagecreateresponse"></a>

```json
{
  "id": "Udb14e1c3540bdbf82b4b3fe12d3a44f2"
}
```

Image upload information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_ImageDataList">ImageDataList</h2>
<!-- backwards compatibility -->
<a id="schemaimagedatalist"></a>
<a id="schema_ImageDataList"></a>
<a id="tocSimagedatalist"></a>
<a id="tocsimagedatalist"></a>

```json
{
  "data": [
    {
      "aspect": 1.5,
      "assets": {
        "huge_thumb": {
          "height": 260,
          "url": "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
          "width": 390
        },
        "large_thumb": {
          "height": 100,
          "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 150
        },
        "preview": {
          "height": 300,
          "url": "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 450
        },
        "preview_1000": {
          "height": 667,
          "url": "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
          "width": 1000
        },
        "preview_1500": {
          "height": 1000,
          "url": "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 1500
        },
        "small_thumb": {
          "height": 67,
          "url": "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 100
        }
      },
      "contributor": {
        "id": "250738318"
      },
      "description": "cropped image of woman gardening",
      "has_model_release": true,
      "id": "1572478477",
      "image_type": "photo",
      "media_type": "image"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 123455
}
```

List of images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Image](#schemaimage)]|false|none|Images|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_ImageSearchResults">ImageSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchresults"></a>
<a id="schema_ImageSearchResults"></a>
<a id="tocSimagesearchresults"></a>
<a id="tocsimagesearchresults"></a>

```json
{
  "data": [
    {
      "aspect": 1.5,
      "assets": {
        "huge_thumb": {
          "height": 260,
          "url": "https://image.shutterstock.com/image-photo/cropped-image-woman-gardening-260nw-1572478477.jpg",
          "width": 390
        },
        "large_thumb": {
          "height": 100,
          "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 150
        },
        "preview": {
          "height": 300,
          "url": "https://image.shutterstock.com/display_pic_with_logo/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 450
        },
        "preview_1000": {
          "height": 667,
          "url": "https://ak.picdn.net/shutterstock/photos/1572478477/watermark_1000/1706028c641ea2f443057287c67d9b91/preview_1000-1572478477.jpg",
          "width": 1000
        },
        "preview_1500": {
          "height": 1000,
          "url": "https://image.shutterstock.com/z/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 1500
        },
        "small_thumb": {
          "height": 67,
          "url": "https://thumb7.shutterstock.com/thumb_small/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
          "width": 100
        }
      },
      "contributor": {
        "id": "250738318"
      },
      "description": "cropped image of woman gardening",
      "has_model_release": true,
      "id": "1572478477",
      "image_type": "photo",
      "media_type": "image"
    }
  ],
  "page": 1,
  "per_page": 5,
  "search_id": "749090bb-2967-4a20-b22e-c800dc845e10",
  "spellcheck_info": {},
  "total_count": 45
}
```

Image search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Image](#schemaimage)]|true|none|List of images|
|insights|[Insights](#schemainsights)|false|none|AI-powered insights about an asset, based on the specified audience and objective|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|search_id|string|true|none|Unique identifier for the search request|
|spellcheck_info|object|false|none|Returns information if search phrase has potentially been mistyped or another query would lead to better search results|
|total_count|integer|true|none|Total count of all results across all pages|

<h2 id="tocS_ImageSizeDetails">ImageSizeDetails</h2>
<!-- backwards compatibility -->
<a id="schemaimagesizedetails"></a>
<a id="schema_ImageSizeDetails"></a>
<a id="tocSimagesizedetails"></a>
<a id="tocsimagesizedetails"></a>

```json
{
  "display_name": "Med",
  "dpi": 300,
  "file_size": 860200,
  "format": "jpg",
  "height": 667,
  "is_licensable": true,
  "width": 1000
}
```

Image size information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|Display name of this image size|
|dpi|integer|false|none|none|
|file_size|integer|false|none|File size (in bytes) of this image size|
|format|string|false|none|Format of this image size|
|height|integer|false|none|Height of this image size|
|is_licensable|boolean|false|none|Whether or not this image can be licensed in this image size|
|width|integer|false|none|Width of this image size|

<h2 id="tocS_Insights">Insights</h2>
<!-- backwards compatibility -->
<a id="schemainsights"></a>
<a id="schema_Insights"></a>
<a id="tocSinsights"></a>
<a id="tocsinsights"></a>

```json
{
  "label_performance": [
    {
      "name": "Nature",
      "percentile_performance": 98.82123565673828
    },
    {
      "name": "Outdoors",
      "percentile_performance": 98.63294982910156
    }
  ]
}
```

AI-powered insights about an asset, based on the specified audience and objective

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label_performance|[object]|true|none|How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images|

<h2 id="tocS_Instrument">Instrument</h2>
<!-- backwards compatibility -->
<a id="schemainstrument"></a>
<a id="schema_Instrument"></a>
<a id="tocSinstrument"></a>
<a id="tocsinstrument"></a>

```json
{
  "id": "bright_roomy_kit",
  "name": "Bright Roomy Kit",
  "previews": [
    {
      "content_type": "audio/mp3",
      "url": "https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3"
    }
  ],
  "tags": [
    "Percussion",
    "Aux Percs",
    "Set Cymbals",
    "Crash",
    "Open",
    "Ride",
    "Set Hi-Hat",
    "Set Kicks",
    "Stick Snare",
    "Quad Toms",
    "Roto Toms"
  ]
}
```

Information about an musical instrument

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the instrument|
|name|string|false|none|Name of the instrument|
|previews|[[Preview](#schemapreview)]|false|none|Preview of the instrument|
|tags|[string]|false|none|List of tags|

<h2 id="tocS_InstrumentList">InstrumentList</h2>
<!-- backwards compatibility -->
<a id="schemainstrumentlist"></a>
<a id="schema_InstrumentList"></a>
<a id="tocSinstrumentlist"></a>
<a id="tocsinstrumentlist"></a>

```json
{
  "data": [
    "Orchestra",
    "Organ",
    "Oud",
    "Pads",
    "Electric Guitar"
  ]
}
```

List of instruments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|true|none|List of instruments|

<h2 id="tocS_Instruments">Instruments</h2>
<!-- backwards compatibility -->
<a id="schemainstruments"></a>
<a id="schema_Instruments"></a>
<a id="tocSinstruments"></a>
<a id="tocsinstruments"></a>

```json
{
  "id": "bright_roomy_kit",
  "name": "Bright Roomy Kit"
}
```

Instruments

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The string id of the instrument|
|name|string|false|none|The string name of the instrument|

<h2 id="tocS_InstrumentsListResult">InstrumentsListResult</h2>
<!-- backwards compatibility -->
<a id="schemainstrumentslistresult"></a>
<a id="schema_InstrumentsListResult"></a>
<a id="tocSinstrumentslistresult"></a>
<a id="tocsinstrumentslistresult"></a>

```json
{
  "data": [
    {
      "id": "bright_roomy_kit",
      "name": "Bright Roomy Kit",
      "previews": [
        {
          "content_type": "audio/mp3",
          "url": "https://public-cdn.ampermusic.com/instruments/previews/bright_roomy_kit_v1.mp3"
        }
      ],
      "tags": [
        "Percussion",
        "Aux Percs",
        "Set Cymbals",
        "Crash",
        "Open",
        "Ride",
        "Set Hi-Hat",
        "Set Kicks",
        "Stick Snare",
        "Quad Toms",
        "Roto Toms"
      ]
    }
  ],
  "page": 1,
  "per_page": 5
}
```

Image search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Instrument](#schemainstrument)]|false|none|List of instrumnets|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|

<h2 id="tocS_KeywordDataList">KeywordDataList</h2>
<!-- backwards compatibility -->
<a id="schemakeyworddatalist"></a>
<a id="schema_KeywordDataList"></a>
<a id="tocSkeyworddatalist"></a>
<a id="tocskeyworddatalist"></a>

```json
{
  "data": [
    "nature",
    "wildlife",
    "animal",
    "cute",
    "bamboo",
    "panda",
    "china",
    "wild",
    "endangered",
    "black",
    "bear"
  ]
}
```

List of keywords

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|Keywords|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|

<h2 id="tocS_Language">Language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_Language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"cs"
```

Language code

<h2 id="tocS_LicenseAudio">LicenseAudio</h2>
<!-- backwards compatibility -->
<a id="schemalicenseaudio"></a>
<a id="schema_LicenseAudio"></a>
<a id="tocSlicenseaudio"></a>
<a id="tocslicenseaudio"></a>

```json
{
  "audio_id": "123456789",
  "license": "audio_platform",
  "search_id": "987654321"
}
```

An audio track in a licensing request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_id|string|true|none|ID of the track being licensed|
|license|string|false|none|Type of license|
|search_id|string|false|none|ID of the search that led to this licensing event|

#### Enumerated Values

|Property|Value|
|---|---|
|license|audio_platform|
|license|premier_music_basic|
|license|premier_music_extended|
|license|premier_music_pro|
|license|premier_music_comp|
|license|asset_all_music|

<h2 id="tocS_LicenseAudioRequest">LicenseAudioRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicenseaudiorequest"></a>
<a id="schema_LicenseAudioRequest"></a>
<a id="tocSlicenseaudiorequest"></a>
<a id="tocslicenseaudiorequest"></a>

```json
{
  "audio": [
    {
      "audio_id": "591623",
      "license": "audio_platform",
      "metadata": {
        "customer_id": "12345"
      }
    }
  ]
}
```

Audio license request data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio|[[LicenseAudio](#schemalicenseaudio)]|true|none|List of audio tracks to license|

<h2 id="tocS_LicenseAudioResult">LicenseAudioResult</h2>
<!-- backwards compatibility -->
<a id="schemalicenseaudioresult"></a>
<a id="schema_LicenseAudioResult"></a>
<a id="tocSlicenseaudioresult"></a>
<a id="tocslicenseaudioresult"></a>

```json
{
  "allotment_charge": 1,
  "audio_id": "123456789",
  "download": {
    "url": "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
  },
  "license_id": "abcdef123456789ghijklmn"
}
```

The response to a licensing request for an audio track

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment_charge|number|false|none|Number of credits that this licensing event used|
|audio_id|string|true|none|ID of the track that was licensed|
|download|[AudioUrl](#schemaaudiourl)|false|none|Audio License URL object|
|error|string|false|none|Error information if applicable|
|license_id|string|false|none|ID of the license event|

<h2 id="tocS_LicenseAudioResultDataList">LicenseAudioResultDataList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseaudioresultdatalist"></a>
<a id="schema_LicenseAudioResultDataList"></a>
<a id="tocSlicenseaudioresultdatalist"></a>
<a id="tocslicenseaudioresultdatalist"></a>

```json
{
  "data": [
    {
      "allotment_charge": 1,
      "audio_id": "123456789",
      "download": {
        "url": "http://download2.dev.shutterstock.com/gatekeeper/abc/original.wav"
      },
      "license_id": "abcdef123456789ghijklmn"
    }
  ]
}
```

List of audio license results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseAudioResult](#schemalicenseaudioresult)]|false|none|License results|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_LicenseEditorialContent">LicenseEditorialContent</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialcontent"></a>
<a id="schema_LicenseEditorialContent"></a>
<a id="tocSlicenseeditorialcontent"></a>
<a id="tocslicenseeditorialcontent"></a>

```json
{
  "editorial_id": "10687730b",
  "license": "premier_editorial_comp",
  "metadata": {
    "customer_id": "12345",
    "geo_location": "US",
    "number_viewed": "15",
    "search_term": "dog"
  },
  "size": "original"
}
```

Individual editorial content to license

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editorial_id|string|true|none|Editorial ID|
|license|string|true|none|License agreement to use for licensing|
|metadata|[LicenseRequestMetadata](#schemalicenserequestmetadata)|false|none|Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder|
|size|string|false|none|Asset size to download|

#### Enumerated Values

|Property|Value|
|---|---|
|size|small|
|size|medium|
|size|original|

<h2 id="tocS_LicenseEditorialContentRequest">LicenseEditorialContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialcontentrequest"></a>
<a id="schema_LicenseEditorialContentRequest"></a>
<a id="tocSlicenseeditorialcontentrequest"></a>
<a id="tocslicenseeditorialcontentrequest"></a>

```json
{
  "country": "USA",
  "editorial": [
    {
      "editorial_id": "10687730b",
      "license": "premier_editorial_comp",
      "metadata": {
        "customer_id": "12345",
        "geo_location": "US",
        "number_viewed": "15",
        "search_term": "dog"
      },
      "size": "original"
    }
  ]
}
```

License editorial content request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[ISOCountryCode](#schemaisocountrycode)|true|none|Mandatory country code for where the editorial content will be distributed; this value is used for rights checks|
|editorial|[[LicenseEditorialContent](#schemalicenseeditorialcontent)]|true|none|Editorial content to license|

<h2 id="tocS_LicenseEditorialContentResult">LicenseEditorialContentResult</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialcontentresult"></a>
<a id="schema_LicenseEditorialContentResult"></a>
<a id="tocSlicenseeditorialcontentresult"></a>
<a id="tocslicenseeditorialcontentresult"></a>

```json
{
  "allotment_charge": 1,
  "download": {
    "url": "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323"
  },
  "editorial_id": "69656358"
}
```

The response to a licensing request for editorial content

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment_charge|integer|false|none|For pre-paid plans, how many credits were used for the item license|
|download|[Url](#schemaurl)|false|none|Information that is needed to download the image|
|editorial_id|string|true|none|Editorial ID|
|error|string|false|none|none|

<h2 id="tocS_LicenseEditorialContentResults">LicenseEditorialContentResults</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialcontentresults"></a>
<a id="schema_LicenseEditorialContentResults"></a>
<a id="tocSlicenseeditorialcontentresults"></a>
<a id="tocslicenseeditorialcontentresults"></a>

```json
{
  "data": [
    {
      "allotment_charge": 1,
      "download": {
        "url": "https://s3-eu-west-1.amazonaws.com/api-downloads.rexfeatures.com/[random-characters].jpg?Expires=1524717323"
      },
      "editorial_id": "69656358"
    }
  ],
  "page": 1,
  "per_page": 1,
  "total_count": 12
}
```

List of editorial license results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseEditorialContentResult](#schemalicenseeditorialcontentresult)]|false|none|License results|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page of the response|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results|

<h2 id="tocS_LicenseEditorialVideoContent">LicenseEditorialVideoContent</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialvideocontent"></a>
<a id="schema_LicenseEditorialVideoContent"></a>
<a id="tocSlicenseeditorialvideocontent"></a>
<a id="tocslicenseeditorialvideocontent"></a>

```json
{
  "editorial_id": "10679854a",
  "license": "premier_editorial_video_digital_only",
  "metadata": {
    "purchase_order": "12345"
  },
  "size": "original"
}
```

Individual editorial video content to license

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editorial_id|string|true|none|Editorial ID|
|license|string|true|none|License agreement to use for licensing|
|metadata|[LicenseRequestMetadata](#schemalicenserequestmetadata)|false|none|Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder|
|size|string|false|none|Asset size to download|

#### Enumerated Values

|Property|Value|
|---|---|
|license|premier_editorial_video_digital_only|
|license|premier_editorial_video_all_media|
|license|premier_editorial_video_all_media_single_territory|
|license|premier_editorial_video_comp|
|size|original|

<h2 id="tocS_LicenseEditorialVideoContentRequest">LicenseEditorialVideoContentRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicenseeditorialvideocontentrequest"></a>
<a id="schema_LicenseEditorialVideoContentRequest"></a>
<a id="tocSlicenseeditorialvideocontentrequest"></a>
<a id="tocslicenseeditorialvideocontentrequest"></a>

```json
{
  "country": "USA",
  "editorial": [
    {
      "editorial_id": "10679854a",
      "license": "premier_editorial_video_digital_only",
      "metadata": {
        "purchase_order": "12345"
      },
      "size": "original"
    }
  ]
}
```

License editorial video content request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[ISOCountryCode](#schemaisocountrycode)|true|none|Mandatory country code for where the editorial content will be distributed; this value is used for rights checks|
|editorial|[[LicenseEditorialVideoContent](#schemalicenseeditorialvideocontent)]|true|none|Editorial content to license|

<h2 id="tocS_LicenseFormat">LicenseFormat</h2>
<!-- backwards compatibility -->
<a id="schemalicenseformat"></a>
<a id="schema_LicenseFormat"></a>
<a id="tocSlicenseformat"></a>
<a id="tocslicenseformat"></a>

```json
{
  "description": "Med",
  "format": "jpg",
  "media_type": "image",
  "min_resolution": 1000,
  "size": "medium"
}
```

Description of a license

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the license|
|format|string|false|none|Format or extension of the media, such as mpeg for videos or jpeg for images|
|media_type|string|false|none|Media type of the license|
|min_resolution|integer|false|none|Width of the media, in pixels, allowed by this license|
|size|string|false|none|Keyword that details the size of the media, such as hd or sd for video, huge or vector for images|

#### Enumerated Values

|Property|Value|
|---|---|
|media_type|image|
|media_type|video|
|media_type|audio|
|media_type|editorial|

<h2 id="tocS_LicenseImage">LicenseImage</h2>
<!-- backwards compatibility -->
<a id="schemalicenseimage"></a>
<a id="schema_LicenseImage"></a>
<a id="tocSlicenseimage"></a>
<a id="tocslicenseimage"></a>

```json
{
  "editorial_acknowledgement": true,
  "format": "jpg",
  "image_id": "123456789",
  "metadata": {
    "customer_id": "12345",
    "geo_location": "US",
    "number_viewed": "15",
    "search_term": "dog"
  },
  "price": 12.34,
  "show_modal": true,
  "size": "small",
  "subscription_id": "s12345678"
}
```

Data required to license an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_cookie|[Cookie](#schemacookie)|false|none|Cookie object|
|custom_dimensions|[CustomSizeDimensions](#schemacustomsizedimensions)|false|none|A custom height or a custom width to resize the image to, but not both (experimental)|
|editorial_acknowledgement|boolean|false|none|Set to true to acknowledge the editorial agreement|
|format|string|false|none|(Deprecated) Image format to download|
|image_id|string|true|none|Image ID|
|metadata|[LicenseRequestMetadata](#schemalicenserequestmetadata)|false|none|Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder|
|price|number|false|none|For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34|
|search_id|string|false|none|ID of the search that led to this licensing transaction|
|show_modal|boolean|false|none|**Deprecated.** (Deprecated)|
|size|string|false|none|Image size to download|
|subscription_id|string|false|none|ID of the subscription to use for the download.|
|verification_code|string|false|none|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Property|Value|
|---|---|
|format|jpg|
|size|small|
|size|medium|
|size|huge|
|size|custom|

<h2 id="tocS_LicenseImageRequest">LicenseImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicenseimagerequest"></a>
<a id="schema_LicenseImageRequest"></a>
<a id="tocSlicenseimagerequest"></a>
<a id="tocslicenseimagerequest"></a>

```json
{
  "images": [
    {
      "editorial_acknowledgement": true,
      "format": "jpg",
      "image_id": "123456789",
      "metadata": {
        "customer_id": "12345",
        "geo_location": "US",
        "number_viewed": "15",
        "search_term": "dog"
      },
      "price": 12.34,
      "show_modal": true,
      "size": "small",
      "subscription_id": "s12345678"
    }
  ]
}
```

Image license request data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[LicenseImage](#schemalicenseimage) \| [LicenseImageVector](#schemalicenseimagevector)]|true|none|Images to create licenses for|

<h2 id="tocS_LicenseImageResult">LicenseImageResult</h2>
<!-- backwards compatibility -->
<a id="schemalicenseimageresult"></a>
<a id="schema_LicenseImageResult"></a>
<a id="tocSlicenseimageresult"></a>
<a id="tocslicenseimageresult"></a>

```json
{
  "allotment_charge": 1,
  "download": {
    "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
  },
  "image_id": "59656357",
  "price": {
    "local_amount": 12.34,
    "local_currency": "EUR"
  }
}
```

The response to a licensing request for an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment_charge|integer|false|none|Number of credits that this licensing event used|
|download|[Url](#schemaurl)|false|none|Information that is needed to download the image|
|error|string|false|none|Error message, appears only if there was an error|
|image_id|string|true|none|Image ID that was licensed|
|license_id|string|false|none|ID of the license event|
|price|[Price](#schemaprice)|false|none|Wholesale price information; only for rev-share partners|

<h2 id="tocS_LicenseImageResultDataList">LicenseImageResultDataList</h2>
<!-- backwards compatibility -->
<a id="schemalicenseimageresultdatalist"></a>
<a id="schema_LicenseImageResultDataList"></a>
<a id="tocSlicenseimageresultdatalist"></a>
<a id="tocslicenseimageresultdatalist"></a>

```json
{
  "data": [
    {
      "allotment_charge": 1,
      "download": {
        "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
      },
      "image_id": "59656357"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 23
}
```

List of information about licensed images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseImageResult](#schemalicenseimageresult)]|false|none|License results|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_LicenseImageVector">LicenseImageVector</h2>
<!-- backwards compatibility -->
<a id="schemalicenseimagevector"></a>
<a id="schema_LicenseImageVector"></a>
<a id="tocSlicenseimagevector"></a>
<a id="tocslicenseimagevector"></a>

```json
{
  "editorial_acknowledgement": true,
  "format": "eps",
  "image_id": "123456789",
  "metadata": {
    "customer_id": "12345",
    "geo_location": "US",
    "number_viewed": "15",
    "search_term": "dog"
  },
  "price": 12.34,
  "show_modal": true,
  "size": "vector",
  "subscription_id": "s12345678"
}
```

Data required to license an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_cookie|[Cookie](#schemacookie)|false|none|Cookie object|
|editorial_acknowledgement|boolean|false|none|Set to true to acknowledge the editorial agreement|
|format|string|false|none|(Deprecated) Image format to download|
|image_id|string|true|none|Image ID|
|metadata|[LicenseRequestMetadata](#schemalicenserequestmetadata)|false|none|Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder|
|price|number|false|none|For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34|
|search_id|string|false|none|ID of the search that led to this licensing transaction|
|show_modal|boolean|false|none|**Deprecated.** (Deprecated)|
|size|string|false|none|Image size to download|
|subscription_id|string|false|none|ID of the subscription to use for the download.|
|verification_code|string|false|none|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Property|Value|
|---|---|
|format|eps|
|size|vector|

<h2 id="tocS_LicenseRequestMetadata">LicenseRequestMetadata</h2>
<!-- backwards compatibility -->
<a id="schemalicenserequestmetadata"></a>
<a id="schema_LicenseRequestMetadata"></a>
<a id="tocSlicenserequestmetadata"></a>
<a id="tocslicenserequestmetadata"></a>

```json
{
  "customer_id": "12345",
  "geo_location": "US",
  "number_viewed": "15",
  "search_term": "dog"
}
```

Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder

<h2 id="tocS_LicenseSFX">LicenseSFX</h2>
<!-- backwards compatibility -->
<a id="schemalicensesfx"></a>
<a id="schema_LicenseSFX"></a>
<a id="tocSlicensesfx"></a>
<a id="tocslicensesfx"></a>

```json
{
  "format": "wav",
  "metadata": {
    "customer_id": "12345",
    "geo_location": "US",
    "number_viewed": "15",
    "search_term": "dog"
  },
  "sfx_id": "123456789",
  "show_modal": true,
  "size": "ambisonic",
  "subscription_id": "s12345678"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audio_layout|string|false|none|none|
|format|string|false|none|none|
|search_id|string|false|none|ID of the search that led to this licensing event|
|sfx_id|string|true|none|ID of the sounds effect being licensed|
|subscription_id|string|true|none|ID of the subscription to use for the download.|

#### Enumerated Values

|Property|Value|
|---|---|
|audio_layout|ambisonic|
|audio_layout|5.1|
|audio_layout|stereo|
|format|wav|
|format|mp3|

<h2 id="tocS_LicenseSFXRequest">LicenseSFXRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicensesfxrequest"></a>
<a id="schema_LicenseSFXRequest"></a>
<a id="tocSlicensesfxrequest"></a>
<a id="tocslicensesfxrequest"></a>

```json
{
  "sound_effects": [
    {
      "format": "wav",
      "metadata": {
        "customer_id": "12345",
        "geo_location": "US",
        "number_viewed": "15",
        "search_term": "dog"
      },
      "sfx_id": "123456789",
      "show_modal": true,
      "size": "ambisonic",
      "subscription_id": "s12345678"
    }
  ]
}
```

License sounds effect asset request body

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sound_effects|[[LicenseSFX](#schemalicensesfx)]|true|none|Sound effects to license for|

<h2 id="tocS_LicenseSFXResult">LicenseSFXResult</h2>
<!-- backwards compatibility -->
<a id="schemalicensesfxresult"></a>
<a id="schema_LicenseSFXResult"></a>
<a id="tocSlicensesfxresult"></a>
<a id="tocslicensesfxresult"></a>

```json
{
  "allotment_charge": 1,
  "download": {
    "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.wav"
  },
  "sfx_id": "59656357"
}
```

The response to a licensing request for an sound effects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment_charge|integer|false|none|Number of credits that this licensing event used|
|download|[Url](#schemaurl)|false|none|Information that is needed to download the sound effects|
|error|string|false|none|Error message, appears only if there was an error|
|license_id|string|false|none|ID of the license event|
|sfx_id|string|true|none|Sound effects ID that was licensed|

<h2 id="tocS_LicenseSFXResultDataList">LicenseSFXResultDataList</h2>
<!-- backwards compatibility -->
<a id="schemalicensesfxresultdatalist"></a>
<a id="schema_LicenseSFXResultDataList"></a>
<a id="tocSlicensesfxresultdatalist"></a>
<a id="tocslicensesfxresultdatalist"></a>

```json
{
  "data": [
    {
      "allotment_charge": 1,
      "download": {
        "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp3"
      },
      "sfx_id": "123456789"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 123455
}
```

List of information about licensed sound effects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseSFXResult](#schemalicensesfxresult)]|false|none|Sound effects license results|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|

<h2 id="tocS_LicenseVideo">LicenseVideo</h2>
<!-- backwards compatibility -->
<a id="schemalicensevideo"></a>
<a id="schema_LicenseVideo"></a>
<a id="tocSlicensevideo"></a>
<a id="tocslicensevideo"></a>

```json
{
  "size": "hd",
  "subscription_id": "s12345678",
  "video_id": "2140697"
}
```

Data required to license a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_cookie|[Cookie](#schemacookie)|false|none|Cookie object|
|editorial_acknowledgement|boolean|false|none|Whether or not this item is editorial content|
|metadata|[LicenseRequestMetadata](#schemalicenserequestmetadata)|false|none|Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder|
|price|number|false|none|Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners|
|search_id|string|false|none|ID of the search that led to this licensing event|
|show_modal|boolean|false|none|**Deprecated.** (Deprecated)|
|size|string|false|none|Size of the video being licensed|
|subscription_id|string|false|none|ID of the subscription used for this license|
|video_id|string|true|none|ID of the video being licensed|

#### Enumerated Values

|Property|Value|
|---|---|
|size|web|
|size|sd|
|size|hd|
|size|4k|

<h2 id="tocS_LicenseVideoRequest">LicenseVideoRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicensevideorequest"></a>
<a id="schema_LicenseVideoRequest"></a>
<a id="tocSlicensevideorequest"></a>
<a id="tocslicensevideorequest"></a>

```json
{
  "videos": [
    {
      "size": "hd",
      "subscription_id": "s12345678",
      "video_id": "2140697"
    }
  ]
}
```

List of videos to license

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videos|[[LicenseVideo](#schemalicensevideo)]|true|none|Videos to license|

<h2 id="tocS_LicenseVideoResult">LicenseVideoResult</h2>
<!-- backwards compatibility -->
<a id="schemalicensevideoresult"></a>
<a id="schema_LicenseVideoResult"></a>
<a id="tocSlicensevideoresult"></a>
<a id="tocslicensevideoresult"></a>

```json
{
  "allotment_charge": 1,
  "download": {
    "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4"
  },
  "price": {
    "local_amount": 12.34,
    "local_currency": "EUR"
  },
  "video_id": "123456789"
}
```

The response to a licensing request for a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment_charge|integer|false|none|Number of credits that this licensing event used|
|download|[Url](#schemaurl)|false|none|URL object|
|error|string|false|none|Potential error that occurred during licensing|
|license_id|string|false|none|ID of the license event|
|price|[Price](#schemaprice)|false|none|Wholesale price information; only for rev-share partners only|
|video_id|string|true|none|ID of the video that was licensed|

<h2 id="tocS_LicenseVideoResultDataList">LicenseVideoResultDataList</h2>
<!-- backwards compatibility -->
<a id="schemalicensevideoresultdatalist"></a>
<a id="schema_LicenseVideoResultDataList"></a>
<a id="tocSlicensevideoresultdatalist"></a>
<a id="tocslicensevideoresultdatalist"></a>

```json
{
  "data": [
    {
      "allotment_charge": 1,
      "download": {
        "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.mp4"
      },
      "price": {
        "local_amount": 12.34,
        "local_currency": "EUR"
      },
      "video_id": "123456789"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 123455
}
```

List of video license results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[LicenseVideoResult](#schemalicensevideoresult)]|false|none|License results|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "id": "123456789"
}
```

Information about a human model or property that appears in media; used to search for assets that this model is in

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the model|

<h2 id="tocS_ModelRelease">ModelRelease</h2>
<!-- backwards compatibility -->
<a id="schemamodelrelease"></a>
<a id="schema_ModelRelease"></a>
<a id="tocSmodelrelease"></a>
<a id="tocsmodelrelease"></a>

```json
{
  "id": "123456789"
}
```

Model and property release metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the model or property release|

<h2 id="tocS_MoodList">MoodList</h2>
<!-- backwards compatibility -->
<a id="schemamoodlist"></a>
<a id="schema_MoodList"></a>
<a id="tocSmoodlist"></a>
<a id="tocsmoodlist"></a>

```json
{
  "data": [
    "Action / Sports",
    "Adventure / Discovery",
    "Aerobics / Workout",
    "Aggressive"
  ]
}
```

List of audio moods

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|true|none|List of audio moods|

<h2 id="tocS_OauthAccessTokenResponse">OauthAccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoauthaccesstokenresponse"></a>
<a id="schema_OauthAccessTokenResponse"></a>
<a id="tocSoauthaccesstokenresponse"></a>
<a id="tocsoauthaccesstokenresponse"></a>

```json
{
  "access_token": "v2/NmQwOTc0NTBiMjA5YzZkY2Q4NTkvMTA4OTg1MDk5L2N1c3RvbWVyLzIvZjB2a0RseGo4Rkt6ZjRmVWJNMm10V2VzcHh1NTBlZWJ6andUQU1NeTVYYnNFTDVWOFRJakItS2RnZTlmbEY1Y3haNWdXLUtYc2JhaXo5djk0V0p2QzZUUWZ4c2FNWm41NkdLYUgyVWlCaVUtQTNVMV9YQWpzd3lpblI3SlZEem8wSG1qQ2NzSkJlX3VQTnNXenBIdkd4SXViVi1rRGJTVENCV0g1U3U0RXRJSV9rSm5lQkl5QXlvbm5JN241UUhv",
  "token_type": "Bearer"
}
```

Access token response to client apps

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Access token that can be used for future requests|
|expires_in|integer|false|none|Number of seconds before token expires, only present for expiring tokens|
|refresh_token|string|false|none|A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens|
|token_type|string|true|none|Type of token|
|user_token|string|false|none|Metadata about the access_token, only present for expiring tokens|

<h2 id="tocS_Preview">Preview</h2>
<!-- backwards compatibility -->
<a id="schemapreview"></a>
<a id="schema_Preview"></a>
<a id="tocSpreview"></a>
<a id="tocspreview"></a>

```json
{
  "content_type": "audio/mp3",
  "url": "https://public-cdn.ampermusic.com/instruments/previews/roomy_kit_v1.mp3"
}
```

Preview information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|false|none|Content type of the preview, currently audio/mp3|
|url|string|false|none|Url of the instrument's preview file|

#### Enumerated Values

|Property|Value|
|---|---|
|content_type|audio/mp3|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "local_amount": 12.34,
  "local_currency": "EUR"
}
```

Price

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|local_amount|number|false|none|Floating-point amount of the calculated rev-share price in the currency local_currency|
|local_currency|string|false|none|Currency of the rev-share price that was calculated|

<h2 id="tocS_Recommendation">Recommendation</h2>
<!-- backwards compatibility -->
<a id="schemarecommendation"></a>
<a id="schema_Recommendation"></a>
<a id="tocSrecommendation"></a>
<a id="tocsrecommendation"></a>

```json
{
  "id": "123456789"
}
```

Media Recommendation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Media ID|

<h2 id="tocS_RecommendationDataList">RecommendationDataList</h2>
<!-- backwards compatibility -->
<a id="schemarecommendationdatalist"></a>
<a id="schema_RecommendationDataList"></a>
<a id="tocSrecommendationdatalist"></a>
<a id="tocsrecommendationdatalist"></a>

```json
{
  "data": [
    {
      "id": "123456789"
    },
    {
      "id": "99379946"
    },
    {
      "id": "133918412"
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 12
}
```

List of recommended images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Recommendation](#schemarecommendation)]|false|none|Recommended images|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_RedownloadImage">RedownloadImage</h2>
<!-- backwards compatibility -->
<a id="schemaredownloadimage"></a>
<a id="schema_RedownloadImage"></a>
<a id="tocSredownloadimage"></a>
<a id="tocsredownloadimage"></a>

```json
{
  "size": "small"
}
```

Data required to redownload an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_cookie|[Cookie](#schemacookie)|false|none|**Deprecated.** (Deprecated)|
|show_modal|boolean|false|none|**Deprecated.** (Deprecated)|
|size|string|false|none|Size of the image|
|verification_code|string|false|none|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Property|Value|
|---|---|
|size|small|
|size|medium|
|size|huge|
|size|supersize|
|size|vector|

<h2 id="tocS_RedownloadVideo">RedownloadVideo</h2>
<!-- backwards compatibility -->
<a id="schemaredownloadvideo"></a>
<a id="schema_RedownloadVideo"></a>
<a id="tocSredownloadvideo"></a>
<a id="tocsredownloadvideo"></a>

```json
{
  "size": "web"
}
```

Data required to redownload a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_cookie|[Cookie](#schemacookie)|false|none|**Deprecated.** (Deprecated)|
|show_modal|boolean|false|none|**Deprecated.** (Deprecated)|
|size|string|false|none|Size of the video|
|verification_code|string|false|none|**Deprecated.** (Deprecated)|

#### Enumerated Values

|Property|Value|
|---|---|
|size|web|
|size|sd|
|size|hd|
|size|4k|

<h2 id="tocS_RemoveCatalogCollectionItem">RemoveCatalogCollectionItem</h2>
<!-- backwards compatibility -->
<a id="schemaremovecatalogcollectionitem"></a>
<a id="schema_RemoveCatalogCollectionItem"></a>
<a id="tocSremovecatalogcollectionitem"></a>
<a id="tocsremovecatalogcollectionitem"></a>

```json
{
  "id": "123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|

<h2 id="tocS_RemoveCatalogCollectionItems">RemoveCatalogCollectionItems</h2>
<!-- backwards compatibility -->
<a id="schemaremovecatalogcollectionitems"></a>
<a id="schema_RemoveCatalogCollectionItems"></a>
<a id="tocSremovecatalogcollectionitems"></a>
<a id="tocsremovecatalogcollectionitems"></a>

```json
{
  "items": [
    {
      "id": "123"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[RemoveCatalogCollectionItem](#schemaremovecatalogcollectionitem)]|true|none|none|

<h2 id="tocS_SFX">SFX</h2>
<!-- backwards compatibility -->
<a id="schemasfx"></a>
<a id="schema_SFX"></a>
<a id="tocSsfx"></a>
<a id="tocssfx"></a>

```json
{
  "contributor": {
    "id": "1234"
  },
  "id": "123",
  "media_type": "sfx"
}
```

SFX metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_date|string(date)|false|none|Date this sound effect was added to the Shutterstock library|
|affiliate_url|string|false|none|Affiliate referral link; appears only for registered affiliate partners|
|artist|string|false|none|Artist of the sound effect|
|assets|[SFXAssets](#schemasfxassets)|false|none|Files that are available as part of an sound effect asset|
|contributor|[Contributor](#schemacontributor)|true|none|Information about a contributor|
|description|string|false|none|Description of this sound effect|
|duration|number|false|none|Duration of this sound effect in seconds|
|id|string|true|none|Shutterstock ID of this sound effect|
|keywords|[string]|false|none|List of all keywords for this sound effect|
|media_type|string|true|none|Media type of this track; should always be "sfx"|
|releases|[string]|false|none|List of all releases of this sound effect|
|title|string|false|none|Title of this sound effect|
|updated_time|string(date-time)|false|none|Time this sound effect was last updated|
|url|string|false|none|none|

<h2 id="tocS_SFXAssetDetails">SFXAssetDetails</h2>
<!-- backwards compatibility -->
<a id="schemasfxassetdetails"></a>
<a id="schema_SFXAssetDetails"></a>
<a id="tocSsfxassetdetails"></a>
<a id="tocssfxassetdetails"></a>

```json
{
  "file_size": 123,
  "url": "https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3"
}
```

Information about a file that is part of an sound effect asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_size|integer|false|none|File size of the sound effect|
|url|string|false|none|URL the sound effect is available at|

<h2 id="tocS_SFXAssets">SFXAssets</h2>
<!-- backwards compatibility -->
<a id="schemasfxassets"></a>
<a id="schema_SFXAssets"></a>
<a id="tocSsfxassets"></a>
<a id="tocssfxassets"></a>

```json
{
  "preview_mp3": {
    "file_size": 123,
    "url": "https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3"
  },
  "waveform": {
    "file_size": 123,
    "url": "https://cdn.shutterstock.com/shutterstock/sfx/11222/preview_ecom_ster/hand-throw-catch-cellphone.mp3"
  }
}
```

Files that are available as part of an sound effect asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preview_mp3|[SFXAssetDetails](#schemasfxassetdetails)|false|none|Information about a file that is part of an sound effect asset|
|waveform|[SFXAssetDetails](#schemasfxassetdetails)|false|none|Information about a file that is part of an sound effect asset|

<h2 id="tocS_SFXDataList">SFXDataList</h2>
<!-- backwards compatibility -->
<a id="schemasfxdatalist"></a>
<a id="schema_SFXDataList"></a>
<a id="tocSsfxdatalist"></a>
<a id="tocssfxdatalist"></a>

```json
{
  "data": [
    {
      "contributor": {
        "id": "1234"
      },
      "id": "123",
      "media_type": "sfx"
    }
  ]
}
```

List of sound effects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SFX](#schemasfx)]|false|none|Sound Effects|

<h2 id="tocS_SFXSearchResults">SFXSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemasfxsearchresults"></a>
<a id="schema_SFXSearchResults"></a>
<a id="tocSsfxsearchresults"></a>
<a id="tocssfxsearchresults"></a>

```json
{
  "data": [
    {
      "added_date": "2022-07-29",
      "assets": {
        "preview_mp3": {
          "url": "https://cdn.shutterstock.com/shutterstock/sfx/21230/preview_ecom_ster/heavy-duty-interface-feedback.mp3"
        },
        "waveform": {
          "url": "https://cdn.shutterstock.com/shutterstock/sfx/21230/wvfm_img/heavy-duty-interface-feedback.png"
        }
      },
      "contributor": {
        "id": "321402911"
      },
      "description": "User interface calculations, scanning, thinking, text displayed on screen. Screen gak or garble.",
      "id": "123",
      "media_type": "sfx",
      "title": "Heavy Duty Interface Feedback",
      "updated_time": "2022-08-04T15:11:15.711Z"
    }
  ],
  "search_id": "e6f84c4c-ffdd-499b-ad89-72c65a896ead",
  "total_count": 14881
}
```

Sound effects search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SFX](#schemasfx)]|true|none|List of tracks|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|search_id|string|true|none|ID of the search|
|total_count|integer|true|none|Total count of all results across all pages|

<h2 id="tocS_SearchEntitiesRequest">SearchEntitiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchentitiesrequest"></a>
<a id="schema_SearchEntitiesRequest"></a>
<a id="tocSsearchentitiesrequest"></a>
<a id="tocssearchentitiesrequest"></a>

```json
{
  "text": "Planting flowers is a great way to make springtime more beautiful."
}
```

Search entity request data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|true|none|Plain text to extract keywords from|

<h2 id="tocS_SearchEntitiesResponse">SearchEntitiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchentitiesresponse"></a>
<a id="schema_SearchEntitiesResponse"></a>
<a id="tocSsearchentitiesresponse"></a>
<a id="tocssearchentitiesresponse"></a>

```json
{
  "keywords": [
    "planting",
    "flowers",
    "springtime",
    "beautiful"
  ]
}
```

The response to a request for keyword analysis

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keywords|[string]|false|none|The top keywords from the submitted text|

<h2 id="tocS_SearchImage">SearchImage</h2>
<!-- backwards compatibility -->
<a id="schemasearchimage"></a>
<a id="schema_SearchImage"></a>
<a id="tocSsearchimage"></a>
<a id="tocssearchimage"></a>

```json
{
  "license": [
    "editorial"
  ],
  "query": "cat",
  "sort": "popular"
}
```

Data required to search for an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_date|string(date)|false|none|Show images added on the specified date|
|added_date_end|string(date)|false|none|Show images added before the specified date|
|added_date_start|string(date)|false|none|Show images added on or after the specified date|
|aspect_ratio|number|false|none|Show images with the specified aspect ratio, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio_max|number|false|none|Show images with the specified aspect ratio or lower, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|aspect_ratio_min|number|false|none|Show images with the specified aspect ratio or higher, using a positive decimal of the width divided by the height, such as 1.7778 for a 16:9 image|
|authentic|boolean|false|none|Show only authentic images|
|category|string|false|none|Show images with the specified Shutterstock-defined category; specify a category name or ID|
|color|string|false|none|Specify either a hexadecimal color in the format '4F21EA' or 'grayscale'; the API returns images that use similar colors|
|contributor|[string]|false|none|Show images with the specified contributor names or IDs, allows multiple|
|contributor_country|[string(country-code-2)] \| [string(negated-country-code-2)]|false|none|Show images from contributors in one or more specified countries, or start with NOT to exclude a country from the search|
|fields|string|false|none|Fields to display in the response; see the documentation for the fields parameter in the overview section|
|height|integer|false|none|(Deprecated; use height_from and height_to instead) Show images with the specified height|
|height_from|integer|false|none|Show images with the specified height or larger, in pixels|
|height_to|integer|false|none|Show images with the specified height or smaller, in pixels|
|image_type|[string]|false|none|Show images of the specified type|
|keyword_safe_search|boolean|false|none|Hide results with potentially unsafe keywords|
|language|[Language](#schemalanguage)|false|none|Set query and result language (uses Accept-Language header if not set)|
|license|[string]|false|none|Show only images with the specified license|
|model|[string]|false|none|Show image results with the specified model IDs|
|orientation|string|false|none|Show image results with horizontal or vertical orientation|
|page|integer|false|none|Page number|
|people_age|string|false|none|Show images that feature people of the specified age category|
|people_ethnicity|[string]|false|none|Show images with people of the specified ethnicities, or start with NOT to show images without those ethnicities|
|people_gender|string|false|none|Show images with people of the specified gender|
|people_model_released|boolean|false|none|Show images of people with a signed model release|
|people_number|integer|false|none|Show images with the specified number of people|
|per_page|integer|false|none|Number of results per page|
|query|string|false|none|One or more search terms separated by spaces; you can use NOT to filter out images that match a term|
|region|string(country-code-2) \| string(ipv4)|false|none|Raise or lower search result rankings based on the result's relevance to a specified region; you can provide a country code or an IP address from which the API infers a country|
|safe|boolean|false|none|Enable or disable safe search|
|sort|string|false|none|Sort by|
|spellcheck_query|boolean|false|none|Spellcheck the search query and return results on suggested spellings|
|view|string|false|none|Amount of detail to render in the response|
|width|integer|false|none|(Deprecated; use width_from and width_to instead) Show images with the specified width|
|width_from|integer|false|none|Show images with the specified width or larger, in pixels|
|width_to|integer|false|none|Show images with the specified width or smaller, in pixels|

#### Enumerated Values

|Property|Value|
|---|---|
|image_type|photo|
|image_type|illustration|
|image_type|vector|
|language|ar|
|language|bg|
|language|bn|
|language|cs|
|language|da|
|language|de|
|language|el|
|language|en|
|language|es|
|language|fi|
|language|fr|
|language|gu|
|language|he|
|language|hi|
|language|hr|
|language|hu|
|language|id|
|language|it|
|language|ja|
|language|kn|
|language|ko|
|language|ml|
|language|mr|
|language|nb|
|language|nl|
|language|or|
|language|pl|
|language|pt|
|language|ro|
|language|ru|
|language|sk|
|language|sl|
|language|sv|
|language|ta|
|language|te|
|language|th|
|language|tr|
|language|uk|
|language|ur|
|language|vi|
|language|zh|
|language|zh-Hant|
|license|commercial|
|license|editorial|
|license|enhanced|
|orientation|horizontal|
|orientation|vertical|
|people_age|infants|
|people_age|children|
|people_age|teenagers|
|people_age|20s|
|people_age|30s|
|people_age|40s|
|people_age|50s|
|people_age|60s|
|people_age|older|
|people_ethnicity|african|
|people_ethnicity|african_american|
|people_ethnicity|black|
|people_ethnicity|brazilian|
|people_ethnicity|chinese|
|people_ethnicity|caucasian|
|people_ethnicity|east_asian|
|people_ethnicity|hispanic|
|people_ethnicity|japanese|
|people_ethnicity|middle_eastern|
|people_ethnicity|native_american|
|people_ethnicity|pacific_islander|
|people_ethnicity|south_asian|
|people_ethnicity|southeast_asian|
|people_ethnicity|other|
|people_ethnicity|NOT african|
|people_ethnicity|NOT african_american|
|people_ethnicity|NOT black|
|people_ethnicity|NOT brazilian|
|people_ethnicity|NOT chinese|
|people_ethnicity|NOT caucasian|
|people_ethnicity|NOT east_asian|
|people_ethnicity|NOT hispanic|
|people_ethnicity|NOT japanese|
|people_ethnicity|NOT middle_eastern|
|people_ethnicity|NOT native_american|
|people_ethnicity|NOT pacific_islander|
|people_ethnicity|NOT south_asian|
|people_ethnicity|NOT southeast_asian|
|people_ethnicity|NOT other|
|people_gender|male|
|people_gender|female|
|people_gender|both|
|sort|newest|
|sort|popular|
|sort|relevance|
|sort|random|
|view|minimal|
|view|full|

<h2 id="tocS_SfxUrl">SfxUrl</h2>
<!-- backwards compatibility -->
<a id="schemasfxurl"></a>
<a id="schema_SfxUrl"></a>
<a id="tocSsfxurl"></a>
<a id="tocssfxurl"></a>

```json
{
  "$ref": "#/components/schemas/Url/example"
}
```

Sound effect license URL object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL that can be used to download the unwatermarked, licensed asset|

<h2 id="tocS_ShortsLoopsStems">ShortsLoopsStems</h2>
<!-- backwards compatibility -->
<a id="schemashortsloopsstems"></a>
<a id="schema_ShortsLoopsStems"></a>
<a id="tocSshortsloopsstems"></a>
<a id="tocsshortsloopsstems"></a>

```json
{
  "loops": {
    "loop_preview_1": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/loop_preview_1/loop_preview_1.mp3"
    },
    "loop_preview_2": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/loop_preview_2/loop_preview_2.mp3"
    }
  },
  "shorts": {
    "short_preview_1": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/short_preview_1/short_preview_1.mp3"
    },
    "short_preview_2": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/short_preview_2/short_preview_2.mp3"
    }
  },
  "stems": {
    "stem_preview_1": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/stem_preview_1/stem_preview_1.mp3"
    },
    "stem_preview_2": {
      "url": "http://picdn.shuttercorp.net/shutterstock/audio/464947/stem_preview_1/stem_preview_1.mp3"
    }
  }
}
```

Links for Shorts, Loops and Stems previews

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loops|object|false|none|none|
|shorts|object|false|none|none|
|stems|object|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "allotment": {
    "downloads_left": 5,
    "downloads_limit": 10,
    "end_time": "2020-05-29T12:10:22-05:00",
    "start_time": "2020-05-29T12:10:22-05:00"
  },
  "asset_type": "images",
  "description": "Annual Subscription",
  "expiration_time": "2020-05-29T12:10:22-05:00",
  "formats": [
    {
      "description": "Small",
      "format": "jpg",
      "media_type": "image",
      "min_resolution": 500,
      "size": "small"
    },
    {
      "description": "Med",
      "format": "jpg",
      "media_type": "image",
      "min_resolution": 1000,
      "size": "medium"
    },
    {
      "description": "Vector",
      "format": "eps",
      "media_type": "image",
      "size": "vector"
    }
  ],
  "id": "s8906043",
  "license": "standard",
  "metadata": {}
}
```

Subscription information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allotment|[Allotment](#schemaallotment)|false|none|An allotment of credits as part of a subscription|
|asset_type|string|false|none|Identifier for the type of assets associated with this subscription (images, videos, audio, editorial)|
|description|string|false|none|Description of the subscription|
|expiration_time|string(date-time)|false|none|Date the subscription ends|
|formats|[[LicenseFormat](#schemalicenseformat)]|false|none|List of formats that are licensable for the subscription|
|id|string|true|none|Unique internal identifier for the subscription|
|license|string|false|none|Internal identifier for the type of subscription|
|metadata|[SubscriptionMetadata](#schemasubscriptionmetadata)|false|none|Subscription metadata; different for each customer|
|price_per_download|[Price](#schemaprice)|false|none|Price|

<h2 id="tocS_SubscriptionDataList">SubscriptionDataList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptiondatalist"></a>
<a id="schema_SubscriptionDataList"></a>
<a id="tocSsubscriptiondatalist"></a>
<a id="tocssubscriptiondatalist"></a>

```json
{
  "data": [
    {
      "allotment": {
        "downloads_left": 5,
        "downloads_limit": 10,
        "end_time": "2020-05-29T12:10:22-05:00",
        "start_time": "2020-05-29T12:10:22-05:00"
      },
      "asset_type": "images",
      "description": "Annual Subscription",
      "expiration_time": "2020-05-29T12:10:22-05:00",
      "formats": [
        {
          "description": "Small",
          "format": "jpg",
          "media_type": "image",
          "min_resolution": 500,
          "size": "small"
        },
        {
          "description": "Med",
          "format": "jpg",
          "media_type": "image",
          "min_resolution": 1000,
          "size": "medium"
        },
        {
          "description": "Vector",
          "format": "eps",
          "media_type": "image",
          "size": "vector"
        }
      ],
      "id": "s8906043",
      "license": "standard",
      "metadata": {}
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 123455
}
```

List of subscriptions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Subscription](#schemasubscription)]|false|none|Subscriptions retrieved from this user|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Optional error message|
|page|integer|false|none|Current page that is being queried|
|per_page|integer|false|none|Amount of subscriptions to show per page|
|total_count|integer|false|none|Total number of subscriptions for this user|

<h2 id="tocS_SubscriptionMetadata">SubscriptionMetadata</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionmetadata"></a>
<a id="schema_SubscriptionMetadata"></a>
<a id="tocSsubscriptionmetadata"></a>
<a id="tocssubscriptionmetadata"></a>

```json
{
  "client": {
    "is_required": false,
    "name": "purchase_order"
  },
  "job": {
    "is_required": true,
    "name": "client_name"
  },
  "other": {
    "is_required": false,
    "name": "custom_value"
  }
}
```

Subscription metadata; different for each customer

<h2 id="tocS_Suggestions">Suggestions</h2>
<!-- backwards compatibility -->
<a id="schemasuggestions"></a>
<a id="schema_Suggestions"></a>
<a id="tocSsuggestions"></a>
<a id="tocssuggestions"></a>

```json
{
  "data": [
    "cat scan",
    "cats and dogs",
    "cats playing",
    "catsuit",
    "cat silhouette",
    "catskills",
    "cats eyes",
    "cat sitting",
    "cat sleeping",
    "cats eye"
  ]
}
```

List of search suggestions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|Search suggestions|

<h2 id="tocS_TestEcho">TestEcho</h2>
<!-- backwards compatibility -->
<a id="schematestecho"></a>
<a id="schema_TestEcho"></a>
<a id="tocStestecho"></a>
<a id="tocstestecho"></a>

```json
{
  "text": "Test string"
}
```

Text to echo in the response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|none|

<h2 id="tocS_TestValidate">TestValidate</h2>
<!-- backwards compatibility -->
<a id="schematestvalidate"></a>
<a id="schema_TestValidate"></a>
<a id="tocStestvalidate"></a>
<a id="tocstestvalidate"></a>

```json
{
  "header": {
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
  },
  "query": {
    "id": 123456,
    "tag": [
      "Test string"
    ]
  }
}
```

Validation results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header|[TestValidateHeader](#schematestvalidateheader)|false|none|Headers as included in the request|
|query|[TestValidateQuery](#schematestvalidatequery)|false|none|Query as included in the request|

<h2 id="tocS_TestValidateHeader">TestValidateHeader</h2>
<!-- backwards compatibility -->
<a id="schematestvalidateheader"></a>
<a id="schema_TestValidateHeader"></a>
<a id="tocStestvalidateheader"></a>
<a id="tocstestvalidateheader"></a>

```json
{
  "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
}
```

Validation results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user-agent|string|false|none|User agent to expect in the response|

<h2 id="tocS_TestValidateQuery">TestValidateQuery</h2>
<!-- backwards compatibility -->
<a id="schematestvalidatequery"></a>
<a id="schema_TestValidateQuery"></a>
<a id="tocStestvalidatequery"></a>
<a id="tocstestvalidatequery"></a>

```json
{
  "id": 123456,
  "tag": [
    "string"
  ]
}
```

Validation results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|true|none|Integer ID that was passed in the request|
|tag|[string]|false|none|List of tags that were passed in the request|

<h2 id="tocS_Thumbnail">Thumbnail</h2>
<!-- backwards compatibility -->
<a id="schemathumbnail"></a>
<a id="schema_Thumbnail"></a>
<a id="tocSthumbnail"></a>
<a id="tocsthumbnail"></a>

```json
{
  "height": 100,
  "url": "https://thumb7.shutterstock.com/thumb_large/250738318/1572478477/stock-photo-cropped-image-of-woman-gardening-1572478477.jpg",
  "width": 150
}
```

Image thumbnail information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer|true|none|Height in pixels of the image thumbnail|
|url|string|true|none|Direct URL to the image|
|width|integer|true|none|Width in pixels of the image thumbnail|

<h2 id="tocS_UpdateCatalogCollection">UpdateCatalogCollection</h2>
<!-- backwards compatibility -->
<a id="schemaupdatecatalogcollection"></a>
<a id="schema_UpdateCatalogCollection"></a>
<a id="tocSupdatecatalogcollection"></a>
<a id="tocsupdatecatalogcollection"></a>

```json
{
  "cover_asset": {
    "id": "123"
  },
  "name": "My Collection",
  "visibility": "public"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cover_asset|object|false|none|none|
|name|string|false|none|none|
|visibility|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|visibility|private|
|visibility|public|

<h2 id="tocS_UpdatedMedia">UpdatedMedia</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedmedia"></a>
<a id="schema_UpdatedMedia"></a>
<a id="tocSupdatedmedia"></a>
<a id="tocsupdatedmedia"></a>

```json
{
  "id": "123456789",
  "updated_time": "2020-05-29T12:10:22-05:00",
  "updates": [
    "addition",
    "edit"
  ]
}
```

Information about a piece of updated media

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|ID of the media|
|updated_time|string(date-time)|true|none|Date that the media was updated|
|updates|[string]|true|none|Types of updates that were made to the piece of media|

<h2 id="tocS_UpdatedMediaDataList">UpdatedMediaDataList</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedmediadatalist"></a>
<a id="schema_UpdatedMediaDataList"></a>
<a id="tocSupdatedmediadatalist"></a>
<a id="tocsupdatedmediadatalist"></a>

```json
{
  "data": [
    {
      "id": "123456789",
      "updated_time": "2020-05-29T12:10:22-05:00",
      "updates": [
        "addition",
        "edit"
      ]
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 13
}
```

List of updated media

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[UpdatedMedia](#schemaupdatedmedia)]|false|none|Updated media items|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
{
  "url": "https://download.shutterstock.com/gatekeeper/[random-characters]/shutterstock_59656357.jpg"
}
```

URL object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|URL that can be used to download the unwatermarked, licensed asset|

<h2 id="tocS_Urls">Urls</h2>
<!-- backwards compatibility -->
<a id="schemaurls"></a>
<a id="schema_Urls"></a>
<a id="tocSurls"></a>
<a id="tocsurls"></a>

```json
{
  "urls": [
    "string"
  ]
}
```

List of URLs

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|urls|[string]|true|none|URLs|

<h2 id="tocS_UserDetails">UserDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserdetails"></a>
<a id="schema_UserDetails"></a>
<a id="tocSuserdetails"></a>
<a id="tocsuserdetails"></a>

```json
{
  "contributor_id": "212",
  "first_name": "John",
  "full_name": "John Doe",
  "id": "101782699",
  "language": "es",
  "last_name": "Doe",
  "username": "jdoe"
}
```

User details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contributor_id|string|false|none|Unique internal identifier of the user, as a contributor|
|customer_id|string|false|none|Unique internal identifier of the user, as a purchaser|
|email|string|false|none|Email address of the user|
|first_name|string|false|none|First name of the user|
|full_name|string|false|none|Full name including first, middle, and last name of the user|
|id|string|false|none|Unique internal identifier for the user, not tied to contributor or purchasing customer|
|is_premier|boolean|false|none|True if the user has access to the Premier collection, false otherwise|
|is_premier_parent|boolean|false|none|True if the user has access to the Premier collection and also has child users|
|language|string|false|none|Main language of the user account|
|last_name|string|false|none|Last name of the user|
|only_enhanced_license|boolean|false|none|True if the user has an enterprise license, false otherwise|
|only_sensitive_use|boolean|false|none|True if the user has access to sensitive use only, false otherwise|
|organization_id|string|false|none|Unique internal identifier for the user's organization, specific to Premier users|
|premier_permissions|[string]|false|none|List of permissions allowed through the Premier client|
|username|string|false|none|User name associated to the user|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "added_date": "2019-07-13",
  "aspect": 1.778,
  "aspect_ratio": "16:9",
  "assets": {
    "hd": {
      "display_name": "Original HD",
      "file_size": 110359552,
      "format": "avc1",
      "fps": 29.97,
      "height": 1080,
      "is_licensable": true,
      "width": 1920
    },
    "preview_jpg": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
    },
    "preview_mp4": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
    },
    "preview_webm": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
    },
    "sd": {
      "display_name": "Standard Definition MPEG",
      "file_size": 4577280,
      "format": "mov",
      "fps": 29.97,
      "height": 480,
      "is_licensable": true,
      "width": 852
    },
    "thumb_jpg": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
    },
    "thumb_jpgs": {
      "urls": [
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg",
        "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
      ]
    },
    "thumb_mp4": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
    },
    "thumb_webm": {
      "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
    },
    "web": {
      "display_name": "Low Resolution MPEG",
      "file_size": 1291264,
      "format": "mov",
      "fps": 29.97,
      "height": 240,
      "is_licensable": true,
      "width": 426
    }
  },
  "categories": [
    {
      "id": "12",
      "name": "Nature"
    },
    {
      "id": "13",
      "name": "People"
    }
  ],
  "contributor": {
    "id": "4411978"
  },
  "description": "Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness",
  "duration": 14.081,
  "has_model_release": true,
  "has_property_release": false,
  "id": "1033184651",
  "is_adult": false,
  "is_editorial": false,
  "keywords": [
    "active",
    "activity",
    "adventure",
    "arms",
    "backpacker",
    "carefree",
    "celebrating",
    "cliff",
    "climate",
    "cloud",
    "discovery",
    "escape",
    "explore",
    "extreme",
    "free",
    "freedom",
    "girl",
    "happy",
    "high",
    "hiker",
    "hiking",
    "hill",
    "independent",
    "inspiration",
    "landscape",
    "leisure",
    "lifestyle",
    "mountain",
    "mountains",
    "nature",
    "outdoor",
    "peak",
    "person",
    "rock",
    "scenic",
    "sky",
    "sport",
    "success",
    "summer",
    "summit",
    "sun",
    "sunset",
    "top",
    "tourism",
    "travel",
    "trekking",
    "vacation",
    "view",
    "winning",
    "woman"
  ],
  "media_type": "video",
  "models": [
    {
      "id": "33233810"
    },
    {
      "id": "25487168"
    }
  ]
}
```

Information about a video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added_date|string(date)|false|none|Date this video was added to the Shutterstock library|
|affiliate_url|string(uri)|false|none|Affiliate referral link; appears only for registered affiliate partners|
|aspect|number|false|none|Aspect ratio of this video in decimal format, such as 0.6667|
|aspect_ratio|string|false|none|Aspect ratio of the video as a ratio, such as 16:9|
|assets|[VideoAssets](#schemavideoassets)|false|none|Video asset information|
|categories|[[Category](#schemacategory)]|false|none|List of categories|
|contributor|[Contributor](#schemacontributor)|true|none|Information about a contributor|
|description|string|false|none|Description of this video|
|duration|number|false|none|Duration of this video, in seconds|
|has_model_release|boolean|false|none|Whether or not this video has been released for use by the model appearing in it|
|has_property_release|boolean|false|none|Whether or not this video has received a release to show the landmark or property appearing in it|
|id|string|true|none|ID of the video|
|is_adult|boolean|false|none|Whether or not this video contains adult content|
|is_editorial|boolean|false|none|Whether or not this video is editorial content|
|keywords|[string]|false|none|Keywords associated with the content of this video|
|media_type|string|true|none|Media type of this video, should always be "video"|
|models|[[Model](#schemamodel)]|false|none|List of models in this video|
|url|string|false|none|Link to video information page; included only for certain accounts|

<h2 id="tocS_VideoAssets">VideoAssets</h2>
<!-- backwards compatibility -->
<a id="schemavideoassets"></a>
<a id="schema_VideoAssets"></a>
<a id="tocSvideoassets"></a>
<a id="tocsvideoassets"></a>

```json
{
  "hd": {
    "display_name": "Original HD",
    "file_size": 110359552,
    "format": "avc1",
    "fps": 29.97,
    "height": 1080,
    "is_licensable": true,
    "width": 1920
  },
  "original_filename": "123.mp4",
  "preview_jpg": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
  },
  "preview_mp4": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
  },
  "preview_webm": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
  },
  "sd": {
    "display_name": "Standard Definition MPEG",
    "file_size": 4577280,
    "format": "mov",
    "fps": 29.97,
    "height": 480,
    "is_licensable": true,
    "width": 852
  },
  "thumb_jpg": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
  },
  "thumb_jpgs": {
    "urls": [
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg",
      "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
    ]
  },
  "thumb_mp4": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
  },
  "thumb_webm": {
    "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
  },
  "web": {
    "display_name": "Low Resolution MPEG",
    "file_size": 1291264,
    "format": "mov",
    "fps": 29.97,
    "height": 240,
    "is_licensable": true,
    "width": 426
  }
}
```

Video asset information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|4k|[VideoSizeDetails](#schemavideosizedetails)|false|none|Video asset information|
|hd|[VideoSizeDetails](#schemavideosizedetails)|false|none|Video asset information|
|preview_jpg|[Url](#schemaurl)|false|none|URL object|
|preview_mp4|[Url](#schemaurl)|false|none|URL object|
|preview_webm|[Url](#schemaurl)|false|none|URL object|
|sd|[VideoSizeDetails](#schemavideosizedetails)|false|none|Video asset information|
|thumb_jpg|[Url](#schemaurl)|false|none|URL object|
|thumb_jpgs|[Urls](#schemaurls)|false|none|List of URLs|
|thumb_mp4|[Url](#schemaurl)|false|none|URL object|
|thumb_webm|[Url](#schemaurl)|false|none|URL object|
|web|[VideoSizeDetails](#schemavideosizedetails)|false|none|Video asset information|

<h2 id="tocS_VideoCollectionItemDataList">VideoCollectionItemDataList</h2>
<!-- backwards compatibility -->
<a id="schemavideocollectionitemdatalist"></a>
<a id="schema_VideoCollectionItemDataList"></a>
<a id="tocSvideocollectionitemdatalist"></a>
<a id="tocsvideocollectionitemdatalist"></a>

```json
{
  "data": [
    {
      "added_time": "2016-08-18T18:52:59-04:00",
      "id": "76688182",
      "media_type": "video"
    },
    {
      "added_time": "2016-08-18T18:52:59-04:00",
      "id": "40005859",
      "media_type": "video"
    }
  ],
  "page": 1,
  "per_page": 100
}
```

List of items in a collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[CollectionItem](#schemacollectionitem)]|false|none|Assets in the collection|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|The current page of results|
|per_page|integer|false|none|The number of results per page|
|total_count|integer|false|none|The total number of results across all pages|

<h2 id="tocS_VideoDataList">VideoDataList</h2>
<!-- backwards compatibility -->
<a id="schemavideodatalist"></a>
<a id="schema_VideoDataList"></a>
<a id="tocSvideodatalist"></a>
<a id="tocsvideodatalist"></a>

```json
{
  "data": [
    {
      "added_date": "2019-07-13",
      "aspect": 1.778,
      "aspect_ratio": "16:9",
      "assets": {
        "hd": {
          "display_name": "Original HD",
          "file_size": 110359552,
          "format": "avc1",
          "fps": 29.97,
          "height": 1080,
          "is_licensable": true,
          "width": 1920
        },
        "preview_jpg": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
        },
        "preview_mp4": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
        },
        "preview_webm": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
        },
        "sd": {
          "display_name": "Standard Definition MPEG",
          "file_size": 4577280,
          "format": "mov",
          "fps": 29.97,
          "height": 480,
          "is_licensable": true,
          "width": 852
        },
        "thumb_jpg": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
        },
        "thumb_jpgs": {
          "urls": [
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/1.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/2.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/3.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/4.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/5.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/6.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/7.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/8.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/9.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/10.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/11.jpg",
            "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
          ]
        },
        "thumb_mp4": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
        },
        "thumb_webm": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
        },
        "web": {
          "display_name": "Low Resolution MPEG",
          "file_size": 1291264,
          "format": "mov",
          "fps": 29.97,
          "height": 240,
          "is_licensable": true,
          "width": 426
        }
      },
      "categories": [
        {
          "id": "12",
          "name": "Nature"
        },
        {
          "id": "13",
          "name": "People"
        }
      ],
      "contributor": {
        "id": "4411978"
      },
      "description": "Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness",
      "duration": 14.081,
      "has_model_release": true,
      "has_property_release": false,
      "id": "1033184651",
      "is_adult": false,
      "is_editorial": false,
      "keywords": [
        "active",
        "activity",
        "adventure",
        "arms",
        "backpacker",
        "carefree",
        "celebrating",
        "cliff",
        "climate",
        "cloud",
        "discovery",
        "escape",
        "explore",
        "extreme",
        "free",
        "freedom",
        "girl",
        "happy",
        "high",
        "hiker",
        "hiking",
        "hill",
        "independent",
        "inspiration",
        "landscape",
        "leisure",
        "lifestyle",
        "mountain",
        "mountains",
        "nature",
        "outdoor",
        "peak",
        "person",
        "rock",
        "scenic",
        "sky",
        "sport",
        "success",
        "summer",
        "summit",
        "sun",
        "sunset",
        "top",
        "tourism",
        "travel",
        "trekking",
        "vacation",
        "view",
        "winning",
        "woman"
      ],
      "media_type": "video",
      "models": [
        {
          "id": "33233810"
        },
        {
          "id": "25487168"
        }
      ]
    }
  ],
  "page": 1,
  "per_page": 5,
  "total_count": 25
}
```

List of videos

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Video](#schemavideo)]|false|none|Videos|
|errors|[[Error](#schemaerror)]|false|none|Error list; appears only if there was an error|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|total_count|integer|false|none|Total count of all results across all pages|

<h2 id="tocS_VideoPreviewUrl">VideoPreviewUrl</h2>
<!-- backwards compatibility -->
<a id="schemavideopreviewurl"></a>
<a id="schema_VideoPreviewUrl"></a>
<a id="tocSvideopreviewurl"></a>
<a id="tocsvideopreviewurl"></a>

```json
{
  "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
}
```

Video preview information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|Direct URL to the image|

<h2 id="tocS_VideoSearchResults">VideoSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemavideosearchresults"></a>
<a id="schema_VideoSearchResults"></a>
<a id="tocSvideosearchresults"></a>
<a id="tocsvideosearchresults"></a>

```json
{
  "data": [
    {
      "aspect": 1.778,
      "aspect_ratio": "16:9",
      "assets": {
        "preview_jpg": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
        },
        "preview_mp4": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
        },
        "preview_webm": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/preview/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
        },
        "thumb_jpg": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/12.jpg"
        },
        "thumb_mp4": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.mp4"
        },
        "thumb_webm": {
          "url": "https://ak.picdn.net/shutterstock/videos/1033184651/thumb/stock-footage-camera-follows-hipster-millennial-young-woman-in-orange-jacket-running-up-on-top-of-mountain-summit.webm"
        }
      },
      "contributor": {
        "id": "4411978"
      },
      "description": "Camera follows hipster millennial young woman in orange jacket running up on top of mountain summit at sunset, jumps on top of rocks, raises arms into air, happy and drunk on life, youth and happiness",
      "duration": 14.081,
      "has_model_release": true,
      "id": "1033184651",
      "media_type": "video"
    }
  ],
  "page": 1,
  "per_page": 5,
  "search_id": "749090bb-2967-4a20-b22e-c800dc845e10",
  "total_count": 123
}
```

Video search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Video](#schemavideo)]|true|none|List of videos|
|message|string|false|none|Server-generated message, if any|
|page|integer|false|none|Current page that is returned|
|per_page|integer|false|none|Number of results per page|
|search_id|string|true|none|Unique identifier for the search request|
|total_count|integer|true|none|Total count of all results across all pages|

<h2 id="tocS_VideoSizeDetails">VideoSizeDetails</h2>
<!-- backwards compatibility -->
<a id="schemavideosizedetails"></a>
<a id="schema_VideoSizeDetails"></a>
<a id="tocSvideosizedetails"></a>
<a id="tocsvideosizedetails"></a>

```json
{
  "display_name": "Original HD",
  "file_size": 110359552,
  "format": "avc1",
  "fps": 29.97,
  "height": 1080,
  "is_licensable": true,
  "width": 1920
}
```

Video asset information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|Display name of this video size|
|file_size|integer|false|none|File size (in bytes) of this video size|
|format|string|false|none|Format of this video size|
|fps|number|false|none|Frames per second of this video size|
|height|integer|false|none|Height of this video size|
|is_licensable|boolean|false|none|Whether or not videos can be licensed in this video size|
|width|integer|false|none|Width of this video size|
