<h1 id="crm-property-validations">CRM Property Validations v2026-09</h1>

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

<h1 id="crm-property-validations-basic">Basic</h1>

## Read all property validation rules for an object

<a id="opIdget-/crm/property-validations/2026-09/{objectTypeId}_/crm/v3/property-validations/{objectTypeId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/property-validations/2026-09/{objectTypeId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/property-validations/2026-09/{objectTypeId}`

Read all properties with validation rules for a given object.

<h3 id="read-all-property-validation-rules-for-an-object-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which to retrieve property validation rules.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-all-property-validation-rules-for-an-object-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicPropertyValidationRuleMapNoPaging](#schemacollectionresponsepublicpropertyvalidationrulemapnopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Read validation rules for a property

<a id="opIdget-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}_/crm/v3/property-validations/{objectTypeId}/{propertyName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/property-validations/2026-09/{objectTypeId}/{propertyName}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/property-validations/2026-09/{objectTypeId}/{propertyName}`

Read a property's validation rules identified by {propertyName}.

<h3 id="read-validation-rules-for-a-property-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the property validation rules are being retrieved.|
|propertyName|path|string|true|The name of the property for which validation rules are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="read-validation-rules-for-a-property-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponsePublicPropertyValidationRuleNoPaging](#schemacollectionresponsepublicpropertyvalidationrulenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Retrieve a validation rule for a specific property and rule type, providing details on how property values should be formatted.

<a id="opIdget-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}_/crm/v3/property-validations/{objectTypeId}/{propertyName}/rule-type/{ruleType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}`

Retrieve a specific validation rule for a property identified by its name and rule type.

<h3 id="retrieve-a-validation-rule-for-a-specific-property-and-rule-type-providing-details-on-how-property-values-should-be-formatted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type for which the property validation rule is being retrieved.|
|propertyName|path|string|true|The name of the property for which the validation rule is being retrieved.|
|ruleType|path|string|true|The type of validation rule to retrieve. Valid values include FORMAT, ALPHANUMERIC, MAX_LENGTH, MIN_LENGTH, MIN_NUMBER, MAX_NUMBER, START_DATE, END_DATE, SPECIAL_CHARACTERS, WHITESPACE, DECIMAL, BEFORE_DURATION, AFTER_DURATION, DAYS_OF_WEEK, REGEX, START_DATETIME, END_DATETIME, BEFORE_DATETIME_DURATION, AFTER_DATETIME_DURATION, PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE, URL, URL_ALLOWED_DOMAINS, URL_BLOCKED_DOMAINS, EMAIL, EMAIL_ALLOWED_DOMAINS, EMAIL_BLOCKED_DOMAINS, DOMAIN.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ruleType|AFTER_DATETIME_DURATION|
|ruleType|AFTER_DURATION|
|ruleType|ALPHANUMERIC|
|ruleType|BEFORE_DATETIME_DURATION|
|ruleType|BEFORE_DURATION|
|ruleType|DAYS_OF_WEEK|
|ruleType|DECIMAL|
|ruleType|DOMAIN|
|ruleType|EMAIL|
|ruleType|EMAIL_ALLOWED_DOMAINS|
|ruleType|EMAIL_BLOCKED_DOMAINS|
|ruleType|END_DATE|
|ruleType|END_DATETIME|
|ruleType|FORMAT|
|ruleType|MAX_LENGTH|
|ruleType|MAX_NUMBER|
|ruleType|MIN_LENGTH|
|ruleType|MIN_NUMBER|
|ruleType|PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE|
|ruleType|REGEX|
|ruleType|SPECIAL_CHARACTERS|
|ruleType|START_DATE|
|ruleType|START_DATETIME|
|ruleType|URL|
|ruleType|URL_ALLOWED_DOMAINS|
|ruleType|URL_BLOCKED_DOMAINS|
|ruleType|WHITESPACE|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-a-validation-rule-for-a-specific-property-and-rule-type-providing-details-on-how-property-values-should-be-formatted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicPropertyValidationRule](#schemapublicpropertyvalidationrule)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.objects.owners.read ), oauth2 ( Scopes: crm.objects.deals.read ), oauth2 ( Scopes: crm.objects.subscriptions.read ), oauth2 ( Scopes: crm.objects.services.read ), oauth2 ( Scopes: crm.objects.tickets.sensitive.read ), oauth2 ( Scopes: crm.objects.listings.write ), oauth2 ( Scopes: crm.objects.custom.read ), oauth2 ( Scopes: crm.objects.tasks.read ), oauth2 ( Scopes: crm.objects.custom.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.schemas.quotes.read ), oauth2 ( Scopes: crm.objects.companies.read ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.read.v2 ), oauth2 ( Scopes: media_bridge.read ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.calls.read ), oauth2 ( Scopes: crm.objects.meetings.read ), oauth2 ( Scopes: crm.schemas.services.read ), oauth2 ( Scopes: crm.schemas.line_items.read ), oauth2 ( Scopes: crm.schemas.subscriptions.read ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.write ), oauth2 ( Scopes: crm.schemas.companies.read ), oauth2 ( Scopes: crm.objects.products.write ), oauth2 ( Scopes: crm.objects.feedback_submissions.read ), oauth2 ( Scopes: crm.objects.services.write ), oauth2 ( Scopes: crm.objects.subscriptions.write ), oauth2 ( Scopes: crm.schemas.calls.read ), oauth2 ( Scopes: crm.schemas.meetings.read ), oauth2 ( Scopes: crm.objects.contacts.read ), oauth2 ( Scopes: crm.objects.invoices.read ), oauth2 ( Scopes: crm.schemas.orders.read ), oauth2 ( Scopes: crm.schemas.emails.read ), oauth2 ( Scopes: crm.schemas.deals.read ), oauth2 ( Scopes: crm.objects.deals.write ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.notes.read ), oauth2 ( Scopes: crm.objects.projects.read ), oauth2 ( Scopes: crm.objects.companies.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.custom.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.goals.write ), oauth2 ( Scopes: crm.objects.line_items.write ), oauth2 ( Scopes: crm.objects.contacts.write ), oauth2 ( Scopes: crm.objects.goals.read ), oauth2 ( Scopes: crm.objects.line_items.read ), oauth2 ( Scopes: crm.objects.projects.sensitive.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: crm.schemas.contacts.read ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.objects.leads.read ), oauth2 ( Scopes: crm.objects.leads.write ), oauth2 ( Scopes: crm.schemas.tasks.read ), oauth2 ( Scopes: crm.objects.emails.read ), oauth2 ( Scopes: crm.schemas.invoices.read ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: crm.objects.notes.read ), oauth2 ( Scopes: crm.objects.courses.read ), oauth2 ( Scopes: crm.objects.marketing_events.read ), oauth2 ( Scopes: crm.pipelines.orders.read ), oauth2 ( Scopes: crm.objects.contacts.sensitive.read.v2 ), oauth2 ( Scopes: crm.schemas.projects.read ), oauth2 ( Scopes: crm.objects.orders.read ), oauth2 ( Scopes: automation ), oauth2 ( Scopes: crm.objects.companies.write ), oauth2 ( Scopes: crm.schemas.carts.read ), oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.schemas.listings.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.contacts.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.commercepayments.write ), oauth2 ( Scopes: crm.objects.invoices.write ), oauth2 ( Scopes: crm.objects.custom.sensitive.read.v2 ), oauth2 ( Scopes: crm.objects.users.read ), oauth2 ( Scopes: crm.objects.appointments.write ), oauth2 ( Scopes: crm.objects.deals.sensitive.write.v2 ), oauth2 ( Scopes: cpq.quotes.read ), oauth2 ( Scopes: crm.objects.appointments.sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.highly_sensitive.read ), oauth2 ( Scopes: crm.schemas.appointments.read ), oauth2 ( Scopes: crm.objects.custom.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: crm.objects.appointments.read ), oauth2 ( Scopes: crm.schemas.courses.read ), oauth2 ( Scopes: crm.objects.companies.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.deals.highly_sensitive.write.v2 ), oauth2 ( Scopes: crm.objects.projects.sensitive.read ), oauth2 ( Scopes: crm.pipelines.approval.read ), oauth2 ( Scopes: crm.objects.projects.write ), oauth2 ( Scopes: crm.objects.marketing_events.write ), oauth2 ( Scopes: crm.schemas.custom.read ), oauth2 ( Scopes: crm.objects.carts.read ), oauth2 ( Scopes: crm.objects.courses.write ), oauth2 ( Scopes: crm.schemas.commercepayments.read ), oauth2 ( Scopes: crm.objects.listings.read )
</aside>

## Update a validation rule for a specific property and rule type, allowing customization of property value constraints.

<a id="opIdput-/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}_/crm/v3/property-validations/{objectTypeId}/{propertyName}/rule-type/{ruleType}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/property-validations/2026-09/{objectTypeId}/{propertyName}/rule-type/{ruleType}`

Update a specific validation rule for a property identified by its name and rule type.

> Body parameter

```json
null
```

<h3 id="update-a-validation-rule-for-a-specific-property-and-rule-type-allowing-customization-of-property-value-constraints-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the CRM object type to which the property belongs.|
|propertyName|path|string|true|The name of the property for which the validation rule is being updated.|
|ruleType|path|string|true|The type of validation rule to update. Valid values include FORMAT, ALPHANUMERIC, MAX_LENGTH, MIN_LENGTH, MIN_NUMBER, MAX_NUMBER, START_DATE, END_DATE, SPECIAL_CHARACTERS, WHITESPACE, DECIMAL, BEFORE_DURATION, AFTER_DURATION, DAYS_OF_WEEK, REGEX, START_DATETIME, END_DATETIME, BEFORE_DATETIME_DURATION, AFTER_DATETIME_DURATION, PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE, URL, URL_ALLOWED_DOMAINS, URL_BLOCKED_DOMAINS, EMAIL, EMAIL_ALLOWED_DOMAINS, EMAIL_BLOCKED_DOMAINS, DOMAIN.|
|body|body|[PublicPropertyValidationRuleUpdate](#schemapublicpropertyvalidationruleupdate)|true|none|
|» ruleArguments|body|[string]|true|A list of arguments that define the constraints for the validation rule.|
|» shouldApplyNormalization|body|boolean|false|A boolean indicating whether normalization should be applied to the property value as part of the validation process.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ruleType|AFTER_DATETIME_DURATION|
|ruleType|AFTER_DURATION|
|ruleType|ALPHANUMERIC|
|ruleType|BEFORE_DATETIME_DURATION|
|ruleType|BEFORE_DURATION|
|ruleType|DAYS_OF_WEEK|
|ruleType|DECIMAL|
|ruleType|DOMAIN|
|ruleType|EMAIL|
|ruleType|EMAIL_ALLOWED_DOMAINS|
|ruleType|EMAIL_BLOCKED_DOMAINS|
|ruleType|END_DATE|
|ruleType|END_DATETIME|
|ruleType|FORMAT|
|ruleType|MAX_LENGTH|
|ruleType|MAX_NUMBER|
|ruleType|MIN_LENGTH|
|ruleType|MIN_NUMBER|
|ruleType|PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE|
|ruleType|REGEX|
|ruleType|SPECIAL_CHARACTERS|
|ruleType|START_DATE|
|ruleType|START_DATETIME|
|ruleType|URL|
|ruleType|URL_ALLOWED_DOMAINS|
|ruleType|URL_BLOCKED_DOMAINS|
|ruleType|WHITESPACE|

> Example responses

> default Response

```json
null
```

<h3 id="update-a-validation-rule-for-a-specific-property-and-rule-type-allowing-customization-of-property-value-constraints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.schemas.quotes.write ), oauth2 ( Scopes: crm.schemas.invoices.write ), oauth2 ( Scopes: crm.schemas.orders.write ), oauth2 ( Scopes: crm.schemas.commercepayments.write ), oauth2 ( Scopes: crm.schemas.courses.write ), oauth2 ( Scopes: tickets.sensitive.v2 ), oauth2 ( Scopes: e-commerce ), oauth2 ( Scopes: crm.schemas.appointments.write ), oauth2 ( Scopes: crm.schemas.tasks.write ), oauth2 ( Scopes: crm.schemas.contacts.write ), oauth2 ( Scopes: crm.schemas.carts.write ), oauth2 ( Scopes: crm.schemas.companies.write ), oauth2 ( Scopes: crm.objects.tickets.sensitive.write ), oauth2 ( Scopes: crm.schemas.subscriptions.write ), oauth2 ( Scopes: crm.schemas.emails.write ), oauth2 ( Scopes: crm.schemas.custom.write ), oauth2 ( Scopes: crm.schemas.listings.write ), oauth2 ( Scopes: crm.pipelines.orders.write ), oauth2 ( Scopes: crm.objects.users.write ), oauth2 ( Scopes: tickets.highly_sensitive.v2 ), oauth2 ( Scopes: crm.schemas.services.write ), oauth2 ( Scopes: crm.schemas.notes.write ), oauth2 ( Scopes: crm.objects.orders.write ), oauth2 ( Scopes: crm.schemas.meetings.write ), oauth2 ( Scopes: crm.schemas.deals.write ), oauth2 ( Scopes: crm.schemas.calls.write ), oauth2 ( Scopes: crm.objects.carts.write ), oauth2 ( Scopes: crm.objects.tickets.highly_sensitive.write )
</aside>

# Schemas

<h2 id="tocS_CollectionResponsePublicPropertyValidationRuleMapNoPaging">CollectionResponsePublicPropertyValidationRuleMapNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicpropertyvalidationrulemapnopaging"></a>
<a id="schema_CollectionResponsePublicPropertyValidationRuleMapNoPaging"></a>
<a id="tocScollectionresponsepublicpropertyvalidationrulemapnopaging"></a>
<a id="tocscollectionresponsepublicpropertyvalidationrulemapnopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicPropertyValidationRuleMap](#schemapublicpropertyvalidationrulemap)]|true|none|Collection of properties with their validation rules. Each item maps a property name to its configured validation rules for the specified object type.|

<h2 id="tocS_CollectionResponsePublicPropertyValidationRuleNoPaging">CollectionResponsePublicPropertyValidationRuleNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsepublicpropertyvalidationrulenopaging"></a>
<a id="schema_CollectionResponsePublicPropertyValidationRuleNoPaging"></a>
<a id="tocScollectionresponsepublicpropertyvalidationrulenopaging"></a>
<a id="tocscollectionresponsepublicpropertyvalidationrulenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[PublicPropertyValidationRule](#schemapublicpropertyvalidationrule)]|true|none|Collection of validation rules configured for the specified property. Each rule defines a constraint that property values must satisfy (e.g., format requirements, length limits, allowed values).|

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

<h2 id="tocS_PublicPropertyValidationRule">PublicPropertyValidationRule</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyvalidationrule"></a>
<a id="schema_PublicPropertyValidationRule"></a>
<a id="tocSpublicpropertyvalidationrule"></a>
<a id="tocspublicpropertyvalidationrule"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleArguments|[string]|true|none|A list of arguments that define the specific conditions or parameters for the validation rule.|
|ruleType|string|true|none|The category of validation applied to the property, such as FORMAT, ALPHANUMERIC, or MAX_LENGTH.|
|shouldApplyNormalization|boolean|false|none|A boolean indicating whether normalization should be applied to the property value before validation.|

#### Enumerated Values

|Property|Value|
|---|---|
|ruleType|AFTER_DATETIME_DURATION|
|ruleType|AFTER_DURATION|
|ruleType|ALPHANUMERIC|
|ruleType|BEFORE_DATETIME_DURATION|
|ruleType|BEFORE_DURATION|
|ruleType|DAYS_OF_WEEK|
|ruleType|DECIMAL|
|ruleType|DOMAIN|
|ruleType|EMAIL|
|ruleType|EMAIL_ALLOWED_DOMAINS|
|ruleType|EMAIL_BLOCKED_DOMAINS|
|ruleType|END_DATE|
|ruleType|END_DATETIME|
|ruleType|FORMAT|
|ruleType|MAX_LENGTH|
|ruleType|MAX_NUMBER|
|ruleType|MIN_LENGTH|
|ruleType|MIN_NUMBER|
|ruleType|PHONE_NUMBER_WITH_EXPLICIT_COUNTRY_CODE|
|ruleType|REGEX|
|ruleType|SPECIAL_CHARACTERS|
|ruleType|START_DATE|
|ruleType|START_DATETIME|
|ruleType|URL|
|ruleType|URL_ALLOWED_DOMAINS|
|ruleType|URL_BLOCKED_DOMAINS|
|ruleType|WHITESPACE|

<h2 id="tocS_PublicPropertyValidationRuleMap">PublicPropertyValidationRuleMap</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyvalidationrulemap"></a>
<a id="schema_PublicPropertyValidationRuleMap"></a>
<a id="tocSpublicpropertyvalidationrulemap"></a>
<a id="tocspublicpropertyvalidationrulemap"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|propertyName|string|true|none|The name of the property for which validation rules are defined.|
|propertyValidationRules|[[PublicPropertyValidationRule](#schemapublicpropertyvalidationrule)]|true|none|A list of validation rules applicable to the property.|

<h2 id="tocS_PublicPropertyValidationRuleUpdate">PublicPropertyValidationRuleUpdate</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyvalidationruleupdate"></a>
<a id="schema_PublicPropertyValidationRuleUpdate"></a>
<a id="tocSpublicpropertyvalidationruleupdate"></a>
<a id="tocspublicpropertyvalidationruleupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ruleArguments|[string]|true|none|A list of arguments that define the constraints for the validation rule.|
|shouldApplyNormalization|boolean|false|none|A boolean indicating whether normalization should be applied to the property value as part of the validation process.|
