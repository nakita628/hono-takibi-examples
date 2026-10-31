<h1 id="open-data-api">Open Data API v1.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Latest Swagger specification for OpenData

Base URLs:

* <a href="https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3">https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3</a>

<h1 id="open-data-api-branch">Branch</h1>

Endpoint for getting Branch data

## get/branches

> Code samples

```bash
curl https://example.com/branches \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /branches`

Gets a list of all `Branch` objects.

<h3 id="getbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ATMAtBranch": true,
      "AccessibilityTypes": "AudioCashMachine",
      "Address": {
        "BuildingNumberOrName": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "OptionalAddressField": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "AlternatePhone": [
        {
          "AlternateTelephoneNumber": "string",
          "AlternateTelephoneNumberDescription": "string"
        }
      ],
      "ArrivalTime": "string",
      "BranchDescription": "string",
      "BranchFacilitiesName": [
        "BusinessITSupport"
      ],
      "BranchIdentification": "string",
      "BranchMediatedServiceName": [
        "BureauDeChange"
      ],
      "BranchName": "string",
      "BranchOtherFacilities": [
        "string"
      ],
      "BranchOtherMediatedServices": [
        "string"
      ],
      "BranchOtherSelfServices": [
        "string"
      ],
      "BranchPhoto": "http://example.com",
      "BranchSelfServeServiceName": [
        "AccountVerificationService"
      ],
      "BranchType": "Physical",
      "CustomerSegment": [
        "Business"
      ],
      "DaysOfTheWeek": "string",
      "DepartureTime": "string",
      "FaxNumber": [
        "string"
      ],
      "GeographicLocation": {
        "Latitude": "string",
        "Longitude": "string"
      },
      "OpeningTimes": [
        {
          "ClosingTime": "string",
          "OpeningDay": "Monday",
          "OpeningTime": "string",
          "UnavailableFinishTime": "string",
          "UnavailableStartTime": "string"
        }
      ],
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "ParkingLocation": "string",
      "PlannedBranchClosure": [
        {
          "EndDate": "string",
          "StartDate": "string"
        }
      ],
      "StopName": "string",
      "TelephoneNumber": "string"
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `Branch` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getbranches-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» ATMAtBranch|boolean|true|none|Indicated whether an ATM is at the branch|
|» AccessibilityTypes|string|false|none|Information about the accessibility|
|» Address|object|true|none|Postal Address|
|» » BuildingNumberOrName|string|false|none|Number or Name that identifies the position of a building on a street|
|» » Country|string|true|none|Nation with its own government|
|» » CountrySubDivision|string|false|none|Identifies a subdivision of a country such as state, region, county|
|» » OptionalAddressField|string|false|none|Directions for customers|
|» » PostCode|string|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail|
|» » StreetName|string|false|none|Name of a street or thoroughfare|
|» » TownName|string|false|none|Name of a built-up area, with defined boundaries, and a local government|
|» AlternatePhone|[object]|false|none|none|
|» » AlternateTelephoneNumber|string|false|none|Collection of information that identifies a phone number, as defined by telecom services.|
|» » AlternateTelephoneNumberDescription|string|false|none|Description of the telephone number|
|» ArrivalTime|string|false|none|Time that the mobile branch is scheduled to arrive|
|» BranchDescription|string|false|none|Description of the branch|
|» BranchFacilitiesName|[string]|false|none|Information about branch facilities|
|» BranchIdentification|string|true|none|Unique and unambiguous identification of a retail branch of a financial institution|
|» BranchMediatedServiceName|[string]|false|none|Information about mediated branch facilities|
|» BranchName|string|false|none|Name by which a party is known and which is usually used to identify that party|
|» BranchOtherFacilities|[string]|false|none|Any other facilities not mentioned in BranchFacilitiesName|
|» BranchOtherMediatedServices|[string]|false|none|Mediated Services not described in BranchMediatedServiceName|
|» BranchOtherSelfServices|[string]|false|none|Self Services not described in BranchSelfServeServiceName|
|» BranchPhoto|string(uri)|false|none|Image related to the branch|
|» BranchSelfServeServiceName|[string]|false|none|none|
|» BranchType|string|true|none|Information on the type of branch|
|» CustomerSegment|[string]|true|none|Customer segment which the branch is able to service|
|» DaysOfTheWeek|string|false|none|Description on when the mobile branch is available. e.g. The weekend of Glastonbury festival; or Mondays and during the shrimp season also Wednesdays|
|» DepartureTime|string|false|none|Time that the mobile branch is scheduled to depart|
|» FaxNumber|[string]|false|none|Collection of information that identifies a FAX number, as defined by telecom services.|
|» GeographicLocation|object|false|none|Geographic Coordinates|
|» » Latitude|string|true|none|The Latitude measured in decimal format according to ISO 213|
|» » Longitude|string|true|none|The longitude measured in decimal format according to ISO 213|
|» OpeningTimes|[object]|true|none|Branch Opening Times|
|» » ClosingTime|string|true|none|ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm|
|» » OpeningDay|string|true|none|Day of the week|
|» » OpeningTime|string|true|none|ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm|
|» » UnavailableFinishTime|string|false|none|ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm|
|» » UnavailableStartTime|string|false|none|ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» ParkingLocation|string|false|none|Place where the mobile branch is located, such as between the news agent and the church.|
|» PlannedBranchClosure|[object]|false|none|none|
|» » EndDate|string|false|none|Date when a branch is due to re-open following temporary closure|
|» » StartDate|string|false|none|Date when a branch is due to close temporarily or permanently|
|» StopName|string|false|none|Name of the stop of the mobile branch|
|» TelephoneNumber|string|true|none|Collection of information that identifies a phone number, as defined by telecom services.|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» AccessibilityTypes|AudioCashMachine|
|» AccessibilityTypes|AutomaticDoors|
|» AccessibilityTypes|ChairAccess|
|» AccessibilityTypes|DriveThru|
|» AccessibilityTypes|ExternalRamp|
|» AccessibilityTypes|InductionLoop|
|» AccessibilityTypes|InternalRamp|
|» AccessibilityTypes|LevelAccess|
|» AccessibilityTypes|LowerLevelCounter|
|» AccessibilityTypes|WheelchairAccess|
|» BranchFacilitiesName|BusinessITSupport|
|» BranchFacilitiesName|CollectionLockers|
|» BranchFacilitiesName|MeetingRooms|
|» BranchFacilitiesName|Parking|
|» BranchFacilitiesName|Wifi|
|» BranchMediatedServiceName|BureauDeChange|
|» BranchMediatedServiceName|BusinessCounter|
|» BranchMediatedServiceName|CardIssuanceFacility|
|» BranchMediatedServiceName|CounterServices|
|» BranchMediatedServiceName|DriveThru|
|» BranchMediatedServiceName|MortgageAdvisor|
|» BranchMediatedServiceName|NightSafe|
|» BranchMediatedServiceName|OnDemandCurrency|
|» BranchMediatedServiceName|PremierCounter|
|» BranchMediatedServiceName|VideoBanking|
|» BranchMediatedServiceName|WheelChairAccess|
|» BranchSelfServeServiceName|AccountVerificationService|
|» BranchSelfServeServiceName|AssistedServiceCounter|
|» BranchSelfServeServiceName|BusinessDepositTerminal|
|» BranchSelfServeServiceName|CashChequeDepositMachineCoin|
|» BranchSelfServeServiceName|CashChequeDepositMachineNoCoin|
|» BranchSelfServeServiceName|ExternalAtmAudio|
|» BranchSelfServeServiceName|ExternalAtmNoAudio|
|» BranchSelfServeServiceName|ExternalQuickServicePoint|
|» BranchSelfServeServiceName|InternalAtmAudio|
|» BranchSelfServeServiceName|InternalAtmNoAudio|
|» BranchSelfServeServiceName|InternalQuickServicePoint|
|» BranchSelfServeServiceName|LodgementDevice|
|» BranchSelfServeServiceName|OnlineBankingPoint|
|» BranchSelfServeServiceName|QuickDeposit|
|» BranchSelfServeServiceName|SaturdayCounterService|
|» BranchSelfServeServiceName|SelfServiceAccountOpening|
|» BranchSelfServeServiceName|StatementPrinter|
|» BranchType|Physical|
|» BranchType|Mobile|
|» CustomerSegment|Business|
|» CustomerSegment|Corporate|
|» CustomerSegment|Personal|
|» CustomerSegment|Premier|
|» CustomerSegment|Private|
|» CustomerSegment|Select|
|» CustomerSegment|SME|
|» CustomerSegment|Wealth|
|» » OpeningDay|Monday|
|» » OpeningDay|Tuesday|
|» » OpeningDay|Wednesday|
|» » OpeningDay|Thursday|
|» » OpeningDay|Friday|
|» » OpeningDay|Saturday|
|» » OpeningDay|Sunday|
|» » OpeningDay|Public and Bank Holiday|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/branches

> Code samples

```bash
curl https://example.com/branches \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /branches`

Gets header information on the current set of `Branch` data

<h3 id="headbranches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headbranches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-data-api-atm">ATM</h1>

Endpoint for getting ATM data

## get/atms

> Code samples

```bash
curl https://example.com/atms \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /atms`

Gets a list of all `ATM` objects.

<h3 id="getatms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ATMID": "string",
      "ATMServices": [
        "Balance"
      ],
      "AccessibilityTypes": [
        "AudioCashMachine"
      ],
      "AdditionalATMServices": [
        "string"
      ],
      "Address": {
        "BuildingNumberOrName": "string",
        "Country": "string",
        "CountrySubDivision": "string",
        "OptionalAddressField": "string",
        "PostCode": "string",
        "StreetName": "string",
        "TownName": "string"
      },
      "BranchIdentification": "string",
      "Currency": [
        "string"
      ],
      "GeographicLocation": {
        "Latitude": "string",
        "Longitude": "string"
      },
      "LocationCategory": "Airport",
      "MinimumValueDispensed": "£5",
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "SiteID": "string",
      "SiteName": "string",
      "SupportedLanguages": [
        "string"
      ]
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getatms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `ATM` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getatms-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» ATMID|string|true|none|ATM terminal device identification for the acquirer and the issuer|
|» ATMServices|[string]|true|none|Information about ATM services|
|» AccessibilityTypes|[string]|false|none|Information about the accessibility|
|» AdditionalATMServices|[string]|false|none|ATM Service Description|
|» Address|object|true|none|Postal Address|
|» » BuildingNumberOrName|string|false|none|Number or Name that identifies the position of a building on a street|
|» » Country|string|true|none|Nation with its own government|
|» » CountrySubDivision|string|false|none|Identifies a subdivision of a country such as state, region, county|
|» » OptionalAddressField|string|false|none|Directions for customers|
|» » PostCode|string|true|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail|
|» » StreetName|string|true|none|Name of a street or thoroughfare|
|» » TownName|string|false|none|Name of a built-up area, with defined boundaries, and a local government|
|» BranchIdentification|string|false|none|Unique and unambiguous identification of a retail branch of a financial institution|
|» Currency|[string]|true|none|Defines currency type available for dispense|
|» GeographicLocation|object|true|none|Geographic Coordinates|
|» » Latitude|string|true|none|The Latitude measured in decimal format according to ISO 213|
|» » Longitude|string|true|none|The longitude measured in decimal format according to ISO 213|
|» LocationCategory|string|false|none|Indicates the environment of the ATM|
|» MinimumValueDispensed|string|false|none|Minimum currency denominations usually available|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» SiteID|string|false|none|Site identifying code, where ATM is located|
|» SiteName|string|false|none|Site identifying name, where ATM is located|
|» SupportedLanguages|[string]|true|none|Languages that the ATM supports|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» ATMServices|Balance|
|» ATMServices|BillPayments|
|» ATMServices|CashDeposits|
|» ATMServices|CashWithdrawal|
|» ATMServices|CharityDonation|
|» ATMServices|ChequeBookRequest|
|» ATMServices|ChequeDeposits|
|» ATMServices|FastCash|
|» ATMServices|MiniStatement|
|» ATMServices|MobileBankingRegistration|
|» ATMServices|MobilePaymentRegistration|
|» ATMServices|MobilePhoneTopUp|
|» ATMServices|OrderStatement|
|» ATMServices|PINActivation|
|» ATMServices|PINChange|
|» AccessibilityTypes|AudioCashMachine|
|» AccessibilityTypes|AutomaticDoors|
|» AccessibilityTypes|ChairAccess|
|» AccessibilityTypes|DriveThru|
|» AccessibilityTypes|ExternalRamp|
|» AccessibilityTypes|InductionLoop|
|» AccessibilityTypes|InternalRamp|
|» AccessibilityTypes|LevelAccess|
|» AccessibilityTypes|LowerLevelCounter|
|» AccessibilityTypes|WheelchairAccess|
|» LocationCategory|Airport|
|» LocationCategory|BankSpecialisedOutlet|
|» LocationCategory|BranchExternal|
|» LocationCategory|BranchInternal|
|» LocationCategory|BranchLobby|
|» LocationCategory|BureauDeChange|
|» LocationCategory|CoachStation|
|» LocationCategory|CommercialSpaceInternal|
|» LocationCategory|ConvenienceStore|
|» LocationCategory|ExhibitionCentre|
|» LocationCategory|FactoryOrOffice|
|» LocationCategory|FillingStation|
|» LocationCategory|FinancialInstitution|
|» LocationCategory|GovernmentOffice|
|» LocationCategory|Hospital|
|» LocationCategory|Hotel|
|» LocationCategory|KioskPod|
|» LocationCategory|LeisureCentre|
|» LocationCategory|PleasurePark|
|» LocationCategory|PublicHouse|
|» LocationCategory|RailwayStation|
|» LocationCategory|RemoteUnit|
|» LocationCategory|RetailerDepartmentStore|
|» LocationCategory|RetailerOutlet|
|» LocationCategory|SeaportTerminal|
|» LocationCategory|ServiceStation|
|» LocationCategory|ShoppingCentreExternal|
|» LocationCategory|ShoppingCentreInternal|
|» LocationCategory|StorageDepot|
|» LocationCategory|SupermarketExternal|
|» LocationCategory|SupermarketInternal|
|» LocationCategory|UndergroundRailwayStation|
|» LocationCategory|UniversityOrCollege|
|» MinimumValueDispensed|£5|
|» MinimumValueDispensed|£10|
|» MinimumValueDispensed|£20|
|» MinimumValueDispensed|£50|
|» MinimumValueDispensed|£100|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/atms

> Code samples

```bash
curl https://example.com/atms \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /atms`

Gets header information on the current set of `ATM` data

<h3 id="headatms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headatms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-data-api-pca">PCA</h1>

Endpoint for getting Personal Current Account data

## get/personal-current-accounts

> Code samples

```bash
curl https://example.com/personal-current-accounts \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /personal-current-accounts`

Gets a list of all `Personal Current Account` objects.

<h3 id="getpersonal-current-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "AccessChannels": [
        "ATM"
      ],
      "Benefits": {
        "Benefit": true,
        "BenefitGroup": [
          {
            "BenefitItem": {
              "BenefitDetail": [
                {
                  "BenefitDescription": "string",
                  "BenefitID": "string",
                  "BenefitName": "string",
                  "BenefitType": "string",
                  "BenefitValue": "string",
                  "Counter": 0,
                  "CriteriaType": [
                    "CashDeposit"
                  ],
                  "DefaultToAccounts": true,
                  "MaximumCriteria": "string",
                  "MinimumCriteria": "string",
                  "PromotionEndDate": "string",
                  "PromotionStartDate": "string"
                }
              ],
              "DateOfChange": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "BenefitSubType": "FutureMultipleTerms"
          }
        ]
      },
      "CAPricing": [
        {
          "CAPricingItem": {
            "DateOfChange": "string",
            "ExchangeRateAdjustment": "string",
            "LengthPromotionalInDays": 0,
            "StartPromotionOrFutureTerms": "string",
            "StopPromotionOrFutureTerms": "string"
          },
          "ProductState": "FutureMultipleTerms"
        }
      ],
      "CardNotes": "string",
      "CardType": [
        "BasicCard"
      ],
      "CardWithdrawalLimit": "string",
      "ChequeBookAvailable": true,
      "Contactless": true,
      "CreditInterest": {
        "CreditCharged": true,
        "CreditInterestGroup": [
          {
            "CreditInterestItem": {
              "CalculationFrequency": "Daily",
              "CalculationMethod": "Banded",
              "DateOfChange": "string",
              "EndDate": "string",
              "FixedInterestLength": 0,
              "InterestNotes": "string",
              "InterestRateType": "Fixed",
              "InterestTiers": [
                {
                  "APRAERRate": "string",
                  "DailyChargeForMaximum": "string",
                  "DailyChargeForMinimum": "string",
                  "InterestTier": "string",
                  "Rate": "string",
                  "RateComparisonType": "APR",
                  "TierValueMaximum": "string",
                  "TierValueMinimum": "string"
                }
              ],
              "LengthPromotionalInDays": 0,
              "PaymentMethod": "Compound",
              "StartDate": "string",
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "InterestTierSubType": "FutureMultipleTerms"
          }
        ]
      },
      "CreditScoringPartOfAccountOpeningForGettingAnAccount": true,
      "CreditScoringPartOfAccountOpeningForIDVerification": true,
      "CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore": [
        "Hard"
      ],
      "CreditScoringPartOfAccountOpeningIDVerificationText": [
        "string"
      ],
      "CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore": [
        "Hard"
      ],
      "CreditScoringPartOfAccountOpeningText": "string",
      "Currency": [
        "string"
      ],
      "Eligibility": {
        "AgeRestricted": true,
        "AnnualBusinessTurnover": "string",
        "AnnualBusinessTurnoverCurrency": "string",
        "Description": "string",
        "EligibilityName": "string",
        "EligibilityNotes": "string",
        "EligibilityType": "AnyBusinessCustomer",
        "IncomeCondition": "string",
        "IncomeTurnoverRelated": true,
        "MarketingEligibility": [
          "ExistingCustomers"
        ],
        "MaxNumberOfAccounts": "string",
        "MaximumAge": 0,
        "MaximumAgeToOpen": 0,
        "MaximumOpeningAmount": true,
        "MinIncomeTurnoverPaidIntoAccount": 0,
        "MinimumAge": 0,
        "MinimumDeposit": true,
        "MinimumIncomeFrequency": "AcademicTerm",
        "MinimumIncomeTurnoverAmount": "string",
        "MinimumIncomeTurnoverCurrency": "string",
        "MinimumOperatingBalance": "string",
        "MinimumOperatingBalanceCurrency": "string",
        "MinimumOperatingBalanceExists": true,
        "OpeningDepositMaximumAmount": "string",
        "OpeningDepositMaximumCurrency": "string",
        "OpeningDepositMinimum": "string",
        "OpeningDepositMinimumCurrency": "string",
        "OtherFinancialHoldingRequired": true,
        "PreviousBankruptcy": true,
        "ResidencyRestricted": true,
        "ResidencyRestrictedRegion": "UK",
        "SingleJointIncome": "Joint",
        "ThirdSectorOrganisations": true
      },
      "Feature": [
        {
          "DateOfChange": "string",
          "ExistingFeature": true,
          "FeatureDetails": [
            {
              "CriteriaType": "string",
              "DateOfChange": "string",
              "FeatureDescription": "string",
              "FeatureName": "string",
              "FeatureSubType": "FutureMultipleTerms",
              "FeatureType": "string",
              "FeatureValue": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            }
          ],
          "LengthPromotionalInDays": 0,
          "ProductState": "FutureMultipleTerms",
          "StartPromotionOrFutureTerms": "string",
          "StopPromotionOrFutureTerms": "string"
        }
      ],
      "FeesAndCharges": [
        {
          "Fees": {
            "DateOfChange": "string",
            "FeeDetails": [
              {
                "FeeDetail": {
                  "DateOfChange": "string",
                  "FeeSubDetails": {
                    "FeeAmount": "string",
                    "FeeFrequency": "AcademicTerm",
                    "FeeHigherTier": 0,
                    "FeeLowerTier": 0,
                    "FeeMax": "string",
                    "FeeMin": "string",
                    "FeeRate": "string",
                    "FeesAndChargesNotes": "string",
                    "Negotiable": true,
                    "RepresentativeRate": "string"
                  },
                  "FeeType": "Other",
                  "LengthPromotionalInDays": 0,
                  "Other": "string",
                  "StartPromotionOrFutureTerms": "string",
                  "StopPromotionOrFutureTerms": "string"
                },
                "FeeSubType": "FutureMultipleTerms"
              }
            ],
            "FeeHigherTier": 0,
            "FeeLowerTier": 0,
            "LengthPromotionalInDays": 0,
            "StartPromotionOrFutureTerms": "string",
            "StopPromotionOrFutureTerms": "string"
          },
          "ProductState": "FutureMultipleTerms"
        }
      ],
      "InternationalPaymentsSupported": true,
      "MaximumMonthlyCharge": "string",
      "MobileWallet": [
        "AndroidPay"
      ],
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "Overdraft": [
        {
          "DateOfChange": "string",
          "FeeChargeNegotiableIndicator": "No",
          "FeesAndCharges": [
            {
              "FeeChargeAmount": "string",
              "FeeChargeApplicationFrequency": "AcademicTerm",
              "FeeChargeCalculationFrequency": "AcademicTerm",
              "FeeChargeOtherApplicationFrequency": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeOtherCalculationFrequency": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeRate": "string",
              "FeeChargeRateOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeRateType": "Gross",
              "FeeChargeType": "Periodic"
            }
          ],
          "LengthPromotionalInDays": 0,
          "MaximumMonthlyOverdraftCharge": "string",
          "Notes": "string",
          "OverdraftProductState": "FutureMultipleTerms",
          "OverdraftTierBandSet": [
            {
              "ArrangementOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "ArrangementType": "Unarranged",
              "BufferAmount": "string",
              "CMADefinedIndicator": true,
              "EAR": "string",
              "FeesAndCharges": [
                {
                  "FeeChargeAmount": "string",
                  "FeeChargeApplicationFrequency": "AcademicTerm",
                  "FeeChargeCalculationFrequency": "AcademicTerm",
                  "FeeChargeOtherApplicationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeOtherCalculationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeOtherType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeRate": "string",
                  "FeeChargeRateOtherType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeRateType": "Gross",
                  "FeeChargeType": "Periodic"
                }
              ],
              "Notes": "string",
              "OverdraftTierBand": [
                {
                  "EAR": "string",
                  "FeesAndCharges": [
                    {
                      "FeeChargeAmount": "string",
                      "FeeChargeApplicationFrequency": "AcademicTerm",
                      "FeeChargeCalculationFrequency": "AcademicTerm",
                      "FeeChargeOtherApplicationFrequency": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeOtherCalculationFrequency": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeOtherType": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeRate": "string",
                      "FeeChargeRateOtherType": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeRateType": "Gross",
                      "FeeChargeType": "Periodic"
                    }
                  ],
                  "Notes": "string",
                  "TierBandIdentification": "string",
                  "TierValueMaximum": "string",
                  "TierValueMinimum": "string"
                }
              ],
              "TierBandSetIdentification": "string"
            }
          ],
          "OverdraftType": "Committed",
          "StartPromotionOrFutureTerms": "string",
          "StopPromotionOrFutureTerms": "string",
          "Term": "string"
        }
      ],
      "OverdraftOffered": true,
      "ProductDescription": "string",
      "ProductIdentifier": "string",
      "ProductName": "string",
      "ProductSegment": [
        "Basic"
      ],
      "ProductType": "PCA",
      "ProductURL": [
        "http://example.com"
      ],
      "TsandCs": [
        "string"
      ]
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getpersonal-current-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `Personal Current Account` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getpersonal-current-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» AccessChannels|[string]|true|none|Ways to interact with the bank when managing account|
|» Benefits|object|true|none|Benefit|
|» » Benefit|boolean|true|none|Describe  one or more benefits if they exist|
|» » BenefitGroup|[object]|false|none|none|
|» » » BenefitItem|object|true|none|Benefit Item|
|» » » » BenefitDetail|[object]|false|none|none|
|» » » » » BenefitDescription|string|false|none|A textual explanation of what the benefit is|
|» » » » » BenefitID|string|false|none|Unique benefit identifier per organisation|
|» » » » » BenefitName|string|false|none|The name of the benefit|
|» » » » » BenefitType|string|false|none|Type that represents the nature of the benefit|
|» » » » » BenefitValue|string|false|none|The value or values permissible for a specific benefit for an individual product representing a product characteristic|
|» » » » » Counter|integer|false|none|Counter for the criteria (e.g. number of DD)|
|» » » » » CriteriaType|[string]|false|none|none|
|» » » » » DefaultToAccounts|boolean|false|none|Is the benefit part of the default account|
|» » » » » MaximumCriteria|string|false|none|Maximum amount for the criteria|
|» » » » » MinimumCriteria|string|false|none|Minimum amount for the criteria|
|» » » » » PromotionEndDate|string|false|none|If the benefit is temporal the end date is when the benefit is no longer applicable|
|» » » » » PromotionStartDate|string|false|none|If the benefit is temporal the start date is when the benefit comes into effect|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date in days|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » BenefitSubType|string|false|none|Benefit Subtype Code|
|» CAPricing|[object]|true|none|none|
|» » CAPricingItem|object|true|none|Card Pricing|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » ExchangeRateAdjustment|string|false|none|The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» CardNotes|string|false|none|Optional additional notes to supplement the card details|
|» CardType|[string]|true|none|Card Type available|
|» CardWithdrawalLimit|string|true|none|The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum|
|» ChequeBookAvailable|boolean|true|none|Can a chequebook be issued|
|» Contactless|boolean|true|none|Does the card issued have contactless facility|
|» CreditInterest|object|true|none|Credit Interest|
|» » CreditCharged|boolean|true|none|Is credit paid to the account. The answer will be the condition of all other fields to be filled|
|» » CreditInterestGroup|[object]|false|none|none|
|» » » CreditInterestItem|object|true|none|Credit Interest item|
|» » » » CalculationFrequency|string|false|none|How often is interest applied to account|
|» » » » CalculationMethod|string|false|none|Method for interest calculation|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » EndDate|string|false|none|If interest is charged on a specific date range as end date (often used for promotion)|
|» » » » FixedInterestLength|integer|false|none|Fixed interest length in days|
|» » » » InterestNotes|string|false|none|Additional notes to supplement the interest details|
|» » » » InterestRateType|string|false|none|Credit Interest Payment Rate Type|
|» » » » InterestTiers|[object]|false|none|none|
|» » » » » APRAERRate|string|false|none|AER or APR Rate for comparison|
|» » » » » DailyChargeForMaximum|string|false|none|Special charge on tiered overdraft|
|» » » » » DailyChargeForMinimum|string|false|none|Special charge on tiered overdraft|
|» » » » » InterestTier|string|false|none|Identifier for the tier|
|» » » » » Rate|string|false|none|Rate being paid by the bank (gross)|
|» » » » » RateComparisonType|string|false|none|Rate Comparison Type|
|» » » » » TierValueMaximum|string|false|none|Max Value of interst tier|
|» » » » » TierValueMinimum|string|false|none|Lower value of interest tier|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » » PaymentMethod|string|false|none|Credit Interest Payment Method Code|
|» » » » StartDate|string|false|none|If interest is charged on a specific date range as start date (often used for promotion)|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » InterestTierSubType|string|false|none|Describes if the offering is promotional, regular or a description of a future state|
|» CreditScoringPartOfAccountOpeningForGettingAnAccount|boolean|true|none|Indicates whether a credit check performed on an inquiry to open an account is submitted|
|» CreditScoringPartOfAccountOpeningForIDVerification|boolean|false|none|Indicates whether a credit check is used to check the address of a potential new account holder|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|[string]|false|none|none|
|» CreditScoringPartOfAccountOpeningIDVerificationText|[string]|false|none|Details on the specific credit scoring|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|[string]|false|none|Describes the type of credit scoring|
|» CreditScoringPartOfAccountOpeningText|string|false|none|Details on the specific credit scoring|
|» Currency|[string]|true|none|Currency of the Account. Default to GBP at present|
|» Eligibility|object|true|none|Eligibility|
|» » AgeRestricted|boolean|true|none|Indicates a customer's age is part of eligibility criteria|
|» » AnnualBusinessTurnover|string|false|none|Annual Business Turnover|
|» » AnnualBusinessTurnoverCurrency|string|false|none|Annual Business Turnover Currency|
|» » Description|string|true|none|One paragraph detailing the eligibility|
|» » EligibilityName|string|false|none|Free text description, denotes non standard eligibilities not included in the code list|
|» » EligibilityNotes|string|false|none|Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions|
|» » EligibilityType|string|false|none|Eligibility type|
|» » IncomeCondition|string|false|none|Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)|
|» » IncomeTurnoverRelated|boolean|true|none|Indicates if eligibility linked to income|
|» » MarketingEligibility|[string]|false|none|none|
|» » MaxNumberOfAccounts|string|false|none|Maximum number of the same prodcut the customer may hold|
|» » MaximumAge|integer|false|none|Maximum age, in years, allowed to hold the account|
|» » MaximumAgeToOpen|integer|false|none|Maximum age, in years, to open an account|
|» » MaximumOpeningAmount|boolean|false|none|A maximum amount to be deposited at opening|
|» » MinIncomeTurnoverPaidIntoAccount|integer|false|none|Minimum Income Amount required to paid into the account|
|» » MinimumAge|integer|false|none|Minimum age, in years, required to hold an account|
|» » MinimumDeposit|boolean|false|none|A minimum deposit required to hold this account|
|» » MinimumIncomeFrequency|string|false|none|The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts|
|» » MinimumIncomeTurnoverAmount|string|false|none|Minimum income / Turnover required to hold the product|
|» » MinimumIncomeTurnoverCurrency|string|false|none|Minimum income / Turnover Currency|
|» » MinimumOperatingBalance|string|false|none|Minimum Operating Balance|
|» » MinimumOperatingBalanceCurrency|string|false|none|Minimum Operating Balance currency|
|» » MinimumOperatingBalanceExists|boolean|false|none|Is there a Minimum Operating Balance?|
|» » OpeningDepositMaximumAmount|string|false|none|Maximum Amount to be depositing at opening|
|» » OpeningDepositMaximumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OpeningDepositMinimum|string|false|none|Minimum Amount to be held on account|
|» » OpeningDepositMinimumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OtherFinancialHoldingRequired|boolean|true|none|Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature|
|» » PreviousBankruptcy|boolean|true|none|Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280|
|» » ResidencyRestricted|boolean|true|none|Indicates a customer's residency forms part of the eligibility criteria|
|» » ResidencyRestrictedRegion|string|false|none|Indicates a customer must be current resident of a geographic area/country|
|» » SingleJointIncome|string|false|none|Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this|
|» » ThirdSectorOrganisations|boolean|true|none|Is the product available to operate as a Clubs or Societies account?|
|» Feature|[object]|false|none|none|
|» » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » ExistingFeature|boolean|true|none|Indicates whether the account has any feature|
|» » FeatureDetails|[object]|false|none|Feature details|
|» » » CriteriaType|string|false|none|Criteria that is required in order to be eligible for the feature|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » FeatureDescription|string|false|none|A textual explanation of what the feature|
|» » » FeatureName|string|false|none|The name of the feature|
|» » » FeatureSubType|string|false|none|none|
|» » » FeatureType|string|false|none|Type that represents the nature of the feature|
|» » » FeatureValue|string|false|none|The value or values permissible for a specific feature for an individual product representing a product characteristic|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » ProductState|string|false|none|Describes if the offering is promotional or a description of a future state.|
|» » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» FeesAndCharges|[object]|true|none|none|
|» » Fees|object|true|none|Fees|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » FeeDetails|[object]|true|none|none|
|» » » » FeeDetail|object|true|none|Fee Detail|
|» » » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » » FeeSubDetails|object|true|none|Fee Sub Details|
|» » » » » » FeeAmount|string|false|none|Fee in GBP|
|» » » » » » FeeFrequency|string|true|none|Triggering frequency of the fee|
|» » » » » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » » » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » » » » FeeMax|string|false|none|Fee in GBP|
|» » » » » » FeeMin|string|false|none|Fee in GBP|
|» » » » » » FeeRate|string|false|none|% Rate|
|» » » » » » FeesAndChargesNotes|string|false|none|Supplementary information for fees and charges|
|» » » » » » Negotiable|boolean|true|none|Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor|
|» » » » » » RepresentativeRate|string|false|none|Representative Rate|
|» » » » » FeeType|string|true|none|A description of the Fee type|
|» » » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » » » Other|string|false|none|Describe other fee type|
|» » » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » » FeeSubType|string|true|none|Fee Sub Type code|
|» » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» InternationalPaymentsSupported|boolean|true|none|Indicates that the account supports international payments|
|» MaximumMonthlyCharge|string|false|none|The maximum Relevant Charges that could accrue|
|» MobileWallet|[string]|false|none|Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» Overdraft|[object]|false|none|none|
|» » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » FeeChargeNegotiableIndicator|string|false|none|Fee Charge negotiable Indicator|
|» » FeesAndCharges|[object]|false|none|none|
|» » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » FeeChargeType|string|true|none|Type of fee or charge|
|» » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » MaximumMonthlyOverdraftCharge|string|false|none|Maximum Monthly Charge (MMC) for Overdraft fee and charges.|
|» » Notes|string|false|none|Notes on the overdraft|
|» » OverdraftProductState|string|false|none|Describes if the offering is promotional or a description of a future state.|
|» » OverdraftTierBandSet|[object]|false|none|Overdraft Tier Band Set|
|» » » ArrangementOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » ArrangementType|string|true|none|Defines the arrangement of the overdraft|
|» » » BufferAmount|string|false|none|Amount on overdraft that is prearranged|
|» » » CMADefinedIndicator|boolean|true|none|describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks|
|» » » EAR|string|false|none|EAR of the Overdraft Set|
|» » » FeesAndCharges|[object]|false|none|Type of fee or charge|
|» » » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » » FeeChargeType|string|true|none|Type of fee or charge|
|» » » Notes|string|false|none|Notes on the Overdraft|
|» » » OverdraftTierBand|[object]|false|none|none|
|» » » » EAR|string|false|none|EAR of the Tier|
|» » » » FeesAndCharges|[object]|false|none|none|
|» » » » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » » » FeeChargeType|string|true|none|Type of fee or charge|
|» » » » Notes|string|false|none|Notes on the Overdraft|
|» » » » TierBandIdentification|string|false|none|Identification of the tier or band|
|» » » » TierValueMaximum|string|true|none|Maximum value of the tier|
|» » » » TierValueMinimum|string|true|none|Minimum value of the tier|
|» » » TierBandSetIdentification|string|false|none|Identification of the set of tiers or bands|
|» » OverdraftType|string|false|none|Defines if the overdraft facility is committed |
|» » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » Term|string|false|none|The duration of the overdraft, if it is non permanent|
|» OverdraftOffered|boolean|true|none|Indicates whether an overdraft offered for this account|
|» ProductDescription|string|true|none|Description of the product provided by the parent organisation|
|» ProductIdentifier|string|true|none|Identifier within the parent organisation for the product. Must be unique in the organisation|
|» ProductName|string|false|none|The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise|
|» ProductSegment|[string]|true|none|none|
|» ProductType|string|true|none|Descriptive code for the product category|
|» ProductURL|[string(uri)]|true|none|URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL|
|» TsandCs|[string]|true|none|URL provided by the parent organisation which redirects to the current T&Cs|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» AccessChannels|ATM|
|» AccessChannels|Branch|
|» AccessChannels|BusinessCommercialCentre|
|» AccessChannels|CallCentre|
|» AccessChannels|MobileApps|
|» AccessChannels|MobileBanking|
|» AccessChannels|Online|
|» AccessChannels|Phone|
|» AccessChannels|Post|
|» AccessChannels|PostOffice|
|» AccessChannels|RelationshipManager|
|» AccessChannels|Text|
|» » » » » CriteriaType|CashDeposit|
|» » » » » CriteriaType|Deposit|
|» » » » » CriteriaType|DirectDebit|
|» » » » » CriteriaType|InitialDeposit|
|» » » » » CriteriaType|InternetLogon|
|» » » » » CriteriaType|MobileLogon|
|» » » » » CriteriaType|RegularDeposit|
|» » » BenefitSubType|FutureMultipleTerms|
|» » » BenefitSubType|Promotional|
|» » » BenefitSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» CardType|BasicCard|
|» CardType|BusinessQuickLodgeCard|
|» CardType|Cashcard|
|» CardType|ContactlessCashcard|
|» CardType|ContactlessDebitMastercard|
|» CardType|ContactlessDebitVisa|
|» CardType|DebitMastercard|
|» CardType|VisaDebit|
|» CardType|DepositCard|
|» CardType|OperatorCard|
|» CardType|POCACard|
|» » » » CalculationFrequency|Daily|
|» » » » CalculationFrequency|Weekly|
|» » » » CalculationFrequency|Monthly|
|» » » » CalculationFrequency|Quarterly|
|» » » » CalculationFrequency|Half-Yearly|
|» » » » CalculationFrequency|Yearly|
|» » » » CalculationFrequency|Overnight|
|» » » » CalculationMethod|Banded|
|» » » » CalculationMethod|Tiered|
|» » » » CalculationMethod|Whole|
|» » » » InterestRateType|Fixed|
|» » » » InterestRateType|Variable|
|» » » » » RateComparisonType|APR|
|» » » » » RateComparisonType|AER|
|» » » » » RateComparisonType|Gross|
|» » » » » RateComparisonType|Net|
|» » » » » RateComparisonType|RepApr|
|» » » » PaymentMethod|Compound|
|» » » » PaymentMethod|PayAway|
|» » » » PaymentMethod|SelfCredit|
|» » » » PaymentMethod|SimpleInterest|
|» » » InterestTierSubType|FutureMultipleTerms|
|» » » InterestTierSubType|Promotional|
|» » » InterestTierSubType|Regular|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|Hard|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|Soft|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|Hard|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|Soft|
|» » EligibilityType|AnyBusinessCustomer|
|» » EligibilityType|BusinessOnly|
|» » EligibilityType|CreditCard|
|» » EligibilityType|CreditScoring|
|» » EligibilityType|EmailAddress|
|» » EligibilityType|ExistingCustomers|
|» » EligibilityType|IdAndV|
|» » EligibilityType|Mortgage|
|» » EligibilityType|NoArrearsOnLoan|
|» » EligibilityType|NoCustomerInArrears|
|» » EligibilityType|NoOverOverdraftThirtyDays|
|» » EligibilityType|NoSoleUkAccountOrBankrupt|
|» » EligibilityType|NTB|
|» » EligibilityType|NTBBusiness|
|» » EligibilityType|SoleStudentAccount|
|» » EligibilityType|SoleUkAccount|
|» » EligibilityType|StudentsOnly|
|» » EligibilityType|TwoMonthsOfCourseStart|
|» » EligibilityType|UCASFulltimeTwoYears|
|» » MarketingEligibility|ExistingCustomers|
|» » MarketingEligibility|NewCustomersOnly|
|» » MarketingEligibility|SwitchersOnly|
|» » MarketingEligibility|StartUp|
|» » MinimumIncomeFrequency|AcademicTerm|
|» » MinimumIncomeFrequency|HalfYearly|
|» » MinimumIncomeFrequency|Monthly|
|» » MinimumIncomeFrequency|Quarterly|
|» » MinimumIncomeFrequency|Weekly|
|» » MinimumIncomeFrequency|Yearly|
|» » ResidencyRestrictedRegion|UK|
|» » ResidencyRestrictedRegion|EEA|
|» » ResidencyRestrictedRegion|EU|
|» » ResidencyRestrictedRegion|EFTA|
|» » ResidencyRestrictedRegion|GB - ENG|
|» » ResidencyRestrictedRegion|GB - NIR|
|» » ResidencyRestrictedRegion|GB - SCT|
|» » ResidencyRestrictedRegion|GB - WLS|
|» » ResidencyRestrictedRegion|IRL|
|» » SingleJointIncome|Joint|
|» » SingleJointIncome|SoleIncome|
|» » SingleJointIncome|SoleOrJoint|
|» » SingleJointIncome|Turnover|
|» » » FeatureSubType|FutureMultipleTerms|
|» » » FeatureSubType|Promotional|
|» » » FeatureSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» » » » » » FeeFrequency|AcademicTerm|
|» » » » » » FeeFrequency|AccountClosing|
|» » » » » » FeeFrequency|AccountOpening|
|» » » » » » FeeFrequency|AtTimeOfLoanRepayment|
|» » » » » » FeeFrequency|ChargingPeriod|
|» » » » » » FeeFrequency|Daily|
|» » » » » » FeeFrequency|EveryFiveBusinessDays|
|» » » » » » FeeFrequency|Item|
|» » » » » » FeeFrequency|Monthly|
|» » » » » » FeeFrequency|OnAccountAnniversary|
|» » » » » » FeeFrequency|PerHour|
|» » » » » » FeeFrequency|PerOccurrence|
|» » » » » » FeeFrequency|PerSheet|
|» » » » » » FeeFrequency|PerTransactionAmount|
|» » » » » » FeeFrequency|PerTransactionPercentage|
|» » » » » » FeeFrequency|Quarterly|
|» » » » » » FeeFrequency|SixMonthly|
|» » » » » » FeeFrequency|StartOfLoan|
|» » » » » » FeeFrequency|StatementMonthly|
|» » » » » » FeeFrequency|Weekly|
|» » » » » » FeeFrequency|Yearly|
|» » » » » FeeType|Other|
|» » » » » FeeType|ATMDonation|
|» » » » » FeeType|ATMDeposATMPaidIn|
|» » » » » FeeType|ReportCertBalance|
|» » » » » FeeType|ATMAbroadConVisaCredit|
|» » » » » FeeType|ATMAbroadConVisaDebit|
|» » » » » FeeType|ATMCardnetEnvIn|
|» » » » » FeeType|ATMCashGroupATMCreditCard|
|» » » » » FeeType|ATMCashNonGroupATMCredittcard|
|» » » » » FeeType|ATMCashGroupATMDebitCard|
|» » » » » FeeType|ATMCashNonGroupATMDebitcard|
|» » » » » FeeType|ATMConGroupATM|
|» » » » » FeeType|ATMAbroad|
|» » » » » FeeType|ATMForeignCashDebCard|
|» » » » » FeeType|ATMAbroadGoldVisaDebit|
|» » » » » FeeType|ATMSpainCashCard|
|» » » » » FeeType|ATMSpainDebitCard|
|» » » » » FeeType|ATMSpainConversionDebitCard|
|» » » » » FeeType|ATMSpainConversionCashCard|
|» » » » » FeeType|ATMNonSterlingWithdrawal|
|» » » » » FeeType|ATMAbroadVisaCredit|
|» » » » » FeeType|ATMAbroadVisaDebit|
|» » » » » FeeType|ATMAbroadConVisaGoldDebit|
|» » » » » FeeType|ATMWidthdrawCash|
|» » » » » FeeType|BACSOnLineAncilliary|
|» » » » » FeeType|BACSBatch|
|» » » » » FeeType|BACSOnLineFile|
|» » » » » FeeType|BACSFileItem|
|» » » » » FeeType|BACSOnLineSetup |
|» » » » » FeeType|BACSItem|
|» » » » » FeeType|BACSItemInterbranch|
|» » » » » FeeType|BACSBulkBatch|
|» » » » » FeeType|BACSOnLineOverlimit|
|» » » » » FeeType|BACSOnLinePayment|
|» » » » » FeeType|BACSRecallItem|
|» » » » » FeeType|BACSOnLineService|
|» » » » » FeeType|BACSBulkInternet|
|» » » » » FeeType|BACSTELDirDebSmartCard|
|» » » » » FeeType|BACSTELDirDebWebInit|
|» » » » » FeeType|BACSTELirDebWebInit|
|» » » » » FeeType|BACSTELDirDebOverlimit|
|» » » » » FeeType|BACSTELDirDebPayment|
|» » » » » FeeType|BACSTELDirDebService|
|» » » » » FeeType|BACSTELDirDebAncilliary|
|» » » » » FeeType|BACSDirectItemProfile|
|» » » » » FeeType|BACSTELAncilliary|
|» » » » » FeeType|BACSTELSmartCard|
|» » » » » FeeType|BACSTELFile|
|» » » » » FeeType|BACSTELSetup |
|» » » » » FeeType|BACSTELOverlimit|
|» » » » » FeeType|BACSTELPayment|
|» » » » » FeeType|BACSTELService|
|» » » » » FeeType|CHAPSOutBranch|
|» » » » » FeeType|CHAPSCancellation|
|» » » » » FeeType|CHAPSOutOnlineDepositAcc|
|» » » » » FeeType|CHAPSIn|
|» » » » » FeeType|CHAPSOutInterBank|
|» » » » » FeeType|CHAPSInterBank|
|» » » » » FeeType|CHAPSOutPost|
|» » » » » FeeType|CHAPSOutInterBranch|
|» » » » » FeeType|CHAPSOut|
|» » » » » FeeType|CHAPSOutOnline|
|» » » » » FeeType|CHAPSandForeignPay|
|» » » » » FeeType|CHAPSOutManual|
|» » » » » FeeType|CardCardReplacement|
|» » » » » FeeType|DraftsCounter|
|» » » » » FeeType|DraftsBankers|
|» » » » » FeeType|DraftsIntlPayableAbroad|
|» » » » » FeeType|DraftsLostStolen|
|» » » » » FeeType|CardPersonalisedCard|
|» » » » » FeeType|DraftsIntlStoppedCancelled|
|» » » » » FeeType|EuroChqXLess|
|» » » » » FeeType|EuroChqXPlus|
|» » » » » FeeType|FPSOutFutureDated|
|» » » » » FeeType|FPSOutImmediate|
|» » » » » FeeType|FPSOut|
|» » » » » FeeType|FPSOutOwn|
|» » » » » FeeType|FPSInBranch|
|» » » » » FeeType|FPSUKPayUrgent|
|» » » » » FeeType|LegalArticlesReport|
|» » » » » FeeType|LegalSealing|
|» » » » » FeeType|LegalBondAndGuarantee|
|» » » » » FeeType|LegalCourtOrder|
|» » » » » FeeType|LegalCoSearch|
|» » » » » FeeType|LegalDepositAssignment|
|» » » » » FeeType|LegalGuaranteePrep|
|» » » » » FeeType|LegalLifePolicyPrepCo|
|» » » » » FeeType|LegalLifePolicyPrepPersonal|
|» » » » » FeeType|LegalPriorityPariPassu|
|» » » » » FeeType|LegalSubordinationAgreement|
|» » » » » FeeType|DirDebDirectDebitAdmin|
|» » » » » FeeType|DirDebDirectDebitCancel|
|» » » » » FeeType|IntlPayBIBForeignLimit|
|» » » » » FeeType|IntlPayCreditTransCust|
|» » » » » FeeType|IntlPayCreditTransNonCust|
|» » » » » FeeType|IntlPayUrgentPaymentForeign|
|» » » » » FeeType|IntlPayExpressMoneyMover|
|» » » » » FeeType|IntlPayEEAPayUrgent|
|» » » » » FeeType|IntlPayIrishPayUrgent|
|» » » » » FeeType|IntlPayEEAPay|
|» » » » » FeeType|IntlPayForeignIn1CPlus|
|» » » » » FeeType|IntlPayForeignPaymentInUKAcc|
|» » » » » FeeType|IntlPayForeignCharge|
|» » » » » FeeType|IntlPayForeignCancellation|
|» » » » » FeeType|IntlPayForeignStandardEUEuroBIC|
|» » » » » FeeType|IntlPayFXFeeRate|
|» » » » » FeeType|IntlPayForeignInternet|
|» » » » » FeeType|IntlPayForeign|
|» » » » » FeeType|IntlPayForeignInbound|
|» » » » » FeeType|IntlPayFXPaymentOut|
|» » » » » FeeType|IntlPayForeignInSub1C|
|» » » » » FeeType|IntlPayFXRate|
|» » » » » FeeType|IntlPayForeignStandardEUEuroNoBIC|
|» » » » » FeeType|IntlPayFXPaymentOutIR|
|» » » » » FeeType|IntlPayFXFee|
|» » » » » FeeType|IntlPayPurchaseNonSterling|
|» » » » » FeeType|IntlPayPostPaymentForeign|
|» » » » » FeeType|IntlPayPurchaseRateNonSterling|
|» » » » » FeeType|IntlPayPaymentTracing|
|» » » » » FeeType|IntlPayStandardMoneyMover|
|» » » » » FeeType|IntlPayMT101Transaction|
|» » » » » FeeType|IntlPayTransNonSterling|
|» » » » » FeeType|IntlPayTransRateNonSterling|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroBIC|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroNoBIC|
|» » » » » FeeType|IntlPayUrgentPaymentGroup|
|» » » » » FeeType|IntlPayUrgentPaymentUK|
|» » » » » FeeType|IntlPayUSAPayUrgent|
|» » » » » FeeType|IntlPayCurrencyPurchase|
|» » » » » FeeType|IntlPayWorldpayPayment|
|» » » » » FeeType|IntlPayCurrencyWithdraw|
|» » » » » FeeType|InvPayBankDetailsWrong|
|» » » » » FeeType|InvPayForeignBCNR|
|» » » » » FeeType|InvPayForeignRecall|
|» » » » » FeeType|InvGeneralInq|
|» » » » » FeeType|InvOldInstruction|
|» » » » » FeeType|InvPayPaymentRecall|
|» » » » » FeeType|InvPayReturnDebitXVLess|
|» » » » » FeeType|InvPayReturnDebitXVPlus|
|» » » » » FeeType|InvPayStopPayment|
|» » » » » FeeType|InvPayStandingOrdUnpaid|
|» » » » » FeeType|SafeKeepAccess|
|» » » » » FeeType|SafeKeepDeedMedium|
|» » » » » FeeType|SafeKeepingEnvelope|
|» » » » » FeeType|SafeKeepingInspection|
|» » » » » FeeType|SafeKeepingLargeItem|
|» » » » » FeeType|SafeKeepMultipleItems|
|» » » » » FeeType|SafeKeepingParcel|
|» » » » » FeeType|SafeKeepDeedSmall|
|» » » » » FeeType|SafeKeepOneItem|
|» » » » » FeeType|SafeKeepSafeCustody|
|» » » » » FeeType|LoanArrangementFeePC|
|» » » » » FeeType|LoanArrangement|
|» » » » » FeeType|LoanEarlyRepayment|
|» » » » » FeeType|LoanLatePayment|
|» » » » » FeeType|LoanSMEUnsecuredLoan|
|» » » » » FeeType|LoanTieredArrangement|
|» » » » » FeeType|NightSafeNightSafeBankOpen|
|» » » » » FeeType|NightSafeCreditSub5K|
|» » » » » FeeType|NightSafeNightSafe|
|» » » » » FeeType|NightSafeNightSafePaidIn|
|» » » » » FeeType|OverdraftAnnualReview|
|» » » » » FeeType|OverdraftTempOverdraft|
|» » » » » FeeType|OverdraftUnauthorisedBorrowing|
|» » » » » FeeType|POPostOfficeCounterCredit|
|» » » » » FeeType|POPostOfficeCashCredit|
|» » » » » FeeType|POPostOfficeCashOut|
|» » » » » FeeType|POPostOfficeWithdrawal|
|» » » » » FeeType|ChqBookTheftLossAllStopped|
|» » » » » FeeType|ChqIssuedCurrencyAcc|
|» » » » » FeeType|ChqCopy|
|» » » » » FeeType|ChqDraft|
|» » » » » FeeType|ChqIn|
|» » » » » FeeType|ChqDraftSterling|
|» » » » » FeeType|ChqOutIssued|
|» » » » » FeeType|ChqSpecialChqPresentation|
|» » » » » FeeType|ChqCounterCheque|
|» » » » » FeeType|ChqChequeswithStatement|
|» » » » » FeeType|ChqStopped|
|» » » » » FeeType|ChqTrans|
|» » » » » FeeType|ChqDraftFX|
|» » » » » FeeType|ChqForeignCourier|
|» » » » » FeeType|ChqForeignNegTenThou|
|» » » » » FeeType|ChqForeignNegHundred|
|» » » » » FeeType|ChequeForeignBankDivi|
|» » » » » FeeType|ChqForeignNegFiftyThou|
|» » » » » FeeType|ChqPensionCheque|
|» » » » » FeeType|ChequeForeignOtherDivi|
|» » » » » FeeType|ChqForeignNegFiveThou|
|» » » » » FeeType|ChqForeignNegMax|
|» » » » » FeeType|ChqForeignGBPMMDPlus|
|» » » » » FeeType|ChqGiftCheque|
|» » » » » FeeType|ChqCounterLodgement|
|» » » » » FeeType|ChqCashDropLodgement|
|» » » » » FeeType|ChqChequePhotocopy|
|» » » » » FeeType|ChqPostOfficeCredit|
|» » » » » FeeType|ChqPostOfficeChequeCollected|
|» » » » » FeeType|ChqChequeRetrieval|
|» » » » » FeeType|ChqReconcilliationPerTrans|
|» » » » » FeeType|ChqSpecialPresentationCount|
|» » » » » FeeType|ChqSpecialPresentationPTT|
|» » » » » FeeType|ChqUnpaidCharge|
|» » » » » FeeType|ChqUnpaidTransIn|
|» » » » » FeeType|ChqUnpaidTransOut|
|» » » » » FeeType|ChqUnpaidCheque|
|» » » » » FeeType|ReportAuditLetter|
|» » » » » FeeType|ReportFAXAdviceAdditional|
|» » » » » FeeType|ReportTelAdviceAdditional|
|» » » » » FeeType|ReportCreditHistory|
|» » » » » FeeType|ReportCertInterestDuplicate|
|» » » » » FeeType|ReportCertInterest|
|» » » » » FeeType|ReportCreditHistoryAdditionalInYear|
|» » » » » FeeType|ReportForeignStatusEnqElec|
|» » » » » FeeType|ReportForeignStatusEnq|
|» » » » » FeeType|ReportCashBackorInterestAnal|
|» » » » » FeeType|ReportStatementChqDaily|
|» » » » » FeeType|ReportStatementChqFortnightly|
|» » » » » FeeType|ReportStatementChqMonthly|
|» » » » » FeeType|ReportStatementChqWeekly|
|» » » » » FeeType|ReportStatementAndDiviChq|
|» » » » » FeeType|ReportReference|
|» » » » » FeeType|ReportReferralItem|
|» » » » » FeeType|ReportStatementByATM|
|» » » » » FeeType|ReportStatementByBranch|
|» » » » » FeeType|ReportStatementCopyRegular|
|» » » » » FeeType|ReportStatusEnquiry|
|» » » » » FeeType|ReportStatementFrequent|
|» » » » » FeeType|ReportStatementMonthly|
|» » » » » FeeType|ReportStatementCopy1|
|» » » » » FeeType|ReportStatementToBranch|
|» » » » » FeeType|ReportSMSTextMiniStatementorAlert|
|» » » » » FeeType|ReportStatementFortnightly|
|» » » » » FeeType|ReportSMSTextMiniStatementWoM|
|» » » » » FeeType|ReportSMSTextAlertBalance|
|» » » » » FeeType|ReportSMSTextAlert|
|» » » » » FeeType|ReportTaxCert|
|» » » » » FeeType|ReportWeeklyStatement|
|» » » » » FeeType|ReportTextMessageBanking|
|» » » » » FeeType|SEPACancellation|
|» » » » » FeeType|SEPABranch|
|» » » » » FeeType|SEPACredit|
|» » » » » FeeType|SEPADirectDebit|
|» » » » » FeeType|SEPAIn|
|» » » » » FeeType|SEPAEuro|
|» » » » » FeeType|SEPAOut|
|» » » » » FeeType|SEPAUnpaid|
|» » » » » FeeType|SEPAWinbitsAnnual Service|
|» » » » » FeeType|SEPAWinbitsTransaction|
|» » » » » FeeType|TransBillPaymentBranch|
|» » » » » FeeType|TransBillCollect|
|» » » » » FeeType|TransTelephoneBillPayment|
|» » » » » FeeType|TransBankPayment|
|» » » » » FeeType|TransBillPaymentTelephone|
|» » » » » FeeType|TransCorrespondentBankFee|
|» » » » » FeeType|TransCreditTransferUKDifferent|
|» » » » » FeeType|TransCreditTransferUKSame|
|» » » » » FeeType|TransCredit|
|» » » » » FeeType|TransCreditTransfer|
|» » » » » FeeType|TransBranchCredit|
|» » » » » FeeType|TransDebit|
|» » » » » FeeType|TransDebCardDeb|
|» » » » » FeeType|TransUKDirDeb|
|» » » » » FeeType|TransManualDeb|
|» » » » » FeeType|TransBuyForeignWithGBP|
|» » » » » FeeType|TransGoodValueReq|
|» » » » » FeeType|TransSWIFTOutUKForeign|
|» » » » » FeeType|TransInconpleteInstruction|
|» » » » » FeeType|TransManualEntries|
|» » » » » FeeType|TransManualTrans|
|» » » » » FeeType|TransNonSterling|
|» » » » » FeeType|TransPOSSaleForeign|
|» » » » » FeeType|TransPriPaymentPost|
|» » » » » FeeType|TransPOSSaleUK|
|» » » » » FeeType|TransReturnPayment|
|» » » » » FeeType|TransReconciliationPerTrans|
|» » » » » FeeType|TransStandingOrdAdmin|
|» » » » » FeeType|TransStandingOrd|
|» » » » » FeeType|TransStandingOrdManPay|
|» » » » » FeeType|TransTravellersChqOtherBank|
|» » » » » FeeType|TransTelBusiPriPaymentForeignToUKAcc|
|» » » » » FeeType|TransTeleItem|
|» » » » » FeeType|TransTelBusiPriPaymentToGrpAcc|
|» » » » » FeeType|TransTravellersChqRate|
|» » » » » FeeType|TransTransferExGroup|
|» » » » » FeeType|TransUnauthorisedPaidTrans|
|» » » » » FeeType|TransUrgentPaymentPostal|
|» » » » » FeeType|TransUnpaidTrans|
|» » » » » FeeType|TransTelBusiPriPaymentToNonGrpAcc|
|» » » » » FeeType|TransSWIFTOutNonEEASterling|
|» » » » » FeeType|AutoAutoCredit|
|» » » » » FeeType|AutoAutomatedEntries|
|» » » » » FeeType|AutoAutoCreditPhoneInet|
|» » » » » FeeType|AutoAutomatedTrans|
|» » » » » FeeType|AutoDebitCardCommercial|
|» » » » » FeeType|AutoFPSAutoCredit|
|» » » » » FeeType|VisaConvertAbroadForeign|
|» » » » » FeeType|VisaBureauDeChange|
|» » » » » FeeType|VisaTravellersChqorCurrency|
|» » » » » FeeType|OnlineInternetBillPayment|
|» » » » » FeeType|OnlineBusinessOnlineEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineUrgentEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineForeignPayment|
|» » » » » FeeType|OnlineInterbankTransfer|
|» » » » » FeeType|OnlineInterbankPerTransfer|
|» » » » » FeeType|OnlineInterbranchTransfer|
|» » » » » FeeType|OnlineInterbranchPerTransfer|
|» » » » » FeeType|OnlineSubscriptionMonthly|
|» » » » » FeeType|OnlineBankingPayment|
|» » » » » FeeType|OnlineBankingSubscription|
|» » » » » FeeType|OnlinePOSSale|
|» » » » » FeeType|OnlinePersonalCustAncillarys|
|» » » » » FeeType|OnlinePersonalCustService|
|» » » » » FeeType|OnlinePersonalCustOverlimits|
|» » » » » FeeType|OnlineReplacementCardReader|
|» » » » » FeeType|OnlinePersonalCustSetUp|
|» » » » » FeeType|OnlinePersonalCustTransaction|
|» » » » » FeeType|OnlinePaymentinGBPtoUK|
|» » » » » FeeType|OnlineUrgentPayment|
|» » » » » FeeType|OnlinePaymentinUSDtoUS|
|» » » » » FeeType|OnlineBulkDirectDebSterling|
|» » » » » FeeType|ForeignChqSent|
|» » » » » FeeType|ForeignChqSelf|
|» » » » » FeeType|ForeignChqEncashment|
|» » » » » FeeType|ForeignFXInwardsCust|
|» » » » » FeeType|ForeignFXTransfersROI|
|» » » » » FeeType|ForeignFXForwardTrans|
|» » » » » FeeType|ForeignFXTransfersBOI|
|» » » » » FeeType|ForeignExMaintenance|
|» » » » » FeeType|ForeignFXInwardsNonCust|
|» » » » » FeeType|ForeignFXOutwards|
|» » » » » FeeType|ForeignPurchase|
|» » » » » FeeType|ForeignStatusRep|
|» » » » » FeeType|ForeignChqDraft|
|» » » » » FeeType|ForeignChqCLess|
|» » » » » FeeType|ForeignChqMLess|
|» » » » » FeeType|ForeignChqOther|
|» » » » » FeeType|ForeignChqMPlus|
|» » » » » FeeType|ForeignChqCCC|
|» » » » » FeeType|ServiceCAccountFee|
|» » » » » FeeType|ServiceCAccountFeeMonthly|
|» » » » » FeeType|ServiceCAccountFeeQuarterly|
|» » » » » FeeType|ServiceCBalanceHandling|
|» » » » » FeeType|ServiceCFixedTariff|
|» » » » » FeeType|ServiceCBusiDepAccBreakage|
|» » » » » FeeType|ServiceCMonitorDaily|
|» » » » » FeeType|ServiceCManagementFee|
|» » » » » FeeType|ServiceCMinimumMonthlyFee|
|» » » » » FeeType|ServiceCMonitorMonthly|
|» » » » » FeeType|ServiceCMonitorWeekly|
|» » » » » FeeType|ServiceCSecurityFee|
|» » » » » FeeType|ServiceCMT940AccountFirst|
|» » » » » FeeType|ServiceCMT940AccountSubsequent|
|» » » » » FeeType|ServiceCOther|
|» » » » » FeeType|CounterCoinHandling|
|» » » » » FeeType|CounterCashIn|
|» » » » » FeeType|CounterCashInNotUs|
|» » » » » FeeType|CounterCashOut|
|» » » » » FeeType|CounterCashX|
|» » » » » FeeType|CounterForeignCashMax|
|» » » » » FeeType|CounterForeignNoteHandling|
|» » » » » FeeType|CounterForeignCashOut|
|» » » » » FeeType|CounterCashFeeRate|
|» » » » » FeeType|CounterForeignCashOutTx|
|» » » » » FeeType|CounterCounterLodgement|
|» » » » » FeeType|CounterCashDropLodgement|
|» » » » » FeeType|CounterNotesLodged|
|» » » » » FeeType|CounterNotesOut|
|» » » » » FeeType|CounterCashInOwn|
|» » » » » FeeType|CounterPaidTrans|
|» » » » » FeeType|CounterCashFeePercent|
|» » » » FeeSubType|FutureMultipleTerms|
|» » » » FeeSubType|Promotional|
|» » » » FeeSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» MobileWallet|AndroidPay|
|» MobileWallet|ApplePay|
|» MobileWallet|IssuerMobileApp|
|» MobileWallet|MobileBankingApp|
|» MobileWallet|Other|
|» MobileWallet|PayM|
|» MobileWallet|SamsungPay|
|» MobileWallet|VodafoneWallet|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» » FeeChargeNegotiableIndicator|No|
|» » FeeChargeNegotiableIndicator|Yes|
|» » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » FeeChargeApplicationFrequency|Daily|
|» » » FeeChargeApplicationFrequency|Weekly|
|» » » FeeChargeApplicationFrequency|Monthly|
|» » » FeeChargeApplicationFrequency|Quarterly|
|» » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » FeeChargeApplicationFrequency|Yearly|
|» » » FeeChargeApplicationFrequency|Overnight|
|» » » FeeChargeApplicationFrequency|Other|
|» » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » FeeChargeCalculationFrequency|Daily|
|» » » FeeChargeCalculationFrequency|Weekly|
|» » » FeeChargeCalculationFrequency|Monthly|
|» » » FeeChargeCalculationFrequency|Quarterly|
|» » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » FeeChargeCalculationFrequency|Yearly|
|» » » FeeChargeCalculationFrequency|Overnight|
|» » » FeeChargeCalculationFrequency|Other|
|» » » FeeChargeRateType|Gross|
|» » » FeeChargeRateType|Net|
|» » » FeeChargeRateType|Other|
|» » » FeeChargeType|Periodic|
|» » » FeeChargeType|Minimum|
|» » » FeeChargeType|Maximum|
|» » » FeeChargeType|Setup|
|» » » FeeChargeType|Review|
|» » » FeeChargeType|Renewal|
|» » » FeeChargeType|MinimumSetup|
|» » » FeeChargeType|MaximumSetup|
|» » » FeeChargeType|Total|
|» » » FeeChargeType|Item|
|» » » FeeChargeType|EmergencyLending|
|» » » FeeChargeType|Other|
|» » OverdraftProductState|FutureMultipleTerms|
|» » OverdraftProductState|Promotional|
|» » OverdraftProductState|Regular|
|» » » ArrangementType|Unarranged|
|» » » ArrangementType|Arranged|
|» » » ArrangementType|Other|
|» » » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » » FeeChargeApplicationFrequency|Daily|
|» » » » FeeChargeApplicationFrequency|Weekly|
|» » » » FeeChargeApplicationFrequency|Monthly|
|» » » » FeeChargeApplicationFrequency|Quarterly|
|» » » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » » FeeChargeApplicationFrequency|Yearly|
|» » » » FeeChargeApplicationFrequency|Overnight|
|» » » » FeeChargeApplicationFrequency|Other|
|» » » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » » FeeChargeCalculationFrequency|Daily|
|» » » » FeeChargeCalculationFrequency|Weekly|
|» » » » FeeChargeCalculationFrequency|Monthly|
|» » » » FeeChargeCalculationFrequency|Quarterly|
|» » » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » » FeeChargeCalculationFrequency|Yearly|
|» » » » FeeChargeCalculationFrequency|Overnight|
|» » » » FeeChargeCalculationFrequency|Other|
|» » » » FeeChargeRateType|Gross|
|» » » » FeeChargeRateType|Net|
|» » » » FeeChargeRateType|Other|
|» » » » FeeChargeType|Periodic|
|» » » » FeeChargeType|Minimum|
|» » » » FeeChargeType|Maximum|
|» » » » FeeChargeType|Setup|
|» » » » FeeChargeType|Review|
|» » » » FeeChargeType|Renewal|
|» » » » FeeChargeType|MinimumSetup|
|» » » » FeeChargeType|MaximumSetup|
|» » » » FeeChargeType|Total|
|» » » » FeeChargeType|Item|
|» » » » FeeChargeType|EmergencyLending|
|» » » » FeeChargeType|Other|
|» » » » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » » » FeeChargeApplicationFrequency|Daily|
|» » » » » FeeChargeApplicationFrequency|Weekly|
|» » » » » FeeChargeApplicationFrequency|Monthly|
|» » » » » FeeChargeApplicationFrequency|Quarterly|
|» » » » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » » » FeeChargeApplicationFrequency|Yearly|
|» » » » » FeeChargeApplicationFrequency|Overnight|
|» » » » » FeeChargeApplicationFrequency|Other|
|» » » » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » » » FeeChargeCalculationFrequency|Daily|
|» » » » » FeeChargeCalculationFrequency|Weekly|
|» » » » » FeeChargeCalculationFrequency|Monthly|
|» » » » » FeeChargeCalculationFrequency|Quarterly|
|» » » » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » » » FeeChargeCalculationFrequency|Yearly|
|» » » » » FeeChargeCalculationFrequency|Overnight|
|» » » » » FeeChargeCalculationFrequency|Other|
|» » » » » FeeChargeRateType|Gross|
|» » » » » FeeChargeRateType|Net|
|» » » » » FeeChargeRateType|Other|
|» » » » » FeeChargeType|Periodic|
|» » » » » FeeChargeType|Minimum|
|» » » » » FeeChargeType|Maximum|
|» » » » » FeeChargeType|Setup|
|» » » » » FeeChargeType|Review|
|» » » » » FeeChargeType|Renewal|
|» » » » » FeeChargeType|MinimumSetup|
|» » » » » FeeChargeType|MaximumSetup|
|» » » » » FeeChargeType|Total|
|» » » » » FeeChargeType|Item|
|» » » » » FeeChargeType|EmergencyLending|
|» » » » » FeeChargeType|Other|
|» » OverdraftType|Committed|
|» » OverdraftType|OnDemand|
|» ProductSegment|Basic|
|» ProductSegment|Business|
|» ProductSegment|General|
|» ProductSegment|Graduate|
|» ProductSegment|International|
|» ProductSegment|Packaged|
|» ProductSegment|Personal|
|» ProductSegment|Premium|
|» ProductSegment|Reward|
|» ProductSegment|SME|
|» ProductSegment|Student|
|» ProductSegment|YoungAdult|
|» ProductSegment|Youth|
|» ProductType|PCA|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/personal-current-accounts

> Code samples

```bash
curl https://example.com/personal-current-accounts \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /personal-current-accounts`

Gets header information on the current set of `Personal Current Account` data

<h3 id="headpersonal-current-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headpersonal-current-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-data-api-bca">BCA</h1>

Endpoint for getting Business Current Account data

## get/business-current-accounts

> Code samples

```bash
curl https://example.com/business-current-accounts \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /business-current-accounts`

Gets a list of all `Branch Current Account` objects.

<h3 id="getbusiness-current-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "AccessChannels": [
        "ATM"
      ],
      "Benefits": {
        "Benefit": true,
        "BenefitGroup": [
          {
            "BenefitItem": {
              "BenefitDetail": [
                {
                  "BenefitDescription": "string",
                  "BenefitID": "string",
                  "BenefitName": "string",
                  "BenefitType": "string",
                  "BenefitValue": "string",
                  "Counter": 0,
                  "CriteriaType": [
                    "CashDeposit"
                  ],
                  "DefaultToAccounts": true,
                  "MaximumCriteria": "string",
                  "MinimumCriteria": "string",
                  "PromotionEndDate": "string",
                  "PromotionStartDate": "string"
                }
              ],
              "DateOfChange": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "BenefitSubType": "FutureMultipleTerms"
          }
        ]
      },
      "CAPricing": [
        {
          "CAPricingItem": {
            "DateOfChange": "string",
            "ExchangeRateAdjustment": "string",
            "LengthPromotionalInDays": 0,
            "StartPromotionOrFutureTerms": "string",
            "StopPromotionOrFutureTerms": "string"
          },
          "ProductState": "FutureMultipleTerms"
        }
      ],
      "CardNotes": "string",
      "CardType": [
        "BasicCard"
      ],
      "CardWithdrawalLimit": "string",
      "ChequeBookAvailable": true,
      "Contactless": true,
      "CreditInterest": {
        "CreditCharged": true,
        "CreditInterestGroup": [
          {
            "CreditInterestItem": {
              "CalculationFrequency": "Daily",
              "CalculationMethod": "Banded",
              "DateOfChange": "string",
              "EndDate": "string",
              "FixedInterestLength": 0,
              "InterestNotes": "string",
              "InterestRateType": "Fixed",
              "InterestTiers": [
                {
                  "APRAERRate": "string",
                  "DailyChargeForMaximum": "string",
                  "DailyChargeForMinimum": "string",
                  "InterestTier": "string",
                  "Rate": "string",
                  "RateComparisonType": "APR",
                  "TierValueMaximum": "string",
                  "TierValueMinimum": "string"
                }
              ],
              "LengthPromotionalInDays": 0,
              "PaymentMethod": "Compound",
              "StartDate": "string",
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "InterestTierSubType": "FutureMultipleTerms"
          }
        ]
      },
      "CreditScoringPartOfAccountOpeningForGettingAnAccount": true,
      "CreditScoringPartOfAccountOpeningForIDVerification": true,
      "CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore": [
        "Hard"
      ],
      "CreditScoringPartOfAccountOpeningIDVerificationText": [
        "string"
      ],
      "CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore": [
        "Hard"
      ],
      "CreditScoringPartOfAccountOpeningText": "string",
      "Currency": [
        "string"
      ],
      "Eligibility": {
        "AgeRestricted": true,
        "AnnualBusinessTurnover": "string",
        "AnnualBusinessTurnoverCurrency": "string",
        "Description": "string",
        "EligibilityName": "string",
        "EligibilityNotes": "string",
        "EligibilityType": "AnyBusinessCustomer",
        "IncomeCondition": "string",
        "IncomeTurnoverRelated": true,
        "MarketingEligibility": [
          "ExistingCustomers"
        ],
        "MaxNumberOfAccounts": "string",
        "MaximumAge": 0,
        "MaximumAgeToOpen": 0,
        "MaximumOpeningAmount": true,
        "MinIncomeTurnoverPaidIntoAccount": 0,
        "MinimumAge": 0,
        "MinimumDeposit": true,
        "MinimumIncomeFrequency": "AcademicTerm",
        "MinimumIncomeTurnoverAmount": "string",
        "MinimumIncomeTurnoverCurrency": "string",
        "MinimumOperatingBalance": "string",
        "MinimumOperatingBalanceCurrency": "string",
        "MinimumOperatingBalanceExists": true,
        "OpeningDepositMaximumAmount": "string",
        "OpeningDepositMaximumCurrency": "string",
        "OpeningDepositMinimum": "string",
        "OpeningDepositMinimumCurrency": "string",
        "OtherFinancialHoldingRequired": true,
        "PreviousBankruptcy": true,
        "ResidencyRestricted": true,
        "ResidencyRestrictedRegion": "UK",
        "SingleJointIncome": "Joint",
        "ThirdSectorOrganisations": true
      },
      "Feature": [
        {
          "DateOfChange": "string",
          "ExistingFeature": true,
          "FeatureDetails": [
            {
              "CriteriaType": "string",
              "DateOfChange": "string",
              "FeatureDescription": "string",
              "FeatureName": "string",
              "FeatureSubType": "FutureMultipleTerms",
              "FeatureType": "string",
              "FeatureValue": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            }
          ],
          "LengthPromotionalInDays": 0,
          "ProductState": "FutureMultipleTerms",
          "StartPromotionOrFutureTerms": "string",
          "StopPromotionOrFutureTerms": "string"
        }
      ],
      "FeesAndCharges": [
        {
          "Fees": {
            "DateOfChange": "string",
            "FeeDetails": [
              {
                "FeeDetail": {
                  "DateOfChange": "string",
                  "FeeSubDetails": {
                    "FeeAmount": "string",
                    "FeeFrequency": "AcademicTerm",
                    "FeeHigherTier": 0,
                    "FeeLowerTier": 0,
                    "FeeMax": "string",
                    "FeeMin": "string",
                    "FeeRate": "string",
                    "FeesAndChargesNotes": "string",
                    "Negotiable": true,
                    "RepresentativeRate": "string"
                  },
                  "FeeType": "Other",
                  "LengthPromotionalInDays": 0,
                  "Other": "string",
                  "StartPromotionOrFutureTerms": "string",
                  "StopPromotionOrFutureTerms": "string"
                },
                "FeeSubType": "FutureMultipleTerms"
              }
            ],
            "FeeHigherTier": 0,
            "FeeLowerTier": 0,
            "LengthPromotionalInDays": 0,
            "StartPromotionOrFutureTerms": "string",
            "StopPromotionOrFutureTerms": "string"
          },
          "ProductState": "FutureMultipleTerms"
        }
      ],
      "InternationalPaymentsSupported": true,
      "MaximumMonthlyCharge": "string",
      "MobileWallet": [
        "AndroidPay"
      ],
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "Overdraft": [
        {
          "DateOfChange": "string",
          "FeeChargeNegotiableIndicator": "No",
          "FeesAndCharges": [
            {
              "FeeChargeAmount": "string",
              "FeeChargeApplicationFrequency": "AcademicTerm",
              "FeeChargeCalculationFrequency": "AcademicTerm",
              "FeeChargeOtherApplicationFrequency": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeOtherCalculationFrequency": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeRate": "string",
              "FeeChargeRateOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "FeeChargeRateType": "Gross",
              "FeeChargeType": "Periodic"
            }
          ],
          "LengthPromotionalInDays": 0,
          "MaximumMonthlyOverdraftCharge": "string",
          "Notes": "string",
          "OverdraftProductState": "FutureMultipleTerms",
          "OverdraftTierBandSet": [
            {
              "ArrangementOtherType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "ArrangementType": "Unarranged",
              "BufferAmount": "string",
              "CMADefinedIndicator": true,
              "EAR": "string",
              "FeesAndCharges": [
                {
                  "FeeChargeAmount": "string",
                  "FeeChargeApplicationFrequency": "AcademicTerm",
                  "FeeChargeCalculationFrequency": "AcademicTerm",
                  "FeeChargeOtherApplicationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeOtherCalculationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeOtherType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeRate": "string",
                  "FeeChargeRateOtherType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "FeeChargeRateType": "Gross",
                  "FeeChargeType": "Periodic"
                }
              ],
              "Notes": "string",
              "OverdraftTierBand": [
                {
                  "EAR": "string",
                  "FeesAndCharges": [
                    {
                      "FeeChargeAmount": "string",
                      "FeeChargeApplicationFrequency": "AcademicTerm",
                      "FeeChargeCalculationFrequency": "AcademicTerm",
                      "FeeChargeOtherApplicationFrequency": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeOtherCalculationFrequency": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeOtherType": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeRate": "string",
                      "FeeChargeRateOtherType": {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      },
                      "FeeChargeRateType": "Gross",
                      "FeeChargeType": "Periodic"
                    }
                  ],
                  "Notes": "string",
                  "TierBandIdentification": "string",
                  "TierValueMaximum": "string",
                  "TierValueMinimum": "string"
                }
              ],
              "TierBandSetIdentification": "string"
            }
          ],
          "OverdraftType": "Committed",
          "StartPromotionOrFutureTerms": "string",
          "StopPromotionOrFutureTerms": "string",
          "Term": "string"
        }
      ],
      "OverdraftOffered": true,
      "ProductDescription": "string",
      "ProductIdentifier": "string",
      "ProductName": "string",
      "ProductSegment": [
        "Basic"
      ],
      "ProductType": "BCA",
      "ProductURL": [
        "http://example.com"
      ],
      "TsandCs": [
        "string"
      ]
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getbusiness-current-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `Branch Current Account` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getbusiness-current-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» AccessChannels|[string]|true|none|Ways to interact with the bank when managing account|
|» Benefits|object|true|none|Benefit|
|» » Benefit|boolean|true|none|Describe  one or more benefits if they exist|
|» » BenefitGroup|[object]|false|none|none|
|» » » BenefitItem|object|true|none|Benefit Item|
|» » » » BenefitDetail|[object]|false|none|none|
|» » » » » BenefitDescription|string|false|none|A textual explanation of what the benefit is|
|» » » » » BenefitID|string|false|none|Unique benefit identifier per organisation|
|» » » » » BenefitName|string|false|none|The name of the benefit|
|» » » » » BenefitType|string|false|none|Type that represents the nature of the benefit|
|» » » » » BenefitValue|string|false|none|The value or values permissible for a specific benefit for an individual product representing a product characteristic|
|» » » » » Counter|integer|false|none|Counter for the criteria (e.g. number of DD)|
|» » » » » CriteriaType|[string]|false|none|none|
|» » » » » DefaultToAccounts|boolean|false|none|Is the benefit part of the default account|
|» » » » » MaximumCriteria|string|false|none|Maximum amount for the criteria|
|» » » » » MinimumCriteria|string|false|none|Minimum amount for the criteria|
|» » » » » PromotionEndDate|string|false|none|If the benefit is temporal the end date is when the benefit is no longer applicable|
|» » » » » PromotionStartDate|string|false|none|If the benefit is temporal the start date is when the benefit comes into effect|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date in days|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » BenefitSubType|string|false|none|Benefit Subtype Code|
|» CAPricing|[object]|true|none|none|
|» » CAPricingItem|object|true|none|Card Pricing|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » ExchangeRateAdjustment|string|false|none|The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» CardNotes|string|false|none|Optional additional notes to supplement the card details|
|» CardType|[string]|true|none|Card Type available|
|» CardWithdrawalLimit|string|true|none|The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum|
|» ChequeBookAvailable|boolean|true|none|Can a chequebook be issued|
|» Contactless|boolean|true|none|Does the card issued have contactless facility|
|» CreditInterest|object|true|none|Credit Interest|
|» » CreditCharged|boolean|true|none|Is credit paid to the account. The answer will be the condition of all other fields to be filled|
|» » CreditInterestGroup|[object]|false|none|none|
|» » » CreditInterestItem|object|true|none|Credit Interest item|
|» » » » CalculationFrequency|string|false|none|How often is interest applied to account|
|» » » » CalculationMethod|string|false|none|Method for interest calculation|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » EndDate|string|false|none|If interest is charged on a specific date range as end date (often used for promotion)|
|» » » » FixedInterestLength|integer|false|none|Fixed interest length in days|
|» » » » InterestNotes|string|false|none|Additional notes to supplement the interest details|
|» » » » InterestRateType|string|false|none|Credit Interest Payment Rate Type|
|» » » » InterestTiers|[object]|false|none|none|
|» » » » » APRAERRate|string|false|none|AER or APR Rate for comparison|
|» » » » » DailyChargeForMaximum|string|false|none|Special charge on tiered overdraft|
|» » » » » DailyChargeForMinimum|string|false|none|Special charge on tiered overdraft|
|» » » » » InterestTier|string|false|none|Identifier for the tier|
|» » » » » Rate|string|false|none|Rate being paid by the bank (gross)|
|» » » » » RateComparisonType|string|false|none|Rate Comparison Type|
|» » » » » TierValueMaximum|string|false|none|Max Value of interst tier|
|» » » » » TierValueMinimum|string|false|none|Lower value of interest tier|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » » PaymentMethod|string|false|none|Credit Interest Payment Method Code|
|» » » » StartDate|string|false|none|If interest is charged on a specific date range as start date (often used for promotion)|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » InterestTierSubType|string|false|none|Describes if the offering is promotional, regular or a description of a future state|
|» CreditScoringPartOfAccountOpeningForGettingAnAccount|boolean|true|none|Indicates whether a credit check performed on an inquiry to open an account is submitted|
|» CreditScoringPartOfAccountOpeningForIDVerification|boolean|false|none|Indicates whether a credit check is used to check the address of a potential new account holder|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|[string]|false|none|none|
|» CreditScoringPartOfAccountOpeningIDVerificationText|[string]|false|none|Details on the specific credit scoring|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|[string]|false|none|Describes the type of credit scoring|
|» CreditScoringPartOfAccountOpeningText|string|false|none|Details on the specific credit scoring|
|» Currency|[string]|true|none|Currency of the Account. Default to GBP at present|
|» Eligibility|object|true|none|Eligibility|
|» » AgeRestricted|boolean|true|none|Indicates a customer's age is part of eligibility criteria|
|» » AnnualBusinessTurnover|string|false|none|Annual Business Turnover|
|» » AnnualBusinessTurnoverCurrency|string|false|none|Annual Business Turnover Currency|
|» » Description|string|true|none|One paragraph detailing the eligibility|
|» » EligibilityName|string|false|none|Free text description, denotes non standard eligibilities not included in the code list|
|» » EligibilityNotes|string|false|none|Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions|
|» » EligibilityType|string|false|none|Eligibility type|
|» » IncomeCondition|string|false|none|Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)|
|» » IncomeTurnoverRelated|boolean|true|none|Indicates if eligibility linked to income|
|» » MarketingEligibility|[string]|false|none|none|
|» » MaxNumberOfAccounts|string|false|none|Maximum number of the same prodcut the customer may hold|
|» » MaximumAge|integer|false|none|Maximum age, in years, allowed to hold the account|
|» » MaximumAgeToOpen|integer|false|none|Maximum age, in years, to open an account|
|» » MaximumOpeningAmount|boolean|false|none|A maximum amount to be deposited at opening|
|» » MinIncomeTurnoverPaidIntoAccount|integer|false|none|Minimum Income Amount required to paid into the account|
|» » MinimumAge|integer|false|none|Minimum age, in years, required to hold an account|
|» » MinimumDeposit|boolean|false|none|A minimum deposit required to hold this account|
|» » MinimumIncomeFrequency|string|false|none|The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts|
|» » MinimumIncomeTurnoverAmount|string|false|none|Minimum income / Turnover required to hold the product|
|» » MinimumIncomeTurnoverCurrency|string|false|none|Minimum income / Turnover Currency|
|» » MinimumOperatingBalance|string|false|none|Minimum Operating Balance|
|» » MinimumOperatingBalanceCurrency|string|false|none|Minimum Operating Balance currency|
|» » MinimumOperatingBalanceExists|boolean|false|none|Is there a Minimum Operating Balance?|
|» » OpeningDepositMaximumAmount|string|false|none|Maximum Amount to be depositing at opening|
|» » OpeningDepositMaximumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OpeningDepositMinimum|string|false|none|Minimum Amount to be held on account|
|» » OpeningDepositMinimumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OtherFinancialHoldingRequired|boolean|true|none|Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature|
|» » PreviousBankruptcy|boolean|true|none|Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280|
|» » ResidencyRestricted|boolean|true|none|Indicates a customer's residency forms part of the eligibility criteria|
|» » ResidencyRestrictedRegion|string|false|none|Indicates a customer must be current resident of a geographic area/country|
|» » SingleJointIncome|string|false|none|Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this|
|» » ThirdSectorOrganisations|boolean|true|none|Is the product available to operate as a Clubs or Societies account?|
|» Feature|[object]|false|none|none|
|» » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » ExistingFeature|boolean|true|none|Indicates whether the account has any feature|
|» » FeatureDetails|[object]|false|none|Feature details|
|» » » CriteriaType|string|false|none|Criteria that is required in order to be eligible for the feature|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » FeatureDescription|string|false|none|A textual explanation of what the feature|
|» » » FeatureName|string|false|none|The name of the feature|
|» » » FeatureSubType|string|false|none|none|
|» » » FeatureType|string|false|none|Type that represents the nature of the feature|
|» » » FeatureValue|string|false|none|The value or values permissible for a specific feature for an individual product representing a product characteristic|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » ProductState|string|false|none|Describes if the offering is promotional or a description of a future state.|
|» » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» FeesAndCharges|[object]|true|none|none|
|» » Fees|object|true|none|Fees|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » FeeDetails|[object]|true|none|none|
|» » » » FeeDetail|object|true|none|Fee Detail|
|» » » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » » FeeSubDetails|object|true|none|Fee Sub Details|
|» » » » » » FeeAmount|string|false|none|Fee in GBP|
|» » » » » » FeeFrequency|string|true|none|Triggering frequency of the fee|
|» » » » » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » » » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » » » » FeeMax|string|false|none|Fee in GBP|
|» » » » » » FeeMin|string|false|none|Fee in GBP|
|» » » » » » FeeRate|string|false|none|% Rate|
|» » » » » » FeesAndChargesNotes|string|false|none|Supplementary information for fees and charges|
|» » » » » » Negotiable|boolean|true|none|Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor|
|» » » » » » RepresentativeRate|string|false|none|Representative Rate|
|» » » » » FeeType|string|true|none|A description of the Fee type|
|» » » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » » » Other|string|false|none|Describe other fee type|
|» » » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » » FeeSubType|string|true|none|Fee Sub Type code|
|» » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» InternationalPaymentsSupported|boolean|true|none|Indicates that the account supports international payments|
|» MaximumMonthlyCharge|string|false|none|The maximum Relevant Charges that could accrue|
|» MobileWallet|[string]|false|none|Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» Overdraft|[object]|false|none|none|
|» » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » FeeChargeNegotiableIndicator|string|false|none|Fee Charge negotiable Indicator|
|» » FeesAndCharges|[object]|false|none|none|
|» » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » FeeChargeType|string|true|none|Type of fee or charge|
|» » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » MaximumMonthlyOverdraftCharge|string|false|none|Maximum Monthly Charge (MMC) for Overdraft fee and charges.|
|» » Notes|string|false|none|Notes on the overdraft|
|» » OverdraftProductState|string|false|none|Describes if the offering is promotional or a description of a future state.|
|» » OverdraftTierBandSet|[object]|false|none|Overdraft Tier Band Set|
|» » » ArrangementOtherType|object|false|none|Other Code Type|
|» » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » ArrangementType|string|true|none|Defines the arrangement of the overdraft|
|» » » BufferAmount|string|false|none|Amount on overdraft that is prearranged|
|» » » CMADefinedIndicator|boolean|true|none|describes that the tiers and bands are set by the CMA order, as opposed to be set by the banks|
|» » » EAR|string|false|none|EAR of the Overdraft Set|
|» » » FeesAndCharges|[object]|false|none|Type of fee or charge|
|» » » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » » FeeChargeType|string|true|none|Type of fee or charge|
|» » » Notes|string|false|none|Notes on the Overdraft|
|» » » OverdraftTierBand|[object]|false|none|none|
|» » » » EAR|string|false|none|EAR of the Tier|
|» » » » FeesAndCharges|[object]|false|none|none|
|» » » » » FeeChargeAmount|string|false|none|Charge applied to tier|
|» » » » » FeeChargeApplicationFrequency|string|false|none|Frequency with which the rate, or amount is charged|
|» » » » » FeeChargeCalculationFrequency|string|false|none|Frequency with which the rate, or amount is calculated|
|» » » » » FeeChargeOtherApplicationFrequency|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeOtherCalculationFrequency|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeOtherType|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeRate|string|false|none|Fee charge rate applied to tier|
|» » » » » FeeChargeRateOtherType|object|false|none|Other Code Type|
|» » » » » » Code|string|false|none|Code mnemonic for 'Other' code set value applicable to specified attribute|
|» » » » » » Description|string|false|none|Description for 'Other' code set value applicable to specified attribute|
|» » » » » » Name|string|false|none|Name of 'Other' code set value applicable to specified attribute|
|» » » » » FeeChargeRateType|string|false|none|Rate type other than EAR|
|» » » » » FeeChargeType|string|true|none|Type of fee or charge|
|» » » » Notes|string|false|none|Notes on the Overdraft|
|» » » » TierBandIdentification|string|false|none|Identification of the tier or band|
|» » » » TierValueMaximum|string|true|none|Maximum value of the tier|
|» » » » TierValueMinimum|string|true|none|Minimum value of the tier|
|» » » TierBandSetIdentification|string|false|none|Identification of the set of tiers or bands|
|» » OverdraftType|string|false|none|Defines if the overdraft facility is committed |
|» » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » Term|string|false|none|The duration of the overdraft, if it is non permanent|
|» OverdraftOffered|boolean|true|none|Indicates whether an overdraft offered for this account|
|» ProductDescription|string|true|none|Description of the product provided by the parent organisation|
|» ProductIdentifier|string|true|none|Identifier within the parent organisation for the product. Must be unique in the organisation|
|» ProductName|string|false|none|The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise|
|» ProductSegment|[string]|true|none|none|
|» ProductType|string|true|none|Descriptive code for the product category|
|» ProductURL|[string(uri)]|true|none|URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL|
|» TsandCs|[string]|true|none|URL provided by the parent organisation which redirects to the current T&Cs|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» AccessChannels|ATM|
|» AccessChannels|Branch|
|» AccessChannels|BusinessCommercialCentre|
|» AccessChannels|CallCentre|
|» AccessChannels|MobileApps|
|» AccessChannels|MobileBanking|
|» AccessChannels|Online|
|» AccessChannels|Phone|
|» AccessChannels|Post|
|» AccessChannels|PostOffice|
|» AccessChannels|RelationshipManager|
|» AccessChannels|Text|
|» » » » » CriteriaType|CashDeposit|
|» » » » » CriteriaType|Deposit|
|» » » » » CriteriaType|DirectDebit|
|» » » » » CriteriaType|InitialDeposit|
|» » » » » CriteriaType|InternetLogon|
|» » » » » CriteriaType|MobileLogon|
|» » » » » CriteriaType|RegularDeposit|
|» » » BenefitSubType|FutureMultipleTerms|
|» » » BenefitSubType|Promotional|
|» » » BenefitSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» CardType|BasicCard|
|» CardType|BusinessQuickLodgeCard|
|» CardType|Cashcard|
|» CardType|ContactlessCashcard|
|» CardType|ContactlessDebitMastercard|
|» CardType|ContactlessDebitVisa|
|» CardType|DebitMastercard|
|» CardType|VisaDebit|
|» CardType|DepositCard|
|» CardType|OperatorCard|
|» CardType|POCACard|
|» » » » CalculationFrequency|Daily|
|» » » » CalculationFrequency|Weekly|
|» » » » CalculationFrequency|Monthly|
|» » » » CalculationFrequency|Quarterly|
|» » » » CalculationFrequency|Half-Yearly|
|» » » » CalculationFrequency|Yearly|
|» » » » CalculationFrequency|Overnight|
|» » » » CalculationMethod|Banded|
|» » » » CalculationMethod|Tiered|
|» » » » CalculationMethod|Whole|
|» » » » InterestRateType|Fixed|
|» » » » InterestRateType|Variable|
|» » » » » RateComparisonType|APR|
|» » » » » RateComparisonType|AER|
|» » » » » RateComparisonType|Gross|
|» » » » » RateComparisonType|Net|
|» » » » » RateComparisonType|RepApr|
|» » » » PaymentMethod|Compound|
|» » » » PaymentMethod|PayAway|
|» » » » PaymentMethod|SelfCredit|
|» » » » PaymentMethod|SimpleInterest|
|» » » InterestTierSubType|FutureMultipleTerms|
|» » » InterestTierSubType|Promotional|
|» » » InterestTierSubType|Regular|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|Hard|
|» CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore|Soft|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|Hard|
|» CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore|Soft|
|» » EligibilityType|AnyBusinessCustomer|
|» » EligibilityType|BusinessOnly|
|» » EligibilityType|CreditCard|
|» » EligibilityType|CreditScoring|
|» » EligibilityType|EmailAddress|
|» » EligibilityType|ExistingCustomers|
|» » EligibilityType|IdAndV|
|» » EligibilityType|Mortgage|
|» » EligibilityType|NoArrearsOnLoan|
|» » EligibilityType|NoCustomerInArrears|
|» » EligibilityType|NoOverOverdraftThirtyDays|
|» » EligibilityType|NoSoleUkAccountOrBankrupt|
|» » EligibilityType|NTB|
|» » EligibilityType|NTBBusiness|
|» » EligibilityType|SoleStudentAccount|
|» » EligibilityType|SoleUkAccount|
|» » EligibilityType|StudentsOnly|
|» » EligibilityType|TwoMonthsOfCourseStart|
|» » EligibilityType|UCASFulltimeTwoYears|
|» » MarketingEligibility|ExistingCustomers|
|» » MarketingEligibility|NewCustomersOnly|
|» » MarketingEligibility|SwitchersOnly|
|» » MarketingEligibility|StartUp|
|» » MinimumIncomeFrequency|AcademicTerm|
|» » MinimumIncomeFrequency|HalfYearly|
|» » MinimumIncomeFrequency|Monthly|
|» » MinimumIncomeFrequency|Quarterly|
|» » MinimumIncomeFrequency|Weekly|
|» » MinimumIncomeFrequency|Yearly|
|» » ResidencyRestrictedRegion|UK|
|» » ResidencyRestrictedRegion|EEA|
|» » ResidencyRestrictedRegion|EU|
|» » ResidencyRestrictedRegion|EFTA|
|» » ResidencyRestrictedRegion|GB - ENG|
|» » ResidencyRestrictedRegion|GB - NIR|
|» » ResidencyRestrictedRegion|GB - SCT|
|» » ResidencyRestrictedRegion|GB - WLS|
|» » ResidencyRestrictedRegion|IRL|
|» » SingleJointIncome|Joint|
|» » SingleJointIncome|SoleIncome|
|» » SingleJointIncome|SoleOrJoint|
|» » SingleJointIncome|Turnover|
|» » » FeatureSubType|FutureMultipleTerms|
|» » » FeatureSubType|Promotional|
|» » » FeatureSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» » » » » » FeeFrequency|AcademicTerm|
|» » » » » » FeeFrequency|AccountClosing|
|» » » » » » FeeFrequency|AccountOpening|
|» » » » » » FeeFrequency|AtTimeOfLoanRepayment|
|» » » » » » FeeFrequency|ChargingPeriod|
|» » » » » » FeeFrequency|Daily|
|» » » » » » FeeFrequency|EveryFiveBusinessDays|
|» » » » » » FeeFrequency|Item|
|» » » » » » FeeFrequency|Monthly|
|» » » » » » FeeFrequency|OnAccountAnniversary|
|» » » » » » FeeFrequency|PerHour|
|» » » » » » FeeFrequency|PerOccurrence|
|» » » » » » FeeFrequency|PerSheet|
|» » » » » » FeeFrequency|PerTransactionAmount|
|» » » » » » FeeFrequency|PerTransactionPercentage|
|» » » » » » FeeFrequency|Quarterly|
|» » » » » » FeeFrequency|SixMonthly|
|» » » » » » FeeFrequency|StartOfLoan|
|» » » » » » FeeFrequency|StatementMonthly|
|» » » » » » FeeFrequency|Weekly|
|» » » » » » FeeFrequency|Yearly|
|» » » » » FeeType|Other|
|» » » » » FeeType|ATMDonation|
|» » » » » FeeType|ATMDeposATMPaidIn|
|» » » » » FeeType|ReportCertBalance|
|» » » » » FeeType|ATMAbroadConVisaCredit|
|» » » » » FeeType|ATMAbroadConVisaDebit|
|» » » » » FeeType|ATMCardnetEnvIn|
|» » » » » FeeType|ATMCashGroupATMCreditCard|
|» » » » » FeeType|ATMCashNonGroupATMCredittcard|
|» » » » » FeeType|ATMCashGroupATMDebitCard|
|» » » » » FeeType|ATMCashNonGroupATMDebitcard|
|» » » » » FeeType|ATMConGroupATM|
|» » » » » FeeType|ATMAbroad|
|» » » » » FeeType|ATMForeignCashDebCard|
|» » » » » FeeType|ATMAbroadGoldVisaDebit|
|» » » » » FeeType|ATMSpainCashCard|
|» » » » » FeeType|ATMSpainDebitCard|
|» » » » » FeeType|ATMSpainConversionDebitCard|
|» » » » » FeeType|ATMSpainConversionCashCard|
|» » » » » FeeType|ATMNonSterlingWithdrawal|
|» » » » » FeeType|ATMAbroadVisaCredit|
|» » » » » FeeType|ATMAbroadVisaDebit|
|» » » » » FeeType|ATMAbroadConVisaGoldDebit|
|» » » » » FeeType|ATMWidthdrawCash|
|» » » » » FeeType|BACSOnLineAncilliary|
|» » » » » FeeType|BACSBatch|
|» » » » » FeeType|BACSOnLineFile|
|» » » » » FeeType|BACSFileItem|
|» » » » » FeeType|BACSOnLineSetup |
|» » » » » FeeType|BACSItem|
|» » » » » FeeType|BACSItemInterbranch|
|» » » » » FeeType|BACSBulkBatch|
|» » » » » FeeType|BACSOnLineOverlimit|
|» » » » » FeeType|BACSOnLinePayment|
|» » » » » FeeType|BACSRecallItem|
|» » » » » FeeType|BACSOnLineService|
|» » » » » FeeType|BACSBulkInternet|
|» » » » » FeeType|BACSTELDirDebSmartCard|
|» » » » » FeeType|BACSTELDirDebWebInit|
|» » » » » FeeType|BACSTELirDebWebInit|
|» » » » » FeeType|BACSTELDirDebOverlimit|
|» » » » » FeeType|BACSTELDirDebPayment|
|» » » » » FeeType|BACSTELDirDebService|
|» » » » » FeeType|BACSTELDirDebAncilliary|
|» » » » » FeeType|BACSDirectItemProfile|
|» » » » » FeeType|BACSTELAncilliary|
|» » » » » FeeType|BACSTELSmartCard|
|» » » » » FeeType|BACSTELFile|
|» » » » » FeeType|BACSTELSetup |
|» » » » » FeeType|BACSTELOverlimit|
|» » » » » FeeType|BACSTELPayment|
|» » » » » FeeType|BACSTELService|
|» » » » » FeeType|CHAPSOutBranch|
|» » » » » FeeType|CHAPSCancellation|
|» » » » » FeeType|CHAPSOutOnlineDepositAcc|
|» » » » » FeeType|CHAPSIn|
|» » » » » FeeType|CHAPSOutInterBank|
|» » » » » FeeType|CHAPSInterBank|
|» » » » » FeeType|CHAPSOutPost|
|» » » » » FeeType|CHAPSOutInterBranch|
|» » » » » FeeType|CHAPSOut|
|» » » » » FeeType|CHAPSOutOnline|
|» » » » » FeeType|CHAPSandForeignPay|
|» » » » » FeeType|CHAPSOutManual|
|» » » » » FeeType|CardCardReplacement|
|» » » » » FeeType|DraftsCounter|
|» » » » » FeeType|DraftsBankers|
|» » » » » FeeType|DraftsIntlPayableAbroad|
|» » » » » FeeType|DraftsLostStolen|
|» » » » » FeeType|CardPersonalisedCard|
|» » » » » FeeType|DraftsIntlStoppedCancelled|
|» » » » » FeeType|EuroChqXLess|
|» » » » » FeeType|EuroChqXPlus|
|» » » » » FeeType|FPSOutFutureDated|
|» » » » » FeeType|FPSOutImmediate|
|» » » » » FeeType|FPSOut|
|» » » » » FeeType|FPSOutOwn|
|» » » » » FeeType|FPSInBranch|
|» » » » » FeeType|FPSUKPayUrgent|
|» » » » » FeeType|LegalArticlesReport|
|» » » » » FeeType|LegalSealing|
|» » » » » FeeType|LegalBondAndGuarantee|
|» » » » » FeeType|LegalCourtOrder|
|» » » » » FeeType|LegalCoSearch|
|» » » » » FeeType|LegalDepositAssignment|
|» » » » » FeeType|LegalGuaranteePrep|
|» » » » » FeeType|LegalLifePolicyPrepCo|
|» » » » » FeeType|LegalLifePolicyPrepPersonal|
|» » » » » FeeType|LegalPriorityPariPassu|
|» » » » » FeeType|LegalSubordinationAgreement|
|» » » » » FeeType|DirDebDirectDebitAdmin|
|» » » » » FeeType|DirDebDirectDebitCancel|
|» » » » » FeeType|IntlPayBIBForeignLimit|
|» » » » » FeeType|IntlPayCreditTransCust|
|» » » » » FeeType|IntlPayCreditTransNonCust|
|» » » » » FeeType|IntlPayUrgentPaymentForeign|
|» » » » » FeeType|IntlPayExpressMoneyMover|
|» » » » » FeeType|IntlPayEEAPayUrgent|
|» » » » » FeeType|IntlPayIrishPayUrgent|
|» » » » » FeeType|IntlPayEEAPay|
|» » » » » FeeType|IntlPayForeignIn1CPlus|
|» » » » » FeeType|IntlPayForeignPaymentInUKAcc|
|» » » » » FeeType|IntlPayForeignCharge|
|» » » » » FeeType|IntlPayForeignCancellation|
|» » » » » FeeType|IntlPayForeignStandardEUEuroBIC|
|» » » » » FeeType|IntlPayFXFeeRate|
|» » » » » FeeType|IntlPayForeignInternet|
|» » » » » FeeType|IntlPayForeign|
|» » » » » FeeType|IntlPayForeignInbound|
|» » » » » FeeType|IntlPayFXPaymentOut|
|» » » » » FeeType|IntlPayForeignInSub1C|
|» » » » » FeeType|IntlPayFXRate|
|» » » » » FeeType|IntlPayForeignStandardEUEuroNoBIC|
|» » » » » FeeType|IntlPayFXPaymentOutIR|
|» » » » » FeeType|IntlPayFXFee|
|» » » » » FeeType|IntlPayPurchaseNonSterling|
|» » » » » FeeType|IntlPayPostPaymentForeign|
|» » » » » FeeType|IntlPayPurchaseRateNonSterling|
|» » » » » FeeType|IntlPayPaymentTracing|
|» » » » » FeeType|IntlPayStandardMoneyMover|
|» » » » » FeeType|IntlPayMT101Transaction|
|» » » » » FeeType|IntlPayTransNonSterling|
|» » » » » FeeType|IntlPayTransRateNonSterling|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroBIC|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroNoBIC|
|» » » » » FeeType|IntlPayUrgentPaymentGroup|
|» » » » » FeeType|IntlPayUrgentPaymentUK|
|» » » » » FeeType|IntlPayUSAPayUrgent|
|» » » » » FeeType|IntlPayCurrencyPurchase|
|» » » » » FeeType|IntlPayWorldpayPayment|
|» » » » » FeeType|IntlPayCurrencyWithdraw|
|» » » » » FeeType|InvPayBankDetailsWrong|
|» » » » » FeeType|InvPayForeignBCNR|
|» » » » » FeeType|InvPayForeignRecall|
|» » » » » FeeType|InvGeneralInq|
|» » » » » FeeType|InvOldInstruction|
|» » » » » FeeType|InvPayPaymentRecall|
|» » » » » FeeType|InvPayReturnDebitXVLess|
|» » » » » FeeType|InvPayReturnDebitXVPlus|
|» » » » » FeeType|InvPayStopPayment|
|» » » » » FeeType|InvPayStandingOrdUnpaid|
|» » » » » FeeType|SafeKeepAccess|
|» » » » » FeeType|SafeKeepDeedMedium|
|» » » » » FeeType|SafeKeepingEnvelope|
|» » » » » FeeType|SafeKeepingInspection|
|» » » » » FeeType|SafeKeepingLargeItem|
|» » » » » FeeType|SafeKeepMultipleItems|
|» » » » » FeeType|SafeKeepingParcel|
|» » » » » FeeType|SafeKeepDeedSmall|
|» » » » » FeeType|SafeKeepOneItem|
|» » » » » FeeType|SafeKeepSafeCustody|
|» » » » » FeeType|LoanArrangementFeePC|
|» » » » » FeeType|LoanArrangement|
|» » » » » FeeType|LoanEarlyRepayment|
|» » » » » FeeType|LoanLatePayment|
|» » » » » FeeType|LoanSMEUnsecuredLoan|
|» » » » » FeeType|LoanTieredArrangement|
|» » » » » FeeType|NightSafeNightSafeBankOpen|
|» » » » » FeeType|NightSafeCreditSub5K|
|» » » » » FeeType|NightSafeNightSafe|
|» » » » » FeeType|NightSafeNightSafePaidIn|
|» » » » » FeeType|OverdraftAnnualReview|
|» » » » » FeeType|OverdraftTempOverdraft|
|» » » » » FeeType|OverdraftUnauthorisedBorrowing|
|» » » » » FeeType|POPostOfficeCounterCredit|
|» » » » » FeeType|POPostOfficeCashCredit|
|» » » » » FeeType|POPostOfficeCashOut|
|» » » » » FeeType|POPostOfficeWithdrawal|
|» » » » » FeeType|ChqBookTheftLossAllStopped|
|» » » » » FeeType|ChqIssuedCurrencyAcc|
|» » » » » FeeType|ChqCopy|
|» » » » » FeeType|ChqDraft|
|» » » » » FeeType|ChqIn|
|» » » » » FeeType|ChqDraftSterling|
|» » » » » FeeType|ChqOutIssued|
|» » » » » FeeType|ChqSpecialChqPresentation|
|» » » » » FeeType|ChqCounterCheque|
|» » » » » FeeType|ChqChequeswithStatement|
|» » » » » FeeType|ChqStopped|
|» » » » » FeeType|ChqTrans|
|» » » » » FeeType|ChqDraftFX|
|» » » » » FeeType|ChqForeignCourier|
|» » » » » FeeType|ChqForeignNegTenThou|
|» » » » » FeeType|ChqForeignNegHundred|
|» » » » » FeeType|ChequeForeignBankDivi|
|» » » » » FeeType|ChqForeignNegFiftyThou|
|» » » » » FeeType|ChqPensionCheque|
|» » » » » FeeType|ChequeForeignOtherDivi|
|» » » » » FeeType|ChqForeignNegFiveThou|
|» » » » » FeeType|ChqForeignNegMax|
|» » » » » FeeType|ChqForeignGBPMMDPlus|
|» » » » » FeeType|ChqGiftCheque|
|» » » » » FeeType|ChqCounterLodgement|
|» » » » » FeeType|ChqCashDropLodgement|
|» » » » » FeeType|ChqChequePhotocopy|
|» » » » » FeeType|ChqPostOfficeCredit|
|» » » » » FeeType|ChqPostOfficeChequeCollected|
|» » » » » FeeType|ChqChequeRetrieval|
|» » » » » FeeType|ChqReconcilliationPerTrans|
|» » » » » FeeType|ChqSpecialPresentationCount|
|» » » » » FeeType|ChqSpecialPresentationPTT|
|» » » » » FeeType|ChqUnpaidCharge|
|» » » » » FeeType|ChqUnpaidTransIn|
|» » » » » FeeType|ChqUnpaidTransOut|
|» » » » » FeeType|ChqUnpaidCheque|
|» » » » » FeeType|ReportAuditLetter|
|» » » » » FeeType|ReportFAXAdviceAdditional|
|» » » » » FeeType|ReportTelAdviceAdditional|
|» » » » » FeeType|ReportCreditHistory|
|» » » » » FeeType|ReportCertInterestDuplicate|
|» » » » » FeeType|ReportCertInterest|
|» » » » » FeeType|ReportCreditHistoryAdditionalInYear|
|» » » » » FeeType|ReportForeignStatusEnqElec|
|» » » » » FeeType|ReportForeignStatusEnq|
|» » » » » FeeType|ReportCashBackorInterestAnal|
|» » » » » FeeType|ReportStatementChqDaily|
|» » » » » FeeType|ReportStatementChqFortnightly|
|» » » » » FeeType|ReportStatementChqMonthly|
|» » » » » FeeType|ReportStatementChqWeekly|
|» » » » » FeeType|ReportStatementAndDiviChq|
|» » » » » FeeType|ReportReference|
|» » » » » FeeType|ReportReferralItem|
|» » » » » FeeType|ReportStatementByATM|
|» » » » » FeeType|ReportStatementByBranch|
|» » » » » FeeType|ReportStatementCopyRegular|
|» » » » » FeeType|ReportStatusEnquiry|
|» » » » » FeeType|ReportStatementFrequent|
|» » » » » FeeType|ReportStatementMonthly|
|» » » » » FeeType|ReportStatementCopy1|
|» » » » » FeeType|ReportStatementToBranch|
|» » » » » FeeType|ReportSMSTextMiniStatementorAlert|
|» » » » » FeeType|ReportStatementFortnightly|
|» » » » » FeeType|ReportSMSTextMiniStatementWoM|
|» » » » » FeeType|ReportSMSTextAlertBalance|
|» » » » » FeeType|ReportSMSTextAlert|
|» » » » » FeeType|ReportTaxCert|
|» » » » » FeeType|ReportWeeklyStatement|
|» » » » » FeeType|ReportTextMessageBanking|
|» » » » » FeeType|SEPACancellation|
|» » » » » FeeType|SEPABranch|
|» » » » » FeeType|SEPACredit|
|» » » » » FeeType|SEPADirectDebit|
|» » » » » FeeType|SEPAIn|
|» » » » » FeeType|SEPAEuro|
|» » » » » FeeType|SEPAOut|
|» » » » » FeeType|SEPAUnpaid|
|» » » » » FeeType|SEPAWinbitsAnnual Service|
|» » » » » FeeType|SEPAWinbitsTransaction|
|» » » » » FeeType|TransBillPaymentBranch|
|» » » » » FeeType|TransBillCollect|
|» » » » » FeeType|TransTelephoneBillPayment|
|» » » » » FeeType|TransBankPayment|
|» » » » » FeeType|TransBillPaymentTelephone|
|» » » » » FeeType|TransCorrespondentBankFee|
|» » » » » FeeType|TransCreditTransferUKDifferent|
|» » » » » FeeType|TransCreditTransferUKSame|
|» » » » » FeeType|TransCredit|
|» » » » » FeeType|TransCreditTransfer|
|» » » » » FeeType|TransBranchCredit|
|» » » » » FeeType|TransDebit|
|» » » » » FeeType|TransDebCardDeb|
|» » » » » FeeType|TransUKDirDeb|
|» » » » » FeeType|TransManualDeb|
|» » » » » FeeType|TransBuyForeignWithGBP|
|» » » » » FeeType|TransGoodValueReq|
|» » » » » FeeType|TransSWIFTOutUKForeign|
|» » » » » FeeType|TransInconpleteInstruction|
|» » » » » FeeType|TransManualEntries|
|» » » » » FeeType|TransManualTrans|
|» » » » » FeeType|TransNonSterling|
|» » » » » FeeType|TransPOSSaleForeign|
|» » » » » FeeType|TransPriPaymentPost|
|» » » » » FeeType|TransPOSSaleUK|
|» » » » » FeeType|TransReturnPayment|
|» » » » » FeeType|TransReconciliationPerTrans|
|» » » » » FeeType|TransStandingOrdAdmin|
|» » » » » FeeType|TransStandingOrd|
|» » » » » FeeType|TransStandingOrdManPay|
|» » » » » FeeType|TransTravellersChqOtherBank|
|» » » » » FeeType|TransTelBusiPriPaymentForeignToUKAcc|
|» » » » » FeeType|TransTeleItem|
|» » » » » FeeType|TransTelBusiPriPaymentToGrpAcc|
|» » » » » FeeType|TransTravellersChqRate|
|» » » » » FeeType|TransTransferExGroup|
|» » » » » FeeType|TransUnauthorisedPaidTrans|
|» » » » » FeeType|TransUrgentPaymentPostal|
|» » » » » FeeType|TransUnpaidTrans|
|» » » » » FeeType|TransTelBusiPriPaymentToNonGrpAcc|
|» » » » » FeeType|TransSWIFTOutNonEEASterling|
|» » » » » FeeType|AutoAutoCredit|
|» » » » » FeeType|AutoAutomatedEntries|
|» » » » » FeeType|AutoAutoCreditPhoneInet|
|» » » » » FeeType|AutoAutomatedTrans|
|» » » » » FeeType|AutoDebitCardCommercial|
|» » » » » FeeType|AutoFPSAutoCredit|
|» » » » » FeeType|VisaConvertAbroadForeign|
|» » » » » FeeType|VisaBureauDeChange|
|» » » » » FeeType|VisaTravellersChqorCurrency|
|» » » » » FeeType|OnlineInternetBillPayment|
|» » » » » FeeType|OnlineBusinessOnlineEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineUrgentEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineForeignPayment|
|» » » » » FeeType|OnlineInterbankTransfer|
|» » » » » FeeType|OnlineInterbankPerTransfer|
|» » » » » FeeType|OnlineInterbranchTransfer|
|» » » » » FeeType|OnlineInterbranchPerTransfer|
|» » » » » FeeType|OnlineSubscriptionMonthly|
|» » » » » FeeType|OnlineBankingPayment|
|» » » » » FeeType|OnlineBankingSubscription|
|» » » » » FeeType|OnlinePOSSale|
|» » » » » FeeType|OnlinePersonalCustAncillarys|
|» » » » » FeeType|OnlinePersonalCustService|
|» » » » » FeeType|OnlinePersonalCustOverlimits|
|» » » » » FeeType|OnlineReplacementCardReader|
|» » » » » FeeType|OnlinePersonalCustSetUp|
|» » » » » FeeType|OnlinePersonalCustTransaction|
|» » » » » FeeType|OnlinePaymentinGBPtoUK|
|» » » » » FeeType|OnlineUrgentPayment|
|» » » » » FeeType|OnlinePaymentinUSDtoUS|
|» » » » » FeeType|OnlineBulkDirectDebSterling|
|» » » » » FeeType|ForeignChqSent|
|» » » » » FeeType|ForeignChqSelf|
|» » » » » FeeType|ForeignChqEncashment|
|» » » » » FeeType|ForeignFXInwardsCust|
|» » » » » FeeType|ForeignFXTransfersROI|
|» » » » » FeeType|ForeignFXForwardTrans|
|» » » » » FeeType|ForeignFXTransfersBOI|
|» » » » » FeeType|ForeignExMaintenance|
|» » » » » FeeType|ForeignFXInwardsNonCust|
|» » » » » FeeType|ForeignFXOutwards|
|» » » » » FeeType|ForeignPurchase|
|» » » » » FeeType|ForeignStatusRep|
|» » » » » FeeType|ForeignChqDraft|
|» » » » » FeeType|ForeignChqCLess|
|» » » » » FeeType|ForeignChqMLess|
|» » » » » FeeType|ForeignChqOther|
|» » » » » FeeType|ForeignChqMPlus|
|» » » » » FeeType|ForeignChqCCC|
|» » » » » FeeType|ServiceCAccountFee|
|» » » » » FeeType|ServiceCAccountFeeMonthly|
|» » » » » FeeType|ServiceCAccountFeeQuarterly|
|» » » » » FeeType|ServiceCBalanceHandling|
|» » » » » FeeType|ServiceCFixedTariff|
|» » » » » FeeType|ServiceCBusiDepAccBreakage|
|» » » » » FeeType|ServiceCMonitorDaily|
|» » » » » FeeType|ServiceCManagementFee|
|» » » » » FeeType|ServiceCMinimumMonthlyFee|
|» » » » » FeeType|ServiceCMonitorMonthly|
|» » » » » FeeType|ServiceCMonitorWeekly|
|» » » » » FeeType|ServiceCSecurityFee|
|» » » » » FeeType|ServiceCMT940AccountFirst|
|» » » » » FeeType|ServiceCMT940AccountSubsequent|
|» » » » » FeeType|ServiceCOther|
|» » » » » FeeType|CounterCoinHandling|
|» » » » » FeeType|CounterCashIn|
|» » » » » FeeType|CounterCashInNotUs|
|» » » » » FeeType|CounterCashOut|
|» » » » » FeeType|CounterCashX|
|» » » » » FeeType|CounterForeignCashMax|
|» » » » » FeeType|CounterForeignNoteHandling|
|» » » » » FeeType|CounterForeignCashOut|
|» » » » » FeeType|CounterCashFeeRate|
|» » » » » FeeType|CounterForeignCashOutTx|
|» » » » » FeeType|CounterCounterLodgement|
|» » » » » FeeType|CounterCashDropLodgement|
|» » » » » FeeType|CounterNotesLodged|
|» » » » » FeeType|CounterNotesOut|
|» » » » » FeeType|CounterCashInOwn|
|» » » » » FeeType|CounterPaidTrans|
|» » » » » FeeType|CounterCashFeePercent|
|» » » » FeeSubType|FutureMultipleTerms|
|» » » » FeeSubType|Promotional|
|» » » » FeeSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» MobileWallet|AndroidPay|
|» MobileWallet|ApplePay|
|» MobileWallet|IssuerMobileApp|
|» MobileWallet|MobileBankingApp|
|» MobileWallet|Other|
|» MobileWallet|PayM|
|» MobileWallet|SamsungPay|
|» MobileWallet|VodafoneWallet|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» » FeeChargeNegotiableIndicator|No|
|» » FeeChargeNegotiableIndicator|Yes|
|» » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » FeeChargeApplicationFrequency|Daily|
|» » » FeeChargeApplicationFrequency|Weekly|
|» » » FeeChargeApplicationFrequency|Monthly|
|» » » FeeChargeApplicationFrequency|Quarterly|
|» » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » FeeChargeApplicationFrequency|Yearly|
|» » » FeeChargeApplicationFrequency|Overnight|
|» » » FeeChargeApplicationFrequency|Other|
|» » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » FeeChargeCalculationFrequency|Daily|
|» » » FeeChargeCalculationFrequency|Weekly|
|» » » FeeChargeCalculationFrequency|Monthly|
|» » » FeeChargeCalculationFrequency|Quarterly|
|» » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » FeeChargeCalculationFrequency|Yearly|
|» » » FeeChargeCalculationFrequency|Overnight|
|» » » FeeChargeCalculationFrequency|Other|
|» » » FeeChargeRateType|Gross|
|» » » FeeChargeRateType|Net|
|» » » FeeChargeRateType|Other|
|» » » FeeChargeType|Periodic|
|» » » FeeChargeType|Minimum|
|» » » FeeChargeType|Maximum|
|» » » FeeChargeType|Setup|
|» » » FeeChargeType|Review|
|» » » FeeChargeType|Renewal|
|» » » FeeChargeType|MinimumSetup|
|» » » FeeChargeType|MaximumSetup|
|» » » FeeChargeType|Total|
|» » » FeeChargeType|Item|
|» » » FeeChargeType|EmergencyLending|
|» » » FeeChargeType|Other|
|» » OverdraftProductState|FutureMultipleTerms|
|» » OverdraftProductState|Promotional|
|» » OverdraftProductState|Regular|
|» » » ArrangementType|Unarranged|
|» » » ArrangementType|Arranged|
|» » » ArrangementType|Other|
|» » » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » » FeeChargeApplicationFrequency|Daily|
|» » » » FeeChargeApplicationFrequency|Weekly|
|» » » » FeeChargeApplicationFrequency|Monthly|
|» » » » FeeChargeApplicationFrequency|Quarterly|
|» » » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » » FeeChargeApplicationFrequency|Yearly|
|» » » » FeeChargeApplicationFrequency|Overnight|
|» » » » FeeChargeApplicationFrequency|Other|
|» » » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » » FeeChargeCalculationFrequency|Daily|
|» » » » FeeChargeCalculationFrequency|Weekly|
|» » » » FeeChargeCalculationFrequency|Monthly|
|» » » » FeeChargeCalculationFrequency|Quarterly|
|» » » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » » FeeChargeCalculationFrequency|Yearly|
|» » » » FeeChargeCalculationFrequency|Overnight|
|» » » » FeeChargeCalculationFrequency|Other|
|» » » » FeeChargeRateType|Gross|
|» » » » FeeChargeRateType|Net|
|» » » » FeeChargeRateType|Other|
|» » » » FeeChargeType|Periodic|
|» » » » FeeChargeType|Minimum|
|» » » » FeeChargeType|Maximum|
|» » » » FeeChargeType|Setup|
|» » » » FeeChargeType|Review|
|» » » » FeeChargeType|Renewal|
|» » » » FeeChargeType|MinimumSetup|
|» » » » FeeChargeType|MaximumSetup|
|» » » » FeeChargeType|Total|
|» » » » FeeChargeType|Item|
|» » » » FeeChargeType|EmergencyLending|
|» » » » FeeChargeType|Other|
|» » » » » FeeChargeApplicationFrequency|AcademicTerm|
|» » » » » FeeChargeApplicationFrequency|Daily|
|» » » » » FeeChargeApplicationFrequency|Weekly|
|» » » » » FeeChargeApplicationFrequency|Monthly|
|» » » » » FeeChargeApplicationFrequency|Quarterly|
|» » » » » FeeChargeApplicationFrequency|Half-Yearly|
|» » » » » FeeChargeApplicationFrequency|Yearly|
|» » » » » FeeChargeApplicationFrequency|Overnight|
|» » » » » FeeChargeApplicationFrequency|Other|
|» » » » » FeeChargeCalculationFrequency|AcademicTerm|
|» » » » » FeeChargeCalculationFrequency|Daily|
|» » » » » FeeChargeCalculationFrequency|Weekly|
|» » » » » FeeChargeCalculationFrequency|Monthly|
|» » » » » FeeChargeCalculationFrequency|Quarterly|
|» » » » » FeeChargeCalculationFrequency|Half-Yearly|
|» » » » » FeeChargeCalculationFrequency|Yearly|
|» » » » » FeeChargeCalculationFrequency|Overnight|
|» » » » » FeeChargeCalculationFrequency|Other|
|» » » » » FeeChargeRateType|Gross|
|» » » » » FeeChargeRateType|Net|
|» » » » » FeeChargeRateType|Other|
|» » » » » FeeChargeType|Periodic|
|» » » » » FeeChargeType|Minimum|
|» » » » » FeeChargeType|Maximum|
|» » » » » FeeChargeType|Setup|
|» » » » » FeeChargeType|Review|
|» » » » » FeeChargeType|Renewal|
|» » » » » FeeChargeType|MinimumSetup|
|» » » » » FeeChargeType|MaximumSetup|
|» » » » » FeeChargeType|Total|
|» » » » » FeeChargeType|Item|
|» » » » » FeeChargeType|EmergencyLending|
|» » » » » FeeChargeType|Other|
|» » OverdraftType|Committed|
|» » OverdraftType|OnDemand|
|» ProductSegment|Basic|
|» ProductSegment|Business|
|» ProductSegment|General|
|» ProductSegment|Graduate|
|» ProductSegment|International|
|» ProductSegment|Packaged|
|» ProductSegment|Personal|
|» ProductSegment|Premium|
|» ProductSegment|Reward|
|» ProductSegment|SME|
|» ProductSegment|Student|
|» ProductSegment|YoungAdult|
|» ProductSegment|Youth|
|» ProductType|BCA|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/business-current-accounts

> Code samples

```bash
curl https://example.com/business-current-accounts \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /business-current-accounts`

Gets header information on the current set of `Business Current Account` data

<h3 id="headbusiness-current-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headbusiness-current-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-data-api-sme">SME</h1>

Endpoint for getting Unsecured SME Loan data

## get/unsecured-sme-loans

> Code samples

```bash
curl https://example.com/unsecured-sme-loans \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /unsecured-sme-loans`

Gets a list of all `Unsercured SME Lending` objects.

<h3 id="getunsecured-sme-loans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ArrearsTreatment": "string",
      "Benefits": {
        "Benefit": true,
        "BenefitGroup": [
          {
            "BenefitItem": {
              "BenefitDetail": [
                {
                  "BenefitDescription": "string",
                  "BenefitID": "string",
                  "BenefitName": "string",
                  "BenefitType": "string",
                  "BenefitValue": "string",
                  "Counter": 0,
                  "CriteriaType": [
                    "CashDeposit"
                  ],
                  "DefaultToAccounts": true,
                  "MaximumCriteria": "string",
                  "MinimumCriteria": "string",
                  "PromotionEndDate": "string",
                  "PromotionStartDate": "string"
                }
              ],
              "DateOfChange": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "BenefitSubType": "FutureMultipleTerms"
          }
        ]
      },
      "Currency": [
        "string"
      ],
      "CustomerAccessChannels": [
        "Branch"
      ],
      "Eligibility": {
        "AgeRestricted": true,
        "AnnualBusinessTurnover": "string",
        "AnnualBusinessTurnoverCurrency": "string",
        "Description": "string",
        "EligibilityName": "string",
        "EligibilityNotes": "string",
        "EligibilityType": "AnyBusinessCustomer",
        "IncomeCondition": "string",
        "IncomeTurnoverRelated": true,
        "MarketingEligibility": [
          "ExistingCustomers"
        ],
        "MaxNumberOfAccounts": "string",
        "MaximumAge": 0,
        "MaximumAgeToOpen": 0,
        "MaximumOpeningAmount": true,
        "MinIncomeTurnoverPaidIntoAccount": 0,
        "MinimumAge": 0,
        "MinimumDeposit": true,
        "MinimumIncomeFrequency": "AcademicTerm",
        "MinimumIncomeTurnoverAmount": "string",
        "MinimumIncomeTurnoverCurrency": "string",
        "MinimumOperatingBalance": "string",
        "MinimumOperatingBalanceCurrency": "string",
        "MinimumOperatingBalanceExists": true,
        "OpeningDepositMaximumAmount": "string",
        "OpeningDepositMaximumCurrency": "string",
        "OpeningDepositMinimum": "string",
        "OpeningDepositMinimumCurrency": "string",
        "OtherFinancialHoldingRequired": true,
        "PreviousBankruptcy": true,
        "ResidencyRestricted": true,
        "ResidencyRestrictedRegion": "UK",
        "SingleJointIncome": "Joint",
        "ThirdSectorOrganisations": true
      },
      "FeesAndCharges": [
        {
          "Fees": {
            "DateOfChange": "string",
            "FeeDetails": [
              {
                "FeeDetail": {
                  "DateOfChange": "string",
                  "FeeSubDetails": {
                    "FeeAmount": "string",
                    "FeeFrequency": "AcademicTerm",
                    "FeeHigherTier": 0,
                    "FeeLowerTier": 0,
                    "FeeMax": "string",
                    "FeeMin": "string",
                    "FeeRate": "string",
                    "FeesAndChargesNotes": "string",
                    "Negotiable": true,
                    "RepresentativeRate": "string"
                  },
                  "FeeType": "Other",
                  "LengthPromotionalInDays": 0,
                  "Other": "string",
                  "StartPromotionOrFutureTerms": "string",
                  "StopPromotionOrFutureTerms": "string"
                },
                "FeeSubType": "FutureMultipleTerms"
              }
            ],
            "FeeHigherTier": 0,
            "FeeLowerTier": 0,
            "LengthPromotionalInDays": 0,
            "StartPromotionOrFutureTerms": "string",
            "StopPromotionOrFutureTerms": "string"
          },
          "ProductState": "FutureMultipleTerms"
        }
      ],
      "LoanItem": [
        {
          "CCARegulatedEntity": true,
          "DateOfChange": "string",
          "IsALowInterestRepaymentStartPossible": true,
          "IsThisAnInterestOnlyLoan": true,
          "LengthPromotionalInDays": 0,
          "LoanPricing": [
            {
              "IndicativeRate": "string",
              "LoanLengthIncrement": "1 year",
              "LoanLengthIncrementLower": 0,
              "LoanLengthIncrementUpper": 0,
              "LoanSizeBandLower": "string",
              "LoanSizeBandUpper": "string",
              "Negotiable": true,
              "RateComparisonType": "APR",
              "RepaymentFrequency": [
                "Daily"
              ],
              "SizeIncrement": "£5000"
            }
          ],
          "ProductState": "FutureMultipleTerms",
          "StartPromotionOrFutureTerms": "string",
          "StopPromotionOrFutureTerms": "string",
          "WillTheLoanBePaidInTrancheDrawdowns": true
        }
      ],
      "MaximumLoanAmount": "string",
      "MaximumLoanTerm": 0,
      "MinimumLoanAmount": "string",
      "MinimumLoanTerm": 0,
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "PaymentHoliday": true,
      "ProductDescription": "string",
      "ProductIdentifier": "string",
      "ProductName": "string",
      "ProductSegment": [
        "AgricultureSector"
      ],
      "ProductTypeName": "FlexibleBusinessLoan",
      "ProductURL": [
        "http://example.com"
      ],
      "TsandCs": [
        "string"
      ]
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getunsecured-sme-loans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `Unsecured SME Lending` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getunsecured-sme-loans-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» ArrearsTreatment|string|false|none|Arrears treatment|
|» Benefits|object|true|none|Benefit|
|» » Benefit|boolean|true|none|Describe  one or more benefits if they exist|
|» » BenefitGroup|[object]|false|none|none|
|» » » BenefitItem|object|true|none|Benefit Item|
|» » » » BenefitDetail|[object]|false|none|none|
|» » » » » BenefitDescription|string|false|none|A textual explanation of what the benefit is|
|» » » » » BenefitID|string|false|none|Unique benefit identifier per organisation|
|» » » » » BenefitName|string|false|none|The name of the benefit|
|» » » » » BenefitType|string|false|none|Type that represents the nature of the benefit|
|» » » » » BenefitValue|string|false|none|The value or values permissible for a specific benefit for an individual product representing a product characteristic|
|» » » » » Counter|integer|false|none|Counter for the criteria (e.g. number of DD)|
|» » » » » CriteriaType|[string]|false|none|none|
|» » » » » DefaultToAccounts|boolean|false|none|Is the benefit part of the default account|
|» » » » » MaximumCriteria|string|false|none|Maximum amount for the criteria|
|» » » » » MinimumCriteria|string|false|none|Minimum amount for the criteria|
|» » » » » PromotionEndDate|string|false|none|If the benefit is temporal the end date is when the benefit is no longer applicable|
|» » » » » PromotionStartDate|string|false|none|If the benefit is temporal the start date is when the benefit comes into effect|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date in days|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » BenefitSubType|string|false|none|Benefit Subtype Code|
|» Currency|[string]|true|none|Currency of the Account. Default to GBP at present|
|» CustomerAccessChannels|[string]|true|none|Ways to interact with the bank|
|» Eligibility|object|true|none|Eligibility|
|» » AgeRestricted|boolean|true|none|Indicates a customer's age is part of eligibility criteria|
|» » AnnualBusinessTurnover|string|false|none|Annual Business Turnover|
|» » AnnualBusinessTurnoverCurrency|string|false|none|Annual Business Turnover Currency|
|» » Description|string|true|none|One paragraph detailing the eligibility|
|» » EligibilityName|string|false|none|Free text description, denotes non standard eligibilities not included in the code list|
|» » EligibilityNotes|string|false|none|Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions|
|» » EligibilityType|string|false|none|Eligibility type|
|» » IncomeCondition|string|false|none|Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)|
|» » IncomeTurnoverRelated|boolean|true|none|Indicates if eligibility linked to income|
|» » MarketingEligibility|[string]|false|none|none|
|» » MaxNumberOfAccounts|string|false|none|Maximum number of the same prodcut the customer may hold|
|» » MaximumAge|integer|false|none|Maximum age, in years, allowed to hold the account|
|» » MaximumAgeToOpen|integer|false|none|Maximum age, in years, to open an account|
|» » MaximumOpeningAmount|boolean|false|none|A maximum amount to be deposited at opening|
|» » MinIncomeTurnoverPaidIntoAccount|integer|false|none|Minimum Income Amount required to paid into the account|
|» » MinimumAge|integer|false|none|Minimum age, in years, required to hold an account|
|» » MinimumDeposit|boolean|false|none|A minimum deposit required to hold this account|
|» » MinimumIncomeFrequency|string|false|none|The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts|
|» » MinimumIncomeTurnoverAmount|string|false|none|Minimum income / Turnover required to hold the product|
|» » MinimumIncomeTurnoverCurrency|string|false|none|Minimum income / Turnover Currency|
|» » MinimumOperatingBalance|string|false|none|Minimum Operating Balance|
|» » MinimumOperatingBalanceCurrency|string|false|none|Minimum Operating Balance currency|
|» » MinimumOperatingBalanceExists|boolean|false|none|Is there a Minimum Operating Balance?|
|» » OpeningDepositMaximumAmount|string|false|none|Maximum Amount to be depositing at opening|
|» » OpeningDepositMaximumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OpeningDepositMinimum|string|false|none|Minimum Amount to be held on account|
|» » OpeningDepositMinimumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OtherFinancialHoldingRequired|boolean|true|none|Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature|
|» » PreviousBankruptcy|boolean|true|none|Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280|
|» » ResidencyRestricted|boolean|true|none|Indicates a customer's residency forms part of the eligibility criteria|
|» » ResidencyRestrictedRegion|string|false|none|Indicates a customer must be current resident of a geographic area/country|
|» » SingleJointIncome|string|false|none|Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this|
|» » ThirdSectorOrganisations|boolean|true|none|Is the product available to operate as a Clubs or Societies account?|
|» FeesAndCharges|[object]|true|none|none|
|» » Fees|object|true|none|Fees|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » FeeDetails|[object]|true|none|none|
|» » » » FeeDetail|object|true|none|Fee Detail|
|» » » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » » FeeSubDetails|object|true|none|Fee Sub Details|
|» » » » » » FeeAmount|string|false|none|Fee in GBP|
|» » » » » » FeeFrequency|string|true|none|Triggering frequency of the fee|
|» » » » » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » » » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » » » » FeeMax|string|false|none|Fee in GBP|
|» » » » » » FeeMin|string|false|none|Fee in GBP|
|» » » » » » FeeRate|string|false|none|% Rate|
|» » » » » » FeesAndChargesNotes|string|false|none|Supplementary information for fees and charges|
|» » » » » » Negotiable|boolean|true|none|Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor|
|» » » » » » RepresentativeRate|string|false|none|Representative Rate|
|» » » » » FeeType|string|true|none|A description of the Fee type|
|» » » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » » » Other|string|false|none|Describe other fee type|
|» » » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » » FeeSubType|string|true|none|Fee Sub Type code|
|» » » FeeHigherTier|integer|false|none|Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range|
|» » » FeeLowerTier|integer|false|none|Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» LoanItem|[object]|true|none|none|
|» » CCARegulatedEntity|boolean|true|none|none|
|» » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » IsALowInterestRepaymentStartPossible|boolean|true|none|none|
|» » IsThisAnInterestOnlyLoan|boolean|true|none|none|
|» » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date in days|
|» » LoanPricing|[object]|false|none|none|
|» » » IndicativeRate|string|true|none|none|
|» » » LoanLengthIncrement|string|true|none|Loan Length Increments|
|» » » LoanLengthIncrementLower|integer|true|none|none|
|» » » LoanLengthIncrementUpper|integer|true|none|none|
|» » » LoanSizeBandLower|string|true|none|Monetary amount without currency|
|» » » LoanSizeBandUpper|string|true|none|Monetary amount without currency|
|» » » Negotiable|boolean|true|none|none|
|» » » RateComparisonType|string|false|none|Rate Comparison Type|
|» » » RepaymentFrequency|[string]|true|none|none|
|» » » SizeIncrement|string|true|none|Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value|
|» » ProductState|string|true|none|Describes if the offering is promotional or a description of a future state.|
|» » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » WillTheLoanBePaidInTrancheDrawdowns|boolean|true|none|none|
|» MaximumLoanAmount|string|true|none|Maximum loan amount|
|» MaximumLoanTerm|integer|true|none|Maximum loan term (Days)|
|» MinimumLoanAmount|string|true|none|Minimum loan amount|
|» MinimumLoanTerm|integer|true|none|Minimum term (Days)|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» PaymentHoliday|boolean|true|none|Indicates whether a repayment holiday is allowed|
|» ProductDescription|string|true|none|Description of the product provided by the parent Organisation|
|» ProductIdentifier|string|true|none|Identifier within the parent organisation for the product. Must be unique in the organisation|
|» ProductName|string|true|none|The short product or marketing name assigned by the parent organisation|
|» ProductSegment|[string]|true|none|none|
|» ProductTypeName|string|true|none|Descriptive code for the product category|
|» ProductURL|[string(uri)]|true|none|none|
|» TsandCs|[string]|true|none|URL provided by the parent organisation which redirects to the T&Cs|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » » CriteriaType|CashDeposit|
|» » » » » CriteriaType|Deposit|
|» » » » » CriteriaType|DirectDebit|
|» » » » » CriteriaType|InitialDeposit|
|» » » » » CriteriaType|InternetLogon|
|» » » » » CriteriaType|MobileLogon|
|» » » » » CriteriaType|RegularDeposit|
|» » » BenefitSubType|FutureMultipleTerms|
|» » » BenefitSubType|Promotional|
|» » » BenefitSubType|Regular|
|» CustomerAccessChannels|Branch|
|» CustomerAccessChannels|MobileBankingApp|
|» CustomerAccessChannels|Online|
|» CustomerAccessChannels|Phone|
|» CustomerAccessChannels|Post|
|» CustomerAccessChannels|PostOffice|
|» CustomerAccessChannels|Text|
|» » EligibilityType|AnyBusinessCustomer|
|» » EligibilityType|BusinessOnly|
|» » EligibilityType|CreditCard|
|» » EligibilityType|CreditScoring|
|» » EligibilityType|EmailAddress|
|» » EligibilityType|ExistingCustomers|
|» » EligibilityType|IdAndV|
|» » EligibilityType|Mortgage|
|» » EligibilityType|NoArrearsOnLoan|
|» » EligibilityType|NoCustomerInArrears|
|» » EligibilityType|NoOverOverdraftThirtyDays|
|» » EligibilityType|NoSoleUkAccountOrBankrupt|
|» » EligibilityType|NTB|
|» » EligibilityType|NTBBusiness|
|» » EligibilityType|SoleStudentAccount|
|» » EligibilityType|SoleUkAccount|
|» » EligibilityType|StudentsOnly|
|» » EligibilityType|TwoMonthsOfCourseStart|
|» » EligibilityType|UCASFulltimeTwoYears|
|» » MarketingEligibility|ExistingCustomers|
|» » MarketingEligibility|NewCustomersOnly|
|» » MarketingEligibility|SwitchersOnly|
|» » MarketingEligibility|StartUp|
|» » MinimumIncomeFrequency|AcademicTerm|
|» » MinimumIncomeFrequency|HalfYearly|
|» » MinimumIncomeFrequency|Monthly|
|» » MinimumIncomeFrequency|Quarterly|
|» » MinimumIncomeFrequency|Weekly|
|» » MinimumIncomeFrequency|Yearly|
|» » ResidencyRestrictedRegion|UK|
|» » ResidencyRestrictedRegion|EEA|
|» » ResidencyRestrictedRegion|EU|
|» » ResidencyRestrictedRegion|EFTA|
|» » ResidencyRestrictedRegion|GB - ENG|
|» » ResidencyRestrictedRegion|GB - NIR|
|» » ResidencyRestrictedRegion|GB - SCT|
|» » ResidencyRestrictedRegion|GB - WLS|
|» » ResidencyRestrictedRegion|IRL|
|» » SingleJointIncome|Joint|
|» » SingleJointIncome|SoleIncome|
|» » SingleJointIncome|SoleOrJoint|
|» » SingleJointIncome|Turnover|
|» » » » » » FeeFrequency|AcademicTerm|
|» » » » » » FeeFrequency|AccountClosing|
|» » » » » » FeeFrequency|AccountOpening|
|» » » » » » FeeFrequency|AtTimeOfLoanRepayment|
|» » » » » » FeeFrequency|ChargingPeriod|
|» » » » » » FeeFrequency|Daily|
|» » » » » » FeeFrequency|EveryFiveBusinessDays|
|» » » » » » FeeFrequency|Item|
|» » » » » » FeeFrequency|Monthly|
|» » » » » » FeeFrequency|OnAccountAnniversary|
|» » » » » » FeeFrequency|PerHour|
|» » » » » » FeeFrequency|PerOccurrence|
|» » » » » » FeeFrequency|PerSheet|
|» » » » » » FeeFrequency|PerTransactionAmount|
|» » » » » » FeeFrequency|PerTransactionPercentage|
|» » » » » » FeeFrequency|Quarterly|
|» » » » » » FeeFrequency|SixMonthly|
|» » » » » » FeeFrequency|StartOfLoan|
|» » » » » » FeeFrequency|StatementMonthly|
|» » » » » » FeeFrequency|Weekly|
|» » » » » » FeeFrequency|Yearly|
|» » » » » FeeType|Other|
|» » » » » FeeType|ATMDonation|
|» » » » » FeeType|ATMDeposATMPaidIn|
|» » » » » FeeType|ReportCertBalance|
|» » » » » FeeType|ATMAbroadConVisaCredit|
|» » » » » FeeType|ATMAbroadConVisaDebit|
|» » » » » FeeType|ATMCardnetEnvIn|
|» » » » » FeeType|ATMCashGroupATMCreditCard|
|» » » » » FeeType|ATMCashNonGroupATMCredittcard|
|» » » » » FeeType|ATMCashGroupATMDebitCard|
|» » » » » FeeType|ATMCashNonGroupATMDebitcard|
|» » » » » FeeType|ATMConGroupATM|
|» » » » » FeeType|ATMAbroad|
|» » » » » FeeType|ATMForeignCashDebCard|
|» » » » » FeeType|ATMAbroadGoldVisaDebit|
|» » » » » FeeType|ATMSpainCashCard|
|» » » » » FeeType|ATMSpainDebitCard|
|» » » » » FeeType|ATMSpainConversionDebitCard|
|» » » » » FeeType|ATMSpainConversionCashCard|
|» » » » » FeeType|ATMNonSterlingWithdrawal|
|» » » » » FeeType|ATMAbroadVisaCredit|
|» » » » » FeeType|ATMAbroadVisaDebit|
|» » » » » FeeType|ATMAbroadConVisaGoldDebit|
|» » » » » FeeType|ATMWidthdrawCash|
|» » » » » FeeType|BACSOnLineAncilliary|
|» » » » » FeeType|BACSBatch|
|» » » » » FeeType|BACSOnLineFile|
|» » » » » FeeType|BACSFileItem|
|» » » » » FeeType|BACSOnLineSetup |
|» » » » » FeeType|BACSItem|
|» » » » » FeeType|BACSItemInterbranch|
|» » » » » FeeType|BACSBulkBatch|
|» » » » » FeeType|BACSOnLineOverlimit|
|» » » » » FeeType|BACSOnLinePayment|
|» » » » » FeeType|BACSRecallItem|
|» » » » » FeeType|BACSOnLineService|
|» » » » » FeeType|BACSBulkInternet|
|» » » » » FeeType|BACSTELDirDebSmartCard|
|» » » » » FeeType|BACSTELDirDebWebInit|
|» » » » » FeeType|BACSTELirDebWebInit|
|» » » » » FeeType|BACSTELDirDebOverlimit|
|» » » » » FeeType|BACSTELDirDebPayment|
|» » » » » FeeType|BACSTELDirDebService|
|» » » » » FeeType|BACSTELDirDebAncilliary|
|» » » » » FeeType|BACSDirectItemProfile|
|» » » » » FeeType|BACSTELAncilliary|
|» » » » » FeeType|BACSTELSmartCard|
|» » » » » FeeType|BACSTELFile|
|» » » » » FeeType|BACSTELSetup |
|» » » » » FeeType|BACSTELOverlimit|
|» » » » » FeeType|BACSTELPayment|
|» » » » » FeeType|BACSTELService|
|» » » » » FeeType|CHAPSOutBranch|
|» » » » » FeeType|CHAPSCancellation|
|» » » » » FeeType|CHAPSOutOnlineDepositAcc|
|» » » » » FeeType|CHAPSIn|
|» » » » » FeeType|CHAPSOutInterBank|
|» » » » » FeeType|CHAPSInterBank|
|» » » » » FeeType|CHAPSOutPost|
|» » » » » FeeType|CHAPSOutInterBranch|
|» » » » » FeeType|CHAPSOut|
|» » » » » FeeType|CHAPSOutOnline|
|» » » » » FeeType|CHAPSandForeignPay|
|» » » » » FeeType|CHAPSOutManual|
|» » » » » FeeType|CardCardReplacement|
|» » » » » FeeType|DraftsCounter|
|» » » » » FeeType|DraftsBankers|
|» » » » » FeeType|DraftsIntlPayableAbroad|
|» » » » » FeeType|DraftsLostStolen|
|» » » » » FeeType|CardPersonalisedCard|
|» » » » » FeeType|DraftsIntlStoppedCancelled|
|» » » » » FeeType|EuroChqXLess|
|» » » » » FeeType|EuroChqXPlus|
|» » » » » FeeType|FPSOutFutureDated|
|» » » » » FeeType|FPSOutImmediate|
|» » » » » FeeType|FPSOut|
|» » » » » FeeType|FPSOutOwn|
|» » » » » FeeType|FPSInBranch|
|» » » » » FeeType|FPSUKPayUrgent|
|» » » » » FeeType|LegalArticlesReport|
|» » » » » FeeType|LegalSealing|
|» » » » » FeeType|LegalBondAndGuarantee|
|» » » » » FeeType|LegalCourtOrder|
|» » » » » FeeType|LegalCoSearch|
|» » » » » FeeType|LegalDepositAssignment|
|» » » » » FeeType|LegalGuaranteePrep|
|» » » » » FeeType|LegalLifePolicyPrepCo|
|» » » » » FeeType|LegalLifePolicyPrepPersonal|
|» » » » » FeeType|LegalPriorityPariPassu|
|» » » » » FeeType|LegalSubordinationAgreement|
|» » » » » FeeType|DirDebDirectDebitAdmin|
|» » » » » FeeType|DirDebDirectDebitCancel|
|» » » » » FeeType|IntlPayBIBForeignLimit|
|» » » » » FeeType|IntlPayCreditTransCust|
|» » » » » FeeType|IntlPayCreditTransNonCust|
|» » » » » FeeType|IntlPayUrgentPaymentForeign|
|» » » » » FeeType|IntlPayExpressMoneyMover|
|» » » » » FeeType|IntlPayEEAPayUrgent|
|» » » » » FeeType|IntlPayIrishPayUrgent|
|» » » » » FeeType|IntlPayEEAPay|
|» » » » » FeeType|IntlPayForeignIn1CPlus|
|» » » » » FeeType|IntlPayForeignPaymentInUKAcc|
|» » » » » FeeType|IntlPayForeignCharge|
|» » » » » FeeType|IntlPayForeignCancellation|
|» » » » » FeeType|IntlPayForeignStandardEUEuroBIC|
|» » » » » FeeType|IntlPayFXFeeRate|
|» » » » » FeeType|IntlPayForeignInternet|
|» » » » » FeeType|IntlPayForeign|
|» » » » » FeeType|IntlPayForeignInbound|
|» » » » » FeeType|IntlPayFXPaymentOut|
|» » » » » FeeType|IntlPayForeignInSub1C|
|» » » » » FeeType|IntlPayFXRate|
|» » » » » FeeType|IntlPayForeignStandardEUEuroNoBIC|
|» » » » » FeeType|IntlPayFXPaymentOutIR|
|» » » » » FeeType|IntlPayFXFee|
|» » » » » FeeType|IntlPayPurchaseNonSterling|
|» » » » » FeeType|IntlPayPostPaymentForeign|
|» » » » » FeeType|IntlPayPurchaseRateNonSterling|
|» » » » » FeeType|IntlPayPaymentTracing|
|» » » » » FeeType|IntlPayStandardMoneyMover|
|» » » » » FeeType|IntlPayMT101Transaction|
|» » » » » FeeType|IntlPayTransNonSterling|
|» » » » » FeeType|IntlPayTransRateNonSterling|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroBIC|
|» » » » » FeeType|IntlPayForeignUrgentEUEuroNoBIC|
|» » » » » FeeType|IntlPayUrgentPaymentGroup|
|» » » » » FeeType|IntlPayUrgentPaymentUK|
|» » » » » FeeType|IntlPayUSAPayUrgent|
|» » » » » FeeType|IntlPayCurrencyPurchase|
|» » » » » FeeType|IntlPayWorldpayPayment|
|» » » » » FeeType|IntlPayCurrencyWithdraw|
|» » » » » FeeType|InvPayBankDetailsWrong|
|» » » » » FeeType|InvPayForeignBCNR|
|» » » » » FeeType|InvPayForeignRecall|
|» » » » » FeeType|InvGeneralInq|
|» » » » » FeeType|InvOldInstruction|
|» » » » » FeeType|InvPayPaymentRecall|
|» » » » » FeeType|InvPayReturnDebitXVLess|
|» » » » » FeeType|InvPayReturnDebitXVPlus|
|» » » » » FeeType|InvPayStopPayment|
|» » » » » FeeType|InvPayStandingOrdUnpaid|
|» » » » » FeeType|SafeKeepAccess|
|» » » » » FeeType|SafeKeepDeedMedium|
|» » » » » FeeType|SafeKeepingEnvelope|
|» » » » » FeeType|SafeKeepingInspection|
|» » » » » FeeType|SafeKeepingLargeItem|
|» » » » » FeeType|SafeKeepMultipleItems|
|» » » » » FeeType|SafeKeepingParcel|
|» » » » » FeeType|SafeKeepDeedSmall|
|» » » » » FeeType|SafeKeepOneItem|
|» » » » » FeeType|SafeKeepSafeCustody|
|» » » » » FeeType|LoanArrangementFeePC|
|» » » » » FeeType|LoanArrangement|
|» » » » » FeeType|LoanEarlyRepayment|
|» » » » » FeeType|LoanLatePayment|
|» » » » » FeeType|LoanSMEUnsecuredLoan|
|» » » » » FeeType|LoanTieredArrangement|
|» » » » » FeeType|NightSafeNightSafeBankOpen|
|» » » » » FeeType|NightSafeCreditSub5K|
|» » » » » FeeType|NightSafeNightSafe|
|» » » » » FeeType|NightSafeNightSafePaidIn|
|» » » » » FeeType|OverdraftAnnualReview|
|» » » » » FeeType|OverdraftTempOverdraft|
|» » » » » FeeType|OverdraftUnauthorisedBorrowing|
|» » » » » FeeType|POPostOfficeCounterCredit|
|» » » » » FeeType|POPostOfficeCashCredit|
|» » » » » FeeType|POPostOfficeCashOut|
|» » » » » FeeType|POPostOfficeWithdrawal|
|» » » » » FeeType|ChqBookTheftLossAllStopped|
|» » » » » FeeType|ChqIssuedCurrencyAcc|
|» » » » » FeeType|ChqCopy|
|» » » » » FeeType|ChqDraft|
|» » » » » FeeType|ChqIn|
|» » » » » FeeType|ChqDraftSterling|
|» » » » » FeeType|ChqOutIssued|
|» » » » » FeeType|ChqSpecialChqPresentation|
|» » » » » FeeType|ChqCounterCheque|
|» » » » » FeeType|ChqChequeswithStatement|
|» » » » » FeeType|ChqStopped|
|» » » » » FeeType|ChqTrans|
|» » » » » FeeType|ChqDraftFX|
|» » » » » FeeType|ChqForeignCourier|
|» » » » » FeeType|ChqForeignNegTenThou|
|» » » » » FeeType|ChqForeignNegHundred|
|» » » » » FeeType|ChequeForeignBankDivi|
|» » » » » FeeType|ChqForeignNegFiftyThou|
|» » » » » FeeType|ChqPensionCheque|
|» » » » » FeeType|ChequeForeignOtherDivi|
|» » » » » FeeType|ChqForeignNegFiveThou|
|» » » » » FeeType|ChqForeignNegMax|
|» » » » » FeeType|ChqForeignGBPMMDPlus|
|» » » » » FeeType|ChqGiftCheque|
|» » » » » FeeType|ChqCounterLodgement|
|» » » » » FeeType|ChqCashDropLodgement|
|» » » » » FeeType|ChqChequePhotocopy|
|» » » » » FeeType|ChqPostOfficeCredit|
|» » » » » FeeType|ChqPostOfficeChequeCollected|
|» » » » » FeeType|ChqChequeRetrieval|
|» » » » » FeeType|ChqReconcilliationPerTrans|
|» » » » » FeeType|ChqSpecialPresentationCount|
|» » » » » FeeType|ChqSpecialPresentationPTT|
|» » » » » FeeType|ChqUnpaidCharge|
|» » » » » FeeType|ChqUnpaidTransIn|
|» » » » » FeeType|ChqUnpaidTransOut|
|» » » » » FeeType|ChqUnpaidCheque|
|» » » » » FeeType|ReportAuditLetter|
|» » » » » FeeType|ReportFAXAdviceAdditional|
|» » » » » FeeType|ReportTelAdviceAdditional|
|» » » » » FeeType|ReportCreditHistory|
|» » » » » FeeType|ReportCertInterestDuplicate|
|» » » » » FeeType|ReportCertInterest|
|» » » » » FeeType|ReportCreditHistoryAdditionalInYear|
|» » » » » FeeType|ReportForeignStatusEnqElec|
|» » » » » FeeType|ReportForeignStatusEnq|
|» » » » » FeeType|ReportCashBackorInterestAnal|
|» » » » » FeeType|ReportStatementChqDaily|
|» » » » » FeeType|ReportStatementChqFortnightly|
|» » » » » FeeType|ReportStatementChqMonthly|
|» » » » » FeeType|ReportStatementChqWeekly|
|» » » » » FeeType|ReportStatementAndDiviChq|
|» » » » » FeeType|ReportReference|
|» » » » » FeeType|ReportReferralItem|
|» » » » » FeeType|ReportStatementByATM|
|» » » » » FeeType|ReportStatementByBranch|
|» » » » » FeeType|ReportStatementCopyRegular|
|» » » » » FeeType|ReportStatusEnquiry|
|» » » » » FeeType|ReportStatementFrequent|
|» » » » » FeeType|ReportStatementMonthly|
|» » » » » FeeType|ReportStatementCopy1|
|» » » » » FeeType|ReportStatementToBranch|
|» » » » » FeeType|ReportSMSTextMiniStatementorAlert|
|» » » » » FeeType|ReportStatementFortnightly|
|» » » » » FeeType|ReportSMSTextMiniStatementWoM|
|» » » » » FeeType|ReportSMSTextAlertBalance|
|» » » » » FeeType|ReportSMSTextAlert|
|» » » » » FeeType|ReportTaxCert|
|» » » » » FeeType|ReportWeeklyStatement|
|» » » » » FeeType|ReportTextMessageBanking|
|» » » » » FeeType|SEPACancellation|
|» » » » » FeeType|SEPABranch|
|» » » » » FeeType|SEPACredit|
|» » » » » FeeType|SEPADirectDebit|
|» » » » » FeeType|SEPAIn|
|» » » » » FeeType|SEPAEuro|
|» » » » » FeeType|SEPAOut|
|» » » » » FeeType|SEPAUnpaid|
|» » » » » FeeType|SEPAWinbitsAnnual Service|
|» » » » » FeeType|SEPAWinbitsTransaction|
|» » » » » FeeType|TransBillPaymentBranch|
|» » » » » FeeType|TransBillCollect|
|» » » » » FeeType|TransTelephoneBillPayment|
|» » » » » FeeType|TransBankPayment|
|» » » » » FeeType|TransBillPaymentTelephone|
|» » » » » FeeType|TransCorrespondentBankFee|
|» » » » » FeeType|TransCreditTransferUKDifferent|
|» » » » » FeeType|TransCreditTransferUKSame|
|» » » » » FeeType|TransCredit|
|» » » » » FeeType|TransCreditTransfer|
|» » » » » FeeType|TransBranchCredit|
|» » » » » FeeType|TransDebit|
|» » » » » FeeType|TransDebCardDeb|
|» » » » » FeeType|TransUKDirDeb|
|» » » » » FeeType|TransManualDeb|
|» » » » » FeeType|TransBuyForeignWithGBP|
|» » » » » FeeType|TransGoodValueReq|
|» » » » » FeeType|TransSWIFTOutUKForeign|
|» » » » » FeeType|TransInconpleteInstruction|
|» » » » » FeeType|TransManualEntries|
|» » » » » FeeType|TransManualTrans|
|» » » » » FeeType|TransNonSterling|
|» » » » » FeeType|TransPOSSaleForeign|
|» » » » » FeeType|TransPriPaymentPost|
|» » » » » FeeType|TransPOSSaleUK|
|» » » » » FeeType|TransReturnPayment|
|» » » » » FeeType|TransReconciliationPerTrans|
|» » » » » FeeType|TransStandingOrdAdmin|
|» » » » » FeeType|TransStandingOrd|
|» » » » » FeeType|TransStandingOrdManPay|
|» » » » » FeeType|TransTravellersChqOtherBank|
|» » » » » FeeType|TransTelBusiPriPaymentForeignToUKAcc|
|» » » » » FeeType|TransTeleItem|
|» » » » » FeeType|TransTelBusiPriPaymentToGrpAcc|
|» » » » » FeeType|TransTravellersChqRate|
|» » » » » FeeType|TransTransferExGroup|
|» » » » » FeeType|TransUnauthorisedPaidTrans|
|» » » » » FeeType|TransUrgentPaymentPostal|
|» » » » » FeeType|TransUnpaidTrans|
|» » » » » FeeType|TransTelBusiPriPaymentToNonGrpAcc|
|» » » » » FeeType|TransSWIFTOutNonEEASterling|
|» » » » » FeeType|AutoAutoCredit|
|» » » » » FeeType|AutoAutomatedEntries|
|» » » » » FeeType|AutoAutoCreditPhoneInet|
|» » » » » FeeType|AutoAutomatedTrans|
|» » » » » FeeType|AutoDebitCardCommercial|
|» » » » » FeeType|AutoFPSAutoCredit|
|» » » » » FeeType|VisaConvertAbroadForeign|
|» » » » » FeeType|VisaBureauDeChange|
|» » » » » FeeType|VisaTravellersChqorCurrency|
|» » » » » FeeType|OnlineInternetBillPayment|
|» » » » » FeeType|OnlineBusinessOnlineEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineUrgentEuroPayment|
|» » » » » FeeType|OnlineBusinessOnlineForeignPayment|
|» » » » » FeeType|OnlineInterbankTransfer|
|» » » » » FeeType|OnlineInterbankPerTransfer|
|» » » » » FeeType|OnlineInterbranchTransfer|
|» » » » » FeeType|OnlineInterbranchPerTransfer|
|» » » » » FeeType|OnlineSubscriptionMonthly|
|» » » » » FeeType|OnlineBankingPayment|
|» » » » » FeeType|OnlineBankingSubscription|
|» » » » » FeeType|OnlinePOSSale|
|» » » » » FeeType|OnlinePersonalCustAncillarys|
|» » » » » FeeType|OnlinePersonalCustService|
|» » » » » FeeType|OnlinePersonalCustOverlimits|
|» » » » » FeeType|OnlineReplacementCardReader|
|» » » » » FeeType|OnlinePersonalCustSetUp|
|» » » » » FeeType|OnlinePersonalCustTransaction|
|» » » » » FeeType|OnlinePaymentinGBPtoUK|
|» » » » » FeeType|OnlineUrgentPayment|
|» » » » » FeeType|OnlinePaymentinUSDtoUS|
|» » » » » FeeType|OnlineBulkDirectDebSterling|
|» » » » » FeeType|ForeignChqSent|
|» » » » » FeeType|ForeignChqSelf|
|» » » » » FeeType|ForeignChqEncashment|
|» » » » » FeeType|ForeignFXInwardsCust|
|» » » » » FeeType|ForeignFXTransfersROI|
|» » » » » FeeType|ForeignFXForwardTrans|
|» » » » » FeeType|ForeignFXTransfersBOI|
|» » » » » FeeType|ForeignExMaintenance|
|» » » » » FeeType|ForeignFXInwardsNonCust|
|» » » » » FeeType|ForeignFXOutwards|
|» » » » » FeeType|ForeignPurchase|
|» » » » » FeeType|ForeignStatusRep|
|» » » » » FeeType|ForeignChqDraft|
|» » » » » FeeType|ForeignChqCLess|
|» » » » » FeeType|ForeignChqMLess|
|» » » » » FeeType|ForeignChqOther|
|» » » » » FeeType|ForeignChqMPlus|
|» » » » » FeeType|ForeignChqCCC|
|» » » » » FeeType|ServiceCAccountFee|
|» » » » » FeeType|ServiceCAccountFeeMonthly|
|» » » » » FeeType|ServiceCAccountFeeQuarterly|
|» » » » » FeeType|ServiceCBalanceHandling|
|» » » » » FeeType|ServiceCFixedTariff|
|» » » » » FeeType|ServiceCBusiDepAccBreakage|
|» » » » » FeeType|ServiceCMonitorDaily|
|» » » » » FeeType|ServiceCManagementFee|
|» » » » » FeeType|ServiceCMinimumMonthlyFee|
|» » » » » FeeType|ServiceCMonitorMonthly|
|» » » » » FeeType|ServiceCMonitorWeekly|
|» » » » » FeeType|ServiceCSecurityFee|
|» » » » » FeeType|ServiceCMT940AccountFirst|
|» » » » » FeeType|ServiceCMT940AccountSubsequent|
|» » » » » FeeType|ServiceCOther|
|» » » » » FeeType|CounterCoinHandling|
|» » » » » FeeType|CounterCashIn|
|» » » » » FeeType|CounterCashInNotUs|
|» » » » » FeeType|CounterCashOut|
|» » » » » FeeType|CounterCashX|
|» » » » » FeeType|CounterForeignCashMax|
|» » » » » FeeType|CounterForeignNoteHandling|
|» » » » » FeeType|CounterForeignCashOut|
|» » » » » FeeType|CounterCashFeeRate|
|» » » » » FeeType|CounterForeignCashOutTx|
|» » » » » FeeType|CounterCounterLodgement|
|» » » » » FeeType|CounterCashDropLodgement|
|» » » » » FeeType|CounterNotesLodged|
|» » » » » FeeType|CounterNotesOut|
|» » » » » FeeType|CounterCashInOwn|
|» » » » » FeeType|CounterPaidTrans|
|» » » » » FeeType|CounterCashFeePercent|
|» » » » FeeSubType|FutureMultipleTerms|
|» » » » FeeSubType|Promotional|
|» » » » FeeSubType|Regular|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» » » LoanLengthIncrement|1 year|
|» » » LoanLengthIncrement|2 years|
|» » » LoanLengthIncrement|3 years|
|» » » LoanLengthIncrement|4 years|
|» » » LoanLengthIncrement|5 years|
|» » » RateComparisonType|APR|
|» » » RateComparisonType|AER|
|» » » RateComparisonType|Gross|
|» » » RateComparisonType|Net|
|» » » RateComparisonType|RepApr|
|» » » RepaymentFrequency|Daily|
|» » » RepaymentFrequency|Flexible|
|» » » RepaymentFrequency|Fortnightly|
|» » » RepaymentFrequency|HalfYearly|
|» » » RepaymentFrequency|Monthly|
|» » » RepaymentFrequency|Quarterly|
|» » » RepaymentFrequency|Weekly|
|» » » RepaymentFrequency|Yearly|
|» » » SizeIncrement|£5000|
|» » » SizeIncrement|£10000|
|» » » SizeIncrement|£15000|
|» » » SizeIncrement|£20000|
|» » » SizeIncrement|£25000|
|» » » SizeIncrement|Other|
|» » » SizeIncrement|TierMaximum|
|» » » SizeIncrement|TierMinimum|
|» » ProductState|FutureMultipleTerms|
|» » ProductState|Promotional|
|» » ProductState|Regular|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» ProductSegment|AgricultureSector|
|» ProductSegment|AllSegmentsCorporate|
|» ProductSegment|Corporate|
|» ProductSegment|FixedGroup|
|» ProductSegment|FlexibleBusinessLoan|
|» ProductSegment|GovernmentScheme|
|» ProductSegment|NewCustomersOnly|
|» ProductSegment|SmallLoan|
|» ProductSegment|SpecialisedSector|
|» ProductSegment|SwitchersOnly|
|» ProductTypeName|FlexibleBusinessLoan|
|» ProductTypeName|SmallBusinessLoan|
|» ProductTypeName|SmeUnsecuredLoan|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/unsecured-sme-loans

> Code samples

```bash
curl https://example.com/unsecured-sme-loans \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /unsecured-sme-loans`

Gets header information on the current set of `Unsercured SME Lending` data

<h3 id="headunsecured-sme-loans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headunsecured-sme-loans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-data-api-ccc">CCC</h1>

Endpoint for getting Commercial Credit Card data

## get/commercial-credit-cards

> Code samples

```bash
curl https://example.com/commercial-credit-cards \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`GET /commercial-credit-cards`

Gets a list of all `Commerical Credit Card` objects.

<h3 id="getcommercial-credit-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "Benefits": {
        "Benefit": true,
        "BenefitGroup": [
          {
            "BenefitItem": {
              "BenefitDetail": [
                {
                  "BenefitDescription": "string",
                  "BenefitID": "string",
                  "BenefitName": "string",
                  "BenefitType": "string",
                  "BenefitValue": "string",
                  "Counter": 0,
                  "CriteriaType": [
                    "CashDeposit"
                  ],
                  "DefaultToAccounts": true,
                  "MaximumCriteria": "string",
                  "MinimumCriteria": "string",
                  "PromotionEndDate": "string",
                  "PromotionStartDate": "string"
                }
              ],
              "DateOfChange": "string",
              "LengthPromotionalInDays": 0,
              "StartPromotionOrFutureTerms": "string",
              "StopPromotionOrFutureTerms": "string"
            },
            "BenefitSubType": "FutureMultipleTerms"
          }
        ]
      },
      "Description": "string",
      "Details": {
        "CCSubType": "FutureMultipleTerms",
        "CommercialCreditCardItem": {
          "APRRate": "string",
          "AbilityToSetIndividualLimits": true,
          "AccessToOnlineDataReportingTool": true,
          "AllocationofRepayment": "string",
          "AnnualAccountFeeType": "string",
          "AnnualFeeAmount": "string",
          "BalanceTransferInterestRatePeriod": "Annual",
          "BalanceTransferRate": "string",
          "CardScheme": "Cashcard",
          "CashAdvanceRate": "string",
          "CashWithdrawalsAllowed": true,
          "CashbackPercent": "string",
          "ChequeFeePercent": "string",
          "ConvenienceCheque": true,
          "DateOfChange": "string",
          "DaysInterestFreeCreditIfPaymentFull": 0,
          "ExchangeRateAdjustment": "string",
          "FeesOnCheque": "string",
          "ForeignCashFee": "string",
          "ForeignCashFeeRate": "string",
          "ForeignPurchaseFee": "string",
          "ForeignPurchaseFeeRate": "string",
          "IssuingEmergencyCardsFees": "string",
          "LengthPromotionalInDays": 0,
          "MaximumNumberOfCardsPermitted": 0,
          "MinimumCreditLimit": "string",
          "MinimumLendingAmount": "string",
          "MinimumRepaymentAmount": "string",
          "MinimumRepaymentPercentage": "string",
          "NonSterlingCashFee": "string",
          "NonSterlingCashFeeRate": "string",
          "NonSterlingPurchaseFee": "string",
          "NonSterlingPurchaseFeeRate": "string",
          "NonSterlingTransactionFee": "string",
          "NonSterlingTransactionFeeRate": "string",
          "OverLimitFee": "string",
          "PaymentDaysAfterStatement": 0,
          "PaymentSchemeExchangeFee": "string",
          "PaymentSchemeExchangeFeeRate": "string",
          "PaymentSchemeExchangeRate": "string",
          "PurchaseRate": "string",
          "RepaymentFrequency": "Daily",
          "RepaymentNotes": "string",
          "StartPromotionOrFutureTerms": "string",
          "StatementAtAccountLevel": true,
          "StatementAtPersonalLevel": true,
          "StopPromotionOrFutureTerms": "string"
        }
      },
      "Eligibility": {
        "AgeRestricted": true,
        "AnnualBusinessTurnover": "string",
        "AnnualBusinessTurnoverCurrency": "string",
        "Description": "string",
        "EligibilityName": "string",
        "EligibilityNotes": "string",
        "EligibilityType": "AnyBusinessCustomer",
        "IncomeCondition": "string",
        "IncomeTurnoverRelated": true,
        "MarketingEligibility": [
          "ExistingCustomers"
        ],
        "MaxNumberOfAccounts": "string",
        "MaximumAge": 0,
        "MaximumAgeToOpen": 0,
        "MaximumOpeningAmount": true,
        "MinIncomeTurnoverPaidIntoAccount": 0,
        "MinimumAge": 0,
        "MinimumDeposit": true,
        "MinimumIncomeFrequency": "AcademicTerm",
        "MinimumIncomeTurnoverAmount": "string",
        "MinimumIncomeTurnoverCurrency": "string",
        "MinimumOperatingBalance": "string",
        "MinimumOperatingBalanceCurrency": "string",
        "MinimumOperatingBalanceExists": true,
        "OpeningDepositMaximumAmount": "string",
        "OpeningDepositMaximumCurrency": "string",
        "OpeningDepositMinimum": "string",
        "OpeningDepositMinimumCurrency": "string",
        "OtherFinancialHoldingRequired": true,
        "PreviousBankruptcy": true,
        "ResidencyRestricted": true,
        "ResidencyRestrictedRegion": "UK",
        "SingleJointIncome": "Joint",
        "ThirdSectorOrganisations": true
      },
      "KeyFeatures": "string",
      "Organisation": {
        "Brand": {
          "TrademarkID": "string",
          "TrademarkIPOCode": "UK"
        },
        "ParentOrganisation": {
          "BIC": "string",
          "LEI": "string",
          "OrganisationName": {
            "LegalName": "string"
          }
        }
      },
      "OtherKeyFeatures": "string",
      "PaymentHoliday": true,
      "PaymentHolidayDescription": "string",
      "ProductIdentifier": "string",
      "ProductName": "string",
      "ProductSegment": [
        "Cashback"
      ],
      "ProductType": "CommercialCreditCards",
      "ProductURL": [
        "http://example.com"
      ],
      "TsandCs": [
        "string"
      ]
    }
  ],
  "meta": {
    "Agreement": "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions",
    "LastUpdated": "1970-01-01T00:00:00Z",
    "License": "https://www.openbanking.org.uk/open-licence",
    "TermsOfUse": "https://www.openbanking.org.uk/terms",
    "TotalResults": 0
  }
}
```

> 400 Response

```json
{
  "description": "You have sent a request which could not be understood.",
  "status": "400",
  "title": "Bad request"
}
```

> 408 Response

```json
{
  "description": "Your client has failed to submit a request, and a timeout has occurred.",
  "status": "408",
  "title": "Client timeout"
}
```

> 429 Response

```json
{
  "description": "You have requested this resource too often. Slow down.",
  "status": "429",
  "title": "Too many requests"
}
```

> 500 Response

```json
{
  "description": "An error occurred on the server. No further information is available.",
  "status": "500",
  "title": "Internal server error"
}
```

> 503 Response

```json
{
  "description": "The service is temporarily unavailable.",
  "status": "503",
  "title": "Service temporarily unavailable"
}
```

> default Response

```json
{
  "description": "string",
  "status": "string",
  "title": "string"
}
```

<h3 id="getcommercial-credit-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with a list of `Commercial Credit Card` data|Inline|
|400|Bad Request|You have sent a request which could not be understood.|Inline|
|408|Request Timeout|Your client has failed to submit a request, and a timeout has occurred.|Inline|
|429|Too Many Requests|You have requested this resource too often. Slow down.|Inline|
|500|Internal Server Error|An error occurred on the server. No further information is available.|Inline|
|503|Service Unavailable|The service is temporarily unavailable.|Inline|
|default|Default|A standard error response.|Inline|

<h3 id="getcommercial-credit-cards-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|true|none|none|
|» Benefits|object|true|none|Benefit|
|» » Benefit|boolean|true|none|Describe  one or more benefits if they exist|
|» » BenefitGroup|[object]|false|none|none|
|» » » BenefitItem|object|true|none|Benefit Item|
|» » » » BenefitDetail|[object]|false|none|none|
|» » » » » BenefitDescription|string|false|none|A textual explanation of what the benefit is|
|» » » » » BenefitID|string|false|none|Unique benefit identifier per organisation|
|» » » » » BenefitName|string|false|none|The name of the benefit|
|» » » » » BenefitType|string|false|none|Type that represents the nature of the benefit|
|» » » » » BenefitValue|string|false|none|The value or values permissible for a specific benefit for an individual product representing a product characteristic|
|» » » » » Counter|integer|false|none|Counter for the criteria (e.g. number of DD)|
|» » » » » CriteriaType|[string]|false|none|none|
|» » » » » DefaultToAccounts|boolean|false|none|Is the benefit part of the default account|
|» » » » » MaximumCriteria|string|false|none|Maximum amount for the criteria|
|» » » » » MinimumCriteria|string|false|none|Minimum amount for the criteria|
|» » » » » PromotionEndDate|string|false|none|If the benefit is temporal the end date is when the benefit is no longer applicable|
|» » » » » PromotionStartDate|string|false|none|If the benefit is temporal the start date is when the benefit comes into effect|
|» » » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date in days|
|» » » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» » » BenefitSubType|string|false|none|Benefit Subtype Code|
|» Description|string|true|none|Product description|
|» Details|object|true|none|Commercial Credit Card Group |
|» » CCSubType|string|true|none|CCC Subtype Code|
|» » CommercialCreditCardItem|object|true|none|Commercial Credit Card Item |
|» » » APRRate|string|true|none|Annual Percentage Rate|
|» » » AbilityToSetIndividualLimits|boolean|false|none|The ability to set separate limts on different cards in one account|
|» » » AccessToOnlineDataReportingTool|boolean|true|none|Describes whether the account have access to an online tool for reprting on expenditure|
|» » » AllocationofRepayment|string|false|none|Allocation rules for repayment|
|» » » AnnualAccountFeeType|string|false|none|Details on annual account fee, such as non payable when there is a turnover above a certain sum|
|» » » AnnualFeeAmount|string|true|none|Standard fee on the card|
|» » » BalanceTransferInterestRatePeriod|string|false|none|The period used to define the specific interest rate for balance transfers|
|» » » BalanceTransferRate|string|false|none|Balance transfer rate|
|» » » CardScheme|string|true|none|Card Scheme Code|
|» » » CashAdvanceRate|string|true|none|Cash advance rate|
|» » » CashWithdrawalsAllowed|boolean|true|none|Describes whether cash withdrawals are allowed|
|» » » CashbackPercent|string|false|none|Percent of cashback on amount spend|
|» » » ChequeFeePercent|string|false|none|Percentage fee on convenience cheques|
|» » » ConvenienceCheque|boolean|true|none|Describes whether the card account allow convenience cheques|
|» » » DateOfChange|string|false|none|Date of the change if it refers to future terms|
|» » » DaysInterestFreeCreditIfPaymentFull|integer|true|none|Describes how many interest free days are given if the card is fully paid at each term|
|» » » ExchangeRateAdjustment|string|true|none|The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder|
|» » » FeesOnCheque|string|false|none|Percentage fee on a convenince cheques|
|» » » ForeignCashFee|string|false|none|Additional card fee applied to sterling cash withdrawal made abroad|
|» » » ForeignCashFeeRate|string|false|none|Additional card fee rate applied to sterling cash withdrawal made abroad|
|» » » ForeignPurchaseFee|string|false|none|Additional card fee applied to sterling retail transactions made abroad|
|» » » ForeignPurchaseFeeRate|string|false|none|Additional card fee rate applied to sterling retail transactions made abroad|
|» » » IssuingEmergencyCardsFees|string|true|none|Amount payable for issuing an emergency card|
|» » » LengthPromotionalInDays|integer|false|none|Describes the length if only a duration is given instead of a date|
|» » » MaximumNumberOfCardsPermitted|integer|false|none|The maximum numbers of cards per account|
|» » » MinimumCreditLimit|string|true|none|Minimum £500, maximum subject to status|
|» » » MinimumLendingAmount|string|false|none|The minimum lending available|
|» » » MinimumRepaymentAmount|string|false|none|Minimum repayment amount|
|» » » MinimumRepaymentPercentage|string|false|none|Minimum repayment as percentage|
|» » » NonSterlingCashFee|string|false|none|An additional fee applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling|
|» » » NonSterlingCashFeeRate|string|false|none|An additional fee rate applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling|
|» » » NonSterlingPurchaseFee|string|false|none|An additional fee applied to certain card retail transactions|
|» » » NonSterlingPurchaseFeeRate|string|false|none|An additional fee rate applied to certain card retail transactions|
|» » » NonSterlingTransactionFee|string|false|none|A fee applied to all non-Sterling card transactions|
|» » » NonSterlingTransactionFeeRate|string|false|none|A fee rate applied to all non-Sterling card transactions|
|» » » OverLimitFee|string|false|none|Fee applicable if the card was credited over its limit|
|» » » PaymentDaysAfterStatement|integer|true|none|How many days after statement is the payment expected|
|» » » PaymentSchemeExchangeFee|string|false|none|Any payment network fee applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder|
|» » » PaymentSchemeExchangeFeeRate|string|false|none|Any payment network fee rate applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder|
|» » » PaymentSchemeExchangeRate|string|false|none|The base exchange rate used in settlement of the transaction between issuer and scheme|
|» » » PurchaseRate|string|true|none|Purchase rate|
|» » » RepaymentFrequency|string|true|none|Repayment frequency|
|» » » RepaymentNotes|string|false|none|Additional notes|
|» » » StartPromotionOrFutureTerms|string|false|none|Describes the start date|
|» » » StatementAtAccountLevel|boolean|true|none|Describes whether there is a statement at account level|
|» » » StatementAtPersonalLevel|boolean|true|none|Describes whether there is a statement at card level|
|» » » StopPromotionOrFutureTerms|string|false|none|Describes the end date|
|» Eligibility|object|true|none|Eligibility|
|» » AgeRestricted|boolean|true|none|Indicates a customer's age is part of eligibility criteria|
|» » AnnualBusinessTurnover|string|false|none|Annual Business Turnover|
|» » AnnualBusinessTurnoverCurrency|string|false|none|Annual Business Turnover Currency|
|» » Description|string|true|none|One paragraph detailing the eligibility|
|» » EligibilityName|string|false|none|Free text description, denotes non standard eligibilities not included in the code list|
|» » EligibilityNotes|string|false|none|Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions|
|» » EligibilityType|string|false|none|Eligibility type|
|» » IncomeCondition|string|false|none|Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)|
|» » IncomeTurnoverRelated|boolean|true|none|Indicates if eligibility linked to income|
|» » MarketingEligibility|[string]|false|none|none|
|» » MaxNumberOfAccounts|string|false|none|Maximum number of the same prodcut the customer may hold|
|» » MaximumAge|integer|false|none|Maximum age, in years, allowed to hold the account|
|» » MaximumAgeToOpen|integer|false|none|Maximum age, in years, to open an account|
|» » MaximumOpeningAmount|boolean|false|none|A maximum amount to be deposited at opening|
|» » MinIncomeTurnoverPaidIntoAccount|integer|false|none|Minimum Income Amount required to paid into the account|
|» » MinimumAge|integer|false|none|Minimum age, in years, required to hold an account|
|» » MinimumDeposit|boolean|false|none|A minimum deposit required to hold this account|
|» » MinimumIncomeFrequency|string|false|none|The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts|
|» » MinimumIncomeTurnoverAmount|string|false|none|Minimum income / Turnover required to hold the product|
|» » MinimumIncomeTurnoverCurrency|string|false|none|Minimum income / Turnover Currency|
|» » MinimumOperatingBalance|string|false|none|Minimum Operating Balance|
|» » MinimumOperatingBalanceCurrency|string|false|none|Minimum Operating Balance currency|
|» » MinimumOperatingBalanceExists|boolean|false|none|Is there a Minimum Operating Balance?|
|» » OpeningDepositMaximumAmount|string|false|none|Maximum Amount to be depositing at opening|
|» » OpeningDepositMaximumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OpeningDepositMinimum|string|false|none|Minimum Amount to be held on account|
|» » OpeningDepositMinimumCurrency|string|false|none|The currency of the Minimum Amount to be depositing at opening|
|» » OtherFinancialHoldingRequired|boolean|true|none|Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature|
|» » PreviousBankruptcy|boolean|true|none|Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280|
|» » ResidencyRestricted|boolean|true|none|Indicates a customer's residency forms part of the eligibility criteria|
|» » ResidencyRestrictedRegion|string|false|none|Indicates a customer must be current resident of a geographic area/country|
|» » SingleJointIncome|string|false|none|Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this|
|» » ThirdSectorOrganisations|boolean|true|none|Is the product available to operate as a Clubs or Societies account?|
|» KeyFeatures|string|true|none|Product key features|
|» Organisation|object|true|none|Organisation|
|» » Brand|object|true|none|Brand|
|» » » TrademarkID|string|true|none|The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted|
|» » » TrademarkIPOCode|string|true|none|The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)|
|» » ParentOrganisation|object|true|none|Parent organisation|
|» » » BIC|string|false|none|The BIC from the organisation|
|» » » LEI|string|false|none|The LEI ID of the organisation|
|» » » OrganisationName|object|true|none|Organisation Name|
|» » » » LegalName|string|true|none|Legal Name of the organisation|
|» OtherKeyFeatures|string|false|none|Additional Features of the card|
|» PaymentHoliday|boolean|true|none|Indicates whether a payment holiday is possible|
|» PaymentHolidayDescription|string|false|none|Detailed description on the payment holiday if available|
|» ProductIdentifier|string|true|none|Identifier within the parent organisation for the product. Must be unique in the organisation|
|» ProductName|string|true|none|Name of the Commercial Credit Card|
|» ProductSegment|[string]|false|none|Marketing or industry segment that the product is designed for|
|» ProductType|string|true|none|Descriptive code for the product category|
|» ProductURL|[string(uri)]|true|none|URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL|
|» TsandCs|[string]|true|none|URL provided by the parent organisation which redirects to the current T&Cs. Only applies on live products|
|meta|object|true|none|none|
|» Agreement|string|true|none|none|
|» LastUpdated|string(date-time)|true|none|none|
|» License|string(uri)|true|none|Open Banking License|
|» TermsOfUse|string(uri)|true|none|Open Banking Terms of Use|
|» TotalResults|integer|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » » CriteriaType|CashDeposit|
|» » » » » CriteriaType|Deposit|
|» » » » » CriteriaType|DirectDebit|
|» » » » » CriteriaType|InitialDeposit|
|» » » » » CriteriaType|InternetLogon|
|» » » » » CriteriaType|MobileLogon|
|» » » » » CriteriaType|RegularDeposit|
|» » » BenefitSubType|FutureMultipleTerms|
|» » » BenefitSubType|Promotional|
|» » » BenefitSubType|Regular|
|» » CCSubType|FutureMultipleTerms|
|» » CCSubType|Promotional|
|» » CCSubType|Regular|
|» » » BalanceTransferInterestRatePeriod|Annual|
|» » » BalanceTransferInterestRatePeriod|Monthly|
|» » » CardScheme|Cashcard|
|» » » CardScheme|CreditMastercard|
|» » » CardScheme|CreditVisa|
|» » » RepaymentFrequency|Daily|
|» » » RepaymentFrequency|Flexible|
|» » » RepaymentFrequency|Fortnightly|
|» » » RepaymentFrequency|HalfYearly|
|» » » RepaymentFrequency|Monthly|
|» » » RepaymentFrequency|Quarterly|
|» » » RepaymentFrequency|Weekly|
|» » » RepaymentFrequency|Yearly|
|» » EligibilityType|AnyBusinessCustomer|
|» » EligibilityType|BusinessOnly|
|» » EligibilityType|CreditCard|
|» » EligibilityType|CreditScoring|
|» » EligibilityType|EmailAddress|
|» » EligibilityType|ExistingCustomers|
|» » EligibilityType|IdAndV|
|» » EligibilityType|Mortgage|
|» » EligibilityType|NoArrearsOnLoan|
|» » EligibilityType|NoCustomerInArrears|
|» » EligibilityType|NoOverOverdraftThirtyDays|
|» » EligibilityType|NoSoleUkAccountOrBankrupt|
|» » EligibilityType|NTB|
|» » EligibilityType|NTBBusiness|
|» » EligibilityType|SoleStudentAccount|
|» » EligibilityType|SoleUkAccount|
|» » EligibilityType|StudentsOnly|
|» » EligibilityType|TwoMonthsOfCourseStart|
|» » EligibilityType|UCASFulltimeTwoYears|
|» » MarketingEligibility|ExistingCustomers|
|» » MarketingEligibility|NewCustomersOnly|
|» » MarketingEligibility|SwitchersOnly|
|» » MarketingEligibility|StartUp|
|» » MinimumIncomeFrequency|AcademicTerm|
|» » MinimumIncomeFrequency|HalfYearly|
|» » MinimumIncomeFrequency|Monthly|
|» » MinimumIncomeFrequency|Quarterly|
|» » MinimumIncomeFrequency|Weekly|
|» » MinimumIncomeFrequency|Yearly|
|» » ResidencyRestrictedRegion|UK|
|» » ResidencyRestrictedRegion|EEA|
|» » ResidencyRestrictedRegion|EU|
|» » ResidencyRestrictedRegion|EFTA|
|» » ResidencyRestrictedRegion|GB - ENG|
|» » ResidencyRestrictedRegion|GB - NIR|
|» » ResidencyRestrictedRegion|GB - SCT|
|» » ResidencyRestrictedRegion|GB - WLS|
|» » ResidencyRestrictedRegion|IRL|
|» » SingleJointIncome|Joint|
|» » SingleJointIncome|SoleIncome|
|» » SingleJointIncome|SoleOrJoint|
|» » SingleJointIncome|Turnover|
|» » » TrademarkIPOCode|UK|
|» » » TrademarkIPOCode|EU|
|» ProductSegment|Cashback|
|» ProductSegment|Corporate|
|» ProductSegment|General|
|» ProductSegment|Reward|
|» ProductSegment|SME|
|» ProductType|CommercialCreditCards|
|» Agreement|Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions|
|» License|https://www.openbanking.org.uk/open-licence|
|» TermsOfUse|https://www.openbanking.org.uk/terms|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have sent a request which could not be understood.|
|status|400|
|title|Bad request|

Status Code **408**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|Your client has failed to submit a request, and a timeout has occurred.|
|status|408|
|title|Client timeout|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|You have requested this resource too often. Slow down.|
|status|429|
|title|Too many requests|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|An error occurred on the server. No further information is available.|
|status|500|
|title|Internal server error|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|status|string|true|none|none|
|title|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|description|The service is temporarily unavailable.|
|status|503|
|title|Service temporarily unavailable|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Further details describing the error|
|status|string|true|none|This corresponds to the HTTP status code|
|title|string|true|none|A short title of the type of error|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Describes how long this response can be cached|
|200|Etag|string||A unique ID identifying whether this resource has changed|
|200|Strict-Transport-Security|string||HTTPS strict transport security header|
|200|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|200|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|400|Strict-Transport-Security|string||HTTPS strict transport security header|
|400|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|400|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|408|Strict-Transport-Security|string||HTTPS strict transport security header|
|408|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|408|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|429|Strict-Transport-Security|string||HTTPS strict transport security header|
|429|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|429|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|500|Strict-Transport-Security|string||HTTPS strict transport security header|
|500|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|500|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|503|Strict-Transport-Security|string||HTTPS strict transport security header|
|503|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|503|X-Frame-Options|string||Prevent this request from being loaded in any iframes|
|default|Strict-Transport-Security|string||HTTPS strict transport security header|
|default|X-Content-Type-Options|string||Ensures each page has a content type and prevents browsers from doing MIME type sniffing|
|default|X-Frame-Options|string||Prevent this request from being loaded in any iframes|

<aside class="success">
This operation does not require authentication
</aside>

## head/commercial-credit-cards

> Code samples

```bash
curl https://example.com/commercial-credit-cards \
  -X HEAD \
  -H 'Accept: application/prs.openbanking.opendata.v1.3+json'
```

`HEAD /commercial-credit-cards`

Gets header information on the current set of `Commerical Credit Card` data

<h3 id="headcommercial-credit-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-Modified-Since|header|string|false|Used for conditional request, to retrieve data only if modified since a given date|
|If-None-Match|header|string|false|Used for conditional request, to retrieve data only if the given Etag value does not match|

> Example responses

> default Response

```json
{}
```

<h3 id="headcommercial-credit-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|No response|Inline|

<aside class="success">
This operation does not require authentication
</aside>
