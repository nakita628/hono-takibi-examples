<h1 id="getty-images">Getty Images v3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

* API Key (Api-Key)
    - Parameter Name: **Api-Key**, in: header.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://api.gettyimages.com/v4/oauth2/auth](https://api.gettyimages.com/v4/oauth2/auth)
    - Token URL = [https://api.gettyimages.com/v4/oauth2/token](https://api.gettyimages.com/v4/oauth2/token)
    - Refresh URL = [https://api.gettyimages.com/v4/oauth2/token](https://api.gettyimages.com/v4/oauth2/token)

    - Flow: clientCredentials
    - Token URL = [https://api.gettyimages.com/v4/oauth2/token](https://api.gettyimages.com/v4/oauth2/token)

    - Flow: implicit
    - Authorization URL = [https://api.gettyimages.com/v4/oauth2/auth](https://api.gettyimages.com/v4/oauth2/auth)

    - Flow: password
    - Token URL = [https://api.gettyimages.com/v4/oauth2/token](https://api.gettyimages.com/v4/oauth2/token)
    - Refresh URL = [https://api.gettyimages.com/v4/oauth2/token](https://api.gettyimages.com/v4/oauth2/token)

<h1 id="getty-images-affiliatesearch">AffiliateSearch</h1>

## get/v3/affiliates/search/images

> Code samples

```bash
curl https://example.com/v3/affiliates/search/images \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/affiliates/search/images`

<h3 id="getv3affiliatessearchimages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|phrase|query|string \| null|false|Search images using a search phrase.|
|style|query|[AffiliateSearchStyle](#schemaaffiliatesearchstyle)|false|Filter based on graphical style of the image.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|style|photography|
|style|vector|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "images": [
    {
      "caption": "string",
      "destination_url": "string",
      "id": "string",
      "preview_urls": {
        "large": "string",
        "large_height": 0,
        "large_width": 0,
        "medium": "string",
        "medium_height": 0,
        "medium_width": 0,
        "small": "string",
        "small_height": 0,
        "small_width": 0
      },
      "title": "string"
    }
  ]
}
```

<h3 id="getv3affiliatessearchimages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AffiliateImageSearchResponse](#schemaaffiliateimagesearchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## get/v3/affiliates/search/videos

> Code samples

```bash
curl https://example.com/v3/affiliates/search/videos \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/affiliates/search/videos`

<h3 id="getv3affiliatessearchvideos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|phrase|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "videos": [
    {
      "caption": "string",
      "clip_length": "string",
      "destination_url": "string",
      "id": "string",
      "preview_urls": {
        "large_motion": "string",
        "large_still": "string",
        "medium_still": "string",
        "small_motion": "string",
        "small_still": "string"
      },
      "title": "string"
    }
  ]
}
```

<h3 id="getv3affiliatessearchvideos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AffiliateVideoSearchResponse](#schemaaffiliatevideosearchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-artists">Artists</h1>

## Search for images by a photographer

> Code samples

```bash
curl https://example.com/v3/artists/images \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/artists/images`

<h3 id="search-for-images-by-a-photographer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|artist_name|query|string \| null|false|Name of artist for desired images|
|fields|query|[[ArtistsImageSearchFieldValues](#schemaartistsimagesearchfieldvalues)]|false|Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.|
|page|query|integer(int32)|false|Identifies page to return. Default page is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default page_size is 10, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|asset_type|
|fields|call_for_image|
|fields|caption|
|fields|collection_id|
|fields|collection_code|
|fields|collection_name|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|editorial_segments|
|fields|event_ids|
|fields|graphical_style|
|fields|keywords|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|

<h3 id="search-for-images-by-a-photographer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for videos by a photographer

> Code samples

```bash
curl https://example.com/v3/artists/videos \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/artists/videos`

<h3 id="search-for-videos-by-a-photographer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|artist_name|query|string \| null|false|Name of artist for desired images|
|fields|query|[[ArtistsVideoSearchFieldValues](#schemaartistsvideosearchfieldvalues)]|false|Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.|
|page|query|integer(int32)|false|Identifies page to return. Default page is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default page_size is 10, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|asset_type|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_id|
|fields|collection_code|
|fields|collection_name|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|editorial_segments|
|fields|event_ids|
|fields|graphical_style|
|fields|keywords|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|

<h3 id="search-for-videos-by-a-photographer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-assetchanges">AssetChanges</h1>

## Get asset change notifications.

> Code samples

```bash
curl https://example.com/v3/asset-changes/change-sets \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`PUT /v3/asset-changes/change-sets`

# Asset Changes

Get notifications about new, updated or deleted assets for a specific channel.

##  Quickstart

You'll need an API key and an access token to use this resource. 

Maximum batch size is 2200.

Change-sets must be confirmed before a new batch of notifications can be retrieved from this endpoint. Use the DELETE asset-changes/change-sets/{change-set-id} endpoint to confirm reciept of these notifications.

Values returned for asset_type include Image, Film, and null. Values returned for asset_lifecycle include New, Update, and Delete.

Delete notifications may be provided for asset ids that have not previously been received as New or Update notifications. Delete notifications may return null for the asset_type.

If there are no notifications in the channel an empty response body will be returned.

Notifications older than 60 days will be removed from partner channels.


<h3 id="get-asset-change-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|channel_id|query|integer(int32)|false|Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.|
|batch_size|query|integer(int32) \| null|false|Specifies the number of assets to return. The default is 2200; maximum is 2200.|

> Example responses

> 200 Response

```json
{
  "change_set_id": "string",
  "changed_assets": [
    {
      "asset_changed_utc_datetime": "1970-01-01T00:00:00Z",
      "asset_lifecycle": "string",
      "asset_type": "string",
      "id": "string",
      "uri": "string"
    }
  ]
}
```

> 201 Response

```json
{
  "change_set_id": "string",
  "changed_assets": [
    {
      "asset_changed_utc_datetime": "1970-01-01T00:00:00Z",
      "asset_lifecycle": "string",
      "asset_type": "string",
      "id": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="get-asset-change-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - Channel contains unconfirmed asset change notifications|[AssetChanges](#schemaassetchanges)|
|201|Created|Created|[AssetChanges](#schemaassetchanges)|
|400|Bad Request|InvalidChannelIdException|None|
|403|Forbidden|Your access token does not authorize access to this resource|None|
|404|Not Found|The channel you specified does not exist|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Confirm asset change notifications.

> Code samples

```bash
curl https://example.com/v3/asset-changes/change-sets/0 \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /v3/asset-changes/change-sets/{change-set-id}`

# Delete Asset Changes

Confirm asset changes acknowledges receipt of asset changes (from the PUT asset-changes endpoint).

##  Quickstart

You'll need an API key and an access token to use this resource.

Use the change_set_id from the PUT asset-changes/change-sets endpoint to confirm receipt of notifications.


<h3 id="confirm-asset-change-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|change-set-id|path|integer(int64)|true|Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.|

<h3 id="confirm-asset-change-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|InvalidChangeSetId|None|
|403|Forbidden|Your access token does not authorize access to this resource|None|
|404|Not Found|Transaction was not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get a list of asset change notification channels.

> Code samples

```bash
curl https://example.com/v3/asset-changes/channels \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/asset-changes/channels`

# Get Partner Channels

Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.

##  Quickstart

You'll need an API key and an access token to use this resource.

Partners who have a channel that has been removed should contact their sales representative to be set up again.



> Example responses

> 200 Response

```json
[
  {
    "AssetChangeType": "string",
    "AssetFamily": "NotSet",
    "AssetType": "NotSet",
    "ChannelId": 0,
    "CreateDateUtc": "1970-01-01T00:00:00Z",
    "Metadata": "string",
    "NotificationCount": 0,
    "OldestChangeNotificationDateUtc": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="get-a-list-of-asset-change-notification-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|UnauthorizedToAccessResource|None|
|404|Not Found|ChannelsNotFound|None|

<h3 id="get-a-list-of-asset-change-notification-channels-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Channel](#schemachannel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-assetlicensing">AssetLicensing</h1>

## Endpoint for acquiring extended licenses with iStock credits for an asset.

> Code samples

```bash
curl https://example.com/v3/asset-licensing/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "extended_licenses": [
      "multiseat"
    ],
    "use_team_credits": true
  }'
```

`POST /v3/asset-licensing/{assetId}`

> Body parameter

```json
{
  "extended_licenses": [
    "multiseat"
  ],
  "use_team_credits": true
}
```

<h3 id="endpoint-for-acquiring-extended-licenses-with-istock-credits-for-an-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|assetId|path|string \| null|true|Getty Images assetId - examples 520621493, 112301284|
|body|body|[AcquireAssetLicensesRequest](#schemaacquireassetlicensesrequest)|false|Structure that specifies an array of LicenseTypes (multiseat, unlimited, resale, indemnification) to acquire,<br>            and whether or not to use Team Credits. Authenticated User must have access to Team Credits if UseTeamCredits is set to "true".|
|» extended_licenses|body|[[ExtendedLicenses](#schemaextendedlicenses)]|true|none|
|» use_team_credits|body|boolean|false|Defaults to false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» extended_licenses|multiseat|
|» extended_licenses|unlimited|
|» extended_licenses|resale|
|» extended_licenses|indemnification|

> Example responses

> 200 Response

```json
{
  "acquired_licenses": [
    "multiseat"
  ],
  "credits_used": 0
}
```

<h3 id="endpoint-for-acquiring-extended-licenses-with-istock-credits-for-an-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AssetLicensingResponse](#schemaassetlicensingresponse)|
|400|Bad Request|InvalidRequestParameters|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|402|Payment Required|NotEnoughCreditsForPurchase|None|
|404|Not Found|StandardLicenseNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-assetmanagement">AssetManagement</h1>

## get/v3/asset-management/assets/send-events

> Code samples

```bash
curl https://example.com/v3/asset-management/assets/send-events \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/asset-management/assets/send-events`

<h3 id="getv3asset-managementassetssend-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|last_offset|query|string(date-time) \| null|false|Specifies a date/time (with timezone information) for continuing retrieval of events.<br>Events occuring _after_ the `last_offset` value provided will be returned.|
|event_count|query|integer(int32) \| null|false|Specifies the number of events to return. Default is 50, maximum value is 100.|

> Example responses

> 200 Response

```json
{
  "asset_send_events": [
    {
      "asset_id": "string",
      "email_address": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "last_offset": "1970-01-01T00:00:00Z"
}
```

<h3 id="getv3asset-managementassetssend-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[GetSendEventsResponse](#schemagetsendeventsresponse)|
|400|Bad Request|EventCountOutOfRange|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-boards">Boards</h1>

## Get all boards that the user participates in

> Code samples

```bash
curl https://example.com/v3/boards \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/boards`

<h3 id="get-all-boards-that-the-user-participates-in-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|board_relationship|query|[BoardRelationship](#schemaboardrelationship)|false|Search for boards the user owns or has been invited to as an editor.|
|sort_order|query|[BoardSortOrder](#schemaboardsortorder)|false|Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.|
|pageSize|query|integer(int32)|false|Request number of boards to return in each page. (default is 30).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|board_relationship|owned|
|board_relationship|invited|
|sort_order|date_last_updated_descending|
|sort_order|date_last_updated_ascending|
|sort_order|name_ascending|
|sort_order|name_decending|

> Example responses

> 200 Response

```json
{
  "board_count": 0,
  "boards": [
    {
      "asset_count": 0,
      "board_relationship": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "date_last_updated": "1970-01-01T00:00:00Z",
      "description": "string",
      "hero_asset": {
        "asset_type": "string",
        "date_added": "1970-01-01T00:00:00Z",
        "display_sizes": [
          {
            "name": "string",
            "uri": "string"
          }
        ],
        "id": "string"
      },
      "id": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="get-all-boards-that-the-user-participates-in-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardList](#schemaboardlist)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Create a new board

> Code samples

```bash
curl https://example.com/v3/boards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`POST /v3/boards`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="create-a-new-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|body|body|[BoardInfo](#schemaboardinfo)|false|Specify a name and description of the board to create (name is required).|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

<h3 id="create-a-new-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[BoardCreated](#schemaboardcreated)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get assets and metadata for a specific board

> Code samples

```bash
curl https://example.com/v3/boards/string \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/boards/{board_id}`

<h3 id="get-assets-and-metadata-for-a-specific-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Retrieve details for a specific board.|

> Example responses

> 200 Response

```json
{
  "asset_count": 0,
  "assets": [
    {
      "asset_type": "string",
      "date_added": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "name": "string",
          "uri": "string"
        }
      ],
      "id": "string"
    }
  ],
  "comment_count": 0,
  "date_created": "1970-01-01T00:00:00Z",
  "date_last_updated": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "invitation": "string",
    "share": "string"
  },
  "name": "string",
  "permissions": {
    "can_add_assets": true,
    "can_delete_board": true,
    "can_invite_to_board": true,
    "can_remove_assets": true,
    "can_update_description": true,
    "can_update_name": true
  }
}
```

<h3 id="get-assets-and-metadata-for-a-specific-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardDetail](#schemaboarddetail)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Update a board

> Code samples

```bash
curl https://example.com/v3/boards/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "description": "string",
    "name": "string"
  }'
```

`PUT /v3/boards/{board_id}`

> Body parameter

```json
{
  "description": "string",
  "name": "string"
}
```

<h3 id="update-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to update.|
|body|body|[BoardInfo](#schemaboardinfo)|false|Specify a new name and description for the board (name is required).|
|» description|body|string \| null|false|none|
|» name|body|string|true|none|

<h3 id="update-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content|Updated|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Delete a board

> Code samples

```bash
curl https://example.com/v3/boards/string \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /v3/boards/{board_id}`

<h3 id="delete-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to delete.|

<h3 id="delete-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content||None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Add assets to a board

> Code samples

```bash
curl https://example.com/v3/boards/string/assets \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '[
    {
      "asset_id": "string"
    }
  ]'
```

`PUT /v3/boards/{board_id}/assets`

> Body parameter

```json
[
  {
    "asset_id": "string"
  }
]
```

<h3 id="add-assets-to-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to add assets to.|
|body|body|[[BoardAsset](#schemaboardasset)]|false|List assets to add to the board.|

> Example responses

> 201 Response

```json
{
  "assets_added": [
    {
      "asset_id": "string"
    }
  ],
  "assets_not_added": [
    "string"
  ]
}
```

<h3 id="add-assets-to-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[AddBoardAssetsResult](#schemaaddboardassetsresult)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Remove assets from a board

> Code samples

```bash
curl https://example.com/v3/boards/string/assets \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /v3/boards/{board_id}/assets`

<h3 id="remove-assets-from-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to remove assets from.|
|asset_ids|query|[string]|false|List the assets to be removed from the board.|

<h3 id="remove-assets-from-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Add an asset to a board

> Code samples

```bash
curl https://example.com/v3/boards/string/assets/string \
  -X PUT \
  -H "Api-Key: ${API_KEY}"
```

`PUT /v3/boards/{board_id}/assets/{asset_id}`

<h3 id="add-an-asset-to-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to add an asset to.|
|asset_id|path|string \| null|true|Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.|

<h3 id="add-an-asset-to-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|AssetNotFound|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Remove an asset from a board

> Code samples

```bash
curl https://example.com/v3/boards/string/assets/string \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /v3/boards/{board_id}/assets/{asset_id}`

<h3 id="remove-an-asset-from-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to remove an asset from.|
|asset_id|path|string \| null|true|Specify the asset to remove from the board.|

<h3 id="remove-an-asset-from-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get comments from a board

> Code samples

```bash
curl https://example.com/v3/boards/string/comments \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/boards/{board_id}/comments`

<h3 id="get-comments-from-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to retrieve comments from.|

> Example responses

> 200 Response

```json
{
  "comments": [
    {
      "created_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "date_created": "1970-01-01T00:00:00Z",
      "id": "string",
      "permissions": {
        "can_delete_comment": true
      },
      "text": "string"
    }
  ],
  "permissions": {
    "can_add_comment": true
  }
}
```

<h3 id="get-comments-from-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CommentsList](#schemacommentslist)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Add a comment to a board

> Code samples

```bash
curl https://example.com/v3/boards/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "text": "string"
  }'
```

`POST /v3/boards/{board_id}/comments`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="add-a-comment-to-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board to add a comment to.|
|body|body|[CommentRequest](#schemacommentrequest)|false|Comment to be added to the board.|
|» text|body|string \| null|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string"
}
```

<h3 id="add-a-comment-to-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[CommentCreated](#schemacommentcreated)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Delete a comment from a board

> Code samples

```bash
curl https://example.com/v3/boards/string/comments/string \
  -X DELETE \
  -H "Api-Key: ${API_KEY}"
```

`DELETE /v3/boards/{board_id}/comments/{comment_id}`

<h3 id="delete-a-comment-from-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|board_id|path|string \| null|true|Specify the board containing the comment to delete.|
|comment_id|path|string \| null|true|Specify the comment to delete.|

<h3 id="delete-a-comment-from-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|204|No Content|CommentDeleted|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientAccess|None|
|404|Not Found|BoardNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-collections">Collections</h1>

## Gets collections applicable for the customer.

> Code samples

```bash
curl https://example.com/v3/collections \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/collections`

Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).

You'll need an API key and access token to use this resource.


<h3 id="gets-collections-applicable-for-the-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|

> Example responses

> 200 Response

```json
{
  "collections": [
    {
      "asset_family": "string",
      "code": "string",
      "id": 0,
      "license_model": "string",
      "name": "string",
      "product_types": [
        "string"
      ]
    }
  ]
}
```

<h3 id="gets-collections-applicable-for-the-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CollectionsList](#schemacollectionslist)|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-countries">Countries</h1>

## Gets countries codes and names.

> Code samples

```bash
curl https://example.com/v3/countries \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/countries`

Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.

You'll need an API key and access token to use this resource.


<h3 id="gets-countries-codes-and-names-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|

> Example responses

> 200 Response

```json
{
  "countries": [
    {
      "iso_alpha_2": "string",
      "iso_alpha_3": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="gets-countries-codes-and-names-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CountriesList](#schemacountrieslist)|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-customers">Customers</h1>

## Returns information about the current user.

> Code samples

```bash
curl https://example.com/v3/customers/current \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/customers/current`

Returns the first, middle and last name of the authenticated user.

You'll need an API key and access token to use this resource.
	
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.


<h3 id="returns-information-about-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|

> Example responses

> 200 Response

```json
{
  "first_name": "string",
  "last_name": "string",
  "middle_name": "string"
}
```

<h3 id="returns-information-about-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CustomerInfoResponse](#schemacustomerinforesponse)|
|400|Bad Request|InvalidRequestParameters|None|
|401|Unauthorized|Unauthorized|None|
|503|Service Unavailable|ServiceUnavailable|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-downloads">Downloads</h1>

## Returns information about a customer's downloaded assets.

> Code samples

```bash
curl https://example.com/v3/downloads \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/downloads`

Returns information about a customer's previously downloaded assets.

You'll need an API key and access token to use this resource.
 
	
This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
you need to also include an authorization token in the header of your request. 
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.


<h3 id="returns-information-about-a-customers-downloaded-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|date_from|query|string(date-time) \| null|false|If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). <br>Any hour, minute, second values in the request are not used, unless useTimePart parameter is included.<br>Date/times in the response are UTC. Default is 30 days prior to date_to|
|date_to|query|string(date-time) \| null|false|If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)<br>Any hour, minute, second values in the request are not used, unless useTimePart parameter is included.<br>Date/times in the response are UTC. Default is current date or 30 days after specified start date, whichever one is earlier.|
|use_time|query|boolean|false|If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format<br>i.e.: 2019-09-19T19:30:37 or 2019-09-19 19:30:37.  Time zone can be specified as optional.<br>Default value is false|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|
|product_type|query|[ProductTypeForDownloads](#schemaproducttypefordownloads)|false|Specifies product type to be included in the previous download results. Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. To get previous iStockPhoto credit downloads, creditpack must be selected.|
|company_downloads|query|boolean|false|If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product_type|easyaccess|
|product_type|editorialsubscription|
|product_type|imagepack|
|product_type|premiumaccess|
|product_type|royaltyfreesubscription|
|product_type|creditpack|

> Example responses

> 200 Response

```json
{
  "downloads": [
    {
      "agreement_name": "string",
      "asset_type": "string",
      "date_downloaded": "1970-01-01T00:00:00Z",
      "dimensions": {
        "dpi": 0,
        "height": 0,
        "width": 0
      },
      "download_details": {
        "download_notes": "string",
        "project_code": "string"
      },
      "download_source": "string",
      "id": "string",
      "product_id": 0,
      "product_type": "string",
      "size_name": "string",
      "thumb_uri": "string",
      "user": {
        "first_name": "string",
        "last_name": "string",
        "middle_name": "string",
        "username": "string"
      }
    }
  ],
  "result_count": 0
}
```

<h3 id="returns-information-about-a-customers-downloaded-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[GetDownloadsResponse](#schemagetdownloadsresponse)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Download an image

> Code samples

```bash
curl https://example.com/v3/downloads/images/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "download_notes": "string",
    "project_code": "string"
  }'
```

`POST /v3/downloads/images/{id}`

Use this endpoint to generate download URLs and related data for images you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.

## Auto Downloads
The `auto_download` request query parameter specifies whether to automatically download the image.

If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).

Client Request:

```
https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
```

Server Response:

Your client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).

```
HTTP/1.1 303 See Other
Location: https://delivery.gettyimages.com/...
```

If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 

Client Request:

```
https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
```

Server Response:

```
HTTP/1.1 200 OK
{
	"uri": "https://delivery.gettyimages.com/..."
}
```
## Downloading Via the Returned URI

Your client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).

The URI returned by this call should be considered opaque and the format could change at any time.
In order to get the filename, length or file type, the response headers must be inspected. An example
response follows:

```
content-length: 33959979
content-type: image/jpeg
content-disposition: attachment; filename=GettyImages-1167612765.jpg
```

The `content-disposition` header must be parsed to get a usable filename.

## Download URI expiration

Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.


> Body parameter

```json
{
  "download_notes": "string",
  "project_code": "string"
}
```

<h3 id="download-an-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|<remarks><br>                    Id of image to download.<br>                </remarks>|
|auto_download|query|boolean|false|<remarks><br>                    Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a<br>                    Location header set to the location of the image.<br>                    If false is specified, the download URI will be returned in the response message. Default is true.<br>                </remarks>|
|file_type|query|[DownloadFileType](#schemadownloadfiletype)|false|<remarks><br>                    File Type expressed with three character file extension.<br>                </remarks>|
|height|query|string \| null|false|<remarks><br>                    Specifies the pixel height of the particular image to download.<br>                    Available heights can be found in the images/{ids} response for the specific image.<br>                    If left blank, it will return the largest available size.<br>                </remarks>|
|product_id|query|integer(int32) \| null|false|<remarks><br>                    Identifier of the instance for the selected product offering type.<br>                </remarks>|
|product_type|query|[ProductTypeForDownloads](#schemaproducttypefordownloads)|false|<remarks><br>                    Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.<br>                </remarks>|
|use_team_credits|query|boolean \| null|false|Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.|
|body|body|[PremiumAccessDownloadData](#schemapremiumaccessdownloaddata)|false|<remarks><br>                    Additional information required from specific customers when downloading. <br>                    Only users who have been set up with a project code by Getty Images Sales need to use this field.<br>                </remarks>|
|» download_notes|body|string \| null|false|none|
|» project_code|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|file_type|eps|
|file_type|jpg|
|product_type|easyaccess|
|product_type|editorialsubscription|
|product_type|imagepack|
|product_type|premiumaccess|
|product_type|royaltyfreesubscription|
|product_type|creditpack|

<h3 id="download-an-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|303|See Other|See Other|None|
|400|Bad Request|MissingRequiredQueryParameters|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|OverageLimitReached|None|
|404|Not Found|ImageNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Download a video

> Code samples

```bash
curl https://example.com/v3/downloads/videos/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "download_notes": "string",
    "project_code": "string"
  }'
```

`POST /v3/downloads/videos/{id}`

Use this endpoint to generate download URLs and related data for videos you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.

## Auto Downloads
The `auto_download` request query parameter specifies whether to automatically download the video.

If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).

Client Request:

```
https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
```

Server Response:

Your client code should follow redirect (3xx) status codes returned from the URI in the response Location header. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).

```
HTTP/1.1 303 See Other
Location: https://delivery.gettyimages.com/...
```

If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 

Client Request:

```
https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
```

Server Response:

```
HTTP/1.1 200 OK
{
	"uri": "https://delivery.gettyimages.com/..."
}
```

## Downloading Via the Returned URI

Your client code should follow redirect (3xx) status codes returned from the URI in the response. More information here: [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4).

The URI returned by this call should be considered opaque and the format could change at any time.
In order to get the filename, length or file type, the response headers must be inspected. An example
response follows:

```
content-length: 283925783
content-type: video/quicktime
content-disposition: attachment; filename=GettyImages-690773579.mov
```

The `content-disposition` header must be parsed to get a usable filename.

## Download URI expiration

Download URIs are _**only valid for 24 hours**_, starting from the moment they are returned from this call.


> Body parameter

```json
{
  "download_notes": "string",
  "project_code": "string"
}
```

<h3 id="download-a-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|<remarks><br>                    Id of video to download.<br>                </remarks>|
|auto_download|query|boolean|false|<remarks><br>                    Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a<br>                    Location header set to the location of the video.<br>                    If false is specified, the download URI will be returned in the response message. Default is false.<br>                </remarks>|
|size|query|string \| null|false|Specifies the size to be downloaded.|
|product_id|query|integer(int32) \| null|false|<remarks><br>                    Identifier of the instance for the selected product offering type.<br>                </remarks>|
|product_type|query|[ProductTypeForDownloads](#schemaproducttypefordownloads)|false|<remarks><br>                    Product types easyaccess, editorialsubscription, imagepack, and premiumaccess are for GettyImages API keys. Product types royaltyfreesubscription and creditpack are for iStock API keys. Default product type for iStock API keys is creditpack.<br>                </remarks>|
|use_team_credits|query|boolean \| null|false|Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.|
|body|body|[PremiumAccessDownloadData](#schemapremiumaccessdownloaddata)|false|<remarks><br>                    Additional information required from specific customers when downloading. <br>                    Only users who have been set up with a project code by Getty Images Sales need to use this field.<br>                </remarks>|
|» download_notes|body|string \| null|false|none|
|» project_code|body|string \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|product_type|easyaccess|
|product_type|editorialsubscription|
|product_type|imagepack|
|product_type|premiumaccess|
|product_type|royaltyfreesubscription|
|product_type|creditpack|

<h3 id="download-a-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|303|See Other|See Other|None|
|400|Bad Request|MissingRequiredQueryParameters|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|OverageLimitReached|None|
|404|Not Found|VideoNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-events">Events</h1>

## Get metadata for multiple events

> Code samples

```bash
curl https://example.com/v3/events \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/events`

This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource.


<h3 id="get-metadata-for-multiple-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|ids|query|[integer(int32)]|false|A comma separated list of event ids.|
|fields|query|[[EventDetailFieldValues](#schemaeventdetailfieldvalues)]|false|A comma separated list of fields to return in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|child_event_count|
|fields|editorial_segments|
|fields|hero_image|
|fields|image_count|
|fields|location|
|fields|name|
|fields|start_date|
|fields|type|

<h3 id="get-metadata-for-multiple-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidRequestParameters|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|EventNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get metadata for a single event

> Code samples

```bash
curl https://example.com/v3/events/0 \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/events/{id}`

This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
photographers and videographers cover editorially relevant events occurring around the world.  
All images or video clips produced in association with an event, are assigned the same EventID. 
EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource.


<h3 id="get-metadata-for-a-single-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|integer(int32)|true|An event id.|
|fields|query|[[EventDetailFieldValues](#schemaeventdetailfieldvalues)]|false|A comma separated list of fields to return in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|child_event_count|
|fields|editorial_segments|
|fields|hero_image|
|fields|image_count|
|fields|location|
|fields|name|
|fields|start_date|
|fields|type|

<h3 id="get-metadata-for-a-single-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidRequestParameters|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|EventNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-images">Images</h1>

## Get metadata for multiple images by supplying multiple image ids

> Code samples

```bash
curl https://example.com/v3/images \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/images`

This endpoint returns the detailed image metadata for all specified images.

You'll need an API key and access token to use this resource.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "artist",
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
        "artist", 
        "artist_title", 
        "asset_family",
        "call_for_image",
        "caption", 
        "city",
        "collection_code",
        "collection_id", 
        "collection_name",
        "color_type", 
        "copyright", 
        "country", 
        "credit_line", 
        "date_created", 
        "date_submitted",
        "download_sizes", 
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province", 
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.


<h3 id="get-metadata-for-multiple-images-by-supplying-multiple-image-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|ids|query|[string]|false|Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.|
|fields|query|[[ImageDetailFieldValues](#schemaimagedetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|artist_title|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|city|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|country|
|fields|credit_line|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_sizes|
|fields|download_product|
|fields|downloads|
|fields|editorial_segments|
|fields|editorial_source|
|fields|entity_details|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|istock_licenses|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|links|
|fields|max_dimensions|
|fields|object_name|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|state_province|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|

> Example responses

> 200 Response

```json
{
  "images": null,
  "images_not_found": [
    "string"
  ]
}
```

<h3 id="get-metadata-for-multiple-images-by-supplying-multiple-image-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagesDetailResults](#schemaimagesdetailresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|ImageNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get metadata for a single image by supplying one image id

> Code samples

```bash
curl https://example.com/v3/images/string \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/images/{id}`

This endpoint returns the detailed image metadata for a specified image.

You'll need an API key and access token to use this resource. 
 
## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that
are often used to build search response results. The following fields are provided for every image in your
result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "artist",
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
often used to build a detailed view of images. The following fields are provided for every image in your 
result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
        "artist", 
        "artist_title", 
        "asset_family",
        "call_for_image",
        "caption", 
        "city",
        "collection_code",
        "collection_id", 
        "collection_name",
        "color_type", 
        "copyright", 
        "country", 
        "credit_line", 
        "date_created", 
        "date_submitted",
        "download_sizes", 
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province", 
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
resolution files that are most frequently used to build a UI displaying search results. The following fields are provided
for every image in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



          "name": "string",
          "uri": "string"

<h3 id="get-metadata-for-a-single-image-by-supplying-one-image-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|An image id. For more than one image please use the /v3/images endpoint.|
|fields|query|[[ImageDetailFieldValues](#schemaimagedetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|artist_title|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|city|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|country|
|fields|credit_line|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_sizes|
|fields|download_product|
|fields|downloads|
|fields|editorial_segments|
|fields|editorial_source|
|fields|entity_details|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|istock_licenses|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|links|
|fields|max_dimensions|
|fields|object_name|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|state_province|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|

> Example responses

> 200 Response

```json
{
  "images": null,
  "images_not_found": [
    "string"
  ]
}
```

<h3 id="get-metadata-for-a-single-image-by-supplying-one-image-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImagesDetailResults](#schemaimagesdetailresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|ImageNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Returns information about a customer's download history for a specific asset

> Code samples

```bash
curl https://example.com/v3/images/string/downloadhistory \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/images/{id}/downloadhistory`

<h3 id="returns-information-about-a-customers-download-history-for-a-specific-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|An image id.|
|company_downloads|query|boolean|false|If specified, returns the list of previously downloaded images for all users in your company.<br>            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.|

> Example responses

> 200 Response

```json
{
  "downloads": null,
  "id": "string"
}
```

<h3 id="returns-information-about-a-customers-download-history-for-a-specific-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AssetDownloadHistoryResults](#schemaassetdownloadhistoryresults)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|ImageNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Retrieve creative images from the same series

> Code samples

```bash
curl https://example.com/v3/images/string/same-series \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/images/{id}/same-series`

This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.

You'll need an API key and access token to use this resource.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ]
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```


<h3 id="retrieve-creative-images-from-the-same-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|Identifies an existing image|
|fields|query|[[ImagesFieldValues](#schemaimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|accessrestriction|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|editorial_source|
|fields|entity_details|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="retrieve-creative-images-from-the-same-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchItemSearchResults](#schemaimagesearchitemsearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|ImageNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Retrieve similar images

> Code samples

```bash
curl https://example.com/v3/images/string/similar \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/images/{id}/similar`

This endpoint will provide a list of images that are similar to the specified asset id.

You'll need an API key and access token to use this resource.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ]
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
set when you include **display_set** in your request.


The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```


<h3 id="retrieve-similar-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|Identifies an existing image|
|fields|query|[[ImagesFieldValues](#schemaimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|accessrestriction|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|editorial_source|
|fields|entity_details|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="retrieve-similar-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchItemSearchResults](#schemaimagesearchitemsearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|ImageNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-orders">Orders</h1>

## Get order metadata

> Code samples

```bash
curl https://example.com/v3/orders/0 \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/orders/{id}`

This endpoint returns detailed order metadata for a specified order.
Use of this endpoint requires configuration changes to your API key. 

You'll need an API key and access token to use this resource.

<h3 id="get-order-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|integer(int32)|true|An order id.|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "id": "string"
    }
  ],
  "end_client": "string",
  "id": "string",
  "invoice_number": "string",
  "notes": {
    "licensee_name": "string",
    "ordered_by": "string",
    "project_title": "string",
    "purchase_order_number": "string"
  },
  "order_date": "1970-01-01T00:00:00Z"
}
```

<h3 id="get-order-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrderDetail](#schemaorderdetail)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|NoAccessToOrderMetadata|None|
|404|Not Found|OrderNotFound|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-products">Products</h1>

## Get Products

> Code samples

```bash
curl https://example.com/v3/products \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/products`

This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.

You'll need an API key and access token to use this resource.


<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|fields|query|[[ProductFieldValues](#schemaproductfieldvalues)]|false|Comma separated list of fields. Allows product download requirements to be returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|download_requirements|

> Example responses

> 200 Response

```json
{
  "products": [
    {
      "agreement_name": "string",
      "application_website": "string",
      "credits_remaining": 0,
      "download_limit": 0,
      "download_limit_duration": "string",
      "download_limit_reset_utc_date": "1970-01-01T00:00:00Z",
      "download_requirements": {
        "is_note_required": true,
        "is_project_code_required": true,
        "project_codes": [
          "string"
        ]
      },
      "downloads_remaining": 0,
      "expiration_utc_date": "1970-01-01T00:00:00Z",
      "id": 0,
      "imagepack_resolution": "string",
      "name": "string",
      "overage": {
        "count": 0,
        "limit": 0,
        "overages_reached": true,
        "remaining": 0
      },
      "status": "active",
      "team_credits": 0,
      "type": "easyaccess"
    }
  ]
}
```

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProductsResult](#schemaproductsresult)|
|400|Bad Request|InvalidRequestParameters|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|CreditPack|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-purchases">Purchases</h1>

## Get Previously Purchased Images and Video

> Code samples

```bash
curl https://example.com/v3/purchased-assets \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/purchased-assets`

This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
to learn more.

You'll need an API key and access token to use this resource.


<h3 id="get-previously-purchased-images-and-video-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|date_to|query|string(date-time) \| null|false|If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 75, maximum page_size is 100.|
|date_from|query|string(date-time) \| null|false|If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).|
|company_purchases|query|boolean|false|If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.|

> Example responses

> 200 Response

```json
{
  "previous_purchases": [
    {
      "asset_id": "string",
      "asset_type": "string",
      "date_purchased": "1970-01-01T00:00:00Z",
      "download_uri": "string",
      "file_size_in_bytes": "string",
      "license_model": "string",
      "order_id": "string",
      "purchased_by": "string",
      "size_name": "string",
      "thumb_uri": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="get-previously-purchased-images-and-video-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PreviousAssetPurchases](#schemapreviousassetpurchases)|
|400|Bad Request|PageNumberLessThanOne|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|InsufficientPermissions|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-search">Search</h1>

## Upload image for use by the search creative images/videos operations

> Code samples

```bash
curl https://example.com/v3/search/by-image/uploads/string \
  -X PUT \
  -H 'Content-Type: image/jpeg' \
  -H "Api-Key: ${API_KEY}" \
  --data-binary '@/path/to/file'
```

`PUT /v3/search/by-image/uploads/{file-name}`

<h3 id="upload-image-for-use-by-the-search-creative-imagesvideos-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file-name|path|string \| null|true|none|
|body|body|string(byte) \| null|false|none|

<h3 id="upload-image-for-use-by-the-search-creative-imagesvideos-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for events

> Code samples

```bash
curl https://example.com/v3/search/events \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/events`

Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   

You'll need an API key and access token to use this resource.


You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.


<h3 id="search-for-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|editorial_segment|query|[EditorialSegmentContract](#schemaeditorialsegmentcontract)|false|Filters to events with a matching editorial segment.|
|date_from|query|string(date-time) \| null|false|Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.|
|date_to|query|string(date-time) \| null|false|Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.|
|fields|query|[[EventFieldValues](#schemaeventfieldvalues)]|false|Specifies fields to return. Default set is 'id','name','start_date'.|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1, maximum is 50).|
|page_size|query|integer(int32)|false|Request number of events to return in each page. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Filters to events related to this phrase|
|sort_order|query|[EventSearchSortOrder](#schemaeventsearchsortorder)|false|Specifies the order in which to sort the results. Default is `newest`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|editorial_segment|archival|
|editorial_segment|entertainment|
|editorial_segment|news|
|editorial_segment|publicity|
|editorial_segment|royalty|
|editorial_segment|sport|
|fields|id|
|fields|child_event_count|
|fields|editorial_segments|
|fields|hero_image|
|fields|image_count|
|fields|keywords|
|fields|location|
|fields|name|
|fields|start_date|
|fields|type|
|sort_order|newest|
|sort_order|oldest|

> Example responses

> 200 Response

```json
{
  "events": [
    {
      "child_event_count": 0,
      "editorial_segments": [
        "string"
      ],
      "hero_image": {
        "display_sizes": [
          {
            "is_watermarked": true,
            "name": "string",
            "uri": "string"
          }
        ],
        "id": "string"
      },
      "id": 0,
      "image_count": 0,
      "location": {
        "city": "string",
        "country": "string",
        "state_province": "string",
        "venue": "string"
      },
      "name": "string",
      "start_date": "1970-01-01T00:00:00Z"
    }
  ],
  "result_count": 0
}
```

<h3 id="search-for-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EventsSearchResult](#schemaeventssearchresult)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for both creative and editorial images - *** DEPRECATED ***

> Code samples

```bash
curl https://example.com/v3/search/images \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/images`

## _This endpoint draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons,_ _**it is highly recommended that those endpoints are used instead of this blended endpoint.**_



You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
To include your API token in the search request, add it to the headers as a Bearer token (example in curl):

	-H "Authorization: Bearer <your-token>"

Search requests without a phrase parameter are not supported and may not always work.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.


<h3 id="search-for-both-creative-and-editorial-images---deprecated--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|age_of_people|query|[[AgeOfPeopleFilterType](#schemaageofpeoplefiltertype)]|false|Filter based on the age of individuals in an image.|
|artists|query|string \| null|false|Search for images by specific artists (free-text, comma-separated list of artists).|
|collection_codes|query|[string]|false|Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.|
|collections_filter_type|query|[CollectionsFilterType](#schemacollectionsfiltertype)|false|Provides searching based on specified collection(s). The default is Include|
|color|query|string \| null|false|Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.|
|compositions|query|[[CompositionsFilterType](#schemacompositionsfiltertype)]|false|Filter based on image composition.|
|download_product|query|string \| null|false|Filters based on which product the asset will download against.<br>                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.<br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|
|embed_content_only|query|boolean|false|Restrict search results to embeddable images. The default is false.|
|event_ids|query|[integer(int32)]|false|Filter based on specific events|
|ethnicity|query|[[EthnicityFilterType](#schemaethnicityfiltertype)]|false|Filter search results based on the ethnicity of individuals in an image.|
|exclude_nudity|query|boolean|false|Excludes images containing nudity. The default is false.|
|fields|query|[[ImagesFieldValues](#schemaimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'.|
|file_types|query|[[SearchFileType](#schemasearchfiletype)]|false|Return only images having a specific file type.|
|graphical_styles|query|[[GraphicalStyle](#schemagraphicalstyle)]|false|Filter based on graphical style of the image.|
|graphical_styles_filter_type|query|[GraphicalStylesFilterType](#schemagraphicalstylesfiltertype)|false|Provides searching based on specified graphical style(s). The default is Include|
|include_related_searches|query|boolean|false|Specifies whether or not to include related searches in the response. The default is false.|
|keyword_ids|query|[integer(int32)]|false|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|minimum_size|query|[TeeShirtSize](#schemateeshirtsize)|false|Filter based on minimum size requested. The default is x-small|
|number_of_people|query|[[NumberOfPeopleFilterType](#schemanumberofpeoplefiltertype)]|false|Filter based on the number of people in the image.|
|orientations|query|[[ImageOrientationRequest](#schemaimageorientationrequest)]|false|Return only images with selected aspect ratios.|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|page_size|query|integer(int32)|false|Request number of images to return in each page. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Search images using a search phrase.|
|sort_order|query|[BlendedImageSortOrder](#schemablendedimagesortorder)|false|Select sort order of results.  The default is best_match|
|specific_people|query|[string]|false|Return only images associated with specific people (using a comma-delimited list).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|age_of_people|newborn|
|age_of_people|baby|
|age_of_people|child|
|age_of_people|teenager|
|age_of_people|young_adult|
|age_of_people|adult|
|age_of_people|adults_only|
|age_of_people|mature_adult|
|age_of_people|senior_adult|
|age_of_people|0-1_months|
|age_of_people|2-5_months|
|age_of_people|6-11_months|
|age_of_people|12-17_months|
|age_of_people|18-23_months|
|age_of_people|2-3_years|
|age_of_people|4-5_years|
|age_of_people|6-7_years|
|age_of_people|8-9_years|
|age_of_people|10-11_years|
|age_of_people|12-13_years|
|age_of_people|14-15_years|
|age_of_people|16-17_years|
|age_of_people|18-19_years|
|age_of_people|20-24_years|
|age_of_people|20-29_years|
|age_of_people|25-29_years|
|age_of_people|30-34_years|
|age_of_people|30-39_years|
|age_of_people|35-39_years|
|age_of_people|40-44_years|
|age_of_people|40-49_years|
|age_of_people|45-49_years|
|age_of_people|50-54_years|
|age_of_people|50-59_years|
|age_of_people|55-59_years|
|age_of_people|60-64_years|
|age_of_people|60-69_years|
|age_of_people|65-69_years|
|age_of_people|70-79_years|
|age_of_people|80-89_years|
|age_of_people|90_plus_years|
|age_of_people|100_over|
|collections_filter_type|include|
|collections_filter_type|exclude|
|compositions|abstract|
|compositions|candid|
|compositions|close_up|
|compositions|copy_space|
|compositions|cut_out|
|compositions|full_frame|
|compositions|full_length|
|compositions|headshot|
|compositions|looking_at_camera|
|compositions|macro|
|compositions|portrait|
|compositions|sparse|
|compositions|still_life|
|compositions|three_quarter_length|
|compositions|waist_up|
|ethnicity|black|
|ethnicity|caucasian|
|ethnicity|east_asian|
|ethnicity|hispanic_latino|
|ethnicity|japanese|
|ethnicity|middle_eastern|
|ethnicity|mixed_race_person|
|ethnicity|multiethnic_group|
|ethnicity|native_american_first_nations|
|ethnicity|pacific_islander|
|ethnicity|south_asian|
|ethnicity|southeast_asian|
|fields|accessrestriction|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|editorial_source|
|fields|entity_details|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|
|file_types|eps|
|file_types|jpg|
|graphical_styles|fine_art|
|graphical_styles|illustration|
|graphical_styles|photography|
|graphical_styles|vector|
|graphical_styles_filter_type|include|
|graphical_styles_filter_type|exclude|
|minimum_size|x_small|
|minimum_size|small|
|minimum_size|medium|
|minimum_size|large|
|minimum_size|x_large|
|minimum_size|xx_large|
|minimum_size|vector|
|number_of_people|none|
|number_of_people|one|
|number_of_people|two|
|number_of_people|group|
|orientations|horizontal|
|orientations|vertical|
|orientations|square|
|orientations|panoramic_horizontal|
|orientations|panoramic_vertical|
|sort_order|best_match|
|sort_order|most_popular|
|sort_order|newest|
|sort_order|random|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="search-for-both-creative-and-editorial-images---deprecated--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ImageSearchItemSearchResults](#schemaimagesearchitemsearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for creative images only

> Code samples

```bash
curl https://example.com/v3/search/images/creative \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/images/creative`

Use this endpoint to search our contemporary stock photos, illustrations and archival images.

You'll need an API key and access token to use this resource.
 
You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

Search requests without a phrase parameter are not supported and may not always work.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

<h3 id="search-for-creative-images-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|age_of_people|query|[[AgeOfPeopleFilterType](#schemaageofpeoplefiltertype)]|false|Filter based on the age of individuals in an image.|
|artists|query|string \| null|false|Search for images by specific artists (free-text, comma-separated list of artists).|
|collection_codes|query|[string]|false|Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.|
|collections_filter_type|query|[CollectionsFilterType](#schemacollectionsfiltertype)|false|Use to include or exclude collections from search. The default is include|
|color|query|string \| null|false|Filter based on predominant color in an image. Use 6 character hexadecimal format (e.g., #002244).|
|compositions|query|[[CompositionsFilterType](#schemacompositionsfiltertype)]|false|Filter based on image composition.|
|download_product|query|string \| null|false|Filters based on which product the asset will download against.<br>                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.<br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|
|embed_content_only|query|boolean|false|Restrict search results to embeddable images. The default is false.|
|ethnicity|query|[[EthnicityFilterType](#schemaethnicityfiltertype)]|false|Filter search results based on the ethnicity of individuals in an image.|
|exclude_keyword_ids|query|[integer(int32)]|false|Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.|
|exclude_nudity|query|boolean|false|Excludes images containing nudity. The default is false.|
|exclude_editorial_use_only|query|boolean \| null|false|Exclude images that are only available for editorial (non-commercial) use. Default value is false.|
|fields|query|[[CreativeImagesFieldValues](#schemacreativeimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|
|file_types|query|[[SearchFileType](#schemasearchfiletype)]|false|Return only images having a specific file type.|
|graphical_styles|query|[[GraphicalStyle](#schemagraphicalstyle)]|false|Filter based on graphical style of the image.|
|graphical_styles_filter_type|query|[GraphicalStylesFilterType](#schemagraphicalstylesfiltertype)|false|Provides searching based on specified graphical style(s). The default is include.|
|include_related_searches|query|boolean|false|Specifies whether or not to include related searches in the response. The default is false.|
|keyword_ids|query|[integer(int32)]|false|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|minimum_size|query|[TeeShirtSize](#schemateeshirtsize)|false|Filter based on minimum size requested. The default is x-small.|
|number_of_people|query|[[NumberOfPeopleFilterType](#schemanumberofpeoplefiltertype)]|false|Filter based on the number of people in the image.|
|orientations|query|[[ImageOrientationRequest](#schemaimageorientationrequest)]|false|Return only images with selected aspect ratios.|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|page_size|query|integer(int32)|false|Request number of images to return in each page. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Search images using a search phrase.|
|safe_search|query|boolean|false|Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it's possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.|
|sort_order|query|[CreativeImageSortOrder](#schemacreativeimagesortorder)|false|Select sort order of results.  The default is best_match|
|facet_fields|query|[[CreateImageSearchFacetsFields](#schemacreateimagesearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                   The include_facets parameter must be set to "true" for facets to be returned.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|age_of_people|newborn|
|age_of_people|baby|
|age_of_people|child|
|age_of_people|teenager|
|age_of_people|young_adult|
|age_of_people|adult|
|age_of_people|adults_only|
|age_of_people|mature_adult|
|age_of_people|senior_adult|
|age_of_people|0-1_months|
|age_of_people|2-5_months|
|age_of_people|6-11_months|
|age_of_people|12-17_months|
|age_of_people|18-23_months|
|age_of_people|2-3_years|
|age_of_people|4-5_years|
|age_of_people|6-7_years|
|age_of_people|8-9_years|
|age_of_people|10-11_years|
|age_of_people|12-13_years|
|age_of_people|14-15_years|
|age_of_people|16-17_years|
|age_of_people|18-19_years|
|age_of_people|20-24_years|
|age_of_people|20-29_years|
|age_of_people|25-29_years|
|age_of_people|30-34_years|
|age_of_people|30-39_years|
|age_of_people|35-39_years|
|age_of_people|40-44_years|
|age_of_people|40-49_years|
|age_of_people|45-49_years|
|age_of_people|50-54_years|
|age_of_people|50-59_years|
|age_of_people|55-59_years|
|age_of_people|60-64_years|
|age_of_people|60-69_years|
|age_of_people|65-69_years|
|age_of_people|70-79_years|
|age_of_people|80-89_years|
|age_of_people|90_plus_years|
|age_of_people|100_over|
|collections_filter_type|include|
|collections_filter_type|exclude|
|compositions|abstract|
|compositions|candid|
|compositions|close_up|
|compositions|copy_space|
|compositions|cut_out|
|compositions|full_frame|
|compositions|full_length|
|compositions|headshot|
|compositions|looking_at_camera|
|compositions|macro|
|compositions|portrait|
|compositions|sparse|
|compositions|still_life|
|compositions|three_quarter_length|
|compositions|waist_up|
|ethnicity|black|
|ethnicity|caucasian|
|ethnicity|east_asian|
|ethnicity|hispanic_latino|
|ethnicity|japanese|
|ethnicity|middle_eastern|
|ethnicity|mixed_race_person|
|ethnicity|multiethnic_group|
|ethnicity|native_american_first_nations|
|ethnicity|pacific_islander|
|ethnicity|south_asian|
|ethnicity|southeast_asian|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|
|file_types|eps|
|file_types|jpg|
|graphical_styles|fine_art|
|graphical_styles|illustration|
|graphical_styles|photography|
|graphical_styles|vector|
|graphical_styles_filter_type|include|
|graphical_styles_filter_type|exclude|
|minimum_size|x_small|
|minimum_size|small|
|minimum_size|medium|
|minimum_size|large|
|minimum_size|x_large|
|minimum_size|xx_large|
|minimum_size|vector|
|number_of_people|none|
|number_of_people|one|
|number_of_people|two|
|number_of_people|group|
|orientations|horizontal|
|orientations|vertical|
|orientations|square|
|orientations|panoramic_horizontal|
|orientations|panoramic_vertical|
|sort_order|best_match|
|sort_order|most_popular|
|sort_order|newest|
|sort_order|random|
|facet_fields|artists|
|facet_fields|locations|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "graphical_style": "string",
      "id": "string",
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="search-for-creative-images-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreativeImageSearchResults](#schemacreativeimagesearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for creative images based on url

> Code samples

```bash
curl https://example.com/v3/search/images/creative/by-image \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/images/creative/by-image`

Search for **similar creative images** by passing an `image_url` to an uploaded image OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.

## Searching by URL

Before calling the search by image endpoint, an image in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.

For example, using cURL:

``` sh
curl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary "@testimage.jpg"
```

Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.

- Uploaded files must be 10MB or smaller.
- Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.
- Uploads expire after 24 hours.
- Uploads and searches must be performed using the _same_ API Key.

## Searching by asset id

When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar images.


<h3 id="search-for-creative-images-based-on-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|asset_id|query|string \| null|false|Specifies the Getty image id to use in the search.|
|exclude_editorial_use_only|query|boolean \| null|false|Exclude images that are only available for editorial (non-commercial) use. Default value is false.|
|facet_fields|query|[[CreateImageSearchFacetsFields](#schemacreateimagesearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                    The include_facets parameter must be set to "true" for facets to be returned.|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|
|fields|query|[[CreativeImagesFieldValues](#schemacreativeimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|
|image_url|query|string \| null|false|Specifies the location of the image to use in the search.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|page_size|query|integer(int32)|false|Request number of images to return in each page. Default is 30, maximum page_size is 100.|
|product_types|query|[string]|false|Filter images to those from one of your product types. <br>                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. <br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|facet_fields|artists|
|facet_fields|locations|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|graphical_style|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "image_fingerprint": "string",
  "images": null,
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="search-for-creative-images-based-on-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SearchByImageResourceResults](#schemasearchbyimageresourceresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|AssetNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for editorial images only

> Code samples

```bash
curl https://example.com/v3/search/images/editorial \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/images/editorial`

Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
To include your API token in the search request, add it to the headers as a Bearer token (example in curl):

	-H "Authorization: Bearer <your-token>"

Search requests without a phrase parameter are not supported and may not always work.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

<h3 id="search-for-editorial-images-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|age_of_people|query|[[AgeOfPeopleFilterType](#schemaageofpeoplefiltertype)]|false|Filter based on the age of individuals in an image.|
|artists|query|string \| null|false|Search for images by specific artists (free-text, comma-separated list of artists).|
|collection_codes|query|[string]|false|Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.|
|collections_filter_type|query|[CollectionsFilterType](#schemacollectionsfiltertype)|false|Use to include or exclude collections from search. The default is include|
|compositions|query|[[CompositionsFilterType](#schemacompositionsfiltertype)]|false|Filter based on image composition.|
|date_from|query|string(date-time) \| null|false|Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).|
|date_to|query|string(date-time) \| null|false|Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).|
|download_product|query|string \| null|false|Filters based on which product the asset will download against.<br>                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.<br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|
|editorial_segments|query|[[EditorialSegmentContract](#schemaeditorialsegmentcontract)]|false|Return only events with a matching editorial segment.|
|embed_content_only|query|boolean|false|Restrict search results to embeddable images. The default is false.|
|ethnicity|query|[[EthnicityFilterType](#schemaethnicityfiltertype)]|false|Filter search results based on the ethnicity of individuals in an image.|
|event_ids|query|[integer(int32)]|false|Filter based on specific events|
|exclude_keyword_ids|query|[integer(int32)]|false|Return only images not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also do not contain the requested keyword(s) are returned.|
|fields|query|[[EditorialImagesFieldValues](#schemaeditorialimagesfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes, height, and width returned by 'download_sizes' field are estimates.|
|file_types|query|[[SearchFileType](#schemasearchfiletype)]|false|Return only images having a specific file type.|
|graphical_styles|query|[[EditorialGraphicalStyle](#schemaeditorialgraphicalstyle)]|false|Filter based on graphical style of the image.|
|graphical_styles_filter_type|query|[GraphicalStylesFilterType](#schemagraphicalstylesfiltertype)|false|Provides searching based on specified graphical style(s). The default is include.|
|include_related_searches|query|boolean|false|Specifies whether or not to include related searches in the response. The default is false.|
|keyword_ids|query|[integer(int32)]|false|Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.|
|minimum_size|query|[TeeShirtSize](#schemateeshirtsize)|false|Filter based on minimum size requested. The default is x-small.|
|number_of_people|query|[[NumberOfPeopleFilterType](#schemanumberofpeoplefiltertype)]|false|Filter based on the number of people in the image.|
|orientations|query|[[ImageOrientationRequest](#schemaimageorientationrequest)]|false|Return only images with selected aspect ratios.|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|page_size|query|integer(int32)|false|Request number of images to return in each page. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Search images using a search phrase.|
|sort_order|query|[SortOrder](#schemasortorder)|false|Select sort order of results.  The default is best_match|
|specific_people|query|[string]|false|Return only images associated with specific people (using a comma-delimited list).|
|minimum_quality_rank|query|integer(int32) \| null|false|Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.|
|facet_fields|query|[[EditorialImageSearchFacetsFields](#schemaeditorialimagesearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                   The include_facets parameter must be set to "true" for facets to be returned.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|age_of_people|newborn|
|age_of_people|baby|
|age_of_people|child|
|age_of_people|teenager|
|age_of_people|young_adult|
|age_of_people|adult|
|age_of_people|adults_only|
|age_of_people|mature_adult|
|age_of_people|senior_adult|
|age_of_people|0-1_months|
|age_of_people|2-5_months|
|age_of_people|6-11_months|
|age_of_people|12-17_months|
|age_of_people|18-23_months|
|age_of_people|2-3_years|
|age_of_people|4-5_years|
|age_of_people|6-7_years|
|age_of_people|8-9_years|
|age_of_people|10-11_years|
|age_of_people|12-13_years|
|age_of_people|14-15_years|
|age_of_people|16-17_years|
|age_of_people|18-19_years|
|age_of_people|20-24_years|
|age_of_people|20-29_years|
|age_of_people|25-29_years|
|age_of_people|30-34_years|
|age_of_people|30-39_years|
|age_of_people|35-39_years|
|age_of_people|40-44_years|
|age_of_people|40-49_years|
|age_of_people|45-49_years|
|age_of_people|50-54_years|
|age_of_people|50-59_years|
|age_of_people|55-59_years|
|age_of_people|60-64_years|
|age_of_people|60-69_years|
|age_of_people|65-69_years|
|age_of_people|70-79_years|
|age_of_people|80-89_years|
|age_of_people|90_plus_years|
|age_of_people|100_over|
|collections_filter_type|include|
|collections_filter_type|exclude|
|compositions|abstract|
|compositions|candid|
|compositions|close_up|
|compositions|copy_space|
|compositions|cut_out|
|compositions|full_frame|
|compositions|full_length|
|compositions|headshot|
|compositions|looking_at_camera|
|compositions|macro|
|compositions|portrait|
|compositions|sparse|
|compositions|still_life|
|compositions|three_quarter_length|
|compositions|waist_up|
|editorial_segments|archival|
|editorial_segments|entertainment|
|editorial_segments|news|
|editorial_segments|publicity|
|editorial_segments|royalty|
|editorial_segments|sport|
|ethnicity|black|
|ethnicity|caucasian|
|ethnicity|east_asian|
|ethnicity|hispanic_latino|
|ethnicity|japanese|
|ethnicity|middle_eastern|
|ethnicity|mixed_race_person|
|ethnicity|multiethnic_group|
|ethnicity|native_american_first_nations|
|ethnicity|pacific_islander|
|ethnicity|south_asian|
|ethnicity|southeast_asian|
|fields|allowed_use|
|fields|alternative_ids|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_camera_shot|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|editorial_source|
|fields|event_ids|
|fields|graphical_style|
|fields|id|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|max_dimensions|
|fields|orientation|
|fields|people|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|uri_oembed|
|file_types|eps|
|file_types|jpg|
|graphical_styles|photography|
|graphical_styles|illustration|
|graphical_styles|vector|
|graphical_styles_filter_type|include|
|graphical_styles_filter_type|exclude|
|minimum_size|x_small|
|minimum_size|small|
|minimum_size|medium|
|minimum_size|large|
|minimum_size|x_large|
|minimum_size|xx_large|
|minimum_size|vector|
|number_of_people|none|
|number_of_people|one|
|number_of_people|two|
|number_of_people|group|
|orientations|horizontal|
|orientations|vertical|
|orientations|square|
|orientations|panoramic_horizontal|
|orientations|panoramic_vertical|
|sort_order|best_match|
|sort_order|most_popular|
|sort_order|newest|
|sort_order|oldest|
|sort_order|random|
|facet_fields|artists|
|facet_fields|events|
|facet_fields|locations|
|facet_fields|specific_people|

> Example responses

> 200 Response

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "editorial_source": {
        "id": 0
      },
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

<h3 id="search-for-editorial-images-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialImageSearchResults](#schemaeditorialimagesearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for creative videos

> Code samples

```bash
curl https://example.com/v3/search/videos/creative \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/videos/creative`

Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
assets that you have a license to use, you need to also include an authorization token in the header of your request.
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.

Search requests without a phrase parameter are not supported and may not always work.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family", 
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
        "allowed_use",
        "artist",
        "asset_family", 
		"call_for_image",
        "caption", 
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name", 
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "videos":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

<h3 id="search-for-creative-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|age_of_people|query|[[AgeOfPeopleFilterType](#schemaageofpeoplefiltertype)]|false|Provides filtering according to the age of individuals in a video.|
|artists|query|string \| null|false|Search for videos by specific artists (free-text, comma-separated list of artists).|
|aspect_ratios|query|[[VideoAspectRatioFilterType](#schemavideoaspectratiofiltertype)]|false|Search for videos by specific aspect ratios.|
|collection_codes|query|[string]|false|Provides filtering by collection code.|
|collections_filter_type|query|[CollectionsFilterType](#schemacollectionsfiltertype)|false|Use to include or exclude collections from search. The default is include|
|compositions|query|[[CompositionsFilterType](#schemacompositionsfiltertype)]|false|Filter based on video composition.|
|download_product|query|string \| null|false|Filters based on which product the asset will download against.<br>                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.<br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|
|exclude_nudity|query|boolean|false|Excludes videos containing nudity. The default is false.|
|exclude_editorial_use_only|query|boolean \| null|false|Exclude videos that are only available for editorial (non-commercial) use. Default value is false.|
|exclude_keyword_ids|query|[integer(int32)]|false|Return only videos not tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also do not contain the requested keyword(s) are returned.|
|fields|query|[[CreativeVideosFieldValues](#schemacreativevideosfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|
|format_available|query|[VideoFormatsRequest](#schemavideoformatsrequest)|false|Filters according to the digital video format available on a film asset.|
|frame_rates|query|[[VideoFrameRates](#schemavideoframerates)]|false|Provides filtering by video frame rate (frames/second).|
|image_techniques|query|[[ImageTechniquesFilterType](#schemaimagetechniquesfiltertype)]|false|Filter based on image technique.|
|include_related_searches|query|boolean|false|Specifies whether or not to include related searches in the response. The default is false.|
|keyword_ids|query|[integer(int32)]|false|Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.|
|license_models|query|[[LicenseModelVideoRequest](#schemalicensemodelvideorequest)]|false|Specifies the video licensing model(s).|
|orientations|query|[[VideoOrientationRequest](#schemavideoorientationrequest)]|false|Return only videos with selected orientations.|
|min_clip_length|query|integer(int32)|false|Provides filtering by minimum length of video clip, in seconds|
|max_clip_length|query|integer(int32)|false|Provides filtering by maximum length of video, in seconds|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Free-text search query.|
|safe_search|query|boolean|false|Setting safe_search to "true" excludes images containing nudity, death, profanity, drugs and alcohol, suggestive content, and graphic content from the result set. The default is false. Because this is a keyword-based filter, it's possible that a small number of unsafe images may not be caught by the filter. Please direct feedback to your Getty Images Account or API support representative.|
|sort_order|query|[CreativeVideoSortOrder](#schemacreativevideosortorder)|false|Select sort order of results.  The default is best_match|
|release_status|query|[ReleaseStatus](#schemareleasestatus)|false|Allows filtering by type of model release.|
|facet_fields|query|[[CreateVideoSearchFacetsFields](#schemacreatevideosearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                   The include_facets parameter must be set to "true" for facets to be returned.|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|viewpoints|query|[[ViewpointsFilterType](#schemaviewpointsfiltertype)]|false|Filter based on viewpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|age_of_people|newborn|
|age_of_people|baby|
|age_of_people|child|
|age_of_people|teenager|
|age_of_people|young_adult|
|age_of_people|adult|
|age_of_people|adults_only|
|age_of_people|mature_adult|
|age_of_people|senior_adult|
|age_of_people|0-1_months|
|age_of_people|2-5_months|
|age_of_people|6-11_months|
|age_of_people|12-17_months|
|age_of_people|18-23_months|
|age_of_people|2-3_years|
|age_of_people|4-5_years|
|age_of_people|6-7_years|
|age_of_people|8-9_years|
|age_of_people|10-11_years|
|age_of_people|12-13_years|
|age_of_people|14-15_years|
|age_of_people|16-17_years|
|age_of_people|18-19_years|
|age_of_people|20-24_years|
|age_of_people|20-29_years|
|age_of_people|25-29_years|
|age_of_people|30-34_years|
|age_of_people|30-39_years|
|age_of_people|35-39_years|
|age_of_people|40-44_years|
|age_of_people|40-49_years|
|age_of_people|45-49_years|
|age_of_people|50-54_years|
|age_of_people|50-59_years|
|age_of_people|55-59_years|
|age_of_people|60-64_years|
|age_of_people|60-69_years|
|age_of_people|65-69_years|
|age_of_people|70-79_years|
|age_of_people|80-89_years|
|age_of_people|90_plus_years|
|age_of_people|100_over|
|aspect_ratios|16:9|
|aspect_ratios|9:16|
|aspect_ratios|3:4|
|aspect_ratios|4:3|
|aspect_ratios|4:5|
|aspect_ratios|2:1|
|aspect_ratios|17:9|
|aspect_ratios|9:17|
|collections_filter_type|include|
|collections_filter_type|exclude|
|compositions|abstract|
|compositions|candid|
|compositions|close_up|
|compositions|copy_space|
|compositions|cut_out|
|compositions|full_frame|
|compositions|full_length|
|compositions|headshot|
|compositions|looking_at_camera|
|compositions|macro|
|compositions|portrait|
|compositions|sparse|
|compositions|still_life|
|compositions|three_quarter_length|
|compositions|waist_up|
|fields|allowed_use|
|fields|artist|
|fields|aspect_ratio|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|era|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|mastered_to|
|fields|object_name|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|summary_set|
|fields|thumb|
|fields|title|
|format_available|sd|
|format_available|hd|
|format_available|4k|
|format_available|hd_web|
|frame_rates|23.98|
|frame_rates|24|
|frame_rates|25|
|frame_rates|29.97|
|frame_rates|30|
|frame_rates|50|
|frame_rates|59.94|
|frame_rates|60|
|image_techniques|realtime|
|image_techniques|time_lapse|
|image_techniques|slow_motion|
|image_techniques|color|
|image_techniques|black_and_white|
|image_techniques|animation|
|image_techniques|selective_focus|
|license_models|rightsready|
|license_models|royaltyfree|
|orientations|horizontal|
|orientations|vertical|
|sort_order|best_match|
|sort_order|most_popular|
|sort_order|newest|
|sort_order|random|
|release_status|release_not_important|
|release_status|fully_released|
|facet_fields|artists|
|facet_fields|locations|
|viewpoints|lockdown|
|viewpoints|panning|
|viewpoints|tracking_shot|
|viewpoints|aerial_view|
|viewpoints|high_angle_view|
|viewpoints|low_angle_view|
|viewpoints|tilt|
|viewpoints|point_of_view|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="search-for-creative-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[CreativeVideoSearchResults](#schemacreativevideosearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for creative videos based on url

> Code samples

```bash
curl https://example.com/v3/search/videos/creative/by-image \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/videos/creative/by-image`

Search for **similar creative videos** by passing an `image_url` to an uploaded image/frame grab from a video OR an `asset_id` of an asset in our catalog.  All responses will have the `exclude_nudity` filter automatically applied.

## Searching by URL

Before calling the search by image endpoint, an image or frame grab in JPEG format must be uploaded to `https://api.gettyimages.com/v3/search/by-image/uploads/{CLIENT_IMAGE.jpg}`, where the client defines the `{CLIENT_IMAGE.jpg}` portion of the URL.

For example, using cURL:

``` sh
curl -i -X PUT https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg -H 'Content-Type: image/jpeg' -H 'Api-Key: API_KEY' --data-binary "@testimage.jpg"
```

Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://api.gettyimages.com/v3/search/by-image/uploads/my-test-image.jpg`.

- Uploaded files must be 10MB or smaller
- Uploads to the same URL will overwrite each other, so ensure that the client application is handling naming uniqueness appropriately.
- Uploads expire after 24 hours.
- Uploads and searches must be performed using the _same_ API Key.

## Searching by asset id

When searching by `asset_id`, any image or video asset id in the Getty/iStock catalog can be used as the source for similar videos.


<h3 id="search-for-creative-videos-based-on-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|asset_id|query|string \| null|false|Specifies the Getty video id to use in the search.|
|exclude_editorial_use_only|query|boolean \| null|false|Exclude videos that are only available for editorial (non-commercial) use. Default value is false.|
|facet_fields|query|[[CreateVideoSearchFacetsFields](#schemacreatevideosearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                    The include_facets parameter must be set to "true" for facets to be returned.|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|
|fields|query|[[CreativeVideosFieldValues](#schemacreativevideosfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|
|image_url|query|string \| null|false|Specifies the location of the image to use in the search.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|page|query|integer(int32)|false|Request results starting at a page number (default is 1).|
|page_size|query|integer(int32)|false|Request number of images to return in each page. Default is 30, maximum page_size is 100.|
|product_types|query|[string]|false|Filter images to those from one of your product types. <br>                    Allowed values are easyaccess, imagepack, premiumaccess and royaltyfreesubscription. <br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the product_types value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|facet_fields|artists|
|facet_fields|locations|
|fields|allowed_use|
|fields|artist|
|fields|aspect_ratio|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|era|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|mastered_to|
|fields|object_name|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|summary_set|
|fields|thumb|
|fields|title|

> Example responses

> 200 Response

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="search-for-creative-videos-based-on-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CreativeVideoSearchResults](#schemacreativevideosearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|AssetNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Search for editorial videos

> Code samples

```bash
curl https://example.com/v3/search/videos/editorial \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/search/videos/editorial`

Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

Search requests without a phrase parameter are not supported and may not always work.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family", 
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
        "allowed_use",
        "artist",
        "asset_family", 
		"call_for_image",
        "caption", 
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name", 
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "era",
        "event_ids",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "videos":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

<h3 id="search-for-editorial-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|GI-Country-Code|header|string|false|Receive regionally relevant search results based on the value specified. Accepts only ISO Alpha-3 country codes. The Countries operation can be used to retrieve the codes.|
|age_of_people|query|[[AgeOfPeopleFilterType](#schemaageofpeoplefiltertype)]|false|Provides filtering according to the age of individuals in a video.|
|artists|query|string \| null|false|Search for videos by specific artists (free-text, comma-separated list of artists).|
|aspect_ratios|query|[[VideoAspectRatioFilterType](#schemavideoaspectratiofiltertype)]|false|Search for videos by specific aspect ratios.|
|collection_codes|query|[string]|false|Provides filtering by collection code.|
|collections_filter_type|query|[CollectionsFilterType](#schemacollectionsfiltertype)|false|Use to include or exclude collections from search. The default is include|
|compositions|query|[[CompositionsFilterType](#schemacompositionsfiltertype)]|false|Filter based on video composition.|
|download_product|query|string \| null|false|Filters based on which product the asset will download against.<br>                    Allowed values are easyaccess, editorialsubscription, imagepack, premiumaccess and royaltyfreesubscription.<br>                    If you have more than one instance of a product, you may also include the ID of the product instance you wish to filter on. <br>                    For example, some users may have more than one premiumaccess product, so the download_product value would be premiumaccess:1234. <br>                    Product ID can be obtained from the GET /products response.|
|editorial_video_types|query|[[EditorialVideoType](#schemaeditorialvideotype)]|false|Allows filtering by types of video.|
|fields|query|[[EditorialVideosFieldValues](#schemaeditorialvideosfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|
|format_available|query|[VideoFormatsRequest](#schemavideoformatsrequest)|false|Filters according to the digital video format available on a film asset.|
|frame_rates|query|[[VideoFrameRates](#schemavideoframerates)]|false|Provides filtering by video frame rate (frames/second).|
|image_techniques|query|[[ImageTechniquesFilterType](#schemaimagetechniquesfiltertype)]|false|Filter based on image technique.|
|include_related_searches|query|boolean|false|Specifies whether or not to include related searches in the response. The default is false.|
|keyword_ids|query|[integer(int32)]|false|Return only videos tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those videos matching the query phrase which also contain the requested keyword(s) are returned.|
|min_clip_length|query|integer(int32)|false|Provides filtering by minimum length of video clip, in seconds|
|max_clip_length|query|integer(int32)|false|Provides filtering by maximum length of video clip, in seconds|
|orientations|query|[[VideoOrientationRequest](#schemavideoorientationrequest)]|false|Return only videos with selected orientations.|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|
|phrase|query|string \| null|false|Free-text search query.|
|sort_order|query|[SortOrder](#schemasortorder)|false|Select sort order of results.  The default is best_match|
|specific_people|query|[string]|false|Allows filtering by specific peoples' names.|
|release_status|query|[ReleaseStatus](#schemareleasestatus)|false|Allows filtering by type of model release.|
|facet_fields|query|[[EditorialVideoSearchFacetsFields](#schemaeditorialvideosearchfacetsfields)]|false|Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.<br>                   The include_facets parameter must be set to "true" for facets to be returned.|
|include_facets|query|boolean \| null|false|Specifies whether or not to include facets in the result set. Default is "false".|
|facet_max_count|query|integer(int32)|false|Specifies the maximum number of facets to return per type. Default is 300.|
|viewpoints|query|[[ViewpointsFilterType](#schemaviewpointsfiltertype)]|false|Filter based on viewpoint.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|age_of_people|newborn|
|age_of_people|baby|
|age_of_people|child|
|age_of_people|teenager|
|age_of_people|young_adult|
|age_of_people|adult|
|age_of_people|adults_only|
|age_of_people|mature_adult|
|age_of_people|senior_adult|
|age_of_people|0-1_months|
|age_of_people|2-5_months|
|age_of_people|6-11_months|
|age_of_people|12-17_months|
|age_of_people|18-23_months|
|age_of_people|2-3_years|
|age_of_people|4-5_years|
|age_of_people|6-7_years|
|age_of_people|8-9_years|
|age_of_people|10-11_years|
|age_of_people|12-13_years|
|age_of_people|14-15_years|
|age_of_people|16-17_years|
|age_of_people|18-19_years|
|age_of_people|20-24_years|
|age_of_people|20-29_years|
|age_of_people|25-29_years|
|age_of_people|30-34_years|
|age_of_people|30-39_years|
|age_of_people|35-39_years|
|age_of_people|40-44_years|
|age_of_people|40-49_years|
|age_of_people|45-49_years|
|age_of_people|50-54_years|
|age_of_people|50-59_years|
|age_of_people|55-59_years|
|age_of_people|60-64_years|
|age_of_people|60-69_years|
|age_of_people|65-69_years|
|age_of_people|70-79_years|
|age_of_people|80-89_years|
|age_of_people|90_plus_years|
|age_of_people|100_over|
|aspect_ratios|16:9|
|aspect_ratios|9:16|
|aspect_ratios|3:4|
|aspect_ratios|4:3|
|aspect_ratios|4:5|
|aspect_ratios|2:1|
|aspect_ratios|17:9|
|aspect_ratios|9:17|
|collections_filter_type|include|
|collections_filter_type|exclude|
|compositions|abstract|
|compositions|candid|
|compositions|close_up|
|compositions|copy_space|
|compositions|cut_out|
|compositions|full_frame|
|compositions|full_length|
|compositions|headshot|
|compositions|looking_at_camera|
|compositions|macro|
|compositions|portrait|
|compositions|sparse|
|compositions|still_life|
|compositions|three_quarter_length|
|compositions|waist_up|
|editorial_video_types|raw|
|editorial_video_types|produced|
|fields|allowed_use|
|fields|artist|
|fields|aspect_ratio|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|era|
|fields|event_ids|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|mastered_to|
|fields|object_name|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|source|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|istock_licenses|
|format_available|sd|
|format_available|hd|
|format_available|4k|
|format_available|hd_web|
|frame_rates|23.98|
|frame_rates|24|
|frame_rates|25|
|frame_rates|29.97|
|frame_rates|30|
|frame_rates|50|
|frame_rates|59.94|
|frame_rates|60|
|image_techniques|realtime|
|image_techniques|time_lapse|
|image_techniques|slow_motion|
|image_techniques|color|
|image_techniques|black_and_white|
|image_techniques|animation|
|image_techniques|selective_focus|
|orientations|horizontal|
|orientations|vertical|
|sort_order|best_match|
|sort_order|most_popular|
|sort_order|newest|
|sort_order|oldest|
|sort_order|random|
|release_status|release_not_important|
|release_status|fully_released|
|facet_fields|artists|
|facet_fields|events|
|facet_fields|locations|
|facet_fields|specific_people|
|viewpoints|lockdown|
|viewpoints|panning|
|viewpoints|tracking_shot|
|viewpoints|aerial_view|
|viewpoints|high_angle_view|
|viewpoints|low_angle_view|
|viewpoints|tilt|
|viewpoints|point_of_view|

> Example responses

> 200 Response

```json
{
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "source": "string",
      "title": "string"
    }
  ]
}
```

<h3 id="search-for-editorial-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EditorialVideoSearchResults](#schemaeditorialvideosearchresults)|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-usage">Usage</h1>

## Report usage of assets via a batch format.

> Code samples

```bash
curl https://example.com/v3/usage-batches/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}" \
  -d '{
    "asset_usages": [
      {
        "asset_id": "string",
        "quantity": 0,
        "usage_date": "1970-01-01T00:00:00Z"
      }
    ]
  }'
```

`PUT /v3/usage-batches/{id}`

# Report Usage

Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

_Note_: Date of use can be in any unambiguous date format.


> Body parameter

```json
{
  "asset_usages": [
    {
      "asset_id": "string",
      "quantity": 0,
      "usage_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

<h3 id="report-usage-of-assets-via-a-batch-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| null|true|Specifies a unique batch transaction id to identify the report.|
|body|body|[report_usage_batch_request](#schemareport_usage_batch_request)|false|Specifies up to 1000 sets of asset Id, usage count, and date of use to submit usages for. <br>            Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. <br>            All dates must be on or before this date and the format should be ISO 8601 (ex: YYYY-MM-DD), time is not needed.|
|» asset_usages|body|[[asset_usage](#schemaasset_usage)]|false|Identifies the list of asset id, usage count and date of usage combinations to record.|

> Example responses

> 201 Response

```json
{
  "invalid_assets": [
    "string"
  ],
  "total_asset_usages_processed": 0
}
```

<h3 id="report-usage-of-assets-via-a-batch-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success - All usages reported were successfully recorded.|[report_usage_batch_response](#schemareport_usage_batch_response)|
|400|Bad Request|InvalidRequest - The content of the request was invalid. Most commonly this is due to either too many assets specified, no assets or invalid JSON.|None|
|401|Unauthorized|AuthorizationTokenRequired - Authorization token was missing or not valid.|None|
|403|Forbidden|UnauthorizedToReportUsage|None|
|409|Conflict|TransactionIdDuplicated|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

<h1 id="getty-images-videos">Videos</h1>

## Get metadata for multiple videos by supplying multiple video ids

> Code samples

```bash
curl https://example.com/v3/videos \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/videos`

Use this endpoint to return detailed video metadata for all the specified video ids.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
        "allowed_use",
        "artist",
        "asset_family",
		"call_for_image",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "event_ids",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "videos":
    [
      {
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ],
        "key_frames": [
            {
              "uri": "<link>"
            },
            {
              "uri": "<link>"
            },
            {
              "uri": "<link>"
            },
            {
              "uri": "<link>"
            },
            {
              "uri": "<link>"
            }
        ]
      }
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.


<h3 id="get-metadata-for-multiple-videos-by-supplying-multiple-video-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|ids|query|[string]|false|Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.  Maximum of 100 ids.|
|fields|query|[[VideoDetailFieldValues](#schemavideodetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|allowed_use|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|city|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|country|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_sizes|
|fields|download_product|
|fields|downloads|
|fields|editorial_segments|
|fields|entity_details|
|fields|era|
|fields|event_ids|
|fields|istock_collection|
|fields|istock_licenses|
|fields|key_frames|
|fields|keywords|
|fields|license_model|
|fields|mastered_to|
|fields|object_name|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|source|
|fields|state_province|
|fields|summary_set|
|fields|thumb|
|fields|title|

<h3 id="get-metadata-for-multiple-videos-by-supplying-multiple-video-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|VideosNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Get metadata for a single video by supplying one video id

> Code samples

```bash
curl https://example.com/v3/videos/string \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/videos/{id}`

Use this endpoint to return detailed video metadata for the specified video id.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos":
    [
        "allowed_use",
        "artist",
        "asset_family",
		"call_for_image",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "event_ids",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "display_sizes": [
        {
            "is_watermarked": <boolean>,
            "name": "comp",
            "uri": "<link>"
        },
        {
            "is_watermarked": <boolean>,
            "name": "preview",
            "uri": "<link>"
        },
        {
            "is_watermarked": <boolean>,
            "name": "thumb",
            "uri": "<link>"
        }
    ],
    "key_frames": [
        {
            "uri": "<link>"
        },
        {
            "uri": "<link>"
        },
        {
            "uri": "<link>"
        },
        {
            "uri": "<link>"
        },
        {
            "uri": "<link>"
        }
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.


<h3 id="get-metadata-for-a-single-video-by-supplying-one-video-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|A video id. For more than one video please use the /v3/video endpoint.|
|fields|query|[[VideoDetailFieldValues](#schemavideodetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|allowed_use|
|fields|artist|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|city|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|country|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_sizes|
|fields|download_product|
|fields|downloads|
|fields|editorial_segments|
|fields|entity_details|
|fields|era|
|fields|event_ids|
|fields|istock_collection|
|fields|istock_licenses|
|fields|key_frames|
|fields|keywords|
|fields|license_model|
|fields|mastered_to|
|fields|object_name|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|source|
|fields|state_province|
|fields|summary_set|
|fields|thumb|
|fields|title|

<h3 id="get-metadata-for-a-single-video-by-supplying-one-video-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|VideosNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Returns information about a customer's download history for a specific asset

> Code samples

```bash
curl https://example.com/v3/videos/string/downloadhistory \
  -H 'Accept: application/json' \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/videos/{id}/downloadhistory`

<h3 id="returns-information-about-a-customers-download-history-for-a-specific-asset-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|A video id.|
|company_downloads|query|boolean|false|If specified, returns the list of previously downloaded videos for all users in your company.<br>            Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.|

> Example responses

> 200 Response

```json
{
  "downloads": null,
  "id": "string"
}
```

<h3 id="returns-information-about-a-customers-download-history-for-a-specific-asset-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AssetDownloadHistoryResults](#schemaassetdownloadhistoryresults)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|VideosNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Retrieve creative videos from the same series

> Code samples

```bash
curl https://example.com/v3/videos/string/same-series \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/videos/{id}/same-series`

This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.

You'll need an API key and access token to use this resource.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos":
    [
        "allowed_use",
        "artist",
        "asset_family",
		"call_for_image",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "videos":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```


<h3 id="retrieve-creative-videos-from-the-same-series-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|Identifies an existing video|
|fields|query|[[AssociatedVideoDetailFieldValues](#schemaassociatedvideodetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|allowed_use|
|fields|artist|
|fields|aspect_ratio|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|entity_details|
|fields|era|
|fields|event_ids|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|mastered_to|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|source|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|istock_licenses|

<h3 id="retrieve-creative-videos-from-the-same-series-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|VideosNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

## Retrieve similar videos

> Code samples

```bash
curl https://example.com/v3/videos/string/similar \
  -H "Api-Key: ${API_KEY}"
```

`GET /v3/videos/{id}/similar`

This endpoint will provide a list of videos that are similar to the specified asset id.

You'll need an API key and access token to use this resource.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
        "allowed_use",
        "artist",
        "asset_family",
		"call_for_image",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "event_ids",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "quality_rank",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

The URI provided is subject to change at any time and must be used as-is with no modification.

```
{
    "videos":
    [
        "display_sizes": 
        [
            {
                "is_watermarked": <boolean>,
                "name": "comp",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "preview",
                "uri": "<link>"
            },
            {
                "is_watermarked": <boolean>,
                "name": "thumb",
                "uri": "<link>"
            }
        ]
    ]
}
```

<h3 id="retrieve-similar-videos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Accept-Language|header|string|false|Provide a header to specify the language of result values. Supported values: cs (iStock only), de, en-GB, en-US, es, fi (iStock only), fr, hu (iStock only), id (iStock only), it, ja, ko (creative assets only), nl, pl (creative assets only), pt-BR, pt-PT, ro (iStock only), ru (creative assets only), sv, th (iStock only), tr, uk (iStock only), vi (iStock only), zh-HK (creative assets only).|
|id|path|string \| null|true|A video id.|
|fields|query|[[AssociatedVideoDetailFieldValues](#schemaassociatedvideodetailfieldvalues)]|false|Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field is an estimate.|
|page|query|integer(int32)|false|Identifies page to return. Default is 1.|
|page_size|query|integer(int32)|false|Specifies page size. Default is 30, maximum page_size is 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|allowed_use|
|fields|artist|
|fields|aspect_ratio|
|fields|asset_family|
|fields|call_for_image|
|fields|caption|
|fields|clip_length|
|fields|collection_code|
|fields|collection_id|
|fields|collection_name|
|fields|color_type|
|fields|comp|
|fields|copyright|
|fields|date_created|
|fields|date_submitted|
|fields|detail_set|
|fields|display_set|
|fields|download_product|
|fields|download_sizes|
|fields|editorial_segments|
|fields|entity_details|
|fields|era|
|fields|event_ids|
|fields|id|
|fields|istock_collection|
|fields|keywords|
|fields|largest_downloads|
|fields|license_model|
|fields|mastered_to|
|fields|orientation|
|fields|originally_shot_on|
|fields|preview|
|fields|product_types|
|fields|quality_rank|
|fields|referral_destinations|
|fields|shot_speed|
|fields|source|
|fields|summary_set|
|fields|thumb|
|fields|title|
|fields|istock_licenses|

<h3 id="retrieve-similar-videos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|InvalidParameterValue|None|
|401|Unauthorized|AuthorizationTokenRequired|None|
|403|Forbidden|UnauthorizedDisplaySize|None|
|404|Not Found|VideosNotFound|None|
|500|Internal Server Error|InvalidIStockCollection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Api-Key, OAuth2
</aside>

# Schemas

<h2 id="tocS_AcquireAssetLicensesRequest">AcquireAssetLicensesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacquireassetlicensesrequest"></a>
<a id="schema_AcquireAssetLicensesRequest"></a>
<a id="tocSacquireassetlicensesrequest"></a>
<a id="tocsacquireassetlicensesrequest"></a>

```json
{
  "extended_licenses": [
    "multiseat"
  ],
  "use_team_credits": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|extended_licenses|[[ExtendedLicenses](#schemaextendedlicenses)]|true|none|none|
|use_team_credits|boolean|false|none|Defaults to false.|

#### Enumerated Values

|Property|Value|
|---|---|
|extended_licenses|multiseat|
|extended_licenses|unlimited|
|extended_licenses|resale|
|extended_licenses|indemnification|

<h2 id="tocS_AddBoardAssetsResult">AddBoardAssetsResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddboardassetsresult"></a>
<a id="schema_AddBoardAssetsResult"></a>
<a id="tocSaddboardassetsresult"></a>
<a id="tocsaddboardassetsresult"></a>

```json
{
  "assets_added": [
    {
      "asset_id": "string"
    }
  ],
  "assets_not_added": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets_added|[[BoardAsset](#schemaboardasset)]|false|none|none|
|assets_not_added|[string]|false|none|none|

<h2 id="tocS_AffiliateImage">AffiliateImage</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliateimage"></a>
<a id="schema_AffiliateImage"></a>
<a id="tocSaffiliateimage"></a>
<a id="tocsaffiliateimage"></a>

```json
{
  "caption": "string",
  "destination_url": "string",
  "id": "string",
  "preview_urls": {
    "large": "string",
    "large_height": 0,
    "large_width": 0,
    "medium": "string",
    "medium_height": 0,
    "medium_width": 0,
    "small": "string",
    "small_height": 0,
    "small_width": 0
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string \| null|false|none|none|
|destination_url|string \| null|false|none|none|
|id|string \| null|false|none|none|
|preview_urls|[AffiliateImageUrls](#schemaaffiliateimageurls)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_AffiliateImageSearchResponse">AffiliateImageSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliateimagesearchresponse"></a>
<a id="schema_AffiliateImageSearchResponse"></a>
<a id="tocSaffiliateimagesearchresponse"></a>
<a id="tocsaffiliateimagesearchresponse"></a>

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "images": [
    {
      "caption": "string",
      "destination_url": "string",
      "id": "string",
      "preview_urls": {
        "large": "string",
        "large_height": 0,
        "large_width": 0,
        "medium": "string",
        "medium_height": 0,
        "medium_width": 0,
        "small": "string",
        "small_height": 0,
        "small_width": 0
      },
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_corrections|[AutoCorrections](#schemaautocorrections)|false|none|none|
|images|[[AffiliateImage](#schemaaffiliateimage)]|false|none|none|

<h2 id="tocS_AffiliateImageUrls">AffiliateImageUrls</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliateimageurls"></a>
<a id="schema_AffiliateImageUrls"></a>
<a id="tocSaffiliateimageurls"></a>
<a id="tocsaffiliateimageurls"></a>

```json
{
  "large": "string",
  "large_height": 0,
  "large_width": 0,
  "medium": "string",
  "medium_height": 0,
  "medium_width": 0,
  "small": "string",
  "small_height": 0,
  "small_width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|large|string \| null|false|none|none|
|large_height|integer(int32)|false|none|none|
|large_width|integer(int32)|false|none|none|
|medium|string \| null|false|none|none|
|medium_height|integer(int32)|false|none|none|
|medium_width|integer(int32)|false|none|none|
|small|string \| null|false|none|none|
|small_height|integer(int32)|false|none|none|
|small_width|integer(int32)|false|none|none|

<h2 id="tocS_AffiliateSearchStyle">AffiliateSearchStyle</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliatesearchstyle"></a>
<a id="schema_AffiliateSearchStyle"></a>
<a id="tocSaffiliatesearchstyle"></a>
<a id="tocsaffiliatesearchstyle"></a>

```json
"photography"
```

Specifies the graphical style of images desired.

<h2 id="tocS_AffiliateVideo">AffiliateVideo</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliatevideo"></a>
<a id="schema_AffiliateVideo"></a>
<a id="tocSaffiliatevideo"></a>
<a id="tocsaffiliatevideo"></a>

```json
{
  "caption": "string",
  "clip_length": "string",
  "destination_url": "string",
  "id": "string",
  "preview_urls": {
    "large_motion": "string",
    "large_still": "string",
    "medium_still": "string",
    "small_motion": "string",
    "small_still": "string"
  },
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string \| null|false|none|none|
|clip_length|string \| null|false|none|none|
|destination_url|string \| null|false|none|none|
|id|string \| null|false|none|none|
|preview_urls|[AffiliateVideoUrls](#schemaaffiliatevideourls)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_AffiliateVideoSearchResponse">AffiliateVideoSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliatevideosearchresponse"></a>
<a id="schema_AffiliateVideoSearchResponse"></a>
<a id="tocSaffiliatevideosearchresponse"></a>
<a id="tocsaffiliatevideosearchresponse"></a>

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "videos": [
    {
      "caption": "string",
      "clip_length": "string",
      "destination_url": "string",
      "id": "string",
      "preview_urls": {
        "large_motion": "string",
        "large_still": "string",
        "medium_still": "string",
        "small_motion": "string",
        "small_still": "string"
      },
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_corrections|[AutoCorrections](#schemaautocorrections)|false|none|none|
|videos|[[AffiliateVideo](#schemaaffiliatevideo)]|false|none|none|

<h2 id="tocS_AffiliateVideoUrls">AffiliateVideoUrls</h2>
<!-- backwards compatibility -->
<a id="schemaaffiliatevideourls"></a>
<a id="schema_AffiliateVideoUrls"></a>
<a id="tocSaffiliatevideourls"></a>
<a id="tocsaffiliatevideourls"></a>

```json
{
  "large_motion": "string",
  "large_still": "string",
  "medium_still": "string",
  "small_motion": "string",
  "small_still": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|large_motion|string \| null|false|none|none|
|large_still|string \| null|false|none|none|
|medium_still|string \| null|false|none|none|
|small_motion|string \| null|false|none|none|
|small_still|string \| null|false|none|none|

<h2 id="tocS_AgeOfPeopleFilterType">AgeOfPeopleFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaageofpeoplefiltertype"></a>
<a id="schema_AgeOfPeopleFilterType"></a>
<a id="tocSageofpeoplefiltertype"></a>
<a id="tocsageofpeoplefiltertype"></a>

```json
"newborn"
```

<h2 id="tocS_AllowedUse">AllowedUse</h2>
<!-- backwards compatibility -->
<a id="schemaalloweduse"></a>
<a id="schema_AllowedUse"></a>
<a id="tocSalloweduse"></a>
<a id="tocsalloweduse"></a>

```json
{
  "how_can_i_use_it": "string",
  "release_info": "string",
  "usage_restrictions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|how_can_i_use_it|string \| null|false|none|Indicates how the asset can be used|
|release_info|string \| null|false|none|Indicates release status|
|usage_restrictions|[string]|false|none|Indicates asset usage restriction, if any|

<h2 id="tocS_Artist">Artist</h2>
<!-- backwards compatibility -->
<a id="schemaartist"></a>
<a id="schema_Artist"></a>
<a id="tocSartist"></a>
<a id="tocsartist"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|

<h2 id="tocS_ArtistsImageSearchFieldValues">ArtistsImageSearchFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaartistsimagesearchfieldvalues"></a>
<a id="schema_ArtistsImageSearchFieldValues"></a>
<a id="tocSartistsimagesearchfieldvalues"></a>
<a id="tocsartistsimagesearchfieldvalues"></a>

```json
"id"
```

<h2 id="tocS_ArtistsVideoSearchFieldValues">ArtistsVideoSearchFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaartistsvideosearchfieldvalues"></a>
<a id="schema_ArtistsVideoSearchFieldValues"></a>
<a id="tocSartistsvideosearchfieldvalues"></a>
<a id="tocsartistsvideosearchfieldvalues"></a>

```json
"id"
```

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "asset_type": "string",
  "date_added": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "name": "string",
      "uri": "string"
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_type|string \| null|false|none|none|
|date_added|string(date-time)|false|none|none|
|display_sizes|[[DisplaySize](#schemadisplaysize)]|false|none|none|
|id|string \| null|false|none|none|

<h2 id="tocS_AssetChanges">AssetChanges</h2>
<!-- backwards compatibility -->
<a id="schemaassetchanges"></a>
<a id="schema_AssetChanges"></a>
<a id="tocSassetchanges"></a>
<a id="tocsassetchanges"></a>

```json
{
  "change_set_id": "string",
  "changed_assets": [
    {
      "asset_changed_utc_datetime": "1970-01-01T00:00:00Z",
      "asset_lifecycle": "string",
      "asset_type": "string",
      "id": "string",
      "uri": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|change_set_id|string \| null|false|none|Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response.|
|changed_assets|[[ChangedAssetDetail](#schemachangedassetdetail)]|false|none|Contains a list of ChangedAssetList results for the query.|

<h2 id="tocS_AssetDownloadHistoryResults">AssetDownloadHistoryResults</h2>
<!-- backwards compatibility -->
<a id="schemaassetdownloadhistoryresults"></a>
<a id="schema_AssetDownloadHistoryResults"></a>
<a id="tocSassetdownloadhistoryresults"></a>
<a id="tocsassetdownloadhistoryresults"></a>

```json
{
  "downloads": null,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloads|object \| null|false|none|none|
|id|string \| null|false|none|none|

<h2 id="tocS_AssetEvent">AssetEvent</h2>
<!-- backwards compatibility -->
<a id="schemaassetevent"></a>
<a id="schema_AssetEvent"></a>
<a id="tocSassetevent"></a>
<a id="tocsassetevent"></a>

```json
{
  "asset_id": "string",
  "email_address": "string",
  "timestamp": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string \| null|false|none|none|
|email_address|string \| null|false|none|none|
|timestamp|string(date-time)|false|none|none|

<h2 id="tocS_AssetFamily">AssetFamily</h2>
<!-- backwards compatibility -->
<a id="schemaassetfamily"></a>
<a id="schema_AssetFamily"></a>
<a id="tocSassetfamily"></a>
<a id="tocsassetfamily"></a>

```json
"NotSet"
```

<h2 id="tocS_AssetIdFromOrder">AssetIdFromOrder</h2>
<!-- backwards compatibility -->
<a id="schemaassetidfromorder"></a>
<a id="schema_AssetIdFromOrder"></a>
<a id="tocSassetidfromorder"></a>
<a id="tocsassetidfromorder"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|

<h2 id="tocS_AssetLicenseName">AssetLicenseName</h2>
<!-- backwards compatibility -->
<a id="schemaassetlicensename"></a>
<a id="schema_AssetLicenseName"></a>
<a id="tocSassetlicensename"></a>
<a id="tocsassetlicensename"></a>

```json
"Standard"
```

<h2 id="tocS_AssetLicensingResponse">AssetLicensingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassetlicensingresponse"></a>
<a id="schema_AssetLicensingResponse"></a>
<a id="tocSassetlicensingresponse"></a>
<a id="tocsassetlicensingresponse"></a>

```json
{
  "acquired_licenses": [
    "multiseat"
  ],
  "credits_used": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acquired_licenses|[[ExtendedLicenses](#schemaextendedlicenses)]|false|none|none|
|credits_used|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|acquired_licenses|multiseat|
|acquired_licenses|unlimited|
|acquired_licenses|resale|
|acquired_licenses|indemnification|

<h2 id="tocS_AssetType">AssetType</h2>
<!-- backwards compatibility -->
<a id="schemaassettype"></a>
<a id="schema_AssetType"></a>
<a id="tocSassettype"></a>
<a id="tocsassettype"></a>

```json
"NotSet"
```

<h2 id="tocS_AssociatedVideoDetailFieldValues">AssociatedVideoDetailFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedvideodetailfieldvalues"></a>
<a id="schema_AssociatedVideoDetailFieldValues"></a>
<a id="tocSassociatedvideodetailfieldvalues"></a>
<a id="tocsassociatedvideodetailfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_AutoCorrections">AutoCorrections</h2>
<!-- backwards compatibility -->
<a id="schemaautocorrections"></a>
<a id="schema_AutoCorrections"></a>
<a id="tocSautocorrections"></a>
<a id="tocsautocorrections"></a>

```json
{
  "phrase": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phrase|string \| null|false|none|none|

<h2 id="tocS_BlendedImageSortOrder">BlendedImageSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemablendedimagesortorder"></a>
<a id="schema_BlendedImageSortOrder"></a>
<a id="tocSblendedimagesortorder"></a>
<a id="tocsblendedimagesortorder"></a>

```json
"best_match"
```

<h2 id="tocS_BlendedVideoSearchItem">BlendedVideoSearchItem</h2>
<!-- backwards compatibility -->
<a id="schemablendedvideosearchitem"></a>
<a id="schema_BlendedVideoSearchItem"></a>
<a id="tocSblendedvideosearchitem"></a>
<a id="tocsblendedvideosearchitem"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "artist": "string",
  "asset_family": "string",
  "caption": "string",
  "clip_length": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "aspect_ratio": "string",
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "era": "string",
  "event_ids": [
    0
  ],
  "id": "string",
  "istock_licenses": [
    {
      "credits": 0,
      "license_type": "Standard"
    }
  ],
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "mastered_to": "string",
  "originally_shot_on": "string",
  "product_types": [
    "string"
  ],
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "shot_speed": "string",
  "source": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|caption|string \| null|false|none|none|
|clip_length|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[VideoSearchItemDisplaySize](#schemavideosearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|era|string \| null|false|none|none|
|event_ids|[integer(int32)]|false|none|none|
|id|string \| null|false|none|none|
|istock_licenses|[[IStockLicense](#schemaistocklicense)]|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|mastered_to|string \| null|false|none|none|
|originally_shot_on|string \| null|false|none|none|
|product_types|[string]|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|shot_speed|string \| null|false|none|none|
|source|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_BlendedVideoSearchResults">BlendedVideoSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemablendedvideosearchresults"></a>
<a id="schema_BlendedVideoSearchResults"></a>
<a id="tocSblendedvideosearchresults"></a>
<a id="tocsblendedvideosearchresults"></a>

```json
{
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "source": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[SearchFacetsResponse](#schemasearchfacetsresponse)|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|
|videos|[[BlendedVideoSearchItem](#schemablendedvideosearchitem)]|false|none|none|

<h2 id="tocS_BlendedVideosFieldValues">BlendedVideosFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemablendedvideosfieldvalues"></a>
<a id="schema_BlendedVideosFieldValues"></a>
<a id="tocSblendedvideosfieldvalues"></a>
<a id="tocsblendedvideosfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_BoardAsset">BoardAsset</h2>
<!-- backwards compatibility -->
<a id="schemaboardasset"></a>
<a id="schema_BoardAsset"></a>
<a id="tocSboardasset"></a>
<a id="tocsboardasset"></a>

```json
{
  "asset_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string|true|none|none|

<h2 id="tocS_BoardCommentPermissions">BoardCommentPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaboardcommentpermissions"></a>
<a id="schema_BoardCommentPermissions"></a>
<a id="tocSboardcommentpermissions"></a>
<a id="tocsboardcommentpermissions"></a>

```json
{
  "can_add_comment": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_add_comment|boolean|false|none|none|

<h2 id="tocS_BoardCreated">BoardCreated</h2>
<!-- backwards compatibility -->
<a id="schemaboardcreated"></a>
<a id="schema_BoardCreated"></a>
<a id="tocSboardcreated"></a>
<a id="tocsboardcreated"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|

<h2 id="tocS_BoardDetail">BoardDetail</h2>
<!-- backwards compatibility -->
<a id="schemaboarddetail"></a>
<a id="schema_BoardDetail"></a>
<a id="tocSboarddetail"></a>
<a id="tocsboarddetail"></a>

```json
{
  "asset_count": 0,
  "assets": [
    {
      "asset_type": "string",
      "date_added": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "name": "string",
          "uri": "string"
        }
      ],
      "id": "string"
    }
  ],
  "comment_count": 0,
  "date_created": "1970-01-01T00:00:00Z",
  "date_last_updated": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "links": {
    "invitation": "string",
    "share": "string"
  },
  "name": "string",
  "permissions": {
    "can_add_assets": true,
    "can_delete_board": true,
    "can_invite_to_board": true,
    "can_remove_assets": true,
    "can_update_description": true,
    "can_update_name": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_count|integer(int32)|false|none|none|
|assets|[[Asset](#schemaasset)]|false|none|none|
|comment_count|integer(int32)|false|none|none|
|date_created|string(date-time)|false|none|none|
|date_last_updated|string(date-time)|false|none|none|
|description|string \| null|false|none|none|
|id|string \| null|false|none|none|
|links|[Links](#schemalinks)|false|none|none|
|name|string \| null|false|none|none|
|permissions|[BoardPermissions](#schemaboardpermissions)|false|none|none|

<h2 id="tocS_BoardInfo">BoardInfo</h2>
<!-- backwards compatibility -->
<a id="schemaboardinfo"></a>
<a id="schema_BoardInfo"></a>
<a id="tocSboardinfo"></a>
<a id="tocsboardinfo"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|none|
|name|string|true|none|none|

<h2 id="tocS_BoardList">BoardList</h2>
<!-- backwards compatibility -->
<a id="schemaboardlist"></a>
<a id="schema_BoardList"></a>
<a id="tocSboardlist"></a>
<a id="tocsboardlist"></a>

```json
{
  "board_count": 0,
  "boards": [
    {
      "asset_count": 0,
      "board_relationship": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "date_last_updated": "1970-01-01T00:00:00Z",
      "description": "string",
      "hero_asset": {
        "asset_type": "string",
        "date_added": "1970-01-01T00:00:00Z",
        "display_sizes": [
          {
            "name": "string",
            "uri": "string"
          }
        ],
        "id": "string"
      },
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|board_count|integer(int32)|false|none|none|
|boards|[[BoardListBoard](#schemaboardlistboard)]|false|none|none|

<h2 id="tocS_BoardListBoard">BoardListBoard</h2>
<!-- backwards compatibility -->
<a id="schemaboardlistboard"></a>
<a id="schema_BoardListBoard"></a>
<a id="tocSboardlistboard"></a>
<a id="tocsboardlistboard"></a>

```json
{
  "asset_count": 0,
  "board_relationship": "string",
  "date_created": "1970-01-01T00:00:00Z",
  "date_last_updated": "1970-01-01T00:00:00Z",
  "description": "string",
  "hero_asset": {
    "asset_type": "string",
    "date_added": "1970-01-01T00:00:00Z",
    "display_sizes": [
      {
        "name": "string",
        "uri": "string"
      }
    ],
    "id": "string"
  },
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_count|integer(int32)|false|none|none|
|board_relationship|string \| null|false|none|none|
|date_created|string(date-time)|false|none|none|
|date_last_updated|string(date-time)|false|none|none|
|description|string \| null|false|none|none|
|hero_asset|[Asset](#schemaasset)|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_BoardPermissions">BoardPermissions</h2>
<!-- backwards compatibility -->
<a id="schemaboardpermissions"></a>
<a id="schema_BoardPermissions"></a>
<a id="tocSboardpermissions"></a>
<a id="tocsboardpermissions"></a>

```json
{
  "can_add_assets": true,
  "can_delete_board": true,
  "can_invite_to_board": true,
  "can_remove_assets": true,
  "can_update_description": true,
  "can_update_name": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_add_assets|boolean|false|none|none|
|can_delete_board|boolean|false|none|none|
|can_invite_to_board|boolean|false|none|none|
|can_remove_assets|boolean|false|none|none|
|can_update_description|boolean|false|none|none|
|can_update_name|boolean|false|none|none|

<h2 id="tocS_BoardRelationship">BoardRelationship</h2>
<!-- backwards compatibility -->
<a id="schemaboardrelationship"></a>
<a id="schema_BoardRelationship"></a>
<a id="tocSboardrelationship"></a>
<a id="tocsboardrelationship"></a>

```json
"owned"
```

<h2 id="tocS_BoardSortOrder">BoardSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemaboardsortorder"></a>
<a id="schema_BoardSortOrder"></a>
<a id="tocSboardsortorder"></a>
<a id="tocsboardsortorder"></a>

```json
"date_last_updated_descending"
```

<h2 id="tocS_ChangedAssetDetail">ChangedAssetDetail</h2>
<!-- backwards compatibility -->
<a id="schemachangedassetdetail"></a>
<a id="schema_ChangedAssetDetail"></a>
<a id="tocSchangedassetdetail"></a>
<a id="tocschangedassetdetail"></a>

```json
{
  "asset_changed_utc_datetime": "1970-01-01T00:00:00Z",
  "asset_lifecycle": "string",
  "asset_type": "string",
  "id": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_changed_utc_datetime|string(date-time)|false|none|Contains the date of the asset change.|
|asset_lifecycle|string \| null|false|none|Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted")|
|asset_type|string \| null|false|none|Contains the type of asset this asset change is (i.e. "Image").|
|id|string \| null|false|none|Contains the Id for the asset change.|
|uri|string \| null|false|none|Contains the asset download URL for assets with an AssetLifecycle of "New."|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "AssetChangeType": "string",
  "AssetFamily": "NotSet",
  "AssetType": "NotSet",
  "ChannelId": 0,
  "CreateDateUtc": "1970-01-01T00:00:00Z",
  "Metadata": "string",
  "NotificationCount": 0,
  "OldestChangeNotificationDateUtc": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssetChangeType|string \| null|false|none|none|
|AssetFamily|[AssetFamily](#schemaassetfamily)|false|none|none|
|AssetType|[AssetType](#schemaassettype)|false|none|none|
|ChannelId|integer(int32)|false|none|none|
|CreateDateUtc|string(date-time)|false|none|none|
|Metadata|string \| null|false|none|none|
|NotificationCount|integer(int32)|false|none|none|
|OldestChangeNotificationDateUtc|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|AssetFamily|NotSet|
|AssetFamily|Editorial|
|AssetFamily|Creative|
|AssetFamily|Both|
|AssetType|NotSet|
|AssetType|Image|
|AssetType|Film|
|AssetType|Music|

<h2 id="tocS_Collaborator">Collaborator</h2>
<!-- backwards compatibility -->
<a id="schemacollaborator"></a>
<a id="schema_Collaborator"></a>
<a id="tocScollaborator"></a>
<a id="tocscollaborator"></a>

```json
{
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string \| null|false|none|none|
|last_name|string \| null|false|none|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "asset_family": "string",
  "code": "string",
  "id": 0,
  "license_model": "string",
  "name": "string",
  "product_types": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_family|string \| null|false|none|none|
|code|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|license_model|string \| null|false|none|none|
|name|string \| null|false|none|none|
|product_types|[string]|false|none|none|

<h2 id="tocS_CollectionsFilterType">CollectionsFilterType</h2>
<!-- backwards compatibility -->
<a id="schemacollectionsfiltertype"></a>
<a id="schema_CollectionsFilterType"></a>
<a id="tocScollectionsfiltertype"></a>
<a id="tocscollectionsfiltertype"></a>

```json
"include"
```

<h2 id="tocS_CollectionsList">CollectionsList</h2>
<!-- backwards compatibility -->
<a id="schemacollectionslist"></a>
<a id="schema_CollectionsList"></a>
<a id="tocScollectionslist"></a>
<a id="tocscollectionslist"></a>

```json
{
  "collections": [
    {
      "asset_family": "string",
      "code": "string",
      "id": 0,
      "license_model": "string",
      "name": "string",
      "product_types": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collections|[[Collection](#schemacollection)]|false|none|none|

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
{
  "created_by": {
    "first_name": "string",
    "last_name": "string"
  },
  "date_created": "1970-01-01T00:00:00Z",
  "id": "string",
  "permissions": {
    "can_delete_comment": true
  },
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_by|[Collaborator](#schemacollaborator)|false|none|none|
|date_created|string(date-time)|false|none|none|
|id|string \| null|false|none|none|
|permissions|[CommentPermissions](#schemacommentpermissions)|false|none|none|
|text|string \| null|false|none|none|

<h2 id="tocS_CommentCreated">CommentCreated</h2>
<!-- backwards compatibility -->
<a id="schemacommentcreated"></a>
<a id="schema_CommentCreated"></a>
<a id="tocScommentcreated"></a>
<a id="tocscommentcreated"></a>

```json
{
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string \| null|false|none|none|

<h2 id="tocS_CommentPermissions">CommentPermissions</h2>
<!-- backwards compatibility -->
<a id="schemacommentpermissions"></a>
<a id="schema_CommentPermissions"></a>
<a id="tocScommentpermissions"></a>
<a id="tocscommentpermissions"></a>

```json
{
  "can_delete_comment": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|can_delete_comment|boolean|false|none|none|

<h2 id="tocS_CommentRequest">CommentRequest</h2>
<!-- backwards compatibility -->
<a id="schemacommentrequest"></a>
<a id="schema_CommentRequest"></a>
<a id="tocScommentrequest"></a>
<a id="tocscommentrequest"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string \| null|false|none|none|

<h2 id="tocS_CommentsList">CommentsList</h2>
<!-- backwards compatibility -->
<a id="schemacommentslist"></a>
<a id="schema_CommentsList"></a>
<a id="tocScommentslist"></a>
<a id="tocscommentslist"></a>

```json
{
  "comments": [
    {
      "created_by": {
        "first_name": "string",
        "last_name": "string"
      },
      "date_created": "1970-01-01T00:00:00Z",
      "id": "string",
      "permissions": {
        "can_delete_comment": true
      },
      "text": "string"
    }
  ],
  "permissions": {
    "can_add_comment": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comments|[[Comment](#schemacomment)]|false|none|none|
|permissions|[BoardCommentPermissions](#schemaboardcommentpermissions)|false|none|none|

<h2 id="tocS_CompositionsFilterType">CompositionsFilterType</h2>
<!-- backwards compatibility -->
<a id="schemacompositionsfiltertype"></a>
<a id="schema_CompositionsFilterType"></a>
<a id="tocScompositionsfiltertype"></a>
<a id="tocscompositionsfiltertype"></a>

```json
"abstract"
```

<h2 id="tocS_Contributor">Contributor</h2>
<!-- backwards compatibility -->
<a id="schemacontributor"></a>
<a id="schema_Contributor"></a>
<a id="tocScontributor"></a>
<a id="tocscontributor"></a>

```json
{
  "display_name": "string",
  "member_name": "string"
}
```

Contributor information for an image or video

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string \| null|false|none|The contributor's display name|
|member_name|string \| null|false|none|The contributor's member name|

<h2 id="tocS_CountriesList">CountriesList</h2>
<!-- backwards compatibility -->
<a id="schemacountrieslist"></a>
<a id="schema_CountriesList"></a>
<a id="tocScountrieslist"></a>
<a id="tocscountrieslist"></a>

```json
{
  "countries": [
    {
      "iso_alpha_2": "string",
      "iso_alpha_3": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[Country](#schemacountry)]|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "iso_alpha_2": "string",
  "iso_alpha_3": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|iso_alpha_2|string \| null|false|none|none|
|iso_alpha_3|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_CreateImageSearchFacetsFields">CreateImageSearchFacetsFields</h2>
<!-- backwards compatibility -->
<a id="schemacreateimagesearchfacetsfields"></a>
<a id="schema_CreateImageSearchFacetsFields"></a>
<a id="tocScreateimagesearchfacetsfields"></a>
<a id="tocscreateimagesearchfacetsfields"></a>

```json
"artists"
```

<h2 id="tocS_CreateVideoSearchFacetsFields">CreateVideoSearchFacetsFields</h2>
<!-- backwards compatibility -->
<a id="schemacreatevideosearchfacetsfields"></a>
<a id="schema_CreateVideoSearchFacetsFields"></a>
<a id="tocScreatevideosearchfacetsfields"></a>
<a id="tocscreatevideosearchfacetsfields"></a>

```json
"artists"
```

<h2 id="tocS_CreativeImageSearchResults">CreativeImageSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemacreativeimagesearchresults"></a>
<a id="schema_CreativeImageSearchResults"></a>
<a id="tocScreativeimagesearchresults"></a>
<a id="tocscreativeimagesearchresults"></a>

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "graphical_style": "string",
      "id": "string",
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_corrections|[AutoCorrections](#schemaautocorrections)|false|none|none|
|images|[[ImageSearchItemCreative](#schemaimagesearchitemcreative)]|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_CreativeImageSortOrder">CreativeImageSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemacreativeimagesortorder"></a>
<a id="schema_CreativeImageSortOrder"></a>
<a id="tocScreativeimagesortorder"></a>
<a id="tocscreativeimagesortorder"></a>

```json
"best_match"
```

<h2 id="tocS_CreativeImagesFieldValues">CreativeImagesFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemacreativeimagesfieldvalues"></a>
<a id="schema_CreativeImagesFieldValues"></a>
<a id="tocScreativeimagesfieldvalues"></a>
<a id="tocscreativeimagesfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_CreativeVideoSearchItem">CreativeVideoSearchItem</h2>
<!-- backwards compatibility -->
<a id="schemacreativevideosearchitem"></a>
<a id="schema_CreativeVideoSearchItem"></a>
<a id="tocScreativevideosearchitem"></a>
<a id="tocscreativevideosearchitem"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "artist": "string",
  "asset_family": "string",
  "caption": "string",
  "clip_length": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "aspect_ratio": "string",
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "era": "string",
  "event_ids": [
    0
  ],
  "id": "string",
  "istock_licenses": [
    {
      "credits": 0,
      "license_type": "Standard"
    }
  ],
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "mastered_to": "string",
  "originally_shot_on": "string",
  "product_types": [
    "string"
  ],
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "shot_speed": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|caption|string \| null|false|none|none|
|clip_length|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[VideoSearchItemDisplaySize](#schemavideosearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|era|string \| null|false|none|none|
|event_ids|[integer(int32)]|false|none|none|
|id|string \| null|false|none|none|
|istock_licenses|[[IStockLicense](#schemaistocklicense)]|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|mastered_to|string \| null|false|none|none|
|originally_shot_on|string \| null|false|none|none|
|product_types|[string]|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|shot_speed|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_CreativeVideoSearchResults">CreativeVideoSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemacreativevideosearchresults"></a>
<a id="schema_CreativeVideoSearchResults"></a>
<a id="tocScreativevideosearchresults"></a>
<a id="tocscreativevideosearchresults"></a>

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_corrections|[AutoCorrections](#schemaautocorrections)|false|none|none|
|facets|[SearchFacetsResponse](#schemasearchfacetsresponse)|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|
|videos|[[CreativeVideoSearchItem](#schemacreativevideosearchitem)]|false|none|none|

<h2 id="tocS_CreativeVideoSortOrder">CreativeVideoSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemacreativevideosortorder"></a>
<a id="schema_CreativeVideoSortOrder"></a>
<a id="tocScreativevideosortorder"></a>
<a id="tocscreativevideosortorder"></a>

```json
"best_match"
```

<h2 id="tocS_CreativeVideosFieldValues">CreativeVideosFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemacreativevideosfieldvalues"></a>
<a id="schema_CreativeVideosFieldValues"></a>
<a id="tocScreativevideosfieldvalues"></a>
<a id="tocscreativevideosfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_CuratedSet">CuratedSet</h2>
<!-- backwards compatibility -->
<a id="schemacuratedset"></a>
<a id="schema_CuratedSet"></a>
<a id="tocScuratedset"></a>
<a id="tocscuratedset"></a>

```json
{
  "assets": [
    "string"
  ],
  "date_created": "1970-01-01T00:00:00Z",
  "date_last_updated": "1970-01-01T00:00:00Z",
  "description": "string",
  "hero_image_uri": "string",
  "keywords": [
    "string"
  ],
  "set_id": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[string]|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|date_last_updated|string(date-time) \| null|false|none|none|
|description|string \| null|false|none|none|
|hero_image_uri|string \| null|false|none|none|
|keywords|[string]|false|none|none|
|set_id|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_CustomerInfoResponse">CustomerInfoResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomerinforesponse"></a>
<a id="schema_CustomerInfoResponse"></a>
<a id="tocScustomerinforesponse"></a>
<a id="tocscustomerinforesponse"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "middle_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string \| null|false|none|none|
|last_name|string \| null|false|none|none|
|middle_name|string \| null|false|none|none|

<h2 id="tocS_Dimensions">Dimensions</h2>
<!-- backwards compatibility -->
<a id="schemadimensions"></a>
<a id="schema_Dimensions"></a>
<a id="tocSdimensions"></a>
<a id="tocsdimensions"></a>

```json
{
  "dpi": 0,
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dpi|integer(int32) \| null|false|none|none|
|height|integer(int32) \| null|false|none|none|
|width|integer(int32) \| null|false|none|none|

<h2 id="tocS_DisplaySize">DisplaySize</h2>
<!-- backwards compatibility -->
<a id="schemadisplaysize"></a>
<a id="schema_DisplaySize"></a>
<a id="tocSdisplaysize"></a>
<a id="tocsdisplaysize"></a>

```json
{
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_Download">Download</h2>
<!-- backwards compatibility -->
<a id="schemadownload"></a>
<a id="schema_Download"></a>
<a id="tocSdownload"></a>
<a id="tocsdownload"></a>

```json
{
  "agreement_name": "string",
  "product_id": "string",
  "product_type": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreement_name|string \| null|false|none|none|
|product_id|string \| null|false|none|none|
|product_type|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_DownloadDetails">DownloadDetails</h2>
<!-- backwards compatibility -->
<a id="schemadownloaddetails"></a>
<a id="schema_DownloadDetails"></a>
<a id="tocSdownloaddetails"></a>
<a id="tocsdownloaddetails"></a>

```json
{
  "download_notes": "string",
  "project_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_notes|string \| null|false|none|none|
|project_code|string \| null|false|none|none|

<h2 id="tocS_DownloadFileType">DownloadFileType</h2>
<!-- backwards compatibility -->
<a id="schemadownloadfiletype"></a>
<a id="schema_DownloadFileType"></a>
<a id="tocSdownloadfiletype"></a>
<a id="tocsdownloadfiletype"></a>

```json
"eps"
```

<h2 id="tocS_DownloadRequirements">DownloadRequirements</h2>
<!-- backwards compatibility -->
<a id="schemadownloadrequirements"></a>
<a id="schema_DownloadRequirements"></a>
<a id="tocSdownloadrequirements"></a>
<a id="tocsdownloadrequirements"></a>

```json
{
  "is_note_required": true,
  "is_project_code_required": true,
  "project_codes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_note_required|boolean|false|none|none|
|is_project_code_required|boolean|false|none|none|
|project_codes|[string]|false|none|none|

<h2 id="tocS_EditorialGraphicalStyle">EditorialGraphicalStyle</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialgraphicalstyle"></a>
<a id="schema_EditorialGraphicalStyle"></a>
<a id="tocSeditorialgraphicalstyle"></a>
<a id="tocseditorialgraphicalstyle"></a>

```json
"photography"
```

<h2 id="tocS_EditorialImageSearchFacetsFields">EditorialImageSearchFacetsFields</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagesearchfacetsfields"></a>
<a id="schema_EditorialImageSearchFacetsFields"></a>
<a id="tocSeditorialimagesearchfacetsfields"></a>
<a id="tocseditorialimagesearchfacetsfields"></a>

```json
"artists"
```

<h2 id="tocS_EditorialImageSearchResults">EditorialImageSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagesearchresults"></a>
<a id="schema_EditorialImageSearchResults"></a>
<a id="tocSeditorialimagesearchresults"></a>
<a id="tocseditorialimagesearchresults"></a>

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "editorial_source": {
        "id": 0
      },
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageSearchItemEditorial](#schemaimagesearchitemeditorial)]|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_EditorialImagesFieldValues">EditorialImagesFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialimagesfieldvalues"></a>
<a id="schema_EditorialImagesFieldValues"></a>
<a id="tocSeditorialimagesfieldvalues"></a>
<a id="tocseditorialimagesfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_EditorialSegmentContract">EditorialSegmentContract</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialsegmentcontract"></a>
<a id="schema_EditorialSegmentContract"></a>
<a id="tocSeditorialsegmentcontract"></a>
<a id="tocseditorialsegmentcontract"></a>

```json
"archival"
```

<h2 id="tocS_EditorialSource">EditorialSource</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialsource"></a>
<a id="schema_EditorialSource"></a>
<a id="tocSeditorialsource"></a>
<a id="tocseditorialsource"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|

<h2 id="tocS_EditorialVideoSearchFacetsFields">EditorialVideoSearchFacetsFields</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideosearchfacetsfields"></a>
<a id="schema_EditorialVideoSearchFacetsFields"></a>
<a id="tocSeditorialvideosearchfacetsfields"></a>
<a id="tocseditorialvideosearchfacetsfields"></a>

```json
"artists"
```

<h2 id="tocS_EditorialVideoSearchItem">EditorialVideoSearchItem</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideosearchitem"></a>
<a id="schema_EditorialVideoSearchItem"></a>
<a id="tocSeditorialvideosearchitem"></a>
<a id="tocseditorialvideosearchitem"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "artist": "string",
  "asset_family": "string",
  "caption": "string",
  "clip_length": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "aspect_ratio": "string",
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "era": "string",
  "event_ids": [
    0
  ],
  "id": "string",
  "istock_licenses": [
    {
      "credits": 0,
      "license_type": "Standard"
    }
  ],
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "mastered_to": "string",
  "originally_shot_on": "string",
  "product_types": [
    "string"
  ],
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "shot_speed": "string",
  "source": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|caption|string \| null|false|none|none|
|clip_length|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[VideoSearchItemDisplaySize](#schemavideosearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|era|string \| null|false|none|none|
|event_ids|[integer(int32)]|false|none|none|
|id|string \| null|false|none|none|
|istock_licenses|[[IStockLicense](#schemaistocklicense)]|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|mastered_to|string \| null|false|none|none|
|originally_shot_on|string \| null|false|none|none|
|product_types|[string]|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|shot_speed|string \| null|false|none|none|
|source|string \| null|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_EditorialVideoSearchResults">EditorialVideoSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideosearchresults"></a>
<a id="schema_EditorialVideoSearchResults"></a>
<a id="tocSeditorialvideosearchresults"></a>
<a id="tocseditorialvideosearchresults"></a>

```json
{
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0,
  "videos": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "artist": "string",
      "asset_family": "string",
      "caption": "string",
      "clip_length": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "aspect_ratio": "string",
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "era": "string",
      "event_ids": [
        0
      ],
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "mastered_to": "string",
      "originally_shot_on": "string",
      "product_types": [
        "string"
      ],
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "shot_speed": "string",
      "source": "string",
      "title": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|facets|[SearchFacetsResponse](#schemasearchfacetsresponse)|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|
|videos|[[EditorialVideoSearchItem](#schemaeditorialvideosearchitem)]|false|none|none|

<h2 id="tocS_EditorialVideoType">EditorialVideoType</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideotype"></a>
<a id="schema_EditorialVideoType"></a>
<a id="tocSeditorialvideotype"></a>
<a id="tocseditorialvideotype"></a>

```json
"raw"
```

<h2 id="tocS_EditorialVideosFieldValues">EditorialVideosFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaeditorialvideosfieldvalues"></a>
<a id="schema_EditorialVideosFieldValues"></a>
<a id="tocSeditorialvideosfieldvalues"></a>
<a id="tocseditorialvideosfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_Entertainment">Entertainment</h2>
<!-- backwards compatibility -->
<a id="schemaentertainment"></a>
<a id="schema_Entertainment"></a>
<a id="tocSentertainment"></a>
<a id="tocsentertainment"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_EthnicityFilterType">EthnicityFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaethnicityfiltertype"></a>
<a id="schema_EthnicityFilterType"></a>
<a id="tocSethnicityfiltertype"></a>
<a id="tocsethnicityfiltertype"></a>

```json
"black"
```

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "child_event_count": 0,
  "editorial_segments": [
    "string"
  ],
  "hero_image": {
    "display_sizes": [
      {
        "is_watermarked": true,
        "name": "string",
        "uri": "string"
      }
    ],
    "id": "string"
  },
  "id": 0,
  "image_count": 0,
  "location": {
    "city": "string",
    "country": "string",
    "state_province": "string",
    "venue": "string"
  },
  "name": "string",
  "start_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|child_event_count|integer(int32)|false|none|none|
|editorial_segments|[string]|false|none|none|
|hero_image|[HeroImage](#schemaheroimage)|false|none|none|
|id|integer(int32)|false|none|none|
|image_count|integer(int32)|false|none|none|
|location|[LocationEvent](#schemalocationevent)|false|none|none|
|name|string \| null|false|none|none|
|start_date|string(date-time) \| null|false|none|none|

<h2 id="tocS_EventDetailFieldValues">EventDetailFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaeventdetailfieldvalues"></a>
<a id="schema_EventDetailFieldValues"></a>
<a id="tocSeventdetailfieldvalues"></a>
<a id="tocseventdetailfieldvalues"></a>

```json
"id"
```

<h2 id="tocS_EventFieldValues">EventFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaeventfieldvalues"></a>
<a id="schema_EventFieldValues"></a>
<a id="tocSeventfieldvalues"></a>
<a id="tocseventfieldvalues"></a>

```json
"id"
```

<h2 id="tocS_EventSearchSortOrder">EventSearchSortOrder</h2>
<!-- backwards compatibility -->
<a id="schemaeventsearchsortorder"></a>
<a id="schema_EventSearchSortOrder"></a>
<a id="tocSeventsearchsortorder"></a>
<a id="tocseventsearchsortorder"></a>

```json
"newest"
```

<h2 id="tocS_EventsSearchResult">EventsSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaeventssearchresult"></a>
<a id="schema_EventsSearchResult"></a>
<a id="tocSeventssearchresult"></a>
<a id="tocseventssearchresult"></a>

```json
{
  "events": [
    {
      "child_event_count": 0,
      "editorial_segments": [
        "string"
      ],
      "hero_image": {
        "display_sizes": [
          {
            "is_watermarked": true,
            "name": "string",
            "uri": "string"
          }
        ],
        "id": "string"
      },
      "id": 0,
      "image_count": 0,
      "location": {
        "city": "string",
        "country": "string",
        "state_province": "string",
        "venue": "string"
      },
      "name": "string",
      "start_date": "1970-01-01T00:00:00Z"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|[[Event](#schemaevent)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_ExtendedLicenses">ExtendedLicenses</h2>
<!-- backwards compatibility -->
<a id="schemaextendedlicenses"></a>
<a id="schema_ExtendedLicenses"></a>
<a id="tocSextendedlicenses"></a>
<a id="tocsextendedlicenses"></a>

```json
"multiseat"
```

<h2 id="tocS_FacetEvent">FacetEvent</h2>
<!-- backwards compatibility -->
<a id="schemafacetevent"></a>
<a id="schema_FacetEvent"></a>
<a id="tocSfacetevent"></a>
<a id="tocsfacetevent"></a>

```json
{
  "date": "1970-01-01T00:00:00Z",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string(date-time)|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_GetDownloadsResponse">GetDownloadsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetdownloadsresponse"></a>
<a id="schema_GetDownloadsResponse"></a>
<a id="tocSgetdownloadsresponse"></a>
<a id="tocsgetdownloadsresponse"></a>

```json
{
  "downloads": [
    {
      "agreement_name": "string",
      "asset_type": "string",
      "date_downloaded": "1970-01-01T00:00:00Z",
      "dimensions": {
        "dpi": 0,
        "height": 0,
        "width": 0
      },
      "download_details": {
        "download_notes": "string",
        "project_code": "string"
      },
      "download_source": "string",
      "id": "string",
      "product_id": 0,
      "product_type": "string",
      "size_name": "string",
      "thumb_uri": "string",
      "user": {
        "first_name": "string",
        "last_name": "string",
        "middle_name": "string",
        "username": "string"
      }
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|downloads|[[HistoricalDownload](#schemahistoricaldownload)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_GetSendEventsResponse">GetSendEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetsendeventsresponse"></a>
<a id="schema_GetSendEventsResponse"></a>
<a id="tocSgetsendeventsresponse"></a>
<a id="tocsgetsendeventsresponse"></a>

```json
{
  "asset_send_events": [
    {
      "asset_id": "string",
      "email_address": "string",
      "timestamp": "1970-01-01T00:00:00Z"
    }
  ],
  "last_offset": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_send_events|[[AssetEvent](#schemaassetevent)]|false|none|none|
|last_offset|string(date-time) \| null|false|none|none|

<h2 id="tocS_GraphicalStyle">GraphicalStyle</h2>
<!-- backwards compatibility -->
<a id="schemagraphicalstyle"></a>
<a id="schema_GraphicalStyle"></a>
<a id="tocSgraphicalstyle"></a>
<a id="tocsgraphicalstyle"></a>

```json
"fine_art"
```

<h2 id="tocS_GraphicalStylesFilterType">GraphicalStylesFilterType</h2>
<!-- backwards compatibility -->
<a id="schemagraphicalstylesfiltertype"></a>
<a id="schema_GraphicalStylesFilterType"></a>
<a id="tocSgraphicalstylesfiltertype"></a>
<a id="tocsgraphicalstylesfiltertype"></a>

```json
"include"
```

<h2 id="tocS_HeroImage">HeroImage</h2>
<!-- backwards compatibility -->
<a id="schemaheroimage"></a>
<a id="schema_HeroImage"></a>
<a id="tocSheroimage"></a>
<a id="tocsheroimage"></a>

```json
{
  "display_sizes": [
    {
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_sizes|[[HeroImageDisplaySize](#schemaheroimagedisplaysize)]|false|none|none|
|id|string \| null|false|none|none|

<h2 id="tocS_HeroImageDisplaySize">HeroImageDisplaySize</h2>
<!-- backwards compatibility -->
<a id="schemaheroimagedisplaysize"></a>
<a id="schema_HeroImageDisplaySize"></a>
<a id="tocSheroimagedisplaysize"></a>
<a id="tocsheroimagedisplaysize"></a>

```json
{
  "is_watermarked": true,
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_watermarked|boolean|false|none|none|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_HistoricalDownload">HistoricalDownload</h2>
<!-- backwards compatibility -->
<a id="schemahistoricaldownload"></a>
<a id="schema_HistoricalDownload"></a>
<a id="tocShistoricaldownload"></a>
<a id="tocshistoricaldownload"></a>

```json
{
  "agreement_name": "string",
  "asset_type": "string",
  "date_downloaded": "1970-01-01T00:00:00Z",
  "dimensions": {
    "dpi": 0,
    "height": 0,
    "width": 0
  },
  "download_details": {
    "download_notes": "string",
    "project_code": "string"
  },
  "download_source": "string",
  "id": "string",
  "product_id": 0,
  "product_type": "string",
  "size_name": "string",
  "thumb_uri": "string",
  "user": {
    "first_name": "string",
    "last_name": "string",
    "middle_name": "string",
    "username": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreement_name|string \| null|false|none|none|
|asset_type|string \| null|false|none|none|
|date_downloaded|string(date-time)|false|none|none|
|dimensions|[Dimensions](#schemadimensions)|false|none|none|
|download_details|[DownloadDetails](#schemadownloaddetails)|false|none|none|
|download_source|string \| null|false|none|none|
|id|string \| null|false|none|none|
|product_id|integer(int32)|false|none|none|
|product_type|string \| null|false|none|none|
|size_name|string \| null|false|none|none|
|thumb_uri|string \| null|false|none|none|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_IStockLicense">IStockLicense</h2>
<!-- backwards compatibility -->
<a id="schemaistocklicense"></a>
<a id="schema_IStockLicense"></a>
<a id="tocSistocklicense"></a>
<a id="tocsistocklicense"></a>

```json
{
  "credits": 0,
  "license_type": "Standard"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credits|integer(int32)|false|none|none|
|license_type|[AssetLicenseName](#schemaassetlicensename)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|license_type|Standard|
|license_type|Multiseat|
|license_type|Unlimited|
|license_type|Resale|
|license_type|Indemnification|

<h2 id="tocS_ImageDetailFieldValues">ImageDetailFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaimagedetailfieldvalues"></a>
<a id="schema_ImageDetailFieldValues"></a>
<a id="tocSimagedetailfieldvalues"></a>
<a id="tocsimagedetailfieldvalues"></a>

```json
"allowed_use"
```

<h2 id="tocS_ImageOrientationRequest">ImageOrientationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimageorientationrequest"></a>
<a id="schema_ImageOrientationRequest"></a>
<a id="tocSimageorientationrequest"></a>
<a id="tocsimageorientationrequest"></a>

```json
"horizontal"
```

<h2 id="tocS_ImageSearchItem">ImageSearchItem</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchitem"></a>
<a id="schema_ImageSearchItem"></a>
<a id="tocSimagesearchitem"></a>
<a id="tocsimagesearchitem"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "alternative_ids": {
    "property1": "string",
    "property2": "string"
  },
  "artist": "string",
  "asset_family": "string",
  "call_for_image": true,
  "caption": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_camera_shot": "1970-01-01T00:00:00Z",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "editorial_segments": [
    "string"
  ],
  "event_ids": [
    0
  ],
  "graphical_style": "string",
  "id": "string",
  "istock_licenses": [
    {
      "credits": 0,
      "license_type": "Standard"
    }
  ],
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "max_dimensions": {
    "height": 0,
    "width": 0
  },
  "orientation": "string",
  "people": [
    "string"
  ],
  "product_types": [
    "string"
  ],
  "quality_rank": 0,
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "title": "string",
  "uri_oembed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|alternative_ids|object \| null|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|call_for_image|boolean|false|none|none|
|caption|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_camera_shot|string(date-time) \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[ImageSearchItemDisplaySize](#schemaimagesearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|editorial_segments|[string]|false|none|none|
|event_ids|[integer(int32)]|false|none|none|
|graphical_style|string \| null|false|none|none|
|id|string \| null|false|none|none|
|istock_licenses|[[IStockLicense](#schemaistocklicense)]|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|max_dimensions|[MaxDimensions](#schemamaxdimensions)|false|none|none|
|orientation|string \| null|false|none|none|
|people|[string]|false|none|none|
|product_types|[string]|false|none|none|
|quality_rank|integer(int32)|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|title|string \| null|false|none|none|
|uri_oembed|string \| null|false|none|none|

<h2 id="tocS_ImageSearchItemCreative">ImageSearchItemCreative</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchitemcreative"></a>
<a id="schema_ImageSearchItemCreative"></a>
<a id="tocSimagesearchitemcreative"></a>
<a id="tocsimagesearchitemcreative"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "alternative_ids": {
    "property1": "string",
    "property2": "string"
  },
  "artist": "string",
  "asset_family": "string",
  "call_for_image": true,
  "caption": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_camera_shot": "1970-01-01T00:00:00Z",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "graphical_style": "string",
  "id": "string",
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "max_dimensions": {
    "height": 0,
    "width": 0
  },
  "orientation": "string",
  "quality_rank": 0,
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "title": "string",
  "uri_oembed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|alternative_ids|object \| null|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|call_for_image|boolean|false|none|none|
|caption|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_camera_shot|string(date-time) \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[ImageSearchItemDisplaySize](#schemaimagesearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|graphical_style|string \| null|false|none|none|
|id|string \| null|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|max_dimensions|[MaxDimensions](#schemamaxdimensions)|false|none|none|
|orientation|string \| null|false|none|none|
|quality_rank|integer(int32)|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|title|string \| null|false|none|none|
|uri_oembed|string \| null|false|none|none|

<h2 id="tocS_ImageSearchItemDisplaySize">ImageSearchItemDisplaySize</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchitemdisplaysize"></a>
<a id="schema_ImageSearchItemDisplaySize"></a>
<a id="tocSimagesearchitemdisplaysize"></a>
<a id="tocsimagesearchitemdisplaysize"></a>

```json
{
  "is_watermarked": true,
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|is_watermarked|boolean|false|none|none|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_ImageSearchItemEditorial">ImageSearchItemEditorial</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchitemeditorial"></a>
<a id="schema_ImageSearchItemEditorial"></a>
<a id="tocSimagesearchitemeditorial"></a>
<a id="tocsimagesearchitemeditorial"></a>

```json
{
  "allowed_use": {
    "how_can_i_use_it": "string",
    "release_info": "string",
    "usage_restrictions": [
      "string"
    ]
  },
  "alternative_ids": {
    "property1": "string",
    "property2": "string"
  },
  "artist": "string",
  "asset_family": "string",
  "call_for_image": true,
  "caption": "string",
  "collection_code": "string",
  "collection_id": 0,
  "collection_name": "string",
  "color_type": "string",
  "copyright": "string",
  "date_camera_shot": "1970-01-01T00:00:00Z",
  "date_created": "1970-01-01T00:00:00Z",
  "display_sizes": [
    {
      "is_watermarked": true,
      "name": "string",
      "uri": "string"
    }
  ],
  "download_product": "string",
  "editorial_segments": [
    "string"
  ],
  "editorial_source": {
    "id": 0
  },
  "event_ids": [
    0
  ],
  "graphical_style": "string",
  "id": "string",
  "keywords": [
    {
      "entity_types": [
        "string"
      ],
      "entity_uris": [
        "string"
      ],
      "keyword_id": "string",
      "relevance": 0,
      "text": "string",
      "type": "string"
    }
  ],
  "largest_downloads": [
    {
      "agreement_name": "string",
      "product_id": "string",
      "product_type": "string",
      "uri": "string"
    }
  ],
  "license_model": "string",
  "max_dimensions": {
    "height": 0,
    "width": 0
  },
  "orientation": "string",
  "people": [
    "string"
  ],
  "product_types": [
    "string"
  ],
  "quality_rank": 0,
  "referral_destinations": [
    {
      "site_name": "string",
      "uri": "string"
    }
  ],
  "title": "string",
  "uri_oembed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_use|[AllowedUse](#schemaalloweduse)|false|none|none|
|alternative_ids|object \| null|false|none|none|
|artist|string \| null|false|none|none|
|asset_family|string \| null|false|none|none|
|call_for_image|boolean|false|none|none|
|caption|string \| null|false|none|none|
|collection_code|string \| null|false|none|none|
|collection_id|integer(int32) \| null|false|none|none|
|collection_name|string \| null|false|none|none|
|color_type|string \| null|false|none|none|
|copyright|string \| null|false|none|none|
|date_camera_shot|string(date-time) \| null|false|none|none|
|date_created|string(date-time) \| null|false|none|none|
|display_sizes|[[ImageSearchItemDisplaySize](#schemaimagesearchitemdisplaysize)]|false|none|none|
|download_product|string \| null|false|none|none|
|editorial_segments|[string]|false|none|none|
|editorial_source|[EditorialSource](#schemaeditorialsource)|false|none|none|
|event_ids|[integer(int32)]|false|none|none|
|graphical_style|string \| null|false|none|none|
|id|string \| null|false|none|none|
|keywords|[[Keyword](#schemakeyword)]|false|none|none|
|largest_downloads|[[Download](#schemadownload)]|false|none|none|
|license_model|string \| null|false|none|none|
|max_dimensions|[MaxDimensions](#schemamaxdimensions)|false|none|none|
|orientation|string \| null|false|none|none|
|people|[string]|false|none|none|
|product_types|[string]|false|none|none|
|quality_rank|integer(int32)|false|none|none|
|referral_destinations|[[ReferralDestination](#schemareferraldestination)]|false|none|none|
|title|string \| null|false|none|none|
|uri_oembed|string \| null|false|none|none|

<h2 id="tocS_ImageSearchItemSearchResults">ImageSearchItemSearchResults</h2>
<!-- backwards compatibility -->
<a id="schemaimagesearchitemsearchresults"></a>
<a id="schema_ImageSearchItemSearchResults"></a>
<a id="tocSimagesearchitemsearchresults"></a>
<a id="tocsimagesearchitemsearchresults"></a>

```json
{
  "images": [
    {
      "allowed_use": {
        "how_can_i_use_it": "string",
        "release_info": "string",
        "usage_restrictions": [
          "string"
        ]
      },
      "alternative_ids": {
        "property1": "string",
        "property2": "string"
      },
      "artist": "string",
      "asset_family": "string",
      "call_for_image": true,
      "caption": "string",
      "collection_code": "string",
      "collection_id": 0,
      "collection_name": "string",
      "color_type": "string",
      "copyright": "string",
      "date_camera_shot": "1970-01-01T00:00:00Z",
      "date_created": "1970-01-01T00:00:00Z",
      "display_sizes": [
        {
          "is_watermarked": true,
          "name": "string",
          "uri": "string"
        }
      ],
      "download_product": "string",
      "editorial_segments": [
        "string"
      ],
      "event_ids": [
        0
      ],
      "graphical_style": "string",
      "id": "string",
      "istock_licenses": [
        {
          "credits": 0,
          "license_type": "Standard"
        }
      ],
      "keywords": [
        {
          "entity_types": [
            "string"
          ],
          "entity_uris": [
            "string"
          ],
          "keyword_id": "string",
          "relevance": 0,
          "text": "string",
          "type": "string"
        }
      ],
      "largest_downloads": [
        {
          "agreement_name": "string",
          "product_id": "string",
          "product_type": "string",
          "uri": "string"
        }
      ],
      "license_model": "string",
      "max_dimensions": {
        "height": 0,
        "width": 0
      },
      "orientation": "string",
      "people": [
        "string"
      ],
      "product_types": [
        "string"
      ],
      "quality_rank": 0,
      "referral_destinations": [
        {
          "site_name": "string",
          "uri": "string"
        }
      ],
      "title": "string",
      "uri_oembed": "string"
    }
  ],
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[[ImageSearchItem](#schemaimagesearchitem)]|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_ImageTechniquesFilterType">ImageTechniquesFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaimagetechniquesfiltertype"></a>
<a id="schema_ImageTechniquesFilterType"></a>
<a id="tocSimagetechniquesfiltertype"></a>
<a id="tocsimagetechniquesfiltertype"></a>

```json
"realtime"
```

<h2 id="tocS_ImagesDetailResults">ImagesDetailResults</h2>
<!-- backwards compatibility -->
<a id="schemaimagesdetailresults"></a>
<a id="schema_ImagesDetailResults"></a>
<a id="tocSimagesdetailresults"></a>
<a id="tocsimagesdetailresults"></a>

```json
{
  "images": null,
  "images_not_found": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|object \| null|false|none|none|
|images_not_found|[string]|false|none|none|

<h2 id="tocS_ImagesFieldValues">ImagesFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaimagesfieldvalues"></a>
<a id="schema_ImagesFieldValues"></a>
<a id="tocSimagesfieldvalues"></a>
<a id="tocsimagesfieldvalues"></a>

```json
"accessrestriction"
```

<h2 id="tocS_Keyword">Keyword</h2>
<!-- backwards compatibility -->
<a id="schemakeyword"></a>
<a id="schema_Keyword"></a>
<a id="tocSkeyword"></a>
<a id="tocskeyword"></a>

```json
{
  "entity_types": [
    "string"
  ],
  "entity_uris": [
    "string"
  ],
  "keyword_id": "string",
  "relevance": 0,
  "text": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_types|[string]|false|none|none|
|entity_uris|[string]|false|none|none|
|keyword_id|string \| null|false|none|none|
|relevance|integer(int32) \| null|false|none|none|
|text|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_LicenseModelImageRequest">LicenseModelImageRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicensemodelimagerequest"></a>
<a id="schema_LicenseModelImageRequest"></a>
<a id="tocSlicensemodelimagerequest"></a>
<a id="tocslicensemodelimagerequest"></a>

```json
"rightsmanaged"
```

<h2 id="tocS_LicenseModelVideoRequest">LicenseModelVideoRequest</h2>
<!-- backwards compatibility -->
<a id="schemalicensemodelvideorequest"></a>
<a id="schema_LicenseModelVideoRequest"></a>
<a id="tocSlicensemodelvideorequest"></a>
<a id="tocslicensemodelvideorequest"></a>

```json
"rightsready"
```

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "invitation": "string",
  "share": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitation|string \| null|false|none|none|
|share|string \| null|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_LocationEvent">LocationEvent</h2>
<!-- backwards compatibility -->
<a id="schemalocationevent"></a>
<a id="schema_LocationEvent"></a>
<a id="tocSlocationevent"></a>
<a id="tocslocationevent"></a>

```json
{
  "city": "string",
  "country": "string",
  "state_province": "string",
  "venue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string \| null|false|none|none|
|country|string \| null|false|none|none|
|state_province|string \| null|false|none|none|
|venue|string \| null|false|none|none|

<h2 id="tocS_LogLevel">LogLevel</h2>
<!-- backwards compatibility -->
<a id="schemaloglevel"></a>
<a id="schema_LogLevel"></a>
<a id="tocSloglevel"></a>
<a id="tocsloglevel"></a>

```json
"Trace"
```

<h2 id="tocS_MaxDimensions">MaxDimensions</h2>
<!-- backwards compatibility -->
<a id="schemamaxdimensions"></a>
<a id="schema_MaxDimensions"></a>
<a id="tocSmaxdimensions"></a>
<a id="tocsmaxdimensions"></a>

```json
{
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|none|
|width|integer(int32)|false|none|none|

<h2 id="tocS_MemcachedLogEntry">MemcachedLogEntry</h2>
<!-- backwards compatibility -->
<a id="schemamemcachedlogentry"></a>
<a id="schema_MemcachedLogEntry"></a>
<a id="tocSmemcachedlogentry"></a>
<a id="tocsmemcachedlogentry"></a>

```json
{
  "ExceptionMessage": "string",
  "LogLevel": "Trace",
  "Message": "string",
  "Time": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ExceptionMessage|string \| null|false|none|none|
|LogLevel|[LogLevel](#schemaloglevel)|false|none|none|
|Message|string \| null|false|none|none|
|Time|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|LogLevel|Trace|
|LogLevel|Debug|
|LogLevel|Information|
|LogLevel|Warning|
|LogLevel|Error|
|LogLevel|Critical|
|LogLevel|None|

<h2 id="tocS_NumberOfPeopleFilterType">NumberOfPeopleFilterType</h2>
<!-- backwards compatibility -->
<a id="schemanumberofpeoplefiltertype"></a>
<a id="schema_NumberOfPeopleFilterType"></a>
<a id="tocSnumberofpeoplefiltertype"></a>
<a id="tocsnumberofpeoplefiltertype"></a>

```json
"none"
```

<h2 id="tocS_OrderDetail">OrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetail"></a>
<a id="schema_OrderDetail"></a>
<a id="tocSorderdetail"></a>
<a id="tocsorderdetail"></a>

```json
{
  "assets": [
    {
      "id": "string"
    }
  ],
  "end_client": "string",
  "id": "string",
  "invoice_number": "string",
  "notes": {
    "licensee_name": "string",
    "ordered_by": "string",
    "project_title": "string",
    "purchase_order_number": "string"
  },
  "order_date": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[[AssetIdFromOrder](#schemaassetidfromorder)]|false|none|none|
|end_client|string \| null|false|none|none|
|id|string \| null|false|none|none|
|invoice_number|string \| null|false|none|none|
|notes|[OrderNotes](#schemaordernotes)|false|none|none|
|order_date|string(date-time)|false|none|none|

<h2 id="tocS_OrderNotes">OrderNotes</h2>
<!-- backwards compatibility -->
<a id="schemaordernotes"></a>
<a id="schema_OrderNotes"></a>
<a id="tocSordernotes"></a>
<a id="tocsordernotes"></a>

```json
{
  "licensee_name": "string",
  "ordered_by": "string",
  "project_title": "string",
  "purchase_order_number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|licensee_name|string \| null|false|none|none|
|ordered_by|string \| null|false|none|none|
|project_title|string \| null|false|none|none|
|purchase_order_number|string \| null|false|none|none|

<h2 id="tocS_OverageDetails">OverageDetails</h2>
<!-- backwards compatibility -->
<a id="schemaoveragedetails"></a>
<a id="schema_OverageDetails"></a>
<a id="tocSoveragedetails"></a>
<a id="tocsoveragedetails"></a>

```json
{
  "count": 0,
  "limit": 0,
  "overages_reached": true,
  "remaining": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer(int32) \| null|false|none|none|
|limit|integer(int32) \| null|false|none|none|
|overages_reached|boolean \| null|false|none|none|
|remaining|integer(int32) \| null|false|none|none|

<h2 id="tocS_PremiumAccessDownloadData">PremiumAccessDownloadData</h2>
<!-- backwards compatibility -->
<a id="schemapremiumaccessdownloaddata"></a>
<a id="schema_PremiumAccessDownloadData"></a>
<a id="tocSpremiumaccessdownloaddata"></a>
<a id="tocspremiumaccessdownloaddata"></a>

```json
{
  "download_notes": "string",
  "project_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|download_notes|string \| null|false|none|none|
|project_code|string \| null|false|none|none|

<h2 id="tocS_PreviousAssetPurchase">PreviousAssetPurchase</h2>
<!-- backwards compatibility -->
<a id="schemapreviousassetpurchase"></a>
<a id="schema_PreviousAssetPurchase"></a>
<a id="tocSpreviousassetpurchase"></a>
<a id="tocspreviousassetpurchase"></a>

```json
{
  "asset_id": "string",
  "asset_type": "string",
  "date_purchased": "1970-01-01T00:00:00Z",
  "download_uri": "string",
  "file_size_in_bytes": "string",
  "license_model": "string",
  "order_id": "string",
  "purchased_by": "string",
  "size_name": "string",
  "thumb_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string \| null|false|none|none|
|asset_type|string \| null|false|none|none|
|date_purchased|string(date-time)|false|none|none|
|download_uri|string \| null|false|none|none|
|file_size_in_bytes|string \| null|false|none|none|
|license_model|string \| null|false|none|none|
|order_id|string \| null|false|none|none|
|purchased_by|string \| null|false|none|none|
|size_name|string \| null|false|none|none|
|thumb_uri|string \| null|false|none|none|

<h2 id="tocS_PreviousAssetPurchases">PreviousAssetPurchases</h2>
<!-- backwards compatibility -->
<a id="schemapreviousassetpurchases"></a>
<a id="schema_PreviousAssetPurchases"></a>
<a id="tocSpreviousassetpurchases"></a>
<a id="tocspreviousassetpurchases"></a>

```json
{
  "previous_purchases": [
    {
      "asset_id": "string",
      "asset_type": "string",
      "date_purchased": "1970-01-01T00:00:00Z",
      "download_uri": "string",
      "file_size_in_bytes": "string",
      "license_model": "string",
      "order_id": "string",
      "purchased_by": "string",
      "size_name": "string",
      "thumb_uri": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previous_purchases|[[PreviousAssetPurchase](#schemapreviousassetpurchase)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_PreviousPurchase">PreviousPurchase</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspurchase"></a>
<a id="schema_PreviousPurchase"></a>
<a id="tocSpreviouspurchase"></a>
<a id="tocspreviouspurchase"></a>

```json
{
  "date_purchased": "1970-01-01T00:00:00Z",
  "image_id": "string",
  "license_model": "string",
  "order_id": "string",
  "thumb_uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date_purchased|string(date-time)|false|none|none|
|image_id|string \| null|false|none|none|
|license_model|string \| null|false|none|none|
|order_id|string \| null|false|none|none|
|thumb_uri|string \| null|false|none|none|

<h2 id="tocS_PreviousPurchases">PreviousPurchases</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspurchases"></a>
<a id="schema_PreviousPurchases"></a>
<a id="tocSpreviouspurchases"></a>
<a id="tocspreviouspurchases"></a>

```json
{
  "previous_purchases": [
    {
      "date_purchased": "1970-01-01T00:00:00Z",
      "image_id": "string",
      "license_model": "string",
      "order_id": "string",
      "thumb_uri": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|previous_purchases|[[PreviousPurchase](#schemapreviouspurchase)]|false|none|none|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "agreement_name": "string",
  "application_website": "string",
  "credits_remaining": 0,
  "download_limit": 0,
  "download_limit_duration": "string",
  "download_limit_reset_utc_date": "1970-01-01T00:00:00Z",
  "download_requirements": {
    "is_note_required": true,
    "is_project_code_required": true,
    "project_codes": [
      "string"
    ]
  },
  "downloads_remaining": 0,
  "expiration_utc_date": "1970-01-01T00:00:00Z",
  "id": 0,
  "imagepack_resolution": "string",
  "name": "string",
  "overage": {
    "count": 0,
    "limit": 0,
    "overages_reached": true,
    "remaining": 0
  },
  "status": "active",
  "team_credits": 0,
  "type": "easyaccess"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreement_name|string \| null|false|none|none|
|application_website|string \| null|false|none|none|
|credits_remaining|integer(int32) \| null|false|none|none|
|download_limit|integer(int32) \| null|false|none|none|
|download_limit_duration|string \| null|false|none|none|
|download_limit_reset_utc_date|string(date-time) \| null|false|none|none|
|download_requirements|[DownloadRequirements](#schemadownloadrequirements)|false|none|none|
|downloads_remaining|integer(int32) \| null|false|none|none|
|expiration_utc_date|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|imagepack_resolution|string \| null|false|none|none|
|name|string \| null|false|none|none|
|overage|[OverageDetails](#schemaoveragedetails)|false|none|none|
|status|[ProductStatus](#schemaproductstatus)|false|none|none|
|team_credits|integer(int32) \| null|false|none|none|
|type|[ProductTypeResponse](#schemaproducttyperesponse)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|easyaccess|
|type|editorialsubscription|
|type|imagepack|
|type|premiumaccess|
|type|royaltyfreesubscription|
|type|creditpack|

<h2 id="tocS_ProductFieldValues">ProductFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemaproductfieldvalues"></a>
<a id="schema_ProductFieldValues"></a>
<a id="tocSproductfieldvalues"></a>
<a id="tocsproductfieldvalues"></a>

```json
"download_requirements"
```

<h2 id="tocS_ProductStatus">ProductStatus</h2>
<!-- backwards compatibility -->
<a id="schemaproductstatus"></a>
<a id="schema_ProductStatus"></a>
<a id="tocSproductstatus"></a>
<a id="tocsproductstatus"></a>

```json
"active"
```

<h2 id="tocS_ProductStatusRequest">ProductStatusRequest</h2>
<!-- backwards compatibility -->
<a id="schemaproductstatusrequest"></a>
<a id="schema_ProductStatusRequest"></a>
<a id="tocSproductstatusrequest"></a>
<a id="tocsproductstatusrequest"></a>

```json
"all"
```

<h2 id="tocS_ProductTypeForDownloads">ProductTypeForDownloads</h2>
<!-- backwards compatibility -->
<a id="schemaproducttypefordownloads"></a>
<a id="schema_ProductTypeForDownloads"></a>
<a id="tocSproducttypefordownloads"></a>
<a id="tocsproducttypefordownloads"></a>

```json
"easyaccess"
```

<h2 id="tocS_ProductTypeResponse">ProductTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaproducttyperesponse"></a>
<a id="schema_ProductTypeResponse"></a>
<a id="tocSproducttyperesponse"></a>
<a id="tocsproducttyperesponse"></a>

```json
"easyaccess"
```

<h2 id="tocS_ProductsResult">ProductsResult</h2>
<!-- backwards compatibility -->
<a id="schemaproductsresult"></a>
<a id="schema_ProductsResult"></a>
<a id="tocSproductsresult"></a>
<a id="tocsproductsresult"></a>

```json
{
  "products": [
    {
      "agreement_name": "string",
      "application_website": "string",
      "credits_remaining": 0,
      "download_limit": 0,
      "download_limit_duration": "string",
      "download_limit_reset_utc_date": "1970-01-01T00:00:00Z",
      "download_requirements": {
        "is_note_required": true,
        "is_project_code_required": true,
        "project_codes": [
          "string"
        ]
      },
      "downloads_remaining": 0,
      "expiration_utc_date": "1970-01-01T00:00:00Z",
      "id": 0,
      "imagepack_resolution": "string",
      "name": "string",
      "overage": {
        "count": 0,
        "limit": 0,
        "overages_reached": true,
        "remaining": 0
      },
      "status": "active",
      "team_credits": 0,
      "type": "easyaccess"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[Product](#schemaproduct)]|false|none|none|

<h2 id="tocS_ReferralDestination">ReferralDestination</h2>
<!-- backwards compatibility -->
<a id="schemareferraldestination"></a>
<a id="schema_ReferralDestination"></a>
<a id="tocSreferraldestination"></a>
<a id="tocsreferraldestination"></a>

```json
{
  "site_name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site_name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_RelatedSearch">RelatedSearch</h2>
<!-- backwards compatibility -->
<a id="schemarelatedsearch"></a>
<a id="schema_RelatedSearch"></a>
<a id="tocSrelatedsearch"></a>
<a id="tocsrelatedsearch"></a>

```json
{
  "phrase": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phrase|string \| null|false|none|none|
|url|string \| null|false|none|none|

<h2 id="tocS_ReleaseStatus">ReleaseStatus</h2>
<!-- backwards compatibility -->
<a id="schemareleasestatus"></a>
<a id="schema_ReleaseStatus"></a>
<a id="tocSreleasestatus"></a>
<a id="tocsreleasestatus"></a>

```json
"release_not_important"
```

<h2 id="tocS_SearchByImageResourceResults">SearchByImageResourceResults</h2>
<!-- backwards compatibility -->
<a id="schemasearchbyimageresourceresults"></a>
<a id="schema_SearchByImageResourceResults"></a>
<a id="tocSsearchbyimageresourceresults"></a>
<a id="tocssearchbyimageresourceresults"></a>

```json
{
  "auto_corrections": {
    "phrase": "string"
  },
  "facets": {
    "artists": [
      {
        "name": "string"
      }
    ],
    "entertainment": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "events": [
      {
        "date": "1970-01-01T00:00:00Z",
        "id": 0,
        "name": "string"
      }
    ],
    "locations": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "specific_people": [
      {
        "id": 0,
        "name": "string"
      }
    ]
  },
  "image_fingerprint": "string",
  "images": null,
  "related_searches": [
    {
      "phrase": "string",
      "url": "string"
    }
  ],
  "result_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_corrections|[AutoCorrections](#schemaautocorrections)|false|none|none|
|facets|[SearchFacetsResponse](#schemasearchfacetsresponse)|false|none|none|
|image_fingerprint|string \| null|false|none|none|
|images|object \| null|false|none|none|
|related_searches|[[RelatedSearch](#schemarelatedsearch)]|false|none|**Deprecated.**|
|result_count|integer(int32)|false|none|none|

<h2 id="tocS_SearchFacetsResponse">SearchFacetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchfacetsresponse"></a>
<a id="schema_SearchFacetsResponse"></a>
<a id="tocSsearchfacetsresponse"></a>
<a id="tocssearchfacetsresponse"></a>

```json
{
  "artists": [
    {
      "name": "string"
    }
  ],
  "entertainment": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "events": [
    {
      "date": "1970-01-01T00:00:00Z",
      "id": 0,
      "name": "string"
    }
  ],
  "locations": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "specific_people": [
    {
      "id": 0,
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artists|[[Artist](#schemaartist)]|false|none|none|
|entertainment|[[Entertainment](#schemaentertainment)]|false|none|none|
|events|[[FacetEvent](#schemafacetevent)]|false|none|none|
|locations|[[Location](#schemalocation)]|false|none|none|
|specific_people|[[SpecificPeople](#schemaspecificpeople)]|false|none|none|

<h2 id="tocS_SearchFileType">SearchFileType</h2>
<!-- backwards compatibility -->
<a id="schemasearchfiletype"></a>
<a id="schema_SearchFileType"></a>
<a id="tocSsearchfiletype"></a>
<a id="tocssearchfiletype"></a>

```json
"eps"
```

<h2 id="tocS_SelfResult">SelfResult</h2>
<!-- backwards compatibility -->
<a id="schemaselfresult"></a>
<a id="schema_SelfResult"></a>
<a id="tocSselfresult"></a>
<a id="tocsselfresult"></a>

```json
{
  "email": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string \| null|false|none|none|
|id|string \| null|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_SortOrder">SortOrder</h2>
<!-- backwards compatibility -->
<a id="schemasortorder"></a>
<a id="schema_SortOrder"></a>
<a id="tocSsortorder"></a>
<a id="tocssortorder"></a>

```json
"best_match"
```

<h2 id="tocS_SpecificPeople">SpecificPeople</h2>
<!-- backwards compatibility -->
<a id="schemaspecificpeople"></a>
<a id="schema_SpecificPeople"></a>
<a id="tocSspecificpeople"></a>
<a id="tocsspecificpeople"></a>

```json
{
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_TeeShirtSize">TeeShirtSize</h2>
<!-- backwards compatibility -->
<a id="schemateeshirtsize"></a>
<a id="schema_TeeShirtSize"></a>
<a id="tocSteeshirtsize"></a>
<a id="tocsteeshirtsize"></a>

```json
"x_small"
```

<h2 id="tocS_TerritoryRestriction">TerritoryRestriction</h2>
<!-- backwards compatibility -->
<a id="schematerritoryrestriction"></a>
<a id="schema_TerritoryRestriction"></a>
<a id="tocSterritoryrestriction"></a>
<a id="tocsterritoryrestriction"></a>

```json
{
  "country_code": "string",
  "description": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string \| null|false|none|none|
|description|string \| null|false|none|none|
|type|string \| null|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "first_name": "string",
  "last_name": "string",
  "middle_name": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|first_name|string \| null|false|none|none|
|last_name|string \| null|false|none|none|
|middle_name|string \| null|false|none|none|
|username|string \| null|false|none|none|

<h2 id="tocS_VideoAspectRatioFilterType">VideoAspectRatioFilterType</h2>
<!-- backwards compatibility -->
<a id="schemavideoaspectratiofiltertype"></a>
<a id="schema_VideoAspectRatioFilterType"></a>
<a id="tocSvideoaspectratiofiltertype"></a>
<a id="tocsvideoaspectratiofiltertype"></a>

```json
"16:9"
```

<h2 id="tocS_VideoDetailFieldValues">VideoDetailFieldValues</h2>
<!-- backwards compatibility -->
<a id="schemavideodetailfieldvalues"></a>
<a id="schema_VideoDetailFieldValues"></a>
<a id="tocSvideodetailfieldvalues"></a>
<a id="tocsvideodetailfieldvalues"></a>

```json
"id"
```

<h2 id="tocS_VideoFormatsRequest">VideoFormatsRequest</h2>
<!-- backwards compatibility -->
<a id="schemavideoformatsrequest"></a>
<a id="schema_VideoFormatsRequest"></a>
<a id="tocSvideoformatsrequest"></a>
<a id="tocsvideoformatsrequest"></a>

```json
"sd"
```

<h2 id="tocS_VideoFrameRates">VideoFrameRates</h2>
<!-- backwards compatibility -->
<a id="schemavideoframerates"></a>
<a id="schema_VideoFrameRates"></a>
<a id="tocSvideoframerates"></a>
<a id="tocsvideoframerates"></a>

```json
"23.98"
```

<h2 id="tocS_VideoOrientationRequest">VideoOrientationRequest</h2>
<!-- backwards compatibility -->
<a id="schemavideoorientationrequest"></a>
<a id="schema_VideoOrientationRequest"></a>
<a id="tocSvideoorientationrequest"></a>
<a id="tocsvideoorientationrequest"></a>

```json
"horizontal"
```

<h2 id="tocS_VideoSearchItemDisplaySize">VideoSearchItemDisplaySize</h2>
<!-- backwards compatibility -->
<a id="schemavideosearchitemdisplaysize"></a>
<a id="schema_VideoSearchItemDisplaySize"></a>
<a id="tocSvideosearchitemdisplaysize"></a>
<a id="tocsvideosearchitemdisplaysize"></a>

```json
{
  "aspect_ratio": "string",
  "is_watermarked": true,
  "name": "string",
  "uri": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspect_ratio|string \| null|false|none|none|
|is_watermarked|boolean|false|none|none|
|name|string \| null|false|none|none|
|uri|string \| null|false|none|none|

<h2 id="tocS_ViewpointsFilterType">ViewpointsFilterType</h2>
<!-- backwards compatibility -->
<a id="schemaviewpointsfiltertype"></a>
<a id="schema_ViewpointsFilterType"></a>
<a id="tocSviewpointsfiltertype"></a>
<a id="tocsviewpointsfiltertype"></a>

```json
"lockdown"
```

<h2 id="tocS_asset_usage">asset_usage</h2>
<!-- backwards compatibility -->
<a id="schemaasset_usage"></a>
<a id="schema_asset_usage"></a>
<a id="tocSasset_usage"></a>
<a id="tocsasset_usage"></a>

```json
{
  "asset_id": "string",
  "quantity": 0,
  "usage_date": "1970-01-01T00:00:00Z"
}
```

Specifies the id, usage Quantity, and date of when an asset was used.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_id|string \| null|false|none|Specifies the Id of the asset that was used.|
|quantity|integer(int32)|false|none|Specifies the number of times the asset was used.|
|usage_date|string(date-time)|false|none|Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed.|

<h2 id="tocS_report_usage_batch_request">report_usage_batch_request</h2>
<!-- backwards compatibility -->
<a id="schemareport_usage_batch_request"></a>
<a id="schema_report_usage_batch_request"></a>
<a id="tocSreport_usage_batch_request"></a>
<a id="tocsreport_usage_batch_request"></a>

```json
{
  "asset_usages": [
    {
      "asset_id": "string",
      "quantity": 0,
      "usage_date": "1970-01-01T00:00:00Z"
    }
  ]
}
```

Specifies the request information for the Batch Usages endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_usages|[[asset_usage](#schemaasset_usage)]|false|none|Identifies the list of asset id, usage count and date of usage combinations to record.|

<h2 id="tocS_report_usage_batch_response">report_usage_batch_response</h2>
<!-- backwards compatibility -->
<a id="schemareport_usage_batch_response"></a>
<a id="schema_report_usage_batch_response"></a>
<a id="tocSreport_usage_batch_response"></a>
<a id="tocsreport_usage_batch_response"></a>

```json
{
  "invalid_assets": [
    "string"
  ],
  "total_asset_usages_processed": 0
}
```

Specifies the response from the Batch Usages endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalid_assets|[string]|false|none|Identifies a list of asset ids submitted that did not match known Getty asset ids.|
|total_asset_usages_processed|integer(int32) \| null|false|none|Specifies the number of asset usage records that were successfully recorded.|
