<h1 id="idea-hub-api">Idea Hub API v1alpha</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an invitation-only API.

Base URLs:

* <a href="https://ideahub.googleapis.com/">https://ideahub.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://console.cloud.google.com/apis/library/ideahub.googleapis.com">External documentation</a>

<h1 id="idea-hub-api-ideas">ideas</h1>

## ideahub.ideas.list

<a id="opIdideahub.ideas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/ideas \
  -H 'Accept: application/json'
```

`GET /v1alpha/ideas`

List ideas for a given Creator and filter and sort options.

<h3 id="ideahubideaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.|
|orderBy|query|string|false|Order semantics described below.|
|pageSize|query|integer|false|The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.|
|pageToken|query|string|false|Used to fetch next page.|
|parent|query|string|false|If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}|
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
  "ideas": [
    {
      "name": "string",
      "text": "string",
      "topics": [
        {
          "displayName": "string",
          "mid": "string",
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="ideahubideaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSearchIdeahubV1alphaListIdeasResponse](#schemagooglesearchideahubv1alphalistideasresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="idea-hub-api-platforms">platforms</h1>

## ideahub.platforms.properties.topicStates.patch

<a id="opIdideahub.platforms.properties.topicStates.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "dismissed": true,
    "name": "string",
    "saved": true
  }'
```

`PATCH /v1alpha/{name}`

Update a topic state resource.

> Body parameter

```json
{
  "dismissed": true,
  "name": "string",
  "saved": true
}
```

<h3 id="ideahubplatformspropertiestopicstatespatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}|
|updateMask|query|string|false|The list of fields to be updated.|
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
|body|body|[GoogleSearchIdeahubV1alphaTopicState](#schemagooglesearchideahubv1alphatopicstate)|false|none|
|» dismissed|body|boolean|false|Whether the topic is dismissed.|
|» name|body|string|false|Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}|
|» saved|body|boolean|false|Whether the topic is saved.|

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
  "dismissed": true,
  "name": "string",
  "saved": true
}
```

<h3 id="ideahubplatformspropertiestopicstatespatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSearchIdeahubV1alphaTopicState](#schemagooglesearchideahubv1alphatopicstate)|

<aside class="success">
This operation does not require authentication
</aside>

## ideahub.platforms.properties.ideaActivities.create

<a id="opIdideahub.platforms.properties.ideaActivities.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string/ideaActivities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "ideas": [
      "string"
    ],
    "name": "string",
    "topics": [
      "string"
    ],
    "type": "TYPE_UNSPECIFIED",
    "uri": "string"
  }'
```

`POST /v1alpha/{parent}/ideaActivities`

Creates an idea activity entry.

> Body parameter

```json
{
  "ideas": [
    "string"
  ],
  "name": "string",
  "topics": [
    "string"
  ],
  "type": "TYPE_UNSPECIFIED",
  "uri": "string"
}
```

<h3 id="ideahubplatformspropertiesideaactivitiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource where this idea activity will be created. Format: platforms/{platform}/property/{property}|
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
|body|body|[GoogleSearchIdeahubV1alphaIdeaActivity](#schemagooglesearchideahubv1alphaideaactivity)|false|none|
|» ideas|body|[string]|false|The Idea IDs for this entry. If empty, topics should be set.|
|» name|body|string|false|Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity}|
|» topics|body|[string]|false|The Topic IDs for this entry. If empty, ideas should be set.|
|» type|body|string|false|The type of activity performed.|
|» uri|body|string|false|The uri the activity relates to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|TYPE_UNSPECIFIED|
|» type|POST_DRAFTED|
|» type|POST_PUBLISHED|
|» type|POST_DELETED|
|» type|POST_UNPUBLISHED|

> Example responses

> 200 Response

```json
{
  "ideas": [
    "string"
  ],
  "name": "string",
  "topics": [
    "string"
  ],
  "type": "TYPE_UNSPECIFIED",
  "uri": "string"
}
```

<h3 id="ideahubplatformspropertiesideaactivitiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSearchIdeahubV1alphaIdeaActivity](#schemagooglesearchideahubv1alphaideaactivity)|

<aside class="success">
This operation does not require authentication
</aside>

## ideahub.platforms.properties.ideas.list

<a id="opIdideahub.platforms.properties.ideas.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string/ideas \
  -H 'Accept: application/json'
```

`GET /v1alpha/{parent}/ideas`

List ideas for a given Creator and filter and sort options.

<h3 id="ideahubplatformspropertiesideaslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|If defined, specifies the creator for which to filter by. Format: publishers/{publisher}/properties/{property}|
|filter|query|string|false|Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions are implicitly combined, as if the `AND` operator was always used. The `OR` operator is currently unsupported. * Supported functions: - `saved(bool)`: If set to true, fetches only saved ideas. If set to false, fetches all except saved ideas. Can't be simultaneously used with `dismissed(bool)`. - `dismissed(bool)`: If set to true, fetches only dismissed ideas. Can't be simultaneously used with `saved(bool)`. The `false` value is currently unsupported. Examples: * `saved(true)` * `saved(false)` * `dismissed(true)` The length of this field should be no more than 500 characters.|
|orderBy|query|string|false|Order semantics described below.|
|pageSize|query|integer|false|The maximum number of ideas per page. If unspecified, at most 10 ideas will be returned. The maximum value is 2000; values above 2000 will be coerced to 2000.|
|pageToken|query|string|false|Used to fetch next page.|
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
  "ideas": [
    {
      "name": "string",
      "text": "string",
      "topics": [
        {
          "displayName": "string",
          "mid": "string",
          "name": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="ideahubplatformspropertiesideaslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSearchIdeahubV1alphaListIdeasResponse](#schemagooglesearchideahubv1alphalistideasresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## ideahub.platforms.properties.locales.list

<a id="opIdideahub.platforms.properties.locales.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string/locales \
  -H 'Accept: application/json'
```

`GET /v1alpha/{parent}/locales`

Returns which locales ideas are available in for a given Creator.

<h3 id="ideahubplatformspropertieslocaleslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The web property to check idea availability for Format: platforms/{platform}/property/{property}|
|pageSize|query|integer|false|The maximum number of locales to return. The service may return fewer than this value. If unspecified, at most 100 locales will be returned. The maximum value is 100; values above 100 will be coerced to 100.|
|pageToken|query|string|false|A page token, received from a previous `ListAvailableLocales` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAvailableLocales` must match the call that provided the page token.|
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
  "availableLocales": [
    {
      "locale": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="ideahubplatformspropertieslocaleslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleSearchIdeahubV1alphaListAvailableLocalesResponse](#schemagooglesearchideahubv1alphalistavailablelocalesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_GoogleSearchIdeahubV1alphaAvailableLocale">GoogleSearchIdeahubV1alphaAvailableLocale</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphaavailablelocale"></a>
<a id="schema_GoogleSearchIdeahubV1alphaAvailableLocale"></a>
<a id="tocSgooglesearchideahubv1alphaavailablelocale"></a>
<a id="tocsgooglesearchideahubv1alphaavailablelocale"></a>

```json
{
  "locale": "string",
  "name": "string"
}
```

Represents locales that are available for a web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locale|string|false|none|A string in BCP 47 format, without a resource prefix.|
|name|string|false|none|A string in BCP 47 format, prefixed with the platform and property name, and "locales/". Format: platforms/{platform}/properties/{property}/locales/{locale}|

<h2 id="tocS_GoogleSearchIdeahubV1alphaIdea">GoogleSearchIdeahubV1alphaIdea</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphaidea"></a>
<a id="schema_GoogleSearchIdeahubV1alphaIdea"></a>
<a id="tocSgooglesearchideahubv1alphaidea"></a>
<a id="tocsgooglesearchideahubv1alphaidea"></a>

```json
{
  "name": "string",
  "text": "string",
  "topics": [
    {
      "displayName": "string",
      "mid": "string",
      "name": "string"
    }
  ]
}
```

A single Idea that we want to show the end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Unique identifier for the idea. Format: ideas/{ideaId}|
|text|string|false|none|The idea’s text.|
|topics|[[GoogleSearchIdeahubV1alphaTopic](#schemagooglesearchideahubv1alphatopic)]|false|none|The Topics that match the idea.|

<h2 id="tocS_GoogleSearchIdeahubV1alphaIdeaActivity">GoogleSearchIdeahubV1alphaIdeaActivity</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphaideaactivity"></a>
<a id="schema_GoogleSearchIdeahubV1alphaIdeaActivity"></a>
<a id="tocSgooglesearchideahubv1alphaideaactivity"></a>
<a id="tocsgooglesearchideahubv1alphaideaactivity"></a>

```json
{
  "ideas": [
    "string"
  ],
  "name": "string",
  "topics": [
    "string"
  ],
  "type": "TYPE_UNSPECIFIED",
  "uri": "string"
}
```

An idea activity entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ideas|[string]|false|none|The Idea IDs for this entry. If empty, topics should be set.|
|name|string|false|none|Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity}|
|topics|[string]|false|none|The Topic IDs for this entry. If empty, ideas should be set.|
|type|string|false|none|The type of activity performed.|
|uri|string|false|none|The uri the activity relates to.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TYPE_UNSPECIFIED|
|type|POST_DRAFTED|
|type|POST_PUBLISHED|
|type|POST_DELETED|
|type|POST_UNPUBLISHED|

<h2 id="tocS_GoogleSearchIdeahubV1alphaIdeaState">GoogleSearchIdeahubV1alphaIdeaState</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphaideastate"></a>
<a id="schema_GoogleSearchIdeahubV1alphaIdeaState"></a>
<a id="tocSgooglesearchideahubv1alphaideastate"></a>
<a id="tocsgooglesearchideahubv1alphaideastate"></a>

```json
{
  "dismissed": true,
  "name": "string",
  "saved": true
}
```

Represents idea state specific to a web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dismissed|boolean|false|none|Whether the idea is dismissed.|
|name|string|false|none|Unique identifier for the idea state. Format: platforms/{platform}/properties/{property}/ideaStates/{idea_state}|
|saved|boolean|false|none|Whether the idea is saved.|

<h2 id="tocS_GoogleSearchIdeahubV1alphaListAvailableLocalesResponse">GoogleSearchIdeahubV1alphaListAvailableLocalesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphalistavailablelocalesresponse"></a>
<a id="schema_GoogleSearchIdeahubV1alphaListAvailableLocalesResponse"></a>
<a id="tocSgooglesearchideahubv1alphalistavailablelocalesresponse"></a>
<a id="tocsgooglesearchideahubv1alphalistavailablelocalesresponse"></a>

```json
{
  "availableLocales": [
    {
      "locale": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response for whether ideas are available for a given web property on a platform, for the currently logged-in user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableLocales|[[GoogleSearchIdeahubV1alphaAvailableLocale](#schemagooglesearchideahubv1alphaavailablelocale)]|false|none|Locales for which ideas are available for the given Creator.|
|nextPageToken|string|false|none|A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleSearchIdeahubV1alphaListIdeasResponse">GoogleSearchIdeahubV1alphaListIdeasResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphalistideasresponse"></a>
<a id="schema_GoogleSearchIdeahubV1alphaListIdeasResponse"></a>
<a id="tocSgooglesearchideahubv1alphalistideasresponse"></a>
<a id="tocsgooglesearchideahubv1alphalistideasresponse"></a>

```json
{
  "ideas": [
    {
      "name": "string",
      "text": "string",
      "topics": [
        {
          "displayName": "string",
          "mid": "string",
          "name": "string"
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
|ideas|[[GoogleSearchIdeahubV1alphaIdea](#schemagooglesearchideahubv1alphaidea)]|false|none|Results for the ListIdeasRequest.|
|nextPageToken|string|false|none|Used to fetch the next page in a subsequent request.|

<h2 id="tocS_GoogleSearchIdeahubV1alphaTopic">GoogleSearchIdeahubV1alphaTopic</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphatopic"></a>
<a id="schema_GoogleSearchIdeahubV1alphaTopic"></a>
<a id="tocSgooglesearchideahubv1alphatopic"></a>
<a id="tocsgooglesearchideahubv1alphatopic"></a>

```json
{
  "displayName": "string",
  "mid": "string",
  "name": "string"
}
```

Represents a Topic umbrella for a list of questions that a Creator may want to respond to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|String displayed to the creator indicating the name of the Topic.|
|mid|string|false|none|The mID of the topic.|
|name|string|false|none|Unique identifier for the topic. Format: topics/{topic}|

<h2 id="tocS_GoogleSearchIdeahubV1alphaTopicState">GoogleSearchIdeahubV1alphaTopicState</h2>
<!-- backwards compatibility -->
<a id="schemagooglesearchideahubv1alphatopicstate"></a>
<a id="schema_GoogleSearchIdeahubV1alphaTopicState"></a>
<a id="tocSgooglesearchideahubv1alphatopicstate"></a>
<a id="tocsgooglesearchideahubv1alphatopicstate"></a>

```json
{
  "dismissed": true,
  "name": "string",
  "saved": true
}
```

Represents topic state specific to a web property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dismissed|boolean|false|none|Whether the topic is dismissed.|
|name|string|false|none|Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}|
|saved|boolean|false|none|Whether the topic is saved.|
