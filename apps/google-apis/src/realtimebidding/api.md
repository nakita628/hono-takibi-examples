<h1 id="real-time-bidding-api">Real-time Bidding API v1alpha</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Allows external bidders to manage their RTB integration with Google. This includes managing bidder endpoints, QPS quotas, configuring what ad inventory to receive via pretargeting, submitting creatives for verification, and accessing creative metadata such as approval status.

Base URLs:

* <a href="https://realtimebidding.googleapis.com/">https://realtimebidding.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/authorized-buyers/apis/realtimebidding/reference/rest/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/realtime-bidding|See, create, edit, and delete your Authorized Buyers and Open Bidding account entities|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/realtime-bidding|See, create, edit, and delete your Authorized Buyers and Open Bidding account entities|

<h1 id="real-time-bidding-api-bidders">bidders</h1>

## realtimebidding.bidders.biddingFunctions.activate

<a id="opIdrealtimebidding.bidders.biddingFunctions.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string:activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha/{name}:activate`

Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.

> Body parameter

```json
{}
```

<h3 id="realtimebiddingbiddersbiddingfunctionsactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the bidding function to activate. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`|
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
|body|body|[ActivateBiddingFunctionRequest](#schemaactivatebiddingfunctionrequest)|false|none|

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
  "biddingFunction": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "FUNCTION_TYPE_UNSPECIFIED"
}
```

<h3 id="realtimebiddingbiddersbiddingfunctionsactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BiddingFunction](#schemabiddingfunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/realtime-bidding ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/realtime-bidding )
</aside>

## realtimebidding.bidders.biddingFunctions.archive

<a id="opIdrealtimebidding.bidders.biddingFunctions.archive"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string:archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1alpha/{name}:archive`

Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.

> Body parameter

```json
{}
```

<h3 id="realtimebiddingbiddersbiddingfunctionsarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the bidding function to archive. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`|
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
|body|body|[ArchiveBiddingFunctionRequest](#schemaarchivebiddingfunctionrequest)|false|none|

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
  "biddingFunction": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "FUNCTION_TYPE_UNSPECIFIED"
}
```

<h3 id="realtimebiddingbiddersbiddingfunctionsarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BiddingFunction](#schemabiddingfunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/realtime-bidding ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/realtime-bidding )
</aside>

## realtimebidding.bidders.biddingFunctions.list

<a id="opIdrealtimebidding.bidders.biddingFunctions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string/biddingFunctions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1alpha/{parent}/biddingFunctions`

Lists the bidding functions that a bidder currently has registered.

<h3 id="realtimebiddingbiddersbiddingfunctionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Name of the bidder whose bidding functions will be listed. Format: `bidders/{bidder_account_id}`|
|pageSize|query|integer|false|The maximum number of bidding functions to return.|
|pageToken|query|string|false|A token identifying a page of results the server should return. This value is received from a previous `ListBiddingFunctions` call in ListBiddingFunctionsResponse.nextPageToken.|
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
  "biddingFunctions": [
    {
      "biddingFunction": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "FUNCTION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="realtimebiddingbiddersbiddingfunctionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBiddingFunctionsResponse](#schemalistbiddingfunctionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/realtime-bidding ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/realtime-bidding )
</aside>

## realtimebidding.bidders.biddingFunctions.create

<a id="opIdrealtimebidding.bidders.biddingFunctions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1alpha/string/biddingFunctions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "biddingFunction": "string",
    "name": "string",
    "type": "FUNCTION_TYPE_UNSPECIFIED"
  }'
```

`POST /v1alpha/{parent}/biddingFunctions`

Creates a new bidding function.

> Body parameter

```json
{
  "biddingFunction": "string",
  "name": "string",
  "type": "FUNCTION_TYPE_UNSPECIFIED"
}
```

<h3 id="realtimebiddingbiddersbiddingfunctionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the bidder for which to create the bidding function. Format: `bidders/{bidderAccountId}`|
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
|body|body|[BiddingFunction](#schemabiddingfunction)|false|none|
|» biddingFunction|body|string|false|The raw Javascript source code of the bidding function.|
|» name|body|string|false|The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`.|
|» type|body|string|false|The type of the bidding function to be created.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|FUNCTION_TYPE_UNSPECIFIED|
|» type|TURTLEDOVE_SIMULATION_BIDDING_FUNCTION|
|» type|FLEDGE_BIDDING_FUNCTION|

> Example responses

> 200 Response

```json
{
  "biddingFunction": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "FUNCTION_TYPE_UNSPECIFIED"
}
```

<h3 id="realtimebiddingbiddersbiddingfunctionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BiddingFunction](#schemabiddingfunction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/realtime-bidding ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/realtime-bidding )
</aside>

# Schemas

<h2 id="tocS_ActivateBiddingFunctionRequest">ActivateBiddingFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaactivatebiddingfunctionrequest"></a>
<a id="schema_ActivateBiddingFunctionRequest"></a>
<a id="tocSactivatebiddingfunctionrequest"></a>
<a id="tocsactivatebiddingfunctionrequest"></a>

```json
{}
```

The request to activate a bidding function.

<h2 id="tocS_ArchiveBiddingFunctionRequest">ArchiveBiddingFunctionRequest</h2>
<!-- backwards compatibility -->
<a id="schemaarchivebiddingfunctionrequest"></a>
<a id="schema_ArchiveBiddingFunctionRequest"></a>
<a id="tocSarchivebiddingfunctionrequest"></a>
<a id="tocsarchivebiddingfunctionrequest"></a>

```json
{}
```

A request to archive a bidding function.

<h2 id="tocS_BiddingFunction">BiddingFunction</h2>
<!-- backwards compatibility -->
<a id="schemabiddingfunction"></a>
<a id="schema_BiddingFunction"></a>
<a id="tocSbiddingfunction"></a>
<a id="tocsbiddingfunction"></a>

```json
{
  "biddingFunction": "string",
  "name": "string",
  "state": "STATE_UNSPECIFIED",
  "type": "FUNCTION_TYPE_UNSPECIFIED"
}
```

The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|biddingFunction|string|false|none|The raw Javascript source code of the bidding function.|
|name|string|false|none|The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`.|
|state|string|false|read-only|Output only. The state of the bidding function.|
|type|string|false|none|The type of the bidding function to be created.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|ACTIVE|
|state|ARCHIVED|
|type|FUNCTION_TYPE_UNSPECIFIED|
|type|TURTLEDOVE_SIMULATION_BIDDING_FUNCTION|
|type|FLEDGE_BIDDING_FUNCTION|

<h2 id="tocS_ListBiddingFunctionsResponse">ListBiddingFunctionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbiddingfunctionsresponse"></a>
<a id="schema_ListBiddingFunctionsResponse"></a>
<a id="tocSlistbiddingfunctionsresponse"></a>
<a id="tocslistbiddingfunctionsresponse"></a>

```json
{
  "biddingFunctions": [
    {
      "biddingFunction": "string",
      "name": "string",
      "state": "STATE_UNSPECIFIED",
      "type": "FUNCTION_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

A response containing a list of a bidder's bidding functions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|biddingFunctions|[[BiddingFunction](#schemabiddingfunction)]|false|none|A list of a bidder's bidding functions.|
|nextPageToken|string|false|none|A token which can be passed to a subsequent call to the `ListBiddingFunctions` method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken.|
