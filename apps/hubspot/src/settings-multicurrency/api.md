<h1 id="settings-multicurrency">Settings Multicurrency v2026-09</h1>

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
|cpq.quotes.read||
|cpq.quotes.write||
|crm.objects.quotes.read||
|crm.objects.quotes.write||
|settings.currencies.read||
|settings.currencies.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="settings-multicurrency-basic">Basic</h1>

## Get all currency codes

<a id="opIdget-/settings/currencies/2026-09/codes"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/codes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/codes`

Retrieve a list of all available currency codes and their names.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-currency-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseCurrencyCodeInfoNoPaging](#schemacollectionresponsecurrencycodeinfonopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Get the company currency

<a id="opIdget-/settings/currencies/2026-09/company-currency"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/company-currency \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/company-currency`

Get the details for the company currency. The company currency is used in deal totals, reports, and the default currency for new deals.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-company-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CompanyCurrency](#schemacompanycurrency)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Set or update the company currency.

<a id="opIdput-/settings/currencies/2026-09/company-currency"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/company-currency \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /settings/currencies/2026-09/company-currency`

Set or update the primary company currency.

> Body parameter

```json
null
```

<h3 id="set-or-update-the-company-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CompanyCurrencyUpdateRequest](#schemacompanycurrencyupdaterequest)|true|none|
|» currencyCode|body|string|true|The three-letter code representing a specific currency (ex. USD).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currencyCode|AED|
|» currencyCode|AFN|
|» currencyCode|ALL|
|» currencyCode|AMD|
|» currencyCode|ANG|
|» currencyCode|AOA|
|» currencyCode|ARS|
|» currencyCode|AUD|
|» currencyCode|AWG|
|» currencyCode|AZN|
|» currencyCode|BAM|
|» currencyCode|BBD|
|» currencyCode|BDT|
|» currencyCode|BGN|
|» currencyCode|BHD|
|» currencyCode|BIF|
|» currencyCode|BMD|
|» currencyCode|BND|
|» currencyCode|BOB|
|» currencyCode|BOV|
|» currencyCode|BRL|
|» currencyCode|BSD|
|» currencyCode|BTN|
|» currencyCode|BWP|
|» currencyCode|BYN|
|» currencyCode|BZD|
|» currencyCode|CAD|
|» currencyCode|CDF|
|» currencyCode|CHE|
|» currencyCode|CHF|
|» currencyCode|CHW|
|» currencyCode|CLF|
|» currencyCode|CLP|
|» currencyCode|CNY|
|» currencyCode|COP|
|» currencyCode|COU|
|» currencyCode|CRC|
|» currencyCode|CUC|
|» currencyCode|CUP|
|» currencyCode|CVE|
|» currencyCode|CZK|
|» currencyCode|DJF|
|» currencyCode|DKK|
|» currencyCode|DOP|
|» currencyCode|DZD|
|» currencyCode|EGP|
|» currencyCode|ERN|
|» currencyCode|ETB|
|» currencyCode|EUR|
|» currencyCode|FJD|
|» currencyCode|FKP|
|» currencyCode|GBP|
|» currencyCode|GEL|
|» currencyCode|GHS|
|» currencyCode|GIP|
|» currencyCode|GMD|
|» currencyCode|GNF|
|» currencyCode|GTQ|
|» currencyCode|GYD|
|» currencyCode|HKD|
|» currencyCode|HNL|
|» currencyCode|HRK|
|» currencyCode|HTG|
|» currencyCode|HUF|
|» currencyCode|IDR|
|» currencyCode|ILS|
|» currencyCode|INR|
|» currencyCode|IQD|
|» currencyCode|IRR|
|» currencyCode|ISK|
|» currencyCode|JMD|
|» currencyCode|JOD|
|» currencyCode|JPY|
|» currencyCode|KES|
|» currencyCode|KGS|
|» currencyCode|KHR|
|» currencyCode|KMF|
|» currencyCode|KPW|
|» currencyCode|KRW|
|» currencyCode|KWD|
|» currencyCode|KYD|
|» currencyCode|KZT|
|» currencyCode|LAK|
|» currencyCode|LBP|
|» currencyCode|LKR|
|» currencyCode|LRD|
|» currencyCode|LSL|
|» currencyCode|LYD|
|» currencyCode|MAD|
|» currencyCode|MDL|
|» currencyCode|MGA|
|» currencyCode|MKD|
|» currencyCode|MMK|
|» currencyCode|MNT|
|» currencyCode|MOP|
|» currencyCode|MRU|
|» currencyCode|MUR|
|» currencyCode|MVR|
|» currencyCode|MWK|
|» currencyCode|MXN|
|» currencyCode|MXV|
|» currencyCode|MYR|
|» currencyCode|MZN|
|» currencyCode|NAD|
|» currencyCode|NGN|
|» currencyCode|NIO|
|» currencyCode|NOK|
|» currencyCode|NPR|
|» currencyCode|NZD|
|» currencyCode|OMR|
|» currencyCode|PAB|
|» currencyCode|PEN|
|» currencyCode|PGK|
|» currencyCode|PHP|
|» currencyCode|PKR|
|» currencyCode|PLN|
|» currencyCode|PYG|
|» currencyCode|QAR|
|» currencyCode|RON|
|» currencyCode|RSD|
|» currencyCode|RUB|
|» currencyCode|RWF|
|» currencyCode|SAR|
|» currencyCode|SBD|
|» currencyCode|SCR|
|» currencyCode|SDG|
|» currencyCode|SEK|
|» currencyCode|SGD|
|» currencyCode|SHP|
|» currencyCode|SLL|
|» currencyCode|SOS|
|» currencyCode|SRD|
|» currencyCode|SSP|
|» currencyCode|STN|
|» currencyCode|SVC|
|» currencyCode|SYP|
|» currencyCode|SZL|
|» currencyCode|THB|
|» currencyCode|TJS|
|» currencyCode|TMT|
|» currencyCode|TND|
|» currencyCode|TOP|
|» currencyCode|TRY|
|» currencyCode|TTD|
|» currencyCode|TWD|
|» currencyCode|TZS|
|» currencyCode|UAH|
|» currencyCode|UGX|
|» currencyCode|USD|
|» currencyCode|USN|
|» currencyCode|UYI|
|» currencyCode|UYU|
|» currencyCode|UZS|
|» currencyCode|VEF|
|» currencyCode|VND|
|» currencyCode|VUV|
|» currencyCode|WST|
|» currencyCode|XAF|
|» currencyCode|XAG|
|» currencyCode|XAU|
|» currencyCode|XBA|
|» currencyCode|XBB|
|» currencyCode|XBC|
|» currencyCode|XBD|
|» currencyCode|XCD|
|» currencyCode|XDR|
|» currencyCode|XOF|
|» currencyCode|XPD|
|» currencyCode|XPF|
|» currencyCode|XPT|
|» currencyCode|XSU|
|» currencyCode|XUA|
|» currencyCode|YER|
|» currencyCode|ZAR|
|» currencyCode|ZMW|
|» currencyCode|ZWL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="set-or-update-the-company-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CompanyCurrency](#schemacompanycurrency)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

<h1 id="settings-multicurrency-batch">Batch</h1>

## Create multiple exchange rates

<a id="opIdpost-/settings/currencies/2026-09/exchange-rates/batch/create"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/batch/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/exchange-rates/batch/create`

Create multiple exchange rates in a single request.

> Body parameter

```json
null
```

<h3 id="create-multiple-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputExchangeRateCreateRequest](#schemabatchinputexchangeratecreaterequest)|true|none|
|» inputs|body|[[ExchangeRateCreateRequest](#schemaexchangeratecreaterequest)]|true|An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. This includes properties like fromCurrencyCode, conversionRate, and effectiveAt.|

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

<h3 id="create-multiple-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|successful operation|[BatchResponseExchangeRate](#schemabatchresponseexchangerate)|
|207|Multi-Status|multiple statuses|[BatchResponseExchangeRateWithErrors](#schemabatchresponseexchangeratewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

## Retrieve multiple rates

<a id="opIdpost-/settings/currencies/2026-09/exchange-rates/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/exchange-rates/batch/read`

Retrieve the details of multiple exchange rates in a single request, specified by their IDs.

> Body parameter

```json
null
```

<h3 id="retrieve-multiple-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputPublicObjectId](#schemabatchinputpublicobjectid)|true|none|
|» inputs|body|[[PublicObjectId](#schemapublicobjectid)]|true|An array of PublicObjectId objects. Each object contains an ID string representing a unique identifier for a public object. This property is required.|

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

<h3 id="retrieve-multiple-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseExchangeRate](#schemabatchresponseexchangerate)|
|207|Multi-Status|multiple statuses|[BatchResponseExchangeRateWithErrors](#schemabatchresponseexchangeratewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Update multiple exchange rates

<a id="opIdpost-/settings/currencies/2026-09/exchange-rates/batch/update"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/batch/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/exchange-rates/batch/update`

Update the conversion rates for multiple exchange rates in a batch operation.

> Body parameter

```json
null
```

<h3 id="update-multiple-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputExchangeRateUpdateRequest](#schemabatchinputexchangerateupdaterequest)|true|none|
|» inputs|body|[[ExchangeRateUpdateRequest](#schemaexchangerateupdaterequest)]|true|An array of ExchangeRateUpdateRequest objects, each representing an individual exchange rate update. This array is required and contains the details of each exchange rate to be updated, including the conversion rate and the effective date.|

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

<h3 id="update-multiple-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseExchangeRate](#schemabatchresponseexchangerate)|
|207|Multi-Status|multiple statuses|[BatchResponseExchangeRateWithErrors](#schemabatchresponseexchangeratewitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

<h1 id="settings-multicurrency-central-fx-rates">Central FX rates</h1>

## Add a new currency with central exchange rates.

<a id="opIdpost-/settings/currencies/2026-09/central-fx-rates/add-currency_/settings/v3/currencies/central-fx-rates/add-currency"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/central-fx-rates/add-currency \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/central-fx-rates/add-currency`

Create a new currency with central exchange rates in the portal. Unsupported currencies cannot be added here.

> Body parameter

```json
null
```

<h3 id="add-a-new-currency-with-central-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CurrencyCreateRequest](#schemacurrencycreaterequest)|true|none|
|» currencyCode|body|string|true|The currency code being added to the HubSpot portal for use with central exchange rates.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» currencyCode|AED|
|» currencyCode|AFN|
|» currencyCode|ALL|
|» currencyCode|AMD|
|» currencyCode|ANG|
|» currencyCode|AOA|
|» currencyCode|ARS|
|» currencyCode|AUD|
|» currencyCode|AWG|
|» currencyCode|AZN|
|» currencyCode|BAM|
|» currencyCode|BBD|
|» currencyCode|BDT|
|» currencyCode|BGN|
|» currencyCode|BHD|
|» currencyCode|BIF|
|» currencyCode|BMD|
|» currencyCode|BND|
|» currencyCode|BOB|
|» currencyCode|BOV|
|» currencyCode|BRL|
|» currencyCode|BSD|
|» currencyCode|BTN|
|» currencyCode|BWP|
|» currencyCode|BYN|
|» currencyCode|BZD|
|» currencyCode|CAD|
|» currencyCode|CDF|
|» currencyCode|CHE|
|» currencyCode|CHF|
|» currencyCode|CHW|
|» currencyCode|CLF|
|» currencyCode|CLP|
|» currencyCode|CNY|
|» currencyCode|COP|
|» currencyCode|COU|
|» currencyCode|CRC|
|» currencyCode|CUC|
|» currencyCode|CUP|
|» currencyCode|CVE|
|» currencyCode|CZK|
|» currencyCode|DJF|
|» currencyCode|DKK|
|» currencyCode|DOP|
|» currencyCode|DZD|
|» currencyCode|EGP|
|» currencyCode|ERN|
|» currencyCode|ETB|
|» currencyCode|EUR|
|» currencyCode|FJD|
|» currencyCode|FKP|
|» currencyCode|GBP|
|» currencyCode|GEL|
|» currencyCode|GHS|
|» currencyCode|GIP|
|» currencyCode|GMD|
|» currencyCode|GNF|
|» currencyCode|GTQ|
|» currencyCode|GYD|
|» currencyCode|HKD|
|» currencyCode|HNL|
|» currencyCode|HRK|
|» currencyCode|HTG|
|» currencyCode|HUF|
|» currencyCode|IDR|
|» currencyCode|ILS|
|» currencyCode|INR|
|» currencyCode|IQD|
|» currencyCode|IRR|
|» currencyCode|ISK|
|» currencyCode|JMD|
|» currencyCode|JOD|
|» currencyCode|JPY|
|» currencyCode|KES|
|» currencyCode|KGS|
|» currencyCode|KHR|
|» currencyCode|KMF|
|» currencyCode|KPW|
|» currencyCode|KRW|
|» currencyCode|KWD|
|» currencyCode|KYD|
|» currencyCode|KZT|
|» currencyCode|LAK|
|» currencyCode|LBP|
|» currencyCode|LKR|
|» currencyCode|LRD|
|» currencyCode|LSL|
|» currencyCode|LYD|
|» currencyCode|MAD|
|» currencyCode|MDL|
|» currencyCode|MGA|
|» currencyCode|MKD|
|» currencyCode|MMK|
|» currencyCode|MNT|
|» currencyCode|MOP|
|» currencyCode|MRU|
|» currencyCode|MUR|
|» currencyCode|MVR|
|» currencyCode|MWK|
|» currencyCode|MXN|
|» currencyCode|MXV|
|» currencyCode|MYR|
|» currencyCode|MZN|
|» currencyCode|NAD|
|» currencyCode|NGN|
|» currencyCode|NIO|
|» currencyCode|NOK|
|» currencyCode|NPR|
|» currencyCode|NZD|
|» currencyCode|OMR|
|» currencyCode|PAB|
|» currencyCode|PEN|
|» currencyCode|PGK|
|» currencyCode|PHP|
|» currencyCode|PKR|
|» currencyCode|PLN|
|» currencyCode|PYG|
|» currencyCode|QAR|
|» currencyCode|RON|
|» currencyCode|RSD|
|» currencyCode|RUB|
|» currencyCode|RWF|
|» currencyCode|SAR|
|» currencyCode|SBD|
|» currencyCode|SCR|
|» currencyCode|SDG|
|» currencyCode|SEK|
|» currencyCode|SGD|
|» currencyCode|SHP|
|» currencyCode|SLL|
|» currencyCode|SOS|
|» currencyCode|SRD|
|» currencyCode|SSP|
|» currencyCode|STN|
|» currencyCode|SVC|
|» currencyCode|SYP|
|» currencyCode|SZL|
|» currencyCode|THB|
|» currencyCode|TJS|
|» currencyCode|TMT|
|» currencyCode|TND|
|» currencyCode|TOP|
|» currencyCode|TRY|
|» currencyCode|TTD|
|» currencyCode|TWD|
|» currencyCode|TZS|
|» currencyCode|UAH|
|» currencyCode|UGX|
|» currencyCode|USD|
|» currencyCode|USN|
|» currencyCode|UYI|
|» currencyCode|UYU|
|» currencyCode|UZS|
|» currencyCode|VEF|
|» currencyCode|VND|
|» currencyCode|VUV|
|» currencyCode|WST|
|» currencyCode|XAF|
|» currencyCode|XAG|
|» currencyCode|XAU|
|» currencyCode|XBA|
|» currencyCode|XBB|
|» currencyCode|XBC|
|» currencyCode|XBD|
|» currencyCode|XCD|
|» currencyCode|XDR|
|» currencyCode|XOF|
|» currencyCode|XPD|
|» currencyCode|XPF|
|» currencyCode|XPT|
|» currencyCode|XSU|
|» currencyCode|XUA|
|» currencyCode|YER|
|» currencyCode|ZAR|
|» currencyCode|ZMW|
|» currencyCode|ZWL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-a-new-currency-with-central-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExchangeRate](#schemaexchangerate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

## Retrieve information about the central exchange rates feature.

<a id="opIdget-/settings/currencies/2026-09/central-fx-rates/information_/settings/v3/currencies/central-fx-rates/information"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/central-fx-rates/information \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/central-fx-rates/information`

Retrieve details on whether the central exchange rates feature is enabled for the portal.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-information-about-the-central-exchange-rates-feature-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CentralExchangeRatesInformation](#schemacentralexchangeratesinformation)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Retrieve currencies not supported by central exchange rates.

<a id="opIdget-/settings/currencies/2026-09/central-fx-rates/unsupported-currencies_/settings/v3/currencies/central-fx-rates/unsupported-currencies"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/central-fx-rates/unsupported-currencies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/central-fx-rates/unsupported-currencies`

Retrieve a list of currency codes that are not supported by the central exchange rates. Unsupported currencies will need to be manually updated.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-currencies-not-supported-by-central-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseCurrencyCodeInfoNoPaging](#schemacollectionresponsecurrencycodeinfonopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

<h1 id="settings-multicurrency-exchange-rates">Exchange rates</h1>

## Get exchange rates

<a id="opIdget-/settings/currencies/2026-09/exchange-rates"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/exchange-rates`

Get a list of exchange rates

<h3 id="get-exchange-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|fromCurrencyCode|query|string|false|Filter results by the source currency code. Valid values include standard currency codes such as 'USD', 'EUR', etc.|
|limit|query|integer(int32)|false|The maximum number of results to display per page.|
|toCurrencyCode|query|string|false|Filter results by the target currency code. Valid values include standard currency codes such as 'USD', 'EUR', etc.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fromCurrencyCode|AED|
|fromCurrencyCode|AFN|
|fromCurrencyCode|ALL|
|fromCurrencyCode|AMD|
|fromCurrencyCode|ANG|
|fromCurrencyCode|AOA|
|fromCurrencyCode|ARS|
|fromCurrencyCode|AUD|
|fromCurrencyCode|AWG|
|fromCurrencyCode|AZN|
|fromCurrencyCode|BAM|
|fromCurrencyCode|BBD|
|fromCurrencyCode|BDT|
|fromCurrencyCode|BGN|
|fromCurrencyCode|BHD|
|fromCurrencyCode|BIF|
|fromCurrencyCode|BMD|
|fromCurrencyCode|BND|
|fromCurrencyCode|BOB|
|fromCurrencyCode|BOV|
|fromCurrencyCode|BRL|
|fromCurrencyCode|BSD|
|fromCurrencyCode|BTN|
|fromCurrencyCode|BWP|
|fromCurrencyCode|BYN|
|fromCurrencyCode|BZD|
|fromCurrencyCode|CAD|
|fromCurrencyCode|CDF|
|fromCurrencyCode|CHE|
|fromCurrencyCode|CHF|
|fromCurrencyCode|CHW|
|fromCurrencyCode|CLF|
|fromCurrencyCode|CLP|
|fromCurrencyCode|CNY|
|fromCurrencyCode|COP|
|fromCurrencyCode|COU|
|fromCurrencyCode|CRC|
|fromCurrencyCode|CUC|
|fromCurrencyCode|CUP|
|fromCurrencyCode|CVE|
|fromCurrencyCode|CZK|
|fromCurrencyCode|DJF|
|fromCurrencyCode|DKK|
|fromCurrencyCode|DOP|
|fromCurrencyCode|DZD|
|fromCurrencyCode|EGP|
|fromCurrencyCode|ERN|
|fromCurrencyCode|ETB|
|fromCurrencyCode|EUR|
|fromCurrencyCode|FJD|
|fromCurrencyCode|FKP|
|fromCurrencyCode|GBP|
|fromCurrencyCode|GEL|
|fromCurrencyCode|GHS|
|fromCurrencyCode|GIP|
|fromCurrencyCode|GMD|
|fromCurrencyCode|GNF|
|fromCurrencyCode|GTQ|
|fromCurrencyCode|GYD|
|fromCurrencyCode|HKD|
|fromCurrencyCode|HNL|
|fromCurrencyCode|HRK|
|fromCurrencyCode|HTG|
|fromCurrencyCode|HUF|
|fromCurrencyCode|IDR|
|fromCurrencyCode|ILS|
|fromCurrencyCode|INR|
|fromCurrencyCode|IQD|
|fromCurrencyCode|IRR|
|fromCurrencyCode|ISK|
|fromCurrencyCode|JMD|
|fromCurrencyCode|JOD|
|fromCurrencyCode|JPY|
|fromCurrencyCode|KES|
|fromCurrencyCode|KGS|
|fromCurrencyCode|KHR|
|fromCurrencyCode|KMF|
|fromCurrencyCode|KPW|
|fromCurrencyCode|KRW|
|fromCurrencyCode|KWD|
|fromCurrencyCode|KYD|
|fromCurrencyCode|KZT|
|fromCurrencyCode|LAK|
|fromCurrencyCode|LBP|
|fromCurrencyCode|LKR|
|fromCurrencyCode|LRD|
|fromCurrencyCode|LSL|
|fromCurrencyCode|LYD|
|fromCurrencyCode|MAD|
|fromCurrencyCode|MDL|
|fromCurrencyCode|MGA|
|fromCurrencyCode|MKD|
|fromCurrencyCode|MMK|
|fromCurrencyCode|MNT|
|fromCurrencyCode|MOP|
|fromCurrencyCode|MRU|
|fromCurrencyCode|MUR|
|fromCurrencyCode|MVR|
|fromCurrencyCode|MWK|
|fromCurrencyCode|MXN|
|fromCurrencyCode|MXV|
|fromCurrencyCode|MYR|
|fromCurrencyCode|MZN|
|fromCurrencyCode|NAD|
|fromCurrencyCode|NGN|
|fromCurrencyCode|NIO|
|fromCurrencyCode|NOK|
|fromCurrencyCode|NPR|
|fromCurrencyCode|NZD|
|fromCurrencyCode|OMR|
|fromCurrencyCode|PAB|
|fromCurrencyCode|PEN|
|fromCurrencyCode|PGK|
|fromCurrencyCode|PHP|
|fromCurrencyCode|PKR|
|fromCurrencyCode|PLN|
|fromCurrencyCode|PYG|
|fromCurrencyCode|QAR|
|fromCurrencyCode|RON|
|fromCurrencyCode|RSD|
|fromCurrencyCode|RUB|
|fromCurrencyCode|RWF|
|fromCurrencyCode|SAR|
|fromCurrencyCode|SBD|
|fromCurrencyCode|SCR|
|fromCurrencyCode|SDG|
|fromCurrencyCode|SEK|
|fromCurrencyCode|SGD|
|fromCurrencyCode|SHP|
|fromCurrencyCode|SLL|
|fromCurrencyCode|SOS|
|fromCurrencyCode|SRD|
|fromCurrencyCode|SSP|
|fromCurrencyCode|STN|
|fromCurrencyCode|SVC|
|fromCurrencyCode|SYP|
|fromCurrencyCode|SZL|
|fromCurrencyCode|THB|
|fromCurrencyCode|TJS|
|fromCurrencyCode|TMT|
|fromCurrencyCode|TND|
|fromCurrencyCode|TOP|
|fromCurrencyCode|TRY|
|fromCurrencyCode|TTD|
|fromCurrencyCode|TWD|
|fromCurrencyCode|TZS|
|fromCurrencyCode|UAH|
|fromCurrencyCode|UGX|
|fromCurrencyCode|USD|
|fromCurrencyCode|USN|
|fromCurrencyCode|UYI|
|fromCurrencyCode|UYU|
|fromCurrencyCode|UZS|
|fromCurrencyCode|VEF|
|fromCurrencyCode|VND|
|fromCurrencyCode|VUV|
|fromCurrencyCode|WST|
|fromCurrencyCode|XAF|
|fromCurrencyCode|XAG|
|fromCurrencyCode|XAU|
|fromCurrencyCode|XBA|
|fromCurrencyCode|XBB|
|fromCurrencyCode|XBC|
|fromCurrencyCode|XBD|
|fromCurrencyCode|XCD|
|fromCurrencyCode|XDR|
|fromCurrencyCode|XOF|
|fromCurrencyCode|XPD|
|fromCurrencyCode|XPF|
|fromCurrencyCode|XPT|
|fromCurrencyCode|XSU|
|fromCurrencyCode|XUA|
|fromCurrencyCode|YER|
|fromCurrencyCode|ZAR|
|fromCurrencyCode|ZMW|
|fromCurrencyCode|ZWL|
|toCurrencyCode|AED|
|toCurrencyCode|AFN|
|toCurrencyCode|ALL|
|toCurrencyCode|AMD|
|toCurrencyCode|ANG|
|toCurrencyCode|AOA|
|toCurrencyCode|ARS|
|toCurrencyCode|AUD|
|toCurrencyCode|AWG|
|toCurrencyCode|AZN|
|toCurrencyCode|BAM|
|toCurrencyCode|BBD|
|toCurrencyCode|BDT|
|toCurrencyCode|BGN|
|toCurrencyCode|BHD|
|toCurrencyCode|BIF|
|toCurrencyCode|BMD|
|toCurrencyCode|BND|
|toCurrencyCode|BOB|
|toCurrencyCode|BOV|
|toCurrencyCode|BRL|
|toCurrencyCode|BSD|
|toCurrencyCode|BTN|
|toCurrencyCode|BWP|
|toCurrencyCode|BYN|
|toCurrencyCode|BZD|
|toCurrencyCode|CAD|
|toCurrencyCode|CDF|
|toCurrencyCode|CHE|
|toCurrencyCode|CHF|
|toCurrencyCode|CHW|
|toCurrencyCode|CLF|
|toCurrencyCode|CLP|
|toCurrencyCode|CNY|
|toCurrencyCode|COP|
|toCurrencyCode|COU|
|toCurrencyCode|CRC|
|toCurrencyCode|CUC|
|toCurrencyCode|CUP|
|toCurrencyCode|CVE|
|toCurrencyCode|CZK|
|toCurrencyCode|DJF|
|toCurrencyCode|DKK|
|toCurrencyCode|DOP|
|toCurrencyCode|DZD|
|toCurrencyCode|EGP|
|toCurrencyCode|ERN|
|toCurrencyCode|ETB|
|toCurrencyCode|EUR|
|toCurrencyCode|FJD|
|toCurrencyCode|FKP|
|toCurrencyCode|GBP|
|toCurrencyCode|GEL|
|toCurrencyCode|GHS|
|toCurrencyCode|GIP|
|toCurrencyCode|GMD|
|toCurrencyCode|GNF|
|toCurrencyCode|GTQ|
|toCurrencyCode|GYD|
|toCurrencyCode|HKD|
|toCurrencyCode|HNL|
|toCurrencyCode|HRK|
|toCurrencyCode|HTG|
|toCurrencyCode|HUF|
|toCurrencyCode|IDR|
|toCurrencyCode|ILS|
|toCurrencyCode|INR|
|toCurrencyCode|IQD|
|toCurrencyCode|IRR|
|toCurrencyCode|ISK|
|toCurrencyCode|JMD|
|toCurrencyCode|JOD|
|toCurrencyCode|JPY|
|toCurrencyCode|KES|
|toCurrencyCode|KGS|
|toCurrencyCode|KHR|
|toCurrencyCode|KMF|
|toCurrencyCode|KPW|
|toCurrencyCode|KRW|
|toCurrencyCode|KWD|
|toCurrencyCode|KYD|
|toCurrencyCode|KZT|
|toCurrencyCode|LAK|
|toCurrencyCode|LBP|
|toCurrencyCode|LKR|
|toCurrencyCode|LRD|
|toCurrencyCode|LSL|
|toCurrencyCode|LYD|
|toCurrencyCode|MAD|
|toCurrencyCode|MDL|
|toCurrencyCode|MGA|
|toCurrencyCode|MKD|
|toCurrencyCode|MMK|
|toCurrencyCode|MNT|
|toCurrencyCode|MOP|
|toCurrencyCode|MRU|
|toCurrencyCode|MUR|
|toCurrencyCode|MVR|
|toCurrencyCode|MWK|
|toCurrencyCode|MXN|
|toCurrencyCode|MXV|
|toCurrencyCode|MYR|
|toCurrencyCode|MZN|
|toCurrencyCode|NAD|
|toCurrencyCode|NGN|
|toCurrencyCode|NIO|
|toCurrencyCode|NOK|
|toCurrencyCode|NPR|
|toCurrencyCode|NZD|
|toCurrencyCode|OMR|
|toCurrencyCode|PAB|
|toCurrencyCode|PEN|
|toCurrencyCode|PGK|
|toCurrencyCode|PHP|
|toCurrencyCode|PKR|
|toCurrencyCode|PLN|
|toCurrencyCode|PYG|
|toCurrencyCode|QAR|
|toCurrencyCode|RON|
|toCurrencyCode|RSD|
|toCurrencyCode|RUB|
|toCurrencyCode|RWF|
|toCurrencyCode|SAR|
|toCurrencyCode|SBD|
|toCurrencyCode|SCR|
|toCurrencyCode|SDG|
|toCurrencyCode|SEK|
|toCurrencyCode|SGD|
|toCurrencyCode|SHP|
|toCurrencyCode|SLL|
|toCurrencyCode|SOS|
|toCurrencyCode|SRD|
|toCurrencyCode|SSP|
|toCurrencyCode|STN|
|toCurrencyCode|SVC|
|toCurrencyCode|SYP|
|toCurrencyCode|SZL|
|toCurrencyCode|THB|
|toCurrencyCode|TJS|
|toCurrencyCode|TMT|
|toCurrencyCode|TND|
|toCurrencyCode|TOP|
|toCurrencyCode|TRY|
|toCurrencyCode|TTD|
|toCurrencyCode|TWD|
|toCurrencyCode|TZS|
|toCurrencyCode|UAH|
|toCurrencyCode|UGX|
|toCurrencyCode|USD|
|toCurrencyCode|USN|
|toCurrencyCode|UYI|
|toCurrencyCode|UYU|
|toCurrencyCode|UZS|
|toCurrencyCode|VEF|
|toCurrencyCode|VND|
|toCurrencyCode|VUV|
|toCurrencyCode|WST|
|toCurrencyCode|XAF|
|toCurrencyCode|XAG|
|toCurrencyCode|XAU|
|toCurrencyCode|XBA|
|toCurrencyCode|XBB|
|toCurrencyCode|XBC|
|toCurrencyCode|XBD|
|toCurrencyCode|XCD|
|toCurrencyCode|XDR|
|toCurrencyCode|XOF|
|toCurrencyCode|XPD|
|toCurrencyCode|XPF|
|toCurrencyCode|XPT|
|toCurrencyCode|XSU|
|toCurrencyCode|XUA|
|toCurrencyCode|YER|
|toCurrencyCode|ZAR|
|toCurrencyCode|ZMW|
|toCurrencyCode|ZWL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseExchangeRateForwardPaging](#schemacollectionresponseexchangerateforwardpaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Add a new exchange rate

<a id="opIdpost-/settings/currencies/2026-09/exchange-rates"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/exchange-rates`

Create a new exchange rate with specified conversion rate and currency codes.

> Body parameter

```json
null
```

<h3 id="add-a-new-exchange-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExchangeRateCreateRequest](#schemaexchangeratecreaterequest)|true|none|
|» conversionRate|body|number|true|The conversion rate between the to and from currency code of this exchange rate.|
|» effectiveAt|body|string(date-time)|false|The date the exchange rate is in effect.|
|» fromCurrencyCode|body|string|true|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fromCurrencyCode|AED|
|» fromCurrencyCode|AFN|
|» fromCurrencyCode|ALL|
|» fromCurrencyCode|AMD|
|» fromCurrencyCode|ANG|
|» fromCurrencyCode|AOA|
|» fromCurrencyCode|ARS|
|» fromCurrencyCode|AUD|
|» fromCurrencyCode|AWG|
|» fromCurrencyCode|AZN|
|» fromCurrencyCode|BAM|
|» fromCurrencyCode|BBD|
|» fromCurrencyCode|BDT|
|» fromCurrencyCode|BGN|
|» fromCurrencyCode|BHD|
|» fromCurrencyCode|BIF|
|» fromCurrencyCode|BMD|
|» fromCurrencyCode|BND|
|» fromCurrencyCode|BOB|
|» fromCurrencyCode|BOV|
|» fromCurrencyCode|BRL|
|» fromCurrencyCode|BSD|
|» fromCurrencyCode|BTN|
|» fromCurrencyCode|BWP|
|» fromCurrencyCode|BYN|
|» fromCurrencyCode|BZD|
|» fromCurrencyCode|CAD|
|» fromCurrencyCode|CDF|
|» fromCurrencyCode|CHE|
|» fromCurrencyCode|CHF|
|» fromCurrencyCode|CHW|
|» fromCurrencyCode|CLF|
|» fromCurrencyCode|CLP|
|» fromCurrencyCode|CNY|
|» fromCurrencyCode|COP|
|» fromCurrencyCode|COU|
|» fromCurrencyCode|CRC|
|» fromCurrencyCode|CUC|
|» fromCurrencyCode|CUP|
|» fromCurrencyCode|CVE|
|» fromCurrencyCode|CZK|
|» fromCurrencyCode|DJF|
|» fromCurrencyCode|DKK|
|» fromCurrencyCode|DOP|
|» fromCurrencyCode|DZD|
|» fromCurrencyCode|EGP|
|» fromCurrencyCode|ERN|
|» fromCurrencyCode|ETB|
|» fromCurrencyCode|EUR|
|» fromCurrencyCode|FJD|
|» fromCurrencyCode|FKP|
|» fromCurrencyCode|GBP|
|» fromCurrencyCode|GEL|
|» fromCurrencyCode|GHS|
|» fromCurrencyCode|GIP|
|» fromCurrencyCode|GMD|
|» fromCurrencyCode|GNF|
|» fromCurrencyCode|GTQ|
|» fromCurrencyCode|GYD|
|» fromCurrencyCode|HKD|
|» fromCurrencyCode|HNL|
|» fromCurrencyCode|HRK|
|» fromCurrencyCode|HTG|
|» fromCurrencyCode|HUF|
|» fromCurrencyCode|IDR|
|» fromCurrencyCode|ILS|
|» fromCurrencyCode|INR|
|» fromCurrencyCode|IQD|
|» fromCurrencyCode|IRR|
|» fromCurrencyCode|ISK|
|» fromCurrencyCode|JMD|
|» fromCurrencyCode|JOD|
|» fromCurrencyCode|JPY|
|» fromCurrencyCode|KES|
|» fromCurrencyCode|KGS|
|» fromCurrencyCode|KHR|
|» fromCurrencyCode|KMF|
|» fromCurrencyCode|KPW|
|» fromCurrencyCode|KRW|
|» fromCurrencyCode|KWD|
|» fromCurrencyCode|KYD|
|» fromCurrencyCode|KZT|
|» fromCurrencyCode|LAK|
|» fromCurrencyCode|LBP|
|» fromCurrencyCode|LKR|
|» fromCurrencyCode|LRD|
|» fromCurrencyCode|LSL|
|» fromCurrencyCode|LYD|
|» fromCurrencyCode|MAD|
|» fromCurrencyCode|MDL|
|» fromCurrencyCode|MGA|
|» fromCurrencyCode|MKD|
|» fromCurrencyCode|MMK|
|» fromCurrencyCode|MNT|
|» fromCurrencyCode|MOP|
|» fromCurrencyCode|MRU|
|» fromCurrencyCode|MUR|
|» fromCurrencyCode|MVR|
|» fromCurrencyCode|MWK|
|» fromCurrencyCode|MXN|
|» fromCurrencyCode|MXV|
|» fromCurrencyCode|MYR|
|» fromCurrencyCode|MZN|
|» fromCurrencyCode|NAD|
|» fromCurrencyCode|NGN|
|» fromCurrencyCode|NIO|
|» fromCurrencyCode|NOK|
|» fromCurrencyCode|NPR|
|» fromCurrencyCode|NZD|
|» fromCurrencyCode|OMR|
|» fromCurrencyCode|PAB|
|» fromCurrencyCode|PEN|
|» fromCurrencyCode|PGK|
|» fromCurrencyCode|PHP|
|» fromCurrencyCode|PKR|
|» fromCurrencyCode|PLN|
|» fromCurrencyCode|PYG|
|» fromCurrencyCode|QAR|
|» fromCurrencyCode|RON|
|» fromCurrencyCode|RSD|
|» fromCurrencyCode|RUB|
|» fromCurrencyCode|RWF|
|» fromCurrencyCode|SAR|
|» fromCurrencyCode|SBD|
|» fromCurrencyCode|SCR|
|» fromCurrencyCode|SDG|
|» fromCurrencyCode|SEK|
|» fromCurrencyCode|SGD|
|» fromCurrencyCode|SHP|
|» fromCurrencyCode|SLL|
|» fromCurrencyCode|SOS|
|» fromCurrencyCode|SRD|
|» fromCurrencyCode|SSP|
|» fromCurrencyCode|STN|
|» fromCurrencyCode|SVC|
|» fromCurrencyCode|SYP|
|» fromCurrencyCode|SZL|
|» fromCurrencyCode|THB|
|» fromCurrencyCode|TJS|
|» fromCurrencyCode|TMT|
|» fromCurrencyCode|TND|
|» fromCurrencyCode|TOP|
|» fromCurrencyCode|TRY|
|» fromCurrencyCode|TTD|
|» fromCurrencyCode|TWD|
|» fromCurrencyCode|TZS|
|» fromCurrencyCode|UAH|
|» fromCurrencyCode|UGX|
|» fromCurrencyCode|USD|
|» fromCurrencyCode|USN|
|» fromCurrencyCode|UYI|
|» fromCurrencyCode|UYU|
|» fromCurrencyCode|UZS|
|» fromCurrencyCode|VEF|
|» fromCurrencyCode|VND|
|» fromCurrencyCode|VUV|
|» fromCurrencyCode|WST|
|» fromCurrencyCode|XAF|
|» fromCurrencyCode|XAG|
|» fromCurrencyCode|XAU|
|» fromCurrencyCode|XBA|
|» fromCurrencyCode|XBB|
|» fromCurrencyCode|XBC|
|» fromCurrencyCode|XBD|
|» fromCurrencyCode|XCD|
|» fromCurrencyCode|XDR|
|» fromCurrencyCode|XOF|
|» fromCurrencyCode|XPD|
|» fromCurrencyCode|XPF|
|» fromCurrencyCode|XPT|
|» fromCurrencyCode|XSU|
|» fromCurrencyCode|XUA|
|» fromCurrencyCode|YER|
|» fromCurrencyCode|ZAR|
|» fromCurrencyCode|ZMW|
|» fromCurrencyCode|ZWL|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-a-new-exchange-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExchangeRate](#schemaexchangerate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

## Get all current exchange rates

<a id="opIdget-/settings/currencies/2026-09/exchange-rates/current"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/current \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/exchange-rates/current`

Retrieve all current exchange rates for all currency pairs.

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-all-current-exchange-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[CollectionResponseExchangeRateNoPaging](#schemacollectionresponseexchangeratenopaging)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Change the visibility of a specific currency pairs

<a id="opIdpost-/settings/currencies/2026-09/exchange-rates/update-visibility"></a>

> Code samples

```bash
curl https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/update-visibility \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /settings/currencies/2026-09/exchange-rates/update-visibility`

Change the visibility setting for a currency pair. This will hide or display a currency pair for users in the HubSpot app.

> Body parameter

```json
null
```

<h3 id="change-the-visibility-of-a-specific-currency-pairs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CurrencyPairUpdate](#schemacurrencypairupdate)|true|none|
|» fromCurrencyCode|body|string|true|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.|
|» toCurrencyCode|body|string|true|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert to.|
|» visibleInUI|body|boolean|true|This indicates if the currency pair is shown in the MultiCurrency settings page. Setting this to false will remove the currency pair from the settings page.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» fromCurrencyCode|AED|
|» fromCurrencyCode|AFN|
|» fromCurrencyCode|ALL|
|» fromCurrencyCode|AMD|
|» fromCurrencyCode|ANG|
|» fromCurrencyCode|AOA|
|» fromCurrencyCode|ARS|
|» fromCurrencyCode|AUD|
|» fromCurrencyCode|AWG|
|» fromCurrencyCode|AZN|
|» fromCurrencyCode|BAM|
|» fromCurrencyCode|BBD|
|» fromCurrencyCode|BDT|
|» fromCurrencyCode|BGN|
|» fromCurrencyCode|BHD|
|» fromCurrencyCode|BIF|
|» fromCurrencyCode|BMD|
|» fromCurrencyCode|BND|
|» fromCurrencyCode|BOB|
|» fromCurrencyCode|BOV|
|» fromCurrencyCode|BRL|
|» fromCurrencyCode|BSD|
|» fromCurrencyCode|BTN|
|» fromCurrencyCode|BWP|
|» fromCurrencyCode|BYN|
|» fromCurrencyCode|BZD|
|» fromCurrencyCode|CAD|
|» fromCurrencyCode|CDF|
|» fromCurrencyCode|CHE|
|» fromCurrencyCode|CHF|
|» fromCurrencyCode|CHW|
|» fromCurrencyCode|CLF|
|» fromCurrencyCode|CLP|
|» fromCurrencyCode|CNY|
|» fromCurrencyCode|COP|
|» fromCurrencyCode|COU|
|» fromCurrencyCode|CRC|
|» fromCurrencyCode|CUC|
|» fromCurrencyCode|CUP|
|» fromCurrencyCode|CVE|
|» fromCurrencyCode|CZK|
|» fromCurrencyCode|DJF|
|» fromCurrencyCode|DKK|
|» fromCurrencyCode|DOP|
|» fromCurrencyCode|DZD|
|» fromCurrencyCode|EGP|
|» fromCurrencyCode|ERN|
|» fromCurrencyCode|ETB|
|» fromCurrencyCode|EUR|
|» fromCurrencyCode|FJD|
|» fromCurrencyCode|FKP|
|» fromCurrencyCode|GBP|
|» fromCurrencyCode|GEL|
|» fromCurrencyCode|GHS|
|» fromCurrencyCode|GIP|
|» fromCurrencyCode|GMD|
|» fromCurrencyCode|GNF|
|» fromCurrencyCode|GTQ|
|» fromCurrencyCode|GYD|
|» fromCurrencyCode|HKD|
|» fromCurrencyCode|HNL|
|» fromCurrencyCode|HRK|
|» fromCurrencyCode|HTG|
|» fromCurrencyCode|HUF|
|» fromCurrencyCode|IDR|
|» fromCurrencyCode|ILS|
|» fromCurrencyCode|INR|
|» fromCurrencyCode|IQD|
|» fromCurrencyCode|IRR|
|» fromCurrencyCode|ISK|
|» fromCurrencyCode|JMD|
|» fromCurrencyCode|JOD|
|» fromCurrencyCode|JPY|
|» fromCurrencyCode|KES|
|» fromCurrencyCode|KGS|
|» fromCurrencyCode|KHR|
|» fromCurrencyCode|KMF|
|» fromCurrencyCode|KPW|
|» fromCurrencyCode|KRW|
|» fromCurrencyCode|KWD|
|» fromCurrencyCode|KYD|
|» fromCurrencyCode|KZT|
|» fromCurrencyCode|LAK|
|» fromCurrencyCode|LBP|
|» fromCurrencyCode|LKR|
|» fromCurrencyCode|LRD|
|» fromCurrencyCode|LSL|
|» fromCurrencyCode|LYD|
|» fromCurrencyCode|MAD|
|» fromCurrencyCode|MDL|
|» fromCurrencyCode|MGA|
|» fromCurrencyCode|MKD|
|» fromCurrencyCode|MMK|
|» fromCurrencyCode|MNT|
|» fromCurrencyCode|MOP|
|» fromCurrencyCode|MRU|
|» fromCurrencyCode|MUR|
|» fromCurrencyCode|MVR|
|» fromCurrencyCode|MWK|
|» fromCurrencyCode|MXN|
|» fromCurrencyCode|MXV|
|» fromCurrencyCode|MYR|
|» fromCurrencyCode|MZN|
|» fromCurrencyCode|NAD|
|» fromCurrencyCode|NGN|
|» fromCurrencyCode|NIO|
|» fromCurrencyCode|NOK|
|» fromCurrencyCode|NPR|
|» fromCurrencyCode|NZD|
|» fromCurrencyCode|OMR|
|» fromCurrencyCode|PAB|
|» fromCurrencyCode|PEN|
|» fromCurrencyCode|PGK|
|» fromCurrencyCode|PHP|
|» fromCurrencyCode|PKR|
|» fromCurrencyCode|PLN|
|» fromCurrencyCode|PYG|
|» fromCurrencyCode|QAR|
|» fromCurrencyCode|RON|
|» fromCurrencyCode|RSD|
|» fromCurrencyCode|RUB|
|» fromCurrencyCode|RWF|
|» fromCurrencyCode|SAR|
|» fromCurrencyCode|SBD|
|» fromCurrencyCode|SCR|
|» fromCurrencyCode|SDG|
|» fromCurrencyCode|SEK|
|» fromCurrencyCode|SGD|
|» fromCurrencyCode|SHP|
|» fromCurrencyCode|SLL|
|» fromCurrencyCode|SOS|
|» fromCurrencyCode|SRD|
|» fromCurrencyCode|SSP|
|» fromCurrencyCode|STN|
|» fromCurrencyCode|SVC|
|» fromCurrencyCode|SYP|
|» fromCurrencyCode|SZL|
|» fromCurrencyCode|THB|
|» fromCurrencyCode|TJS|
|» fromCurrencyCode|TMT|
|» fromCurrencyCode|TND|
|» fromCurrencyCode|TOP|
|» fromCurrencyCode|TRY|
|» fromCurrencyCode|TTD|
|» fromCurrencyCode|TWD|
|» fromCurrencyCode|TZS|
|» fromCurrencyCode|UAH|
|» fromCurrencyCode|UGX|
|» fromCurrencyCode|USD|
|» fromCurrencyCode|USN|
|» fromCurrencyCode|UYI|
|» fromCurrencyCode|UYU|
|» fromCurrencyCode|UZS|
|» fromCurrencyCode|VEF|
|» fromCurrencyCode|VND|
|» fromCurrencyCode|VUV|
|» fromCurrencyCode|WST|
|» fromCurrencyCode|XAF|
|» fromCurrencyCode|XAG|
|» fromCurrencyCode|XAU|
|» fromCurrencyCode|XBA|
|» fromCurrencyCode|XBB|
|» fromCurrencyCode|XBC|
|» fromCurrencyCode|XBD|
|» fromCurrencyCode|XCD|
|» fromCurrencyCode|XDR|
|» fromCurrencyCode|XOF|
|» fromCurrencyCode|XPD|
|» fromCurrencyCode|XPF|
|» fromCurrencyCode|XPT|
|» fromCurrencyCode|XSU|
|» fromCurrencyCode|XUA|
|» fromCurrencyCode|YER|
|» fromCurrencyCode|ZAR|
|» fromCurrencyCode|ZMW|
|» fromCurrencyCode|ZWL|
|» toCurrencyCode|AED|
|» toCurrencyCode|AFN|
|» toCurrencyCode|ALL|
|» toCurrencyCode|AMD|
|» toCurrencyCode|ANG|
|» toCurrencyCode|AOA|
|» toCurrencyCode|ARS|
|» toCurrencyCode|AUD|
|» toCurrencyCode|AWG|
|» toCurrencyCode|AZN|
|» toCurrencyCode|BAM|
|» toCurrencyCode|BBD|
|» toCurrencyCode|BDT|
|» toCurrencyCode|BGN|
|» toCurrencyCode|BHD|
|» toCurrencyCode|BIF|
|» toCurrencyCode|BMD|
|» toCurrencyCode|BND|
|» toCurrencyCode|BOB|
|» toCurrencyCode|BOV|
|» toCurrencyCode|BRL|
|» toCurrencyCode|BSD|
|» toCurrencyCode|BTN|
|» toCurrencyCode|BWP|
|» toCurrencyCode|BYN|
|» toCurrencyCode|BZD|
|» toCurrencyCode|CAD|
|» toCurrencyCode|CDF|
|» toCurrencyCode|CHE|
|» toCurrencyCode|CHF|
|» toCurrencyCode|CHW|
|» toCurrencyCode|CLF|
|» toCurrencyCode|CLP|
|» toCurrencyCode|CNY|
|» toCurrencyCode|COP|
|» toCurrencyCode|COU|
|» toCurrencyCode|CRC|
|» toCurrencyCode|CUC|
|» toCurrencyCode|CUP|
|» toCurrencyCode|CVE|
|» toCurrencyCode|CZK|
|» toCurrencyCode|DJF|
|» toCurrencyCode|DKK|
|» toCurrencyCode|DOP|
|» toCurrencyCode|DZD|
|» toCurrencyCode|EGP|
|» toCurrencyCode|ERN|
|» toCurrencyCode|ETB|
|» toCurrencyCode|EUR|
|» toCurrencyCode|FJD|
|» toCurrencyCode|FKP|
|» toCurrencyCode|GBP|
|» toCurrencyCode|GEL|
|» toCurrencyCode|GHS|
|» toCurrencyCode|GIP|
|» toCurrencyCode|GMD|
|» toCurrencyCode|GNF|
|» toCurrencyCode|GTQ|
|» toCurrencyCode|GYD|
|» toCurrencyCode|HKD|
|» toCurrencyCode|HNL|
|» toCurrencyCode|HRK|
|» toCurrencyCode|HTG|
|» toCurrencyCode|HUF|
|» toCurrencyCode|IDR|
|» toCurrencyCode|ILS|
|» toCurrencyCode|INR|
|» toCurrencyCode|IQD|
|» toCurrencyCode|IRR|
|» toCurrencyCode|ISK|
|» toCurrencyCode|JMD|
|» toCurrencyCode|JOD|
|» toCurrencyCode|JPY|
|» toCurrencyCode|KES|
|» toCurrencyCode|KGS|
|» toCurrencyCode|KHR|
|» toCurrencyCode|KMF|
|» toCurrencyCode|KPW|
|» toCurrencyCode|KRW|
|» toCurrencyCode|KWD|
|» toCurrencyCode|KYD|
|» toCurrencyCode|KZT|
|» toCurrencyCode|LAK|
|» toCurrencyCode|LBP|
|» toCurrencyCode|LKR|
|» toCurrencyCode|LRD|
|» toCurrencyCode|LSL|
|» toCurrencyCode|LYD|
|» toCurrencyCode|MAD|
|» toCurrencyCode|MDL|
|» toCurrencyCode|MGA|
|» toCurrencyCode|MKD|
|» toCurrencyCode|MMK|
|» toCurrencyCode|MNT|
|» toCurrencyCode|MOP|
|» toCurrencyCode|MRU|
|» toCurrencyCode|MUR|
|» toCurrencyCode|MVR|
|» toCurrencyCode|MWK|
|» toCurrencyCode|MXN|
|» toCurrencyCode|MXV|
|» toCurrencyCode|MYR|
|» toCurrencyCode|MZN|
|» toCurrencyCode|NAD|
|» toCurrencyCode|NGN|
|» toCurrencyCode|NIO|
|» toCurrencyCode|NOK|
|» toCurrencyCode|NPR|
|» toCurrencyCode|NZD|
|» toCurrencyCode|OMR|
|» toCurrencyCode|PAB|
|» toCurrencyCode|PEN|
|» toCurrencyCode|PGK|
|» toCurrencyCode|PHP|
|» toCurrencyCode|PKR|
|» toCurrencyCode|PLN|
|» toCurrencyCode|PYG|
|» toCurrencyCode|QAR|
|» toCurrencyCode|RON|
|» toCurrencyCode|RSD|
|» toCurrencyCode|RUB|
|» toCurrencyCode|RWF|
|» toCurrencyCode|SAR|
|» toCurrencyCode|SBD|
|» toCurrencyCode|SCR|
|» toCurrencyCode|SDG|
|» toCurrencyCode|SEK|
|» toCurrencyCode|SGD|
|» toCurrencyCode|SHP|
|» toCurrencyCode|SLL|
|» toCurrencyCode|SOS|
|» toCurrencyCode|SRD|
|» toCurrencyCode|SSP|
|» toCurrencyCode|STN|
|» toCurrencyCode|SVC|
|» toCurrencyCode|SYP|
|» toCurrencyCode|SZL|
|» toCurrencyCode|THB|
|» toCurrencyCode|TJS|
|» toCurrencyCode|TMT|
|» toCurrencyCode|TND|
|» toCurrencyCode|TOP|
|» toCurrencyCode|TRY|
|» toCurrencyCode|TTD|
|» toCurrencyCode|TWD|
|» toCurrencyCode|TZS|
|» toCurrencyCode|UAH|
|» toCurrencyCode|UGX|
|» toCurrencyCode|USD|
|» toCurrencyCode|USN|
|» toCurrencyCode|UYI|
|» toCurrencyCode|UYU|
|» toCurrencyCode|UZS|
|» toCurrencyCode|VEF|
|» toCurrencyCode|VND|
|» toCurrencyCode|VUV|
|» toCurrencyCode|WST|
|» toCurrencyCode|XAF|
|» toCurrencyCode|XAG|
|» toCurrencyCode|XAU|
|» toCurrencyCode|XBA|
|» toCurrencyCode|XBB|
|» toCurrencyCode|XBC|
|» toCurrencyCode|XBD|
|» toCurrencyCode|XCD|
|» toCurrencyCode|XDR|
|» toCurrencyCode|XOF|
|» toCurrencyCode|XPD|
|» toCurrencyCode|XPF|
|» toCurrencyCode|XPT|
|» toCurrencyCode|XSU|
|» toCurrencyCode|XUA|
|» toCurrencyCode|YER|
|» toCurrencyCode|ZAR|
|» toCurrencyCode|ZMW|
|» toCurrencyCode|ZWL|

> Example responses

> default Response

```json
null
```

<h3 id="change-the-visibility-of-a-specific-currency-pairs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

## Get the details for a specific exchange rate

<a id="opIdget-/settings/currencies/2026-09/exchange-rates/{exchangeRateId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/{exchangeRateId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /settings/currencies/2026-09/exchange-rates/{exchangeRateId}`

Retrieve the details for a specific exchange rate specified by its ID.

<h3 id="get-the-details-for-a-specific-exchange-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeRateId|path|string|true|The unique identifier of the exchange rate to retrieve.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="get-the-details-for-a-specific-exchange-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExchangeRate](#schemaexchangerate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: cpq.quotes.write ), oauth2 ( Scopes: crm.objects.quotes.read ), oauth2 ( Scopes: settings.currencies.read ), oauth2 ( Scopes: crm.objects.quotes.write ), oauth2 ( Scopes: cpq.quotes.read )
</aside>

## Update a conversion rate

<a id="opIdpatch-/settings/currencies/2026-09/exchange-rates/{exchangeRateId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/settings/currencies/2026-09/exchange-rates/{exchangeRateId}' \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PATCH /settings/currencies/2026-09/exchange-rates/{exchangeRateId}`

Update an existing conversion rate, specified by its ID.

> Body parameter

```json
null
```

<h3 id="update-a-conversion-rate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchangeRateId|path|string|true|The unique identifier of the exchange rate to update.|
|body|body|[ExchangeRateMultiplier](#schemaexchangeratemultiplier)|true|none|
|» conversionRate|body|number|true|The updated conversion rate between the to and from currency code of this exchange rate.|
|» effectiveAt|body|string(date-time)|false|The date the exchange rate is in effect.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-a-conversion-rate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ExchangeRate](#schemaexchangerate)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: settings.currencies.write )
</aside>

# Schemas

<h2 id="tocS_BatchInputExchangeRateCreateRequest">BatchInputExchangeRateCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputexchangeratecreaterequest"></a>
<a id="schema_BatchInputExchangeRateCreateRequest"></a>
<a id="tocSbatchinputexchangeratecreaterequest"></a>
<a id="tocsbatchinputexchangeratecreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ExchangeRateCreateRequest](#schemaexchangeratecreaterequest)]|true|none|An array of ExchangeRateCreateRequest objects, each representing the details required to create a single exchange rate. This includes properties like fromCurrencyCode, conversionRate, and effectiveAt.|

<h2 id="tocS_BatchInputExchangeRateUpdateRequest">BatchInputExchangeRateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputexchangerateupdaterequest"></a>
<a id="schema_BatchInputExchangeRateUpdateRequest"></a>
<a id="tocSbatchinputexchangerateupdaterequest"></a>
<a id="tocsbatchinputexchangerateupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[ExchangeRateUpdateRequest](#schemaexchangerateupdaterequest)]|true|none|An array of ExchangeRateUpdateRequest objects, each representing an individual exchange rate update. This array is required and contains the details of each exchange rate to be updated, including the conversion rate and the effective date.|

<h2 id="tocS_BatchInputPublicObjectId">BatchInputPublicObjectId</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputpublicobjectid"></a>
<a id="schema_BatchInputPublicObjectId"></a>
<a id="tocSbatchinputpublicobjectid"></a>
<a id="tocsbatchinputpublicobjectid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[PublicObjectId](#schemapublicobjectid)]|true|none|An array of PublicObjectId objects. Each object contains an ID string representing a unique identifier for a public object. This property is required.|

<h2 id="tocS_BatchResponseExchangeRate">BatchResponseExchangeRate</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseexchangerate"></a>
<a id="schema_BatchResponseExchangeRate"></a>
<a id="tocSbatchresponseexchangerate"></a>
<a id="tocsbatchresponseexchangerate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The datetime the response was completed|
|links|object|false|none|The link to the next page with exchange rates.|
|requestedAt|string(date-time)|false|none|The datetime the of the request.|
|results|[[ExchangeRate](#schemaexchangerate)]|true|none|An array of exchange rate objects that represent the results of the batch operation.|
|startedAt|string(date-time)|true|none|The datetime the of the request.|
|status|string|true|none|The current status of the response (e.g. COMPLETED)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseExchangeRateWithErrors">BatchResponseExchangeRateWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponseexchangeratewitherrors"></a>
<a id="schema_BatchResponseExchangeRateWithErrors"></a>
<a id="tocSbatchresponseexchangeratewitherrors"></a>
<a id="tocsbatchresponseexchangeratewitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The datetime the response was completed|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of standard error objects detailing any errors encountered during the batch operation.|
|links|object|false|none|The link to the next page with exchange rates.|
|numErrors|integer(int32)|false|none|The number of errors associated to the request.|
|requestedAt|string(date-time)|false|none|The datetime the of the request.|
|results|[[ExchangeRate](#schemaexchangerate)]|true|none|An array of exchange rate objects representing the successful results of the batch operation.|
|startedAt|string(date-time)|true|none|The datetime the of the request.|
|status|string|true|none|The current status of the response (e.g. COMPLETED)|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_CentralExchangeRatesInformation">CentralExchangeRatesInformation</h2>
<!-- backwards compatibility -->
<a id="schemacentralexchangeratesinformation"></a>
<a id="schema_CentralExchangeRatesInformation"></a>
<a id="tocScentralexchangeratesinformation"></a>
<a id="tocscentralexchangeratesinformation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centralExchangeRatesEnabled|boolean|true|none|Indicates if central exchange rates is enabled for the portal or not.|

<h2 id="tocS_CollectionResponseCurrencyCodeInfoNoPaging">CollectionResponseCurrencyCodeInfoNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponsecurrencycodeinfonopaging"></a>
<a id="schema_CollectionResponseCurrencyCodeInfoNoPaging"></a>
<a id="tocScollectionresponsecurrencycodeinfonopaging"></a>
<a id="tocscollectionresponsecurrencycodeinfonopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[CurrencyCodeInfo](#schemacurrencycodeinfo)]|true|none|An array of currency code information objects, each containing details about a specific currency code and its name.|

<h2 id="tocS_CollectionResponseExchangeRateForwardPaging">CollectionResponseExchangeRateForwardPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseexchangerateforwardpaging"></a>
<a id="schema_CollectionResponseExchangeRateForwardPaging"></a>
<a id="tocScollectionresponseexchangerateforwardpaging"></a>
<a id="tocscollectionresponseexchangerateforwardpaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[ForwardPaging](#schemaforwardpaging)|false|none|Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.|
|results|[[ExchangeRate](#schemaexchangerate)]|true|none|An array of exchange rate objects, each representing a specific currency conversion rate.|

<h2 id="tocS_CollectionResponseExchangeRateNoPaging">CollectionResponseExchangeRateNoPaging</h2>
<!-- backwards compatibility -->
<a id="schemacollectionresponseexchangeratenopaging"></a>
<a id="schema_CollectionResponseExchangeRateNoPaging"></a>
<a id="tocScollectionresponseexchangeratenopaging"></a>
<a id="tocscollectionresponseexchangeratenopaging"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|results|[[ExchangeRate](#schemaexchangerate)]|true|none|An array of exchange rate objects, each representing the conversion rate details between two currencies.|

<h2 id="tocS_CompanyCurrency">CompanyCurrency</h2>
<!-- backwards compatibility -->
<a id="schemacompanycurrency"></a>
<a id="schema_CompanyCurrency"></a>
<a id="tocScompanycurrency"></a>
<a id="tocscompanycurrency"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|The date the company currency was created.|
|id|string|true|none|The currency code for the company currency|

<h2 id="tocS_CompanyCurrencyUpdateRequest">CompanyCurrencyUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacompanycurrencyupdaterequest"></a>
<a id="schema_CompanyCurrencyUpdateRequest"></a>
<a id="tocScompanycurrencyupdaterequest"></a>
<a id="tocscompanycurrencyupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The three-letter code representing a specific currency (ex. USD).|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyCode|AED|
|currencyCode|AFN|
|currencyCode|ALL|
|currencyCode|AMD|
|currencyCode|ANG|
|currencyCode|AOA|
|currencyCode|ARS|
|currencyCode|AUD|
|currencyCode|AWG|
|currencyCode|AZN|
|currencyCode|BAM|
|currencyCode|BBD|
|currencyCode|BDT|
|currencyCode|BGN|
|currencyCode|BHD|
|currencyCode|BIF|
|currencyCode|BMD|
|currencyCode|BND|
|currencyCode|BOB|
|currencyCode|BOV|
|currencyCode|BRL|
|currencyCode|BSD|
|currencyCode|BTN|
|currencyCode|BWP|
|currencyCode|BYN|
|currencyCode|BZD|
|currencyCode|CAD|
|currencyCode|CDF|
|currencyCode|CHE|
|currencyCode|CHF|
|currencyCode|CHW|
|currencyCode|CLF|
|currencyCode|CLP|
|currencyCode|CNY|
|currencyCode|COP|
|currencyCode|COU|
|currencyCode|CRC|
|currencyCode|CUC|
|currencyCode|CUP|
|currencyCode|CVE|
|currencyCode|CZK|
|currencyCode|DJF|
|currencyCode|DKK|
|currencyCode|DOP|
|currencyCode|DZD|
|currencyCode|EGP|
|currencyCode|ERN|
|currencyCode|ETB|
|currencyCode|EUR|
|currencyCode|FJD|
|currencyCode|FKP|
|currencyCode|GBP|
|currencyCode|GEL|
|currencyCode|GHS|
|currencyCode|GIP|
|currencyCode|GMD|
|currencyCode|GNF|
|currencyCode|GTQ|
|currencyCode|GYD|
|currencyCode|HKD|
|currencyCode|HNL|
|currencyCode|HRK|
|currencyCode|HTG|
|currencyCode|HUF|
|currencyCode|IDR|
|currencyCode|ILS|
|currencyCode|INR|
|currencyCode|IQD|
|currencyCode|IRR|
|currencyCode|ISK|
|currencyCode|JMD|
|currencyCode|JOD|
|currencyCode|JPY|
|currencyCode|KES|
|currencyCode|KGS|
|currencyCode|KHR|
|currencyCode|KMF|
|currencyCode|KPW|
|currencyCode|KRW|
|currencyCode|KWD|
|currencyCode|KYD|
|currencyCode|KZT|
|currencyCode|LAK|
|currencyCode|LBP|
|currencyCode|LKR|
|currencyCode|LRD|
|currencyCode|LSL|
|currencyCode|LYD|
|currencyCode|MAD|
|currencyCode|MDL|
|currencyCode|MGA|
|currencyCode|MKD|
|currencyCode|MMK|
|currencyCode|MNT|
|currencyCode|MOP|
|currencyCode|MRU|
|currencyCode|MUR|
|currencyCode|MVR|
|currencyCode|MWK|
|currencyCode|MXN|
|currencyCode|MXV|
|currencyCode|MYR|
|currencyCode|MZN|
|currencyCode|NAD|
|currencyCode|NGN|
|currencyCode|NIO|
|currencyCode|NOK|
|currencyCode|NPR|
|currencyCode|NZD|
|currencyCode|OMR|
|currencyCode|PAB|
|currencyCode|PEN|
|currencyCode|PGK|
|currencyCode|PHP|
|currencyCode|PKR|
|currencyCode|PLN|
|currencyCode|PYG|
|currencyCode|QAR|
|currencyCode|RON|
|currencyCode|RSD|
|currencyCode|RUB|
|currencyCode|RWF|
|currencyCode|SAR|
|currencyCode|SBD|
|currencyCode|SCR|
|currencyCode|SDG|
|currencyCode|SEK|
|currencyCode|SGD|
|currencyCode|SHP|
|currencyCode|SLL|
|currencyCode|SOS|
|currencyCode|SRD|
|currencyCode|SSP|
|currencyCode|STN|
|currencyCode|SVC|
|currencyCode|SYP|
|currencyCode|SZL|
|currencyCode|THB|
|currencyCode|TJS|
|currencyCode|TMT|
|currencyCode|TND|
|currencyCode|TOP|
|currencyCode|TRY|
|currencyCode|TTD|
|currencyCode|TWD|
|currencyCode|TZS|
|currencyCode|UAH|
|currencyCode|UGX|
|currencyCode|USD|
|currencyCode|USN|
|currencyCode|UYI|
|currencyCode|UYU|
|currencyCode|UZS|
|currencyCode|VEF|
|currencyCode|VND|
|currencyCode|VUV|
|currencyCode|WST|
|currencyCode|XAF|
|currencyCode|XAG|
|currencyCode|XAU|
|currencyCode|XBA|
|currencyCode|XBB|
|currencyCode|XBC|
|currencyCode|XBD|
|currencyCode|XCD|
|currencyCode|XDR|
|currencyCode|XOF|
|currencyCode|XPD|
|currencyCode|XPF|
|currencyCode|XPT|
|currencyCode|XSU|
|currencyCode|XUA|
|currencyCode|YER|
|currencyCode|ZAR|
|currencyCode|ZMW|
|currencyCode|ZWL|

<h2 id="tocS_CurrencyCodeInfo">CurrencyCodeInfo</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycodeinfo"></a>
<a id="schema_CurrencyCodeInfo"></a>
<a id="tocScurrencycodeinfo"></a>
<a id="tocscurrencycodeinfo"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The three-letter code representing a specific currency (ex. USD).|
|currencyName|string|true|none|The full name of the currency (ex. US Dollar).|

<h2 id="tocS_CurrencyCreateRequest">CurrencyCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycreaterequest"></a>
<a id="schema_CurrencyCreateRequest"></a>
<a id="tocScurrencycreaterequest"></a>
<a id="tocscurrencycreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|The currency code being added to the HubSpot portal for use with central exchange rates.|

#### Enumerated Values

|Property|Value|
|---|---|
|currencyCode|AED|
|currencyCode|AFN|
|currencyCode|ALL|
|currencyCode|AMD|
|currencyCode|ANG|
|currencyCode|AOA|
|currencyCode|ARS|
|currencyCode|AUD|
|currencyCode|AWG|
|currencyCode|AZN|
|currencyCode|BAM|
|currencyCode|BBD|
|currencyCode|BDT|
|currencyCode|BGN|
|currencyCode|BHD|
|currencyCode|BIF|
|currencyCode|BMD|
|currencyCode|BND|
|currencyCode|BOB|
|currencyCode|BOV|
|currencyCode|BRL|
|currencyCode|BSD|
|currencyCode|BTN|
|currencyCode|BWP|
|currencyCode|BYN|
|currencyCode|BZD|
|currencyCode|CAD|
|currencyCode|CDF|
|currencyCode|CHE|
|currencyCode|CHF|
|currencyCode|CHW|
|currencyCode|CLF|
|currencyCode|CLP|
|currencyCode|CNY|
|currencyCode|COP|
|currencyCode|COU|
|currencyCode|CRC|
|currencyCode|CUC|
|currencyCode|CUP|
|currencyCode|CVE|
|currencyCode|CZK|
|currencyCode|DJF|
|currencyCode|DKK|
|currencyCode|DOP|
|currencyCode|DZD|
|currencyCode|EGP|
|currencyCode|ERN|
|currencyCode|ETB|
|currencyCode|EUR|
|currencyCode|FJD|
|currencyCode|FKP|
|currencyCode|GBP|
|currencyCode|GEL|
|currencyCode|GHS|
|currencyCode|GIP|
|currencyCode|GMD|
|currencyCode|GNF|
|currencyCode|GTQ|
|currencyCode|GYD|
|currencyCode|HKD|
|currencyCode|HNL|
|currencyCode|HRK|
|currencyCode|HTG|
|currencyCode|HUF|
|currencyCode|IDR|
|currencyCode|ILS|
|currencyCode|INR|
|currencyCode|IQD|
|currencyCode|IRR|
|currencyCode|ISK|
|currencyCode|JMD|
|currencyCode|JOD|
|currencyCode|JPY|
|currencyCode|KES|
|currencyCode|KGS|
|currencyCode|KHR|
|currencyCode|KMF|
|currencyCode|KPW|
|currencyCode|KRW|
|currencyCode|KWD|
|currencyCode|KYD|
|currencyCode|KZT|
|currencyCode|LAK|
|currencyCode|LBP|
|currencyCode|LKR|
|currencyCode|LRD|
|currencyCode|LSL|
|currencyCode|LYD|
|currencyCode|MAD|
|currencyCode|MDL|
|currencyCode|MGA|
|currencyCode|MKD|
|currencyCode|MMK|
|currencyCode|MNT|
|currencyCode|MOP|
|currencyCode|MRU|
|currencyCode|MUR|
|currencyCode|MVR|
|currencyCode|MWK|
|currencyCode|MXN|
|currencyCode|MXV|
|currencyCode|MYR|
|currencyCode|MZN|
|currencyCode|NAD|
|currencyCode|NGN|
|currencyCode|NIO|
|currencyCode|NOK|
|currencyCode|NPR|
|currencyCode|NZD|
|currencyCode|OMR|
|currencyCode|PAB|
|currencyCode|PEN|
|currencyCode|PGK|
|currencyCode|PHP|
|currencyCode|PKR|
|currencyCode|PLN|
|currencyCode|PYG|
|currencyCode|QAR|
|currencyCode|RON|
|currencyCode|RSD|
|currencyCode|RUB|
|currencyCode|RWF|
|currencyCode|SAR|
|currencyCode|SBD|
|currencyCode|SCR|
|currencyCode|SDG|
|currencyCode|SEK|
|currencyCode|SGD|
|currencyCode|SHP|
|currencyCode|SLL|
|currencyCode|SOS|
|currencyCode|SRD|
|currencyCode|SSP|
|currencyCode|STN|
|currencyCode|SVC|
|currencyCode|SYP|
|currencyCode|SZL|
|currencyCode|THB|
|currencyCode|TJS|
|currencyCode|TMT|
|currencyCode|TND|
|currencyCode|TOP|
|currencyCode|TRY|
|currencyCode|TTD|
|currencyCode|TWD|
|currencyCode|TZS|
|currencyCode|UAH|
|currencyCode|UGX|
|currencyCode|USD|
|currencyCode|USN|
|currencyCode|UYI|
|currencyCode|UYU|
|currencyCode|UZS|
|currencyCode|VEF|
|currencyCode|VND|
|currencyCode|VUV|
|currencyCode|WST|
|currencyCode|XAF|
|currencyCode|XAG|
|currencyCode|XAU|
|currencyCode|XBA|
|currencyCode|XBB|
|currencyCode|XBC|
|currencyCode|XBD|
|currencyCode|XCD|
|currencyCode|XDR|
|currencyCode|XOF|
|currencyCode|XPD|
|currencyCode|XPF|
|currencyCode|XPT|
|currencyCode|XSU|
|currencyCode|XUA|
|currencyCode|YER|
|currencyCode|ZAR|
|currencyCode|ZMW|
|currencyCode|ZWL|

<h2 id="tocS_CurrencyPairUpdate">CurrencyPairUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacurrencypairupdate"></a>
<a id="schema_CurrencyPairUpdate"></a>
<a id="tocScurrencypairupdate"></a>
<a id="tocscurrencypairupdate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromCurrencyCode|string|true|none|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.|
|toCurrencyCode|string|true|none|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert to.|
|visibleInUI|boolean|true|none|This indicates if the currency pair is shown in the MultiCurrency settings page. Setting this to false will remove the currency pair from the settings page.|

#### Enumerated Values

|Property|Value|
|---|---|
|fromCurrencyCode|AED|
|fromCurrencyCode|AFN|
|fromCurrencyCode|ALL|
|fromCurrencyCode|AMD|
|fromCurrencyCode|ANG|
|fromCurrencyCode|AOA|
|fromCurrencyCode|ARS|
|fromCurrencyCode|AUD|
|fromCurrencyCode|AWG|
|fromCurrencyCode|AZN|
|fromCurrencyCode|BAM|
|fromCurrencyCode|BBD|
|fromCurrencyCode|BDT|
|fromCurrencyCode|BGN|
|fromCurrencyCode|BHD|
|fromCurrencyCode|BIF|
|fromCurrencyCode|BMD|
|fromCurrencyCode|BND|
|fromCurrencyCode|BOB|
|fromCurrencyCode|BOV|
|fromCurrencyCode|BRL|
|fromCurrencyCode|BSD|
|fromCurrencyCode|BTN|
|fromCurrencyCode|BWP|
|fromCurrencyCode|BYN|
|fromCurrencyCode|BZD|
|fromCurrencyCode|CAD|
|fromCurrencyCode|CDF|
|fromCurrencyCode|CHE|
|fromCurrencyCode|CHF|
|fromCurrencyCode|CHW|
|fromCurrencyCode|CLF|
|fromCurrencyCode|CLP|
|fromCurrencyCode|CNY|
|fromCurrencyCode|COP|
|fromCurrencyCode|COU|
|fromCurrencyCode|CRC|
|fromCurrencyCode|CUC|
|fromCurrencyCode|CUP|
|fromCurrencyCode|CVE|
|fromCurrencyCode|CZK|
|fromCurrencyCode|DJF|
|fromCurrencyCode|DKK|
|fromCurrencyCode|DOP|
|fromCurrencyCode|DZD|
|fromCurrencyCode|EGP|
|fromCurrencyCode|ERN|
|fromCurrencyCode|ETB|
|fromCurrencyCode|EUR|
|fromCurrencyCode|FJD|
|fromCurrencyCode|FKP|
|fromCurrencyCode|GBP|
|fromCurrencyCode|GEL|
|fromCurrencyCode|GHS|
|fromCurrencyCode|GIP|
|fromCurrencyCode|GMD|
|fromCurrencyCode|GNF|
|fromCurrencyCode|GTQ|
|fromCurrencyCode|GYD|
|fromCurrencyCode|HKD|
|fromCurrencyCode|HNL|
|fromCurrencyCode|HRK|
|fromCurrencyCode|HTG|
|fromCurrencyCode|HUF|
|fromCurrencyCode|IDR|
|fromCurrencyCode|ILS|
|fromCurrencyCode|INR|
|fromCurrencyCode|IQD|
|fromCurrencyCode|IRR|
|fromCurrencyCode|ISK|
|fromCurrencyCode|JMD|
|fromCurrencyCode|JOD|
|fromCurrencyCode|JPY|
|fromCurrencyCode|KES|
|fromCurrencyCode|KGS|
|fromCurrencyCode|KHR|
|fromCurrencyCode|KMF|
|fromCurrencyCode|KPW|
|fromCurrencyCode|KRW|
|fromCurrencyCode|KWD|
|fromCurrencyCode|KYD|
|fromCurrencyCode|KZT|
|fromCurrencyCode|LAK|
|fromCurrencyCode|LBP|
|fromCurrencyCode|LKR|
|fromCurrencyCode|LRD|
|fromCurrencyCode|LSL|
|fromCurrencyCode|LYD|
|fromCurrencyCode|MAD|
|fromCurrencyCode|MDL|
|fromCurrencyCode|MGA|
|fromCurrencyCode|MKD|
|fromCurrencyCode|MMK|
|fromCurrencyCode|MNT|
|fromCurrencyCode|MOP|
|fromCurrencyCode|MRU|
|fromCurrencyCode|MUR|
|fromCurrencyCode|MVR|
|fromCurrencyCode|MWK|
|fromCurrencyCode|MXN|
|fromCurrencyCode|MXV|
|fromCurrencyCode|MYR|
|fromCurrencyCode|MZN|
|fromCurrencyCode|NAD|
|fromCurrencyCode|NGN|
|fromCurrencyCode|NIO|
|fromCurrencyCode|NOK|
|fromCurrencyCode|NPR|
|fromCurrencyCode|NZD|
|fromCurrencyCode|OMR|
|fromCurrencyCode|PAB|
|fromCurrencyCode|PEN|
|fromCurrencyCode|PGK|
|fromCurrencyCode|PHP|
|fromCurrencyCode|PKR|
|fromCurrencyCode|PLN|
|fromCurrencyCode|PYG|
|fromCurrencyCode|QAR|
|fromCurrencyCode|RON|
|fromCurrencyCode|RSD|
|fromCurrencyCode|RUB|
|fromCurrencyCode|RWF|
|fromCurrencyCode|SAR|
|fromCurrencyCode|SBD|
|fromCurrencyCode|SCR|
|fromCurrencyCode|SDG|
|fromCurrencyCode|SEK|
|fromCurrencyCode|SGD|
|fromCurrencyCode|SHP|
|fromCurrencyCode|SLL|
|fromCurrencyCode|SOS|
|fromCurrencyCode|SRD|
|fromCurrencyCode|SSP|
|fromCurrencyCode|STN|
|fromCurrencyCode|SVC|
|fromCurrencyCode|SYP|
|fromCurrencyCode|SZL|
|fromCurrencyCode|THB|
|fromCurrencyCode|TJS|
|fromCurrencyCode|TMT|
|fromCurrencyCode|TND|
|fromCurrencyCode|TOP|
|fromCurrencyCode|TRY|
|fromCurrencyCode|TTD|
|fromCurrencyCode|TWD|
|fromCurrencyCode|TZS|
|fromCurrencyCode|UAH|
|fromCurrencyCode|UGX|
|fromCurrencyCode|USD|
|fromCurrencyCode|USN|
|fromCurrencyCode|UYI|
|fromCurrencyCode|UYU|
|fromCurrencyCode|UZS|
|fromCurrencyCode|VEF|
|fromCurrencyCode|VND|
|fromCurrencyCode|VUV|
|fromCurrencyCode|WST|
|fromCurrencyCode|XAF|
|fromCurrencyCode|XAG|
|fromCurrencyCode|XAU|
|fromCurrencyCode|XBA|
|fromCurrencyCode|XBB|
|fromCurrencyCode|XBC|
|fromCurrencyCode|XBD|
|fromCurrencyCode|XCD|
|fromCurrencyCode|XDR|
|fromCurrencyCode|XOF|
|fromCurrencyCode|XPD|
|fromCurrencyCode|XPF|
|fromCurrencyCode|XPT|
|fromCurrencyCode|XSU|
|fromCurrencyCode|XUA|
|fromCurrencyCode|YER|
|fromCurrencyCode|ZAR|
|fromCurrencyCode|ZMW|
|fromCurrencyCode|ZWL|
|toCurrencyCode|AED|
|toCurrencyCode|AFN|
|toCurrencyCode|ALL|
|toCurrencyCode|AMD|
|toCurrencyCode|ANG|
|toCurrencyCode|AOA|
|toCurrencyCode|ARS|
|toCurrencyCode|AUD|
|toCurrencyCode|AWG|
|toCurrencyCode|AZN|
|toCurrencyCode|BAM|
|toCurrencyCode|BBD|
|toCurrencyCode|BDT|
|toCurrencyCode|BGN|
|toCurrencyCode|BHD|
|toCurrencyCode|BIF|
|toCurrencyCode|BMD|
|toCurrencyCode|BND|
|toCurrencyCode|BOB|
|toCurrencyCode|BOV|
|toCurrencyCode|BRL|
|toCurrencyCode|BSD|
|toCurrencyCode|BTN|
|toCurrencyCode|BWP|
|toCurrencyCode|BYN|
|toCurrencyCode|BZD|
|toCurrencyCode|CAD|
|toCurrencyCode|CDF|
|toCurrencyCode|CHE|
|toCurrencyCode|CHF|
|toCurrencyCode|CHW|
|toCurrencyCode|CLF|
|toCurrencyCode|CLP|
|toCurrencyCode|CNY|
|toCurrencyCode|COP|
|toCurrencyCode|COU|
|toCurrencyCode|CRC|
|toCurrencyCode|CUC|
|toCurrencyCode|CUP|
|toCurrencyCode|CVE|
|toCurrencyCode|CZK|
|toCurrencyCode|DJF|
|toCurrencyCode|DKK|
|toCurrencyCode|DOP|
|toCurrencyCode|DZD|
|toCurrencyCode|EGP|
|toCurrencyCode|ERN|
|toCurrencyCode|ETB|
|toCurrencyCode|EUR|
|toCurrencyCode|FJD|
|toCurrencyCode|FKP|
|toCurrencyCode|GBP|
|toCurrencyCode|GEL|
|toCurrencyCode|GHS|
|toCurrencyCode|GIP|
|toCurrencyCode|GMD|
|toCurrencyCode|GNF|
|toCurrencyCode|GTQ|
|toCurrencyCode|GYD|
|toCurrencyCode|HKD|
|toCurrencyCode|HNL|
|toCurrencyCode|HRK|
|toCurrencyCode|HTG|
|toCurrencyCode|HUF|
|toCurrencyCode|IDR|
|toCurrencyCode|ILS|
|toCurrencyCode|INR|
|toCurrencyCode|IQD|
|toCurrencyCode|IRR|
|toCurrencyCode|ISK|
|toCurrencyCode|JMD|
|toCurrencyCode|JOD|
|toCurrencyCode|JPY|
|toCurrencyCode|KES|
|toCurrencyCode|KGS|
|toCurrencyCode|KHR|
|toCurrencyCode|KMF|
|toCurrencyCode|KPW|
|toCurrencyCode|KRW|
|toCurrencyCode|KWD|
|toCurrencyCode|KYD|
|toCurrencyCode|KZT|
|toCurrencyCode|LAK|
|toCurrencyCode|LBP|
|toCurrencyCode|LKR|
|toCurrencyCode|LRD|
|toCurrencyCode|LSL|
|toCurrencyCode|LYD|
|toCurrencyCode|MAD|
|toCurrencyCode|MDL|
|toCurrencyCode|MGA|
|toCurrencyCode|MKD|
|toCurrencyCode|MMK|
|toCurrencyCode|MNT|
|toCurrencyCode|MOP|
|toCurrencyCode|MRU|
|toCurrencyCode|MUR|
|toCurrencyCode|MVR|
|toCurrencyCode|MWK|
|toCurrencyCode|MXN|
|toCurrencyCode|MXV|
|toCurrencyCode|MYR|
|toCurrencyCode|MZN|
|toCurrencyCode|NAD|
|toCurrencyCode|NGN|
|toCurrencyCode|NIO|
|toCurrencyCode|NOK|
|toCurrencyCode|NPR|
|toCurrencyCode|NZD|
|toCurrencyCode|OMR|
|toCurrencyCode|PAB|
|toCurrencyCode|PEN|
|toCurrencyCode|PGK|
|toCurrencyCode|PHP|
|toCurrencyCode|PKR|
|toCurrencyCode|PLN|
|toCurrencyCode|PYG|
|toCurrencyCode|QAR|
|toCurrencyCode|RON|
|toCurrencyCode|RSD|
|toCurrencyCode|RUB|
|toCurrencyCode|RWF|
|toCurrencyCode|SAR|
|toCurrencyCode|SBD|
|toCurrencyCode|SCR|
|toCurrencyCode|SDG|
|toCurrencyCode|SEK|
|toCurrencyCode|SGD|
|toCurrencyCode|SHP|
|toCurrencyCode|SLL|
|toCurrencyCode|SOS|
|toCurrencyCode|SRD|
|toCurrencyCode|SSP|
|toCurrencyCode|STN|
|toCurrencyCode|SVC|
|toCurrencyCode|SYP|
|toCurrencyCode|SZL|
|toCurrencyCode|THB|
|toCurrencyCode|TJS|
|toCurrencyCode|TMT|
|toCurrencyCode|TND|
|toCurrencyCode|TOP|
|toCurrencyCode|TRY|
|toCurrencyCode|TTD|
|toCurrencyCode|TWD|
|toCurrencyCode|TZS|
|toCurrencyCode|UAH|
|toCurrencyCode|UGX|
|toCurrencyCode|USD|
|toCurrencyCode|USN|
|toCurrencyCode|UYI|
|toCurrencyCode|UYU|
|toCurrencyCode|UZS|
|toCurrencyCode|VEF|
|toCurrencyCode|VND|
|toCurrencyCode|VUV|
|toCurrencyCode|WST|
|toCurrencyCode|XAF|
|toCurrencyCode|XAG|
|toCurrencyCode|XAU|
|toCurrencyCode|XBA|
|toCurrencyCode|XBB|
|toCurrencyCode|XBC|
|toCurrencyCode|XBD|
|toCurrencyCode|XCD|
|toCurrencyCode|XDR|
|toCurrencyCode|XOF|
|toCurrencyCode|XPD|
|toCurrencyCode|XPF|
|toCurrencyCode|XPT|
|toCurrencyCode|XSU|
|toCurrencyCode|XUA|
|toCurrencyCode|YER|
|toCurrencyCode|ZAR|
|toCurrencyCode|ZMW|
|toCurrencyCode|ZWL|

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

<h2 id="tocS_ExchangeRate">ExchangeRate</h2>
<!-- backwards compatibility -->
<a id="schemaexchangerate"></a>
<a id="schema_ExchangeRate"></a>
<a id="tocSexchangerate"></a>
<a id="tocsexchangerate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionRate|number|true|none|The conversion rate between the to and from currency code of this exchange rate.|
|createdAt|string(date-time)|true|none|The date the exchange rate was created.|
|effectiveAt|string(date-time)|true|none|The date the exchange rate is in effect.|
|fromCurrencyCode|string|true|none|This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting from.|
|id|string|true|none|A unique identifier for the exchange rate|
|toCurrencyCode|string|true|none|This represents the three-letter currency code (such as USD for US Dollar) of the currency you are converting to.|
|updatedAt|string(date-time)|true|none|The date the exchange rate was last updated.|
|visibleInUI|boolean|true|none|This indicates if the exchange rate is shown in the MultiCurrency settings page.|

#### Enumerated Values

|Property|Value|
|---|---|
|fromCurrencyCode|AED|
|fromCurrencyCode|AFN|
|fromCurrencyCode|ALL|
|fromCurrencyCode|AMD|
|fromCurrencyCode|ANG|
|fromCurrencyCode|AOA|
|fromCurrencyCode|ARS|
|fromCurrencyCode|AUD|
|fromCurrencyCode|AWG|
|fromCurrencyCode|AZN|
|fromCurrencyCode|BAM|
|fromCurrencyCode|BBD|
|fromCurrencyCode|BDT|
|fromCurrencyCode|BGN|
|fromCurrencyCode|BHD|
|fromCurrencyCode|BIF|
|fromCurrencyCode|BMD|
|fromCurrencyCode|BND|
|fromCurrencyCode|BOB|
|fromCurrencyCode|BOV|
|fromCurrencyCode|BRL|
|fromCurrencyCode|BSD|
|fromCurrencyCode|BTN|
|fromCurrencyCode|BWP|
|fromCurrencyCode|BYN|
|fromCurrencyCode|BZD|
|fromCurrencyCode|CAD|
|fromCurrencyCode|CDF|
|fromCurrencyCode|CHE|
|fromCurrencyCode|CHF|
|fromCurrencyCode|CHW|
|fromCurrencyCode|CLF|
|fromCurrencyCode|CLP|
|fromCurrencyCode|CNY|
|fromCurrencyCode|COP|
|fromCurrencyCode|COU|
|fromCurrencyCode|CRC|
|fromCurrencyCode|CUC|
|fromCurrencyCode|CUP|
|fromCurrencyCode|CVE|
|fromCurrencyCode|CZK|
|fromCurrencyCode|DJF|
|fromCurrencyCode|DKK|
|fromCurrencyCode|DOP|
|fromCurrencyCode|DZD|
|fromCurrencyCode|EGP|
|fromCurrencyCode|ERN|
|fromCurrencyCode|ETB|
|fromCurrencyCode|EUR|
|fromCurrencyCode|FJD|
|fromCurrencyCode|FKP|
|fromCurrencyCode|GBP|
|fromCurrencyCode|GEL|
|fromCurrencyCode|GHS|
|fromCurrencyCode|GIP|
|fromCurrencyCode|GMD|
|fromCurrencyCode|GNF|
|fromCurrencyCode|GTQ|
|fromCurrencyCode|GYD|
|fromCurrencyCode|HKD|
|fromCurrencyCode|HNL|
|fromCurrencyCode|HRK|
|fromCurrencyCode|HTG|
|fromCurrencyCode|HUF|
|fromCurrencyCode|IDR|
|fromCurrencyCode|ILS|
|fromCurrencyCode|INR|
|fromCurrencyCode|IQD|
|fromCurrencyCode|IRR|
|fromCurrencyCode|ISK|
|fromCurrencyCode|JMD|
|fromCurrencyCode|JOD|
|fromCurrencyCode|JPY|
|fromCurrencyCode|KES|
|fromCurrencyCode|KGS|
|fromCurrencyCode|KHR|
|fromCurrencyCode|KMF|
|fromCurrencyCode|KPW|
|fromCurrencyCode|KRW|
|fromCurrencyCode|KWD|
|fromCurrencyCode|KYD|
|fromCurrencyCode|KZT|
|fromCurrencyCode|LAK|
|fromCurrencyCode|LBP|
|fromCurrencyCode|LKR|
|fromCurrencyCode|LRD|
|fromCurrencyCode|LSL|
|fromCurrencyCode|LYD|
|fromCurrencyCode|MAD|
|fromCurrencyCode|MDL|
|fromCurrencyCode|MGA|
|fromCurrencyCode|MKD|
|fromCurrencyCode|MMK|
|fromCurrencyCode|MNT|
|fromCurrencyCode|MOP|
|fromCurrencyCode|MRU|
|fromCurrencyCode|MUR|
|fromCurrencyCode|MVR|
|fromCurrencyCode|MWK|
|fromCurrencyCode|MXN|
|fromCurrencyCode|MXV|
|fromCurrencyCode|MYR|
|fromCurrencyCode|MZN|
|fromCurrencyCode|NAD|
|fromCurrencyCode|NGN|
|fromCurrencyCode|NIO|
|fromCurrencyCode|NOK|
|fromCurrencyCode|NPR|
|fromCurrencyCode|NZD|
|fromCurrencyCode|OMR|
|fromCurrencyCode|PAB|
|fromCurrencyCode|PEN|
|fromCurrencyCode|PGK|
|fromCurrencyCode|PHP|
|fromCurrencyCode|PKR|
|fromCurrencyCode|PLN|
|fromCurrencyCode|PYG|
|fromCurrencyCode|QAR|
|fromCurrencyCode|RON|
|fromCurrencyCode|RSD|
|fromCurrencyCode|RUB|
|fromCurrencyCode|RWF|
|fromCurrencyCode|SAR|
|fromCurrencyCode|SBD|
|fromCurrencyCode|SCR|
|fromCurrencyCode|SDG|
|fromCurrencyCode|SEK|
|fromCurrencyCode|SGD|
|fromCurrencyCode|SHP|
|fromCurrencyCode|SLL|
|fromCurrencyCode|SOS|
|fromCurrencyCode|SRD|
|fromCurrencyCode|SSP|
|fromCurrencyCode|STN|
|fromCurrencyCode|SVC|
|fromCurrencyCode|SYP|
|fromCurrencyCode|SZL|
|fromCurrencyCode|THB|
|fromCurrencyCode|TJS|
|fromCurrencyCode|TMT|
|fromCurrencyCode|TND|
|fromCurrencyCode|TOP|
|fromCurrencyCode|TRY|
|fromCurrencyCode|TTD|
|fromCurrencyCode|TWD|
|fromCurrencyCode|TZS|
|fromCurrencyCode|UAH|
|fromCurrencyCode|UGX|
|fromCurrencyCode|USD|
|fromCurrencyCode|USN|
|fromCurrencyCode|UYI|
|fromCurrencyCode|UYU|
|fromCurrencyCode|UZS|
|fromCurrencyCode|VEF|
|fromCurrencyCode|VND|
|fromCurrencyCode|VUV|
|fromCurrencyCode|WST|
|fromCurrencyCode|XAF|
|fromCurrencyCode|XAG|
|fromCurrencyCode|XAU|
|fromCurrencyCode|XBA|
|fromCurrencyCode|XBB|
|fromCurrencyCode|XBC|
|fromCurrencyCode|XBD|
|fromCurrencyCode|XCD|
|fromCurrencyCode|XDR|
|fromCurrencyCode|XOF|
|fromCurrencyCode|XPD|
|fromCurrencyCode|XPF|
|fromCurrencyCode|XPT|
|fromCurrencyCode|XSU|
|fromCurrencyCode|XUA|
|fromCurrencyCode|YER|
|fromCurrencyCode|ZAR|
|fromCurrencyCode|ZMW|
|fromCurrencyCode|ZWL|
|toCurrencyCode|AED|
|toCurrencyCode|AFN|
|toCurrencyCode|ALL|
|toCurrencyCode|AMD|
|toCurrencyCode|ANG|
|toCurrencyCode|AOA|
|toCurrencyCode|ARS|
|toCurrencyCode|AUD|
|toCurrencyCode|AWG|
|toCurrencyCode|AZN|
|toCurrencyCode|BAM|
|toCurrencyCode|BBD|
|toCurrencyCode|BDT|
|toCurrencyCode|BGN|
|toCurrencyCode|BHD|
|toCurrencyCode|BIF|
|toCurrencyCode|BMD|
|toCurrencyCode|BND|
|toCurrencyCode|BOB|
|toCurrencyCode|BOV|
|toCurrencyCode|BRL|
|toCurrencyCode|BSD|
|toCurrencyCode|BTN|
|toCurrencyCode|BWP|
|toCurrencyCode|BYN|
|toCurrencyCode|BZD|
|toCurrencyCode|CAD|
|toCurrencyCode|CDF|
|toCurrencyCode|CHE|
|toCurrencyCode|CHF|
|toCurrencyCode|CHW|
|toCurrencyCode|CLF|
|toCurrencyCode|CLP|
|toCurrencyCode|CNY|
|toCurrencyCode|COP|
|toCurrencyCode|COU|
|toCurrencyCode|CRC|
|toCurrencyCode|CUC|
|toCurrencyCode|CUP|
|toCurrencyCode|CVE|
|toCurrencyCode|CZK|
|toCurrencyCode|DJF|
|toCurrencyCode|DKK|
|toCurrencyCode|DOP|
|toCurrencyCode|DZD|
|toCurrencyCode|EGP|
|toCurrencyCode|ERN|
|toCurrencyCode|ETB|
|toCurrencyCode|EUR|
|toCurrencyCode|FJD|
|toCurrencyCode|FKP|
|toCurrencyCode|GBP|
|toCurrencyCode|GEL|
|toCurrencyCode|GHS|
|toCurrencyCode|GIP|
|toCurrencyCode|GMD|
|toCurrencyCode|GNF|
|toCurrencyCode|GTQ|
|toCurrencyCode|GYD|
|toCurrencyCode|HKD|
|toCurrencyCode|HNL|
|toCurrencyCode|HRK|
|toCurrencyCode|HTG|
|toCurrencyCode|HUF|
|toCurrencyCode|IDR|
|toCurrencyCode|ILS|
|toCurrencyCode|INR|
|toCurrencyCode|IQD|
|toCurrencyCode|IRR|
|toCurrencyCode|ISK|
|toCurrencyCode|JMD|
|toCurrencyCode|JOD|
|toCurrencyCode|JPY|
|toCurrencyCode|KES|
|toCurrencyCode|KGS|
|toCurrencyCode|KHR|
|toCurrencyCode|KMF|
|toCurrencyCode|KPW|
|toCurrencyCode|KRW|
|toCurrencyCode|KWD|
|toCurrencyCode|KYD|
|toCurrencyCode|KZT|
|toCurrencyCode|LAK|
|toCurrencyCode|LBP|
|toCurrencyCode|LKR|
|toCurrencyCode|LRD|
|toCurrencyCode|LSL|
|toCurrencyCode|LYD|
|toCurrencyCode|MAD|
|toCurrencyCode|MDL|
|toCurrencyCode|MGA|
|toCurrencyCode|MKD|
|toCurrencyCode|MMK|
|toCurrencyCode|MNT|
|toCurrencyCode|MOP|
|toCurrencyCode|MRU|
|toCurrencyCode|MUR|
|toCurrencyCode|MVR|
|toCurrencyCode|MWK|
|toCurrencyCode|MXN|
|toCurrencyCode|MXV|
|toCurrencyCode|MYR|
|toCurrencyCode|MZN|
|toCurrencyCode|NAD|
|toCurrencyCode|NGN|
|toCurrencyCode|NIO|
|toCurrencyCode|NOK|
|toCurrencyCode|NPR|
|toCurrencyCode|NZD|
|toCurrencyCode|OMR|
|toCurrencyCode|PAB|
|toCurrencyCode|PEN|
|toCurrencyCode|PGK|
|toCurrencyCode|PHP|
|toCurrencyCode|PKR|
|toCurrencyCode|PLN|
|toCurrencyCode|PYG|
|toCurrencyCode|QAR|
|toCurrencyCode|RON|
|toCurrencyCode|RSD|
|toCurrencyCode|RUB|
|toCurrencyCode|RWF|
|toCurrencyCode|SAR|
|toCurrencyCode|SBD|
|toCurrencyCode|SCR|
|toCurrencyCode|SDG|
|toCurrencyCode|SEK|
|toCurrencyCode|SGD|
|toCurrencyCode|SHP|
|toCurrencyCode|SLL|
|toCurrencyCode|SOS|
|toCurrencyCode|SRD|
|toCurrencyCode|SSP|
|toCurrencyCode|STN|
|toCurrencyCode|SVC|
|toCurrencyCode|SYP|
|toCurrencyCode|SZL|
|toCurrencyCode|THB|
|toCurrencyCode|TJS|
|toCurrencyCode|TMT|
|toCurrencyCode|TND|
|toCurrencyCode|TOP|
|toCurrencyCode|TRY|
|toCurrencyCode|TTD|
|toCurrencyCode|TWD|
|toCurrencyCode|TZS|
|toCurrencyCode|UAH|
|toCurrencyCode|UGX|
|toCurrencyCode|USD|
|toCurrencyCode|USN|
|toCurrencyCode|UYI|
|toCurrencyCode|UYU|
|toCurrencyCode|UZS|
|toCurrencyCode|VEF|
|toCurrencyCode|VND|
|toCurrencyCode|VUV|
|toCurrencyCode|WST|
|toCurrencyCode|XAF|
|toCurrencyCode|XAG|
|toCurrencyCode|XAU|
|toCurrencyCode|XBA|
|toCurrencyCode|XBB|
|toCurrencyCode|XBC|
|toCurrencyCode|XBD|
|toCurrencyCode|XCD|
|toCurrencyCode|XDR|
|toCurrencyCode|XOF|
|toCurrencyCode|XPD|
|toCurrencyCode|XPF|
|toCurrencyCode|XPT|
|toCurrencyCode|XSU|
|toCurrencyCode|XUA|
|toCurrencyCode|YER|
|toCurrencyCode|ZAR|
|toCurrencyCode|ZMW|
|toCurrencyCode|ZWL|

<h2 id="tocS_ExchangeRateCreateRequest">ExchangeRateCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeratecreaterequest"></a>
<a id="schema_ExchangeRateCreateRequest"></a>
<a id="tocSexchangeratecreaterequest"></a>
<a id="tocsexchangeratecreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionRate|number|true|none|The conversion rate between the to and from currency code of this exchange rate.|
|effectiveAt|string(date-time)|false|none|The date the exchange rate is in effect.|
|fromCurrencyCode|string|true|none|This represents the three-letter currency code (such as USD for US Dollar) of the currency you want to convert from.|

#### Enumerated Values

|Property|Value|
|---|---|
|fromCurrencyCode|AED|
|fromCurrencyCode|AFN|
|fromCurrencyCode|ALL|
|fromCurrencyCode|AMD|
|fromCurrencyCode|ANG|
|fromCurrencyCode|AOA|
|fromCurrencyCode|ARS|
|fromCurrencyCode|AUD|
|fromCurrencyCode|AWG|
|fromCurrencyCode|AZN|
|fromCurrencyCode|BAM|
|fromCurrencyCode|BBD|
|fromCurrencyCode|BDT|
|fromCurrencyCode|BGN|
|fromCurrencyCode|BHD|
|fromCurrencyCode|BIF|
|fromCurrencyCode|BMD|
|fromCurrencyCode|BND|
|fromCurrencyCode|BOB|
|fromCurrencyCode|BOV|
|fromCurrencyCode|BRL|
|fromCurrencyCode|BSD|
|fromCurrencyCode|BTN|
|fromCurrencyCode|BWP|
|fromCurrencyCode|BYN|
|fromCurrencyCode|BZD|
|fromCurrencyCode|CAD|
|fromCurrencyCode|CDF|
|fromCurrencyCode|CHE|
|fromCurrencyCode|CHF|
|fromCurrencyCode|CHW|
|fromCurrencyCode|CLF|
|fromCurrencyCode|CLP|
|fromCurrencyCode|CNY|
|fromCurrencyCode|COP|
|fromCurrencyCode|COU|
|fromCurrencyCode|CRC|
|fromCurrencyCode|CUC|
|fromCurrencyCode|CUP|
|fromCurrencyCode|CVE|
|fromCurrencyCode|CZK|
|fromCurrencyCode|DJF|
|fromCurrencyCode|DKK|
|fromCurrencyCode|DOP|
|fromCurrencyCode|DZD|
|fromCurrencyCode|EGP|
|fromCurrencyCode|ERN|
|fromCurrencyCode|ETB|
|fromCurrencyCode|EUR|
|fromCurrencyCode|FJD|
|fromCurrencyCode|FKP|
|fromCurrencyCode|GBP|
|fromCurrencyCode|GEL|
|fromCurrencyCode|GHS|
|fromCurrencyCode|GIP|
|fromCurrencyCode|GMD|
|fromCurrencyCode|GNF|
|fromCurrencyCode|GTQ|
|fromCurrencyCode|GYD|
|fromCurrencyCode|HKD|
|fromCurrencyCode|HNL|
|fromCurrencyCode|HRK|
|fromCurrencyCode|HTG|
|fromCurrencyCode|HUF|
|fromCurrencyCode|IDR|
|fromCurrencyCode|ILS|
|fromCurrencyCode|INR|
|fromCurrencyCode|IQD|
|fromCurrencyCode|IRR|
|fromCurrencyCode|ISK|
|fromCurrencyCode|JMD|
|fromCurrencyCode|JOD|
|fromCurrencyCode|JPY|
|fromCurrencyCode|KES|
|fromCurrencyCode|KGS|
|fromCurrencyCode|KHR|
|fromCurrencyCode|KMF|
|fromCurrencyCode|KPW|
|fromCurrencyCode|KRW|
|fromCurrencyCode|KWD|
|fromCurrencyCode|KYD|
|fromCurrencyCode|KZT|
|fromCurrencyCode|LAK|
|fromCurrencyCode|LBP|
|fromCurrencyCode|LKR|
|fromCurrencyCode|LRD|
|fromCurrencyCode|LSL|
|fromCurrencyCode|LYD|
|fromCurrencyCode|MAD|
|fromCurrencyCode|MDL|
|fromCurrencyCode|MGA|
|fromCurrencyCode|MKD|
|fromCurrencyCode|MMK|
|fromCurrencyCode|MNT|
|fromCurrencyCode|MOP|
|fromCurrencyCode|MRU|
|fromCurrencyCode|MUR|
|fromCurrencyCode|MVR|
|fromCurrencyCode|MWK|
|fromCurrencyCode|MXN|
|fromCurrencyCode|MXV|
|fromCurrencyCode|MYR|
|fromCurrencyCode|MZN|
|fromCurrencyCode|NAD|
|fromCurrencyCode|NGN|
|fromCurrencyCode|NIO|
|fromCurrencyCode|NOK|
|fromCurrencyCode|NPR|
|fromCurrencyCode|NZD|
|fromCurrencyCode|OMR|
|fromCurrencyCode|PAB|
|fromCurrencyCode|PEN|
|fromCurrencyCode|PGK|
|fromCurrencyCode|PHP|
|fromCurrencyCode|PKR|
|fromCurrencyCode|PLN|
|fromCurrencyCode|PYG|
|fromCurrencyCode|QAR|
|fromCurrencyCode|RON|
|fromCurrencyCode|RSD|
|fromCurrencyCode|RUB|
|fromCurrencyCode|RWF|
|fromCurrencyCode|SAR|
|fromCurrencyCode|SBD|
|fromCurrencyCode|SCR|
|fromCurrencyCode|SDG|
|fromCurrencyCode|SEK|
|fromCurrencyCode|SGD|
|fromCurrencyCode|SHP|
|fromCurrencyCode|SLL|
|fromCurrencyCode|SOS|
|fromCurrencyCode|SRD|
|fromCurrencyCode|SSP|
|fromCurrencyCode|STN|
|fromCurrencyCode|SVC|
|fromCurrencyCode|SYP|
|fromCurrencyCode|SZL|
|fromCurrencyCode|THB|
|fromCurrencyCode|TJS|
|fromCurrencyCode|TMT|
|fromCurrencyCode|TND|
|fromCurrencyCode|TOP|
|fromCurrencyCode|TRY|
|fromCurrencyCode|TTD|
|fromCurrencyCode|TWD|
|fromCurrencyCode|TZS|
|fromCurrencyCode|UAH|
|fromCurrencyCode|UGX|
|fromCurrencyCode|USD|
|fromCurrencyCode|USN|
|fromCurrencyCode|UYI|
|fromCurrencyCode|UYU|
|fromCurrencyCode|UZS|
|fromCurrencyCode|VEF|
|fromCurrencyCode|VND|
|fromCurrencyCode|VUV|
|fromCurrencyCode|WST|
|fromCurrencyCode|XAF|
|fromCurrencyCode|XAG|
|fromCurrencyCode|XAU|
|fromCurrencyCode|XBA|
|fromCurrencyCode|XBB|
|fromCurrencyCode|XBC|
|fromCurrencyCode|XBD|
|fromCurrencyCode|XCD|
|fromCurrencyCode|XDR|
|fromCurrencyCode|XOF|
|fromCurrencyCode|XPD|
|fromCurrencyCode|XPF|
|fromCurrencyCode|XPT|
|fromCurrencyCode|XSU|
|fromCurrencyCode|XUA|
|fromCurrencyCode|YER|
|fromCurrencyCode|ZAR|
|fromCurrencyCode|ZMW|
|fromCurrencyCode|ZWL|

<h2 id="tocS_ExchangeRateMultiplier">ExchangeRateMultiplier</h2>
<!-- backwards compatibility -->
<a id="schemaexchangeratemultiplier"></a>
<a id="schema_ExchangeRateMultiplier"></a>
<a id="tocSexchangeratemultiplier"></a>
<a id="tocsexchangeratemultiplier"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionRate|number|true|none|The updated conversion rate between the to and from currency code of this exchange rate.|
|effectiveAt|string(date-time)|false|none|The date the exchange rate is in effect.|

<h2 id="tocS_ExchangeRateUpdateRequest">ExchangeRateUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaexchangerateupdaterequest"></a>
<a id="schema_ExchangeRateUpdateRequest"></a>
<a id="tocSexchangerateupdaterequest"></a>
<a id="tocsexchangerateupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionRate|number|true|none|The updated conversion rate between the to and from currency code of this exchange rate.|
|effectiveAt|string(date-time)|false|none|The date the exchange rate will be in effect.|
|id|string|true|none|A unique identifier for the exchange rate being updated|

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
|id|string|true|none|A unique identifier for the exchange rate|

<h2 id="tocS_StandardError">StandardError</h2>
<!-- backwards compatibility -->
<a id="schemastandarderror"></a>
<a id="schema_StandardError"></a>
<a id="tocSstandarderror"></a>
<a id="tocsstandarderror"></a>

```json
null
```

Ye olde error

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
