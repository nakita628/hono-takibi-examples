<h1 id="google-workspace-reseller-api">Google Workspace Reseller API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Perform common functions that are available on the Channel Services console at scale, like placing orders and viewing customer information

Base URLs:

* <a href="https://reseller.googleapis.com/">https://reseller.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/google-apps/reseller/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.order|Manage users on your domain|
|https://www.googleapis.com/auth/apps.order.readonly|Manage users on your domain|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/apps.order|Manage users on your domain|
|https://www.googleapis.com/auth/apps.order.readonly|Manage users on your domain|

<h1 id="google-workspace-reseller-api-customers">customers</h1>

## reseller.customers.insert

<a id="opIdreseller.customers.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "customerDomain": "string",
    "customerDomainVerified": true,
    "customerId": "string",
    "customerType": "customerTypeUnspecified",
    "kind": "reseller#customer",
    "phoneNumber": "string",
    "postalAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "contactName": "string",
      "countryCode": "string",
      "kind": "customers#address",
      "locality": "string",
      "organizationName": "string",
      "postalCode": "string",
      "region": "string"
    },
    "primaryAdmin": {
      "primaryEmail": "string"
    },
    "resourceUiUrl": "string"
  }'
```

`POST /apps/reseller/v1/customers`

Orders a new customer's account. Before ordering a new customer account, establish whether the customer account already exists using the [`customers.get`](/admin-sdk/reseller/v1/reference/customers/get) If the customer account exists as a direct Google account or as a resold customer account from another reseller, use the `customerAuthToken\` as described in [order a resold account for an existing customer](/admin-sdk/reseller/v1/how-tos/manage_customers#create_existing_customer). For more information about ordering a new customer account, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#create_customer). After creating a new customer account, you must provision a user as an administrator. The customer's administrator is required to sign in to the Admin console and sign the G Suite via Reseller agreement to activate the account. Resellers are prohibited from signing the G Suite via Reseller agreement on the customer's behalf. For more information, see [order a new customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#tos).

> Body parameter

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomersinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerAuthToken|query|string|false|The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.|
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
|body|body|[Customer](#schemacustomer)|false|none|
|» alternateEmail|body|string|false|Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer.|
|» customerDomain|body|string|false|The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer.|
|» customerDomainVerified|body|boolean|false|Whether the customer's primary domain has been verified.|
|» customerId|body|string|false|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|» customerType|body|string|false|Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479).|
|» kind|body|string|false|Identifies the resource as a customer. Value: `reseller#customer`|
|» phoneNumber|body|string|false|Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.|
|» postalAddress|body|[Address](#schemaaddress)|false|A customer's address information. Each field has a limit of 255 charcters.|
|» primaryAdmin|body|[PrimaryAdmin](#schemaprimaryadmin)|false|The first admin details of the customer, present in case of TEAM customer.|
|» resourceUiUrl|body|string|false|URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» customerType|customerTypeUnspecified|
|» customerType|domain|
|» customerType|team|

> Example responses

> 200 Response

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomersinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.customers.get

<a id="opIdreseller.customers.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/reseller/v1/customers/{customerId}`

Gets a customer account. Use this operation to see a customer account already in your reseller management, or to see the minimal account information for an existing customer that you do not manage. For more information about the API response for existing customers, see [retrieving a customer account](/admin-sdk/reseller/v1/how-tos/manage_customers#get_customer).

<h3 id="resellercustomersget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
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
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomersget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order ), Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order.readonly )
</aside>

## reseller.customers.update

<a id="opIdreseller.customers.update"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "customerDomain": "string",
    "customerDomainVerified": true,
    "customerId": "string",
    "customerType": "customerTypeUnspecified",
    "kind": "reseller#customer",
    "phoneNumber": "string",
    "postalAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "contactName": "string",
      "countryCode": "string",
      "kind": "customers#address",
      "locality": "string",
      "organizationName": "string",
      "postalCode": "string",
      "region": "string"
    },
    "primaryAdmin": {
      "primaryEmail": "string"
    },
    "resourceUiUrl": "string"
  }'
```

`PUT /apps/reseller/v1/customers/{customerId}`

Updates a customer account's settings. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [update a customer's settings](/admin-sdk/reseller/v1/how-tos/manage_customers#update_customer).

> Body parameter

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomersupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
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
|body|body|[Customer](#schemacustomer)|false|none|
|» alternateEmail|body|string|false|Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer.|
|» customerDomain|body|string|false|The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer.|
|» customerDomainVerified|body|boolean|false|Whether the customer's primary domain has been verified.|
|» customerId|body|string|false|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|» customerType|body|string|false|Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479).|
|» kind|body|string|false|Identifies the resource as a customer. Value: `reseller#customer`|
|» phoneNumber|body|string|false|Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.|
|» postalAddress|body|[Address](#schemaaddress)|false|A customer's address information. Each field has a limit of 255 charcters.|
|» primaryAdmin|body|[PrimaryAdmin](#schemaprimaryadmin)|false|The first admin details of the customer, present in case of TEAM customer.|
|» resourceUiUrl|body|string|false|URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» customerType|customerTypeUnspecified|
|» customerType|domain|
|» customerType|team|

> Example responses

> 200 Response

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomersupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.customers.patch

<a id="opIdreseller.customers.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "alternateEmail": "string",
    "customerDomain": "string",
    "customerDomainVerified": true,
    "customerId": "string",
    "customerType": "customerTypeUnspecified",
    "kind": "reseller#customer",
    "phoneNumber": "string",
    "postalAddress": {
      "addressLine1": "string",
      "addressLine2": "string",
      "addressLine3": "string",
      "contactName": "string",
      "countryCode": "string",
      "kind": "customers#address",
      "locality": "string",
      "organizationName": "string",
      "postalCode": "string",
      "region": "string"
    },
    "primaryAdmin": {
      "primaryEmail": "string"
    },
    "resourceUiUrl": "string"
  }'
```

`PATCH /apps/reseller/v1/customers/{customerId}`

Updates a customer account's settings. This method supports patch semantics. You cannot update `customerType` via the Reseller API, but a `"team"` customer can verify their domain and become `customerType = "domain"`. For more information, see [Verify your domain to unlock Essentials features](https://support.google.com/a/answer/9122284).

> Body parameter

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomerspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
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
|body|body|[Customer](#schemacustomer)|false|none|
|» alternateEmail|body|string|false|Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer.|
|» customerDomain|body|string|false|The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer.|
|» customerDomainVerified|body|boolean|false|Whether the customer's primary domain has been verified.|
|» customerId|body|string|false|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|» customerType|body|string|false|Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479).|
|» kind|body|string|false|Identifies the resource as a customer. Value: `reseller#customer`|
|» phoneNumber|body|string|false|Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.|
|» postalAddress|body|[Address](#schemaaddress)|false|A customer's address information. Each field has a limit of 255 charcters.|
|» primaryAdmin|body|[PrimaryAdmin](#schemaprimaryadmin)|false|The first admin details of the customer, present in case of TEAM customer.|
|» resourceUiUrl|body|string|false|URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» customerType|customerTypeUnspecified|
|» customerType|domain|
|» customerType|team|

> Example responses

> 200 Response

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

<h3 id="resellercustomerspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Customer](#schemacustomer)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

<h1 id="google-workspace-reseller-api-resellernotify">resellernotify</h1>

## reseller.resellernotify.getwatchdetails

<a id="opIdreseller.resellernotify.getwatchdetails"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/resellernotify/getwatchdetails \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/reseller/v1/resellernotify/getwatchdetails`

Returns all the details of the watch corresponding to the reseller.

<h3 id="resellerresellernotifygetwatchdetails-parameters">Parameters</h3>

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
  "serviceAccountEmailAddresses": [
    "string"
  ],
  "topicName": "string"
}
```

<h3 id="resellerresellernotifygetwatchdetails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResellernotifyGetwatchdetailsResponse](#schemaresellernotifygetwatchdetailsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order ), Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order.readonly )
</aside>

## reseller.resellernotify.register

<a id="opIdreseller.resellernotify.register"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/resellernotify/register \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/reseller/v1/resellernotify/register`

Registers a Reseller for receiving notifications.

<h3 id="resellerresellernotifyregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceAccountEmailAddress|query|string|false|The service account which will own the created Cloud-PubSub topic.|
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
  "topicName": "string"
}
```

<h3 id="resellerresellernotifyregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResellernotifyResource](#schemaresellernotifyresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.resellernotify.unregister

<a id="opIdreseller.resellernotify.unregister"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/resellernotify/unregister \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/reseller/v1/resellernotify/unregister`

Unregisters a Reseller for receiving notifications.

<h3 id="resellerresellernotifyunregister-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|serviceAccountEmailAddress|query|string|false|The service account which owns the Cloud-PubSub topic.|
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
  "topicName": "string"
}
```

<h3 id="resellerresellernotifyunregister-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ResellernotifyResource](#schemaresellernotifyresource)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

<h1 id="google-workspace-reseller-api-subscriptions">subscriptions</h1>

## reseller.subscriptions.insert

<a id="opIdreseller.subscriptions.insert"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "billingMethod": "string",
    "creationTime": "string",
    "customerDomain": "string",
    "customerId": "string",
    "dealCode": "string",
    "kind": "reseller#subscription",
    "plan": {
      "commitmentInterval": {
        "endTime": "string",
        "startTime": "string"
      },
      "isCommitmentPlan": true,
      "planName": "string"
    },
    "purchaseOrderId": "string",
    "renewalSettings": {
      "kind": "subscriptions#renewalSettings",
      "renewalType": "string"
    },
    "resourceUiUrl": "string",
    "seats": {
      "kind": "subscriptions#seats",
      "licensedNumberOfSeats": 0,
      "maximumNumberOfSeats": 0,
      "numberOfSeats": 0
    },
    "skuId": "string",
    "skuName": "string",
    "status": "string",
    "subscriptionId": "string",
    "suspensionReasons": [
      "string"
    ],
    "transferInfo": {
      "currentLegacySkuId": "string",
      "minimumTransferableSeats": 0,
      "transferabilityExpirationTime": "string"
    },
    "trialSettings": {
      "isInTrial": true,
      "trialEndTime": "string"
    }
  }'
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions`

Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).

> Body parameter

```json
{
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionsinsert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|customerAuthToken|query|string|false|The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.|
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
|body|body|[Subscription](#schemasubscription)|false|none|
|» billingMethod|body|string|false|Read-only field that returns the current billing method for a subscription.|
|» creationTime|body|string(int64)|false|The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter.|
|» customerDomain|body|string|false|Primary domain name of the customer|
|» customerId|body|string|false|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|» dealCode|body|string|false|Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert` requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.|
|» kind|body|string|false|Identifies the resource as a Subscription. Value: `reseller#subscription`|
|» plan|body|object|false|The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.|
|» » commitmentInterval|body|object|false|In this version of the API, annual commitment plan's interval is one year. *Note: *When `billingMethod` value is `OFFLINE`, the subscription property object `plan.commitmentInterval` is omitted in all API responses. |
|» » » endTime|body|string(int64)|false|An annual commitment plan's interval's `endTime` in milliseconds using the UNIX Epoch format. See an example Epoch converter.|
|» » » startTime|body|string(int64)|false|An annual commitment plan's interval's `startTime` in milliseconds using UNIX Epoch format. See an example Epoch converter.|
|» » isCommitmentPlan|body|boolean|false|The `isCommitmentPlan` property's boolean value identifies the plan as an annual commitment plan: - `true` — The subscription's plan is an annual commitment plan. - `false` — The plan is not an annual commitment plan. |
|» » planName|body|string|false|The `planName` property is required. This is the name of the subscription's plan. For more information about the Google payment plans, see the API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` — The annual commitment plan with monthly payments. *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` — The annual commitment plan with yearly payments - `FLEXIBLE` — The flexible plan - `TRIAL` — The 30-day free trial plan. A subscription in trial will be suspended after the 30th free day if no payment plan is assigned. Calling `changePlan` will assign a payment plan to a trial but will not activate the plan. A trial will automatically begin its assigned payment plan after its 30th free day or immediately after calling `startPaidService`. - `FREE` — The free plan is exclusive to the Cloud Identity SKU and does not incur any billing. |
|» purchaseOrderId|body|string|false|This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.|
|» renewalSettings|body|[RenewalSettings](#schemarenewalsettings)|false|Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center.|
|» resourceUiUrl|body|string|false|URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console.|
|» seats|body|[Seats](#schemaseats)|false|This is a required property. The number and limit of user seat licenses in the plan.|
|» skuId|body|string|false|A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs.|
|» skuName|body|string|false|Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs.|
|» status|body|string|false|This is an optional property.|
|» subscriptionId|body|string|false|The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the `subscriptionId` as described in retrieve all reseller subscriptions.|
|» suspensionReasons|body|[string]|false|Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's `STATUS` is `SUSPENDED` until all pending suspensions are removed. Possible options include: - `PENDING_TOS_ACCEPTANCE` - The customer has not logged in and accepted the G Suite Resold Terms of Services. - `RENEWAL_WITH_TYPE_CANCEL` - The customer's commitment ended and their service was cancelled at the end of their term. - `RESELLER_INITIATED` - A manual suspension invoked by a Reseller. - `TRIAL_ENDED` - The customer's trial expired without a plan selected. - `OTHER` - The customer is suspended for an internal Google reason (e.g. abuse or otherwise). |
|» transferInfo|body|object|false|Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.|
|» » currentLegacySkuId|body|string|false|The `skuId` of the current resold subscription. This is populated only when the customer has a subscription with a legacy SKU and the subscription resource is populated with the `skuId` of the SKU recommended for the transfer.|
|» » minimumTransferableSeats|body|integer(int32)|false|When inserting a subscription, this is the minimum number of seats listed in the transfer order for this product. For example, if the customer has 20 users, the reseller cannot place a transfer order of 15 seats. The minimum is 20 seats.|
|» » transferabilityExpirationTime|body|string(int64)|false|The time when transfer token or intent to transfer will expire. The time is in milliseconds using UNIX Epoch format.|
|» trialSettings|body|object|false|The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.|
|» » isInTrial|body|boolean|false|Determines if a subscription's plan is in a 30-day free trial or not: - `true` — The plan is in trial. - `false` — The plan is not in trial. |
|» » trialEndTime|body|string(int64)|false|Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example Epoch converter.|

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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionsinsert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.get

<a id="opIdreseller.subscriptions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}`

Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).

<h3 id="resellersubscriptionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order ), Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order.readonly )
</aside>

## reseller.subscriptions.delete

<a id="opIdreseller.subscriptions.delete"></a>

> Code samples

```bash
curl 'https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string?deletionType=deletion_type_undefined' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}`

Cancels, suspends, or transfers a subscription to direct.

<h3 id="resellersubscriptionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
|deletionType|query|string|true|The `deletionType` query string enables the cancellation, downgrade, or suspension of a subscription.|
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
|deletionType|deletion_type_undefined|
|deletionType|cancel|
|deletionType|transfer_to_direct|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="resellersubscriptionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.activate

<a id="opIdreseller.subscriptions.activate"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate`

Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.

<h3 id="resellersubscriptionsactivate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionsactivate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.changePlan

<a id="opIdreseller.subscriptions.changePlan"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/changePlan \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "dealCode": "string",
    "kind": "subscriptions#changePlanRequest",
    "planName": "string",
    "purchaseOrderId": "string",
    "seats": {
      "kind": "subscriptions#seats",
      "licensedNumberOfSeats": 0,
      "maximumNumberOfSeats": 0,
      "numberOfSeats": 0
    }
  }'
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan`

Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).

> Body parameter

```json
{
  "dealCode": "string",
  "kind": "subscriptions#changePlanRequest",
  "planName": "string",
  "purchaseOrderId": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  }
}
```

<h3 id="resellersubscriptionschangeplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
|body|body|[ChangePlanRequest](#schemachangeplanrequest)|false|none|
|» dealCode|body|string|false|Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.|
|» kind|body|string|false|Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest`|
|» planName|body|string|false|The `planName` property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` - The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan |
|» purchaseOrderId|body|string|false|This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.|
|» seats|body|[Seats](#schemaseats)|false|This is a required property. The seats property is the number of user seat licenses.|

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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionschangeplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.changeRenewalSettings

<a id="opIdreseller.subscriptions.changeRenewalSettings"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/changeRenewalSettings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  }'
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings`

Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).

> Body parameter

```json
{
  "kind": "subscriptions#renewalSettings",
  "renewalType": "string"
}
```

<h3 id="resellersubscriptionschangerenewalsettings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
|body|body|[RenewalSettings](#schemarenewalsettings)|false|none|
|» kind|body|string|false|Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings`|
|» renewalType|body|string|false|Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property.|

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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionschangerenewalsettings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.changeSeats

<a id="opIdreseller.subscriptions.changeSeats"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/changeSeats \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  }'
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats`

Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).

> Body parameter

```json
{
  "kind": "subscriptions#seats",
  "licensedNumberOfSeats": 0,
  "maximumNumberOfSeats": 0,
  "numberOfSeats": 0
}
```

<h3 id="resellersubscriptionschangeseats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
|body|body|[Seats](#schemaseats)|false|none|
|» kind|body|string|false|Identifies the resource as a subscription seat setting. Value: `subscriptions#seats`|
|» licensedNumberOfSeats|body|integer(int32)|false|Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku).|
|» maximumNumberOfSeats|body|integer(int32)|false|This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user.|
|» numberOfSeats|body|integer(int32)|false|This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user.|

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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionschangeseats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.startPaidService

<a id="opIdreseller.subscriptions.startPaidService"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/startPaidService \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService`

Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).

<h3 id="resellersubscriptionsstartpaidservice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionsstartpaidservice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.suspend

<a id="opIdreseller.subscriptions.suspend"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/customers/string/subscriptions/string/suspend \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend`

Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.

<h3 id="resellersubscriptionssuspend-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerId|path|string|true|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|subscriptionId|path|string|true|This is a required property. The `subscriptionId` is the subscription identifier and is unique for each customer. Since a `subscriptionId` changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the `subscriptionId` can be found using the retrieve all reseller subscriptions method.|
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
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

<h3 id="resellersubscriptionssuspend-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscription](#schemasubscription)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order )
</aside>

## reseller.subscriptions.list

<a id="opIdreseller.subscriptions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/apps/reseller/v1/subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /apps/reseller/v1/subscriptions`

Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).

<h3 id="resellersubscriptionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customerAuthToken|query|string|false|The `customerAuthToken` query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.|
|customerId|query|string|false|This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.|
|customerNamePrefix|query|string|false|When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes `exam.com`, `example20.com` and `example.com`: - `exa` -- Returns all customer names that start with 'exa' which could include `exam.com`, `example20.com`, and `example.com`. A name prefix is similar to using a regular expression's asterisk, exa*. - `example` -- Returns `example20.com` and `example.com`. |
|maxResults|query|integer|false|When retrieving a large list, the `maxResults` is the maximum number of results per page. The `nextPageToken` value takes you to the next page. The default is 20.|
|pageToken|query|string|false|Token to specify next page in the list|
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
  "kind": "reseller#subscriptions",
  "nextPageToken": "string",
  "subscriptions": [
    {
      "billingMethod": "string",
      "creationTime": "string",
      "customerDomain": "string",
      "customerId": "string",
      "dealCode": "string",
      "kind": "reseller#subscription",
      "plan": {
        "commitmentInterval": {
          "endTime": "string",
          "startTime": "string"
        },
        "isCommitmentPlan": true,
        "planName": "string"
      },
      "purchaseOrderId": "string",
      "renewalSettings": {
        "kind": "subscriptions#renewalSettings",
        "renewalType": "string"
      },
      "resourceUiUrl": "string",
      "seats": {
        "kind": "subscriptions#seats",
        "licensedNumberOfSeats": 0,
        "maximumNumberOfSeats": 0,
        "numberOfSeats": 0
      },
      "skuId": "string",
      "skuName": "string",
      "status": "string",
      "subscriptionId": "string",
      "suspensionReasons": [
        "string"
      ],
      "transferInfo": {
        "currentLegacySkuId": "string",
        "minimumTransferableSeats": 0,
        "transferabilityExpirationTime": "string"
      },
      "trialSettings": {
        "isInTrial": true,
        "trialEndTime": "string"
      }
    }
  ]
}
```

<h3 id="resellersubscriptionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Subscriptions](#schemasubscriptions)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order ), Oauth2 ( Scopes: https://www.googleapis.com/auth/apps.order.readonly ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/apps.order.readonly )
</aside>

# Schemas

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "addressLine1": "string",
  "addressLine2": "string",
  "addressLine3": "string",
  "contactName": "string",
  "countryCode": "string",
  "kind": "customers#address",
  "locality": "string",
  "organizationName": "string",
  "postalCode": "string",
  "region": "string"
}
```

JSON template for address of a customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLine1|string|false|none|A customer's physical address. An address can be composed of one to three lines. The `addressline2` and `addressLine3` are optional.|
|addressLine2|string|false|none|Line 2 of the address.|
|addressLine3|string|false|none|Line 3 of the address.|
|contactName|string|false|none|The customer contact's name. This is required.|
|countryCode|string|false|none|For `countryCode` information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer.|
|kind|string|false|none|Identifies the resource as a customer address. Value: `customers#address`|
|locality|string|false|none|An example of a `locality` value is the city of `San Francisco`.|
|organizationName|string|false|none|The company or company division name. This is required.|
|postalCode|string|false|none|A `postalCode` example is a postal zip code such as `94043`. This property is required when creating a new customer.|
|region|string|false|none|An example of a `region` value is `CA` for the state of California.|

<h2 id="tocS_ChangePlanRequest">ChangePlanRequest</h2>
<!-- backwards compatibility -->
<a id="schemachangeplanrequest"></a>
<a id="schema_ChangePlanRequest"></a>
<a id="tocSchangeplanrequest"></a>
<a id="tocschangeplanrequest"></a>

```json
{
  "dealCode": "string",
  "kind": "subscriptions#changePlanRequest",
  "planName": "string",
  "purchaseOrderId": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  }
}
```

JSON template for the ChangePlan rpc request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dealCode|string|false|none|Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `changePlan` request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.|
|kind|string|false|none|Identifies the resource as a subscription change plan request. Value: `subscriptions#changePlanRequest`|
|planName|string|false|none|The `planName` property is required. This is the name of the subscription's payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - `ANNUAL_MONTHLY_PAY` - The annual commitment plan with monthly payments *Caution: *`ANNUAL_MONTHLY_PAY` is returned as `ANNUAL` in all API responses. - `ANNUAL_YEARLY_PAY` - The annual commitment plan with yearly payments - `FLEXIBLE` - The flexible plan - `TRIAL` - The 30-day free trial plan |
|purchaseOrderId|string|false|none|This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.|
|seats|[Seats](#schemaseats)|false|none|This is a required property. The seats property is the number of user seat licenses.|

<h2 id="tocS_Customer">Customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_Customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "alternateEmail": "string",
  "customerDomain": "string",
  "customerDomainVerified": true,
  "customerId": "string",
  "customerType": "customerTypeUnspecified",
  "kind": "reseller#customer",
  "phoneNumber": "string",
  "postalAddress": {
    "addressLine1": "string",
    "addressLine2": "string",
    "addressLine3": "string",
    "contactName": "string",
    "countryCode": "string",
    "kind": "customers#address",
    "locality": "string",
    "organizationName": "string",
    "postalCode": "string",
    "region": "string"
  },
  "primaryAdmin": {
    "primaryEmail": "string"
  },
  "resourceUiUrl": "string"
}
```

When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateEmail|string|false|none|Like the "Customer email" in the reseller tools, this email is the secondary contact used if something happens to the customer's service such as service outage or a security issue. This property is required when creating a new "domain" customer and should not use the same domain as `customerDomain`. The `alternateEmail` field is not necessary to create a "team" customer.|
|customerDomain|string|false|none|The customer's primary domain name string. `customerDomain` is required when creating a new customer. Do not include the `www` prefix in the domain when adding a customer.|
|customerDomainVerified|boolean|false|none|Whether the customer's primary domain has been verified.|
|customerId|string|false|none|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|customerType|string|false|none|Identifies the type of the customer. Acceptable values include: * `domain`: Implies a domain-verified customer (default). * `team`: Implies an email-verified customer. For more information, see [managed teams](https://support.google.com/a/users/answer/9939479).|
|kind|string|false|none|Identifies the resource as a customer. Value: `reseller#customer`|
|phoneNumber|string|false|none|Customer contact phone number. Must start with "+" followed by the country code. The rest of the number can be contiguous numbers or respect the phone local format conventions, but it must be a real phone number and not, for example, "123". This field is silently ignored if invalid.|
|postalAddress|[Address](#schemaaddress)|false|none|A customer's address information. Each field has a limit of 255 charcters.|
|primaryAdmin|[PrimaryAdmin](#schemaprimaryadmin)|false|none|The first admin details of the customer, present in case of TEAM customer.|
|resourceUiUrl|string|false|none|URL to customer's Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.|

#### Enumerated Values

|Property|Value|
|---|---|
|customerType|customerTypeUnspecified|
|customerType|domain|
|customerType|team|

<h2 id="tocS_PrimaryAdmin">PrimaryAdmin</h2>
<!-- backwards compatibility -->
<a id="schemaprimaryadmin"></a>
<a id="schema_PrimaryAdmin"></a>
<a id="tocSprimaryadmin"></a>
<a id="tocsprimaryadmin"></a>

```json
{
  "primaryEmail": "string"
}
```

JSON template for primary admin in case of TEAM customers

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryEmail|string|false|none|The business email of the primary administrator of the customer. The email verification link is sent to this email address at the time of customer creation. Primary administrators have access to the customer's Admin Console, including the ability to invite and evict users and manage the administrative needs of the customer.|

<h2 id="tocS_RenewalSettings">RenewalSettings</h2>
<!-- backwards compatibility -->
<a id="schemarenewalsettings"></a>
<a id="schema_RenewalSettings"></a>
<a id="tocSrenewalsettings"></a>
<a id="tocsrenewalsettings"></a>

```json
{
  "kind": "subscriptions#renewalSettings",
  "renewalType": "string"
}
```

JSON template for a subscription renewal settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies the resource as a subscription renewal setting. Value: `subscriptions#renewalSettings`|
|renewalType|string|false|none|Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the `renewalType` is a required property.|

<h2 id="tocS_ResellernotifyGetwatchdetailsResponse">ResellernotifyGetwatchdetailsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaresellernotifygetwatchdetailsresponse"></a>
<a id="schema_ResellernotifyGetwatchdetailsResponse"></a>
<a id="tocSresellernotifygetwatchdetailsresponse"></a>
<a id="tocsresellernotifygetwatchdetailsresponse"></a>

```json
{
  "serviceAccountEmailAddresses": [
    "string"
  ],
  "topicName": "string"
}
```

JSON template for resellernotify getwatchdetails response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceAccountEmailAddresses|[string]|false|none|List of registered service accounts.|
|topicName|string|false|none|Topic name of the PubSub|

<h2 id="tocS_ResellernotifyResource">ResellernotifyResource</h2>
<!-- backwards compatibility -->
<a id="schemaresellernotifyresource"></a>
<a id="schema_ResellernotifyResource"></a>
<a id="tocSresellernotifyresource"></a>
<a id="tocsresellernotifyresource"></a>

```json
{
  "topicName": "string"
}
```

JSON template for resellernotify response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|topicName|string|false|none|Topic name of the PubSub|

<h2 id="tocS_Seats">Seats</h2>
<!-- backwards compatibility -->
<a id="schemaseats"></a>
<a id="schema_Seats"></a>
<a id="tocSseats"></a>
<a id="tocsseats"></a>

```json
{
  "kind": "subscriptions#seats",
  "licensedNumberOfSeats": 0,
  "maximumNumberOfSeats": 0,
  "numberOfSeats": 0
}
```

JSON template for subscription seats.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies the resource as a subscription seat setting. Value: `subscriptions#seats`|
|licensedNumberOfSeats|integer(int32)|false|none|Read-only field containing the current number of users that are assigned a license for the product defined in `skuId`. This field's value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [`listForProductAndSku`](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku).|
|maximumNumberOfSeats|integer(int32)|false|none|This is a required property and is exclusive to subscriptions with `FLEXIBLE` or `TRIAL` plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller's contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user.|
|numberOfSeats|integer(int32)|false|none|This is a required property and is exclusive to subscriptions with `ANNUAL_MONTHLY_PAY` and `ANNUAL_YEARLY_PAY` plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the `numberOfSeats` cannot be reduced until renewal. The reseller is invoiced based on the `numberOfSeats` value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user.|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "billingMethod": "string",
  "creationTime": "string",
  "customerDomain": "string",
  "customerId": "string",
  "dealCode": "string",
  "kind": "reseller#subscription",
  "plan": {
    "commitmentInterval": {
      "endTime": "string",
      "startTime": "string"
    },
    "isCommitmentPlan": true,
    "planName": "string"
  },
  "purchaseOrderId": "string",
  "renewalSettings": {
    "kind": "subscriptions#renewalSettings",
    "renewalType": "string"
  },
  "resourceUiUrl": "string",
  "seats": {
    "kind": "subscriptions#seats",
    "licensedNumberOfSeats": 0,
    "maximumNumberOfSeats": 0,
    "numberOfSeats": 0
  },
  "skuId": "string",
  "skuName": "string",
  "status": "string",
  "subscriptionId": "string",
  "suspensionReasons": [
    "string"
  ],
  "transferInfo": {
    "currentLegacySkuId": "string",
    "minimumTransferableSeats": 0,
    "transferabilityExpirationTime": "string"
  },
  "trialSettings": {
    "isInTrial": true,
    "trialEndTime": "string"
  }
}
```

JSON template for a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingMethod|string|false|none|Read-only field that returns the current billing method for a subscription.|
|creationTime|string(int64)|false|none|The `creationTime` property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter.|
|customerDomain|string|false|none|Primary domain name of the customer|
|customerId|string|false|none|This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.|
|dealCode|string|false|none|Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in `insert` requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.|
|kind|string|false|none|Identifies the resource as a Subscription. Value: `reseller#subscription`|
|plan|object|false|none|The `plan` property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API"s payment plans, see the API concepts.|
|purchaseOrderId|string|false|none|This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a `purchaseOrderId` value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.|
|renewalSettings|[RenewalSettings](#schemarenewalsettings)|false|none|Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center.|
|resourceUiUrl|string|false|none|URL to customer's Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console.|
|seats|[Seats](#schemaseats)|false|none|This is a required property. The number and limit of user seat licenses in the plan.|
|skuId|string|false|none|A required property. The `skuId` is a unique system identifier for a product's SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see Product and SKU IDs.|
|skuName|string|false|none|Read-only external display name for a product's SKU assigned to a customer in the subscription. SKU names are subject to change at Google's discretion. For products and SKUs available in this version of the API, see Product and SKU IDs.|
|status|string|false|none|This is an optional property.|
|subscriptionId|string|false|none|The `subscriptionId` is the subscription identifier and is unique for each customer. This is a required property. Since a `subscriptionId` changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the `subscriptionId` as described in retrieve all reseller subscriptions.|
|suspensionReasons|[string]|false|none|Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription's `STATUS` is `SUSPENDED` until all pending suspensions are removed. Possible options include: - `PENDING_TOS_ACCEPTANCE` - The customer has not logged in and accepted the G Suite Resold Terms of Services. - `RENEWAL_WITH_TYPE_CANCEL` - The customer's commitment ended and their service was cancelled at the end of their term. - `RESELLER_INITIATED` - A manual suspension invoked by a Reseller. - `TRIAL_ENDED` - The customer's trial expired without a plan selected. - `OTHER` - The customer is suspended for an internal Google reason (e.g. abuse or otherwise). |
|transferInfo|object|false|none|Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.|
|trialSettings|object|false|none|The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.|

<h2 id="tocS_Subscriptions">Subscriptions</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions"></a>
<a id="schema_Subscriptions"></a>
<a id="tocSsubscriptions"></a>
<a id="tocssubscriptions"></a>

```json
{
  "kind": "reseller#subscriptions",
  "nextPageToken": "string",
  "subscriptions": [
    {
      "billingMethod": "string",
      "creationTime": "string",
      "customerDomain": "string",
      "customerId": "string",
      "dealCode": "string",
      "kind": "reseller#subscription",
      "plan": {
        "commitmentInterval": {
          "endTime": "string",
          "startTime": "string"
        },
        "isCommitmentPlan": true,
        "planName": "string"
      },
      "purchaseOrderId": "string",
      "renewalSettings": {
        "kind": "subscriptions#renewalSettings",
        "renewalType": "string"
      },
      "resourceUiUrl": "string",
      "seats": {
        "kind": "subscriptions#seats",
        "licensedNumberOfSeats": 0,
        "maximumNumberOfSeats": 0,
        "numberOfSeats": 0
      },
      "skuId": "string",
      "skuName": "string",
      "status": "string",
      "subscriptionId": "string",
      "suspensionReasons": [
        "string"
      ],
      "transferInfo": {
        "currentLegacySkuId": "string",
        "minimumTransferableSeats": 0,
        "transferabilityExpirationTime": "string"
      },
      "trialSettings": {
        "isInTrial": true,
        "trialEndTime": "string"
      }
    }
  ]
}
```

A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kind|string|false|none|Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions|
|nextPageToken|string|false|none|The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.|
|subscriptions|[[Subscription](#schemasubscription)]|false|none|The subscriptions in this page of results.|
