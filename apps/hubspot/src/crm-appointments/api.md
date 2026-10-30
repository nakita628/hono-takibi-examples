<h1 id="appointments">Appointments v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.appointments.read|Read appointments|
|crm.objects.appointments.sensitive.read.v2|Read appointments (sensitive)|
|crm.objects.appointments.sensitive.write.v2|Write appointments (sensitive)|
|crm.objects.appointments.write|Write appointments|
|crm.objects.carts.read|Read carts|
|crm.objects.carts.write|Write cart|
|crm.objects.commercepayments.read|Read commerce payments|
|crm.objects.commercepayments.write|Write commerce payments|
|crm.objects.companies.highly_sensitive.read.v2|View company records (highly-sensitive)|
|crm.objects.companies.highly_sensitive.write.v2|Change company records (highly-sensitive)|
|crm.objects.companies.read|Create or update company records|
|crm.objects.companies.sensitive.read.v2|View sensitive properties on company records|
|crm.objects.companies.sensitive.write.v2|Create or update sensitive properties on company records|
|crm.objects.companies.write|View company records|
|crm.objects.contacts.highly_sensitive.read.v2|View contact records (highly-sensitive)|
|crm.objects.contacts.highly_sensitive.write.v2|Change contact records (highly-sensitive)|
|crm.objects.contacts.read|View contact records|
|crm.objects.contacts.sensitive.read.v2|View sensitive properties on contact records|
|crm.objects.contacts.sensitive.write.v2|Create or update sensitive properties on contact records|
|crm.objects.contacts.write|Create or update contact records|
|crm.objects.courses.read|Read courses|
|crm.objects.courses.write|Write courses|
|crm.objects.custom.highly_sensitive.read.v2|View custom object records (highly-sensitive)|
|crm.objects.custom.highly_sensitive.write.v2|Change custom object records (highly-sensitive)|
|crm.objects.custom.read|View custom object records|
|crm.objects.custom.sensitive.read.v2|View custom object records (sensitive)|
|crm.objects.custom.sensitive.write.v2|Change custom object records (sensitive)|
|crm.objects.custom.write|Change custom object records|
|crm.objects.deals.highly_sensitive.read.v2|View deal records (highly-sensitive)|
|crm.objects.deals.highly_sensitive.write.v2|Change deal records (highly-sensitive)|
|crm.objects.deals.read|View deal records|
|crm.objects.deals.sensitive.read.v2|View sensitive properties on deal records|
|crm.objects.deals.sensitive.write.v2|Create or update sensitive properties on deal records|
|crm.objects.deals.write|Create or update deal records|
|crm.objects.goals.read|Read access to goals|
|crm.objects.goals.write|Create and update goals|
|crm.objects.invoices.read|Read invoices|
|crm.objects.invoices.write|Write invoices|
|crm.objects.leads.read|Read lead objects|
|crm.objects.leads.write|Modify lead objects|
|crm.objects.line_items.read|Line Items|
|crm.objects.line_items.write|Line Items|
|crm.objects.listings.read|Read listings|
|crm.objects.listings.write|Write listings|
|crm.objects.orders.read|Read Orders|
|crm.objects.orders.write|Write orders|
|crm.objects.partner-clients.read|View Partner Client CRM objects|
|crm.objects.partner-clients.write|Edit Partner Client CRM objects|
|crm.objects.partner-services.read|View Partner Service CRM objects|
|crm.objects.partner-services.write|Edit Partner Service CRM objects|
|crm.objects.products.read|Read products in Products Library|
|crm.objects.products.write|Write products in Products Library|
|crm.objects.projects.highly_sensitive.read|Read projects (highly-sensitive)|
|crm.objects.projects.highly_sensitive.write|Write projects (highly-sensitive)|
|crm.objects.projects.read|Read projects|
|crm.objects.projects.sensitive.read|Read projects (sensitive)|
|crm.objects.projects.sensitive.write|Write projects (sensitive)|
|crm.objects.projects.write|Write projects|
|crm.objects.quotes.read|Quotes|
|crm.objects.quotes.write|Quotes|
|crm.objects.services.read|Read services|
|crm.objects.services.write|Write services|
|crm.objects.subscriptions.read|Read Commerce Subscriptions|
|crm.objects.subscriptions.write|Write subscriptions|
|crm.objects.users.read|Read User CRM objects|
|crm.objects.users.write|Write User CRM objects|
|e-commerce|Access to ecommerce|
|media_bridge.read|Read media and media events|
|oauth|Basic HubSpot account information|
|tickets|Tickets|
|tickets.highly_sensitive.v2|Tickets (highly-sensitive)|
|tickets.sensitive.v2|Tickets (sensitive)|

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

<h1 id="appointments-advanced">Advanced</h1>

## Merge two appointments

<a id="opIdpost-/crm/objects/2026-09/{objectType}/merge_/crm/objects/2026-03/{objectType}/merge"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/merge' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/merge`

Merge two appointment records. [Learn more about merging records](https://knowledge.hubspot.com/records/restore-deleted-activity-in-a-record).

> Body parameter

```json
null
```

<h3 id="merge-two-appointments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[PublicMergeInput](#schemapublicmergeinput)|true|none|
|» objectIdToMerge|body|string|true|The object ID to merge with the primary object.|
|» primaryObjectId|body|string|true|The object ID of the primary object to merge.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="merge-two-appointments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SimplePublicObject](#schemasimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

<h1 id="appointments-basic">Basic</h1>

## List

<a id="opIdget-/crm/objects/2026-09/{objectType}_/crm/objects/2026-03/{objectType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/objects/2026-09/{objectType}`

Read a page of appointments. Control what is returned via the `properties` query param.

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|associations|query|[string]|false|A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|properties|query|[string]|false|A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.|
|propertiesWithHistory|query|[string]|false|A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of appointments that can be read by a single request.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseSimplePublicObjectWithAssociationsForwardPaging](#schemacollectionresponsesimplepublicobjectwithassociationsforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Create

<a id="opIdpost-/crm/objects/2026-09/{objectType}_/crm/objects/2026-03/{objectType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}`

Create a appointment with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard appointments is provided.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[SimplePublicObjectInputForCreate](#schemasimplepublicobjectinputforcreate)|true|none|
|» associations|body|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|none|
|» properties|body|object|true|Key-value pairs for setting properties for the new object.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[SimplePublicObject](#schemasimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Read

<a id="opIdget-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/{objectId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/objects/2026-09/{objectType}/{objectId}`

Read an Object identified by `{appointmentId}`. `{appointmentId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.

<h3 id="read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|ID of the object|
|objectType|path|string|true|objectTypeId of object type|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|associations|query|[string]|false|A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.|
|idProperty|query|string|false|The name of a property whose values are unique for this object|
|properties|query|[string]|false|A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.|
|propertiesWithHistory|query|[string]|false|A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SimplePublicObjectWithAssociations](#schemasimplepublicobjectwithassociations)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Archive

<a id="opIddelete-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/{objectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/objects/2026-09/{objectType}/{objectId}`

Move an Object identified by `{appointmentId}` to the recycling bin.

<h3 id="archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|ID of the object|
|objectType|path|string|true|objectTypeId of object type|

> Example responses

> default Response

```json
null
```

<h3 id="archive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Update

<a id="opIdpatch-/crm/objects/2026-09/{objectType}/{objectId}_/crm/objects/2026-03/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/{objectId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/objects/2026-09/{objectType}/{objectId}`

Perform a partial update of an Object identified by `{appointmentId}`or optionally a unique property value as specified by the `idProperty` query param. `{appointmentId}` refers to the internal object ID by default, and the `idProperty` query param refers to a property whose values are unique for the object. Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.

> Body parameter

```json
null
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The ID of the appointment.|
|objectType|path|string|true|objectTypeId of object type|
|idProperty|query|string|false|The name of a property whose values are unique for this object|
|body|body|[SimplePublicObjectInput](#schemasimplepublicobjectinput)|true|none|
|» properties|body|object|true|Key value pairs representing the properties of the object.|
|» » **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SimplePublicObject](#schemasimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

<h1 id="appointments-batch">Batch</h1>

## Archive a batch of appointments by ID

<a id="opIdpost-/crm/objects/2026-09/{objectType}/batch/archive_/crm/objects/2026-03/{objectType}/batch/archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/batch/archive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/batch/archive`

Batch delete appointments with a single request.

> Body parameter

```json
null
```

<h3 id="archive-a-batch-of-appointments-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[BatchInputSimplePublicObjectId](#schemabatchinputsimplepublicobjectid)|true|none|
|» inputs|body|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-batch-of-appointments-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Create a batch of appointments

<a id="opIdpost-/crm/objects/2026-09/{objectType}/batch/create_/crm/objects/2026-03/{objectType}/batch/create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/batch/create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/batch/create`

Create multiple appointments in a single request.

> Body parameter

```json
null
```

<h3 id="create-a-batch-of-appointments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[BatchInputSimplePublicObjectBatchInputForCreate](#schemabatchinputsimplepublicobjectbatchinputforcreate)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInputForCreate](#schemasimplepublicobjectbatchinputforcreate)]|true|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-batch-of-appointments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Read a batch of appointments by internal ID, or unique property values

<a id="opIdpost-/crm/objects/2026-09/{objectType}/batch/read_/crm/objects/2026-03/{objectType}/batch/read"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/batch/read' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/batch/read`

Retrieve records by record ID or include the `idProperty` parameter to retrieve records by a custom unique value property. 

> Body parameter

```json
null
```

<h3 id="read-a-batch-of-appointments-by-internal-id-or-unique-property-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchReadInputSimplePublicObjectId](#schemabatchreadinputsimplepublicobjectid)|true|none|
|» idProperty|body|string|false|When using a custom unique value property to retrieve records, the name of the property. Do not include this parameter if retrieving by record ID.|
|» inputs|body|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|
|» properties|body|[string]|true|Key-value pairs for setting properties for the new object.|
|» propertiesWithHistory|body|[string]|true|Key-value pairs for setting properties for the new object and their histories.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-a-batch-of-appointments-by-internal-id-or-unique-property-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Update a batch of appointments by internal ID, or unique property values

<a id="opIdpost-/crm/objects/2026-09/{objectType}/batch/update_/crm/objects/2026-03/{objectType}/batch/update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/batch/update' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/batch/update`

Batch update multiple appointments with a single request.

> Body parameter

```json
null
```

<h3 id="update-a-batch-of-appointments-by-internal-id-or-unique-property-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[BatchInputSimplePublicObjectBatchInput](#schemabatchinputsimplepublicobjectbatchinput)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInput](#schemasimplepublicobjectbatchinput)]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-batch-of-appointments-by-internal-id-or-unique-property-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## Create or update a batch of appointments by unique property values

<a id="opIdpost-/crm/objects/2026-09/{objectType}/batch/upsert_/crm/objects/2026-03/{objectType}/batch/upsert"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/batch/upsert' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/batch/upsert`

Create or update records identified by a unique property value as specified by the `idProperty` query param. `idProperty` query param refers to a property whose values are unique for the object.

> Body parameter

```json
null
```

<h3 id="create-or-update-a-batch-of-appointments-by-unique-property-values-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[BatchInputSimplePublicObjectBatchInputUpsert](#schemabatchinputsimplepublicobjectbatchinputupsert)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInputUpsert](#schemasimplepublicobjectbatchinputupsert)]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-or-update-a-batch-of-appointments-by-unique-property-values-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicUpsertObject](#schemabatchresponsesimplepublicupsertobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

<h1 id="appointments-search">Search</h1>

## Search for appointments

<a id="opIdpost-/crm/objects/2026-09/{objectType}/search_/crm/objects/2026-03/{objectType}/search"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/search' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/{objectType}/search`

Search for appointments by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).

> Body parameter

```json
null
```

<h3 id="search-for-appointments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|objectTypeId of object type|
|body|body|[PublicObjectSearchRequest](#schemapublicobjectsearchrequest)|true|none|
|» after|body|string|true|A paging cursor token for retrieving subsequent pages.|
|» filterGroups|body|[[FilterGroup](#schemafiltergroup)]|true|Up to 6 groups of filters defining additional query criteria.|
|» limit|body|integer(int32)|true|The maximum results to return, up to 200 objects.|
|» properties|body|[string]|true|A list of property names to include in the response.|
|» query|body|string|false|The search query string, up to 3000 characters.|
|» sorts|body|[string]|true|Specifies sorting order based on object properties.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-for-appointments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalSimplePublicObject](#schemacollectionresponsewithtotalsimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: oauth ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.products.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.services.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

# Schemas

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Represents a standard error response in the HubSpot API, providing detailed information about an error that occurred during an API request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The main category of the error.|
|context|object|true|none|Additional context-specific information related to the error.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|The detailed error objects.|
|id|string|false|none|A unique ID for the error instance.|
|links|object|true|none|URLs linking to documentation or resources associated with the error.|
|message|string|true|none|A human-readable string describing the error and possible remediation steps.|
|status|string|true|none|The HTTP status code associated with the error.|
|subCategory|object|false|none|A more specific error category within each main category.|

<h2 id="tocS_CollectionResponseAssociatedId">CollectionResponseAssociatedId</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseassociatedid"></a>
<a id="schema_CollectionResponseAssociatedId"></a>
<a id="tocScollectionresponseassociatedid"></a>
<a id="tocscollectionresponseassociatedid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|none|
|results|[[AssociatedId](#schemaassociatedid)]|true|none|none|

<h2 id="tocS_CollectionResponseWithTotalSimplePublicObject">CollectionResponseWithTotalSimplePublicObject</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsewithtotalsimplepublicobject"></a>
<a id="schema_CollectionResponseWithTotalSimplePublicObject"></a>
<a id="tocScollectionresponsewithtotalsimplepublicobject"></a>
<a id="tocscollectionresponsewithtotalsimplepublicobject"></a>

```json
null
```

Represents a list of simple objects returned from an API request, along with the total count of objects available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|none|
|results|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|none|
|total|integer(int32)|true|none|The total number of objects included into response.|

<h2 id="tocS_PublicAssociationsForObject">PublicAssociationsForObject</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationsforobject"></a>
<a id="schema_PublicAssociationsForObject"></a>
<a id="tocSpublicassociationsforobject"></a>
<a id="tocspublicassociationsforobject"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|[PublicObjectId](#schemapublicobjectid)|true|none|Contains the Id of a Public Object|
|types|[[AssociationSpec](#schemaassociationspec)]|true|none|none|

<h2 id="tocS_BatchResponseSimplePublicObject">BatchResponseSimplePublicObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesimplepublicobject"></a>
<a id="schema_BatchResponseSimplePublicObject"></a>
<a id="tocSbatchresponsesimplepublicobject"></a>
<a id="tocsbatchresponsesimplepublicobject"></a>

```json
null
```

A public object batch response object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp when the batch processing was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|none|
|links|object|false|none|An object containing relevant links related to the batch request.|
|numErrors|integer(int32)|false|none|The number of errors that occurred during the batch operation.|
|requestedAt|string(date-time)|false|none|The timestamp when the batch request was initially made, in ISO 8601 format.|
|results|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|none|
|startedAt|string(date-time)|true|none|The timestamp when the batch processing began, in ISO 8601 format.|
|status|string|true|none|The status of the batch processing request: "PENDING", "PROCESSING", "CANCELLED", or "COMPLETE"|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_FilterGroup">FilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroup"></a>
<a id="schema_FilterGroup"></a>
<a id="tocSfiltergroup"></a>
<a id="tocsfiltergroup"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[Filter](#schemafilter)]|true|none|none|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_SimplePublicObjectId">SimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectid"></a>
<a id="schema_SimplePublicObjectId"></a>
<a id="tocSsimplepublicobjectid"></a>
<a id="tocssimplepublicobjectid"></a>

```json
null
```

Contains the Id of a Public Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the object.|

<h2 id="tocS_BatchReadInputSimplePublicObjectId">BatchReadInputSimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadinputsimplepublicobjectid"></a>
<a id="schema_BatchReadInputSimplePublicObjectId"></a>
<a id="tocSbatchreadinputsimplepublicobjectid"></a>
<a id="tocsbatchreadinputsimplepublicobjectid"></a>

```json
null
```

Specifies the input for reading a batch of CRM objects, including arrays of object IDs, requested property names (with optional history), and an optional unique identifying property.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idProperty|string|false|none|When using a custom unique value property to retrieve records, the name of the property. Do not include this parameter if retrieving by record ID.|
|inputs|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|none|
|properties|[string]|true|none|Key-value pairs for setting properties for the new object.|
|propertiesWithHistory|[string]|true|none|Key-value pairs for setting properties for the new object and their histories.|

<h2 id="tocS_BatchResponseSimplePublicUpsertObject">BatchResponseSimplePublicUpsertObject</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesimplepublicupsertobject"></a>
<a id="schema_BatchResponseSimplePublicUpsertObject"></a>
<a id="tocSbatchresponsesimplepublicupsertobject"></a>
<a id="tocsbatchresponsesimplepublicupsertobject"></a>

```json
null
```

Represents the result of a batch upsert operation, including the operation’s status, timestamps, and a list of successfully created or updated objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp when the batch process was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|none|
|links|object|false|none|An object containing relevant links related to the batch request.|
|numErrors|integer(int32)|false|none|Number of errors.|
|requestedAt|string(date-time)|false|none|The timestamp when the batch process was initiated, in ISO 8601 format.|
|results|[[SimplePublicUpsertObject](#schemasimplepublicupsertobject)]|true|none|none|
|startedAt|string(date-time)|true|none|The timestamp when the batch process began execution, in ISO 8601 format.|
|status|string|true|none|The status of the batch processing request. Can be: "PENDING", "PROCESSING", "CANCELED", or "COMPLETE".|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchInputSimplePublicObjectId">BatchInputSimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectid"></a>
<a id="schema_BatchInputSimplePublicObjectId"></a>
<a id="tocSbatchinputsimplepublicobjectid"></a>
<a id="tocsbatchinputsimplepublicobjectid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|none|

<h2 id="tocS_ValueWithTimestamp">ValueWithTimestamp</h2>
<!-- backwards compatibility -->
<a id="schemavaluewithtimestamp"></a>
<a id="schema_ValueWithTimestamp"></a>
<a id="tocSvaluewithtimestamp"></a>
<a id="tocsvaluewithtimestamp"></a>

```json
null
```

Property model that includes timestamp.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceId|string|false|none|The unique ID of the property.|
|sourceLabel|string|false|none|A human-readable label.|
|sourceType|string|true|none|The property type.|
|timestamp|string(date-time)|true|none|The timestamp when the property was updated, in ISO 8601 format.|
|updatedByUserId|integer(int32)|false|none|The ID of the user who last updated the property.|
|value|string|true|none|The property value.|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInputUpsert">BatchInputSimplePublicObjectBatchInputUpsert</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinputupsert"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInputUpsert"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinputupsert"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinputupsert"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInputUpsert](#schemasimplepublicobjectbatchinputupsert)]|true|none|none|

<h2 id="tocS_SimplePublicObject">SimplePublicObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobject"></a>
<a id="schema_SimplePublicObject"></a>
<a id="tocSsimplepublicobject"></a>
<a id="tocssimplepublicobject"></a>

```json
null
```

A simple public object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Whether the object is archived.|
|archivedAt|string(date-time)|false|none|The timestamp when the object was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The timestamp when the object was created, in ISO 8601 format.|
|id|string|true|none|The unique ID of the object.|
|objectWriteTraceId|string|false|none|Unique ID to identify each write operation, which will be returned with any errors to identify which request encountered which error.|
|properties|object|true|none|Key-value pairs representing the properties of the object.|
|propertiesWithHistory|object|false|none|Key-value pairs representing the properties of the object along with their history.|
|updatedAt|string(date-time)|true|none|The timestamp when the object was last updated, in ISO 8601 format.|
|url|string|false|none|URL to go to the object|

<h2 id="tocS_PublicObjectId">PublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectid"></a>
<a id="schema_PublicObjectId"></a>
<a id="tocSpublicobjectid"></a>
<a id="tocspublicobjectid"></a>

```json
null
```

Contains the Id of a Public Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the object.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

<h2 id="tocS_PublicObjectSearchRequest">PublicObjectSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectsearchrequest"></a>
<a id="schema_PublicObjectSearchRequest"></a>
<a id="tocSpublicobjectsearchrequest"></a>
<a id="tocspublicobjectsearchrequest"></a>

```json
null
```

Describes a search request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A paging cursor token for retrieving subsequent pages.|
|filterGroups|[[FilterGroup](#schemafiltergroup)]|true|none|Up to 6 groups of filters defining additional query criteria.|
|limit|integer(int32)|true|none|The maximum results to return, up to 200 objects.|
|properties|[string]|true|none|A list of property names to include in the response.|
|query|string|false|none|The search query string, up to 3000 characters.|
|sorts|[string]|true|none|Specifies sorting order based on object properties.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "Invalid input (details will vary based on the error)",
  "correlationId": "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  "category": "VALIDATION_ERROR",
  "links": {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The error category|
|context|object|false|none|Context about the error condition|
|correlationId|string(uuid)|true|none|A unique identifier for the request. Include this value with any error reports or support tickets|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|further information about the error|
|links|object|false|none|A map of link names to associated URIs containing documentation about the error or recommended remediation steps|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

<h2 id="tocS_SimplePublicObjectBatchInputUpsert">SimplePublicObjectBatchInputUpsert</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectbatchinputupsert"></a>
<a id="schema_SimplePublicObjectBatchInputUpsert"></a>
<a id="tocSsimplepublicobjectbatchinputupsert"></a>
<a id="tocssimplepublicobjectbatchinputupsert"></a>

```json
null
```

Represents an object used in batch upsert operations, containing an object’s unique identifier, its properties, and optionally the unique property name and a write trace ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The unique ID of the object.|
|idProperty|string|false|none|The name of a property whose values are unique for this object|
|objectWriteTraceId|string|false|none|An identifier for tracing the creation request.|
|properties|object|true|none|Key value pairs representing the properties of the object.|

<h2 id="tocS_SimplePublicObjectInput">SimplePublicObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectinput"></a>
<a id="schema_SimplePublicObjectInput"></a>
<a id="tocSsimplepublicobjectinput"></a>
<a id="tocssimplepublicobjectinput"></a>

```json
null
```

Represents the input required to create or update a CRM object, containing an object with property names and their corresponding values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|Key value pairs representing the properties of the object.|

<h2 id="tocS_CollectionResponseSimplePublicObjectWithAssociationsForwardPaging">CollectionResponseSimplePublicObjectWithAssociationsForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>
<a id="schema_CollectionResponseSimplePublicObjectWithAssociationsForwardPaging"></a>
<a id="tocScollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>
<a id="tocscollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|none|
|results|[[SimplePublicObjectWithAssociations](#schemasimplepublicobjectwithassociations)]|true|none|none|

<h2 id="tocS_AssociationSpec">AssociationSpec</h2>
<!-- backwards compatibility -->
<a id="schemaassociationspec"></a>
<a id="schema_AssociationSpec"></a>
<a id="tocSassociationspec"></a>
<a id="tocsassociationspec"></a>

```json
null
```

Defines the type, direction, and details of the relationship between two CRM objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|The category of the association, such as "HUBSPOT_DEFINED".|
|associationTypeId|integer(int32)|true|none|The ID representing the specific type of association.|

#### Enumerated Values

|Property|Value|
|---|---|
|associationCategory|HUBSPOT_DEFINED|
|associationCategory|INTEGRATOR_DEFINED|
|associationCategory|USER_DEFINED|
|associationCategory|WORK|

<h2 id="tocS_PublicMergeInput">PublicMergeInput</h2>
<!-- backwards compatibility -->
<a id="schemapublicmergeinput"></a>
<a id="schema_PublicMergeInput"></a>
<a id="tocSpublicmergeinput"></a>
<a id="tocspublicmergeinput"></a>

```json
null
```

Input data for merging two records.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectIdToMerge|string|true|none|The object ID to merge with the primary object.|
|primaryObjectId|string|true|none|The object ID of the primary object to merge.|

<h2 id="tocS_SimplePublicObjectWithAssociations">SimplePublicObjectWithAssociations</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectwithassociations"></a>
<a id="schema_SimplePublicObjectWithAssociations"></a>
<a id="tocSsimplepublicobjectwithassociations"></a>
<a id="tocssimplepublicobjectwithassociations"></a>

```json
null
```

Represents a CRM object along with its properties, timestamps, and a set of associated object IDs grouped by association type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Whether the object is archived.|
|archivedAt|string(date-time)|false|none|The timestamp when the object was archived, in ISO 8601 format.|
|associations|object|false|none|A list defining relationships with other objects.|
|createdAt|string(date-time)|true|none|The timestamp when the object was created, in ISO 8601 format.|
|id|string|true|none|The unique ID of the object.|
|objectWriteTraceId|string|false|none|An identifier for tracing the creation or update request of the object.|
|properties|object|true|none|Key value pairs representing the properties of the object.|
|propertiesWithHistory|object|false|none|Key-value pairs representing the properties of the object along with their history.|
|updatedAt|string(date-time)|true|none|The timestamp when the object was last updated, in ISO 8601 format.|
|url|string|false|none|The URL associated with the CRM object.|

<h2 id="tocS_Filter">Filter</h2>
<!-- backwards compatibility -->
<a id="schemafilter"></a>
<a id="schema_Filter"></a>
<a id="tocSfilter"></a>
<a id="tocsfilter"></a>

```json
null
```

Defines a single condition for searching CRM objects, specifying the property to filter on, the operator to use (such as equals, greater than, or contains), and the value(s) to compare against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|highValue|string|false|none|The upper boundary value when using ranged-based filters.|
|operator|string|true|none|null|
|propertyName|string|true|none|The name of the property to apply the filter to.|
|value|string|false|none|The value to match against the property.|
|values|[string]|false|none|The values to match against the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|BETWEEN|
|operator|CONTAINS_TOKEN|
|operator|EQ|
|operator|GT|
|operator|GTE|
|operator|HAS_PROPERTY|
|operator|IN|
|operator|LT|
|operator|LTE|
|operator|NEQ|
|operator|NOT_CONTAINS_TOKEN|
|operator|NOT_HAS_PROPERTY|
|operator|NOT_IN|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInput">BatchInputSimplePublicObjectBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinput"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInput"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinput"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInput](#schemasimplepublicobjectbatchinput)]|true|none|none|

<h2 id="tocS_PreviousPage">PreviousPage</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspage"></a>
<a id="schema_PreviousPage"></a>
<a id="tocSpreviouspage"></a>
<a id="tocspreviouspage"></a>

```json
null
```

specifies the paging information needed to retrieve the previous set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|before|string|true|none|A paging cursor token for retrieving previous pages.|
|link|string|false|none|A URL that can be used to retrieve the previous pages' results.|

<h2 id="tocS_SimplePublicUpsertObject">SimplePublicUpsertObject</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicupsertobject"></a>
<a id="schema_SimplePublicUpsertObject"></a>
<a id="tocSsimplepublicupsertobject"></a>
<a id="tocssimplepublicupsertobject"></a>

```json
null
```

Represents a CRM object that has either been created or updated (upserted)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Whether the object is archived.|
|archivedAt|string(date-time)|false|none|The timestamp when the object was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The timestamp when the object was created, in ISO 8601 format.|
|id|string|true|none|The unique ID of the object.|
|new|boolean|true|none|Whether the property is new.|
|objectWriteTraceId|string|false|none|An identifier for tracing the creation or update request.|
|properties|object|true|none|Key value pairs representing the properties of the object.|
|propertiesWithHistory|object|false|none|Key-value pairs representing the properties of the object along with their history.|
|updatedAt|string(date-time)|true|none|The timestamp when the object was last updated, in ISO 8601 format.|
|url|string|false|none|The URL associated with the object.|

<h2 id="tocS_SimplePublicObjectBatchInput">SimplePublicObjectBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectbatchinput"></a>
<a id="schema_SimplePublicObjectBatchInput"></a>
<a id="tocSsimplepublicobjectbatchinput"></a>
<a id="tocssimplepublicobjectbatchinput"></a>

```json
null
```

Contains an array of CRM object records to be processed in a batch operation, each defined by their ID and properties.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The id to be updated. This can be the object id, or the unique property value of the idProperty property|
|idProperty|string|false|none|The name of a property whose values are unique for this object|
|objectWriteTraceId|string|false|none|A unique identifier for tracing the request.|
|properties|object|true|none|Key-value pairs representing the properties of the object.|

<h2 id="tocS_SimplePublicObjectBatchInputForCreate">SimplePublicObjectBatchInputForCreate</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectbatchinputforcreate"></a>
<a id="schema_SimplePublicObjectBatchInputForCreate"></a>
<a id="tocSsimplepublicobjectbatchinputforcreate"></a>
<a id="tocssimplepublicobjectbatchinputforcreate"></a>

```json
null
```

An input object that contains a collection of objects to be created together in a batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|none|none|
|objectWriteTraceId|string|false|none|An identifier for tracing the creation request.|
|properties|object|true|none|Key-value pairs representing the properties of the object.|

<h2 id="tocS_AssociatedId">AssociatedId</h2>
<!-- backwards compatibility -->
<a id="schemaassociatedid"></a>
<a id="schema_AssociatedId"></a>
<a id="tocSassociatedid"></a>
<a id="tocsassociatedid"></a>

```json
null
```

Contains the id and type of an association

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID for the association type.|
|type|string|true|none|The type of associations.|

<h2 id="tocS_NextPage">NextPage</h2>
<!-- backwards compatibility -->
<a id="schemanextpage"></a>
<a id="schema_NextPage"></a>
<a id="tocSnextpage"></a>
<a id="tocsnextpage"></a>

```json
null
```

Specifies the paging information needed to retrieve the next set of results in a paginated API response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|after|string|true|none|A paging cursor token for retrieving subsequent pages.|
|link|string|false|none|A URL that can be used to retrieve the next page results.|

<h2 id="tocS_SimplePublicObjectInputForCreate">SimplePublicObjectInputForCreate</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectinputforcreate"></a>
<a id="schema_SimplePublicObjectInputForCreate"></a>
<a id="tocSsimplepublicobjectinputforcreate"></a>
<a id="tocssimplepublicobjectinputforcreate"></a>

```json
null
```

Is the input object used to create a new CRM object, containing the properties to be set and optional associations to link the new record with other CRM objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|none|none|
|properties|object|true|none|Key-value pairs for setting properties for the new object.|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInputForCreate">BatchInputSimplePublicObjectBatchInputForCreate</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinputforcreate"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInputForCreate"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinputforcreate"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinputforcreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInputForCreate](#schemasimplepublicobjectbatchinputforcreate)]|true|none|none|
