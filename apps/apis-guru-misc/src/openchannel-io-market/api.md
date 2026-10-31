<h1 id="openchannel-market-api">OpenChannel Market API v2.0.24</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://market.openchannel.io/v2">https://market.openchannel.io/v2</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="openchannel-market-api-apps-find-and-modify-apps">apps : Find and modify apps</h1>

## Returns a paginated list of APPROVED or SUSPENDED apps

> Code samples

```bash
curl https://example.com/apps \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps`

- Results are paginated and the default is value is 1000 if no limit is provided
- If no query is specified, returns all APPROVED or SUSPENDED apps within the marketplace


<h3 id="returns-a-paginated-list-of-approved-or-suspended-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|
|userId|query|string|false|The unique id of the user requesting this resource|
|isOwner|query|boolean|false|Whether this result should only contain apps that are owned by this user|

<h3 id="returns-a-paginated-list-of-approved-or-suspended-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[AppPages](#schemaapppages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds a new app for this developer

> Code samples

```bash
curl 'https://example.com/apps?developerId=string&name=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps`

- This method is called on behalf of a developer.
- Price is required if the model is 'single' or 'recurring'
- Returns the newly created app


<h3 id="adds-a-new-app-for-this-developer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|query|string|true|The unique id of the developer that is adding this app|
|name|query|string|true|The name of the app|
|type|query|string|false|The type for this app|
|model|query|string|false|A JSON object representing the pricing model type for this app|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|
|attributes|query|string|false|A custom set of app attributes defined by the administrator and attached to this app|
|restrict|query|string|false|JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app|
|allow|query|string|false|JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app|
|access|query|string|false|JSON array of data access requirements|

<h3 id="adds-a-new-app-for-this-developer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|409|Conflict|Already Exists - An app with this name already exists|None|
|default|Default|OK|[AppVersion](#schemaappversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single APPROVED or SUSPENDED app

> Code samples

```bash
curl https://example.com/apps/bySafeName/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps/bySafeName/{safeName}`

- A 'view' event is recorded when trackViews is set to true


<h3 id="returns-a-single-approved-or-suspended-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|safeName|path|string|true|The safeName of the App to be located|
|userId|query|string|false|The unique id of the user that is requesting this resource|
|trackViews|query|boolean|false|Whether this call should be tracked as a 'view' for this app. Default is false.|

<h3 id="returns-a-single-approved-or-suspended-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The App is either restricted or was not found|None|
|default|Default|OK|[App](#schemaapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Searches through the text of fields to find APPROVED or SUSPENDED apps

> Code samples

```bash
curl 'https://example.com/apps/textSearch?text=string&fields=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps/textSearch`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="searches-through-the-text-of-fields-to-find-approved-or-suspended-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'MyApp'} matches all the documents that have the name 'MyApp'|
|text|query|string|true|The text to search for.|
|fields|query|string|true|A JSON array containing all the fields to be searched through. Example: ['name', 'customData.description']|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|
|userId|query|string|false|The unique id of the user requesting this resource|
|isOwned|query|boolean|false|Whether this result should only contain apps that are owned by this user|

<h3 id="searches-through-the-text-of-fields-to-find-approved-or-suspended-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[SearchPages](#schemasearchpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a paginated list of AppVersions

> Code samples

```bash
curl https://example.com/apps/versions \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps/versions`

- Results are paginated when limit is set, otherwise all results are returned
- If no query is specified, returns all AppVersions within the marketplace
- Only returns AppVersions owned by this developer


<h3 id="returns-a-paginated-list-of-appversions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'MyApp'} matches all the apps that have the name 'MyApp'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|
|developerId|query|string|false|The unique id of the developer requesting this resource|

<h3 id="returns-a-paginated-list-of-appversions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[VersionPages](#schemaversionpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single APPROVED or SUSPENDED app

> Code samples

```bash
curl https://example.com/apps/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps/{appId}`

- A 'view' event is recorded when trackViews is set to true


<h3 id="returns-a-single-approved-or-suspended-app-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be located|
|userId|query|string|false|The unique id of the user that is requesting this resource|
|trackViews|query|boolean|false|Whether this call should be tracked as a 'view' for this app. Default is false.|

<h3 id="returns-a-single-approved-or-suspended-app-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The App is either restricted or was not found|None|
|default|Default|OK|[App](#schemaapp)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes app and all versions

> Code samples

```bash
curl 'https://example.com/apps/string?developerId=string' \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /apps/{appId}`

- This method is called on behalf of a developer.


<h3 id="removes-app-and-all-versions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be removed|
|developerId|query|string|true|The unique id of the developer that is removing this app|

<h3 id="removes-app-and-all-versions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not Found - App is not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Change the live app to another, previously approved version

> Code samples

```bash
curl 'https://example.com/apps/string/live?developerId=string&version=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/{appId}/live`

- This method is called on behalf of a developer.


<h3 id="change-the-live-app-to-another-previously-approved-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be changed|
|developerId|query|string|true|The unique id of the developer that is changing this AppVersion|
|version|query|string|true|The new version of the live App|

<h3 id="change-the-live-app-to-another-previously-approved-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App is not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Publishes the current working version of the app to the marketplace

> Code samples

```bash
curl 'https://example.com/apps/string/publish?developerId=string&version=0' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/{appId}/publish`

- This method is called on behalf of a developer. 
- Only effects the current working version of the app.


<h3 id="publishes-the-current-working-version-of-the-app-to-the-marketplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the app to be published|
|developerId|query|string|true|The unique id of the developer that is modifying this app|
|version|query|integer|true|The version of the app to be published|
|autoApprove|query|boolean|false|If true, this AppVersion is automatically approved and becomes immediately available to end users|

<h3 id="publishes-the-current-working-version-of-the-app-to-the-marketplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted - Publishing succeeded but there are restrictions|None|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App was not found|None|
|409|Conflict|Conflict - An app with that name already exists|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single AppVersion

> Code samples

```bash
curl https://example.com/apps/string/versions/0 \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /apps/{appId}/versions/{version}`

- Only returns AppVersions owned by this developer


<h3 id="returns-a-single-appversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be located|
|version|path|integer|true|The version number of the app|
|developerId|query|string|false|The unique id of the developer that is requesting this resource|

<h3 id="returns-a-single-appversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The App or version number was not found|None|
|default|Default|OK|[AppVersion](#schemaappversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the app or creates a new version

> Code samples

```bash
curl 'https://example.com/apps/string/versions/string?developerId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/{appId}/versions/{version}`

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint replaces the entire object to match the request (absolute update). In contrast, the PATCH version of this endpoint updates only the fields provided in the request (relative update).


<h3 id="updates-the-app-or-creates-a-new-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be updated|
|version|path|string|true|The version of the App to be updated|
|developerId|query|string|true|The unique id of the developer that is updating this app|
|name|query|string|false|The name of the app|
|type|query|string|false|The type for this app|
|model|query|string|false|A JSON object representing the pricing model type for this app|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|
|attributes|query|string|false|A custom set of app attributes defined by the administrator and attached to this app|
|restrict|query|string|false|JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app|
|allow|query|string|false|JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app|
|access|query|string|false|JSON array of data access requirements|
|approvalRequired|query|string|false|False if updates should skip the approval process and be available immediately. Default is True|

<h3 id="updates-the-app-or-creates-a-new-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App is not found|None|
|409|Conflict|Already Exists - An app with this name already exists|None|
|default|Default|OK|[AppVersion](#schemaappversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes AppVersion

> Code samples

```bash
curl 'https://example.com/apps/string/versions/string?developerId=string' \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /apps/{appId}/versions/{version}`

- This method is called on behalf of a developer.


<h3 id="removes-appversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be removed|
|version|path|string|true|The version of the App to be removed|
|developerId|query|string|true|The unique id of the developer that is removing this app|

<h3 id="removes-appversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|404|Not Found|Not Found - App is not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the app fields or creates a new version

> Code samples

```bash
curl 'https://example.com/apps/string/versions/string?developerId=string' \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /apps/{appId}/versions/{version}`

- This method is called on behalf of a developer.
- Price and is required if the model is 'single' or 'recurring'
- Returns the newly updated app
- This endpoint updates only the fields provided in the request (relative update). In contrast, the POST version of this method replaces the entire object to match the request (absolute update). 


<h3 id="updates-the-app-fields-or-creates-a-new-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be updated|
|version|path|string|true|The version of the App to be updated|
|developerId|query|string|true|The unique id of the developer that is updating this app|
|name|query|string|false|The name of the app|
|type|query|string|false|The type for this app|
|model|query|string|false|A JSON object representing the pricing model type for this app|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|
|attributes|query|string|false|A custom set of app attributes defined by the administrator and attached to this app|
|restrict|query|string|false|JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app|
|allow|query|string|false|JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app|
|access|query|string|false|JSON array of data access requirements|
|approvalRequired|query|string|false|False if updates should skip the approval process and be available immediately. Default is True|

<h3 id="updates-the-app-fields-or-creates-a-new-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App is not found|None|
|409|Conflict|Already Exists - An app with this name already exists|None|
|default|Default|OK|[AppVersion](#schemaappversion)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Allows a developer or administrator to change the status of apps

> Code samples

```bash
curl https://example.com/apps/string/versions/0/status \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /apps/{appId}/versions/{version}/status`

Only certain status changes are allowed. For instance, a developer is only able to suspend and unsuspend their app (which must already be approved). See here for a state change diagram of allowed status changes for administrators: https://support.openchannel.io/documentation/api/#415-apps-status-change


<h3 id="allows-a-developer-or-administrator-to-change-the-status-of-apps-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the App to be updated|
|version|path|integer|true|The version of the App to be updated|
|developerId|query|string|false|The unique id of the developer that is modifying this app|
|status|query|string|false|The new status for this app. Can be either 'inReview', 'approved', 'suspended' or 'rejected'|
|modifiedBy|query|string|false|The role initiating this status change. Can be either 'developer' or 'administrator' (default)|
|reason|query|string|false|The reason for this status change|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|inReview|
|status|approved|
|status|suspended|
|status|rejected|
|modifiedBy|developer|
|modifiedBy|administrator|

<h3 id="allows-a-developer-or-administrator-to-change-the-status-of-apps-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App is not found|None|
|412|Precondition Failed|Precondition Failed - The app's new status is not valid because of the app's current status|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-custom-gateway-process-payments-and-refunds">custom-gateway : Process payments and refunds</h1>

## Adds a payment for an app on behalf of a user

> Code samples

```bash
curl 'https://example.com/custom-gateway/payment/string?amount=0' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /custom-gateway/payment/{ownershipId}`

- Results are returned for the market provided within the basic authentication credentials 
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


<h3 id="adds-a-payment-for-an-app-on-behalf-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id of the ownership record involved in this transaction|
|amount|query|integer|true|The total amount paid in cents|
|date|query|integer(int64)|false|The date (in milliseconds) of when this payment was made|
|feeAmount|query|integer|false|The fee (in cents) paid to a payment processors or third parties to process this payment. Default is 0.|
|marketplaceAmount|query|integer|false|The amount (in cents) paid to the marketplace owner as a commission for the purchase of this app. Defaults based on the commission amount configured for this marketplace.|
|developerAmount|query|integer|false|The amount (in cents) paid to the owner of the app. Defaults based on the commission amount configured for this marketplace.|
|customData|query|string|false|A custom JSON object to attach to this transaction|

<h3 id="adds-a-payment-for-an-app-on-behalf-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Transaction](#schematransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Fully or partially refund payment for an app on behalf of a user

> Code samples

```bash
curl 'https://example.com/custom-gateway/refund/string?amount=0' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /custom-gateway/refund/{ownershipId}`

- Results are returned for the market provided within the basic authentication credentials
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


<h3 id="fully-or-partially-refund-payment-for-an-app-on-behalf-of-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id of the ownership record involved in this transaction|
|amount|query|integer|true|The total amount refunded in cents|
|date|query|integer(int64)|false|The date (in milliseconds) of when this refund was made|
|feeAmount|query|integer|false|The fee (in cents) recovered from a payment processor or third party to process this payment. The default value is 0|
|marketplaceAmount|query|integer|false|The amount (in cents) recovered from the marketplace owner as a commission refund for the purchase of this app|
|developerAmount|query|integer|false|The amount (in cents) recovered from the owner of the app|
|customData|query|string|false|A custom JSON object to attach to this transaction|

<h3 id="fully-or-partially-refund-payment-for-an-app-on-behalf-of-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Transaction](#schematransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-developeraccounts-find-and-modify-developer-accounts">developerAccounts : Find and modify developer accounts</h1>

## Returns a paginated list of developerAccounts

> Code samples

```bash
curl https://example.com/developerAccounts \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /developerAccounts`

- Results are paginated and the default is value is 1000 if no limit is provided


<h3 id="returns-a-paginated-list-of-developeraccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'NASA'} matches all the developerAccounts that have the name 'NASA'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-developeraccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[DeveloperAccountPages](#schemadeveloperaccountpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single developer account

> Code samples

```bash
curl https://example.com/developerAccounts/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /developerAccounts/{developerAccountId}`

<h3 id="returns-a-single-developer-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerAccountId|path|string|true|The id of the developer account to be located|

<h3 id="returns-a-single-developer-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - Developer account is not found|None|
|default|Default|OK|[DeveloperAccount](#schemadeveloperaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the developer account or adds the developer account if it doesn't exist

> Code samples

```bash
curl 'https://example.com/developerAccounts/string?developerId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /developerAccounts/{developerAccountId}`

<h3 id="updates-the-developer-account-or-adds-the-developer-account-if-it-doesnt-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerAccountId|path|string|true|The id of the developer account to be updated|
|developerId|query|string|true|The id of the developer that this account belongs to|
|email|query|string|false|The contact email address|
|name|query|string|false|The name for the account|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-developer-account-or-adds-the-developer-account-if-it-doesnt-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[DeveloperAccount](#schemadeveloperaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes the developer account

> Code samples

```bash
curl https://example.com/developerAccounts/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /developerAccounts/{developerAccountId}`

<h3 id="removes-the-developer-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerAccountId|path|string|true|The id of the developer account to be updated|

<h3 id="removes-the-developer-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the developer account fields

> Code samples

```bash
curl 'https://example.com/developerAccounts/string?developerId=string' \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /developerAccounts/{developerAccountId}`

<h3 id="updates-the-developer-account-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerAccountId|path|string|true|The id of the developer account to be updated|
|developerId|query|string|true|The id of the developer that this account belongs to|
|email|query|string|false|The contact email address|
|name|query|string|false|The name for the account|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-developer-account-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The developer is not found|None|
|default|Default|OK|[DeveloperAccount](#schemadeveloperaccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-developers-find-and-modify-developers">developers : Find and modify developers</h1>

## Returns a paginated list of developers

> Code samples

```bash
curl https://example.com/developers \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /developers`

- Results are paginated and the default is value is 100 if no limit is provided


<h3 id="returns-a-paginated-list-of-developers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'John'} matches all the developers that have the name 'John'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-developers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[DeveloperPages](#schemadeveloperpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single developer

> Code samples

```bash
curl https://example.com/developers/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /developers/{developerId}`

<h3 id="returns-a-single-developer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer to be located|

<h3 id="returns-a-single-developer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - Developer is not found|None|
|default|Default|OK|[Developer](#schemadeveloper)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the developer record or adds the developer if it doesn't exist

> Code samples

```bash
curl https://example.com/developers/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /developers/{developerId}`

<h3 id="updates-the-developer-record-or-adds-the-developer-if-it-doesnt-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer to be located|
|type|query|string|false|The type for this developer|
|email|query|string|false|The developer's email|
|username|query|string|false|The developer's username|
|name|query|string|false|The developer's name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-developer-record-or-adds-the-developer-if-it-doesnt-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[Developer](#schemadeveloper)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes a single developer

> Code samples

```bash
curl https://example.com/developers/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /developers/{developerId}`

<h3 id="removes-a-single-developer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer to be removed|

<h3 id="removes-a-single-developer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - Developer is not found|None|
|default|Default|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the developer fields

> Code samples

```bash
curl https://example.com/developers/string \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /developers/{developerId}`

<h3 id="updates-the-developer-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer to be located|
|type|query|string|false|The type for this developer|
|email|query|string|false|The developer's email|
|username|query|string|false|The developer's username|
|name|query|string|false|The developer's name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-developer-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The developer is not found|None|
|default|Default|OK|[Developer](#schemadeveloper)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-events-find-events">events : Find events</h1>

## Returns an event

> Code samples

```bash
curl https://example.com/events/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /events/{eventId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="returns-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|The id of the event|

<h3 id="returns-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The event was not found|None|
|default|Default|OK|[Event](#schemaevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-files-upload-files-">files : Upload files </h1>

## Returns a paginated list of files

> Code samples

```bash
curl https://example.com/files \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /files`

<h3 id="returns-a-paginated-list-of-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'file.txt'} matches all the files that have the name 'file.txt'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Uploads a file.

> Code samples

```bash
curl https://example.com/files \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -F 'file=@/path/to/file'
```

`POST /files`

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
- This method is called on behalf of a developer.


> Body parameter

```yaml
file: string
```

<h3 id="uploads-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|isPrivate|query|boolean|false|If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.|
|hash|query|string|false|A comma separated list of hashes to return in order to verify file integrity.|
|body|body|object|true|none|
|» file|body|string(binary)|true|The file to be uploaded|

<h3 id="uploads-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Get the details for a file.

> Code samples

```bash
curl 'https://example.com/files/byIdOrUrl?fileIdOrUrl=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /files/byIdOrUrl`

<h3 id="get-the-details-for-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileIdOrUrl|query|string|true|The fileId or fileUrl of the file to be returned|

<h3 id="get-the-details-for-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## A signed URL for downloading a private file can be returned by providing the fileId.

> Code samples

```bash
curl 'https://example.com/files/download?fileId=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /files/download`

<h3 id="a-signed-url-for-downloading-a-private-file-can-be-returned-by-providing-the-fileid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fileId|query|string|true|The URL of the file to be uploaded|
|validSeconds|query|integer|false|The number of seconds that this signed URL should be valid for. The default is 60.|

<h3 id="a-signed-url-for-downloading-a-private-file-can-be-returned-by-providing-the-fileid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The file was not found|None|
|default|Default|OK|[FileDownload](#schemafiledownload)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Uploads a file from a URL

> Code samples

```bash
curl 'https://example.com/files/url?url=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /files/url`

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
- This method is called on behalf of a developer.


<h3 id="uploads-a-file-from-a-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|true|The URL of the file to be uploaded|
|isPrivate|query|boolean|false|If true, this file will be protected as a private file and require the generation of a signed URL in order to download using the Download File API. The default is false.|

<h3 id="uploads-a-file-from-a-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[File](#schemafile)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-markets-this-marketplace">markets : This marketplace</h1>

## Returns the current marketplace

> Code samples

```bash
curl https://example.com/markets/this \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /markets/this`

<h3 id="returns-the-current-marketplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[Market](#schemamarket)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-ownership-find-ownership">ownership : Find ownership</h1>

## Returns a paginated list of app licenses

> Code samples

```bash
curl https://example.com/ownership \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /ownership`

 - Results are returned for the market provided within the basic authentication credentials 

<h3 id="returns-a-paginated-list-of-app-licenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'userId':'12'} matches all the ownership records that have the userId '12'.|
|sort|query|string|false|A sort document. Example: {'date':1} sorts the results by date in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-app-licenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[OwnershipPages](#schemaownershippages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Aquires an app license for a user (installs app)

> Code samples

```bash
curl 'https://example.com/ownership/install?appId=string&userId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /ownership/install`

 - This method is called on behalf of a user - This method requires either a modelId from the app or a custom model - User data and statistics are recorded when this method is called 

<h3 id="aquires-an-app-license-for-a-user-installs-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|query|string|true|The id of the App being owned|
|userId|query|string|true|The id of the User requesting to own the App|
|modelId|query|string|false|The id of the model associated with this ownership request|
|model|query|string|false|A custom model that will override the app's default model for this install|
|customData|query|string|false|A custom JSON object to attach to this ownership record|

<h3 id="aquires-an-app-license-for-a-user-installs-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|402|Payment Required|Payment Required - The App requires a user with pre-set payment details|None|
|404|Not Found|Not Found - The App is either restricted or was not found|None|
|409|Conflict|Already Exists - The User already owns this app (or is already participating in a trial)|None|
|412|Precondition Failed|Payment Failed - The User's payment details are invalid|None|
|default|Default|OK|[Ownership](#schemaownership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Uninstalls a license for a particular user and app (uninstalls app)

> Code samples

```bash
curl 'https://example.com/ownership/uninstall/string?userId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /ownership/uninstall/{ownershipId}`

 - This method is called on behalf of a user - User data and statistics are recorded when this method is called 

<h3 id="uninstalls-a-license-for-a-particular-user-and-app-uninstalls-app-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id of the ownership to be unintalled|
|userId|query|string|true|The id of the User requesting to uninstall the App|
|cancelOwnership|query|boolean|false|True if this app will require payment to be re-installed. Default is false|
|customData|query|string|false|A custom JSON object to attach to this ownership record|

<h3 id="uninstalls-a-license-for-a-particular-user-and-app-uninstalls-app-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App is not found|None|
|409|Conflict|App is not owned by this user|None|
|default|Default|OK|[Ownership](#schemaownership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns an ownership record

> Code samples

```bash
curl https://example.com/ownership/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /ownership/{ownershipId}`

 - Results are returned for the market provided within the basic authentication credentials 

<h3 id="returns-an-ownership-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id belonging to the ownership record|

<h3 id="returns-an-ownership-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[Ownership](#schemaownership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates an ownership record

> Code samples

```bash
curl https://example.com/ownership/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /ownership/{ownershipId}`

 - Results are returned for the market provided within the basic authentication credentials 

<h3 id="updates-an-ownership-record-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id of the ownership to be updated|
|customData|query|string|false|Custom JSON object that will be attached to this ownership record|
|expires|query|integer(int64)|false|The date (in millis) of when this app ownership expires|

<h3 id="updates-an-ownership-record-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[Ownership](#schemaownership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates ownership fields

> Code samples

```bash
curl https://example.com/ownership/string \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /ownership/{ownershipId}`

 - Results are returned for the market provided within the basic authentication credentials 

<h3 id="updates-ownership-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ownershipId|path|string|true|The id of the ownership to be updated|
|customData|query|string|false|Custom JSON object that will be attached to this ownership record|
|expires|query|integer(int64)|false|The date (in millis) of when this app ownership expires|

<h3 id="updates-ownership-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The ownership was not found|None|
|default|Default|OK|[Ownership](#schemaownership)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-permission-add-and-remove-permissions-">permission : Add and remove permissions </h1>

## Returns permission that allows the app to access this user's data

> Code samples

```bash
curl 'https://example.com/permission/apps/string?userId=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /permission/apps/{appId}`

<h3 id="returns-permission-that-allows-the-app-to-access-this-users-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the app|
|userId|query|string|true|The id of the user|

<h3 id="returns-permission-that-allows-the-app-to-access-this-users-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The access is not found|None|
|default|Default|OK|[Access](#schemaaccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds permission to allow the app to access this user's data

> Code samples

```bash
curl 'https://example.com/permission/apps/string?userId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /permission/apps/{appId}`

<h3 id="adds-permission-to-allow-the-app-to-access-this-users-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the app|
|userId|query|string|true|The id of the user|
|date|query|integer(int64)|false|The time (in milliseconds) of when the user agreed to the access request|
|ip|query|string|false|The ip address of the user agreeing to the access request|

<h3 id="adds-permission-to-allow-the-app-to-access-this-users-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - App not found|None|
|default|Default|OK|[Access](#schemaaccess)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes permission that allows the app to access this user's data

> Code samples

```bash
curl 'https://example.com/permission/apps/string?userId=string' \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /permission/apps/{appId}`

<h3 id="removes-permission-that-allows-the-app-to-access-this-users-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|path|string|true|The id of the app|
|userId|query|string|true|The id of the user|

<h3 id="removes-permission-that-allows-the-app-to-access-this-users-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - The access is not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-reviews-find-and-modify-reviews-">reviews : Find and modify reviews </h1>

## Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set

> Code samples

```bash
curl https://example.com/reviews \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reviews`

- Results are paginated and the default is value is 100 if no limit is provided


<h3 id="find-reviews-for-a-particular-app-and-marketplace-results-are-automatically-paginated-when-limit-is-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'rating': 500} matches all the reviews that have a rating of 500. |
|sort|query|string|false|A sort document. Example: {'rating':1} sorts the results by rating in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="find-reviews-for-a-particular-app-and-marketplace-results-are-automatically-paginated-when-limit-is-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[ReviewPages](#schemareviewpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Post a review from a User and returns the new post

> Code samples

```bash
curl 'https://example.com/reviews?appId=string&userId=string&headline=string&rating=0&description=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /reviews`

- Only authenticated users are able to post reviews
- Returns the newly created review


<h3 id="post-a-review-from-a-user-and-returns-the-new-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appId|query|string|true|The id of the App that will own this review|
|userId|query|string|true|The id of the User that is posting this review|
|userAccountId|query|string|false|The id of the User account that is posting this review|
|headline|query|string|true|The review's headline. Limited to 50 characters.|
|rating|query|integer|true|The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)|
|description|query|string|true|The review's description. Limited to 2000 characters.|
|type|query|string|false|The type for this review|
|mustOwnApp|query|boolean|false|True if a review can be created only by a user that has owned the app. The default is True.|
|autoApprove|query|boolean|false|True if the review should be automatically approved. The default is False.|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="post-a-review-from-a-user-and-returns-the-new-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|403|Forbidden|Forbidden - Users must have owned the app before they can post a review; Anonymous users cannot post reviews|None|
|409|Conflict|Already Exists - The User has already reviewed this app|None|
|default|Default|OK|[Review](#schemareview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Find a Review within a particular App and marketplace

> Code samples

```bash
curl https://example.com/reviews/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /reviews/{reviewId}`

<h3 id="find-a-review-within-a-particular-app-and-marketplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|The id of the review to be located|

<h3 id="find-a-review-within-a-particular-app-and-marketplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - Review is not found|None|
|default|Default|OK|[Review](#schemareview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a review from a User and returns the new post

> Code samples

```bash
curl 'https://example.com/reviews/string?userId=string&userAccountId=string&headline=string&rating=0&description=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /reviews/{reviewId}`

- Only the review author is able to update their review
- Returns the newly updated review


<h3 id="update-a-review-from-a-user-and-returns-the-new-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|The id of the Review to be updated|
|userId|query|string|true|The id of the User that is updating this review|
|userAccountId|query|string|true|The id of the User account that is posting this review|
|headline|query|string|true|The review's headline. Limited to 50 characters.|
|rating|query|integer|true|The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)|
|description|query|string|true|The review's description. Limited to 2000 characters.|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="update-a-review-from-a-user-and-returns-the-new-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|403|Forbidden|Forbidden - Anonymous users cannot update reviews|None|
|404|Not Found|Not Found - This review was not found|None|
|default|Default|OK|[Review](#schemareview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Remove a review

> Code samples

```bash
curl 'https://example.com/reviews/string?userId=string' \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /reviews/{reviewId}`

- Only the review author is able to remove their review


<h3 id="remove-a-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|The id of the Review to be updated|
|userId|query|string|true|The id of the User that is removing this review|
|userAccountId|query|string|false|The id of the User account that is emoving this review|

<h3 id="remove-a-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Update a review fields

> Code samples

```bash
curl 'https://example.com/reviews/string?userId=string' \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /reviews/{reviewId}`

- Only the review author is able to update their review
- Returns the newly updated review


<h3 id="update-a-review-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reviewId|path|string|true|The id of the Review to be updated|
|userId|query|string|true|The id of the User that is updating this review|
|userAccountId|query|string|false|The id of the User account that is posting this review|
|headline|query|string|false|The review's headline. Limited to 50 characters.|
|rating|query|integer|false|The rating given within this review. The rating is represented as an integer between 0 and 500 (0 - 5 stars)|
|description|query|string|false|The review's description. Limited to 2000 characters.|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="update-a-review-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|403|Forbidden|Forbidden - Anonymous users cannot update reviews|None|
|404|Not Found|Not Found - This review was not found|None|
|default|Default|OK|[Review](#schemareview)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-stats-find-marketplace-statistics">stats: Find marketplace statistics</h1>

## Increments a statistics field

> Code samples

```bash
curl 'https://example.com/stats/increment/string?appId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /stats/increment/{field}`

increment a statistics field

<h3 id="increments-a-statistics-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|field|path|string|true|The field to be incremented|
|appId|query|string|true|The id of the app associated with this statistic value|
|userId|query|string|false|The id of the user that is performing the action|
|value|query|integer|false|The increment amount. Default is 1 if no value is provided.|
|date|query|integer(int64)|false|The date (in millis) for when this increment occurred. The default is the current date if no value is provided.|

<h3 id="increments-a-statistics-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return a timeseries for a particular field

> Code samples

```bash
curl https://example.com/stats/series/day/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/series/{period}/{fields}`

Return a timeseries nested array containing date and value. Example: [[1406520000000,2],[1406606400000,34],[1406692800000,245],...]

<h3 id="return-a-timeseries-for-a-particular-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|The period for the series (day or month)|
|fields|path|string|true|The field to be graphed. This also be a comma separated list of fields and the result will be a single timeseries containing the sum of all fields.|
|start|query|integer(int64)|false|The start date for this series (in millis)|
|end|query|integer(int64)|false|The end date for this series (in millis)|
|query|query|string|false|A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|day|
|period|month|

<h3 id="return-a-timeseries-for-a-particular-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|OK|Inline|

<h3 id="return-a-timeseries-for-a-particular-field-responseschema">Response Schema</h3>

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[object]]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns the total number of events for a particular field.

> Code samples

```bash
curl 'https://example.com/stats/total?fields=string' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stats/total`

<h3 id="returns-the-total-number-of-events-for-a-particular-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|true|A comma seperated list of all the fields to be returned in the total (available by default: dislikes, likes, reviews, totalSales, developerSales, marketplaceSales, downloads, ownerships, views)|
|query|query|string|false|A query document. Example: {'developerId': '112'} matches all the apps that have the developer with id 112|
|start|query|integer(int64)|false|The start date for this total (in millis)|
|end|query|integer(int64)|false|The end date for this total (in millis)|

<h3 id="returns-the-total-number-of-events-for-a-particular-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|OK|[Total](#schematotal)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-stripe-gateway-process-payments-and-refunds-">stripe-gateway : Process payments and refunds </h1>

## Returns a developers connected Stripe accounts

> Code samples

```bash
curl https://example.com/stripe-gateway/developer/string/accounts \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stripe-gateway/developer/{developerId}/accounts`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="returns-a-developers-connected-stripe-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer connecting their Stripe account|

<h3 id="returns-a-developers-connected-stripe-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Generate a temporary URL to allow a developer to connect their Stripe account

> Code samples

```bash
curl 'https://example.com/stripe-gateway/developer/string/accounts?redirectUrl=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /stripe-gateway/developer/{developerId}/accounts`

- Results are returned for the market provided within the basic authentication credentials 
- The URL generated by this method is only valid for 48 hours.


<h3 id="generate-a-temporary-url-to-allow-a-developer-to-connect-their-stripe-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer connecting their Stripe account|
|redirectUrl|query|string|true|The URL to redirect this developer after they have connected their Stripe account|

<h3 id="generate-a-temporary-url-to-allow-a-developer-to-connect-their-stripe-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[DeveloperToken](#schemadevelopertoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Disconnects a developer's Stripe account

> Code samples

```bash
curl https://example.com/stripe-gateway/developer/string/accounts/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /stripe-gateway/developer/{developerId}/accounts/{stripeId}`


- Results are returned for the market provided within the basic authentication credentials


<h3 id="disconnects-a-developers-stripe-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|developerId|path|string|true|The id of the developer disconnecting their Stripe account|
|stripeId|path|string|true|The id of the stripe account to disconnect|

<h3 id="disconnects-a-developers-stripe-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Accounts](#schemaaccounts)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns credit cards for this user

> Code samples

```bash
curl https://example.com/stripe-gateway/user/string/cards \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /stripe-gateway/user/{userId}/cards`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="returns-credit-cards-for-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user requesting their credit cards|

<h3 id="returns-credit-cards-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Cards](#schemacards)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Adds credit card for this user

> Code samples

```bash
curl 'https://example.com/stripe-gateway/user/string/cards?token=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /stripe-gateway/user/{userId}/cards`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="adds-credit-card-for-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user adding their credit card|
|token|query|string|true|The Stripe token returned by the Stripe.js Stripe.card.createToken call|
|isDefault|query|boolean|false|Set to true if this should be set to be the default credit card|

<h3 id="adds-credit-card-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Cards](#schemacards)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates a credit card for this user

> Code samples

```bash
curl https://example.com/stripe-gateway/user/string/cards/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /stripe-gateway/user/{userId}/cards/{cardId}`


- Results are returned for the market provided within the basic authentication credentials


<h3 id="updates-a-credit-card-for-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user adding their credit card|
|cardId|path|string|true|The id of the card to be updated|
|isDefault|query|boolean|false|Set to true if this should be set to be the default credit card|
|address_city|query|string|false|The card holder's city|
|address_country|query|string|false|The card holder's country|
|address_line1|query|string|false|The card holder's street address|
|address_line2|query|string|false|The card holder's street address|
|address_state|query|string|false|The card holder's city state/province|
|address_zip|query|string|false|The card holder's zip/postal code|

<h3 id="updates-a-credit-card-for-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Cards](#schemacards)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes a credit card for a user

> Code samples

```bash
curl https://example.com/stripe-gateway/user/string/cards/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /stripe-gateway/user/{userId}/cards/{cardId}`

<h3 id="removes-a-credit-card-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user removing their credit card|
|cardId|path|string|true|The id of the credit card to remove|

<h3 id="removes-a-credit-card-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|412|Precondition Failed|Precondition Failed - Payments must be enabled and 'Stripe' must be selected as the gateway in order to use this API endpoint|None|
|default|Default|OK|[Cards](#schemacards)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-transactions-find-payments-and-refunds-">transactions : Find payments and refunds </h1>

## Returns a paginated list of transactions

> Code samples

```bash
curl https://example.com/transactions \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /transactions`

- Results are paginated and the default is value is 100 if no limit is provided


<h3 id="returns-a-paginated-list-of-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'userId':'1'} matches all the transactions that have the userId '1'.|
|sort|query|string|false|A sort document. Example: {'date':1} sorts the results by total in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[TransactionPages](#schematransactionpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a transaction

> Code samples

```bash
curl https://example.com/transactions/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /transactions/{transactionId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="returns-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The id of the transaction to return|

<h3 id="returns-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates a transaction

> Code samples

```bash
curl https://example.com/transactions/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /transactions/{transactionId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="updates-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The id of the transaction to be updated|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[Transaction](#schematransaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Deleted a transaction

> Code samples

```bash
curl https://example.com/transactions/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /transactions/{transactionId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="deleted-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transactionId|path|string|true|The id of the transaction to be deleted|

<h3 id="deleted-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-useraccounts-find-and-modify-user-accounts-">userAccounts : Find and modify user accounts </h1>

## Returns a paginated list of userAccounts

> Code samples

```bash
curl https://example.com/userAccounts \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /userAccounts`

- Results are paginated and the default is value is 1000 if no limit is provided


<h3 id="returns-a-paginated-list-of-useraccounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'NASA'} matches all the userAccounts that have the name 'NASA'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-useraccounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[UserAccountPages](#schemauseraccountpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Returns a single user account

> Code samples

```bash
curl https://example.com/userAccounts/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /userAccounts/{userAccountId}`

<h3 id="returns-a-single-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userAccountId|path|string|true|The id of the user account to be located|

<h3 id="returns-a-single-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - Developer account is not found|None|
|default|Default|OK|[UserAccount](#schemauseraccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the user account or adds the user account if it doesn't exist

> Code samples

```bash
curl 'https://example.com/userAccounts/string?userId=string' \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /userAccounts/{userAccountId}`

<h3 id="updates-the-user-account-or-adds-the-user-account-if-it-doesnt-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userAccountId|path|string|true|The id of the user account to be updated|
|userId|query|string|true|The Id of the user that this account belongs to|
|email|query|string|false|The contact email address|
|name|query|string|false|The user account name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-user-account-or-adds-the-user-account-if-it-doesnt-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[UserAccount](#schemauseraccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes the user account

> Code samples

```bash
curl https://example.com/userAccounts/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /userAccounts/{userAccountId}`

<h3 id="removes-the-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userAccountId|path|string|true|The id of the user account to be removed|

<h3 id="removes-the-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates the user account fields

> Code samples

```bash
curl 'https://example.com/userAccounts/string?userId=string' \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /userAccounts/{userAccountId}`

<h3 id="updates-the-user-account-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userAccountId|path|string|true|The id of the user account to be updated|
|userId|query|string|true|The Id of the user that this account belongs to|
|email|query|string|false|The contact email address|
|name|query|string|false|The user account name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-the-user-account-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - User account is not found|None|
|default|Default|OK|[UserAccount](#schemauseraccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

<h1 id="openchannel-market-api-users-find-and-modify-users-">users : Find and modify users </h1>

## Returns a paginated list of users

> Code samples

```bash
curl https://example.com/users \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users`

- Results are paginated and the default is value is 100 if no limit is provided


<h3 id="returns-a-paginated-list-of-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|A query document. Example: {'name':'John'} matches all the users that have the name 'John'|
|sort|query|string|false|A sort document. Example: {'name':1} sorts the results by name in ascending order|
|pageNumber|query|integer|false|The result set page number to be returned|
|limit|query|integer|false|The maximum number of results to return per page|

<h3 id="returns-a-paginated-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[UserPages](#schemauserpages)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Return a single user

> Code samples

```bash
curl https://example.com/users/string \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /users/{userId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="return-a-single-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user to be located|

<h3 id="return-a-single-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - User is not found|None|
|default|Default|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates a single user or adds the user if they don't exist

> Code samples

```bash
curl https://example.com/users/string \
  -X POST \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /users/{userId}`

<h3 id="updates-a-single-user-or-adds-the-user-if-they-dont-exist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user to be updated|
|type|query|string|false|The type for this user|
|email|query|string|false|The user's email|
|username|query|string|false|The user's username|
|name|query|string|false|The user's name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-a-single-user-or-adds-the-user-if-they-dont-exist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|default|Default|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Removes a single user

> Code samples

```bash
curl https://example.com/users/string \
  -X DELETE \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`DELETE /users/{userId}`

- Results are returned for the market provided within the basic authentication credentials


<h3 id="removes-a-single-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user to be removed|

<h3 id="removes-a-single-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - User is not found|None|
|default|Default|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Updates user fields

> Code samples

```bash
curl https://example.com/users/string \
  -X PATCH \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`PATCH /users/{userId}`

<h3 id="updates-user-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|The id of the user to be updated|
|type|query|string|false|The type for this user|
|email|query|string|false|The user's email|
|username|query|string|false|The user's username|
|name|query|string|false|The user's name|
|customData|query|string|false|A custom JSON object that you can create and attach to this record|

<h3 id="updates-user-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Bad Request - Required parameters are missing, malformed or invalid|None|
|404|Not Found|Not Found - User is not found|None|
|default|Default|OK|[User](#schemauser)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_Access">Access</h2>
<!-- backwards compatibility -->
<a id="schemaaccess"></a>
<a id="schema_Access"></a>
<a id="tocSaccess"></a>
<a id="tocsaccess"></a>

```json
{
  "access": [
    "string"
  ],
  "appId": "string",
  "date": 0,
  "ip": "string",
  "isValid": true,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[string]|true|none|The approved access restrictions for this app|
|appId|string|true|none|The id of the app that owns this access key|
|date|integer(int64)|true|none|The time (in milliseconds) of when the user agreed to the access request|
|ip|string|true|none|The ip address of the user agreeing to the access request|
|isValid|boolean|true|none|True if this access is up to date with the current version of the app|
|userId|string|true|none|The id for this user|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "accountName": "string",
  "country": "string",
  "defaultCurrency": "string",
  "stripeId": "string"
}
```

The connected Stripe account for a developer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|The name of the Stripe account|
|country|string|true|none|The country for this Stripe account|
|defaultCurrency|string|true|none|The default currency for this Stripe account|
|stripeId|string|true|none|The id of the Stripe account|

<h2 id="tocS_Accounts">Accounts</h2>
<!-- backwards compatibility -->
<a id="schemaaccounts"></a>
<a id="schema_Accounts"></a>
<a id="tocSaccounts"></a>
<a id="tocsaccounts"></a>

```json
{
  "accounts": [
    {
      "accountName": "string",
      "country": "string",
      "defaultCurrency": "string",
      "stripeId": "string"
    }
  ],
  "developerId": "string"
}
```

A developer's connected Stripe accounts

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|true|none|An array of connected Stripe accounts|
|developerId|string|true|none|The id of the developer|

<h2 id="tocS_App">App</h2>
<!-- backwards compatibility -->
<a id="schemaapp"></a>
<a id="schema_App"></a>
<a id="tocSapp"></a>
<a id="tocsapp"></a>

```json
{
  "access": [
    "string"
  ],
  "allow": {
    "own": {},
    "view": {}
  },
  "appId": "string",
  "attributes": {},
  "created": 0,
  "customData": {},
  "developerId": "string",
  "isLive": true,
  "lastUpdated": 0,
  "model": [
    {
      "billingPeriod": "daily",
      "billingPeriodUnit": 0,
      "commission": 0,
      "currency": "string",
      "customData": {},
      "feePayer": "developer",
      "license": "single",
      "modelId": "string",
      "price": 0,
      "subtype": "usage",
      "trial": 0,
      "type": "free"
    }
  ],
  "name": "string",
  "ownership": {
    "appId": "string",
    "customData": {},
    "date": 0,
    "developerId": "string",
    "expires": 0,
    "model": {
      "billingPeriod": "daily",
      "billingPeriodUnit": 0,
      "commission": 0,
      "currency": "string",
      "customData": {},
      "feePayer": "developer",
      "license": "single",
      "modelId": "string",
      "price": 0,
      "subtype": "usage",
      "trial": 0,
      "type": "free"
    },
    "ownershipId": "string",
    "ownershipStatus": "pending",
    "ownershipType": "full",
    "uninstallDate": 0,
    "userId": "string"
  },
  "randomize": 0,
  "rating": 0,
  "restrict": {
    "own": {},
    "view": {}
  },
  "reviewCount": 0,
  "safeName": [
    "string"
  ],
  "statistics": {},
  "status": {
    "profanity": [
      {
        "end": 0,
        "start": 0,
        "word": "string"
      }
    ],
    "reason": "profanity",
    "value": "pending"
  },
  "submittedDate": 0,
  "type": "string",
  "version": 0
}
```

An app

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[string]|false|none|A custom defined list of access requirements|
|allow|[Restrictions](#schemarestrictions)|true|none|Resticts users from accessing this app|
|appId|string|true|none|The id of this app|
|attributes|object|true|none|A custom defined list of app attributes|
|created|integer(int64)|true|none|The date (in millis) that this app was created|
|customData|object|true|none|A custom JSON object that you can create and attach to this record|
|developerId|string|true|none|The id of the developer that owns this app|
|isLive|boolean|true|none|True if this is the live version of the app|
|lastUpdated|integer(int64)|true|none|The date (in millis) that this app was last modified|
|model|[[Model](#schemamodel)]|true|none|The models that describes the cost and pricing for this app|
|name|string|true|none|The name of this app|
|ownership|[Ownership](#schemaownership)|false|none|none|
|randomize|integer|true|none|A random number that changes hourly and is used for achieving a random sort order when displaying apps|
|rating|integer|true|none|The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)|
|restrict|[Restrictions](#schemarestrictions)|true|none|Resticts users from accessing this app|
|reviewCount|integer|false|none|The number of approved reviews for this app.|
|safeName|[string]|true|none|URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.|
|statistics|object|false|none|A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity|
|status|[Status](#schemastatus)|true|none|The current status of this review|
|submittedDate|integer(int64)|false|none|The date (in millis) that this app was submitted for approval|
|type|string|false|none|The type for this app|
|version|integer|true|none|The version number for this app|

<h2 id="tocS_AppPages">AppPages</h2>
<!-- backwards compatibility -->
<a id="schemaapppages"></a>
<a id="schema_AppPages"></a>
<a id="tocSapppages"></a>
<a id="tocsapppages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "access": [
        "string"
      ],
      "allow": {
        "own": {},
        "view": {}
      },
      "appId": "string",
      "attributes": {},
      "created": 0,
      "customData": {},
      "developerId": "string",
      "isLive": true,
      "lastUpdated": 0,
      "model": [
        {
          "billingPeriod": "daily",
          "billingPeriodUnit": 0,
          "commission": 0,
          "currency": "string",
          "customData": {},
          "feePayer": "developer",
          "license": "single",
          "modelId": "string",
          "price": 0,
          "subtype": "usage",
          "trial": 0,
          "type": "free"
        }
      ],
      "name": "string",
      "ownership": {
        "appId": "string",
        "customData": {},
        "date": 0,
        "developerId": "string",
        "expires": 0,
        "model": {
          "billingPeriod": "daily",
          "billingPeriodUnit": 0,
          "commission": 0,
          "currency": "string",
          "customData": {},
          "feePayer": "developer",
          "license": "single",
          "modelId": "string",
          "price": 0,
          "subtype": "usage",
          "trial": 0,
          "type": "free"
        },
        "ownershipId": "string",
        "ownershipStatus": "pending",
        "ownershipType": "full",
        "uninstallDate": 0,
        "userId": "string"
      },
      "randomize": 0,
      "rating": 0,
      "restrict": {
        "own": {},
        "view": {}
      },
      "reviewCount": 0,
      "safeName": [
        "string"
      ],
      "statistics": {},
      "status": {
        "profanity": [
          {
            "end": 0,
            "start": 0,
            "word": "string"
          }
        ],
        "reason": "profanity",
        "value": "pending"
      },
      "submittedDate": 0,
      "type": "string",
      "version": 0
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of app results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[App](#schemaapp)]|true|none|An array of apps for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_AppTotal">AppTotal</h2>
<!-- backwards compatibility -->
<a id="schemaapptotal"></a>
<a id="schema_AppTotal"></a>
<a id="tocSapptotal"></a>
<a id="tocsapptotal"></a>

```json
{
  "$appId": {
    "$field": 0
  }
}
```

The totals for the app

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$appId|[DataTotal](#schemadatatotal)|true|none|The totals for the field|

<h2 id="tocS_AppVersion">AppVersion</h2>
<!-- backwards compatibility -->
<a id="schemaappversion"></a>
<a id="schema_AppVersion"></a>
<a id="tocSappversion"></a>
<a id="tocsappversion"></a>

```json
{
  "access": [
    "string"
  ],
  "allow": {
    "own": {},
    "view": {}
  },
  "appId": "string",
  "attributes": {},
  "created": 0,
  "customData": {},
  "developerId": "string",
  "isLatestVersion": true,
  "isLive": true,
  "lastUpdated": 0,
  "model": [
    {
      "billingPeriod": "daily",
      "billingPeriodUnit": 0,
      "commission": 0,
      "currency": "string",
      "customData": {},
      "feePayer": "developer",
      "license": "single",
      "modelId": "string",
      "price": 0,
      "subtype": "usage",
      "trial": 0,
      "type": "free"
    }
  ],
  "name": "string",
  "parent": {
    "status": {
      "profanity": [
        {
          "end": 0,
          "start": 0,
          "word": "string"
        }
      ],
      "reason": "profanity",
      "value": "pending"
    }
  },
  "rating": 0,
  "restrict": {
    "own": {},
    "view": {}
  },
  "reviewCount": 0,
  "safeName": [
    "string"
  ],
  "status": {
    "profanity": [
      {
        "end": 0,
        "start": 0,
        "word": "string"
      }
    ],
    "reason": "profanity",
    "value": "pending"
  },
  "type": "string",
  "version": 0
}
```

An AppVersion

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[string]|false|none|A custom defined list of access requirements|
|allow|[Restrictions](#schemarestrictions)|true|none|Resticts users from accessing this app|
|appId|string|true|none|The id of this app|
|attributes|object|false|none|A custom defined list of app attributes|
|created|integer(int64)|true|none|The date (in millis) that this app was created|
|customData|object|true|none|A custom JSON object that you can create and attach to this record|
|developerId|string|true|none|The id of the developer that owns this app|
|isLatestVersion|boolean|true|none|True if this is the latest version of this app|
|isLive|boolean|true|none|True if this is the live version of the app|
|lastUpdated|integer(int64)|true|none|The date (in millis) that this app was last modified|
|model|[[Model](#schemamodel)]|true|none|The models that describes the cost and pricing for this app|
|name|string|true|none|The name of this app|
|parent|[Parent](#schemaparent)|true|none|Details of the live version of this app|
|rating|integer|false|none|The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)|
|restrict|[Restrictions](#schemarestrictions)|true|none|Resticts users from accessing this app|
|reviewCount|integer|false|none|The number of approved reviews for this app.|
|safeName|[string]|true|none|URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.|
|status|[Status](#schemastatus)|true|none|The current status of this review|
|type|string|false|none|The type for this app|
|version|integer|true|none|The version number for this app|

<h2 id="tocS_App_Entry">App_Entry</h2>
<!-- backwards compatibility -->
<a id="schemaapp_entry"></a>
<a id="schema_App_Entry"></a>
<a id="tocSapp_entry"></a>
<a id="tocsapp_entry"></a>

```json
{
  "appId": "string",
  "date": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|The id of the app involved in this action|
|date|integer(int64)|true|none|The date (in millis) of when this action was performed|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "name": "string",
  "type": "text",
  "values": "string"
}
```

An app attribute

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of this attribute|
|type|string|true|none|The type of this attribute|
|values|string|false|none|A comma seperated list of values allowed for this attribute|

#### Enumerated Values

|Property|Value|
|---|---|
|type|text|
|type|select|
|type|multi|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "address_city": "string",
  "address_country": "string",
  "address_line1": "string",
  "address_line2": "string",
  "address_state": "string",
  "address_zip": "string",
  "brand": "string",
  "cardId": "string",
  "exp_month": 0,
  "exp_year": 0,
  "isDefault": true,
  "last4": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_city|string|false|none|The card holder's city|
|address_country|string|false|none|The card holder's country|
|address_line1|string|false|none|The card holder's street address|
|address_line2|string|false|none|The card holder's street address|
|address_state|string|false|none|The card holder's city state/province|
|address_zip|string|false|none|The card holder's zip/postal code|
|brand|string|true|none|The brand of the credit card. Example: Visa|
|cardId|string|true|none|The id for this credit card|
|exp_month|integer|true|none|The two digit expiration month|
|exp_year|integer|true|none|The four digit expiration year|
|isDefault|boolean|true|none|True if this is the default credit card|
|last4|string|true|none|The last 4 digits of the credit card number|
|name|string|true|none|The card holder's full name|

<h2 id="tocS_Cards">Cards</h2>
<!-- backwards compatibility -->
<a id="schemacards"></a>
<a id="schema_Cards"></a>
<a id="tocScards"></a>
<a id="tocscards"></a>

```json
{
  "cards": [
    {
      "address_city": "string",
      "address_country": "string",
      "address_line1": "string",
      "address_line2": "string",
      "address_state": "string",
      "address_zip": "string",
      "brand": "string",
      "cardId": "string",
      "exp_month": 0,
      "exp_year": 0,
      "isDefault": true,
      "last4": "string",
      "name": "string"
    }
  ],
  "userId": "string"
}
```

A User's credit card details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cards|[[Card](#schemacard)]|true|none|An array of credit cards added by this user|
|userId|string|true|none|The id of this user|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

The category supported by this category group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|The description of this category|
|name|string|true|none|The name of this category|

<h2 id="tocS_CategoryGroups">CategoryGroups</h2>
<!-- backwards compatibility -->
<a id="schemacategorygroups"></a>
<a id="schema_CategoryGroups"></a>
<a id="tocScategorygroups"></a>
<a id="tocscategorygroups"></a>

```json
{
  "categories": [
    {
      "description": "string",
      "name": "string"
    }
  ],
  "name": "string"
}
```

The category groups supported by this marketplace

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|true|none|The categories supported by this category group|
|name|string|true|none|The name of this category group|

<h2 id="tocS_DataTotal">DataTotal</h2>
<!-- backwards compatibility -->
<a id="schemadatatotal"></a>
<a id="schema_DataTotal"></a>
<a id="tocSdatatotal"></a>
<a id="tocsdatatotal"></a>

```json
{
  "$field": 0
}
```

The totals for the field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|$field|integer|false|none|The totals for the field|

<h2 id="tocS_Developer">Developer</h2>
<!-- backwards compatibility -->
<a id="schemadeveloper"></a>
<a id="schema_Developer"></a>
<a id="tocSdeveloper"></a>
<a id="tocsdeveloper"></a>

```json
{
  "created": 0,
  "customData": {},
  "developerId": "string",
  "email": "string",
  "name": "string",
  "type": "string"
}
```

A Developer

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|integer|true|none|The time (in millis) of when this developer was created|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|developerId|string|true|none|The id of this developer|
|email|string|false|none|The developer's email|
|name|string|false|none|The developer's name|
|type|string|false|none|The type for this developer|

<h2 id="tocS_DeveloperAccount">DeveloperAccount</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperaccount"></a>
<a id="schema_DeveloperAccount"></a>
<a id="tocSdeveloperaccount"></a>
<a id="tocsdeveloperaccount"></a>

```json
{
  "customData": {},
  "developerAccountId": "string",
  "developerId": "string",
  "email": "string",
  "name": "string"
}
```

A Developer Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|developerAccountId|string|true|none|The id of this developer account|
|developerId|string|true|none|The id of the developer that this account belongs to|
|email|string|false|none|The contact email address|
|name|string|false|none|The name for the account|

<h2 id="tocS_DeveloperAccountPages">DeveloperAccountPages</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperaccountpages"></a>
<a id="schema_DeveloperAccountPages"></a>
<a id="tocSdeveloperaccountpages"></a>
<a id="tocsdeveloperaccountpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "customData": {},
      "developerAccountId": "string",
      "developerId": "string",
      "email": "string",
      "name": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of developerAccount results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[DeveloperAccount](#schemadeveloperaccount)]|true|none|An array of developerAccounts for the current page|
|pageNumber|integer|true|none|The current page number for this result set|
|pages|integer|true|none|The total number of pages available for this result set|

<h2 id="tocS_DeveloperPages">DeveloperPages</h2>
<!-- backwards compatibility -->
<a id="schemadeveloperpages"></a>
<a id="schema_DeveloperPages"></a>
<a id="tocSdeveloperpages"></a>
<a id="tocsdeveloperpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "created": 0,
      "customData": {},
      "developerId": "string",
      "email": "string",
      "name": "string",
      "type": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of developer results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[Developer](#schemadeveloper)]|true|none|An array of developers for the current page|
|pageNumber|integer|true|none|The current page number for this result set|
|pages|integer|true|none|The total number of pages available for this result set|

<h2 id="tocS_DeveloperToken">DeveloperToken</h2>
<!-- backwards compatibility -->
<a id="schemadevelopertoken"></a>
<a id="schema_DeveloperToken"></a>
<a id="tocSdevelopertoken"></a>
<a id="tocsdevelopertoken"></a>

```json
{
  "developerId": "string",
  "expires": 0,
  "targetUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developerId|string|true|none|The id of the developer connecting their Stripe account|
|expires|integer(int64)|true|none|The time (in milliseconds) when this URL expires|
|targetUrl|string|true|none|The URL that this developer can use to connect their Stripe account|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "app": {
    "access": [
      "string"
    ],
    "allow": {
      "own": {},
      "view": {}
    },
    "appId": "string",
    "attributes": {},
    "created": 0,
    "customData": {},
    "developerId": "string",
    "isLive": true,
    "lastUpdated": 0,
    "model": [
      {
        "billingPeriod": "daily",
        "billingPeriodUnit": 0,
        "commission": 0,
        "currency": "string",
        "customData": {},
        "feePayer": "developer",
        "license": "single",
        "modelId": "string",
        "price": 0,
        "subtype": "usage",
        "trial": 0,
        "type": "free"
      }
    ],
    "name": "string",
    "ownership": {
      "appId": "string",
      "customData": {},
      "date": 0,
      "developerId": "string",
      "expires": 0,
      "model": {
        "billingPeriod": "daily",
        "billingPeriodUnit": 0,
        "commission": 0,
        "currency": "string",
        "customData": {},
        "feePayer": "developer",
        "license": "single",
        "modelId": "string",
        "price": 0,
        "subtype": "usage",
        "trial": 0,
        "type": "free"
      },
      "ownershipId": "string",
      "ownershipStatus": "pending",
      "ownershipType": "full",
      "uninstallDate": 0,
      "userId": "string"
    },
    "randomize": 0,
    "rating": 0,
    "restrict": {
      "own": {},
      "view": {}
    },
    "reviewCount": 0,
    "safeName": [
      "string"
    ],
    "statistics": {},
    "status": {
      "profanity": [
        {
          "end": 0,
          "start": 0,
          "word": "string"
        }
      ],
      "reason": "profanity",
      "value": "pending"
    },
    "submittedDate": 0,
    "type": "string",
    "version": 0
  },
  "createdDate": 0,
  "description": "string",
  "developer": {
    "created": 0,
    "customData": {},
    "developerId": "string",
    "email": "string",
    "name": "string",
    "type": "string"
  },
  "eventId": "string",
  "eventType": "app.submitted",
  "marketplaceId": "string",
  "ownership": {
    "appId": "string",
    "customData": {},
    "date": 0,
    "developerId": "string",
    "expires": 0,
    "model": {
      "billingPeriod": "daily",
      "billingPeriodUnit": 0,
      "commission": 0,
      "currency": "string",
      "customData": {},
      "feePayer": "developer",
      "license": "single",
      "modelId": "string",
      "price": 0,
      "subtype": "usage",
      "trial": 0,
      "type": "free"
    },
    "ownershipId": "string",
    "ownershipStatus": "pending",
    "ownershipType": "full",
    "uninstallDate": 0,
    "userId": "string"
  },
  "review": {
    "appId": "string",
    "customData": "string",
    "description": "string",
    "headline": "string",
    "rating": 0,
    "reportDate": 0,
    "reviewId": "string",
    "status": {
      "profanity": [
        {
          "end": 0,
          "start": 0,
          "word": "string"
        }
      ],
      "reason": "profanity",
      "value": "pending"
    },
    "type": "string",
    "user": {
      "created": 0,
      "customData": {},
      "email": "string",
      "name": "string",
      "type": "string",
      "userId": "string"
    },
    "userAccount": {
      "customData": {},
      "email": "string",
      "name": "string",
      "userAccountId": "string",
      "userId": "string"
    },
    "userAccountId": "string",
    "userId": "string"
  },
  "transaction": {
    "amount": 0,
    "appId": "string",
    "customData": {},
    "date": 0,
    "developerAmount": 0,
    "developerId": "string",
    "feeAmount": 0,
    "marketplaceAmount": 0,
    "ownershipId": "string",
    "transactionId": "string",
    "type": "payment",
    "userId": "string"
  },
  "user": {
    "created": 0,
    "customData": {},
    "email": "string",
    "name": "string",
    "type": "string",
    "userId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|[App](#schemaapp)|false|none|An app|
|createdDate|integer(int64)|true|none|The date (in millis) of when this event occurred|
|description|string|false|none|A description of the event|
|developer|[Developer](#schemadeveloper)|false|none|A Developer|
|eventId|string|true|none|The id of the event|
|eventType|string|true|none|The current event type|
|marketplaceId|string|true|none|The id of the marketplace that owns this event|
|ownership|[Ownership](#schemaownership)|false|none|none|
|review|[Review](#schemareview)|false|none|A Review|
|transaction|[Transaction](#schematransaction)|false|none|A transaction for an app initiated by a user|
|user|[User](#schemauser)|false|none|A User|

#### Enumerated Values

|Property|Value|
|---|---|
|eventType|app.submitted|
|eventType|app.approved|
|eventType|app.suspended|
|eventType|app.unsuspended|
|eventType|app.rejected|
|eventType|app.inReview|
|eventType|app.installed|
|eventType|app.uninstalled|
|eventType|review.created|
|eventType|review.updated|
|eventType|review.approved|
|eventType|review.spam|
|eventType|review.removed|
|eventType|user.created|
|eventType|user.updated|
|eventType|user.removed|
|eventType|user.invalidPaymentDetails|
|eventType|user.paymentDetailsRequired|
|eventType|developer.created|
|eventType|developer.updated|
|eventType|developer.removed|
|eventType|developer.paymentDetailsRequired|
|eventType|permission.added|
|eventType|permission.removed|
|eventType|payment.complete|
|eventType|payment.refunded|
|eventType|payment.required|
|eventType|ownership.expired|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "contentType": "string",
  "fileId": "string",
  "fileUrl": "string",
  "hash": {
    "MD5": "string",
    "SHA-1": "string",
    "SHA-256": "string"
  },
  "mimeCheck": "PASSED",
  "name": "string",
  "size": 0,
  "uploadDate": 0,
  "virusScan": {
    "finished": 0,
    "foundViruses": [
      {
        "fileName": "string",
        "virusName": "string"
      }
    ],
    "started": 0,
    "status": "string"
  }
}
```

The file ids of the uploaded file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The internet media type of the file|
|fileId|string|true|none|The id of the uploaded file|
|fileUrl|string|false|none|The path where the file can be located.|
|hash|[Hash](#schemahash)|false|none|The hashes requested for the file.|
|mimeCheck|string|false|none|The mime type validation check to see if the extension of this file matches it's content. Can be PASSED or FAILED|
|name|string|true|none|The name of the uploaded file|
|size|integer|true|none|The number of bytes in the uploaded file|
|uploadDate|integer(int64)|true|none|The time in milliseconds when the file was uploaded|
|virusScan|[VirusScan](#schemavirusscan)|false|none|The virus scan results for this file|

#### Enumerated Values

|Property|Value|
|---|---|
|mimeCheck|PASSED|
|mimeCheck|FAILED|

<h2 id="tocS_FileDownload">FileDownload</h2>
<!-- backwards compatibility -->
<a id="schemafiledownload"></a>
<a id="schema_FileDownload"></a>
<a id="tocSfiledownload"></a>
<a id="tocsfiledownload"></a>

```json
{
  "url": "string"
}
```

The signed URL for downloading a private file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|The signed URL for downloading a private file|

<h2 id="tocS_File_Pages">File_Pages</h2>
<!-- backwards compatibility -->
<a id="schemafile_pages"></a>
<a id="schema_File_Pages"></a>
<a id="tocSfile_pages"></a>
<a id="tocsfile_pages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "contentType": "string",
      "fileId": "string",
      "fileUrl": "string",
      "hash": {
        "MD5": "string",
        "SHA-1": "string",
        "SHA-256": "string"
      },
      "mimeCheck": "PASSED",
      "name": "string",
      "size": 0,
      "uploadDate": 0,
      "virusScan": {
        "finished": 0,
        "foundViruses": [
          {
            "fileName": "string",
            "virusName": "string"
          }
        ],
        "started": 0,
        "status": "string"
      }
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of file results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[File](#schemafile)]|true|none|An array of users for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_FoundVirus">FoundVirus</h2>
<!-- backwards compatibility -->
<a id="schemafoundvirus"></a>
<a id="schema_FoundVirus"></a>
<a id="tocSfoundvirus"></a>
<a id="tocsfoundvirus"></a>

```json
{
  "fileName": "string",
  "virusName": "string"
}
```

The virus found within this file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fileName|string|false|none|The name of the file|
|virusName|string|false|none|The name of the virus|

<h2 id="tocS_Hash">Hash</h2>
<!-- backwards compatibility -->
<a id="schemahash"></a>
<a id="schema_Hash"></a>
<a id="tocShash"></a>
<a id="tocshash"></a>

```json
{
  "MD5": "string",
  "SHA-1": "string",
  "SHA-256": "string"
}
```

The hashes requested for the file.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MD5|string|false|none|The MD5 hash for this uploaded file.|
|SHA-1|string|false|none|The SHA-1 hash for this uploaded file.|
|SHA-256|string|false|none|The SHA-256 hash for this uploaded file.|

<h2 id="tocS_Market">Market</h2>
<!-- backwards compatibility -->
<a id="schemamarket"></a>
<a id="schema_Market"></a>
<a id="tocSmarket"></a>
<a id="tocsmarket"></a>

```json
{
  "attributes": [
    {
      "name": "string",
      "type": "text",
      "values": "string"
    }
  ],
  "categoryGroups": [
    {
      "categories": [
        {
          "description": "string",
          "name": "string"
        }
      ],
      "name": "string"
    }
  ],
  "marketplaceId": "string",
  "previewAppUrl": "string",
  "viewAppUrl": "string"
}
```

A marketplace

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[Attributes](#schemaattributes)]|true|none|The different app attributes supported by this marketplace|
|categoryGroups|[[CategoryGroups](#schemacategorygroups)]|false|none|The category groups supported by this marketplace|
|marketplaceId|string|true|none|The id of this marketplace|
|previewAppUrl|string|true|none|The URL template for previewing apps on this marketplace|
|viewAppUrl|string|true|none|The URL template for viewing apps on this marketplace|

<h2 id="tocS_Market_Pages">Market_Pages</h2>
<!-- backwards compatibility -->
<a id="schemamarket_pages"></a>
<a id="schema_Market_Pages"></a>
<a id="tocSmarket_pages"></a>
<a id="tocsmarket_pages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "attributes": [
        {
          "name": "string",
          "type": "text",
          "values": "string"
        }
      ],
      "categoryGroups": [
        {
          "categories": [
            {
              "description": "string",
              "name": "string"
            }
          ],
          "name": "string"
        }
      ],
      "marketplaceId": "string",
      "previewAppUrl": "string",
      "viewAppUrl": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of marketplace results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[Market](#schemamarket)]|true|none|An array of markets for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "billingPeriod": "daily",
  "billingPeriodUnit": 0,
  "commission": 0,
  "currency": "string",
  "customData": {},
  "feePayer": "developer",
  "license": "single",
  "modelId": "string",
  "price": 0,
  "subtype": "usage",
  "trial": 0,
  "type": "free"
}
```

The model that describes the cost and pricing for apps

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingPeriod|string|false|none|The billingPeriod along with the billingPeriodUnit make up the time between billing cycles|
|billingPeriodUnit|integer|false|none|The billingPeriod along with the billingPeriodUnit make up the time between billing cycles|
|commission|integer|true|none|The marketplace commission applied to this app's model multiplied by 100 to include two digits for fractions of a percent|
|currency|string|true|none|The ISO 4217 currency code for this price|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|feePayer|string|true|none|The payee that will be paying for any payment processing fees|
|license|string|true|none|The license model type. Single allows a purchase to a single user or organization|
|modelId|string|false|none|The id that uniquely identifies this model|
|price|integer|true|none|The price of this app in cents|
|subtype|string|false|none|The pricing model subtype|
|trial|integer|true|none|The maximum number of free trial days available|
|type|string|true|none|The pricing model type. Free has no cost, single has a one time purchase cost and recurring requires a monthly subscription|

#### Enumerated Values

|Property|Value|
|---|---|
|billingPeriod|daily|
|billingPeriod|weekly|
|billingPeriod|monthly|
|billingPeriod|annually|
|feePayer|developer|
|feePayer|marketplace|
|license|single|
|subtype|usage|
|subtype|seat|
|type|free|
|type|single|
|type|recurring|

<h2 id="tocS_Ownership">Ownership</h2>
<!-- backwards compatibility -->
<a id="schemaownership"></a>
<a id="schema_Ownership"></a>
<a id="tocSownership"></a>
<a id="tocsownership"></a>

```json
{
  "appId": "string",
  "customData": {},
  "date": 0,
  "developerId": "string",
  "expires": 0,
  "model": {
    "billingPeriod": "daily",
    "billingPeriodUnit": 0,
    "commission": 0,
    "currency": "string",
    "customData": {},
    "feePayer": "developer",
    "license": "single",
    "modelId": "string",
    "price": 0,
    "subtype": "usage",
    "trial": 0,
    "type": "free"
  },
  "ownershipId": "string",
  "ownershipStatus": "pending",
  "ownershipType": "full",
  "uninstallDate": 0,
  "userId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|The id of the app that is owned|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|date|integer(int64)|true|none|The date (in millis) of when this app was owned|
|developerId|string|true|none|The id of the developer for this app|
|expires|integer(int64)|false|none|The date (in millis) of when this app ownership expires|
|model|[Model](#schemamodel)|true|none|The model that describes the cost and pricing for apps|
|ownershipId|string|true|none|The id of this ownership|
|ownershipStatus|string|true|none|The current ownership status for this app|
|ownershipType|string|true|none|The current ownership type for this app|
|uninstallDate|integer(int64)|false|none|The date (in millis) of when this app was uninstalled|
|userId|string|true|none|The id of the user that owns this app|

#### Enumerated Values

|Property|Value|
|---|---|
|ownershipStatus|pending|
|ownershipStatus|active|
|ownershipStatus|uninstalled|
|ownershipStatus|cancelled|
|ownershipType|full|
|ownershipType|subscription|
|ownershipType|trial|

<h2 id="tocS_OwnershipPages">OwnershipPages</h2>
<!-- backwards compatibility -->
<a id="schemaownershippages"></a>
<a id="schema_OwnershipPages"></a>
<a id="tocSownershippages"></a>
<a id="tocsownershippages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "appId": "string",
      "customData": {},
      "date": 0,
      "developerId": "string",
      "expires": 0,
      "model": {
        "billingPeriod": "daily",
        "billingPeriodUnit": 0,
        "commission": 0,
        "currency": "string",
        "customData": {},
        "feePayer": "developer",
        "license": "single",
        "modelId": "string",
        "price": 0,
        "subtype": "usage",
        "trial": 0,
        "type": "free"
      },
      "ownershipId": "string",
      "ownershipStatus": "pending",
      "ownershipType": "full",
      "uninstallDate": 0,
      "userId": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of ownership results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[Ownership](#schemaownership)]|true|none|An array of ownership records for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_Parent">Parent</h2>
<!-- backwards compatibility -->
<a id="schemaparent"></a>
<a id="schema_Parent"></a>
<a id="tocSparent"></a>
<a id="tocsparent"></a>

```json
{
  "status": {
    "profanity": [
      {
        "end": 0,
        "start": 0,
        "word": "string"
      }
    ],
    "reason": "profanity",
    "value": "pending"
  }
}
```

Details of the live version of this app

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|[Status](#schemastatus)|false|none|The current status of this review|

<h2 id="tocS_Profanity">Profanity</h2>
<!-- backwards compatibility -->
<a id="schemaprofanity"></a>
<a id="schema_Profanity"></a>
<a id="tocSprofanity"></a>
<a id="tocsprofanity"></a>

```json
{
  "end": 0,
  "start": 0,
  "word": "string"
}
```

Profanity found in this review

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|The ending location of the profanity|
|start|integer|true|none|The starting location of the profanity|
|word|string|true|none|The profane word|

<h2 id="tocS_Restrictions">Restrictions</h2>
<!-- backwards compatibility -->
<a id="schemarestrictions"></a>
<a id="schema_Restrictions"></a>
<a id="tocSrestrictions"></a>
<a id="tocsrestrictions"></a>

```json
{
  "own": {},
  "view": {}
}
```

Resticts users from accessing this app

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|own|object|false|none|A custom object containing fields paired with an array value of restrictions. Restricts the users that may own this app. Example: {'country':['Canada','Mexico']}|
|view|object|false|none|A custom object containing fields paired with an array value of restrictions. Restricts the users that may view this app. Example: {'country':['Canada','Mexico']}|

<h2 id="tocS_Revenue">Revenue</h2>
<!-- backwards compatibility -->
<a id="schemarevenue"></a>
<a id="schema_Revenue"></a>
<a id="tocSrevenue"></a>
<a id="tocsrevenue"></a>

```json
{
  "developer": 0,
  "total": 0
}
```

The revenue generated by this app

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|developer|integer|true|none|The total revenue generated for the developer by this app in cents|
|total|integer|true|none|The total revenue generated by this app in cents|

<h2 id="tocS_Review">Review</h2>
<!-- backwards compatibility -->
<a id="schemareview"></a>
<a id="schema_Review"></a>
<a id="tocSreview"></a>
<a id="tocsreview"></a>

```json
{
  "appId": "string",
  "customData": "string",
  "description": "string",
  "headline": "string",
  "rating": 0,
  "reportDate": 0,
  "reviewId": "string",
  "status": {
    "profanity": [
      {
        "end": 0,
        "start": 0,
        "word": "string"
      }
    ],
    "reason": "profanity",
    "value": "pending"
  },
  "type": "string",
  "user": {
    "created": 0,
    "customData": {},
    "email": "string",
    "name": "string",
    "type": "string",
    "userId": "string"
  },
  "userAccount": {
    "customData": {},
    "email": "string",
    "name": "string",
    "userAccountId": "string",
    "userId": "string"
  },
  "userAccountId": "string",
  "userId": "string"
}
```

A Review

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|The Id of the App that owns this review|
|customData|string|true|none|A custom JSON object that you can create and attach to this record|
|description|string|true|none|The review's description. Limited to 2000 characters.|
|headline|string|true|none|The review's headline. Limited to 50 characters.|
|rating|integer|true|none|The rating given within this review. The rating is represented as an integer between 100 and 500 (1 - 5 stars)|
|reportDate|integer(int64)|true|none|The date (in millis) this Review was posted|
|reviewId|string|true|none|The id for this review.|
|status|[Status](#schemastatus)|true|none|The current status of this review|
|type|string|false|none|The type for this review|
|user|[User](#schemauser)|false|none|A User|
|userAccount|[UserAccount](#schemauseraccount)|false|none|A User Account|
|userAccountId|string|false|none|The id of the user account that posted this review|
|userId|string|true|none|The id of the User that posted this review|

<h2 id="tocS_ReviewPages">ReviewPages</h2>
<!-- backwards compatibility -->
<a id="schemareviewpages"></a>
<a id="schema_ReviewPages"></a>
<a id="tocSreviewpages"></a>
<a id="tocsreviewpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "appId": "string",
      "customData": "string",
      "description": "string",
      "headline": "string",
      "rating": 0,
      "reportDate": 0,
      "reviewId": "string",
      "status": {
        "profanity": [
          {
            "end": 0,
            "start": 0,
            "word": "string"
          }
        ],
        "reason": "profanity",
        "value": "pending"
      },
      "type": "string",
      "user": {
        "created": 0,
        "customData": {},
        "email": "string",
        "name": "string",
        "type": "string",
        "userId": "string"
      },
      "userAccount": {
        "customData": {},
        "email": "string",
        "name": "string",
        "userAccountId": "string",
        "userId": "string"
      },
      "userAccountId": "string",
      "userId": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of review results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[Review](#schemareview)]|true|none|An array of reviews for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_Review_Entry">Review_Entry</h2>
<!-- backwards compatibility -->
<a id="schemareview_entry"></a>
<a id="schema_Review_Entry"></a>
<a id="tocSreview_entry"></a>
<a id="tocsreview_entry"></a>

```json
{
  "date": 0,
  "reviewId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|integer(int64)|true|none|The date (in millis) of when this action was performed|
|reviewId|string|true|none|The id of the review involved in this action|

<h2 id="tocS_SearchPages">SearchPages</h2>
<!-- backwards compatibility -->
<a id="schemasearchpages"></a>
<a id="schema_SearchPages"></a>
<a id="tocSsearchpages"></a>
<a id="tocssearchpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "access": [
        "string"
      ],
      "allow": {
        "own": {},
        "view": {}
      },
      "appId": "string",
      "attributes": {},
      "created": 0,
      "customData": {},
      "developerId": "string",
      "isLive": true,
      "lastUpdated": 0,
      "model": [
        {
          "billingPeriod": "daily",
          "billingPeriodUnit": 0,
          "commission": 0,
          "currency": "string",
          "customData": {},
          "feePayer": "developer",
          "license": "single",
          "modelId": "string",
          "price": 0,
          "subtype": "usage",
          "trial": 0,
          "type": "free"
        }
      ],
      "name": "string",
      "ownership": {
        "appId": "string",
        "customData": {},
        "date": 0,
        "developerId": "string",
        "expires": 0,
        "model": {
          "billingPeriod": "daily",
          "billingPeriodUnit": 0,
          "commission": 0,
          "currency": "string",
          "customData": {},
          "feePayer": "developer",
          "license": "single",
          "modelId": "string",
          "price": 0,
          "subtype": "usage",
          "trial": 0,
          "type": "free"
        },
        "ownershipId": "string",
        "ownershipStatus": "pending",
        "ownershipType": "full",
        "uninstallDate": 0,
        "userId": "string"
      },
      "randomize": 0,
      "rating": 0,
      "restrict": {
        "own": {},
        "view": {}
      },
      "reviewCount": 0,
      "safeName": [
        "string"
      ],
      "statistics": {},
      "status": {
        "profanity": [
          {
            "end": 0,
            "start": 0,
            "word": "string"
          }
        ],
        "reason": "profanity",
        "value": "pending"
      },
      "submittedDate": 0,
      "type": "string",
      "version": 0
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of search results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[App](#schemaapp)]|true|none|An array of results for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_Stat">Stat</h2>
<!-- backwards compatibility -->
<a id="schemastat"></a>
<a id="schema_Stat"></a>
<a id="tocSstat"></a>
<a id="tocsstat"></a>

```json
{
  "value": 0
}
```

The statistic value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|integer(int64)|true|none|The statistic value|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "profanity": [
    {
      "end": 0,
      "start": 0,
      "word": "string"
    }
  ],
  "reason": "profanity",
  "value": "pending"
}
```

The current status of this review

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|profanity|[[Profanity](#schemaprofanity)]|true|none|A list of profanity found in this review|
|reason|string|true|none|Text describing the reason for the current status|
|value|string|true|none|The current status value|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|profanity|
|reason|spam|
|value|pending|
|value|spam|
|value|flagged|
|value|approved|

<h2 id="tocS_Total">Total</h2>
<!-- backwards compatibility -->
<a id="schematotal"></a>
<a id="schema_Total"></a>
<a id="tocStotal"></a>
<a id="tocstotal"></a>

```json
{
  "apps": {
    "$appId": {
      "$field": 0
    }
  },
  "end": 0,
  "start": 0,
  "totals": {
    "$field": 0
  }
}
```

The total number of events for a particular field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apps|[AppTotal](#schemaapptotal)|true|none|The totals for the app|
|end|integer(int64)|false|none|The end date for this total (in millis)|
|start|integer(int64)|false|none|The start date for this total (in millis)|
|totals|[DataTotal](#schemadatatotal)|true|none|The totals for the field|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": 0,
  "appId": "string",
  "customData": {},
  "date": 0,
  "developerAmount": 0,
  "developerId": "string",
  "feeAmount": 0,
  "marketplaceAmount": 0,
  "ownershipId": "string",
  "transactionId": "string",
  "type": "payment",
  "userId": "string"
}
```

A transaction for an app initiated by a user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The total amount paid in cents|
|appId|string|true|none|The id of the app involved with this transaction|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|date|integer(int64)|true|none|The date (in millis) of when this transaction occurred|
|developerAmount|integer|false|none|The total amount paid to the developer in cents|
|developerId|string|true|none|The id of the developer involved with this transaction|
|feeAmount|integer|false|none|The total amount paid to payment processing fees in cents|
|marketplaceAmount|integer|false|none|The total amount paid to the marketplace owner in cents|
|ownershipId|string|true|none|The id for the ownership associated with this transaction|
|transactionId|string|true|none|The id for this transaction|
|type|string|true|none|The type for this transaction|
|userId|string|true|none|The id of the user making the transaction|

#### Enumerated Values

|Property|Value|
|---|---|
|type|payment|
|type|refund|

<h2 id="tocS_TransactionPages">TransactionPages</h2>
<!-- backwards compatibility -->
<a id="schematransactionpages"></a>
<a id="schema_TransactionPages"></a>
<a id="tocStransactionpages"></a>
<a id="tocstransactionpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "amount": 0,
      "appId": "string",
      "customData": {},
      "date": 0,
      "developerAmount": 0,
      "developerId": "string",
      "feeAmount": 0,
      "marketplaceAmount": 0,
      "ownershipId": "string",
      "transactionId": "string",
      "type": "payment",
      "userId": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of transaction results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[Transaction](#schematransaction)]|true|none|An array of paymnets for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "created": 0,
  "customData": {},
  "email": "string",
  "name": "string",
  "type": "string",
  "userId": "string"
}
```

A User

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|integer(int64)|true|none|The date (in millis) of when this user was created|
|customData|object|true|none|A custom JSON object that you can create and attach to this record|
|email|string|false|none|The user's email|
|name|string|false|none|The user's name|
|type|string|false|none|The type for this user|
|userId|string|true|none|The id of this user|

<h2 id="tocS_UserAccount">UserAccount</h2>
<!-- backwards compatibility -->
<a id="schemauseraccount"></a>
<a id="schema_UserAccount"></a>
<a id="tocSuseraccount"></a>
<a id="tocsuseraccount"></a>

```json
{
  "customData": {},
  "email": "string",
  "name": "string",
  "userAccountId": "string",
  "userId": "string"
}
```

A User Account

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customData|object|false|none|A custom JSON object that you can create and attach to this record|
|email|string|false|none|The contact email address|
|name|string|false|none|The name for the account|
|userAccountId|string|true|none|The id of this user account|
|userId|string|true|none|The id of this user that this account belongs to|

<h2 id="tocS_UserAccountPages">UserAccountPages</h2>
<!-- backwards compatibility -->
<a id="schemauseraccountpages"></a>
<a id="schema_UserAccountPages"></a>
<a id="tocSuseraccountpages"></a>
<a id="tocsuseraccountpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "customData": {},
      "email": "string",
      "name": "string",
      "userAccountId": "string",
      "userId": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of userAccount results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[UserAccount](#schemauseraccount)]|true|none|An array of userAccounts for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_UserPages">UserPages</h2>
<!-- backwards compatibility -->
<a id="schemauserpages"></a>
<a id="schema_UserPages"></a>
<a id="tocSuserpages"></a>
<a id="tocsuserpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "created": 0,
      "customData": {},
      "email": "string",
      "name": "string",
      "type": "string",
      "userId": "string"
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of user results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[User](#schemauser)]|true|none|An array of users for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_VersionPages">VersionPages</h2>
<!-- backwards compatibility -->
<a id="schemaversionpages"></a>
<a id="schema_VersionPages"></a>
<a id="tocSversionpages"></a>
<a id="tocsversionpages"></a>

```json
{
  "count": 0,
  "list": [
    {
      "access": [
        "string"
      ],
      "allow": {
        "own": {},
        "view": {}
      },
      "appId": "string",
      "attributes": {},
      "created": 0,
      "customData": {},
      "developerId": "string",
      "isLatestVersion": true,
      "isLive": true,
      "lastUpdated": 0,
      "model": [
        {
          "billingPeriod": "daily",
          "billingPeriodUnit": 0,
          "commission": 0,
          "currency": "string",
          "customData": {},
          "feePayer": "developer",
          "license": "single",
          "modelId": "string",
          "price": 0,
          "subtype": "usage",
          "trial": 0,
          "type": "free"
        }
      ],
      "name": "string",
      "parent": {
        "status": {
          "profanity": [
            {
              "end": 0,
              "start": 0,
              "word": "string"
            }
          ],
          "reason": "profanity",
          "value": "pending"
        }
      },
      "rating": 0,
      "restrict": {
        "own": {},
        "view": {}
      },
      "reviewCount": 0,
      "safeName": [
        "string"
      ],
      "status": {
        "profanity": [
          {
            "end": 0,
            "start": 0,
            "word": "string"
          }
        ],
        "reason": "profanity",
        "value": "pending"
      },
      "type": "string",
      "version": 0
    }
  ],
  "pageNumber": 0,
  "pages": 0
}
```

Pages of AppVersion results

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|true|none|The total number of results|
|list|[[AppVersion](#schemaappversion)]|true|none|An array of apps for the current page|
|pageNumber|integer|false|none|The current page number for this result set|
|pages|integer|false|none|The total number of pages available for this result set|

<h2 id="tocS_VirusScan">VirusScan</h2>
<!-- backwards compatibility -->
<a id="schemavirusscan"></a>
<a id="schema_VirusScan"></a>
<a id="tocSvirusscan"></a>
<a id="tocsvirusscan"></a>

```json
{
  "finished": 0,
  "foundViruses": [
    {
      "fileName": "string",
      "virusName": "string"
    }
  ],
  "started": 0,
  "status": "string"
}
```

The virus scan results for this file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|finished|integer(int64)|false|none|The date (in milliseconds) when this file finished it's scan|
|foundViruses|[[FoundVirus](#schemafoundvirus)]|false|none|The list of viruses found in this file|
|started|integer(int64)|false|none|The date (in milliseconds) when this file started it's scan|
|status|string|true|none|The status of this scan. Can be NOT_SCANNED, CLEAN or DIRTY|
