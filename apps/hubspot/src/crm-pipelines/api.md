<h1 id="pipelines">Pipelines v2026-09</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Basepom for all HubSpot Projects

Base URLs:

* <a href="https://api.hubapi.com">https://api.hubapi.com</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://app.hubspot.com/oauth/authorize](https://app.hubspot.com/oauth/authorize)
    - Token URL = [https://api.hubapi.com/oauth/v1/token](https://api.hubapi.com/oauth/v1/token)

|Scope|Scope Description|
|---|---|
|automation|Workflows|
|crm.objects.appointments.read|Read appointments|
|crm.objects.appointments.sensitive.read.v2|Read appointments (sensitive)|
|crm.objects.appointments.sensitive.write.v2|Write appointments (sensitive)|
|crm.objects.appointments.write|Write appointments|
|crm.objects.carts.read|Read carts|
|crm.objects.carts.write|Write cart|
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
|crm.objects.feedback_submissions.read|View feedback survey submissions|
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
|crm.objects.marketing_events.read|Read marketing events|
|crm.objects.marketing_events.write|Write marketing events|
|crm.objects.orders.read|Read Orders|
|crm.objects.orders.write|Write orders|
|crm.objects.owners.read|View owner records|
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
|crm.pipelines.orders.read|View details about your cart pipelines including pipeline stage information|
|crm.pipelines.orders.write|Create, delete, or make to your order pipelines or their respective stages|
|crm.schemas.appointments.read|Read appointments property settings|
|crm.schemas.appointments.write|Write appointments property settings|
|crm.schemas.carts.read|Read cart property settings|
|crm.schemas.carts.write|Write cart property settings|
|crm.schemas.commercepayments.read|Commerce payment definitions|
|crm.schemas.commercepayments.write|Commerce payment definitions|
|crm.schemas.companies.read|View company property settings|
|crm.schemas.companies.write|Create new company properties or change company property settings|
|crm.schemas.contacts.read|View contacts property settings|
|crm.schemas.contacts.write|Create new contact properties or change contact property settings|
|crm.schemas.courses.read|Read courses property settings|
|crm.schemas.courses.write|Write courses property settings|
|crm.schemas.custom.read|View custom object definitions|
|crm.schemas.custom.write|Change custom object definitions|
|crm.schemas.deals.read|View deals property settings|
|crm.schemas.deals.write|Create new deal properties or change deal property settings|
|crm.schemas.invoices.read|Invoices Definitions|
|crm.schemas.invoices.write|Invoices Definitions|
|crm.schemas.line_items.read|Line Items schemas|
|crm.schemas.listings.read|Read listings property settings|
|crm.schemas.listings.write|Write listings property settings|
|crm.schemas.orders.read|Read order property settings|
|crm.schemas.orders.write|Write order property settings|
|crm.schemas.projects.read|Read projects property settings|
|crm.schemas.projects.write|Write projects property settings|
|crm.schemas.quotes.read|Quotes schemas|
|crm.schemas.quotes.write|Modify quote property settings|
|crm.schemas.services.read|Read services property settings|
|crm.schemas.services.write|Write services property settings|
|crm.schemas.subscriptions.read|Read subscriptions schema|
|crm.schemas.subscriptions.write|Write to Subscription properties|
|e-commerce|Access to ecommerce|
|media_bridge.read|Read media and media events|
|tickets|Tickets|
|tickets.highly_sensitive.v2|Tickets (highly-sensitive)|
|tickets.sensitive.v2|Tickets (sensitive)|
|timeline|Create timeline events|

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

<h1 id="pipelines-basic">Basic</h1>

## get-/crm/pipelines/2026-09/{objectType}_getAll

<a id="opIdget-/crm/pipelines/2026-09/{objectType}_getAll"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}`

<h3 id="get-crmpipelines2026-09objecttypegetall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypegetall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePipelineNoPaging](#schemacollectionresponsepipelinenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## post-/crm/pipelines/2026-09/{objectType}_create

<a id="opIdpost-/crm/pipelines/2026-09/{objectType}_create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/pipelines/2026-09/{objectType}`

> Body parameter

```json
null
```

<h3 id="post-crmpipelines2026-09objecttypecreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|body|body|[PipelineInput](#schemapipelineinput)|true|none|
|» displayOrder|body|integer(int32)|true|The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.|
|» label|body|string|true|A unique label used to organize pipelines in HubSpot's UI|
|» pipelineId|body|string|false|none|
|» stages|body|[[PipelineStageInput](#schemapipelinestageinput)]|true|Pipeline stage inputs used to create the new or replacement pipeline.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="post-crmpipelines2026-09objecttypecreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Pipeline](#schemapipeline)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## get-/crm/pipelines/2026-09/{objectType}/{pipelineId}_getById

<a id="opIdget-/crm/pipelines/2026-09/{objectType}/{pipelineId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}/{pipelineId}`

<h3 id="get-crmpipelines2026-09objecttypepipelineidgetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypepipelineidgetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Pipeline](#schemapipeline)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## put-/crm/pipelines/2026-09/{objectType}/{pipelineId}_replace

<a id="opIdput-/crm/pipelines/2026-09/{objectType}/{pipelineId}_replace"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/pipelines/2026-09/{objectType}/{pipelineId}`

> Body parameter

```json
null
```

<h3 id="put-crmpipelines2026-09objecttypepipelineidreplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|validateDealStageUsagesBeforeDelete|query|boolean|false|none|
|validateReferencesBeforeDelete|query|boolean|false|none|
|body|body|[PipelineReplaceInput](#schemapipelinereplaceinput)|true|none|
|» displayOrder|body|integer(int32)|true|none|
|» label|body|string|true|none|
|» stages|body|[[PipelineStageInput](#schemapipelinestageinput)]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="put-crmpipelines2026-09objecttypepipelineidreplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Pipeline](#schemapipeline)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## delete-/crm/pipelines/2026-09/{objectType}/{pipelineId}_archive

<a id="opIddelete-/crm/pipelines/2026-09/{objectType}/{pipelineId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/pipelines/2026-09/{objectType}/{pipelineId}`

<h3 id="delete-crmpipelines2026-09objecttypepipelineidarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|validateDealStageUsagesBeforeDelete|query|boolean|false|none|
|validateReferencesBeforeDelete|query|boolean|false|none|

> Example responses

> default Response

```json
null
```

<h3 id="delete-crmpipelines2026-09objecttypepipelineidarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## patch-/crm/pipelines/2026-09/{objectType}/{pipelineId}_update

<a id="opIdpatch-/crm/pipelines/2026-09/{objectType}/{pipelineId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/pipelines/2026-09/{objectType}/{pipelineId}`

> Body parameter

```json
null
```

<h3 id="patch-crmpipelines2026-09objecttypepipelineidupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|validateDealStageUsagesBeforeDelete|query|boolean|false|none|
|validateReferencesBeforeDelete|query|boolean|false|none|
|body|body|[PipelinePatchInput](#schemapipelinepatchinput)|true|none|
|» archived|body|boolean|false|Whether the pipeline is archived. This property should only be provided when restoring an archived pipeline. If it's provided in any other call, the request will fail and a `400 Bad Request` will be returned.|
|» displayOrder|body|integer(int32)|false|none|
|» label|body|string|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="patch-crmpipelines2026-09objecttypepipelineidupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Pipeline](#schemapipeline)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## get-/crm/pipelines/2026-09/{objectType}/{pipelineId}/audit_getAudit

<a id="opIdget-/crm/pipelines/2026-09/{objectType}/{pipelineId}/audit_getAudit"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/audit' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}/{pipelineId}/audit`

<h3 id="get-crmpipelines2026-09objecttypepipelineidauditgetaudit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypepipelineidauditgetaudit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicAuditInfoNoPaging](#schemacollectionresponsepublicauditinfonopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## get-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages_getAll

<a id="opIdget-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages_getAll"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages`

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesgetall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesgetall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePipelineStageNoPaging](#schemacollectionresponsepipelinestagenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## post-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages_create

<a id="opIdpost-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages_create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages`

> Body parameter

```json
null
```

<h3 id="post-crmpipelines2026-09objecttypepipelineidstagescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|body|body|[PipelineStageInput](#schemapipelinestageinput)|true|none|
|» displayOrder|body|integer(int32)|true|none|
|» label|body|string|true|none|
|» metadata|body|object|true|A JSON object containing properties that are not present on all object pipelines.<br><br>For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.<br><br>For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.|
|» » **additionalProperties**|body|string|false|none|
|» stageId|body|string|false|none|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="post-crmpipelines2026-09objecttypepipelineidstagescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PipelineStage](#schemapipelinestage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## get-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_getById

<a id="opIdget-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_getById"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}`

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesstageidgetbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|stageId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesstageidgetbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PipelineStage](#schemapipelinestage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## put-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_replace

<a id="opIdput-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_replace"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}`

> Body parameter

```json
null
```

<h3 id="put-crmpipelines2026-09objecttypepipelineidstagesstageidreplace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|stageId|path|string|true|none|
|body|body|[PipelineStageReplaceInput](#schemapipelinestagereplaceinput)|true|none|
|» displayOrder|body|integer(int32)|true|none|
|» label|body|string|true|none|
|» metadata|body|object|true|none|
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

<h3 id="put-crmpipelines2026-09objecttypepipelineidstagesstageidreplace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PipelineStage](#schemapipelinestage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## delete-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_archive

<a id="opIddelete-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}`

<h3 id="delete-crmpipelines2026-09objecttypepipelineidstagesstageidarchive-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|stageId|path|string|true|none|

> Example responses

> default Response

```json
null
```

<h3 id="delete-crmpipelines2026-09objecttypepipelineidstagesstageidarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## patch-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_update

<a id="opIdpatch-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}_update"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}`

> Body parameter

```json
null
```

<h3 id="patch-crmpipelines2026-09objecttypepipelineidstagesstageidupdate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|stageId|path|string|true|none|
|body|body|[PipelineStagePatchInput](#schemapipelinestagepatchinput)|true|none|
|» archived|body|boolean|false|Whether the pipeline is archived.|
|» displayOrder|body|integer(int32)|false|none|
|» label|body|string|false|A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.|
|» metadata|body|object|true|none|
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

<h3 id="patch-crmpipelines2026-09objecttypepipelineidstagesstageidupdate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PipelineStage](#schemapipelinestage)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.schemas.projects.write ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

## get-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit

<a id="opIdget-/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}/audit_getAudit"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}/audit' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/pipelines/2026-09/{objectType}/{pipelineId}/stages/{stageId}/audit`

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesstageidauditgetaudit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|none|
|pipelineId|path|string|true|none|
|stageId|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-crmpipelines2026-09objecttypepipelineidstagesstageidauditgetaudit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicAuditInfoNoPaging](#schemacollectionresponsepublicauditinfonopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: timeline ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps, private_apps_legacy
</aside>

# Schemas

<h2 id="tocS_PipelineStagePatchInput">PipelineStagePatchInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestagepatchinput"></a>
<a id="schema_PipelineStagePatchInput"></a>
<a id="tocSpipelinestagepatchinput"></a>
<a id="tocspipelinestagepatchinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Whether the pipeline is archived.|
|displayOrder|integer(int32)|false|none|none|
|label|string|false|none|A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.|
|metadata|object|true|none|none|

<h2 id="tocS_PipelinePatchInput">PipelinePatchInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelinepatchinput"></a>
<a id="schema_PipelinePatchInput"></a>
<a id="tocSpipelinepatchinput"></a>
<a id="tocspipelinepatchinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Whether the pipeline is archived. This property should only be provided when restoring an archived pipeline. If it's provided in any other call, the request will fail and a `400 Bad Request` will be returned.|
|displayOrder|integer(int32)|false|none|none|
|label|string|false|none|none|

<h2 id="tocS_PipelineStage">PipelineStage</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestage"></a>
<a id="schema_PipelineStage"></a>
<a id="tocSpipelinestage"></a>
<a id="tocspipelinestage"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|none|
|archivedAt|string(date-time)|false|none|The date the pipeline was archived. `archivedAt` will only be present if the pipeline is archived.|
|createdAt|string(date-time)|true|none|The date the pipeline stage was created. The stages on default pipelines will have createdAt = 0.|
|displayOrder|integer(int32)|true|none|The order for displaying this pipeline stage. If two pipeline stages have a matching `displayOrder`, they will be sorted alphabetically by label.|
|id|string|true|none|A unique identifier generated by HubSpot that can be used to retrieve and update the pipeline stage.|
|label|string|true|none|A label used to organize pipeline stages in HubSpot's UI. Each pipeline stage's label must be unique within that pipeline.|
|metadata|object|true|none|A JSON object containing properties that are not present on all object pipelines.<br><br>For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.<br><br>For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.|
|updatedAt|string(date-time)|true|none|The date the pipeline stage was last updated.|
|writePermissions|string|true|none|Defines the level of write access for the pipeline stage, with possible values being CRM_PERMISSIONS_ENFORCEMENT, READ_ONLY, or INTERNAL_ONLY.|

#### Enumerated Values

|Property|Value|
|---|---|
|writePermissions|CRM_PERMISSIONS_ENFORCEMENT|
|writePermissions|INTERNAL_ONLY|
|writePermissions|READ_ONLY|

<h2 id="tocS_CollectionResponsePipelineStageNoPaging">CollectionResponsePipelineStageNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepipelinestagenopaging"></a>
<a id="schema_CollectionResponsePipelineStageNoPaging"></a>
<a id="tocScollectionresponsepipelinestagenopaging"></a>
<a id="tocscollectionresponsepipelinestagenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PipelineStage](#schemapipelinestage)]|true|none|none|

<h2 id="tocS_PublicAuditInfo">PublicAuditInfo</h2>
<!-- backwards compatibility -->
<a id="schemapublicauditinfo"></a>
<a id="schema_PublicAuditInfo"></a>
<a id="tocSpublicauditinfo"></a>
<a id="tocspublicauditinfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action performed that triggered the audit event.|
|fromUserId|integer(int32)|false|none|The ID of the user who initiated the audit event.|
|identifier|string|true|none|A unique string identifier for the audit event.|
|message|string|false|none|A descriptive message related to the audit event.|
|portalId|integer(int32)|true|none|The unique identifier for the HubSpot portal where the audit event occurred.|
|rawObject|object|false|none|An object containing the raw data associated with the audit event.|
|timestamp|string(date-time)|false|none|The date and time when the audit event took place.|

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

<h2 id="tocS_CollectionResponsePublicAuditInfoNoPaging">CollectionResponsePublicAuditInfoNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicauditinfonopaging"></a>
<a id="schema_CollectionResponsePublicAuditInfoNoPaging"></a>
<a id="tocScollectionresponsepublicauditinfonopaging"></a>
<a id="tocscollectionresponsepublicauditinfonopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicAuditInfo](#schemapublicauditinfo)]|true|none|none|

<h2 id="tocS_Pipeline">Pipeline</h2>
<!-- backwards compatibility -->
<a id="schemapipeline"></a>
<a id="schema_Pipeline"></a>
<a id="tocSpipeline"></a>
<a id="tocspipeline"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Whether the pipeline is archived.|
|archivedAt|string(date-time)|false|none|The date the pipeline was archived. `archivedAt` will only be present if the pipeline is archived.|
|createdAt|string(date-time)|true|none|none|
|displayOrder|integer(int32)|true|none|none|
|id|string|true|none|none|
|label|string|true|none|none|
|stages|[[PipelineStage](#schemapipelinestage)]|true|none|The stages associated with the pipeline. They can be retrieved and updated via the pipeline stages endpoints.|
|updatedAt|string(date-time)|true|none|The date the pipeline was last updated.|

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

<h2 id="tocS_PipelineStageInput">PipelineStageInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestageinput"></a>
<a id="schema_PipelineStageInput"></a>
<a id="tocSpipelinestageinput"></a>
<a id="tocspipelinestageinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|true|none|none|
|label|string|true|none|none|
|metadata|object|true|none|A JSON object containing properties that are not present on all object pipelines.<br><br>For `deals` pipelines, the `probability` field is required (`{ "probability": 0.5 }`), and represents the likelihood a deal will close. Possible values are between 0.0 and 1.0 in increments of 0.1.<br><br>For `tickets` pipelines, the `ticketState` field is optional (`{ "ticketState": "OPEN" }`), and represents whether the ticket remains open or has been closed by a member of your Support team. Possible values are `OPEN` or `CLOSED`.|
|stageId|string|false|none|none|

<h2 id="tocS_CollectionResponsePipelineNoPaging">CollectionResponsePipelineNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepipelinenopaging"></a>
<a id="schema_CollectionResponsePipelineNoPaging"></a>
<a id="tocScollectionresponsepipelinenopaging"></a>
<a id="tocscollectionresponsepipelinenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Pipeline](#schemapipeline)]|true|none|none|

<h2 id="tocS_PipelineInput">PipelineInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelineinput"></a>
<a id="schema_PipelineInput"></a>
<a id="tocSpipelineinput"></a>
<a id="tocspipelineinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|true|none|The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.|
|label|string|true|none|A unique label used to organize pipelines in HubSpot's UI|
|pipelineId|string|false|none|none|
|stages|[[PipelineStageInput](#schemapipelinestageinput)]|true|none|Pipeline stage inputs used to create the new or replacement pipeline.|

<h2 id="tocS_PipelineReplaceInput">PipelineReplaceInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelinereplaceinput"></a>
<a id="schema_PipelineReplaceInput"></a>
<a id="tocSpipelinereplaceinput"></a>
<a id="tocspipelinereplaceinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|true|none|none|
|label|string|true|none|none|
|stages|[[PipelineStageInput](#schemapipelinestageinput)]|true|none|none|

<h2 id="tocS_PipelineStageReplaceInput">PipelineStageReplaceInput</h2>
<!-- backwards compatibility -->
<a id="schemapipelinestagereplaceinput"></a>
<a id="schema_PipelineStageReplaceInput"></a>
<a id="tocSpipelinestagereplaceinput"></a>
<a id="tocspipelinestagereplaceinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|true|none|none|
|label|string|true|none|none|
|metadata|object|true|none|none|
