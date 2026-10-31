<h1 id="ad-exchange-buyer-api">Ad Exchange Buyer API v1.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Accesses your bidding-account information, submits creatives for validation, finds available direct deals, and retrieves performance reports.

Base URLs:

* <a href="https://www.googleapis.com/adexchangebuyer/v1.4">https://www.googleapis.com/adexchangebuyer/v1.4</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/ad-exchange/buyer-rest">External documentation</a>

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

<h1 id="ad-exchange-buyer-api-accounts">accounts</h1>

## adexchangebuyer.accounts.list

<a id="opIdadexchangebuyer.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

Retrieves the authenticated user's list of accounts.

<h3 id="adexchangebuyeraccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "applyPretargetingToNonGuaranteedDeals": true,
      "bidderLocation": [
        {
          "bidProtocol": "string",
          "maximumQps": 0,
          "region": "string",
          "url": "string"
        }
      ],
      "cookieMatchingNid": "string",
      "cookieMatchingUrl": "string",
      "id": 0,
      "kind": "adexchangebuyer#account",
      "maximumActiveCreatives": 0,
      "maximumTotalQps": 0,
      "numberActiveCreatives": 0
    }
  ],
  "kind": "adexchangebuyer#accountsList"
}
```

<h3 id="adexchangebuyeraccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AccountsList](#schemaaccountslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.accounts.get

<a id="opIdadexchangebuyer.accounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{id}`

Gets one account by ID.

<h3 id="adexchangebuyeraccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The account id|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

<h3 id="adexchangebuyeraccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.accounts.update

<a id="opIdadexchangebuyer.accounts.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyPretargetingToNonGuaranteedDeals": true,
    "bidderLocation": [
      {
        "bidProtocol": "string",
        "maximumQps": 0,
        "region": "string",
        "url": "string"
      }
    ],
    "cookieMatchingNid": "string",
    "cookieMatchingUrl": "string",
    "id": 0,
    "kind": "adexchangebuyer#account",
    "maximumActiveCreatives": 0,
    "maximumTotalQps": 0,
    "numberActiveCreatives": 0
  }'
```

`PUT /accounts/{id}`

Updates an existing account.

> Body parameter

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

<h3 id="adexchangebuyeraccountsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The account id|
|confirmUnsafeAccountChange|query|boolean|false|Confirmation for erasing bidder and cookie matching urls.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Account](#schemaaccount)|false|none|
|» applyPretargetingToNonGuaranteedDeals|body|boolean|false|When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.|
|» bidderLocation|body|[object]|false|Your bidder locations that have distinct URLs.|
|» » bidProtocol|body|string|false|The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:  <br>- PROTOCOL_ADX <br>- PROTOCOL_OPENRTB_2_2 <br>- PROTOCOL_OPENRTB_2_3 <br>- PROTOCOL_OPENRTB_2_4 <br>- PROTOCOL_OPENRTB_2_5 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_3 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_4 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_5|
|» » maximumQps|body|integer(int32)|false|The maximum queries per second the Ad Exchange will send.|
|» » region|body|string|false|The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  <br>- ASIA <br>- EUROPE <br>- US_EAST <br>- US_WEST|
|» » url|body|string|false|The URL to which the Ad Exchange will send bid requests.|
|» cookieMatchingNid|body|string|false|The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.|
|» cookieMatchingUrl|body|string|false|The base URL used in cookie match requests.|
|» id|body|integer(int32)|false|Account id.|
|» kind|body|string|false|Resource type.|
|» maximumActiveCreatives|body|integer(int32)|false|The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.|
|» maximumTotalQps|body|integer(int32)|false|The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.|
|» numberActiveCreatives|body|integer(int32)|false|The number of creatives that this account inserted or bid with in the last 30 days.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

<h3 id="adexchangebuyeraccountsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.accounts.patch

<a id="opIdadexchangebuyer.accounts.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/accounts/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "applyPretargetingToNonGuaranteedDeals": true,
    "bidderLocation": [
      {
        "bidProtocol": "string",
        "maximumQps": 0,
        "region": "string",
        "url": "string"
      }
    ],
    "cookieMatchingNid": "string",
    "cookieMatchingUrl": "string",
    "id": 0,
    "kind": "adexchangebuyer#account",
    "maximumActiveCreatives": 0,
    "maximumTotalQps": 0,
    "numberActiveCreatives": 0
  }'
```

`PATCH /accounts/{id}`

Updates an existing account. This method supports patch semantics.

> Body parameter

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

<h3 id="adexchangebuyeraccountspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The account id|
|confirmUnsafeAccountChange|query|boolean|false|Confirmation for erasing bidder and cookie matching urls.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Account](#schemaaccount)|false|none|
|» applyPretargetingToNonGuaranteedDeals|body|boolean|false|When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.|
|» bidderLocation|body|[object]|false|Your bidder locations that have distinct URLs.|
|» » bidProtocol|body|string|false|The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:  <br>- PROTOCOL_ADX <br>- PROTOCOL_OPENRTB_2_2 <br>- PROTOCOL_OPENRTB_2_3 <br>- PROTOCOL_OPENRTB_2_4 <br>- PROTOCOL_OPENRTB_2_5 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_3 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_4 <br>- PROTOCOL_OPENRTB_PROTOBUF_2_5|
|» » maximumQps|body|integer(int32)|false|The maximum queries per second the Ad Exchange will send.|
|» » region|body|string|false|The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  <br>- ASIA <br>- EUROPE <br>- US_EAST <br>- US_WEST|
|» » url|body|string|false|The URL to which the Ad Exchange will send bid requests.|
|» cookieMatchingNid|body|string|false|The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.|
|» cookieMatchingUrl|body|string|false|The base URL used in cookie match requests.|
|» id|body|integer(int32)|false|Account id.|
|» kind|body|string|false|Resource type.|
|» maximumActiveCreatives|body|integer(int32)|false|The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.|
|» maximumTotalQps|body|integer(int32)|false|The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.|
|» numberActiveCreatives|body|integer(int32)|false|The number of creatives that this account inserted or bid with in the last 30 days.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

<h3 id="adexchangebuyeraccountspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-billinginfo">billingInfo</h1>

## adexchangebuyer.billingInfo.list

<a id="opIdadexchangebuyer.billingInfo.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/billinginfo \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /billinginfo`

Retrieves a list of billing information for all accounts of the authenticated user.

<h3 id="adexchangebuyerbillinginfolist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "accountId": 0,
      "accountName": "string",
      "billingId": [
        "string"
      ],
      "kind": "adexchangebuyer#billingInfo"
    }
  ],
  "kind": "adexchangebuyer#billingInfoList"
}
```

<h3 id="adexchangebuyerbillinginfolist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BillingInfoList](#schemabillinginfolist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.billingInfo.get

<a id="opIdadexchangebuyer.billingInfo.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/billinginfo/0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /billinginfo/{accountId}`

Returns the billing information for one account specified by account ID.

<h3 id="adexchangebuyerbillinginfoget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The account id.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": 0,
  "accountName": "string",
  "billingId": [
    "string"
  ],
  "kind": "adexchangebuyer#billingInfo"
}
```

<h3 id="adexchangebuyerbillinginfoget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BillingInfo](#schemabillinginfo)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-budget">budget</h1>

## adexchangebuyer.budget.get

<a id="opIdadexchangebuyer.budget.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/billinginfo/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /billinginfo/{accountId}/{billingId}`

Returns the budget information for the adgroup specified by the accountId and billingId.

<h3 id="adexchangebuyerbudgetget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to get the budget information for.|
|billingId|path|string|true|The billing id to get the budget information for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

<h3 id="adexchangebuyerbudgetget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Budget](#schemabudget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.budget.update

<a id="opIdadexchangebuyer.budget.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/billinginfo/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "billingId": "string",
    "budgetAmount": "string",
    "currencyCode": "string",
    "id": "string",
    "kind": "adexchangebuyer#budget"
  }'
```

`PUT /billinginfo/{accountId}/{billingId}`

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

> Body parameter

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

<h3 id="adexchangebuyerbudgetupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id associated with the budget being updated.|
|billingId|path|string|true|The billing id associated with the budget being updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Budget](#schemabudget)|false|none|
|» accountId|body|string(int64)|false|The id of the account. This is required for get and update requests.|
|» billingId|body|string(int64)|false|The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.|
|» budgetAmount|body|string(int64)|false|The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.|
|» currencyCode|body|string|false|The currency code for the buyer. This cannot be altered here.|
|» id|body|string|false|The unique id that describes this item.|
|» kind|body|string|false|The kind of the resource, i.e. "adexchangebuyer#budget".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

<h3 id="adexchangebuyerbudgetupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Budget](#schemabudget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.budget.patch

<a id="opIdadexchangebuyer.budget.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/billinginfo/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountId": "string",
    "billingId": "string",
    "budgetAmount": "string",
    "currencyCode": "string",
    "id": "string",
    "kind": "adexchangebuyer#budget"
  }'
```

`PATCH /billinginfo/{accountId}/{billingId}`

Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.

> Body parameter

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

<h3 id="adexchangebuyerbudgetpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id associated with the budget being updated.|
|billingId|path|string|true|The billing id associated with the budget being updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Budget](#schemabudget)|false|none|
|» accountId|body|string(int64)|false|The id of the account. This is required for get and update requests.|
|» billingId|body|string(int64)|false|The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.|
|» budgetAmount|body|string(int64)|false|The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.|
|» currencyCode|body|string|false|The currency code for the buyer. This cannot be altered here.|
|» id|body|string|false|The unique id that describes this item.|
|» kind|body|string|false|The kind of the resource, i.e. "adexchangebuyer#budget".|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

<h3 id="adexchangebuyerbudgetpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Budget](#schemabudget)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-creatives">creatives</h1>

## adexchangebuyer.creatives.list

<a id="opIdadexchangebuyer.creatives.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /creatives`

Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

<h3 id="adexchangebuyercreativeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|[integer]|false|When specified, only creatives for the given account ids are returned.|
|buyerCreativeId|query|[string]|false|When specified, only creatives for the given buyer creative ids are returned.|
|dealsStatusFilter|query|string|false|When specified, only creatives having the given deals status are returned.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. If not set, the default is 100. Optional.|
|openAuctionStatusFilter|query|string|false|When specified, only creatives having the given open auction status are returned.|
|pageToken|query|string|false|A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dealsStatusFilter|approved|
|dealsStatusFilter|conditionally_approved|
|dealsStatusFilter|disapproved|
|dealsStatusFilter|not_checked|
|openAuctionStatusFilter|approved|
|openAuctionStatusFilter|conditionally_approved|
|openAuctionStatusFilter|disapproved|
|openAuctionStatusFilter|not_checked|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "HTMLSnippet": "string",
      "accountId": 0,
      "adChoicesDestinationUrl": "string",
      "adTechnologyProviders": {
        "detectedProviderIds": [
          "string"
        ],
        "hasUnidentifiedProvider": true
      },
      "advertiserId": [
        "string"
      ],
      "advertiserName": "string",
      "agencyId": "string",
      "apiUploadTimestamp": "1970-01-01T00:00:00Z",
      "attribute": [
        0
      ],
      "buyerCreativeId": "string",
      "clickThroughUrl": [
        "string"
      ],
      "corrections": [
        {
          "contexts": [
            {
              "auctionType": [
                "string"
              ],
              "contextType": "string",
              "geoCriteriaId": [
                0
              ],
              "platform": [
                "string"
              ]
            }
          ],
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "creativeStatusIdentityType": "string",
      "dealsStatus": "string",
      "detectedDomains": [
        "string"
      ],
      "filteringReasons": {
        "date": "string",
        "reasons": [
          {
            "filteringCount": "string",
            "filteringStatus": 0
          }
        ]
      },
      "height": 0,
      "impressionTrackingUrl": [
        "string"
      ],
      "kind": "adexchangebuyer#creative",
      "languages": [
        "string"
      ],
      "nativeAd": {
        "advertiser": "string",
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
        "impressionTrackingUrl": [
          "string"
        ],
        "logo": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "price": "string",
        "starRating": 0,
        "videoURL": "string"
      },
      "openAuctionStatus": "string",
      "productCategories": [
        0
      ],
      "restrictedCategories": [
        0
      ],
      "sensitiveCategories": [
        0
      ],
      "servingRestrictions": [
        {
          "contexts": [
            {
              "auctionType": [
                "string"
              ],
              "contextType": "string",
              "geoCriteriaId": [
                0
              ],
              "platform": [
                "string"
              ]
            }
          ],
          "disapprovalReasons": [
            {
              "details": [
                "string"
              ],
              "reason": "string"
            }
          ],
          "reason": "string"
        }
      ],
      "vendorType": [
        0
      ],
      "version": 0,
      "videoURL": "string",
      "videoVastXML": "string",
      "width": 0
    }
  ],
  "kind": "adexchangebuyer#creativesList",
  "nextPageToken": "string"
}
```

<h3 id="adexchangebuyercreativeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreativesList](#schemacreativeslist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.creatives.insert

<a id="opIdadexchangebuyer.creatives.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "HTMLSnippet": "string",
    "accountId": 0,
    "adChoicesDestinationUrl": "string",
    "adTechnologyProviders": {
      "detectedProviderIds": [
        "string"
      ],
      "hasUnidentifiedProvider": true
    },
    "advertiserId": [
      "string"
    ],
    "advertiserName": "string",
    "agencyId": "string",
    "apiUploadTimestamp": "1970-01-01T00:00:00Z",
    "attribute": [
      0
    ],
    "buyerCreativeId": "string",
    "clickThroughUrl": [
      "string"
    ],
    "corrections": [
      {
        "contexts": [
          {
            "auctionType": [
              "string"
            ],
            "contextType": "string",
            "geoCriteriaId": [
              0
            ],
            "platform": [
              "string"
            ]
          }
        ],
        "details": [
          "string"
        ],
        "reason": "string"
      }
    ],
    "creativeStatusIdentityType": "string",
    "dealsStatus": "string",
    "detectedDomains": [
      "string"
    ],
    "filteringReasons": {
      "date": "string",
      "reasons": [
        {
          "filteringCount": "string",
          "filteringStatus": 0
        }
      ]
    },
    "height": 0,
    "impressionTrackingUrl": [
      "string"
    ],
    "kind": "adexchangebuyer#creative",
    "languages": [
      "string"
    ],
    "nativeAd": {
      "advertiser": "string",
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
      "impressionTrackingUrl": [
        "string"
      ],
      "logo": {
        "height": 0,
        "url": "string",
        "width": 0
      },
      "price": "string",
      "starRating": 0,
      "videoURL": "string"
    },
    "openAuctionStatus": "string",
    "productCategories": [
      0
    ],
    "restrictedCategories": [
      0
    ],
    "sensitiveCategories": [
      0
    ],
    "servingRestrictions": [
      {
        "contexts": [
          {
            "auctionType": [
              "string"
            ],
            "contextType": "string",
            "geoCriteriaId": [
              0
            ],
            "platform": [
              "string"
            ]
          }
        ],
        "disapprovalReasons": [
          {
            "details": [
              "string"
            ],
            "reason": "string"
          }
        ],
        "reason": "string"
      }
    ],
    "vendorType": [
      0
    ],
    "version": 0,
    "videoURL": "string",
    "videoVastXML": "string",
    "width": 0
  }'
```

`POST /creatives`

Submit a new creative.

> Body parameter

```json
{
  "HTMLSnippet": "string",
  "accountId": 0,
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserId": [
    "string"
  ],
  "advertiserName": "string",
  "agencyId": "string",
  "apiUploadTimestamp": "1970-01-01T00:00:00Z",
  "attribute": [
    0
  ],
  "buyerCreativeId": "string",
  "clickThroughUrl": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "details": [
        "string"
      ],
      "reason": "string"
    }
  ],
  "creativeStatusIdentityType": "string",
  "dealsStatus": "string",
  "detectedDomains": [
    "string"
  ],
  "filteringReasons": {
    "date": "string",
    "reasons": [
      {
        "filteringCount": "string",
        "filteringStatus": 0
      }
    ]
  },
  "height": 0,
  "impressionTrackingUrl": [
    "string"
  ],
  "kind": "adexchangebuyer#creative",
  "languages": [
    "string"
  ],
  "nativeAd": {
    "advertiser": "string",
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
    "impressionTrackingUrl": [
      "string"
    ],
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "price": "string",
    "starRating": 0,
    "videoURL": "string"
  },
  "openAuctionStatus": "string",
  "productCategories": [
    0
  ],
  "restrictedCategories": [
    0
  ],
  "sensitiveCategories": [
    0
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "reason": "string"
    }
  ],
  "vendorType": [
    0
  ],
  "version": 0,
  "videoURL": "string",
  "videoVastXML": "string",
  "width": 0
}
```

<h3 id="adexchangebuyercreativesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Creative](#schemacreative)|false|none|
|» HTMLSnippet|body|string|false|The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.|
|» accountId|body|integer(int32)|false|Account id.|
|» adChoicesDestinationUrl|body|string|false|The link to the Ad Preferences page. This is only supported for native ads.|
|» adTechnologyProviders|body|object|false|none|
|» » detectedProviderIds|body|[string(int64)]|false|The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.|
|» » hasUnidentifiedProvider|body|boolean|false|Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.|
|» advertiserId|body|[string(int64)]|false|Detected advertiser id, if any. Read-only. This field should not be set in requests.|
|» advertiserName|body|string|false|The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file.|
|» agencyId|body|string(int64)|false|The agency id for this creative.|
|» apiUploadTimestamp|body|string(date-time)|false|The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).|
|» attribute|body|[integer(int32)]|false|List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.|
|» buyerCreativeId|body|string|false|A buyer-specific id identifying the creative in this ad.|
|» clickThroughUrl|body|[string]|false|The set of destination urls for the snippet.|
|» corrections|body|[object]|false|Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.|
|» » contexts|body|[object]|false|All known serving contexts containing serving status information.|
|» » » auctionType|body|[string]|false|Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to.|
|» » » contextType|body|string|false|The type of context (e.g., location, platform, auction type, SSL-ness).|
|» » » geoCriteriaId|body|[integer(int32)]|false|Only set when contextType=LOCATION. Represents the geo criterias this correction applies to.|
|» » » platform|body|[string]|false|Only set when contextType=PLATFORM. Represents the platforms this correction applies to.|
|» » details|body|[string]|false|Additional details about the correction.|
|» » reason|body|string|false|The type of correction that was applied to the creative.|
|» creativeStatusIdentityType|body|string|false|Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.|
|» dealsStatus|body|string|false|Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.|
|» detectedDomains|body|[string]|false|Detected domains for this creative. Read-only. This field should not be set in requests.|
|» filteringReasons|body|object|false|The filtering reasons for the creative. Read-only. This field should not be set in requests.|
|» » date|body|string|false|The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.|
|» » reasons|body|[object]|false|The filtering reasons.|
|» » » filteringCount|body|string(int64)|false|The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.|
|» » » filteringStatus|body|integer(int32)|false|The filtering status code as defined in  creative-status-codes.txt.|
|» height|body|integer(int32)|false|Ad height.|
|» impressionTrackingUrl|body|[string]|false|The set of urls to be called to record an impression.|
|» kind|body|string|false|Resource type.|
|» languages|body|[string]|false|Detected languages for this creative. Read-only. This field should not be set in requests.|
|» nativeAd|body|object|false|If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)|
|» » advertiser|body|string|false|none|
|» » appIcon|body|object|false|The app icon, for app download ads.|
|» » » height|body|integer(int32)|false|none|
|» » » url|body|string|false|none|
|» » » width|body|integer(int32)|false|none|
|» » body|body|string|false|A long description of the ad.|
|» » callToAction|body|string|false|A label for the button that the user is supposed to click.|
|» » clickLinkUrl|body|string|false|The URL that the browser/SDK will load when the user clicks the ad.|
|» » clickTrackingUrl|body|string|false|The URL to use for click tracking.|
|» » headline|body|string|false|A short title for the ad.|
|» » image|body|object|false|A large image.|
|» » » height|body|integer(int32)|false|none|
|» » » url|body|string|false|none|
|» » » width|body|integer(int32)|false|none|
|» » impressionTrackingUrl|body|[string]|false|The URLs are called when the impression is rendered.|
|» » logo|body|object|false|A smaller image, for the advertiser logo.|
|» » » height|body|integer(int32)|false|none|
|» » » url|body|string|false|none|
|» » » width|body|integer(int32)|false|none|
|» » price|body|string|false|The price of the promoted app including the currency info.|
|» » starRating|body|number(double)|false|The app rating in the app store. Must be in the range [0-5].|
|» » videoURL|body|string|false|The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url.|
|» openAuctionStatus|body|string|false|Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.|
|» productCategories|body|[integer(int32)]|false|Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.|
|» restrictedCategories|body|[integer(int32)]|false|All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.|
|» sensitiveCategories|body|[integer(int32)]|false|Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.|
|» servingRestrictions|body|[object]|false|The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.|
|» » contexts|body|[object]|false|All known contexts/restrictions.|
|» » » auctionType|body|[string]|false|Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to.|
|» » » contextType|body|string|false|The type of context (e.g., location, platform, auction type, SSL-ness).|
|» » » geoCriteriaId|body|[integer(int32)]|false|Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId.|
|» » » platform|body|[string]|false|Only set when contextType=PLATFORM. Represents the platforms this restriction applies to.|
|» » disapprovalReasons|body|[object]|false|The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue.|
|» » » details|body|[string]|false|Additional details about the reason for disapproval.|
|» » » reason|body|string|false|The categorized reason for disapproval.|
|» » reason|body|string|false|Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review).|
|» vendorType|body|[integer(int32)]|false|List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.|
|» version|body|integer(int32)|false|The version for this creative. Read-only. This field should not be set in requests.|
|» videoURL|body|string|false|The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.|
|» videoVastXML|body|string|false|The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.|
|» width|body|integer(int32)|false|Ad width.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "HTMLSnippet": "string",
  "accountId": 0,
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserId": [
    "string"
  ],
  "advertiserName": "string",
  "agencyId": "string",
  "apiUploadTimestamp": "1970-01-01T00:00:00Z",
  "attribute": [
    0
  ],
  "buyerCreativeId": "string",
  "clickThroughUrl": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "details": [
        "string"
      ],
      "reason": "string"
    }
  ],
  "creativeStatusIdentityType": "string",
  "dealsStatus": "string",
  "detectedDomains": [
    "string"
  ],
  "filteringReasons": {
    "date": "string",
    "reasons": [
      {
        "filteringCount": "string",
        "filteringStatus": 0
      }
    ]
  },
  "height": 0,
  "impressionTrackingUrl": [
    "string"
  ],
  "kind": "adexchangebuyer#creative",
  "languages": [
    "string"
  ],
  "nativeAd": {
    "advertiser": "string",
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
    "impressionTrackingUrl": [
      "string"
    ],
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "price": "string",
    "starRating": 0,
    "videoURL": "string"
  },
  "openAuctionStatus": "string",
  "productCategories": [
    0
  ],
  "restrictedCategories": [
    0
  ],
  "sensitiveCategories": [
    0
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "reason": "string"
    }
  ],
  "vendorType": [
    0
  ],
  "version": 0,
  "videoURL": "string",
  "videoVastXML": "string",
  "width": 0
}
```

<h3 id="adexchangebuyercreativesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Creative](#schemacreative)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.creatives.get

<a id="opIdadexchangebuyer.creatives.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives/0/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /creatives/{accountId}/{buyerCreativeId}`

Gets the status for a single creative. A creative will be available 30-40 minutes after submission.

<h3 id="adexchangebuyercreativesget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The id for the account that will serve this creative.|
|buyerCreativeId|path|string|true|The buyer-specific id for this creative.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "HTMLSnippet": "string",
  "accountId": 0,
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserId": [
    "string"
  ],
  "advertiserName": "string",
  "agencyId": "string",
  "apiUploadTimestamp": "1970-01-01T00:00:00Z",
  "attribute": [
    0
  ],
  "buyerCreativeId": "string",
  "clickThroughUrl": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "details": [
        "string"
      ],
      "reason": "string"
    }
  ],
  "creativeStatusIdentityType": "string",
  "dealsStatus": "string",
  "detectedDomains": [
    "string"
  ],
  "filteringReasons": {
    "date": "string",
    "reasons": [
      {
        "filteringCount": "string",
        "filteringStatus": 0
      }
    ]
  },
  "height": 0,
  "impressionTrackingUrl": [
    "string"
  ],
  "kind": "adexchangebuyer#creative",
  "languages": [
    "string"
  ],
  "nativeAd": {
    "advertiser": "string",
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
    "impressionTrackingUrl": [
      "string"
    ],
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "price": "string",
    "starRating": 0,
    "videoURL": "string"
  },
  "openAuctionStatus": "string",
  "productCategories": [
    0
  ],
  "restrictedCategories": [
    0
  ],
  "sensitiveCategories": [
    0
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "reason": "string"
    }
  ],
  "vendorType": [
    0
  ],
  "version": 0,
  "videoURL": "string",
  "videoVastXML": "string",
  "width": 0
}
```

<h3 id="adexchangebuyercreativesget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Creative](#schemacreative)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.creatives.addDeal

<a id="opIdadexchangebuyer.creatives.addDeal"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives/0/string/addDeal/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}`

Add a deal id association for the creative.

<h3 id="adexchangebuyercreativesadddeal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The id for the account that will serve this creative.|
|buyerCreativeId|path|string|true|The buyer-specific id for this creative.|
|dealId|path|string|true|The id of the deal id to associate with this creative.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="adexchangebuyercreativesadddeal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.creatives.listDeals

<a id="opIdadexchangebuyer.creatives.listDeals"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives/0/string/listDeals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /creatives/{accountId}/{buyerCreativeId}/listDeals`

Lists the external deal ids associated with the creative.

<h3 id="adexchangebuyercreativeslistdeals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The id for the account that will serve this creative.|
|buyerCreativeId|path|string|true|The buyer-specific id for this creative.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "dealStatuses": [
    {
      "arcStatus": "string",
      "dealId": "string",
      "webPropertyId": 0
    }
  ],
  "kind": "adexchangebuyer#creativeDealIds"
}
```

<h3 id="adexchangebuyercreativeslistdeals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreativeDealIds](#schemacreativedealids)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.creatives.removeDeal

<a id="opIdadexchangebuyer.creatives.removeDeal"></a>

> Code samples

```bash
curl https://www.googleapis.com/creatives/0/string/removeDeal/string \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}`

Remove a deal id associated with the creative.

<h3 id="adexchangebuyercreativesremovedeal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The id for the account that will serve this creative.|
|buyerCreativeId|path|string|true|The buyer-specific id for this creative.|
|dealId|path|string|true|The id of the deal id to disassociate with this creative.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="adexchangebuyercreativesremovedeal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-marketplacedeals">marketplacedeals</h1>

## adexchangebuyer.marketplacedeals.list

<a id="opIdadexchangebuyer.marketplacedeals.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/deals \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /proposals/{proposalId}/deals`

List all the deals for a given proposal

<h3 id="adexchangebuyermarketplacedealslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.|
|pqlQuery|query|string|false|Query string to retrieve specific deals.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ]
}
```

<h3 id="adexchangebuyermarketplacedealslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetOrderDealsResponse](#schemagetorderdealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.marketplacedeals.delete

<a id="opIdadexchangebuyer.marketplacedeals.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/deals/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dealIds": [
      "string"
    ],
    "proposalRevisionNumber": "string",
    "updateAction": "string"
  }'
```

`POST /proposals/{proposalId}/deals/delete`

Delete the specified deals from the proposal

> Body parameter

```json
{
  "dealIds": [
    "string"
  ],
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposalId to delete deals from.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[DeleteOrderDealsRequest](#schemadeleteorderdealsrequest)|false|none|
|» dealIds|body|[string]|false|List of deals to delete for a given proposal|
|» proposalRevisionNumber|body|string(int64)|false|The last known proposal revision number.|
|» updateAction|body|string|false|Indicates an optional action to take on the proposal|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[DeleteOrderDealsResponse](#schemadeleteorderdealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.marketplacedeals.insert

<a id="opIdadexchangebuyer.marketplacedeals.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/deals/insert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deals": [
      {
        "buyerPrivateData": {
          "referenceId": "string",
          "referencePayload": "string"
        },
        "creationTimeMs": "string",
        "creativePreApprovalPolicy": "string",
        "creativeSafeFrameCompatibility": "string",
        "dealId": "string",
        "dealServingMetadata": {
          "alcoholAdsAllowed": true,
          "dealPauseStatus": {
            "buyerPauseReason": "string",
            "firstPausedBy": "string",
            "hasBuyerPaused": true,
            "hasSellerPaused": true,
            "sellerPauseReason": "string"
          }
        },
        "deliveryControl": {
          "creativeBlockingLevel": "string",
          "deliveryRateType": "string",
          "frequencyCaps": [
            {
              "maxImpressions": 0,
              "numTimeUnits": 0,
              "timeUnitType": "string"
            }
          ]
        },
        "externalDealId": "string",
        "flightEndTimeMs": "string",
        "flightStartTimeMs": "string",
        "inventoryDescription": "string",
        "isRfpTemplate": true,
        "isSetupComplete": true,
        "kind": "adexchangebuyer#marketplaceDeal",
        "lastUpdateTimeMs": "string",
        "makegoodRequestedReason": "string",
        "name": "string",
        "productId": "string",
        "productRevisionNumber": "string",
        "programmaticCreativeSource": "string",
        "proposalId": "string",
        "sellerContacts": [
          {
            "email": "string",
            "name": "string"
          }
        ],
        "sharedTargetings": [
          {
            "exclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "string"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "string",
                  "nativeTemplate": "string",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "string"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "string",
                      "endHour": 0,
                      "endMinute": 0,
                      "startHour": 0,
                      "startMinute": 0
                    }
                  ],
                  "timeZoneType": "string"
                },
                "demogAgeCriteriaValue": {
                  "demogAgeCriteriaIds": [
                    "string"
                  ]
                },
                "demogGenderCriteriaValue": {
                  "demogGenderCriteriaIds": [
                    "string"
                  ]
                },
                "longValue": "string",
                "requestPlatformTargetingValue": {
                  "requestPlatforms": [
                    "string"
                  ]
                },
                "stringValue": "string"
              }
            ],
            "inclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "string"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "string",
                  "nativeTemplate": "string",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "string"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "string",
                      "endHour": 0,
                      "endMinute": 0,
                      "startHour": 0,
                      "startMinute": 0
                    }
                  ],
                  "timeZoneType": "string"
                },
                "demogAgeCriteriaValue": {
                  "demogAgeCriteriaIds": [
                    "string"
                  ]
                },
                "demogGenderCriteriaValue": {
                  "demogGenderCriteriaIds": [
                    "string"
                  ]
                },
                "longValue": "string",
                "requestPlatformTargetingValue": {
                  "requestPlatforms": [
                    "string"
                  ]
                },
                "stringValue": "string"
              }
            ],
            "key": "string"
          }
        ],
        "syndicationProduct": "string",
        "terms": {
          "brandingType": "string",
          "crossListedExternalDealIdType": "string",
          "description": "string",
          "estimatedGrossSpend": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "estimatedImpressionsPerDay": "string",
          "guaranteedFixedPriceTerms": {
            "billingInfo": {
              "currencyConversionTimeMs": "string",
              "dfpLineItemId": "string",
              "originalContractedQuantity": "string",
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            },
            "fixedPrices": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ],
            "guaranteedImpressions": "string",
            "guaranteedLooks": "string",
            "minimumDailyLooks": "string"
          },
          "nonGuaranteedAuctionTerms": {
            "autoOptimizePrivateAuction": true,
            "reservePricePerBuyers": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ]
          },
          "nonGuaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ]
          },
          "rubiconNonGuaranteedTerms": {
            "priorityPrice": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            },
            "standardPrice": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "sellerTimeZone": "string"
        },
        "webPropertyCode": "string"
      }
    ],
    "proposalRevisionNumber": "string",
    "updateAction": "string"
  }'
```

`POST /proposals/{proposalId}/deals/insert`

Add new deals for the specified proposal

> Body parameter

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|proposalId for which deals need to be added.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AddOrderDealsRequest](#schemaaddorderdealsrequest)|false|none|
|» deals|body|[[MarketplaceDeal](#schemamarketplacedeal)]|false|The list of deals to add|
|» proposalRevisionNumber|body|string(int64)|false|The last known proposal revision number.|
|» updateAction|body|string|false|Indicates an optional action to take on the proposal|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AddOrderDealsResponse](#schemaaddorderdealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.marketplacedeals.update

<a id="opIdadexchangebuyer.marketplacedeals.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/deals/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "deals": [
      {
        "buyerPrivateData": {
          "referenceId": "string",
          "referencePayload": "string"
        },
        "creationTimeMs": "string",
        "creativePreApprovalPolicy": "string",
        "creativeSafeFrameCompatibility": "string",
        "dealId": "string",
        "dealServingMetadata": {
          "alcoholAdsAllowed": true,
          "dealPauseStatus": {
            "buyerPauseReason": "string",
            "firstPausedBy": "string",
            "hasBuyerPaused": true,
            "hasSellerPaused": true,
            "sellerPauseReason": "string"
          }
        },
        "deliveryControl": {
          "creativeBlockingLevel": "string",
          "deliveryRateType": "string",
          "frequencyCaps": [
            {
              "maxImpressions": 0,
              "numTimeUnits": 0,
              "timeUnitType": "string"
            }
          ]
        },
        "externalDealId": "string",
        "flightEndTimeMs": "string",
        "flightStartTimeMs": "string",
        "inventoryDescription": "string",
        "isRfpTemplate": true,
        "isSetupComplete": true,
        "kind": "adexchangebuyer#marketplaceDeal",
        "lastUpdateTimeMs": "string",
        "makegoodRequestedReason": "string",
        "name": "string",
        "productId": "string",
        "productRevisionNumber": "string",
        "programmaticCreativeSource": "string",
        "proposalId": "string",
        "sellerContacts": [
          {
            "email": "string",
            "name": "string"
          }
        ],
        "sharedTargetings": [
          {
            "exclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "string"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "string",
                  "nativeTemplate": "string",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "string"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "string",
                      "endHour": 0,
                      "endMinute": 0,
                      "startHour": 0,
                      "startMinute": 0
                    }
                  ],
                  "timeZoneType": "string"
                },
                "demogAgeCriteriaValue": {
                  "demogAgeCriteriaIds": [
                    "string"
                  ]
                },
                "demogGenderCriteriaValue": {
                  "demogGenderCriteriaIds": [
                    "string"
                  ]
                },
                "longValue": "string",
                "requestPlatformTargetingValue": {
                  "requestPlatforms": [
                    "string"
                  ]
                },
                "stringValue": "string"
              }
            ],
            "inclusions": [
              {
                "creativeSizeValue": {
                  "allowedFormats": [
                    "string"
                  ],
                  "companionSizes": [
                    {
                      "height": 0,
                      "width": 0
                    }
                  ],
                  "creativeSizeType": "string",
                  "nativeTemplate": "string",
                  "size": {
                    "height": 0,
                    "width": 0
                  },
                  "skippableAdType": "string"
                },
                "dayPartTargetingValue": {
                  "dayParts": [
                    {
                      "dayOfWeek": "string",
                      "endHour": 0,
                      "endMinute": 0,
                      "startHour": 0,
                      "startMinute": 0
                    }
                  ],
                  "timeZoneType": "string"
                },
                "demogAgeCriteriaValue": {
                  "demogAgeCriteriaIds": [
                    "string"
                  ]
                },
                "demogGenderCriteriaValue": {
                  "demogGenderCriteriaIds": [
                    "string"
                  ]
                },
                "longValue": "string",
                "requestPlatformTargetingValue": {
                  "requestPlatforms": [
                    "string"
                  ]
                },
                "stringValue": "string"
              }
            ],
            "key": "string"
          }
        ],
        "syndicationProduct": "string",
        "terms": {
          "brandingType": "string",
          "crossListedExternalDealIdType": "string",
          "description": "string",
          "estimatedGrossSpend": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "estimatedImpressionsPerDay": "string",
          "guaranteedFixedPriceTerms": {
            "billingInfo": {
              "currencyConversionTimeMs": "string",
              "dfpLineItemId": "string",
              "originalContractedQuantity": "string",
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            },
            "fixedPrices": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ],
            "guaranteedImpressions": "string",
            "guaranteedLooks": "string",
            "minimumDailyLooks": "string"
          },
          "nonGuaranteedAuctionTerms": {
            "autoOptimizePrivateAuction": true,
            "reservePricePerBuyers": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ]
          },
          "nonGuaranteedFixedPriceTerms": {
            "fixedPrices": [
              {
                "auctionTier": "string",
                "billedBuyer": {
                  "accountId": "string"
                },
                "buyer": {
                  "accountId": "string"
                },
                "price": {
                  "amountMicros": 0,
                  "currencyCode": "string",
                  "expectedCpmMicros": 0,
                  "pricingType": "string"
                }
              }
            ]
          },
          "rubiconNonGuaranteedTerms": {
            "priorityPrice": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            },
            "standardPrice": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "sellerTimeZone": "string"
        },
        "webPropertyCode": "string"
      }
    ],
    "proposal": {
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    },
    "proposalRevisionNumber": "string",
    "updateAction": "string"
  }'
```

`POST /proposals/{proposalId}/deals/update`

Replaces all the deals in the proposal with the passed in deals

> Body parameter

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposal": {
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
      "referenceId": "string",
      "referencePayload": "string"
    },
    "dbmAdvertiserIds": [
      "string"
    ],
    "hasBuyerSignedOff": true,
    "hasSellerSignedOff": true,
    "inventorySource": "string",
    "isRenegotiating": true,
    "isSetupComplete": true,
    "kind": "adexchangebuyer#proposal",
    "labels": [
      {
        "accountId": "string",
        "createTimeMs": "string",
        "deprecatedMarketplaceDealParty": {
          "buyer": {
            "accountId": "string"
          },
          "seller": {
            "accountId": "string",
            "subAccountId": "string"
          }
        },
        "label": "string"
      }
    ],
    "lastUpdaterOrCommentorRole": "string",
    "name": "string",
    "negotiationId": "string",
    "originatorRole": "string",
    "privateAuctionId": "string",
    "proposalId": "string",
    "proposalState": "string",
    "revisionNumber": "string",
    "revisionTimeMs": "string",
    "seller": {
      "accountId": "string",
      "subAccountId": "string"
    },
    "sellerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  },
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposalId to edit deals on.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[EditAllOrderDealsRequest](#schemaeditallorderdealsrequest)|false|none|
|» deals|body|[[MarketplaceDeal](#schemamarketplacedeal)]|false|List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.|
|» proposal|body|[Proposal](#schemaproposal)|false|If specified, also updates the proposal in the batch transaction. This is useful when the proposal and the deals need to be updated in one transaction.|
|» proposalRevisionNumber|body|string(int64)|false|The last known revision number for the proposal.|
|» updateAction|body|string|false|Indicates an optional action to take on the proposal|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "orderRevisionNumber": "string"
}
```

<h3 id="adexchangebuyermarketplacedealsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[EditAllOrderDealsResponse](#schemaeditallorderdealsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-marketplacenotes">marketplacenotes</h1>

## adexchangebuyer.marketplacenotes.list

<a id="opIdadexchangebuyer.marketplacenotes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/notes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /proposals/{proposalId}/notes`

Get all the notes associated with a proposal

<h3 id="adexchangebuyermarketplacenoteslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.|
|pqlQuery|query|string|false|Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

<h3 id="adexchangebuyermarketplacenoteslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetOrderNotesResponse](#schemagetordernotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.marketplacenotes.insert

<a id="opIdadexchangebuyer.marketplacenotes.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/notes/insert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notes": [
      {
        "creatorRole": "string",
        "dealId": "string",
        "kind": "adexchangebuyer#marketplaceNote",
        "note": "string",
        "noteId": "string",
        "proposalId": "string",
        "proposalRevisionNumber": "string",
        "timestampMs": "string"
      }
    ]
  }'
```

`POST /proposals/{proposalId}/notes/insert`

Add notes to the proposal

> Body parameter

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

<h3 id="adexchangebuyermarketplacenotesinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposalId to add notes for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[AddOrderNotesRequest](#schemaaddordernotesrequest)|false|none|
|» notes|body|[[MarketplaceNote](#schemamarketplacenote)]|false|The list of notes to add.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

<h3 id="adexchangebuyermarketplacenotesinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[AddOrderNotesResponse](#schemaaddordernotesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-marketplaceprivateauction">marketplaceprivateauction</h1>

## adexchangebuyer.marketplaceprivateauction.updateproposal

<a id="opIdadexchangebuyer.marketplaceprivateauction.updateproposal"></a>

> Code samples

```bash
curl https://www.googleapis.com/privateauction/string/updateproposal \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "externalDealId": "string",
    "note": {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    },
    "proposalRevisionNumber": "string",
    "updateAction": "string"
  }'
```

`POST /privateauction/{privateAuctionId}/updateproposal`

Update a given private auction proposal

> Body parameter

```json
{
  "externalDealId": "string",
  "note": {
    "creatorRole": "string",
    "dealId": "string",
    "kind": "adexchangebuyer#marketplaceNote",
    "note": "string",
    "noteId": "string",
    "proposalId": "string",
    "proposalRevisionNumber": "string",
    "timestampMs": "string"
  },
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

<h3 id="adexchangebuyermarketplaceprivateauctionupdateproposal-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|privateAuctionId|path|string|true|The private auction id to be updated.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[UpdatePrivateAuctionProposalRequest](#schemaupdateprivateauctionproposalrequest)|false|none|
|» externalDealId|body|string|false|The externalDealId of the deal to be updated.|
|» note|body|[MarketplaceNote](#schemamarketplacenote)|false|Optional note to be added.|
|» proposalRevisionNumber|body|string(int64)|false|The current revision number of the proposal to be updated.|
|» updateAction|body|string|false|The proposed action on the private auction proposal.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="adexchangebuyermarketplaceprivateauctionupdateproposal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-performancereport">performanceReport</h1>

## adexchangebuyer.performanceReport.list

<a id="opIdadexchangebuyer.performanceReport.list"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/performancereport?accountId=string&endDateTime=string&startDateTime=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /performancereport`

Retrieves the authenticated user's list of performance metrics.

<h3 id="adexchangebuyerperformancereportlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|query|string|true|The account id to get the reports.|
|endDateTime|query|string|true|The end time of the report in ISO 8601 timestamp format using UTC.|
|startDateTime|query|string|true|The start time of the report in ISO 8601 timestamp format using UTC.|
|maxResults|query|integer|false|Maximum number of entries returned on one result page. If not set, the default is 100. Optional.|
|pageToken|query|string|false|A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "kind": "adexchangebuyer#performanceReportList",
  "performanceReport": [
    {
      "bidRate": 0,
      "bidRequestRate": 0,
      "calloutStatusRate": [
        null
      ],
      "cookieMatcherStatusRate": [
        null
      ],
      "creativeStatusRate": [
        null
      ],
      "filteredBidRate": 0,
      "hostedMatchStatusRate": [
        null
      ],
      "inventoryMatchRate": 0,
      "kind": "adexchangebuyer#performanceReport",
      "latency50thPercentile": 0,
      "latency85thPercentile": 0,
      "latency95thPercentile": 0,
      "noQuotaInRegion": 0,
      "outOfQuota": 0,
      "pixelMatchRequests": 0,
      "pixelMatchResponses": 0,
      "quotaConfiguredLimit": 0,
      "quotaThrottledLimit": 0,
      "region": "string",
      "successfulRequestRate": 0,
      "timestamp": "string",
      "unsuccessfulRequestRate": 0
    }
  ]
}
```

<h3 id="adexchangebuyerperformancereportlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PerformanceReportList](#schemaperformancereportlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-pretargetingconfig">pretargetingConfig</h1>

## adexchangebuyer.pretargetingConfig.list

<a id="opIdadexchangebuyer.pretargetingConfig.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pretargetingconfigs/{accountId}`

Retrieves a list of the authenticated user's pretargeting configurations.

<h3 id="adexchangebuyerpretargetingconfiglist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to get the pretargeting configs for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "billingId": "string",
      "configId": "string",
      "configName": "string",
      "creativeType": [
        "string"
      ],
      "dimensions": [
        {
          "height": "string",
          "width": "string"
        }
      ],
      "excludedContentLabels": [
        "string"
      ],
      "excludedGeoCriteriaIds": [
        "string"
      ],
      "excludedPlacements": [
        {
          "token": "string",
          "type": "string"
        }
      ],
      "excludedUserLists": [
        "string"
      ],
      "excludedVerticals": [
        "string"
      ],
      "geoCriteriaIds": [
        "string"
      ],
      "isActive": true,
      "kind": "adexchangebuyer#pretargetingConfig",
      "languages": [
        "string"
      ],
      "maximumQps": "string",
      "minimumViewabilityDecile": 0,
      "mobileCarriers": [
        "string"
      ],
      "mobileDevices": [
        "string"
      ],
      "mobileOperatingSystemVersions": [
        "string"
      ],
      "placements": [
        {
          "token": "string",
          "type": "string"
        }
      ],
      "platforms": [
        "string"
      ],
      "supportedCreativeAttributes": [
        "string"
      ],
      "userIdentifierDataRequired": [
        "string"
      ],
      "userLists": [
        "string"
      ],
      "vendorTypes": [
        "string"
      ],
      "verticals": [
        "string"
      ],
      "videoPlayerSizes": [
        {
          "aspectRatio": "string",
          "minHeight": "string",
          "minWidth": "string"
        }
      ]
    }
  ],
  "kind": "adexchangebuyer#pretargetingConfigList"
}
```

<h3 id="adexchangebuyerpretargetingconfiglist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PretargetingConfigList](#schemapretargetingconfiglist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.pretargetingConfig.insert

<a id="opIdadexchangebuyer.pretargetingConfig.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingId": "string",
    "configId": "string",
    "configName": "string",
    "creativeType": [
      "string"
    ],
    "dimensions": [
      {
        "height": "string",
        "width": "string"
      }
    ],
    "excludedContentLabels": [
      "string"
    ],
    "excludedGeoCriteriaIds": [
      "string"
    ],
    "excludedPlacements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "excludedUserLists": [
      "string"
    ],
    "excludedVerticals": [
      "string"
    ],
    "geoCriteriaIds": [
      "string"
    ],
    "isActive": true,
    "kind": "adexchangebuyer#pretargetingConfig",
    "languages": [
      "string"
    ],
    "maximumQps": "string",
    "minimumViewabilityDecile": 0,
    "mobileCarriers": [
      "string"
    ],
    "mobileDevices": [
      "string"
    ],
    "mobileOperatingSystemVersions": [
      "string"
    ],
    "placements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "platforms": [
      "string"
    ],
    "supportedCreativeAttributes": [
      "string"
    ],
    "userIdentifierDataRequired": [
      "string"
    ],
    "userLists": [
      "string"
    ],
    "vendorTypes": [
      "string"
    ],
    "verticals": [
      "string"
    ],
    "videoPlayerSizes": [
      {
        "aspectRatio": "string",
        "minHeight": "string",
        "minWidth": "string"
      }
    ]
  }'
```

`POST /pretargetingconfigs/{accountId}`

Inserts a new pretargeting configuration.

> Body parameter

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfiginsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to insert the pretargeting config for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[PretargetingConfig](#schemapretargetingconfig)|false|none|
|» billingId|body|string(int64)|false|The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.|
|» configId|body|string(int64)|false|The config id; generated automatically. Leave this field blank for insert requests.|
|» configName|body|string|false|The name of the config. Must be unique. Required for all requests.|
|» creativeType|body|[string]|false|List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.|
|» dimensions|body|[object]|false|Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.|
|» » height|body|string(int64)|false|Height in pixels.|
|» » width|body|string(int64)|false|Width in pixels.|
|» excludedContentLabels|body|[string(int64)]|false|Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.|
|» excludedGeoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will not match.|
|» excludedPlacements|body|[object]|false|Requests containing any of these placements will not match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» excludedUserLists|body|[string(int64)]|false|Requests containing any of these users list ids will not match.|
|» excludedVerticals|body|[string(int64)]|false|Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.|
|» geoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will match.|
|» isActive|body|boolean|false|Whether this config is active. Required for all requests.|
|» kind|body|string|false|The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".|
|» languages|body|[string]|false|Request containing any of these language codes will match.|
|» maximumQps|body|string(int64)|false|The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).|
|» minimumViewabilityDecile|body|integer(int32)|false|Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.|
|» mobileCarriers|body|[string(int64)]|false|Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.|
|» mobileDevices|body|[string(int64)]|false|Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.|
|» mobileOperatingSystemVersions|body|[string(int64)]|false|Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.|
|» placements|body|[object]|false|Requests containing any of these placements will match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» platforms|body|[string]|false|Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.|
|» supportedCreativeAttributes|body|[string(int64)]|false|Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.|
|» userIdentifierDataRequired|body|[string]|false|Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.|
|» userLists|body|[string(int64)]|false|Requests containing any of these user list ids will match.|
|» vendorTypes|body|[string(int64)]|false|Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.|
|» verticals|body|[string(int64)]|false|Requests containing any of these vertical ids will match.|
|» videoPlayerSizes|body|[object]|false|Video requests satisfying any of these player size constraints will match.|
|» » aspectRatio|body|string|false|The type of aspect ratio. Leave this field blank to match all aspect ratios.|
|» » minHeight|body|string(int64)|false|The minimum player height in pixels. Leave this field blank to match any player height.|
|» » minWidth|body|string(int64)|false|The minimum player width in pixels. Leave this field blank to match any player width.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfiginsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PretargetingConfig](#schemapretargetingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.pretargetingConfig.get

<a id="opIdadexchangebuyer.pretargetingConfig.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pretargetingconfigs/{accountId}/{configId}`

Gets a specific pretargeting configuration

<h3 id="adexchangebuyerpretargetingconfigget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to get the pretargeting config for.|
|configId|path|string|true|The specific id of the configuration to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfigget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PretargetingConfig](#schemapretargetingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.pretargetingConfig.update

<a id="opIdadexchangebuyer.pretargetingConfig.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingId": "string",
    "configId": "string",
    "configName": "string",
    "creativeType": [
      "string"
    ],
    "dimensions": [
      {
        "height": "string",
        "width": "string"
      }
    ],
    "excludedContentLabels": [
      "string"
    ],
    "excludedGeoCriteriaIds": [
      "string"
    ],
    "excludedPlacements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "excludedUserLists": [
      "string"
    ],
    "excludedVerticals": [
      "string"
    ],
    "geoCriteriaIds": [
      "string"
    ],
    "isActive": true,
    "kind": "adexchangebuyer#pretargetingConfig",
    "languages": [
      "string"
    ],
    "maximumQps": "string",
    "minimumViewabilityDecile": 0,
    "mobileCarriers": [
      "string"
    ],
    "mobileDevices": [
      "string"
    ],
    "mobileOperatingSystemVersions": [
      "string"
    ],
    "placements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "platforms": [
      "string"
    ],
    "supportedCreativeAttributes": [
      "string"
    ],
    "userIdentifierDataRequired": [
      "string"
    ],
    "userLists": [
      "string"
    ],
    "vendorTypes": [
      "string"
    ],
    "verticals": [
      "string"
    ],
    "videoPlayerSizes": [
      {
        "aspectRatio": "string",
        "minHeight": "string",
        "minWidth": "string"
      }
    ]
  }'
```

`PUT /pretargetingconfigs/{accountId}/{configId}`

Updates an existing pretargeting config.

> Body parameter

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfigupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to update the pretargeting config for.|
|configId|path|string|true|The specific id of the configuration to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[PretargetingConfig](#schemapretargetingconfig)|false|none|
|» billingId|body|string(int64)|false|The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.|
|» configId|body|string(int64)|false|The config id; generated automatically. Leave this field blank for insert requests.|
|» configName|body|string|false|The name of the config. Must be unique. Required for all requests.|
|» creativeType|body|[string]|false|List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.|
|» dimensions|body|[object]|false|Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.|
|» » height|body|string(int64)|false|Height in pixels.|
|» » width|body|string(int64)|false|Width in pixels.|
|» excludedContentLabels|body|[string(int64)]|false|Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.|
|» excludedGeoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will not match.|
|» excludedPlacements|body|[object]|false|Requests containing any of these placements will not match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» excludedUserLists|body|[string(int64)]|false|Requests containing any of these users list ids will not match.|
|» excludedVerticals|body|[string(int64)]|false|Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.|
|» geoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will match.|
|» isActive|body|boolean|false|Whether this config is active. Required for all requests.|
|» kind|body|string|false|The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".|
|» languages|body|[string]|false|Request containing any of these language codes will match.|
|» maximumQps|body|string(int64)|false|The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).|
|» minimumViewabilityDecile|body|integer(int32)|false|Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.|
|» mobileCarriers|body|[string(int64)]|false|Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.|
|» mobileDevices|body|[string(int64)]|false|Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.|
|» mobileOperatingSystemVersions|body|[string(int64)]|false|Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.|
|» placements|body|[object]|false|Requests containing any of these placements will match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» platforms|body|[string]|false|Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.|
|» supportedCreativeAttributes|body|[string(int64)]|false|Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.|
|» userIdentifierDataRequired|body|[string]|false|Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.|
|» userLists|body|[string(int64)]|false|Requests containing any of these user list ids will match.|
|» vendorTypes|body|[string(int64)]|false|Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.|
|» verticals|body|[string(int64)]|false|Requests containing any of these vertical ids will match.|
|» videoPlayerSizes|body|[object]|false|Video requests satisfying any of these player size constraints will match.|
|» » aspectRatio|body|string|false|The type of aspect ratio. Leave this field blank to match all aspect ratios.|
|» » minHeight|body|string(int64)|false|The minimum player height in pixels. Leave this field blank to match any player height.|
|» » minWidth|body|string(int64)|false|The minimum player width in pixels. Leave this field blank to match any player width.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfigupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PretargetingConfig](#schemapretargetingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.pretargetingConfig.delete

<a id="opIdadexchangebuyer.pretargetingConfig.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /pretargetingconfigs/{accountId}/{configId}`

Deletes an existing pretargeting config.

<h3 id="adexchangebuyerpretargetingconfigdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to delete the pretargeting config for.|
|configId|path|string|true|The specific id of the configuration to delete.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="adexchangebuyerpretargetingconfigdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.pretargetingConfig.patch

<a id="opIdadexchangebuyer.pretargetingConfig.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/pretargetingconfigs/string/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingId": "string",
    "configId": "string",
    "configName": "string",
    "creativeType": [
      "string"
    ],
    "dimensions": [
      {
        "height": "string",
        "width": "string"
      }
    ],
    "excludedContentLabels": [
      "string"
    ],
    "excludedGeoCriteriaIds": [
      "string"
    ],
    "excludedPlacements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "excludedUserLists": [
      "string"
    ],
    "excludedVerticals": [
      "string"
    ],
    "geoCriteriaIds": [
      "string"
    ],
    "isActive": true,
    "kind": "adexchangebuyer#pretargetingConfig",
    "languages": [
      "string"
    ],
    "maximumQps": "string",
    "minimumViewabilityDecile": 0,
    "mobileCarriers": [
      "string"
    ],
    "mobileDevices": [
      "string"
    ],
    "mobileOperatingSystemVersions": [
      "string"
    ],
    "placements": [
      {
        "token": "string",
        "type": "string"
      }
    ],
    "platforms": [
      "string"
    ],
    "supportedCreativeAttributes": [
      "string"
    ],
    "userIdentifierDataRequired": [
      "string"
    ],
    "userLists": [
      "string"
    ],
    "vendorTypes": [
      "string"
    ],
    "verticals": [
      "string"
    ],
    "videoPlayerSizes": [
      {
        "aspectRatio": "string",
        "minHeight": "string",
        "minWidth": "string"
      }
    ]
  }'
```

`PATCH /pretargetingconfigs/{accountId}/{configId}`

Updates an existing pretargeting config. This method supports patch semantics.

> Body parameter

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfigpatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|string|true|The account id to update the pretargeting config for.|
|configId|path|string|true|The specific id of the configuration to update.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[PretargetingConfig](#schemapretargetingconfig)|false|none|
|» billingId|body|string(int64)|false|The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.|
|» configId|body|string(int64)|false|The config id; generated automatically. Leave this field blank for insert requests.|
|» configName|body|string|false|The name of the config. Must be unique. Required for all requests.|
|» creativeType|body|[string]|false|List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.|
|» dimensions|body|[object]|false|Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.|
|» » height|body|string(int64)|false|Height in pixels.|
|» » width|body|string(int64)|false|Width in pixels.|
|» excludedContentLabels|body|[string(int64)]|false|Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.|
|» excludedGeoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will not match.|
|» excludedPlacements|body|[object]|false|Requests containing any of these placements will not match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» excludedUserLists|body|[string(int64)]|false|Requests containing any of these users list ids will not match.|
|» excludedVerticals|body|[string(int64)]|false|Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.|
|» geoCriteriaIds|body|[string(int64)]|false|Requests containing any of these geo criteria ids will match.|
|» isActive|body|boolean|false|Whether this config is active. Required for all requests.|
|» kind|body|string|false|The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".|
|» languages|body|[string]|false|Request containing any of these language codes will match.|
|» maximumQps|body|string(int64)|false|The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).|
|» minimumViewabilityDecile|body|integer(int32)|false|Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.|
|» mobileCarriers|body|[string(int64)]|false|Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.|
|» mobileDevices|body|[string(int64)]|false|Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.|
|» mobileOperatingSystemVersions|body|[string(int64)]|false|Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.|
|» placements|body|[object]|false|Requests containing any of these placements will match.|
|» » token|body|string|false|The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.|
|» » type|body|string|false|The type of the placement.|
|» platforms|body|[string]|false|Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.|
|» supportedCreativeAttributes|body|[string(int64)]|false|Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.|
|» userIdentifierDataRequired|body|[string]|false|Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.|
|» userLists|body|[string(int64)]|false|Requests containing any of these user list ids will match.|
|» vendorTypes|body|[string(int64)]|false|Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.|
|» verticals|body|[string(int64)]|false|Requests containing any of these vertical ids will match.|
|» videoPlayerSizes|body|[object]|false|Video requests satisfying any of these player size constraints will match.|
|» » aspectRatio|body|string|false|The type of aspect ratio. Leave this field blank to match all aspect ratios.|
|» » minHeight|body|string(int64)|false|The minimum player height in pixels. Leave this field blank to match any player height.|
|» » minWidth|body|string(int64)|false|The minimum player width in pixels. Leave this field blank to match any player width.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerpretargetingconfigpatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[PretargetingConfig](#schemapretargetingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-products">products</h1>

## adexchangebuyer.products.search

<a id="opIdadexchangebuyer.products.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/products/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /products/search`

Gets the requested product.

<h3 id="adexchangebuyerproductssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pqlQuery|query|string|false|The pql query used to query for products.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "products": [
    {
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "creationTimeMs": "string",
      "creatorContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "creatorRole": "string",
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "hasCreatorSignedOff": true,
      "inventorySource": "string",
      "kind": "adexchangebuyer#product",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdateTimeMs": "string",
      "legacyOfferId": "string",
      "marketplacePublisherProfileId": "string",
      "name": "string",
      "privateAuctionId": "string",
      "productId": "string",
      "publisherProfileId": "string",
      "publisherProvidedForecast": {
        "dimensions": [
          {
            "dimensionType": "string",
            "dimensionValues": [
              {
                "id": 0,
                "name": "string",
                "percentage": 0
              }
            ]
          }
        ],
        "weeklyImpressions": "string",
        "weeklyUniques": "string"
      },
      "revisionNumber": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "state": "string",
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproductssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetOffersResponse](#schemagetoffersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.products.get

<a id="opIdadexchangebuyer.products.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/products/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /products/{productId}`

Gets the requested product by id.

<h3 id="adexchangebuyerproductsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|productId|path|string|true|The id for the product to get the head revision for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
  "creationTimeMs": "string",
  "creatorContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "creatorRole": "string",
  "deliveryControl": {
    "creativeBlockingLevel": "string",
    "deliveryRateType": "string",
    "frequencyCaps": [
      {
        "maxImpressions": 0,
        "numTimeUnits": 0,
        "timeUnitType": "string"
      }
    ]
  },
  "flightEndTimeMs": "string",
  "flightStartTimeMs": "string",
  "hasCreatorSignedOff": true,
  "inventorySource": "string",
  "kind": "adexchangebuyer#product",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdateTimeMs": "string",
  "legacyOfferId": "string",
  "marketplacePublisherProfileId": "string",
  "name": "string",
  "privateAuctionId": "string",
  "productId": "string",
  "publisherProfileId": "string",
  "publisherProvidedForecast": {
    "dimensions": [
      {
        "dimensionType": "string",
        "dimensionValues": [
          {
            "id": 0,
            "name": "string",
            "percentage": 0
          }
        ]
      }
    ],
    "weeklyImpressions": "string",
    "weeklyUniques": "string"
  },
  "revisionNumber": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sharedTargetings": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "state": "string",
  "syndicationProduct": "string",
  "terms": {
    "brandingType": "string",
    "crossListedExternalDealIdType": "string",
    "description": "string",
    "estimatedGrossSpend": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "billingInfo": {
        "currencyConversionTimeMs": "string",
        "dfpLineItemId": "string",
        "originalContractedQuantity": "string",
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      },
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "minimumDailyLooks": "string"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricePerBuyers": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "rubiconNonGuaranteedTerms": {
      "priorityPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      },
      "standardPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    },
    "sellerTimeZone": "string"
  },
  "webPropertyCode": "string"
}
```

<h3 id="adexchangebuyerproductsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Product](#schemaproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-proposals">proposals</h1>

## adexchangebuyer.proposals.insert

<a id="opIdadexchangebuyer.proposals.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/insert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
          "referenceId": "string",
          "referencePayload": "string"
        },
        "dbmAdvertiserIds": [
          "string"
        ],
        "hasBuyerSignedOff": true,
        "hasSellerSignedOff": true,
        "inventorySource": "string",
        "isRenegotiating": true,
        "isSetupComplete": true,
        "kind": "adexchangebuyer#proposal",
        "labels": [
          {
            "accountId": "string",
            "createTimeMs": "string",
            "deprecatedMarketplaceDealParty": {
              "buyer": {
                "accountId": "string"
              },
              "seller": {
                "accountId": "string",
                "subAccountId": "string"
              }
            },
            "label": "string"
          }
        ],
        "lastUpdaterOrCommentorRole": "string",
        "name": "string",
        "negotiationId": "string",
        "originatorRole": "string",
        "privateAuctionId": "string",
        "proposalId": "string",
        "proposalState": "string",
        "revisionNumber": "string",
        "revisionTimeMs": "string",
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        },
        "sellerContacts": [
          {
            "email": "string",
            "name": "string"
          }
        ]
      }
    ],
    "webPropertyCode": "string"
  }'
```

`POST /proposals/insert`

Create the given list of proposals

> Body parameter

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ],
  "webPropertyCode": "string"
}
```

<h3 id="adexchangebuyerproposalsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[CreateOrdersRequest](#schemacreateordersrequest)|false|none|
|» proposals|body|[[Proposal](#schemaproposal)]|false|The list of proposals to create.|
|» webPropertyCode|body|string|false|Web property id of the seller creating these orders|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="adexchangebuyerproposalsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[CreateOrdersResponse](#schemacreateordersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.proposals.search

<a id="opIdadexchangebuyer.proposals.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/search \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /proposals/search`

Search for proposals using pql query

<h3 id="adexchangebuyerproposalssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pqlQuery|query|string|false|Query string to retrieve specific proposals.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="adexchangebuyerproposalssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetOrdersResponse](#schemagetordersresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.proposals.get

<a id="opIdadexchangebuyer.proposals.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /proposals/{proposalId}`

Get a proposal given its id

<h3 id="adexchangebuyerproposalsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|Id of the proposal to retrieve.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproposalsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.proposals.setupcomplete

<a id="opIdadexchangebuyer.proposals.setupcomplete"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/setupcomplete \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /proposals/{proposalId}/setupcomplete`

Update the given proposal to indicate that setup has been completed.

<h3 id="adexchangebuyerproposalssetupcomplete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposal id for which the setup is complete|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

<h3 id="adexchangebuyerproposalssetupcomplete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.proposals.update

<a id="opIdadexchangebuyer.proposals.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/string/accept \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
      "referenceId": "string",
      "referencePayload": "string"
    },
    "dbmAdvertiserIds": [
      "string"
    ],
    "hasBuyerSignedOff": true,
    "hasSellerSignedOff": true,
    "inventorySource": "string",
    "isRenegotiating": true,
    "isSetupComplete": true,
    "kind": "adexchangebuyer#proposal",
    "labels": [
      {
        "accountId": "string",
        "createTimeMs": "string",
        "deprecatedMarketplaceDealParty": {
          "buyer": {
            "accountId": "string"
          },
          "seller": {
            "accountId": "string",
            "subAccountId": "string"
          }
        },
        "label": "string"
      }
    ],
    "lastUpdaterOrCommentorRole": "string",
    "name": "string",
    "negotiationId": "string",
    "originatorRole": "string",
    "privateAuctionId": "string",
    "proposalId": "string",
    "proposalState": "string",
    "revisionNumber": "string",
    "revisionTimeMs": "string",
    "seller": {
      "accountId": "string",
      "subAccountId": "string"
    },
    "sellerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  }'
```

`PUT /proposals/{proposalId}/{revisionNumber}/{updateAction}`

Update the given proposal

> Body parameter

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproposalsupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposal id to update.|
|revisionNumber|path|string|true|The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.|
|updateAction|path|string|true|The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Proposal](#schemaproposal)|false|none|
|» billedBuyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer that will get billed for this proposal. (readonly)|
|» buyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer on the proposal. (readonly, except on create)|
|» buyerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Optional contact information of the buyer. (seller-readonly)|
|» buyerPrivateData|body|[PrivateData](#schemaprivatedata)|false|Private data for buyer. (hidden from seller).|
|» dbmAdvertiserIds|body|[string]|false|IDs of DBM advertisers permission to this proposal.|
|» hasBuyerSignedOff|body|boolean|false|When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)|
|» hasSellerSignedOff|body|boolean|false|When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)|
|» inventorySource|body|string|false|What exchange will provide this inventory (readonly, except on create).|
|» isRenegotiating|body|boolean|false|True if the proposal is being renegotiated (readonly).|
|» isSetupComplete|body|boolean|false|True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".|
|» labels|body|[[MarketplaceLabel](#schemamarketplacelabel)]|false|List of labels associated with the proposal. (readonly)|
|» lastUpdaterOrCommentorRole|body|string|false|The role of the last user that either updated the proposal or left a comment. (readonly)|
|» name|body|string|false|The name for the proposal (updatable)|
|» negotiationId|body|string|false|Optional negotiation id if this proposal is a preferred deal proposal.|
|» originatorRole|body|string|false|Indicates whether the buyer/seller created the proposal.(readonly)|
|» privateAuctionId|body|string|false|Optional private auction id if this proposal is a private auction proposal.|
|» proposalId|body|string|false|The unique id of the proposal. (readonly).|
|» proposalState|body|string|false|The current state of the proposal. (readonly)|
|» revisionNumber|body|string(int64)|false|The revision number for the proposal (readonly).|
|» revisionTimeMs|body|string(int64)|false|The time (ms since epoch) when the proposal was last revised (readonly).|
|» seller|body|[Seller](#schemaseller)|false|Reference to the seller on the proposal. (readonly, except on create)|
|» sellerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Optional contact information of the seller (buyer-readonly).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|updateAction|accept|
|updateAction|cancel|
|updateAction|propose|
|updateAction|proposeAndAccept|
|updateAction|unknownAction|
|updateAction|updateNonTerms|
|alt|json|

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproposalsupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

## adexchangebuyer.proposals.patch

<a id="opIdadexchangebuyer.proposals.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/proposals/string/string/accept \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
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
      "referenceId": "string",
      "referencePayload": "string"
    },
    "dbmAdvertiserIds": [
      "string"
    ],
    "hasBuyerSignedOff": true,
    "hasSellerSignedOff": true,
    "inventorySource": "string",
    "isRenegotiating": true,
    "isSetupComplete": true,
    "kind": "adexchangebuyer#proposal",
    "labels": [
      {
        "accountId": "string",
        "createTimeMs": "string",
        "deprecatedMarketplaceDealParty": {
          "buyer": {
            "accountId": "string"
          },
          "seller": {
            "accountId": "string",
            "subAccountId": "string"
          }
        },
        "label": "string"
      }
    ],
    "lastUpdaterOrCommentorRole": "string",
    "name": "string",
    "negotiationId": "string",
    "originatorRole": "string",
    "privateAuctionId": "string",
    "proposalId": "string",
    "proposalState": "string",
    "revisionNumber": "string",
    "revisionTimeMs": "string",
    "seller": {
      "accountId": "string",
      "subAccountId": "string"
    },
    "sellerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  }'
```

`PATCH /proposals/{proposalId}/{revisionNumber}/{updateAction}`

Update the given proposal. This method supports patch semantics.

> Body parameter

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproposalspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|proposalId|path|string|true|The proposal id to update.|
|revisionNumber|path|string|true|The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.|
|updateAction|path|string|true|The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|
|body|body|[Proposal](#schemaproposal)|false|none|
|» billedBuyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer that will get billed for this proposal. (readonly)|
|» buyer|body|[Buyer](#schemabuyer)|false|Reference to the buyer on the proposal. (readonly, except on create)|
|» buyerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Optional contact information of the buyer. (seller-readonly)|
|» buyerPrivateData|body|[PrivateData](#schemaprivatedata)|false|Private data for buyer. (hidden from seller).|
|» dbmAdvertiserIds|body|[string]|false|IDs of DBM advertisers permission to this proposal.|
|» hasBuyerSignedOff|body|boolean|false|When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)|
|» hasSellerSignedOff|body|boolean|false|When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)|
|» inventorySource|body|string|false|What exchange will provide this inventory (readonly, except on create).|
|» isRenegotiating|body|boolean|false|True if the proposal is being renegotiated (readonly).|
|» isSetupComplete|body|boolean|false|True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.|
|» kind|body|string|false|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".|
|» labels|body|[[MarketplaceLabel](#schemamarketplacelabel)]|false|List of labels associated with the proposal. (readonly)|
|» lastUpdaterOrCommentorRole|body|string|false|The role of the last user that either updated the proposal or left a comment. (readonly)|
|» name|body|string|false|The name for the proposal (updatable)|
|» negotiationId|body|string|false|Optional negotiation id if this proposal is a preferred deal proposal.|
|» originatorRole|body|string|false|Indicates whether the buyer/seller created the proposal.(readonly)|
|» privateAuctionId|body|string|false|Optional private auction id if this proposal is a private auction proposal.|
|» proposalId|body|string|false|The unique id of the proposal. (readonly).|
|» proposalState|body|string|false|The current state of the proposal. (readonly)|
|» revisionNumber|body|string(int64)|false|The revision number for the proposal (readonly).|
|» revisionTimeMs|body|string(int64)|false|The time (ms since epoch) when the proposal was last revised (readonly).|
|» seller|body|[Seller](#schemaseller)|false|Reference to the seller on the proposal. (readonly, except on create)|
|» sellerContacts|body|[[ContactInformation](#schemacontactinformation)]|false|Optional contact information of the seller (buyer-readonly).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|updateAction|accept|
|updateAction|cancel|
|updateAction|propose|
|updateAction|proposeAndAccept|
|updateAction|unknownAction|
|updateAction|updateNonTerms|
|alt|json|

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

<h3 id="adexchangebuyerproposalspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Proposal](#schemaproposal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

<h1 id="ad-exchange-buyer-api-pubprofiles">pubprofiles</h1>

## adexchangebuyer.pubprofiles.list

<a id="opIdadexchangebuyer.pubprofiles.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/publisher/0/profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /publisher/{accountId}/profiles`

Gets the requested publisher profile(s) by publisher accountId.

<h3 id="adexchangebuyerpubprofileslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountId|path|integer|true|The accountId of the publisher to get profiles for.|
|alt|query|string|false|Data format for the response.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|An opaque string that represents a user for quota purposes. Must not exceed 40 characters.|
|userIp|query|string|false|Deprecated. Please use quotaUser instead.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|

> Example responses

> 200 Response

```json
{
  "profiles": [
    {
      "audience": "string",
      "buyerPitchStatement": "string",
      "directContact": "string",
      "exchange": "string",
      "forecastInventory": "string",
      "googlePlusLink": "string",
      "isParent": true,
      "isPublished": true,
      "kind": "adexchangebuyer#publisherProfileApiProto",
      "logoUrl": "string",
      "mediaKitLink": "string",
      "name": "string",
      "overview": "string",
      "profileId": 0,
      "programmaticContact": "string",
      "publisherAppIds": [
        "string"
      ],
      "publisherApps": [
        {
          "appStore": "string",
          "externalAppId": "string"
        }
      ],
      "publisherDomains": [
        "string"
      ],
      "publisherProfileId": "string",
      "publisherProvidedForecast": {
        "dimensions": [
          {
            "dimensionType": "string",
            "dimensionValues": [
              {
                "id": 0,
                "name": "string",
                "percentage": 0
              }
            ]
          }
        ],
        "weeklyImpressions": "string",
        "weeklyUniques": "string"
      },
      "rateCardInfoLink": "string",
      "samplePageLink": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "state": "string",
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

<h3 id="adexchangebuyerpubprofileslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GetPublisherProfilesByAccountIdResponse](#schemagetpublisherprofilesbyaccountidresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/adexchange.buyer ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/adexchange.buyer )
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "applyPretargetingToNonGuaranteedDeals": true,
  "bidderLocation": [
    {
      "bidProtocol": "string",
      "maximumQps": 0,
      "region": "string",
      "url": "string"
    }
  ],
  "cookieMatchingNid": "string",
  "cookieMatchingUrl": "string",
  "id": 0,
  "kind": "adexchangebuyer#account",
  "maximumActiveCreatives": 0,
  "maximumTotalQps": 0,
  "numberActiveCreatives": 0
}
```

Configuration data for an Ad Exchange buyer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|applyPretargetingToNonGuaranteedDeals|boolean|false|none|When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.|
|bidderLocation|[object]|false|none|Your bidder locations that have distinct URLs.|
|cookieMatchingNid|string|false|none|The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.|
|cookieMatchingUrl|string|false|none|The base URL used in cookie match requests.|
|id|integer(int32)|false|none|Account id.|
|kind|string|false|none|Resource type.|
|maximumActiveCreatives|integer(int32)|false|none|The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.|
|maximumTotalQps|integer(int32)|false|none|The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.|
|numberActiveCreatives|integer(int32)|false|none|The number of creatives that this account inserted or bid with in the last 30 days.|

<h2 id="tocS_AccountsList">AccountsList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountslist"></a>
<a id="schema_AccountsList"></a>
<a id="tocSaccountslist"></a>
<a id="tocsaccountslist"></a>

```json
{
  "items": [
    {
      "applyPretargetingToNonGuaranteedDeals": true,
      "bidderLocation": [
        {
          "bidProtocol": "string",
          "maximumQps": 0,
          "region": "string",
          "url": "string"
        }
      ],
      "cookieMatchingNid": "string",
      "cookieMatchingUrl": "string",
      "id": 0,
      "kind": "adexchangebuyer#account",
      "maximumActiveCreatives": 0,
      "maximumTotalQps": 0,
      "numberActiveCreatives": 0
    }
  ],
  "kind": "adexchangebuyer#accountsList"
}
```

An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Account](#schemaaccount)]|false|none|A list of accounts.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_AddOrderDealsRequest">AddOrderDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddorderdealsrequest"></a>
<a id="schema_AddOrderDealsRequest"></a>
<a id="tocSaddorderdealsrequest"></a>
<a id="tocsaddorderdealsrequest"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|The list of deals to add|
|proposalRevisionNumber|string(int64)|false|none|The last known proposal revision number.|
|updateAction|string|false|none|Indicates an optional action to take on the proposal|

<h2 id="tocS_AddOrderDealsResponse">AddOrderDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddorderdealsresponse"></a>
<a id="schema_AddOrderDealsResponse"></a>
<a id="tocSaddorderdealsresponse"></a>
<a id="tocsaddorderdealsresponse"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|List of deals added (in the same proposal as passed in the request)|
|proposalRevisionNumber|string(int64)|false|none|The updated revision number for the proposal.|

<h2 id="tocS_AddOrderNotesRequest">AddOrderNotesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddordernotesrequest"></a>
<a id="schema_AddOrderNotesRequest"></a>
<a id="tocSaddordernotesrequest"></a>
<a id="tocsaddordernotesrequest"></a>

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|[[MarketplaceNote](#schemamarketplacenote)]|false|none|The list of notes to add.|

<h2 id="tocS_AddOrderNotesResponse">AddOrderNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddordernotesresponse"></a>
<a id="schema_AddOrderNotesResponse"></a>
<a id="tocSaddordernotesresponse"></a>
<a id="tocsaddordernotesresponse"></a>

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|[[MarketplaceNote](#schemamarketplacenote)]|false|none|none|

<h2 id="tocS_BillingInfo">BillingInfo</h2>
<!-- backwards compatibility -->
<a id="schemabillinginfo"></a>
<a id="schema_BillingInfo"></a>
<a id="tocSbillinginfo"></a>
<a id="tocsbillinginfo"></a>

```json
{
  "accountId": 0,
  "accountName": "string",
  "billingId": [
    "string"
  ],
  "kind": "adexchangebuyer#billingInfo"
}
```

The configuration data for an Ad Exchange billing info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int32)|false|none|Account id.|
|accountName|string|false|none|Account name.|
|billingId|[string]|false|none|A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_BillingInfoList">BillingInfoList</h2>
<!-- backwards compatibility -->
<a id="schemabillinginfolist"></a>
<a id="schema_BillingInfoList"></a>
<a id="tocSbillinginfolist"></a>
<a id="tocsbillinginfolist"></a>

```json
{
  "items": [
    {
      "accountId": 0,
      "accountName": "string",
      "billingId": [
        "string"
      ],
      "kind": "adexchangebuyer#billingInfo"
    }
  ],
  "kind": "adexchangebuyer#billingInfoList"
}
```

A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BillingInfo](#schemabillinginfo)]|false|none|A list of billing info relevant for your account.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Budget">Budget</h2>
<!-- backwards compatibility -->
<a id="schemabudget"></a>
<a id="schema_Budget"></a>
<a id="tocSbudget"></a>
<a id="tocsbudget"></a>

```json
{
  "accountId": "string",
  "billingId": "string",
  "budgetAmount": "string",
  "currencyCode": "string",
  "id": "string",
  "kind": "adexchangebuyer#budget"
}
```

The configuration data for Ad Exchange RTB - Budget API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(int64)|false|none|The id of the account. This is required for get and update requests.|
|billingId|string(int64)|false|none|The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.|
|budgetAmount|string(int64)|false|none|The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.|
|currencyCode|string|false|none|The currency code for the buyer. This cannot be altered here.|
|id|string|false|none|The unique id that describes this item.|
|kind|string|false|none|The kind of the resource, i.e. "adexchangebuyer#budget".|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|Adx account id of the buyer.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email address of the contact.|
|name|string|false|none|The name of the contact.|

<h2 id="tocS_CreateOrdersRequest">CreateOrdersRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateordersrequest"></a>
<a id="schema_CreateOrdersRequest"></a>
<a id="tocScreateordersrequest"></a>
<a id="tocscreateordersrequest"></a>

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ],
  "webPropertyCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposals|[[Proposal](#schemaproposal)]|false|none|The list of proposals to create.|
|webPropertyCode|string|false|none|Web property id of the seller creating these orders|

<h2 id="tocS_CreateOrdersResponse">CreateOrdersResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreateordersresponse"></a>
<a id="schema_CreateOrdersResponse"></a>
<a id="tocScreateordersresponse"></a>
<a id="tocscreateordersresponse"></a>

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposals|[[Proposal](#schemaproposal)]|false|none|The list of proposals successfully created.|

<h2 id="tocS_Creative">Creative</h2>
<!-- backwards compatibility -->
<a id="schemacreative"></a>
<a id="schema_Creative"></a>
<a id="tocScreative"></a>
<a id="tocscreative"></a>

```json
{
  "HTMLSnippet": "string",
  "accountId": 0,
  "adChoicesDestinationUrl": "string",
  "adTechnologyProviders": {
    "detectedProviderIds": [
      "string"
    ],
    "hasUnidentifiedProvider": true
  },
  "advertiserId": [
    "string"
  ],
  "advertiserName": "string",
  "agencyId": "string",
  "apiUploadTimestamp": "1970-01-01T00:00:00Z",
  "attribute": [
    0
  ],
  "buyerCreativeId": "string",
  "clickThroughUrl": [
    "string"
  ],
  "corrections": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "details": [
        "string"
      ],
      "reason": "string"
    }
  ],
  "creativeStatusIdentityType": "string",
  "dealsStatus": "string",
  "detectedDomains": [
    "string"
  ],
  "filteringReasons": {
    "date": "string",
    "reasons": [
      {
        "filteringCount": "string",
        "filteringStatus": 0
      }
    ]
  },
  "height": 0,
  "impressionTrackingUrl": [
    "string"
  ],
  "kind": "adexchangebuyer#creative",
  "languages": [
    "string"
  ],
  "nativeAd": {
    "advertiser": "string",
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
    "impressionTrackingUrl": [
      "string"
    ],
    "logo": {
      "height": 0,
      "url": "string",
      "width": 0
    },
    "price": "string",
    "starRating": 0,
    "videoURL": "string"
  },
  "openAuctionStatus": "string",
  "productCategories": [
    0
  ],
  "restrictedCategories": [
    0
  ],
  "sensitiveCategories": [
    0
  ],
  "servingRestrictions": [
    {
      "contexts": [
        {
          "auctionType": [
            "string"
          ],
          "contextType": "string",
          "geoCriteriaId": [
            0
          ],
          "platform": [
            "string"
          ]
        }
      ],
      "disapprovalReasons": [
        {
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "reason": "string"
    }
  ],
  "vendorType": [
    0
  ],
  "version": 0,
  "videoURL": "string",
  "videoVastXML": "string",
  "width": 0
}
```

A creative and its classification data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|HTMLSnippet|string|false|none|The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.|
|accountId|integer(int32)|false|none|Account id.|
|adChoicesDestinationUrl|string|false|none|The link to the Ad Preferences page. This is only supported for native ads.|
|adTechnologyProviders|object|false|none|none|
|advertiserId|[string(int64)]|false|none|Detected advertiser id, if any. Read-only. This field should not be set in requests.|
|advertiserName|string|false|none|The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file.|
|agencyId|string(int64)|false|none|The agency id for this creative.|
|apiUploadTimestamp|string(date-time)|false|none|The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).|
|attribute|[integer(int32)]|false|none|List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.|
|buyerCreativeId|string|false|none|A buyer-specific id identifying the creative in this ad.|
|clickThroughUrl|[string]|false|none|The set of destination urls for the snippet.|
|corrections|[object]|false|none|Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.|
|creativeStatusIdentityType|string|false|none|Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.|
|dealsStatus|string|false|none|Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.|
|detectedDomains|[string]|false|none|Detected domains for this creative. Read-only. This field should not be set in requests.|
|filteringReasons|object|false|none|The filtering reasons for the creative. Read-only. This field should not be set in requests.|
|height|integer(int32)|false|none|Ad height.|
|impressionTrackingUrl|[string]|false|none|The set of urls to be called to record an impression.|
|kind|string|false|none|Resource type.|
|languages|[string]|false|none|Detected languages for this creative. Read-only. This field should not be set in requests.|
|nativeAd|object|false|none|If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)|
|openAuctionStatus|string|false|none|Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.|
|productCategories|[integer(int32)]|false|none|Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.|
|restrictedCategories|[integer(int32)]|false|none|All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.|
|sensitiveCategories|[integer(int32)]|false|none|Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.|
|servingRestrictions|[object]|false|none|The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.|
|vendorType|[integer(int32)]|false|none|List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.|
|version|integer(int32)|false|none|The version for this creative. Read-only. This field should not be set in requests.|
|videoURL|string|false|none|The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.|
|videoVastXML|string|false|none|The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.|
|width|integer(int32)|false|none|Ad width.|

<h2 id="tocS_CreativeDealIds">CreativeDealIds</h2>
<!-- backwards compatibility -->
<a id="schemacreativedealids"></a>
<a id="schema_CreativeDealIds"></a>
<a id="tocScreativedealids"></a>
<a id="tocscreativedealids"></a>

```json
{
  "dealStatuses": [
    {
      "arcStatus": "string",
      "dealId": "string",
      "webPropertyId": 0
    }
  ],
  "kind": "adexchangebuyer#creativeDealIds"
}
```

The external deal ids associated with a creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealStatuses|[object]|false|none|A list of external deal ids and ARC approval status.|
|kind|string|false|none|Resource type.|

<h2 id="tocS_CreativesList">CreativesList</h2>
<!-- backwards compatibility -->
<a id="schemacreativeslist"></a>
<a id="schema_CreativesList"></a>
<a id="tocScreativeslist"></a>
<a id="tocscreativeslist"></a>

```json
{
  "items": [
    {
      "HTMLSnippet": "string",
      "accountId": 0,
      "adChoicesDestinationUrl": "string",
      "adTechnologyProviders": {
        "detectedProviderIds": [
          "string"
        ],
        "hasUnidentifiedProvider": true
      },
      "advertiserId": [
        "string"
      ],
      "advertiserName": "string",
      "agencyId": "string",
      "apiUploadTimestamp": "1970-01-01T00:00:00Z",
      "attribute": [
        0
      ],
      "buyerCreativeId": "string",
      "clickThroughUrl": [
        "string"
      ],
      "corrections": [
        {
          "contexts": [
            {
              "auctionType": [
                "string"
              ],
              "contextType": "string",
              "geoCriteriaId": [
                0
              ],
              "platform": [
                "string"
              ]
            }
          ],
          "details": [
            "string"
          ],
          "reason": "string"
        }
      ],
      "creativeStatusIdentityType": "string",
      "dealsStatus": "string",
      "detectedDomains": [
        "string"
      ],
      "filteringReasons": {
        "date": "string",
        "reasons": [
          {
            "filteringCount": "string",
            "filteringStatus": 0
          }
        ]
      },
      "height": 0,
      "impressionTrackingUrl": [
        "string"
      ],
      "kind": "adexchangebuyer#creative",
      "languages": [
        "string"
      ],
      "nativeAd": {
        "advertiser": "string",
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
        "impressionTrackingUrl": [
          "string"
        ],
        "logo": {
          "height": 0,
          "url": "string",
          "width": 0
        },
        "price": "string",
        "starRating": 0,
        "videoURL": "string"
      },
      "openAuctionStatus": "string",
      "productCategories": [
        0
      ],
      "restrictedCategories": [
        0
      ],
      "sensitiveCategories": [
        0
      ],
      "servingRestrictions": [
        {
          "contexts": [
            {
              "auctionType": [
                "string"
              ],
              "contextType": "string",
              "geoCriteriaId": [
                0
              ],
              "platform": [
                "string"
              ]
            }
          ],
          "disapprovalReasons": [
            {
              "details": [
                "string"
              ],
              "reason": "string"
            }
          ],
          "reason": "string"
        }
      ],
      "vendorType": [
        0
      ],
      "version": 0,
      "videoURL": "string",
      "videoVastXML": "string",
      "width": 0
    }
  ],
  "kind": "adexchangebuyer#creativesList",
  "nextPageToken": "string"
}
```

The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[Creative](#schemacreative)]|false|none|A list of creatives.|
|kind|string|false|none|Resource type.|
|nextPageToken|string|false|none|Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.|

<h2 id="tocS_DealServingMetadata">DealServingMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadealservingmetadata"></a>
<a id="schema_DealServingMetadata"></a>
<a id="tocSdealservingmetadata"></a>
<a id="tocsdealservingmetadata"></a>

```json
{
  "alcoholAdsAllowed": true,
  "dealPauseStatus": {
    "buyerPauseReason": "string",
    "firstPausedBy": "string",
    "hasBuyerPaused": true,
    "hasSellerPaused": true,
    "sellerPauseReason": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alcoholAdsAllowed|boolean|false|none|True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals|
|dealPauseStatus|[DealServingMetadataDealPauseStatus](#schemadealservingmetadatadealpausestatus)|false|none|Tracks which parties (if any) have paused a deal. (readonly, except via PauseResumeOrderDeals action)|

<h2 id="tocS_DealServingMetadataDealPauseStatus">DealServingMetadataDealPauseStatus</h2>
<!-- backwards compatibility -->
<a id="schemadealservingmetadatadealpausestatus"></a>
<a id="schema_DealServingMetadataDealPauseStatus"></a>
<a id="tocSdealservingmetadatadealpausestatus"></a>
<a id="tocsdealservingmetadatadealpausestatus"></a>

```json
{
  "buyerPauseReason": "string",
  "firstPausedBy": "string",
  "hasBuyerPaused": true,
  "hasSellerPaused": true,
  "sellerPauseReason": "string"
}
```

Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerPauseReason|string|false|none|none|
|firstPausedBy|string|false|none|If the deal is paused, records which party paused the deal first.|
|hasBuyerPaused|boolean|false|none|none|
|hasSellerPaused|boolean|false|none|none|
|sellerPauseReason|string|false|none|none|

<h2 id="tocS_DealTerms">DealTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealterms"></a>
<a id="schema_DealTerms"></a>
<a id="tocSdealterms"></a>
<a id="tocsdealterms"></a>

```json
{
  "brandingType": "string",
  "crossListedExternalDealIdType": "string",
  "description": "string",
  "estimatedGrossSpend": {
    "amountMicros": 0,
    "currencyCode": "string",
    "expectedCpmMicros": 0,
    "pricingType": "string"
  },
  "estimatedImpressionsPerDay": "string",
  "guaranteedFixedPriceTerms": {
    "billingInfo": {
      "currencyConversionTimeMs": "string",
      "dfpLineItemId": "string",
      "originalContractedQuantity": "string",
      "price": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    },
    "fixedPrices": [
      {
        "auctionTier": "string",
        "billedBuyer": {
          "accountId": "string"
        },
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      }
    ],
    "guaranteedImpressions": "string",
    "guaranteedLooks": "string",
    "minimumDailyLooks": "string"
  },
  "nonGuaranteedAuctionTerms": {
    "autoOptimizePrivateAuction": true,
    "reservePricePerBuyers": [
      {
        "auctionTier": "string",
        "billedBuyer": {
          "accountId": "string"
        },
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      }
    ]
  },
  "nonGuaranteedFixedPriceTerms": {
    "fixedPrices": [
      {
        "auctionTier": "string",
        "billedBuyer": {
          "accountId": "string"
        },
        "buyer": {
          "accountId": "string"
        },
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      }
    ]
  },
  "rubiconNonGuaranteedTerms": {
    "priorityPrice": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    },
    "standardPrice": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    }
  },
  "sellerTimeZone": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brandingType|string|false|none|Visibility of the URL in bid requests.|
|crossListedExternalDealIdType|string|false|none|Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.|
|description|string|false|none|Description for the proposed terms of the deal.|
|estimatedGrossSpend|[Price](#schemaprice)|false|none|Non-binding estimate of the estimated gross spend for this deal Can be set by buyer or seller.|
|estimatedImpressionsPerDay|string(int64)|false|none|Non-binding estimate of the impressions served per day Can be set by buyer or seller.|
|guaranteedFixedPriceTerms|[DealTermsGuaranteedFixedPriceTerms](#schemadealtermsguaranteedfixedpriceterms)|false|none|The terms for guaranteed fixed price deals.|
|nonGuaranteedAuctionTerms|[DealTermsNonGuaranteedAuctionTerms](#schemadealtermsnonguaranteedauctionterms)|false|none|The terms for non-guaranteed auction deals.|
|nonGuaranteedFixedPriceTerms|[DealTermsNonGuaranteedFixedPriceTerms](#schemadealtermsnonguaranteedfixedpriceterms)|false|none|The terms for non-guaranteed fixed price deals.|
|rubiconNonGuaranteedTerms|[DealTermsRubiconNonGuaranteedTerms](#schemadealtermsrubiconnonguaranteedterms)|false|none|The terms for rubicon non-guaranteed deals.|
|sellerTimeZone|string|false|none|For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)|

<h2 id="tocS_DealTermsGuaranteedFixedPriceTerms">DealTermsGuaranteedFixedPriceTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealtermsguaranteedfixedpriceterms"></a>
<a id="schema_DealTermsGuaranteedFixedPriceTerms"></a>
<a id="tocSdealtermsguaranteedfixedpriceterms"></a>
<a id="tocsdealtermsguaranteedfixedpriceterms"></a>

```json
{
  "billingInfo": {
    "currencyConversionTimeMs": "string",
    "dfpLineItemId": "string",
    "originalContractedQuantity": "string",
    "price": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    }
  },
  "fixedPrices": [
    {
      "auctionTier": "string",
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    }
  ],
  "guaranteedImpressions": "string",
  "guaranteedLooks": "string",
  "minimumDailyLooks": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingInfo|[DealTermsGuaranteedFixedPriceTermsBillingInfo](#schemadealtermsguaranteedfixedpricetermsbillinginfo)|false|none|External billing info for this Deal. This field is relevant when external billing info such as price has a different currency code than DFP/AdX.|
|fixedPrices|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Fixed price for the specified buyer.|
|guaranteedImpressions|string(int64)|false|none|Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.|
|guaranteedLooks|string(int64)|false|none|Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.|
|minimumDailyLooks|string(int64)|false|none|Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.|

<h2 id="tocS_DealTermsGuaranteedFixedPriceTermsBillingInfo">DealTermsGuaranteedFixedPriceTermsBillingInfo</h2>
<!-- backwards compatibility -->
<a id="schemadealtermsguaranteedfixedpricetermsbillinginfo"></a>
<a id="schema_DealTermsGuaranteedFixedPriceTermsBillingInfo"></a>
<a id="tocSdealtermsguaranteedfixedpricetermsbillinginfo"></a>
<a id="tocsdealtermsguaranteedfixedpricetermsbillinginfo"></a>

```json
{
  "currencyConversionTimeMs": "string",
  "dfpLineItemId": "string",
  "originalContractedQuantity": "string",
  "price": {
    "amountMicros": 0,
    "currencyCode": "string",
    "expectedCpmMicros": 0,
    "pricingType": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyConversionTimeMs|string(int64)|false|none|The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy.|
|dfpLineItemId|string(int64)|false|none|The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.|
|originalContractedQuantity|string(int64)|false|none|The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.|
|price|[Price](#schemaprice)|false|none|The original reservation price for the deal, if the currency code is different from the one used in negotiation.|

<h2 id="tocS_DealTermsNonGuaranteedAuctionTerms">DealTermsNonGuaranteedAuctionTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealtermsnonguaranteedauctionterms"></a>
<a id="schema_DealTermsNonGuaranteedAuctionTerms"></a>
<a id="tocSdealtermsnonguaranteedauctionterms"></a>
<a id="tocsdealtermsnonguaranteedauctionterms"></a>

```json
{
  "autoOptimizePrivateAuction": true,
  "reservePricePerBuyers": [
    {
      "auctionTier": "string",
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoOptimizePrivateAuction|boolean|false|none|True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).|
|reservePricePerBuyers|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Reserve price for the specified buyer.|

<h2 id="tocS_DealTermsNonGuaranteedFixedPriceTerms">DealTermsNonGuaranteedFixedPriceTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealtermsnonguaranteedfixedpriceterms"></a>
<a id="schema_DealTermsNonGuaranteedFixedPriceTerms"></a>
<a id="tocSdealtermsnonguaranteedfixedpriceterms"></a>
<a id="tocsdealtermsnonguaranteedfixedpriceterms"></a>

```json
{
  "fixedPrices": [
    {
      "auctionTier": "string",
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "price": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixedPrices|[[PricePerBuyer](#schemapriceperbuyer)]|false|none|Fixed price for the specified buyer.|

<h2 id="tocS_DealTermsRubiconNonGuaranteedTerms">DealTermsRubiconNonGuaranteedTerms</h2>
<!-- backwards compatibility -->
<a id="schemadealtermsrubiconnonguaranteedterms"></a>
<a id="schema_DealTermsRubiconNonGuaranteedTerms"></a>
<a id="tocSdealtermsrubiconnonguaranteedterms"></a>
<a id="tocsdealtermsrubiconnonguaranteedterms"></a>

```json
{
  "priorityPrice": {
    "amountMicros": 0,
    "currencyCode": "string",
    "expectedCpmMicros": 0,
    "pricingType": "string"
  },
  "standardPrice": {
    "amountMicros": 0,
    "currencyCode": "string",
    "expectedCpmMicros": 0,
    "pricingType": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|priorityPrice|[Price](#schemaprice)|false|none|Optional price for Rubicon priority access in the auction.|
|standardPrice|[Price](#schemaprice)|false|none|Optional price for Rubicon standard access in the auction.|

<h2 id="tocS_DeleteOrderDealsRequest">DeleteOrderDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorderdealsrequest"></a>
<a id="schema_DeleteOrderDealsRequest"></a>
<a id="tocSdeleteorderdealsrequest"></a>
<a id="tocsdeleteorderdealsrequest"></a>

```json
{
  "dealIds": [
    "string"
  ],
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealIds|[string]|false|none|List of deals to delete for a given proposal|
|proposalRevisionNumber|string(int64)|false|none|The last known proposal revision number.|
|updateAction|string|false|none|Indicates an optional action to take on the proposal|

<h2 id="tocS_DeleteOrderDealsResponse">DeleteOrderDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteorderdealsresponse"></a>
<a id="schema_DeleteOrderDealsResponse"></a>
<a id="tocSdeleteorderdealsresponse"></a>
<a id="tocsdeleteorderdealsresponse"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposalRevisionNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|List of deals deleted (in the same proposal as passed in the request)|
|proposalRevisionNumber|string(int64)|false|none|The updated revision number for the proposal.|

<h2 id="tocS_DeliveryControl">DeliveryControl</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontrol"></a>
<a id="schema_DeliveryControl"></a>
<a id="tocSdeliverycontrol"></a>
<a id="tocsdeliverycontrol"></a>

```json
{
  "creativeBlockingLevel": "string",
  "deliveryRateType": "string",
  "frequencyCaps": [
    {
      "maxImpressions": 0,
      "numTimeUnits": 0,
      "timeUnitType": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeBlockingLevel|string|false|none|none|
|deliveryRateType|string|false|none|none|
|frequencyCaps|[[DeliveryControlFrequencyCap](#schemadeliverycontrolfrequencycap)]|false|none|none|

<h2 id="tocS_DeliveryControlFrequencyCap">DeliveryControlFrequencyCap</h2>
<!-- backwards compatibility -->
<a id="schemadeliverycontrolfrequencycap"></a>
<a id="schema_DeliveryControlFrequencyCap"></a>
<a id="tocSdeliverycontrolfrequencycap"></a>
<a id="tocsdeliverycontrolfrequencycap"></a>

```json
{
  "maxImpressions": 0,
  "numTimeUnits": 0,
  "timeUnitType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxImpressions|integer(int32)|false|none|none|
|numTimeUnits|integer(int32)|false|none|none|
|timeUnitType|string|false|none|none|

<h2 id="tocS_Dimension">Dimension</h2>
<!-- backwards compatibility -->
<a id="schemadimension"></a>
<a id="schema_Dimension"></a>
<a id="tocSdimension"></a>
<a id="tocsdimension"></a>

```json
{
  "dimensionType": "string",
  "dimensionValues": [
    {
      "id": 0,
      "name": "string",
      "percentage": 0
    }
  ]
}
```

This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensionType|string|false|none|none|
|dimensionValues|[[DimensionDimensionValue](#schemadimensiondimensionvalue)]|false|none|none|

<h2 id="tocS_DimensionDimensionValue">DimensionDimensionValue</h2>
<!-- backwards compatibility -->
<a id="schemadimensiondimensionvalue"></a>
<a id="schema_DimensionDimensionValue"></a>
<a id="tocSdimensiondimensionvalue"></a>
<a id="tocsdimensiondimensionvalue"></a>

```json
{
  "id": 0,
  "name": "string",
  "percentage": 0
}
```

Value of the dimension.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Id of the dimension.|
|name|string|false|none|Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.|
|percentage|integer(int32)|false|none|Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.|

<h2 id="tocS_EditAllOrderDealsRequest">EditAllOrderDealsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaeditallorderdealsrequest"></a>
<a id="schema_EditAllOrderDealsRequest"></a>
<a id="tocSeditallorderdealsrequest"></a>
<a id="tocseditallorderdealsrequest"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "proposal": {
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
      "referenceId": "string",
      "referencePayload": "string"
    },
    "dbmAdvertiserIds": [
      "string"
    ],
    "hasBuyerSignedOff": true,
    "hasSellerSignedOff": true,
    "inventorySource": "string",
    "isRenegotiating": true,
    "isSetupComplete": true,
    "kind": "adexchangebuyer#proposal",
    "labels": [
      {
        "accountId": "string",
        "createTimeMs": "string",
        "deprecatedMarketplaceDealParty": {
          "buyer": {
            "accountId": "string"
          },
          "seller": {
            "accountId": "string",
            "subAccountId": "string"
          }
        },
        "label": "string"
      }
    ],
    "lastUpdaterOrCommentorRole": "string",
    "name": "string",
    "negotiationId": "string",
    "originatorRole": "string",
    "privateAuctionId": "string",
    "proposalId": "string",
    "proposalState": "string",
    "revisionNumber": "string",
    "revisionTimeMs": "string",
    "seller": {
      "accountId": "string",
      "subAccountId": "string"
    },
    "sellerContacts": [
      {
        "email": "string",
        "name": "string"
      }
    ]
  },
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.|
|proposal|[Proposal](#schemaproposal)|false|none|If specified, also updates the proposal in the batch transaction. This is useful when the proposal and the deals need to be updated in one transaction.|
|proposalRevisionNumber|string(int64)|false|none|The last known revision number for the proposal.|
|updateAction|string|false|none|Indicates an optional action to take on the proposal|

<h2 id="tocS_EditAllOrderDealsResponse">EditAllOrderDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeditallorderdealsresponse"></a>
<a id="schema_EditAllOrderDealsResponse"></a>
<a id="tocSeditallorderdealsresponse"></a>
<a id="tocseditallorderdealsresponse"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ],
  "orderRevisionNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|List of all deals in the proposal after edit.|
|orderRevisionNumber|string(int64)|false|none|The latest revision number after the update has been applied.|

<h2 id="tocS_GetOffersResponse">GetOffersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetoffersresponse"></a>
<a id="schema_GetOffersResponse"></a>
<a id="tocSgetoffersresponse"></a>
<a id="tocsgetoffersresponse"></a>

```json
{
  "products": [
    {
      "billedBuyer": {
        "accountId": "string"
      },
      "buyer": {
        "accountId": "string"
      },
      "creationTimeMs": "string",
      "creatorContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "creatorRole": "string",
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "hasCreatorSignedOff": true,
      "inventorySource": "string",
      "kind": "adexchangebuyer#product",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdateTimeMs": "string",
      "legacyOfferId": "string",
      "marketplacePublisherProfileId": "string",
      "name": "string",
      "privateAuctionId": "string",
      "productId": "string",
      "publisherProfileId": "string",
      "publisherProvidedForecast": {
        "dimensions": [
          {
            "dimensionType": "string",
            "dimensionValues": [
              {
                "id": 0,
                "name": "string",
                "percentage": 0
              }
            ]
          }
        ],
        "weeklyImpressions": "string",
        "weeklyUniques": "string"
      },
      "revisionNumber": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "state": "string",
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[Product](#schemaproduct)]|false|none|The returned list of products.|

<h2 id="tocS_GetOrderDealsResponse">GetOrderDealsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetorderdealsresponse"></a>
<a id="schema_GetOrderDealsResponse"></a>
<a id="tocSgetorderdealsresponse"></a>
<a id="tocsgetorderdealsresponse"></a>

```json
{
  "deals": [
    {
      "buyerPrivateData": {
        "referenceId": "string",
        "referencePayload": "string"
      },
      "creationTimeMs": "string",
      "creativePreApprovalPolicy": "string",
      "creativeSafeFrameCompatibility": "string",
      "dealId": "string",
      "dealServingMetadata": {
        "alcoholAdsAllowed": true,
        "dealPauseStatus": {
          "buyerPauseReason": "string",
          "firstPausedBy": "string",
          "hasBuyerPaused": true,
          "hasSellerPaused": true,
          "sellerPauseReason": "string"
        }
      },
      "deliveryControl": {
        "creativeBlockingLevel": "string",
        "deliveryRateType": "string",
        "frequencyCaps": [
          {
            "maxImpressions": 0,
            "numTimeUnits": 0,
            "timeUnitType": "string"
          }
        ]
      },
      "externalDealId": "string",
      "flightEndTimeMs": "string",
      "flightStartTimeMs": "string",
      "inventoryDescription": "string",
      "isRfpTemplate": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#marketplaceDeal",
      "lastUpdateTimeMs": "string",
      "makegoodRequestedReason": "string",
      "name": "string",
      "productId": "string",
      "productRevisionNumber": "string",
      "programmaticCreativeSource": "string",
      "proposalId": "string",
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ],
      "sharedTargetings": [
        {
          "exclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "inclusions": [
            {
              "creativeSizeValue": {
                "allowedFormats": [
                  "string"
                ],
                "companionSizes": [
                  {
                    "height": 0,
                    "width": 0
                  }
                ],
                "creativeSizeType": "string",
                "nativeTemplate": "string",
                "size": {
                  "height": 0,
                  "width": 0
                },
                "skippableAdType": "string"
              },
              "dayPartTargetingValue": {
                "dayParts": [
                  {
                    "dayOfWeek": "string",
                    "endHour": 0,
                    "endMinute": 0,
                    "startHour": 0,
                    "startMinute": 0
                  }
                ],
                "timeZoneType": "string"
              },
              "demogAgeCriteriaValue": {
                "demogAgeCriteriaIds": [
                  "string"
                ]
              },
              "demogGenderCriteriaValue": {
                "demogGenderCriteriaIds": [
                  "string"
                ]
              },
              "longValue": "string",
              "requestPlatformTargetingValue": {
                "requestPlatforms": [
                  "string"
                ]
              },
              "stringValue": "string"
            }
          ],
          "key": "string"
        }
      ],
      "syndicationProduct": "string",
      "terms": {
        "brandingType": "string",
        "crossListedExternalDealIdType": "string",
        "description": "string",
        "estimatedGrossSpend": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        },
        "estimatedImpressionsPerDay": "string",
        "guaranteedFixedPriceTerms": {
          "billingInfo": {
            "currencyConversionTimeMs": "string",
            "dfpLineItemId": "string",
            "originalContractedQuantity": "string",
            "price": {
              "amountMicros": 0,
              "currencyCode": "string",
              "expectedCpmMicros": 0,
              "pricingType": "string"
            }
          },
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ],
          "guaranteedImpressions": "string",
          "guaranteedLooks": "string",
          "minimumDailyLooks": "string"
        },
        "nonGuaranteedAuctionTerms": {
          "autoOptimizePrivateAuction": true,
          "reservePricePerBuyers": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "nonGuaranteedFixedPriceTerms": {
          "fixedPrices": [
            {
              "auctionTier": "string",
              "billedBuyer": {
                "accountId": "string"
              },
              "buyer": {
                "accountId": "string"
              },
              "price": {
                "amountMicros": 0,
                "currencyCode": "string",
                "expectedCpmMicros": 0,
                "pricingType": "string"
              }
            }
          ]
        },
        "rubiconNonGuaranteedTerms": {
          "priorityPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          },
          "standardPrice": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        },
        "sellerTimeZone": "string"
      },
      "webPropertyCode": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deals|[[MarketplaceDeal](#schemamarketplacedeal)]|false|none|List of deals for the proposal|

<h2 id="tocS_GetOrderNotesResponse">GetOrderNotesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetordernotesresponse"></a>
<a id="schema_GetOrderNotesResponse"></a>
<a id="tocSgetordernotesresponse"></a>
<a id="tocsgetordernotesresponse"></a>

```json
{
  "notes": [
    {
      "creatorRole": "string",
      "dealId": "string",
      "kind": "adexchangebuyer#marketplaceNote",
      "note": "string",
      "noteId": "string",
      "proposalId": "string",
      "proposalRevisionNumber": "string",
      "timestampMs": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|[[MarketplaceNote](#schemamarketplacenote)]|false|none|The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.|

<h2 id="tocS_GetOrdersResponse">GetOrdersResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetordersresponse"></a>
<a id="schema_GetOrdersResponse"></a>
<a id="tocSgetordersresponse"></a>
<a id="tocsgetordersresponse"></a>

```json
{
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
        "referenceId": "string",
        "referencePayload": "string"
      },
      "dbmAdvertiserIds": [
        "string"
      ],
      "hasBuyerSignedOff": true,
      "hasSellerSignedOff": true,
      "inventorySource": "string",
      "isRenegotiating": true,
      "isSetupComplete": true,
      "kind": "adexchangebuyer#proposal",
      "labels": [
        {
          "accountId": "string",
          "createTimeMs": "string",
          "deprecatedMarketplaceDealParty": {
            "buyer": {
              "accountId": "string"
            },
            "seller": {
              "accountId": "string",
              "subAccountId": "string"
            }
          },
          "label": "string"
        }
      ],
      "lastUpdaterOrCommentorRole": "string",
      "name": "string",
      "negotiationId": "string",
      "originatorRole": "string",
      "privateAuctionId": "string",
      "proposalId": "string",
      "proposalState": "string",
      "revisionNumber": "string",
      "revisionTimeMs": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "sellerContacts": [
        {
          "email": "string",
          "name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|proposals|[[Proposal](#schemaproposal)]|false|none|The list of matching proposals.|

<h2 id="tocS_GetPublisherProfilesByAccountIdResponse">GetPublisherProfilesByAccountIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpublisherprofilesbyaccountidresponse"></a>
<a id="schema_GetPublisherProfilesByAccountIdResponse"></a>
<a id="tocSgetpublisherprofilesbyaccountidresponse"></a>
<a id="tocsgetpublisherprofilesbyaccountidresponse"></a>

```json
{
  "profiles": [
    {
      "audience": "string",
      "buyerPitchStatement": "string",
      "directContact": "string",
      "exchange": "string",
      "forecastInventory": "string",
      "googlePlusLink": "string",
      "isParent": true,
      "isPublished": true,
      "kind": "adexchangebuyer#publisherProfileApiProto",
      "logoUrl": "string",
      "mediaKitLink": "string",
      "name": "string",
      "overview": "string",
      "profileId": 0,
      "programmaticContact": "string",
      "publisherAppIds": [
        "string"
      ],
      "publisherApps": [
        {
          "appStore": "string",
          "externalAppId": "string"
        }
      ],
      "publisherDomains": [
        "string"
      ],
      "publisherProfileId": "string",
      "publisherProvidedForecast": {
        "dimensions": [
          {
            "dimensionType": "string",
            "dimensionValues": [
              {
                "id": 0,
                "name": "string",
                "percentage": 0
              }
            ]
          }
        ],
        "weeklyImpressions": "string",
        "weeklyUniques": "string"
      },
      "rateCardInfoLink": "string",
      "samplePageLink": "string",
      "seller": {
        "accountId": "string",
        "subAccountId": "string"
      },
      "state": "string",
      "topHeadlines": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profiles|[[PublisherProfileApiProto](#schemapublisherprofileapiproto)]|false|none|Profiles for the requested publisher|

<h2 id="tocS_MarketplaceDeal">MarketplaceDeal</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacedeal"></a>
<a id="schema_MarketplaceDeal"></a>
<a id="tocSmarketplacedeal"></a>
<a id="tocsmarketplacedeal"></a>

```json
{
  "buyerPrivateData": {
    "referenceId": "string",
    "referencePayload": "string"
  },
  "creationTimeMs": "string",
  "creativePreApprovalPolicy": "string",
  "creativeSafeFrameCompatibility": "string",
  "dealId": "string",
  "dealServingMetadata": {
    "alcoholAdsAllowed": true,
    "dealPauseStatus": {
      "buyerPauseReason": "string",
      "firstPausedBy": "string",
      "hasBuyerPaused": true,
      "hasSellerPaused": true,
      "sellerPauseReason": "string"
    }
  },
  "deliveryControl": {
    "creativeBlockingLevel": "string",
    "deliveryRateType": "string",
    "frequencyCaps": [
      {
        "maxImpressions": 0,
        "numTimeUnits": 0,
        "timeUnitType": "string"
      }
    ]
  },
  "externalDealId": "string",
  "flightEndTimeMs": "string",
  "flightStartTimeMs": "string",
  "inventoryDescription": "string",
  "isRfpTemplate": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#marketplaceDeal",
  "lastUpdateTimeMs": "string",
  "makegoodRequestedReason": "string",
  "name": "string",
  "productId": "string",
  "productRevisionNumber": "string",
  "programmaticCreativeSource": "string",
  "proposalId": "string",
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "sharedTargetings": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "syndicationProduct": "string",
  "terms": {
    "brandingType": "string",
    "crossListedExternalDealIdType": "string",
    "description": "string",
    "estimatedGrossSpend": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "billingInfo": {
        "currencyConversionTimeMs": "string",
        "dfpLineItemId": "string",
        "originalContractedQuantity": "string",
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      },
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "minimumDailyLooks": "string"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricePerBuyers": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "rubiconNonGuaranteedTerms": {
      "priorityPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      },
      "standardPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    },
    "sellerTimeZone": "string"
  },
  "webPropertyCode": "string"
}
```

A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyerPrivateData|[PrivateData](#schemaprivatedata)|false|none|Buyer private data (hidden from seller).|
|creationTimeMs|string(int64)|false|none|The time (ms since epoch) of the deal creation. (readonly)|
|creativePreApprovalPolicy|string|false|none|Specifies the creative pre-approval policy (buyer-readonly)|
|creativeSafeFrameCompatibility|string|false|none|Specifies whether the creative is safeFrame compatible (buyer-readonly)|
|dealId|string|false|none|A unique deal-id for the deal (readonly).|
|dealServingMetadata|[DealServingMetadata](#schemadealservingmetadata)|false|none|Metadata about the serving status of this deal (readonly, writes via custom actions)|
|deliveryControl|[DeliveryControl](#schemadeliverycontrol)|false|none|The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.|
|externalDealId|string|false|none|The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)|
|flightEndTimeMs|string(int64)|false|none|Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)|
|flightStartTimeMs|string(int64)|false|none|Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)|
|inventoryDescription|string|false|none|Description for the deal terms. (buyer-readonly)|
|isRfpTemplate|boolean|false|none|Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.|
|isSetupComplete|boolean|false|none|True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal".|
|lastUpdateTimeMs|string(int64)|false|none|The time (ms since epoch) when the deal was last updated. (readonly)|
|makegoodRequestedReason|string|false|none|none|
|name|string|false|none|The name of the deal. (updatable)|
|productId|string|false|none|The product-id from which this deal was created. (readonly, except on create)|
|productRevisionNumber|string(int64)|false|none|The revision number of the product that the deal was created from (readonly, except on create)|
|programmaticCreativeSource|string|false|none|Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)|
|proposalId|string|false|none|none|
|sellerContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Optional Seller contact information for the deal (buyer-readonly)|
|sharedTargetings|[[SharedTargeting](#schemasharedtargeting)]|false|none|The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable)|
|syndicationProduct|string|false|none|The syndication product associated with the deal. (readonly, except on create)|
|terms|[DealTerms](#schemadealterms)|false|none|The negotiable terms of the deal. (updatable)|
|webPropertyCode|string|false|none|none|

<h2 id="tocS_MarketplaceDealParty">MarketplaceDealParty</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacedealparty"></a>
<a id="schema_MarketplaceDealParty"></a>
<a id="tocSmarketplacedealparty"></a>
<a id="tocsmarketplacedealparty"></a>

```json
{
  "buyer": {
    "accountId": "string"
  },
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer|[Buyer](#schemabuyer)|false|none|The buyer/seller associated with the deal. One of buyer/seller is specified for a deal-party.|
|seller|[Seller](#schemaseller)|false|none|The buyer/seller associated with the deal. One of buyer/seller is specified for a deal party.|

<h2 id="tocS_MarketplaceLabel">MarketplaceLabel</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacelabel"></a>
<a id="schema_MarketplaceLabel"></a>
<a id="tocSmarketplacelabel"></a>
<a id="tocsmarketplacelabel"></a>

```json
{
  "accountId": "string",
  "createTimeMs": "string",
  "deprecatedMarketplaceDealParty": {
    "buyer": {
      "accountId": "string"
    },
    "seller": {
      "accountId": "string",
      "subAccountId": "string"
    }
  },
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The accountId of the party that created the label.|
|createTimeMs|string(int64)|false|none|The creation time (in ms since epoch) for the label.|
|deprecatedMarketplaceDealParty|[MarketplaceDealParty](#schemamarketplacedealparty)|false|none|Information about the party that created the label.|
|label|string|false|none|The label to use.|

<h2 id="tocS_MarketplaceNote">MarketplaceNote</h2>
<!-- backwards compatibility -->
<a id="schemamarketplacenote"></a>
<a id="schema_MarketplaceNote"></a>
<a id="tocSmarketplacenote"></a>
<a id="tocsmarketplacenote"></a>

```json
{
  "creatorRole": "string",
  "dealId": "string",
  "kind": "adexchangebuyer#marketplaceNote",
  "note": "string",
  "noteId": "string",
  "proposalId": "string",
  "proposalRevisionNumber": "string",
  "timestampMs": "string"
}
```

A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creatorRole|string|false|none|The role of the person (buyer/seller) creating the note. (readonly)|
|dealId|string|false|none|Notes can optionally be associated with a deal. (readonly, except on create)|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote".|
|note|string|false|none|The actual note to attach. (readonly, except on create)|
|noteId|string|false|none|The unique id for the note. (readonly)|
|proposalId|string|false|none|The proposalId that a note is attached to. (readonly)|
|proposalRevisionNumber|string(int64)|false|none|If the note is associated with a proposal revision number, then store that here. (readonly, except on create)|
|timestampMs|string(int64)|false|none|The timestamp (ms since epoch) that this note was created. (readonly)|

<h2 id="tocS_MobileApplication">MobileApplication</h2>
<!-- backwards compatibility -->
<a id="schemamobileapplication"></a>
<a id="schema_MobileApplication"></a>
<a id="tocSmobileapplication"></a>
<a id="tocsmobileapplication"></a>

```json
{
  "appStore": "string",
  "externalAppId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appStore|string|false|none|none|
|externalAppId|string|false|none|none|

<h2 id="tocS_PerformanceReport">PerformanceReport</h2>
<!-- backwards compatibility -->
<a id="schemaperformancereport"></a>
<a id="schema_PerformanceReport"></a>
<a id="tocSperformancereport"></a>
<a id="tocsperformancereport"></a>

```json
{
  "bidRate": 0,
  "bidRequestRate": 0,
  "calloutStatusRate": [
    null
  ],
  "cookieMatcherStatusRate": [
    null
  ],
  "creativeStatusRate": [
    null
  ],
  "filteredBidRate": 0,
  "hostedMatchStatusRate": [
    null
  ],
  "inventoryMatchRate": 0,
  "kind": "adexchangebuyer#performanceReport",
  "latency50thPercentile": 0,
  "latency85thPercentile": 0,
  "latency95thPercentile": 0,
  "noQuotaInRegion": 0,
  "outOfQuota": 0,
  "pixelMatchRequests": 0,
  "pixelMatchResponses": 0,
  "quotaConfiguredLimit": 0,
  "quotaThrottledLimit": 0,
  "region": "string",
  "successfulRequestRate": 0,
  "timestamp": "string",
  "unsuccessfulRequestRate": 0
}
```

The configuration data for an Ad Exchange performance report list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bidRate|number(double)|false|none|The number of bid responses with an ad.|
|bidRequestRate|number(double)|false|none|The number of bid requests sent to your bidder.|
|calloutStatusRate|[object]|false|none|Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.|
|cookieMatcherStatusRate|[object]|false|none|Average QPS for cookie matcher operations.|
|creativeStatusRate|[object]|false|none|Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.|
|filteredBidRate|number(double)|false|none|The number of bid responses that were filtered due to a policy violation or other errors.|
|hostedMatchStatusRate|[object]|false|none|Average QPS for hosted match operations.|
|inventoryMatchRate|number(double)|false|none|The number of potential queries based on your pretargeting settings.|
|kind|string|false|none|Resource type.|
|latency50thPercentile|number(double)|false|none|The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.|
|latency85thPercentile|number(double)|false|none|The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.|
|latency95thPercentile|number(double)|false|none|The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.|
|noQuotaInRegion|number(double)|false|none|Rate of various quota account statuses per quota check.|
|outOfQuota|number(double)|false|none|Rate of various quota account statuses per quota check.|
|pixelMatchRequests|number(double)|false|none|Average QPS for pixel match requests from clients.|
|pixelMatchResponses|number(double)|false|none|Average QPS for pixel match responses from clients.|
|quotaConfiguredLimit|number(double)|false|none|The configured quota limits for this account.|
|quotaThrottledLimit|number(double)|false|none|The throttled quota limits for this account.|
|region|string|false|none|The trading location of this data.|
|successfulRequestRate|number(double)|false|none|The number of properly formed bid responses received by our servers within the deadline.|
|timestamp|string(int64)|false|none|The unix timestamp of the starting time of this performance data.|
|unsuccessfulRequestRate|number(double)|false|none|The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.|

<h2 id="tocS_PerformanceReportList">PerformanceReportList</h2>
<!-- backwards compatibility -->
<a id="schemaperformancereportlist"></a>
<a id="schema_PerformanceReportList"></a>
<a id="tocSperformancereportlist"></a>
<a id="tocsperformancereportlist"></a>

```json
{
  "kind": "adexchangebuyer#performanceReportList",
  "performanceReport": [
    {
      "bidRate": 0,
      "bidRequestRate": 0,
      "calloutStatusRate": [
        null
      ],
      "cookieMatcherStatusRate": [
        null
      ],
      "creativeStatusRate": [
        null
      ],
      "filteredBidRate": 0,
      "hostedMatchStatusRate": [
        null
      ],
      "inventoryMatchRate": 0,
      "kind": "adexchangebuyer#performanceReport",
      "latency50thPercentile": 0,
      "latency85thPercentile": 0,
      "latency95thPercentile": 0,
      "noQuotaInRegion": 0,
      "outOfQuota": 0,
      "pixelMatchRequests": 0,
      "pixelMatchResponses": 0,
      "quotaConfiguredLimit": 0,
      "quotaThrottledLimit": 0,
      "region": "string",
      "successfulRequestRate": 0,
      "timestamp": "string",
      "unsuccessfulRequestRate": 0
    }
  ]
}
```

The configuration data for an Ad Exchange performance report list.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Resource type.|
|performanceReport|[[PerformanceReport](#schemaperformancereport)]|false|none|A list of performance reports relevant for the account.|

<h2 id="tocS_PretargetingConfig">PretargetingConfig</h2>
<!-- backwards compatibility -->
<a id="schemapretargetingconfig"></a>
<a id="schema_PretargetingConfig"></a>
<a id="tocSpretargetingconfig"></a>
<a id="tocspretargetingconfig"></a>

```json
{
  "billingId": "string",
  "configId": "string",
  "configName": "string",
  "creativeType": [
    "string"
  ],
  "dimensions": [
    {
      "height": "string",
      "width": "string"
    }
  ],
  "excludedContentLabels": [
    "string"
  ],
  "excludedGeoCriteriaIds": [
    "string"
  ],
  "excludedPlacements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "excludedUserLists": [
    "string"
  ],
  "excludedVerticals": [
    "string"
  ],
  "geoCriteriaIds": [
    "string"
  ],
  "isActive": true,
  "kind": "adexchangebuyer#pretargetingConfig",
  "languages": [
    "string"
  ],
  "maximumQps": "string",
  "minimumViewabilityDecile": 0,
  "mobileCarriers": [
    "string"
  ],
  "mobileDevices": [
    "string"
  ],
  "mobileOperatingSystemVersions": [
    "string"
  ],
  "placements": [
    {
      "token": "string",
      "type": "string"
    }
  ],
  "platforms": [
    "string"
  ],
  "supportedCreativeAttributes": [
    "string"
  ],
  "userIdentifierDataRequired": [
    "string"
  ],
  "userLists": [
    "string"
  ],
  "vendorTypes": [
    "string"
  ],
  "verticals": [
    "string"
  ],
  "videoPlayerSizes": [
    {
      "aspectRatio": "string",
      "minHeight": "string",
      "minWidth": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingId|string(int64)|false|none|The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.|
|configId|string(int64)|false|none|The config id; generated automatically. Leave this field blank for insert requests.|
|configName|string|false|none|The name of the config. Must be unique. Required for all requests.|
|creativeType|[string]|false|none|List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.|
|dimensions|[object]|false|none|Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.|
|excludedContentLabels|[string(int64)]|false|none|Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.|
|excludedGeoCriteriaIds|[string(int64)]|false|none|Requests containing any of these geo criteria ids will not match.|
|excludedPlacements|[object]|false|none|Requests containing any of these placements will not match.|
|excludedUserLists|[string(int64)]|false|none|Requests containing any of these users list ids will not match.|
|excludedVerticals|[string(int64)]|false|none|Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.|
|geoCriteriaIds|[string(int64)]|false|none|Requests containing any of these geo criteria ids will match.|
|isActive|boolean|false|none|Whether this config is active. Required for all requests.|
|kind|string|false|none|The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".|
|languages|[string]|false|none|Request containing any of these language codes will match.|
|maximumQps|string(int64)|false|none|The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).|
|minimumViewabilityDecile|integer(int32)|false|none|Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.|
|mobileCarriers|[string(int64)]|false|none|Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.|
|mobileDevices|[string(int64)]|false|none|Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.|
|mobileOperatingSystemVersions|[string(int64)]|false|none|Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.|
|placements|[object]|false|none|Requests containing any of these placements will match.|
|platforms|[string]|false|none|Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.|
|supportedCreativeAttributes|[string(int64)]|false|none|Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.|
|userIdentifierDataRequired|[string]|false|none|Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.|
|userLists|[string(int64)]|false|none|Requests containing any of these user list ids will match.|
|vendorTypes|[string(int64)]|false|none|Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.|
|verticals|[string(int64)]|false|none|Requests containing any of these vertical ids will match.|
|videoPlayerSizes|[object]|false|none|Video requests satisfying any of these player size constraints will match.|

<h2 id="tocS_PretargetingConfigList">PretargetingConfigList</h2>
<!-- backwards compatibility -->
<a id="schemapretargetingconfiglist"></a>
<a id="schema_PretargetingConfigList"></a>
<a id="tocSpretargetingconfiglist"></a>
<a id="tocspretargetingconfiglist"></a>

```json
{
  "items": [
    {
      "billingId": "string",
      "configId": "string",
      "configName": "string",
      "creativeType": [
        "string"
      ],
      "dimensions": [
        {
          "height": "string",
          "width": "string"
        }
      ],
      "excludedContentLabels": [
        "string"
      ],
      "excludedGeoCriteriaIds": [
        "string"
      ],
      "excludedPlacements": [
        {
          "token": "string",
          "type": "string"
        }
      ],
      "excludedUserLists": [
        "string"
      ],
      "excludedVerticals": [
        "string"
      ],
      "geoCriteriaIds": [
        "string"
      ],
      "isActive": true,
      "kind": "adexchangebuyer#pretargetingConfig",
      "languages": [
        "string"
      ],
      "maximumQps": "string",
      "minimumViewabilityDecile": 0,
      "mobileCarriers": [
        "string"
      ],
      "mobileDevices": [
        "string"
      ],
      "mobileOperatingSystemVersions": [
        "string"
      ],
      "placements": [
        {
          "token": "string",
          "type": "string"
        }
      ],
      "platforms": [
        "string"
      ],
      "supportedCreativeAttributes": [
        "string"
      ],
      "userIdentifierDataRequired": [
        "string"
      ],
      "userLists": [
        "string"
      ],
      "vendorTypes": [
        "string"
      ],
      "verticals": [
        "string"
      ],
      "videoPlayerSizes": [
        {
          "aspectRatio": "string",
          "minHeight": "string",
          "minWidth": "string"
        }
      ]
    }
  ],
  "kind": "adexchangebuyer#pretargetingConfigList"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[PretargetingConfig](#schemapretargetingconfig)]|false|none|A list of pretargeting configs|
|kind|string|false|none|Resource type.|

<h2 id="tocS_Price">Price</h2>
<!-- backwards compatibility -->
<a id="schemaprice"></a>
<a id="schema_Price"></a>
<a id="tocSprice"></a>
<a id="tocsprice"></a>

```json
{
  "amountMicros": 0,
  "currencyCode": "string",
  "expectedCpmMicros": 0,
  "pricingType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountMicros|number(double)|false|none|The price value in micros.|
|currencyCode|string|false|none|The currency code for the price.|
|expectedCpmMicros|number(double)|false|none|In case of CPD deals, the expected CPM in micros.|
|pricingType|string|false|none|The pricing type for the deal/product.|

<h2 id="tocS_PricePerBuyer">PricePerBuyer</h2>
<!-- backwards compatibility -->
<a id="schemapriceperbuyer"></a>
<a id="schema_PricePerBuyer"></a>
<a id="tocSpriceperbuyer"></a>
<a id="tocspriceperbuyer"></a>

```json
{
  "auctionTier": "string",
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "price": {
    "amountMicros": 0,
    "currencyCode": "string",
    "expectedCpmMicros": 0,
    "pricingType": "string"
  }
}
```

Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auctionTier|string|false|none|Optional access type for this buyer.|
|billedBuyer|[Buyer](#schemabuyer)|false|none|Reference to the buyer that will get billed.|
|buyer|[Buyer](#schemabuyer)|false|none|The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there's no more specific rule matching the buyer).|
|price|[Price](#schemaprice)|false|none|The specified price|

<h2 id="tocS_PrivateData">PrivateData</h2>
<!-- backwards compatibility -->
<a id="schemaprivatedata"></a>
<a id="schema_PrivateData"></a>
<a id="tocSprivatedata"></a>
<a id="tocsprivatedata"></a>

```json
{
  "referenceId": "string",
  "referencePayload": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|referenceId|string|false|none|none|
|referencePayload|string(byte)|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "billedBuyer": {
    "accountId": "string"
  },
  "buyer": {
    "accountId": "string"
  },
  "creationTimeMs": "string",
  "creatorContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ],
  "creatorRole": "string",
  "deliveryControl": {
    "creativeBlockingLevel": "string",
    "deliveryRateType": "string",
    "frequencyCaps": [
      {
        "maxImpressions": 0,
        "numTimeUnits": 0,
        "timeUnitType": "string"
      }
    ]
  },
  "flightEndTimeMs": "string",
  "flightStartTimeMs": "string",
  "hasCreatorSignedOff": true,
  "inventorySource": "string",
  "kind": "adexchangebuyer#product",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdateTimeMs": "string",
  "legacyOfferId": "string",
  "marketplacePublisherProfileId": "string",
  "name": "string",
  "privateAuctionId": "string",
  "productId": "string",
  "publisherProfileId": "string",
  "publisherProvidedForecast": {
    "dimensions": [
      {
        "dimensionType": "string",
        "dimensionValues": [
          {
            "id": 0,
            "name": "string",
            "percentage": 0
          }
        ]
      }
    ],
    "weeklyImpressions": "string",
    "weeklyUniques": "string"
  },
  "revisionNumber": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sharedTargetings": [
    {
      "exclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "inclusions": [
        {
          "creativeSizeValue": {
            "allowedFormats": [
              "string"
            ],
            "companionSizes": [
              {
                "height": 0,
                "width": 0
              }
            ],
            "creativeSizeType": "string",
            "nativeTemplate": "string",
            "size": {
              "height": 0,
              "width": 0
            },
            "skippableAdType": "string"
          },
          "dayPartTargetingValue": {
            "dayParts": [
              {
                "dayOfWeek": "string",
                "endHour": 0,
                "endMinute": 0,
                "startHour": 0,
                "startMinute": 0
              }
            ],
            "timeZoneType": "string"
          },
          "demogAgeCriteriaValue": {
            "demogAgeCriteriaIds": [
              "string"
            ]
          },
          "demogGenderCriteriaValue": {
            "demogGenderCriteriaIds": [
              "string"
            ]
          },
          "longValue": "string",
          "requestPlatformTargetingValue": {
            "requestPlatforms": [
              "string"
            ]
          },
          "stringValue": "string"
        }
      ],
      "key": "string"
    }
  ],
  "state": "string",
  "syndicationProduct": "string",
  "terms": {
    "brandingType": "string",
    "crossListedExternalDealIdType": "string",
    "description": "string",
    "estimatedGrossSpend": {
      "amountMicros": 0,
      "currencyCode": "string",
      "expectedCpmMicros": 0,
      "pricingType": "string"
    },
    "estimatedImpressionsPerDay": "string",
    "guaranteedFixedPriceTerms": {
      "billingInfo": {
        "currencyConversionTimeMs": "string",
        "dfpLineItemId": "string",
        "originalContractedQuantity": "string",
        "price": {
          "amountMicros": 0,
          "currencyCode": "string",
          "expectedCpmMicros": 0,
          "pricingType": "string"
        }
      },
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ],
      "guaranteedImpressions": "string",
      "guaranteedLooks": "string",
      "minimumDailyLooks": "string"
    },
    "nonGuaranteedAuctionTerms": {
      "autoOptimizePrivateAuction": true,
      "reservePricePerBuyers": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "nonGuaranteedFixedPriceTerms": {
      "fixedPrices": [
        {
          "auctionTier": "string",
          "billedBuyer": {
            "accountId": "string"
          },
          "buyer": {
            "accountId": "string"
          },
          "price": {
            "amountMicros": 0,
            "currencyCode": "string",
            "expectedCpmMicros": 0,
            "pricingType": "string"
          }
        }
      ]
    },
    "rubiconNonGuaranteedTerms": {
      "priorityPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      },
      "standardPrice": {
        "amountMicros": 0,
        "currencyCode": "string",
        "expectedCpmMicros": 0,
        "pricingType": "string"
      }
    },
    "sellerTimeZone": "string"
  },
  "webPropertyCode": "string"
}
```

A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:

(readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedBuyer|[Buyer](#schemabuyer)|false|none|The billed buyer corresponding to the buyer that created the offer. (readonly, except on create)|
|buyer|[Buyer](#schemabuyer)|false|none|The buyer that created the offer if this is a buyer initiated offer (readonly, except on create)|
|creationTimeMs|string(int64)|false|none|Creation time in ms. since epoch (readonly)|
|creatorContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Optional contact information for the creator of this product. (buyer-readonly)|
|creatorRole|string|false|none|The role that created the offer. Set to BUYER for buyer initiated offers.|
|deliveryControl|[DeliveryControl](#schemadeliverycontrol)|false|none|The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.|
|flightEndTimeMs|string(int64)|false|none|The proposed end time for the deal (ms since epoch) (buyer-readonly)|
|flightStartTimeMs|string(int64)|false|none|Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)|
|hasCreatorSignedOff|boolean|false|none|If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.|
|inventorySource|string|false|none|What exchange will provide this inventory (readonly, except on create).|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product".|
|labels|[[MarketplaceLabel](#schemamarketplacelabel)]|false|none|Optional List of labels for the product (optional, buyer-readonly).|
|lastUpdateTimeMs|string(int64)|false|none|Time of last update in ms. since epoch (readonly)|
|legacyOfferId|string|false|none|Optional legacy offer id if this offer is a preferred deal offer.|
|marketplacePublisherProfileId|string|false|none|Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.|
|name|string|false|none|The name for this product as set by the seller. (buyer-readonly)|
|privateAuctionId|string|false|none|Optional private auction id if this offer is a private auction offer.|
|productId|string|false|none|The unique id for the product (readonly)|
|publisherProfileId|string|false|none|Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.|
|publisherProvidedForecast|[PublisherProvidedForecast](#schemapublisherprovidedforecast)|false|none|Publisher self-provided forecast information.|
|revisionNumber|string(int64)|false|none|The revision number of the product. (readonly)|
|seller|[Seller](#schemaseller)|false|none|Information about the seller that created this product (readonly, except on create)|
|sharedTargetings|[[SharedTargeting](#schemasharedtargeting)]|false|none|Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)|
|state|string|false|none|The state of the product. (buyer-readonly)|
|syndicationProduct|string|false|none|The syndication product associated with the deal. (readonly, except on create)|
|terms|[DealTerms](#schemadealterms)|false|none|The negotiable terms of the deal (buyer-readonly)|
|webPropertyCode|string|false|none|The web property code for the seller. This field is meant to be copied over as is when creating deals.|

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
    "referenceId": "string",
    "referencePayload": "string"
  },
  "dbmAdvertiserIds": [
    "string"
  ],
  "hasBuyerSignedOff": true,
  "hasSellerSignedOff": true,
  "inventorySource": "string",
  "isRenegotiating": true,
  "isSetupComplete": true,
  "kind": "adexchangebuyer#proposal",
  "labels": [
    {
      "accountId": "string",
      "createTimeMs": "string",
      "deprecatedMarketplaceDealParty": {
        "buyer": {
          "accountId": "string"
        },
        "seller": {
          "accountId": "string",
          "subAccountId": "string"
        }
      },
      "label": "string"
    }
  ],
  "lastUpdaterOrCommentorRole": "string",
  "name": "string",
  "negotiationId": "string",
  "originatorRole": "string",
  "privateAuctionId": "string",
  "proposalId": "string",
  "proposalState": "string",
  "revisionNumber": "string",
  "revisionTimeMs": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "sellerContacts": [
    {
      "email": "string",
      "name": "string"
    }
  ]
}
```

Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:

(readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billedBuyer|[Buyer](#schemabuyer)|false|none|Reference to the buyer that will get billed for this proposal. (readonly)|
|buyer|[Buyer](#schemabuyer)|false|none|Reference to the buyer on the proposal. (readonly, except on create)|
|buyerContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Optional contact information of the buyer. (seller-readonly)|
|buyerPrivateData|[PrivateData](#schemaprivatedata)|false|none|Private data for buyer. (hidden from seller).|
|dbmAdvertiserIds|[string]|false|none|IDs of DBM advertisers permission to this proposal.|
|hasBuyerSignedOff|boolean|false|none|When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)|
|hasSellerSignedOff|boolean|false|none|When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)|
|inventorySource|string|false|none|What exchange will provide this inventory (readonly, except on create).|
|isRenegotiating|boolean|false|none|True if the proposal is being renegotiated (readonly).|
|isSetupComplete|boolean|false|none|True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".|
|labels|[[MarketplaceLabel](#schemamarketplacelabel)]|false|none|List of labels associated with the proposal. (readonly)|
|lastUpdaterOrCommentorRole|string|false|none|The role of the last user that either updated the proposal or left a comment. (readonly)|
|name|string|false|none|The name for the proposal (updatable)|
|negotiationId|string|false|none|Optional negotiation id if this proposal is a preferred deal proposal.|
|originatorRole|string|false|none|Indicates whether the buyer/seller created the proposal.(readonly)|
|privateAuctionId|string|false|none|Optional private auction id if this proposal is a private auction proposal.|
|proposalId|string|false|none|The unique id of the proposal. (readonly).|
|proposalState|string|false|none|The current state of the proposal. (readonly)|
|revisionNumber|string(int64)|false|none|The revision number for the proposal (readonly).|
|revisionTimeMs|string(int64)|false|none|The time (ms since epoch) when the proposal was last revised (readonly).|
|seller|[Seller](#schemaseller)|false|none|Reference to the seller on the proposal. (readonly, except on create)|
|sellerContacts|[[ContactInformation](#schemacontactinformation)]|false|none|Optional contact information of the seller (buyer-readonly).|

<h2 id="tocS_PublisherProfileApiProto">PublisherProfileApiProto</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprofileapiproto"></a>
<a id="schema_PublisherProfileApiProto"></a>
<a id="tocSpublisherprofileapiproto"></a>
<a id="tocspublisherprofileapiproto"></a>

```json
{
  "audience": "string",
  "buyerPitchStatement": "string",
  "directContact": "string",
  "exchange": "string",
  "forecastInventory": "string",
  "googlePlusLink": "string",
  "isParent": true,
  "isPublished": true,
  "kind": "adexchangebuyer#publisherProfileApiProto",
  "logoUrl": "string",
  "mediaKitLink": "string",
  "name": "string",
  "overview": "string",
  "profileId": 0,
  "programmaticContact": "string",
  "publisherAppIds": [
    "string"
  ],
  "publisherApps": [
    {
      "appStore": "string",
      "externalAppId": "string"
    }
  ],
  "publisherDomains": [
    "string"
  ],
  "publisherProfileId": "string",
  "publisherProvidedForecast": {
    "dimensions": [
      {
        "dimensionType": "string",
        "dimensionValues": [
          {
            "id": 0,
            "name": "string",
            "percentage": 0
          }
        ]
      }
    ],
    "weeklyImpressions": "string",
    "weeklyUniques": "string"
  },
  "rateCardInfoLink": "string",
  "samplePageLink": "string",
  "seller": {
    "accountId": "string",
    "subAccountId": "string"
  },
  "state": "string",
  "topHeadlines": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|Publisher provided info on its audience.|
|buyerPitchStatement|string|false|none|A pitch statement for the buyer|
|directContact|string|false|none|Direct contact for the publisher profile.|
|exchange|string|false|none|Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...|
|forecastInventory|string|false|none|none|
|googlePlusLink|string|false|none|Link to publisher's Google+ page.|
|isParent|boolean|false|none|True, if this is the parent profile, which represents all domains owned by the publisher.|
|isPublished|boolean|false|none|True, if this profile is published. Deprecated for state.|
|kind|string|false|none|Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto".|
|logoUrl|string|false|none|The url to the logo for the publisher.|
|mediaKitLink|string|false|none|The url for additional marketing and sales materials.|
|name|string|false|none|none|
|overview|string|false|none|Publisher provided overview.|
|profileId|integer(int32)|false|none|The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.|
|programmaticContact|string|false|none|Programmatic contact for the publisher profile.|
|publisherAppIds|[string(int64)]|false|none|The list of app IDs represented in this publisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app.|
|publisherApps|[[MobileApplication](#schemamobileapplication)]|false|none|The list of apps represented in this publisher profile. Empty if this is a parent profile.|
|publisherDomains|[string]|false|none|The list of domains represented in this publisher profile. Empty if this is a parent profile.|
|publisherProfileId|string|false|none|Unique Id for publisher profile.|
|publisherProvidedForecast|[PublisherProvidedForecast](#schemapublisherprovidedforecast)|false|none|Publisher provided forecasting information.|
|rateCardInfoLink|string|false|none|Link to publisher rate card|
|samplePageLink|string|false|none|Link for a sample content page.|
|seller|[Seller](#schemaseller)|false|none|Seller of the publisher profile.|
|state|string|false|none|State of the publisher profile.|
|topHeadlines|[string]|false|none|Publisher provided key metrics and rankings.|

<h2 id="tocS_PublisherProvidedForecast">PublisherProvidedForecast</h2>
<!-- backwards compatibility -->
<a id="schemapublisherprovidedforecast"></a>
<a id="schema_PublisherProvidedForecast"></a>
<a id="tocSpublisherprovidedforecast"></a>
<a id="tocspublisherprovidedforecast"></a>

```json
{
  "dimensions": [
    {
      "dimensionType": "string",
      "dimensionValues": [
        {
          "id": 0,
          "name": "string",
          "percentage": 0
        }
      ]
    }
  ],
  "weeklyImpressions": "string",
  "weeklyUniques": "string"
}
```

This message carries publisher provided forecasting information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dimensions|[[Dimension](#schemadimension)]|false|none|Publisher provided dimensions. E.g. geo, sizes etc...|
|weeklyImpressions|string(int64)|false|none|Publisher provided weekly impressions.|
|weeklyUniques|string(int64)|false|none|Publisher provided weekly uniques.|

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string|false|none|The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.|
|subAccountId|string|false|none|Optional sub-account id for the seller.|

<h2 id="tocS_SharedTargeting">SharedTargeting</h2>
<!-- backwards compatibility -->
<a id="schemasharedtargeting"></a>
<a id="schema_SharedTargeting"></a>
<a id="tocSsharedtargeting"></a>
<a id="tocssharedtargeting"></a>

```json
{
  "exclusions": [
    {
      "creativeSizeValue": {
        "allowedFormats": [
          "string"
        ],
        "companionSizes": [
          {
            "height": 0,
            "width": 0
          }
        ],
        "creativeSizeType": "string",
        "nativeTemplate": "string",
        "size": {
          "height": 0,
          "width": 0
        },
        "skippableAdType": "string"
      },
      "dayPartTargetingValue": {
        "dayParts": [
          {
            "dayOfWeek": "string",
            "endHour": 0,
            "endMinute": 0,
            "startHour": 0,
            "startMinute": 0
          }
        ],
        "timeZoneType": "string"
      },
      "demogAgeCriteriaValue": {
        "demogAgeCriteriaIds": [
          "string"
        ]
      },
      "demogGenderCriteriaValue": {
        "demogGenderCriteriaIds": [
          "string"
        ]
      },
      "longValue": "string",
      "requestPlatformTargetingValue": {
        "requestPlatforms": [
          "string"
        ]
      },
      "stringValue": "string"
    }
  ],
  "inclusions": [
    {
      "creativeSizeValue": {
        "allowedFormats": [
          "string"
        ],
        "companionSizes": [
          {
            "height": 0,
            "width": 0
          }
        ],
        "creativeSizeType": "string",
        "nativeTemplate": "string",
        "size": {
          "height": 0,
          "width": 0
        },
        "skippableAdType": "string"
      },
      "dayPartTargetingValue": {
        "dayParts": [
          {
            "dayOfWeek": "string",
            "endHour": 0,
            "endMinute": 0,
            "startHour": 0,
            "startMinute": 0
          }
        ],
        "timeZoneType": "string"
      },
      "demogAgeCriteriaValue": {
        "demogAgeCriteriaIds": [
          "string"
        ]
      },
      "demogGenderCriteriaValue": {
        "demogGenderCriteriaIds": [
          "string"
        ]
      },
      "longValue": "string",
      "requestPlatformTargetingValue": {
        "requestPlatforms": [
          "string"
        ]
      },
      "stringValue": "string"
    }
  ],
  "key": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusions|[[TargetingValue](#schematargetingvalue)]|false|none|The list of values to exclude from targeting. Each value is AND'd together.|
|inclusions|[[TargetingValue](#schematargetingvalue)]|false|none|The list of value to include as part of the targeting. Each value is OR'd together.|
|key|string|false|none|The key representing the shared targeting criterion.|

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
      "string"
    ],
    "companionSizes": [
      {
        "height": 0,
        "width": 0
      }
    ],
    "creativeSizeType": "string",
    "nativeTemplate": "string",
    "size": {
      "height": 0,
      "width": 0
    },
    "skippableAdType": "string"
  },
  "dayPartTargetingValue": {
    "dayParts": [
      {
        "dayOfWeek": "string",
        "endHour": 0,
        "endMinute": 0,
        "startHour": 0,
        "startMinute": 0
      }
    ],
    "timeZoneType": "string"
  },
  "demogAgeCriteriaValue": {
    "demogAgeCriteriaIds": [
      "string"
    ]
  },
  "demogGenderCriteriaValue": {
    "demogGenderCriteriaIds": [
      "string"
    ]
  },
  "longValue": "string",
  "requestPlatformTargetingValue": {
    "requestPlatforms": [
      "string"
    ]
  },
  "stringValue": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creativeSizeValue|[TargetingValueCreativeSize](#schematargetingvaluecreativesize)|false|none|The creative size value to exclude/include.|
|dayPartTargetingValue|[TargetingValueDayPartTargeting](#schematargetingvaluedayparttargeting)|false|none|The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING.|
|demogAgeCriteriaValue|[TargetingValueDemogAgeCriteria](#schematargetingvaluedemogagecriteria)|false|none|none|
|demogGenderCriteriaValue|[TargetingValueDemogGenderCriteria](#schematargetingvaluedemoggendercriteria)|false|none|none|
|longValue|string(int64)|false|none|The long value to exclude/include.|
|requestPlatformTargetingValue|[TargetingValueRequestPlatformTargeting](#schematargetingvaluerequestplatformtargeting)|false|none|none|
|stringValue|string|false|none|The string value to exclude/include.|

<h2 id="tocS_TargetingValueCreativeSize">TargetingValueCreativeSize</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluecreativesize"></a>
<a id="schema_TargetingValueCreativeSize"></a>
<a id="tocStargetingvaluecreativesize"></a>
<a id="tocstargetingvaluecreativesize"></a>

```json
{
  "allowedFormats": [
    "string"
  ],
  "companionSizes": [
    {
      "height": 0,
      "width": 0
    }
  ],
  "creativeSizeType": "string",
  "nativeTemplate": "string",
  "size": {
    "height": 0,
    "width": 0
  },
  "skippableAdType": "string"
}
```

Next Id: 7

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedFormats|[string]|false|none|The formats allowed by the publisher.|
|companionSizes|[[TargetingValueSize](#schematargetingvaluesize)]|false|none|For video size type, the list of companion sizes.|
|creativeSizeType|string|false|none|The Creative size type.|
|nativeTemplate|string|false|none|The native template for native ad.|
|size|[TargetingValueSize](#schematargetingvaluesize)|false|none|For regular or video creative size type, specifies the size of the creative.|
|skippableAdType|string|false|none|The skippable ad type for video size.|

<h2 id="tocS_TargetingValueDayPartTargeting">TargetingValueDayPartTargeting</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluedayparttargeting"></a>
<a id="schema_TargetingValueDayPartTargeting"></a>
<a id="tocStargetingvaluedayparttargeting"></a>
<a id="tocstargetingvaluedayparttargeting"></a>

```json
{
  "dayParts": [
    {
      "dayOfWeek": "string",
      "endHour": 0,
      "endMinute": 0,
      "startHour": 0,
      "startMinute": 0
    }
  ],
  "timeZoneType": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayParts|[[TargetingValueDayPartTargetingDayPart](#schematargetingvaluedayparttargetingdaypart)]|false|none|none|
|timeZoneType|string|false|none|none|

<h2 id="tocS_TargetingValueDayPartTargetingDayPart">TargetingValueDayPartTargetingDayPart</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluedayparttargetingdaypart"></a>
<a id="schema_TargetingValueDayPartTargetingDayPart"></a>
<a id="tocStargetingvaluedayparttargetingdaypart"></a>
<a id="tocstargetingvaluedayparttargetingdaypart"></a>

```json
{
  "dayOfWeek": "string",
  "endHour": 0,
  "endMinute": 0,
  "startHour": 0,
  "startMinute": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|false|none|none|
|endHour|integer(int32)|false|none|none|
|endMinute|integer(int32)|false|none|none|
|startHour|integer(int32)|false|none|none|
|startMinute|integer(int32)|false|none|none|

<h2 id="tocS_TargetingValueDemogAgeCriteria">TargetingValueDemogAgeCriteria</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluedemogagecriteria"></a>
<a id="schema_TargetingValueDemogAgeCriteria"></a>
<a id="tocStargetingvaluedemogagecriteria"></a>
<a id="tocstargetingvaluedemogagecriteria"></a>

```json
{
  "demogAgeCriteriaIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demogAgeCriteriaIds|[string]|false|none|none|

<h2 id="tocS_TargetingValueDemogGenderCriteria">TargetingValueDemogGenderCriteria</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluedemoggendercriteria"></a>
<a id="schema_TargetingValueDemogGenderCriteria"></a>
<a id="tocStargetingvaluedemoggendercriteria"></a>
<a id="tocstargetingvaluedemoggendercriteria"></a>

```json
{
  "demogGenderCriteriaIds": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|demogGenderCriteriaIds|[string]|false|none|none|

<h2 id="tocS_TargetingValueRequestPlatformTargeting">TargetingValueRequestPlatformTargeting</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluerequestplatformtargeting"></a>
<a id="schema_TargetingValueRequestPlatformTargeting"></a>
<a id="tocStargetingvaluerequestplatformtargeting"></a>
<a id="tocstargetingvaluerequestplatformtargeting"></a>

```json
{
  "requestPlatforms": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestPlatforms|[string]|false|none|none|

<h2 id="tocS_TargetingValueSize">TargetingValueSize</h2>
<!-- backwards compatibility -->
<a id="schematargetingvaluesize"></a>
<a id="schema_TargetingValueSize"></a>
<a id="tocStargetingvaluesize"></a>
<a id="tocstargetingvaluesize"></a>

```json
{
  "height": 0,
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|The height of the creative.|
|width|integer(int32)|false|none|The width of the creative.|

<h2 id="tocS_UpdatePrivateAuctionProposalRequest">UpdatePrivateAuctionProposalRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdateprivateauctionproposalrequest"></a>
<a id="schema_UpdatePrivateAuctionProposalRequest"></a>
<a id="tocSupdateprivateauctionproposalrequest"></a>
<a id="tocsupdateprivateauctionproposalrequest"></a>

```json
{
  "externalDealId": "string",
  "note": {
    "creatorRole": "string",
    "dealId": "string",
    "kind": "adexchangebuyer#marketplaceNote",
    "note": "string",
    "noteId": "string",
    "proposalId": "string",
    "proposalRevisionNumber": "string",
    "timestampMs": "string"
  },
  "proposalRevisionNumber": "string",
  "updateAction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|externalDealId|string|false|none|The externalDealId of the deal to be updated.|
|note|[MarketplaceNote](#schemamarketplacenote)|false|none|Optional note to be added.|
|proposalRevisionNumber|string(int64)|false|none|The current revision number of the proposal to be updated.|
|updateAction|string|false|none|The proposed action on the private auction proposal.|
