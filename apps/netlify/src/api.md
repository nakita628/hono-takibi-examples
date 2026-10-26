<h1 id="netlifys-api-documentation">Netlify's API documentation v2.62.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Netlify is a hosting service for the programmable web. It understands your documents and provides an API to handle atomic deploys of websites, manage form submissions, inject JavaScript snippets, and much more. This is a REST-style API that uses JSON for serialization and OAuth 2 for authentication.

This document is an OpenAPI reference for the Netlify API that you can explore. For more detailed instructions for common uses, please visit the [online documentation](https://www.netlify.com/docs/api/). Visit our Community forum to join the conversation about [understanding and using Netlify's API](https://community.netlify.com/t/common-issue-understanding-and-using-netlifys-api/160).

Additionally, we have two API clients for your convenience:
- [Go Client](https://github.com/netlify/open-api#go-client)
- [JS Client](https://github.com/netlify/build/tree/main/packages/js-client)

Base URLs:

* <a href="https://api.netlify.com/api/v1">https://api.netlify.com/api/v1</a>

<a href="https://www.netlify.com/legal/terms-of-use/">Terms of service</a>

<a href="https://www.netlify.com/docs/api/">Online documentation</a>

# Authentication

- oAuth2 authentication.

    - Flow: implicit
    - Authorization URL = [https://app.netlify.com/authorize](https://app.netlify.com/authorize)

<h1 id="netlifys-api-documentation-ticket">ticket</h1>

## Create an OAuth ticket

<a id="opIdcreateTicket"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/oauth/tickets?client_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "message": "string"
  }'
```

`POST /oauth/tickets`

> Body parameter

```json
{
  "message": "string"
}
```

<h3 id="create-an-oauth-ticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|true|none|
|body|body|object|false|none|
|» message|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "client_id": "string",
  "authorized": true,
  "created_at": "string"
}
```

> 401 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-an-oauth-ticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[ticket](#schematicket)|
|401|Unauthorized|OAuth application not found|[error](#schemaerror)|
|422|Unprocessable Entity|Validation error|[error](#schemaerror)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an OAuth ticket

<a id="opIdshowTicket"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/oauth/tickets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth/tickets/{ticket_id}`

<h3 id="get-an-oauth-ticket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticket_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "client_id": "string",
  "authorized": true,
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-oauth-ticket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ok|[ticket](#schematicket)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-accesstoken">accessToken</h1>

## Exchange an OAuth ticket for an access token

<a id="opIdexchangeTicket"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/oauth/tickets/string/exchange \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /oauth/tickets/{ticket_id}/exchange`

<h3 id="exchange-an-oauth-ticket-for-an-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ticket_id|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "access_token": "string",
  "user_id": "string",
  "user_email": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="exchange-an-oauth-ticket-for-an-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|ok|[accessToken](#schemaaccesstoken)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-user">user</h1>

## Get the current user

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /user`

> Example responses

> 200 Response

```json
{
  "id": "string",
  "uid": "string",
  "full_name": "string",
  "avatar_url": "string",
  "email": "string",
  "affiliate_id": "string",
  "site_count": 0,
  "created_at": "string",
  "last_login": "string",
  "login_providers": [
    "string"
  ],
  "onboarding_progress": {
    "slides": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-accountmembership">accountMembership</h1>

## List the current user's teams

<a id="opIdlistAccountsForUser"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "slug": "string",
    "type": "string",
    "capabilities": {
      "sites": {
        "included": 0,
        "used": 0
      },
      "collaborators": {
        "included": 0,
        "used": 0
      }
    },
    "billing_name": "string",
    "billing_email": "string",
    "billing_details": "string",
    "billing_period": "string",
    "payment_method_id": "string",
    "type_name": "string",
    "type_id": "string",
    "owner_ids": [
      "string"
    ],
    "roles_allowed": [
      "string"
    ],
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-the-current-users-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-the-current-users-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountMembership](#schemaaccountmembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a team

<a id="opIdcreateAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "type_id": "string",
    "payment_method_id": "string",
    "period": "monthly",
    "extra_seats_block": 0
  }'
```

`POST /accounts`

> Body parameter

```json
{
  "name": "string",
  "type_id": "string",
  "payment_method_id": "string",
  "period": "monthly",
  "extra_seats_block": 0
}
```

<h3 id="create-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[accountSetup](#schemaaccountsetup)|true|none|
|» name|body|string|true|none|
|» type_id|body|string|true|none|
|» payment_method_id|body|string|false|none|
|» period|body|string|false|none|
|» extra_seats_block|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» period|monthly|
|» period|yearly|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "type": "string",
  "capabilities": {
    "sites": {
      "included": 0,
      "used": 0
    },
    "collaborators": {
      "included": 0,
      "used": 0
    }
  },
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string",
  "billing_period": "string",
  "payment_method_id": "string",
  "type_name": "string",
  "type_id": "string",
  "owner_ids": [
    "string"
  ],
  "roles_allowed": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[accountMembership](#schemaaccountmembership)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a team

<a id="opIdgetAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}`

<h3 id="get-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "type": "string",
  "capabilities": {
    "sites": {
      "included": 0,
      "used": 0
    },
    "collaborators": {
      "included": 0,
      "used": 0
    }
  },
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string",
  "billing_period": "string",
  "payment_method_id": "string",
  "type_name": "string",
  "type_id": "string",
  "owner_ids": [
    "string"
  ],
  "roles_allowed": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[accountMembership](#schemaaccountmembership)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a team

<a id="opIdupdateAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "slug": "string",
    "type_id": "string",
    "extra_seats_block": 0,
    "billing_name": "string",
    "billing_email": "string",
    "billing_details": "string"
  }'
```

`PUT /accounts/{account_id}`

> Body parameter

```json
{
  "name": "string",
  "slug": "string",
  "type_id": "string",
  "extra_seats_block": 0,
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string"
}
```

<h3 id="update-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|
|body|body|[accountUpdateSetup](#schemaaccountupdatesetup)|false|none|
|» name|body|string|false|none|
|» slug|body|string|false|none|
|» type_id|body|string|false|none|
|» extra_seats_block|body|integer|false|none|
|» billing_name|body|string|false|none|
|» billing_email|body|string|false|none|
|» billing_details|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "type": "string",
  "capabilities": {
    "sites": {
      "included": 0,
      "used": 0
    },
    "collaborators": {
      "included": 0,
      "used": 0
    }
  },
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string",
  "billing_period": "string",
  "payment_method_id": "string",
  "type_name": "string",
  "type_id": "string",
  "owner_ids": [
    "string"
  ],
  "roles_allowed": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[accountMembership](#schemaaccountmembership)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Cancel a team

<a id="opIdcancelAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{account_id}`

<h3 id="cancel-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="cancel-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Not Content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-member">member</h1>

## List a team's members

<a id="opIdlistMembersForAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{account_slug}/members`

<h3 id="list-a-teams-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar": "string",
    "role": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-teams-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-teams-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[member](#schemamember)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Add a member to a team

<a id="opIdaddMemberToAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "Owner",
    "email": "string"
  }'
```

`POST /{account_slug}/members`

> Body parameter

```json
{
  "role": "Owner",
  "email": "string"
}
```

<h3 id="add-a-member-to-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|path|string|true|none|
|body|body|[accountAddMemberSetup](#schemaaccountaddmembersetup)|true|none|
|» role|body|string|false|none|
|» email|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|Owner|
|» role|Developer|
|» role|Billing Admin|
|» role|Reviewer|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar": "string",
    "role": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-a-member-to-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="add-a-member-to-a-team-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[member](#schemamember)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a team member

<a id="opIdgetAccountMember"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/members/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{account_slug}/members/{member_id}`

<h3 id="get-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|path|string|true|none|
|member_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "full_name": "string",
  "email": "string",
  "avatar": "string",
  "role": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[member](#schemamember)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a team member

<a id="opIdupdateAccountMember"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/members/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "role": "Owner",
    "site_access": "all",
    "site_ids": [
      "string"
    ]
  }'
```

`PUT /{account_slug}/members/{member_id}`

> Body parameter

```json
{
  "role": "Owner",
  "site_access": "all",
  "site_ids": [
    "string"
  ]
}
```

<h3 id="update-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|path|string|true|none|
|member_id|path|string|true|none|
|body|body|[accountUpdateMemberSetup](#schemaaccountupdatemembersetup)|true|none|
|» role|body|string|false|none|
|» site_access|body|string|false|none|
|» site_ids|body|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» role|Owner|
|» role|Developer|
|» role|Billing Admin|
|» role|Reviewer|
|» site_access|all|
|» site_access|none|
|» site_access|selected|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "full_name": "string",
  "email": "string",
  "avatar": "string",
  "role": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[member](#schemamember)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Remove a team member

<a id="opIdremoveAccountMember"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/members/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /{account_slug}/members/{member_id}`

<h3 id="remove-a-team-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|path|string|true|none|
|member_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-a-team-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Not Content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-accounttype">accountType</h1>

## List plans available for new teams

<a id="opIdlistAccountTypesForUser"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/types`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "capabilities": {},
    "monthly_dollar_price": 0,
    "yearly_dollar_price": 0,
    "monthly_seats_addon_dollar_price": 0,
    "yearly_seats_addon_dollar_price": 0
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-plans-available-for-new-teams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-plans-available-for-new-teams-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[accountType](#schemaaccounttype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-paymentmethod">paymentMethod</h1>

## List payment methods

<a id="opIdlistPaymentMethodsForUser"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/billing/payment_methods \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /billing/payment_methods`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "method_name": "string",
    "type": "string",
    "state": "string",
    "data": {
      "card_type": "string",
      "last4": "string",
      "email": "string"
    },
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-payment-methods-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-payment-methods-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[paymentMethod](#schemapaymentmethod)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-auditlog">auditLog</h1>

## List a team's audit log events

<a id="opIdlistAccountAuditEvents"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/audit \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/audit`

<h3 id="list-a-teams-audit-log-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|
|log_type|query|string|false|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|account_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "account_id": "string",
    "payload": {
      "actor_id": "string",
      "actor_name": "string",
      "actor_email": "string",
      "action": "string",
      "timestamp": "string",
      "log_type": "string",
      "property1": {},
      "property2": {}
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-teams-audit-log-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-teams-audit-log-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[auditLog](#schemaauditlog)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-site">site</h1>

## List sites

<a id="opIdlistSites"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

<h3 id="list-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|filter|query|string|false|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|owner|
|filter|guest|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "state": "string",
    "plan": "string",
    "name": "string",
    "custom_domain": "string",
    "domain_aliases": [
      "string"
    ],
    "branch_deploy_custom_domain": "string",
    "deploy_preview_custom_domain": "string",
    "password": "string",
    "notification_email": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "screenshot_url": "string",
    "created_at": "string",
    "updated_at": "string",
    "user_id": "string",
    "session_id": "string",
    "ssl": true,
    "force_ssl": true,
    "managed_dns": true,
    "deploy_url": "string",
    "published_deploy": {
      "id": "string",
      "site_id": "string",
      "user_id": "string",
      "build_id": "string",
      "state": "string",
      "name": "string",
      "url": "string",
      "ssl_url": "string",
      "admin_url": "string",
      "deploy_url": "string",
      "deploy_ssl_url": "string",
      "screenshot_url": "string",
      "review_id": 0,
      "draft": true,
      "required": [
        "string"
      ],
      "required_functions": [
        "string"
      ],
      "required_edge_functions": [
        "string"
      ],
      "required_server": [
        "string"
      ],
      "error_message": "string",
      "branch": "string",
      "commit_ref": "string",
      "commit_url": "string",
      "skipped": true,
      "created_at": "string",
      "updated_at": "string",
      "published_at": "string",
      "title": "string",
      "context": "string",
      "locked": true,
      "review_url": "string",
      "framework": "string",
      "skew_protection_token": "string",
      "function_schedules": [
        {
          "name": "string",
          "cron": "string"
        }
      ],
      "functions_region": "string",
      "functions_region_overrides": [
        {
          "name": "string",
          "region": "string"
        }
      ]
    },
    "account_id": "string",
    "account_name": "string",
    "account_slug": "string",
    "git_provider": "string",
    "deploy_hook": "string",
    "capabilities": {
      "property1": {},
      "property2": {}
    },
    "processing_settings": {
      "html": {
        "pretty_urls": true
      }
    },
    "build_settings": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    },
    "id_domain": "string",
    "default_hooks_data": {
      "access_token": "string"
    },
    "build_image": "string",
    "prerender": "string",
    "functions_region": "string",
    "prevent_non_git_prod_deploys": false
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-sites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[site](#schemasite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a site

<a id="opIdcreateSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "state": "string",
    "plan": "string",
    "name": "string",
    "custom_domain": "string",
    "domain_aliases": [
      "string"
    ],
    "branch_deploy_custom_domain": "string",
    "deploy_preview_custom_domain": "string",
    "password": "string",
    "notification_email": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "screenshot_url": "string",
    "created_at": "string",
    "updated_at": "string",
    "user_id": "string",
    "session_id": "string",
    "ssl": true,
    "force_ssl": true,
    "managed_dns": true,
    "deploy_url": "string",
    "published_deploy": {
      "id": "string",
      "site_id": "string",
      "user_id": "string",
      "build_id": "string",
      "state": "string",
      "name": "string",
      "url": "string",
      "ssl_url": "string",
      "admin_url": "string",
      "deploy_url": "string",
      "deploy_ssl_url": "string",
      "screenshot_url": "string",
      "review_id": 0,
      "draft": true,
      "required": [
        "string"
      ],
      "required_functions": [
        "string"
      ],
      "required_edge_functions": [
        "string"
      ],
      "required_server": [
        "string"
      ],
      "error_message": "string",
      "branch": "string",
      "commit_ref": "string",
      "commit_url": "string",
      "skipped": true,
      "created_at": "string",
      "updated_at": "string",
      "published_at": "string",
      "title": "string",
      "context": "string",
      "locked": true,
      "review_url": "string",
      "framework": "string",
      "skew_protection_token": "string",
      "function_schedules": [
        {
          "name": "string",
          "cron": "string"
        }
      ],
      "functions_region": "string",
      "functions_region_overrides": [
        {
          "name": "string",
          "region": "string"
        }
      ]
    },
    "account_id": "string",
    "account_name": "string",
    "account_slug": "string",
    "git_provider": "string",
    "deploy_hook": "string",
    "capabilities": {
      "property1": {},
      "property2": {}
    },
    "processing_settings": {
      "html": {
        "pretty_urls": true
      }
    },
    "build_settings": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    },
    "id_domain": "string",
    "default_hooks_data": {
      "access_token": "string"
    },
    "build_image": "string",
    "prerender": "string",
    "functions_region": "string",
    "prevent_non_git_prod_deploys": false,
    "repo": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    }
  }'
```

`POST /sites`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.

> Body parameter

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false,
  "repo": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  }
}
```

<h3 id="create-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configure_dns|query|boolean|false|none|
|body|body|[siteSetup](#schemasitesetup)|true|none|
|» id|body|string|false|none|
|» state|body|string|false|none|
|» plan|body|string|false|none|
|» name|body|string|false|none|
|» custom_domain|body|string|false|none|
|» domain_aliases|body|[string]|false|none|
|» branch_deploy_custom_domain|body|string|false|none|
|» deploy_preview_custom_domain|body|string|false|none|
|» password|body|string|false|none|
|» notification_email|body|string|false|none|
|» url|body|string|false|none|
|» ssl_url|body|string|false|none|
|» admin_url|body|string|false|none|
|» screenshot_url|body|string|false|none|
|» created_at|body|string(dateTime)|false|none|
|» updated_at|body|string(dateTime)|false|none|
|» user_id|body|string|false|none|
|» session_id|body|string|false|none|
|» ssl|body|boolean|false|none|
|» force_ssl|body|boolean|false|none|
|» managed_dns|body|boolean|false|none|
|» deploy_url|body|string|false|none|
|» published_deploy|body|[deploy](#schemadeploy)|false|none|
|» account_id|body|string|false|none|
|» account_name|body|string|false|none|
|» account_slug|body|string|false|none|
|» git_provider|body|string|false|none|
|» deploy_hook|body|string|false|none|
|» capabilities|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» processing_settings|body|object|false|none|
|» » html|body|object|false|none|
|» » » pretty_urls|body|boolean|false|none|
|» build_settings|body|[repoInfo](#schemarepoinfo)|false|none|
|» id_domain|body|string|false|none|
|» default_hooks_data|body|object|false|none|
|» » access_token|body|string|false|none|
|» build_image|body|string|false|none|
|» prerender|body|string|false|none|
|» functions_region|body|string|false|none|
|» prevent_non_git_prod_deploys|body|boolean|false|none|
|» repo|body|[repoInfo](#schemarepoinfo)|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[site](#schemasite)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a site

<a id="opIdgetSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

<h3 id="get-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[site](#schemasite)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a site

<a id="opIddeleteSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}`

<h3 id="delete-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a site

<a id="opIdupdateSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "state": "string",
    "plan": "string",
    "name": "string",
    "custom_domain": "string",
    "domain_aliases": [
      "string"
    ],
    "branch_deploy_custom_domain": "string",
    "deploy_preview_custom_domain": "string",
    "password": "string",
    "notification_email": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "screenshot_url": "string",
    "created_at": "string",
    "updated_at": "string",
    "user_id": "string",
    "session_id": "string",
    "ssl": true,
    "force_ssl": true,
    "managed_dns": true,
    "deploy_url": "string",
    "published_deploy": {
      "id": "string",
      "site_id": "string",
      "user_id": "string",
      "build_id": "string",
      "state": "string",
      "name": "string",
      "url": "string",
      "ssl_url": "string",
      "admin_url": "string",
      "deploy_url": "string",
      "deploy_ssl_url": "string",
      "screenshot_url": "string",
      "review_id": 0,
      "draft": true,
      "required": [
        "string"
      ],
      "required_functions": [
        "string"
      ],
      "required_edge_functions": [
        "string"
      ],
      "required_server": [
        "string"
      ],
      "error_message": "string",
      "branch": "string",
      "commit_ref": "string",
      "commit_url": "string",
      "skipped": true,
      "created_at": "string",
      "updated_at": "string",
      "published_at": "string",
      "title": "string",
      "context": "string",
      "locked": true,
      "review_url": "string",
      "framework": "string",
      "skew_protection_token": "string",
      "function_schedules": [
        {
          "name": "string",
          "cron": "string"
        }
      ],
      "functions_region": "string",
      "functions_region_overrides": [
        {
          "name": "string",
          "region": "string"
        }
      ]
    },
    "account_id": "string",
    "account_name": "string",
    "account_slug": "string",
    "git_provider": "string",
    "deploy_hook": "string",
    "capabilities": {
      "property1": {},
      "property2": {}
    },
    "processing_settings": {
      "html": {
        "pretty_urls": true
      }
    },
    "build_settings": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    },
    "id_domain": "string",
    "default_hooks_data": {
      "access_token": "string"
    },
    "build_image": "string",
    "prerender": "string",
    "functions_region": "string",
    "prevent_non_git_prod_deploys": false,
    "repo": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    }
  }'
```

`PATCH /sites/{site_id}`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [updateEnvVar](#tag/environmentVariables/operation/updateEnvVar) to update a site's environment variables.

> Body parameter

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false,
  "repo": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  }
}
```

<h3 id="update-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[siteSetup](#schemasitesetup)|true|none|
|» id|body|string|false|none|
|» state|body|string|false|none|
|» plan|body|string|false|none|
|» name|body|string|false|none|
|» custom_domain|body|string|false|none|
|» domain_aliases|body|[string]|false|none|
|» branch_deploy_custom_domain|body|string|false|none|
|» deploy_preview_custom_domain|body|string|false|none|
|» password|body|string|false|none|
|» notification_email|body|string|false|none|
|» url|body|string|false|none|
|» ssl_url|body|string|false|none|
|» admin_url|body|string|false|none|
|» screenshot_url|body|string|false|none|
|» created_at|body|string(dateTime)|false|none|
|» updated_at|body|string(dateTime)|false|none|
|» user_id|body|string|false|none|
|» session_id|body|string|false|none|
|» ssl|body|boolean|false|none|
|» force_ssl|body|boolean|false|none|
|» managed_dns|body|boolean|false|none|
|» deploy_url|body|string|false|none|
|» published_deploy|body|[deploy](#schemadeploy)|false|none|
|» account_id|body|string|false|none|
|» account_name|body|string|false|none|
|» account_slug|body|string|false|none|
|» git_provider|body|string|false|none|
|» deploy_hook|body|string|false|none|
|» capabilities|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» processing_settings|body|object|false|none|
|» » html|body|object|false|none|
|» » » pretty_urls|body|boolean|false|none|
|» build_settings|body|[repoInfo](#schemarepoinfo)|false|none|
|» id_domain|body|string|false|none|
|» default_hooks_data|body|object|false|none|
|» » access_token|body|string|false|none|
|» build_image|body|string|false|none|
|» prerender|body|string|false|none|
|» functions_region|body|string|false|none|
|» prevent_non_git_prod_deploys|body|boolean|false|none|
|» repo|body|[repoInfo](#schemarepoinfo)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[site](#schemasite)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Unlink a site's repository

<a id="opIdunlinkSiteRepo"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/unlink_repo \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/unlink_repo`

[Beta] Unlinks the repo from the site.

This action will also:
- Delete associated deploy keys
- Delete outgoing webhooks for the repo
- Delete the site's build hooks

<h3 id="unlink-a-sites-repository-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

<h3 id="unlink-a-sites-repository-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[site](#schemasite)|
|404|Not Found|Site not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Enable a site

<a id="opIdenableSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/enable \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/enable`

Re-enables a site that was previously disabled by the user. Sites that were disabled for usage exceeded or marked as spam cannot be re-enabled via this endpoint.

<h3 id="enable-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 422 Response

```json
{
  "code": 0,
  "message": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="enable-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|422|Unprocessable Entity|Cannot enable this site|[error](#schemaerror)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Disable a site

<a id="opIddisableSite"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/sites/string/disable?reason=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/disable`

Disables a site, preventing it from serving content. The site can be re-enabled later using the enable endpoint.

<h3 id="disable-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reason|query|string|true|Reason for disabling the site|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="disable-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List a team's sites

<a id="opIdlistSitesForAccount"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/sites \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{account_slug}/sites`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [getEnvVars](#tag/environmentVariables/operation/getEnvVars) to retrieve site environment variables.

<h3 id="list-a-teams-sites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|none|
|account_slug|path|string|true|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "state": "string",
    "plan": "string",
    "name": "string",
    "custom_domain": "string",
    "domain_aliases": [
      "string"
    ],
    "branch_deploy_custom_domain": "string",
    "deploy_preview_custom_domain": "string",
    "password": "string",
    "notification_email": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "screenshot_url": "string",
    "created_at": "string",
    "updated_at": "string",
    "user_id": "string",
    "session_id": "string",
    "ssl": true,
    "force_ssl": true,
    "managed_dns": true,
    "deploy_url": "string",
    "published_deploy": {
      "id": "string",
      "site_id": "string",
      "user_id": "string",
      "build_id": "string",
      "state": "string",
      "name": "string",
      "url": "string",
      "ssl_url": "string",
      "admin_url": "string",
      "deploy_url": "string",
      "deploy_ssl_url": "string",
      "screenshot_url": "string",
      "review_id": 0,
      "draft": true,
      "required": [
        "string"
      ],
      "required_functions": [
        "string"
      ],
      "required_edge_functions": [
        "string"
      ],
      "required_server": [
        "string"
      ],
      "error_message": "string",
      "branch": "string",
      "commit_ref": "string",
      "commit_url": "string",
      "skipped": true,
      "created_at": "string",
      "updated_at": "string",
      "published_at": "string",
      "title": "string",
      "context": "string",
      "locked": true,
      "review_url": "string",
      "framework": "string",
      "skew_protection_token": "string",
      "function_schedules": [
        {
          "name": "string",
          "cron": "string"
        }
      ],
      "functions_region": "string",
      "functions_region_overrides": [
        {
          "name": "string",
          "region": "string"
        }
      ]
    },
    "account_id": "string",
    "account_name": "string",
    "account_slug": "string",
    "git_provider": "string",
    "deploy_hook": "string",
    "capabilities": {
      "property1": {},
      "property2": {}
    },
    "processing_settings": {
      "html": {
        "pretty_urls": true
      }
    },
    "build_settings": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    },
    "id_domain": "string",
    "default_hooks_data": {
      "access_token": "string"
    },
    "build_image": "string",
    "prerender": "string",
    "functions_region": "string",
    "prevent_non_git_prod_deploys": false
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-teams-sites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-teams-sites-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[site](#schemasite)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a site in a team

<a id="opIdcreateSiteInTeam"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/sites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "state": "string",
    "plan": "string",
    "name": "string",
    "custom_domain": "string",
    "domain_aliases": [
      "string"
    ],
    "branch_deploy_custom_domain": "string",
    "deploy_preview_custom_domain": "string",
    "password": "string",
    "notification_email": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "screenshot_url": "string",
    "created_at": "string",
    "updated_at": "string",
    "user_id": "string",
    "session_id": "string",
    "ssl": true,
    "force_ssl": true,
    "managed_dns": true,
    "deploy_url": "string",
    "published_deploy": {
      "id": "string",
      "site_id": "string",
      "user_id": "string",
      "build_id": "string",
      "state": "string",
      "name": "string",
      "url": "string",
      "ssl_url": "string",
      "admin_url": "string",
      "deploy_url": "string",
      "deploy_ssl_url": "string",
      "screenshot_url": "string",
      "review_id": 0,
      "draft": true,
      "required": [
        "string"
      ],
      "required_functions": [
        "string"
      ],
      "required_edge_functions": [
        "string"
      ],
      "required_server": [
        "string"
      ],
      "error_message": "string",
      "branch": "string",
      "commit_ref": "string",
      "commit_url": "string",
      "skipped": true,
      "created_at": "string",
      "updated_at": "string",
      "published_at": "string",
      "title": "string",
      "context": "string",
      "locked": true,
      "review_url": "string",
      "framework": "string",
      "skew_protection_token": "string",
      "function_schedules": [
        {
          "name": "string",
          "cron": "string"
        }
      ],
      "functions_region": "string",
      "functions_region_overrides": [
        {
          "name": "string",
          "region": "string"
        }
      ]
    },
    "account_id": "string",
    "account_name": "string",
    "account_slug": "string",
    "git_provider": "string",
    "deploy_hook": "string",
    "capabilities": {
      "property1": {},
      "property2": {}
    },
    "processing_settings": {
      "html": {
        "pretty_urls": true
      }
    },
    "build_settings": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    },
    "id_domain": "string",
    "default_hooks_data": {
      "access_token": "string"
    },
    "build_image": "string",
    "prerender": "string",
    "functions_region": "string",
    "prevent_non_git_prod_deploys": false,
    "repo": {
      "id": 0,
      "provider": "string",
      "deploy_key_id": "string",
      "repo_path": "string",
      "repo_branch": "string",
      "dir": "string",
      "functions_dir": "string",
      "cmd": "string",
      "allowed_branches": [
        "string"
      ],
      "public_repo": true,
      "private_logs": true,
      "repo_url": "string",
      "env": {
        "property1": "string",
        "property2": "string"
      },
      "installation_id": 0,
      "stop_builds": true
    }
  }'
```

`POST /{account_slug}/sites`

**Note:** Environment variable keys and values have moved from `build_settings.env` and `repo.env` to a new endpoint. Please use [createEnvVars](#tag/environmentVariables/operation/createEnvVars) to create environment variables for a site.

> Body parameter

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false,
  "repo": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  }
}
```

<h3 id="create-a-site-in-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|configure_dns|query|boolean|false|none|
|account_slug|path|string|true|none|
|body|body|[siteSetup](#schemasitesetup)|false|none|
|» id|body|string|false|none|
|» state|body|string|false|none|
|» plan|body|string|false|none|
|» name|body|string|false|none|
|» custom_domain|body|string|false|none|
|» domain_aliases|body|[string]|false|none|
|» branch_deploy_custom_domain|body|string|false|none|
|» deploy_preview_custom_domain|body|string|false|none|
|» password|body|string|false|none|
|» notification_email|body|string|false|none|
|» url|body|string|false|none|
|» ssl_url|body|string|false|none|
|» admin_url|body|string|false|none|
|» screenshot_url|body|string|false|none|
|» created_at|body|string(dateTime)|false|none|
|» updated_at|body|string(dateTime)|false|none|
|» user_id|body|string|false|none|
|» session_id|body|string|false|none|
|» ssl|body|boolean|false|none|
|» force_ssl|body|boolean|false|none|
|» managed_dns|body|boolean|false|none|
|» deploy_url|body|string|false|none|
|» published_deploy|body|[deploy](#schemadeploy)|false|none|
|» account_id|body|string|false|none|
|» account_name|body|string|false|none|
|» account_slug|body|string|false|none|
|» git_provider|body|string|false|none|
|» deploy_hook|body|string|false|none|
|» capabilities|body|object|false|none|
|» » **additionalProperties**|body|object|false|none|
|» processing_settings|body|object|false|none|
|» » html|body|object|false|none|
|» » » pretty_urls|body|boolean|false|none|
|» build_settings|body|[repoInfo](#schemarepoinfo)|false|none|
|» id_domain|body|string|false|none|
|» default_hooks_data|body|object|false|none|
|» » access_token|body|string|false|none|
|» build_image|body|string|false|none|
|» prerender|body|string|false|none|
|» functions_region|body|string|false|none|
|» prevent_non_git_prod_deploys|body|boolean|false|none|
|» repo|body|[repoInfo](#schemarepoinfo)|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-site-in-a-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[site](#schemasite)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-environmentvariables">environmentVariables</h1>

## List environment variables for a team or site

<a id="opIdgetEnvVars"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/env`

Returns all environment variables for an account or site. An account corresponds to a team in the Netlify UI.

<h3 id="list-environment-variables-for-a-team-or-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|context_name|query|string|false|Filter by deploy context|
|scope|query|string|false|Filter by scope|
|site_id|query|string|false|If specified, only return environment variables set on this site|

#### Enumerated Values

|Parameter|Value|
|---|---|
|context_name|all|
|context_name|dev|
|context_name|dev-server|
|context_name|branch-deploy|
|context_name|deploy-preview|
|context_name|production|
|scope|builds|
|scope|functions|
|scope|runtime|
|scope|post-processing|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "scopes": [
      "builds"
    ],
    "values": [
      {
        "id": "string",
        "value": "string",
        "context": "all",
        "context_parameter": "string"
      }
    ],
    "is_secret": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": {
      "id": "string",
      "full_name": "string",
      "email": "string",
      "avatar_url": "string"
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-environment-variables-for-a-team-or-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-environment-variables-for-a-team-or-site-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[envVar](#schemaenvvar)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create environment variables

<a id="opIdcreateEnvVars"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "key": "string",
      "scopes": [
        "builds"
      ],
      "values": [
        {
          "id": "string",
          "value": "string",
          "context": "all",
          "context_parameter": "string"
        }
      ],
      "is_secret": true
    }
  ]'
```

`POST /accounts/{account_id}/env`

Creates new environment variables. Granular scopes are available on Pro plans and above.

> Body parameter

```json
[
  {
    "key": "string",
    "scopes": [
      "builds"
    ],
    "values": [
      {
        "id": "string",
        "value": "string",
        "context": "all",
        "context_parameter": "string"
      }
    ],
    "is_secret": true
  }
]
```

<h3 id="create-environment-variables-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|site_id|query|string|false|If provided, create an environment variable on the site level, not the account level|
|body|body|[object]|false|none|
|» key|body|string|false|The existing or new name of the key, if you wish to rename it (case-sensitive)|
|» scopes|body|[string]|false|The scopes that this environment variable is set to (Pro plans and above)|
|» values|body|[[envVarValue](#schemaenvvarvalue)]|false|none|
|» is_secret|body|boolean|false|Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scopes|builds|
|» scopes|functions|
|» scopes|runtime|
|» scopes|post-processing|

> Example responses

> 201 Response

```json
[
  {
    "key": "string",
    "scopes": [
      "builds"
    ],
    "values": [
      {
        "id": "string",
        "value": "string",
        "context": "all",
        "context_parameter": "string"
      }
    ],
    "is_secret": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": {
      "id": "string",
      "full_name": "string",
      "email": "string",
      "avatar_url": "string"
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-environment-variables-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="create-environment-variables-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[envVar](#schemaenvvar)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List environment variables for a site

<a id="opIdgetSiteEnvVars"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/api/v1/sites/string/env \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v1/sites/{site_id}/env`

Returns all environment variables for a site. This convenience method behaves the same as `getEnvVars` but doesn't require an `account_id` as input.

<h3 id="list-environment-variables-for-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|context_name|query|string|false|Filter by deploy context|
|scope|query|string|false|Filter by scope|
|site_id|path|string|true|Scope response to site_id|

#### Enumerated Values

|Parameter|Value|
|---|---|
|context_name|all|
|context_name|dev|
|context_name|dev-server|
|context_name|branch-deploy|
|context_name|deploy-preview|
|context_name|production|
|scope|builds|
|scope|functions|
|scope|runtime|
|scope|post_processing|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "scopes": [
      "builds"
    ],
    "values": [
      {
        "id": "string",
        "value": "string",
        "context": "all",
        "context_parameter": "string"
      }
    ],
    "is_secret": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "updated_by": {
      "id": "string",
      "full_name": "string",
      "email": "string",
      "avatar_url": "string"
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-environment-variables-for-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-environment-variables-for-a-site-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[envVar](#schemaenvvar)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an environment variable

<a id="opIdgetEnvVar"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/env/{key}`

Returns an individual environment variable.

<h3 id="get-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|key|path|string|true|The environment variable key (case-sensitive)|
|site_id|query|string|false|If provided, return the environment variable for a specific site (no merging is performed)|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "scopes": [
    "builds"
  ],
  "values": [
    {
      "id": "string",
      "value": "string",
      "context": "all",
      "context_parameter": "string"
    }
  ],
  "is_secret": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[envVar](#schemaenvvar)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update an environment variable

<a id="opIdupdateEnvVar"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string",
    "scopes": [
      "builds"
    ],
    "values": [
      {
        "id": "string",
        "value": "string",
        "context": "all",
        "context_parameter": "string"
      }
    ],
    "is_secret": true
  }'
```

`PUT /accounts/{account_id}/env/{key}`

Updates an existing environment variable and all of its values. Existing values will be replaced by values provided.

> Body parameter

```json
{
  "key": "string",
  "scopes": [
    "builds"
  ],
  "values": [
    {
      "id": "string",
      "value": "string",
      "context": "all",
      "context_parameter": "string"
    }
  ],
  "is_secret": true
}
```

<h3 id="update-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|key|path|string|true|The existing environment variable key name (case-sensitive)|
|site_id|query|string|false|If provided, update an environment variable set on this site|
|body|body|object|false|none|
|» key|body|string|false|The existing or new name of the key, if you wish to rename it (case-sensitive)|
|» scopes|body|[string]|false|The scopes that this environment variable is set to (Pro plans and above)|
|» values|body|[[envVarValue](#schemaenvvarvalue)]|false|none|
|» is_secret|body|boolean|false|Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» scopes|builds|
|» scopes|functions|
|» scopes|runtime|
|» scopes|post-processing|

> Example responses

> 200 Response

```json
{
  "key": "string",
  "scopes": [
    "builds"
  ],
  "values": [
    {
      "id": "string",
      "value": "string",
      "context": "all",
      "context_parameter": "string"
    }
  ],
  "is_secret": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[envVar](#schemaenvvar)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete an environment variable

<a id="opIddeleteEnvVar"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{account_id}/env/{key}`

Deletes an environment variable

<h3 id="delete-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|key|path|string|true|The environment variable key (case-sensitive)|
|site_id|query|string|false|If provided, delete the environment variable from this site|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content (success)|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Set a value on an environment variable

<a id="opIdsetEnvVarValue"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "context": "all",
    "context_parameter": "string",
    "value": "string"
  }'
```

`PATCH /accounts/{account_id}/env/{key}`

Updates or creates a new value for an existing environment variable.

> Body parameter

```json
{
  "context": "all",
  "context_parameter": "string",
  "value": "string"
}
```

<h3 id="set-a-value-on-an-environment-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|key|path|string|true|The existing environment variable key name (case-sensitive)|
|site_id|query|string|false|If provided, update an environment variable set on this site|
|body|body|object|false|none|
|» context|body|string|false|The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`. `branch` must be provided with a value in `context_parameter`.|
|» context_parameter|body|string|false|An additional parameter for custom branches. Currently, this is used for providing a branch name when `context=branch`.|
|» value|body|string|false|The environment variable's unencrypted value|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» context|all|
|» context|dev|
|» context|dev-server|
|» context|branch-deploy|
|» context|deploy-preview|
|» context|production|
|» context|branch|

> Example responses

> 201 Response

```json
{
  "key": "string",
  "scopes": [
    "builds"
  ],
  "values": [
    {
      "id": "string",
      "value": "string",
      "context": "all",
      "context_parameter": "string"
    }
  ],
  "is_secret": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="set-a-value-on-an-environment-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created (success)|[envVar](#schemaenvvar)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete an environment variable value

<a id="opIddeleteEnvVarValue"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/env/string/value/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /accounts/{account_id}/env/{key}/value/{id}`

Deletes a specific environment variable value.

<h3 id="delete-an-environment-variable-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|Scope response to account_id|
|id|path|string|true|The environment variable value's ID|
|key|path|string|true|The environment variable key name (case-sensitive)|
|site_id|query|string|false|If provided, delete the value from an environment variable on this site|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-an-environment-variable-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content (success)|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-file">file</h1>

## List a site's files

<a id="opIdlistSiteFiles"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/files`

<h3 id="list-a-sites-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "path": "string",
    "sha": "string",
    "mime_type": "string",
    "size": 0
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-files-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[file](#schemafile)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a site file by path

<a id="opIdgetSiteFileByPathName"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/files/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/files/{file_path}`

<h3 id="get-a-site-file-by-path-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|file_path|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "path": "string",
  "sha": "string",
  "mime_type": "string",
  "size": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-site-file-by-path-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[file](#schemafile)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Upload a deploy file

<a id="opIduploadDeployFile"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/files/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /deploys/{deploy_id}/files/{path}`

<h3 id="upload-a-deploy-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|
|path|path|string|true|none|
|size|query|integer|false|none|
|body|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "path": "string",
  "sha": "string",
  "mime_type": "string",
  "size": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="upload-a-deploy-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[file](#schemafile)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-metadata">metadata</h1>

## Get a site's metadata

<a id="opIdgetSiteMetadata"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/metadata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/metadata`

<h3 id="get-a-sites-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-sites-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[metadata](#schemametadata)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a site's metadata

<a id="opIdupdateSiteMetadata"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/metadata \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /sites/{site_id}/metadata`

> Body parameter

```json
{}
```

<h3 id="update-a-sites-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[metadata](#schemametadata)|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-sites-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-snippet">snippet</h1>

## List a site's snippets

<a id="opIdlistSiteSnippets"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/snippets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/snippets`

<h3 id="list-a-sites-snippets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "site_id": "string",
    "title": "string",
    "general": "string",
    "general_position": "string",
    "goal": "string",
    "goal_position": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-snippets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-snippets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[snippet](#schemasnippet)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a snippet

<a id="opIdcreateSiteSnippet"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/snippets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "site_id": "string",
    "title": "string",
    "general": "string",
    "general_position": "string",
    "goal": "string",
    "goal_position": "string"
  }'
```

`POST /sites/{site_id}/snippets`

> Body parameter

```json
{
  "id": 0,
  "site_id": "string",
  "title": "string",
  "general": "string",
  "general_position": "string",
  "goal": "string",
  "goal_position": "string"
}
```

<h3 id="create-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[snippet](#schemasnippet)|true|none|
|» id|body|integer(int32)|false|none|
|» site_id|body|string|false|none|
|» title|body|string|false|none|
|» general|body|string|false|none|
|» general_position|body|string|false|none|
|» goal|body|string|false|none|
|» goal_position|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": 0,
  "site_id": "string",
  "title": "string",
  "general": "string",
  "general_position": "string",
  "goal": "string",
  "goal_position": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[snippet](#schemasnippet)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a snippet

<a id="opIdgetSiteSnippet"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/snippets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/snippets/{snippet_id}`

<h3 id="get-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|snippet_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": 0,
  "site_id": "string",
  "title": "string",
  "general": "string",
  "general_position": "string",
  "goal": "string",
  "goal_position": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[snippet](#schemasnippet)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a snippet

<a id="opIdupdateSiteSnippet"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/snippets/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": 0,
    "site_id": "string",
    "title": "string",
    "general": "string",
    "general_position": "string",
    "goal": "string",
    "goal_position": "string"
  }'
```

`PUT /sites/{site_id}/snippets/{snippet_id}`

> Body parameter

```json
{
  "id": 0,
  "site_id": "string",
  "title": "string",
  "general": "string",
  "general_position": "string",
  "goal": "string",
  "goal_position": "string"
}
```

<h3 id="update-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|snippet_id|path|string|true|none|
|body|body|[snippet](#schemasnippet)|true|none|
|» id|body|integer(int32)|false|none|
|» site_id|body|string|false|none|
|» title|body|string|false|none|
|» general|body|string|false|none|
|» general_position|body|string|false|none|
|» goal|body|string|false|none|
|» goal_position|body|string|false|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a snippet

<a id="opIddeleteSiteSnippet"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/snippets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/snippets/{snippet_id}`

<h3 id="delete-a-snippet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|snippet_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-snippet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-purge">purge</h1>

## Purge cached content

<a id="opIdpurgeCache"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/purge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "site_id": "string",
    "site_slug": "string",
    "cache_tags": [
      "string"
    ]
  }'
```

`POST /purge`

Purges cached content from Netlify's CDN. Supports purging by Cache-Tag.

> Body parameter

```json
{
  "site_id": "string",
  "site_slug": "string",
  "cache_tags": [
    "string"
  ]
}
```

<h3 id="purge-cached-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[purge](#schemapurge)|true|none|
|» site_id|body|string|false|none|
|» site_slug|body|string|false|none|
|» cache_tags|body|[string]|false|none|

<h3 id="purge-cached-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. The purge is queued and propagates across the CDN asynchronously. The response has no body and there is no status resource to poll for completion.|None|
|400|Bad Request|Invalid request parameters|None|
|404|Not Found|Site not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-dnszone">dnsZone</h1>

## Get a site's DNS configuration

<a id="opIdgetDNSForSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/dns`

<h3 id="get-a-sites-dns-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "errors": [
      "string"
    ],
    "supported_record_types": [
      "string"
    ],
    "user_id": "string",
    "created_at": "string",
    "updated_at": "string",
    "records": [
      {
        "id": "string",
        "hostname": "string",
        "type": "string",
        "value": "string",
        "ttl": 0,
        "priority": 0,
        "dns_zone_id": "string",
        "site_id": "string",
        "flag": 0,
        "tag": "string",
        "managed": true
      }
    ],
    "dns_servers": [
      "string"
    ],
    "account_id": "string",
    "site_id": "string",
    "account_slug": "string",
    "account_name": "string",
    "domain": "string",
    "ipv6_enabled": true,
    "dedicated": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-sites-dns-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="get-a-sites-dns-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[dnsZone](#schemadnszone)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Configure a site's DNS

<a id="opIdconfigureDNSForSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dns \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/dns`

Creates any missing DNS zones and records for the site's custom domain and domain aliases. This usually runs automatically when the custom domain is set.

<h3 id="configure-a-sites-dns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "errors": [
      "string"
    ],
    "supported_record_types": [
      "string"
    ],
    "user_id": "string",
    "created_at": "string",
    "updated_at": "string",
    "records": [
      {
        "id": "string",
        "hostname": "string",
        "type": "string",
        "value": "string",
        "ttl": 0,
        "priority": 0,
        "dns_zone_id": "string",
        "site_id": "string",
        "flag": 0,
        "tag": "string",
        "managed": true
      }
    ],
    "dns_servers": [
      "string"
    ],
    "account_id": "string",
    "site_id": "string",
    "account_slug": "string",
    "account_name": "string",
    "domain": "string",
    "ipv6_enabled": true,
    "dedicated": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="configure-a-sites-dns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="configure-a-sites-dns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[dnsZone](#schemadnszone)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List DNS zones

<a id="opIdgetDnsZones"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns_zones`

Returns the DNS zones for the team given by `account_slug`, or all DNS zones the current user can access.

<h3 id="list-dns-zones-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_slug|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "errors": [
      "string"
    ],
    "supported_record_types": [
      "string"
    ],
    "user_id": "string",
    "created_at": "string",
    "updated_at": "string",
    "records": [
      {
        "id": "string",
        "hostname": "string",
        "type": "string",
        "value": "string",
        "ttl": 0,
        "priority": 0,
        "dns_zone_id": "string",
        "site_id": "string",
        "flag": 0,
        "tag": "string",
        "managed": true
      }
    ],
    "dns_servers": [
      "string"
    ],
    "account_id": "string",
    "site_id": "string",
    "account_slug": "string",
    "account_name": "string",
    "domain": "string",
    "ipv6_enabled": true,
    "dedicated": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-dns-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get all DNS zones the user has access to|[dnsZones](#schemadnszones)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a DNS zone

<a id="opIdcreateDnsZone"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_slug": "string",
    "site_id": "string",
    "name": "string"
  }'
```

`POST /dns_zones`

> Body parameter

```json
{
  "account_slug": "string",
  "site_id": "string",
  "name": "string"
}
```

<h3 id="create-a-dns-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[dnsZoneSetup](#schemadnszonesetup)|true|none|
|» account_slug|body|string|false|none|
|» site_id|body|string|false|none|
|» name|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "errors": [
    "string"
  ],
  "supported_record_types": [
    "string"
  ],
  "user_id": "string",
  "created_at": "string",
  "updated_at": "string",
  "records": [
    {
      "id": "string",
      "hostname": "string",
      "type": "string",
      "value": "string",
      "ttl": 0,
      "priority": 0,
      "dns_zone_id": "string",
      "site_id": "string",
      "flag": 0,
      "tag": "string",
      "managed": true
    }
  ],
  "dns_servers": [
    "string"
  ],
  "account_id": "string",
  "site_id": "string",
  "account_slug": "string",
  "account_name": "string",
  "domain": "string",
  "ipv6_enabled": true,
  "dedicated": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-dns-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[dnsZone](#schemadnszone)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a DNS zone

<a id="opIdgetDnsZone"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns_zones/{zone_id}`

<h3 id="get-a-dns-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "errors": [
    "string"
  ],
  "supported_record_types": [
    "string"
  ],
  "user_id": "string",
  "created_at": "string",
  "updated_at": "string",
  "records": [
    {
      "id": "string",
      "hostname": "string",
      "type": "string",
      "value": "string",
      "ttl": 0,
      "priority": 0,
      "dns_zone_id": "string",
      "site_id": "string",
      "flag": 0,
      "tag": "string",
      "managed": true
    }
  ],
  "dns_servers": [
    "string"
  ],
  "account_id": "string",
  "site_id": "string",
  "account_slug": "string",
  "account_name": "string",
  "domain": "string",
  "ipv6_enabled": true,
  "dedicated": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-dns-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get a single DNS zone|[dnsZone](#schemadnszone)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a DNS zone

<a id="opIddeleteDnsZone"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns_zones/{zone_id}`

<h3 id="delete-a-dns-zone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-dns-zone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|delete a single DNS zone|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Transfer a DNS zone to another team

<a id="opIdtransferDnsZone"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/dns_zones/string/transfer?account_id=string&transfer_account_id=string&transfer_user_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /dns_zones/{zone_id}/transfer`

<h3 id="transfer-a-dns-zone-to-another-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|
|account_id|query|string|true|the account of the dns zone|
|transfer_account_id|query|string|true|the account you want to transfer the dns zone to|
|transfer_user_id|query|string|true|the user you want to transfer the dns zone to|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "errors": [
    "string"
  ],
  "supported_record_types": [
    "string"
  ],
  "user_id": "string",
  "created_at": "string",
  "updated_at": "string",
  "records": [
    {
      "id": "string",
      "hostname": "string",
      "type": "string",
      "value": "string",
      "ttl": 0,
      "priority": 0,
      "dns_zone_id": "string",
      "site_id": "string",
      "flag": 0,
      "tag": "string",
      "managed": true
    }
  ],
  "dns_servers": [
    "string"
  ],
  "account_id": "string",
  "site_id": "string",
  "account_slug": "string",
  "account_name": "string",
  "domain": "string",
  "ipv6_enabled": true,
  "dedicated": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="transfer-a-dns-zone-to-another-team-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|transfer a DNS zone to another account|[dnsZone](#schemadnszone)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List a DNS zone's records

<a id="opIdgetDnsRecords"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string/dns_records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns_zones/{zone_id}/dns_records`

<h3 id="list-a-dns-zones-records-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "hostname": "string",
    "type": "string",
    "value": "string",
    "ttl": 0,
    "priority": 0,
    "dns_zone_id": "string",
    "site_id": "string",
    "flag": 0,
    "tag": "string",
    "managed": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-dns-zones-records-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get all DNS records for a single DNS zone|[dnsRecords](#schemadnsrecords)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a DNS record

<a id="opIdcreateDnsRecord"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string/dns_records \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "type": "string",
    "hostname": "string",
    "value": "string",
    "ttl": 0,
    "priority": 0,
    "weight": 0,
    "port": 0,
    "flag": 0,
    "tag": "string"
  }'
```

`POST /dns_zones/{zone_id}/dns_records`

> Body parameter

```json
{
  "type": "string",
  "hostname": "string",
  "value": "string",
  "ttl": 0,
  "priority": 0,
  "weight": 0,
  "port": 0,
  "flag": 0,
  "tag": "string"
}
```

<h3 id="create-a-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|
|body|body|[dnsRecordCreate](#schemadnsrecordcreate)|true|none|
|» type|body|string|false|none|
|» hostname|body|string|false|none|
|» value|body|string|false|none|
|» ttl|body|integer(int64)|false|none|
|» priority|body|integer(int64)|false|none|
|» weight|body|integer(int64)|false|none|
|» port|body|integer(int64)|false|none|
|» flag|body|integer(int64)|false|none|
|» tag|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "hostname": "string",
  "type": "string",
  "value": "string",
  "ttl": 0,
  "priority": 0,
  "dns_zone_id": "string",
  "site_id": "string",
  "flag": 0,
  "tag": "string",
  "managed": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[dnsRecord](#schemadnsrecord)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a DNS record

<a id="opIdgetIndividualDnsRecord"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string/dns_records/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /dns_zones/{zone_id}/dns_records/{dns_record_id}`

<h3 id="get-a-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|
|dns_record_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "hostname": "string",
  "type": "string",
  "value": "string",
  "ttl": 0,
  "priority": 0,
  "dns_zone_id": "string",
  "site_id": "string",
  "flag": 0,
  "tag": "string",
  "managed": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|get a single DNS record|[dnsRecord](#schemadnsrecord)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a DNS record

<a id="opIddeleteDnsRecord"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/dns_zones/string/dns_records/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /dns_zones/{zone_id}/dns_records/{dns_record_id}`

<h3 id="delete-a-dns-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zone_id|path|string|true|none|
|dns_record_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-dns-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|record deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-snicertificate">sniCertificate</h1>

## Get a site's TLS certificate

<a id="opIdshowSiteTLSCertificate"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/ssl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/ssl`

<h3 id="get-a-sites-tls-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "state": "string",
  "domains": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string",
  "expires_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-sites-tls-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[sniCertificate](#schemasnicertificate)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Provision or update a site's TLS certificate

<a id="opIdprovisionSiteTLSCertificate"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/ssl \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/ssl`

Provisions or updates a TLS certificate for the site.

**Creating a certificate (site has no certificate):**
- Omit certificate params to initiate Let's Encrypt provisioning
- Provide certificate, key, and ca_certificates to upload a custom certificate

**Updating a certificate (site already has a certificate):**
- REQUIRES certificate, key, and ca_certificates to replace with a new custom certificate
- Use POST /api/v1/sites/{site_id}/ssl/renew to renew an existing Let's Encrypt certificate

<h3 id="provision-or-update-a-sites-tls-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|certificate|query|string|false|PEM-encoded certificate. Required when updating an existing certificate.|
|key|query|string|false|PEM-encoded private key. Required when updating an existing certificate.|
|ca_certificates|query|string|false|PEM-encoded CA certificate chain. Required when updating an existing certificate.|

> Example responses

> 200 Response

```json
{
  "state": "string",
  "domains": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string",
  "expires_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="provision-or-update-a-sites-tls-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[sniCertificate](#schemasnicertificate)|
|422|Unprocessable Entity|Unprocessable Entity. Returns errors such as: "certificate parameter is required when updating an existing certificate" (when updating without params), "No custom domain configured", or "bad dns for custom domain"|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List TLS certificates for a site's domain

<a id="opIdgetAllCertificates"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/sites/string/ssl/certificates?domain=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/ssl/certificates`

Returns details about the certificates associated with a domain. The site must be using the domain.

<h3 id="list-tls-certificates-for-a-sites-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|domain|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "state": "string",
    "domains": [
      "string"
    ],
    "created_at": "string",
    "updated_at": "string",
    "expires_at": "string"
  }
]
```

<h3 id="list-tls-certificates-for-a-sites-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Array of SNI Certificates|Inline|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|

<h3 id="list-tls-certificates-for-a-sites-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sniCertificate](#schemasnicertificate)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-deploy">deploy</h1>

## List a site's deploys

<a id="opIdlistSiteDeploys"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/deploys`

<h3 id="list-a-sites-deploys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|site_id|path|string|true|none|
|deploy-previews|query|boolean|false|none|
|production|query|boolean|false|none|
|state|query|string|false|none|
|branch|query|string|false|none|
|latest-published|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|new|
|state|pending_review|
|state|accepted|
|state|rejected|
|state|enqueued|
|state|building|
|state|uploading|
|state|uploaded|
|state|preparing|
|state|prepared|
|state|processing|
|state|processed|
|state|ready|
|state|error|
|state|retrying|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-deploys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-deploys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[deploy](#schemadeploy)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a deploy

<a id="opIdcreateSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "files": {},
    "zip": "string",
    "draft": true,
    "async": true,
    "functions": {},
    "edge_functions": {},
    "server": {
      "sha": "string",
      "region": "string",
      "instance_size": "small",
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "runtime_version": "string"
    },
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_config": {
      "property1": {
        "display_name": "string",
        "generator": "string",
        "build_data": {},
        "memory": 0,
        "routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string",
            "methods": [
              "GET"
            ],
            "prefer_static": true
          }
        ],
        "excluded_routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string"
          }
        ],
        "priority": 0,
        "region": "string",
        "traffic_rules": {
          "action": {
            "type": "string",
            "config": {
              "to": "string",
              "rate_limit_config": {
                "algorithm": "sliding_window",
                "window_size": 0,
                "window_limit": 0
              },
              "aggregate": {
                "keys": [
                  {
                    "type": "ip"
                  }
                ]
              }
            }
          }
        },
        "vcpu": 0,
        "event_subscriptions": [
          "string"
        ]
      },
      "property2": {
        "display_name": "string",
        "generator": "string",
        "build_data": {},
        "memory": 0,
        "routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string",
            "methods": [
              "GET"
            ],
            "prefer_static": true
          }
        ],
        "excluded_routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string"
          }
        ],
        "priority": 0,
        "region": "string",
        "traffic_rules": {
          "action": {
            "type": "string",
            "config": {
              "to": "string",
              "rate_limit_config": {
                "algorithm": "sliding_window",
                "window_size": 0,
                "window_limit": 0
              },
              "aggregate": {
                "keys": [
                  {
                    "type": "ip"
                  }
                ]
              }
            }
          }
        },
        "vcpu": 0,
        "event_subscriptions": [
          "string"
        ]
      }
    },
    "branch": "string",
    "framework": "string",
    "framework_version": "string",
    "environment": [
      {
        "key": "string",
        "value": "string",
        "is_secret": true,
        "scopes": [
          "builds"
        ]
      }
    ]
  }'
```

`POST /sites/{site_id}/deploys`

> Body parameter

```json
{
  "files": {},
  "zip": "string",
  "draft": true,
  "async": true,
  "functions": {},
  "edge_functions": {},
  "server": {
    "sha": "string",
    "region": "string",
    "instance_size": "small",
    "routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string",
        "methods": [
          "GET"
        ],
        "prefer_static": true
      }
    ],
    "excluded_routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string"
      }
    ],
    "runtime_version": "string"
  },
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_config": {
    "property1": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    },
    "property2": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    }
  },
  "branch": "string",
  "framework": "string",
  "framework_version": "string",
  "environment": [
    {
      "key": "string",
      "value": "string",
      "is_secret": true,
      "scopes": [
        "builds"
      ]
    }
  ]
}
```

<h3 id="create-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|title|query|string|false|none|
|site_id|path|string|true|none|
|deploy-previews|query|boolean|false|none|
|production|query|boolean|false|none|
|state|query|string|false|none|
|branch|query|string|false|none|
|latest-published|query|boolean|false|none|
|body|body|[deployFiles](#schemadeployfiles)|true|none|
|» files|body|object|false|A hash mapping file paths to SHA1 digests of the file contents.|
|» zip|body|string(binary)|false|A zip file containing the site files to deploy. Alternative to 'files'.<br>To use this field, set Content-Type to 'application/json' and include the zip content here.<br>Alternatively, you can set Content-Type to 'application/zip' and send the zip as the raw request body (not as JSON).<br>|
|» draft|body|boolean|false|none|
|» async|body|boolean|false|none|
|» functions|body|object|false|none|
|» edge_functions|body|object|false|A hash mapping edge-function bundle formats to the code_sha of each bundle. The<br>response's required_edge_functions lists which of these still need to be uploaded.<br>|
|» server|body|object|false|The deploy's Netlify Server. A deploy has at most one. The response's<br>required_server says whether it still needs to be uploaded.<br>|
|» » sha|body|string|true|The SHA256 digest of the server bundle.|
|» » region|body|string|false|Where the server runs. Defaults to the region configured at the site level<br>when absent.<br>|
|» » instance_size|body|string|false|The size of the instances the server runs on. A default size is used when<br>absent.<br>|
|» » routes|body|[[functionRoute](#schemafunctionroute)]|false|The paths the server handles.|
|» » excluded_routes|body|[[excludedFunctionRoute](#schemaexcludedfunctionroute)]|false|Paths within `routes` that the server does not handle.|
|» » runtime_version|body|string|false|The runtime version the server was built for, such as `nodejs24.x`. A<br>default version is used when absent.<br>|
|» function_schedules|body|[[functionSchedule](#schemafunctionschedule)]|false|none|
|» functions_config|body|object|false|none|
|» » **additionalProperties**|body|[functionConfig](#schemafunctionconfig)|false|none|
|» branch|body|string|false|none|
|» framework|body|string|false|none|
|» framework_version|body|string|false|none|
|» environment|body|[[deployEnvironmentVariable](#schemadeployenvironmentvariable)]|false|A list of deploy-specific environment variable data. Data specified this way applies only<br>to this specific deploy and is merged into any existing environment variables set on the<br>account and site.<br><br>Deploy-specific environment variable data takes precedence over account and site<br>environment variable data: For example, a deploy-specific variable with the key `NODE_ENV`<br>will take priority over any existing site- and account-level environment variable data<br>with the key `NODE_ENV`.<br><br>Environment variable data may be provided at one of two times:<br><br>- When creating a new Deploy with deploy files (most common)<br>- When finalizing an existing Deploy with deploy files<br><br>Once set, environment variables for a specific deploy cannot be modified. Subsequent<br>attempts to modify environment variable data for a deploy will be ignored.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|new|
|state|pending_review|
|state|accepted|
|state|rejected|
|state|enqueued|
|state|building|
|state|uploading|
|state|uploaded|
|state|preparing|
|state|prepared|
|state|processing|
|state|processed|
|state|ready|
|state|error|
|state|retrying|
|» » instance_size|small|
|» » instance_size|medium|
|» » instance_size|large|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a site's deploy

<a id="opIdgetSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/deploys/{deploy_id}`

<h3 id="get-a-sites-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|deploy_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-sites-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a deploy

<a id="opIdupdateSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "files": {},
    "zip": "string",
    "draft": true,
    "async": true,
    "functions": {},
    "edge_functions": {},
    "server": {
      "sha": "string",
      "region": "string",
      "instance_size": "small",
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "runtime_version": "string"
    },
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_config": {
      "property1": {
        "display_name": "string",
        "generator": "string",
        "build_data": {},
        "memory": 0,
        "routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string",
            "methods": [
              "GET"
            ],
            "prefer_static": true
          }
        ],
        "excluded_routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string"
          }
        ],
        "priority": 0,
        "region": "string",
        "traffic_rules": {
          "action": {
            "type": "string",
            "config": {
              "to": "string",
              "rate_limit_config": {
                "algorithm": "sliding_window",
                "window_size": 0,
                "window_limit": 0
              },
              "aggregate": {
                "keys": [
                  {
                    "type": "ip"
                  }
                ]
              }
            }
          }
        },
        "vcpu": 0,
        "event_subscriptions": [
          "string"
        ]
      },
      "property2": {
        "display_name": "string",
        "generator": "string",
        "build_data": {},
        "memory": 0,
        "routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string",
            "methods": [
              "GET"
            ],
            "prefer_static": true
          }
        ],
        "excluded_routes": [
          {
            "pattern": "string",
            "literal": "string",
            "expression": "string"
          }
        ],
        "priority": 0,
        "region": "string",
        "traffic_rules": {
          "action": {
            "type": "string",
            "config": {
              "to": "string",
              "rate_limit_config": {
                "algorithm": "sliding_window",
                "window_size": 0,
                "window_limit": 0
              },
              "aggregate": {
                "keys": [
                  {
                    "type": "ip"
                  }
                ]
              }
            }
          }
        },
        "vcpu": 0,
        "event_subscriptions": [
          "string"
        ]
      }
    },
    "branch": "string",
    "framework": "string",
    "framework_version": "string",
    "environment": [
      {
        "key": "string",
        "value": "string",
        "is_secret": true,
        "scopes": [
          "builds"
        ]
      }
    ]
  }'
```

`PUT /sites/{site_id}/deploys/{deploy_id}`

> Body parameter

```json
{
  "files": {},
  "zip": "string",
  "draft": true,
  "async": true,
  "functions": {},
  "edge_functions": {},
  "server": {
    "sha": "string",
    "region": "string",
    "instance_size": "small",
    "routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string",
        "methods": [
          "GET"
        ],
        "prefer_static": true
      }
    ],
    "excluded_routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string"
      }
    ],
    "runtime_version": "string"
  },
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_config": {
    "property1": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    },
    "property2": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    }
  },
  "branch": "string",
  "framework": "string",
  "framework_version": "string",
  "environment": [
    {
      "key": "string",
      "value": "string",
      "is_secret": true,
      "scopes": [
        "builds"
      ]
    }
  ]
}
```

<h3 id="update-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|deploy_id|path|string|true|none|
|commit_ref|query|string|false|none|
|body|body|[deployFiles](#schemadeployfiles)|true|none|
|» files|body|object|false|A hash mapping file paths to SHA1 digests of the file contents.|
|» zip|body|string(binary)|false|A zip file containing the site files to deploy. Alternative to 'files'.<br>To use this field, set Content-Type to 'application/json' and include the zip content here.<br>Alternatively, you can set Content-Type to 'application/zip' and send the zip as the raw request body (not as JSON).<br>|
|» draft|body|boolean|false|none|
|» async|body|boolean|false|none|
|» functions|body|object|false|none|
|» edge_functions|body|object|false|A hash mapping edge-function bundle formats to the code_sha of each bundle. The<br>response's required_edge_functions lists which of these still need to be uploaded.<br>|
|» server|body|object|false|The deploy's Netlify Server. A deploy has at most one. The response's<br>required_server says whether it still needs to be uploaded.<br>|
|» » sha|body|string|true|The SHA256 digest of the server bundle.|
|» » region|body|string|false|Where the server runs. Defaults to the region configured at the site level<br>when absent.<br>|
|» » instance_size|body|string|false|The size of the instances the server runs on. A default size is used when<br>absent.<br>|
|» » routes|body|[[functionRoute](#schemafunctionroute)]|false|The paths the server handles.|
|» » excluded_routes|body|[[excludedFunctionRoute](#schemaexcludedfunctionroute)]|false|Paths within `routes` that the server does not handle.|
|» » runtime_version|body|string|false|The runtime version the server was built for, such as `nodejs24.x`. A<br>default version is used when absent.<br>|
|» function_schedules|body|[[functionSchedule](#schemafunctionschedule)]|false|none|
|» functions_config|body|object|false|none|
|» » **additionalProperties**|body|[functionConfig](#schemafunctionconfig)|false|none|
|» branch|body|string|false|none|
|» framework|body|string|false|none|
|» framework_version|body|string|false|none|
|» environment|body|[[deployEnvironmentVariable](#schemadeployenvironmentvariable)]|false|A list of deploy-specific environment variable data. Data specified this way applies only<br>to this specific deploy and is merged into any existing environment variables set on the<br>account and site.<br><br>Deploy-specific environment variable data takes precedence over account and site<br>environment variable data: For example, a deploy-specific variable with the key `NODE_ENV`<br>will take priority over any existing site- and account-level environment variable data<br>with the key `NODE_ENV`.<br><br>Environment variable data may be provided at one of two times:<br><br>- When creating a new Deploy with deploy files (most common)<br>- When finalizing an existing Deploy with deploy files<br><br>Once set, environment variables for a specific deploy cannot be modified. Subsequent<br>attempts to modify environment variable data for a deploy will be ignored.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » instance_size|small|
|» » instance_size|medium|
|» » instance_size|large|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a site's deploy

<a id="opIddeleteSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/deploys/{deploy_id}`

Marks a deploy for deletion.

<h3 id="delete-a-sites-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-sites-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Cancel a deploy

<a id="opIdcancelSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /deploys/{deploy_id}/cancel`

<h3 id="cancel-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="cancel-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Cancelled|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Restore a previous deploy

<a id="opIdrestoreSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deploys/string/restore \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/deploys/{deploy_id}/restore`

Publishes a previous deploy of the site.

<h3 id="restore-a-previous-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|deploy_id|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="restore-a-previous-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Roll back a site's production deploy

<a id="opIdrollbackSiteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/rollback \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/rollback`

Rolls back the production deploy to the deploy referenced by its `rollback_id`. Does nothing if the current production deploy has no `rollback_id`.

<h3 id="roll-back-a-sites-production-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="roll-back-a-sites-production-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a deploy

<a id="opIdgetDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploys/{deploy_id}`

<h3 id="get-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a deploy

<a id="opIddeleteDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deploys/{deploy_id}`

Marks a deploy for deletion.

<h3 id="delete-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Lock a deploy

<a id="opIdlockDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/lock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /deploys/{deploy_id}/lock`

Locks a deploy so that subsequent deploys are built but not published. If the deploy is not the site's published deploy, locking publishes it first. When publishing is gated, the publish and lock are queued and the API responds with 202 Accepted and the deploy; poll `getDeploy` to follow it.

<h3 id="lock-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="lock-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Unlock a deploy

<a id="opIdunlockDeploy"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/unlock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /deploys/{deploy_id}/unlock`

<h3 id="unlock-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unlock-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deploy](#schemadeploy)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Upload a deploy's Netlify Server bundle

<a id="opIduploadDeployServer"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/server/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /deploys/{deploy_id}/server/{code_sha}`

Uploads the deploy's Netlify Server bundle, addressed by the digest the deploy
declared in its `server` property.


<h3 id="upload-a-deploys-netlify-server-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|
|code_sha|path|string|true|none|
|size|query|integer|false|none|
|X-Nf-Retry-Count|header|integer|false|none|
|body|body|string(binary)|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="upload-a-deploys-netlify-server-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-deployedbranch">deployedBranch</h1>

## List a site's deployed branches

<a id="opIdlistSiteDeployedBranches"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/deployed-branches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/deployed-branches`

<h3 id="list-a-sites-deployed-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "deploy_id": "string",
    "name": "string",
    "slug": "string",
    "url": "string",
    "ssl_url": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-deployed-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-deployed-branches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[deployedBranch](#schemadeployedbranch)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-deploykey">deployKey</h1>

## List deploy keys

<a id="opIdlistDeployKeys"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploy_keys \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploy_keys`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "public_key": "string",
    "created_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-deploy-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-deploy-keys-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[deployKey](#schemadeploykey)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a deploy key

<a id="opIdcreateDeployKey"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploy_keys \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /deploy_keys`

> Example responses

> 201 Response

```json
{
  "id": "string",
  "public_key": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-deploy-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[deployKey](#schemadeploykey)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a deploy key

<a id="opIdgetDeployKey"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploy_keys/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /deploy_keys/{key_id}`

<h3 id="get-a-deploy-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "public_key": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-deploy-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[deployKey](#schemadeploykey)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a deploy key

<a id="opIddeleteDeployKey"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploy_keys/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /deploy_keys/{key_id}`

<h3 id="delete-a-deploy-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-deploy-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Not Content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-build">build</h1>

## List a site's builds

<a id="opIdlistSiteBuilds"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/builds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/builds`

<h3 id="list-a-sites-builds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "deploy_id": "string",
    "sha": "string",
    "done": true,
    "error": "string",
    "created_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-builds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-builds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[build](#schemabuild)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Start a build

<a id="opIdcreateSiteBuild"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/builds \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'zip=@/path/to/file'
```

`POST /sites/{site_id}/builds`

Runs a build for a site. The build will be scheduled to run at the first opportunity, but it might not start immediately if insufficient account build capacity is available.

Files for build can be uploaded as a zipped site using one of these methods:
1. Set Content-Type to 'application/zip' and send the zip file as the raw request body
2. Set Content-Type to 'multipart/form-data' and include the zip file in the 'zip' field


> Body parameter

```yaml
zip: string
```

<h3 id="start-a-build-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch|query|string|false|If no branch is specified, it is treated as a production deploy If a branch IS specified and matches the main branch, it is also production If a branch is specified and doesn't match the main branch, it is a branch deploy|
|clear_cache|query|boolean|false|Whether to clear the build cache before building|
|commit_sha|query|string|false|The commit SHA to build; when omitted, the head of the branch or pull request is fetched from the git host. Ignored for zip uploads|
|draft|query|boolean|false|Whether to create a draft deploy, which uses the deploy-preview context and is never published; review_id builds are always drafts|
|image|query|string|false|The build image tag to use for the build|
|review_id|query|integer|false|The merge/pull request ID to build; triggers a deploy preview. Ignored for zip uploads|
|template_id|query|string|false|The build template to use for the build|
|title|query|string|false|The title of the build|
|site_id|path|string|true|none|
|body|body|object|false|none|
|» zip|body|string(binary)|false|A zip file containing the site files to build.<br>Only used with Content-Type 'multipart/form-data'.<br>Alternatively, set Content-Type to 'application/zip' and send the zip as the raw request body (no 'zip' parameter needed).<br>|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "deploy_id": "string",
  "sha": "string",
  "done": true,
  "error": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="start-a-build-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[build](#schemabuild)|
|400|Bad Request|Bad Request|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a build

<a id="opIdgetSiteBuild"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/builds/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /builds/{build_id}`

<h3 id="get-a-build-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "deploy_id": "string",
  "sha": "string",
  "done": true,
  "error": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-build-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[build](#schemabuild)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Mark a build as started

<a id="opIdnotifyBuildStart"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/builds/string/start \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /builds/{build_id}/start`

<h3 id="mark-a-build-as-started-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build_id|path|string|true|none|
|buildbot_version|query|string|false|none|
|build_version|query|string|false|none|
|task_id|query|string|false|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="mark-a-build-as-started-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a team's build status

<a id="opIdgetAccountBuildStatus"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/string/builds/status \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /{account_id}/builds/status`

Returns the team's counts of active, concurrency-pending, and enqueued builds, and its build minutes usage.

<h3 id="get-a-teams-build-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "active": 0,
    "pending_concurrency": 0,
    "enqueued": 0,
    "build_count": 0,
    "minutes": {
      "current": 0,
      "current_average_sec": 0,
      "previous": 0,
      "period_start_date": "string",
      "period_end_date": "string",
      "last_updated_at": "string",
      "included_minutes": "string",
      "included_minutes_with_packs": "string"
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-teams-build-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="get-a-teams-build-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[buildStatus](#schemabuildstatus)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-buildlogmsg">buildLogMsg</h1>

## Add a message to a build log

<a id="opIdupdateSiteBuildLog"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/builds/string/log \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /builds/{build_id}/log`

<h3 id="add-a-message-to-a-build-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|build_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-a-message-to-a-build-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-hook">hook</h1>

## List a site's outgoing hooks

<a id="opIdlistHooksBySiteId"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/hooks?site_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hooks`

Returns the outgoing hooks for a site. Pass `form_id` or `event` to filter the results.

<h3 id="list-a-sites-outgoing-hooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|query|string|true|none|
|form_id|query|string|false|Only return hooks attached to this form.|
|event|query|string|false|Only return hooks for this event name.|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "type": "string",
    "event": "string",
    "data": {},
    "created_at": "string",
    "updated_at": "string",
    "disabled": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-outgoing-hooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-outgoing-hooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[hook](#schemahook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create an outgoing hook

<a id="opIdcreateHookBySiteId"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/hooks?site_id=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "site_id": "string",
    "type": "string",
    "event": "string",
    "data": {},
    "created_at": "string",
    "updated_at": "string",
    "disabled": true
  }'
```

`POST /hooks`

> Body parameter

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

<h3 id="create-an-outgoing-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|query|string|true|none|
|body|body|[hook](#schemahook)|true|none|
|» id|body|string|false|none|
|» site_id|body|string|false|none|
|» type|body|string|false|none|
|» event|body|string|false|none|
|» data|body|object|false|none|
|» created_at|body|string(dateTime)|false|none|
|» updated_at|body|string(dateTime)|false|none|
|» disabled|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-an-outgoing-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|OK|[hook](#schemahook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an outgoing hook

<a id="opIdgetHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/hooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hooks/{hook_id}`

<h3 id="get-an-outgoing-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-outgoing-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[hook](#schemahook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update an outgoing hook

<a id="opIdupdateHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/hooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "id": "string",
    "site_id": "string",
    "type": "string",
    "event": "string",
    "data": {},
    "created_at": "string",
    "updated_at": "string",
    "disabled": true
  }'
```

`PUT /hooks/{hook_id}`

> Body parameter

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

<h3 id="update-an-outgoing-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|none|
|body|body|[hook](#schemahook)|true|none|
|» id|body|string|false|none|
|» site_id|body|string|false|none|
|» type|body|string|false|none|
|» event|body|string|false|none|
|» data|body|object|false|none|
|» created_at|body|string(dateTime)|false|none|
|» updated_at|body|string(dateTime)|false|none|
|» disabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-an-outgoing-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[hook](#schemahook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete an outgoing hook

<a id="opIddeleteHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/hooks/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /hooks/{hook_id}`

<h3 id="delete-an-outgoing-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|none|

<h3 id="delete-an-outgoing-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Re-enable an outgoing hook

<a id="opIdenableHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/hooks/string/enable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /hooks/{hook_id}/enable`

Re-enables an outgoing hook that was disabled after repeated delivery errors.

<h3 id="re-enable-an-outgoing-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hook_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="re-enable-an-outgoing-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[hook](#schemahook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-hooktype">hookType</h1>

## List outgoing hook types

<a id="opIdlistHookTypes"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/hooks/types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /hooks/types`

Returns the available outgoing hook types. When `site_id` is given, returns only the types available to that site.

<h3 id="list-outgoing-hook-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|query|string|false|Only return the hook types available to this site.|

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "events": [
      "string"
    ],
    "fields": [
      {}
    ]
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-outgoing-hook-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-outgoing-hook-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[hookType](#schemahooktype)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-buildhook">buildHook</h1>

## List a site's build hooks

<a id="opIdlistSiteBuildHooks"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/build_hooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/build_hooks`

<h3 id="list-a-sites-build-hooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "title": "string",
    "branch": "string",
    "url": "string",
    "site_id": "string",
    "created_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-build-hooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-build-hooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[buildHook](#schemabuildhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a build hook

<a id="opIdcreateSiteBuildHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/build_hooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "branch": "string"
  }'
```

`POST /sites/{site_id}/build_hooks`

> Body parameter

```json
{
  "title": "string",
  "branch": "string"
}
```

<h3 id="create-a-build-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[buildHookSetup](#schemabuildhooksetup)|true|none|
|» title|body|string|false|none|
|» branch|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-build-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[buildHook](#schemabuildhook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a build hook

<a id="opIdgetSiteBuildHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/build_hooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/build_hooks/{id}`

<h3 id="get-a-build-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-build-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[buildHook](#schemabuildhook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a build hook

<a id="opIdupdateSiteBuildHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/build_hooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "branch": "string"
  }'
```

`PUT /sites/{site_id}/build_hooks/{id}`

> Body parameter

```json
{
  "title": "string",
  "branch": "string"
}
```

<h3 id="update-a-build-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|
|body|body|[buildHookSetup](#schemabuildhooksetup)|true|none|
|» title|body|string|false|none|
|» branch|body|string|false|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-build-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a build hook

<a id="opIddeleteSiteBuildHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/build_hooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/build_hooks/{id}`

<h3 id="delete-a-build-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-build-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-service">service</h1>

## List add-on services

<a id="opIdgetServices"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/services/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/`

<h3 id="list-add-on-services-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "slug": "string",
    "service_path": "string",
    "long_description": "string",
    "description": "string",
    "events": [
      {}
    ],
    "tags": [
      "string"
    ],
    "icon": "string",
    "manifest_url": "string",
    "environments": [
      "string"
    ],
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-add-on-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|services|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-add-on-services-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[service](#schemaservice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an add-on service

<a id="opIdshowService"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/services/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/{addonName}`

<h3 id="get-an-add-on-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonName|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "service_path": "string",
  "long_description": "string",
  "description": "string",
  "events": [
    {}
  ],
  "tags": [
    "string"
  ],
  "icon": "string",
  "manifest_url": "string",
  "environments": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-add-on-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|services|[service](#schemaservice)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an add-on service's manifest

<a id="opIdshowServiceManifest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/services/string/manifest \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /services/{addonName}/manifest`

<h3 id="get-an-add-on-services-manifest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|addonName|path|string|true|none|

> Example responses

> 201 Response

```json
{}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-add-on-services-manifest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|retrieving from provider|Inline|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-serviceinstance">serviceInstance</h1>

## List a site's add-on instances

<a id="opIdlistServiceInstancesForSite"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/service-instances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/service-instances`

<h3 id="list-a-sites-add-on-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "url": "string",
    "config": {},
    "external_attributes": {},
    "service_slug": "string",
    "service_path": "string",
    "service_name": "string",
    "env": {},
    "snippets": [
      {}
    ],
    "auth_url": "string",
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-add-on-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-add-on-instances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[serviceInstance](#schemaserviceinstance)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create an add-on instance

<a id="opIdcreateServiceInstance"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/services/string/instances \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /sites/{site_id}/services/{addon}/instances`

> Body parameter

```json
{}
```

<h3 id="create-an-add-on-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|addon|path|string|true|none|
|body|body|object|true|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "url": "string",
  "config": {},
  "external_attributes": {},
  "service_slug": "string",
  "service_path": "string",
  "service_name": "string",
  "env": {},
  "snippets": [
    {}
  ],
  "auth_url": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-an-add-on-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[serviceInstance](#schemaserviceinstance)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an add-on instance

<a id="opIdshowServiceInstance"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/services/string/instances/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/services/{addon}/instances/{instance_id}`

<h3 id="get-an-add-on-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|addon|path|string|true|none|
|instance_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "url": "string",
  "config": {},
  "external_attributes": {},
  "service_slug": "string",
  "service_path": "string",
  "service_name": "string",
  "env": {},
  "snippets": [
    {}
  ],
  "auth_url": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-add-on-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[serviceInstance](#schemaserviceinstance)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update an add-on instance

<a id="opIdupdateServiceInstance"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/services/string/instances/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PUT /sites/{site_id}/services/{addon}/instances/{instance_id}`

> Body parameter

```json
{}
```

<h3 id="update-an-add-on-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|addon|path|string|true|none|
|instance_id|path|string|true|none|
|body|body|object|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-an-add-on-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete an add-on instance

<a id="opIddeleteServiceInstance"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/services/string/instances/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/services/{addon}/instances/{instance_id}`

<h3 id="delete-an-add-on-instance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|addon|path|string|true|none|
|instance_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-an-add-on-instance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-function">function</h1>

## Search a site's functions

<a id="opIdsearchSiteFunctions"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/functions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/functions`

<h3 id="search-a-sites-functions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|filter|query|string|false|none|

> Example responses

> 200 Response

```json
[
  {
    "branch": "string",
    "created_at": "string",
    "functions": [
      {}
    ],
    "id": "string",
    "log_type": "string",
    "provider": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="search-a-sites-functions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="search-a-sites-functions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[siteFunction](#schemasitefunction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Upload a deploy function

<a id="opIduploadDeployFunction"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/functions/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /deploys/{deploy_id}/functions/{name}`

<h3 id="upload-a-deploy-function-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|
|name|path|string|true|none|
|runtime|query|string|false|none|
|invocation_mode|query|string|false|none|
|timeout|query|integer|false|none|
|size|query|integer|false|none|
|X-Nf-Retry-Count|header|integer|false|none|
|body|body|string(binary)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "sha": "string",
  "region": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="upload-a-deploy-function-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[function](#schemafunction)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-form">form</h1>

## List a site's forms

<a id="opIdlistSiteForms"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/forms \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/forms`

<h3 id="list-a-sites-forms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "name": "string",
    "paths": [
      "string"
    ],
    "submission_count": 0,
    "fields": [
      {}
    ],
    "created_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-forms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-forms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[form](#schemaform)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a form

<a id="opIddeleteSiteForm"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/forms/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/forms/{form_id}`

Deletes a form and all of its submissions.

<h3 id="delete-a-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|form_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-submission">submission</h1>

## List a site's form submissions

<a id="opIdlistSiteSubmissions"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/submissions`

<h3 id="list-a-sites-form-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "number": 0,
    "email": "string",
    "name": "string",
    "first_name": "string",
    "last_name": "string",
    "company": "string",
    "summary": "string",
    "body": "string",
    "data": {},
    "created_at": "string",
    "site_url": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-form-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-form-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[submission](#schemasubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List a form's submissions

<a id="opIdlistFormSubmissions"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/forms/string/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /forms/{form_id}/submissions`

<h3 id="list-a-forms-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|form_id|path|string|true|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "number": 0,
    "email": "string",
    "name": "string",
    "first_name": "string",
    "last_name": "string",
    "company": "string",
    "summary": "string",
    "body": "string",
    "data": {},
    "created_at": "string",
    "site_url": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-forms-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-forms-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[submission](#schemasubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a form submission

<a id="opIdlistFormSubmission"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/submissions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /submissions/{submission_id}`

<h3 id="get-a-form-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|submission_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "number": 0,
    "email": "string",
    "name": "string",
    "first_name": "string",
    "last_name": "string",
    "company": "string",
    "summary": "string",
    "body": "string",
    "data": {},
    "created_at": "string",
    "site_url": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-form-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="get-a-form-submission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[submission](#schemasubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a form submission

<a id="opIddeleteSubmission"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/submissions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /submissions/{submission_id}`

<h3 id="delete-a-form-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|submission_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-form-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-splittest">splitTest</h1>

## List a site's split tests

<a id="opIdgetSplitTests"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/traffic_splits`

<h3 id="list-a-sites-split-tests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "name": "string",
    "path": "string",
    "branches": [
      {}
    ],
    "active": true,
    "created_at": "string",
    "updated_at": "string",
    "unpublished_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-split-tests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|split_tests|[splitTests](#schemasplittests)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a split test

<a id="opIdcreateSplitTest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_tests": {}
  }'
```

`POST /sites/{site_id}/traffic_splits`

> Body parameter

```json
{
  "branch_tests": {}
}
```

<h3 id="create-a-split-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[splitTestSetup](#schemasplittestsetup)|true|none|
|» branch_tests|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "site_id": "string",
  "name": "string",
  "path": "string",
  "branches": [
    {}
  ],
  "active": true,
  "created_at": "string",
  "updated_at": "string",
  "unpublished_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-split-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[splitTest](#schemasplittest)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a split test

<a id="opIdgetSplitTest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/traffic_splits/{split_test_id}`

<h3 id="get-a-split-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|split_test_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "name": "string",
  "path": "string",
  "branches": [
    {}
  ],
  "active": true,
  "created_at": "string",
  "updated_at": "string",
  "unpublished_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-split-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|split_test|[splitTest](#schemasplittest)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a split test

<a id="opIdupdateSplitTest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_tests": {}
  }'
```

`PUT /sites/{site_id}/traffic_splits/{split_test_id}`

> Body parameter

```json
{
  "branch_tests": {}
}
```

<h3 id="update-a-split-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|split_test_id|path|string|true|none|
|body|body|[splitTestSetup](#schemasplittestsetup)|true|none|
|» branch_tests|body|object|false|none|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "site_id": "string",
  "name": "string",
  "path": "string",
  "branches": [
    {}
  ],
  "active": true,
  "created_at": "string",
  "updated_at": "string",
  "unpublished_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-split-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[splitTest](#schemasplittest)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Publish a split test

<a id="opIdenableSplitTest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits/string/publish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/traffic_splits/{split_test_id}/publish`

<h3 id="publish-a-split-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|split_test_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="publish-a-split-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|enable|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Unpublish a split test

<a id="opIddisableSplitTest"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/traffic_splits/string/unpublish \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/traffic_splits/{split_test_id}/unpublish`

<h3 id="unpublish-a-split-test-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|split_test_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unpublish-a-split-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|disabled|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-asset">asset</h1>

## List a site's assets

<a id="opIdlistSiteAssets"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/assets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/assets`

_This endpoint is only available to certain sites._

<h3 id="list-a-sites-assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "creator_id": "string",
    "name": "string",
    "state": "string",
    "content_type": "string",
    "url": "string",
    "key": "string",
    "visibility": "string",
    "size": 0,
    "created_at": "string",
    "updated_at": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-assets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[asset](#schemaasset)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a site asset

<a id="opIdcreateSiteAsset"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/sites/string/assets?name=string&size=0&content_type=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/assets`

_This endpoint is only available to certain sites._

<h3 id="create-a-site-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|none|
|size|query|integer(int64)|true|none|
|content_type|query|string|true|none|
|visibility|query|string|false|none|
|site_id|path|string|true|none|

> Example responses

> 201 Response

```json
{
  "form": {
    "url": "string",
    "fields": {
      "property1": "string",
      "property2": "string"
    }
  },
  "asset": {
    "id": "string",
    "site_id": "string",
    "creator_id": "string",
    "name": "string",
    "state": "string",
    "content_type": "string",
    "url": "string",
    "key": "string",
    "visibility": "string",
    "size": 0,
    "created_at": "string",
    "updated_at": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-site-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[assetSignature](#schemaassetsignature)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a site asset

<a id="opIdgetSiteAssetInfo"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/assets/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/assets/{asset_id}`

_This endpoint is only available to certain sites._

<h3 id="get-a-site-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|asset_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "creator_id": "string",
  "name": "string",
  "state": "string",
  "content_type": "string",
  "url": "string",
  "key": "string",
  "visibility": "string",
  "size": 0,
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-site-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[asset](#schemaasset)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a site asset's state

<a id="opIdupdateSiteAsset"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/sites/string/assets/string?state=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /sites/{site_id}/assets/{asset_id}`

_This endpoint is only available to certain sites._

<h3 id="update-a-site-assets-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|true|none|
|site_id|path|string|true|none|
|asset_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "creator_id": "string",
  "name": "string",
  "state": "string",
  "content_type": "string",
  "url": "string",
  "key": "string",
  "visibility": "string",
  "size": 0,
  "created_at": "string",
  "updated_at": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-site-assets-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated|[asset](#schemaasset)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a site asset

<a id="opIddeleteSiteAsset"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/assets/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/assets/{asset_id}`

_This endpoint is only available to certain sites._

<h3 id="delete-a-site-asset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|asset_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-site-asset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-assetpublicsignature">assetPublicSignature</h1>

## Get a site asset's URL

<a id="opIdgetSiteAssetPublicSignature"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/assets/string/public_signature \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/assets/{asset_id}/public_signature`

Returns the URL of the asset. If the asset isn't publicly visible, returns a signed URL. _This endpoint is only available to certain sites._

<h3 id="get-a-site-assets-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|asset_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "url": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-site-assets-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[assetPublicSignature](#schemaassetpublicsignature)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-devserver">devServer</h1>

## List a site's dev servers

<a id="opIdlistSiteDevServers"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_servers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/dev_servers`

<h3 id="list-a-sites-dev-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "branch": "string",
    "url": "string",
    "state": "string",
    "created_at": "string",
    "updated_at": "string",
    "starting_at": "string",
    "error_at": "string",
    "live_at": "string",
    "done_at": "string",
    "title": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-dev-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-dev-servers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[devServer](#schemadevserver)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Start a dev server

<a id="opIdcreateSiteDevServer"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_servers \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /sites/{site_id}/dev_servers`

<h3 id="start-a-dev-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch|query|string|false|none|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "branch": "string",
    "url": "string",
    "state": "string",
    "created_at": "string",
    "updated_at": "string",
    "starting_at": "string",
    "error_at": "string",
    "live_at": "string",
    "done_at": "string",
    "title": "string"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="start-a-dev-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="start-a-dev-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[devServer](#schemadevserver)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Stop a branch's dev servers

<a id="opIddeleteSiteDevServers"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_servers \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/dev_servers`

Stops all dev servers for a branch. Stopping happens in the background.

<h3 id="stop-a-branchs-dev-servers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch|query|string|false|none|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="stop-a-branchs-dev-servers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. The response has no body. The branch's active dev servers are set to `stopping` before this returns and shut down in the background. Poll `getSiteDevServer` (`GET /sites/{site_id}/dev_servers/{dev_server_id}`) or `listSiteDevServers` (`GET /sites/{site_id}/dev_servers`) until `state` is `done` (or `error`).|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a dev server

<a id="opIdgetSiteDevServer"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_servers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/dev_servers/{dev_server_id}`

<h3 id="get-a-dev-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|dev_server_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "branch": "string",
  "url": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "starting_at": "string",
  "error_at": "string",
  "live_at": "string",
  "done_at": "string",
  "title": "string"
}
```

<h3 id="get-a-dev-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[devServer](#schemadevserver)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a dev server's state

<a id="opIdupdateDevServerState"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_servers/string/state \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "state": "starting",
    "task_id": "string",
    "error": "string"
  }'
```

`POST /sites/{site_id}/dev_servers/{dev_server_id}/state`

> Body parameter

```json
{
  "state": "starting",
  "task_id": "string",
  "error": "string"
}
```

<h3 id="update-a-dev-servers-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|dev_server_id|path|string|true|none|
|body|body|object|true|none|
|» state|body|string|true|none|
|» task_id|body|string|false|none|
|» error|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|starting|
|» state|live|
|» state|error|
|» state|done|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "branch": "string",
  "url": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "starting_at": "string",
  "error_at": "string",
  "live_at": "string",
  "done_at": "string",
  "title": "string"
}
```

<h3 id="update-a-dev-servers-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[devServer](#schemadevserver)|
|409|Conflict|Conflict|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-devserverhook">devServerHook</h1>

## List a site's dev server hooks

<a id="opIdlistSiteDevServerHooks"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_server_hooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/dev_server_hooks`

<h3 id="list-a-sites-dev-server-hooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "title": "string",
    "branch": "string",
    "url": "string",
    "site_id": "string",
    "created_at": "string",
    "type": "new_dev_server"
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-dev-server-hooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-dev-server-hooks-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[devServerHook](#schemadevserverhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a dev server hook

<a id="opIdcreateSiteDevServerHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_server_hooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "branch": "string",
    "type": "new_dev_server"
  }'
```

`POST /sites/{site_id}/dev_server_hooks`

> Body parameter

```json
{
  "title": "string",
  "branch": "string",
  "type": "new_dev_server"
}
```

<h3 id="create-a-dev-server-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[devServerHookSetup](#schemadevserverhooksetup)|true|none|
|» title|body|string|false|none|
|» branch|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|new_dev_server|
|» type|content_refresh|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string",
  "type": "new_dev_server"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-dev-server-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[devServerHook](#schemadevserverhook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a dev server hook

<a id="opIdgetSiteDevServerHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_server_hooks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/dev_server_hooks/{id}`

<h3 id="get-a-dev-server-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string",
  "type": "new_dev_server"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-dev-server-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[devServerHook](#schemadevserverhook)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update a dev server hook

<a id="opIdupdateSiteDevServerHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_server_hooks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "title": "string",
    "branch": "string",
    "type": "new_dev_server"
  }'
```

`PUT /sites/{site_id}/dev_server_hooks/{id}`

> Body parameter

```json
{
  "title": "string",
  "branch": "string",
  "type": "new_dev_server"
}
```

<h3 id="update-a-dev-server-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|
|body|body|[devServerHookSetup](#schemadevserverhooksetup)|true|none|
|» title|body|string|false|none|
|» branch|body|string|false|none|
|» type|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|new_dev_server|
|» type|content_refresh|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-a-dev-server-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a dev server hook

<a id="opIddeleteSiteDevServerHook"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/dev_server_hooks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/dev_server_hooks/{id}`

<h3 id="delete-a-dev-server-hook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-dev-server-hook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-agentrunner">agentRunner</h1>

## List a site's agent runs

<a id="opIdlistAgentRunners"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/agent_runners?site_id=string&account_id=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent_runners`

Lists a site's agent runs, most recently active first. Archived runs are left out unless `state` is `archived`.

<h3 id="list-a-sites-agent-runs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|query|string|true|none|
|account_id|query|string|true|none|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|state|query|string|false|Only runs in this state: `new`, `running`, `await_input`, `interrupted`, `error`, `done`, `cancelled` or `archived`.|
|title|query|string|false|none|
|branch|query|string|false|none|
|result_branch|query|string|false|none|
|user_id|query|string|false|Only runs started by this user.|
|from|query|integer|false|Unix timestamp. Only runs created at or after this time.|
|to|query|integer|false|Unix timestamp. Only runs created before this time.|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "site_id": "string",
    "parent_agent_runner_id": "string",
    "state": "string",
    "created_at": "string",
    "updated_at": "string",
    "done_at": "string",
    "title": "string",
    "branch": "string",
    "result_branch": "string",
    "pr_url": "string",
    "pr_branch": "string",
    "pr_state": "string",
    "pr_number": 0,
    "pr_is_being_created": true,
    "pr_error": "string",
    "current_task": "string",
    "result_diff": "string",
    "sha": "string",
    "merge_commit_sha": "string",
    "merge_commit_error": "string",
    "merge_commit_is_being_created": true,
    "base_deploy_id": "string",
    "attached_file_keys": [
      "string"
    ],
    "active_session_created_at": "string",
    "has_result_diff": true,
    "latest_session_deploy_id": "string",
    "latest_session_deploy_url": "string",
    "preview_state": "string",
    "user": {
      "id": "string",
      "full_name": "string",
      "email": "string",
      "avatar_url": "string"
    }
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-a-sites-agent-runs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-a-sites-agent-runs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentRunner](#schemaagentrunner)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Start an agent run

<a id="opIdcreateAgentRunner"></a>

> Code samples

```bash
curl 'https://api.netlify.com/api/v1/agent_runners?site_id=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /agent_runners`

<h3 id="start-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|query|string|true|none|
|deploy_id|query|string|false|none|
|branch|query|string|false|none|
|prompt|query|string|false|none|
|agent|query|string|false|none|
|model|query|string|false|none|
|parent_agent_runner_id|query|string|false|none|
|dev_server_image|query|string|false|none|
|file_keys|query|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "parent_agent_runner_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "title": "string",
  "branch": "string",
  "result_branch": "string",
  "pr_url": "string",
  "pr_branch": "string",
  "pr_state": "string",
  "pr_number": 0,
  "pr_is_being_created": true,
  "pr_error": "string",
  "current_task": "string",
  "result_diff": "string",
  "sha": "string",
  "merge_commit_sha": "string",
  "merge_commit_error": "string",
  "merge_commit_is_being_created": true,
  "base_deploy_id": "string",
  "attached_file_keys": [
    "string"
  ],
  "active_session_created_at": "string",
  "has_result_diff": true,
  "latest_session_deploy_id": "string",
  "latest_session_deploy_url": "string",
  "preview_state": "string",
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="start-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunner](#schemaagentrunner)|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Start an agent run on a site

<a id="opIdcreateSiteAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/agent_runners \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prompt": "string",
    "branch": "string",
    "deploy_id": "string",
    "agent": "string",
    "model": "string",
    "effort": "low",
    "mode": "normal"
  }'
```

`POST /sites/{site_id}/agent_runners`

Starts an agent run on the site.

> Body parameter

```json
{
  "prompt": "string",
  "branch": "string",
  "deploy_id": "string",
  "agent": "string",
  "model": "string",
  "effort": "low",
  "mode": "normal"
}
```

<h3 id="start-an-agent-run-on-a-site-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|The site's ID or one of its hostnames.|
|body|body|[agentRunnerSetup](#schemaagentrunnersetup)|true|none|
|» prompt|body|string|true|none|
|» branch|body|string|false|Branch to start from. Defaults to the site's production branch.|
|» deploy_id|body|string|false|Deploy to start from. Takes precedence over `branch`.|
|» agent|body|string|false|Agent to run, for example `claude` or `codex`.|
|» model|body|string|false|Model for the agent to use. Omit to let Netlify choose.|
|» effort|body|string|false|Reasoning effort. Omit to let the agent decide.|
|» mode|body|string|false|`normal` (the default) changes code; `ask` answers questions without changing code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» effort|low|
|» effort|medium|
|» effort|high|
|» mode|normal|
|» mode|ask|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "parent_agent_runner_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "title": "string",
  "branch": "string",
  "result_branch": "string",
  "pr_url": "string",
  "pr_branch": "string",
  "pr_state": "string",
  "pr_number": 0,
  "pr_is_being_created": true,
  "pr_error": "string",
  "current_task": "string",
  "result_diff": "string",
  "sha": "string",
  "merge_commit_sha": "string",
  "merge_commit_error": "string",
  "merge_commit_is_being_created": true,
  "base_deploy_id": "string",
  "attached_file_keys": [
    "string"
  ],
  "active_session_created_at": "string",
  "has_result_diff": true,
  "latest_session_deploy_id": "string",
  "latest_session_deploy_url": "string",
  "preview_state": "string",
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="start-an-agent-run-on-a-site-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunner](#schemaagentrunner)|
|400|Bad Request|`prompt_required` or `invalid_request`.|[agentRunnerError](#schemaagentrunnererror)|
|403|Forbidden|`plan_not_eligible` or `ai_credit_limit_disabled`.|[agentRunnerError](#schemaagentrunnererror)|
|404|Not Found|The site or deploy wasn't found (`deploy_not_found`), the deploy's files are no longer available (`deploy_zip_unavailable`), or agent runners aren't enabled for the site.|[agentRunnerError](#schemaagentrunnererror)|
|422|Unprocessable Entity|`deploy_zip_unavailable`.|[agentRunnerError](#schemaagentrunnererror)|
|429|Too Many Requests|`concurrency_limit_reached`, `ai_credit_limit_exceeded` or `ai_credit_limit_reached`.|[agentRunnerError](#schemaagentrunnererror)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an agent run

<a id="opIdgetAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent_runners/{agent_runner_id}`

<h3 id="get-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "parent_agent_runner_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "title": "string",
  "branch": "string",
  "result_branch": "string",
  "pr_url": "string",
  "pr_branch": "string",
  "pr_state": "string",
  "pr_number": 0,
  "pr_is_being_created": true,
  "pr_error": "string",
  "current_task": "string",
  "result_diff": "string",
  "sha": "string",
  "merge_commit_sha": "string",
  "merge_commit_error": "string",
  "merge_commit_is_being_created": true,
  "base_deploy_id": "string",
  "attached_file_keys": [
    "string"
  ],
  "active_session_created_at": "string",
  "has_result_diff": true,
  "latest_session_deploy_id": "string",
  "latest_session_deploy_url": "string",
  "preview_state": "string",
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunner](#schemaagentrunner)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update an agent run

<a id="opIdupdateAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /agent_runners/{agent_runner_id}`

<h3 id="update-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "site_id": "string",
  "parent_agent_runner_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "title": "string",
  "branch": "string",
  "result_branch": "string",
  "pr_url": "string",
  "pr_branch": "string",
  "pr_state": "string",
  "pr_number": 0,
  "pr_is_being_created": true,
  "pr_error": "string",
  "current_task": "string",
  "result_diff": "string",
  "sha": "string",
  "merge_commit_sha": "string",
  "merge_commit_error": "string",
  "merge_commit_is_being_created": true,
  "base_deploy_id": "string",
  "attached_file_keys": [
    "string"
  ],
  "active_session_created_at": "string",
  "has_result_diff": true,
  "latest_session_deploy_id": "string",
  "latest_session_deploy_url": "string",
  "preview_state": "string",
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunner](#schemaagentrunner)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Stop an agent run

<a id="opIdstopAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /agent_runners/{agent_runner_id}/stop`

Stops the run's active session. Stopping happens in the background.

<h3 id="stop-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="stop-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. The response has no body. The run's active sessions are set to `cancelled` before this returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an agent run's diff

<a id="opIdgetAgentRunnerDiff"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/diff \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent_runners/{agent_runner_id}/diff`

Returns the run's changes as a unified diff. With `page`, returns that page of changed files and sets pagination headers.

<h3 id="get-an-agent-runs-diff-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|strip_binary|query|boolean|false|Replace binary file contents with a placeholder, keeping the file headers.|
|agent_runner_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-agent-runs-diff-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|The run has no changes.|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Archive an agent run

<a id="opIdarchiveAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /agent_runners/{agent_runner_id}/archive`

<h3 id="archive-an-agent-run-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="archive-an-agent-run-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. The response has no body. The archive is applied before this returns: `getAgentRunner` (`GET /agent_runners/{agent_runner_id}`) reports `state` as `archived`.|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-agentrunnersession">agentRunnerSession</h1>

## List an agent run's sessions

<a id="opIdlistAgentRunnerSessions"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent_runners/{agent_runner_id}/sessions`

<h3 id="list-an-agent-runs-sessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|none|
|per_page|query|integer(int32)|false|none|
|state|query|string|false|Only sessions in this state: `new`, `running`, `await_input`, `interrupted`, `error`, `done` or `cancelled`.|
|from|query|integer|false|Unix timestamp. Only sessions created at or after this time.|
|to|query|integer|false|Unix timestamp. Only sessions created before this time.|
|order_by|query|string|false|none|
|agent_runner_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order_by|asc|
|order_by|desc|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "agent_runner_id": "string",
    "dev_server_id": "string",
    "state": "string",
    "created_at": "string",
    "updated_at": "string",
    "done_at": "string",
    "paused_at": "string",
    "title": "string",
    "prompt": "string",
    "agent_config": {
      "agent": "string",
      "model": "string"
    },
    "result": "string",
    "result_diff": "string",
    "commit_sha": "string",
    "deploy_id": "string",
    "deploy_url": "string",
    "duration": 0,
    "usage": {
      "total_input_tokens": 0,
      "total_output_tokens": 0,
      "total_cached_input_tokens": 0,
      "total_cached_output_tokens": 0,
      "total_tokens": 0,
      "total_credits_cost": 0
    },
    "interactions": {
      "property1": {
        "type": "string",
        "status": "string",
        "payload": null,
        "response": [
          null
        ]
      },
      "property2": {
        "type": "string",
        "status": "string",
        "payload": null,
        "response": [
          null
        ]
      }
    },
    "steps": [
      {
        "title": "string",
        "message": "string"
      }
    ],
    "user": {
      "id": "string",
      "full_name": "string",
      "email": "string",
      "avatar_url": "string"
    },
    "attached_file_keys": [
      "string"
    ],
    "result_zip_file_name": "string",
    "is_published": true
  }
]
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-an-agent-runs-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-an-agent-runs-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[agentRunnerSession](#schemaagentrunnersession)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Start a follow-up agent run session

<a id="opIdcreateAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "prompt": "string",
    "agent": "string",
    "model": "string",
    "mode": "normal"
  }'
```

`POST /agent_runners/{agent_runner_id}/sessions`

Starts a follow-up session on the run.

> Body parameter

```json
{
  "prompt": "string",
  "agent": "string",
  "model": "string",
  "mode": "normal"
}
```

<h3 id="start-a-follow-up-agent-run-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prompt|query|string|false|Use the request body instead.|
|agent|query|string|false|Use the request body instead.|
|model|query|string|false|Use the request body instead.|
|file_keys|query|[string]|false|Use the request body instead.|
|agent_runner_id|path|string|true|none|
|body|body|[agentRunnerSessionSetup](#schemaagentrunnersessionsetup)|false|none|
|» prompt|body|string|false|What the agent should do. Required.|
|» agent|body|string|false|none|
|» model|body|string|false|Model for the agent to use. Omit to let Netlify choose.|
|» mode|body|string|false|`normal` (the default) changes code; `ask` answers questions without changing code.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|normal|
|» mode|ask|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "agent_runner_id": "string",
  "dev_server_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "paused_at": "string",
  "title": "string",
  "prompt": "string",
  "agent_config": {
    "agent": "string",
    "model": "string"
  },
  "result": "string",
  "result_diff": "string",
  "commit_sha": "string",
  "deploy_id": "string",
  "deploy_url": "string",
  "duration": 0,
  "usage": {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_cached_input_tokens": 0,
    "total_cached_output_tokens": 0,
    "total_tokens": 0,
    "total_credits_cost": 0
  },
  "interactions": {
    "property1": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    },
    "property2": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    }
  },
  "steps": [
    {
      "title": "string",
      "message": "string"
    }
  ],
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  },
  "attached_file_keys": [
    "string"
  ],
  "result_zip_file_name": "string",
  "is_published": true
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 403 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 404 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 409 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="start-a-follow-up-agent-run-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunnerSession](#schemaagentrunnersession)|
|400|Bad Request|`prompt_required` or `invalid_request`.|[agentRunnerError](#schemaagentrunnererror)|
|403|Forbidden|`plan_not_eligible` or `ai_credit_limit_disabled`.|[agentRunnerError](#schemaagentrunnererror)|
|404|Not Found|Not Found|[agentRunnerError](#schemaagentrunnererror)|
|409|Conflict|`active_session_exists` while a session is still running, or `follow_up_unavailable` once the run is publishing or published.|[agentRunnerError](#schemaagentrunnererror)|
|422|Unprocessable Entity|`deploy_zip_unavailable`.|[agentRunnerError](#schemaagentrunnererror)|
|429|Too Many Requests|`concurrency_limit_reached`, `ai_credit_limit_exceeded` or `ai_credit_limit_reached`.|[agentRunnerError](#schemaagentrunnererror)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get an agent run session

<a id="opIdgetAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`

<h3 id="get-an-agent-run-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|
|agent_runner_session_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "agent_runner_id": "string",
  "dev_server_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "paused_at": "string",
  "title": "string",
  "prompt": "string",
  "agent_config": {
    "agent": "string",
    "model": "string"
  },
  "result": "string",
  "result_diff": "string",
  "commit_sha": "string",
  "deploy_id": "string",
  "deploy_url": "string",
  "duration": 0,
  "usage": {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_cached_input_tokens": 0,
    "total_cached_output_tokens": 0,
    "total_tokens": 0,
    "total_credits_cost": 0
  },
  "interactions": {
    "property1": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    },
    "property2": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    }
  },
  "steps": [
    {
      "title": "string",
      "message": "string"
    }
  ],
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  },
  "attached_file_keys": [
    "string"
  ],
  "result_zip_file_name": "string",
  "is_published": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-an-agent-run-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunnerSession](#schemaagentrunnersession)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Update an agent run session

<a id="opIdupdateAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions/string \
  -X PATCH \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PATCH /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`

<h3 id="update-an-agent-run-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_published|query|boolean|false|none|
|agent_runner_id|path|string|true|none|
|agent_runner_session_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "agent_runner_id": "string",
  "dev_server_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "paused_at": "string",
  "title": "string",
  "prompt": "string",
  "agent_config": {
    "agent": "string",
    "model": "string"
  },
  "result": "string",
  "result_diff": "string",
  "commit_sha": "string",
  "deploy_id": "string",
  "deploy_url": "string",
  "duration": 0,
  "usage": {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_cached_input_tokens": 0,
    "total_cached_output_tokens": 0,
    "total_tokens": 0,
    "total_credits_cost": 0
  },
  "interactions": {
    "property1": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    },
    "property2": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    }
  },
  "steps": [
    {
      "title": "string",
      "message": "string"
    }
  ],
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  },
  "attached_file_keys": [
    "string"
  ],
  "result_zip_file_name": "string",
  "is_published": true
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-an-agent-run-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunnerSession](#schemaagentrunnersession)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Stop an agent run session

<a id="opIdstopAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions/string/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/stop`

Stops the session. Stopping happens in the background.

<h3 id="stop-an-agent-run-session-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|
|agent_runner_session_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="stop-an-agent-run-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. The response has no body. The session is set to `cancelled` before this returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Answer an agent run session's pending interaction

<a id="opIdanswerAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions/string/answers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "refId": "string",
    "response": [
      null
    ],
    "skipped": true,
    "instruction": "string"
  }'
```

`POST /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/answers`

Answers or skips a pending interaction and resumes the session. A session waiting on an interaction is in the `await_input` state.

> Body parameter

```json
{
  "refId": "string",
  "response": [
    null
  ],
  "skipped": true,
  "instruction": "string"
}
```

<h3 id="answer-an-agent-run-sessions-pending-interaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|
|agent_runner_session_id|path|string|true|none|
|body|body|[agentRunnerSessionAnswer](#schemaagentrunnersessionanswer)|true|none|
|» refId|body|string|true|Key of the pending interaction in the session's `interactions`.|
|» response|body|[object]|false|One entry per question in the interaction's `payload`: a string, an array of strings for a multi-select question, or null to skip that question.|
|» skipped|body|boolean|false|Skip the whole interaction instead of answering it.|
|» instruction|body|string|false|Instruction for the agent when skipping.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "agent_runner_id": "string",
  "dev_server_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "paused_at": "string",
  "title": "string",
  "prompt": "string",
  "agent_config": {
    "agent": "string",
    "model": "string"
  },
  "result": "string",
  "result_diff": "string",
  "commit_sha": "string",
  "deploy_id": "string",
  "deploy_url": "string",
  "duration": 0,
  "usage": {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_cached_input_tokens": 0,
    "total_cached_output_tokens": 0,
    "total_tokens": 0,
    "total_credits_cost": 0
  },
  "interactions": {
    "property1": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    },
    "property2": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    }
  },
  "steps": [
    {
      "title": "string",
      "message": "string"
    }
  ],
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  },
  "attached_file_keys": [
    "string"
  ],
  "result_zip_file_name": "string",
  "is_published": true
}
```

> 400 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 422 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> 429 Response

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="answer-an-agent-run-sessions-pending-interaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[agentRunnerSession](#schemaagentrunnersession)|
|400|Bad Request|`ref_id_required`, `invalid_response`, or `interaction_can_only_be_skipped` when answering an `authorization` or `setup_request` interaction.|[agentRunnerError](#schemaagentrunnererror)|
|422|Unprocessable Entity|`interaction_not_found` or `interaction_not_pending`.|[agentRunnerError](#schemaagentrunnererror)|
|429|Too Many Requests|`concurrency_limit_reached`.|[agentRunnerError](#schemaagentrunnererror)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-database">database</h1>

## Get a site database

<a id="opIdgetSiteDatabase"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database`

Returns the database connection string for the specified site.

<h3 id="get-a-site-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|The database role to use for the connection string. Defaults to netlifydb_owner if not specified.|
|site_id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|netlifydb_owner|
|role|netlifydb_readonly|

> Example responses

> 200 Response

```json
{
  "connection_string": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-site-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseResponse](#schemadatabaseresponse)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a site database

<a id="opIdcreateSiteDatabase"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "region": "string"
  }'
```

`POST /sites/{site_id}/database`

Creates a new database for the specified site. If a database already exists, returns the existing connection string. The database region defaults to the site's functions region if not specified.

> Body parameter

```json
{
  "region": "string"
}
```

<h3 id="create-a-site-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[createDatabaseRequest](#schemacreatedatabaserequest)|false|none|
|» region|body|string|false|The region where the database should be created. Defaults to the site's functions region if not specified.|

> Example responses

> 200 Response

```json
{
  "connection_string": "string"
}
```

> 201 Response

```json
{
  "connection_string": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-site-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Database already exists|[databaseResponse](#schemadatabaseresponse)|
|201|Created|Created|[databaseResponse](#schemadatabaseresponse)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a site database

<a id="opIddeleteSiteDatabase"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/database`

Deletes the database and all associated branches and snapshots for the specified site.

<h3 id="delete-a-site-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-site-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a database branch

<a id="opIdcreateSiteDatabaseBranch"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "parent_branch_id": "string",
    "branch_id": "string",
    "metadata": {}
  }'
```

`POST /sites/{site_id}/database/branch`

Creates a new database branch. If a branch already exists for the specified branch ID, returns the existing connection string.

> Body parameter

```json
{
  "parent_branch_id": "string",
  "branch_id": "string",
  "metadata": {}
}
```

<h3 id="create-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[createDatabaseBranchRequest](#schemacreatedatabasebranchrequest)|true|none|
|» parent_branch_id|body|string|false|The ID of the parent branch to create the new branch from. Defaults to the production branch if not specified.|
|» branch_id|body|string|true|The branch identifier|
|» metadata|body|object|false|Arbitrary metadata to associate with the branch|

> Example responses

> 200 Response

```json
{
  "connection_string": "string",
  "metadata": {}
}
```

> 201 Response

```json
{
  "connection_string": "string",
  "metadata": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Branch already exists|[databaseBranchResponse](#schemadatabasebranchresponse)|
|201|Created|Created|[databaseBranchResponse](#schemadatabasebranchresponse)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List database branches

<a id="opIdlistSiteDatabaseBranches"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/branches`

Returns all branches for the site's database with compute status and metadata.

<h3 id="list-database-branches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "branches": [
    {
      "branch_id": "string",
      "name": "string",
      "connection_string": "string",
      "state": "init",
      "logical_size_bytes": 0,
      "created_at": "string",
      "updated_at": "string",
      "last_active_at": "string",
      "compute": {
        "current_state": "active",
        "autoscaling_limit_min_cu": 0,
        "autoscaling_limit_max_cu": 0,
        "suspend_timeout_seconds": 0,
        "last_active": "string"
      },
      "metadata": {}
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-database-branches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseBranchesResponse](#schemadatabasebranchesresponse)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a database branch

<a id="opIdgetSiteDatabaseBranch"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branch/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/branch/{branch_id}`

Returns the database branch connection string for a specific branch.

<h3 id="get-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|The database role to use for the connection string. Defaults to netlifydb_owner if not specified.|
|site_id|path|string|true|none|
|branch_id|path|string|true|The branch ID|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|netlifydb_owner|
|role|netlifydb_readonly|

> Example responses

> 200 Response

```json
{
  "connection_string": "string",
  "metadata": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseBranchResponse](#schemadatabasebranchresponse)|
|404|Not Found|Branch not found|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a database branch

<a id="opIddeleteSiteDatabaseBranch"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branch/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/database/branch/{branch_id}`

Deletes a database branch.

<h3 id="delete-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|branch_id|path|string|true|The branch ID|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Reset a database branch

<a id="opIdresetSiteDatabaseBranch"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branch/string/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "source_branch_id": "string"
  }'
```

`POST /sites/{site_id}/database/branch/{branch_id}/reset`

Resets a non-production database branch by re-forking it from a source branch (defaults to the production branch). If the target branch is already in sync with the source, returns the existing connection string without performing a reset, unless `force=true` is passed. The production branch cannot be reset.

> Body parameter

```json
{
  "source_branch_id": "string"
}
```

<h3 id="reset-a-database-branch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|If true, resets the branch even when it is already in sync with the source.|
|role|query|string|false|The database role to use for the returned connection string. Defaults to netlifydb_owner if not specified.|
|site_id|path|string|true|none|
|branch_id|path|string|true|The branch ID to reset|
|body|body|[resetDatabaseBranchRequest](#schemaresetdatabasebranchrequest)|false|none|
|» source_branch_id|body|string|false|The ID of the branch to re-fork the target branch from. Defaults to "production" if not specified.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|netlifydb_owner|
|role|netlifydb_readonly|

> Example responses

> 200 Response

```json
{
  "reset": true,
  "connection_string": "string",
  "metadata": {}
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="reset-a-database-branch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[resetDatabaseBranchResponse](#schemaresetdatabasebranchresponse)|
|400|Bad Request|Invalid request — for example, the target is the production branch or the source branch is the same as the target.|None|
|404|Not Found|Database or branch not found|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Set a database branch's compute settings

<a id="opIdsetSiteDatabaseBranchComputeSettings"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/branch/string/compute/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "min_cu": 0.25,
    "max_cu": 0.25,
    "sleep_timeout_seconds": -1
  }'
```

`PUT /sites/{site_id}/database/branch/{branch_id}/compute/settings`

Sets compute settings for a specific database branch, overriding project-level settings. Requires a Pro or higher plan.

> Body parameter

```json
{
  "min_cu": 0.25,
  "max_cu": 0.25,
  "sleep_timeout_seconds": -1
}
```

<h3 id="set-a-database-branchs-compute-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|branch_id|path|string|true|The branch ID|
|body|body|[databaseComputeSettingsRequest](#schemadatabasecomputesettingsrequest)|true|none|
|» min_cu|body|number(double) \| null|false|Minimum compute units (0.25 to 16.0). Must be less than or equal to max_cu.|
|» max_cu|body|number(double) \| null|false|Maximum compute units (0.25 to 16.0). Must be greater than or equal to min_cu. max_cu - min_cu must not exceed 8.0.|
|» sleep_timeout_seconds|body|integer(int64) \| null|false|Seconds of inactivity before the compute endpoint is suspended. Use -1 for always on, or a non-negative value.|

> Example responses

> 200 Response

```json
{
  "min_cu": 0,
  "max_cu": 0,
  "sleep_timeout_seconds": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="set-a-database-branchs-compute-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseComputeSettings](#schemadatabasecomputesettings)|
|403|Forbidden|Compute customization requires a Pro or higher plan|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get database compute settings

<a id="opIdgetSiteDatabaseComputeSettings"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/compute/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/compute/settings`

Returns the project-level compute settings for the database. Returns effective settings (custom or tier defaults). Requires a Pro or higher plan.

<h3 id="get-database-compute-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "min_cu": 0,
  "max_cu": 0,
  "sleep_timeout_seconds": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-database-compute-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseComputeSettings](#schemadatabasecomputesettings)|
|403|Forbidden|Compute customization requires a Pro or higher plan|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Set database compute settings

<a id="opIdsetSiteDatabaseComputeSettings"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/compute/settings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "min_cu": 0.25,
    "max_cu": 0.25,
    "sleep_timeout_seconds": -1
  }'
```

`PUT /sites/{site_id}/database/compute/settings`

Sets project-level compute settings for the database. Applied to new branches. Can be overridden per-branch. Requires a Pro or higher plan.

> Body parameter

```json
{
  "min_cu": 0.25,
  "max_cu": 0.25,
  "sleep_timeout_seconds": -1
}
```

<h3 id="set-database-compute-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[databaseComputeSettingsRequest](#schemadatabasecomputesettingsrequest)|true|none|
|» min_cu|body|number(double) \| null|false|Minimum compute units (0.25 to 16.0). Must be less than or equal to max_cu.|
|» max_cu|body|number(double) \| null|false|Maximum compute units (0.25 to 16.0). Must be greater than or equal to min_cu. max_cu - min_cu must not exceed 8.0.|
|» sleep_timeout_seconds|body|integer(int64) \| null|false|Seconds of inactivity before the compute endpoint is suspended. Use -1 for always on, or a non-negative value.|

> Example responses

> 200 Response

```json
{
  "min_cu": 0,
  "max_cu": 0,
  "sleep_timeout_seconds": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="set-database-compute-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseComputeSettings](#schemadatabasecomputesettings)|
|403|Forbidden|Compute customization requires a Pro or higher plan|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Reset database compute settings to defaults

<a id="opIdclearSiteDatabaseComputeSettings"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/compute/settings \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/database/compute/settings`

Resets project-level compute settings to tier defaults. Requires a Pro or higher plan.

<h3 id="reset-database-compute-settings-to-defaults-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="reset-database-compute-settings-to-defaults-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Cleared|None|
|403|Forbidden|Compute customization requires a Pro or higher plan|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List database migrations

<a id="opIdlistSiteDatabaseMigrations"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/migrations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/migrations`

Returns the list of migrations available for the specified branch, indicating which ones have been applied to the database.

<h3 id="list-database-migrations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch|query|string|false|The branch ID to list migrations for. Defaults to "production" if not specified.|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "migrations": [
    {
      "version": 0,
      "name": "string",
      "path": "string",
      "applied": true
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-database-migrations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[listDatabaseMigrationsResponse](#schemalistdatabasemigrationsresponse)|
|404|Not Found|Database or branch not found|None|
|423|Locked|Database is disabled|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a database migration

<a id="opIdgetSiteDatabaseMigration"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/migrations/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/migrations/{name}`

Returns the contents of a named migration for the specified branch.

<h3 id="get-a-database-migration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|branch|query|string|false|The branch ID to look up the migration on. Defaults to the currently published deploy's branch.|
|site_id|path|string|true|none|
|name|path|string|true|The migration name|

> Example responses

> 200 Response

```json
{
  "version": 0,
  "name": "string",
  "path": "string",
  "content": "string"
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-database-migration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseMigrationDetail](#schemadatabasemigrationdetail)|
|404|Not Found|Migration, database, or branch not found|None|
|423|Locked|Database is disabled|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Run database migrations for a deploy

<a id="opIdrunSiteDatabaseMigrations"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/migrations/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dry_run": true
  }'
```

`POST /sites/{site_id}/database/migrations/{deploy_id}`

Runs database migrations for the specified deploy. Finds the deploy and determines the appropriate branch.

> Body parameter

```json
{
  "dry_run": true
}
```

<h3 id="run-database-migrations-for-a-deploy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|deploy_id|path|string|true|The deploy ID to run migrations for|
|body|body|[runDatabaseMigrationsRequest](#schemarundatabasemigrationsrequest)|false|none|
|» dry_run|body|boolean|false|If true, validates migrations without applying them.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="run-database-migrations-for-a-deploy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|409|Conflict|Migration conflict - migration modified or removed after being applied|None|
|422|Unprocessable Entity|Migration validation failed|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Create a database snapshot

<a id="opIdcreateSiteDatabaseSnapshot"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/snapshot \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_id": "string",
    "name": "string",
    "metadata": {
      "deploy": {},
      "source": "string"
    }
  }'
```

`POST /sites/{site_id}/database/snapshot`

Creates a point-in-time snapshot of a database branch. Defaults to the production branch if no branch name is specified.

> Body parameter

```json
{
  "branch_id": "string",
  "name": "string",
  "metadata": {
    "deploy": {},
    "source": "string"
  }
}
```

<h3 id="create-a-database-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|body|body|[createDatabaseSnapshotRequest](#schemacreatedatabasesnapshotrequest)|false|none|
|» branch_id|body|string|false|The ID of the branch to snapshot. Defaults to "production" if not specified.|
|» name|body|string|false|A name for the snapshot|
|» metadata|body|[databaseSnapshotMetadata](#schemadatabasesnapshotmetadata)|false|Metadata associated with a snapshot|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "source_branch_id": "string",
  "manual": true,
  "created_at": "string",
  "expires_at": "string",
  "timestamp": "string",
  "metadata": {
    "deploy": {},
    "source": "string"
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-database-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|[databaseSnapshot](#schemadatabasesnapshot)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## List database snapshots

<a id="opIdlistSiteDatabaseSnapshots"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/snapshots \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/database/snapshots`

Returns all snapshots for the site's database.

<h3 id="list-database-snapshots-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "snapshots": [
    {
      "id": "string",
      "source_branch_id": "string",
      "manual": true,
      "created_at": "string",
      "expires_at": "string",
      "timestamp": "string",
      "metadata": {
        "deploy": {},
        "source": "string"
      }
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-database-snapshots-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[databaseSnapshotsResponse](#schemadatabasesnapshotsresponse)|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Delete a database snapshot

<a id="opIddeleteSiteDatabaseSnapshot"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/snapshot/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sites/{site_id}/database/snapshot/{snapshot_id}`

Deletes a database snapshot.

<h3 id="delete-a-database-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|snapshot_id|path|string|true|The snapshot ID|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-a-database-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Restore a database snapshot

<a id="opIdrestoreSiteDatabaseSnapshot"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/database/snapshot/string/restore \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branch_id": "string"
  }'
```

`POST /sites/{site_id}/database/snapshot/{snapshot_id}/restore`

Restores a snapshot to a database branch. Defaults to the production branch if no branch_name is specified.

> Body parameter

```json
{
  "branch_id": "string"
}
```

<h3 id="restore-a-database-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|none|
|snapshot_id|path|string|true|The snapshot ID to restore|
|body|body|[restoreDatabaseSnapshotRequest](#schemarestoredatabasesnapshotrequest)|false|none|
|» branch_id|body|string|false|The ID of the branch to restore the snapshot to. Defaults to "production" if not specified.|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="restore-a-database-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-edgefunction">edgeFunction</h1>

## Upload a deploy's edge functions bundle

<a id="opIduploadDeployEdgeFunction"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/deploys/string/edge_functions/string \
  -X PUT \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  --data-binary '@/path/to/file'
```

`PUT /deploys/{deploy_id}/edge_functions/{code_sha}`

<h3 id="upload-a-deploys-edge-functions-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|deploy_id|path|string|true|none|
|code_sha|path|string|true|none|
|X-Nf-Retry-Count|header|integer|false|none|
|body|body|string(binary)|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="upload-a-deploys-edge-functions-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-hiddenagentrunner">hiddenAgentRunner</h1>

## Stop an agent run (alias)

<a id="opIddeleteAgentRunner"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /agent_runners/{agent_runner_id}`

Same as `POST /agent_runners/{agent_runner_id}/stop`. Doesn't delete the run.

<h3 id="stop-an-agent-run-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="stop-an-agent-run-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Same behavior as `stopAgentRunner`: the response has no body, the run's active sessions are set to `cancelled` before it returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Stop an agent run session (alias)

<a id="opIddeleteAgentRunnerSession"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/agent_runners/string/sessions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`

Same as `POST /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}/stop`. Doesn't delete the session.

<h3 id="stop-an-agent-run-session-alias-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|agent_runner_id|path|string|true|none|
|agent_runner_session_id|path|string|true|none|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="stop-an-agent-run-session-alias-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted. Same behavior as `stopAgentRunnerSession`: the response has no body, the session is set to `cancelled` before it returns, and the sandbox shuts down in the background. To confirm, poll `getAgentRunnerSession` (`GET /agent_runners/{agent_runner_id}/sessions/{agent_runner_session_id}`) and check that `state` is `cancelled`.|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

<h1 id="netlifys-api-documentation-aigateway">aiGateway</h1>

## List AI Gateway providers and models

<a id="opIdgetAIGatewayProviders"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/ai-gateway/providers \
  -H 'Accept: application/json'
```

`GET /ai-gateway/providers`

> Example responses

> 200 Response

```json
{
  "providers": {
    "property1": {
      "token_env_var": "string",
      "url_env_var": "string",
      "models": [
        "string"
      ]
    },
    "property2": {
      "token_env_var": "string",
      "url_env_var": "string",
      "models": [
        "string"
      ]
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-ai-gateway-providers-and-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The mapping of providers and supported models|Inline|
|default|Default|error|[error](#schemaerror)|

<h3 id="list-ai-gateway-providers-and-models-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|object|false|none|none|
|» **additionalProperties**|[providerDefinition](#schemaproviderdefinition)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a site's AI Gateway token

<a id="opIdgetAIGatewayToken"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/sites/string/ai-gateway/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sites/{site_id}/ai-gateway/token`

Returns an AI Gateway token for a specific site

<h3 id="get-a-sites-ai-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site_id|path|string|true|The site ID|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "url": "string",
  "expires_at": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-sites-ai-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AI Gateway token for the site|[aiGatewayToken](#schemaaigatewaytoken)|
|404|Not Found|AI Gateway not available for this site|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

## Get a team's AI Gateway token

<a id="opIdgetAccountAIGatewayToken"></a>

> Code samples

```bash
curl https://api.netlify.com/api/v1/accounts/string/ai-gateway/token \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}/ai-gateway/token`

Returns an AI Gateway token scoped to an account

<h3 id="get-a-teams-ai-gateway-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|The account ID|

> Example responses

> 200 Response

```json
{
  "token": "string",
  "url": "string",
  "expires_at": 0
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-teams-ai-gateway-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|AI Gateway token for the account|[aiGatewayToken](#schemaaigatewaytoken)|
|404|Not Found|AI Gateway not available for this account|None|
|default|Default|error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
netlifyAuth
</aside>

# Schemas

<h2 id="tocS_createDatabaseRequest">createDatabaseRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabaserequest"></a>
<a id="schema_createDatabaseRequest"></a>
<a id="tocScreatedatabaserequest"></a>
<a id="tocscreatedatabaserequest"></a>

```json
{
  "region": "string"
}
```

Request body for creating a database

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|region|string|false|none|The region where the database should be created. Defaults to the site's functions region if not specified.|

<h2 id="tocS_databaseResponse">databaseResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabaseresponse"></a>
<a id="schema_databaseResponse"></a>
<a id="tocSdatabaseresponse"></a>
<a id="tocsdatabaseresponse"></a>

```json
{
  "connection_string": "string"
}
```

Response containing the database connection string

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_string|string|false|none|The connection string for the database|

<h2 id="tocS_createDatabaseBranchRequest">createDatabaseBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabasebranchrequest"></a>
<a id="schema_createDatabaseBranchRequest"></a>
<a id="tocScreatedatabasebranchrequest"></a>
<a id="tocscreatedatabasebranchrequest"></a>

```json
{
  "parent_branch_id": "string",
  "branch_id": "string",
  "metadata": {}
}
```

Request body for creating a database branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent_branch_id|string|false|none|The ID of the parent branch to create the new branch from. Defaults to the production branch if not specified.|
|branch_id|string|true|none|The branch identifier|
|metadata|object|false|none|Arbitrary metadata to associate with the branch|

<h2 id="tocS_databaseBranchResponse">databaseBranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasebranchresponse"></a>
<a id="schema_databaseBranchResponse"></a>
<a id="tocSdatabasebranchresponse"></a>
<a id="tocsdatabasebranchresponse"></a>

```json
{
  "connection_string": "string",
  "metadata": {}
}
```

Response containing the database branch connection string

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection_string|string|false|none|The connection string for the database branch|
|metadata|object|false|none|Metadata associated with the branch|

<h2 id="tocS_databaseBranchesResponse">databaseBranchesResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasebranchesresponse"></a>
<a id="schema_databaseBranchesResponse"></a>
<a id="tocSdatabasebranchesresponse"></a>
<a id="tocsdatabasebranchesresponse"></a>

```json
{
  "branches": [
    {
      "branch_id": "string",
      "name": "string",
      "connection_string": "string",
      "state": "init",
      "logical_size_bytes": 0,
      "created_at": "string",
      "updated_at": "string",
      "last_active_at": "string",
      "compute": {
        "current_state": "active",
        "autoscaling_limit_min_cu": 0,
        "autoscaling_limit_max_cu": 0,
        "suspend_timeout_seconds": 0,
        "last_active": "string"
      },
      "metadata": {}
    }
  ]
}
```

Response containing a list of database branches

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branches|[[databaseBranchDetail](#schemadatabasebranchdetail)]|false|none|List of database branches|

<h2 id="tocS_databaseBranchDetail">databaseBranchDetail</h2>
<!-- backwards compatibility -->
<a id="schemadatabasebranchdetail"></a>
<a id="schema_databaseBranchDetail"></a>
<a id="tocSdatabasebranchdetail"></a>
<a id="tocsdatabasebranchdetail"></a>

```json
{
  "branch_id": "string",
  "name": "string",
  "connection_string": "string",
  "state": "init",
  "logical_size_bytes": 0,
  "created_at": "string",
  "updated_at": "string",
  "last_active_at": "string",
  "compute": {
    "current_state": "active",
    "autoscaling_limit_min_cu": 0,
    "autoscaling_limit_max_cu": 0,
    "suspend_timeout_seconds": 0,
    "last_active": "string"
  },
  "metadata": {}
}
```

Detailed information about a database branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_id|string|false|none|The branch identifier|
|name|string|false|none|The branch name|
|connection_string|string|false|none|The connection string for the branch|
|state|string|false|none|The current state of the branch|
|logical_size_bytes|integer(int64)|false|none|The logical size of the branch in bytes|
|created_at|string(dateTime)|false|none|When the branch was created|
|updated_at|string(dateTime)|false|none|When the branch was last updated|
|last_active_at|string(dateTime)|false|none|When the branch was last active|
|compute|[databaseBranchCompute](#schemadatabasebranchcompute)|false|none|Compute endpoint status for a branch|
|metadata|object|false|none|Metadata associated with the branch|

#### Enumerated Values

|Property|Value|
|---|---|
|state|init|
|state|creating|
|state|resetting|
|state|ready|
|state|archived|

<h2 id="tocS_databaseBranchCompute">databaseBranchCompute</h2>
<!-- backwards compatibility -->
<a id="schemadatabasebranchcompute"></a>
<a id="schema_databaseBranchCompute"></a>
<a id="tocSdatabasebranchcompute"></a>
<a id="tocsdatabasebranchcompute"></a>

```json
{
  "current_state": "active",
  "autoscaling_limit_min_cu": 0,
  "autoscaling_limit_max_cu": 0,
  "suspend_timeout_seconds": 0,
  "last_active": "string"
}
```

Compute endpoint status for a branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current_state|string|false|none|The current state of the compute endpoint|
|autoscaling_limit_min_cu|number(double)|false|none|Minimum compute units for autoscaling|
|autoscaling_limit_max_cu|number(double)|false|none|Maximum compute units for autoscaling|
|suspend_timeout_seconds|integer(int64)|false|none|Seconds of inactivity before the compute endpoint is suspended|
|last_active|string(dateTime)|false|none|When the compute endpoint was last active|

#### Enumerated Values

|Property|Value|
|---|---|
|current_state|active|
|current_state|idle|

<h2 id="tocS_createDatabaseSnapshotRequest">createDatabaseSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedatabasesnapshotrequest"></a>
<a id="schema_createDatabaseSnapshotRequest"></a>
<a id="tocScreatedatabasesnapshotrequest"></a>
<a id="tocscreatedatabasesnapshotrequest"></a>

```json
{
  "branch_id": "string",
  "name": "string",
  "metadata": {
    "deploy": {},
    "source": "string"
  }
}
```

Request body for creating a database snapshot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_id|string|false|none|The ID of the branch to snapshot. Defaults to "production" if not specified.|
|name|string|false|none|A name for the snapshot|
|metadata|[databaseSnapshotMetadata](#schemadatabasesnapshotmetadata)|false|none|Metadata associated with a snapshot|

<h2 id="tocS_databaseSnapshot">databaseSnapshot</h2>
<!-- backwards compatibility -->
<a id="schemadatabasesnapshot"></a>
<a id="schema_databaseSnapshot"></a>
<a id="tocSdatabasesnapshot"></a>
<a id="tocsdatabasesnapshot"></a>

```json
{
  "id": "string",
  "source_branch_id": "string",
  "manual": true,
  "created_at": "string",
  "expires_at": "string",
  "timestamp": "string",
  "metadata": {
    "deploy": {},
    "source": "string"
  }
}
```

A point-in-time snapshot of a database branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The unique identifier of the snapshot|
|source_branch_id|string|false|none|The ID of the branch that was snapshotted|
|manual|boolean|false|none|Whether this snapshot was manually created|
|created_at|string(dateTime)|false|none|When the snapshot was created|
|expires_at|string(dateTime)|false|none|When the snapshot expires|
|timestamp|string(dateTime)|false|none|The point-in-time timestamp of the snapshot|
|metadata|[databaseSnapshotMetadata](#schemadatabasesnapshotmetadata)|false|none|Metadata associated with a snapshot|

<h2 id="tocS_databaseSnapshotMetadata">databaseSnapshotMetadata</h2>
<!-- backwards compatibility -->
<a id="schemadatabasesnapshotmetadata"></a>
<a id="schema_databaseSnapshotMetadata"></a>
<a id="tocSdatabasesnapshotmetadata"></a>
<a id="tocsdatabasesnapshotmetadata"></a>

```json
{
  "deploy": {},
  "source": "string"
}
```

Metadata associated with a snapshot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deploy|object|false|none|Deploy information associated with the snapshot|
|source|string|false|none|The source that created the snapshot|

<h2 id="tocS_databaseSnapshotsResponse">databaseSnapshotsResponse</h2>
<!-- backwards compatibility -->
<a id="schemadatabasesnapshotsresponse"></a>
<a id="schema_databaseSnapshotsResponse"></a>
<a id="tocSdatabasesnapshotsresponse"></a>
<a id="tocsdatabasesnapshotsresponse"></a>

```json
{
  "snapshots": [
    {
      "id": "string",
      "source_branch_id": "string",
      "manual": true,
      "created_at": "string",
      "expires_at": "string",
      "timestamp": "string",
      "metadata": {
        "deploy": {},
        "source": "string"
      }
    }
  ]
}
```

Response containing a list of database snapshots

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snapshots|[[databaseSnapshot](#schemadatabasesnapshot)]|false|none|List of database snapshots|

<h2 id="tocS_restoreDatabaseSnapshotRequest">restoreDatabaseSnapshotRequest</h2>
<!-- backwards compatibility -->
<a id="schemarestoredatabasesnapshotrequest"></a>
<a id="schema_restoreDatabaseSnapshotRequest"></a>
<a id="tocSrestoredatabasesnapshotrequest"></a>
<a id="tocsrestoredatabasesnapshotrequest"></a>

```json
{
  "branch_id": "string"
}
```

Request body for restoring a database snapshot

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_id|string|false|none|The ID of the branch to restore the snapshot to. Defaults to "production" if not specified.|

<h2 id="tocS_databaseComputeSettingsRequest">databaseComputeSettingsRequest</h2>
<!-- backwards compatibility -->
<a id="schemadatabasecomputesettingsrequest"></a>
<a id="schema_databaseComputeSettingsRequest"></a>
<a id="tocSdatabasecomputesettingsrequest"></a>
<a id="tocsdatabasecomputesettingsrequest"></a>

```json
{
  "min_cu": 0.25,
  "max_cu": 0.25,
  "sleep_timeout_seconds": -1
}
```

Request body for setting compute settings. All fields are optional; only provided fields are updated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_cu|number(double) \| null|false|none|Minimum compute units (0.25 to 16.0). Must be less than or equal to max_cu.|
|max_cu|number(double) \| null|false|none|Maximum compute units (0.25 to 16.0). Must be greater than or equal to min_cu. max_cu - min_cu must not exceed 8.0.|
|sleep_timeout_seconds|integer(int64) \| null|false|none|Seconds of inactivity before the compute endpoint is suspended. Use -1 for always on, or a non-negative value.|

<h2 id="tocS_databaseComputeSettings">databaseComputeSettings</h2>
<!-- backwards compatibility -->
<a id="schemadatabasecomputesettings"></a>
<a id="schema_databaseComputeSettings"></a>
<a id="tocSdatabasecomputesettings"></a>
<a id="tocsdatabasecomputesettings"></a>

```json
{
  "min_cu": 0,
  "max_cu": 0,
  "sleep_timeout_seconds": 0
}
```

Compute settings for a database or branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|min_cu|number(double)|false|none|Minimum compute units|
|max_cu|number(double)|false|none|Maximum compute units|
|sleep_timeout_seconds|integer(int64)|false|none|Seconds of inactivity before suspension|

<h2 id="tocS_runDatabaseMigrationsRequest">runDatabaseMigrationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarundatabasemigrationsrequest"></a>
<a id="schema_runDatabaseMigrationsRequest"></a>
<a id="tocSrundatabasemigrationsrequest"></a>
<a id="tocsrundatabasemigrationsrequest"></a>

```json
{
  "dry_run": true
}
```

Request body for running database migrations

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|If true, validates migrations without applying them.|

<h2 id="tocS_resetDatabaseBranchRequest">resetDatabaseBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetdatabasebranchrequest"></a>
<a id="schema_resetDatabaseBranchRequest"></a>
<a id="tocSresetdatabasebranchrequest"></a>
<a id="tocsresetdatabasebranchrequest"></a>

```json
{
  "source_branch_id": "string"
}
```

Request body for resetting a database branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source_branch_id|string|false|none|The ID of the branch to re-fork the target branch from. Defaults to "production" if not specified.|

<h2 id="tocS_resetDatabaseBranchResponse">resetDatabaseBranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresetdatabasebranchresponse"></a>
<a id="schema_resetDatabaseBranchResponse"></a>
<a id="tocSresetdatabasebranchresponse"></a>
<a id="tocsresetdatabasebranchresponse"></a>

```json
{
  "reset": true,
  "connection_string": "string",
  "metadata": {}
}
```

Response for a database branch reset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reset|boolean|false|none|Whether the branch was actually re-forked. False when the target was already in sync with the source and `force=true` was not set.|
|connection_string|string|false|none|The connection string for the reset (or unchanged) branch|
|metadata|object|false|none|Metadata associated with the branch|

<h2 id="tocS_listDatabaseMigrationsResponse">listDatabaseMigrationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdatabasemigrationsresponse"></a>
<a id="schema_listDatabaseMigrationsResponse"></a>
<a id="tocSlistdatabasemigrationsresponse"></a>
<a id="tocslistdatabasemigrationsresponse"></a>

```json
{
  "migrations": [
    {
      "version": 0,
      "name": "string",
      "path": "string",
      "applied": true
    }
  ]
}
```

Response containing the list of migrations for a branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|migrations|[[databaseMigration](#schemadatabasemigration)]|false|none|List of migrations|

<h2 id="tocS_databaseMigration">databaseMigration</h2>
<!-- backwards compatibility -->
<a id="schemadatabasemigration"></a>
<a id="schema_databaseMigration"></a>
<a id="tocSdatabasemigration"></a>
<a id="tocsdatabasemigration"></a>

```json
{
  "version": 0,
  "name": "string",
  "path": "string",
  "applied": true
}
```

A migration available to a database branch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer(int64)|false|none|The migration version number|
|name|string|false|none|The migration name|
|path|string|false|none|The path to the migration file in the deploy bundle|
|applied|boolean|false|none|Whether this migration has been applied to the branch|

<h2 id="tocS_databaseMigrationDetail">databaseMigrationDetail</h2>
<!-- backwards compatibility -->
<a id="schemadatabasemigrationdetail"></a>
<a id="schema_databaseMigrationDetail"></a>
<a id="tocSdatabasemigrationdetail"></a>
<a id="tocsdatabasemigrationdetail"></a>

```json
{
  "version": 0,
  "name": "string",
  "path": "string",
  "content": "string"
}
```

A migration with its file contents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer(int64)|false|none|The migration version number|
|name|string|false|none|The migration name|
|path|string|false|none|The path to the migration file in the deploy bundle|
|content|string|false|none|The raw contents of the migration file|

<h2 id="tocS_DeployValidationsReport">DeployValidationsReport</h2>
<!-- backwards compatibility -->
<a id="schemadeployvalidationsreport"></a>
<a id="schema_DeployValidationsReport"></a>
<a id="tocSdeployvalidationsreport"></a>
<a id="tocsdeployvalidationsreport"></a>

```json
{
  "id": "string",
  "deploy_id": "string",
  "secret_scan_result": {
    "scannedFilesCount": 0,
    "secretsScanMatches": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the deploy validations report|
|deploy_id|string|false|none|The id of the deploy|
|secret_scan_result|[DeployValidationsReport_SecretScanResult](#schemadeployvalidationsreport_secretscanresult)|false|none|none|

<h2 id="tocS_DeployValidationsReport_SecretScanResult">DeployValidationsReport_SecretScanResult</h2>
<!-- backwards compatibility -->
<a id="schemadeployvalidationsreport_secretscanresult"></a>
<a id="schema_DeployValidationsReport_SecretScanResult"></a>
<a id="tocSdeployvalidationsreport_secretscanresult"></a>
<a id="tocsdeployvalidationsreport_secretscanresult"></a>

```json
{
  "scannedFilesCount": 0,
  "secretsScanMatches": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scannedFilesCount|integer|false|none|The number of files scanned|
|secretsScanMatches|[string]|false|none|The list of secrets scan matches|

<h2 id="tocS_splitTestSetup">splitTestSetup</h2>
<!-- backwards compatibility -->
<a id="schemasplittestsetup"></a>
<a id="schema_splitTestSetup"></a>
<a id="tocSsplittestsetup"></a>
<a id="tocssplittestsetup"></a>

```json
{
  "branch_tests": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch_tests|object|false|none|none|

<h2 id="tocS_splitTests">splitTests</h2>
<!-- backwards compatibility -->
<a id="schemasplittests"></a>
<a id="schema_splitTests"></a>
<a id="tocSsplittests"></a>
<a id="tocssplittests"></a>

```json
[
  {
    "id": "string",
    "site_id": "string",
    "name": "string",
    "path": "string",
    "branches": [
      {}
    ],
    "active": true,
    "created_at": "string",
    "updated_at": "string",
    "unpublished_at": "string"
  }
]
```

<h2 id="tocS_splitTest">splitTest</h2>
<!-- backwards compatibility -->
<a id="schemasplittest"></a>
<a id="schema_splitTest"></a>
<a id="tocSsplittest"></a>
<a id="tocssplittest"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "name": "string",
  "path": "string",
  "branches": [
    {}
  ],
  "active": true,
  "created_at": "string",
  "updated_at": "string",
  "unpublished_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|branches|[object]|false|none|none|
|active|boolean|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|unpublished_at|string(dateTime)|false|none|none|

<h2 id="tocS_serviceInstance">serviceInstance</h2>
<!-- backwards compatibility -->
<a id="schemaserviceinstance"></a>
<a id="schema_serviceInstance"></a>
<a id="tocSserviceinstance"></a>
<a id="tocsserviceinstance"></a>

```json
{
  "id": "string",
  "url": "string",
  "config": {},
  "external_attributes": {},
  "service_slug": "string",
  "service_path": "string",
  "service_name": "string",
  "env": {},
  "snippets": [
    {}
  ],
  "auth_url": "string",
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|url|string|false|none|none|
|config|object|false|none|none|
|external_attributes|object|false|none|none|
|service_slug|string|false|none|none|
|service_path|string|false|none|none|
|service_name|string|false|none|none|
|env|object|false|none|none|
|snippets|[object]|false|none|none|
|auth_url|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|

<h2 id="tocS_service">service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "service_path": "string",
  "long_description": "string",
  "description": "string",
  "events": [
    {}
  ],
  "tags": [
    "string"
  ],
  "icon": "string",
  "manifest_url": "string",
  "environments": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|service_path|string|false|none|none|
|long_description|string|false|none|none|
|description|string|false|none|none|
|events|[object]|false|none|none|
|tags|[string]|false|none|none|
|icon|string|false|none|none|
|manifest_url|string|false|none|none|
|environments|[string]|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|

<h2 id="tocS_site">site</h2>
<!-- backwards compatibility -->
<a id="schemasite"></a>
<a id="schema_site"></a>
<a id="tocSsite"></a>
<a id="tocssite"></a>

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|state|string|false|none|none|
|plan|string|false|none|none|
|name|string|false|none|none|
|custom_domain|string|false|none|none|
|domain_aliases|[string]|false|none|none|
|branch_deploy_custom_domain|string|false|none|none|
|deploy_preview_custom_domain|string|false|none|none|
|password|string|false|none|none|
|notification_email|string|false|none|none|
|url|string|false|none|none|
|ssl_url|string|false|none|none|
|admin_url|string|false|none|none|
|screenshot_url|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|user_id|string|false|none|none|
|session_id|string|false|none|none|
|ssl|boolean|false|none|none|
|force_ssl|boolean|false|none|none|
|managed_dns|boolean|false|none|none|
|deploy_url|string|false|none|none|
|published_deploy|[deploy](#schemadeploy)|false|none|none|
|account_id|string|false|none|none|
|account_name|string|false|none|none|
|account_slug|string|false|none|none|
|git_provider|string|false|none|none|
|deploy_hook|string|false|none|none|
|capabilities|object|false|none|none|
|processing_settings|object|false|none|none|
|build_settings|[repoInfo](#schemarepoinfo)|false|none|none|
|id_domain|string|false|none|none|
|default_hooks_data|object|false|none|none|
|build_image|string|false|none|none|
|prerender|string|false|none|none|
|functions_region|string|false|none|none|
|prevent_non_git_prod_deploys|boolean|false|none|none|

<h2 id="tocS_siteSetup">siteSetup</h2>
<!-- backwards compatibility -->
<a id="schemasitesetup"></a>
<a id="schema_siteSetup"></a>
<a id="tocSsitesetup"></a>
<a id="tocssitesetup"></a>

```json
{
  "id": "string",
  "state": "string",
  "plan": "string",
  "name": "string",
  "custom_domain": "string",
  "domain_aliases": [
    "string"
  ],
  "branch_deploy_custom_domain": "string",
  "deploy_preview_custom_domain": "string",
  "password": "string",
  "notification_email": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "screenshot_url": "string",
  "created_at": "string",
  "updated_at": "string",
  "user_id": "string",
  "session_id": "string",
  "ssl": true,
  "force_ssl": true,
  "managed_dns": true,
  "deploy_url": "string",
  "published_deploy": {
    "id": "string",
    "site_id": "string",
    "user_id": "string",
    "build_id": "string",
    "state": "string",
    "name": "string",
    "url": "string",
    "ssl_url": "string",
    "admin_url": "string",
    "deploy_url": "string",
    "deploy_ssl_url": "string",
    "screenshot_url": "string",
    "review_id": 0,
    "draft": true,
    "required": [
      "string"
    ],
    "required_functions": [
      "string"
    ],
    "required_edge_functions": [
      "string"
    ],
    "required_server": [
      "string"
    ],
    "error_message": "string",
    "branch": "string",
    "commit_ref": "string",
    "commit_url": "string",
    "skipped": true,
    "created_at": "string",
    "updated_at": "string",
    "published_at": "string",
    "title": "string",
    "context": "string",
    "locked": true,
    "review_url": "string",
    "framework": "string",
    "skew_protection_token": "string",
    "function_schedules": [
      {
        "name": "string",
        "cron": "string"
      }
    ],
    "functions_region": "string",
    "functions_region_overrides": [
      {
        "name": "string",
        "region": "string"
      }
    ]
  },
  "account_id": "string",
  "account_name": "string",
  "account_slug": "string",
  "git_provider": "string",
  "deploy_hook": "string",
  "capabilities": {
    "property1": {},
    "property2": {}
  },
  "processing_settings": {
    "html": {
      "pretty_urls": true
    }
  },
  "build_settings": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  },
  "id_domain": "string",
  "default_hooks_data": {
    "access_token": "string"
  },
  "build_image": "string",
  "prerender": "string",
  "functions_region": "string",
  "prevent_non_git_prod_deploys": false,
  "repo": {
    "id": 0,
    "provider": "string",
    "deploy_key_id": "string",
    "repo_path": "string",
    "repo_branch": "string",
    "dir": "string",
    "functions_dir": "string",
    "cmd": "string",
    "allowed_branches": [
      "string"
    ],
    "public_repo": true,
    "private_logs": true,
    "repo_url": "string",
    "env": {
      "property1": "string",
      "property2": "string"
    },
    "installation_id": 0,
    "stop_builds": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|state|string|false|none|none|
|plan|string|false|none|none|
|name|string|false|none|none|
|custom_domain|string|false|none|none|
|domain_aliases|[string]|false|none|none|
|branch_deploy_custom_domain|string|false|none|none|
|deploy_preview_custom_domain|string|false|none|none|
|password|string|false|none|none|
|notification_email|string|false|none|none|
|url|string|false|none|none|
|ssl_url|string|false|none|none|
|admin_url|string|false|none|none|
|screenshot_url|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|user_id|string|false|none|none|
|session_id|string|false|none|none|
|ssl|boolean|false|none|none|
|force_ssl|boolean|false|none|none|
|managed_dns|boolean|false|none|none|
|deploy_url|string|false|none|none|
|published_deploy|[deploy](#schemadeploy)|false|none|none|
|account_id|string|false|none|none|
|account_name|string|false|none|none|
|account_slug|string|false|none|none|
|git_provider|string|false|none|none|
|deploy_hook|string|false|none|none|
|capabilities|object|false|none|none|
|processing_settings|object|false|none|none|
|build_settings|[repoInfo](#schemarepoinfo)|false|none|none|
|id_domain|string|false|none|none|
|default_hooks_data|object|false|none|none|
|build_image|string|false|none|none|
|prerender|string|false|none|none|
|functions_region|string|false|none|none|
|prevent_non_git_prod_deploys|boolean|false|none|none|
|repo|[repoInfo](#schemarepoinfo)|false|none|none|

<h2 id="tocS_repoInfo">repoInfo</h2>
<!-- backwards compatibility -->
<a id="schemarepoinfo"></a>
<a id="schema_repoInfo"></a>
<a id="tocSrepoinfo"></a>
<a id="tocsrepoinfo"></a>

```json
{
  "id": 0,
  "provider": "string",
  "deploy_key_id": "string",
  "repo_path": "string",
  "repo_branch": "string",
  "dir": "string",
  "functions_dir": "string",
  "cmd": "string",
  "allowed_branches": [
    "string"
  ],
  "public_repo": true,
  "private_logs": true,
  "repo_url": "string",
  "env": {
    "property1": "string",
    "property2": "string"
  },
  "installation_id": 0,
  "stop_builds": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer|false|none|none|
|provider|string|false|none|none|
|deploy_key_id|string|false|none|none|
|repo_path|string|false|none|none|
|repo_branch|string|false|none|none|
|dir|string|false|none|none|
|functions_dir|string|false|none|The directory where Netlify can find your compiled functions to deploy them. Defaults to netlify/functions if not set. You can also define and override this setting in your project’s netlify.toml file.|
|cmd|string|false|none|The build command to run. This is the command that Netlify runs to build your site. If a site has a netlify.toml file with a build command it will override this value.|
|allowed_branches|[string]|false|none|none|
|public_repo|boolean|false|none|none|
|private_logs|boolean|false|none|none|
|repo_url|string|false|none|none|
|env|object|false|none|none|
|installation_id|integer|false|none|none|
|stop_builds|boolean|false|none|When true, Netlify will not build your project automatically. You can build locally via the CLI and then publish new deploys manually via the CLI or the API.|

<h2 id="tocS_submission">submission</h2>
<!-- backwards compatibility -->
<a id="schemasubmission"></a>
<a id="schema_submission"></a>
<a id="tocSsubmission"></a>
<a id="tocssubmission"></a>

```json
{
  "id": "string",
  "number": 0,
  "email": "string",
  "name": "string",
  "first_name": "string",
  "last_name": "string",
  "company": "string",
  "summary": "string",
  "body": "string",
  "data": {},
  "created_at": "string",
  "site_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|number|integer(int32)|false|none|none|
|email|string|false|none|none|
|name|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|company|string|false|none|none|
|summary|string|false|none|none|
|body|string|false|none|none|
|data|object|false|none|none|
|created_at|string(dateTime)|false|none|none|
|site_url|string|false|none|none|

<h2 id="tocS_envVar">envVar</h2>
<!-- backwards compatibility -->
<a id="schemaenvvar"></a>
<a id="schema_envVar"></a>
<a id="tocSenvvar"></a>
<a id="tocsenvvar"></a>

```json
{
  "key": "string",
  "scopes": [
    "builds"
  ],
  "values": [
    {
      "id": "string",
      "value": "string",
      "context": "all",
      "context_parameter": "string"
    }
  ],
  "is_secret": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "updated_by": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

Environment variable model definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|The environment variable key, like ALGOLIA_ID (case-sensitive)|
|scopes|[string]|false|none|The scopes that this environment variable is set to|
|values|[[envVarValue](#schemaenvvarvalue)]|false|none|An array of Value objects containing values and metadata|
|is_secret|boolean|false|none|Secret values are only readable by code running on Netlify's systems. With secrets, only the local development context values are readable from the UI, API, and CLI. By default, environment variable values are not secret.|
|updated_at|string(date-time)|false|none|The timestamp of when the value was last updated|
|updated_by|[envVarUser](#schemaenvvaruser)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scopes|builds|
|scopes|functions|
|scopes|runtime|
|scopes|post-processing|

<h2 id="tocS_envVarValue">envVarValue</h2>
<!-- backwards compatibility -->
<a id="schemaenvvarvalue"></a>
<a id="schema_envVarValue"></a>
<a id="tocSenvvarvalue"></a>
<a id="tocsenvvarvalue"></a>

```json
{
  "id": "string",
  "value": "string",
  "context": "all",
  "context_parameter": "string"
}
```

Environment variable value model definition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The environment variable value's universally unique ID|
|value|string|false|none|The environment variable's unencrypted value|
|context|string|false|none|The deploy context in which this value will be used. `dev` refers to local development when running `netlify dev`.|
|context_parameter|string|false|none|An additional parameter for custom branches. Currently, this is used for specifying a branch name when `context=branch`.|

#### Enumerated Values

|Property|Value|
|---|---|
|context|all|
|context|dev|
|context|dev-server|
|context|branch-deploy|
|context|deploy-preview|
|context|production|
|context|branch|

<h2 id="tocS_envVarUser">envVarUser</h2>
<!-- backwards compatibility -->
<a id="schemaenvvaruser"></a>
<a id="schema_envVarUser"></a>
<a id="tocSenvvaruser"></a>
<a id="tocsenvvaruser"></a>

```json
{
  "id": "string",
  "full_name": "string",
  "email": "string",
  "avatar_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The user's unique identifier|
|full_name|string|false|none|The user's full name (first and last)|
|email|string|false|none|The user's email address|
|avatar_url|string|false|none|A URL pointing to the user's avatar|

<h2 id="tocS_form">form</h2>
<!-- backwards compatibility -->
<a id="schemaform"></a>
<a id="schema_form"></a>
<a id="tocSform"></a>
<a id="tocsform"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "name": "string",
  "paths": [
    "string"
  ],
  "submission_count": 0,
  "fields": [
    {}
  ],
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|name|string|false|none|none|
|paths|[string]|false|none|none|
|submission_count|integer(int32)|false|none|none|
|fields|[object]|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_hookType">hookType</h2>
<!-- backwards compatibility -->
<a id="schemahooktype"></a>
<a id="schema_hookType"></a>
<a id="tocShooktype"></a>
<a id="tocshooktype"></a>

```json
{
  "name": "string",
  "events": [
    "string"
  ],
  "fields": [
    {}
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|events|[string]|false|none|none|
|fields|[object]|false|none|none|

<h2 id="tocS_hook">hook</h2>
<!-- backwards compatibility -->
<a id="schemahook"></a>
<a id="schema_hook"></a>
<a id="tocShook"></a>
<a id="tocshook"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "type": "string",
  "event": "string",
  "data": {},
  "created_at": "string",
  "updated_at": "string",
  "disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|type|string|false|none|none|
|event|string|false|none|none|
|data|object|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|disabled|boolean|false|none|none|

<h2 id="tocS_file">file</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_file"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "id": "string",
  "path": "string",
  "sha": "string",
  "mime_type": "string",
  "size": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|path|string|false|none|none|
|sha|string|false|none|none|
|mime_type|string|false|none|none|
|size|integer(int64)|false|none|none|

<h2 id="tocS_function">function</h2>
<!-- backwards compatibility -->
<a id="schemafunction"></a>
<a id="schema_function"></a>
<a id="tocSfunction"></a>
<a id="tocsfunction"></a>

```json
{
  "id": "string",
  "name": "string",
  "sha": "string",
  "region": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|sha|string|false|none|none|
|region|string|false|none|none|

<h2 id="tocS_snippet">snippet</h2>
<!-- backwards compatibility -->
<a id="schemasnippet"></a>
<a id="schema_snippet"></a>
<a id="tocSsnippet"></a>
<a id="tocssnippet"></a>

```json
{
  "id": 0,
  "site_id": "string",
  "title": "string",
  "general": "string",
  "general_position": "string",
  "goal": "string",
  "goal_position": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|site_id|string|false|none|none|
|title|string|false|none|none|
|general|string|false|none|none|
|general_position|string|false|none|none|
|goal|string|false|none|none|
|goal_position|string|false|none|none|

<h2 id="tocS_purge">purge</h2>
<!-- backwards compatibility -->
<a id="schemapurge"></a>
<a id="schema_purge"></a>
<a id="tocSpurge"></a>
<a id="tocspurge"></a>

```json
{
  "site_id": "string",
  "site_slug": "string",
  "cache_tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|site_id|string|false|none|none|
|site_slug|string|false|none|none|
|cache_tags|[string]|false|none|none|

<h2 id="tocS_deploy">deploy</h2>
<!-- backwards compatibility -->
<a id="schemadeploy"></a>
<a id="schema_deploy"></a>
<a id="tocSdeploy"></a>
<a id="tocsdeploy"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "user_id": "string",
  "build_id": "string",
  "state": "string",
  "name": "string",
  "url": "string",
  "ssl_url": "string",
  "admin_url": "string",
  "deploy_url": "string",
  "deploy_ssl_url": "string",
  "screenshot_url": "string",
  "review_id": 0,
  "draft": true,
  "required": [
    "string"
  ],
  "required_functions": [
    "string"
  ],
  "required_edge_functions": [
    "string"
  ],
  "required_server": [
    "string"
  ],
  "error_message": "string",
  "branch": "string",
  "commit_ref": "string",
  "commit_url": "string",
  "skipped": true,
  "created_at": "string",
  "updated_at": "string",
  "published_at": "string",
  "title": "string",
  "context": "string",
  "locked": true,
  "review_url": "string",
  "framework": "string",
  "skew_protection_token": "string",
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_region": "string",
  "functions_region_overrides": [
    {
      "name": "string",
      "region": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|user_id|string|false|none|none|
|build_id|string|false|none|none|
|state|string|false|none|none|
|name|string|false|none|none|
|url|string|false|none|none|
|ssl_url|string|false|none|none|
|admin_url|string|false|none|none|
|deploy_url|string|false|none|none|
|deploy_ssl_url|string|false|none|none|
|screenshot_url|string|false|none|none|
|review_id|number|false|none|none|
|draft|boolean|false|none|none|
|required|[string]|false|none|none|
|required_functions|[string]|false|none|none|
|required_edge_functions|[string]|false|none|An array of code_shas for the edge-function bundles that need to be uploaded to<br>complete the deploy.<br>|
|required_server|[string]|false|none|The SHA256 digest of the deploy's Netlify Server bundle, when it still needs to<br>be uploaded to complete the deploy. A deploy has at most one server, so this<br>holds either nothing or a single digest.<br>|
|error_message|string|false|none|none|
|branch|string|false|none|none|
|commit_ref|string|false|none|none|
|commit_url|string|false|none|none|
|skipped|boolean|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|published_at|string(dateTime)|false|none|none|
|title|string|false|none|none|
|context|string|false|none|none|
|locked|boolean|false|none|none|
|review_url|string|false|none|none|
|framework|string|false|none|none|
|skew_protection_token|string|false|none|none|
|function_schedules|[[functionSchedule](#schemafunctionschedule)]|false|none|none|
|functions_region|string|false|none|The functions region for this deploy as an airport code.<br>|
|functions_region_overrides|[object]|false|none|Functions in the deploy that explicitly specify their own region<br>(airport code).<br>|

<h2 id="tocS_deployEnvironmentVariable">deployEnvironmentVariable</h2>
<!-- backwards compatibility -->
<a id="schemadeployenvironmentvariable"></a>
<a id="schema_deployEnvironmentVariable"></a>
<a id="tocSdeployenvironmentvariable"></a>
<a id="tocsdeployenvironmentvariable"></a>

```json
{
  "key": "string",
  "value": "string",
  "is_secret": true,
  "scopes": [
    "builds"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|value|string|true|none|none|
|is_secret|boolean|true|none|none|
|scopes|[string]|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scopes|builds|
|scopes|functions|
|scopes|runtime|
|scopes|post-processing|

<h2 id="tocS_deployFiles">deployFiles</h2>
<!-- backwards compatibility -->
<a id="schemadeployfiles"></a>
<a id="schema_deployFiles"></a>
<a id="tocSdeployfiles"></a>
<a id="tocsdeployfiles"></a>

```json
{
  "files": {},
  "zip": "string",
  "draft": true,
  "async": true,
  "functions": {},
  "edge_functions": {},
  "server": {
    "sha": "string",
    "region": "string",
    "instance_size": "small",
    "routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string",
        "methods": [
          "GET"
        ],
        "prefer_static": true
      }
    ],
    "excluded_routes": [
      {
        "pattern": "string",
        "literal": "string",
        "expression": "string"
      }
    ],
    "runtime_version": "string"
  },
  "function_schedules": [
    {
      "name": "string",
      "cron": "string"
    }
  ],
  "functions_config": {
    "property1": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    },
    "property2": {
      "display_name": "string",
      "generator": "string",
      "build_data": {},
      "memory": 0,
      "routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string",
          "methods": [
            "GET"
          ],
          "prefer_static": true
        }
      ],
      "excluded_routes": [
        {
          "pattern": "string",
          "literal": "string",
          "expression": "string"
        }
      ],
      "priority": 0,
      "region": "string",
      "traffic_rules": {
        "action": {
          "type": "string",
          "config": {
            "to": "string",
            "rate_limit_config": {
              "algorithm": "sliding_window",
              "window_size": 0,
              "window_limit": 0
            },
            "aggregate": {
              "keys": [
                {
                  "type": "ip"
                }
              ]
            }
          }
        }
      },
      "vcpu": 0,
      "event_subscriptions": [
        "string"
      ]
    }
  },
  "branch": "string",
  "framework": "string",
  "framework_version": "string",
  "environment": [
    {
      "key": "string",
      "value": "string",
      "is_secret": true,
      "scopes": [
        "builds"
      ]
    }
  ]
}
```

Deploy files can be provided in two ways:
1. As a JSON object using 'files' (a hash mapping file paths to SHA1 digests), OR
2. As a zip file using one of these methods:
   - Set Content-Type to 'application/zip' and send the zip file as the raw request body
   - Include the zip file content in the 'zip' field of this JSON object with Content-Type 'application/json'

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|object|false|none|A hash mapping file paths to SHA1 digests of the file contents.|
|zip|string(binary)|false|none|A zip file containing the site files to deploy. Alternative to 'files'.<br>To use this field, set Content-Type to 'application/json' and include the zip content here.<br>Alternatively, you can set Content-Type to 'application/zip' and send the zip as the raw request body (not as JSON).<br>|
|draft|boolean|false|none|none|
|async|boolean|false|none|none|
|functions|object|false|none|none|
|edge_functions|object|false|none|A hash mapping edge-function bundle formats to the code_sha of each bundle. The<br>response's required_edge_functions lists which of these still need to be uploaded.<br>|
|server|object|false|none|The deploy's Netlify Server. A deploy has at most one. The response's<br>required_server says whether it still needs to be uploaded.<br>|
|function_schedules|[[functionSchedule](#schemafunctionschedule)]|false|none|none|
|functions_config|object|false|none|none|
|branch|string|false|none|none|
|framework|string|false|none|none|
|framework_version|string|false|none|none|
|environment|[[deployEnvironmentVariable](#schemadeployenvironmentvariable)]|false|none|A list of deploy-specific environment variable data. Data specified this way applies only<br>to this specific deploy and is merged into any existing environment variables set on the<br>account and site.<br><br>Deploy-specific environment variable data takes precedence over account and site<br>environment variable data: For example, a deploy-specific variable with the key `NODE_ENV`<br>will take priority over any existing site- and account-level environment variable data<br>with the key `NODE_ENV`.<br><br>Environment variable data may be provided at one of two times:<br><br>- When creating a new Deploy with deploy files (most common)<br>- When finalizing an existing Deploy with deploy files<br><br>Once set, environment variables for a specific deploy cannot be modified. Subsequent<br>attempts to modify environment variable data for a deploy will be ignored.<br>|

<h2 id="tocS_pluginParams">pluginParams</h2>
<!-- backwards compatibility -->
<a id="schemapluginparams"></a>
<a id="schema_pluginParams"></a>
<a id="tocSpluginparams"></a>
<a id="tocspluginparams"></a>

```json
{
  "pinned_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pinned_version|string|false|none|none|

<h2 id="tocS_plugin">plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "package": "string",
  "pinned_version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|string|false|none|none|
|pinned_version|string|false|none|none|

<h2 id="tocS_buildStatus">buildStatus</h2>
<!-- backwards compatibility -->
<a id="schemabuildstatus"></a>
<a id="schema_buildStatus"></a>
<a id="tocSbuildstatus"></a>
<a id="tocsbuildstatus"></a>

```json
{
  "active": 0,
  "pending_concurrency": 0,
  "enqueued": 0,
  "build_count": 0,
  "minutes": {
    "current": 0,
    "current_average_sec": 0,
    "previous": 0,
    "period_start_date": "string",
    "period_end_date": "string",
    "last_updated_at": "string",
    "included_minutes": "string",
    "included_minutes_with_packs": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|integer|false|none|none|
|pending_concurrency|integer|false|none|none|
|enqueued|integer|false|none|none|
|build_count|integer|false|none|none|
|minutes|object|false|none|none|

<h2 id="tocS_build">build</h2>
<!-- backwards compatibility -->
<a id="schemabuild"></a>
<a id="schema_build"></a>
<a id="tocSbuild"></a>
<a id="tocsbuild"></a>

```json
{
  "id": "string",
  "deploy_id": "string",
  "sha": "string",
  "done": true,
  "error": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|deploy_id|string|false|none|none|
|sha|string|false|none|none|
|done|boolean|false|none|none|
|error|string|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_buildLogMsg">buildLogMsg</h2>
<!-- backwards compatibility -->
<a id="schemabuildlogmsg"></a>
<a id="schema_buildLogMsg"></a>
<a id="tocSbuildlogmsg"></a>
<a id="tocsbuildlogmsg"></a>

```json
{
  "message": "string",
  "error": true,
  "section": "initializing"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|error|boolean|false|none|none|
|section|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|section|initializing|
|section|building|
|section|deploying|
|section|cleanup|
|section|postprocessing|

<h2 id="tocS_pluginRunData">pluginRunData</h2>
<!-- backwards compatibility -->
<a id="schemapluginrundata"></a>
<a id="schema_pluginRunData"></a>
<a id="tocSpluginrundata"></a>
<a id="tocspluginrundata"></a>

```json
{
  "package": "string",
  "version": "string",
  "state": "string",
  "reporting_event": "string",
  "title": "string",
  "summary": "string",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|string|false|none|none|
|version|string|false|none|none|
|state|string|false|none|none|
|reporting_event|string|false|none|none|
|title|string|false|none|none|
|summary|string|false|none|none|
|text|string|false|none|none|

<h2 id="tocS_pluginRun">pluginRun</h2>
<!-- backwards compatibility -->
<a id="schemapluginrun"></a>
<a id="schema_pluginRun"></a>
<a id="tocSpluginrun"></a>
<a id="tocspluginrun"></a>

```json
{
  "package": "string",
  "version": "string",
  "state": "string",
  "reporting_event": "string",
  "title": "string",
  "summary": "string",
  "text": "string",
  "deploy_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|package|string|false|none|none|
|version|string|false|none|none|
|state|string|false|none|none|
|reporting_event|string|false|none|none|
|title|string|false|none|none|
|summary|string|false|none|none|
|text|string|false|none|none|
|deploy_id|string|false|none|none|

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{}
```

<h2 id="tocS_dnsZoneSetup">dnsZoneSetup</h2>
<!-- backwards compatibility -->
<a id="schemadnszonesetup"></a>
<a id="schema_dnsZoneSetup"></a>
<a id="tocSdnszonesetup"></a>
<a id="tocsdnszonesetup"></a>

```json
{
  "account_slug": "string",
  "site_id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_slug|string|false|none|none|
|site_id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_dnsZones">dnsZones</h2>
<!-- backwards compatibility -->
<a id="schemadnszones"></a>
<a id="schema_dnsZones"></a>
<a id="tocSdnszones"></a>
<a id="tocsdnszones"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "errors": [
      "string"
    ],
    "supported_record_types": [
      "string"
    ],
    "user_id": "string",
    "created_at": "string",
    "updated_at": "string",
    "records": [
      {
        "id": "string",
        "hostname": "string",
        "type": "string",
        "value": "string",
        "ttl": 0,
        "priority": 0,
        "dns_zone_id": "string",
        "site_id": "string",
        "flag": 0,
        "tag": "string",
        "managed": true
      }
    ],
    "dns_servers": [
      "string"
    ],
    "account_id": "string",
    "site_id": "string",
    "account_slug": "string",
    "account_name": "string",
    "domain": "string",
    "ipv6_enabled": true,
    "dedicated": true
  }
]
```

<h2 id="tocS_dnsZone">dnsZone</h2>
<!-- backwards compatibility -->
<a id="schemadnszone"></a>
<a id="schema_dnsZone"></a>
<a id="tocSdnszone"></a>
<a id="tocsdnszone"></a>

```json
{
  "id": "string",
  "name": "string",
  "errors": [
    "string"
  ],
  "supported_record_types": [
    "string"
  ],
  "user_id": "string",
  "created_at": "string",
  "updated_at": "string",
  "records": [
    {
      "id": "string",
      "hostname": "string",
      "type": "string",
      "value": "string",
      "ttl": 0,
      "priority": 0,
      "dns_zone_id": "string",
      "site_id": "string",
      "flag": 0,
      "tag": "string",
      "managed": true
    }
  ],
  "dns_servers": [
    "string"
  ],
  "account_id": "string",
  "site_id": "string",
  "account_slug": "string",
  "account_name": "string",
  "domain": "string",
  "ipv6_enabled": true,
  "dedicated": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|errors|[string]|false|none|none|
|supported_record_types|[string]|false|none|none|
|user_id|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|records|[[dnsRecord](#schemadnsrecord)]|false|none|none|
|dns_servers|[string]|false|none|none|
|account_id|string|false|none|none|
|site_id|string|false|none|none|
|account_slug|string|false|none|none|
|account_name|string|false|none|none|
|domain|string|false|none|none|
|ipv6_enabled|boolean|false|none|none|
|dedicated|boolean|false|none|none|

<h2 id="tocS_dnsRecordCreate">dnsRecordCreate</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecordcreate"></a>
<a id="schema_dnsRecordCreate"></a>
<a id="tocSdnsrecordcreate"></a>
<a id="tocsdnsrecordcreate"></a>

```json
{
  "type": "string",
  "hostname": "string",
  "value": "string",
  "ttl": 0,
  "priority": 0,
  "weight": 0,
  "port": 0,
  "flag": 0,
  "tag": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|
|hostname|string|false|none|none|
|value|string|false|none|none|
|ttl|integer(int64)|false|none|none|
|priority|integer(int64)|false|none|none|
|weight|integer(int64)|false|none|none|
|port|integer(int64)|false|none|none|
|flag|integer(int64)|false|none|none|
|tag|string|false|none|none|

<h2 id="tocS_dnsRecords">dnsRecords</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecords"></a>
<a id="schema_dnsRecords"></a>
<a id="tocSdnsrecords"></a>
<a id="tocsdnsrecords"></a>

```json
[
  {
    "id": "string",
    "hostname": "string",
    "type": "string",
    "value": "string",
    "ttl": 0,
    "priority": 0,
    "dns_zone_id": "string",
    "site_id": "string",
    "flag": 0,
    "tag": "string",
    "managed": true
  }
]
```

<h2 id="tocS_dnsRecord">dnsRecord</h2>
<!-- backwards compatibility -->
<a id="schemadnsrecord"></a>
<a id="schema_dnsRecord"></a>
<a id="tocSdnsrecord"></a>
<a id="tocsdnsrecord"></a>

```json
{
  "id": "string",
  "hostname": "string",
  "type": "string",
  "value": "string",
  "ttl": 0,
  "priority": 0,
  "dns_zone_id": "string",
  "site_id": "string",
  "flag": 0,
  "tag": "string",
  "managed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|hostname|string|false|none|none|
|type|string|false|none|none|
|value|string|false|none|none|
|ttl|integer(int64)|false|none|none|
|priority|integer(int64)|false|none|none|
|dns_zone_id|string|false|none|none|
|site_id|string|false|none|none|
|flag|integer|false|none|none|
|tag|string|false|none|none|
|managed|boolean|false|none|none|

<h2 id="tocS_sniCertificate">sniCertificate</h2>
<!-- backwards compatibility -->
<a id="schemasnicertificate"></a>
<a id="schema_sniCertificate"></a>
<a id="tocSsnicertificate"></a>
<a id="tocssnicertificate"></a>

```json
{
  "state": "string",
  "domains": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string",
  "expires_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|none|
|domains|[string]|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|expires_at|string(dateTime)|false|none|none|

<h2 id="tocS_ticket">ticket</h2>
<!-- backwards compatibility -->
<a id="schematicket"></a>
<a id="schema_ticket"></a>
<a id="tocSticket"></a>
<a id="tocsticket"></a>

```json
{
  "id": "string",
  "client_id": "string",
  "authorized": true,
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|client_id|string|false|none|none|
|authorized|boolean|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_accessToken">accessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_accessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
{
  "id": "string",
  "access_token": "string",
  "user_id": "string",
  "user_email": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|access_token|string|false|none|none|
|user_id|string|false|none|none|
|user_email|string|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_asset">asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "creator_id": "string",
  "name": "string",
  "state": "string",
  "content_type": "string",
  "url": "string",
  "key": "string",
  "visibility": "string",
  "size": 0,
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|creator_id|string|false|none|none|
|name|string|false|none|none|
|state|string|false|none|none|
|content_type|string|false|none|none|
|url|string|false|none|none|
|key|string|false|none|none|
|visibility|string|false|none|none|
|size|integer(int64)|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|

<h2 id="tocS_assetForm">assetForm</h2>
<!-- backwards compatibility -->
<a id="schemaassetform"></a>
<a id="schema_assetForm"></a>
<a id="tocSassetform"></a>
<a id="tocsassetform"></a>

```json
{
  "url": "string",
  "fields": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|
|fields|object|false|none|none|

<h2 id="tocS_assetSignature">assetSignature</h2>
<!-- backwards compatibility -->
<a id="schemaassetsignature"></a>
<a id="schema_assetSignature"></a>
<a id="tocSassetsignature"></a>
<a id="tocsassetsignature"></a>

```json
{
  "form": {
    "url": "string",
    "fields": {
      "property1": "string",
      "property2": "string"
    }
  },
  "asset": {
    "id": "string",
    "site_id": "string",
    "creator_id": "string",
    "name": "string",
    "state": "string",
    "content_type": "string",
    "url": "string",
    "key": "string",
    "visibility": "string",
    "size": 0,
    "created_at": "string",
    "updated_at": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|form|[assetForm](#schemaassetform)|false|none|none|
|asset|[asset](#schemaasset)|false|none|none|

<h2 id="tocS_assetPublicSignature">assetPublicSignature</h2>
<!-- backwards compatibility -->
<a id="schemaassetpublicsignature"></a>
<a id="schema_assetPublicSignature"></a>
<a id="tocSassetpublicsignature"></a>
<a id="tocsassetpublicsignature"></a>

```json
{
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|false|none|none|

<h2 id="tocS_deployKey">deployKey</h2>
<!-- backwards compatibility -->
<a id="schemadeploykey"></a>
<a id="schema_deployKey"></a>
<a id="tocSdeploykey"></a>
<a id="tocsdeploykey"></a>

```json
{
  "id": "string",
  "public_key": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|public_key|string|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_member">member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": "string",
  "full_name": "string",
  "email": "string",
  "avatar": "string",
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|full_name|string|false|none|none|
|email|string|false|none|none|
|avatar|string|false|none|none|
|role|string|false|none|none|

<h2 id="tocS_paymentMethod">paymentMethod</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmethod"></a>
<a id="schema_paymentMethod"></a>
<a id="tocSpaymentmethod"></a>
<a id="tocspaymentmethod"></a>

```json
{
  "id": "string",
  "method_name": "string",
  "type": "string",
  "state": "string",
  "data": {
    "card_type": "string",
    "last4": "string",
    "email": "string"
  },
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|method_name|string|false|none|none|
|type|string|false|none|none|
|state|string|false|none|none|
|data|object|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|

<h2 id="tocS_accountType">accountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_accountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "capabilities": {},
  "monthly_dollar_price": 0,
  "yearly_dollar_price": 0,
  "monthly_seats_addon_dollar_price": 0,
  "yearly_seats_addon_dollar_price": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|description|string|false|none|none|
|capabilities|object|false|none|none|
|monthly_dollar_price|integer|false|none|none|
|yearly_dollar_price|integer|false|none|none|
|monthly_seats_addon_dollar_price|integer|false|none|none|
|yearly_seats_addon_dollar_price|integer|false|none|none|

<h2 id="tocS_accountSetup">accountSetup</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsetup"></a>
<a id="schema_accountSetup"></a>
<a id="tocSaccountsetup"></a>
<a id="tocsaccountsetup"></a>

```json
{
  "name": "string",
  "type_id": "string",
  "payment_method_id": "string",
  "period": "monthly",
  "extra_seats_block": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|type_id|string|true|none|none|
|payment_method_id|string|false|none|none|
|period|string|false|none|none|
|extra_seats_block|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|period|monthly|
|period|yearly|

<h2 id="tocS_accountUpdateSetup">accountUpdateSetup</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdatesetup"></a>
<a id="schema_accountUpdateSetup"></a>
<a id="tocSaccountupdatesetup"></a>
<a id="tocsaccountupdatesetup"></a>

```json
{
  "name": "string",
  "slug": "string",
  "type_id": "string",
  "extra_seats_block": 0,
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|slug|string|false|none|none|
|type_id|string|false|none|none|
|extra_seats_block|integer|false|none|none|
|billing_name|string|false|none|none|
|billing_email|string|false|none|none|
|billing_details|string|false|none|none|

<h2 id="tocS_accountAddMemberSetup">accountAddMemberSetup</h2>
<!-- backwards compatibility -->
<a id="schemaaccountaddmembersetup"></a>
<a id="schema_accountAddMemberSetup"></a>
<a id="tocSaccountaddmembersetup"></a>
<a id="tocsaccountaddmembersetup"></a>

```json
{
  "role": "Owner",
  "email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|email|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Owner|
|role|Developer|
|role|Billing Admin|
|role|Reviewer|

<h2 id="tocS_accountUpdateMemberSetup">accountUpdateMemberSetup</h2>
<!-- backwards compatibility -->
<a id="schemaaccountupdatemembersetup"></a>
<a id="schema_accountUpdateMemberSetup"></a>
<a id="tocSaccountupdatemembersetup"></a>
<a id="tocsaccountupdatemembersetup"></a>

```json
{
  "role": "Owner",
  "site_access": "all",
  "site_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|false|none|none|
|site_access|string|false|none|none|
|site_ids|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Owner|
|role|Developer|
|role|Billing Admin|
|role|Reviewer|
|site_access|all|
|site_access|none|
|site_access|selected|

<h2 id="tocS_accountMembership">accountMembership</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmembership"></a>
<a id="schema_accountMembership"></a>
<a id="tocSaccountmembership"></a>
<a id="tocsaccountmembership"></a>

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "type": "string",
  "capabilities": {
    "sites": {
      "included": 0,
      "used": 0
    },
    "collaborators": {
      "included": 0,
      "used": 0
    }
  },
  "billing_name": "string",
  "billing_email": "string",
  "billing_details": "string",
  "billing_period": "string",
  "payment_method_id": "string",
  "type_name": "string",
  "type_id": "string",
  "owner_ids": [
    "string"
  ],
  "roles_allowed": [
    "string"
  ],
  "created_at": "string",
  "updated_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|type|string|false|none|none|
|capabilities|object|false|none|none|
|billing_name|string|false|none|none|
|billing_email|string|false|none|none|
|billing_details|string|false|none|none|
|billing_period|string|false|none|none|
|payment_method_id|string|false|none|none|
|type_name|string|false|none|none|
|type_id|string|false|none|none|
|owner_ids|[string]|false|none|none|
|roles_allowed|[string]|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|

<h2 id="tocS_auditLog">auditLog</h2>
<!-- backwards compatibility -->
<a id="schemaauditlog"></a>
<a id="schema_auditLog"></a>
<a id="tocSauditlog"></a>
<a id="tocsauditlog"></a>

```json
{
  "id": "string",
  "account_id": "string",
  "payload": {
    "actor_id": "string",
    "actor_name": "string",
    "actor_email": "string",
    "action": "string",
    "timestamp": "string",
    "log_type": "string",
    "property1": {},
    "property2": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|account_id|string|false|none|none|
|payload|object|false|none|none|

<h2 id="tocS_agentRunner">agentRunner</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunner"></a>
<a id="schema_agentRunner"></a>
<a id="tocSagentrunner"></a>
<a id="tocsagentrunner"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "parent_agent_runner_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "title": "string",
  "branch": "string",
  "result_branch": "string",
  "pr_url": "string",
  "pr_branch": "string",
  "pr_state": "string",
  "pr_number": 0,
  "pr_is_being_created": true,
  "pr_error": "string",
  "current_task": "string",
  "result_diff": "string",
  "sha": "string",
  "merge_commit_sha": "string",
  "merge_commit_error": "string",
  "merge_commit_is_being_created": true,
  "base_deploy_id": "string",
  "attached_file_keys": [
    "string"
  ],
  "active_session_created_at": "string",
  "has_result_diff": true,
  "latest_session_deploy_id": "string",
  "latest_session_deploy_url": "string",
  "preview_state": "string",
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|parent_agent_runner_id|string|false|none|none|
|state|string|false|none|One of `new`, `running`, `await_input`, `interrupted`, `error`, `done`, `cancelled` or `archived`.|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|done_at|string(dateTime)|false|none|none|
|title|string|false|none|none|
|branch|string|false|none|none|
|result_branch|string|false|none|none|
|pr_url|string|false|none|none|
|pr_branch|string|false|none|none|
|pr_state|string|false|none|One of `open`, `draft`, `merged` or `closed`.|
|pr_number|integer|false|none|none|
|pr_is_being_created|boolean|false|none|none|
|pr_error|string|false|none|none|
|current_task|string|false|none|What the agent is working on in the active session.|
|result_diff|string|false|none|none|
|sha|string|false|none|none|
|merge_commit_sha|string|false|none|none|
|merge_commit_error|string|false|none|none|
|merge_commit_is_being_created|boolean|false|none|none|
|base_deploy_id|string|false|none|none|
|attached_file_keys|[string]|false|none|none|
|active_session_created_at|string(dateTime)|false|none|none|
|has_result_diff|boolean|false|none|Whether the run has changes, available from `GET /agent_runners/{agent_runner_id}/diff`.|
|latest_session_deploy_id|string|false|none|none|
|latest_session_deploy_url|string|false|none|none|
|preview_state|string|false|none|State of the deploy building the latest preview. Null until that deploy exists; `ready` once the preview is live.|
|user|[agentRunnerUser](#schemaagentrunneruser)|false|none|none|

<h2 id="tocS_agentRunnerSetup">agentRunnerSetup</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersetup"></a>
<a id="schema_agentRunnerSetup"></a>
<a id="tocSagentrunnersetup"></a>
<a id="tocsagentrunnersetup"></a>

```json
{
  "prompt": "string",
  "branch": "string",
  "deploy_id": "string",
  "agent": "string",
  "model": "string",
  "effort": "low",
  "mode": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|string|true|none|none|
|branch|string|false|none|Branch to start from. Defaults to the site's production branch.|
|deploy_id|string|false|none|Deploy to start from. Takes precedence over `branch`.|
|agent|string|false|none|Agent to run, for example `claude` or `codex`.|
|model|string|false|none|Model for the agent to use. Omit to let Netlify choose.|
|effort|string|false|none|Reasoning effort. Omit to let the agent decide.|
|mode|string|false|none|`normal` (the default) changes code; `ask` answers questions without changing code.|

#### Enumerated Values

|Property|Value|
|---|---|
|effort|low|
|effort|medium|
|effort|high|
|mode|normal|
|mode|ask|

<h2 id="tocS_agentRunnerSession">agentRunnerSession</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersession"></a>
<a id="schema_agentRunnerSession"></a>
<a id="tocSagentrunnersession"></a>
<a id="tocsagentrunnersession"></a>

```json
{
  "id": "string",
  "agent_runner_id": "string",
  "dev_server_id": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "done_at": "string",
  "paused_at": "string",
  "title": "string",
  "prompt": "string",
  "agent_config": {
    "agent": "string",
    "model": "string"
  },
  "result": "string",
  "result_diff": "string",
  "commit_sha": "string",
  "deploy_id": "string",
  "deploy_url": "string",
  "duration": 0,
  "usage": {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_cached_input_tokens": 0,
    "total_cached_output_tokens": 0,
    "total_tokens": 0,
    "total_credits_cost": 0
  },
  "interactions": {
    "property1": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    },
    "property2": {
      "type": "string",
      "status": "string",
      "payload": null,
      "response": [
        null
      ]
    }
  },
  "steps": [
    {
      "title": "string",
      "message": "string"
    }
  ],
  "user": {
    "id": "string",
    "full_name": "string",
    "email": "string",
    "avatar_url": "string"
  },
  "attached_file_keys": [
    "string"
  ],
  "result_zip_file_name": "string",
  "is_published": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|agent_runner_id|string|false|none|none|
|dev_server_id|string|false|none|none|
|state|string|false|none|One of `new`, `running`, `await_input`, `interrupted`, `error`, `done` or `cancelled`.|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|done_at|string(dateTime)|false|none|none|
|paused_at|string(dateTime)|false|none|When the session paused waiting on an interaction. Null once it resumes.|
|title|string|false|none|none|
|prompt|string|false|none|none|
|agent_config|[agentRunnerSessionConfig](#schemaagentrunnersessionconfig)|false|none|none|
|result|string|false|none|The agent's summary of what it did.|
|result_diff|string|false|none|none|
|commit_sha|string|false|none|none|
|deploy_id|string|false|none|none|
|deploy_url|string|false|none|URL of the session's deploy preview.|
|duration|integer|false|none|none|
|usage|[agentRunnerSessionUsage](#schemaagentrunnersessionusage)|false|none|none|
|interactions|object|false|none|Questions and requests from the agent, keyed by reference ID. A pending one pauses the session in `await_input` until it's answered or skipped.|
|steps|[[agentRunnerSessionStep](#schemaagentrunnersessionstep)]|false|none|none|
|user|[agentRunnerUser](#schemaagentrunneruser)|false|none|none|
|attached_file_keys|[string]|false|none|none|
|result_zip_file_name|string|false|none|none|
|is_published|boolean|false|none|none|

<h2 id="tocS_agentRunnerSessionSetup">agentRunnerSessionSetup</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessionsetup"></a>
<a id="schema_agentRunnerSessionSetup"></a>
<a id="tocSagentrunnersessionsetup"></a>
<a id="tocsagentrunnersessionsetup"></a>

```json
{
  "prompt": "string",
  "agent": "string",
  "model": "string",
  "mode": "normal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prompt|string|false|none|What the agent should do. Required.|
|agent|string|false|none|none|
|model|string|false|none|Model for the agent to use. Omit to let Netlify choose.|
|mode|string|false|none|`normal` (the default) changes code; `ask` answers questions without changing code.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|normal|
|mode|ask|

<h2 id="tocS_agentRunnerSessionUsage">agentRunnerSessionUsage</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessionusage"></a>
<a id="schema_agentRunnerSessionUsage"></a>
<a id="tocSagentrunnersessionusage"></a>
<a id="tocsagentrunnersessionusage"></a>

```json
{
  "total_input_tokens": 0,
  "total_output_tokens": 0,
  "total_cached_input_tokens": 0,
  "total_cached_output_tokens": 0,
  "total_tokens": 0,
  "total_credits_cost": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_input_tokens|integer|false|none|none|
|total_output_tokens|integer|false|none|none|
|total_cached_input_tokens|integer|false|none|none|
|total_cached_output_tokens|integer|false|none|none|
|total_tokens|integer|false|none|none|
|total_credits_cost|number|false|none|Credits the session used.|

<h2 id="tocS_agentRunnerSessionInteraction">agentRunnerSessionInteraction</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessioninteraction"></a>
<a id="schema_agentRunnerSessionInteraction"></a>
<a id="tocSagentrunnersessioninteraction"></a>
<a id="tocsagentrunnersessioninteraction"></a>

```json
{
  "type": "string",
  "status": "string",
  "payload": null,
  "response": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|One of `question`, `authorization` or `setup_request`. Only questions can be answered; the others can only be skipped.|
|status|string|false|none|One of `pending`, `answered` or `skipped`.|
|payload|object|false|none|For a question, an array of questions, each with `question`, an optional `header`, `multiSelect` and `options` (each with `label` and an optional `description`). For `authorization` and `setup_request`, an object describing the request.|
|response|[object]|false|none|Answers aligned to `payload`; null entries were skipped.|

<h2 id="tocS_agentRunnerSessionAnswer">agentRunnerSessionAnswer</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessionanswer"></a>
<a id="schema_agentRunnerSessionAnswer"></a>
<a id="tocSagentrunnersessionanswer"></a>
<a id="tocsagentrunnersessionanswer"></a>

```json
{
  "refId": "string",
  "response": [
    null
  ],
  "skipped": true,
  "instruction": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refId|string|true|none|Key of the pending interaction in the session's `interactions`.|
|response|[object]|false|none|One entry per question in the interaction's `payload`: a string, an array of strings for a multi-select question, or null to skip that question.|
|skipped|boolean|false|none|Skip the whole interaction instead of answering it.|
|instruction|string|false|none|Instruction for the agent when skipping.|

<h2 id="tocS_agentRunnerError">agentRunnerError</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnererror"></a>
<a id="schema_agentRunnerError"></a>
<a id="tocSagentrunnererror"></a>
<a id="tocsagentrunnererror"></a>

```json
{
  "code": 0,
  "message": "string",
  "error_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|none|
|message|string|true|none|none|
|error_code|string|false|none|Machine-readable reason. Each operation lists the codes it can return.|

<h2 id="tocS_agentRunnerSessionStep">agentRunnerSessionStep</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessionstep"></a>
<a id="schema_agentRunnerSessionStep"></a>
<a id="tocSagentrunnersessionstep"></a>
<a id="tocsagentrunnersessionstep"></a>

```json
{
  "title": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_agentRunnerSessionConfig">agentRunnerSessionConfig</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnersessionconfig"></a>
<a id="schema_agentRunnerSessionConfig"></a>
<a id="tocSagentrunnersessionconfig"></a>
<a id="tocsagentrunnersessionconfig"></a>

```json
{
  "agent": "string",
  "model": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agent|string|false|none|none|
|model|string|false|none|none|

<h2 id="tocS_agentRunnerUser">agentRunnerUser</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunneruser"></a>
<a id="schema_agentRunnerUser"></a>
<a id="tocSagentrunneruser"></a>
<a id="tocsagentrunneruser"></a>

```json
{
  "id": "string",
  "full_name": "string",
  "email": "string",
  "avatar_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|full_name|string|false|none|none|
|email|string|false|none|none|
|avatar_url|string|false|none|none|

<h2 id="tocS_agentRunnerHook">agentRunnerHook</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnerhook"></a>
<a id="schema_agentRunnerHook"></a>
<a id="tocSagentrunnerhook"></a>
<a id="tocsagentrunnerhook"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "title": "string",
  "branch": "string",
  "prompt": "string",
  "agent": "string",
  "url": "string",
  "msg": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|title|string|false|none|none|
|branch|string|false|none|none|
|prompt|string|false|none|none|
|agent|string|false|none|none|
|url|string|false|none|none|
|msg|string|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_agentRunnerHookSetup">agentRunnerHookSetup</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnerhooksetup"></a>
<a id="schema_agentRunnerHookSetup"></a>
<a id="tocSagentrunnerhooksetup"></a>
<a id="tocsagentrunnerhooksetup"></a>

```json
{
  "title": "string",
  "branch": "string",
  "prompt": "string",
  "agent": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|branch|string|false|none|none|
|prompt|string|false|none|none|
|agent|string|false|none|none|

<h2 id="tocS_agentRunnerHookCreated">agentRunnerHookCreated</h2>
<!-- backwards compatibility -->
<a id="schemaagentrunnerhookcreated"></a>
<a id="schema_agentRunnerHookCreated"></a>
<a id="tocSagentrunnerhookcreated"></a>
<a id="tocsagentrunnerhookcreated"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "title": "string",
  "branch": "string",
  "prompt": "string",
  "agent": "string",
  "url": "string",
  "msg": "string",
  "created_at": "string",
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|title|string|false|none|none|
|branch|string|false|none|none|
|prompt|string|false|none|none|
|agent|string|false|none|none|
|url|string|false|none|none|
|msg|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|secret|string|false|none|none|

<h2 id="tocS_accountUsageCapability">accountUsageCapability</h2>
<!-- backwards compatibility -->
<a id="schemaaccountusagecapability"></a>
<a id="schema_accountUsageCapability"></a>
<a id="tocSaccountusagecapability"></a>
<a id="tocsaccountusagecapability"></a>

```json
{
  "included": 0,
  "used": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|included|integer|false|none|none|
|used|integer|false|none|none|

<h2 id="tocS_buildSetup">buildSetup</h2>
<!-- backwards compatibility -->
<a id="schemabuildsetup"></a>
<a id="schema_buildSetup"></a>
<a id="tocSbuildsetup"></a>
<a id="tocsbuildsetup"></a>

```json
{
  "image": "string",
  "clear_cache": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|none|
|clear_cache|boolean|false|none|none|

<h2 id="tocS_buildHookSetup">buildHookSetup</h2>
<!-- backwards compatibility -->
<a id="schemabuildhooksetup"></a>
<a id="schema_buildHookSetup"></a>
<a id="tocSbuildhooksetup"></a>
<a id="tocsbuildhooksetup"></a>

```json
{
  "title": "string",
  "branch": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|branch|string|false|none|none|

<h2 id="tocS_buildHook">buildHook</h2>
<!-- backwards compatibility -->
<a id="schemabuildhook"></a>
<a id="schema_buildHook"></a>
<a id="tocSbuildhook"></a>
<a id="tocsbuildhook"></a>

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|title|string|false|none|none|
|branch|string|false|none|none|
|url|string|false|none|none|
|site_id|string|false|none|none|
|created_at|string(dateTime)|false|none|none|

<h2 id="tocS_deployedBranch">deployedBranch</h2>
<!-- backwards compatibility -->
<a id="schemadeployedbranch"></a>
<a id="schema_deployedBranch"></a>
<a id="tocSdeployedbranch"></a>
<a id="tocsdeployedbranch"></a>

```json
{
  "id": "string",
  "deploy_id": "string",
  "name": "string",
  "slug": "string",
  "url": "string",
  "ssl_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|deploy_id|string|false|none|none|
|name|string|false|none|none|
|slug|string|false|none|none|
|url|string|false|none|none|
|ssl_url|string|false|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "string",
  "uid": "string",
  "full_name": "string",
  "avatar_url": "string",
  "email": "string",
  "affiliate_id": "string",
  "site_count": 0,
  "created_at": "string",
  "last_login": "string",
  "login_providers": [
    "string"
  ],
  "onboarding_progress": {
    "slides": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|uid|string|false|none|none|
|full_name|string|false|none|none|
|avatar_url|string|false|none|none|
|email|string|false|none|none|
|affiliate_id|string|false|none|none|
|site_count|integer(int64)|false|none|none|
|created_at|string(dateTime)|false|none|none|
|last_login|string(dateTime)|false|none|none|
|login_providers|[string]|false|none|none|
|onboarding_progress|object|false|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int64)|false|none|none|
|message|string|true|none|none|

<h2 id="tocS_functionSchedule">functionSchedule</h2>
<!-- backwards compatibility -->
<a id="schemafunctionschedule"></a>
<a id="schema_functionSchedule"></a>
<a id="tocSfunctionschedule"></a>
<a id="tocsfunctionschedule"></a>

```json
{
  "name": "string",
  "cron": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|cron|string|false|none|none|

<h2 id="tocS_functionConfig">functionConfig</h2>
<!-- backwards compatibility -->
<a id="schemafunctionconfig"></a>
<a id="schema_functionConfig"></a>
<a id="tocSfunctionconfig"></a>
<a id="tocsfunctionconfig"></a>

```json
{
  "display_name": "string",
  "generator": "string",
  "build_data": {},
  "memory": 0,
  "routes": [
    {
      "pattern": "string",
      "literal": "string",
      "expression": "string",
      "methods": [
        "GET"
      ],
      "prefer_static": true
    }
  ],
  "excluded_routes": [
    {
      "pattern": "string",
      "literal": "string",
      "expression": "string"
    }
  ],
  "priority": 0,
  "region": "string",
  "traffic_rules": {
    "action": {
      "type": "string",
      "config": {
        "to": "string",
        "rate_limit_config": {
          "algorithm": "sliding_window",
          "window_size": 0,
          "window_limit": 0
        },
        "aggregate": {
          "keys": [
            {
              "type": "ip"
            }
          ]
        }
      }
    }
  },
  "vcpu": 0,
  "event_subscriptions": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_name|string|false|none|none|
|generator|string|false|none|none|
|build_data|object|false|none|none|
|memory|integer|false|none|The function's memory allocation in MB. Mutually exclusive with `vcpu`.<br>|
|routes|[[functionRoute](#schemafunctionroute)]|false|none|none|
|excluded_routes|[[excludedFunctionRoute](#schemaexcludedfunctionroute)]|false|none|none|
|priority|integer|false|none|none|
|region|string|false|none|none|
|traffic_rules|[trafficRulesConfig](#schematrafficrulesconfig)|false|none|none|
|vcpu|number(float)|false|none|Number of vCPUs to provision for the function. Allowed range is<br>0.5–2.<br>|
|event_subscriptions|[string]|false|none|none|

<h2 id="tocS_functionRoute">functionRoute</h2>
<!-- backwards compatibility -->
<a id="schemafunctionroute"></a>
<a id="schema_functionRoute"></a>
<a id="tocSfunctionroute"></a>
<a id="tocsfunctionroute"></a>

```json
{
  "pattern": "string",
  "literal": "string",
  "expression": "string",
  "methods": [
    "GET"
  ],
  "prefer_static": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|string|false|none|none|
|literal|string|false|none|none|
|expression|string|false|none|none|
|methods|[string]|false|none|none|
|prefer_static|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|methods|GET|
|methods|POST|
|methods|PUT|
|methods|PATCH|
|methods|DELETE|
|methods|OPTIONS|

<h2 id="tocS_excludedFunctionRoute">excludedFunctionRoute</h2>
<!-- backwards compatibility -->
<a id="schemaexcludedfunctionroute"></a>
<a id="schema_excludedFunctionRoute"></a>
<a id="tocSexcludedfunctionroute"></a>
<a id="tocsexcludedfunctionroute"></a>

```json
{
  "pattern": "string",
  "literal": "string",
  "expression": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pattern|string|false|none|none|
|literal|string|false|none|none|
|expression|string|false|none|none|

<h2 id="tocS_trafficRulesConfig">trafficRulesConfig</h2>
<!-- backwards compatibility -->
<a id="schematrafficrulesconfig"></a>
<a id="schema_trafficRulesConfig"></a>
<a id="tocStrafficrulesconfig"></a>
<a id="tocstrafficrulesconfig"></a>

```json
{
  "action": {
    "type": "string",
    "config": {
      "to": "string",
      "rate_limit_config": {
        "algorithm": "sliding_window",
        "window_size": 0,
        "window_limit": 0
      },
      "aggregate": {
        "keys": [
          {
            "type": "ip"
          }
        ]
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|object|false|none|none|

<h2 id="tocS_trafficRulesRateLimitConfig">trafficRulesRateLimitConfig</h2>
<!-- backwards compatibility -->
<a id="schematrafficrulesratelimitconfig"></a>
<a id="schema_trafficRulesRateLimitConfig"></a>
<a id="tocStrafficrulesratelimitconfig"></a>
<a id="tocstrafficrulesratelimitconfig"></a>

```json
{
  "algorithm": "sliding_window",
  "window_size": 0,
  "window_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|window_size|integer|false|none|none|
|window_limit|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|algorithm|sliding_window|

<h2 id="tocS_trafficRulesAggregateConfig">trafficRulesAggregateConfig</h2>
<!-- backwards compatibility -->
<a id="schematrafficrulesaggregateconfig"></a>
<a id="schema_trafficRulesAggregateConfig"></a>
<a id="tocStrafficrulesaggregateconfig"></a>
<a id="tocstrafficrulesaggregateconfig"></a>

```json
{
  "keys": [
    {
      "type": "ip"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[object]|false|none|none|

<h2 id="tocS_siteFunction">siteFunction</h2>
<!-- backwards compatibility -->
<a id="schemasitefunction"></a>
<a id="schema_siteFunction"></a>
<a id="tocSsitefunction"></a>
<a id="tocssitefunction"></a>

```json
{
  "branch": "string",
  "created_at": "string",
  "functions": [
    {}
  ],
  "id": "string",
  "log_type": "string",
  "provider": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|functions|[object]|false|none|none|
|id|string|false|none|none|
|log_type|string|false|none|none|
|provider|string|false|none|none|

<h2 id="tocS_devServer">devServer</h2>
<!-- backwards compatibility -->
<a id="schemadevserver"></a>
<a id="schema_devServer"></a>
<a id="tocSdevserver"></a>
<a id="tocsdevserver"></a>

```json
{
  "id": "string",
  "site_id": "string",
  "branch": "string",
  "url": "string",
  "state": "string",
  "created_at": "string",
  "updated_at": "string",
  "starting_at": "string",
  "error_at": "string",
  "live_at": "string",
  "done_at": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|site_id|string|false|none|none|
|branch|string|false|none|none|
|url|string|false|none|none|
|state|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|updated_at|string(dateTime)|false|none|none|
|starting_at|string(dateTime)|false|none|none|
|error_at|string(dateTime)|false|none|none|
|live_at|string(dateTime)|false|none|none|
|done_at|string(dateTime)|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_devServerHook">devServerHook</h2>
<!-- backwards compatibility -->
<a id="schemadevserverhook"></a>
<a id="schema_devServerHook"></a>
<a id="tocSdevserverhook"></a>
<a id="tocsdevserverhook"></a>

```json
{
  "id": "string",
  "title": "string",
  "branch": "string",
  "url": "string",
  "site_id": "string",
  "created_at": "string",
  "type": "new_dev_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|title|string|false|none|none|
|branch|string|false|none|none|
|url|string|false|none|none|
|site_id|string|false|none|none|
|created_at|string(dateTime)|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|new_dev_server|
|type|content_refresh|

<h2 id="tocS_devServerHookSetup">devServerHookSetup</h2>
<!-- backwards compatibility -->
<a id="schemadevserverhooksetup"></a>
<a id="schema_devServerHookSetup"></a>
<a id="tocSdevserverhooksetup"></a>
<a id="tocsdevserverhooksetup"></a>

```json
{
  "title": "string",
  "branch": "string",
  "type": "new_dev_server"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|none|
|branch|string|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|new_dev_server|
|type|content_refresh|

<h2 id="tocS_providerDefinition">providerDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaproviderdefinition"></a>
<a id="schema_providerDefinition"></a>
<a id="tocSproviderdefinition"></a>
<a id="tocsproviderdefinition"></a>

```json
{
  "token_env_var": "string",
  "url_env_var": "string",
  "models": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token_env_var|string|false|none|none|
|url_env_var|string|false|none|none|
|models|[string]|false|none|none|

<h2 id="tocS_aiGatewayToken">aiGatewayToken</h2>
<!-- backwards compatibility -->
<a id="schemaaigatewaytoken"></a>
<a id="schema_aiGatewayToken"></a>
<a id="tocSaigatewaytoken"></a>
<a id="tocsaigatewaytoken"></a>

```json
{
  "token": "string",
  "url": "string",
  "expires_at": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|The AI Gateway authentication token|
|url|string|false|none|AI gateway base url|
|expires_at|integer(int64)|false|none|Unix timestamp when the token expires|
