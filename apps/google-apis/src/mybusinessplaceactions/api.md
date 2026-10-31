<h1 id="my-business-place-actions-api">My Business Place Actions API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Place Actions API provides an interface for managing place action links of a location on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessplaceactions.googleapis.com/">https://mybusinessplaceactions.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-place-actions-api-locations">locations</h1>

## mybusinessplaceactions.locations.placeActionLinks.get

<a id="opIdmybusinessplaceactions.locations.placeActionLinks.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets the specified place action link.

<h3 id="mybusinessplaceactionslocationsplaceactionlinksget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the place action link to fetch.|
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
  "createTime": "string",
  "isEditable": true,
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "providerType": "PROVIDER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "uri": "string"
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinksget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaceActionLink](#schemaplaceactionlink)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessplaceactions.locations.placeActionLinks.delete

<a id="opIdmybusinessplaceactions.locations.placeActionLinks.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes a place action link from the specified location.

<h3 id="mybusinessplaceactionslocationsplaceactionlinksdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the place action link to remove from the location.|
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

<h3 id="mybusinessplaceactionslocationsplaceactionlinksdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessplaceactions.locations.placeActionLinks.patch

<a id="opIdmybusinessplaceactions.locations.placeActionLinks.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "isPreferred": true,
    "name": "string",
    "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
    "uri": "string"
  }'
```

`PATCH /v1/{name}`

Updates the specified place action link and returns it.

> Body parameter

```json
{
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "uri": "string"
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinkspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.|
|updateMask|query|string|false|Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error.|
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
|body|body|[PlaceActionLink](#schemaplaceactionlink)|false|none|
|» isPreferred|body|boolean|false|Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.|
|» name|body|string|false|Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.|
|» placeActionType|body|string|false|Required. The type of place action that can be performed using this link.|
|» uri|body|string|false|Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» placeActionType|PLACE_ACTION_TYPE_UNSPECIFIED|
|» placeActionType|APPOINTMENT|
|» placeActionType|ONLINE_APPOINTMENT|
|» placeActionType|DINING_RESERVATION|
|» placeActionType|FOOD_ORDERING|
|» placeActionType|FOOD_DELIVERY|
|» placeActionType|FOOD_TAKEOUT|
|» placeActionType|SHOP_ONLINE|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "isEditable": true,
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "providerType": "PROVIDER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "uri": "string"
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinkspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaceActionLink](#schemaplaceactionlink)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessplaceactions.locations.placeActionLinks.list

<a id="opIdmybusinessplaceactions.locations.placeActionLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/placeActionLinks \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/placeActionLinks`

Lists the place action links for the specified location.

<h3 id="mybusinessplaceactionslocationsplaceactionlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location whose place action links will be listed. `locations/{location_id}`.|
|filter|query|string|false|Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType.|
|pageSize|query|integer|false|Optional. How many place action links to return per page. Default of 10. The minimum is 1.|
|pageToken|query|string|false|Optional. If specified, returns the next page of place action links.|
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
  "placeActionLinks": [
    {
      "createTime": "string",
      "isEditable": true,
      "isPreferred": true,
      "name": "string",
      "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
      "providerType": "PROVIDER_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "uri": "string"
    }
  ]
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPlaceActionLinksResponse](#schemalistplaceactionlinksresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessplaceactions.locations.placeActionLinks.create

<a id="opIdmybusinessplaceactions.locations.placeActionLinks.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/placeActionLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "isPreferred": true,
    "name": "string",
    "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
    "uri": "string"
  }'
```

`POST /v1/{parent}/placeActionLinks`

Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.

> Body parameter

```json
{
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "uri": "string"
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinkscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location where to create this place action link. `locations/{location_id}`.|
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
|body|body|[PlaceActionLink](#schemaplaceactionlink)|false|none|
|» isPreferred|body|boolean|false|Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.|
|» name|body|string|false|Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.|
|» placeActionType|body|string|false|Required. The type of place action that can be performed using this link.|
|» uri|body|string|false|Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» placeActionType|PLACE_ACTION_TYPE_UNSPECIFIED|
|» placeActionType|APPOINTMENT|
|» placeActionType|ONLINE_APPOINTMENT|
|» placeActionType|DINING_RESERVATION|
|» placeActionType|FOOD_ORDERING|
|» placeActionType|FOOD_DELIVERY|
|» placeActionType|FOOD_TAKEOUT|
|» placeActionType|SHOP_ONLINE|

> Example responses

> 200 Response

```json
{
  "createTime": "string",
  "isEditable": true,
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "providerType": "PROVIDER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "uri": "string"
}
```

<h3 id="mybusinessplaceactionslocationsplaceactionlinkscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PlaceActionLink](#schemaplaceactionlink)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-place-actions-api-placeactiontypemetadata">placeActionTypeMetadata</h1>

## mybusinessplaceactions.placeActionTypeMetadata.list

<a id="opIdmybusinessplaceactions.placeActionTypeMetadata.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/placeActionTypeMetadata \
  -H 'Accept: application/json'
```

`GET /v1/placeActionTypeMetadata`

Returns the list of available place action types for a location or country.

<h3 id="mybusinessplaceactionsplaceactiontypemetadatalist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned.|
|languageCode|query|string|false|Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English.|
|pageSize|query|integer|false|Optional. How many action types to include per page. Default is 10, minimum is 1.|
|pageToken|query|string|false|Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size.|
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
  "placeActionTypeMetadata": [
    {
      "displayName": "string",
      "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessplaceactionsplaceactiontypemetadatalist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPlaceActionTypeMetadataResponse](#schemalistplaceactiontypemetadataresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

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

<h2 id="tocS_ListPlaceActionLinksResponse">ListPlaceActionLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceactionlinksresponse"></a>
<a id="schema_ListPlaceActionLinksResponse"></a>
<a id="tocSlistplaceactionlinksresponse"></a>
<a id="tocslistplaceactionlinksresponse"></a>

```json
{
  "nextPageToken": "string",
  "placeActionLinks": [
    {
      "createTime": "string",
      "isEditable": true,
      "isPreferred": true,
      "name": "string",
      "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
      "providerType": "PROVIDER_TYPE_UNSPECIFIED",
      "updateTime": "string",
      "uri": "string"
    }
  ]
}
```

Response message for PlaceActions.ListPlaceActionLinks.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If there are more place action links than the requested page size, then this field is populated with a token to fetch the next page of results.|
|placeActionLinks|[[PlaceActionLink](#schemaplaceactionlink)]|false|none|The returned list of place action links.|

<h2 id="tocS_ListPlaceActionTypeMetadataResponse">ListPlaceActionTypeMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplaceactiontypemetadataresponse"></a>
<a id="schema_ListPlaceActionTypeMetadataResponse"></a>
<a id="tocSlistplaceactiontypemetadataresponse"></a>
<a id="tocslistplaceactiontypemetadataresponse"></a>

```json
{
  "nextPageToken": "string",
  "placeActionTypeMetadata": [
    {
      "displayName": "string",
      "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for PlaceActions.ListPlaceActionTypeMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|If the number of action types exceeded the requested page size, this field will be populated with a token to fetch the next page on a subsequent call to `placeActionTypeMetadata.list`. If there are no more results, this field will not be present in the response.|
|placeActionTypeMetadata|[[PlaceActionTypeMetadata](#schemaplaceactiontypemetadata)]|false|none|A collection of metadata for the available place action types.|

<h2 id="tocS_PlaceActionLink">PlaceActionLink</h2>
<!-- backwards compatibility -->
<a id="schemaplaceactionlink"></a>
<a id="schema_PlaceActionLink"></a>
<a id="tocSplaceactionlink"></a>
<a id="tocsplaceactionlink"></a>

```json
{
  "createTime": "string",
  "isEditable": true,
  "isPreferred": true,
  "name": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED",
  "providerType": "PROVIDER_TYPE_UNSPECIFIED",
  "updateTime": "string",
  "uri": "string"
}
```

Represents a place action link and its attributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The time when the place action link was created.|
|isEditable|boolean|false|read-only|Output only. Indicates whether this link can be edited by the client.|
|isPreferred|boolean|false|none|Optional. Whether this link is preferred by the merchant. Only one link can be marked as preferred per place action type at a location. If a future request marks a different link as preferred for the same place action type, then the current preferred link (if any exists) will lose its preference.|
|name|string|false|none|Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response.|
|placeActionType|string|false|none|Required. The type of place action that can be performed using this link.|
|providerType|string|false|read-only|Output only. Specifies the provider type.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the place action link was last modified.|
|uri|string|false|none|Required. The link uri. The same uri can be reused for different action types across different locations. However, only one place action link is allowed for each unique combination of (uri, place action type, location).|

#### Enumerated Values

|Property|Value|
|---|---|
|placeActionType|PLACE_ACTION_TYPE_UNSPECIFIED|
|placeActionType|APPOINTMENT|
|placeActionType|ONLINE_APPOINTMENT|
|placeActionType|DINING_RESERVATION|
|placeActionType|FOOD_ORDERING|
|placeActionType|FOOD_DELIVERY|
|placeActionType|FOOD_TAKEOUT|
|placeActionType|SHOP_ONLINE|
|providerType|PROVIDER_TYPE_UNSPECIFIED|
|providerType|MERCHANT|
|providerType|AGGREGATOR_3P|

<h2 id="tocS_PlaceActionTypeMetadata">PlaceActionTypeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaplaceactiontypemetadata"></a>
<a id="schema_PlaceActionTypeMetadata"></a>
<a id="tocSplaceactiontypemetadata"></a>
<a id="tocsplaceactiontypemetadata"></a>

```json
{
  "displayName": "string",
  "placeActionType": "PLACE_ACTION_TYPE_UNSPECIFIED"
}
```

Metadata for supported place action types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The localized display name for the attribute, if available; otherwise, the English display name.|
|placeActionType|string|false|none|The place action type.|

#### Enumerated Values

|Property|Value|
|---|---|
|placeActionType|PLACE_ACTION_TYPE_UNSPECIFIED|
|placeActionType|APPOINTMENT|
|placeActionType|ONLINE_APPOINTMENT|
|placeActionType|DINING_RESERVATION|
|placeActionType|FOOD_ORDERING|
|placeActionType|FOOD_DELIVERY|
|placeActionType|FOOD_TAKEOUT|
|placeActionType|SHOP_ONLINE|
