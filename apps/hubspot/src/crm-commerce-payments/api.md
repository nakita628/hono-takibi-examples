<h1 id="crm-commerce-payments">CRM Commerce Payments v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

* API Key (developer_hapikey)
    - Parameter Name: **hapikey**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|crm.objects.appointments.read||
|crm.objects.appointments.sensitive.read.v2||
|crm.objects.appointments.sensitive.write.v2||
|crm.objects.appointments.write||
|crm.objects.calls.read||
|crm.objects.carts.read||
|crm.objects.carts.write||
|crm.objects.commercepayments.read||
|crm.objects.commercepayments.write||
|crm.objects.companies.highly_sensitive.read.v2||
|crm.objects.companies.highly_sensitive.write.v2||
|crm.objects.companies.read||
|crm.objects.companies.sensitive.read.v2||
|crm.objects.companies.sensitive.write.v2||
|crm.objects.companies.write||
|crm.objects.contacts.highly_sensitive.read.v2||
|crm.objects.contacts.highly_sensitive.write.v2||
|crm.objects.contacts.read||
|crm.objects.contacts.sensitive.read.v2||
|crm.objects.contacts.sensitive.write.v2||
|crm.objects.contacts.write||
|crm.objects.courses.read||
|crm.objects.courses.write||
|crm.objects.custom.highly_sensitive.read.v2||
|crm.objects.custom.highly_sensitive.write.v2||
|crm.objects.custom.read||
|crm.objects.custom.sensitive.read.v2||
|crm.objects.custom.sensitive.write.v2||
|crm.objects.custom.write||
|crm.objects.deals.highly_sensitive.read.v2||
|crm.objects.deals.highly_sensitive.write.v2||
|crm.objects.deals.read||
|crm.objects.deals.sensitive.read.v2||
|crm.objects.deals.sensitive.write.v2||
|crm.objects.deals.write||
|crm.objects.emails.read||
|crm.objects.feedback_submissions.read||
|crm.objects.goals.read||
|crm.objects.goals.write||
|crm.objects.invoices.read||
|crm.objects.invoices.write||
|crm.objects.leads.read||
|crm.objects.leads.write||
|crm.objects.line_items.read||
|crm.objects.line_items.write||
|crm.objects.listings.read||
|crm.objects.listings.write||
|crm.objects.meetings.read||
|crm.objects.notes.read||
|crm.objects.orders.read||
|crm.objects.orders.write||
|crm.objects.partner-clients.read||
|crm.objects.partner-clients.write||
|crm.objects.partner-services.read||
|crm.objects.partner-services.write||
|crm.objects.products.read||
|crm.objects.products.write||
|crm.objects.projects.highly_sensitive.read||
|crm.objects.projects.highly_sensitive.write||
|crm.objects.projects.read||
|crm.objects.projects.sensitive.read||
|crm.objects.projects.sensitive.write||
|crm.objects.projects.write||
|crm.objects.quotes.read||
|crm.objects.quotes.write||
|crm.objects.services.read||
|crm.objects.services.write||
|crm.objects.subscriptions.read||
|crm.objects.subscriptions.write||
|crm.objects.tasks.read||
|crm.objects.tickets.highly_sensitive.read||
|crm.objects.tickets.highly_sensitive.write||
|crm.objects.tickets.sensitive.read||
|crm.objects.tickets.sensitive.write||
|crm.objects.users.read||
|crm.objects.users.write||
|e-commerce||
|media_bridge.read||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-commerce-payments-advanced">Advanced</h1>

## GDPR Delete

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/gdpr-delete_/crm/objects/2026-09-beta/{objectType}/gdpr-delete"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/gdpr-delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/gdpr-delete`

Permanently delete a contact and all associated content to comply with GDPR regulations. This endpoint allows you to specify the contact by email address using the optional 'idProperty' set to 'email'. If the email address is not found, it will be added to a blocklist to prevent future use.

> Body parameter

```json
null
```

<h3 id="gdpr-delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicGdprDeleteInput](#schemapublicgdprdeleteinput)|true|none|
|» idProperty|body|string|false|The name of a property whose values are unique for this object|
|» objectId|body|string|true|The unique identifier for the object to be deleted. This is a required field and must be a string.|

> Example responses

> default Response

```json
null
```

<h3 id="gdpr-delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Merge objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/merge_/crm/objects/2026-09-beta/{objectType}/merge"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/merge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/merge`

Merge two CRM objects of the same type in your HubSpot account. This operation combines the properties and associations of the specified objects into a single object, identified by the primary object ID. Use this endpoint to consolidate duplicate records and streamline data management.

> Body parameter

```json
null
```

<h3 id="merge-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicMergeInput](#schemapublicmergeinput)|true|none|
|» objectIdToMerge|body|string|true|The unique identifier of the object that will be merged into the primary object. It is a string.|
|» primaryObjectId|body|string|true|The unique identifier of the primary object that will remain after the merge. It is a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="merge-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SimplePublicObject](#schemasimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

<h1 id="crm-commerce-payments-basic">Basic</h1>

## List

<a id="opIdget-/crm/objects/2026-09/commerce_payments_/crm/objects/2026-09-beta/{objectType}"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/objects/2026-09/commerce_payments`

Retrieve a page of CRM objects of a specified type. You can control the data returned by specifying properties, associations, and archived status. This endpoint is useful for fetching a list of objects with specific attributes and associations.

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|associations|query|[string]|false|A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|properties|query|[string]|false|A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.|
|propertiesWithHistory|query|[string]|false|A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.|

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
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Create

<a id="opIdpost-/crm/objects/2026-09/commerce_payments_/crm/objects/2026-09-beta/{objectType}"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments`

Create a CRM object with the specified properties and return a copy of the object, including its ID. This endpoint is useful for adding new records to your CRM system. Documentation and examples for creating standard objects are provided.

> Body parameter

```json
null
```

<h3 id="create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SimplePublicObjectInputForCreate](#schemasimplepublicobjectinputforcreate)|true|none|
|» associations|body|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|An array of associations that link this object to other objects. Each association is defined by the 'PublicAssociationsForObject' schema.|
|» properties|body|object|true|An object containing key-value pairs where keys are property names and values are the corresponding property values for the CRM object. Each property is represented as a string.|
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

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read

<a id="opIdget-/crm/objects/2026-09/commerce_payments/{commercePaymentId}_/crm/objects/2026-09-beta/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/commerce_payments/{commercePaymentId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/objects/2026-09/commerce_payments/{commercePaymentId}`

Read an object identified by `objectId`. By default, `objectId` refers to the internal object ID, but you can specify a unique property value using the `idProperty` query parameter. You can control the response content using the `properties` query parameter to include specific properties.

<h3 id="read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commercePaymentId|path|string|true|none|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|associations|query|[string]|false|A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.|
|idProperty|query|string|false|The name of a property whose values are unique for this object type|
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
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Archive

<a id="opIddelete-/crm/objects/2026-09/commerce_payments/{commercePaymentId}_/crm/objects/2026-09-beta/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/commerce_payments/{commercePaymentId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/objects/2026-09/commerce_payments/{commercePaymentId}`

Move an Object identified by `{objectId}` to the recycling bin. This operation effectively archives the object, making it no longer active but retrievable if needed.

<h3 id="archive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commercePaymentId|path|string|true|none|

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
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Update

<a id="opIdpatch-/crm/objects/2026-09/commerce_payments/{commercePaymentId}_/crm/objects/2026-09-beta/{objectType}/{objectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/commerce_payments/{commercePaymentId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/objects/2026-09/commerce_payments/{commercePaymentId}`

Perform a partial update of an Object identified by `{objectId}`. `{objectId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.

> Body parameter

```json
null
```

<h3 id="update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commercePaymentId|path|string|true|none|
|idProperty|query|string|false|The name of a property whose values are unique for this object type|
|body|body|[SimplePublicObjectInput](#schemasimplepublicobjectinput)|true|none|
|» properties|body|object|true|An object containing key-value pairs where each key is a property name and each value is the property's value. All properties are represented as strings.|
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
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## List Associations

<a id="opIdget-/crm/objects/2026-09/commerce_payments/{commercePaymentId}/associations/{toObjectType}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/commerce_payments/{commercePaymentId}/associations/{toObjectType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/objects/2026-09/commerce_payments/{commercePaymentId}/associations/{toObjectType}`

List all associations of an object by object type. This endpoint allows you to retrieve up to 500 associations per call, providing a way to explore relationships between different CRM objects in your HubSpot account.

<h3 id="list-associations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|commercePaymentId|path|string|true|none|
|toObjectType|path|string|true|The type of the associated object.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-associations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseMultiAssociatedObjectWithLabelForwardPaging](#schemacollectionresponsemultiassociatedobjectwithlabelforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Create Association

<a id="opIdput-/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}`

Set association labels between two records in the CRM. This endpoint allows you to define relationships between different object types by specifying association labels, which can be useful for organizing and managing related data within your HubSpot account.

> Body parameter

```json
null
```

<h3 id="create-association-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the source object.|
|objectType|path|string|true|The type of the source object for the association.|
|toObjectId|path|string|true|The unique identifier of the target object.|
|toObjectType|path|string|true|The type of the target object for the association.|
|body|body|[[AssociationSpec](#schemaassociationspec)]|true|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-association-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[LabelsBetweenObjectPair](#schemalabelsbetweenobjectpair)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Delete

<a id="opIddelete-/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/objects/2026-09/{objectType}/{objectId}/associations/{toObjectType}/{toObjectId}`

Delete all associations between two records identified by their object types and IDs. This operation is useful for removing links between specific CRM objects when they are no longer relevant or needed.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectId|path|string|true|The unique identifier of the first object involved in the association.|
|objectType|path|string|true|The type of the first object involved in the association.|
|toObjectId|path|string|true|The unique identifier of the second object involved in the association.|
|toObjectType|path|string|true|The type of the second object involved in the association.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

<h1 id="crm-commerce-payments-batch">Batch</h1>

## Batch archive objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/batch/archive_/crm/objects/2026-09-beta/{objectType}/batch/archive"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/batch/archive \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/batch/archive`

Archive a batch of CRM objects by their IDs. This endpoint is useful for moving multiple objects to the recycling bin in a single request, streamlining the process of managing large datasets.

> Body parameter

```json
null
```

<h3 id="batch-archive-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputSimplePublicObjectId](#schemabatchinputsimplepublicobjectid)|true|none|
|» inputs|body|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|An array of SimplePublicObjectId objects, each representing a unique identifier for a CRM object. This is used to specify which objects are involved in the batch operation.|

> Example responses

> default Response

```json
null
```

<h3 id="batch-archive-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Batch create objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/batch/create_/crm/objects/2026-09-beta/{objectType}/batch/create"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/batch/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/batch/create`

Create a batch of CRM objects with the specified properties. This endpoint allows you to efficiently create multiple objects in a single request, returning a response that includes the details of the created objects. It's useful for bulk data operations where you need to add several objects at once.

> Body parameter

```json
null
```

<h3 id="batch-create-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputSimplePublicObjectBatchInputForCreate](#schemabatchinputsimplepublicobjectbatchinputforcreate)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInputForCreate](#schemasimplepublicobjectbatchinputforcreate)]|true|An array of objects to be created, each conforming to the SimplePublicObjectBatchInputForCreate schema.|

> Example responses

> 201 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-create-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|207|Multi-Status|multiple statuses|[BatchResponseSimplePublicObjectWithErrors](#schemabatchresponsesimplepublicobjectwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read batch objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/batch/read_/crm/objects/2026-09-beta/{objectType}/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/batch/read`

Read a batch of CRM objects by their internal IDs or unique property values. This endpoint allows you to retrieve multiple objects in a single request, making it efficient for bulk data retrieval. It supports filtering for archived objects.

> Body parameter

```json
null
```

<h3 id="read-batch-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|body|body|[BatchReadInputSimplePublicObjectId](#schemabatchreadinputsimplepublicobjectid)|true|none|
|» idProperty|body|string|false|When using a custom unique value property to retrieve records, the name of the property. Do not include this parameter if retrieving by record ID.|
|» inputs|body|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|An array of SimplePublicObjectId objects, each representing an object to be read. The 'id' field within each object specifies the internal ID of the object.|
|» properties|body|[string]|true|An array of strings specifying the properties to be returned in the response. If any specified properties are not present on the requested objects, they will be ignored.|
|» propertiesWithHistory|body|[string]|true|An array of strings specifying the properties to be returned along with their history of previous values. If any specified properties are not present on the requested objects, they will be ignored.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-batch-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|207|Multi-Status|multiple statuses|[BatchResponseSimplePublicObjectWithErrors](#schemabatchresponsesimplepublicobjectwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Update batch objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/batch/update_/crm/objects/2026-09-beta/{objectType}/batch/update"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/batch/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/batch/update`

Update a batch of CRM objects in your HubSpot account. This endpoint allows you to modify multiple objects of a specified type in a single request. It is useful for bulk updates, ensuring that all specified objects are updated consistently and efficiently.

> Body parameter

```json
null
```

<h3 id="update-batch-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputSimplePublicObjectBatchInput](#schemabatchinputsimplepublicobjectbatchinput)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInput](#schemasimplepublicobjectbatchinput)]|true|An array of SimplePublicObjectBatchInput objects, each containing the properties of a single object to be processed in the batch.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-batch-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicObject](#schemabatchresponsesimplepublicobject)|
|207|Multi-Status|multiple statuses|[BatchResponseSimplePublicObjectWithErrors](#schemabatchresponsesimplepublicobjectwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Batch upsert objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/batch/upsert_/crm/objects/2026-09-beta/{objectType}/batch/upsert"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/batch/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/batch/upsert`

Create or update a batch of CRM objects by unique property values. This endpoint allows you to efficiently manage multiple objects in one request, ensuring that existing objects are updated and new ones are created as needed.

> Body parameter

```json
null
```

<h3 id="batch-upsert-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputSimplePublicObjectBatchInputUpsert](#schemabatchinputsimplepublicobjectbatchinputupsert)|true|none|
|» inputs|body|[[SimplePublicObjectBatchInputUpsert](#schemasimplepublicobjectbatchinputupsert)]|true|An array of SimplePublicObjectBatchInputUpsert objects, each containing the data necessary to upsert a single object. This includes properties and optional identifiers.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-upsert-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseSimplePublicUpsertObject](#schemabatchresponsesimplepublicupsertobject)|
|207|Multi-Status|multiple statuses|[BatchResponseSimplePublicUpsertObjectWithErrors](#schemabatchresponsesimplepublicupsertobjectwitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Create Association

<a id="opIdput-/crm/objects/2026-09/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}_/crm/objects/2026-09-beta/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/objects/2026-09/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/objects/2026-09/{fromObjectType}/{fromObjectId}/associations/default/{toObjectType}/{toObjectId}`

Create the default association type between two specified object types in HubSpot. This endpoint is used to establish a generic association between objects, identified by their types and IDs, facilitating relationship management within the CRM.

<h3 id="create-association-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromObjectId|path|string|true|The unique identifier of the source object.|
|fromObjectType|path|string|true|The type of the source object for the association.|
|toObjectId|path|string|true|The unique identifier of the target object.|
|toObjectType|path|string|true|The type of the target object for the association.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-association-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponsePublicDefaultAssociation](#schemabatchresponsepublicdefaultassociation)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

<h1 id="crm-commerce-payments-search">Search</h1>

## Search objects

<a id="opIdpost-/crm/objects/2026-09/commerce_payments/search_/crm/objects/2026-09-beta/{objectType}/search"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/objects/2026-09/commerce_payments/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/objects/2026-09/commerce_payments/search`

Search for CRM objects of a specified type using the provided search criteria. This endpoint allows you to filter and sort objects based on various properties, making it useful for retrieving specific data sets from your CRM.

> Body parameter

```json
null
```

<h3 id="search-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PublicObjectSearchRequest](#schemapublicobjectsearchrequest)|true|none|
|» after|body|string|true|A string representing the paging cursor token to retrieve the next set of results.|
|» filterGroups|body|[[FilterGroup](#schemafiltergroup)]|true|An array of filter groups used to refine the search results based on specific criteria.|
|» limit|body|integer(int32)|true|An integer specifying the maximum number of results to return.|
|» properties|body|[string]|true|An array of strings indicating which properties of the objects should be included in the search results.|
|» query|body|string|false|A string representing a search query to be applied to the CRM objects.|
|» sorts|body|[string]|true|An array of strings specifying the sorting order of the search results.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseWithTotalSimplePublicObject](#schemacollectionresponsewithtotalsimplepublicobject)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

# Schemas

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
|id|string|true|none|A unique identifier for the association, represented as a string.|
|type|string|true|none|The type of association, represented as a string.|

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
|associationCategory|string|true|none|The category of the association, indicating its origin or purpose. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.|
|associationTypeId|integer(int32)|true|none|An integer representing the unique identifier for the type of association.|

#### Enumerated Values

|Property|Value|
|---|---|
|associationCategory|HUBSPOT_DEFINED|
|associationCategory|INTEGRATOR_DEFINED|
|associationCategory|USER_DEFINED|
|associationCategory|WORK|

<h2 id="tocS_AssociationSpecWithLabel">AssociationSpecWithLabel</h2>
<!-- backwards compatibility -->
<a id="schemaassociationspecwithlabel"></a>
<a id="schema_AssociationSpecWithLabel"></a>
<a id="tocSassociationspecwithlabel"></a>
<a id="tocsassociationspecwithlabel"></a>

```json
null
```

Defines the type, direction, and details of the relationship between two CRM objects.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The category of the association, indicating its origin or purpose. Valid values include 'HUBSPOT_DEFINED', 'USER_DEFINED', 'INTEGRATOR_DEFINED', and 'WORK'.|
|fromObjectTypeId|string|false|none|The unique identifier for the object type from which the association originates.|
|label|string|false|none|A string label that describes the association between the objects.|
|toObjectTypeId|string|false|none|The unique identifier for the object type to which the association points.|
|typeId|integer(int32)|true|none|An integer representing the unique identifier for the association type.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|HUBSPOT_DEFINED|
|category|INTEGRATOR_DEFINED|
|category|USER_DEFINED|
|category|WORK|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInput">BatchInputSimplePublicObjectBatchInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinput"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInput"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinput"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinput"></a>

```json
null
```

Represents a batch input component used to handle multiple simple public objects in a single API request. This component is typically used when performing batch operations to create, update, or delete multiple records simultaneously.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInput](#schemasimplepublicobjectbatchinput)]|true|none|An array of SimplePublicObjectBatchInput objects, each containing the properties of a single object to be processed in the batch.|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInputForCreate">BatchInputSimplePublicObjectBatchInputForCreate</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinputforcreate"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInputForCreate"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinputforcreate"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinputforcreate"></a>

```json
null
```

Represents a batch input for creating multiple simple public objects in a single request. This component is used to streamline the process of adding new objects to a HubSpot account by allowing multiple entries to be created at once.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInputForCreate](#schemasimplepublicobjectbatchinputforcreate)]|true|none|An array of objects to be created, each conforming to the SimplePublicObjectBatchInputForCreate schema.|

<h2 id="tocS_BatchInputSimplePublicObjectBatchInputUpsert">BatchInputSimplePublicObjectBatchInputUpsert</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectbatchinputupsert"></a>
<a id="schema_BatchInputSimplePublicObjectBatchInputUpsert"></a>
<a id="tocSbatchinputsimplepublicobjectbatchinputupsert"></a>
<a id="tocsbatchinputsimplepublicobjectbatchinputupsert"></a>

```json
null
```

Represents a batch input operation for upserting simple public objects in HubSpot. This component is used to process multiple upsert operations in a single request, improving efficiency and performance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectBatchInputUpsert](#schemasimplepublicobjectbatchinputupsert)]|true|none|An array of SimplePublicObjectBatchInputUpsert objects, each containing the data necessary to upsert a single object. This includes properties and optional identifiers.|

<h2 id="tocS_BatchInputSimplePublicObjectId">BatchInputSimplePublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputsimplepublicobjectid"></a>
<a id="schema_BatchInputSimplePublicObjectId"></a>
<a id="tocSbatchinputsimplepublicobjectid"></a>
<a id="tocsbatchinputsimplepublicobjectid"></a>

```json
null
```

Represents a batch input payload containing a list of simple public object IDs. This component is used when performing batch operations on multiple objects within HubSpot.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|An array of SimplePublicObjectId objects, each representing a unique identifier for a CRM object. This is used to specify which objects are involved in the batch operation.|

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
|inputs|[[SimplePublicObjectId](#schemasimplepublicobjectid)]|true|none|An array of SimplePublicObjectId objects, each representing an object to be read. The 'id' field within each object specifies the internal ID of the object.|
|properties|[string]|true|none|An array of strings specifying the properties to be returned in the response. If any specified properties are not present on the requested objects, they will be ignored.|
|propertiesWithHistory|[string]|true|none|An array of strings specifying the properties to be returned along with their history of previous values. If any specified properties are not present on the requested objects, they will be ignored.|

<h2 id="tocS_BatchResponsePublicDefaultAssociation">BatchResponsePublicDefaultAssociation</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepublicdefaultassociation"></a>
<a id="schema_BatchResponsePublicDefaultAssociation"></a>
<a id="tocSbatchresponsepublicdefaultassociation"></a>
<a id="tocsbatchresponsepublicdefaultassociation"></a>

```json
null
```

The response returned after performing a batch operation on associations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp when the batch processing was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the batch operation.|
|links|object|false|none|An object containing relevant links related to the batch request.|
|numErrors|integer(int32)|false|none|The number of errors|
|requestedAt|string(date-time)|false|none|The timestamp when the batch request was initially made, in ISO 8601 format.|
|results|[[PublicDefaultAssociation](#schemapublicdefaultassociation)]|true|none|An array of PublicDefaultAssociation objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The timestamp when the batch processing began, in ISO 8601 format.|
|status|string|true|none|The status of the batch processing request: "PENDING", "PROCESSING", "CANCELLED", or "COMPLETE"|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

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
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs, providing additional resources or documentation related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|An array of SimplePublicObject items representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSimplePublicObjectWithErrors">BatchResponseSimplePublicObjectWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesimplepublicobjectwitherrors"></a>
<a id="schema_BatchResponseSimplePublicObjectWithErrors"></a>
<a id="tocSbatchresponsesimplepublicobjectwitherrors"></a>
<a id="tocsbatchresponsesimplepublicobjectwitherrors"></a>

```json
null
```

Represents the result of a batch operation on CRM objects, including the processing status, batch results, timestamps, and a list of any errors encountered during the operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of StandardError objects detailing any errors that occurred during the batch operation.|
|links|object|false|none|A map of link names to associated URIs, providing additional resources or information related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|An array of SimplePublicObject items representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

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
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|A map of link names to associated URIs that provide additional information about the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[SimplePublicUpsertObject](#schemasimplepublicupsertobject)]|true|none|An array of SimplePublicUpsertObject items representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseSimplePublicUpsertObjectWithErrors">BatchResponseSimplePublicUpsertObjectWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsesimplepublicupsertobjectwitherrors"></a>
<a id="schema_BatchResponseSimplePublicUpsertObjectWithErrors"></a>
<a id="tocSbatchresponsesimplepublicupsertobjectwitherrors"></a>
<a id="tocsbatchresponsesimplepublicupsertobjectwitherrors"></a>

```json
null
```

Represents the response from a batch upsert operation, including the status, timestamps, successfully processed objects, and any errors that occurred during processing.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each represented as a StandardError.|
|links|object|false|none|A map of link names to associated URIs containing documentation or additional resources related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[SimplePublicUpsertObject](#schemasimplepublicupsertobject)]|true|none|An array of results from the batch upsert operation, each represented as a SimplePublicUpsertObject.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponseAssociatedId">CollectionResponseAssociatedId</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseassociatedid"></a>
<a id="schema_CollectionResponseAssociatedId"></a>
<a id="tocScollectionresponseassociatedid"></a>
<a id="tocscollectionresponseassociatedid"></a>

```json
null
```

Represents a collection of associated IDs returned by an API request, including pagination details for navigating through the results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[AssociatedId](#schemaassociatedid)]|true|none|An array of associated IDs, each represented by an object containing the ID and type of association.|

<h2 id="tocS_CollectionResponseMultiAssociatedObjectWithLabelForwardPaging">CollectionResponseMultiAssociatedObjectWithLabelForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsemultiassociatedobjectwithlabelforwardpaging"></a>
<a id="schema_CollectionResponseMultiAssociatedObjectWithLabelForwardPaging"></a>
<a id="tocScollectionresponsemultiassociatedobjectwithlabelforwardpaging"></a>
<a id="tocscollectionresponsemultiassociatedobjectwithlabelforwardpaging"></a>

```json
null
```

Represents a paginated collection of objects that are associated with multiple labels, including the results and pagination details. This component is used when retrieving associated objects with specific labels in a forward-paging manner.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[MultiAssociatedObjectWithLabel](#schemamultiassociatedobjectwithlabel)]|true|none|An array of objects, each representing an association with labels to another object. Each item includes details about the associated object and the types of associations.|

<h2 id="tocS_CollectionResponseSimplePublicObjectWithAssociationsForwardPaging">CollectionResponseSimplePublicObjectWithAssociationsForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>
<a id="schema_CollectionResponseSimplePublicObjectWithAssociationsForwardPaging"></a>
<a id="tocScollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>
<a id="tocscollectionresponsesimplepublicobjectwithassociationsforwardpaging"></a>

```json
null
```

Represents a paginated collection response that includes simple public objects with their associations. This component is used to handle the results and pagination details when retrieving a list of objects from the API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[SimplePublicObjectWithAssociations](#schemasimplepublicobjectwithassociations)]|true|none|An array of SimplePublicObjectWithAssociations, each representing a CRM object along with its associated data.|

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
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[SimplePublicObject](#schemasimplepublicobject)]|true|none|An array containing the simple public objects returned in the current response.|
|total|integer(int32)|true|none|The number of available results|

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

Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.

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

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
null
```

Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The status code associated with the error detail|
|context|object|false|none|Context about the error condition|
|in|string|false|none|The name of the field or parameter in which the error was found.|
|message|string|true|none|A human readable message describing the error along with remediation steps where appropriate|
|subCategory|string|false|none|A specific category that contains more specific detail about the error|

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
|highValue|string|false|none|An optional string representing the upper bound of a range when using range-based operators like 'BETWEEN'.|
|operator|string|true|none|The operator used to compare the property and the value(s). It is a string and valid values include 'EQ', 'NEQ', 'LT', 'LTE', 'GT', 'GTE', 'BETWEEN', 'IN', 'NOT_IN', 'HAS_PROPERTY', 'NOT_HAS_PROPERTY', 'CONTAINS_TOKEN', and 'NOT_CONTAINS_TOKEN'.|
|propertyName|string|true|none|The name of the property to which the filter is applied. It is a string that identifies the specific property of an object.|
|value|string|false|none|The value used in the filter condition. It is a string representing the specific value to compare against the property.|
|values|[string]|false|none|An array of strings representing multiple values for operators that support multiple comparisons, such as 'IN' or 'NOT_IN'.|

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

<h2 id="tocS_FilterGroup">FilterGroup</h2>
<!-- backwards compatibility -->
<a id="schemafiltergroup"></a>
<a id="schema_FilterGroup"></a>
<a id="tocSfiltergroup"></a>
<a id="tocsfiltergroup"></a>

```json
null
```

Represents a group of filters used to query data within HubSpot. This component is used to define criteria for filtering records in various API endpoints.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filters|[[Filter](#schemafilter)]|true|none|An array of Filter objects that specify the conditions to be applied in the search query. Each filter defines a property, an operator, and a value or range of values to filter by.|

<h2 id="tocS_ForwardPaging">ForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemaforwardpaging"></a>
<a id="schema_ForwardPaging"></a>
<a id="tocSforwardpaging"></a>
<a id="tocsforwardpaging"></a>

```json
null
```

Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|

<h2 id="tocS_LabelsBetweenObjectPair">LabelsBetweenObjectPair</h2>
<!-- backwards compatibility -->
<a id="schemalabelsbetweenobjectpair"></a>
<a id="schema_LabelsBetweenObjectPair"></a>
<a id="tocSlabelsbetweenobjectpair"></a>
<a id="tocslabelsbetweenobjectpair"></a>

```json
null
```

The relationship descriptors applicable between two object types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromObjectId|string|true|none|The unique identifier of the source object in the association. It is a string.|
|fromObjectTypeId|string|true|none|The type identifier of the source object in the association. It is a string.|
|labels|[string]|true|none|An array of strings representing the labels associated with the relationship between the two objects.|
|toObjectId|string|true|none|The unique identifier of the target object in the association. It is a string.|
|toObjectTypeId|string|true|none|The type identifier of the target object in the association. It is a string.|

<h2 id="tocS_MultiAssociatedObjectWithLabel">MultiAssociatedObjectWithLabel</h2>
<!-- backwards compatibility -->
<a id="schemamultiassociatedobjectwithlabel"></a>
<a id="schema_MultiAssociatedObjectWithLabel"></a>
<a id="tocSmultiassociatedobjectwithlabel"></a>
<a id="tocsmultiassociatedobjectwithlabel"></a>

```json
null
```

Represents an object that is associated with multiple other objects, with optional context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationTypes|[[AssociationSpecWithLabel](#schemaassociationspecwithlabel)]|true|none|An array of association specifications, each including a label. These specify the types of associations and any labels that describe the nature of the association.|
|toObjectId|string|true|none|The unique identifier of the target object to which associations are being made. It is a string.|

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
|after|string|true|none|A string token used as a cursor to indicate the starting point for the next page of results.|
|link|string|false|none|A string URL that provides a direct link to the next page of results.|

<h2 id="tocS_Paging">Paging</h2>
<!-- backwards compatibility -->
<a id="schemapaging"></a>
<a id="schema_Paging"></a>
<a id="tocSpaging"></a>
<a id="tocspaging"></a>

```json
null
```

Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next|[NextPage](#schemanextpage)|false|none|Specifies the paging information needed to retrieve the next set of results in a paginated API response|
|prev|[PreviousPage](#schemapreviouspage)|false|none|specifies the paging information needed to retrieve the previous set of results in a paginated API response|

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
|before|string|true|none|A string token that indicates the position of the last item on the previous page. It is used to retrieve the previous set of results in a paginated list.|
|link|string|false|none|A string URL that provides a direct link to access the previous page of results.|

<h2 id="tocS_PublicAssociationsForObject">PublicAssociationsForObject</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationsforobject"></a>
<a id="schema_PublicAssociationsForObject"></a>
<a id="tocSpublicassociationsforobject"></a>
<a id="tocspublicassociationsforobject"></a>

```json
null
```

Represents the associations for a specific object in HubSpot, detailing the types of associations and the related objects involved.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|to|[PublicObjectId](#schemapublicobjectid)|true|none|Contains the Id of a Public Object|
|types|[[AssociationSpec](#schemaassociationspec)]|true|none|An array of association specifications, each detailing the type of association between the objects. Each item in the array is an AssociationSpec object, which defines the category and type ID of the association.|

<h2 id="tocS_PublicDefaultAssociation">PublicDefaultAssociation</h2>
<!-- backwards compatibility -->
<a id="schemapublicdefaultassociation"></a>
<a id="schema_PublicDefaultAssociation"></a>
<a id="tocSpublicdefaultassociation"></a>
<a id="tocspublicdefaultassociation"></a>

```json
null
```

The PublicDefaultAssociation component represents the default association configuration between two objects in HubSpot. It is used to define how objects are related to each other within the platform.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationSpec|[AssociationSpec](#schemaassociationspec)|true|none|Defines the type, direction, and details of the relationship between two CRM objects.|
|from|[PublicObjectId](#schemapublicobjectid)|true|none|Contains the Id of a Public Object|
|to|[PublicObjectId](#schemapublicobjectid)|true|none|Contains the Id of a Public Object|

<h2 id="tocS_PublicGdprDeleteInput">PublicGdprDeleteInput</h2>
<!-- backwards compatibility -->
<a id="schemapublicgdprdeleteinput"></a>
<a id="schema_PublicGdprDeleteInput"></a>
<a id="tocSpublicgdprdeleteinput"></a>
<a id="tocspublicgdprdeleteinput"></a>

```json
null
```

An input that contains the information required to process a public GDPR data deletion request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idProperty|string|false|none|The name of a property whose values are unique for this object|
|objectId|string|true|none|The unique identifier for the object to be deleted. This is a required field and must be a string.|

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
|objectIdToMerge|string|true|none|The unique identifier of the object that will be merged into the primary object. It is a string.|
|primaryObjectId|string|true|none|The unique identifier of the primary object that will remain after the merge. It is a string.|

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
|id|string|true|none|The unique identifier for the public object, represented as a string.|

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
|after|string|true|none|A string representing the paging cursor token to retrieve the next set of results.|
|filterGroups|[[FilterGroup](#schemafiltergroup)]|true|none|An array of filter groups used to refine the search results based on specific criteria.|
|limit|integer(int32)|true|none|An integer specifying the maximum number of results to return.|
|properties|[string]|true|none|An array of strings indicating which properties of the objects should be included in the search results.|
|query|string|false|none|A string representing a search query to be applied to the CRM objects.|
|sorts|[string]|true|none|An array of strings specifying the sorting order of the search results.|

<h2 id="tocS_PublicObjectWarning">PublicObjectWarning</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectwarning"></a>
<a id="schema_PublicObjectWarning"></a>
<a id="tocSpublicobjectwarning"></a>
<a id="tocspublicobjectwarning"></a>

```json
null
```

Represents a warning message related to a public object in HubSpot, providing details about the nature and context of the warning.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|A string indicating the category of the warning.|
|context|object|true|none|An object providing additional context for the warning, with string properties.|
|message|string|true|none|A string containing the warning message.|

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
|archived|boolean|true|none|A boolean indicating whether the object is archived.|
|archivedAt|string(date-time)|false|none|The date and time when this object was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when this object was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this object, represented as a string.|
|objectWriteTraceId|string|false|none|A string used for tracing the write operations on this object.|
|properties|object|true|none|An object containing key-value pairs of the object's properties, where each key is a property name and each value is a string.|
|propertiesWithHistory|object|false|none|An object where each key is a property name and each value is an array of historical values with timestamps, showing the history of changes for each property.|
|updatedAt|string(date-time)|true|none|The date and time when this object was last updated, in ISO 8601 format.|
|url|string|false|none|A string representing the URL associated with this object.|
|warnings|[[PublicObjectWarning](#schemapublicobjectwarning)]|false|none|An array of warnings related to the object, each containing a category, message, and context.|

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
|objectWriteTraceId|string|false|none|A string identifier used to trace the write operation for debugging or tracking purposes.|
|properties|object|true|none|An object containing key-value pairs where keys are property names and values are property values for the CRM object. Each property is represented as a string.|

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
|associations|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|none|An array of associations for the CRM objects. Each association is defined by a 'PublicAssociationsForObject' object, which specifies the target object and the types of associations.|
|objectWriteTraceId|string|false|none|A string identifier used to trace the write operation for the objects being created.|
|properties|object|true|none|An object containing key-value pairs where keys are property names and values are the corresponding property values for the CRM objects. Each property value is a string.|

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
|id|string|true|none|The unique identifier for the object, represented as a string.|
|idProperty|string|false|none|The name of a property whose values are unique for this object|
|objectWriteTraceId|string|false|none|An optional string used to trace the write operation for debugging or logging purposes.|
|properties|object|true|none|A map of property names to their values for the object. Each property is a string.|

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
|id|string|true|none|The unique identifier for this object, represented as a string.|

<h2 id="tocS_SimplePublicObjectInput">SimplePublicObjectInput</h2>
<!-- backwards compatibility -->
<a id="schemasimplepublicobjectinput"></a>
<a id="schema_SimplePublicObjectInput"></a>
<a id="tocSsimplepublicobjectinput"></a>
<a id="tocssimplepublicobjectinput"></a>

```json
null
```

Represents the input required to update a CRM object, containing an object with property names and their corresponding values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|properties|object|true|none|An object containing key-value pairs where each key is a property name and each value is the property's value. All properties are represented as strings.|

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
|associations|[[PublicAssociationsForObject](#schemapublicassociationsforobject)]|true|none|An array of associations that link this object to other objects. Each association is defined by the 'PublicAssociationsForObject' schema.|
|properties|object|true|none|An object containing key-value pairs where keys are property names and values are the corresponding property values for the CRM object. Each property is represented as a string.|

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
|archived|boolean|true|none|Indicates whether this object has been archived. A boolean value.|
|archivedAt|string(date-time)|false|none|The date and time when this object was archived, in ISO 8601 format.|
|associations|object|false|none|A map of associated object types to their associated IDs.|
|createdAt|string(date-time)|true|none|The date and time when this object was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this object.|
|objectWriteTraceId|string|false|none|An identifier used for tracing the write operation that created or updated this object.|
|properties|object|true|none|A map of property names to their current values for this object.|
|propertiesWithHistory|object|false|none|A map of property names to arrays containing the property's value and timestamp history.|
|updatedAt|string(date-time)|true|none|The date and time when this object was last updated, in ISO 8601 format.|
|url|string|false|none|The URL of this object.|
|warnings|[[PublicObjectWarning](#schemapublicobjectwarning)]|false|none|An array of warnings related to this object, each containing a category, message, and context.|

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
|archived|boolean|true|none|A boolean indicating whether this object is archived.|
|archivedAt|string(date-time)|false|none|The date and time when this object was archived, in ISO 8601 format.|
|createdAt|string(date-time)|true|none|The date and time when this object was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for this object.|
|new|boolean|true|none|A boolean indicating whether this object was newly created during the upsert operation.|
|objectWriteTraceId|string|false|none|An identifier used to trace the write operation for this object.|
|properties|object|true|none|A map of property names to their current values for this object.|
|propertiesWithHistory|object|false|none|A map of property names to arrays of values with timestamps, showing the history of changes for each property.|
|updatedAt|string(date-time)|true|none|The date and time when this object was last updated, in ISO 8601 format.|
|url|string|false|none|The URL of the object in HubSpot.|
|warnings|[[PublicObjectWarning](#schemapublicobjectwarning)]|false|none|An array of warnings related to the object, each containing a category, message, and context.|

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
|category|string|true|none|A string categorizing the type of error.|
|context|object|true|none|An object containing additional context about the error, with keys as context names and values as arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects providing further information about the error.|
|id|string|false|none|A string representing a unique identifier for the error.|
|links|object|true|none|An object mapping link names to associated URIs, providing documentation about the error or recommended remediation steps.|
|message|string|true|none|A string containing a human-readable message describing the error.|
|status|string|true|none|A string indicating the status of the error.|
|subCategory|object|false|none|An object providing more specific categorization of the error.|

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
|sourceId|string|false|none|A string identifying the specific source of the value.|
|sourceLabel|string|false|none|A string providing a label or description for the source of the value.|
|sourceType|string|true|none|A string indicating the type of source from which the value originated.|
|timestamp|string(date-time)|true|none|The date and time when the value was recorded, in ISO 8601 format.|
|updatedByUserId|integer(int32)|false|none|An integer representing the ID of the user who updated the value.|
|value|string|true|none|A string representing the value associated with the timestamp.|
