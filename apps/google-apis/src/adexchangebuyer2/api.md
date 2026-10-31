<h1 id="ad-exchange-buyer-api-ii">Ad Exchange Buyer API II v2beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses the latest features for managing Authorized Buyers accounts, Real-Time Bidding configurations and auction metrics, and Marketplace programmatic deals.

Base URLs:

* <a href="https://adexchangebuyer.googleapis.com/">https://adexchangebuyer.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/authorized-buyers/apis/reference/rest/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adexchange.buyer|Manage your Ad Exchange buyer account configuration|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/adexchange.buyer|Manage your Ad Exchange buyer account configuration|

<h1 id="ad-exchange-buyer-api-ii-accounts">accounts</h1>

## adexchangebuyer2.accounts.clients.list

<a id="opIdadexchangebuyer2.accounts.clients.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients`

Lists all the clients for the current sponsor buyer.

<h3 id="adexchangebuyer2accountsclientslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Unique numerical account ID of the sponsor buyer to list the clients for.|
|pageSize|query|integer|false|Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.|
|partnerClientId|query|string|false|Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.|
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
  "clients": [
    {
      "clientAccountId": "string",
      "clientName": "string",
      "entityId": "string",
      "entityName": "string",
      "entityType": "ENTITY_TYPE_UNSPECIFIED",
      "partnerClientId": "string",
      "role": "CLIENT_ROLE_UNSPECIFIED",
      "status": "CLIENT_STATUS_UNSPECIFIED",
      "visibleToSeller": true
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2accountsclientslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientsResponse](#schemalistclientsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.create

<a id="opIdadexchangebuyer2.accounts.clients.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientAccountId": "string",
    "clientName": "string",
    "entityId": "string",
    "entityName": "string",
    "entityType": "ENTITY_TYPE_UNSPECIFIED",
    "partnerClientId": "string",
    "role": "CLIENT_ROLE_UNSPECIFIED",
    "status": "CLIENT_STATUS_UNSPECIFIED",
    "visibleToSeller": true
  }'
```

`POST /v2beta1/accounts/{accountId}/clients`

Creates a new client buyer.

> Body parameter

```json
{
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

<h3 id="adexchangebuyer2accountsclientscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)|
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
|body|body|[Client](#schemaclient)|false|none|
|» clientAccountId|body|string(int64)|false|The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.|
|» clientName|body|string|false|Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed.|
|» entityId|body|string(int64)|false|Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.|
|» entityName|body|string|false|The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.|
|» entityType|body|string|false|An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.|
|» partnerClientId|body|string|false|Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.|
|» role|body|string|false|The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.|
|» status|body|string|false|The status of the client buyer.|
|» visibleToSeller|body|boolean|false|Whether the client buyer will be visible to sellers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» entityType|ENTITY_TYPE_UNSPECIFIED|
|» entityType|ADVERTISER|
|» entityType|BRAND|
|» entityType|AGENCY|
|» entityType|ENTITY_TYPE_UNCLASSIFIED|
|» role|CLIENT_ROLE_UNSPECIFIED|
|» role|CLIENT_DEAL_VIEWER|
|» role|CLIENT_DEAL_NEGOTIATOR|
|» role|CLIENT_DEAL_APPROVER|
|» status|CLIENT_STATUS_UNSPECIFIED|
|» status|DISABLED|
|» status|ACTIVE|

> Example responses

> 200 Response

```json
{
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

<h3 id="adexchangebuyer2accountsclientscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Client](#schemaclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.get

<a id="opIdadexchangebuyer2.accounts.clients.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients/{clientAccountId}`

Gets a client buyer with a given client account ID.

<h3 id="adexchangebuyer2accountsclientsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer to retrieve. (required)|
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
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

<h3 id="adexchangebuyer2accountsclientsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Client](#schemaclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.update

<a id="opIdadexchangebuyer2.accounts.clients.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientAccountId": "string",
    "clientName": "string",
    "entityId": "string",
    "entityName": "string",
    "entityType": "ENTITY_TYPE_UNSPECIFIED",
    "partnerClientId": "string",
    "role": "CLIENT_ROLE_UNSPECIFIED",
    "status": "CLIENT_STATUS_UNSPECIFIED",
    "visibleToSeller": true
  }'
```

`PUT /v2beta1/accounts/{accountId}/clients/{clientAccountId}`

Updates an existing client buyer.

> Body parameter

```json
{
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

<h3 id="adexchangebuyer2accountsclientsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)|
|clientAccountId|path|string|true|Unique numerical account ID of the client to update. (required)|
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
|body|body|[Client](#schemaclient)|false|none|
|» clientAccountId|body|string(int64)|false|The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.|
|» clientName|body|string|false|Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed.|
|» entityId|body|string(int64)|false|Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.|
|» entityName|body|string|false|The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.|
|» entityType|body|string|false|An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.|
|» partnerClientId|body|string|false|Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.|
|» role|body|string|false|The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.|
|» status|body|string|false|The status of the client buyer.|
|» visibleToSeller|body|boolean|false|Whether the client buyer will be visible to sellers.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» entityType|ENTITY_TYPE_UNSPECIFIED|
|» entityType|ADVERTISER|
|» entityType|BRAND|
|» entityType|AGENCY|
|» entityType|ENTITY_TYPE_UNCLASSIFIED|
|» role|CLIENT_ROLE_UNSPECIFIED|
|» role|CLIENT_DEAL_VIEWER|
|» role|CLIENT_DEAL_NEGOTIATOR|
|» role|CLIENT_DEAL_APPROVER|
|» status|CLIENT_STATUS_UNSPECIFIED|
|» status|DISABLED|
|» status|ACTIVE|

> Example responses

> 200 Response

```json
{
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

<h3 id="adexchangebuyer2accountsclientsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Client](#schemaclient)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.invitations.list

<a id="opIdadexchangebuyer2.accounts.clients.invitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations`

Lists all the client users invitations for a client with a given account ID.

<h3 id="adexchangebuyer2accountsclientsinvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.|
|pageSize|query|integer|false|Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.|
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
  "invitations": [
    {
      "clientAccountId": "string",
      "email": "string",
      "invitationId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsinvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientUserInvitationsResponse](#schemalistclientuserinvitationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.invitations.create

<a id="opIdadexchangebuyer2.accounts.clients.invitations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientAccountId": "string",
    "email": "string",
    "invitationId": "string"
  }'
```

`POST /v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations`

Creates and sends out an email invitation to access an Ad Exchange client buyer account.

> Body parameter

```json
{
  "clientAccountId": "string",
  "email": "string",
  "invitationId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsinvitationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer that the user should be associated with. (required)|
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
|body|body|[ClientUserInvitation](#schemaclientuserinvitation)|false|none|
|» clientAccountId|body|string(int64)|false|Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.|
|» email|body|string|false|The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.|
|» invitationId|body|string(int64)|false|The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.|

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
  "clientAccountId": "string",
  "email": "string",
  "invitationId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsinvitationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUserInvitation](#schemaclientuserinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.invitations.get

<a id="opIdadexchangebuyer2.accounts.clients.invitations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/invitations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}`

Retrieves an existing client user invitation.

<h3 id="adexchangebuyer2accountsclientsinvitationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)|
|invitationId|path|string|true|Numerical identifier of the user invitation to retrieve. (required)|
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
  "clientAccountId": "string",
  "email": "string",
  "invitationId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsinvitationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUserInvitation](#schemaclientuserinvitation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.users.list

<a id="opIdadexchangebuyer2.accounts.clients.users.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients/{clientAccountId}/users`

Lists all the known client users for a specified sponsor buyer account ID.

<h3 id="adexchangebuyer2accountsclientsuserslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the sponsor buyer of the client to list users for. (required)|
|clientAccountId|path|string|true|The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.|
|pageSize|query|integer|false|Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.|
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
  "users": [
    {
      "clientAccountId": "string",
      "email": "string",
      "status": "USER_STATUS_UNSPECIFIED",
      "userId": "string"
    }
  ]
}
```

<h3 id="adexchangebuyer2accountsclientsuserslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListClientUsersResponse](#schemalistclientusersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.users.get

<a id="opIdadexchangebuyer2.accounts.clients.users.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}`

Retrieves an existing client user.

<h3 id="adexchangebuyer2accountsclientsusersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)|
|userId|path|string|true|Numerical identifier of the user to retrieve. (required)|
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
  "clientAccountId": "string",
  "email": "string",
  "status": "USER_STATUS_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsusersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUser](#schemaclientuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.clients.users.update

<a id="opIdadexchangebuyer2.accounts.clients.users.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/clients/string/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "clientAccountId": "string",
    "email": "string",
    "status": "USER_STATUS_UNSPECIFIED",
    "userId": "string"
  }'
```

`PUT /v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}`

Updates an existing client user. Only the user status can be changed on update.

> Body parameter

```json
{
  "clientAccountId": "string",
  "email": "string",
  "status": "USER_STATUS_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsusersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Numerical account ID of the client's sponsor buyer. (required)|
|clientAccountId|path|string|true|Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)|
|userId|path|string|true|Numerical identifier of the user to retrieve. (required)|
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
|body|body|[ClientUser](#schemaclientuser)|false|none|
|» clientAccountId|body|string(int64)|false|Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.|
|» email|body|string|false|User's email address. The value of this field is ignored in an update operation.|
|» status|body|string|false|The status of the client user.|
|» userId|body|string(int64)|false|The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» status|USER_STATUS_UNSPECIFIED|
|» status|PENDING|
|» status|ACTIVE|
|» status|DISABLED|

> Example responses

> 200 Response

```json
{
  "clientAccountId": "string",
  "email": "string",
  "status": "USER_STATUS_UNSPECIFIED",
  "userId": "string"
}
```

<h3 id="adexchangebuyer2accountsclientsusersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ClientUser](#schemaclientuser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.list

<a id="opIdadexchangebuyer2.accounts.creatives.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/creatives`

Lists creatives.

<h3 id="adexchangebuyer2accountscreativeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account to list the creatives from. Specify "-" to list all creatives the current user has access to.|
|pageSize|query|integer|false|Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.|
|query|query|string|false|An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'|
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
  "creatives": [
    {
      "accountId": "string",
      "adChoicesDestinationUrl": "string",
      "adTechnologyProviders": {
        "detectedProviderIds": [
          "string"
        ],
        "hasUnidentifiedProvider": true
      },
      "advertiserName": "string",
      "agencyId": "string",
      "apiUpdateTime": "string",
      "attributes": [
        "ATTRIBUTE_UNSPECIFIED"
      ],
      "clickThroughUrls": [
        "string"
      ],
      "corrections": [
        {
          "contexts": [
            {
              "all": "SIMPLE_CONTEXT",
              "appType": {
                "appTypes": [
                  "NATIVE"
                ]
              },
              "auctionType": {
                "auctionTypes": [
                  "OPEN_AUCTION"
                ]
              },
              "location": {
                "geoCriteriaIds": [
                  0
                ]
              },
              "platform": {
                "platforms": [
                  "DESKTOP"
                ]
              },
              "securityType": {
                "securities": [
                  "INSECURE"
                ]
              }
            }
          ],
          "details": [
            "string"
          ],
          "type": "CORRECTION_TYPE_UNSPECIFIED"
        }
      ],
      "creativeId": "string",
      "dealsStatus": "STATUS_UNSPECIFIED",
      "declaredClickThroughUrls": [
        "string"
      ],
      "detectedAdvertiserIds": [
        "string"
      ],
      "detectedDomains": [
        "string"
      ],
      "detectedLanguages": [
        "string"
      ],
      "detectedProductCategories": [
        0
      ],
      "detectedSensitiveCategories": [
        0
      ],
      "html": {
        "height": 0,
        "snippet": "string",
        "width": 0
      },
      "impressionTrackingUrls": [
        "string"
      ],
      "native": {
        "advertiserName": "string",
        "appIcon": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "body": "string",
        "callToAction": "string",
        "clickLinkUrl": "string",
        "clickTrackingUrl": "string",
        "headline": "string",
        "image": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "logo": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "priceDisplayText": "string",
        "starRating": 0,
        "storeUrl": "string",
        "videoUrl": "string"
      },
      "openAuctionStatus": "STATUS_UNSPECIFIED",
      "restrictedCategories": [
        "NO_RESTRICTED_CATEGORIES"
      ],
      "servingRestrictions": [
        {
          "contexts": [
            {
              "all": "SIMPLE_CONTEXT",
              "appType": {
                "appTypes": [
                  "NATIVE"
                ]
              },
              "auctionType": {
                "auctionTypes": [
                  "OPEN_AUCTION"
                ]
              },
              "location": {
                "geoCriteriaIds": [
                  0
                ]
              },
              "platform": {
                "platforms": [
                  "DESKTOP"
                ]
              },
              "securityType": {
                "securities": [
                  "INSECURE"
                ]
              }
            }
          ],
          "disapproval": {
            "details": [
              "string"
            ],
            "reason": "LENGTH_OF_IMAGE_ANIMATION"
          },
          "disapprovalReasons": [
            {
              "details": [
                "string"
              ],
              "reason": "LENGTH_OF_IMAGE_ANIMATION"
            }
          ],
          "status": "STATUS_UNSPECIFIED"
        }
      ],
      "vendorIds": [
        0
      ],
      "version": 0,
      "video": {
        "videoUrl": "string",
        "videoVastXml": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2accountscreativeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCreativesResponse](#schemalistcreativesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.create

<a id="opIdadexchangebuyer2.accounts.creatives.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "adChoicesDestinationUrl": "string",
    "adTechnologyProviders": {
      "detectedProviderIds": [
        "string"
      ],
      "hasUnidentifiedProvider": true
    },
    "advertiserName": "string",
    "agencyId": "string",
    "apiUpdateTime": "string",
    "attributes": [
      "ATTRIBUTE_UNSPECIFIED"
    ],
    "clickThroughUrls": [
      "string"
    ],
    "corrections": [
      {
        "contexts": [
          {
            "all": "SIMPLE_CONTEXT",
            "appType": {
              "appTypes": [
                "NATIVE"
              ]
            },
            "auctionType": {
              "auctionTypes": [
                "OPEN_AUCTION"
              ]
            },
            "location": {
              "geoCriteriaIds": [
                0
              ]
            },
            "platform": {
              "platforms": [
                "DESKTOP"
              ]
            },
            "securityType": {
              "securities": [
                "INSECURE"
              ]
            }
          }
        ],
        "details": [
          "string"
        ],
        "type": "CORRECTION_TYPE_UNSPECIFIED"
      }
    ],
    "creativeId": "string",
    "dealsStatus": "STATUS_UNSPECIFIED",
    "declaredClickThroughUrls": [
      "string"
    ],
    "detectedAdvertiserIds": [
      "string"
    ],
    "detectedDomains": [
      "string"
    ],
    "detectedLanguages": [
      "string"
    ],
    "detectedProductCategories": [
      0
    ],
    "detectedSensitiveCategories": [
      0
    ],
    "html": {
      "height": 0,
      "snippet": "string",
      "width": 0
    },
    "impressionTrackingUrls": [
      "string"
    ],
    "native": {
      "advertiserName": "string",
      "appIcon": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "body": "string",
      "callToAction": "string",
      "clickLinkUrl": "string",
      "clickTrackingUrl": "string",
      "headline": "string",
      "image": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "logo": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "priceDisplayText": "string",
      "starRating": 0,
      "storeUrl": "string",
      "videoUrl": "string"
    },
    "openAuctionStatus": "STATUS_UNSPECIFIED",
    "restrictedCategories": [
      "NO_RESTRICTED_CATEGORIES"
    ],
    "servingRestrictions": [
      {
        "contexts": [
          {
            "all": "SIMPLE_CONTEXT",
            "appType": {
              "appTypes": [
                "NATIVE"
              ]
            },
            "auctionType": {
              "auctionTypes": [
                "OPEN_AUCTION"
              ]
            },
            "location": {
              "geoCriteriaIds": [
                0
              ]
            },
            "platform": {
              "platforms": [
                "DESKTOP"
              ]
            },
            "securityType": {
              "securities": [
                "INSECURE"
              ]
            }
          }
        ],
        "disapproval": {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        },
        "disapprovalReasons": [
          {
            "details": [
              "string"
            ],
            "reason": "LENGTH_OF_IMAGE_ANIMATION"
          }
        ],
        "status": "STATUS_UNSPECIFIED"
      }
    ],
    "vendorIds": [
      0
    ],
    "version": 0,
    "video": {
      "videoUrl": "string",
      "videoVastXml": "string"
    }
  }'
```

`POST /v2beta1/accounts/{accountId}/creatives`

Creates a creative.

> Body parameter

```json
{
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account that this creative belongs to. Can be used to filter the response of the creatives.list method.|
|duplicateIdMode|query|string|false|Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).|
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
|body|body|[Creative](#schemacreative)|false|none|
|» accountId|body|string|false|The account that this creative belongs to. Can be used to filter the response of the creatives.list method.|
|» adChoicesDestinationUrl|body|string|false|The link to AdChoices destination page.|
|» adTechnologyProviders|body|[AdTechnologyProviders](#schemaadtechnologyproviders)|false|Output only. The detected ad technology providers.|
|» advertiserName|body|string|false|The name of the company being advertised in the creative.|
|» agencyId|body|string(int64)|false|The agency ID for this creative.|
|» apiUpdateTime|body|string(google-datetime)|false|Output only. The last update timestamp of the creative through the API.|
|» attributes|body|[string]|false|All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.|
|» clickThroughUrls|body|[string]|false|The set of destination URLs for the creative.|
|» corrections|body|[[Correction](#schemacorrection)]|false|Output only. Shows any corrections that were applied to this creative.|
|» creativeId|body|string|false|The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.|
|» dealsStatus|body|string|false|Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|» declaredClickThroughUrls|body|[string]|false|The set of declared destination URLs for the creative.|
|» detectedAdvertiserIds|body|[string(int64)]|false|Output only. Detected advertiser IDs, if any.|
|» detectedDomains|body|[string]|false|Output only. The detected domains for this creative.|
|» detectedLanguages|body|[string]|false|Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.|
|» detectedProductCategories|body|[integer(int32)]|false|Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.|
|» detectedSensitiveCategories|body|[integer(int32)]|false|Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.|
|» html|body|[HtmlContent](#schemahtmlcontent)|false|An HTML creative.|
|» impressionTrackingUrls|body|[string]|false|The set of URLs to be called to record an impression.|
|» native|body|[NativeContent](#schemanativecontent)|false|A native creative.|
|» openAuctionStatus|body|string|false|Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|» restrictedCategories|body|[string]|false|All restricted categories for the ads that may be shown from this creative.|
|» servingRestrictions|body|[[ServingRestriction](#schemaservingrestriction)]|false|Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction).|
|» vendorIds|body|[integer(int32)]|false|All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.|
|» version|body|integer(int32)|false|Output only. The version of this creative.|
|» video|body|[VideoContent](#schemavideocontent)|false|A video creative.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|duplicateIdMode|NO_DUPLICATES|
|duplicateIdMode|FORCE_ENABLE_DUPLICATE_IDS|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» attributes|ATTRIBUTE_UNSPECIFIED|
|» attributes|IMAGE_RICH_MEDIA|
|» attributes|ADOBE_FLASH_FLV|
|» attributes|IS_TAGGED|
|» attributes|IS_COOKIE_TARGETED|
|» attributes|IS_USER_INTEREST_TARGETED|
|» attributes|EXPANDING_DIRECTION_NONE|
|» attributes|EXPANDING_DIRECTION_UP|
|» attributes|EXPANDING_DIRECTION_DOWN|
|» attributes|EXPANDING_DIRECTION_LEFT|
|» attributes|EXPANDING_DIRECTION_RIGHT|
|» attributes|EXPANDING_DIRECTION_UP_LEFT|
|» attributes|EXPANDING_DIRECTION_UP_RIGHT|
|» attributes|EXPANDING_DIRECTION_DOWN_LEFT|
|» attributes|EXPANDING_DIRECTION_DOWN_RIGHT|
|» attributes|CREATIVE_TYPE_HTML|
|» attributes|CREATIVE_TYPE_VAST_VIDEO|
|» attributes|EXPANDING_DIRECTION_UP_OR_DOWN|
|» attributes|EXPANDING_DIRECTION_LEFT_OR_RIGHT|
|» attributes|EXPANDING_DIRECTION_ANY_DIAGONAL|
|» attributes|EXPANDING_ACTION_ROLLOVER_TO_EXPAND|
|» attributes|INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_MRAID|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_FLASH|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_HTML5|
|» attributes|SKIPPABLE_INSTREAM_VIDEO|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_SSL|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_NON_SSL|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL|
|» attributes|NON_SKIPPABLE_INSTREAM_VIDEO|
|» attributes|NATIVE_ELIGIBILITY_ELIGIBLE|
|» attributes|NON_VPAID|
|» attributes|NATIVE_ELIGIBILITY_NOT_ELIGIBLE|
|» attributes|ANY_INTERSTITIAL|
|» attributes|NON_INTERSTITIAL|
|» attributes|IN_BANNER_VIDEO|
|» attributes|RENDERING_SIZELESS_ADX|
|» attributes|OMSDK_1_0|
|» dealsStatus|STATUS_UNSPECIFIED|
|» dealsStatus|NOT_CHECKED|
|» dealsStatus|CONDITIONALLY_APPROVED|
|» dealsStatus|APPROVED|
|» dealsStatus|DISAPPROVED|
|» dealsStatus|PENDING_REVIEW|
|» dealsStatus|STATUS_TYPE_UNSPECIFIED|
|» openAuctionStatus|STATUS_UNSPECIFIED|
|» openAuctionStatus|NOT_CHECKED|
|» openAuctionStatus|CONDITIONALLY_APPROVED|
|» openAuctionStatus|APPROVED|
|» openAuctionStatus|DISAPPROVED|
|» openAuctionStatus|PENDING_REVIEW|
|» openAuctionStatus|STATUS_TYPE_UNSPECIFIED|
|» restrictedCategories|NO_RESTRICTED_CATEGORIES|
|» restrictedCategories|ALCOHOL|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Creative](#schemacreative)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.get

<a id="opIdadexchangebuyer2.accounts.creatives.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/creatives/{creativeId}`

Gets a creative.

<h3 id="adexchangebuyer2accountscreativesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account the creative belongs to.|
|creativeId|path|string|true|The ID of the creative to retrieve.|
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
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Creative](#schemacreative)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.update

<a id="opIdadexchangebuyer2.accounts.creatives.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "adChoicesDestinationUrl": "string",
    "adTechnologyProviders": {
      "detectedProviderIds": [
        "string"
      ],
      "hasUnidentifiedProvider": true
    },
    "advertiserName": "string",
    "agencyId": "string",
    "apiUpdateTime": "string",
    "attributes": [
      "ATTRIBUTE_UNSPECIFIED"
    ],
    "clickThroughUrls": [
      "string"
    ],
    "corrections": [
      {
        "contexts": [
          {
            "all": "SIMPLE_CONTEXT",
            "appType": {
              "appTypes": [
                "NATIVE"
              ]
            },
            "auctionType": {
              "auctionTypes": [
                "OPEN_AUCTION"
              ]
            },
            "location": {
              "geoCriteriaIds": [
                0
              ]
            },
            "platform": {
              "platforms": [
                "DESKTOP"
              ]
            },
            "securityType": {
              "securities": [
                "INSECURE"
              ]
            }
          }
        ],
        "details": [
          "string"
        ],
        "type": "CORRECTION_TYPE_UNSPECIFIED"
      }
    ],
    "creativeId": "string",
    "dealsStatus": "STATUS_UNSPECIFIED",
    "declaredClickThroughUrls": [
      "string"
    ],
    "detectedAdvertiserIds": [
      "string"
    ],
    "detectedDomains": [
      "string"
    ],
    "detectedLanguages": [
      "string"
    ],
    "detectedProductCategories": [
      0
    ],
    "detectedSensitiveCategories": [
      0
    ],
    "html": {
      "height": 0,
      "snippet": "string",
      "width": 0
    },
    "impressionTrackingUrls": [
      "string"
    ],
    "native": {
      "advertiserName": "string",
      "appIcon": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "body": "string",
      "callToAction": "string",
      "clickLinkUrl": "string",
      "clickTrackingUrl": "string",
      "headline": "string",
      "image": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "logo": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "priceDisplayText": "string",
      "starRating": 0,
      "storeUrl": "string",
      "videoUrl": "string"
    },
    "openAuctionStatus": "STATUS_UNSPECIFIED",
    "restrictedCategories": [
      "NO_RESTRICTED_CATEGORIES"
    ],
    "servingRestrictions": [
      {
        "contexts": [
          {
            "all": "SIMPLE_CONTEXT",
            "appType": {
              "appTypes": [
                "NATIVE"
              ]
            },
            "auctionType": {
              "auctionTypes": [
                "OPEN_AUCTION"
              ]
            },
            "location": {
              "geoCriteriaIds": [
                0
              ]
            },
            "platform": {
              "platforms": [
                "DESKTOP"
              ]
            },
            "securityType": {
              "securities": [
                "INSECURE"
              ]
            }
          }
        ],
        "disapproval": {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        },
        "disapprovalReasons": [
          {
            "details": [
              "string"
            ],
            "reason": "LENGTH_OF_IMAGE_ANIMATION"
          }
        ],
        "status": "STATUS_UNSPECIFIED"
      }
    ],
    "vendorIds": [
      0
    ],
    "version": 0,
    "video": {
      "videoUrl": "string",
      "videoVastXml": "string"
    }
  }'
```

`PUT /v2beta1/accounts/{accountId}/creatives/{creativeId}`

Updates a creative.

> Body parameter

```json
{
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativesupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account that this creative belongs to. Can be used to filter the response of the creatives.list method.|
|creativeId|path|string|true|The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.|
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
|body|body|[Creative](#schemacreative)|false|none|
|» accountId|body|string|false|The account that this creative belongs to. Can be used to filter the response of the creatives.list method.|
|» adChoicesDestinationUrl|body|string|false|The link to AdChoices destination page.|
|» adTechnologyProviders|body|[AdTechnologyProviders](#schemaadtechnologyproviders)|false|Output only. The detected ad technology providers.|
|» advertiserName|body|string|false|The name of the company being advertised in the creative.|
|» agencyId|body|string(int64)|false|The agency ID for this creative.|
|» apiUpdateTime|body|string(google-datetime)|false|Output only. The last update timestamp of the creative through the API.|
|» attributes|body|[string]|false|All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.|
|» clickThroughUrls|body|[string]|false|The set of destination URLs for the creative.|
|» corrections|body|[[Correction](#schemacorrection)]|false|Output only. Shows any corrections that were applied to this creative.|
|» creativeId|body|string|false|The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.|
|» dealsStatus|body|string|false|Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|» declaredClickThroughUrls|body|[string]|false|The set of declared destination URLs for the creative.|
|» detectedAdvertiserIds|body|[string(int64)]|false|Output only. Detected advertiser IDs, if any.|
|» detectedDomains|body|[string]|false|Output only. The detected domains for this creative.|
|» detectedLanguages|body|[string]|false|Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.|
|» detectedProductCategories|body|[integer(int32)]|false|Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.|
|» detectedSensitiveCategories|body|[integer(int32)]|false|Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.|
|» html|body|[HtmlContent](#schemahtmlcontent)|false|An HTML creative.|
|» impressionTrackingUrls|body|[string]|false|The set of URLs to be called to record an impression.|
|» native|body|[NativeContent](#schemanativecontent)|false|A native creative.|
|» openAuctionStatus|body|string|false|Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|» restrictedCategories|body|[string]|false|All restricted categories for the ads that may be shown from this creative.|
|» servingRestrictions|body|[[ServingRestriction](#schemaservingrestriction)]|false|Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction).|
|» vendorIds|body|[integer(int32)]|false|All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.|
|» version|body|integer(int32)|false|Output only. The version of this creative.|
|» video|body|[VideoContent](#schemavideocontent)|false|A video creative.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» attributes|ATTRIBUTE_UNSPECIFIED|
|» attributes|IMAGE_RICH_MEDIA|
|» attributes|ADOBE_FLASH_FLV|
|» attributes|IS_TAGGED|
|» attributes|IS_COOKIE_TARGETED|
|» attributes|IS_USER_INTEREST_TARGETED|
|» attributes|EXPANDING_DIRECTION_NONE|
|» attributes|EXPANDING_DIRECTION_UP|
|» attributes|EXPANDING_DIRECTION_DOWN|
|» attributes|EXPANDING_DIRECTION_LEFT|
|» attributes|EXPANDING_DIRECTION_RIGHT|
|» attributes|EXPANDING_DIRECTION_UP_LEFT|
|» attributes|EXPANDING_DIRECTION_UP_RIGHT|
|» attributes|EXPANDING_DIRECTION_DOWN_LEFT|
|» attributes|EXPANDING_DIRECTION_DOWN_RIGHT|
|» attributes|CREATIVE_TYPE_HTML|
|» attributes|CREATIVE_TYPE_VAST_VIDEO|
|» attributes|EXPANDING_DIRECTION_UP_OR_DOWN|
|» attributes|EXPANDING_DIRECTION_LEFT_OR_RIGHT|
|» attributes|EXPANDING_DIRECTION_ANY_DIAGONAL|
|» attributes|EXPANDING_ACTION_ROLLOVER_TO_EXPAND|
|» attributes|INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_MRAID|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_FLASH|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_HTML5|
|» attributes|SKIPPABLE_INSTREAM_VIDEO|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_SSL|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_NON_SSL|
|» attributes|RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL|
|» attributes|NON_SKIPPABLE_INSTREAM_VIDEO|
|» attributes|NATIVE_ELIGIBILITY_ELIGIBLE|
|» attributes|NON_VPAID|
|» attributes|NATIVE_ELIGIBILITY_NOT_ELIGIBLE|
|» attributes|ANY_INTERSTITIAL|
|» attributes|NON_INTERSTITIAL|
|» attributes|IN_BANNER_VIDEO|
|» attributes|RENDERING_SIZELESS_ADX|
|» attributes|OMSDK_1_0|
|» dealsStatus|STATUS_UNSPECIFIED|
|» dealsStatus|NOT_CHECKED|
|» dealsStatus|CONDITIONALLY_APPROVED|
|» dealsStatus|APPROVED|
|» dealsStatus|DISAPPROVED|
|» dealsStatus|PENDING_REVIEW|
|» dealsStatus|STATUS_TYPE_UNSPECIFIED|
|» openAuctionStatus|STATUS_UNSPECIFIED|
|» openAuctionStatus|NOT_CHECKED|
|» openAuctionStatus|CONDITIONALLY_APPROVED|
|» openAuctionStatus|APPROVED|
|» openAuctionStatus|DISAPPROVED|
|» openAuctionStatus|PENDING_REVIEW|
|» openAuctionStatus|STATUS_TYPE_UNSPECIFIED|
|» restrictedCategories|NO_RESTRICTED_CATEGORIES|
|» restrictedCategories|ALCOHOL|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativesupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Creative](#schemacreative)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.dealAssociations.list

<a id="opIdadexchangebuyer2.accounts.creatives.dealAssociations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string/dealAssociations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations`

List all creative-deal associations.

<h3 id="adexchangebuyer2accountscreativesdealassociationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account to list the associations from. Specify "-" to list all creatives the current user has access to.|
|creativeId|path|string|true|The creative ID to list the associations from. Specify "-" to list all creatives under the above account.|
|pageSize|query|integer|false|Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.|
|query|query|string|false|An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'|
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
  "associations": [
    {
      "accountId": "string",
      "creativeId": "string",
      "dealsId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2accountscreativesdealassociationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListDealAssociationsResponse](#schemalistdealassociationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.dealAssociations.add

<a id="opIdadexchangebuyer2.accounts.creatives.dealAssociations.add"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string/dealAssociations:add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "association": {
      "accountId": "string",
      "creativeId": "string",
      "dealsId": "string"
    }
  }'
```

`POST /v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add`

Associate an existing deal with a creative.

> Body parameter

```json
{
  "association": {
    "accountId": "string",
    "creativeId": "string",
    "dealsId": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativesdealassociationsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account the creative belongs to.|
|creativeId|path|string|true|The ID of the creative associated with the deal.|
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
|body|body|[AddDealAssociationRequest](#schemaadddealassociationrequest)|false|none|
|» association|body|[CreativeDealAssociation](#schemacreativedealassociation)|false|The association between a creative and a deal that should be added.|

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

<h3 id="adexchangebuyer2accountscreativesdealassociationsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.dealAssociations.remove

<a id="opIdadexchangebuyer2.accounts.creatives.dealAssociations.remove"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string/dealAssociations:remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "association": {
      "accountId": "string",
      "creativeId": "string",
      "dealsId": "string"
    }
  }'
```

`POST /v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove`

Remove the association between a deal and a creative.

> Body parameter

```json
{
  "association": {
    "accountId": "string",
    "creativeId": "string",
    "dealsId": "string"
  }
}
```

<h3 id="adexchangebuyer2accountscreativesdealassociationsremove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account the creative belongs to.|
|creativeId|path|string|true|The ID of the creative associated with the deal.|
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
|body|body|[RemoveDealAssociationRequest](#schemaremovedealassociationrequest)|false|none|
|» association|body|[CreativeDealAssociation](#schemacreativedealassociation)|false|The association between a creative and a deal that should be removed.|

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

<h3 id="adexchangebuyer2accountscreativesdealassociationsremove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.stopWatching

<a id="opIdadexchangebuyer2.accounts.creatives.stopWatching"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string:stopWatching \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching`

Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.

> Body parameter

```json
{}
```

<h3 id="adexchangebuyer2accountscreativesstopwatching-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account of the creative to stop notifications for.|
|creativeId|path|string|true|The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.|
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
|body|body|[StopWatchingCreativeRequest](#schemastopwatchingcreativerequest)|false|none|

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

<h3 id="adexchangebuyer2accountscreativesstopwatching-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.creatives.watch

<a id="opIdadexchangebuyer2.accounts.creatives.watch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/creatives/string:watch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "topic": "string"
  }'
```

`POST /v2beta1/accounts/{accountId}/creatives/{creativeId}:watch`

Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.

> Body parameter

```json
{
  "topic": "string"
}
```

<h3 id="adexchangebuyer2accountscreativeswatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account of the creative to watch.|
|creativeId|path|string|true|The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.|
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
|body|body|[WatchCreativeRequest](#schemawatchcreativerequest)|false|none|
|» topic|body|string|false|The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format.|

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

<h3 id="adexchangebuyer2accountscreativeswatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.finalizedProposals.list

<a id="opIdadexchangebuyer2.accounts.finalizedProposals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/finalizedProposals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/finalizedProposals`

List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.

<h3 id="adexchangebuyer2accountsfinalizedproposalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|filter|query|string|false|An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.|
|filterSyntax|query|string|false|Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|The page token as returned from ListProposalsResponse.|
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
|filterSyntax|FILTER_SYNTAX_UNSPECIFIED|
|filterSyntax|PQL|
|filterSyntax|LIST_FILTER|
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
  "proposals": [
    {
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "buyerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "deals": [
        {
          "availableEndTime": "string",
          "availableStartTime": "string",
          "buyerPrivateData": {
            "referenceId": "string"
          },
          "createProductId": "string",
          "createProductRevision": "string",
          "createTime": "string",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeRestrictions": {
            "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
            "creativeSpecifications": [
              {
                "creativeCompanionSizes": [
                  {
                    "height": "string",
                    "sizeType": "SIZE_TYPE_UNSPECIFIED",
                    "width": "string"
                  }
                ],
                "creativeSize": {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              }
            ],
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "dealId": "string",
          "dealServingMetadata": {
            "dealPauseStatus": {
              "buyerPauseReason": "string",
              "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
              "hasBuyerPaused": true,
              "hasSellerPaused": true,
              "sellerPauseReason": "string"
            }
          },
          "dealTerms": {
            "brandingType": "BRANDING_TYPE_UNSPECIFIED",
            "description": "string",
            "estimatedGrossSpend": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "pricingType": "PRICING_TYPE_UNSPECIFIED"
            },
            "estimatedImpressionsPerDay": "string",
            "guaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ],
              "guaranteedImpressions": "string",
              "guaranteedLooks": "string",
              "impressionCap": "string",
              "minimumDailyLooks": "string",
              "percentShareOfVoice": "string",
              "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
            },
            "nonGuaranteedAuctionTerms": {
              "autoOptimizePrivateAuction": true,
              "reservePricesPerBuyer": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "nonGuaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "sellerTimeZone": "string"
          },
          "deliveryControl": {
            "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
            "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
            "frequencyCaps": [
              {
                "maxImpressions": 0,
                "numTimeUnits": 0,
                "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
              }
            ]
          },
          "description": "string",
          "displayName": "string",
          "externalDealId": "string",
          "isSetupComplete": true,
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "proposalId": "string",
          "sellerContacts": [
            {
              "email": "string",
              "name": "string"
            }
          ],
          "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
          "targeting": {
            "geoTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "inventorySizeTargeting": {
              "excludedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ],
              "targetedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ]
            },
            "placementTargeting": {
              "mobileApplicationTargeting": {
                "firstPartyTargeting": {
                  "excludedAppIds": [
                    "string"
                  ],
                  "targetedAppIds": [
                    "string"
                  ]
                }
              },
              "urlTargeting": {
                "excludedUrls": [
                  "string"
                ],
                "targetedUrls": [
                  "string"
                ]
              }
            },
            "technologyTargeting": {
              "deviceCapabilityTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "deviceCategoryTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemTargeting": {
                "operatingSystemCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                },
                "operatingSystemVersionCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                }
              }
            },
            "videoTargeting": {
              "excludedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ],
              "targetedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ]
            }
          },
          "targetingCriterion": [
            {
              "exclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "inclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "key": "string"
            }
          ],
          "updateTime": "string",
          "webPropertyCode": "string"
        }
      ],
      "displayName": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "notes": [
        {
          "createTime": "string",
          "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "note": "string",
          "noteId": "string",
          "proposalRevision": "string"
        }
      ],
      "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalRevision": "string",
      "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "termsAndConditions": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="adexchangebuyer2accountsfinalizedproposalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProposalsResponse](#schemalistproposalsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.finalizedProposals.pause

<a id="opIdadexchangebuyer2.accounts.finalizedProposals.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/finalizedProposals/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalDealIds": [
      "string"
    ],
    "reason": "string"
  }'
```

`POST /v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause`

Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

> Body parameter

```json
{
  "externalDealIds": [
    "string"
  ],
  "reason": "string"
}
```

<h3 id="adexchangebuyer2accountsfinalizedproposalspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The proposal_id of the proposal containing the deals.|
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
|body|body|[PauseProposalDealsRequest](#schemapauseproposaldealsrequest)|false|none|
|» externalDealIds|body|[string]|false|The external_deal_id's of the deals to be paused. If empty, all the deals in the proposal will be paused.|
|» reason|body|string|false|The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsfinalizedproposalspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.finalizedProposals.resume

<a id="opIdadexchangebuyer2.accounts.finalizedProposals.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/finalizedProposals/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalDealIds": [
      "string"
    ]
  }'
```

`POST /v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume`

Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

> Body parameter

```json
{
  "externalDealIds": [
    "string"
  ]
}
```

<h3 id="adexchangebuyer2accountsfinalizedproposalsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The proposal_id of the proposal containing the deals.|
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
|body|body|[ResumeProposalDealsRequest](#schemaresumeproposaldealsrequest)|false|none|
|» externalDealIds|body|[string]|false|The external_deal_id's of the deals to resume. If empty, all the deals in the proposal will be resumed.|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsfinalizedproposalsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.products.list

<a id="opIdadexchangebuyer2.accounts.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/products`

List all products visible to the buyer (optionally filtered by the specified PQL query).

<h3 id="adexchangebuyer2accountsproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|filter|query|string|false|An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|The page token as returned from ListProductsResponse.|
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
  "products": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "createTime": "string",
      "creatorContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "displayName": "string",
      "hasCreatorSignedOff": true,
      "productId": "string",
      "productRevision": "string",
      "publisherProfileId": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "terms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ]
}
```

<h3 id="adexchangebuyer2accountsproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProductsResponse](#schemalistproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.products.get

<a id="opIdadexchangebuyer2.accounts.products.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/products/{productId}`

Gets the requested product by ID.

<h3 id="adexchangebuyer2accountsproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|productId|path|string|true|The ID for the product to get the head revision for.|
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
  "availableEndTime": "string",
  "availableStartTime": "string",
  "createTime": "string",
  "creatorContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "displayName": "string",
  "hasCreatorSignedOff": true,
  "productId": "string",
  "productRevision": "string",
  "publisherProfileId": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
  "targetingCriterion": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "terms": {
    "brandingType": "BRANDING_TYPE_UNSPECIFIED",
    "description": "string",
    "estimatedGrossSpend": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "pricingType": "PRICING_TYPE_UNSPECIFIED"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricesPerBuyer": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "sellerTimeZone": "string"
  },
  "updateTime": "string",
  "webPropertyCode": "string"
}
```

<h3 id="adexchangebuyer2accountsproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Product](#schemaproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.list

<a id="opIdadexchangebuyer2.accounts.proposals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/proposals`

List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.

<h3 id="adexchangebuyer2accountsproposalslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|filter|query|string|false|An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.|
|filterSyntax|query|string|false|Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|The page token as returned from ListProposalsResponse.|
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
|filterSyntax|FILTER_SYNTAX_UNSPECIFIED|
|filterSyntax|PQL|
|filterSyntax|LIST_FILTER|
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
  "proposals": [
    {
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "buyerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "deals": [
        {
          "availableEndTime": "string",
          "availableStartTime": "string",
          "buyerPrivateData": {
            "referenceId": "string"
          },
          "createProductId": "string",
          "createProductRevision": "string",
          "createTime": "string",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeRestrictions": {
            "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
            "creativeSpecifications": [
              {
                "creativeCompanionSizes": [
                  {
                    "height": "string",
                    "sizeType": "SIZE_TYPE_UNSPECIFIED",
                    "width": "string"
                  }
                ],
                "creativeSize": {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              }
            ],
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "dealId": "string",
          "dealServingMetadata": {
            "dealPauseStatus": {
              "buyerPauseReason": "string",
              "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
              "hasBuyerPaused": true,
              "hasSellerPaused": true,
              "sellerPauseReason": "string"
            }
          },
          "dealTerms": {
            "brandingType": "BRANDING_TYPE_UNSPECIFIED",
            "description": "string",
            "estimatedGrossSpend": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "pricingType": "PRICING_TYPE_UNSPECIFIED"
            },
            "estimatedImpressionsPerDay": "string",
            "guaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ],
              "guaranteedImpressions": "string",
              "guaranteedLooks": "string",
              "impressionCap": "string",
              "minimumDailyLooks": "string",
              "percentShareOfVoice": "string",
              "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
            },
            "nonGuaranteedAuctionTerms": {
              "autoOptimizePrivateAuction": true,
              "reservePricesPerBuyer": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "nonGuaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "sellerTimeZone": "string"
          },
          "deliveryControl": {
            "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
            "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
            "frequencyCaps": [
              {
                "maxImpressions": 0,
                "numTimeUnits": 0,
                "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
              }
            ]
          },
          "description": "string",
          "displayName": "string",
          "externalDealId": "string",
          "isSetupComplete": true,
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "proposalId": "string",
          "sellerContacts": [
            {
              "email": "string",
              "name": "string"
            }
          ],
          "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
          "targeting": {
            "geoTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "inventorySizeTargeting": {
              "excludedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ],
              "targetedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ]
            },
            "placementTargeting": {
              "mobileApplicationTargeting": {
                "firstPartyTargeting": {
                  "excludedAppIds": [
                    "string"
                  ],
                  "targetedAppIds": [
                    "string"
                  ]
                }
              },
              "urlTargeting": {
                "excludedUrls": [
                  "string"
                ],
                "targetedUrls": [
                  "string"
                ]
              }
            },
            "technologyTargeting": {
              "deviceCapabilityTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "deviceCategoryTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemTargeting": {
                "operatingSystemCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                },
                "operatingSystemVersionCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                }
              }
            },
            "videoTargeting": {
              "excludedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ],
              "targetedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ]
            }
          },
          "targetingCriterion": [
            {
              "exclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "inclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "key": "string"
            }
          ],
          "updateTime": "string",
          "webPropertyCode": "string"
        }
      ],
      "displayName": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "notes": [
        {
          "createTime": "string",
          "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "note": "string",
          "noteId": "string",
          "proposalRevision": "string"
        }
      ],
      "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalRevision": "string",
      "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "termsAndConditions": "string",
      "updateTime": "string"
    }
  ]
}
```

<h3 id="adexchangebuyer2accountsproposalslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListProposalsResponse](#schemalistproposalsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.create

<a id="opIdadexchangebuyer2.accounts.proposals.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buyer": {
      "accountId": "string"
    },
    "buyerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ],
    "buyerPrivateData": {
      "referenceId": "string"
    },
    "deals": [
      {
        "availableEndTime": "string",
        "availableStartTime": "string",
        "buyerPrivateData": {
          "referenceId": "string"
        },
        "createProductId": "string",
        "createProductRevision": "string",
        "dealTerms": {
          "brandingType": "BRANDING_TYPE_UNSPECIFIED",
          "description": "string",
          "estimatedGrossSpend": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          },
          "estimatedImpressionsPerDay": "string",
          "guaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ],
            "guaranteedImpressions": "string",
            "guaranteedLooks": "string",
            "impressionCap": "string",
            "minimumDailyLooks": "string",
            "percentShareOfVoice": "string",
            "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
          },
          "nonGuaranteedAuctionTerms": {
            "autoOptimizePrivateAuction": true,
            "reservePricesPerBuyer": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ]
          },
          "nonGuaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ]
          },
          "sellerTimeZone": "string"
        },
        "deliveryControl": {},
        "description": "string",
        "displayName": "string",
        "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
        "targetingCriterion": [
          {
            "exclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "UNKNOWN"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                  "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                      "endTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      },
                      "startTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      }
                    }
                  ],
                  "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                },
                "longValue": "string",
                "stringValue": "string"
              }
            ],
            "inclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "UNKNOWN"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                  "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                      "endTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      },
                      "startTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      }
                    }
                  ],
                  "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                },
                "longValue": "string",
                "stringValue": "string"
              }
            ],
            "key": "string"
          }
        ],
        "webPropertyCode": "string"
      }
    ],
    "displayName": "string",
    "seller": {
      "accountId": "string"
    }
  }'
```

`POST /v2beta1/accounts/{accountId}/proposals`

Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.

> Body parameter

```json
{
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {},
      "description": "string",
      "displayName": "string",
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "seller": {
    "accountId": "string"
  }
}
```

<h3 id="adexchangebuyer2accountsproposalscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
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
|body|body|[Proposal](#schemaproposal)|false|none|
|» buyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|» buyerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Contact information for the buyer.|
|» buyerPrivateData|body|[PrivateData](#schemaprivatedata)|false|Private data for buyer. (hidden from seller).|
|» deals|body|[[Deal](#schemadeal)]|false|The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.|
|» displayName|body|string|false|The name for the proposal.|
|» seller|body|[Seller](#schemaseller)|false|Reference to the seller on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.get

<a id="opIdadexchangebuyer2.accounts.proposals.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/proposals/{proposalId}`

Gets a proposal given its ID. The proposal is returned at its head revision.

<h3 id="adexchangebuyer2accountsproposalsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The unique ID of the proposal|
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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.update

<a id="opIdadexchangebuyer2.accounts.proposals.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "buyer": {
      "accountId": "string"
    },
    "buyerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ],
    "buyerPrivateData": {
      "referenceId": "string"
    },
    "deals": [
      {
        "availableEndTime": "string",
        "availableStartTime": "string",
        "buyerPrivateData": {
          "referenceId": "string"
        },
        "createProductId": "string",
        "createProductRevision": "string",
        "dealTerms": {
          "brandingType": "BRANDING_TYPE_UNSPECIFIED",
          "description": "string",
          "estimatedGrossSpend": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          },
          "estimatedImpressionsPerDay": "string",
          "guaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ],
            "guaranteedImpressions": "string",
            "guaranteedLooks": "string",
            "impressionCap": "string",
            "minimumDailyLooks": "string",
            "percentShareOfVoice": "string",
            "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
          },
          "nonGuaranteedAuctionTerms": {
            "autoOptimizePrivateAuction": true,
            "reservePricesPerBuyer": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ]
          },
          "nonGuaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "advertiserIds": [
                  "string"
                ],
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amount": {
                    "currencyCode": "string",
                    "nanos": 0,
                    "units": "string"
                  },
                  "pricingType": "PRICING_TYPE_UNSPECIFIED"
                }
              }
            ]
          },
          "sellerTimeZone": "string"
        },
        "deliveryControl": {},
        "description": "string",
        "displayName": "string",
        "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
        "targetingCriterion": [
          {
            "exclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "UNKNOWN"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                  "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                      "endTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      },
                      "startTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      }
                    }
                  ],
                  "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                },
                "longValue": "string",
                "stringValue": "string"
              }
            ],
            "inclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "UNKNOWN"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                  "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                      "endTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      },
                      "startTime": {
                        "hours": 0,
                        "minutes": 0,
                        "nanos": 0,
                        "seconds": 0
                      }
                    }
                  ],
                  "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                },
                "longValue": "string",
                "stringValue": "string"
              }
            ],
            "key": "string"
          }
        ],
        "webPropertyCode": "string"
      }
    ],
    "displayName": "string",
    "seller": {
      "accountId": "string"
    }
  }'
```

`PUT /v2beta1/accounts/{accountId}/proposals/{proposalId}`

Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.

> Body parameter

```json
{
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {},
      "description": "string",
      "displayName": "string",
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "seller": {
    "accountId": "string"
  }
}
```

<h3 id="adexchangebuyer2accountsproposalsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The unique ID of the proposal.|
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
|body|body|[Proposal](#schemaproposal)|false|none|
|» buyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|» buyerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Contact information for the buyer.|
|» buyerPrivateData|body|[PrivateData](#schemaprivatedata)|false|Private data for buyer. (hidden from seller).|
|» deals|body|[[Deal](#schemadeal)]|false|The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.|
|» displayName|body|string|false|The name for the proposal.|
|» seller|body|[Seller](#schemaseller)|false|Reference to the seller on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.accept

<a id="opIdadexchangebuyer2.accounts.proposals.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "proposalRevision": "string"
  }'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:accept`

Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.

> Body parameter

```json
{
  "proposalRevision": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to accept.|
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
|body|body|[AcceptProposalRequest](#schemaacceptproposalrequest)|false|none|
|» proposalRevision|body|string(int64)|false|The last known client revision number of the proposal.|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.addNote

<a id="opIdadexchangebuyer2.accounts.proposals.addNote"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:addNote \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": {
      "note": "string"
    }
  }'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote`

Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.

> Body parameter

```json
{
  "note": {
    "note": "string"
  }
}
```

<h3 id="adexchangebuyer2accountsproposalsaddnote-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to attach the note to.|
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
|body|body|[AddNoteRequest](#schemaaddnoterequest)|false|none|
|» note|body|[Note](#schemanote)|false|Details of the note to add.|

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
  "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "note": "string",
  "noteId": "string",
  "proposalRevision": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsaddnote-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Note](#schemanote)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.cancelNegotiation

<a id="opIdadexchangebuyer2.accounts.proposals.cancelNegotiation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:cancelNegotiation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation`

Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.

> Body parameter

```json
{}
```

<h3 id="adexchangebuyer2accountsproposalscancelnegotiation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to cancel negotiation for.|
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
|body|body|[CancelNegotiationRequest](#schemacancelnegotiationrequest)|false|none|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalscancelnegotiation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.completeSetup

<a id="opIdadexchangebuyer2.accounts.proposals.completeSetup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:completeSetup \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup`

You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.

> Body parameter

```json
{}
```

<h3 id="adexchangebuyer2accountsproposalscompletesetup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to mark as setup completed.|
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
|body|body|[CompleteSetupRequest](#schemacompletesetuprequest)|false|none|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalscompletesetup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.pause

<a id="opIdadexchangebuyer2.accounts.proposals.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "string"
  }'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:pause`

Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.

> Body parameter

```json
{
  "reason": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to pause.|
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
|body|body|[PauseProposalRequest](#schemapauseproposalrequest)|false|none|
|» reason|body|string|false|The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.proposals.resume

<a id="opIdadexchangebuyer2.accounts.proposals.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/proposals/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2beta1/accounts/{accountId}/proposals/{proposalId}:resume`

Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.

> Body parameter

```json
{}
```

<h3 id="adexchangebuyer2accountsproposalsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|proposalId|path|string|true|The ID of the proposal to resume.|
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
|body|body|[ResumeProposalRequest](#schemaresumeproposalrequest)|false|none|

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
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

<h3 id="adexchangebuyer2accountsproposalsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.publisherProfiles.list

<a id="opIdadexchangebuyer2.accounts.publisherProfiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/publisherProfiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/publisherProfiles`

List all publisher profiles visible to the buyer

<h3 id="adexchangebuyer2accountspublisherprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|pageSize|query|integer|false|Specify the number of results to include per page.|
|pageToken|query|string|false|The page token as return from ListPublisherProfilesResponse.|
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
  "publisherProfiles": [
    {
      "audienceDescription": "string",
      "buyerPitchStatement": "string",
      "directDealsContact": "string",
      "displayName": "string",
      "domains": [
        "string"
      ],
      "googlePlusUrl": "string",
      "isParent": true,
      "logoUrl": "string",
      "mediaKitUrl": "string",
      "mobileApps": [
        {
          "appStore": "APP_STORE_TYPE_UNSPECIFIED",
          "externalAppId": "string",
          "name": "string"
        }
      ],
      "overview": "string",
      "programmaticDealsContact": "string",
      "publisherProfileId": "string",
      "rateCardInfoUrl": "string",
      "samplePageUrl": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

<h3 id="adexchangebuyer2accountspublisherprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListPublisherProfilesResponse](#schemalistpublisherprofilesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.accounts.publisherProfiles.get

<a id="opIdadexchangebuyer2.accounts.publisherProfiles.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/accounts/string/publisherProfiles/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}`

Gets the requested publisher profile by id.

<h3 id="adexchangebuyer2accountspublisherprofilesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|Account ID of the buyer.|
|publisherProfileId|path|string|true|The id for the publisher profile to get.|
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
  "audienceDescription": "string",
  "buyerPitchStatement": "string",
  "directDealsContact": "string",
  "displayName": "string",
  "domains": [
    "string"
  ],
  "googlePlusUrl": "string",
  "isParent": true,
  "logoUrl": "string",
  "mediaKitUrl": "string",
  "mobileApps": [
    {
      "appStore": "APP_STORE_TYPE_UNSPECIFIED",
      "externalAppId": "string",
      "name": "string"
    }
  ],
  "overview": "string",
  "programmaticDealsContact": "string",
  "publisherProfileId": "string",
  "rateCardInfoUrl": "string",
  "samplePageUrl": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "topHeadlines": [
    "string"
  ]
}
```

<h3 id="adexchangebuyer2accountspublisherprofilesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PublisherProfile](#schemapublisherprofile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-ii-bidders">bidders</h1>

## adexchangebuyer2.bidders.filterSets.bidMetrics.list

<a id="opIdadexchangebuyer2.bidders.filterSets.bidMetrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/bidMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/bidMetrics`

Lists all metrics that are measured in terms of number of bids.

<h3 id="adexchangebuyer2biddersfiltersetsbidmetricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.|
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
  "bidMetricsRows": [
    {
      "bids": {
        "value": "string",
        "variance": "string"
      },
      "bidsInAuction": {
        "value": "string",
        "variance": "string"
      },
      "billedImpressions": {
        "value": "string",
        "variance": "string"
      },
      "impressionsWon": {
        "value": "string",
        "variance": "string"
      },
      "measurableImpressions": {
        "value": "string",
        "variance": "string"
      },
      "reachedQueries": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "viewableImpressions": {
        "value": "string",
        "variance": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsbidmetricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBidMetricsResponse](#schemalistbidmetricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.bidResponseErrors.list

<a id="opIdadexchangebuyer2.bidders.filterSets.bidResponseErrors.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/bidResponseErrors \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/bidResponseErrors`

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

<h3 id="adexchangebuyer2biddersfiltersetsbidresponseerrorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.|
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
  "calloutStatusRows": [
    {
      "calloutStatusId": 0,
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsbidresponseerrorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBidResponseErrorsResponse](#schemalistbidresponseerrorsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list

<a id="opIdadexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/bidResponsesWithoutBids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/bidResponsesWithoutBids`

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

<h3 id="adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.|
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
  "bidResponseWithoutBidsStatusRows": [
    {
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsbidresponseswithoutbidslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListBidResponsesWithoutBidsResponse](#schemalistbidresponseswithoutbidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.filteredBidRequests.list

<a id="opIdadexchangebuyer2.bidders.filterSets.filteredBidRequests.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filteredBidRequests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/filteredBidRequests`

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidrequestslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.|
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
  "calloutStatusRows": [
    {
      "calloutStatusId": 0,
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidrequestslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFilteredBidRequestsResponse](#schemalistfilteredbidrequestsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.filteredBids.list

<a id="opIdadexchangebuyer2.bidders.filterSets.filteredBids.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filteredBids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/filteredBids`

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.|
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
  "creativeStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeStatusId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFilteredBidsResponse](#schemalistfilteredbidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list

<a id="opIdadexchangebuyer2.bidders.filterSets.filteredBids.creatives.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filteredBids/0/creatives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives`

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|creativeStatusId|path|integer|true|The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.|
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
  "filteredBidCreativeRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeId": "string",
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidscreativeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCreativeStatusBreakdownByCreativeResponse](#schemalistcreativestatusbreakdownbycreativeresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.filteredBids.details.list

<a id="opIdadexchangebuyer2.bidders.filterSets.filteredBids.details.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filteredBids/0/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details`

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|creativeStatusId|path|integer|true|The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.|
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
  "detailType": "DETAIL_TYPE_UNSPECIFIED",
  "filteredBidDetailRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "detail": "string",
      "detailId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsfilteredbidsdetailslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCreativeStatusBreakdownByDetailResponse](#schemalistcreativestatusbreakdownbydetailresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.impressionMetrics.list

<a id="opIdadexchangebuyer2.bidders.filterSets.impressionMetrics.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/impressionMetrics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/impressionMetrics`

Lists all metrics that are measured in terms of number of impressions.

<h3 id="adexchangebuyer2biddersfiltersetsimpressionmetricslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.|
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
  "impressionMetricsRows": [
    {
      "availableImpressions": {
        "value": "string",
        "variance": "string"
      },
      "bidRequests": {
        "value": "string",
        "variance": "string"
      },
      "inventoryMatches": {
        "value": "string",
        "variance": "string"
      },
      "responsesWithBids": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "successfulResponses": {
        "value": "string",
        "variance": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsimpressionmetricslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListImpressionMetricsResponse](#schemalistimpressionmetricsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.losingBids.list

<a id="opIdadexchangebuyer2.bidders.filterSets.losingBids.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/losingBids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/losingBids`

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

<h3 id="adexchangebuyer2biddersfiltersetslosingbidslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.|
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
  "creativeStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeStatusId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetslosingbidslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLosingBidsResponse](#schemalistlosingbidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list

<a id="opIdadexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/nonBillableWinningBids \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{filterSetName}/nonBillableWinningBids`

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

<h3 id="adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterSetName|path|string|true|Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.|
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
  "nonBillableWinningBidStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "status": "STATUS_UNSPECIFIED"
    }
  ]
}
```

<h3 id="adexchangebuyer2biddersfiltersetsnonbillablewinningbidslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListNonBillableWinningBidsResponse](#schemalistnonbillablewinningbidsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.get

<a id="opIdadexchangebuyer2.bidders.filterSets.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{name}`

Retrieves the requested filter set for the account with the given account ID.

<h3 id="adexchangebuyer2biddersfiltersetsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
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
  "absoluteDateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "breakdownDimensions": [
    "BREAKDOWN_DIMENSION_UNSPECIFIED"
  ],
  "creativeId": "string",
  "dealId": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "format": "FORMAT_UNSPECIFIED",
  "formats": [
    "FORMAT_UNSPECIFIED"
  ],
  "name": "string",
  "platforms": [
    "PLATFORM_UNSPECIFIED"
  ],
  "publisherIdentifiers": [
    "string"
  ],
  "realtimeTimeRange": {
    "startTimestamp": "string"
  },
  "relativeDateRange": {
    "durationDays": 0,
    "offsetDays": 0
  },
  "sellerNetworkIds": [
    0
  ],
  "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
}
```

<h3 id="adexchangebuyer2biddersfiltersetsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FilterSet](#schemafilterset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.delete

<a id="opIdadexchangebuyer2.bidders.filterSets.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2beta1/{name}`

Deletes the requested filter set from the account with the given account ID.

<h3 id="adexchangebuyer2biddersfiltersetsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`|
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

<h3 id="adexchangebuyer2biddersfiltersetsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.list

<a id="opIdadexchangebuyer2.bidders.filterSets.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filterSets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2beta1/{ownerName}/filterSets`

Lists all filter sets for the account with the given account ID.

<h3 id="adexchangebuyer2biddersfiltersetslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerName|path|string|true|Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`|
|pageSize|query|integer|false|Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.|
|pageToken|query|string|false|A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.|
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
  "filterSets": [
    {
      "absoluteDateRange": {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "breakdownDimensions": [
        "BREAKDOWN_DIMENSION_UNSPECIFIED"
      ],
      "creativeId": "string",
      "dealId": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "format": "FORMAT_UNSPECIFIED",
      "formats": [
        "FORMAT_UNSPECIFIED"
      ],
      "name": "string",
      "platforms": [
        "PLATFORM_UNSPECIFIED"
      ],
      "publisherIdentifiers": [
        "string"
      ],
      "realtimeTimeRange": {
        "startTimestamp": "string"
      },
      "relativeDateRange": {
        "durationDays": 0,
        "offsetDays": 0
      },
      "sellerNetworkIds": [
        0
      ],
      "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyer2biddersfiltersetslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListFilterSetsResponse](#schemalistfiltersetsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer2.bidders.filterSets.create

<a id="opIdadexchangebuyer2.bidders.filterSets.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2beta1/string/filterSets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "absoluteDateRange": {
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    },
    "breakdownDimensions": [
      "BREAKDOWN_DIMENSION_UNSPECIFIED"
    ],
    "creativeId": "string",
    "dealId": "string",
    "environment": "ENVIRONMENT_UNSPECIFIED",
    "format": "FORMAT_UNSPECIFIED",
    "formats": [
      "FORMAT_UNSPECIFIED"
    ],
    "name": "string",
    "platforms": [
      "PLATFORM_UNSPECIFIED"
    ],
    "publisherIdentifiers": [
      "string"
    ],
    "realtimeTimeRange": {
      "startTimestamp": "string"
    },
    "relativeDateRange": {
      "durationDays": 0,
      "offsetDays": 0
    },
    "sellerNetworkIds": [
      0
    ],
    "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
  }'
```

`POST /v2beta1/{ownerName}/filterSets`

Creates the specified filter set for the account with the given account ID.

> Body parameter

```json
{
  "absoluteDateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "breakdownDimensions": [
    "BREAKDOWN_DIMENSION_UNSPECIFIED"
  ],
  "creativeId": "string",
  "dealId": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "format": "FORMAT_UNSPECIFIED",
  "formats": [
    "FORMAT_UNSPECIFIED"
  ],
  "name": "string",
  "platforms": [
    "PLATFORM_UNSPECIFIED"
  ],
  "publisherIdentifiers": [
    "string"
  ],
  "realtimeTimeRange": {
    "startTimestamp": "string"
  },
  "relativeDateRange": {
    "durationDays": 0,
    "offsetDays": 0
  },
  "sellerNetworkIds": [
    0
  ],
  "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
}
```

<h3 id="adexchangebuyer2biddersfiltersetscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownerName|path|string|true|Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`|
|isTransient|query|boolean|false|Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.|
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
|body|body|[FilterSet](#schemafilterset)|false|none|
|» absoluteDateRange|body|[AbsoluteDateRange](#schemaabsolutedaterange)|false|An absolute date range, defined by a start date and an end date. Interpreted relative to Pacific time zone.|
|» breakdownDimensions|body|[string]|false|The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions.|
|» creativeId|body|string|false|The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.|
|» dealId|body|string(int64)|false|The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.|
|» environment|body|string|false|The environment on which to filter; optional.|
|» format|body|string|false|Creative format bidded on or allowed to bid on, can be empty.|
|» formats|body|[string]|false|Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items.|
|» name|body|string|false|A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/*/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/*/accounts/*/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations.|
|» platforms|body|[string]|false|The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms).|
|» publisherIdentifiers|body|[string]|false|For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together.|
|» realtimeTimeRange|body|[RealtimeTimeRange](#schemarealtimetimerange)|false|An open-ended realtime time range, defined by the aggregation start timestamp.|
|» relativeDateRange|body|[RelativeDateRange](#schemarelativedaterange)|false|A relative date range, defined by an offset from today and a duration. Interpreted relative to Pacific time zone.|
|» sellerNetworkIds|body|[integer(int32)]|false|For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.|
|» timeSeriesGranularity|body|string|false|The granularity of time intervals if a time series breakdown is preferred; optional.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» breakdownDimensions|BREAKDOWN_DIMENSION_UNSPECIFIED|
|» breakdownDimensions|PUBLISHER_IDENTIFIER|
|» environment|ENVIRONMENT_UNSPECIFIED|
|» environment|WEB|
|» environment|APP|
|» format|FORMAT_UNSPECIFIED|
|» format|NATIVE_DISPLAY|
|» format|NATIVE_VIDEO|
|» format|NON_NATIVE_DISPLAY|
|» format|NON_NATIVE_VIDEO|
|» formats|FORMAT_UNSPECIFIED|
|» formats|NATIVE_DISPLAY|
|» formats|NATIVE_VIDEO|
|» formats|NON_NATIVE_DISPLAY|
|» formats|NON_NATIVE_VIDEO|
|» platforms|PLATFORM_UNSPECIFIED|
|» platforms|DESKTOP|
|» platforms|TABLET|
|» platforms|MOBILE|
|» timeSeriesGranularity|TIME_SERIES_GRANULARITY_UNSPECIFIED|
|» timeSeriesGranularity|HOURLY|
|» timeSeriesGranularity|DAILY|

> Example responses

> 200 Response

```json
{
  "absoluteDateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "breakdownDimensions": [
    "BREAKDOWN_DIMENSION_UNSPECIFIED"
  ],
  "creativeId": "string",
  "dealId": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "format": "FORMAT_UNSPECIFIED",
  "formats": [
    "FORMAT_UNSPECIFIED"
  ],
  "name": "string",
  "platforms": [
    "PLATFORM_UNSPECIFIED"
  ],
  "publisherIdentifiers": [
    "string"
  ],
  "realtimeTimeRange": {
    "startTimestamp": "string"
  },
  "relativeDateRange": {
    "durationDays": 0,
    "offsetDays": 0
  },
  "sellerNetworkIds": [
    0
  ],
  "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
}
```

<h3 id="adexchangebuyer2biddersfiltersetscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[FilterSet](#schemafilterset)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

# Schemas

<h2 id="tocS_AbsoluteDateRange">AbsoluteDateRange</h2>
<!-- backwards compatibility -->
<a id="schemaabsolutedaterange"></a>
<a id="schema_AbsoluteDateRange"></a>
<a id="tocSabsolutedaterange"></a>
<a id="tocsabsolutedaterange"></a>

```json
{
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDate|[Date](#schemadate)|false|none|The end date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or after start_date.|
|startDate|[Date](#schemadate)|false|none|The start date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or before end_date.|

<h2 id="tocS_AcceptProposalRequest">AcceptProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptproposalrequest"></a>
<a id="schema_AcceptProposalRequest"></a>
<a id="tocSacceptproposalrequest"></a>
<a id="tocsacceptproposalrequest"></a>

```json
{
  "proposalRevision": "string"
}
```

Request to accept a proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposalRevision|string(int64)|false|none|The last known client revision number of the proposal.|

<h2 id="tocS_AdSize">AdSize</h2>
<!-- backwards compatibility -->
<a id="schemaadsize"></a>
<a id="schema_AdSize"></a>
<a id="tocSadsize"></a>
<a id="tocsadsize"></a>

```json
{
  "height": "string",
  "sizeType": "SIZE_TYPE_UNSPECIFIED",
  "width": "string"
}
```

Represents size of a single ad slot, or a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|string(int64)|false|none|The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.|
|sizeType|string|false|none|The size type of the ad slot.|
|width|string(int64)|false|none|The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.|

#### Enumerated Values

|Property|Value|
|---|---|
|sizeType|SIZE_TYPE_UNSPECIFIED|
|sizeType|PIXEL|
|sizeType|INTERSTITIAL|
|sizeType|NATIVE|
|sizeType|FLUID|

<h2 id="tocS_AdTechnologyProviders">AdTechnologyProviders</h2>
<!-- backwards compatibility -->
<a id="schemaadtechnologyproviders"></a>
<a id="schema_AdTechnologyProviders"></a>
<a id="tocSadtechnologyproviders"></a>
<a id="tocsadtechnologyproviders"></a>

```json
{
  "detectedProviderIds": [
    "string"
  ],
  "hasUnidentifiedProvider": true
}
```

Detected ad technology provider information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detectedProviderIds|[string(int64)]|false|none|The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If the creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the (Google bid protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto] and the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the (OpenRTB protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto], and a bid is submitted with that creative for an impression that will serve to an EEA user, the bid will be filtered before the auction.|
|hasUnidentifiedProvider|boolean|false|none|Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction.|

<h2 id="tocS_AddDealAssociationRequest">AddDealAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadddealassociationrequest"></a>
<a id="schema_AddDealAssociationRequest"></a>
<a id="tocSadddealassociationrequest"></a>
<a id="tocsadddealassociationrequest"></a>

```json
{
  "association": {
    "accountId": "string",
    "creativeId": "string",
    "dealsId": "string"
  }
}
```

A request for associating a deal and a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|association|[CreativeDealAssociation](#schemacreativedealassociation)|false|none|The association between a creative and a deal that should be added.|

<h2 id="tocS_AddNoteRequest">AddNoteRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddnoterequest"></a>
<a id="schema_AddNoteRequest"></a>
<a id="tocSaddnoterequest"></a>
<a id="tocsaddnoterequest"></a>

```json
{
  "note": {
    "createTime": "string",
    "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "note": "string",
    "noteId": "string",
    "proposalRevision": "string"
  }
}
```

Request message for adding a note to a given proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|[Note](#schemanote)|false|none|Details of the note to add.|

<h2 id="tocS_AppContext">AppContext</h2>
<!-- backwards compatibility -->
<a id="schemaappcontext"></a>
<a id="schema_AppContext"></a>
<a id="tocSappcontext"></a>
<a id="tocsappcontext"></a>

```json
{
  "appTypes": [
    "NATIVE"
  ]
}
```

Output only. The app type the restriction applies to for mobile device.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appTypes|[string]|false|none|The app types this restriction applies to.|

#### Enumerated Values

|Property|Value|
|---|---|
|appTypes|NATIVE|
|appTypes|WEB|

<h2 id="tocS_AuctionContext">AuctionContext</h2>
<!-- backwards compatibility -->
<a id="schemaauctioncontext"></a>
<a id="schema_AuctionContext"></a>
<a id="tocSauctioncontext"></a>
<a id="tocsauctioncontext"></a>

```json
{
  "auctionTypes": [
    "OPEN_AUCTION"
  ]
}
```

Output only. The auction type the restriction applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctionTypes|[string]|false|none|The auction types this restriction applies to.|

#### Enumerated Values

|Property|Value|
|---|---|
|auctionTypes|OPEN_AUCTION|
|auctionTypes|DIRECT_DEALS|

<h2 id="tocS_BidMetricsRow">BidMetricsRow</h2>
<!-- backwards compatibility -->
<a id="schemabidmetricsrow"></a>
<a id="schema_BidMetricsRow"></a>
<a id="tocSbidmetricsrow"></a>
<a id="tocsbidmetricsrow"></a>

```json
{
  "bids": {
    "value": "string",
    "variance": "string"
  },
  "bidsInAuction": {
    "value": "string",
    "variance": "string"
  },
  "billedImpressions": {
    "value": "string",
    "variance": "string"
  },
  "impressionsWon": {
    "value": "string",
    "variance": "string"
  },
  "measurableImpressions": {
    "value": "string",
    "variance": "string"
  },
  "reachedQueries": {
    "value": "string",
    "variance": "string"
  },
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "viewableImpressions": {
    "value": "string",
    "variance": "string"
  }
}
```

The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bids|[MetricValue](#schemametricvalue)|false|none|The number of bids that Ad Exchange received from the buyer.|
|bidsInAuction|[MetricValue](#schemametricvalue)|false|none|The number of bids that were permitted to compete in the auction.|
|billedImpressions|[MetricValue](#schemametricvalue)|false|none|The number of bids for which the buyer was billed. Also called valid impressions as invalid impressions are not billed.|
|impressionsWon|[MetricValue](#schemametricvalue)|false|none|The number of bids that won the auction.|
|measurableImpressions|[MetricValue](#schemametricvalue)|false|none|The number of bids for which the corresponding impression was measurable for viewability (as defined by Active View).|
|reachedQueries|[MetricValue](#schemametricvalue)|false|none|The number of bids that won the auction and also won the mediation waterfall (if any).|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|
|viewableImpressions|[MetricValue](#schemametricvalue)|false|none|The number of bids for which the corresponding impression was viewable (as defined by Active View).|

<h2 id="tocS_BidResponseWithoutBidsStatusRow">BidResponseWithoutBidsStatusRow</h2>
<!-- backwards compatibility -->
<a id="schemabidresponsewithoutbidsstatusrow"></a>
<a id="schema_BidResponseWithoutBidsStatusRow"></a>
<a id="tocSbidresponsewithoutbidsstatusrow"></a>
<a id="tocsbidresponsewithoutbidsstatusrow"></a>

```json
{
  "impressionCount": {
    "value": "string",
    "variance": "string"
  },
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "status": "STATUS_UNSPECIFIED"
}
```

The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|impressionCount|[MetricValue](#schemametricvalue)|false|none|The number of impressions for which there was a bid response with the specified status.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|
|status|string|false|none|The status specifying why the bid responses were considered to have no applicable bids.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|RESPONSES_WITHOUT_BIDS|
|status|RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT|
|status|RESPONSES_WITHOUT_BIDS_FOR_DEAL|

<h2 id="tocS_Buyer">Buyer</h2>
<!-- backwards compatibility -->
<a id="schemabuyer"></a>
<a id="schema_Buyer"></a>
<a id="tocSbuyer"></a>
<a id="tocsbuyer"></a>

```json
{
  "accountId": "string"
}
```

Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Authorized Buyers account ID of the buyer.|

<h2 id="tocS_CalloutStatusRow">CalloutStatusRow</h2>
<!-- backwards compatibility -->
<a id="schemacalloutstatusrow"></a>
<a id="schema_CalloutStatusRow"></a>
<a id="tocScalloutstatusrow"></a>
<a id="tocscalloutstatusrow"></a>

```json
{
  "calloutStatusId": 0,
  "impressionCount": {
    "value": "string",
    "variance": "string"
  },
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  }
}
```

The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calloutStatusId|integer(int32)|false|none|The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes).|
|impressionCount|[MetricValue](#schemametricvalue)|false|none|The number of impressions for which there was a bid request or bid response with the specified callout status.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|

<h2 id="tocS_CancelNegotiationRequest">CancelNegotiationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacancelnegotiationrequest"></a>
<a id="schema_CancelNegotiationRequest"></a>
<a id="tocScancelnegotiationrequest"></a>
<a id="tocscancelnegotiationrequest"></a>

```json
{}
```

Request to cancel an ongoing negotiation.

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "clientAccountId": "string",
  "clientName": "string",
  "entityId": "string",
  "entityName": "string",
  "entityType": "ENTITY_TYPE_UNSPECIFIED",
  "partnerClientId": "string",
  "role": "CLIENT_ROLE_UNSPECIFIED",
  "status": "CLIENT_STATUS_UNSPECIFIED",
  "visibleToSeller": true
}
```

A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAccountId|string(int64)|false|none|The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.|
|clientName|string|false|none|Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed.|
|entityId|string(int64)|false|none|Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.|
|entityName|string|false|none|The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.|
|entityType|string|false|none|An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.|
|partnerClientId|string|false|none|Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.|
|role|string|false|none|The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.|
|status|string|false|none|The status of the client buyer.|
|visibleToSeller|boolean|false|none|Whether the client buyer will be visible to sellers.|

#### Enumerated Values

|Property|Value|
|---|---|
|entityType|ENTITY_TYPE_UNSPECIFIED|
|entityType|ADVERTISER|
|entityType|BRAND|
|entityType|AGENCY|
|entityType|ENTITY_TYPE_UNCLASSIFIED|
|role|CLIENT_ROLE_UNSPECIFIED|
|role|CLIENT_DEAL_VIEWER|
|role|CLIENT_DEAL_NEGOTIATOR|
|role|CLIENT_DEAL_APPROVER|
|status|CLIENT_STATUS_UNSPECIFIED|
|status|DISABLED|
|status|ACTIVE|

<h2 id="tocS_ClientUser">ClientUser</h2>
<!-- backwards compatibility -->
<a id="schemaclientuser"></a>
<a id="schema_ClientUser"></a>
<a id="tocSclientuser"></a>
<a id="tocsclientuser"></a>

```json
{
  "clientAccountId": "string",
  "email": "string",
  "status": "USER_STATUS_UNSPECIFIED",
  "userId": "string"
}
```

A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAccountId|string(int64)|false|none|Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.|
|email|string|false|none|User's email address. The value of this field is ignored in an update operation.|
|status|string|false|none|The status of the client user.|
|userId|string(int64)|false|none|The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|USER_STATUS_UNSPECIFIED|
|status|PENDING|
|status|ACTIVE|
|status|DISABLED|

<h2 id="tocS_ClientUserInvitation">ClientUserInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaclientuserinvitation"></a>
<a id="schema_ClientUserInvitation"></a>
<a id="tocSclientuserinvitation"></a>
<a id="tocsclientuserinvitation"></a>

```json
{
  "clientAccountId": "string",
  "email": "string",
  "invitationId": "string"
}
```

An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientAccountId|string(int64)|false|none|Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.|
|email|string|false|none|The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.|
|invitationId|string(int64)|false|none|The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.|

<h2 id="tocS_CompleteSetupRequest">CompleteSetupRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompletesetuprequest"></a>
<a id="schema_CompleteSetupRequest"></a>
<a id="tocScompletesetuprequest"></a>
<a id="tocscompletesetuprequest"></a>

```json
{}
```

Request message for indicating that the proposal's setup step is complete.

<h2 id="tocS_ContactInformation">ContactInformation</h2>
<!-- backwards compatibility -->
<a id="schemacontactinformation"></a>
<a id="schema_ContactInformation"></a>
<a id="tocScontactinformation"></a>
<a id="tocscontactinformation"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

Contains information on how a buyer or seller can be reached.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address for the contact.|
|name|string|false|none|The name of the contact.|

<h2 id="tocS_Correction">Correction</h2>
<!-- backwards compatibility -->
<a id="schemacorrection"></a>
<a id="schema_Correction"></a>
<a id="tocScorrection"></a>
<a id="tocscorrection"></a>

```json
{
  "contexts": [
    {
      "all": "SIMPLE_CONTEXT",
      "appType": {
        "appTypes": [
          "NATIVE"
        ]
      },
      "auctionType": {
        "auctionTypes": [
          "OPEN_AUCTION"
        ]
      },
      "location": {
        "geoCriteriaIds": [
          0
        ]
      },
      "platform": {
        "platforms": [
          "DESKTOP"
        ]
      },
      "securityType": {
        "securities": [
          "INSECURE"
        ]
      }
    }
  ],
  "details": [
    "string"
  ],
  "type": "CORRECTION_TYPE_UNSPECIFIED"
}
```

Output only. Shows any corrections that were applied to this creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contexts|[[ServingContext](#schemaservingcontext)]|false|none|The contexts for the correction.|
|details|[string]|false|none|Additional details about what was corrected.|
|type|string|false|none|The type of correction that was applied to the creative.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CORRECTION_TYPE_UNSPECIFIED|
|type|VENDOR_IDS_ADDED|
|type|SSL_ATTRIBUTE_REMOVED|
|type|FLASH_FREE_ATTRIBUTE_REMOVED|
|type|FLASH_FREE_ATTRIBUTE_ADDED|
|type|REQUIRED_ATTRIBUTE_ADDED|
|type|REQUIRED_VENDOR_ADDED|
|type|SSL_ATTRIBUTE_ADDED|
|type|IN_BANNER_VIDEO_ATTRIBUTE_ADDED|
|type|MRAID_ATTRIBUTE_ADDED|
|type|FLASH_ATTRIBUTE_REMOVED|
|type|VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED|

<h2 id="tocS_Creative">Creative</h2>
<!-- backwards compatibility -->
<a id="schemacreative"></a>
<a id="schema_Creative"></a>
<a id="tocScreative"></a>
<a id="tocscreative"></a>

```json
{
  "accountId": "string",
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserName": "string",
  "agencyId": "string",
  "apiUpdateTime": "string",
  "attributes": [
    "ATTRIBUTE_UNSPECIFIED"
  ],
  "clickThroughUrls": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "details": [
        "string"
      ],
      "type": "CORRECTION_TYPE_UNSPECIFIED"
    }
  ],
  "creativeId": "string",
  "dealsStatus": "STATUS_UNSPECIFIED",
  "declaredClickThroughUrls": [
    "string"
  ],
  "detectedAdvertiserIds": [
    "string"
  ],
  "detectedDomains": [
    "string"
  ],
  "detectedLanguages": [
    "string"
  ],
  "detectedProductCategories": [
    0
  ],
  "detectedSensitiveCategories": [
    0
  ],
  "html": {
    "height": 0,
    "snippet": "string",
    "width": 0
  },
  "impressionTrackingUrls": [
    "string"
  ],
  "native": {
    "advertiserName": "string",
    "appIcon": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "body": "string",
    "callToAction": "string",
    "clickLinkUrl": "string",
    "clickTrackingUrl": "string",
    "headline": "string",
    "image": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "priceDisplayText": "string",
    "starRating": 0,
    "storeUrl": "string",
    "videoUrl": "string"
  },
  "openAuctionStatus": "STATUS_UNSPECIFIED",
  "restrictedCategories": [
    "NO_RESTRICTED_CATEGORIES"
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "all": "SIMPLE_CONTEXT",
          "appType": {
            "appTypes": [
              "NATIVE"
            ]
          },
          "auctionType": {
            "auctionTypes": [
              "OPEN_AUCTION"
            ]
          },
          "location": {
            "geoCriteriaIds": [
              0
            ]
          },
          "platform": {
            "platforms": [
              "DESKTOP"
            ]
          },
          "securityType": {
            "securities": [
              "INSECURE"
            ]
          }
        }
      ],
      "disapproval": {
        "details": [
          "string"
        ],
        "reason": "LENGTH_OF_IMAGE_ANIMATION"
      },
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "LENGTH_OF_IMAGE_ANIMATION"
        }
      ],
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "vendorIds": [
    0
  ],
  "version": 0,
  "video": {
    "videoUrl": "string",
    "videoVastXml": "string"
  }
}
```

A creative and its classification data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account that this creative belongs to. Can be used to filter the response of the creatives.list method.|
|adChoicesDestinationUrl|string|false|none|The link to AdChoices destination page.|
|adTechnologyProviders|[AdTechnologyProviders](#schemaadtechnologyproviders)|false|none|Output only. The detected ad technology providers.|
|advertiserName|string|false|none|The name of the company being advertised in the creative.|
|agencyId|string(int64)|false|none|The agency ID for this creative.|
|apiUpdateTime|string(google-datetime)|false|none|Output only. The last update timestamp of the creative through the API.|
|attributes|[string]|false|none|All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.|
|clickThroughUrls|[string]|false|none|The set of destination URLs for the creative.|
|corrections|[[Correction](#schemacorrection)]|false|none|Output only. Shows any corrections that were applied to this creative.|
|creativeId|string|false|none|The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.|
|dealsStatus|string|false|none|Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|declaredClickThroughUrls|[string]|false|none|The set of declared destination URLs for the creative.|
|detectedAdvertiserIds|[string(int64)]|false|none|Output only. Detected advertiser IDs, if any.|
|detectedDomains|[string]|false|none|Output only. The detected domains for this creative.|
|detectedLanguages|[string]|false|none|Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.|
|detectedProductCategories|[integer(int32)]|false|none|Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.|
|detectedSensitiveCategories|[integer(int32)]|false|none|Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.|
|html|[HtmlContent](#schemahtmlcontent)|false|none|An HTML creative.|
|impressionTrackingUrls|[string]|false|none|The set of URLs to be called to record an impression.|
|native|[NativeContent](#schemanativecontent)|false|none|A native creative.|
|openAuctionStatus|string|false|none|Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.|
|restrictedCategories|[string]|false|none|All restricted categories for the ads that may be shown from this creative.|
|servingRestrictions|[[ServingRestriction](#schemaservingrestriction)]|false|none|Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction).|
|vendorIds|[integer(int32)]|false|none|All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.|
|version|integer(int32)|false|none|Output only. The version of this creative.|
|video|[VideoContent](#schemavideocontent)|false|none|A video creative.|

#### Enumerated Values

|Property|Value|
|---|---|
|attributes|ATTRIBUTE_UNSPECIFIED|
|attributes|IMAGE_RICH_MEDIA|
|attributes|ADOBE_FLASH_FLV|
|attributes|IS_TAGGED|
|attributes|IS_COOKIE_TARGETED|
|attributes|IS_USER_INTEREST_TARGETED|
|attributes|EXPANDING_DIRECTION_NONE|
|attributes|EXPANDING_DIRECTION_UP|
|attributes|EXPANDING_DIRECTION_DOWN|
|attributes|EXPANDING_DIRECTION_LEFT|
|attributes|EXPANDING_DIRECTION_RIGHT|
|attributes|EXPANDING_DIRECTION_UP_LEFT|
|attributes|EXPANDING_DIRECTION_UP_RIGHT|
|attributes|EXPANDING_DIRECTION_DOWN_LEFT|
|attributes|EXPANDING_DIRECTION_DOWN_RIGHT|
|attributes|CREATIVE_TYPE_HTML|
|attributes|CREATIVE_TYPE_VAST_VIDEO|
|attributes|EXPANDING_DIRECTION_UP_OR_DOWN|
|attributes|EXPANDING_DIRECTION_LEFT_OR_RIGHT|
|attributes|EXPANDING_DIRECTION_ANY_DIAGONAL|
|attributes|EXPANDING_ACTION_ROLLOVER_TO_EXPAND|
|attributes|INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_MRAID|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_FLASH|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_HTML5|
|attributes|SKIPPABLE_INSTREAM_VIDEO|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_SSL|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_NON_SSL|
|attributes|RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL|
|attributes|NON_SKIPPABLE_INSTREAM_VIDEO|
|attributes|NATIVE_ELIGIBILITY_ELIGIBLE|
|attributes|NON_VPAID|
|attributes|NATIVE_ELIGIBILITY_NOT_ELIGIBLE|
|attributes|ANY_INTERSTITIAL|
|attributes|NON_INTERSTITIAL|
|attributes|IN_BANNER_VIDEO|
|attributes|RENDERING_SIZELESS_ADX|
|attributes|OMSDK_1_0|
|dealsStatus|STATUS_UNSPECIFIED|
|dealsStatus|NOT_CHECKED|
|dealsStatus|CONDITIONALLY_APPROVED|
|dealsStatus|APPROVED|
|dealsStatus|DISAPPROVED|
|dealsStatus|PENDING_REVIEW|
|dealsStatus|STATUS_TYPE_UNSPECIFIED|
|openAuctionStatus|STATUS_UNSPECIFIED|
|openAuctionStatus|NOT_CHECKED|
|openAuctionStatus|CONDITIONALLY_APPROVED|
|openAuctionStatus|APPROVED|
|openAuctionStatus|DISAPPROVED|
|openAuctionStatus|PENDING_REVIEW|
|openAuctionStatus|STATUS_TYPE_UNSPECIFIED|
|restrictedCategories|NO_RESTRICTED_CATEGORIES|
|restrictedCategories|ALCOHOL|

<h2 id="tocS_CreativeDealAssociation">CreativeDealAssociation</h2>
<!-- backwards compatibility -->
<a id="schemacreativedealassociation"></a>
<a id="schema_CreativeDealAssociation"></a>
<a id="tocScreativedealassociation"></a>
<a id="tocscreativedealassociation"></a>

```json
{
  "accountId": "string",
  "creativeId": "string",
  "dealsId": "string"
}
```

The association between a creative and a deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The account the creative belongs to.|
|creativeId|string|false|none|The ID of the creative associated with the deal.|
|dealsId|string|false|none|The externalDealId for the deal associated with the creative.|

<h2 id="tocS_CreativeRestrictions">CreativeRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemacreativerestrictions"></a>
<a id="schema_CreativeRestrictions"></a>
<a id="tocScreativerestrictions"></a>
<a id="tocscreativerestrictions"></a>

```json
{
  "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
  "creativeSpecifications": [
    {
      "creativeCompanionSizes": [
        {
          "height": "string",
          "sizeType": "SIZE_TYPE_UNSPECIFIED",
          "width": "string"
        }
      ],
      "creativeSize": {
        "height": "string",
        "sizeType": "SIZE_TYPE_UNSPECIFIED",
        "width": "string"
      }
    }
  ],
  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
}
```

Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeFormat|string|false|none|The format of the environment that the creatives will be displayed in.|
|creativeSpecifications|[[CreativeSpecification](#schemacreativespecification)]|false|none|none|
|skippableAdType|string|false|none|Skippable video ads allow viewers to skip ads after 5 seconds.|

#### Enumerated Values

|Property|Value|
|---|---|
|creativeFormat|CREATIVE_FORMAT_UNSPECIFIED|
|creativeFormat|DISPLAY|
|creativeFormat|VIDEO|
|skippableAdType|SKIPPABLE_AD_TYPE_UNSPECIFIED|
|skippableAdType|SKIPPABLE|
|skippableAdType|INSTREAM_SELECT|
|skippableAdType|NOT_SKIPPABLE|

<h2 id="tocS_CreativeSize">CreativeSize</h2>
<!-- backwards compatibility -->
<a id="schemacreativesize"></a>
<a id="schema_CreativeSize"></a>
<a id="tocScreativesize"></a>
<a id="tocscreativesize"></a>

```json
{
  "allowedFormats": [
    "UNKNOWN"
  ],
  "companionSizes": [
    {
      "height": 0,
      "width": 0
    }
  ],
  "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
  "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
  "size": {
    "height": 0,
    "width": 0
  },
  "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
}
```

Specifies the size of the creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedFormats|[string]|false|none|What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video).|
|companionSizes|[[Size](#schemasize)]|false|none|For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type = VIDEO|
|creativeSizeType|string|false|none|The creative size type.|
|nativeTemplate|string|false|none|Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE.|
|size|[Size](#schemasize)|false|none|For regular or video creative size type, specifies the size of the creative|
|skippableAdType|string|false|none|The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO.|

#### Enumerated Values

|Property|Value|
|---|---|
|allowedFormats|UNKNOWN|
|allowedFormats|AUDIO|
|creativeSizeType|CREATIVE_SIZE_TYPE_UNSPECIFIED|
|creativeSizeType|REGULAR|
|creativeSizeType|INTERSTITIAL|
|creativeSizeType|VIDEO|
|creativeSizeType|NATIVE|
|nativeTemplate|UNKNOWN_NATIVE_TEMPLATE|
|nativeTemplate|NATIVE_CONTENT_AD|
|nativeTemplate|NATIVE_APP_INSTALL_AD|
|nativeTemplate|NATIVE_VIDEO_CONTENT_AD|
|nativeTemplate|NATIVE_VIDEO_APP_INSTALL_AD|
|skippableAdType|SKIPPABLE_AD_TYPE_UNSPECIFIED|
|skippableAdType|GENERIC|
|skippableAdType|INSTREAM_SELECT|
|skippableAdType|NOT_SKIPPABLE|

<h2 id="tocS_CreativeSpecification">CreativeSpecification</h2>
<!-- backwards compatibility -->
<a id="schemacreativespecification"></a>
<a id="schema_CreativeSpecification"></a>
<a id="tocScreativespecification"></a>
<a id="tocscreativespecification"></a>

```json
{
  "creativeCompanionSizes": [
    {
      "height": "string",
      "sizeType": "SIZE_TYPE_UNSPECIFIED",
      "width": "string"
    }
  ],
  "creativeSize": {
    "height": "string",
    "sizeType": "SIZE_TYPE_UNSPECIFIED",
    "width": "string"
  }
}
```

Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeCompanionSizes|[[AdSize](#schemaadsize)]|false|none|Companion sizes may be filled in only when this is a video creative.|
|creativeSize|[AdSize](#schemaadsize)|false|none|The size of the creative.|

<h2 id="tocS_CreativeStatusRow">CreativeStatusRow</h2>
<!-- backwards compatibility -->
<a id="schemacreativestatusrow"></a>
<a id="schema_CreativeStatusRow"></a>
<a id="tocScreativestatusrow"></a>
<a id="tocscreativestatusrow"></a>

```json
{
  "bidCount": {
    "value": "string",
    "variance": "string"
  },
  "creativeStatusId": 0,
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  }
}
```

The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidCount|[MetricValue](#schemametricvalue)|false|none|The number of bids with the specified status.|
|creativeStatusId|integer(int32)|false|none|The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|

<h2 id="tocS_CriteriaTargeting">CriteriaTargeting</h2>
<!-- backwards compatibility -->
<a id="schemacriteriatargeting"></a>
<a id="schema_CriteriaTargeting"></a>
<a id="tocScriteriatargeting"></a>
<a id="tocscriteriatargeting"></a>

```json
{
  "excludedCriteriaIds": [
    "string"
  ],
  "targetedCriteriaIds": [
    "string"
  ]
}
```

Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedCriteriaIds|[string(int64)]|false|none|A list of numeric IDs to be excluded.|
|targetedCriteriaIds|[string(int64)]|false|none|A list of numeric IDs to be included.|

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

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_DayPart">DayPart</h2>
<!-- backwards compatibility -->
<a id="schemadaypart"></a>
<a id="schema_DayPart"></a>
<a id="tocSdaypart"></a>
<a id="tocsdaypart"></a>

```json
{
  "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
  "endTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "startTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|The day of the week to target. If unspecified, applicable to all days.|
|endTime|[TimeOfDay](#schematimeofday)|false|none|The ending time of the day for the ad to show (minute level granularity). The end time is exclusive. This field is not available for filtering in PQL queries.|
|startTime|[TimeOfDay](#schematimeofday)|false|none|The starting time of day for the ad to show (minute level granularity). The start time is inclusive. This field is not available for filtering in PQL queries.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|DAY_OF_WEEK_UNSPECIFIED|
|dayOfWeek|MONDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|FRIDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|

<h2 id="tocS_DayPartTargeting">DayPartTargeting</h2>
<!-- backwards compatibility -->
<a id="schemadayparttargeting"></a>
<a id="schema_DayPartTargeting"></a>
<a id="tocSdayparttargeting"></a>
<a id="tocsdayparttargeting"></a>

```json
{
  "dayParts": [
    {
      "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
      "endTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ],
  "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
}
```

Specifies the day part targeting criteria.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayParts|[[DayPart](#schemadaypart)]|false|none|A list of day part targeting criterion.|
|timeZoneType|string|false|none|The timezone to use for interpreting the day part targeting.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeZoneType|TIME_ZONE_SOURCE_UNSPECIFIED|
|timeZoneType|PUBLISHER|
|timeZoneType|USER|

<h2 id="tocS_Deal">Deal</h2>
<!-- backwards compatibility -->
<a id="schemadeal"></a>
<a id="schema_Deal"></a>
<a id="tocSdeal"></a>
<a id="tocsdeal"></a>

```json
{
  "availableEndTime": "string",
  "availableStartTime": "string",
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "createProductId": "string",
  "createProductRevision": "string",
  "createTime": "string",
  "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
  "creativeRestrictions": {
    "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
    "creativeSpecifications": [
      {
        "creativeCompanionSizes": [
          {
            "height": "string",
            "sizeType": "SIZE_TYPE_UNSPECIFIED",
            "width": "string"
          }
        ],
        "creativeSize": {
          "height": "string",
          "sizeType": "SIZE_TYPE_UNSPECIFIED",
          "width": "string"
        }
      }
    ],
    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
  },
  "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
  "dealId": "string",
  "dealServingMetadata": {
    "dealPauseStatus": {
      "buyerPauseReason": "string",
      "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "hasBuyerPaused": true,
      "hasSellerPaused": true,
      "sellerPauseReason": "string"
    }
  },
  "dealTerms": {
    "brandingType": "BRANDING_TYPE_UNSPECIFIED",
    "description": "string",
    "estimatedGrossSpend": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "pricingType": "PRICING_TYPE_UNSPECIFIED"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricesPerBuyer": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "sellerTimeZone": "string"
  },
  "deliveryControl": {
    "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
    "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
    "frequencyCaps": [
      {
        "maxImpressions": 0,
        "numTimeUnits": 0,
        "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
      }
    ]
  },
  "description": "string",
  "displayName": "string",
  "externalDealId": "string",
  "isSetupComplete": true,
  "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
  "proposalId": "string",
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
  "targeting": {
    "geoTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "inventorySizeTargeting": {
      "excludedInventorySizes": [
        {
          "height": "string",
          "sizeType": "SIZE_TYPE_UNSPECIFIED",
          "width": "string"
        }
      ],
      "targetedInventorySizes": [
        {
          "height": "string",
          "sizeType": "SIZE_TYPE_UNSPECIFIED",
          "width": "string"
        }
      ]
    },
    "placementTargeting": {
      "mobileApplicationTargeting": {
        "firstPartyTargeting": {
          "excludedAppIds": [
            "string"
          ],
          "targetedAppIds": [
            "string"
          ]
        }
      },
      "urlTargeting": {
        "excludedUrls": [
          "string"
        ],
        "targetedUrls": [
          "string"
        ]
      }
    },
    "technologyTargeting": {
      "deviceCapabilityTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "deviceCategoryTargeting": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "operatingSystemTargeting": {
        "operatingSystemCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "operatingSystemVersionCriteria": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        }
      }
    },
    "videoTargeting": {
      "excludedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ],
      "targetedPositionTypes": [
        "POSITION_TYPE_UNSPECIFIED"
      ]
    }
  },
  "targetingCriterion": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "updateTime": "string",
  "webPropertyCode": "string"
}
```

A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableEndTime|string(google-datetime)|false|none|Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals.|
|availableStartTime|string(google-datetime)|false|none|Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.|
|buyerPrivateData|[PrivateData](#schemaprivatedata)|false|none|Buyer private data (hidden from seller).|
|createProductId|string|false|none|The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|createProductRevision|string(int64)|false|none|Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|createTime|string(google-datetime)|false|read-only|Output only. The time of the deal creation.|
|creativePreApprovalPolicy|string|false|read-only|Output only. Specifies the creative pre-approval policy.|
|creativeRestrictions|[CreativeRestrictions](#schemacreativerestrictions)|false|none|Output only. Restricitions about the creatives associated with the deal (for example, size) This is available for Programmatic Guaranteed/Preferred Deals in Ad Manager.|
|creativeSafeFrameCompatibility|string|false|read-only|Output only. Specifies whether the creative is safeFrame compatible.|
|dealId|string|false|read-only|Output only. A unique deal ID for the deal (server-assigned).|
|dealServingMetadata|[DealServingMetadata](#schemadealservingmetadata)|false|none|Output only. Metadata about the serving status of this deal.|
|dealTerms|[DealTerms](#schemadealterms)|false|none|The negotiable terms of the deal.|
|deliveryControl|[DeliveryControl](#schemadeliverycontrol)|false|none|The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher.|
|description|string|false|none|Description for the deal terms.|
|displayName|string|false|none|The name of the deal.|
|externalDealId|string|false|read-only|Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc.|
|isSetupComplete|boolean|false|read-only|Output only. True, if the buyside inventory setup is complete for this deal.|
|programmaticCreativeSource|string|false|read-only|Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer.|
|proposalId|string|false|read-only|Output only. ID of the proposal that this deal is part of.|
|sellerContacts|[[ContactInformation](#schemacontactinformation)]|false|read-only|Output only. Seller contact information for the deal.|
|syndicationProduct|string|false|none|The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|targeting|[MarketplaceTargeting](#schemamarketplacetargeting)|false|none|Output only. Specifies the subset of inventory targeted by the deal.|
|targetingCriterion|[[TargetingCriteria](#schematargetingcriteria)]|false|none|The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the deal was last updated.|
|webPropertyCode|string|false|none|The web property code for the seller copied over from the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|creativePreApprovalPolicy|CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED|
|creativePreApprovalPolicy|SELLER_PRE_APPROVAL_REQUIRED|
|creativePreApprovalPolicy|SELLER_PRE_APPROVAL_NOT_REQUIRED|
|creativeSafeFrameCompatibility|CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED|
|creativeSafeFrameCompatibility|COMPATIBLE|
|creativeSafeFrameCompatibility|INCOMPATIBLE|
|programmaticCreativeSource|PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED|
|programmaticCreativeSource|ADVERTISER|
|programmaticCreativeSource|PUBLISHER|
|syndicationProduct|SYNDICATION_PRODUCT_UNSPECIFIED|
|syndicationProduct|CONTENT|
|syndicationProduct|MOBILE|
|syndicationProduct|VIDEO|
|syndicationProduct|GAMES|

<h2 id="tocS_DealPauseStatus">DealPauseStatus</h2>
<!-- backwards compatibility -->
<a id="schemadealpausestatus"></a>
<a id="schema_DealPauseStatus"></a>
<a id="tocSdealpausestatus"></a>
<a id="tocsdealpausestatus"></a>

```json
{
  "buyerPauseReason": "string",
  "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "hasBuyerPaused": true,
  "hasSellerPaused": true,
  "sellerPauseReason": "string"
}
```

Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerPauseReason|string|false|none|The buyer's reason for pausing, if the buyer paused the deal.|
|firstPausedBy|string|false|none|The role of the person who first paused this deal.|
|hasBuyerPaused|boolean|false|none|True, if the buyer has paused the deal unilaterally.|
|hasSellerPaused|boolean|false|none|True, if the seller has paused the deal unilaterally.|
|sellerPauseReason|string|false|none|The seller's reason for pausing, if the seller paused the deal.|

#### Enumerated Values

|Property|Value|
|---|---|
|firstPausedBy|BUYER_SELLER_ROLE_UNSPECIFIED|
|firstPausedBy|BUYER|
|firstPausedBy|SELLER|

<h2 id="tocS_DealServingMetadata">DealServingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadealservingmetadata"></a>
<a id="schema_DealServingMetadata"></a>
<a id="tocSdealservingmetadata"></a>
<a id="tocsdealservingmetadata"></a>

```json
{
  "dealPauseStatus": {
    "buyerPauseReason": "string",
    "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
    "hasBuyerPaused": true,
    "hasSellerPaused": true,
    "sellerPauseReason": "string"
  }
}
```

Message captures metadata about the serving status of a deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealPauseStatus|[DealPauseStatus](#schemadealpausestatus)|false|none|Output only. Tracks which parties (if any) have paused a deal.|

<h2 id="tocS_DealTerms">DealTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealterms"></a>
<a id="schema_DealTerms"></a>
<a id="tocSdealterms"></a>
<a id="tocsdealterms"></a>

```json
{
  "brandingType": "BRANDING_TYPE_UNSPECIFIED",
  "description": "string",
  "estimatedGrossSpend": {
    "amount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "pricingType": "PRICING_TYPE_UNSPECIFIED"
  },
  "estimatedImpressionsPerDay": "string",
  "guaranteedFixedPriceTerms": {
    "fixedPrices": [
      {
        "advertiserIds": [
          "string"
        ],
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        }
      }
    ],
    "guaranteedImpressions": "string",
    "guaranteedLooks": "string",
    "impressionCap": "string",
    "minimumDailyLooks": "string",
    "percentShareOfVoice": "string",
    "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
  },
  "nonGuaranteedAuctionTerms": {
    "autoOptimizePrivateAuction": true,
    "reservePricesPerBuyer": [
      {
        "advertiserIds": [
          "string"
        ],
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        }
      }
    ]
  },
  "nonGuaranteedFixedPriceTerms": {
    "fixedPrices": [
      {
        "advertiserIds": [
          "string"
        ],
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        }
      }
    ]
  },
  "sellerTimeZone": "string"
}
```

The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandingType|string|false|none|Visibility of the URL in bid requests. (default: BRANDED)|
|description|string|false|none|Publisher provided description for the terms.|
|estimatedGrossSpend|[Price](#schemaprice)|false|none|Non-binding estimate of the estimated gross spend for this deal. Can be set by buyer or seller.|
|estimatedImpressionsPerDay|string(int64)|false|none|Non-binding estimate of the impressions served per day. Can be set by buyer or seller.|
|guaranteedFixedPriceTerms|[GuaranteedFixedPriceTerms](#schemaguaranteedfixedpriceterms)|false|none|The terms for guaranteed fixed price deals.|
|nonGuaranteedAuctionTerms|[NonGuaranteedAuctionTerms](#schemanonguaranteedauctionterms)|false|none|The terms for non-guaranteed auction deals.|
|nonGuaranteedFixedPriceTerms|[NonGuaranteedFixedPriceTerms](#schemanonguaranteedfixedpriceterms)|false|none|The terms for non-guaranteed fixed price deals.|
|sellerTimeZone|string|false|none|The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.|

#### Enumerated Values

|Property|Value|
|---|---|
|brandingType|BRANDING_TYPE_UNSPECIFIED|
|brandingType|BRANDED|
|brandingType|SEMI_TRANSPARENT|

<h2 id="tocS_DeliveryControl">DeliveryControl</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontrol"></a>
<a id="schema_DeliveryControl"></a>
<a id="tocSdeliverycontrol"></a>
<a id="tocsdeliverycontrol"></a>

```json
{
  "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
  "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
  "frequencyCaps": [
    {
      "maxImpressions": 0,
      "numTimeUnits": 0,
      "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
    }
  ]
}
```

Message contains details about how the deals will be paced.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeBlockingLevel|string|false|read-only|Output only. Specified the creative blocking levels to be applied.|
|deliveryRateType|string|false|read-only|Output only. Specifies how the impression delivery will be paced.|
|frequencyCaps|[[FrequencyCap](#schemafrequencycap)]|false|read-only|Output only. Specifies any frequency caps.|

#### Enumerated Values

|Property|Value|
|---|---|
|creativeBlockingLevel|CREATIVE_BLOCKING_LEVEL_UNSPECIFIED|
|creativeBlockingLevel|PUBLISHER_BLOCKING_RULES|
|creativeBlockingLevel|ADX_POLICY_BLOCKING_ONLY|
|deliveryRateType|DELIVERY_RATE_TYPE_UNSPECIFIED|
|deliveryRateType|EVENLY|
|deliveryRateType|FRONT_LOADED|
|deliveryRateType|AS_FAST_AS_POSSIBLE|

<h2 id="tocS_Disapproval">Disapproval</h2>
<!-- backwards compatibility -->
<a id="schemadisapproval"></a>
<a id="schema_Disapproval"></a>
<a id="tocSdisapproval"></a>
<a id="tocsdisapproval"></a>

```json
{
  "details": [
    "string"
  ],
  "reason": "LENGTH_OF_IMAGE_ANIMATION"
}
```

Output only. The reason and details for a disapproval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[string]|false|none|Additional details about the reason for disapproval.|
|reason|string|false|none|The categorized reason for disapproval.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|LENGTH_OF_IMAGE_ANIMATION|
|reason|BROKEN_URL|
|reason|MEDIA_NOT_FUNCTIONAL|
|reason|INVALID_FOURTH_PARTY_CALL|
|reason|INCORRECT_REMARKETING_DECLARATION|
|reason|LANDING_PAGE_ERROR|
|reason|AD_SIZE_DOES_NOT_MATCH_AD_SLOT|
|reason|NO_BORDER|
|reason|FOURTH_PARTY_BROWSER_COOKIES|
|reason|LSO_OBJECTS|
|reason|BLANK_CREATIVE|
|reason|DESTINATION_URLS_UNDECLARED|
|reason|PROBLEM_WITH_CLICK_MACRO|
|reason|INCORRECT_AD_TECHNOLOGY_DECLARATION|
|reason|INCORRECT_DESTINATION_URL_DECLARATION|
|reason|EXPANDABLE_INCORRECT_DIRECTION|
|reason|EXPANDABLE_DIRECTION_NOT_SUPPORTED|
|reason|EXPANDABLE_INVALID_VENDOR|
|reason|EXPANDABLE_FUNCTIONALITY|
|reason|VIDEO_INVALID_VENDOR|
|reason|VIDEO_UNSUPPORTED_LENGTH|
|reason|VIDEO_UNSUPPORTED_FORMAT|
|reason|VIDEO_FUNCTIONALITY|
|reason|LANDING_PAGE_DISABLED|
|reason|MALWARE_SUSPECTED|
|reason|ADULT_IMAGE_OR_VIDEO|
|reason|INACCURATE_AD_TEXT|
|reason|COUNTERFEIT_DESIGNER_GOODS|
|reason|POP_UP|
|reason|INVALID_RTB_PROTOCOL_USAGE|
|reason|RAW_IP_ADDRESS_IN_SNIPPET|
|reason|UNACCEPTABLE_CONTENT_SOFTWARE|
|reason|UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN|
|reason|UNDECLARED_FLASH_OBJECTS|
|reason|INVALID_SSL_DECLARATION|
|reason|DIRECT_DOWNLOAD_IN_AD|
|reason|MAXIMUM_DOWNLOAD_SIZE_EXCEEDED|
|reason|DESTINATION_URL_SITE_NOT_CRAWLABLE|
|reason|BAD_URL_LEGAL_DISAPPROVAL|
|reason|PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED|
|reason|DYNAMIC_DNS_AT_DESTINATION_URL|
|reason|POOR_IMAGE_OR_VIDEO_QUALITY|
|reason|UNACCEPTABLE_IMAGE_CONTENT|
|reason|INCORRECT_IMAGE_LAYOUT|
|reason|IRRELEVANT_IMAGE_OR_VIDEO|
|reason|DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK|
|reason|MISLEADING_CLAIMS_IN_AD|
|reason|RESTRICTED_PRODUCTS|
|reason|UNACCEPTABLE_CONTENT|
|reason|AUTOMATED_AD_CLICKING|
|reason|INVALID_URL_PROTOCOL|
|reason|UNDECLARED_RESTRICTED_CONTENT|
|reason|INVALID_REMARKETING_LIST_USAGE|
|reason|DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT|
|reason|CLICK_TO_DOWNLOAD_NOT_AN_APP|
|reason|INACCURATE_REVIEW_EXTENSION|
|reason|SEXUALLY_EXPLICIT_CONTENT|
|reason|GAINING_AN_UNFAIR_ADVANTAGE|
|reason|GAMING_THE_GOOGLE_NETWORK|
|reason|DANGEROUS_PRODUCTS_KNIVES|
|reason|DANGEROUS_PRODUCTS_EXPLOSIVES|
|reason|DANGEROUS_PRODUCTS_GUNS|
|reason|DANGEROUS_PRODUCTS_DRUGS|
|reason|DANGEROUS_PRODUCTS_TOBACCO|
|reason|DANGEROUS_PRODUCTS_WEAPONS|
|reason|UNCLEAR_OR_IRRELEVANT_AD|
|reason|PROFESSIONAL_STANDARDS|
|reason|DYSFUNCTIONAL_PROMOTION|
|reason|INVALID_INTEREST_BASED_AD|
|reason|MISUSE_OF_PERSONAL_INFORMATION|
|reason|OMISSION_OF_RELEVANT_INFORMATION|
|reason|UNAVAILABLE_PROMOTIONS|
|reason|MISLEADING_PROMOTIONS|
|reason|INAPPROPRIATE_CONTENT|
|reason|SENSITIVE_EVENTS|
|reason|SHOCKING_CONTENT|
|reason|ENABLING_DISHONEST_BEHAVIOR|
|reason|TECHNICAL_REQUIREMENTS|
|reason|RESTRICTED_POLITICAL_CONTENT|
|reason|UNSUPPORTED_CONTENT|
|reason|INVALID_BIDDING_METHOD|
|reason|VIDEO_TOO_LONG|
|reason|VIOLATES_JAPANESE_PHARMACY_LAW|
|reason|UNACCREDITED_PET_PHARMACY|
|reason|ABORTION|
|reason|CONTRACEPTIVES|
|reason|NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA|
|reason|KCDSP_REGISTRATION|
|reason|NOT_FAMILY_SAFE|
|reason|CLINICAL_TRIAL_RECRUITMENT|
|reason|MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED|
|reason|MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED|
|reason|PERSONAL_LOANS|
|reason|UNSUPPORTED_FLASH_CONTENT|
|reason|MISUSE_BY_OMID_SCRIPT|
|reason|NON_WHITELISTED_OMID_VENDOR|
|reason|DESTINATION_EXPERIENCE|
|reason|UNSUPPORTED_LANGUAGE|
|reason|NON_SSL_COMPLIANT|
|reason|TEMPORARY_PAUSE|
|reason|BAIL_BONDS|
|reason|EXPERIMENTAL_MEDICAL_TREATMENT|

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

<h2 id="tocS_FilterSet">FilterSet</h2>
<!-- backwards compatibility -->
<a id="schemafilterset"></a>
<a id="schema_FilterSet"></a>
<a id="tocSfilterset"></a>
<a id="tocsfilterset"></a>

```json
{
  "absoluteDateRange": {
    "endDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "startDate": {
      "day": 0,
      "month": 0,
      "year": 0
    }
  },
  "breakdownDimensions": [
    "BREAKDOWN_DIMENSION_UNSPECIFIED"
  ],
  "creativeId": "string",
  "dealId": "string",
  "environment": "ENVIRONMENT_UNSPECIFIED",
  "format": "FORMAT_UNSPECIFIED",
  "formats": [
    "FORMAT_UNSPECIFIED"
  ],
  "name": "string",
  "platforms": [
    "PLATFORM_UNSPECIFIED"
  ],
  "publisherIdentifiers": [
    "string"
  ],
  "realtimeTimeRange": {
    "startTimestamp": "string"
  },
  "relativeDateRange": {
    "durationDays": 0,
    "offsetDays": 0
  },
  "sellerNetworkIds": [
    0
  ],
  "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
}
```

A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absoluteDateRange|[AbsoluteDateRange](#schemaabsolutedaterange)|false|none|An absolute date range, defined by a start date and an end date. Interpreted relative to Pacific time zone.|
|breakdownDimensions|[string]|false|none|The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions.|
|creativeId|string|false|none|The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.|
|dealId|string(int64)|false|none|The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.|
|environment|string|false|none|The environment on which to filter; optional.|
|format|string|false|none|Creative format bidded on or allowed to bid on, can be empty.|
|formats|[string]|false|none|Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items.|
|name|string|false|none|A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/*/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/*/accounts/*/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations.|
|platforms|[string]|false|none|The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms).|
|publisherIdentifiers|[string]|false|none|For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together.|
|realtimeTimeRange|[RealtimeTimeRange](#schemarealtimetimerange)|false|none|An open-ended realtime time range, defined by the aggregation start timestamp.|
|relativeDateRange|[RelativeDateRange](#schemarelativedaterange)|false|none|A relative date range, defined by an offset from today and a duration. Interpreted relative to Pacific time zone.|
|sellerNetworkIds|[integer(int32)]|false|none|For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.|
|timeSeriesGranularity|string|false|none|The granularity of time intervals if a time series breakdown is preferred; optional.|

#### Enumerated Values

|Property|Value|
|---|---|
|breakdownDimensions|BREAKDOWN_DIMENSION_UNSPECIFIED|
|breakdownDimensions|PUBLISHER_IDENTIFIER|
|environment|ENVIRONMENT_UNSPECIFIED|
|environment|WEB|
|environment|APP|
|format|FORMAT_UNSPECIFIED|
|format|NATIVE_DISPLAY|
|format|NATIVE_VIDEO|
|format|NON_NATIVE_DISPLAY|
|format|NON_NATIVE_VIDEO|
|formats|FORMAT_UNSPECIFIED|
|formats|NATIVE_DISPLAY|
|formats|NATIVE_VIDEO|
|formats|NON_NATIVE_DISPLAY|
|formats|NON_NATIVE_VIDEO|
|platforms|PLATFORM_UNSPECIFIED|
|platforms|DESKTOP|
|platforms|TABLET|
|platforms|MOBILE|
|timeSeriesGranularity|TIME_SERIES_GRANULARITY_UNSPECIFIED|
|timeSeriesGranularity|HOURLY|
|timeSeriesGranularity|DAILY|

<h2 id="tocS_FilteredBidCreativeRow">FilteredBidCreativeRow</h2>
<!-- backwards compatibility -->
<a id="schemafilteredbidcreativerow"></a>
<a id="schema_FilteredBidCreativeRow"></a>
<a id="tocSfilteredbidcreativerow"></a>
<a id="tocsfilteredbidcreativerow"></a>

```json
{
  "bidCount": {
    "value": "string",
    "variance": "string"
  },
  "creativeId": "string",
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  }
}
```

The number of filtered bids with the specified dimension values that have the specified creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidCount|[MetricValue](#schemametricvalue)|false|none|The number of bids with the specified creative.|
|creativeId|string|false|none|The ID of the creative.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|

<h2 id="tocS_FilteredBidDetailRow">FilteredBidDetailRow</h2>
<!-- backwards compatibility -->
<a id="schemafilteredbiddetailrow"></a>
<a id="schema_FilteredBidDetailRow"></a>
<a id="tocSfilteredbiddetailrow"></a>
<a id="tocsfilteredbiddetailrow"></a>

```json
{
  "bidCount": {
    "value": "string",
    "variance": "string"
  },
  "detail": "string",
  "detailId": 0,
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  }
}
```

The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidCount|[MetricValue](#schemametricvalue)|false|none|The number of bids with the specified detail.|
|detail|string|false|none|The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.|
|detailId|integer(int32)|false|none|Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|

<h2 id="tocS_FirstPartyMobileApplicationTargeting">FirstPartyMobileApplicationTargeting</h2>
<!-- backwards compatibility -->
<a id="schemafirstpartymobileapplicationtargeting"></a>
<a id="schema_FirstPartyMobileApplicationTargeting"></a>
<a id="tocSfirstpartymobileapplicationtargeting"></a>
<a id="tocsfirstpartymobileapplicationtargeting"></a>

```json
{
  "excludedAppIds": [
    "string"
  ],
  "targetedAppIds": [
    "string"
  ]
}
```

Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedAppIds|[string]|false|none|A list of application IDs to be excluded.|
|targetedAppIds|[string]|false|none|A list of application IDs to be included.|

<h2 id="tocS_FrequencyCap">FrequencyCap</h2>
<!-- backwards compatibility -->
<a id="schemafrequencycap"></a>
<a id="schema_FrequencyCap"></a>
<a id="tocSfrequencycap"></a>
<a id="tocsfrequencycap"></a>

```json
{
  "maxImpressions": 0,
  "numTimeUnits": 0,
  "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
}
```

Frequency cap.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxImpressions|integer(int32)|false|none|The maximum number of impressions that can be served to a user within the specified time period.|
|numTimeUnits|integer(int32)|false|none|The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.|
|timeUnitType|string|false|none|The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeUnitType|TIME_UNIT_TYPE_UNSPECIFIED|
|timeUnitType|MINUTE|
|timeUnitType|HOUR|
|timeUnitType|DAY|
|timeUnitType|WEEK|
|timeUnitType|MONTH|
|timeUnitType|LIFETIME|
|timeUnitType|POD|
|timeUnitType|STREAM|

<h2 id="tocS_GuaranteedFixedPriceTerms">GuaranteedFixedPriceTerms</h2>
<!-- backwards compatibility -->
<a id="schemaguaranteedfixedpriceterms"></a>
<a id="schema_GuaranteedFixedPriceTerms"></a>
<a id="tocSguaranteedfixedpriceterms"></a>
<a id="tocsguaranteedfixedpriceterms"></a>

```json
{
  "fixedPrices": [
    {
      "advertiserIds": [
        "string"
      ],
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "pricingType": "PRICING_TYPE_UNSPECIFIED"
      }
    }
  ],
  "guaranteedImpressions": "string",
  "guaranteedLooks": "string",
  "impressionCap": "string",
  "minimumDailyLooks": "string",
  "percentShareOfVoice": "string",
  "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
}
```

Terms for Programmatic Guaranteed Deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedPrices|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Fixed price for the specified buyer.|
|guaranteedImpressions|string(int64)|false|none|Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.|
|guaranteedLooks|string(int64)|false|none|Count of guaranteed looks. Required for deal, optional for product.|
|impressionCap|string(int64)|false|none|The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached.|
|minimumDailyLooks|string(int64)|false|none|Daily minimum looks for CPD deal types.|
|percentShareOfVoice|string(int64)|false|none|For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached.|
|reservationType|string|false|none|The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.|

#### Enumerated Values

|Property|Value|
|---|---|
|reservationType|RESERVATION_TYPE_UNSPECIFIED|
|reservationType|STANDARD|
|reservationType|SPONSORSHIP|

<h2 id="tocS_HtmlContent">HtmlContent</h2>
<!-- backwards compatibility -->
<a id="schemahtmlcontent"></a>
<a id="schema_HtmlContent"></a>
<a id="tocShtmlcontent"></a>
<a id="tocshtmlcontent"></a>

```json
{
  "height": 0,
  "snippet": "string",
  "width": 0
}
```

HTML content for a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height of the HTML snippet in pixels.|
|snippet|string|false|none|The HTML snippet that displays the ad when inserted in the web page.|
|width|integer(int32)|false|none|The width of the HTML snippet in pixels.|

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "height": 0,
  "url": "string",
  "width": 0
}
```

An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|Image height in pixels.|
|url|string|false|none|The URL of the image.|
|width|integer(int32)|false|none|Image width in pixels.|

<h2 id="tocS_ImpressionMetricsRow">ImpressionMetricsRow</h2>
<!-- backwards compatibility -->
<a id="schemaimpressionmetricsrow"></a>
<a id="schema_ImpressionMetricsRow"></a>
<a id="tocSimpressionmetricsrow"></a>
<a id="tocsimpressionmetricsrow"></a>

```json
{
  "availableImpressions": {
    "value": "string",
    "variance": "string"
  },
  "bidRequests": {
    "value": "string",
    "variance": "string"
  },
  "inventoryMatches": {
    "value": "string",
    "variance": "string"
  },
  "responsesWithBids": {
    "value": "string",
    "variance": "string"
  },
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "successfulResponses": {
    "value": "string",
    "variance": "string"
  }
}
```

The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableImpressions|[MetricValue](#schemametricvalue)|false|none|The number of impressions available to the buyer on Ad Exchange. In some cases this value may be unavailable.|
|bidRequests|[MetricValue](#schemametricvalue)|false|none|The number of impressions for which Ad Exchange sent the buyer a bid request.|
|inventoryMatches|[MetricValue](#schemametricvalue)|false|none|The number of impressions that match the buyer's inventory pretargeting.|
|responsesWithBids|[MetricValue](#schemametricvalue)|false|none|The number of impressions for which Ad Exchange received a response from the buyer that contained at least one applicable bid.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|
|successfulResponses|[MetricValue](#schemametricvalue)|false|none|The number of impressions for which the buyer successfully sent a response to Ad Exchange.|

<h2 id="tocS_InventorySizeTargeting">InventorySizeTargeting</h2>
<!-- backwards compatibility -->
<a id="schemainventorysizetargeting"></a>
<a id="schema_InventorySizeTargeting"></a>
<a id="tocSinventorysizetargeting"></a>
<a id="tocsinventorysizetargeting"></a>

```json
{
  "excludedInventorySizes": [
    {
      "height": "string",
      "sizeType": "SIZE_TYPE_UNSPECIFIED",
      "width": "string"
    }
  ],
  "targetedInventorySizes": [
    {
      "height": "string",
      "sizeType": "SIZE_TYPE_UNSPECIFIED",
      "width": "string"
    }
  ]
}
```

Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedInventorySizes|[[AdSize](#schemaadsize)]|false|none|A list of inventory sizes to be excluded.|
|targetedInventorySizes|[[AdSize](#schemaadsize)]|false|none|A list of inventory sizes to be included.|

<h2 id="tocS_ListBidMetricsResponse">ListBidMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbidmetricsresponse"></a>
<a id="schema_ListBidMetricsResponse"></a>
<a id="tocSlistbidmetricsresponse"></a>
<a id="tocslistbidmetricsresponse"></a>

```json
{
  "bidMetricsRows": [
    {
      "bids": {
        "value": "string",
        "variance": "string"
      },
      "bidsInAuction": {
        "value": "string",
        "variance": "string"
      },
      "billedImpressions": {
        "value": "string",
        "variance": "string"
      },
      "impressionsWon": {
        "value": "string",
        "variance": "string"
      },
      "measurableImpressions": {
        "value": "string",
        "variance": "string"
      },
      "reachedQueries": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "viewableImpressions": {
        "value": "string",
        "variance": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing the metrics that are measured in number of bids.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidMetricsRows|[[BidMetricsRow](#schemabidmetricsrow)]|false|none|List of rows, each containing a set of bid metrics.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results.|

<h2 id="tocS_ListBidResponseErrorsResponse">ListBidResponseErrorsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbidresponseerrorsresponse"></a>
<a id="schema_ListBidResponseErrorsResponse"></a>
<a id="tocSlistbidresponseerrorsresponse"></a>
<a id="tocslistbidresponseerrorsresponse"></a>

```json
{
  "calloutStatusRows": [
    {
      "calloutStatusId": 0,
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all reasons that bid responses resulted in an error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calloutStatusRows|[[CalloutStatusRow](#schemacalloutstatusrow)]|false|none|List of rows, with counts of bid responses aggregated by callout status.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results.|

<h2 id="tocS_ListBidResponsesWithoutBidsResponse">ListBidResponsesWithoutBidsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistbidresponseswithoutbidsresponse"></a>
<a id="schema_ListBidResponsesWithoutBidsResponse"></a>
<a id="tocSlistbidresponseswithoutbidsresponse"></a>
<a id="tocslistbidresponseswithoutbidsresponse"></a>

```json
{
  "bidResponseWithoutBidsStatusRows": [
    {
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "status": "STATUS_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all reasons that bid responses were considered to have no applicable bids.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidResponseWithoutBidsStatusRows|[[BidResponseWithoutBidsStatusRow](#schemabidresponsewithoutbidsstatusrow)]|false|none|List of rows, with counts of bid responses without bids aggregated by status.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results.|

<h2 id="tocS_ListClientUserInvitationsResponse">ListClientUserInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientuserinvitationsresponse"></a>
<a id="schema_ListClientUserInvitationsResponse"></a>
<a id="tocSlistclientuserinvitationsresponse"></a>
<a id="tocslistclientuserinvitationsresponse"></a>

```json
{
  "invitations": [
    {
      "clientAccountId": "string",
      "email": "string",
      "invitationId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[ClientUserInvitation](#schemaclientuserinvitation)]|false|none|The returned list of client users.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.|

<h2 id="tocS_ListClientUsersResponse">ListClientUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientusersresponse"></a>
<a id="schema_ListClientUsersResponse"></a>
<a id="tocSlistclientusersresponse"></a>
<a id="tocslistclientusersresponse"></a>

```json
{
  "nextPageToken": "string",
  "users": [
    {
      "clientAccountId": "string",
      "email": "string",
      "status": "USER_STATUS_UNSPECIFIED",
      "userId": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.|
|users|[[ClientUser](#schemaclientuser)]|false|none|The returned list of client users.|

<h2 id="tocS_ListClientsResponse">ListClientsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistclientsresponse"></a>
<a id="schema_ListClientsResponse"></a>
<a id="tocSlistclientsresponse"></a>
<a id="tocslistclientsresponse"></a>

```json
{
  "clients": [
    {
      "clientAccountId": "string",
      "clientName": "string",
      "entityId": "string",
      "entityName": "string",
      "entityType": "ENTITY_TYPE_UNSPECIFIED",
      "partnerClientId": "string",
      "role": "CLIENT_ROLE_UNSPECIFIED",
      "status": "CLIENT_STATUS_UNSPECIFIED",
      "visibleToSeller": true
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[[Client](#schemaclient)]|false|none|The returned list of clients.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results.|

<h2 id="tocS_ListCreativeStatusBreakdownByCreativeResponse">ListCreativeStatusBreakdownByCreativeResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreativestatusbreakdownbycreativeresponse"></a>
<a id="schema_ListCreativeStatusBreakdownByCreativeResponse"></a>
<a id="tocSlistcreativestatusbreakdownbycreativeresponse"></a>
<a id="tocslistcreativestatusbreakdownbycreativeresponse"></a>

```json
{
  "filteredBidCreativeRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeId": "string",
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all creatives associated with a given filtered bid reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filteredBidCreativeRows|[[FilteredBidCreativeRow](#schemafilteredbidcreativerow)]|false|none|List of rows, with counts of bids with a given creative status aggregated by creative.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results.|

<h2 id="tocS_ListCreativeStatusBreakdownByDetailResponse">ListCreativeStatusBreakdownByDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreativestatusbreakdownbydetailresponse"></a>
<a id="schema_ListCreativeStatusBreakdownByDetailResponse"></a>
<a id="tocSlistcreativestatusbreakdownbydetailresponse"></a>
<a id="tocslistcreativestatusbreakdownbydetailresponse"></a>

```json
{
  "detailType": "DETAIL_TYPE_UNSPECIFIED",
  "filteredBidDetailRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "detail": "string",
      "detailId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all details associated with a given filtered bid reason.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detailType|string|false|none|The type of detail that the detail IDs represent.|
|filteredBidDetailRows|[[FilteredBidDetailRow](#schemafilteredbiddetailrow)]|false|none|List of rows, with counts of bids with a given creative status aggregated by detail.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results.|

#### Enumerated Values

|Property|Value|
|---|---|
|detailType|DETAIL_TYPE_UNSPECIFIED|
|detailType|CREATIVE_ATTRIBUTE|
|detailType|VENDOR|
|detailType|SENSITIVE_CATEGORY|
|detailType|PRODUCT_CATEGORY|
|detailType|DISAPPROVAL_REASON|
|detailType|POLICY_TOPIC|
|detailType|ATP_VENDOR|
|detailType|VENDOR_DOMAIN|
|detailType|GVL_ID|

<h2 id="tocS_ListCreativesResponse">ListCreativesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreativesresponse"></a>
<a id="schema_ListCreativesResponse"></a>
<a id="tocSlistcreativesresponse"></a>
<a id="tocslistcreativesresponse"></a>

```json
{
  "creatives": [
    {
      "accountId": "string",
      "adChoicesDestinationUrl": "string",
      "adTechnologyProviders": {
        "detectedProviderIds": [
          "string"
        ],
        "hasUnidentifiedProvider": true
      },
      "advertiserName": "string",
      "agencyId": "string",
      "apiUpdateTime": "string",
      "attributes": [
        "ATTRIBUTE_UNSPECIFIED"
      ],
      "clickThroughUrls": [
        "string"
      ],
      "corrections": [
        {
          "contexts": [
            {
              "all": "SIMPLE_CONTEXT",
              "appType": {
                "appTypes": [
                  "NATIVE"
                ]
              },
              "auctionType": {
                "auctionTypes": [
                  "OPEN_AUCTION"
                ]
              },
              "location": {
                "geoCriteriaIds": [
                  0
                ]
              },
              "platform": {
                "platforms": [
                  "DESKTOP"
                ]
              },
              "securityType": {
                "securities": [
                  "INSECURE"
                ]
              }
            }
          ],
          "details": [
            "string"
          ],
          "type": "CORRECTION_TYPE_UNSPECIFIED"
        }
      ],
      "creativeId": "string",
      "dealsStatus": "STATUS_UNSPECIFIED",
      "declaredClickThroughUrls": [
        "string"
      ],
      "detectedAdvertiserIds": [
        "string"
      ],
      "detectedDomains": [
        "string"
      ],
      "detectedLanguages": [
        "string"
      ],
      "detectedProductCategories": [
        0
      ],
      "detectedSensitiveCategories": [
        0
      ],
      "html": {
        "height": 0,
        "snippet": "string",
        "width": 0
      },
      "impressionTrackingUrls": [
        "string"
      ],
      "native": {
        "advertiserName": "string",
        "appIcon": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "body": "string",
        "callToAction": "string",
        "clickLinkUrl": "string",
        "clickTrackingUrl": "string",
        "headline": "string",
        "image": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "logo": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "priceDisplayText": "string",
        "starRating": 0,
        "storeUrl": "string",
        "videoUrl": "string"
      },
      "openAuctionStatus": "STATUS_UNSPECIFIED",
      "restrictedCategories": [
        "NO_RESTRICTED_CATEGORIES"
      ],
      "servingRestrictions": [
        {
          "contexts": [
            {
              "all": "SIMPLE_CONTEXT",
              "appType": {
                "appTypes": [
                  "NATIVE"
                ]
              },
              "auctionType": {
                "auctionTypes": [
                  "OPEN_AUCTION"
                ]
              },
              "location": {
                "geoCriteriaIds": [
                  0
                ]
              },
              "platform": {
                "platforms": [
                  "DESKTOP"
                ]
              },
              "securityType": {
                "securities": [
                  "INSECURE"
                ]
              }
            }
          ],
          "disapproval": {
            "details": [
              "string"
            ],
            "reason": "LENGTH_OF_IMAGE_ANIMATION"
          },
          "disapprovalReasons": [
            {
              "details": [
                "string"
              ],
              "reason": "LENGTH_OF_IMAGE_ANIMATION"
            }
          ],
          "status": "STATUS_UNSPECIFIED"
        }
      ],
      "vendorIds": [
        0
      ],
      "version": 0,
      "video": {
        "videoUrl": "string",
        "videoVastXml": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

A response for listing creatives.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creatives|[[Creative](#schemacreative)]|false|none|The list of creatives.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results.|

<h2 id="tocS_ListDealAssociationsResponse">ListDealAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdealassociationsresponse"></a>
<a id="schema_ListDealAssociationsResponse"></a>
<a id="tocSlistdealassociationsresponse"></a>
<a id="tocslistdealassociationsresponse"></a>

```json
{
  "associations": [
    {
      "accountId": "string",
      "creativeId": "string",
      "dealsId": "string"
    }
  ],
  "nextPageToken": "string"
}
```

A response for listing creative and deal associations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[[CreativeDealAssociation](#schemacreativedealassociation)]|false|none|The list of associations.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results.|

<h2 id="tocS_ListFilterSetsResponse">ListFilterSetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfiltersetsresponse"></a>
<a id="schema_ListFilterSetsResponse"></a>
<a id="tocSlistfiltersetsresponse"></a>
<a id="tocslistfiltersetsresponse"></a>

```json
{
  "filterSets": [
    {
      "absoluteDateRange": {
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      },
      "breakdownDimensions": [
        "BREAKDOWN_DIMENSION_UNSPECIFIED"
      ],
      "creativeId": "string",
      "dealId": "string",
      "environment": "ENVIRONMENT_UNSPECIFIED",
      "format": "FORMAT_UNSPECIFIED",
      "formats": [
        "FORMAT_UNSPECIFIED"
      ],
      "name": "string",
      "platforms": [
        "PLATFORM_UNSPECIFIED"
      ],
      "publisherIdentifiers": [
        "string"
      ],
      "realtimeTimeRange": {
        "startTimestamp": "string"
      },
      "relativeDateRange": {
        "durationDays": 0,
        "offsetDays": 0
      },
      "sellerNetworkIds": [
        0
      ],
      "timeSeriesGranularity": "TIME_SERIES_GRANULARITY_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing filter sets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterSets|[[FilterSet](#schemafilterset)]|false|none|The filter sets belonging to the buyer.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results.|

<h2 id="tocS_ListFilteredBidRequestsResponse">ListFilteredBidRequestsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfilteredbidrequestsresponse"></a>
<a id="schema_ListFilteredBidRequestsResponse"></a>
<a id="tocSlistfilteredbidrequestsresponse"></a>
<a id="tocslistfilteredbidrequestsresponse"></a>

```json
{
  "calloutStatusRows": [
    {
      "calloutStatusId": 0,
      "impressionCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all reasons that bid requests were filtered and not sent to the buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calloutStatusRows|[[CalloutStatusRow](#schemacalloutstatusrow)]|false|none|List of rows, with counts of filtered bid requests aggregated by callout status.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results.|

<h2 id="tocS_ListFilteredBidsResponse">ListFilteredBidsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfilteredbidsresponse"></a>
<a id="schema_ListFilteredBidsResponse"></a>
<a id="tocSlistfilteredbidsresponse"></a>
<a id="tocslistfilteredbidsresponse"></a>

```json
{
  "creativeStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeStatusId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all reasons that bids were filtered from the auction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeStatusRows|[[CreativeStatusRow](#schemacreativestatusrow)]|false|none|List of rows, with counts of filtered bids aggregated by filtering reason (for example, creative status).|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results.|

<h2 id="tocS_ListImpressionMetricsResponse">ListImpressionMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistimpressionmetricsresponse"></a>
<a id="schema_ListImpressionMetricsResponse"></a>
<a id="tocSlistimpressionmetricsresponse"></a>
<a id="tocslistimpressionmetricsresponse"></a>

```json
{
  "impressionMetricsRows": [
    {
      "availableImpressions": {
        "value": "string",
        "variance": "string"
      },
      "bidRequests": {
        "value": "string",
        "variance": "string"
      },
      "inventoryMatches": {
        "value": "string",
        "variance": "string"
      },
      "responsesWithBids": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "successfulResponses": {
        "value": "string",
        "variance": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing the metrics that are measured in number of impressions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|impressionMetricsRows|[[ImpressionMetricsRow](#schemaimpressionmetricsrow)]|false|none|List of rows, each containing a set of impression metrics.|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results.|

<h2 id="tocS_ListLosingBidsResponse">ListLosingBidsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlosingbidsresponse"></a>
<a id="schema_ListLosingBidsResponse"></a>
<a id="tocSlistlosingbidsresponse"></a>
<a id="tocslistlosingbidsresponse"></a>

```json
{
  "creativeStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "creativeStatusId": 0,
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response message for listing all reasons that bids lost in the auction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeStatusRows|[[CreativeStatusRow](#schemacreativestatusrow)]|false|none|List of rows, with counts of losing bids aggregated by loss reason (for example, creative status).|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results.|

<h2 id="tocS_ListNonBillableWinningBidsResponse">ListNonBillableWinningBidsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistnonbillablewinningbidsresponse"></a>
<a id="schema_ListNonBillableWinningBidsResponse"></a>
<a id="tocSlistnonbillablewinningbidsresponse"></a>
<a id="tocslistnonbillablewinningbidsresponse"></a>

```json
{
  "nextPageToken": "string",
  "nonBillableWinningBidStatusRows": [
    {
      "bidCount": {
        "value": "string",
        "variance": "string"
      },
      "rowDimensions": {
        "publisherIdentifier": "string",
        "timeInterval": {
          "endTime": "string",
          "startTime": "string"
        }
      },
      "status": "STATUS_UNSPECIFIED"
    }
  ]
}
```

Response message for listing all reasons for which a buyer was not billed for a winning bid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results.|
|nonBillableWinningBidStatusRows|[[NonBillableWinningBidStatusRow](#schemanonbillablewinningbidstatusrow)]|false|none|List of rows, with counts of bids not billed aggregated by reason.|

<h2 id="tocS_ListProductsResponse">ListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproductsresponse"></a>
<a id="schema_ListProductsResponse"></a>
<a id="tocSlistproductsresponse"></a>
<a id="tocslistproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "createTime": "string",
      "creatorContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "displayName": "string",
      "hasCreatorSignedOff": true,
      "productId": "string",
      "productRevision": "string",
      "publisherProfileId": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "terms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ]
}
```

Response message for listing products visible to the buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|List pagination support.|
|products|[[Product](#schemaproduct)]|false|none|The list of matching products at their head revision number.|

<h2 id="tocS_ListProposalsResponse">ListProposalsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistproposalsresponse"></a>
<a id="schema_ListProposalsResponse"></a>
<a id="tocSlistproposalsresponse"></a>
<a id="tocslistproposalsresponse"></a>

```json
{
  "nextPageToken": "string",
  "proposals": [
    {
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "buyerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "deals": [
        {
          "availableEndTime": "string",
          "availableStartTime": "string",
          "buyerPrivateData": {
            "referenceId": "string"
          },
          "createProductId": "string",
          "createProductRevision": "string",
          "createTime": "string",
          "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
          "creativeRestrictions": {
            "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
            "creativeSpecifications": [
              {
                "creativeCompanionSizes": [
                  {
                    "height": "string",
                    "sizeType": "SIZE_TYPE_UNSPECIFIED",
                    "width": "string"
                  }
                ],
                "creativeSize": {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              }
            ],
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
          "dealId": "string",
          "dealServingMetadata": {
            "dealPauseStatus": {
              "buyerPauseReason": "string",
              "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
              "hasBuyerPaused": true,
              "hasSellerPaused": true,
              "sellerPauseReason": "string"
            }
          },
          "dealTerms": {
            "brandingType": "BRANDING_TYPE_UNSPECIFIED",
            "description": "string",
            "estimatedGrossSpend": {
              "amount": {
                "currencyCode": "string",
                "nanos": 0,
                "units": "string"
              },
              "pricingType": "PRICING_TYPE_UNSPECIFIED"
            },
            "estimatedImpressionsPerDay": "string",
            "guaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ],
              "guaranteedImpressions": "string",
              "guaranteedLooks": "string",
              "impressionCap": "string",
              "minimumDailyLooks": "string",
              "percentShareOfVoice": "string",
              "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
            },
            "nonGuaranteedAuctionTerms": {
              "autoOptimizePrivateAuction": true,
              "reservePricesPerBuyer": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "nonGuaranteedFixedPriceTerms": {
              "fixedPrices": [
                {
                  "advertiserIds": [
                    "string"
                  ],
                  "buyer": {
                    "accountId": "string"
                  },
                  "price": {
                    "amount": {
                      "currencyCode": "string",
                      "nanos": 0,
                      "units": "string"
                    },
                    "pricingType": "PRICING_TYPE_UNSPECIFIED"
                  }
                }
              ]
            },
            "sellerTimeZone": "string"
          },
          "deliveryControl": {
            "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
            "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
            "frequencyCaps": [
              {
                "maxImpressions": 0,
                "numTimeUnits": 0,
                "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
              }
            ]
          },
          "description": "string",
          "displayName": "string",
          "externalDealId": "string",
          "isSetupComplete": true,
          "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
          "proposalId": "string",
          "sellerContacts": [
            {
              "email": "string",
              "name": "string"
            }
          ],
          "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
          "targeting": {
            "geoTargeting": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "inventorySizeTargeting": {
              "excludedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ],
              "targetedInventorySizes": [
                {
                  "height": "string",
                  "sizeType": "SIZE_TYPE_UNSPECIFIED",
                  "width": "string"
                }
              ]
            },
            "placementTargeting": {
              "mobileApplicationTargeting": {
                "firstPartyTargeting": {
                  "excludedAppIds": [
                    "string"
                  ],
                  "targetedAppIds": [
                    "string"
                  ]
                }
              },
              "urlTargeting": {
                "excludedUrls": [
                  "string"
                ],
                "targetedUrls": [
                  "string"
                ]
              }
            },
            "technologyTargeting": {
              "deviceCapabilityTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "deviceCategoryTargeting": {
                "excludedCriteriaIds": [
                  "string"
                ],
                "targetedCriteriaIds": [
                  "string"
                ]
              },
              "operatingSystemTargeting": {
                "operatingSystemCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                },
                "operatingSystemVersionCriteria": {
                  "excludedCriteriaIds": [
                    "string"
                  ],
                  "targetedCriteriaIds": [
                    "string"
                  ]
                }
              }
            },
            "videoTargeting": {
              "excludedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ],
              "targetedPositionTypes": [
                "POSITION_TYPE_UNSPECIFIED"
              ]
            }
          },
          "targetingCriterion": [
            {
              "exclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "inclusions": [
                {
                  "creativeSizeValue": {
                    "allowedFormats": [
                      "UNKNOWN"
                    ],
                    "companionSizes": [
                      {
                        "height": 0,
                        "width": 0
                      }
                    ],
                    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                    "size": {
                      "height": 0,
                      "width": 0
                    },
                    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
                  },
                  "dayPartTargetingValue": {
                    "dayParts": [
                      {
                        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                        "endTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        },
                        "startTime": {
                          "hours": 0,
                          "minutes": 0,
                          "nanos": 0,
                          "seconds": 0
                        }
                      }
                    ],
                    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
                  },
                  "longValue": "string",
                  "stringValue": "string"
                }
              ],
              "key": "string"
            }
          ],
          "updateTime": "string",
          "webPropertyCode": "string"
        }
      ],
      "displayName": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "notes": [
        {
          "createTime": "string",
          "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "note": "string",
          "noteId": "string",
          "proposalRevision": "string"
        }
      ],
      "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalRevision": "string",
      "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "termsAndConditions": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for listing proposals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Continuation token for fetching the next page of results.|
|proposals|[[Proposal](#schemaproposal)]|false|none|The list of proposals.|

<h2 id="tocS_ListPublisherProfilesResponse">ListPublisherProfilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpublisherprofilesresponse"></a>
<a id="schema_ListPublisherProfilesResponse"></a>
<a id="tocSlistpublisherprofilesresponse"></a>
<a id="tocslistpublisherprofilesresponse"></a>

```json
{
  "nextPageToken": "string",
  "publisherProfiles": [
    {
      "audienceDescription": "string",
      "buyerPitchStatement": "string",
      "directDealsContact": "string",
      "displayName": "string",
      "domains": [
        "string"
      ],
      "googlePlusUrl": "string",
      "isParent": true,
      "logoUrl": "string",
      "mediaKitUrl": "string",
      "mobileApps": [
        {
          "appStore": "APP_STORE_TYPE_UNSPECIFIED",
          "externalAppId": "string",
          "name": "string"
        }
      ],
      "overview": "string",
      "programmaticDealsContact": "string",
      "publisherProfileId": "string",
      "rateCardInfoUrl": "string",
      "samplePageUrl": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

Response message for profiles visible to the buyer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|List pagination support|
|publisherProfiles|[[PublisherProfile](#schemapublisherprofile)]|false|none|The list of matching publisher profiles.|

<h2 id="tocS_LocationContext">LocationContext</h2>
<!-- backwards compatibility -->
<a id="schemalocationcontext"></a>
<a id="schema_LocationContext"></a>
<a id="tocSlocationcontext"></a>
<a id="tocslocationcontext"></a>

```json
{
  "geoCriteriaIds": [
    0
  ]
}
```

Output only. The Geo criteria the restriction applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoCriteriaIds|[integer(int32)]|false|none|IDs representing the geo location for this context. Refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs.|

<h2 id="tocS_MarketplaceTargeting">MarketplaceTargeting</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacetargeting"></a>
<a id="schema_MarketplaceTargeting"></a>
<a id="tocSmarketplacetargeting"></a>
<a id="tocsmarketplacetargeting"></a>

```json
{
  "geoTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "inventorySizeTargeting": {
    "excludedInventorySizes": [
      {
        "height": "string",
        "sizeType": "SIZE_TYPE_UNSPECIFIED",
        "width": "string"
      }
    ],
    "targetedInventorySizes": [
      {
        "height": "string",
        "sizeType": "SIZE_TYPE_UNSPECIFIED",
        "width": "string"
      }
    ]
  },
  "placementTargeting": {
    "mobileApplicationTargeting": {
      "firstPartyTargeting": {
        "excludedAppIds": [
          "string"
        ],
        "targetedAppIds": [
          "string"
        ]
      }
    },
    "urlTargeting": {
      "excludedUrls": [
        "string"
      ],
      "targetedUrls": [
        "string"
      ]
    }
  },
  "technologyTargeting": {
    "deviceCapabilityTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "deviceCategoryTargeting": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "operatingSystemTargeting": {
      "operatingSystemCriteria": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      },
      "operatingSystemVersionCriteria": {
        "excludedCriteriaIds": [
          "string"
        ],
        "targetedCriteriaIds": [
          "string"
        ]
      }
    }
  },
  "videoTargeting": {
    "excludedPositionTypes": [
      "POSITION_TYPE_UNSPECIFIED"
    ],
    "targetedPositionTypes": [
      "POSITION_TYPE_UNSPECIFIED"
    ]
  }
}
```

Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|geoTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|Geo criteria IDs to be included/excluded.|
|inventorySizeTargeting|[InventorySizeTargeting](#schemainventorysizetargeting)|false|none|Inventory sizes to be included/excluded.|
|placementTargeting|[PlacementTargeting](#schemaplacementtargeting)|false|none|Placement targeting information, for example, URL, mobile applications.|
|technologyTargeting|[TechnologyTargeting](#schematechnologytargeting)|false|none|Technology targeting information, for example, operating system, device category.|
|videoTargeting|[VideoTargeting](#schemavideotargeting)|false|none|Video targeting information.|

<h2 id="tocS_MetricValue">MetricValue</h2>
<!-- backwards compatibility -->
<a id="schemametricvalue"></a>
<a id="schema_MetricValue"></a>
<a id="tocSmetricvalue"></a>
<a id="tocsmetricvalue"></a>

```json
{
  "value": "string",
  "variance": "string"
}
```

A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string(int64)|false|none|The expected value of the metric.|
|variance|string(int64)|false|none|The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value|

<h2 id="tocS_MobileApplicationTargeting">MobileApplicationTargeting</h2>
<!-- backwards compatibility -->
<a id="schemamobileapplicationtargeting"></a>
<a id="schema_MobileApplicationTargeting"></a>
<a id="tocSmobileapplicationtargeting"></a>
<a id="tocsmobileapplicationtargeting"></a>

```json
{
  "firstPartyTargeting": {
    "excludedAppIds": [
      "string"
    ],
    "targetedAppIds": [
      "string"
    ]
  }
}
```

Mobile application targeting settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstPartyTargeting|[FirstPartyMobileApplicationTargeting](#schemafirstpartymobileapplicationtargeting)|false|none|Publisher owned apps to be targeted or excluded by the publisher to display the ads in.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_NativeContent">NativeContent</h2>
<!-- backwards compatibility -->
<a id="schemanativecontent"></a>
<a id="schema_NativeContent"></a>
<a id="tocSnativecontent"></a>
<a id="tocsnativecontent"></a>

```json
{
  "advertiserName": "string",
  "appIcon": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "body": "string",
  "callToAction": "string",
  "clickLinkUrl": "string",
  "clickTrackingUrl": "string",
  "headline": "string",
  "image": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "logo": {
    "height": 0,
    "url": "string",
    "width": 0
  },
  "priceDisplayText": "string",
  "starRating": 0,
  "storeUrl": "string",
  "videoUrl": "string"
}
```

Native content for a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertiserName|string|false|none|The name of the advertiser or sponsor, to be displayed in the ad creative.|
|appIcon|[Image](#schemaimage)|false|none|The app icon, for app download ads.|
|body|string|false|none|A long description of the ad.|
|callToAction|string|false|none|A label for the button that the user is supposed to click.|
|clickLinkUrl|string|false|none|The URL that the browser/SDK will load when the user clicks the ad.|
|clickTrackingUrl|string|false|none|The URL to use for click tracking.|
|headline|string|false|none|A short title for the ad.|
|image|[Image](#schemaimage)|false|none|A large image.|
|logo|[Image](#schemaimage)|false|none|A smaller image, for the advertiser's logo.|
|priceDisplayText|string|false|none|The price of the promoted app including currency info.|
|starRating|number(double)|false|none|The app rating in the app store. Must be in the range [0-5].|
|storeUrl|string|false|none|The URL to the app store to purchase/download the promoted app.|
|videoUrl|string|false|none|The URL to fetch a native video ad.|

<h2 id="tocS_NonBillableWinningBidStatusRow">NonBillableWinningBidStatusRow</h2>
<!-- backwards compatibility -->
<a id="schemanonbillablewinningbidstatusrow"></a>
<a id="schema_NonBillableWinningBidStatusRow"></a>
<a id="tocSnonbillablewinningbidstatusrow"></a>
<a id="tocsnonbillablewinningbidstatusrow"></a>

```json
{
  "bidCount": {
    "value": "string",
    "variance": "string"
  },
  "rowDimensions": {
    "publisherIdentifier": "string",
    "timeInterval": {
      "endTime": "string",
      "startTime": "string"
    }
  },
  "status": "STATUS_UNSPECIFIED"
}
```

The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidCount|[MetricValue](#schemametricvalue)|false|none|The number of bids with the specified status.|
|rowDimensions|[RowDimensions](#schemarowdimensions)|false|none|The values of all dimensions associated with metric values in this row.|
|status|string|false|none|The status specifying why the winning bids were not billed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|AD_NOT_RENDERED|
|status|INVALID_IMPRESSION|
|status|FATAL_VAST_ERROR|
|status|LOST_IN_MEDIATION|

<h2 id="tocS_NonGuaranteedAuctionTerms">NonGuaranteedAuctionTerms</h2>
<!-- backwards compatibility -->
<a id="schemanonguaranteedauctionterms"></a>
<a id="schema_NonGuaranteedAuctionTerms"></a>
<a id="tocSnonguaranteedauctionterms"></a>
<a id="tocsnonguaranteedauctionterms"></a>

```json
{
  "autoOptimizePrivateAuction": true,
  "reservePricesPerBuyer": [
    {
      "advertiserIds": [
        "string"
      ],
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "pricingType": "PRICING_TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoOptimizePrivateAuction|boolean|false|none|True if open auction buyers are allowed to compete with invited buyers in this private auction.|
|reservePricesPerBuyer|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Reserve price for the specified buyer.|

<h2 id="tocS_NonGuaranteedFixedPriceTerms">NonGuaranteedFixedPriceTerms</h2>
<!-- backwards compatibility -->
<a id="schemanonguaranteedfixedpriceterms"></a>
<a id="schema_NonGuaranteedFixedPriceTerms"></a>
<a id="tocSnonguaranteedfixedpriceterms"></a>
<a id="tocsnonguaranteedfixedpriceterms"></a>

```json
{
  "fixedPrices": [
    {
      "advertiserIds": [
        "string"
      ],
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amount": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "pricingType": "PRICING_TYPE_UNSPECIFIED"
      }
    }
  ]
}
```

Terms for Preferred Deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedPrices|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Fixed price for the specified buyer.|

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "createTime": "string",
  "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "note": "string",
  "noteId": "string",
  "proposalRevision": "string"
}
```

A proposal may be associated to several notes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. The timestamp for when this note was created.|
|creatorRole|string|false|read-only|Output only. The role of the person (buyer/seller) creating the note.|
|note|string|false|none|The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|noteId|string|false|read-only|Output only. The unique ID for the note.|
|proposalRevision|string(int64)|false|read-only|Output only. The revision number of the proposal when the note is created.|

#### Enumerated Values

|Property|Value|
|---|---|
|creatorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|creatorRole|BUYER|
|creatorRole|SELLER|

<h2 id="tocS_OperatingSystemTargeting">OperatingSystemTargeting</h2>
<!-- backwards compatibility -->
<a id="schemaoperatingsystemtargeting"></a>
<a id="schema_OperatingSystemTargeting"></a>
<a id="tocSoperatingsystemtargeting"></a>
<a id="tocsoperatingsystemtargeting"></a>

```json
{
  "operatingSystemCriteria": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "operatingSystemVersionCriteria": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  }
}
```

Represents targeting information for operating systems.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operatingSystemCriteria|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of operating systems to be included/excluded.|
|operatingSystemVersionCriteria|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of operating system versions to be included/excluded.|

<h2 id="tocS_PauseProposalDealsRequest">PauseProposalDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemapauseproposaldealsrequest"></a>
<a id="schema_PauseProposalDealsRequest"></a>
<a id="tocSpauseproposaldealsrequest"></a>
<a id="tocspauseproposaldealsrequest"></a>

```json
{
  "externalDealIds": [
    "string"
  ],
  "reason": "string"
}
```

Request message to pause serving for finalized deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalDealIds|[string]|false|none|The external_deal_id's of the deals to be paused. If empty, all the deals in the proposal will be paused.|
|reason|string|false|none|The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)|

<h2 id="tocS_PauseProposalRequest">PauseProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemapauseproposalrequest"></a>
<a id="schema_PauseProposalRequest"></a>
<a id="tocSpauseproposalrequest"></a>
<a id="tocspauseproposalrequest"></a>

```json
{
  "reason": "string"
}
```

Request message to pause serving for an already-finalized proposal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)|

<h2 id="tocS_PlacementTargeting">PlacementTargeting</h2>
<!-- backwards compatibility -->
<a id="schemaplacementtargeting"></a>
<a id="schema_PlacementTargeting"></a>
<a id="tocSplacementtargeting"></a>
<a id="tocsplacementtargeting"></a>

```json
{
  "mobileApplicationTargeting": {
    "firstPartyTargeting": {
      "excludedAppIds": [
        "string"
      ],
      "targetedAppIds": [
        "string"
      ]
    }
  },
  "urlTargeting": {
    "excludedUrls": [
      "string"
    ],
    "targetedUrls": [
      "string"
    ]
  }
}
```

Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mobileApplicationTargeting|[MobileApplicationTargeting](#schemamobileapplicationtargeting)|false|none|Mobile application targeting information in a deal. This doesn't apply to Auction Packages.|
|urlTargeting|[UrlTargeting](#schemaurltargeting)|false|none|URLs to be included/excluded.|

<h2 id="tocS_PlatformContext">PlatformContext</h2>
<!-- backwards compatibility -->
<a id="schemaplatformcontext"></a>
<a id="schema_PlatformContext"></a>
<a id="tocSplatformcontext"></a>
<a id="tocsplatformcontext"></a>

```json
{
  "platforms": [
    "DESKTOP"
  ]
}
```

Output only. The type of platform the restriction applies to.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platforms|[string]|false|none|The platforms this restriction applies to.|

#### Enumerated Values

|Property|Value|
|---|---|
|platforms|DESKTOP|
|platforms|ANDROID|
|platforms|IOS|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amount": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "pricingType": "PRICING_TYPE_UNSPECIFIED"
}
```

Represents a price and a pricing type for a product / deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[Money](#schemamoney)|false|none|The actual price with currency specified.|
|pricingType|string|false|none|The pricing type for the deal/product. (default: CPM)|

#### Enumerated Values

|Property|Value|
|---|---|
|pricingType|PRICING_TYPE_UNSPECIFIED|
|pricingType|COST_PER_MILLE|
|pricingType|COST_PER_DAY|

<h2 id="tocS_PricePerBuyer">PricePerBuyer</h2>
<!-- backwards compatibility -->
<a id="schemapriceperbuyer"></a>
<a id="schema_PricePerBuyer"></a>
<a id="tocSpriceperbuyer"></a>
<a id="tocspriceperbuyer"></a>

```json
{
  "advertiserIds": [
    "string"
  ],
  "buyer": {
    "accountId": "string"
  },
  "price": {
    "amount": {
      "currencyCode": "string",
      "nanos": 0,
      "units": "string"
    },
    "pricingType": "PRICING_TYPE_UNSPECIFIED"
  }
}
```

Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertiserIds|[string]|false|none|The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price.|
|buyer|[Buyer](#schemabuyer)|false|none|The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there's no more specific rule matching the buyer).|
|price|[Price](#schemaprice)|false|none|The specified price.|

<h2 id="tocS_PrivateData">PrivateData</h2>
<!-- backwards compatibility -->
<a id="schemaprivatedata"></a>
<a id="schema_PrivateData"></a>
<a id="tocSprivatedata"></a>
<a id="tocsprivatedata"></a>

```json
{
  "referenceId": "string"
}
```

Buyers are allowed to store certain types of private data in a proposal/deal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceId|string|false|none|A buyer or seller specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "availableEndTime": "string",
  "availableStartTime": "string",
  "createTime": "string",
  "creatorContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "displayName": "string",
  "hasCreatorSignedOff": true,
  "productId": "string",
  "productRevision": "string",
  "publisherProfileId": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
  "targetingCriterion": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "UNKNOWN"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
            "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                "endTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "startTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ],
            "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
          },
          "longValue": "string",
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "terms": {
    "brandingType": "BRANDING_TYPE_UNSPECIFIED",
    "description": "string",
    "estimatedGrossSpend": {
      "amount": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "pricingType": "PRICING_TYPE_UNSPECIFIED"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "impressionCap": "string",
      "minimumDailyLooks": "string",
      "percentShareOfVoice": "string",
      "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricesPerBuyer": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "advertiserIds": [
            "string"
          ],
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amount": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "pricingType": "PRICING_TYPE_UNSPECIFIED"
          }
        }
      ]
    },
    "sellerTimeZone": "string"
  },
  "updateTime": "string",
  "webPropertyCode": "string"
}
```

A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availableEndTime|string(google-datetime)|false|none|The proposed end time for the deal. The field will be truncated to the order of seconds during serving.|
|availableStartTime|string(google-datetime)|false|none|Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving.|
|createTime|string(google-datetime)|false|none|Creation time.|
|creatorContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Optional contact information for the creator of this product.|
|displayName|string|false|none|The display name for this product as set by the seller.|
|hasCreatorSignedOff|boolean|false|none|If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.|
|productId|string|false|none|The unique ID for the product.|
|productRevision|string(int64)|false|none|The revision number of the product (auto-assigned by Marketplace).|
|publisherProfileId|string|false|none|An ID which can be used by the Publisher Profile API to get more information about the seller that created this product.|
|seller|[Seller](#schemaseller)|false|none|Information about the seller that created this product.|
|syndicationProduct|string|false|none|The syndication product associated with the deal.|
|targetingCriterion|[[TargetingCriteria](#schematargetingcriteria)]|false|none|Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values.|
|terms|[DealTerms](#schemadealterms)|false|none|The negotiable terms of the deal.|
|updateTime|string(google-datetime)|false|none|Time of last update.|
|webPropertyCode|string|false|none|The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal.|

#### Enumerated Values

|Property|Value|
|---|---|
|syndicationProduct|SYNDICATION_PRODUCT_UNSPECIFIED|
|syndicationProduct|CONTENT|
|syndicationProduct|MOBILE|
|syndicationProduct|VIDEO|
|syndicationProduct|GAMES|

<h2 id="tocS_Proposal">Proposal</h2>
<!-- backwards compatibility -->
<a id="schemaproposal"></a>
<a id="schema_Proposal"></a>
<a id="tocSproposal"></a>
<a id="tocsproposal"></a>

```json
{
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "buyerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "buyerPrivateData": {
    "referenceId": "string"
  },
  "deals": [
    {
      "availableEndTime": "string",
      "availableStartTime": "string",
      "buyerPrivateData": {
        "referenceId": "string"
      },
      "createProductId": "string",
      "createProductRevision": "string",
      "createTime": "string",
      "creativePreApprovalPolicy": "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED",
      "creativeRestrictions": {
        "creativeFormat": "CREATIVE_FORMAT_UNSPECIFIED",
        "creativeSpecifications": [
          {
            "creativeCompanionSizes": [
              {
                "height": "string",
                "sizeType": "SIZE_TYPE_UNSPECIFIED",
                "width": "string"
              }
            ],
            "creativeSize": {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          }
        ],
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "creativeSafeFrameCompatibility": "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED",
      "dealId": "string",
      "dealServingMetadata": {
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "BUYER_SELLER_ROLE_UNSPECIFIED",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "dealTerms": {
        "brandingType": "BRANDING_TYPE_UNSPECIFIED",
        "description": "string",
        "estimatedGrossSpend": {
          "amount": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "pricingType": "PRICING_TYPE_UNSPECIFIED"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "impressionCap": "string",
          "minimumDailyLooks": "string",
          "percentShareOfVoice": "string",
          "reservationType": "RESERVATION_TYPE_UNSPECIFIED"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricesPerBuyer": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "advertiserIds": [
                "string"
              ],
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amount": {
                  "currencyCode": "string",
                  "nanos": 0,
                  "units": "string"
                },
                "pricingType": "PRICING_TYPE_UNSPECIFIED"
              }
            }
          ]
        },
        "sellerTimeZone": "string"
      },
      "deliveryControl": {
        "creativeBlockingLevel": "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
        "deliveryRateType": "DELIVERY_RATE_TYPE_UNSPECIFIED",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "TIME_UNIT_TYPE_UNSPECIFIED"
          }
        ]
      },
      "description": "string",
      "displayName": "string",
      "externalDealId": "string",
      "isSetupComplete": true,
      "programmaticCreativeSource": "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "syndicationProduct": "SYNDICATION_PRODUCT_UNSPECIFIED",
      "targeting": {
        "geoTargeting": {
          "excludedCriteriaIds": [
            "string"
          ],
          "targetedCriteriaIds": [
            "string"
          ]
        },
        "inventorySizeTargeting": {
          "excludedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ],
          "targetedInventorySizes": [
            {
              "height": "string",
              "sizeType": "SIZE_TYPE_UNSPECIFIED",
              "width": "string"
            }
          ]
        },
        "placementTargeting": {
          "mobileApplicationTargeting": {
            "firstPartyTargeting": {
              "excludedAppIds": [
                "string"
              ],
              "targetedAppIds": [
                "string"
              ]
            }
          },
          "urlTargeting": {
            "excludedUrls": [
              "string"
            ],
            "targetedUrls": [
              "string"
            ]
          }
        },
        "technologyTargeting": {
          "deviceCapabilityTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "deviceCategoryTargeting": {
            "excludedCriteriaIds": [
              "string"
            ],
            "targetedCriteriaIds": [
              "string"
            ]
          },
          "operatingSystemTargeting": {
            "operatingSystemCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            },
            "operatingSystemVersionCriteria": {
              "excludedCriteriaIds": [
                "string"
              ],
              "targetedCriteriaIds": [
                "string"
              ]
            }
          }
        },
        "videoTargeting": {
          "excludedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ],
          "targetedPositionTypes": [
            "POSITION_TYPE_UNSPECIFIED"
          ]
        }
      },
      "targetingCriterion": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "UNKNOWN"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
                "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
                    "endTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    },
                    "startTime": {
                      "hours": 0,
                      "minutes": 0,
                      "nanos": 0,
                      "seconds": 0
                    }
                  }
                ],
                "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
              },
              "longValue": "string",
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "updateTime": "string",
      "webPropertyCode": "string"
    }
  ],
  "displayName": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "lastUpdaterOrCommentorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "notes": [
    {
      "createTime": "string",
      "creatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
      "note": "string",
      "noteId": "string",
      "proposalRevision": "string"
    }
  ],
  "originatorRole": "BUYER_SELLER_ROLE_UNSPECIFIED",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalRevision": "string",
  "proposalState": "PROPOSAL_STATE_UNSPECIFIED",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "termsAndConditions": "string",
  "updateTime": "string"
}
```

Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedBuyer|[Buyer](#schemabuyer)|false|none|Output only. Reference to the buyer that will get billed for this proposal.|
|buyer|[Buyer](#schemabuyer)|false|none|Reference to the buyer on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|buyerContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Contact information for the buyer.|
|buyerPrivateData|[PrivateData](#schemaprivatedata)|false|none|Private data for buyer. (hidden from seller).|
|deals|[[Deal](#schemadeal)]|false|none|The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.|
|displayName|string|false|none|The name for the proposal.|
|isRenegotiating|boolean|false|read-only|Output only. True if the proposal is being renegotiated.|
|isSetupComplete|boolean|false|read-only|Output only. True, if the buyside inventory setup is complete for this proposal.|
|lastUpdaterOrCommentorRole|string|false|read-only|Output only. The role of the last user that either updated the proposal or left a comment.|
|notes|[[Note](#schemanote)]|false|read-only|Output only. The notes associated with this proposal.|
|originatorRole|string|false|read-only|Output only. Indicates whether the buyer/seller created the proposal.|
|privateAuctionId|string|false|read-only|Output only. Private auction ID if this proposal is a private auction proposal.|
|proposalId|string|false|read-only|Output only. The unique ID of the proposal.|
|proposalRevision|string(int64)|false|read-only|Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.|
|proposalState|string|false|read-only|Output only. The current state of the proposal.|
|seller|[Seller](#schemaseller)|false|none|Reference to the seller on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.|
|sellerContacts|[[ContactInformation](#schemacontactinformation)]|false|read-only|Output only. Contact information for the seller.|
|termsAndConditions|string|false|read-only|Output only. The terms and conditions set by the publisher for this proposal.|
|updateTime|string(google-datetime)|false|read-only|Output only. The time when the proposal was last revised.|

#### Enumerated Values

|Property|Value|
|---|---|
|lastUpdaterOrCommentorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|lastUpdaterOrCommentorRole|BUYER|
|lastUpdaterOrCommentorRole|SELLER|
|originatorRole|BUYER_SELLER_ROLE_UNSPECIFIED|
|originatorRole|BUYER|
|originatorRole|SELLER|
|proposalState|PROPOSAL_STATE_UNSPECIFIED|
|proposalState|PROPOSED|
|proposalState|BUYER_ACCEPTED|
|proposalState|SELLER_ACCEPTED|
|proposalState|CANCELED|
|proposalState|FINALIZED|

<h2 id="tocS_PublisherProfile">PublisherProfile</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofile"></a>
<a id="schema_PublisherProfile"></a>
<a id="tocSpublisherprofile"></a>
<a id="tocspublisherprofile"></a>

```json
{
  "audienceDescription": "string",
  "buyerPitchStatement": "string",
  "directDealsContact": "string",
  "displayName": "string",
  "domains": [
    "string"
  ],
  "googlePlusUrl": "string",
  "isParent": true,
  "logoUrl": "string",
  "mediaKitUrl": "string",
  "mobileApps": [
    {
      "appStore": "APP_STORE_TYPE_UNSPECIFIED",
      "externalAppId": "string",
      "name": "string"
    }
  ],
  "overview": "string",
  "programmaticDealsContact": "string",
  "publisherProfileId": "string",
  "rateCardInfoUrl": "string",
  "samplePageUrl": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "topHeadlines": [
    "string"
  ]
}
```

Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audienceDescription|string|false|none|Description on the publisher's audience.|
|buyerPitchStatement|string|false|none|Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.|
|directDealsContact|string|false|none|Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.|
|displayName|string|false|none|Name of the publisher profile.|
|domains|[string]|false|none|The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk".|
|googlePlusUrl|string|false|none|URL to publisher's Google+ page.|
|isParent|boolean|false|none|Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details.|
|logoUrl|string|false|none|A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.|
|mediaKitUrl|string|false|none|URL to additional marketing and sales materials.|
|mobileApps|[[PublisherProfileMobileApplication](#schemapublisherprofilemobileapplication)]|false|none|The list of apps represented in this publisher profile. Empty if this is a parent profile.|
|overview|string|false|none|Overview of the publisher.|
|programmaticDealsContact|string|false|none|Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.|
|publisherProfileId|string|false|none|Unique ID for publisher profile.|
|rateCardInfoUrl|string|false|none|URL to a publisher rate card.|
|samplePageUrl|string|false|none|URL to a sample content page.|
|seller|[Seller](#schemaseller)|false|none|Seller of the publisher profile.|
|topHeadlines|[string]|false|none|Up to three key metrics and rankings. Max 100 characters each. For example "#1 Mobile News Site for 20 Straight Months".|

<h2 id="tocS_PublisherProfileMobileApplication">PublisherProfileMobileApplication</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofilemobileapplication"></a>
<a id="schema_PublisherProfileMobileApplication"></a>
<a id="tocSpublisherprofilemobileapplication"></a>
<a id="tocspublisherprofilemobileapplication"></a>

```json
{
  "appStore": "APP_STORE_TYPE_UNSPECIFIED",
  "externalAppId": "string",
  "name": "string"
}
```

A mobile application that contains a external app ID, name, and app store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStore|string|false|none|The app store the app belongs to.|
|externalAppId|string|false|none|The external ID for the app from its app store.|
|name|string|false|none|The name of the app.|

#### Enumerated Values

|Property|Value|
|---|---|
|appStore|APP_STORE_TYPE_UNSPECIFIED|
|appStore|APPLE_ITUNES|
|appStore|GOOGLE_PLAY|
|appStore|ROKU|
|appStore|AMAZON_FIRETV|
|appStore|PLAYSTATION|
|appStore|XBOX|
|appStore|SAMSUNG_TV|
|appStore|AMAZON|
|appStore|OPPO|
|appStore|SAMSUNG|
|appStore|VIVO|
|appStore|XIAOMI|

<h2 id="tocS_RealtimeTimeRange">RealtimeTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemarealtimetimerange"></a>
<a id="schema_RealtimeTimeRange"></a>
<a id="tocSrealtimetimerange"></a>
<a id="tocsrealtimetimerange"></a>

```json
{
  "startTimestamp": "string"
}
```

An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startTimestamp|string(google-datetime)|false|none|The start timestamp of the real-time RTB metrics aggregation.|

<h2 id="tocS_RelativeDateRange">RelativeDateRange</h2>
<!-- backwards compatibility -->
<a id="schemarelativedaterange"></a>
<a id="schema_RelativeDateRange"></a>
<a id="tocSrelativedaterange"></a>
<a id="tocsrelativedaterange"></a>

```json
{
  "durationDays": 0,
  "offsetDays": 0
}
```

A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationDays|integer(int32)|false|none|The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7.|
|offsetDays|integer(int32)|false|none|The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0.|

<h2 id="tocS_RemoveDealAssociationRequest">RemoveDealAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaremovedealassociationrequest"></a>
<a id="schema_RemoveDealAssociationRequest"></a>
<a id="tocSremovedealassociationrequest"></a>
<a id="tocsremovedealassociationrequest"></a>

```json
{
  "association": {
    "accountId": "string",
    "creativeId": "string",
    "dealsId": "string"
  }
}
```

A request for removing the association between a deal and a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|association|[CreativeDealAssociation](#schemacreativedealassociation)|false|none|The association between a creative and a deal that should be removed.|

<h2 id="tocS_ResumeProposalDealsRequest">ResumeProposalDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumeproposaldealsrequest"></a>
<a id="schema_ResumeProposalDealsRequest"></a>
<a id="tocSresumeproposaldealsrequest"></a>
<a id="tocsresumeproposaldealsrequest"></a>

```json
{
  "externalDealIds": [
    "string"
  ]
}
```

Request message to resume (unpause) serving for already-finalized deals.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalDealIds|[string]|false|none|The external_deal_id's of the deals to resume. If empty, all the deals in the proposal will be resumed.|

<h2 id="tocS_ResumeProposalRequest">ResumeProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresumeproposalrequest"></a>
<a id="schema_ResumeProposalRequest"></a>
<a id="tocSresumeproposalrequest"></a>
<a id="tocsresumeproposalrequest"></a>

```json
{}
```

Request message to resume (unpause) serving for an already-finalized proposal.

<h2 id="tocS_RowDimensions">RowDimensions</h2>
<!-- backwards compatibility -->
<a id="schemarowdimensions"></a>
<a id="schema_RowDimensions"></a>
<a id="tocSrowdimensions"></a>
<a id="tocsrowdimensions"></a>

```json
{
  "publisherIdentifier": "string",
  "timeInterval": {
    "endTime": "string",
    "startTime": "string"
  }
}
```

A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publisherIdentifier|string|false|none|The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested.|
|timeInterval|[TimeInterval](#schematimeinterval)|false|none|The time interval that this row represents.|

<h2 id="tocS_SecurityContext">SecurityContext</h2>
<!-- backwards compatibility -->
<a id="schemasecuritycontext"></a>
<a id="schema_SecurityContext"></a>
<a id="tocSsecuritycontext"></a>
<a id="tocssecuritycontext"></a>

```json
{
  "securities": [
    "INSECURE"
  ]
}
```

Output only. A security context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|securities|[string]|false|none|The security types in this context.|

#### Enumerated Values

|Property|Value|
|---|---|
|securities|INSECURE|
|securities|SSL|

<h2 id="tocS_Seller">Seller</h2>
<!-- backwards compatibility -->
<a id="schemaseller"></a>
<a id="schema_Seller"></a>
<a id="tocSseller"></a>
<a id="tocsseller"></a>

```json
{
  "accountId": "string",
  "subAccountId": "string"
}
```

Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product.|
|subAccountId|string|false|read-only|Output only. Ad manager network code for the seller.|

<h2 id="tocS_ServingContext">ServingContext</h2>
<!-- backwards compatibility -->
<a id="schemaservingcontext"></a>
<a id="schema_ServingContext"></a>
<a id="tocSservingcontext"></a>
<a id="tocsservingcontext"></a>

```json
{
  "all": "SIMPLE_CONTEXT",
  "appType": {
    "appTypes": [
      "NATIVE"
    ]
  },
  "auctionType": {
    "auctionTypes": [
      "OPEN_AUCTION"
    ]
  },
  "location": {
    "geoCriteriaIds": [
      0
    ]
  },
  "platform": {
    "platforms": [
      "DESKTOP"
    ]
  },
  "securityType": {
    "securities": [
      "INSECURE"
    ]
  }
}
```

The serving context for this restriction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|all|string|false|none|Matches all contexts.|
|appType|[AppContext](#schemaappcontext)|false|none|Matches impressions for a particular app type.|
|auctionType|[AuctionContext](#schemaauctioncontext)|false|none|Matches impressions for a particular auction type.|
|location|[LocationContext](#schemalocationcontext)|false|none|Matches impressions coming from users *or* publishers in a specific location.|
|platform|[PlatformContext](#schemaplatformcontext)|false|none|Matches impressions coming from a particular platform.|
|securityType|[SecurityContext](#schemasecuritycontext)|false|none|Matches impressions for a particular security type.|

#### Enumerated Values

|Property|Value|
|---|---|
|all|SIMPLE_CONTEXT|

<h2 id="tocS_ServingRestriction">ServingRestriction</h2>
<!-- backwards compatibility -->
<a id="schemaservingrestriction"></a>
<a id="schema_ServingRestriction"></a>
<a id="tocSservingrestriction"></a>
<a id="tocsservingrestriction"></a>

```json
{
  "contexts": [
    {
      "all": "SIMPLE_CONTEXT",
      "appType": {
        "appTypes": [
          "NATIVE"
        ]
      },
      "auctionType": {
        "auctionTypes": [
          "OPEN_AUCTION"
        ]
      },
      "location": {
        "geoCriteriaIds": [
          0
        ]
      },
      "platform": {
        "platforms": [
          "DESKTOP"
        ]
      },
      "securityType": {
        "securities": [
          "INSECURE"
        ]
      }
    }
  ],
  "disapproval": {
    "details": [
      "string"
    ],
    "reason": "LENGTH_OF_IMAGE_ANIMATION"
  },
  "disapprovalReasons": [
    {
      "details": [
        "string"
      ],
      "reason": "LENGTH_OF_IMAGE_ANIMATION"
    }
  ],
  "status": "STATUS_UNSPECIFIED"
}
```

Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contexts|[[ServingContext](#schemaservingcontext)]|false|none|The contexts for the restriction.|
|disapproval|[Disapproval](#schemadisapproval)|false|none|Disapproval bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method.|
|disapprovalReasons|[[Disapproval](#schemadisapproval)]|false|none|Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; use disapproval field instead.|
|status|string|false|none|The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|STATUS_UNSPECIFIED|
|status|DISAPPROVAL|
|status|PENDING_REVIEW|

<h2 id="tocS_Size">Size</h2>
<!-- backwards compatibility -->
<a id="schemasize"></a>
<a id="schema_Size"></a>
<a id="tocSsize"></a>
<a id="tocssize"></a>

```json
{
  "height": 0,
  "width": 0
}
```

Message depicting the size of the creative. The units of width and height depend on the type of the targeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height of the creative.|
|width|integer(int32)|false|none|The width of the creative|

<h2 id="tocS_StopWatchingCreativeRequest">StopWatchingCreativeRequest</h2>
<!-- backwards compatibility -->
<a id="schemastopwatchingcreativerequest"></a>
<a id="schema_StopWatchingCreativeRequest"></a>
<a id="tocSstopwatchingcreativerequest"></a>
<a id="tocsstopwatchingcreativerequest"></a>

```json
{}
```

A request for stopping notifications for changes to creative Status.

<h2 id="tocS_TargetingCriteria">TargetingCriteria</h2>
<!-- backwards compatibility -->
<a id="schematargetingcriteria"></a>
<a id="schema_TargetingCriteria"></a>
<a id="tocStargetingcriteria"></a>
<a id="tocstargetingcriteria"></a>

```json
{
  "exclusions": [
    {
      "creativeSizeValue": {
        "allowedFormats": [
          "UNKNOWN"
        ],
        "companionSizes": [
          {
            "height": 0,
            "width": 0
          }
        ],
        "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
        "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
        "size": {
          "height": 0,
          "width": 0
        },
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dayPartTargetingValue": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
      },
      "longValue": "string",
      "stringValue": "string"
    }
  ],
  "inclusions": [
    {
      "creativeSizeValue": {
        "allowedFormats": [
          "UNKNOWN"
        ],
        "companionSizes": [
          {
            "height": 0,
            "width": 0
          }
        ],
        "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
        "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
        "size": {
          "height": 0,
          "width": 0
        },
        "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
      },
      "dayPartTargetingValue": {
        "dayParts": [
          {
            "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
            "endTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ],
        "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
      },
      "longValue": "string",
      "stringValue": "string"
    }
  ],
  "key": "string"
}
```

Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusions|[[TargetingValue](#schematargetingvalue)]|false|none|The list of values to exclude from targeting. Each value is AND'd together.|
|inclusions|[[TargetingValue](#schematargetingvalue)]|false|none|The list of value to include as part of the targeting. Each value is OR'd together.|
|key|string|false|none|The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation.|

<h2 id="tocS_TargetingValue">TargetingValue</h2>
<!-- backwards compatibility -->
<a id="schematargetingvalue"></a>
<a id="schema_TargetingValue"></a>
<a id="tocStargetingvalue"></a>
<a id="tocstargetingvalue"></a>

```json
{
  "creativeSizeValue": {
    "allowedFormats": [
      "UNKNOWN"
    ],
    "companionSizes": [
      {
        "height": 0,
        "width": 0
      }
    ],
    "creativeSizeType": "CREATIVE_SIZE_TYPE_UNSPECIFIED",
    "nativeTemplate": "UNKNOWN_NATIVE_TEMPLATE",
    "size": {
      "height": 0,
      "width": 0
    },
    "skippableAdType": "SKIPPABLE_AD_TYPE_UNSPECIFIED"
  },
  "dayPartTargetingValue": {
    "dayParts": [
      {
        "dayOfWeek": "DAY_OF_WEEK_UNSPECIFIED",
        "endTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ],
    "timeZoneType": "TIME_ZONE_SOURCE_UNSPECIFIED"
  },
  "longValue": "string",
  "stringValue": "string"
}
```

A polymorphic targeting value used as part of Shared Targeting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeSizeValue|[CreativeSize](#schemacreativesize)|false|none|The creative size value to include/exclude. Filled in when key = GOOG_CREATIVE_SIZE|
|dayPartTargetingValue|[DayPartTargeting](#schemadayparttargeting)|false|none|The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING. The definition of this targeting is derived from the structure used by Ad Manager.|
|longValue|string(int64)|false|none|The long value to include/exclude.|
|stringValue|string|false|none|The string value to include/exclude.|

<h2 id="tocS_TechnologyTargeting">TechnologyTargeting</h2>
<!-- backwards compatibility -->
<a id="schematechnologytargeting"></a>
<a id="schema_TechnologyTargeting"></a>
<a id="tocStechnologytargeting"></a>
<a id="tocstechnologytargeting"></a>

```json
{
  "deviceCapabilityTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "deviceCategoryTargeting": {
    "excludedCriteriaIds": [
      "string"
    ],
    "targetedCriteriaIds": [
      "string"
    ]
  },
  "operatingSystemTargeting": {
    "operatingSystemCriteria": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    },
    "operatingSystemVersionCriteria": {
      "excludedCriteriaIds": [
        "string"
      ],
      "targetedCriteriaIds": [
        "string"
      ]
    }
  }
}
```

Represents targeting about various types of technology.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deviceCapabilityTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of device capabilities to be included/excluded.|
|deviceCategoryTargeting|[CriteriaTargeting](#schemacriteriatargeting)|false|none|IDs of device categories to be included/excluded.|
|operatingSystemTargeting|[OperatingSystemTargeting](#schemaoperatingsystemtargeting)|false|none|Operating system related targeting information.|

<h2 id="tocS_TimeInterval">TimeInterval</h2>
<!-- backwards compatibility -->
<a id="schematimeinterval"></a>
<a id="schema_TimeInterval"></a>
<a id="tocStimeinterval"></a>
<a id="tocstimeinterval"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

An interval of time, with an absolute start and end.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|The timestamp marking the end of the range (exclusive) for which data is included.|
|startTime|string(google-datetime)|false|none|The timestamp marking the start of the range (inclusive) for which data is included.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_UrlTargeting">UrlTargeting</h2>
<!-- backwards compatibility -->
<a id="schemaurltargeting"></a>
<a id="schema_UrlTargeting"></a>
<a id="tocSurltargeting"></a>
<a id="tocsurltargeting"></a>

```json
{
  "excludedUrls": [
    "string"
  ],
  "targetedUrls": [
    "string"
  ]
}
```

Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedUrls|[string]|false|none|A list of URLs to be excluded.|
|targetedUrls|[string]|false|none|A list of URLs to be included.|

<h2 id="tocS_VideoContent">VideoContent</h2>
<!-- backwards compatibility -->
<a id="schemavideocontent"></a>
<a id="schema_VideoContent"></a>
<a id="tocSvideocontent"></a>
<a id="tocsvideocontent"></a>

```json
{
  "videoUrl": "string",
  "videoVastXml": "string"
}
```

Video content for a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|videoUrl|string|false|none|The URL to fetch a video ad.|
|videoVastXml|string|false|none|The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.|

<h2 id="tocS_VideoTargeting">VideoTargeting</h2>
<!-- backwards compatibility -->
<a id="schemavideotargeting"></a>
<a id="schema_VideoTargeting"></a>
<a id="tocSvideotargeting"></a>
<a id="tocsvideotargeting"></a>

```json
{
  "excludedPositionTypes": [
    "POSITION_TYPE_UNSPECIFIED"
  ],
  "targetedPositionTypes": [
    "POSITION_TYPE_UNSPECIFIED"
  ]
}
```

Represents targeting information about video.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|excludedPositionTypes|[string]|false|none|A list of video positions to be excluded. Position types can either be included or excluded (XOR).|
|targetedPositionTypes|[string]|false|none|A list of video positions to be included. When the included list is present, the excluded list must be empty. When the excluded list is present, the included list must be empty.|

#### Enumerated Values

|Property|Value|
|---|---|
|excludedPositionTypes|POSITION_TYPE_UNSPECIFIED|
|excludedPositionTypes|PREROLL|
|excludedPositionTypes|MIDROLL|
|excludedPositionTypes|POSTROLL|
|targetedPositionTypes|POSITION_TYPE_UNSPECIFIED|
|targetedPositionTypes|PREROLL|
|targetedPositionTypes|MIDROLL|
|targetedPositionTypes|POSTROLL|

<h2 id="tocS_WatchCreativeRequest">WatchCreativeRequest</h2>
<!-- backwards compatibility -->
<a id="schemawatchcreativerequest"></a>
<a id="schema_WatchCreativeRequest"></a>
<a id="tocSwatchcreativerequest"></a>
<a id="tocswatchcreativerequest"></a>

```json
{
  "topic": "string"
}
```

A request for watching changes to creative Status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topic|string|false|none|The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format.|
