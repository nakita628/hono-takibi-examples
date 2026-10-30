<h1 id="properties">Properties v2026-09</h1>

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
|automation||
|cpq.quotes.read||
|cpq.quotes.write||
|crm.objects.appointments.read||
|crm.objects.appointments.sensitive.read.v2||
|crm.objects.appointments.sensitive.write.v2||
|crm.objects.appointments.write||
|crm.objects.calls.read||
|crm.objects.carts.read||
|crm.objects.carts.write||
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
|crm.objects.marketing_events.read||
|crm.objects.marketing_events.write||
|crm.objects.meetings.read||
|crm.objects.notes.read||
|crm.objects.orders.read||
|crm.objects.orders.write||
|crm.objects.owners.read||
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
|crm.pipelines.approval.read||
|crm.pipelines.orders.read||
|crm.pipelines.orders.write||
|crm.schemas.appointments.read||
|crm.schemas.appointments.write||
|crm.schemas.calls.read||
|crm.schemas.calls.write||
|crm.schemas.carts.read||
|crm.schemas.carts.write||
|crm.schemas.commercepayments.read||
|crm.schemas.commercepayments.write||
|crm.schemas.companies.read||
|crm.schemas.companies.write||
|crm.schemas.contacts.read||
|crm.schemas.contacts.write||
|crm.schemas.courses.read||
|crm.schemas.courses.write||
|crm.schemas.custom.read||
|crm.schemas.custom.write||
|crm.schemas.deals.read||
|crm.schemas.deals.write||
|crm.schemas.emails.read||
|crm.schemas.emails.write||
|crm.schemas.invoices.read||
|crm.schemas.invoices.write||
|crm.schemas.line_items.read||
|crm.schemas.listings.read||
|crm.schemas.listings.write||
|crm.schemas.meetings.read||
|crm.schemas.meetings.write||
|crm.schemas.notes.read||
|crm.schemas.notes.write||
|crm.schemas.orders.read||
|crm.schemas.orders.write||
|crm.schemas.projects.read||
|crm.schemas.quotes.read||
|crm.schemas.quotes.write||
|crm.schemas.services.read||
|crm.schemas.services.write||
|crm.schemas.subscriptions.read||
|crm.schemas.subscriptions.write||
|crm.schemas.tasks.read||
|crm.schemas.tasks.write||
|e-commerce||
|media_bridge.read||
|tickets.highly_sensitive.v2||
|tickets.sensitive.v2||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="properties-basic">Basic</h1>

## Read all properties

<a id="opIdget-/crm/properties/2026-09/{objectType}_/crm/properties/2025-09/{objectType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/properties/2026-09/{objectType}`

Read all existing properties for the specified object type and HubSpot account.

<h3 id="read-all-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of CRM object for which properties are being retrieved, such as 'contacts', 'companies', etc.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|dataSensitivity|query|string|false|Filter properties based on data sensitivity level. Valid values are 'non_sensitive', 'sensitive', and 'highly_sensitive'. Defaults to 'non_sensitive'.|
|locale|query|string|false|Specify the locale to retrieve properties in a particular language or regional format.|
|properties|query|string|false|A comma-separated list of property names to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-all-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePropertyNoPaging](#schemacollectionresponsepropertynopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Create a property

<a id="opIdpost-/crm/properties/2026-09/{objectType}_/crm/properties/2025-09/{objectType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/properties/2026-09/{objectType}`

Create and return a copy of a new property for the specified object type.

> Body parameter

```json
null
```

<h3 id="create-a-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of object for which the property is being created, such as contacts, companies, or deals.|
|body|body|[PropertyCreate](#schemapropertycreate)|true|none|
|» calculationFormula|body|string|false|Represents a formula that is used to compute a calculated property.|
|» currencyPropertyName|body|string|false|A string representing the name of the currency property.|
|» dataSensitivity|body|string|false|Indicates the sensitivity level of the property, with options: highly_sensitive, non_sensitive, or sensitive.|
|» description|body|string|false|A description of the property that will be shown as help text in HubSpot.|
|» displayOrder|body|integer(int32)|false|Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property to be displayed after any positive values.|
|» externalOptions|body|boolean|false|Applicable only for 'enumeration' type properties.  Should be set to true in conjunction with a 'referencedObjectType' of 'OWNER'.  Otherwise false.|
|» fieldType|body|string|true|Controls how the property appears in HubSpot.|
|» formField|body|boolean|false|Whether or not the property can be used in a HubSpot form.|
|» groupName|body|string|true|The name of the property group the property belongs to.|
|» hasUniqueValue|body|boolean|false|Whether or not the property's value must be unique. Once set, this can't be changed.|
|» hidden|body|boolean|false|If true, the property won't be visible and can't be used in HubSpot.|
|» label|body|string|true|A human-readable property label that will be shown in HubSpot.|
|» name|body|string|true|The internal property name, which must be used when referencing the property via the API.|
|» numberDisplayHint|body|string|false|A string providing a hint on how to display numbers. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', 'probability'.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|A list of valid options for the property. This field is required for enumerated properties.|
|» referencedObjectType|body|string|false|Should be set to 'OWNER' when 'externalOptions' is true, which causes the property to dynamically pull option values from the current HubSpot users.|
|» showCurrencySymbol|body|boolean|false|A boolean indicating whether to show the currency symbol for currency fields.|
|» textDisplayHint|body|string|false|A string providing a hint on how to display text. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', 'postal_code'.|
|» type|body|string|true|The data type of the property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataSensitivity|highly_sensitive|
|» dataSensitivity|non_sensitive|
|» dataSensitivity|sensitive|
|» fieldType|booleancheckbox|
|» fieldType|calculation_equation|
|» fieldType|checkbox|
|» fieldType|date|
|» fieldType|file|
|» fieldType|html|
|» fieldType|number|
|» fieldType|phonenumber|
|» fieldType|radio|
|» fieldType|select|
|» fieldType|text|
|» fieldType|textarea|
|» numberDisplayHint|currency|
|» numberDisplayHint|duration|
|» numberDisplayHint|formatted|
|» numberDisplayHint|percentage|
|» numberDisplayHint|probability|
|» numberDisplayHint|unformatted|
|» textDisplayHint|domain_name|
|» textDisplayHint|email|
|» textDisplayHint|ip_address|
|» textDisplayHint|multi_line|
|» textDisplayHint|phone_number|
|» textDisplayHint|physical_address|
|» textDisplayHint|postal_code|
|» textDisplayHint|unformatted_single_line|
|» type|bool|
|» type|date|
|» type|datetime|
|» type|enumeration|
|» type|number|
|» type|phone_number|
|» type|string|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Read all property groups

<a id="opIdget-/crm/properties/2026-09/{objectType}/groups_/crm/properties/2025-09/{objectType}/groups"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/groups' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/properties/2026-09/{objectType}/groups`

Read all existing property groups for the specified object type and HubSpot account.

<h3 id="read-all-property-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of CRM object for which to retrieve property groups, such as 'contacts' or 'deals'.|
|locale|query|string|false|The language locale to use for property group labels. This can help in displaying labels in the preferred language.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-all-property-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePropertyGroupNoPaging](#schemacollectionresponsepropertygroupnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Create a property group

<a id="opIdpost-/crm/properties/2026-09/{objectType}/groups_/crm/properties/2025-09/{objectType}/groups"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/groups' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/properties/2026-09/{objectType}/groups`

Create and return a copy of a new property group.

> Body parameter

```json
null
```

<h3 id="create-a-property-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of object for which the property group is being created, such as contacts, companies, or deals.|
|body|body|[PropertyGroupCreate](#schemapropertygroupcreate)|true|none|
|» displayOrder|body|integer(int32)|false|Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.|
|» label|body|string|true|A human-readable label that will be shown in HubSpot.|
|» name|body|string|true|The internal property group name, which must be used when referencing the property group via the API.|

> Example responses

> 201 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-a-property-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URL of the newly created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Read a property group

<a id="opIdget-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/groups/{groupName}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/properties/2026-09/{objectType}/groups/{groupName}`

Read a property group identified by {groupName}.

<h3 id="read-a-property-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupName|path|string|true|The name of the property group to retrieve details for.|
|objectType|path|string|true|The type of CRM object for which the property group is being retrieved, such as contacts or deals.|
|locale|query|string|false|The language locale to use for the response. This can affect the language of the labels and descriptions returned.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-a-property-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Archive a property group

<a id="opIddelete-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/groups/{groupName}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/properties/2026-09/{objectType}/groups/{groupName}`

Move a property group identified by {groupName} to the recycling bin.

<h3 id="archive-a-property-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupName|path|string|true|The unique name of the property group to be deleted.|
|objectType|path|string|true|The type of object for which the property group is defined, such as contacts, companies, or deals.|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-property-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Update a property group

<a id="opIdpatch-/crm/properties/2026-09/{objectType}/groups/{groupName}_/crm/properties/2025-09/{objectType}/groups/{groupName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/groups/{groupName}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/properties/2026-09/{objectType}/groups/{groupName}`

Perform a partial update of a property group identified by {groupName}. Provided fields will be overwritten.

> Body parameter

```json
null
```

<h3 id="update-a-property-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|groupName|path|string|true|The name of the property group to update.|
|objectType|path|string|true|The type of object for which the property group is being updated, such as contacts, companies, or deals.|
|body|body|[PropertyGroupUpdate](#schemapropertygroupupdate)|true|none|
|» displayOrder|body|integer(int32)|false|Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.|
|» label|body|string|false|A human-readable label that will be shown in HubSpot.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-property-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PropertyGroup](#schemapropertygroup)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Read a property

<a id="opIdget-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/{propertyName}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/properties/2026-09/{objectType}/{propertyName}`

Read a property identified by {propertyName}.

<h3 id="read-a-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of object the property belongs to, such as 'contacts' or 'deals'.|
|propertyName|path|string|true|The name of the property to retrieve.|
|archived|query|boolean|false|Whether to return only results that have been archived.|
|dataSensitivity|query|string|false|The level of data sensitivity to filter properties by. Valid values are 'non_sensitive', 'sensitive', and 'highly_sensitive'. Defaults to 'non_sensitive'.|
|locale|query|string|false|The locale to use for property labels and descriptions.|
|properties|query|string|false|A comma-separated list of property names to include in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-a-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Archive a property

<a id="opIddelete-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/{propertyName}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/properties/2026-09/{objectType}/{propertyName}`

Move a property identified by {propertyName} to the recycling bin.

<h3 id="archive-a-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of CRM object that the property belongs to, such as contacts, companies, or deals.|
|propertyName|path|string|true|The unique name of the property to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Update a property

<a id="opIdpatch-/crm/properties/2026-09/{objectType}/{propertyName}_/crm/properties/2025-09/{objectType}/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/{propertyName}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /crm/properties/2026-09/{objectType}/{propertyName}`

Perform a partial update of a property identified by { propertyName }. Provided fields will be overwritten.

> Body parameter

```json
null
```

<h3 id="update-a-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of object for which the property is being updated, such as contacts, companies, or deals.|
|propertyName|path|string|true|The unique name of the property to update.|
|body|body|[PropertyUpdate](#schemapropertyupdate)|true|none|
|» calculationFormula|body|string|false|Represents a formula that is used to compute a calculated property.|
|» currencyPropertyName|body|string|false|A string specifying the name of the property that holds the currency information, applicable when showCurrencySymbol is true.|
|» description|body|string|false|A description of the property that will be shown as help text in HubSpot.|
|» displayOrder|body|integer(int32)|false|Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.|
|» fieldType|body|string|false|Controls how the property appears in HubSpot.|
|» formField|body|boolean|false|Whether or not the property can be used in a HubSpot form.|
|» groupName|body|string|false|The name of the property group the property belongs to.|
|» hidden|body|boolean|false|If true, the property won't be visible and can't be used in HubSpot.|
|» label|body|string|false|A human-readable property label that will be shown in HubSpot.|
|» numberDisplayHint|body|string|false|A string providing a hint for displaying number values. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|» options|body|[[OptionInput](#schemaoptioninput)]|false|A list of valid options for the property.|
|» showCurrencySymbol|body|boolean|false|A boolean indicating whether to display a currency symbol for number fields formatted as currency.|
|» textDisplayHint|body|string|false|A string providing a hint for displaying text values. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|» type|body|string|false|The data type of the property.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fieldType|booleancheckbox|
|» fieldType|calculation_equation|
|» fieldType|checkbox|
|» fieldType|date|
|» fieldType|file|
|» fieldType|html|
|» fieldType|number|
|» fieldType|phonenumber|
|» fieldType|radio|
|» fieldType|select|
|» fieldType|text|
|» fieldType|textarea|
|» numberDisplayHint|currency|
|» numberDisplayHint|duration|
|» numberDisplayHint|formatted|
|» numberDisplayHint|percentage|
|» numberDisplayHint|probability|
|» numberDisplayHint|unformatted|
|» textDisplayHint|domain_name|
|» textDisplayHint|email|
|» textDisplayHint|ip_address|
|» textDisplayHint|multi_line|
|» textDisplayHint|phone_number|
|» textDisplayHint|physical_address|
|» textDisplayHint|postal_code|
|» textDisplayHint|unformatted_single_line|
|» type|bool|
|» type|date|
|» type|datetime|
|» type|enumeration|
|» type|number|
|» type|phone_number|
|» type|string|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[Property](#schemaproperty)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

<h1 id="properties-batch">Batch</h1>

## Archive a batch of properties

<a id="opIdpost-/crm/properties/2026-09/{objectType}/batch/archive_/crm/properties/2025-09/{objectType}/batch/archive"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/batch/archive' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/properties/2026-09/{objectType}/batch/archive`

Archive a provided list of properties. This method will return a 204 No Content response on success regardless of the initial state of the property (e.g. active, already archived, non-existent).

> Body parameter

```json
null
```

<h3 id="archive-a-batch-of-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of object whose properties are to be archived. This is a required parameter and identifies the specific object type within HubSpot.|
|body|body|[BatchInputPropertyName](#schemabatchinputpropertyname)|true|none|
|» inputs|body|[[PropertyName](#schemapropertyname)]|true|An array of property names to be processed in the batch operation. Each item in the array is a reference to a PropertyName object.|

> Example responses

> default Response

```json
null
```

<h3 id="archive-a-batch-of-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Create a batch of properties

<a id="opIdpost-/crm/properties/2026-09/{objectType}/batch/create_/crm/properties/2025-09/{objectType}/batch/create"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/batch/create' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/properties/2026-09/{objectType}/batch/create`

Create a batch of properties using the same rules as when creating an individual property.

> Body parameter

```json
null
```

<h3 id="create-a-batch-of-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of CRM object for which the properties are being created, such as contacts, companies, or deals.|
|body|body|[BatchInputPropertyCreate](#schemabatchinputpropertycreate)|true|none|
|» inputs|body|[[PropertyCreate](#schemapropertycreate)]|true|An array of PropertyCreate objects, each representing a property to be created. This field is required.|

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

<h3 id="create-a-batch-of-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseProperty](#schemabatchresponseproperty)|
|207|Multi-Status|multiple statuses|[BatchResponsePropertyWithErrors](#schemabatchresponsepropertywitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

## Read a batch of properties

<a id="opIdpost-/crm/properties/2026-09/{objectType}/batch/read_/crm/properties/2025-09/{objectType}/batch/read"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/properties/2026-09/{objectType}/batch/read' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/properties/2026-09/{objectType}/batch/read`

Read a provided list of properties.

> Body parameter

```json
null
```

<h3 id="read-a-batch-of-properties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectType|path|string|true|The type of CRM object for which properties are being retrieved. This is a required path parameter.|
|locale|query|string|false|A string specifying the locale to use for the response. This can be used to tailor the response to a specific language or region.|
|body|body|[BatchReadInputPropertyName](#schemabatchreadinputpropertyname)|true|none|
|» archived|body|boolean|true|Specifies whether the property is archived.|
|» dataSensitivity|body|string|true|Indicates the sensitivity level of the data, such as 'non_sensitive', 'sensitive', or 'highly_sensitive'.|
|» inputs|body|[[PropertyName](#schemapropertyname)]|true|An array of property names to be included in the batch read operation. Each item in the array is a reference to a PropertyName object.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataSensitivity|highly_sensitive|
|» dataSensitivity|non_sensitive|
|» dataSensitivity|sensitive|

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

<h3 id="read-a-batch-of-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseProperty](#schemabatchresponseproperty)|
|207|Multi-Status|multiple statuses|[BatchResponsePropertyWithErrors](#schemabatchresponsepropertywitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

# Schemas

<h2 id="tocS_BatchInputPropertyCreate">BatchInputPropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpropertycreate"></a>
<a id="schema_BatchInputPropertyCreate"></a>
<a id="tocSbatchinputpropertycreate"></a>
<a id="tocsbatchinputpropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PropertyCreate](#schemapropertycreate)]|true|none|An array of PropertyCreate objects, each representing a property to be created. This field is required.|

<h2 id="tocS_BatchInputPropertyName">BatchInputPropertyName</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpropertyname"></a>
<a id="schema_BatchInputPropertyName"></a>
<a id="tocSbatchinputpropertyname"></a>
<a id="tocsbatchinputpropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PropertyName](#schemapropertyname)]|true|none|An array of property names to be processed in the batch operation. Each item in the array is a reference to a PropertyName object.|

<h2 id="tocS_BatchReadInputPropertyName">BatchReadInputPropertyName</h2>
<!-- backwards compatibility -->
<a id="schemabatchreadinputpropertyname"></a>
<a id="schema_BatchReadInputPropertyName"></a>
<a id="tocSbatchreadinputpropertyname"></a>
<a id="tocsbatchreadinputpropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Specifies whether the property is archived.|
|dataSensitivity|string|true|none|Indicates the sensitivity level of the data, such as 'non_sensitive', 'sensitive', or 'highly_sensitive'.|
|inputs|[[PropertyName](#schemapropertyname)]|true|none|An array of property names to be included in the batch read operation. Each item in the array is a reference to a PropertyName object.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|

<h2 id="tocS_BatchResponseProperty">BatchResponseProperty</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseproperty"></a>
<a id="schema_BatchResponseProperty"></a>
<a id="tocSbatchresponseproperty"></a>
<a id="tocsbatchresponseproperty"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The timestamp indicating when the batch operation was completed.|
|links|object|false|none|A collection of URLs linking to documentation or resources related to the batch operation.|
|requestedAt|string(date-time)|false|none|The timestamp indicating when the batch operation was requested.|
|results|[[Property](#schemaproperty)]|true|none|An array of Property objects representing the results of the batch operation.|
|startedAt|string(date-time)|true|none|The timestamp indicating when the batch operation began processing.|
|status|string|true|none|The current status of the batch operation, with possible values being CANCELED, COMPLETE, PENDING, or PROCESSING.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponsePropertyWithErrors">BatchResponsePropertyWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponsepropertywitherrors"></a>
<a id="schema_BatchResponsePropertyWithErrors"></a>
<a id="tocSbatchresponsepropertywitherrors"></a>
<a id="tocsbatchresponsepropertywitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors encountered during the batch operation, each represented by a StandardError object.|
|links|object|false|none|A map of link names to their associated URIs, providing additional information or actions related to the batch operation.|
|numErrors|integer(int32)|false|none|The number of errors encountered during the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[Property](#schemaproperty)]|true|none|An array of properties that were processed in the batch operation.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CollectionResponsePropertyGroupNoPaging">CollectionResponsePropertyGroupNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepropertygroupnopaging"></a>
<a id="schema_CollectionResponsePropertyGroupNoPaging"></a>
<a id="tocScollectionresponsepropertygroupnopaging"></a>
<a id="tocscollectionresponsepropertygroupnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PropertyGroup](#schemapropertygroup)]|true|none|An array of property groups, where each group is represented by a PropertyGroup object.|

<h2 id="tocS_CollectionResponsePropertyNoPaging">CollectionResponsePropertyNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepropertynopaging"></a>
<a id="schema_CollectionResponsePropertyNoPaging"></a>
<a id="tocScollectionresponsepropertynopaging"></a>
<a id="tocscollectionresponsepropertynopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[Property](#schemaproperty)]|true|none|An array of Property objects, each representing a specific property associated with the object type. This array contains the details of each property such as name, label, type, and other metadata.|

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

<h2 id="tocS_Option">Option</h2>
<!-- backwards compatibility -->
<a id="schemaoption"></a>
<a id="schema_Option"></a>
<a id="tocSoption"></a>
<a id="tocsoption"></a>

```json
null
```

A HubSpot property option

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the option.|
|displayOrder|integer(int32)|false|none|Options are displayed in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.|
|hidden|boolean|true|none|Hidden options will not be displayed in HubSpot.|
|label|string|true|none|A human-readable option label that will be shown in HubSpot.|
|value|string|true|none|The internal value of the option, which must be used when setting the property value through the API.|

<h2 id="tocS_OptionInput">OptionInput</h2>
<!-- backwards compatibility -->
<a id="schemaoptioninput"></a>
<a id="schema_OptionInput"></a>
<a id="tocSoptioninput"></a>
<a id="tocsoptioninput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description of the option.|
|displayOrder|integer(int32)|true|none|Options are shown in order starting with the lowest positive integer value. Values of -1 will cause the option to be displayed after any positive values.|
|hidden|boolean|true|none|Hidden options won't be shown in HubSpot.|
|label|string|true|none|A human-readable option label that will be shown in HubSpot.|
|value|string|true|none|The internal value of the option, which must be used when setting the property value through the API.|

<h2 id="tocS_Property">Property</h2>
<!-- backwards compatibility -->
<a id="schemaproperty"></a>
<a id="schema_Property"></a>
<a id="tocSproperty"></a>
<a id="tocsproperty"></a>

```json
null
```

A HubSpot property

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Whether or not the property is archived.|
|archivedAt|string(date-time)|false|none|When the property was archived.|
|calculated|boolean|false|none|For default properties, true indicates that the property is calculated by a HubSpot process. It has no effect for custom properties.|
|calculationFormula|string|false|none|Represents a formula that is used to compute a calculated property.|
|createdAt|string(date-time)|false|none|The timestamp when the property was created, in ISO 8601 format.|
|createdUserId|string|false|none|The internal user ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.|
|currencyPropertyName|string|false|none|The name of the currency property associated with this property, if applicable.|
|dataSensitivity|string|false|none|The sensitivity level of the data. Valid values include 'non_sensitive', 'sensitive', and 'highly_sensitive'.|
|dateDisplayHint|string|false|none|Indicates how date values should be displayed, with options such as 'absolute', 'absolute_with_relative', 'time_since', or 'time_until'.|
|description|string|true|none|A description of the property that will be shown as help text in HubSpot.|
|displayOrder|integer(int32)|false|none|Properties are shown in order, starting with the lowest positive integer value.|
|externalOptions|boolean|false|none|For default properties, true indicates that the options are stored externally to the property settings.|
|fieldType|string|true|none|Controls how the property appears in HubSpot.|
|formField|boolean|false|none|Whether or not the property can be used in a HubSpot form.|
|groupName|string|true|none|The name of the property group the property belongs to.|
|hasUniqueValue|boolean|false|none|Whether or not the property's value must be unique. Once set, this can't be changed.|
|hidden|boolean|false|none|Whether or not the property will be hidden from the HubSpot UI. It's recommended this be set to false for custom properties.|
|hubspotDefined|boolean|false|none|This will be true for default object properties built into HubSpot.|
|label|string|true|none|A human-readable property label that will be shown in HubSpot.|
|modificationMetadata|[PropertyModificationMetadata](#schemapropertymodificationmetadata)|false|none|none|
|name|string|true|none|The internal property name, which must be used when referencing the property via the API.|
|numberDisplayHint|string|false|none|A hint for displaying number properties. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|options|[[Option](#schemaoption)]|true|none|A list of valid options for the property. This field is required for enumerated properties, but will be empty for other property types.|
|referencedObjectType|string|false|none|If this property is related to other object(s), they'll be listed here.|
|sensitiveDataCategories|[string]|false|none|An array of categories indicating the sensitivity of the data contained in the property.|
|showCurrencySymbol|boolean|false|none|Whether or not the property will display the currency symbol set in the account settings.|
|textDisplayHint|string|false|none|A hint for displaying text properties. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|type|string|true|none|The property data type.|
|updatedAt|string(date-time)|false|none|The timestamp when the property was last updated, in ISO 8601 format.|
|updatedUserId|string|false|none|The internal user ID of the user who updated the property in HubSpot. This field may not exist if the property was updated outside of HubSpot.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|dateDisplayHint|absolute|
|dateDisplayHint|absolute_with_relative|
|dateDisplayHint|time_since|
|dateDisplayHint|time_until|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|

<h2 id="tocS_PropertyCreate">PropertyCreate</h2>
<!-- backwards compatibility -->
<a id="schemapropertycreate"></a>
<a id="schema_PropertyCreate"></a>
<a id="tocSpropertycreate"></a>
<a id="tocspropertycreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationFormula|string|false|none|Represents a formula that is used to compute a calculated property.|
|currencyPropertyName|string|false|none|A string representing the name of the currency property.|
|dataSensitivity|string|false|none|Indicates the sensitivity level of the property, with options: highly_sensitive, non_sensitive, or sensitive.|
|description|string|false|none|A description of the property that will be shown as help text in HubSpot.|
|displayOrder|integer(int32)|false|none|Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property to be displayed after any positive values.|
|externalOptions|boolean|false|none|Applicable only for 'enumeration' type properties.  Should be set to true in conjunction with a 'referencedObjectType' of 'OWNER'.  Otherwise false.|
|fieldType|string|true|none|Controls how the property appears in HubSpot.|
|formField|boolean|false|none|Whether or not the property can be used in a HubSpot form.|
|groupName|string|true|none|The name of the property group the property belongs to.|
|hasUniqueValue|boolean|false|none|Whether or not the property's value must be unique. Once set, this can't be changed.|
|hidden|boolean|false|none|If true, the property won't be visible and can't be used in HubSpot.|
|label|string|true|none|A human-readable property label that will be shown in HubSpot.|
|name|string|true|none|The internal property name, which must be used when referencing the property via the API.|
|numberDisplayHint|string|false|none|A string providing a hint on how to display numbers. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', 'probability'.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|A list of valid options for the property. This field is required for enumerated properties.|
|referencedObjectType|string|false|none|Should be set to 'OWNER' when 'externalOptions' is true, which causes the property to dynamically pull option values from the current HubSpot users.|
|showCurrencySymbol|boolean|false|none|A boolean indicating whether to show the currency symbol for currency fields.|
|textDisplayHint|string|false|none|A string providing a hint on how to display text. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', 'postal_code'.|
|type|string|true|none|The data type of the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataSensitivity|highly_sensitive|
|dataSensitivity|non_sensitive|
|dataSensitivity|sensitive|
|fieldType|booleancheckbox|
|fieldType|calculation_equation|
|fieldType|checkbox|
|fieldType|date|
|fieldType|file|
|fieldType|html|
|fieldType|number|
|fieldType|phonenumber|
|fieldType|radio|
|fieldType|select|
|fieldType|text|
|fieldType|textarea|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|number|
|type|phone_number|
|type|string|

<h2 id="tocS_PropertyGroup">PropertyGroup</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroup"></a>
<a id="schema_PropertyGroup"></a>
<a id="tocSpropertygroup"></a>
<a id="tocspropertygroup"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|true|none|Indicates whether the property group is archived.|
|displayOrder|integer(int32)|false|none|Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.|
|label|string|true|none|A human-readable label that will be shown in HubSpot.|
|name|string|true|none|The internal property group name, which must be used when referencing the property group via the API.|

<h2 id="tocS_PropertyGroupCreate">PropertyGroupCreate</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroupcreate"></a>
<a id="schema_PropertyGroupCreate"></a>
<a id="tocSpropertygroupcreate"></a>
<a id="tocspropertygroupcreate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|false|none|Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.|
|label|string|true|none|A human-readable label that will be shown in HubSpot.|
|name|string|true|none|The internal property group name, which must be used when referencing the property group via the API.|

<h2 id="tocS_PropertyGroupUpdate">PropertyGroupUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapropertygroupupdate"></a>
<a id="schema_PropertyGroupUpdate"></a>
<a id="tocSpropertygroupupdate"></a>
<a id="tocspropertygroupupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayOrder|integer(int32)|false|none|Property groups are displayed in order starting with the lowest positive integer value. Values of -1 will cause the property group to be displayed after any positive values.|
|label|string|false|none|A human-readable label that will be shown in HubSpot.|

<h2 id="tocS_PropertyModificationMetadata">PropertyModificationMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapropertymodificationmetadata"></a>
<a id="schema_PropertyModificationMetadata"></a>
<a id="tocSpropertymodificationmetadata"></a>
<a id="tocspropertymodificationmetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archivable|boolean|true|none|Specifies whether the property can be archived.|
|readOnlyDefinition|boolean|true|none|Indicates whether the property's definition is read-only and cannot be modified.|
|readOnlyOptions|boolean|false|none|Indicates whether the property's options are read-only and cannot be modified.|
|readOnlyValue|boolean|true|none|Indicates whether the property's value is read-only and cannot be modified.|

<h2 id="tocS_PropertyName">PropertyName</h2>
<!-- backwards compatibility -->
<a id="schemapropertyname"></a>
<a id="schema_PropertyName"></a>
<a id="tocSpropertyname"></a>
<a id="tocspropertyname"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the property to read or modify.|

<h2 id="tocS_PropertyUpdate">PropertyUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapropertyupdate"></a>
<a id="schema_PropertyUpdate"></a>
<a id="tocSpropertyupdate"></a>
<a id="tocspropertyupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|calculationFormula|string|false|none|Represents a formula that is used to compute a calculated property.|
|currencyPropertyName|string|false|none|A string specifying the name of the property that holds the currency information, applicable when showCurrencySymbol is true.|
|description|string|false|none|A description of the property that will be shown as help text in HubSpot.|
|displayOrder|integer(int32)|false|none|Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.|
|fieldType|string|false|none|Controls how the property appears in HubSpot.|
|formField|boolean|false|none|Whether or not the property can be used in a HubSpot form.|
|groupName|string|false|none|The name of the property group the property belongs to.|
|hidden|boolean|false|none|If true, the property won't be visible and can't be used in HubSpot.|
|label|string|false|none|A human-readable property label that will be shown in HubSpot.|
|numberDisplayHint|string|false|none|A string providing a hint for displaying number values. Valid values include 'unformatted', 'formatted', 'currency', 'percentage', 'duration', and 'probability'.|
|options|[[OptionInput](#schemaoptioninput)]|false|none|A list of valid options for the property.|
|showCurrencySymbol|boolean|false|none|A boolean indicating whether to display a currency symbol for number fields formatted as currency.|
|textDisplayHint|string|false|none|A string providing a hint for displaying text values. Valid values include 'unformatted_single_line', 'multi_line', 'email', 'phone_number', 'domain_name', 'ip_address', 'physical_address', and 'postal_code'.|
|type|string|false|none|The data type of the property.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldType|booleancheckbox|
|fieldType|calculation_equation|
|fieldType|checkbox|
|fieldType|date|
|fieldType|file|
|fieldType|html|
|fieldType|number|
|fieldType|phonenumber|
|fieldType|radio|
|fieldType|select|
|fieldType|text|
|fieldType|textarea|
|numberDisplayHint|currency|
|numberDisplayHint|duration|
|numberDisplayHint|formatted|
|numberDisplayHint|percentage|
|numberDisplayHint|probability|
|numberDisplayHint|unformatted|
|textDisplayHint|domain_name|
|textDisplayHint|email|
|textDisplayHint|ip_address|
|textDisplayHint|multi_line|
|textDisplayHint|phone_number|
|textDisplayHint|physical_address|
|textDisplayHint|postal_code|
|textDisplayHint|unformatted_single_line|
|type|bool|
|type|date|
|type|datetime|
|type|enumeration|
|type|number|
|type|phone_number|
|type|string|

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
