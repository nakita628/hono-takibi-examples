<h1 id="nba-v3-rotoballer-articles">NBA v3 RotoBaller Articles v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="http://azure-api.sportsdata.io/v3/nba/articles-rotoballer">http://azure-api.sportsdata.io/v3/nba/articles-rotoballer</a>

* <a href="https://azure-api.sportsdata.io/v3/nba/articles-rotoballer">https://azure-api.sportsdata.io/v3/nba/articles-rotoballer</a>

# Authentication

* API Key (apiKeyHeader)
    - Parameter Name: **Ocp-Apim-Subscription-Key**, in: header.

* API Key (apiKeyQuery)
    - Parameter Name: **key**, in: query.

<h1 id="nba-v3-rotoballer-articles-default">Default</h1>

## RotoBaller Articles

<a id="opIdRotoballerArticles"></a>

> Code samples

```bash
curl https://example.com/xml/RotoBallerArticles \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/RotoBallerArticles`

<h3 id="rotoballer-articles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "ArticleID": 0,
    "Author": "string",
    "Content": "string",
    "Players": [
      {
        "Name": "string",
        "PlayerID": 0,
        "Position": "string",
        "Team": "string",
        "TeamID": 0
      }
    ],
    "Source": "string",
    "TermsOfUse": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="rotoballer-articles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="rotoballer-articles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## RotoBaller Articles by Date

<a id="opIdRotoballerArticlesByDate"></a>

> Code samples

```bash
curl https://example.com/xml/RotoBallerArticlesByDate/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/RotoBallerArticlesByDate/{date}`

<h3 id="rotoballer-articles-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|date|path|string|true|The date of the news.<br><br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "ArticleID": 0,
    "Author": "string",
    "Content": "string",
    "Players": [
      {
        "Name": "string",
        "PlayerID": 0,
        "Position": "string",
        "Team": "string",
        "TeamID": 0
      }
    ],
    "Source": "string",
    "TermsOfUse": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="rotoballer-articles-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="rotoballer-articles-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

## RotoBaller Articles by Player

<a id="opIdRotoballerArticlesByPlayer"></a>

> Code samples

```bash
curl https://example.com/xml/RotoBallerArticlesByPlayerID/string \
  -H 'Accept: application/json' \
  -H "Ocp-Apim-Subscription-Key: ${API_KEY}"
```

`GET /{format}/RotoBallerArticlesByPlayerID/{playerid}`

<h3 id="rotoballer-articles-by-player-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|format|path|string|true|Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.|
|playerid|path|string|true|Unique FantasyData Player ID.<br>Example:<code>10000507</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|xml|
|format|json|

> Example responses

> 200 Response

```json
[
  {
    "ArticleID": 0,
    "Author": "string",
    "Content": "string",
    "Players": [
      {
        "Name": "string",
        "PlayerID": 0,
        "Position": "string",
        "Team": "string",
        "TeamID": 0
      }
    ],
    "Source": "string",
    "TermsOfUse": "string",
    "Title": "string",
    "Updated": "string",
    "Url": "string"
  }
]
```

<h3 id="rotoballer-articles-by-player-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="rotoballer-articles-by-player-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Article](#schemaarticle)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
apiKeyHeader, apiKeyQuery
</aside>

# Schemas

<h2 id="tocS_Article">Article</h2>
<!-- backwards compatibility -->
<a id="schemaarticle"></a>
<a id="schema_Article"></a>
<a id="tocSarticle"></a>
<a id="tocsarticle"></a>

```json
{
  "ArticleID": 0,
  "Author": "string",
  "Content": "string",
  "Players": [
    {
      "Name": "string",
      "PlayerID": 0,
      "Position": "string",
      "Team": "string",
      "TeamID": 0
    }
  ],
  "Source": "string",
  "TermsOfUse": "string",
  "Title": "string",
  "Updated": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ArticleID|integer|false|none|none|
|Author|string \| null|false|none|none|
|Content|string \| null|false|none|none|
|Players|[[PlayerInfo](#schemaplayerinfo)]|false|none|none|
|Source|string \| null|false|none|none|
|TermsOfUse|string \| null|false|none|none|
|Title|string \| null|false|none|none|
|Updated|string \| null|false|none|none|
|Url|string \| null|false|none|none|

<h2 id="tocS_PlayerInfo">PlayerInfo</h2>
<!-- backwards compatibility -->
<a id="schemaplayerinfo"></a>
<a id="schema_PlayerInfo"></a>
<a id="tocSplayerinfo"></a>
<a id="tocsplayerinfo"></a>

```json
{
  "Name": "string",
  "PlayerID": 0,
  "Position": "string",
  "Team": "string",
  "TeamID": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string \| null|false|none|none|
|PlayerID|integer|false|none|none|
|Position|string \| null|false|none|none|
|Team|string \| null|false|none|none|
|TeamID|integer \| null|false|none|none|
