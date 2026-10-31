<h1 id="my-business-account-management-api">My Business Account Management API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Account Management API provides an interface for managing access to a location on Google. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessaccountmanagement.googleapis.com/">https://mybusinessaccountmanagement.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-account-management-api-accounts">accounts</h1>

## mybusinessaccountmanagement.accounts.list

<a id="opIdmybusinessaccountmanagement.accounts.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/accounts \
  -H 'Accept: application/json'
```

`GET /v1/accounts`

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

<h3 id="mybusinessaccountmanagementaccountslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.|
|pageSize|query|integer|false|Optional. How many accounts to fetch per page. The default and maximum is 20.|
|pageToken|query|string|false|Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.|
|parentAccount|query|string|false|Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id}`.|
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
  "accounts": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "name": "string",
      "organizationInfo": {
        "address": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "phoneNumber": "string",
        "registeredDomain": "string"
      },
      "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
      "primaryOwner": "string",
      "role": "ACCOUNT_ROLE_UNSPECIFIED",
      "type": "ACCOUNT_TYPE_UNSPECIFIED",
      "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
      "vettedState": "VETTED_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessaccountmanagementaccountslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAccountsResponse](#schemalistaccountsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.accounts.create

<a id="opIdmybusinessaccountmanagement.accounts.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "accountName": "string",
    "name": "string",
    "primaryOwner": "string",
    "type": "ACCOUNT_TYPE_UNSPECIFIED"
  }'
```

`POST /v1/accounts`

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.

> Body parameter

```json
{
  "accountName": "string",
  "name": "string",
  "primaryOwner": "string",
  "type": "ACCOUNT_TYPE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementaccountscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
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
|body|body|[Account](#schemaaccount)|false|none|
|» accountName|body|string|false|Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.|
|» name|body|string|false|Immutable. The resource name, in the format `accounts/{account_id}`.|
|» primaryOwner|body|string|false|Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`.|
|» type|body|string|false|Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|ACCOUNT_TYPE_UNSPECIFIED|
|» type|PERSONAL|
|» type|LOCATION_GROUP|
|» type|USER_GROUP|
|» type|ORGANIZATION|

> Example responses

> 200 Response

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "phoneNumber": "string",
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "primaryOwner": "string",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "type": "ACCOUNT_TYPE_UNSPECIFIED",
  "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
  "vettedState": "VETTED_STATE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementaccountscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.accounts.get

<a id="opIdmybusinessaccountmanagement.accounts.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.

<h3 id="mybusinessaccountmanagementaccountsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the account to fetch.|
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
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "phoneNumber": "string",
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "primaryOwner": "string",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "type": "ACCOUNT_TYPE_UNSPECIFIED",
  "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
  "vettedState": "VETTED_STATE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementaccountsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Account](#schemaaccount)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.accounts.invitations.accept

<a id="opIdmybusinessaccountmanagement.accounts.invitations.accept"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:accept \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:accept`

Accepts the specified invitation.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountmanagementaccountsinvitationsaccept-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the invitation that is being accepted. `accounts/{account_id}/invitations/{invitation_id}`|
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
|body|body|[AcceptInvitationRequest](#schemaacceptinvitationrequest)|false|none|

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

<h3 id="mybusinessaccountmanagementaccountsinvitationsaccept-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.accounts.invitations.decline

<a id="opIdmybusinessaccountmanagement.accounts.invitations.decline"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:decline \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:decline`

Declines the specified invitation.

> Body parameter

```json
{}
```

<h3 id="mybusinessaccountmanagementaccountsinvitationsdecline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the account invitation that is being declined. `accounts/{account_id}/invitations/{invitation_id}`|
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
|body|body|[DeclineInvitationRequest](#schemadeclineinvitationrequest)|false|none|

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

<h3 id="mybusinessaccountmanagementaccountsinvitationsdecline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.accounts.invitations.list

<a id="opIdmybusinessaccountmanagement.accounts.invitations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/invitations \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/invitations`

Lists pending invitations for the specified account.

<h3 id="mybusinessaccountmanagementaccountsinvitationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id}/invitations`|
|filter|query|string|false|Optional. Filtering the response is supported via the Invitation.target_type field.|
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
      "name": "string",
      "role": "ADMIN_ROLE_UNSPECIFIED",
      "targetAccount": {
        "accountName": "string",
        "accountNumber": "string",
        "name": "string",
        "organizationInfo": {
          "address": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "phoneNumber": "string",
          "registeredDomain": "string"
        },
        "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
        "primaryOwner": "string",
        "role": "ACCOUNT_ROLE_UNSPECIFIED",
        "type": "ACCOUNT_TYPE_UNSPECIFIED",
        "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
        "vettedState": "VETTED_STATE_UNSPECIFIED"
      },
      "targetLocation": {
        "address": "string",
        "locationName": "string"
      },
      "targetType": "TARGET_TYPE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessaccountmanagementaccountsinvitationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListInvitationsResponse](#schemalistinvitationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-account-management-api-locations">locations</h1>

## mybusinessaccountmanagement.locations.admins.delete

<a id="opIdmybusinessaccountmanagement.locations.admins.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Removes the specified admin as a manager of the specified location.

<h3 id="mybusinessaccountmanagementlocationsadminsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the admin to remove from the location.|
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

<h3 id="mybusinessaccountmanagementlocationsadminsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.locations.admins.patch

<a id="opIdmybusinessaccountmanagement.locations.admins.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string",
    "admin": "string",
    "name": "string",
    "role": "ADMIN_ROLE_UNSPECIFIED"
  }'
```

`PATCH /v1/{name}`

Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.

> Body parameter

```json
{
  "account": "string",
  "admin": "string",
  "name": "string",
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementlocationsadminspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.|
|updateMask|query|string|false|Required. The specific fields that should be updated. The only editable field is role.|
|validateOnly|query|boolean|false|Optional. If true, the request is validated without actually updating the account.|
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
|body|body|[Admin](#schemaadmin)|false|none|
|» account|body|string|false|Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.|
|» admin|body|string|false|Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.|
|» name|body|string|false|Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.|
|» role|body|string|false|Required. Specifies the role that this admin uses with the specified Account or Location.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|ADMIN_ROLE_UNSPECIFIED|
|» role|PRIMARY_OWNER|
|» role|OWNER|
|» role|MANAGER|
|» role|SITE_MANAGER|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementlocationsadminspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Admin](#schemaadmin)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.locations.transfer

<a id="opIdmybusinessaccountmanagement.locations.transfer"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:transfer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "destinationAccount": "string"
  }'
```

`POST /v1/{name}:transfer`

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

> Body parameter

```json
{
  "destinationAccount": "string"
}
```

<h3 id="mybusinessaccountmanagementlocationstransfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the location to transfer. `locations/{location_id}`.|
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
|body|body|[TransferLocationRequest](#schematransferlocationrequest)|false|none|
|» destinationAccount|body|string|false|Required. Name of the account resource to transfer the location to (for example, "accounts/{account}").|

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

<h3 id="mybusinessaccountmanagementlocationstransfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.locations.admins.list

<a id="opIdmybusinessaccountmanagement.locations.admins.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/admins \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/admins`

Lists all of the admins for the specified location.

<h3 id="mybusinessaccountmanagementlocationsadminslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location to list admins of. `locations/{location_id}/admins`.|
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
  "admins": [
    {
      "account": "string",
      "admin": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="mybusinessaccountmanagementlocationsadminslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationAdminsResponse](#schemalistlocationadminsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessaccountmanagement.locations.admins.create

<a id="opIdmybusinessaccountmanagement.locations.admins.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/admins \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string",
    "admin": "string",
    "name": "string",
    "role": "ADMIN_ROLE_UNSPECIFIED"
  }'
```

`POST /v1/{parent}/admins`

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

> Body parameter

```json
{
  "account": "string",
  "admin": "string",
  "name": "string",
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementlocationsadminscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the location this admin is created for. `locations/{location_id}/admins`.|
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
|body|body|[Admin](#schemaadmin)|false|none|
|» account|body|string|false|Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.|
|» admin|body|string|false|Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.|
|» name|body|string|false|Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.|
|» role|body|string|false|Required. Specifies the role that this admin uses with the specified Account or Location.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» role|ADMIN_ROLE_UNSPECIFIED|
|» role|PRIMARY_OWNER|
|» role|OWNER|
|» role|MANAGER|
|» role|SITE_MANAGER|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "admin": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

<h3 id="mybusinessaccountmanagementlocationsadminscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Admin](#schemaadmin)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AcceptInvitationRequest">AcceptInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaacceptinvitationrequest"></a>
<a id="schema_AcceptInvitationRequest"></a>
<a id="tocSacceptinvitationrequest"></a>
<a id="tocsacceptinvitationrequest"></a>

```json
{}
```

Request message for AccessControl.AcceptInvitation.

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountName": "string",
  "accountNumber": "string",
  "name": "string",
  "organizationInfo": {
    "address": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "phoneNumber": "string",
    "registeredDomain": "string"
  },
  "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
  "primaryOwner": "string",
  "role": "ACCOUNT_ROLE_UNSPECIFIED",
  "type": "ACCOUNT_TYPE_UNSPECIFIED",
  "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
  "vettedState": "VETTED_STATE_UNSPECIFIED"
}
```

An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|Required. The name of the account. For an account of type `PERSONAL`, this is the first and last name of the user account.|
|accountNumber|string|false|read-only|Output only. Account reference number if provisioned.|
|name|string|false|none|Immutable. The resource name, in the format `accounts/{account_id}`.|
|organizationInfo|[OrganizationInfo](#schemaorganizationinfo)|false|none|Output only. Additional info for an organization. This is populated only for an organization account.|
|permissionLevel|string|false|read-only|Output only. Specifies the permission level the user has for this account.|
|primaryOwner|string|false|none|Required. Input only. The resource name of the account which will be the primary owner of the account being created. It should be of the form `accounts/{account_id}`.|
|role|string|false|read-only|Output only. Specifies the AccountRole of this account.|
|type|string|false|none|Required. Contains the type of account. Accounts of type PERSONAL and ORGANIZATION cannot be created using this API.|
|verificationState|string|false|read-only|Output only. If verified, future locations that are created are automatically connected to Google Maps, and have Google+ pages created, without requiring moderation.|
|vettedState|string|false|read-only|Output only. Indicates whether the account is vetted by Google. A vetted account is able to verify locations via the VETTED_PARTNER method.|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionLevel|PERMISSION_LEVEL_UNSPECIFIED|
|permissionLevel|OWNER_LEVEL|
|permissionLevel|MEMBER_LEVEL|
|role|ACCOUNT_ROLE_UNSPECIFIED|
|role|PRIMARY_OWNER|
|role|OWNER|
|role|MANAGER|
|role|SITE_MANAGER|
|type|ACCOUNT_TYPE_UNSPECIFIED|
|type|PERSONAL|
|type|LOCATION_GROUP|
|type|USER_GROUP|
|type|ORGANIZATION|
|verificationState|VERIFICATION_STATE_UNSPECIFIED|
|verificationState|VERIFIED|
|verificationState|UNVERIFIED|
|verificationState|VERIFICATION_REQUESTED|
|vettedState|VETTED_STATE_UNSPECIFIED|
|vettedState|NOT_VETTED|
|vettedState|VETTED|
|vettedState|INVALID|

<h2 id="tocS_Admin">Admin</h2>
<!-- backwards compatibility -->
<a id="schemaadmin"></a>
<a id="schema_Admin"></a>
<a id="tocSadmin"></a>
<a id="tocsadmin"></a>

```json
{
  "account": "string",
  "admin": "string",
  "name": "string",
  "pendingInvitation": true,
  "role": "ADMIN_ROLE_UNSPECIFIED"
}
```

An administrator of an Account or a location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Immutable. The name of the Account resource that this Admin refers to. Used when calling locations.admins.create to invite a LocationGroup as an admin. If both this field and `admin` are set on `CREATE` requests, this field takes precedence and the email address in `admin` will be ignored. Format: `accounts/{account}`.|
|admin|string|false|none|Optional. The name of the admin. When making the initial invitation, this is the invitee's email address. On `GET` calls, the user's email address is returned if the invitation is still pending. Otherwise, it contains the user's first and last names. This field is only needed to be set during admin creation.|
|name|string|false|none|Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.|
|pendingInvitation|boolean|false|read-only|Output only. Indicates whether this admin has a pending invitation for the specified resource.|
|role|string|false|none|Required. Specifies the role that this admin uses with the specified Account or Location.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ADMIN_ROLE_UNSPECIFIED|
|role|PRIMARY_OWNER|
|role|OWNER|
|role|MANAGER|
|role|SITE_MANAGER|

<h2 id="tocS_DeclineInvitationRequest">DeclineInvitationRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeclineinvitationrequest"></a>
<a id="schema_DeclineInvitationRequest"></a>
<a id="tocSdeclineinvitationrequest"></a>
<a id="tocsdeclineinvitationrequest"></a>

```json
{}
```

Request message for AccessControl.DeclineInvitation.

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

<h2 id="tocS_Invitation">Invitation</h2>
<!-- backwards compatibility -->
<a id="schemainvitation"></a>
<a id="schema_Invitation"></a>
<a id="tocSinvitation"></a>
<a id="tocsinvitation"></a>

```json
{
  "name": "string",
  "role": "ADMIN_ROLE_UNSPECIFIED",
  "targetAccount": {
    "accountName": "string",
    "accountNumber": "string",
    "name": "string",
    "organizationInfo": {
      "address": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "phoneNumber": "string",
      "registeredDomain": "string"
    },
    "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
    "primaryOwner": "string",
    "role": "ACCOUNT_ROLE_UNSPECIFIED",
    "type": "ACCOUNT_TYPE_UNSPECIFIED",
    "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
    "vettedState": "VETTED_STATE_UNSPECIFIED"
  },
  "targetLocation": {
    "address": "string",
    "locationName": "string"
  },
  "targetType": "TARGET_TYPE_UNSPECIFIED"
}
```

Represents a pending invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name for the invitation. `accounts/{account_id}/invitations/{invitation_id}`.|
|role|string|false|read-only|Output only. The invited role on the account.|
|targetAccount|[Account](#schemaaccount)|false|none|The sparsely populated account this invitation is for.|
|targetLocation|[TargetLocation](#schematargetlocation)|false|none|The target location this invitation is for.|
|targetType|string|false|read-only|Output only. Specifies which target types should appear in the response.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|ADMIN_ROLE_UNSPECIFIED|
|role|PRIMARY_OWNER|
|role|OWNER|
|role|MANAGER|
|role|SITE_MANAGER|
|targetType|TARGET_TYPE_UNSPECIFIED|
|targetType|ACCOUNTS_ONLY|
|targetType|LOCATIONS_ONLY|

<h2 id="tocS_ListAccountAdminsResponse">ListAccountAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountadminsresponse"></a>
<a id="schema_ListAccountAdminsResponse"></a>
<a id="tocSlistaccountadminsresponse"></a>
<a id="tocslistaccountadminsresponse"></a>

```json
{
  "accountAdmins": [
    {
      "account": "string",
      "admin": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

Response message for AccessControl.ListAccountAdmins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountAdmins|[[Admin](#schemaadmin)]|false|none|A collection of Admin instances.|

<h2 id="tocS_ListAccountsResponse">ListAccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistaccountsresponse"></a>
<a id="schema_ListAccountsResponse"></a>
<a id="tocSlistaccountsresponse"></a>
<a id="tocslistaccountsresponse"></a>

```json
{
  "accounts": [
    {
      "accountName": "string",
      "accountNumber": "string",
      "name": "string",
      "organizationInfo": {
        "address": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "phoneNumber": "string",
        "registeredDomain": "string"
      },
      "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
      "primaryOwner": "string",
      "role": "ACCOUNT_ROLE_UNSPECIFIED",
      "type": "ACCOUNT_TYPE_UNSPECIFIED",
      "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
      "vettedState": "VETTED_STATE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for Accounts.ListAccounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|A collection of accounts to which the user has access. The personal account of the user doing the query will always be the first item of the result, unless it is filtered out.|
|nextPageToken|string|false|none|If the number of accounts exceeds the requested page size, this field is populated with a token to fetch the next page of accounts on a subsequent call to `accounts.list`. If there are no more accounts, this field is not present in the response.|

<h2 id="tocS_ListInvitationsResponse">ListInvitationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistinvitationsresponse"></a>
<a id="schema_ListInvitationsResponse"></a>
<a id="tocSlistinvitationsresponse"></a>
<a id="tocslistinvitationsresponse"></a>

```json
{
  "invitations": [
    {
      "name": "string",
      "role": "ADMIN_ROLE_UNSPECIFIED",
      "targetAccount": {
        "accountName": "string",
        "accountNumber": "string",
        "name": "string",
        "organizationInfo": {
          "address": {
            "addressLines": [
              "string"
            ],
            "administrativeArea": "string",
            "languageCode": "string",
            "locality": "string",
            "organization": "string",
            "postalCode": "string",
            "recipients": [
              "string"
            ],
            "regionCode": "string",
            "revision": 0,
            "sortingCode": "string",
            "sublocality": "string"
          },
          "phoneNumber": "string",
          "registeredDomain": "string"
        },
        "permissionLevel": "PERMISSION_LEVEL_UNSPECIFIED",
        "primaryOwner": "string",
        "role": "ACCOUNT_ROLE_UNSPECIFIED",
        "type": "ACCOUNT_TYPE_UNSPECIFIED",
        "verificationState": "VERIFICATION_STATE_UNSPECIFIED",
        "vettedState": "VETTED_STATE_UNSPECIFIED"
      },
      "targetLocation": {
        "address": "string",
        "locationName": "string"
      },
      "targetType": "TARGET_TYPE_UNSPECIFIED"
    }
  ]
}
```

Response message for AccessControl.ListInvitations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitations|[[Invitation](#schemainvitation)]|false|none|A collection of invitations that are pending for the account. The number of invitations listed here cannot exceed 1000.|

<h2 id="tocS_ListLocationAdminsResponse">ListLocationAdminsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationadminsresponse"></a>
<a id="schema_ListLocationAdminsResponse"></a>
<a id="tocSlistlocationadminsresponse"></a>
<a id="tocslistlocationadminsresponse"></a>

```json
{
  "admins": [
    {
      "account": "string",
      "admin": "string",
      "name": "string",
      "pendingInvitation": true,
      "role": "ADMIN_ROLE_UNSPECIFIED"
    }
  ]
}
```

Response message for AccessControl.ListLocationAdmins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|admins|[[Admin](#schemaadmin)]|false|none|A collection of Admins.|

<h2 id="tocS_OrganizationInfo">OrganizationInfo</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinfo"></a>
<a id="schema_OrganizationInfo"></a>
<a id="tocSorganizationinfo"></a>
<a id="tocsorganizationinfo"></a>

```json
{
  "address": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "phoneNumber": "string",
  "registeredDomain": "string"
}
```

Additional information stored for an organization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PostalAddress](#schemapostaladdress)|false|none|Output only. The postal address for the account.|
|phoneNumber|string|false|read-only|Output only. The contact number for the organization.|
|registeredDomain|string|false|read-only|Output only. The registered domain for the account.|

<h2 id="tocS_PostalAddress">PostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemapostaladdress"></a>
<a id="schema_PostalAddress"></a>
<a id="tocSpostaladdress"></a>
<a id="tocspostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_TargetLocation">TargetLocation</h2>
<!-- backwards compatibility -->
<a id="schematargetlocation"></a>
<a id="schema_TargetLocation"></a>
<a id="tocStargetlocation"></a>
<a id="tocstargetlocation"></a>

```json
{
  "address": "string",
  "locationName": "string"
}
```

Represents a target location for a pending invitation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|The address of the location to which the user is invited.|
|locationName|string|false|none|The name of the location to which the user is invited.|

<h2 id="tocS_TransferLocationRequest">TransferLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schematransferlocationrequest"></a>
<a id="schema_TransferLocationRequest"></a>
<a id="tocStransferlocationrequest"></a>
<a id="tocstransferlocationrequest"></a>

```json
{
  "destinationAccount": "string"
}
```

Request message for AccessControl.TransferLocation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationAccount|string|false|none|Required. Name of the account resource to transfer the location to (for example, "accounts/{account}").|
