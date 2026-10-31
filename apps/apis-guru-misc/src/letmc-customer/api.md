<h1 id="agentos-api-v2-customer-login-call-group">agentOS Api V2, Customer Login Call Group v2-customer</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://live-api.letmc.com">https://live-api.letmc.com</a>

# Authentication

* API Key (apiKey)
    - Parameter Name: **ApiKey**, in: header. ApiKey Authentication

- HTTP Authentication, scheme: basic Basic HTTP Authentication

<h1 id="agentos-api-v2-customer-login-call-group-branchcontroller">BranchController</h1>

## All branches defined for a company

<a id="opIdBranchController_GetBranches"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/branch/branches?offset=0&count=0' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/branch/branches`

<h3 id="all-branches-defined-for-a-company-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|offset|query|integer(int32)|true|The index of the first item to return|
|count|query|integer(int32)|true|The maximum number of items to return (up to 1000 per request)|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "Data": [
    {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "Address4": "string",
      "CompanyName": "string",
      "County": "string",
      "EMailAddress": "string",
      "ETag": "string",
      "FaxPhone": "string",
      "LandPhone": "string",
      "Name": "string",
      "OID": "string",
      "Postcode": "string",
      "WebAddress": "string"
    }
  ]
}
```

<h3 id="all-branches-defined-for-a-company-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BranchModelResults](#schemabranchmodelresults)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific branch given its unique Object ID (OID)

> Code samples

```bash
curl https://example.com/v2/customer/string/branch/branches/string \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/branch/branches/{branchID}`

<h3 id="get-a-specific-branch-given-its-unique-object-id-oid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|branchID|path|string|true|The unique ID of the Branch|

> Example responses

> 200 Response

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "Address4": "string",
  "CompanyName": "string",
  "County": "string",
  "EMailAddress": "string",
  "ETag": "string",
  "FaxPhone": "string",
  "LandPhone": "string",
  "Name": "string",
  "OID": "string",
  "Postcode": "string",
  "WebAddress": "string"
}
```

<h3 id="get-a-specific-branch-given-its-unique-object-id-oid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[BranchModel](#schemabranchmodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agentos-api-v2-customer-login-call-group-landlordcontroller">LandlordController</h1>

## Get the accounting details for the landlord.

<a id="opIdLandlordController_GetAccounts"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/accounting?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/accounting`

<h3 id="get-the-accounting-details-for-the-landlord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "AccountBalance": 0,
  "LastPayment": "1970-01-01T00:00:00Z",
  "PaymentHistory": [
    {
      "Amount": 0,
      "Date": "1970-01-01T00:00:00Z",
      "Description": "string",
      "TransactionNumber": 0
    }
  ],
  "Statements": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "InvoiceID": "string",
      "IsMaintenanceInvoice": true
    }
  ]
}
```

<h3 id="get-the-accounting-details-for-the-landlord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordAccountingModel](#schemalandlordaccountingmodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Download a Document

<a id="opIdLandlordController_GetDocument"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/document?token=string&ID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/document`

<h3 id="download-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|ID|query|string|true|The Document ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="download-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a Inventory PDF for a tenancy

<a id="opIdLandlordController_GetInvetoryReport"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/inventory?token=string&tenancyID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/inventory`

<h3 id="generate-a-inventory-pdf-for-a-tenancy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|tenancyID|query|string|true|The Tenancy ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="generate-a-inventory-pdf-for-a-tenancy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an invoice pdf belonging to the landlord.

<a id="opIdLandlordController_GetInvoice"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/invoice?token=string&invoiceID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/invoice`

<h3 id="get-an-invoice-pdf-belonging-to-the-landlord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|invoiceID|query|string|true|The invoice ID to load.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="get-an-invoice-pdf-belonging-to-the-landlord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve landlord's CRM ID

<a id="opIdLandlordController_GetLandlordCrmEntries"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/landlordcrmentries?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/landlordcrmentries`

<h3 id="retrieve-landlords-crm-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
[
  {
    "BranchID": "string",
    "GlobalReference": "string",
    "Name": "string",
    "OID": "string"
  }
]
```

<h3 id="retrieve-landlords-crm-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="retrieve-landlords-crm-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LandlordCrmEntry](#schemalandlordcrmentry)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Active maintenance jobs.

<a id="opIdLandlordController_GetMaintenanceJobs"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/maintenance?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/maintenance`

<h3 id="get-active-maintenance-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "Jobs": [
    {
      "AssignedTo": "string",
      "ClosedDate": "1970-01-01T00:00:00Z",
      "Description": "string",
      "MaintenanceNotes": [
        {
          "CreatedAt": "1970-01-01T00:00:00Z",
          "NoteContents": "string",
          "OID": "string"
        }
      ],
      "Property": "string",
      "Reported": "1970-01-01T00:00:00Z",
      "Status": "string"
    }
  ]
}
```

<h3 id="get-active-maintenance-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordMaintenanceModel](#schemalandlordmaintenancemodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a Profit and Loss Report

<a id="opIdLandlordController_GetProfitLossReport"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/profitloss?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/profitloss`

<h3 id="generate-a-profit-and-loss-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "DirectCosts": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  },
  "GrossProfitLoss": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  },
  "Income": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  }
}
```

<h3 id="generate-a-profit-and-loss-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordProfitLossModel](#schemalandlordprofitlossmodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Rent Arrears

<a id="opIdLandlordController_GetRentArrears"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/rentarrears?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/rentarrears`

<h3 id="rent-arrears-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "ChaseNotes": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "Note": "string",
      "NoteType": "string",
      "TenantID": "string"
    }
  ],
  "RentCollected": 0,
  "RentOutstanding": [
    {
      "DebtDays": 0,
      "OutstandingRent": 0,
      "Property": "string",
      "Tenant": "string",
      "TenantID": "string"
    }
  ],
  "TotalRentArrears": 0
}
```

<h3 id="rent-arrears-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordRentArrearsModel](#schemalandlordrentarrearsmodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a Self Assessment Tax Report

<a id="opIdLandlordController_GetSASReport"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/sas?token=string&yearEnd=0' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/sas`

<h3 id="generate-a-self-assessment-tax-report-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|yearEnd|query|integer(int32)|true|The Tax Year End.|

> Example responses

> 200 Response

```json
{}
```

<h3 id="generate-a-self-assessment-tax-report-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

## Get contact details of all linked landlords.

<a id="opIdLandlordController_GetSettings"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/settings?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/settings`

<h3 id="get-contact-details-of-all-linked-landlords-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "LinkedAccounts": [
    {
      "Address": "string",
      "Email": "string",
      "GlobalReference": "string",
      "ID": "string",
      "Mobile": "string",
      "Name": "string",
      "Phone": "string"
    }
  ]
}
```

<h3 id="get-contact-details-of-all-linked-landlords-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordSettingsModel](#schemalandlordsettingsmodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the summary details for the landlord.

<a id="opIdLandlordController_GetSummaryDetails"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/summary?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/summary`

<h3 id="get-the-summary-details-for-the-landlord-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
{
  "AccountBalance": 0,
  "LastPayment": "1970-01-01T00:00:00Z",
  "Tenancies": [
    {
      "Bond": 0,
      "BranchID": "string",
      "Description": "string",
      "GlobalReference": "string",
      "ID": "string",
      "MaintenanceJobs": 0,
      "ManagedRent": true,
      "PropertyAddress": "string",
      "Rent": "string",
      "RentArrears": 0,
      "RentCollected": 0,
      "TenancyProperty": "string",
      "TenancyState": "string"
    }
  ],
  "TotalRentArrears": 0
}
```

<h3 id="get-the-summary-details-for-the-landlord-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordSummaryModel](#schemalandlordsummarymodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Get tenancy details.

<a id="opIdLandlordController_GetTenancy"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/tenancy?token=string&tenancyID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/tenancy`

<h3 id="get-tenancy-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|tenancyID|query|string|true|The Tenancy ID|

> Example responses

> 200 Response

```json
{
  "ActualEndDate": "1970-01-01T00:00:00Z",
  "Beds": 0,
  "Bond": 0,
  "BranchID": "string",
  "Certificates": [
    {
      "Due": "1970-01-01T00:00:00Z",
      "Files": [
        {
          "FileName": "string",
          "FileSize": 0,
          "ID": "string",
          "MIMEType": "string",
          "Note": "string"
        }
      ],
      "Status": "string",
      "Type": "string"
    }
  ],
  "Documents": [
    {
      "FileName": "string",
      "FileSize": 0,
      "ID": "string",
      "MIMEType": "string",
      "Note": "string"
    }
  ],
  "FixedDate": "1970-01-01T00:00:00Z",
  "GlobalReference": "string",
  "ID": "string",
  "Inspections": [
    {
      "InspectionDate": "1970-01-01T00:00:00Z",
      "Notes": "string"
    }
  ],
  "ManagedRent": true,
  "Preferences": [
    {
      "Name": "string",
      "Notes": "string",
      "Type": "string"
    }
  ],
  "PreviousRentAmount": 0,
  "PropertyAddress": "string",
  "Rent": "string",
  "RentAmount": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "TenancyProperty": "string",
  "TenancyState": "string",
  "Tenants": [
    "string"
  ]
}
```

<h3 id="get-tenancy-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordTenancyModel](#schemalandlordtenancymodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Post tenancy maintenance preferences:-

<a id="opIdLandlordController_CreateMaintenancePreference"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/tenancy/maintenance/preference?token=string&tenancyID=string&name=string&notes=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/customer/{shortName}/landlord/tenancy/maintenance/preference`

<h3 id="post-tenancy-maintenance-preferences--parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|tenancyID|query|string|true|The Tenancy ID|
|name|query|string|true|Name of the maintenance preference to add|
|notes|query|string|true|Notes of the maintenance preference to add|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="post-tenancy-maintenance-preferences--responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Generate a Tenancy Agreement Copy (PDF)

<a id="opIdLandlordController_GetTenancyAgreementReport"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/landlord/tenancyagreement?token=string&tenancyID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/landlord/tenancyagreement`

<h3 id="generate-a-tenancy-agreement-copy-pdf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|tenancyID|query|string|true|The Tenancy ID|

> Example responses

> 200 Response

```json
{}
```

<h3 id="generate-a-tenancy-agreement-copy-pdf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agentos-api-v2-customer-login-call-group-photocontroller">PhotoController</h1>

## Downloads the photo of a property given the photo ID.

<a id="opIdPhotoController_GetPhotoDownload"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/photo/download?token=string&photoID=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/photo/download`

<h3 id="downloads-the-photo-of-a-property-given-the-photo-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|photoID|query|string|true|The unique ID of the photo on the property|
|width|query|integer(int32)|false|An optional parameter specifying the image width|
|height|query|integer(int32)|false|An optional parameter specifying the image height|

> Example responses

> 200 Response

```json
{}
```

<h3 id="downloads-the-photo-of-a-property-given-the-photo-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[Object](#schemaobject)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agentos-api-v2-customer-login-call-group-propertycontroller">PropertyController</h1>

## A collection showing all the photos linked to a specific block, property or room

<a id="opIdPropertyController_GetPropertiesPhotos"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/property/string/photos?token=string&offset=0&count=0' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/property/{propertyID}/photos`

<h3 id="a-collection-showing-all-the-photos-linked-to-a-specific-block-property-or-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|propertyID|path|string|true|The unique ID of the Property|
|offset|query|integer(int32)|true|The index of the first item to return|
|count|query|integer(int32)|true|The maximum number of items to return (up to 1000 per request)|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "Data": [
    {
      "ETag": "string",
      "FileName": "string",
      "OID": "string",
      "PhotoType": "Photo"
    }
  ]
}
```

<h3 id="a-collection-showing-all-the-photos-linked-to-a-specific-block-property-or-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[LandlordPhotoModelResults](#schemalandlordphotomodelresults)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="agentos-api-v2-customer-login-call-group-sessioncontroller">SessionController</h1>

## Gets information about the currently logged on customer.

<a id="opIdSessionController_GetSessionInfo"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session?token=string' \
  -H 'Accept: application/json'
```

`GET /v2/customer/{shortName}/session`

<h3 id="gets-information-about-the-currently-logged-on-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="gets-information-about-the-currently-logged-on-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Login as a customer given their username and password.

<a id="opIdSessionController_Login"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session?username=string&password=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /v2/customer/{shortName}/session`

<h3 id="login-as-a-customer-given-their-username-and-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|username|query|string|true|The user's username.|
|password|query|string|true|The user's password.|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="login-as-a-customer-given-their-username-and-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Logout a customer previously logged in via the Login endpoint.

<a id="opIdSessionController_Logout"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session?token=string' \
  -X DELETE
```

`DELETE /v2/customer/{shortName}/session`

<h3 id="logout-a-customer-previously-logged-in-via-the-login-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|

<h3 id="logout-a-customer-previously-logged-in-via-the-login-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send a request to the in-tray to create a landlord login.

<a id="opIdSessionController_CreateLandlordLogin"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session/createlandlordlogin?email=string&title=string&forename=string&surname=string&propertyAddress=string&contactDetails=string' \
  -X POST
```

`POST /v2/customer/{shortName}/session/createlandlordlogin`

<h3 id="send-a-request-to-the-in-tray-to-create-a-landlord-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|email|query|string|true|The email address of the landlord|
|title|query|string|true|The title of the landlord|
|forename|query|string|true|The forename of the landlord|
|surname|query|string|true|The surname of the landlord|
|propertyAddress|query|string|true|Address of the property linked to the landlord|
|contactDetails|query|string|true|Contact details of the landlord|
|branchID|query|string|false|(Optional) The branch ID linked to the login. This will determine which in tray the request display in|

<h3 id="send-a-request-to-the-in-tray-to-create-a-landlord-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change the password of a customer given their existing and new password.

<a id="opIdSessionController_ChangePassword"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session/password?token=string&oldPassword=string&newPassword=string' \
  -X PUT
```

`PUT /v2/customer/{shortName}/session/password`

<h3 id="change-the-password-of-a-customer-given-their-existing-and-new-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|token|query|string|true|The login token returned from the /session POST call|
|oldPassword|query|string|true|The customer's existing password.|
|newPassword|query|string|true|The customer's new password.|

<h3 id="change-the-password-of-a-customer-given-their-existing-and-new-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reset the customer's password. An email will be sent out to reset.

<a id="opIdSessionController_ResetPassword"></a>

> Code samples

```bash
curl 'https://example.com/v2/customer/string/session/resetpassword?email=string' \
  -X POST
```

`POST /v2/customer/{shortName}/session/resetpassword`

<h3 id="reset-the-customers-password-an-email-will-be-sent-out-to-reset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|shortName|path|string|true|The unique client short-name|
|email|query|string|true|The login Email Address.|

<h3 id="reset-the-customers-password-an-email-will-be-sent-out-to-reset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BranchModel">BranchModel</h2>
<!-- backwards compatibility -->
<a id="schemabranchmodel"></a>
<a id="schema_BranchModel"></a>
<a id="tocSbranchmodel"></a>
<a id="tocsbranchmodel"></a>

```json
{
  "Address1": "string",
  "Address2": "string",
  "Address3": "string",
  "Address4": "string",
  "CompanyName": "string",
  "County": "string",
  "EMailAddress": "string",
  "ETag": "string",
  "FaxPhone": "string",
  "LandPhone": "string",
  "Name": "string",
  "OID": "string",
  "Postcode": "string",
  "WebAddress": "string"
}
```

Defines a single branch of a client.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address1|string|false|none|Branch address line 1.|
|Address2|string|false|none|Branch address line 2.|
|Address3|string|false|none|Branch address line 3.|
|Address4|string|false|none|Branch address line 4.|
|CompanyName|string|false|none|The relevant company name, if not the one specified on the branch then the one on company.|
|County|string|false|none|County|
|EMailAddress|string|false|none|Branch email address.|
|ETag|string|false|none|A unique identifier defining the object and change revision.|
|FaxPhone|string|false|none|Branch fax phone number.|
|LandPhone|string|false|none|Branch land phone number.|
|Name|string|false|none|The branch name.|
|OID|string|false|none|The unique Object ID (OID).|
|Postcode|string|false|none|Branch address postcode.|
|WebAddress|string|false|none|Branch web address.|

<h2 id="tocS_BranchModelResults">BranchModelResults</h2>
<!-- backwards compatibility -->
<a id="schemabranchmodelresults"></a>
<a id="schema_BranchModelResults"></a>
<a id="tocSbranchmodelresults"></a>
<a id="tocsbranchmodelresults"></a>

```json
{
  "Count": 0,
  "Data": [
    {
      "Address1": "string",
      "Address2": "string",
      "Address3": "string",
      "Address4": "string",
      "CompanyName": "string",
      "County": "string",
      "EMailAddress": "string",
      "ETag": "string",
      "FaxPhone": "string",
      "LandPhone": "string",
      "Name": "string",
      "OID": "string",
      "Postcode": "string",
      "WebAddress": "string"
    }
  ]
}
```

Holds results from a paged query returning BranchModel values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|none|The total number of results available for all pages|
|Data|[[BranchModel](#schemabranchmodel)]|false|none|The resulting data returned from the paged query range|

<h2 id="tocS_KeyValuePair_String_String_">KeyValuePair_String_String_</h2>
<!-- backwards compatibility -->
<a id="schemakeyvaluepair_string_string_"></a>
<a id="schema_KeyValuePair_String_String_"></a>
<a id="tocSkeyvaluepair_string_string_"></a>
<a id="tocskeyvaluepair_string_string_"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_LandlordAccountingEntryModel">LandlordAccountingEntryModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordaccountingentrymodel"></a>
<a id="schema_LandlordAccountingEntryModel"></a>
<a id="tocSlandlordaccountingentrymodel"></a>
<a id="tocslandlordaccountingentrymodel"></a>

```json
{
  "Amount": 0,
  "Date": "1970-01-01T00:00:00Z",
  "Description": "string",
  "TransactionNumber": 0
}
```

Landlord Accounting - Finance Entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|Amount|
|Date|string(date-time)|false|none|Payment Date|
|Description|string|false|none|Description.|
|TransactionNumber|integer(int32)|false|none|Transaction Number|

<h2 id="tocS_LandlordAccountingInvoiceModel">LandlordAccountingInvoiceModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordaccountinginvoicemodel"></a>
<a id="schema_LandlordAccountingInvoiceModel"></a>
<a id="tocSlandlordaccountinginvoicemodel"></a>
<a id="tocslandlordaccountinginvoicemodel"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "InvoiceID": "string",
  "IsMaintenanceInvoice": true
}
```

Invoices

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|none|Payment Date|
|InvoiceID|string|false|none|Transaction Number|
|IsMaintenanceInvoice|boolean|false|none|Does this invoice contain contractor payments?|

<h2 id="tocS_LandlordAccountingModel">LandlordAccountingModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordaccountingmodel"></a>
<a id="schema_LandlordAccountingModel"></a>
<a id="tocSlandlordaccountingmodel"></a>
<a id="tocslandlordaccountingmodel"></a>

```json
{
  "AccountBalance": 0,
  "LastPayment": "1970-01-01T00:00:00Z",
  "PaymentHistory": [
    {
      "Amount": 0,
      "Date": "1970-01-01T00:00:00Z",
      "Description": "string",
      "TransactionNumber": 0
    }
  ],
  "Statements": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "InvoiceID": "string",
      "IsMaintenanceInvoice": true
    }
  ]
}
```

Landlord Accounting

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountBalance|number(double)|false|none|Account Balance|
|LastPayment|string(date-time)|false|none|Last Payment Made|
|PaymentHistory|[[LandlordAccountingEntryModel](#schemalandlordaccountingentrymodel)]|false|none|Payment History|
|Statements|[[LandlordAccountingInvoiceModel](#schemalandlordaccountinginvoicemodel)]|false|none|Statements|

<h2 id="tocS_LandlordChaseNoteModel">LandlordChaseNoteModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordchasenotemodel"></a>
<a id="schema_LandlordChaseNoteModel"></a>
<a id="tocSlandlordchasenotemodel"></a>
<a id="tocslandlordchasenotemodel"></a>

```json
{
  "Date": "1970-01-01T00:00:00Z",
  "Note": "string",
  "NoteType": "string",
  "TenantID": "string"
}
```

Landlord Arrears Chase Note.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Date|string(date-time)|false|none|Created Date|
|Note|string|false|none|Note.|
|NoteType|string|false|none|Note Type|
|TenantID|string|false|none|Tenant|

<h2 id="tocS_LandlordCrmEntry">LandlordCrmEntry</h2>
<!-- backwards compatibility -->
<a id="schemalandlordcrmentry"></a>
<a id="schema_LandlordCrmEntry"></a>
<a id="tocSlandlordcrmentry"></a>
<a id="tocslandlordcrmentry"></a>

```json
{
  "BranchID": "string",
  "GlobalReference": "string",
  "Name": "string",
  "OID": "string"
}
```

Class for Landlord CRM Entries

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|BranchID|string|false|none|none|
|GlobalReference|string|false|none|none|
|Name|string|false|none|none|
|OID|string|false|none|none|

<h2 id="tocS_LandlordDetailsModel">LandlordDetailsModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlorddetailsmodel"></a>
<a id="schema_LandlordDetailsModel"></a>
<a id="tocSlandlorddetailsmodel"></a>
<a id="tocslandlorddetailsmodel"></a>

```json
{
  "Address": "string",
  "Email": "string",
  "GlobalReference": "string",
  "ID": "string",
  "Mobile": "string",
  "Name": "string",
  "Phone": "string"
}
```

Landlord Details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string|false|none|Address|
|Email|string|false|none|Email|
|GlobalReference|string|false|none|User Friendly ID|
|ID|string|false|none|ID|
|Mobile|string|false|none|Mobile|
|Name|string|false|none|Name|
|Phone|string|false|none|Phone|

<h2 id="tocS_LandlordLettingsInspectionModel">LandlordLettingsInspectionModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordlettingsinspectionmodel"></a>
<a id="schema_LandlordLettingsInspectionModel"></a>
<a id="tocSlandlordlettingsinspectionmodel"></a>
<a id="tocslandlordlettingsinspectionmodel"></a>

```json
{
  "InspectionDate": "1970-01-01T00:00:00Z",
  "Notes": "string"
}
```

Lettings Inspection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|InspectionDate|string(date-time)|false|none|InspectionDate|
|Notes|string|false|none|Notes|

<h2 id="tocS_LandlordMaintenanceCertificateModel">LandlordMaintenanceCertificateModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordmaintenancecertificatemodel"></a>
<a id="schema_LandlordMaintenanceCertificateModel"></a>
<a id="tocSlandlordmaintenancecertificatemodel"></a>
<a id="tocslandlordmaintenancecertificatemodel"></a>

```json
{
  "Due": "1970-01-01T00:00:00Z",
  "Files": [
    {
      "FileName": "string",
      "FileSize": 0,
      "ID": "string",
      "MIMEType": "string",
      "Note": "string"
    }
  ],
  "Status": "string",
  "Type": "string"
}
```

Maintenance Certificate

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Due|string(date-time)|false|none|Due|
|Files|[[LettingsLandlordDocument](#schemalettingslandlorddocument)]|false|none|Files|
|Status|string|false|none|Status.|
|Type|string|false|none|Type|

<h2 id="tocS_LandlordMaintenanceJobModel">LandlordMaintenanceJobModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordmaintenancejobmodel"></a>
<a id="schema_LandlordMaintenanceJobModel"></a>
<a id="tocSlandlordmaintenancejobmodel"></a>
<a id="tocslandlordmaintenancejobmodel"></a>

```json
{
  "AssignedTo": "string",
  "ClosedDate": "1970-01-01T00:00:00Z",
  "Description": "string",
  "MaintenanceNotes": [
    {
      "CreatedAt": "1970-01-01T00:00:00Z",
      "NoteContents": "string",
      "OID": "string"
    }
  ],
  "Property": "string",
  "Reported": "1970-01-01T00:00:00Z",
  "Status": "string"
}
```

Maintenance Job

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AssignedTo|string|false|none|AssignedTo|
|ClosedDate|string(date-time)|false|read-only|Job Closed Date:-|
|Description|string|false|none|Description|
|MaintenanceNotes|[[LandlordMaintenanceJobNoteModel](#schemalandlordmaintenancejobnotemodel)]|false|none|none|
|Property|string|false|none|Property|
|Reported|string(date-time)|false|none|Reported|
|Status|string|false|none|Status|

<h2 id="tocS_LandlordMaintenanceJobNoteModel">LandlordMaintenanceJobNoteModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordmaintenancejobnotemodel"></a>
<a id="schema_LandlordMaintenanceJobNoteModel"></a>
<a id="tocSlandlordmaintenancejobnotemodel"></a>
<a id="tocslandlordmaintenancejobnotemodel"></a>

```json
{
  "CreatedAt": "1970-01-01T00:00:00Z",
  "NoteContents": "string",
  "OID": "string"
}
```

Maintenance Job Note Helper Model:-

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedAt|string(date-time)|false|none|Created At:-|
|NoteContents|string|false|none|Note Contents:-|
|OID|string|false|none|Job ID:-|

<h2 id="tocS_LandlordMaintenanceModel">LandlordMaintenanceModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordmaintenancemodel"></a>
<a id="schema_LandlordMaintenanceModel"></a>
<a id="tocSlandlordmaintenancemodel"></a>
<a id="tocslandlordmaintenancemodel"></a>

```json
{
  "Jobs": [
    {
      "AssignedTo": "string",
      "ClosedDate": "1970-01-01T00:00:00Z",
      "Description": "string",
      "MaintenanceNotes": [
        {
          "CreatedAt": "1970-01-01T00:00:00Z",
          "NoteContents": "string",
          "OID": "string"
        }
      ],
      "Property": "string",
      "Reported": "1970-01-01T00:00:00Z",
      "Status": "string"
    }
  ]
}
```

Landlord Maintenance

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Jobs|[[LandlordMaintenanceJobModel](#schemalandlordmaintenancejobmodel)]|false|none|Maintenance Jobs.|

<h2 id="tocS_LandlordMaintenancePreferenceModel">LandlordMaintenancePreferenceModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordmaintenancepreferencemodel"></a>
<a id="schema_LandlordMaintenancePreferenceModel"></a>
<a id="tocSlandlordmaintenancepreferencemodel"></a>
<a id="tocslandlordmaintenancepreferencemodel"></a>

```json
{
  "Name": "string",
  "Notes": "string",
  "Type": "string"
}
```

Maintenance Preference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name|
|Notes|string|false|none|Notes.|
|Type|string|false|none|Type|

<h2 id="tocS_LandlordPhotoModel">LandlordPhotoModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordphotomodel"></a>
<a id="schema_LandlordPhotoModel"></a>
<a id="tocSlandlordphotomodel"></a>
<a id="tocslandlordphotomodel"></a>

```json
{
  "ETag": "string",
  "FileName": "string",
  "OID": "string",
  "PhotoType": "Photo"
}
```

Stores a photo related to a property structure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ETag|string|false|none|A unique identifier defining the object and change revision.|
|FileName|string|false|none|The file name.|
|OID|string|false|none|The unique Object ID (OID).|
|PhotoType|string|false|none|The photo type.|

#### Enumerated Values

|Property|Value|
|---|---|
|PhotoType|Photo|
|PhotoType|Map|
|PhotoType|FloorPlan|
|PhotoType|SiteMap|
|PhotoType|AerialPhoto|

<h2 id="tocS_LandlordPhotoModelResults">LandlordPhotoModelResults</h2>
<!-- backwards compatibility -->
<a id="schemalandlordphotomodelresults"></a>
<a id="schema_LandlordPhotoModelResults"></a>
<a id="tocSlandlordphotomodelresults"></a>
<a id="tocslandlordphotomodelresults"></a>

```json
{
  "Count": 0,
  "Data": [
    {
      "ETag": "string",
      "FileName": "string",
      "OID": "string",
      "PhotoType": "Photo"
    }
  ]
}
```

Holds results from a paged query returning LandlordPhotoModel values

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|none|The total number of results available for all pages|
|Data|[[LandlordPhotoModel](#schemalandlordphotomodel)]|false|none|The resulting data returned from the paged query range|

<h2 id="tocS_LandlordProfitLossModel">LandlordProfitLossModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordprofitlossmodel"></a>
<a id="schema_LandlordProfitLossModel"></a>
<a id="tocSlandlordprofitlossmodel"></a>
<a id="tocslandlordprofitlossmodel"></a>

```json
{
  "DirectCosts": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  },
  "GrossProfitLoss": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  },
  "Income": {
    "Rows": [
      {
        "MonthTotals": [
          {
            "key": "string",
            "value": "string"
          }
        ],
        "NominalCode": "string",
        "Title": "string",
        "Total": "string"
      }
    ]
  }
}
```

Class to represent proffit loss report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DirectCosts|[LandlordProfitLossSectionModel](#schemalandlordprofitlosssectionmodel)|false|none|Class for a group of entries.|
|GrossProfitLoss|[LandlordProfitLossSectionModel](#schemalandlordprofitlosssectionmodel)|false|none|Class for a group of entries.|
|Income|[LandlordProfitLossSectionModel](#schemalandlordprofitlosssectionmodel)|false|none|Class for a group of entries.|

<h2 id="tocS_LandlordProfitLossRowModel">LandlordProfitLossRowModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordprofitlossrowmodel"></a>
<a id="schema_LandlordProfitLossRowModel"></a>
<a id="tocSlandlordprofitlossrowmodel"></a>
<a id="tocslandlordprofitlossrowmodel"></a>

```json
{
  "MonthTotals": [
    {
      "key": "string",
      "value": "string"
    }
  ],
  "NominalCode": "string",
  "Title": "string",
  "Total": "string"
}
```

Class for a group of entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MonthTotals|[[KeyValuePair_String_String_](#schemakeyvaluepair_string_string_)]|false|none|Month Totals|
|NominalCode|string|false|none|Nominal Code|
|Title|string|false|none|Title of the values.|
|Total|string|false|none|Total for all months.|

<h2 id="tocS_LandlordProfitLossSectionModel">LandlordProfitLossSectionModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordprofitlosssectionmodel"></a>
<a id="schema_LandlordProfitLossSectionModel"></a>
<a id="tocSlandlordprofitlosssectionmodel"></a>
<a id="tocslandlordprofitlosssectionmodel"></a>

```json
{
  "Rows": [
    {
      "MonthTotals": [
        {
          "key": "string",
          "value": "string"
        }
      ],
      "NominalCode": "string",
      "Title": "string",
      "Total": "string"
    }
  ]
}
```

Class for a group of entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Rows|[[LandlordProfitLossRowModel](#schemalandlordprofitlossrowmodel)]|false|none|Rows.|

<h2 id="tocS_LandlordRentArrearsModel">LandlordRentArrearsModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordrentarrearsmodel"></a>
<a id="schema_LandlordRentArrearsModel"></a>
<a id="tocSlandlordrentarrearsmodel"></a>
<a id="tocslandlordrentarrearsmodel"></a>

```json
{
  "ChaseNotes": [
    {
      "Date": "1970-01-01T00:00:00Z",
      "Note": "string",
      "NoteType": "string",
      "TenantID": "string"
    }
  ],
  "RentCollected": 0,
  "RentOutstanding": [
    {
      "DebtDays": 0,
      "OutstandingRent": 0,
      "Property": "string",
      "Tenant": "string",
      "TenantID": "string"
    }
  ],
  "TotalRentArrears": 0
}
```

Landlord Rent Arrears.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ChaseNotes|[[LandlordChaseNoteModel](#schemalandlordchasenotemodel)]|false|none|Chase Notes|
|RentCollected|number(double)|false|none|Rent Collected|
|RentOutstanding|[[LandlordRentOustandingItem](#schemalandlordrentoustandingitem)]|false|none|Outstanding Rent|
|TotalRentArrears|number(double)|false|none|Rent Arrears|

<h2 id="tocS_LandlordRentOustandingItem">LandlordRentOustandingItem</h2>
<!-- backwards compatibility -->
<a id="schemalandlordrentoustandingitem"></a>
<a id="schema_LandlordRentOustandingItem"></a>
<a id="tocSlandlordrentoustandingitem"></a>
<a id="tocslandlordrentoustandingitem"></a>

```json
{
  "DebtDays": 0,
  "OutstandingRent": 0,
  "Property": "string",
  "Tenant": "string",
  "TenantID": "string"
}
```

Outstanding Rent

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DebtDays|integer(int32)|false|none|Days since the tenant went into arrears|
|OutstandingRent|number(double)|false|none|Outstanding Rent|
|Property|string|false|none|Property|
|Tenant|string|false|none|Tenant|
|TenantID|string|false|none|TenantID|

<h2 id="tocS_LandlordSettingsModel">LandlordSettingsModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordsettingsmodel"></a>
<a id="schema_LandlordSettingsModel"></a>
<a id="tocSlandlordsettingsmodel"></a>
<a id="tocslandlordsettingsmodel"></a>

```json
{
  "LinkedAccounts": [
    {
      "Address": "string",
      "Email": "string",
      "GlobalReference": "string",
      "ID": "string",
      "Mobile": "string",
      "Name": "string",
      "Phone": "string"
    }
  ]
}
```

Landlord Settings

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|LinkedAccounts|[[LandlordDetailsModel](#schemalandlorddetailsmodel)]|false|none|Linked Accounts|

<h2 id="tocS_LandlordSummaryModel">LandlordSummaryModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordsummarymodel"></a>
<a id="schema_LandlordSummaryModel"></a>
<a id="tocSlandlordsummarymodel"></a>
<a id="tocslandlordsummarymodel"></a>

```json
{
  "AccountBalance": 0,
  "LastPayment": "1970-01-01T00:00:00Z",
  "Tenancies": [
    {
      "Bond": 0,
      "BranchID": "string",
      "Description": "string",
      "GlobalReference": "string",
      "ID": "string",
      "MaintenanceJobs": 0,
      "ManagedRent": true,
      "PropertyAddress": "string",
      "Rent": "string",
      "RentArrears": 0,
      "RentCollected": 0,
      "TenancyProperty": "string",
      "TenancyState": "string"
    }
  ],
  "TotalRentArrears": 0
}
```

Landlord Summary - Landing Page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountBalance|number(double)|false|none|Account Balance|
|LastPayment|string(date-time)|false|none|Last Payment Made|
|Tenancies|[[LandlordSummaryTenancyModel](#schemalandlordsummarytenancymodel)]|false|none|Tenancies|
|TotalRentArrears|number(double)|false|none|Rent Arrears|

<h2 id="tocS_LandlordSummaryTenancyModel">LandlordSummaryTenancyModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordsummarytenancymodel"></a>
<a id="schema_LandlordSummaryTenancyModel"></a>
<a id="tocSlandlordsummarytenancymodel"></a>
<a id="tocslandlordsummarytenancymodel"></a>

```json
{
  "Bond": 0,
  "BranchID": "string",
  "Description": "string",
  "GlobalReference": "string",
  "ID": "string",
  "MaintenanceJobs": 0,
  "ManagedRent": true,
  "PropertyAddress": "string",
  "Rent": "string",
  "RentArrears": 0,
  "RentCollected": 0,
  "TenancyProperty": "string",
  "TenancyState": "string"
}
```

Landlord Summary - Landing Page.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Bond|number(double)|false|none|Bomd|
|BranchID|string|false|none|The Tenancy Branch ID|
|Description|string|false|none|Description.|
|GlobalReference|string|false|none|User Friendly ID|
|ID|string|false|none|ID|
|MaintenanceJobs|integer(int32)|false|none|Maintenance Jobs.|
|ManagedRent|boolean|false|none|State of the tenancy|
|PropertyAddress|string|false|none|Display Property Address|
|Rent|string|false|none|Rent|
|RentArrears|number(double)|false|none|Rent Arrears|
|RentCollected|number(double)|false|none|Rent Arrears|
|TenancyProperty|string|false|none|Tenancy Property|
|TenancyState|string|false|none|State of the tenancy|

<h2 id="tocS_LandlordTenancyModel">LandlordTenancyModel</h2>
<!-- backwards compatibility -->
<a id="schemalandlordtenancymodel"></a>
<a id="schema_LandlordTenancyModel"></a>
<a id="tocSlandlordtenancymodel"></a>
<a id="tocslandlordtenancymodel"></a>

```json
{
  "ActualEndDate": "1970-01-01T00:00:00Z",
  "Beds": 0,
  "Bond": 0,
  "BranchID": "string",
  "Certificates": [
    {
      "Due": "1970-01-01T00:00:00Z",
      "Files": [
        {
          "FileName": "string",
          "FileSize": 0,
          "ID": "string",
          "MIMEType": "string",
          "Note": "string"
        }
      ],
      "Status": "string",
      "Type": "string"
    }
  ],
  "Documents": [
    {
      "FileName": "string",
      "FileSize": 0,
      "ID": "string",
      "MIMEType": "string",
      "Note": "string"
    }
  ],
  "FixedDate": "1970-01-01T00:00:00Z",
  "GlobalReference": "string",
  "ID": "string",
  "Inspections": [
    {
      "InspectionDate": "1970-01-01T00:00:00Z",
      "Notes": "string"
    }
  ],
  "ManagedRent": true,
  "Preferences": [
    {
      "Name": "string",
      "Notes": "string",
      "Type": "string"
    }
  ],
  "PreviousRentAmount": 0,
  "PropertyAddress": "string",
  "Rent": "string",
  "RentAmount": 0,
  "StartDate": "1970-01-01T00:00:00Z",
  "TenancyProperty": "string",
  "TenancyState": "string",
  "Tenants": [
    "string"
  ]
}
```

Landlord Tenancy Model.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActualEndDate|string(date-time)|false|none|Actual End Date|
|Beds|integer(int32)|false|none|Beds|
|Bond|number(double)|false|none|Bond|
|BranchID|string|false|none|The tenancy branch ID:-|
|Certificates|[[LandlordMaintenanceCertificateModel](#schemalandlordmaintenancecertificatemodel)]|false|none|Maintenance Certificates.|
|Documents|[[LettingsLandlordDocument](#schemalettingslandlorddocument)]|false|none|Tenancy documents:-|
|FixedDate|string(date-time)|false|none|Fixed Date|
|GlobalReference|string|false|none|User Friendly ID|
|ID|string|false|none|ID|
|Inspections|[[LandlordLettingsInspectionModel](#schemalandlordlettingsinspectionmodel)]|false|none|Inspections|
|ManagedRent|boolean|false|none|State of the tenancy|
|Preferences|[[LandlordMaintenancePreferenceModel](#schemalandlordmaintenancepreferencemodel)]|false|none|Maintenance Preferences.|
|PreviousRentAmount|number(double)|false|none|Previous Rent Amount|
|PropertyAddress|string|false|none|Display Property Address|
|Rent|string|false|none|Rent|
|RentAmount|number(double)|false|none|Rent Amount|
|StartDate|string(date-time)|false|none|Start Date|
|TenancyProperty|string|false|none|Tenancy Property|
|TenancyState|string|false|none|State of the tenancy|
|Tenants|[string]|false|none|Tenants|

<h2 id="tocS_LettingsLandlordDocument">LettingsLandlordDocument</h2>
<!-- backwards compatibility -->
<a id="schemalettingslandlorddocument"></a>
<a id="schema_LettingsLandlordDocument"></a>
<a id="tocSlettingslandlorddocument"></a>
<a id="tocslettingslandlorddocument"></a>

```json
{
  "FileName": "string",
  "FileSize": 0,
  "ID": "string",
  "MIMEType": "string",
  "Note": "string"
}
```

Document details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FileName|string|false|none|File Name|
|FileSize|integer(int32)|false|none|File Size Bytes|
|ID|string|false|none|ID|
|MIMEType|string|false|none|MIME Type|
|Note|string|false|none|Document Note|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{}
```
