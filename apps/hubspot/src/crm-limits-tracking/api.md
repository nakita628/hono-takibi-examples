<h1 id="limits-tracking">Limits Tracking v2026-09</h1>

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
|crm.schemas.custom.read||
|crm.schemas.custom.write||
|e-commerce||
|media_bridge.read||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="limits-tracking-basic">Basic</h1>

## Read association label limits

<a id="opIdget-/crm/limits/2026-09/associations/labels"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/associations/labels \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/associations/labels`

Returns limits and usage for custom association labels

<h3 id="read-association-label-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromObjectTypeId|query|string|false|The ID of the object type from which the association starts.|
|toObjectTypeId|query|string|false|The ID of the object type to which the association points.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-association-label-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseAssociationLabelLimitResponseNoPaging](#schemacollectionresponseassociationlabellimitresponsenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read record association limits

<a id="opIdget-/crm/limits/2026-09/associations/records/from"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/associations/records/from \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/associations/records/from`

Returns objects with records approaching or at association limits

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-record-association-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging](#schemacollectionresponseobjecttypenearoratassociationlimitnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read record association limits from an object

<a id="opIdget-/crm/limits/2026-09/associations/records/{fromObjectTypeId}/to"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/limits/2026-09/associations/records/{fromObjectTypeId}/to' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/associations/records/{fromObjectTypeId}/to`

Returns objects for which the from object has records approaching or at association limits

<h3 id="read-record-association-limits-from-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromObjectTypeId|path|string|true|The unique identifier of the object type from which the associations are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-record-association-limits-from-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging](#schemacollectionresponseobjecttypenearoratassociationlimitnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read record association limits between two objects

<a id="opIdget-/crm/limits/2026-09/associations/records/{fromObjectTypeId}/{toObjectTypeId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/limits/2026-09/associations/records/{fromObjectTypeId}/{toObjectTypeId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/associations/records/{fromObjectTypeId}/{toObjectTypeId}`

Returns records approaching or at association limits between two objects

<h3 id="read-record-association-limits-between-two-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromObjectTypeId|path|string|true|The unique identifier of the source object type for which to retrieve association limits.|
|toObjectTypeId|path|string|true|The unique identifier of the target object type for which to retrieve association limits.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-record-association-limits-between-two-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AssociationRecordLimitResponse](#schemaassociationrecordlimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read calculation property limits

<a id="opIdget-/crm/limits/2026-09/calculated-properties"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/calculated-properties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/calculated-properties`

Returns overall limit and per object usage for calculated properties

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-calculation-property-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CalculatedPropertyLimitResponse](#schemacalculatedpropertylimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read custom object limits

<a id="opIdget-/crm/limits/2026-09/custom-object-types"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/custom-object-types \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/custom-object-types`

Returns limits and usage for custom object schemas

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-custom-object-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CustomObjectLimitResponse](#schemacustomobjectlimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.write )
</aside>

## Read custom property limits

<a id="opIdget-/crm/limits/2026-09/custom-properties"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/custom-properties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/custom-properties`

Returns limits and usage per object for custom properties

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-custom-property-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CustomPropertyLimitResponse](#schemacustompropertylimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read pipeline limits

<a id="opIdget-/crm/limits/2026-09/pipelines"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/pipelines \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/pipelines`

Returns limits and usage per object for pipelines

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-pipeline-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PipelineLimitResponse](#schemapipelinelimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

## Read record limits

<a id="opIdget-/crm/limits/2026-09/records"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/limits/2026-09/records \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/limits/2026-09/records`

Returns limits and usage per object for records

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-record-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[RecordLimitResponse](#schemarecordlimitresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.partner-services.read ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.objects.partner-services.write ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write ), oauth2 ( Scopes: crm.objects.commercepayments.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.partner-clients.write ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.partner-clients.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.products.read )
</aside>

# Schemas

<h2 id="tocS_AssociationLabelLimitResponse">AssociationLabelLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociationlabellimitresponse"></a>
<a id="schema_AssociationLabelLimitResponse"></a>
<a id="tocSassociationlabellimitresponse"></a>
<a id="tocsassociationlabellimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allLabels|[string]|true|none|A list of all association labels.|
|fromObjectType|[ObjectTypeDefinition](#schemaobjecttypedefinition)|true|none|none|
|limit|integer(int64)|true|none|The maximum number of association labels allowed.|
|percentage|number|true|none|The percentage of the association label limit that has been used.|
|toObjectType|[ObjectTypeDefinition](#schemaobjecttypedefinition)|true|none|none|
|usage|integer(int64)|true|none|The current number of association labels used.|

<h2 id="tocS_AssociationRecordLimitResponse">AssociationRecordLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemaassociationrecordlimitresponse"></a>
<a id="schema_AssociationRecordLimitResponse"></a>
<a id="tocSassociationrecordlimitresponse"></a>
<a id="tocsassociationrecordlimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atLimitFromRecordSamples|[[AtLimitRecordSample](#schemaatlimitrecordsample)]|true|none|An array of AtLimitRecordSample objects, each representing a sample record that is at the association limit.|
|limit|integer(int64)|true|none|The maximum number of associations allowed for records.|
|nearLimitFromRecordSamples|[[NearLimitRecordSample](#schemanearlimitrecordsample)]|true|none|An array of NearLimitRecordSample objects, each representing a sample record that is near the association limit.|
|totalRecordsAtLimit|integer(int32)|true|none|The total number of records that have reached their association limit.|
|totalRecordsNearLimit|integer(int32)|true|none|The total number of records that are approaching their association limit.|

<h2 id="tocS_AtLimitRecordSample">AtLimitRecordSample</h2>
<!-- backwards compatibility -->
<a id="schemaatlimitrecordsample"></a>
<a id="schema_AtLimitRecordSample"></a>
<a id="tocSatlimitrecordsample"></a>
<a id="tocsatlimitrecordsample"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The label associated with a record that is at its limit.|
|objectId|integer(int64)|true|none|The objectId of the object that is at its limit.|

<h2 id="tocS_CalculatedPropertyLimitResponse">CalculatedPropertyLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacalculatedpropertylimitresponse"></a>
<a id="schema_CalculatedPropertyLimitResponse"></a>
<a id="tocScalculatedpropertylimitresponse"></a>
<a id="tocscalculatedpropertylimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byObjectType|[[UsageForObjectType](#schemausageforobjecttype)]|true|none|An array detailing the usage of calculated properties by object type, with each entry providing specific usage information for an object type.|
|overallLimit|integer(int64)|true|none|The maximum number of calculated properties allowed.|
|overallPercentage|number|true|none|The percentage of the overall limit that is currently being used for calculated properties.|
|overallUsage|integer(int64)|true|none|The total number of calculated properties currently in use.|

<h2 id="tocS_CollectionResponseAssociationLabelLimitResponseNoPaging">CollectionResponseAssociationLabelLimitResponseNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseassociationlabellimitresponsenopaging"></a>
<a id="schema_CollectionResponseAssociationLabelLimitResponseNoPaging"></a>
<a id="tocScollectionresponseassociationlabellimitresponsenopaging"></a>
<a id="tocscollectionresponseassociationlabellimitresponsenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[AssociationLabelLimitResponse](#schemaassociationlabellimitresponse)]|true|none|An array of AssociationLabelLimitResponse objects, each detailing the limits and usage of association labels between object types.|

<h2 id="tocS_CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging">CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseobjecttypenearoratassociationlimitnopaging"></a>
<a id="schema_CollectionResponseObjectTypeNearOrAtAssociationLimitNoPaging"></a>
<a id="tocScollectionresponseobjecttypenearoratassociationlimitnopaging"></a>
<a id="tocscollectionresponseobjecttypenearoratassociationlimitnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ObjectTypeNearOrAtAssociationLimit](#schemaobjecttypenearoratassociationlimit)]|true|none|An array containing details of object types that are near or at their association limits. Each item in the array is an ObjectTypeNearOrAtAssociationLimit object.|

<h2 id="tocS_CustomObjectLimitResponse">CustomObjectLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomobjectlimitresponse"></a>
<a id="schema_CustomObjectLimitResponse"></a>
<a id="tocScustomobjectlimitresponse"></a>
<a id="tocscustomobjectlimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|true|none|The maximum number of custom objects allowed.|
|percentage|number|true|none|The percentage of the custom object limit that is currently used.|
|usage|integer(int64)|true|none|The current number of custom objects used.|

<h2 id="tocS_CustomObjectRecordLimitResponse">CustomObjectRecordLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustomobjectrecordlimitresponse"></a>
<a id="schema_CustomObjectRecordLimitResponse"></a>
<a id="tocScustomobjectrecordlimitresponse"></a>
<a id="tocscustomobjectrecordlimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byObjectType|[[UsageForObjectType](#schemausageforobjecttype)]|true|none|An array containing usage details for each object type, with each entry providing specific usage information for a particular object type.|
|overallLimit|integer(int64)|true|none|The maximum number of custom object records allowed.|
|overallPercentage|number|true|none|The percentage of the overall custom object record limit that has been used.|
|overallUsage|integer(int64)|true|none|The total number of custom object records currently in use.|

<h2 id="tocS_CustomPropertyLimitResponse">CustomPropertyLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemacustompropertylimitresponse"></a>
<a id="schema_CustomPropertyLimitResponse"></a>
<a id="tocScustompropertylimitresponse"></a>
<a id="tocscustompropertylimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|byObjectType|[[LimitAndUsageForObjectType](#schemalimitandusageforobjecttype)]|true|none|An array detailing the limit and usage of custom properties for each specific object type.|
|overallLimit|integer(int64)|true|none|The total limit for custom properties across all objects.|
|overallPercentage|number|true|none|The percentage of the overall custom property limit that has been used.|
|overallUsage|integer(int64)|true|none|The total number of custom properties currently in use across all objects.|

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

<h2 id="tocS_LimitAndUsageForObjectType">LimitAndUsageForObjectType</h2>
<!-- backwards compatibility -->
<a id="schemalimitandusageforobjecttype"></a>
<a id="schema_LimitAndUsageForObjectType"></a>
<a id="tocSlimitandusageforobjecttype"></a>
<a id="tocslimitandusageforobjecttype"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|true|none|The maximum allowed count for the object type.|
|objectTypeId|string|true|none|The unique identifier for the object type.|
|percentage|number|true|none|The percentage of the limit that has been used.|
|pluralLabel|string|true|none|The plural label for the object type.|
|singularLabel|string|true|none|The singular label for the object type.|
|usage|integer(int64)|true|none|The current usage count for the object type.|

<h2 id="tocS_NearLimitRecordSample">NearLimitRecordSample</h2>
<!-- backwards compatibility -->
<a id="schemanearlimitrecordsample"></a>
<a id="schema_NearLimitRecordSample"></a>
<a id="tocSnearlimitrecordsample"></a>
<a id="tocsnearlimitrecordsample"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The primary identifier of the record.|
|objectId|integer(int64)|true|none|The unique identifier for the object.|
|percentage|number|true|none|The percentage of the limit that has been used.|
|usage|integer(int64)|true|none|The number of records currently in use.|

<h2 id="tocS_ObjectTypeDefinition">ObjectTypeDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypedefinition"></a>
<a id="schema_ObjectTypeDefinition"></a>
<a id="tocSobjecttypedefinition"></a>
<a id="tocsobjecttypedefinition"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|The unique identifier for the object type.|
|pluralLabel|string|true|none|The plural form label for the object type.|
|singularLabel|string|true|none|The singular form label for the object type.|

<h2 id="tocS_ObjectTypeNearOrAtAssociationLimit">ObjectTypeNearOrAtAssociationLimit</h2>
<!-- backwards compatibility -->
<a id="schemaobjecttypenearoratassociationlimit"></a>
<a id="schema_ObjectTypeNearOrAtAssociationLimit"></a>
<a id="tocSobjecttypenearoratassociationlimit"></a>
<a id="tocsobjecttypenearoratassociationlimit"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasRecordsAtLimit|boolean|true|none|Indicates whether there are records that have reached the association limit.|
|hasRecordsNearLimit|boolean|true|none|Indicates whether there are records that are approaching the association limit.|
|objectTypeId|string|true|none|The unique identifier for the object type.|
|pluralLabel|string|true|none|The plural form of the label for the object type.|
|singularLabel|string|true|none|The singular form of the label for the object type.|

<h2 id="tocS_PipelineLimitResponse">PipelineLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemapipelinelimitresponse"></a>
<a id="schema_PipelineLimitResponse"></a>
<a id="tocSpipelinelimitresponse"></a>
<a id="tocspipelinelimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customObjectTypes|[CustomObjectRecordLimitResponse](#schemacustomobjectrecordlimitresponse)|true|none|none|
|hubspotDefinedObjectTypes|[[LimitAndUsageForObjectType](#schemalimitandusageforobjecttype)]|true|none|An array of objects representing the limits and usage for HubSpot-defined object types. Each object includes details such as the object type ID, singular and plural labels, limit, usage, and percentage of usage.|

<h2 id="tocS_RecordLimitResponse">RecordLimitResponse</h2>
<!-- backwards compatibility -->
<a id="schemarecordlimitresponse"></a>
<a id="schema_RecordLimitResponse"></a>
<a id="tocSrecordlimitresponse"></a>
<a id="tocsrecordlimitresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customObjectTypes|[CustomObjectRecordLimitResponse](#schemacustomobjectrecordlimitresponse)|true|none|none|
|hubspotDefinedObjectTypes|[[LimitAndUsageForObjectType](#schemalimitandusageforobjecttype)]|true|none|An array of objects detailing the limits and usage for HubSpot-defined object types.|

<h2 id="tocS_UsageForObjectType">UsageForObjectType</h2>
<!-- backwards compatibility -->
<a id="schemausageforobjecttype"></a>
<a id="schema_UsageForObjectType"></a>
<a id="tocSusageforobjecttype"></a>
<a id="tocsusageforobjecttype"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|The unique identifier for the object type.|
|pluralLabel|string|true|none|The plural form of the label for the object type.|
|singularLabel|string|true|none|The singular form of the label for the object type.|
|usage|integer(int64)|true|none|The number of records used for the object type.|
