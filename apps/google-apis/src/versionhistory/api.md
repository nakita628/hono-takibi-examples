<h1 id="versionhistorygoogleapiscom-api">versionhistory.googleapis.com API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Version History API - Prod

Base URLs:

* <a href="https://versionhistory.googleapis.com/">https://versionhistory.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.chrome.com/versionhistory">External documentation</a>

<h1 id="versionhistorygoogleapiscom-api-platforms">platforms</h1>

## versionhistory.platforms.channels.list

<a id="opIdversionhistory.platforms.channels.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/channels \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/channels`

Returns list of channels that are available for a given platform.

<h3 id="versionhistoryplatformschannelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The platform, which owns this collection of channels. Format: {product}/platforms/{platform}|
|pageSize|query|integer|false|Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.|
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
  "channels": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="versionhistoryplatformschannelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListChannelsResponse](#schemalistchannelsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## versionhistory.platforms.list

<a id="opIdversionhistory.platforms.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/platforms \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/platforms`

Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

<h3 id="versionhistoryplatformslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The product, which owns this collection of platforms. Format: {product}|
|pageSize|query|integer|false|Optional. Optional limit on the number of channels to include in the response. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListChannels` call. Provide this to retrieve the subsequent page.|
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
  "platforms": [
    {
      "name": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="versionhistoryplatformslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPlatformsResponse](#schemalistplatformsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## versionhistory.platforms.channels.versions.releases.list

<a id="opIdversionhistory.platforms.channels.versions.releases.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/releases \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/releases`

Returns list of releases of the given version.

<h3 id="versionhistoryplatformschannelsversionsreleaseslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The version, which owns this collection of releases. Format: {product}/platforms/{platform}/channels/{channel}/versions/{version}|
|filter|query|string|false|Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", "channel", "fraction" "starttime", and "endtime". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. must be a valid channel when filtering by channel. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. Ex) 1.0.0.8 < 1.0.0.10. If version is not entirely written, the version will be appended with 0 for the missing fields. Ex) version > 80 becoms version > 80.0.0.0 When filtering by starttime or endtime, string must be in RFC 3339 date string format. Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81 Ex) "...?filter=starttime>2020-01-01T00:00:00Z|
|orderBy|query|string|false|Optional. Ordering string. Valid order_by strings are "version", "name", "starttime", "endtime", "platform", "channel", and "fraction". Optionally, you can append "desc" or "asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by starttime in descending order. Ex) "...?order_by=starttime asc" Ex) "...?order_by=platform desc, channel, startime desc"|
|pageSize|query|integer|false|Optional. Optional limit on the number of releases to include in the response. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page.|
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
  "releases": [
    {
      "fraction": 0,
      "fractionGroup": "string",
      "name": "string",
      "serving": {
        "endTime": "string",
        "startTime": "string"
      },
      "version": "string"
    }
  ]
}
```

<h3 id="versionhistoryplatformschannelsversionsreleaseslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListReleasesResponse](#schemalistreleasesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## versionhistory.platforms.channels.versions.list

<a id="opIdversionhistory.platforms.channels.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/versions \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/versions`

Returns list of version for the given platform/channel.

<h3 id="versionhistoryplatformschannelsversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The channel, which owns this collection of versions. Format: {product}/platforms/{platform}/channels/{channel}|
|filter|query|string|false|Optional. Filter string. Format is a comma separated list of All comma separated filter clauses are conjoined with a logical "and". Valid field_names are "version", "name", "platform", and "channel". Valid operators are "<", "<=", "=", ">=", and ">". Channel comparison is done by distance from stable. Ex) stable < beta, beta < dev, canary < canary_asan. Version comparison is done numerically. If version is not entirely written, the version will be appended with 0 in missing fields. Ex) version > 80 becoms version > 80.0.0.0 Name and platform are filtered by string comparison. Ex) "...?filter=channel<=beta, version >= 80 Ex) "...?filter=version > 80, version < 81|
|orderBy|query|string|false|Optional. Ordering string. Valid order_by strings are "version", "name", "platform", and "channel". Optionally, you can append " desc" or " asc" to specify the sorting order. Multiple order_by strings can be used in a comma separated list. Ordering by channel will sort by distance from the stable channel (not alphabetically). A list of channels sorted in this order is: stable, beta, dev, canary, and canary_asan. Sorting by name may cause unexpected behaviour as it is a naive string sort. For example, 1.0.0.8 will be before 1.0.0.10 in descending order. If order_by is not specified the response will be sorted by version in descending order. Ex) "...?order_by=version asc" Ex) "...?order_by=platform desc, channel, version"|
|pageSize|query|integer|false|Optional. Optional limit on the number of versions to include in the response. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page.|
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
  "versions": [
    {
      "name": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="versionhistoryplatformschannelsversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListVersionsResponse](#schemalistversionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
{
  "channelType": "CHANNEL_TYPE_UNSPECIFIED",
  "name": "string"
}
```

Each Channel is owned by a Platform and owns a collection of versions. Possible Channels are listed in the Channel enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channelType|string|false|none|Type of channel.|
|name|string|false|none|Channel name. Format is "{product}/platforms/{platform}/channels/{channel}"|

#### Enumerated Values

|Property|Value|
|---|---|
|channelType|CHANNEL_TYPE_UNSPECIFIED|
|channelType|STABLE|
|channelType|BETA|
|channelType|DEV|
|channelType|CANARY|
|channelType|CANARY_ASAN|
|channelType|ALL|
|channelType|EXTENDED|

<h2 id="tocS_Interval">Interval</h2>
<!-- backwards compatibility -->
<a id="schemainterval"></a>
<a id="schema_Interval"></a>
<a id="tocSinterval"></a>
<a id="tocsinterval"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.|
|startTime|string(google-datetime)|false|none|Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.|

<h2 id="tocS_ListChannelsResponse">ListChannelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistchannelsresponse"></a>
<a id="schema_ListChannelsResponse"></a>
<a id="tocSlistchannelsresponse"></a>
<a id="tocslistchannelsresponse"></a>

```json
{
  "channels": [
    {
      "channelType": "CHANNEL_TYPE_UNSPECIFIED",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListChannels.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|channels|[[Channel](#schemachannel)]|false|none|The list of channels.|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_ListPlatformsResponse">ListPlatformsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistplatformsresponse"></a>
<a id="schema_ListPlatformsResponse"></a>
<a id="tocSlistplatformsresponse"></a>
<a id="tocslistplatformsresponse"></a>

```json
{
  "nextPageToken": "string",
  "platforms": [
    {
      "name": "string",
      "platformType": "PLATFORM_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for ListPlatforms.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|platforms|[[Platform](#schemaplatform)]|false|none|The list of platforms.|

<h2 id="tocS_ListReleasesResponse">ListReleasesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistreleasesresponse"></a>
<a id="schema_ListReleasesResponse"></a>
<a id="tocSlistreleasesresponse"></a>
<a id="tocslistreleasesresponse"></a>

```json
{
  "nextPageToken": "string",
  "releases": [
    {
      "fraction": 0,
      "fractionGroup": "string",
      "name": "string",
      "serving": {
        "endTime": "string",
        "startTime": "string"
      },
      "version": "string"
    }
  ]
}
```

Response message for ListReleases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|releases|[[Release](#schemarelease)]|false|none|The list of releases.|

<h2 id="tocS_ListVersionsResponse">ListVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistversionsresponse"></a>
<a id="schema_ListVersionsResponse"></a>
<a id="tocSlistversionsresponse"></a>
<a id="tocslistversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "versions": [
    {
      "name": "string",
      "version": "string"
    }
  ]
}
```

Response message for ListVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|versions|[[Version](#schemaversion)]|false|none|The list of versions.|

<h2 id="tocS_Platform">Platform</h2>
<!-- backwards compatibility -->
<a id="schemaplatform"></a>
<a id="schema_Platform"></a>
<a id="tocSplatform"></a>
<a id="tocsplatform"></a>

```json
{
  "name": "string",
  "platformType": "PLATFORM_TYPE_UNSPECIFIED"
}
```

Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Platform name. Format is "{product}/platforms/{platform}"|
|platformType|string|false|none|Type of platform.|

#### Enumerated Values

|Property|Value|
|---|---|
|platformType|PLATFORM_TYPE_UNSPECIFIED|
|platformType|WIN|
|platformType|WIN64|
|platformType|MAC|
|platformType|LINUX|
|platformType|ANDROID|
|platformType|WEBVIEW|
|platformType|IOS|
|platformType|ALL|
|platformType|MAC_ARM64|
|platformType|LACROS|
|platformType|LACROS_ARM32|
|platformType|CHROMEOS|
|platformType|LACROS_ARM64|
|platformType|FUCHSIA|

<h2 id="tocS_Release">Release</h2>
<!-- backwards compatibility -->
<a id="schemarelease"></a>
<a id="schema_Release"></a>
<a id="tocSrelease"></a>
<a id="tocsrelease"></a>

```json
{
  "fraction": 0,
  "fractionGroup": "string",
  "name": "string",
  "serving": {
    "endTime": "string",
    "startTime": "string"
  },
  "version": "string"
}
```

A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fraction|number(double)|false|none|Rollout fraction. This fraction indicates the fraction of people that should receive this version in this release. If the fraction is not specified in ReleaseManager, the API will assume fraction is 1.|
|fractionGroup|string(int64)|false|none|Rollout fraction group. Only fractions with the same fraction_group are statistically comparable: there may be non-fractional differences between different fraction groups.|
|name|string|false|none|Release name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}/releases/{release}"|
|serving|[Interval](#schemainterval)|false|none|Timestamp interval of when the release was live. If end_time is unspecified, the release is currently live.|
|version|string|false|none|String containing just the version number. e.g. "84.0.4147.38"|

<h2 id="tocS_Version">Version</h2>
<!-- backwards compatibility -->
<a id="schemaversion"></a>
<a id="schema_Version"></a>
<a id="tocSversion"></a>
<a id="tocsversion"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

Each Version is owned by a Channel. A Version only displays the Version number (e.g. 84.0.4147.38). A Version owns a collection of releases.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Version name. Format is "{product}/platforms/{platform}/channels/{channel}/versions/{version}" e.g. "chrome/platforms/win/channels/beta/versions/84.0.4147.38"|
|version|string|false|none|String containing just the version number. e.g. "84.0.4147.38"|
