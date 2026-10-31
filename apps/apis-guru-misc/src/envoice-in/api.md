<h1 id="api-v100">API v1.0.0 v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/80638214aa04722c9203)
<span style='margin-left: 0.5em;'>or</span>
<a href='https://documenter.getpostman.com/view/3559821/TVeqcn2L' class='openapi-button' _ngcontent-c6>View Postman docs</a>

# Quickstart

Visit [github](https://github.com/EmitKnowledge/Envoice) to view the quickstart tutorial.

<div class='postman-tutorial'>

# Tutorial for running the API in postman

Click on ""Run in Postman"" button
<br /><br />
![postman - tutorial - 1](/Assets/images/api/postman-tutorial/postman-tutorial-1.png)

 --- 

A new page will open.
Click the ""Postman for windows"" to run postman as a desktop app.
Make sure you have already [installed](https://www.getpostman.com/docs/postman/launching_postman/installation_and_updates) Postman.
<br /><br />
![postman - tutorial - 2](/Assets/images/api/postman-tutorial/postman-tutorial-2.png)

 --- 

In chrome an alert might show up to set a default app for opening postman links. Click on ""Open Postman"".
<br /><br />
![postman - tutorial - 3](/Assets/images/api/postman-tutorial/postman-tutorial-3.png)

 --- 

The OpenAPI specification will be imported in Postman as a new collection named ""Envoice api""
<br /><br />
![postman - tutorial - 4](/Assets/images/api/postman-tutorial/postman-tutorial-4.png)

 --- 

When testing be sure to check and modify the environment variables to suit your api key and secret. The domain is set to envoice's endpoint so you don't really need to change that.  
<sub>\*Eye button in top right corner </sub>
<br /><br /> 
![postman - tutorial - 5](/Assets/images/api/postman-tutorial/postman-tutorial-5.png)
<br /><br /> 
![postman - tutorial - 6](/Assets/images/api/postman-tutorial/postman-tutorial-6.png)

 --- 

You don't need to change the values of the header parameters, because they will be replaced automatically when you send a request with real values from the environment configured in the previous step.
<br /><br />
![postman - tutorial - 7](/Assets/images/api/postman-tutorial/postman-tutorial-7.png)

 --- 

Modify the example data to suit your needs and send a request.
<br /><br />
![postman - tutorial - 8](/Assets/images/api/postman-tutorial/postman-tutorial-8.png)
</div>

# Webhooks

Webhooks allow you to build or set up Envoice Apps which subscribe to invoice activities. 
When one of those events is triggered, we'll send a HTTP POST payload to the webhook's configured URL. 
Webhooks can be used to update an external invoice data storage.

In order to use webhooks visit [this link](/account/settings#api-tab) and add upto 10 webhook urls that will return status `200` in order to signal that the webhook is working.
All nonworking webhooks will be ignored after a certain period of time and several retry attempts.
If after several attempts the webhook starts to work, we will send you all activities, both past and present, in chronological order.

The payload of the webhook is in format:
```
{
    Signature: ""sha256 string"",
    Timestamp: ""YYYY-MM-DDTHH:mm:ss.FFFFFFFZ"",
    Activity: {
        Message: "string",
        Link: "share url",
        Type: int,        
        InvoiceNumber: "string",
        InvoiceId: int,        
        OrderNumber: "string",
        OrderId: int,
        Id: int,
        CreatedOn: "YYYY-MM-DDTHH:mm:ss.FFFFFFFZ"
    }
}
```

Base URLs:

* <a href="https://www.envoice.in">https://www.envoice.in</a>

# Authentication

* API Key (x-auth-key)
    - Parameter Name: **x-auth-key**, in: header. Your account API key. Can be retrieved from your [account settings](/account/settings#api-tab).

* API Key (x-auth-secret)
    - Parameter Name: **x-auth-secret**, in: header. Your account API secret. Can be retrieved from your [account settings](/account/settings#api-tab). Keep it hidden.

<h1 id="api-v100-client">Client</h1>

## Return all clients for the account

<a id="opIdClientApi_All"></a>

> Code samples

```bash
curl https://example.com/api/client/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/client/all`

<h3 id="return-all-clients-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  }
]
```

<h3 id="return-all-clients-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-clients-for-the-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClientDetailsApiModel](#schemaclientdetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check if the provided client can be deleted

<a id="opIdClientApi_CanDelete"></a>

> Code samples

```bash
curl 'https://example.com/api/client/candelete?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/client/candelete`

<h3 id="check-if-the-provided-client-can-be-deleted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
true
```

<h3 id="check-if-the-provided-client-can-be-deleted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing client

<a id="opIdClientApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/client/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/client/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ClientDeleteApiModel](#schemaclientdeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of client to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return client details. Activities and invoices included.

<a id="opIdClientApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/client/details?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/client/details`

<h3 id="return-client-details-activities-and-invoices-included-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "CreatedOn": "1970-01-01T00:00:00Z",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Id": 0,
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

<h3 id="return-client-details-activities-and-invoices-included-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ClientDetailsApiModel](#schemaclientdetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a client

<a id="opIdClientApi_New"></a>

> Code samples

```bash
curl https://example.com/api/client/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  }'
```

`POST /api/client/new`

> Body parameter

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

<h3 id="create-a-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ClientCreateApiModel](#schemaclientcreateapimodel)|true|none|
|» AdditionalEmails|body|[[AdditionalClientEmailApiModel](#schemaadditionalclientemailapimodel)]|false|Client additional emails contact for CC|
|» Address|body|string|false|Client business address|
|» ClientCountryId|body|integer(int32)|false|Indicates the country where the clients is from|
|» ClientCurrencyId|body|integer(int32)|false|Indicates the default system currency used by the user for the client|
|» CompanyRegistrationNumber|body|string|false|Client's Company Registration Number|
|» DefaultDueDateInDays|body|integer(int32)|false|Client custom payment terms|
|» Email|body|string|false|Client email|
|» Name|body|string|false|Name of the client|
|» PhoneNumber|body|string|false|Client phone numer|
|» UiLanguageId|body|integer(int32)|false|Hold a value of the language in which the invoice will be sent|
|» Vat|body|string|false|Client's VAT number|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-a-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing client

<a id="opIdClientApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/client/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  }'
```

`POST /api/client/update`

> Body parameter

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Id": 0,
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

<h3 id="update-an-existing-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ClientUpdateApiModel](#schemaclientupdateapimodel)|true|none|
|» AdditionalEmails|body|[[AdditionalClientEmailApiModel](#schemaadditionalclientemailapimodel)]|false|Client additional emails contact for CC|
|» Address|body|string|false|Client business address|
|» ClientCountryId|body|integer(int32)|false|Indicates the country where the clients is from|
|» ClientCurrencyId|body|integer(int32)|false|Indicates the default system currency used by the user for the client|
|» CompanyRegistrationNumber|body|string|false|Client's Company Registration Number|
|» DefaultDueDateInDays|body|integer(int32)|false|Client custom payment terms|
|» Email|body|string|false|Client email|
|» Id|body|integer(int32)|false|Entity id|
|» Name|body|string|false|Name of the client|
|» PhoneNumber|body|string|false|Client phone numer|
|» UiLanguageId|body|integer(int32)|false|Hold a value of the language in which the invoice will be sent|
|» Vat|body|string|false|Client's VAT number|

<h3 id="update-an-existing-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-estimation">Estimation</h1>

## Return all estimation for the account

<a id="opIdEstimationApi_All"></a>

> Code samples

```bash
curl https://example.com/api/estimation/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/estimation/all`

<h3 id="return-all-estimation-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "AdditionalEmails": [
          {
            "Email": "string"
          }
        ],
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "CreatedOn": "1970-01-01T00:00:00Z",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "Vat": "string"
      },
      "ClonedFromId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "DiscountAmount": 0,
      "ExpiresOn": "1970-01-01T00:00:00Z",
      "Id": 0,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "Number": "string",
      "PoNumber": "string",
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0
    }
  ],
  "TotalCount": 0
}
```

<h3 id="return-all-estimation-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_EstimationDetailsApiModel_](#schemalistresult_estimationdetailsapimodel_)|

<aside class="success">
This operation does not require authentication
</aside>

## Change estimation status

<a id="opIdEstimationApi_ChangeStatus"></a>

> Code samples

```bash
curl https://example.com/api/estimation/changestatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Status": "Draft"
  }'
```

`POST /api/estimation/changestatus`

> Body parameter

```json
{
  "Id": 0,
  "Status": "Draft"
}
```

<h3 id="change-estimation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[EstimationChangeStatusApiModel](#schemaestimationchangestatusapimodel)|true|none|
|» Id|body|integer(int32)|false|Estimation Id|
|» Status|body|string|false|New status of the estimation|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Accepted|
|» Status|Rejected|

> Example responses

> 200 Response

```json
true
```

<h3 id="change-estimation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Convert the estimation to an invoice

<a id="opIdEstimationApi_Convert"></a>

> Code samples

```bash
curl https://example.com/api/estimation/convert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '0'
```

`POST /api/estimation/convert`

> Body parameter

```json
0
```

<h3 id="convert-the-estimation-to-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|integer(int32)|true|none|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "Id": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="convert-the-estimation-to-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceFullDetailsApiModel](#schemainvoicefulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing estimation

<a id="opIdEstimationApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/estimation/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/estimation/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-estimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[EstimationDeleteApiModel](#schemaestimationdeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of estimation to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-estimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return estimation data

<a id="opIdEstimationApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/estimation/details?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/estimation/details`

<h3 id="return-estimation-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "EstimationNumber": "string",
      "Id": 0,
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="return-estimation-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EstimationFullDetailsApiModel](#schemaestimationfulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an estimation

<a id="opIdEstimationApi_New"></a>

> Code samples

```bash
curl https://example.com/api/estimation/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Attachments": [
      {
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "ExpiresOn": "1970-01-01T00:00:00Z",
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountPercentage": 0,
        "Quantity": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "PoNumber": "string",
    "Status": "Draft",
    "Terms": "string"
  }'
```

`POST /api/estimation/new`

> Body parameter

```json
{
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "Terms": "string"
}
```

<h3 id="create-an-estimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[EstimationCreateApiModel](#schemaestimationcreateapimodel)|true|none|
|» Attachments|body|[[EstimationCreateAttachmentApiModel](#schemaestimationcreateattachmentapimodel)]|false|List of estimation attachments|
|» ClientId|body|integer(int32)|false|The client to whom this estimation is assigned|
|» ClonedFromId|body|integer(int32)|false|Indicate from which estimation this estimation has been cloned from|
|» CurrencyId|body|integer(int32)|false|Id of the currency for the estimation amounts|
|» ExpiresOn|body|string(date-time)|false|Indicates when the estimation will be proclamed as due|
|» IssuedOn|body|string(date-time)|false|Indicates when the estimation was issued|
|» Items|body|[[EstimationCreateItemApiModel](#schemaestimationcreateitemapimodel)]|false|List of estimation items|
|» Notes|body|string|false|Internal note regarding the estimation|
|» Number|body|string|false|Unique estimation number|
|» PaymentGateways|body|[[EstimationGatewayApiModel](#schemaestimationgatewayapimodel)]|false|List of enabled payment gateways for this estimation|
|» PoNumber|body|string|false|Unique number generated by the buyer|
|» Status|body|string|false|Indicate the status of the estimation (paid/unpaid/overdue)|
|» Terms|body|string|false|Terms of agreement|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Accepted|
|» Status|Rejected|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "EstimationNumber": "string",
      "Id": 0,
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="create-an-estimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EstimationFullDetailsApiModel](#schemaestimationfulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Send the provided estimation to the client

<a id="opIdEstimationApi_SendToClient"></a>

> Code samples

```bash
curl https://example.com/api/estimation/sendtoclient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AttachPdf": true,
    "EstimationId": 0,
    "Id": 0,
    "Message": "string",
    "SendToSelf": true,
    "Subject": "string"
  }'
```

`POST /api/estimation/sendtoclient`

> Body parameter

```json
{
  "AttachPdf": true,
  "EstimationId": 0,
  "Id": 0,
  "Message": "string",
  "SendToSelf": true,
  "Subject": "string"
}
```

<h3 id="send-the-provided-estimation-to-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[SendEstimationToClientApiModel](#schemasendestimationtoclientapimodel)|true|none|
|» AttachPdf|body|boolean|false|Should attach pdf file|
|» EstimationId|body|integer(int32)|false|Id of the estimation|
|» Id|body|integer(int32)|false|Id of the estimation|
|» Message|body|string|false|Message to be embedded in the email|
|» SendToSelf|body|boolean|false|Should email copy be send to self|
|» Subject|body|string|false|Subject for the email|

> Example responses

> 200 Response

```json
0
```

<h3 id="send-the-provided-estimation-to-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the status of the estimation

<a id="opIdEstimationApi_Status"></a>

> Code samples

```bash
curl 'https://example.com/api/estimation/status?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/estimation/status`

<h3 id="retrieve-the-status-of-the-estimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
"Draft"
```

<h3 id="retrieve-the-status-of-the-estimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing estimation

<a id="opIdEstimationApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/estimation/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Attachments": [
      {
        "Id": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "ExpiresOn": "1970-01-01T00:00:00Z",
    "Id": 0,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountPercentage": 0,
        "Id": 0,
        "Quantity": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "PoNumber": "string",
    "Status": "Draft",
    "Terms": "string"
  }'
```

`POST /api/estimation/update`

> Body parameter

```json
{
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "Terms": "string"
}
```

<h3 id="update-an-existing-estimation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[EstimationUpdateApiModel](#schemaestimationupdateapimodel)|true|none|
|» Attachments|body|[[EstimationUpdateAttachmentApiModel](#schemaestimationupdateattachmentapimodel)]|false|List of estimation attachments|
|» ClientId|body|integer(int32)|false|The client to whom this estimation is assigned|
|» ClonedFromId|body|integer(int32)|false|Indicate from which estimation this estimation has been cloned from|
|» CurrencyId|body|integer(int32)|false|Id of the currency for the estimation amounts|
|» ExpiresOn|body|string(date-time)|false|Indicates when the estimation will be proclamed as due|
|» Id|body|integer(int32)|false|estimation id|
|» IssuedOn|body|string(date-time)|false|Indicates when the estimation was issued|
|» Items|body|[[EstimationUpdateItemApiModel](#schemaestimationupdateitemapimodel)]|false|List of estimation items|
|» Notes|body|string|false|Internal note regarding the estimation|
|» Number|body|string|false|Unique estimation number|
|» PaymentGateways|body|[[EstimationGatewayApiModel](#schemaestimationgatewayapimodel)]|false|List of enabled payment gateways for this estimation|
|» PoNumber|body|string|false|Unique number generated by the buyer|
|» Status|body|string|false|Indicate the status of the estimation (paid/unpaid/overdue)|
|» Terms|body|string|false|Terms of agreement|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Accepted|
|» Status|Rejected|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "EstimationNumber": "string",
      "Id": 0,
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="update-an-existing-estimation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EstimationFullDetailsApiModel](#schemaestimationfulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the unique url to the client's invoice

<a id="opIdEstimationApi_Uri"></a>

> Code samples

```bash
curl 'https://example.com/api/estimation/uri?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/estimation/uri`

<h3 id="return-the-unique-url-to-the-clients-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Link": "string"
}
```

<h3 id="return-the-unique-url-to-the-clients-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[EstimationUriApiModel](#schemaestimationuriapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-general">General</h1>

## Return all of the platform supported countries

<a id="opIdGeneralApi_Countries"></a>

> Code samples

```bash
curl https://example.com/api/general/countries \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/general/countries`

<h3 id="return-all-of-the-platform-supported-countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Id": 0,
    "Name": "string",
    "Value": "string"
  }
]
```

<h3 id="return-all-of-the-platform-supported-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-of-the-platform-supported-countries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CountryDetailsApiModel](#schemacountrydetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return all of the platform supported currencies

<a id="opIdGeneralApi_Currencies"></a>

> Code samples

```bash
curl https://example.com/api/general/currencies \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/general/currencies`

<h3 id="return-all-of-the-platform-supported-currencies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  }
]
```

<h3 id="return-all-of-the-platform-supported-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-of-the-platform-supported-currencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return all of the platform supported Date Formats

<a id="opIdGeneralApi_DateFormats"></a>

> Code samples

```bash
curl https://example.com/api/general/dateformats \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/general/dateformats`

<h3 id="return-all-of-the-platform-supported-date-formats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="return-all-of-the-platform-supported-date-formats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-of-the-platform-supported-date-formats-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return all of the platform supported UI languages

<a id="opIdGeneralApi_UiLanguages"></a>

> Code samples

```bash
curl https://example.com/api/general/uilanguages \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/general/uilanguages`

<h3 id="return-all-of-the-platform-supported-ui-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Id": 0,
    "Name": "string",
    "UiCulture": "string"
  }
]
```

<h3 id="return-all-of-the-platform-supported-ui-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-of-the-platform-supported-ui-languages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UILanguageDetailsApiModel](#schemauilanguagedetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-invoice">Invoice</h1>

## Return all invoices for the account

<a id="opIdInvoiceApi_All"></a>

> Code samples

```bash
curl https://example.com/api/invoice/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/all`

<h3 id="return-all-invoices-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "AdditionalEmails": [
          {
            "Email": "string"
          }
        ],
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "CreatedOn": "1970-01-01T00:00:00Z",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "Vat": "string"
      },
      "ClonedFromId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "DiscountAmount": 0,
      "Duedate": "1970-01-01T00:00:00Z",
      "EnablePartialPayments": true,
      "Id": 0,
      "InvoiceCategoryId": 0,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "Number": "string",
      "PoNumber": "string",
      "RecurringProfile": {
        "DayOfMonth": 0,
        "DayOfWeek": "Sunday",
        "DueDateInDays": 0,
        "EndOfRecurrance": "1970-01-01T00:00:00Z",
        "Month": 0,
        "RecurrancePattern": "Daily",
        "RecurranceValue": 0,
        "StartOfRecurrance": "1970-01-01T00:00:00Z",
        "Status": "Pending",
        "Title": "string"
      },
      "RecurringProfileId": 0,
      "ShouldSendReminders": true,
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0
    }
  ],
  "TotalCount": 0
}
```

<h3 id="return-all-invoices-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_InvoiceDetailsApiModel_](#schemalistresult_invoicedetailsapimodel_)|

<aside class="success">
This operation does not require authentication
</aside>

## Return all invoice categories for the account

> Code samples

```bash
curl https://example.com/api/invoice/allcategories \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/allcategories`

<h3 id="return-all-invoice-categories-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "Id": 0,
      "Name": "string"
    }
  ],
  "TotalCount": 0
}
```

<h3 id="return-all-invoice-categories-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_InvoiceCategoryApiModel_](#schemalistresult_invoicecategoryapimodel_)|

<aside class="success">
This operation does not require authentication
</aside>

## Change invoice status

<a id="opIdInvoiceApi_ChangeStatus"></a>

> Code samples

```bash
curl https://example.com/api/invoice/changestatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Status": "Draft"
  }'
```

`POST /api/invoice/changestatus`

> Body parameter

```json
{
  "Id": 0,
  "Status": "Draft"
}
```

<h3 id="change-invoice-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ChangeStatusApiModel](#schemachangestatusapimodel)|true|none|
|» Id|body|integer(int32)|false|Invoice Id|
|» Status|body|string|false|New status of the invoice|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Paid|
|» Status|Unpaid|
|» Status|Overdue|
|» Status|Void|

> Example responses

> 200 Response

```json
true
```

<h3 id="change-invoice-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing invoice

<a id="opIdInvoiceApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/invoice/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/invoice/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceDeleteApiModel](#schemainvoicedeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of invoice to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing invoice category

> Code samples

```bash
curl https://example.com/api/invoice/deletecategory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/invoice/deletecategory`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-invoice-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceCategoryDeleteApiModel](#schemainvoicecategorydeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-invoice-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return invoice data

<a id="opIdInvoiceApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/invoice/details?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/details`

<h3 id="return-invoice-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "Id": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="return-invoice-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceFullDetailsApiModel](#schemainvoicefulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an invoice

<a id="opIdInvoiceApi_New"></a>

> Code samples

```bash
curl https://example.com/api/invoice/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Attachments": [
      {
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "InvoiceCategoryId": 0,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountPercentage": 0,
        "Quantity": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "PoNumber": "string",
    "RecurringProfile": {
      "DayOfMonth": 0,
      "DayOfWeek": "Sunday",
      "DueDateInDays": 0,
      "EndOfRecurrance": "1970-01-01T00:00:00Z",
      "Month": 0,
      "RecurrancePattern": "Daily",
      "RecurranceValue": 0,
      "StartOfRecurrance": "1970-01-01T00:00:00Z",
      "Status": "Pending",
      "Title": "string"
    },
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "Terms": "string"
  }'
```

`POST /api/invoice/new`

> Body parameter

```json
{
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "Terms": "string"
}
```

<h3 id="create-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceCreateApiModel](#schemainvoicecreateapimodel)|true|none|
|» Attachments|body|[[InvoiceCreateAttachmentApiModel](#schemainvoicecreateattachmentapimodel)]|false|List of invoice attachments|
|» ClientId|body|integer(int32)|false|The client to whom this invoice is assigned|
|» ClonedFromId|body|integer(int32)|false|Indicate from which invoice this invoice has been cloned from|
|» CurrencyId|body|integer(int32)|false|Id of the currency for the invoice amounts|
|» Duedate|body|string(date-time)|false|Indicates when the invoice will be proclamed as due|
|» InvoiceCategoryId|body|integer(int32)|false|Hold the id of the invoice category|
|» IssuedOn|body|string(date-time)|false|Indicates when the invoice was issued|
|» Items|body|[[InvoiceCreateItemApiModel](#schemainvoicecreateitemapimodel)]|false|List of invoice items|
|» Notes|body|string|false|Internal note regarding the invoice|
|» Number|body|string|false|Unique invoice number|
|» PaymentGateways|body|[[InvoiceGatewayApiModel](#schemainvoicegatewayapimodel)]|false|List of enabled payment gateways for this invoice|
|» PoNumber|body|string|false|Unique number generated by the buyer|
|» RecurringProfile|body|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|Definition of invoice recurring profile|
|» RecurringProfileId|body|integer(int32)|false|Hold the id of the recurring profile|
|» ShouldSendReminders|body|boolean|false|Should send email reminders to client?|
|» Status|body|string|false|Indicate the status of the invoice (paid/unpaid/overdue)|
|» Terms|body|string|false|Terms of agreement|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Paid|
|» Status|Unpaid|
|» Status|Overdue|
|» Status|Void|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "Id": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="create-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceFullDetailsApiModel](#schemainvoicefulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an invoice category

> Code samples

```bash
curl https://example.com/api/invoice/newcategory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Name": "string"
  }'
```

`POST /api/invoice/newcategory`

> Body parameter

```json
{
  "Name": "string"
}
```

<h3 id="create-an-invoice-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceCategoryCreateApiModel](#schemainvoicecategorycreateapimodel)|true|none|
|» Name|body|string|false|Category name|

> Example responses

> 200 Response

```json
{
  "Id": 0,
  "Name": "string"
}
```

<h3 id="create-an-invoice-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceCategoryApiModel](#schemainvoicecategoryapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the PDF for the invoice

<a id="opIdInvoiceApi_Pdf"></a>

> Code samples

```bash
curl 'https://example.com/api/invoice/pdf?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/pdf`

<h3 id="return-the-pdf-for-the-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|signedVersion|query|boolean|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Link": "string"
}
```

<h3 id="return-the-pdf-for-the-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceUriApiModel](#schemainvoiceuriapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Send the provided invoice to the accountant

<a id="opIdInvoiceApi_SendToAccountant"></a>

> Code samples

```bash
curl https://example.com/api/invoice/sendtoaccountant \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/invoice/sendtoaccountant`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="send-the-provided-invoice-to-the-accountant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[SendInvoiceToAccountantApiModel](#schemasendinvoicetoaccountantapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of the invoice|

> Example responses

> 200 Response

```json
0
```

<h3 id="send-the-provided-invoice-to-the-accountant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Send the provided invoice to the client

<a id="opIdInvoiceApi_SendToClient"></a>

> Code samples

```bash
curl https://example.com/api/invoice/sendtoclient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AttachPdf": true,
    "Id": 0,
    "InvoiceId": 0,
    "Message": "string",
    "SendToSelf": true,
    "Subject": "string"
  }'
```

`POST /api/invoice/sendtoclient`

> Body parameter

```json
{
  "AttachPdf": true,
  "Id": 0,
  "InvoiceId": 0,
  "Message": "string",
  "SendToSelf": true,
  "Subject": "string"
}
```

<h3 id="send-the-provided-invoice-to-the-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[SendInvoiceToClientApiModel](#schemasendinvoicetoclientapimodel)|true|none|
|» AttachPdf|body|boolean|false|Should attach pdf file|
|» Id|body|integer(int32)|false|Id of the invoice|
|» InvoiceId|body|integer(int32)|false|Id of the invoice|
|» Message|body|string|false|Message to be embedded in the email|
|» SendToSelf|body|boolean|false|Should email copy be send to self|
|» Subject|body|string|false|Subject for the email|

> Example responses

> 200 Response

```json
0
```

<h3 id="send-the-provided-invoice-to-the-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve the status of the invoice

<a id="opIdInvoiceApi_Status"></a>

> Code samples

```bash
curl 'https://example.com/api/invoice/status?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/status`

<h3 id="retrieve-the-status-of-the-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
"Draft"
```

<h3 id="retrieve-the-status-of-the-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing invoice

<a id="opIdInvoiceApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/invoice/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Attachments": [
      {
        "Id": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountPercentage": 0,
        "Id": 0,
        "Quantity": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "PoNumber": "string",
    "RecurringProfile": {
      "DayOfMonth": 0,
      "DayOfWeek": "Sunday",
      "DueDateInDays": 0,
      "EndOfRecurrance": "1970-01-01T00:00:00Z",
      "Month": 0,
      "RecurrancePattern": "Daily",
      "RecurranceValue": 0,
      "StartOfRecurrance": "1970-01-01T00:00:00Z",
      "Status": "Pending",
      "Title": "string"
    },
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "Terms": "string"
  }'
```

`POST /api/invoice/update`

> Body parameter

```json
{
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "Terms": "string"
}
```

<h3 id="update-an-existing-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceUpdateApiModel](#schemainvoiceupdateapimodel)|true|none|
|» Attachments|body|[[InvoiceUpdateAttachmentApiModel](#schemainvoiceupdateattachmentapimodel)]|false|List of invoice attachments|
|» ClientId|body|integer(int32)|false|The client to whom this invoice is assigned|
|» ClonedFromId|body|integer(int32)|false|Indicate from which invoice this invoice has been cloned from|
|» CurrencyId|body|integer(int32)|false|Id of the currency for the invoice amounts|
|» Duedate|body|string(date-time)|false|Indicates when the invoice will be proclamed as due|
|» Id|body|integer(int32)|false|Invoice id|
|» InvoiceCategoryId|body|integer(int32)|false|Hold the id of the invoice category|
|» IssuedOn|body|string(date-time)|false|Indicates when the invoice was issued|
|» Items|body|[[InvoiceUpdateItemApiModel](#schemainvoiceupdateitemapimodel)]|false|List of invoice items|
|» Notes|body|string|false|Internal note regarding the invoice|
|» Number|body|string|false|Unique invoice number|
|» PaymentGateways|body|[[InvoiceGatewayApiModel](#schemainvoicegatewayapimodel)]|false|List of enabled payment gateways for this invoice|
|» PoNumber|body|string|false|Unique number generated by the buyer|
|» RecurringProfile|body|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|Definition of invoice recurring profile|
|» RecurringProfileId|body|integer(int32)|false|Hold the id of the recurring profile|
|» ShouldSendReminders|body|boolean|false|Should send email reminders to client?|
|» Status|body|string|false|Indicate the status of the invoice (paid/unpaid/overdue)|
|» Terms|body|string|false|Terms of agreement|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Draft|
|» Status|Paid|
|» Status|Unpaid|
|» Status|Overdue|
|» Status|Void|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "Id": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

<h3 id="update-an-existing-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceFullDetailsApiModel](#schemainvoicefulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing invoice category

> Code samples

```bash
curl https://example.com/api/invoice/updatecategory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Name": "string"
  }'
```

`POST /api/invoice/updatecategory`

> Body parameter

```json
{
  "Id": 0,
  "Name": "string"
}
```

<h3 id="update-an-existing-invoice-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[InvoiceCategoryUpdateApiModel](#schemainvoicecategoryupdateapimodel)|true|none|
|» Id|body|integer(int32)|false|Entity id|
|» Name|body|string|false|Category name|

> Example responses

> 200 Response

```json
{
  "Id": 0,
  "Name": "string"
}
```

<h3 id="update-an-existing-invoice-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceCategoryApiModel](#schemainvoicecategoryapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Return the unique url to the client's invoice

<a id="opIdInvoiceApi_Uri"></a>

> Code samples

```bash
curl 'https://example.com/api/invoice/uri?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/invoice/uri`

<h3 id="return-the-unique-url-to-the-clients-invoice-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Link": "string"
}
```

<h3 id="return-the-unique-url-to-the-clients-invoice-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[InvoiceUriApiModel](#schemainvoiceuriapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-order">Order</h1>

## Return all orders for the account

<a id="opIdOrderApi_All"></a>

> Code samples

```bash
curl https://example.com/api/order/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/order/all`

<h3 id="return-all-orders-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "AfterPaymentDescription": "string",
      "CouponCode": "string",
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "Id": 0,
      "Name": "string",
      "Note": "string",
      "OrderBillingDetails": {
        "Address": "string",
        "CountryId": 0,
        "Email": "string",
        "Name": "string",
        "PhoneNumber": "string"
      },
      "OrderShippingDetails": {
        "Address": "string",
        "CountryId": 0,
        "Email": "string",
        "Name": "string",
        "PhoneNumber": "string"
      },
      "ProductId": 0,
      "Referral": "string",
      "ShippingAmount": 0,
      "ShippingDescription": "string",
      "Status": "PendingPayment",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TotalAmount": 0,
      "TotalWithShipping": 0,
      "WhatHappensNextDescription": "string"
    }
  ],
  "TotalCount": 0
}
```

<h3 id="return-all-orders-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_OrderDetailsApiModel_](#schemalistresult_orderdetailsapimodel_)|

<aside class="success">
This operation does not require authentication
</aside>

## Change order shipping details

<a id="opIdOrderApi_ChangeShippingDetails"></a>

> Code samples

```bash
curl 'https://example.com/api/order/changeshippingdetails?orderId=0' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  }'
```

`POST /api/order/changeshippingdetails`

> Body parameter

```json
{
  "Address": "string",
  "CountryId": 0,
  "Email": "string",
  "Name": "string",
  "PhoneNumber": "string"
}
```

<h3 id="change-order-shipping-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orderId|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[OrderShippingDetailsApiModel](#schemaordershippingdetailsapimodel)|true|none|
|» Address|body|string|false|Client street and number|
|» CountryId|body|integer(int32)|false|Client country id|
|» Email|body|string|false|Client email|
|» Name|body|string|false|Client name|
|» PhoneNumber|body|string|false|Client phone number|

<h3 id="change-order-shipping-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Change order status

<a id="opIdOrderApi_ChangeStatus"></a>

> Code samples

```bash
curl https://example.com/api/order/changestatus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Reason": "string",
    "Status": "PendingPayment"
  }'
```

`POST /api/order/changestatus`

> Body parameter

```json
{
  "Id": 0,
  "Reason": "string",
  "Status": "PendingPayment"
}
```

<h3 id="change-order-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ChangeOrderStatusApiModel](#schemachangeorderstatusapimodel)|true|none|
|» Id|body|integer(int32)|false|Order Id|
|» Reason|body|string|false|Reason for status change|
|» Status|body|string|false|New status of the order|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|PendingPayment|
|» Status|Processing|
|» Status|Shipped|
|» Status|Completed|
|» Status|OnHold|
|» Status|Cancelled|
|» Status|Refunded|
|» Status|Failed|

<h3 id="change-order-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing order

<a id="opIdOrderApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/order/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/order/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[OrderDeleteApiModel](#schemaorderdeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of order to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return order details

<a id="opIdOrderApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/order/details?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/order/details`

<h3 id="return-order-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "CouponCode": "string",
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "Id": 0,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "ProductItemId": 0,
      "Quantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "Note": "string",
  "OrderBillingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "OrderShippingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "ProductId": 0,
  "Referral": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "PendingPayment",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

<h3 id="return-order-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[OrderFullDetailsApiModel](#schemaorderfulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create an order

<a id="opIdOrderApi_New"></a>

> Code samples

```bash
curl https://example.com/api/order/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AfterPaymentDescription": "string",
    "Attachments": [
      {
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "CouponCode": "string",
    "CurrencyId": 0,
    "Description": "string",
    "DiscountAmount": 0,
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "ProductItemId": 0,
        "Quantity": 0,
        "ReferenceId": "string",
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Name": "string",
    "Note": "string",
    "OrderBillingDetails": {
      "Address": "string",
      "CountryId": 0,
      "Email": "string",
      "Name": "string",
      "PhoneNumber": "string"
    },
    "OrderShippingDetails": {
      "Address": "string",
      "CountryId": 0,
      "Email": "string",
      "Name": "string",
      "PhoneNumber": "string"
    },
    "ProductId": 0,
    "Referral": "string",
    "ShippingAmount": 0,
    "ShippingDescription": "string",
    "Status": "PendingPayment",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "TotalAmount": 0,
    "WhatHappensNextDescription": "string"
  }'
```

`POST /api/order/new`

> Body parameter

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "CouponCode": "string",
  "CurrencyId": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "ProductItemId": 0,
      "Quantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "Note": "string",
  "OrderBillingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "OrderShippingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "ProductId": 0,
  "Referral": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "PendingPayment",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "WhatHappensNextDescription": "string"
}
```

<h3 id="create-an-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[OrderCreateApiModel](#schemaordercreateapimodel)|true|none|
|» AfterPaymentDescription|body|string|false|After payment description|
|» Attachments|body|[[OrderAttachmentApiModel](#schemaorderattachmentapimodel)]|false|List of Order attachments|
|» CouponCode|body|string|false|Coupon to apply in order to get the discount|
|» CurrencyId|body|integer(int32)|false|Foreign key Currency|
|» Description|body|string|false|Product description|
|» DiscountAmount|body|number(double)|false|Discount amount|
|» Items|body|[[OrderItemApiModel](#schemaorderitemapimodel)]|false|List of Order items|
|» Name|body|string|false|Product alias|
|» Note|body|string|false|Customer note to seller|
|» OrderBillingDetails|body|[OrderBillingDetailsApiModel](#schemaorderbillingdetailsapimodel)|false|none|
|» OrderShippingDetails|body|[OrderShippingDetailsApiModel](#schemaordershippingdetailsapimodel)|false|none|
|» ProductId|body|integer(int32)|false|Product id|
|» Referral|body|string|false|Represent the referral for this order|
|» ShippingAmount|body|number(double)|false|Cost for shipping the product|
|» ShippingDescription|body|string|false|Client instructions for shipping|
|» Status|body|string|false|Order status|
|» SubTotalAmount|body|number(double)|false|Sub total amount|
|» TaxAmount|body|number(double)|false|Tax amount|
|» TotalAmount|body|number(double)|false|Total amount|
|» WhatHappensNextDescription|body|string|false|What happens next description|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|PendingPayment|
|» Status|Processing|
|» Status|Shipped|
|» Status|Completed|
|» Status|OnHold|
|» Status|Cancelled|
|» Status|Refunded|
|» Status|Failed|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-an-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-payment">Payment</h1>

## Return all supported payment gateways (no currencies means all are supported)

<a id="opIdPaymentApi_Supported"></a>

> Code samples

```bash
curl https://example.com/api/payment/supported \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/payment/supported`

<h3 id="return-all-supported-payment-gateways-no-currencies-means-all-are-supported-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "Name": "string",
    "SupportedCurrencies": [
      {
        "Name": "string",
        "Value": "string"
      }
    ]
  }
]
```

<h3 id="return-all-supported-payment-gateways-no-currencies-means-all-are-supported-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-supported-payment-gateways-no-currencies-means-all-are-supported-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PaymentGatewayDetailsApiModel](#schemapaymentgatewaydetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-paymentlink">PaymentLink</h1>

## Create a payment link

<a id="opIdPaymentLinkApi_All"></a>

> Code samples

```bash
curl https://example.com/api/paymentlink/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/paymentlink/all`

<h3 id="create-a-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "UserId": 0,
        "Vat": "string"
      },
      "ClientId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "DiscountAmount": 0,
      "Id": 0,
      "Invoice": {
        "AccessToken": "string",
        "Activities": [
          {
            "EstimationId": 0,
            "EstimationNumber": "string",
            "Id": 0,
            "InvoiceId": 0,
            "InvoiceNumber": "string",
            "Link": "string",
            "Message": "string",
            "OrderId": 0,
            "OrderNumber": "string",
            "Type": "Created",
            "UserId": 0
          }
        ],
        "Attachments": [
          {
            "Id": 0,
            "InvoiceId": 0,
            "Link": "string",
            "ObfuscatedFileName": "string",
            "OriginalFileName": "string",
            "Size": 0,
            "Type": "External"
          }
        ],
        "ClientId": 0,
        "ClonedFromId": 0,
        "CurrencyId": 0,
        "DiscountAmount": 0,
        "Duedate": "1970-01-01T00:00:00Z",
        "EnablePartialPayments": true,
        "EstimationId": 0,
        "Id": 0,
        "InvoiceCategoryId": 0,
        "IsDigitallySigned": true,
        "IssuedOn": "1970-01-01T00:00:00Z",
        "Items": [
          {
            "Cost": 0,
            "Description": "string",
            "DiscountAmount": 0,
            "DiscountPercentage": 0,
            "Id": 0,
            "InvoiceId": 0,
            "Quantity": 0,
            "SubTotalAmount": 0,
            "TaxAmount": 0,
            "TaxId": 0,
            "TaxPercentage": 0,
            "TotalAmount": 0,
            "WorkTypeId": 0
          }
        ],
        "Notes": "string",
        "Number": "string",
        "OrderId": 0,
        "PaymentGateways": [
          {
            "Id": 0,
            "Name": "string"
          }
        ],
        "PaymentLinkId": 0,
        "Payments": [
          {}
        ],
        "PoNumber": "string",
        "RecurringProfileId": 0,
        "ShouldSendReminders": true,
        "Status": "Draft",
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "Terms": "string",
        "TotalAmount": 0,
        "UserId": 0
      },
      "Items": [
        {
          "Cost": 0,
          "DiscountAmount": 0,
          "DiscountPercentage": 0,
          "Id": 0,
          "PaymentLinkId": 0,
          "Quantity": 0,
          "SubTotalAmount": 0,
          "Tax": {
            "Id": 0,
            "Name": "string",
            "Percentage": 0,
            "UserId": 0
          },
          "TaxAmount": 0,
          "TaxId": 0,
          "TaxPercentage": 0,
          "TotalAmount": 0,
          "WorkType": {
            "Id": 0,
            "Title": "string",
            "UserId": 0
          },
          "WorkTypeId": 0
        }
      ],
      "Number": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TotalAmount": 0,
      "User": {
        "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
        "Email": "string",
        "ExternalConnections": [
          {
            "AccessToken": "string",
            "AccessTokenSecret": "string",
            "Data": "string",
            "ExpiresOn": "1970-01-01T00:00:00Z",
            "ExternalUserId": "string",
            "ExternalUsername": "string",
            "Id": 0,
            "Provider": "string",
            "UserId": 0
          }
        ],
        "HasBeenOnboarded": true,
        "Id": 0,
        "IsLocked": true,
        "IsVerified": true,
        "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
        "LastSeenOn": "1970-01-01T00:00:00Z",
        "Name": "string",
        "Password": "string",
        "PasswordSalt": "string",
        "ReferralPath": "string",
        "ReferredUsers": 0,
        "ReferrerKey": "string",
        "Settings": {
          "AccountantEmail": "string",
          "Address": "string",
          "ApiKey": "string",
          "ApiSecret": "string",
          "BackgroundImage": "string",
          "Bank": "string",
          "BankAccount": "string",
          "Cname": "string",
          "CompanyRegistrationNumber": "string",
          "Country": {
            "Id": 0,
            "Name": "string",
            "Value": "string"
          },
          "CountryId": 0,
          "Currency": {
            "Code": "string",
            "Id": 0,
            "Name": "string",
            "Symbol": "string",
            "Value": "string"
          },
          "CurrencyId": 0,
          "CurrencySymbol": "string",
          "DefaultDateFormat": "string",
          "DefaultDueDateInDays": 0,
          "DoNotTrack": true,
          "EnableClientPortal": true,
          "EnablePredictiveInvoicing": true,
          "EnableRecurringInvoicing": true,
          "HasInvoiceLogo": true,
          "Iban": "string",
          "Id": 0,
          "InvoiceTemplate": "Default",
          "InvoiceTemplateColorHex": "string",
          "PhoneNumber": "string",
          "Profession": "Other",
          "ReceiveSmsNotifications": true,
          "ReferralProgram": "Enabled",
          "StoreCheckoutFields": "ShowMinimumRequiredFields",
          "StoreColorHex": "string",
          "StoreCurrency": {
            "Code": "string",
            "Id": 0,
            "Name": "string",
            "Symbol": "string",
            "Value": "string"
          },
          "StoreCurrencyId": 0,
          "StoreCustomJavaScript": "string",
          "StoreDescription": "string",
          "StoreEmail": "string",
          "StoreLanguage": {
            "Id": 0,
            "Name": "string",
            "UiCulture": "string"
          },
          "StoreLanguageId": 0,
          "StoreName": "string",
          "StorePurchaseEmailMessage": "string",
          "StorePurchaseThankYouMessage": "string",
          "StoreTextColorHex": "string",
          "StoreUrl": "string",
          "SubscribeToProductEmails": true,
          "Swift": "string",
          "Terms": "string",
          "UserId": 0,
          "UserSignature": "string",
          "VatNumber": "string",
          "YearsOfExperience": 0
        },
        "Status": "Normal",
        "SubscriptionPlan": {
          "CancellatedOn": "1970-01-01T00:00:00Z",
          "CouponCode": "string",
          "CurrencyCode": "string",
          "ExternalIdentifier": "string",
          "Features": [
            "Api"
          ],
          "HasDuePayment": true,
          "HasDuePaymentSince": "1970-01-01T00:00:00Z",
          "Id": 0,
          "Identifier": "string",
          "IsActive": true,
          "IsLifetime": true,
          "LastPaymentOn": "1970-01-01T00:00:00Z",
          "MaxClients": 0,
          "Name": "string",
          "OnHold": true,
          "OrderIdentifier": "string",
          "Price": 0,
          "Recurrence": "Monthly",
          "SaleId": 0,
          "Status": "ActiveTrial",
          "SystemCancelationReason": "FailToCaptureFee",
          "TrialEndsOn": "1970-01-01T00:00:00Z",
          "TrialNumberOfDays": 0,
          "TrialStartsOn": "1970-01-01T00:00:00Z",
          "UserId": 0,
          "Version": 0
        },
        "Type": "Anonymous",
        "Username": "string",
        "VerifiedOn": "1970-01-01T00:00:00Z",
        "YearsOfExperience": "One"
      },
      "UserId": 0
    }
  ],
  "TotalCount": 0
}
```

<h3 id="create-a-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_PaymentLink_](#schemalistresult_paymentlink_)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing payment link

<a id="opIdPaymentLinkApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/paymentlink/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AccessToken": "string",
    "Client": {
      "Address": "string",
      "ClientCountryId": 0,
      "ClientCurrencyId": 0,
      "CompanyRegistrationNumber": "string",
      "DefaultDueDateInDays": 0,
      "Email": "string",
      "Id": 0,
      "Name": "string",
      "PhoneNumber": "string",
      "UiLanguageId": 0,
      "UserId": 0,
      "Vat": "string"
    },
    "ClientId": 0,
    "Currency": {
      "Code": "string",
      "Id": 0,
      "Name": "string",
      "Symbol": "string",
      "Value": "string"
    },
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Id": 0,
    "Invoice": {
      "AccessToken": "string",
      "Activities": [
        {
          "EstimationId": 0,
          "EstimationNumber": "string",
          "Id": 0,
          "InvoiceId": 0,
          "InvoiceNumber": "string",
          "Link": "string",
          "Message": "string",
          "OrderId": 0,
          "OrderNumber": "string",
          "Type": "Created",
          "UserId": 0
        }
      ],
      "Attachments": [
        {
          "Id": 0,
          "InvoiceId": 0,
          "Link": "string",
          "ObfuscatedFileName": "string",
          "OriginalFileName": "string",
          "Size": 0,
          "Type": "External"
        }
      ],
      "ClientId": 0,
      "ClonedFromId": 0,
      "CurrencyId": 0,
      "DiscountAmount": 0,
      "Duedate": "1970-01-01T00:00:00Z",
      "EnablePartialPayments": true,
      "EstimationId": 0,
      "Id": 0,
      "InvoiceCategoryId": 0,
      "IsDigitallySigned": true,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Items": [
        {
          "Cost": 0,
          "Description": "string",
          "DiscountAmount": 0,
          "DiscountPercentage": 0,
          "Id": 0,
          "InvoiceId": 0,
          "Quantity": 0,
          "SubTotalAmount": 0,
          "TaxAmount": 0,
          "TaxId": 0,
          "TaxPercentage": 0,
          "TotalAmount": 0,
          "WorkTypeId": 0
        }
      ],
      "Notes": "string",
      "Number": "string",
      "OrderId": 0,
      "PaymentGateways": [
        {
          "Id": 0,
          "Name": "string"
        }
      ],
      "PaymentLinkId": 0,
      "Payments": [
        {}
      ],
      "PoNumber": "string",
      "RecurringProfileId": 0,
      "ShouldSendReminders": true,
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0,
      "UserId": 0
    },
    "Items": [
      {
        "Cost": 0,
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "PaymentLinkId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "Tax": {
          "Id": 0,
          "Name": "string",
          "Percentage": 0,
          "UserId": 0
        },
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkType": {
          "Id": 0,
          "Title": "string",
          "UserId": 0
        },
        "WorkTypeId": 0
      }
    ],
    "Number": "string",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "TotalAmount": 0,
    "User": {
      "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
      "Email": "string",
      "ExternalConnections": [
        {
          "AccessToken": "string",
          "AccessTokenSecret": "string",
          "Data": "string",
          "ExpiresOn": "1970-01-01T00:00:00Z",
          "ExternalUserId": "string",
          "ExternalUsername": "string",
          "Id": 0,
          "Provider": "string",
          "UserId": 0
        }
      ],
      "HasBeenOnboarded": true,
      "Id": 0,
      "IsLocked": true,
      "IsVerified": true,
      "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
      "LastSeenOn": "1970-01-01T00:00:00Z",
      "Name": "string",
      "Password": "string",
      "PasswordSalt": "string",
      "ReferralPath": "string",
      "ReferredUsers": 0,
      "ReferrerKey": "string",
      "Settings": {
        "AccountantEmail": "string",
        "Address": "string",
        "ApiKey": "string",
        "ApiSecret": "string",
        "BackgroundImage": "string",
        "Bank": "string",
        "BankAccount": "string",
        "Cname": "string",
        "CompanyRegistrationNumber": "string",
        "Country": {
          "Id": 0,
          "Name": "string",
          "Value": "string"
        },
        "CountryId": 0,
        "Currency": {
          "Code": "string",
          "Id": 0,
          "Name": "string",
          "Symbol": "string",
          "Value": "string"
        },
        "CurrencyId": 0,
        "CurrencySymbol": "string",
        "DefaultDateFormat": "string",
        "DefaultDueDateInDays": 0,
        "DoNotTrack": true,
        "EnableClientPortal": true,
        "EnablePredictiveInvoicing": true,
        "EnableRecurringInvoicing": true,
        "HasInvoiceLogo": true,
        "Iban": "string",
        "Id": 0,
        "InvoiceTemplate": "Default",
        "InvoiceTemplateColorHex": "string",
        "PhoneNumber": "string",
        "Profession": "Other",
        "ReceiveSmsNotifications": true,
        "ReferralProgram": "Enabled",
        "StoreCheckoutFields": "ShowMinimumRequiredFields",
        "StoreColorHex": "string",
        "StoreCurrency": {
          "Code": "string",
          "Id": 0,
          "Name": "string",
          "Symbol": "string",
          "Value": "string"
        },
        "StoreCurrencyId": 0,
        "StoreCustomJavaScript": "string",
        "StoreDescription": "string",
        "StoreEmail": "string",
        "StoreLanguage": {
          "Id": 0,
          "Name": "string",
          "UiCulture": "string"
        },
        "StoreLanguageId": 0,
        "StoreName": "string",
        "StorePurchaseEmailMessage": "string",
        "StorePurchaseThankYouMessage": "string",
        "StoreTextColorHex": "string",
        "StoreUrl": "string",
        "SubscribeToProductEmails": true,
        "Swift": "string",
        "Terms": "string",
        "UserId": 0,
        "UserSignature": "string",
        "VatNumber": "string",
        "YearsOfExperience": 0
      },
      "Status": "Normal",
      "SubscriptionPlan": {
        "CancellatedOn": "1970-01-01T00:00:00Z",
        "CouponCode": "string",
        "CurrencyCode": "string",
        "ExternalIdentifier": "string",
        "Features": [
          "Api"
        ],
        "HasDuePayment": true,
        "HasDuePaymentSince": "1970-01-01T00:00:00Z",
        "Id": 0,
        "Identifier": "string",
        "IsActive": true,
        "IsLifetime": true,
        "LastPaymentOn": "1970-01-01T00:00:00Z",
        "MaxClients": 0,
        "Name": "string",
        "OnHold": true,
        "OrderIdentifier": "string",
        "Price": 0,
        "Recurrence": "Monthly",
        "SaleId": 0,
        "Status": "ActiveTrial",
        "SystemCancelationReason": "FailToCaptureFee",
        "TrialEndsOn": "1970-01-01T00:00:00Z",
        "TrialNumberOfDays": 0,
        "TrialStartsOn": "1970-01-01T00:00:00Z",
        "UserId": 0,
        "Version": 0
      },
      "Type": "Anonymous",
      "Username": "string",
      "VerifiedOn": "1970-01-01T00:00:00Z",
      "YearsOfExperience": "One"
    },
    "UserId": 0
  }'
```

`POST /api/paymentlink/delete`

> Body parameter

```json
{
  "AccessToken": "string",
  "Client": {
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "UserId": 0,
    "Vat": "string"
  },
  "ClientId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "DiscountAmount": 0,
  "Id": 0,
  "Invoice": {
    "AccessToken": "string",
    "Activities": [
      {
        "EstimationId": 0,
        "EstimationNumber": "string",
        "Id": 0,
        "InvoiceId": 0,
        "InvoiceNumber": "string",
        "Link": "string",
        "Message": "string",
        "OrderId": 0,
        "OrderNumber": "string",
        "Type": "Created",
        "UserId": 0
      }
    ],
    "Attachments": [
      {
        "Id": 0,
        "InvoiceId": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "EnablePartialPayments": true,
    "EstimationId": 0,
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IsDigitallySigned": true,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "InvoiceId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "OrderId": 0,
    "PaymentGateways": [
      {
        "Id": 0,
        "Name": "string"
      }
    ],
    "PaymentLinkId": 0,
    "Payments": [
      {}
    ],
    "PoNumber": "string",
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "Terms": "string",
    "TotalAmount": 0,
    "UserId": 0
  },
  "Items": [
    {
      "Cost": 0,
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "PaymentLinkId": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "Tax": {
        "Id": 0,
        "Name": "string",
        "Percentage": 0,
        "UserId": 0
      },
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkType": {
        "Id": 0,
        "Title": "string",
        "UserId": 0
      },
      "WorkTypeId": 0
    }
  ],
  "Number": "string",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "User": {
    "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "Email": "string",
    "ExternalConnections": [
      {
        "AccessToken": "string",
        "AccessTokenSecret": "string",
        "Data": "string",
        "ExpiresOn": "1970-01-01T00:00:00Z",
        "ExternalUserId": "string",
        "ExternalUsername": "string",
        "Id": 0,
        "Provider": "string",
        "UserId": 0
      }
    ],
    "HasBeenOnboarded": true,
    "Id": 0,
    "IsLocked": true,
    "IsVerified": true,
    "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "LastSeenOn": "1970-01-01T00:00:00Z",
    "Name": "string",
    "Password": "string",
    "PasswordSalt": "string",
    "ReferralPath": "string",
    "ReferredUsers": 0,
    "ReferrerKey": "string",
    "Settings": {
      "AccountantEmail": "string",
      "Address": "string",
      "ApiKey": "string",
      "ApiSecret": "string",
      "BackgroundImage": "string",
      "Bank": "string",
      "BankAccount": "string",
      "Cname": "string",
      "CompanyRegistrationNumber": "string",
      "Country": {
        "Id": 0,
        "Name": "string",
        "Value": "string"
      },
      "CountryId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "CurrencySymbol": "string",
      "DefaultDateFormat": "string",
      "DefaultDueDateInDays": 0,
      "DoNotTrack": true,
      "EnableClientPortal": true,
      "EnablePredictiveInvoicing": true,
      "EnableRecurringInvoicing": true,
      "HasInvoiceLogo": true,
      "Iban": "string",
      "Id": 0,
      "InvoiceTemplate": "Default",
      "InvoiceTemplateColorHex": "string",
      "PhoneNumber": "string",
      "Profession": "Other",
      "ReceiveSmsNotifications": true,
      "ReferralProgram": "Enabled",
      "StoreCheckoutFields": "ShowMinimumRequiredFields",
      "StoreColorHex": "string",
      "StoreCurrency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "StoreCurrencyId": 0,
      "StoreCustomJavaScript": "string",
      "StoreDescription": "string",
      "StoreEmail": "string",
      "StoreLanguage": {
        "Id": 0,
        "Name": "string",
        "UiCulture": "string"
      },
      "StoreLanguageId": 0,
      "StoreName": "string",
      "StorePurchaseEmailMessage": "string",
      "StorePurchaseThankYouMessage": "string",
      "StoreTextColorHex": "string",
      "StoreUrl": "string",
      "SubscribeToProductEmails": true,
      "Swift": "string",
      "Terms": "string",
      "UserId": 0,
      "UserSignature": "string",
      "VatNumber": "string",
      "YearsOfExperience": 0
    },
    "Status": "Normal",
    "SubscriptionPlan": {
      "CancellatedOn": "1970-01-01T00:00:00Z",
      "CouponCode": "string",
      "CurrencyCode": "string",
      "ExternalIdentifier": "string",
      "Features": [
        "Api"
      ],
      "HasDuePayment": true,
      "HasDuePaymentSince": "1970-01-01T00:00:00Z",
      "Id": 0,
      "Identifier": "string",
      "IsActive": true,
      "IsLifetime": true,
      "LastPaymentOn": "1970-01-01T00:00:00Z",
      "MaxClients": 0,
      "Name": "string",
      "OnHold": true,
      "OrderIdentifier": "string",
      "Price": 0,
      "Recurrence": "Monthly",
      "SaleId": 0,
      "Status": "ActiveTrial",
      "SystemCancelationReason": "FailToCaptureFee",
      "TrialEndsOn": "1970-01-01T00:00:00Z",
      "TrialNumberOfDays": 0,
      "TrialStartsOn": "1970-01-01T00:00:00Z",
      "UserId": 0,
      "Version": 0
    },
    "Type": "Anonymous",
    "Username": "string",
    "VerifiedOn": "1970-01-01T00:00:00Z",
    "YearsOfExperience": "One"
  },
  "UserId": 0
}
```

<h3 id="delete-an-existing-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[PaymentLink](#schemapaymentlink)|true|none|
|» AccessToken|body|string|false|none|
|» Client|body|[Client](#schemaclient)|false|none|
|» ClientId|body|integer(int32)|false|none|
|» Currency|body|[Currency](#schemacurrency)|false|none|
|» CurrencyId|body|integer(int32)|false|none|
|» DiscountAmount|body|number(double)|false|none|
|» Id|body|integer(int32)|false|none|
|» Invoice|body|[Invoice](#schemainvoice)|false|none|
|» Items|body|[[PaymentLinkItem](#schemapaymentlinkitem)]|false|none|
|» Number|body|string|false|none|
|» SubTotalAmount|body|number(double)|false|none|
|» TaxAmount|body|number(double)|false|none|
|» TotalAmount|body|number(double)|false|none|
|» User|body|[User](#schemauser)|false|none|
|» UserId|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a payment link

<a id="opIdPaymentLinkApi_New"></a>

> Code samples

```bash
curl https://example.com/api/paymentlink/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AccessToken": "string",
    "Client": {
      "Address": "string",
      "ClientCountryId": 0,
      "ClientCurrencyId": 0,
      "CompanyRegistrationNumber": "string",
      "DefaultDueDateInDays": 0,
      "Email": "string",
      "Id": 0,
      "Name": "string",
      "PhoneNumber": "string",
      "UiLanguageId": 0,
      "UserId": 0,
      "Vat": "string"
    },
    "ClientId": 0,
    "Currency": {
      "Code": "string",
      "Id": 0,
      "Name": "string",
      "Symbol": "string",
      "Value": "string"
    },
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Id": 0,
    "Invoice": {
      "AccessToken": "string",
      "Activities": [
        {
          "EstimationId": 0,
          "EstimationNumber": "string",
          "Id": 0,
          "InvoiceId": 0,
          "InvoiceNumber": "string",
          "Link": "string",
          "Message": "string",
          "OrderId": 0,
          "OrderNumber": "string",
          "Type": "Created",
          "UserId": 0
        }
      ],
      "Attachments": [
        {
          "Id": 0,
          "InvoiceId": 0,
          "Link": "string",
          "ObfuscatedFileName": "string",
          "OriginalFileName": "string",
          "Size": 0,
          "Type": "External"
        }
      ],
      "ClientId": 0,
      "ClonedFromId": 0,
      "CurrencyId": 0,
      "DiscountAmount": 0,
      "Duedate": "1970-01-01T00:00:00Z",
      "EnablePartialPayments": true,
      "EstimationId": 0,
      "Id": 0,
      "InvoiceCategoryId": 0,
      "IsDigitallySigned": true,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Items": [
        {
          "Cost": 0,
          "Description": "string",
          "DiscountAmount": 0,
          "DiscountPercentage": 0,
          "Id": 0,
          "InvoiceId": 0,
          "Quantity": 0,
          "SubTotalAmount": 0,
          "TaxAmount": 0,
          "TaxId": 0,
          "TaxPercentage": 0,
          "TotalAmount": 0,
          "WorkTypeId": 0
        }
      ],
      "Notes": "string",
      "Number": "string",
      "OrderId": 0,
      "PaymentGateways": [
        {
          "Id": 0,
          "Name": "string"
        }
      ],
      "PaymentLinkId": 0,
      "Payments": [
        {}
      ],
      "PoNumber": "string",
      "RecurringProfileId": 0,
      "ShouldSendReminders": true,
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0,
      "UserId": 0
    },
    "Items": [
      {
        "Cost": 0,
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "PaymentLinkId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "Tax": {
          "Id": 0,
          "Name": "string",
          "Percentage": 0,
          "UserId": 0
        },
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkType": {
          "Id": 0,
          "Title": "string",
          "UserId": 0
        },
        "WorkTypeId": 0
      }
    ],
    "Number": "string",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "TotalAmount": 0,
    "User": {
      "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
      "Email": "string",
      "ExternalConnections": [
        {
          "AccessToken": "string",
          "AccessTokenSecret": "string",
          "Data": "string",
          "ExpiresOn": "1970-01-01T00:00:00Z",
          "ExternalUserId": "string",
          "ExternalUsername": "string",
          "Id": 0,
          "Provider": "string",
          "UserId": 0
        }
      ],
      "HasBeenOnboarded": true,
      "Id": 0,
      "IsLocked": true,
      "IsVerified": true,
      "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
      "LastSeenOn": "1970-01-01T00:00:00Z",
      "Name": "string",
      "Password": "string",
      "PasswordSalt": "string",
      "ReferralPath": "string",
      "ReferredUsers": 0,
      "ReferrerKey": "string",
      "Settings": {
        "AccountantEmail": "string",
        "Address": "string",
        "ApiKey": "string",
        "ApiSecret": "string",
        "BackgroundImage": "string",
        "Bank": "string",
        "BankAccount": "string",
        "Cname": "string",
        "CompanyRegistrationNumber": "string",
        "Country": {
          "Id": 0,
          "Name": "string",
          "Value": "string"
        },
        "CountryId": 0,
        "Currency": {
          "Code": "string",
          "Id": 0,
          "Name": "string",
          "Symbol": "string",
          "Value": "string"
        },
        "CurrencyId": 0,
        "CurrencySymbol": "string",
        "DefaultDateFormat": "string",
        "DefaultDueDateInDays": 0,
        "DoNotTrack": true,
        "EnableClientPortal": true,
        "EnablePredictiveInvoicing": true,
        "EnableRecurringInvoicing": true,
        "HasInvoiceLogo": true,
        "Iban": "string",
        "Id": 0,
        "InvoiceTemplate": "Default",
        "InvoiceTemplateColorHex": "string",
        "PhoneNumber": "string",
        "Profession": "Other",
        "ReceiveSmsNotifications": true,
        "ReferralProgram": "Enabled",
        "StoreCheckoutFields": "ShowMinimumRequiredFields",
        "StoreColorHex": "string",
        "StoreCurrency": {
          "Code": "string",
          "Id": 0,
          "Name": "string",
          "Symbol": "string",
          "Value": "string"
        },
        "StoreCurrencyId": 0,
        "StoreCustomJavaScript": "string",
        "StoreDescription": "string",
        "StoreEmail": "string",
        "StoreLanguage": {
          "Id": 0,
          "Name": "string",
          "UiCulture": "string"
        },
        "StoreLanguageId": 0,
        "StoreName": "string",
        "StorePurchaseEmailMessage": "string",
        "StorePurchaseThankYouMessage": "string",
        "StoreTextColorHex": "string",
        "StoreUrl": "string",
        "SubscribeToProductEmails": true,
        "Swift": "string",
        "Terms": "string",
        "UserId": 0,
        "UserSignature": "string",
        "VatNumber": "string",
        "YearsOfExperience": 0
      },
      "Status": "Normal",
      "SubscriptionPlan": {
        "CancellatedOn": "1970-01-01T00:00:00Z",
        "CouponCode": "string",
        "CurrencyCode": "string",
        "ExternalIdentifier": "string",
        "Features": [
          "Api"
        ],
        "HasDuePayment": true,
        "HasDuePaymentSince": "1970-01-01T00:00:00Z",
        "Id": 0,
        "Identifier": "string",
        "IsActive": true,
        "IsLifetime": true,
        "LastPaymentOn": "1970-01-01T00:00:00Z",
        "MaxClients": 0,
        "Name": "string",
        "OnHold": true,
        "OrderIdentifier": "string",
        "Price": 0,
        "Recurrence": "Monthly",
        "SaleId": 0,
        "Status": "ActiveTrial",
        "SystemCancelationReason": "FailToCaptureFee",
        "TrialEndsOn": "1970-01-01T00:00:00Z",
        "TrialNumberOfDays": 0,
        "TrialStartsOn": "1970-01-01T00:00:00Z",
        "UserId": 0,
        "Version": 0
      },
      "Type": "Anonymous",
      "Username": "string",
      "VerifiedOn": "1970-01-01T00:00:00Z",
      "YearsOfExperience": "One"
    },
    "UserId": 0
  }'
```

`POST /api/paymentlink/new`

> Body parameter

```json
{
  "AccessToken": "string",
  "Client": {
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "UserId": 0,
    "Vat": "string"
  },
  "ClientId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "DiscountAmount": 0,
  "Id": 0,
  "Invoice": {
    "AccessToken": "string",
    "Activities": [
      {
        "EstimationId": 0,
        "EstimationNumber": "string",
        "Id": 0,
        "InvoiceId": 0,
        "InvoiceNumber": "string",
        "Link": "string",
        "Message": "string",
        "OrderId": 0,
        "OrderNumber": "string",
        "Type": "Created",
        "UserId": 0
      }
    ],
    "Attachments": [
      {
        "Id": 0,
        "InvoiceId": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "EnablePartialPayments": true,
    "EstimationId": 0,
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IsDigitallySigned": true,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "InvoiceId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "OrderId": 0,
    "PaymentGateways": [
      {
        "Id": 0,
        "Name": "string"
      }
    ],
    "PaymentLinkId": 0,
    "Payments": [
      {}
    ],
    "PoNumber": "string",
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "Terms": "string",
    "TotalAmount": 0,
    "UserId": 0
  },
  "Items": [
    {
      "Cost": 0,
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "PaymentLinkId": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "Tax": {
        "Id": 0,
        "Name": "string",
        "Percentage": 0,
        "UserId": 0
      },
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkType": {
        "Id": 0,
        "Title": "string",
        "UserId": 0
      },
      "WorkTypeId": 0
    }
  ],
  "Number": "string",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "User": {
    "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "Email": "string",
    "ExternalConnections": [
      {
        "AccessToken": "string",
        "AccessTokenSecret": "string",
        "Data": "string",
        "ExpiresOn": "1970-01-01T00:00:00Z",
        "ExternalUserId": "string",
        "ExternalUsername": "string",
        "Id": 0,
        "Provider": "string",
        "UserId": 0
      }
    ],
    "HasBeenOnboarded": true,
    "Id": 0,
    "IsLocked": true,
    "IsVerified": true,
    "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "LastSeenOn": "1970-01-01T00:00:00Z",
    "Name": "string",
    "Password": "string",
    "PasswordSalt": "string",
    "ReferralPath": "string",
    "ReferredUsers": 0,
    "ReferrerKey": "string",
    "Settings": {
      "AccountantEmail": "string",
      "Address": "string",
      "ApiKey": "string",
      "ApiSecret": "string",
      "BackgroundImage": "string",
      "Bank": "string",
      "BankAccount": "string",
      "Cname": "string",
      "CompanyRegistrationNumber": "string",
      "Country": {
        "Id": 0,
        "Name": "string",
        "Value": "string"
      },
      "CountryId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "CurrencySymbol": "string",
      "DefaultDateFormat": "string",
      "DefaultDueDateInDays": 0,
      "DoNotTrack": true,
      "EnableClientPortal": true,
      "EnablePredictiveInvoicing": true,
      "EnableRecurringInvoicing": true,
      "HasInvoiceLogo": true,
      "Iban": "string",
      "Id": 0,
      "InvoiceTemplate": "Default",
      "InvoiceTemplateColorHex": "string",
      "PhoneNumber": "string",
      "Profession": "Other",
      "ReceiveSmsNotifications": true,
      "ReferralProgram": "Enabled",
      "StoreCheckoutFields": "ShowMinimumRequiredFields",
      "StoreColorHex": "string",
      "StoreCurrency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "StoreCurrencyId": 0,
      "StoreCustomJavaScript": "string",
      "StoreDescription": "string",
      "StoreEmail": "string",
      "StoreLanguage": {
        "Id": 0,
        "Name": "string",
        "UiCulture": "string"
      },
      "StoreLanguageId": 0,
      "StoreName": "string",
      "StorePurchaseEmailMessage": "string",
      "StorePurchaseThankYouMessage": "string",
      "StoreTextColorHex": "string",
      "StoreUrl": "string",
      "SubscribeToProductEmails": true,
      "Swift": "string",
      "Terms": "string",
      "UserId": 0,
      "UserSignature": "string",
      "VatNumber": "string",
      "YearsOfExperience": 0
    },
    "Status": "Normal",
    "SubscriptionPlan": {
      "CancellatedOn": "1970-01-01T00:00:00Z",
      "CouponCode": "string",
      "CurrencyCode": "string",
      "ExternalIdentifier": "string",
      "Features": [
        "Api"
      ],
      "HasDuePayment": true,
      "HasDuePaymentSince": "1970-01-01T00:00:00Z",
      "Id": 0,
      "Identifier": "string",
      "IsActive": true,
      "IsLifetime": true,
      "LastPaymentOn": "1970-01-01T00:00:00Z",
      "MaxClients": 0,
      "Name": "string",
      "OnHold": true,
      "OrderIdentifier": "string",
      "Price": 0,
      "Recurrence": "Monthly",
      "SaleId": 0,
      "Status": "ActiveTrial",
      "SystemCancelationReason": "FailToCaptureFee",
      "TrialEndsOn": "1970-01-01T00:00:00Z",
      "TrialNumberOfDays": 0,
      "TrialStartsOn": "1970-01-01T00:00:00Z",
      "UserId": 0,
      "Version": 0
    },
    "Type": "Anonymous",
    "Username": "string",
    "VerifiedOn": "1970-01-01T00:00:00Z",
    "YearsOfExperience": "One"
  },
  "UserId": 0
}
```

<h3 id="create-a-payment-link-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[PaymentLink](#schemapaymentlink)|true|none|
|» AccessToken|body|string|false|none|
|» Client|body|[Client](#schemaclient)|false|none|
|» ClientId|body|integer(int32)|false|none|
|» Currency|body|[Currency](#schemacurrency)|false|none|
|» CurrencyId|body|integer(int32)|false|none|
|» DiscountAmount|body|number(double)|false|none|
|» Id|body|integer(int32)|false|none|
|» Invoice|body|[Invoice](#schemainvoice)|false|none|
|» Items|body|[[PaymentLinkItem](#schemapaymentlinkitem)]|false|none|
|» Number|body|string|false|none|
|» SubTotalAmount|body|number(double)|false|none|
|» TaxAmount|body|number(double)|false|none|
|» TotalAmount|body|number(double)|false|none|
|» User|body|[User](#schemauser)|false|none|
|» UserId|body|integer(int32)|false|none|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-a-payment-link-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return the unique url to the client's payment link

<a id="opIdPaymentLinkApi_Uri"></a>

> Code samples

```bash
curl 'https://example.com/api/paymentlink/uri?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/paymentlink/uri`

<h3 id="return-the-unique-url-to-the-clients-payment-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Link": "string"
}
```

<h3 id="return-the-unique-url-to-the-clients-payment-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[PaymentLinkUriApiModel](#schemapaymentlinkuriapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-product">Product</h1>

## Return all products for the account

<a id="opIdProductApi_All"></a>

> Code samples

```bash
curl https://example.com/api/product/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/product/all`

<h3 id="return-all-products-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "AfterPaymentDescription": "string",
      "ButtonCallToAction": "string",
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "Description": "string",
      "Id": 0,
      "IsFeatured": true,
      "Name": "string",
      "ShippingAmount": 0,
      "ShippingDescription": "string",
      "Status": "Active",
      "SubTotalAmount": 0,
      "TotalAmount": 0,
      "TotalWithShipping": 0,
      "WhatHappensNextDescription": "string"
    }
  ],
  "TotalCount": 0
}
```

<h3 id="return-all-products-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ListResult_ProductDetailsApiModel_](#schemalistresult_productdetailsapimodel_)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing product

<a id="opIdProductApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/product/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/product/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ProductDeleteApiModel](#schemaproductdeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of product to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return product details

<a id="opIdProductApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/product/details?id=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/product/details`

<h3 id="return-product-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "Id": 0,
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "SubTotalAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

<h3 id="return-product-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ProductFullDetailsApiModel](#schemaproductfulldetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a product

<a id="opIdProductApi_New"></a>

> Code samples

```bash
curl https://example.com/api/product/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AfterPaymentDescription": "string",
    "Attachments": [
      {
        "Id": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ButtonCallToAction": "string",
    "Coupons": [
      {
        "Code": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "ValidUntil": "1970-01-01T00:00:00Z"
      }
    ],
    "CurrencyId": 0,
    "Description": "string",
    "Discounts": [
      {
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "Name": "string",
        "ValidFrom": "1970-01-01T00:00:00Z",
        "ValidTo": "1970-01-01T00:00:00Z"
      }
    ],
    "IsFeatured": true,
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "Id": 0,
        "MinimumQuantity": 0,
        "ReferenceId": "string",
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Name": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "ShippingAmount": 0,
    "ShippingDescription": "string",
    "Status": "Active",
    "WhatHappensNextDescription": "string"
  }'
```

`POST /api/product/new`

> Body parameter

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "WhatHappensNextDescription": "string"
}
```

<h3 id="create-a-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ProductCreateApiModel](#schemaproductcreateapimodel)|true|none|
|» AfterPaymentDescription|body|string|false|After payment description|
|» Attachments|body|[[ProductAttachmentApiModel](#schemaproductattachmentapimodel)]|false|List of product attachments|
|» ButtonCallToAction|body|string|false|Default button call to action<br>Ex: Buy now, subscribe, ...|
|» Coupons|body|[[ProductCouponApiModel](#schemaproductcouponapimodel)]|false|List of product coupons|
|» CurrencyId|body|integer(int32)|false|Foreign key Currency|
|» Description|body|string|false|Product description|
|» Discounts|body|[[ProductDiscountApiModel](#schemaproductdiscountapimodel)]|false|List of product discounts|
|» IsFeatured|body|boolean|false|Indicate that the product is set as featured|
|» Items|body|[[ProductItemApiModel](#schemaproductitemapimodel)]|false|List of product items|
|» Name|body|string|false|Product alias|
|» PaymentGateways|body|[[ProductGatewayApiModel](#schemaproductgatewayapimodel)]|false|List of enabled payment gateways for this product|
|» ShippingAmount|body|number(double)|false|Cost for shipping the product|
|» ShippingDescription|body|string|false|Client instructions for shipping|
|» Status|body|string|false|Product availability status|
|» WhatHappensNextDescription|body|string|false|What happens next description|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Active|
|» Status|NotAvailable|
|» Status|Inactive|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-a-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing product

<a id="opIdProductApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/product/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "AfterPaymentDescription": "string",
    "Attachments": [
      {
        "Id": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ButtonCallToAction": "string",
    "Coupons": [
      {
        "Code": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "ValidUntil": "1970-01-01T00:00:00Z"
      }
    ],
    "CurrencyId": 0,
    "Description": "string",
    "Discounts": [
      {
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "Name": "string",
        "ValidFrom": "1970-01-01T00:00:00Z",
        "ValidTo": "1970-01-01T00:00:00Z"
      }
    ],
    "Id": 0,
    "IsFeatured": true,
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "Id": 0,
        "MinimumQuantity": 0,
        "ReferenceId": "string",
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Name": "string",
    "PaymentGateways": [
      {
        "Name": "string"
      }
    ],
    "ShippingAmount": 0,
    "ShippingDescription": "string",
    "Status": "Active",
    "WhatHappensNextDescription": "string"
  }'
```

`POST /api/product/update`

> Body parameter

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "Id": 0,
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "WhatHappensNextDescription": "string"
}
```

<h3 id="update-an-existing-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[ProductUpdateApiModel](#schemaproductupdateapimodel)|true|none|
|» AfterPaymentDescription|body|string|false|After payment description|
|» Attachments|body|[[ProductAttachmentApiModel](#schemaproductattachmentapimodel)]|false|List of product attachments|
|» ButtonCallToAction|body|string|false|Default button call to action<br>Ex: Buy now, subscribe, ...|
|» Coupons|body|[[ProductCouponApiModel](#schemaproductcouponapimodel)]|false|List of product coupons|
|» CurrencyId|body|integer(int32)|false|Foreign key Currency|
|» Description|body|string|false|Product description|
|» Discounts|body|[[ProductDiscountApiModel](#schemaproductdiscountapimodel)]|false|List of product discounts|
|» Id|body|integer(int32)|false|Product id|
|» IsFeatured|body|boolean|false|Indicate that the product is set as featured|
|» Items|body|[[ProductItemApiModel](#schemaproductitemapimodel)]|false|List of product items|
|» Name|body|string|false|Product alias|
|» PaymentGateways|body|[[ProductGatewayApiModel](#schemaproductgatewayapimodel)]|false|List of enabled payment gateways for this product|
|» ShippingAmount|body|number(double)|false|Cost for shipping the product|
|» ShippingDescription|body|string|false|Client instructions for shipping|
|» Status|body|string|false|Product availability status|
|» WhatHappensNextDescription|body|string|false|What happens next description|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» Status|Active|
|» Status|NotAvailable|
|» Status|Inactive|

<h3 id="update-an-existing-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-tax">Tax</h1>

## Return all taxes for the account

<a id="opIdTaxApi_All"></a>

> Code samples

```bash
curl https://example.com/api/tax/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/tax/all`

<h3 id="return-all-taxes-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "CreatedOn": "1970-01-01T00:00:00Z",
    "Id": 0,
    "Name": "string",
    "Percentage": 0
  }
]
```

<h3 id="return-all-taxes-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-taxes-for-the-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TaxDetailsApiModel](#schemataxdetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing tax

<a id="opIdTaxApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/tax/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/tax/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[TaxDeleteApiModel](#schemataxdeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of tax to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a tax

<a id="opIdTaxApi_New"></a>

> Code samples

```bash
curl https://example.com/api/tax/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Name": "string",
    "Percentage": 0
  }'
```

`POST /api/tax/new`

> Body parameter

```json
{
  "Name": "string",
  "Percentage": 0
}
```

<h3 id="create-a-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[TaxCreateApiModel](#schemataxcreateapimodel)|true|none|
|» Name|body|string|false|Name of the task|
|» Percentage|body|number(double)|false|Task percentage. Ex: 18%|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-a-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing tax

<a id="opIdTaxApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/tax/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Name": "string",
    "Percentage": 0
  }'
```

`POST /api/tax/update`

> Body parameter

```json
{
  "Id": 0,
  "Name": "string",
  "Percentage": 0
}
```

<h3 id="update-an-existing-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[TaxUpdateApiModel](#schemataxupdateapimodel)|true|none|
|» Id|body|integer(int32)|false|Entity id|
|» Name|body|string|false|Name of the task|
|» Percentage|body|number(double)|false|Task percentage. Ex: 18%|

<h3 id="update-an-existing-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-v100-worktype">WorkType</h1>

## Return all work types for the account

<a id="opIdWorkTypeApi_All"></a>

> Code samples

```bash
curl https://example.com/api/worktype/all \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/worktype/all`

<h3 id="return-all-work-types-for-the-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "CreatedOn": "1970-01-01T00:00:00Z",
    "Id": 0,
    "Title": "string"
  }
]
```

<h3 id="return-all-work-types-for-the-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-work-types-for-the-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WorkTypeDetailsApiModel](#schemaworktypedetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an existing work type

<a id="opIdWorkTypeApi_Delete"></a>

> Code samples

```bash
curl https://example.com/api/worktype/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0
  }'
```

`POST /api/worktype/delete`

> Body parameter

```json
{
  "Id": 0
}
```

<h3 id="delete-an-existing-work-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[WorkTypeDeleteApiModel](#schemaworktypedeleteapimodel)|true|none|
|» Id|body|integer(int32)|false|Id of work type to be deleted|

> Example responses

> 200 Response

```json
0
```

<h3 id="delete-an-existing-work-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return work type details

<a id="opIdWorkTypeApi_Details"></a>

> Code samples

```bash
curl 'https://example.com/api/worktype/details?workTypeId=0' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/worktype/details`

<h3 id="return-work-type-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workTypeId|query|integer(int32)|true|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "CreatedOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "Title": "string"
}
```

<h3 id="return-work-type-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[WorkTypeDetailsApiModel](#schemaworktypedetailsapimodel)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a work type

<a id="opIdWorkTypeApi_New"></a>

> Code samples

```bash
curl https://example.com/api/worktype/new \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Title": "string"
  }'
```

`POST /api/worktype/new`

> Body parameter

```json
{
  "Title": "string"
}
```

<h3 id="create-a-work-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[WorkTypeCreateApiModel](#schemaworktypecreateapimodel)|true|none|
|» Title|body|string|false|Indicates the title of of the work type (Logo design, development...)|

> Example responses

> 200 Response

```json
0
```

<h3 id="create-a-work-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Return all work types for the account that match the query param

<a id="opIdWorkTypeApi_Search"></a>

> Code samples

```bash
curl https://example.com/api/worktype/search \
  -H 'Accept: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]'
```

`GET /api/worktype/search`

<h3 id="return-all-work-types-for-the-account-that-match-the-query-param-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|queryOptions.query|query|string|false|none|
|queryOptions.orderBy|query|string|false|none|
|queryOptions.order|query|string|false|none|
|queryOptions.page|query|integer(int32)|false|none|
|queryOptions.pageSize|query|integer(int32)|false|none|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|queryOptions.order|None|
|queryOptions.order|Asc|
|queryOptions.order|Desc|

> Example responses

> 200 Response

```json
[
  {
    "CreatedOn": "1970-01-01T00:00:00Z",
    "Id": 0,
    "Title": "string"
  }
]
```

<h3 id="return-all-work-types-for-the-account-that-match-the-query-param-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-all-work-types-for-the-account-that-match-the-query-param-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[WorkTypeDetailsApiModel](#schemaworktypedetailsapimodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing work type

<a id="opIdWorkTypeApi_Update"></a>

> Code samples

```bash
curl https://example.com/api/worktype/update \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'x-auth-key: [authentication key]' \
  -H 'x-auth-secret: [authentication secret]' \
  -d '{
    "Id": 0,
    "Title": "string"
  }'
```

`POST /api/worktype/update`

> Body parameter

```json
{
  "Id": 0,
  "Title": "string"
}
```

<h3 id="update-an-existing-work-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-auth-key|header|string|true|none|
|x-auth-secret|header|string|true|none|
|body|body|[WorkTypeUpdateApiModel](#schemaworktypeupdateapimodel)|true|none|
|» Id|body|integer(int32)|false|Entity id|
|» Title|body|string|false|Indicates the title of of the work type (Logo design, development...)|

<h3 id="update-an-existing-work-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Activity">Activity</h2>
<!-- backwards compatibility -->
<a id="schemaactivity"></a>
<a id="schema_Activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>

```json
{
  "EstimationId": 0,
  "EstimationNumber": "string",
  "Id": 0,
  "InvoiceId": 0,
  "InvoiceNumber": "string",
  "Link": "string",
  "Message": "string",
  "OrderId": 0,
  "OrderNumber": "string",
  "Type": "Created",
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimationId|integer(int32)|false|none|none|
|EstimationNumber|string|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|InvoiceNumber|string|false|none|none|
|Link|string|false|none|none|
|Message|string|false|none|none|
|OrderId|integer(int32)|false|none|none|
|OrderNumber|string|false|none|none|
|Type|string|false|none|none|
|UserId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Created|
|Type|Draft|
|Type|Cloned|
|Type|SentViaEmail|
|Type|SentViaSms|
|Type|SentReminderViaEmail|
|Type|SentReminderViaSms|
|Type|Opened|
|Type|Viewed|
|Type|Rejected|
|Type|Updated|
|Type|Paid|
|Type|Unpaid|
|Type|Overdue|
|Type|NewManualPayment|
|Type|NewPaymentWithPaypal|
|Type|NewPaymentWithStripe|
|Type|NewPaymentWithPayoneer|
|Type|SentToAccountant|
|Type|DownloadedAsPdf|
|Type|MarkAsPaidByTheClient|
|Type|OpenedAttachment|
|Type|NewPaymentWithSquare|
|Type|NewPaymentWithKlikAndPay|
|Type|NewPaymentWithRazorpay|
|Type|NewPaymentWithWepay|
|Type|NewPaymentWithHalkbank|
|Type|ChangeStatus|
|Type|OrderUpdated|
|Type|OrderCreated|
|Type|NewPaymentWithTwoCheckout|
|Type|NewPaymentWithPaymentWall|
|Type|NewPaymentWithBamboraEU|
|Type|NewPaymentWithBamboraNA|
|Type|Void|
|Type|NewPaymentWithNlb|
|Type|NewPaymentWithAuthorizeNet|
|Type|NewPaymentWithBraintree|
|Type|EstimationCreated|
|Type|EstimationDraft|
|Type|EstimationCloned|
|Type|EstimationSentViaEmail|
|Type|EstimationOpened|
|Type|EstimationViewed|
|Type|EstimationAccepted|
|Type|EstimationRejected|
|Type|EstimationUpdated|
|Type|EstimationDownloadedAsPdf|
|Type|InvoiceDigitallySigned|

<h2 id="tocS_AdditionalClientEmail">AdditionalClientEmail</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalclientemail"></a>
<a id="schema_AdditionalClientEmail"></a>
<a id="tocSadditionalclientemail"></a>
<a id="tocsadditionalclientemail"></a>

```json
{
  "Client": {
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "UserId": 0,
    "Vat": "string"
  },
  "ClientId": 0,
  "Email": "string",
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Client|[Client](#schemaclient)|false|none|none|
|ClientId|integer(int32)|false|none|none|
|Email|string|false|none|none|
|Id|integer(int32)|false|none|none|

<h2 id="tocS_AdditionalClientEmailApiModel">AdditionalClientEmailApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalclientemailapimodel"></a>
<a id="schema_AdditionalClientEmailApiModel"></a>
<a id="tocSadditionalclientemailapimodel"></a>
<a id="tocsadditionalclientemailapimodel"></a>

```json
{
  "Email": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Email|string|false|none|CC|

<h2 id="tocS_ChangeOrderStatusApiModel">ChangeOrderStatusApiModel</h2>
<!-- backwards compatibility -->
<a id="schemachangeorderstatusapimodel"></a>
<a id="schema_ChangeOrderStatusApiModel"></a>
<a id="tocSchangeorderstatusapimodel"></a>
<a id="tocschangeorderstatusapimodel"></a>

```json
{
  "Id": 0,
  "Reason": "string",
  "Status": "PendingPayment"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Order Id|
|Reason|string|false|none|Reason for status change|
|Status|string|false|none|New status of the order|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|PendingPayment|
|Status|Processing|
|Status|Shipped|
|Status|Completed|
|Status|OnHold|
|Status|Cancelled|
|Status|Refunded|
|Status|Failed|

<h2 id="tocS_ChangeStatusApiModel">ChangeStatusApiModel</h2>
<!-- backwards compatibility -->
<a id="schemachangestatusapimodel"></a>
<a id="schema_ChangeStatusApiModel"></a>
<a id="tocSchangestatusapimodel"></a>
<a id="tocschangestatusapimodel"></a>

```json
{
  "Id": 0,
  "Status": "Draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Invoice Id|
|Status|string|false|none|New status of the invoice|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_Client">Client</h2>
<!-- backwards compatibility -->
<a id="schemaclient"></a>
<a id="schema_Client"></a>
<a id="tocSclient"></a>
<a id="tocsclient"></a>

```json
{
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Id": 0,
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "UserId": 0,
  "Vat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string|false|none|none|
|ClientCountryId|integer(int32)|false|none|none|
|ClientCurrencyId|integer(int32)|false|none|none|
|CompanyRegistrationNumber|string|false|none|none|
|DefaultDueDateInDays|integer(int32)|false|none|none|
|Email|string|false|none|none|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|
|PhoneNumber|string|false|none|none|
|UiLanguageId|integer(int32)|false|none|none|
|UserId|integer(int32)|false|none|none|
|Vat|string|false|none|none|

<h2 id="tocS_ClientCreateApiModel">ClientCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaclientcreateapimodel"></a>
<a id="schema_ClientCreateApiModel"></a>
<a id="tocSclientcreateapimodel"></a>
<a id="tocsclientcreateapimodel"></a>

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalEmails|[[AdditionalClientEmailApiModel](#schemaadditionalclientemailapimodel)]|false|none|Client additional emails contact for CC|
|Address|string|false|none|Client business address|
|ClientCountryId|integer(int32)|false|none|Indicates the country where the clients is from|
|ClientCurrencyId|integer(int32)|false|none|Indicates the default system currency used by the user for the client|
|CompanyRegistrationNumber|string|false|none|Client's Company Registration Number|
|DefaultDueDateInDays|integer(int32)|false|none|Client custom payment terms|
|Email|string|false|none|Client email|
|Name|string|false|none|Name of the client|
|PhoneNumber|string|false|none|Client phone numer|
|UiLanguageId|integer(int32)|false|none|Hold a value of the language in which the invoice will be sent|
|Vat|string|false|none|Client's VAT number|

<h2 id="tocS_ClientDeleteApiModel">ClientDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaclientdeleteapimodel"></a>
<a id="schema_ClientDeleteApiModel"></a>
<a id="tocSclientdeleteapimodel"></a>
<a id="tocsclientdeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of client to be deleted|

<h2 id="tocS_ClientDetailsApiModel">ClientDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaclientdetailsapimodel"></a>
<a id="schema_ClientDetailsApiModel"></a>
<a id="tocSclientdetailsapimodel"></a>
<a id="tocsclientdetailsapimodel"></a>

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "CreatedOn": "1970-01-01T00:00:00Z",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Id": 0,
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalEmails|[[AdditionalClientEmailApiModel](#schemaadditionalclientemailapimodel)]|false|none|Client additional emails contact for CC|
|Address|string|false|none|Client business address|
|ClientCountryId|integer(int32)|false|none|Indicates the country where the clients is from|
|ClientCurrencyId|integer(int32)|false|none|Indicates the default system currency used by the user for the client|
|CompanyRegistrationNumber|string|false|none|Client's Company Registration Number|
|CreatedOn|string(date-time)|false|none|Date of creation|
|DefaultDueDateInDays|integer(int32)|false|none|Client custom payment terms|
|Email|string|false|none|Client email|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the client|
|PhoneNumber|string|false|none|Client phone numer|
|UiLanguageId|integer(int32)|false|none|Hold a value of the language in which the invoice will be sent|
|Vat|string|false|none|Client's VAT number|

<h2 id="tocS_ClientUpdateApiModel">ClientUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaclientupdateapimodel"></a>
<a id="schema_ClientUpdateApiModel"></a>
<a id="tocSclientupdateapimodel"></a>
<a id="tocsclientupdateapimodel"></a>

```json
{
  "AdditionalEmails": [
    {
      "Email": "string"
    }
  ],
  "Address": "string",
  "ClientCountryId": 0,
  "ClientCurrencyId": 0,
  "CompanyRegistrationNumber": "string",
  "DefaultDueDateInDays": 0,
  "Email": "string",
  "Id": 0,
  "Name": "string",
  "PhoneNumber": "string",
  "UiLanguageId": 0,
  "Vat": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AdditionalEmails|[[AdditionalClientEmailApiModel](#schemaadditionalclientemailapimodel)]|false|none|Client additional emails contact for CC|
|Address|string|false|none|Client business address|
|ClientCountryId|integer(int32)|false|none|Indicates the country where the clients is from|
|ClientCurrencyId|integer(int32)|false|none|Indicates the default system currency used by the user for the client|
|CompanyRegistrationNumber|string|false|none|Client's Company Registration Number|
|DefaultDueDateInDays|integer(int32)|false|none|Client custom payment terms|
|Email|string|false|none|Client email|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the client|
|PhoneNumber|string|false|none|Client phone numer|
|UiLanguageId|integer(int32)|false|none|Hold a value of the language in which the invoice will be sent|
|Vat|string|false|none|Client's VAT number|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|
|Value|string|false|none|none|

<h2 id="tocS_CountryDetailsApiModel">CountryDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemacountrydetailsapimodel"></a>
<a id="schema_CountryDetailsApiModel"></a>
<a id="tocScountrydetailsapimodel"></a>
<a id="tocscountrydetailsapimodel"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the country|
|Value|string|false|none|Country short code|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "Code": "string",
  "Id": 0,
  "Name": "string",
  "Symbol": "string",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|none|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|
|Symbol|string|false|none|none|
|Value|string|false|none|none|

<h2 id="tocS_CurrencyApiModel">CurrencyApiModel</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyapimodel"></a>
<a id="schema_CurrencyApiModel"></a>
<a id="tocScurrencyapimodel"></a>
<a id="tocscurrencyapimodel"></a>

```json
{
  "Name": "string",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the currency|
|Value|string|false|none|Currency short code|

<h2 id="tocS_CurrencyDetailsApiModel">CurrencyDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemacurrencydetailsapimodel"></a>
<a id="schema_CurrencyDetailsApiModel"></a>
<a id="tocScurrencydetailsapimodel"></a>
<a id="tocscurrencydetailsapimodel"></a>

```json
{
  "Code": "string",
  "Id": 0,
  "Name": "string",
  "Symbol": "string",
  "Value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|Currency short numeric code|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the country|
|Symbol|string|false|none|Currency symbol|
|Value|string|false|none|Currency short alpha code|

<h2 id="tocS_EstimationActivityApiModel">EstimationActivityApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationactivityapimodel"></a>
<a id="schema_EstimationActivityApiModel"></a>
<a id="tocSestimationactivityapimodel"></a>
<a id="tocsestimationactivityapimodel"></a>

```json
{
  "EstimationNumber": "string",
  "Id": 0,
  "Link": "string",
  "Message": "string",
  "Type": "Created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|EstimationNumber|string|false|none|Indicates to which estimation this activity refers to|
|Id|integer(int32)|false|none|Id of estimation activity|
|Link|string|false|none|Url which point out to a certain activity action. Ex: Click to view the payment|
|Message|string|false|none|Message associated with the activity|
|Type|string|false|none|Type of the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Created|
|Type|Draft|
|Type|Cloned|
|Type|SentViaEmail|
|Type|SentViaSms|
|Type|SentReminderViaEmail|
|Type|SentReminderViaSms|
|Type|Opened|
|Type|Viewed|
|Type|Rejected|
|Type|Updated|
|Type|Paid|
|Type|Unpaid|
|Type|Overdue|
|Type|NewManualPayment|
|Type|NewPaymentWithPaypal|
|Type|NewPaymentWithStripe|
|Type|NewPaymentWithPayoneer|
|Type|SentToAccountant|
|Type|DownloadedAsPdf|
|Type|MarkAsPaidByTheClient|
|Type|OpenedAttachment|
|Type|NewPaymentWithSquare|
|Type|NewPaymentWithKlikAndPay|
|Type|NewPaymentWithRazorpay|
|Type|NewPaymentWithWepay|
|Type|NewPaymentWithHalkbank|
|Type|ChangeStatus|
|Type|OrderUpdated|
|Type|OrderCreated|
|Type|NewPaymentWithTwoCheckout|
|Type|NewPaymentWithPaymentWall|
|Type|NewPaymentWithBamboraEU|
|Type|NewPaymentWithBamboraNA|
|Type|Void|
|Type|NewPaymentWithNlb|
|Type|NewPaymentWithAuthorizeNet|
|Type|NewPaymentWithBraintree|
|Type|EstimationCreated|
|Type|EstimationDraft|
|Type|EstimationCloned|
|Type|EstimationSentViaEmail|
|Type|EstimationOpened|
|Type|EstimationViewed|
|Type|EstimationAccepted|
|Type|EstimationRejected|
|Type|EstimationUpdated|
|Type|EstimationDownloadedAsPdf|
|Type|InvoiceDigitallySigned|

<h2 id="tocS_EstimationAttachmentApiModel">EstimationAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationattachmentapimodel"></a>
<a id="schema_EstimationAttachmentApiModel"></a>
<a id="tocSestimationattachmentapimodel"></a>
<a id="tocsestimationattachmentapimodel"></a>

```json
{
  "Id": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of estimation attachment|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_EstimationChangeStatusApiModel">EstimationChangeStatusApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationchangestatusapimodel"></a>
<a id="schema_EstimationChangeStatusApiModel"></a>
<a id="tocSestimationchangestatusapimodel"></a>
<a id="tocsestimationchangestatusapimodel"></a>

```json
{
  "Id": 0,
  "Status": "Draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Estimation Id|
|Status|string|false|none|New status of the estimation|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Accepted|
|Status|Rejected|

<h2 id="tocS_EstimationCreateApiModel">EstimationCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationcreateapimodel"></a>
<a id="schema_EstimationCreateApiModel"></a>
<a id="tocSestimationcreateapimodel"></a>
<a id="tocsestimationcreateapimodel"></a>

```json
{
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "Terms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachments|[[EstimationCreateAttachmentApiModel](#schemaestimationcreateattachmentapimodel)]|false|none|List of estimation attachments|
|ClientId|integer(int32)|false|none|The client to whom this estimation is assigned|
|ClonedFromId|integer(int32)|false|none|Indicate from which estimation this estimation has been cloned from|
|CurrencyId|integer(int32)|false|none|Id of the currency for the estimation amounts|
|ExpiresOn|string(date-time)|false|none|Indicates when the estimation will be proclamed as due|
|IssuedOn|string(date-time)|false|none|Indicates when the estimation was issued|
|Items|[[EstimationCreateItemApiModel](#schemaestimationcreateitemapimodel)]|false|none|List of estimation items|
|Notes|string|false|none|Internal note regarding the estimation|
|Number|string|false|none|Unique estimation number|
|PaymentGateways|[[EstimationGatewayApiModel](#schemaestimationgatewayapimodel)]|false|none|List of enabled payment gateways for this estimation|
|PoNumber|string|false|none|Unique number generated by the buyer|
|Status|string|false|none|Indicate the status of the estimation (paid/unpaid/overdue)|
|Terms|string|false|none|Terms of agreement|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Accepted|
|Status|Rejected|

<h2 id="tocS_EstimationCreateAttachmentApiModel">EstimationCreateAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationcreateattachmentapimodel"></a>
<a id="schema_EstimationCreateAttachmentApiModel"></a>
<a id="tocSestimationcreateattachmentapimodel"></a>
<a id="tocsestimationcreateattachmentapimodel"></a>

```json
{
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_EstimationCreateItemApiModel">EstimationCreateItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationcreateitemapimodel"></a>
<a id="schema_EstimationCreateItemApiModel"></a>
<a id="tocSestimationcreateitemapimodel"></a>
<a id="tocsestimationcreateitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountPercentage": 0,
  "Quantity": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the estimation item|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_EstimationDeleteApiModel">EstimationDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationdeleteapimodel"></a>
<a id="schema_EstimationDeleteApiModel"></a>
<a id="tocSestimationdeleteapimodel"></a>
<a id="tocsestimationdeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of estimation to be deleted|

<h2 id="tocS_EstimationDetailsApiModel">EstimationDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationdetailsapimodel"></a>
<a id="schema_EstimationDetailsApiModel"></a>
<a id="tocSestimationdetailsapimodel"></a>
<a id="tocsestimationdetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "Number": "string",
  "PoNumber": "string",
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Security access token used for accessing the estimation anonymously|
|Client|[ClientDetailsApiModel](#schemaclientdetailsapimodel)|false|none|none|
|ClonedFromId|integer(int32)|false|none|Indicate from which estimation this estimation has been cloned from|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|ExpiresOn|string(date-time)|false|none|Indicates when the estimation will be proclamed as due|
|Id|integer(int32)|false|none|Estimation id|
|IssuedOn|string(date-time)|false|none|Indicates when the estimation was issued|
|Notes|string|false|none|Internal note regarding the estimation|
|Number|string|false|none|Unique estimation number|
|PoNumber|string|false|none|Unique number generated by the buyer|
|Status|string|false|none|Indicate the status of the estimation (paid/unpaid/overdue)|
|SubTotalAmount|number(double)|false|none|Total amount of the estimation without tax|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|Terms|string|false|none|Terms of agreement|
|TotalAmount|number(double)|false|none|Total amount of the estimation with tax|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Accepted|
|Status|Rejected|

<h2 id="tocS_EstimationFullDetailsApiModel">EstimationFullDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationfulldetailsapimodel"></a>
<a id="schema_EstimationFullDetailsApiModel"></a>
<a id="tocSestimationfulldetailsapimodel"></a>
<a id="tocsestimationfulldetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "EstimationNumber": "string",
      "Id": 0,
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Security access token used for accessing the estimation anonymously|
|Activities|[[EstimationActivityApiModel](#schemaestimationactivityapimodel)]|false|none|List of estimation activities. estimation audit log|
|Attachments|[[EstimationAttachmentApiModel](#schemaestimationattachmentapimodel)]|false|none|List of estimation attachments|
|Client|[ClientDetailsApiModel](#schemaclientdetailsapimodel)|false|none|none|
|ClonedFromId|integer(int32)|false|none|Indicate from which estimation this estimation has been cloned from|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|ExpiresOn|string(date-time)|false|none|Indicates when the estimation will be proclamed as due|
|Id|integer(int32)|false|none|Estimation id|
|IssuedOn|string(date-time)|false|none|Indicates when the estimation was issued|
|Items|[[EstimationItemApiModel](#schemaestimationitemapimodel)]|false|none|List of estimation items|
|Notes|string|false|none|Internal note regarding the estimation|
|Number|string|false|none|Unique estimation number|
|PaymentGateways|[[EstimationGatewayApiModel](#schemaestimationgatewayapimodel)]|false|none|List of enabled payment gateways for this estimation|
|PoNumber|string|false|none|Unique number generated by the buyer|
|Status|string|false|none|Indicate the status of the estimation (paid/unpaid/overdue)|
|SubTotalAmount|number(double)|false|none|Total amount of the estimation without tax|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|Terms|string|false|none|Terms of agreement|
|TotalAmount|number(double)|false|none|Total amount of the estimation with tax|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Accepted|
|Status|Rejected|

<h2 id="tocS_EstimationGatewayApiModel">EstimationGatewayApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationgatewayapimodel"></a>
<a id="schema_EstimationGatewayApiModel"></a>
<a id="tocSestimationgatewayapimodel"></a>
<a id="tocsestimationgatewayapimodel"></a>

```json
{
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the payment gateway|

<h2 id="tocS_EstimationItemApiModel">EstimationItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationitemapimodel"></a>
<a id="schema_EstimationItemApiModel"></a>
<a id="tocSestimationitemapimodel"></a>
<a id="tocsestimationitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "Quantity": 0,
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the estimation item|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Id|integer(int32)|false|none|Id of estimation item|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|SubTotalAmount|number(double)|false|none|Sub-Total amount of the estimation item (Amount without tax)|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|TotalAmount|number(double)|false|none|Total amount of the estimation item|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_EstimationUpdateApiModel">EstimationUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationupdateapimodel"></a>
<a id="schema_EstimationUpdateApiModel"></a>
<a id="tocSestimationupdateapimodel"></a>
<a id="tocsestimationupdateapimodel"></a>

```json
{
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "Status": "Draft",
  "Terms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachments|[[EstimationUpdateAttachmentApiModel](#schemaestimationupdateattachmentapimodel)]|false|none|List of estimation attachments|
|ClientId|integer(int32)|false|none|The client to whom this estimation is assigned|
|ClonedFromId|integer(int32)|false|none|Indicate from which estimation this estimation has been cloned from|
|CurrencyId|integer(int32)|false|none|Id of the currency for the estimation amounts|
|ExpiresOn|string(date-time)|false|none|Indicates when the estimation will be proclamed as due|
|Id|integer(int32)|false|none|estimation id|
|IssuedOn|string(date-time)|false|none|Indicates when the estimation was issued|
|Items|[[EstimationUpdateItemApiModel](#schemaestimationupdateitemapimodel)]|false|none|List of estimation items|
|Notes|string|false|none|Internal note regarding the estimation|
|Number|string|false|none|Unique estimation number|
|PaymentGateways|[[EstimationGatewayApiModel](#schemaestimationgatewayapimodel)]|false|none|List of enabled payment gateways for this estimation|
|PoNumber|string|false|none|Unique number generated by the buyer|
|Status|string|false|none|Indicate the status of the estimation (paid/unpaid/overdue)|
|Terms|string|false|none|Terms of agreement|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Accepted|
|Status|Rejected|

<h2 id="tocS_EstimationUpdateAttachmentApiModel">EstimationUpdateAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationupdateattachmentapimodel"></a>
<a id="schema_EstimationUpdateAttachmentApiModel"></a>
<a id="tocSestimationupdateattachmentapimodel"></a>
<a id="tocsestimationupdateattachmentapimodel"></a>

```json
{
  "Id": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of estimation attachment|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_EstimationUpdateItemApiModel">EstimationUpdateItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationupdateitemapimodel"></a>
<a id="schema_EstimationUpdateItemApiModel"></a>
<a id="tocSestimationupdateitemapimodel"></a>
<a id="tocsestimationupdateitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountPercentage": 0,
  "Id": 0,
  "Quantity": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the estimation item|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Id|integer(int32)|false|none|Id of estimation item|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_EstimationUriApiModel">EstimationUriApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaestimationuriapimodel"></a>
<a id="schema_EstimationUriApiModel"></a>
<a id="tocSestimationuriapimodel"></a>
<a id="tocsestimationuriapimodel"></a>

```json
{
  "Link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Unique link to the estimation|

<h2 id="tocS_ExternalConnection">ExternalConnection</h2>
<!-- backwards compatibility -->
<a id="schemaexternalconnection"></a>
<a id="schema_ExternalConnection"></a>
<a id="tocSexternalconnection"></a>
<a id="tocsexternalconnection"></a>

```json
{
  "AccessToken": "string",
  "AccessTokenSecret": "string",
  "Data": "string",
  "ExpiresOn": "1970-01-01T00:00:00Z",
  "ExternalUserId": "string",
  "ExternalUsername": "string",
  "Id": 0,
  "Provider": "string",
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|none|
|AccessTokenSecret|string|false|none|none|
|Data|string|false|none|none|
|ExpiresOn|string(date-time)|false|none|none|
|ExternalUserId|string|false|none|none|
|ExternalUsername|string|false|none|none|
|Id|integer(int32)|false|none|none|
|Provider|string|false|none|none|
|UserId|integer(int32)|false|none|none|

<h2 id="tocS_IErrorInfo">IErrorInfo</h2>
<!-- backwards compatibility -->
<a id="schemaierrorinfo"></a>
<a id="schema_IErrorInfo"></a>
<a id="tocSierrorinfo"></a>
<a id="tocsierrorinfo"></a>

```json
{
  "Code": "string",
  "FaultMessage": "string",
  "Group": "string",
  "UserVisibleMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|read-only|none|
|FaultMessage|string|false|read-only|none|
|Group|string|false|read-only|none|
|UserVisibleMessage|string|false|read-only|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "EstimationId": 0,
      "EstimationNumber": "string",
      "Id": 0,
      "InvoiceId": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "OrderId": 0,
      "OrderNumber": "string",
      "Type": "Created",
      "UserId": 0
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "InvoiceId": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "EstimationId": 0,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IsDigitallySigned": true,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "InvoiceId": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "OrderId": 0,
  "PaymentGateways": [
    {
      "Id": 0,
      "Name": "string"
    }
  ],
  "PaymentLinkId": 0,
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "Invoice": {},
      "InvoiceId": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0,
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|none|
|Activities|[[Activity](#schemaactivity)]|false|none|none|
|Attachments|[[InvoiceAttachment](#schemainvoiceattachment)]|false|none|none|
|ClientId|integer(int32)|false|none|none|
|ClonedFromId|integer(int32)|false|none|none|
|CurrencyId|integer(int32)|false|none|none|
|DiscountAmount|number(double)|false|none|none|
|Duedate|string(date-time)|false|none|none|
|EnablePartialPayments|boolean|false|none|none|
|EstimationId|integer(int32)|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceCategoryId|integer(int32)|false|none|none|
|IsDigitallySigned|boolean|false|none|none|
|IssuedOn|string(date-time)|false|none|none|
|Items|[[InvoiceItem](#schemainvoiceitem)]|false|none|none|
|Notes|string|false|none|none|
|Number|string|false|none|none|
|OrderId|integer(int32)|false|none|none|
|PaymentGateways|[[PaymentGatewayForInvoice](#schemapaymentgatewayforinvoice)]|false|none|none|
|PaymentLinkId|integer(int32)|false|none|none|
|Payments|[[Payment](#schemapayment)]|false|none|none|
|PoNumber|string|false|none|none|
|RecurringProfileId|integer(int32)|false|none|none|
|ShouldSendReminders|boolean|false|none|none|
|Status|string|false|none|none|
|SubTotalAmount|number(double)|false|none|none|
|TaxAmount|number(double)|false|none|none|
|Terms|string|false|none|none|
|TotalAmount|number(double)|false|none|none|
|UserId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_InvoiceActivityApiModel">InvoiceActivityApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceactivityapimodel"></a>
<a id="schema_InvoiceActivityApiModel"></a>
<a id="tocSinvoiceactivityapimodel"></a>
<a id="tocsinvoiceactivityapimodel"></a>

```json
{
  "Id": 0,
  "InvoiceNumber": "string",
  "Link": "string",
  "Message": "string",
  "Type": "Created"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of invoice activity|
|InvoiceNumber|string|false|none|Indicates to which invoice this activity refers to|
|Link|string|false|none|Url which point out to a certain activity action. Ex: Click to view the payment|
|Message|string|false|none|Message associated with the activity|
|Type|string|false|none|Type of the activity|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Created|
|Type|Draft|
|Type|Cloned|
|Type|SentViaEmail|
|Type|SentViaSms|
|Type|SentReminderViaEmail|
|Type|SentReminderViaSms|
|Type|Opened|
|Type|Viewed|
|Type|Rejected|
|Type|Updated|
|Type|Paid|
|Type|Unpaid|
|Type|Overdue|
|Type|NewManualPayment|
|Type|NewPaymentWithPaypal|
|Type|NewPaymentWithStripe|
|Type|NewPaymentWithPayoneer|
|Type|SentToAccountant|
|Type|DownloadedAsPdf|
|Type|MarkAsPaidByTheClient|
|Type|OpenedAttachment|
|Type|NewPaymentWithSquare|
|Type|NewPaymentWithKlikAndPay|
|Type|NewPaymentWithRazorpay|
|Type|NewPaymentWithWepay|
|Type|NewPaymentWithHalkbank|
|Type|ChangeStatus|
|Type|OrderUpdated|
|Type|OrderCreated|
|Type|NewPaymentWithTwoCheckout|
|Type|NewPaymentWithPaymentWall|
|Type|NewPaymentWithBamboraEU|
|Type|NewPaymentWithBamboraNA|
|Type|Void|
|Type|NewPaymentWithNlb|
|Type|NewPaymentWithAuthorizeNet|
|Type|NewPaymentWithBraintree|
|Type|EstimationCreated|
|Type|EstimationDraft|
|Type|EstimationCloned|
|Type|EstimationSentViaEmail|
|Type|EstimationOpened|
|Type|EstimationViewed|
|Type|EstimationAccepted|
|Type|EstimationRejected|
|Type|EstimationUpdated|
|Type|EstimationDownloadedAsPdf|
|Type|InvoiceDigitallySigned|

<h2 id="tocS_InvoiceAttachment">InvoiceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceattachment"></a>
<a id="schema_InvoiceAttachment"></a>
<a id="tocSinvoiceattachment"></a>
<a id="tocsinvoiceattachment"></a>

```json
{
  "Id": 0,
  "InvoiceId": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|Link|string|false|none|none|
|ObfuscatedFileName|string|false|none|none|
|OriginalFileName|string|false|none|none|
|Size|integer(int64)|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_InvoiceAttachmentApiModel">InvoiceAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceattachmentapimodel"></a>
<a id="schema_InvoiceAttachmentApiModel"></a>
<a id="tocSinvoiceattachmentapimodel"></a>
<a id="tocsinvoiceattachmentapimodel"></a>

```json
{
  "Id": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of invoice attachment|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_InvoiceCategoryApiModel">InvoiceCategoryApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecategoryapimodel"></a>
<a id="schema_InvoiceCategoryApiModel"></a>
<a id="tocSinvoicecategoryapimodel"></a>
<a id="tocsinvoicecategoryapimodel"></a>

```json
{
  "Id": 0,
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Category name|

<h2 id="tocS_InvoiceCategoryCreateApiModel">InvoiceCategoryCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecategorycreateapimodel"></a>
<a id="schema_InvoiceCategoryCreateApiModel"></a>
<a id="tocSinvoicecategorycreateapimodel"></a>
<a id="tocsinvoicecategorycreateapimodel"></a>

```json
{
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Category name|

<h2 id="tocS_InvoiceCategoryDeleteApiModel">InvoiceCategoryDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecategorydeleteapimodel"></a>
<a id="schema_InvoiceCategoryDeleteApiModel"></a>
<a id="tocSinvoicecategorydeleteapimodel"></a>
<a id="tocsinvoicecategorydeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|

<h2 id="tocS_InvoiceCategoryUpdateApiModel">InvoiceCategoryUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecategoryupdateapimodel"></a>
<a id="schema_InvoiceCategoryUpdateApiModel"></a>
<a id="tocSinvoicecategoryupdateapimodel"></a>
<a id="tocsinvoicecategoryupdateapimodel"></a>

```json
{
  "Id": 0,
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Category name|

<h2 id="tocS_InvoiceCreateApiModel">InvoiceCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecreateapimodel"></a>
<a id="schema_InvoiceCreateApiModel"></a>
<a id="tocSinvoicecreateapimodel"></a>
<a id="tocsinvoicecreateapimodel"></a>

```json
{
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "Terms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachments|[[InvoiceCreateAttachmentApiModel](#schemainvoicecreateattachmentapimodel)]|false|none|List of invoice attachments|
|ClientId|integer(int32)|false|none|The client to whom this invoice is assigned|
|ClonedFromId|integer(int32)|false|none|Indicate from which invoice this invoice has been cloned from|
|CurrencyId|integer(int32)|false|none|Id of the currency for the invoice amounts|
|Duedate|string(date-time)|false|none|Indicates when the invoice will be proclamed as due|
|InvoiceCategoryId|integer(int32)|false|none|Hold the id of the invoice category|
|IssuedOn|string(date-time)|false|none|Indicates when the invoice was issued|
|Items|[[InvoiceCreateItemApiModel](#schemainvoicecreateitemapimodel)]|false|none|List of invoice items|
|Notes|string|false|none|Internal note regarding the invoice|
|Number|string|false|none|Unique invoice number|
|PaymentGateways|[[InvoiceGatewayApiModel](#schemainvoicegatewayapimodel)]|false|none|List of enabled payment gateways for this invoice|
|PoNumber|string|false|none|Unique number generated by the buyer|
|RecurringProfile|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|none|Definition of invoice recurring profile|
|RecurringProfileId|integer(int32)|false|none|Hold the id of the recurring profile|
|ShouldSendReminders|boolean|false|none|Should send email reminders to client?|
|Status|string|false|none|Indicate the status of the invoice (paid/unpaid/overdue)|
|Terms|string|false|none|Terms of agreement|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_InvoiceCreateAttachmentApiModel">InvoiceCreateAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecreateattachmentapimodel"></a>
<a id="schema_InvoiceCreateAttachmentApiModel"></a>
<a id="tocSinvoicecreateattachmentapimodel"></a>
<a id="tocsinvoicecreateattachmentapimodel"></a>

```json
{
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_InvoiceCreateItemApiModel">InvoiceCreateItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicecreateitemapimodel"></a>
<a id="schema_InvoiceCreateItemApiModel"></a>
<a id="tocSinvoicecreateitemapimodel"></a>
<a id="tocsinvoicecreateitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountPercentage": 0,
  "Quantity": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the invoice item|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_InvoiceDeleteApiModel">InvoiceDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedeleteapimodel"></a>
<a id="schema_InvoiceDeleteApiModel"></a>
<a id="tocSinvoicedeleteapimodel"></a>
<a id="tocsinvoicedeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of invoice to be deleted|

<h2 id="tocS_InvoiceDetailsApiModel">InvoiceDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedetailsapimodel"></a>
<a id="schema_InvoiceDetailsApiModel"></a>
<a id="tocSinvoicedetailsapimodel"></a>
<a id="tocsinvoicedetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Notes": "string",
  "Number": "string",
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Security access token used for accessing the invoice anonymously|
|Client|[ClientDetailsApiModel](#schemaclientdetailsapimodel)|false|none|none|
|ClonedFromId|integer(int32)|false|none|Indicate from which invoice this invoice has been cloned from|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|Duedate|string(date-time)|false|none|Indicates when the invoice will be proclamed as due|
|EnablePartialPayments|boolean|false|none|Indicate that the invoice allows the user to pay the invoice partially|
|Id|integer(int32)|false|none|Invoice id|
|InvoiceCategoryId|integer(int32)|false|none|Hold the id of the invoice category|
|IssuedOn|string(date-time)|false|none|Indicates when the invoice was issued|
|Notes|string|false|none|Internal note regarding the invoice|
|Number|string|false|none|Unique invoice number|
|PoNumber|string|false|none|Unique number generated by the buyer|
|RecurringProfile|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|none|Definition of invoice recurring profile|
|RecurringProfileId|integer(int32)|false|none|Hold the id of the recurring profile|
|ShouldSendReminders|boolean|false|none|Should send email reminders to client?|
|Status|string|false|none|Indicate the status of the invoice (paid/unpaid/overdue)|
|SubTotalAmount|number(double)|false|none|Total amount of the invoice without tax|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|Terms|string|false|none|Terms of agreement|
|TotalAmount|number(double)|false|none|Total amount of the invoice with tax|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_InvoiceFullDetailsApiModel">InvoiceFullDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicefulldetailsapimodel"></a>
<a id="schema_InvoiceFullDetailsApiModel"></a>
<a id="tocSinvoicefulldetailsapimodel"></a>
<a id="tocsinvoicefulldetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "Activities": [
    {
      "Id": 0,
      "InvoiceNumber": "string",
      "Link": "string",
      "Message": "string",
      "Type": "Created"
    }
  ],
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "Client": {
    "AdditionalEmails": [
      {
        "Email": "string"
      }
    ],
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "CreatedOn": "1970-01-01T00:00:00Z",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "Vat": "string"
  },
  "ClonedFromId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "DiscountAmount": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "EnablePartialPayments": true,
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "Payments": [
    {
      "Amount": 0,
      "Id": 0,
      "IsAutomatic": true,
      "Note": "string",
      "PaidOn": "1970-01-01T00:00:00Z",
      "ReferenceId": "string",
      "Type": "Other"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "Terms": "string",
  "TotalAmount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Security access token used for accessing the invoice anonymously|
|Activities|[[InvoiceActivityApiModel](#schemainvoiceactivityapimodel)]|false|none|List of invoice activities. Invoice audit log|
|Attachments|[[InvoiceAttachmentApiModel](#schemainvoiceattachmentapimodel)]|false|none|List of invoice attachments|
|Client|[ClientDetailsApiModel](#schemaclientdetailsapimodel)|false|none|none|
|ClonedFromId|integer(int32)|false|none|Indicate from which invoice this invoice has been cloned from|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|Duedate|string(date-time)|false|none|Indicates when the invoice will be proclamed as due|
|EnablePartialPayments|boolean|false|none|Indicate that the invoice allows the user to pay the invoice partially|
|Id|integer(int32)|false|none|Invoice id|
|InvoiceCategoryId|integer(int32)|false|none|Hold the id of the invoice category|
|IssuedOn|string(date-time)|false|none|Indicates when the invoice was issued|
|Items|[[InvoiceItemApiModel](#schemainvoiceitemapimodel)]|false|none|List of invoice items|
|Notes|string|false|none|Internal note regarding the invoice|
|Number|string|false|none|Unique invoice number|
|PaymentGateways|[[InvoiceGatewayApiModel](#schemainvoicegatewayapimodel)]|false|none|List of enabled payment gateways for this invoice|
|Payments|[[InvoicePaymentApiModel](#schemainvoicepaymentapimodel)]|false|none|List of invoice payments|
|PoNumber|string|false|none|Unique number generated by the buyer|
|RecurringProfile|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|none|Definition of invoice recurring profile|
|RecurringProfileId|integer(int32)|false|none|Hold the id of the recurring profile|
|ShouldSendReminders|boolean|false|none|Should send email reminders to client?|
|Status|string|false|none|Indicate the status of the invoice (paid/unpaid/overdue)|
|SubTotalAmount|number(double)|false|none|Total amount of the invoice without tax|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|Terms|string|false|none|Terms of agreement|
|TotalAmount|number(double)|false|none|Total amount of the invoice with tax|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_InvoiceGatewayApiModel">InvoiceGatewayApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicegatewayapimodel"></a>
<a id="schema_InvoiceGatewayApiModel"></a>
<a id="tocSinvoicegatewayapimodel"></a>
<a id="tocsinvoicegatewayapimodel"></a>

```json
{
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the payment gateway|

<h2 id="tocS_InvoiceItem">InvoiceItem</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitem"></a>
<a id="schema_InvoiceItem"></a>
<a id="tocSinvoiceitem"></a>
<a id="tocsinvoiceitem"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "InvoiceId": 0,
  "Quantity": 0,
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|none|
|Description|string|false|none|none|
|DiscountAmount|number(double)|false|none|none|
|DiscountPercentage|number(double)|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|Quantity|number(double)|false|none|none|
|SubTotalAmount|number(double)|false|none|none|
|TaxAmount|number(double)|false|none|none|
|TaxId|integer(int32)|false|none|none|
|TaxPercentage|number(double)|false|none|none|
|TotalAmount|number(double)|false|none|none|
|WorkTypeId|integer(int32)|false|none|none|

<h2 id="tocS_InvoiceItemApiModel">InvoiceItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemapimodel"></a>
<a id="schema_InvoiceItemApiModel"></a>
<a id="tocSinvoiceitemapimodel"></a>
<a id="tocsinvoiceitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "Quantity": 0,
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the invoice item|
|DiscountAmount|number(double)|false|none|Amount that goes as a discount|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Id|integer(int32)|false|none|Id of invoice item|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|SubTotalAmount|number(double)|false|none|Sub-Total amount of the invoice item (Amount without tax)|
|TaxAmount|number(double)|false|none|Amount that goes to the tax|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|TotalAmount|number(double)|false|none|Total amount of the invoice item|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_InvoiceMessage">InvoiceMessage</h2>
<!-- backwards compatibility -->
<a id="schemainvoicemessage"></a>
<a id="schema_InvoiceMessage"></a>
<a id="tocSinvoicemessage"></a>
<a id="tocsinvoicemessage"></a>

```json
{
  "AttachPdf": true,
  "Id": 0,
  "InvoiceId": 0,
  "Message": "string",
  "SendToSelf": true,
  "Subject": "string",
  "Type": "SendInvoice"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachPdf|boolean|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|Message|string|false|none|none|
|SendToSelf|boolean|false|none|none|
|Subject|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|SendInvoice|
|Type|SendInvoiceReminder|

<h2 id="tocS_InvoicePaymentApiModel">InvoicePaymentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicepaymentapimodel"></a>
<a id="schema_InvoicePaymentApiModel"></a>
<a id="tocSinvoicepaymentapimodel"></a>
<a id="tocsinvoicepaymentapimodel"></a>

```json
{
  "Amount": 0,
  "Id": 0,
  "IsAutomatic": true,
  "Note": "string",
  "PaidOn": "1970-01-01T00:00:00Z",
  "ReferenceId": "string",
  "Type": "Other"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|Total amount of the payment|
|Id|integer(int32)|false|none|Id of invoice payment|
|IsAutomatic|boolean|false|none|Indicate if the payment is automatic or manual|
|Note|string|false|none|Internal payment note|
|PaidOn|string(date-time)|false|none|When the payment was done by the client|
|ReferenceId|string|false|none|Id of the payment|
|Type|string|false|none|Type of payment|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Other|
|Type|Paypal|
|Type|Stripe|
|Type|Payoneer|
|Type|Bank|
|Type|Cash|
|Type|Cheque|
|Type|Ach|
|Type|Sepa|
|Type|Square|
|Type|KlikAndPay|
|Type|Razorpay|
|Type|Wepay|
|Type|Halkbank|
|Type|TwoCheckout|
|Type|PaymentWall|
|Type|BamboraEU|
|Type|BamboraNA|
|Type|Nlb|
|Type|AuthorizeNet|
|Type|Braintree|

<h2 id="tocS_InvoiceRecurringApiModel">InvoiceRecurringApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoicerecurringapimodel"></a>
<a id="schema_InvoiceRecurringApiModel"></a>
<a id="tocSinvoicerecurringapimodel"></a>
<a id="tocsinvoicerecurringapimodel"></a>

```json
{
  "DayOfMonth": 0,
  "DayOfWeek": "Sunday",
  "DueDateInDays": 0,
  "EndOfRecurrance": "1970-01-01T00:00:00Z",
  "Month": 0,
  "RecurrancePattern": "Daily",
  "RecurranceValue": 0,
  "StartOfRecurrance": "1970-01-01T00:00:00Z",
  "Status": "Pending",
  "Title": "string"
}
```

Definition of invoice recurring profile

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfMonth|integer(int32)|false|none|Day of month when the recurrance should happen|
|DayOfWeek|string|false|none|Day when the recurrance should happen|
|DueDateInDays|integer(int32)|false|none|Total number of days for the client to pay the invoice after issuing it|
|EndOfRecurrance|string(date-time)|false|none|Indcate the date when the recurrance should stop|
|Month|integer(int32)|false|none|Month when the recurrance should happen|
|RecurrancePattern|string|false|none|How often the recurrance occurs|
|RecurranceValue|integer(int32)|false|none|Recurring every [value] RecurrancePattern<br>Ex: Recur every 1 week|
|StartOfRecurrance|string(date-time)|false|none|Indcate the date when the recurrance has started|
|Status|string|false|none|The status of the recurrance|
|Title|string|false|none|Title of the recurring profile. <br>Ex: BRAND PACKAGE - 2017-08-16 - 2018-08-16|

#### Enumerated Values

|Property|Value|
|---|---|
|DayOfWeek|Sunday|
|DayOfWeek|Monday|
|DayOfWeek|Tuesday|
|DayOfWeek|Wednesday|
|DayOfWeek|Thursday|
|DayOfWeek|Friday|
|DayOfWeek|Saturday|
|RecurrancePattern|Daily|
|RecurrancePattern|Weekly|
|RecurrancePattern|Monthly|
|RecurrancePattern|Yearly|
|Status|Pending|
|Status|Active|
|Status|Cancelled|
|Status|Finished|

<h2 id="tocS_InvoiceUpdateApiModel">InvoiceUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceupdateapimodel"></a>
<a id="schema_InvoiceUpdateApiModel"></a>
<a id="tocSinvoiceupdateapimodel"></a>
<a id="tocsinvoiceupdateapimodel"></a>

```json
{
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ClientId": 0,
  "ClonedFromId": 0,
  "CurrencyId": 0,
  "Duedate": "1970-01-01T00:00:00Z",
  "Id": 0,
  "InvoiceCategoryId": 0,
  "IssuedOn": "1970-01-01T00:00:00Z",
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "DiscountPercentage": 0,
      "Id": 0,
      "Quantity": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "WorkTypeId": 0
    }
  ],
  "Notes": "string",
  "Number": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "PoNumber": "string",
  "RecurringProfile": {
    "DayOfMonth": 0,
    "DayOfWeek": "Sunday",
    "DueDateInDays": 0,
    "EndOfRecurrance": "1970-01-01T00:00:00Z",
    "Month": 0,
    "RecurrancePattern": "Daily",
    "RecurranceValue": 0,
    "StartOfRecurrance": "1970-01-01T00:00:00Z",
    "Status": "Pending",
    "Title": "string"
  },
  "RecurringProfileId": 0,
  "ShouldSendReminders": true,
  "Status": "Draft",
  "Terms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Attachments|[[InvoiceUpdateAttachmentApiModel](#schemainvoiceupdateattachmentapimodel)]|false|none|List of invoice attachments|
|ClientId|integer(int32)|false|none|The client to whom this invoice is assigned|
|ClonedFromId|integer(int32)|false|none|Indicate from which invoice this invoice has been cloned from|
|CurrencyId|integer(int32)|false|none|Id of the currency for the invoice amounts|
|Duedate|string(date-time)|false|none|Indicates when the invoice will be proclamed as due|
|Id|integer(int32)|false|none|Invoice id|
|InvoiceCategoryId|integer(int32)|false|none|Hold the id of the invoice category|
|IssuedOn|string(date-time)|false|none|Indicates when the invoice was issued|
|Items|[[InvoiceUpdateItemApiModel](#schemainvoiceupdateitemapimodel)]|false|none|List of invoice items|
|Notes|string|false|none|Internal note regarding the invoice|
|Number|string|false|none|Unique invoice number|
|PaymentGateways|[[InvoiceGatewayApiModel](#schemainvoicegatewayapimodel)]|false|none|List of enabled payment gateways for this invoice|
|PoNumber|string|false|none|Unique number generated by the buyer|
|RecurringProfile|[InvoiceRecurringApiModel](#schemainvoicerecurringapimodel)|false|none|Definition of invoice recurring profile|
|RecurringProfileId|integer(int32)|false|none|Hold the id of the recurring profile|
|ShouldSendReminders|boolean|false|none|Should send email reminders to client?|
|Status|string|false|none|Indicate the status of the invoice (paid/unpaid/overdue)|
|Terms|string|false|none|Terms of agreement|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Draft|
|Status|Paid|
|Status|Unpaid|
|Status|Overdue|
|Status|Void|

<h2 id="tocS_InvoiceUpdateAttachmentApiModel">InvoiceUpdateAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceupdateattachmentapimodel"></a>
<a id="schema_InvoiceUpdateAttachmentApiModel"></a>
<a id="tocSinvoiceupdateattachmentapimodel"></a>
<a id="tocsinvoiceupdateattachmentapimodel"></a>

```json
{
  "Id": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of invoice attachment|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_InvoiceUpdateItemApiModel">InvoiceUpdateItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceupdateitemapimodel"></a>
<a id="schema_InvoiceUpdateItemApiModel"></a>
<a id="tocSinvoiceupdateitemapimodel"></a>
<a id="tocsinvoiceupdateitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "DiscountPercentage": 0,
  "Id": 0,
  "Quantity": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Amount per unit|
|Description|string|false|none|Additional description attached to the invoice item|
|DiscountPercentage|number(double)|false|none|Discount percentage for the overall amount|
|Id|integer(int32)|false|none|Id of invoice item|
|Quantity|number(double)|false|none|Quantity in total used for the work type|
|TaxId|integer(int32)|false|none|Tax applied on the item|
|TaxPercentage|number(double)|false|none|Task percentage. Ex: 18%|
|WorkTypeId|integer(int32)|false|none|Work type (Name of the service)|

<h2 id="tocS_InvoiceUriApiModel">InvoiceUriApiModel</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceuriapimodel"></a>
<a id="schema_InvoiceUriApiModel"></a>
<a id="tocSinvoiceuriapimodel"></a>
<a id="tocsinvoiceuriapimodel"></a>

```json
{
  "Link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Unique link to the invoice|

<h2 id="tocS_ListResult_EstimationDetailsApiModel_">ListResult_EstimationDetailsApiModel_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_estimationdetailsapimodel_"></a>
<a id="schema_ListResult_EstimationDetailsApiModel_"></a>
<a id="tocSlistresult_estimationdetailsapimodel_"></a>
<a id="tocslistresult_estimationdetailsapimodel_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "AdditionalEmails": [
          {
            "Email": "string"
          }
        ],
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "CreatedOn": "1970-01-01T00:00:00Z",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "Vat": "string"
      },
      "ClonedFromId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "DiscountAmount": 0,
      "ExpiresOn": "1970-01-01T00:00:00Z",
      "Id": 0,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "Number": "string",
      "PoNumber": "string",
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[EstimationDetailsApiModel](#schemaestimationdetailsapimodel)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_ListResult_InvoiceCategoryApiModel_">ListResult_InvoiceCategoryApiModel_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_invoicecategoryapimodel_"></a>
<a id="schema_ListResult_InvoiceCategoryApiModel_"></a>
<a id="tocSlistresult_invoicecategoryapimodel_"></a>
<a id="tocslistresult_invoicecategoryapimodel_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "Id": 0,
      "Name": "string"
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[InvoiceCategoryApiModel](#schemainvoicecategoryapimodel)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_ListResult_InvoiceDetailsApiModel_">ListResult_InvoiceDetailsApiModel_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_invoicedetailsapimodel_"></a>
<a id="schema_ListResult_InvoiceDetailsApiModel_"></a>
<a id="tocSlistresult_invoicedetailsapimodel_"></a>
<a id="tocslistresult_invoicedetailsapimodel_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "AdditionalEmails": [
          {
            "Email": "string"
          }
        ],
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "CreatedOn": "1970-01-01T00:00:00Z",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "Vat": "string"
      },
      "ClonedFromId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "DiscountAmount": 0,
      "Duedate": "1970-01-01T00:00:00Z",
      "EnablePartialPayments": true,
      "Id": 0,
      "InvoiceCategoryId": 0,
      "IssuedOn": "1970-01-01T00:00:00Z",
      "Notes": "string",
      "Number": "string",
      "PoNumber": "string",
      "RecurringProfile": {
        "DayOfMonth": 0,
        "DayOfWeek": "Sunday",
        "DueDateInDays": 0,
        "EndOfRecurrance": "1970-01-01T00:00:00Z",
        "Month": 0,
        "RecurrancePattern": "Daily",
        "RecurranceValue": 0,
        "StartOfRecurrance": "1970-01-01T00:00:00Z",
        "Status": "Pending",
        "Title": "string"
      },
      "RecurringProfileId": 0,
      "ShouldSendReminders": true,
      "Status": "Draft",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "Terms": "string",
      "TotalAmount": 0
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[InvoiceDetailsApiModel](#schemainvoicedetailsapimodel)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_ListResult_OrderDetailsApiModel_">ListResult_OrderDetailsApiModel_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_orderdetailsapimodel_"></a>
<a id="schema_ListResult_OrderDetailsApiModel_"></a>
<a id="tocSlistresult_orderdetailsapimodel_"></a>
<a id="tocslistresult_orderdetailsapimodel_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "AfterPaymentDescription": "string",
      "CouponCode": "string",
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "Description": "string",
      "DiscountAmount": 0,
      "Id": 0,
      "Name": "string",
      "Note": "string",
      "OrderBillingDetails": {
        "Address": "string",
        "CountryId": 0,
        "Email": "string",
        "Name": "string",
        "PhoneNumber": "string"
      },
      "OrderShippingDetails": {
        "Address": "string",
        "CountryId": 0,
        "Email": "string",
        "Name": "string",
        "PhoneNumber": "string"
      },
      "ProductId": 0,
      "Referral": "string",
      "ShippingAmount": 0,
      "ShippingDescription": "string",
      "Status": "PendingPayment",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TotalAmount": 0,
      "TotalWithShipping": 0,
      "WhatHappensNextDescription": "string"
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[OrderDetailsApiModel](#schemaorderdetailsapimodel)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_ListResult_PaymentLink_">ListResult_PaymentLink_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_paymentlink_"></a>
<a id="schema_ListResult_PaymentLink_"></a>
<a id="tocSlistresult_paymentlink_"></a>
<a id="tocslistresult_paymentlink_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "Client": {
        "Address": "string",
        "ClientCountryId": 0,
        "ClientCurrencyId": 0,
        "CompanyRegistrationNumber": "string",
        "DefaultDueDateInDays": 0,
        "Email": "string",
        "Id": 0,
        "Name": "string",
        "PhoneNumber": "string",
        "UiLanguageId": 0,
        "UserId": 0,
        "Vat": "string"
      },
      "ClientId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "DiscountAmount": 0,
      "Id": 0,
      "Invoice": {
        "AccessToken": "string",
        "Activities": [
          {
            "EstimationId": 0,
            "EstimationNumber": "string",
            "Id": 0,
            "InvoiceId": 0,
            "InvoiceNumber": "string",
            "Link": "string",
            "Message": "string",
            "OrderId": 0,
            "OrderNumber": "string",
            "Type": "Created",
            "UserId": 0
          }
        ],
        "Attachments": [
          {
            "Id": 0,
            "InvoiceId": 0,
            "Link": "string",
            "ObfuscatedFileName": "string",
            "OriginalFileName": "string",
            "Size": 0,
            "Type": "External"
          }
        ],
        "ClientId": 0,
        "ClonedFromId": 0,
        "CurrencyId": 0,
        "DiscountAmount": 0,
        "Duedate": "1970-01-01T00:00:00Z",
        "EnablePartialPayments": true,
        "EstimationId": 0,
        "Id": 0,
        "InvoiceCategoryId": 0,
        "IsDigitallySigned": true,
        "IssuedOn": "1970-01-01T00:00:00Z",
        "Items": [
          {
            "Cost": 0,
            "Description": "string",
            "DiscountAmount": 0,
            "DiscountPercentage": 0,
            "Id": 0,
            "InvoiceId": 0,
            "Quantity": 0,
            "SubTotalAmount": 0,
            "TaxAmount": 0,
            "TaxId": 0,
            "TaxPercentage": 0,
            "TotalAmount": 0,
            "WorkTypeId": 0
          }
        ],
        "Notes": "string",
        "Number": "string",
        "OrderId": 0,
        "PaymentGateways": [
          {
            "Id": 0,
            "Name": "string"
          }
        ],
        "PaymentLinkId": 0,
        "Payments": [
          {}
        ],
        "PoNumber": "string",
        "RecurringProfileId": 0,
        "ShouldSendReminders": true,
        "Status": "Draft",
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "Terms": "string",
        "TotalAmount": 0,
        "UserId": 0
      },
      "Items": [
        {
          "Cost": 0,
          "DiscountAmount": 0,
          "DiscountPercentage": 0,
          "Id": 0,
          "PaymentLinkId": 0,
          "Quantity": 0,
          "SubTotalAmount": 0,
          "Tax": {
            "Id": 0,
            "Name": "string",
            "Percentage": 0,
            "UserId": 0
          },
          "TaxAmount": 0,
          "TaxId": 0,
          "TaxPercentage": 0,
          "TotalAmount": 0,
          "WorkType": {
            "Id": 0,
            "Title": "string",
            "UserId": 0
          },
          "WorkTypeId": 0
        }
      ],
      "Number": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TotalAmount": 0,
      "User": {
        "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
        "Email": "string",
        "ExternalConnections": [
          {
            "AccessToken": "string",
            "AccessTokenSecret": "string",
            "Data": "string",
            "ExpiresOn": "1970-01-01T00:00:00Z",
            "ExternalUserId": "string",
            "ExternalUsername": "string",
            "Id": 0,
            "Provider": "string",
            "UserId": 0
          }
        ],
        "HasBeenOnboarded": true,
        "Id": 0,
        "IsLocked": true,
        "IsVerified": true,
        "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
        "LastSeenOn": "1970-01-01T00:00:00Z",
        "Name": "string",
        "Password": "string",
        "PasswordSalt": "string",
        "ReferralPath": "string",
        "ReferredUsers": 0,
        "ReferrerKey": "string",
        "Settings": {
          "AccountantEmail": "string",
          "Address": "string",
          "ApiKey": "string",
          "ApiSecret": "string",
          "BackgroundImage": "string",
          "Bank": "string",
          "BankAccount": "string",
          "Cname": "string",
          "CompanyRegistrationNumber": "string",
          "Country": {
            "Id": 0,
            "Name": "string",
            "Value": "string"
          },
          "CountryId": 0,
          "Currency": {
            "Code": "string",
            "Id": 0,
            "Name": "string",
            "Symbol": "string",
            "Value": "string"
          },
          "CurrencyId": 0,
          "CurrencySymbol": "string",
          "DefaultDateFormat": "string",
          "DefaultDueDateInDays": 0,
          "DoNotTrack": true,
          "EnableClientPortal": true,
          "EnablePredictiveInvoicing": true,
          "EnableRecurringInvoicing": true,
          "HasInvoiceLogo": true,
          "Iban": "string",
          "Id": 0,
          "InvoiceTemplate": "Default",
          "InvoiceTemplateColorHex": "string",
          "PhoneNumber": "string",
          "Profession": "Other",
          "ReceiveSmsNotifications": true,
          "ReferralProgram": "Enabled",
          "StoreCheckoutFields": "ShowMinimumRequiredFields",
          "StoreColorHex": "string",
          "StoreCurrency": {
            "Code": "string",
            "Id": 0,
            "Name": "string",
            "Symbol": "string",
            "Value": "string"
          },
          "StoreCurrencyId": 0,
          "StoreCustomJavaScript": "string",
          "StoreDescription": "string",
          "StoreEmail": "string",
          "StoreLanguage": {
            "Id": 0,
            "Name": "string",
            "UiCulture": "string"
          },
          "StoreLanguageId": 0,
          "StoreName": "string",
          "StorePurchaseEmailMessage": "string",
          "StorePurchaseThankYouMessage": "string",
          "StoreTextColorHex": "string",
          "StoreUrl": "string",
          "SubscribeToProductEmails": true,
          "Swift": "string",
          "Terms": "string",
          "UserId": 0,
          "UserSignature": "string",
          "VatNumber": "string",
          "YearsOfExperience": 0
        },
        "Status": "Normal",
        "SubscriptionPlan": {
          "CancellatedOn": "1970-01-01T00:00:00Z",
          "CouponCode": "string",
          "CurrencyCode": "string",
          "ExternalIdentifier": "string",
          "Features": [
            "Api"
          ],
          "HasDuePayment": true,
          "HasDuePaymentSince": "1970-01-01T00:00:00Z",
          "Id": 0,
          "Identifier": "string",
          "IsActive": true,
          "IsLifetime": true,
          "LastPaymentOn": "1970-01-01T00:00:00Z",
          "MaxClients": 0,
          "Name": "string",
          "OnHold": true,
          "OrderIdentifier": "string",
          "Price": 0,
          "Recurrence": "Monthly",
          "SaleId": 0,
          "Status": "ActiveTrial",
          "SystemCancelationReason": "FailToCaptureFee",
          "TrialEndsOn": "1970-01-01T00:00:00Z",
          "TrialNumberOfDays": 0,
          "TrialStartsOn": "1970-01-01T00:00:00Z",
          "UserId": 0,
          "Version": 0
        },
        "Type": "Anonymous",
        "Username": "string",
        "VerifiedOn": "1970-01-01T00:00:00Z",
        "YearsOfExperience": "One"
      },
      "UserId": 0
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[PaymentLink](#schemapaymentlink)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_ListResult_ProductDetailsApiModel_">ListResult_ProductDetailsApiModel_</h2>
<!-- backwards compatibility -->
<a id="schemalistresult_productdetailsapimodel_"></a>
<a id="schema_ListResult_ProductDetailsApiModel_"></a>
<a id="tocSlistresult_productdetailsapimodel_"></a>
<a id="tocslistresult_productdetailsapimodel_"></a>

```json
{
  "Count": 0,
  "ErrorMessages": [
    {
      "Code": "string",
      "FaultMessage": "string",
      "Group": "string",
      "UserVisibleMessage": "string"
    }
  ],
  "IsFaulted": true,
  "Result": [
    {
      "AccessToken": "string",
      "AfterPaymentDescription": "string",
      "ButtonCallToAction": "string",
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "Description": "string",
      "Id": 0,
      "IsFeatured": true,
      "Name": "string",
      "ShippingAmount": 0,
      "ShippingDescription": "string",
      "Status": "Active",
      "SubTotalAmount": 0,
      "TotalAmount": 0,
      "TotalWithShipping": 0,
      "WhatHappensNextDescription": "string"
    }
  ],
  "TotalCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Count|integer(int32)|false|read-only|none|
|ErrorMessages|[[IErrorInfo](#schemaierrorinfo)]|false|none|none|
|IsFaulted|boolean|false|none|none|
|Result|[[ProductDetailsApiModel](#schemaproductdetailsapimodel)]|false|none|none|
|TotalCount|integer(int32)|false|none|none|

<h2 id="tocS_OrderAttachmentApiModel">OrderAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderattachmentapimodel"></a>
<a id="schema_OrderAttachmentApiModel"></a>
<a id="tocSorderattachmentapimodel"></a>
<a id="tocsorderattachmentapimodel"></a>

```json
{
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_OrderBillingDetailsApiModel">OrderBillingDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderbillingdetailsapimodel"></a>
<a id="schema_OrderBillingDetailsApiModel"></a>
<a id="tocSorderbillingdetailsapimodel"></a>
<a id="tocsorderbillingdetailsapimodel"></a>

```json
{
  "Address": "string",
  "CountryId": 0,
  "Email": "string",
  "Name": "string",
  "PhoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string|false|none|Client street and number|
|CountryId|integer(int32)|false|none|Client country id|
|Email|string|false|none|Client email|
|Name|string|false|none|Client name|
|PhoneNumber|string|false|none|Client phone number|

<h2 id="tocS_OrderCreateApiModel">OrderCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaordercreateapimodel"></a>
<a id="schema_OrderCreateApiModel"></a>
<a id="tocSordercreateapimodel"></a>
<a id="tocsordercreateapimodel"></a>

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "CouponCode": "string",
  "CurrencyId": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "ProductItemId": 0,
      "Quantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "Note": "string",
  "OrderBillingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "OrderShippingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "ProductId": 0,
  "Referral": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "PendingPayment",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterPaymentDescription|string|false|none|After payment description|
|Attachments|[[OrderAttachmentApiModel](#schemaorderattachmentapimodel)]|false|none|List of Order attachments|
|CouponCode|string|false|none|Coupon to apply in order to get the discount|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|DiscountAmount|number(double)|false|none|Discount amount|
|Items|[[OrderItemApiModel](#schemaorderitemapimodel)]|false|none|List of Order items|
|Name|string|false|none|Product alias|
|Note|string|false|none|Customer note to seller|
|OrderBillingDetails|[OrderBillingDetailsApiModel](#schemaorderbillingdetailsapimodel)|false|none|none|
|OrderShippingDetails|[OrderShippingDetailsApiModel](#schemaordershippingdetailsapimodel)|false|none|none|
|ProductId|integer(int32)|false|none|Product id|
|Referral|string|false|none|Represent the referral for this order|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Order status|
|SubTotalAmount|number(double)|false|none|Sub total amount|
|TaxAmount|number(double)|false|none|Tax amount|
|TotalAmount|number(double)|false|none|Total amount|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|PendingPayment|
|Status|Processing|
|Status|Shipped|
|Status|Completed|
|Status|OnHold|
|Status|Cancelled|
|Status|Refunded|
|Status|Failed|

<h2 id="tocS_OrderDeleteApiModel">OrderDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderdeleteapimodel"></a>
<a id="schema_OrderDeleteApiModel"></a>
<a id="tocSorderdeleteapimodel"></a>
<a id="tocsorderdeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of order to be deleted|

<h2 id="tocS_OrderDetailsApiModel">OrderDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetailsapimodel"></a>
<a id="schema_OrderDetailsApiModel"></a>
<a id="tocSorderdetailsapimodel"></a>
<a id="tocsorderdetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "CouponCode": "string",
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "Id": 0,
  "Name": "string",
  "Note": "string",
  "OrderBillingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "OrderShippingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "ProductId": 0,
  "Referral": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "PendingPayment",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Product short link|
|AfterPaymentDescription|string|false|none|After payment description|
|CouponCode|string|false|none|Coupon to apply in order to get the discount|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|DiscountAmount|number(double)|false|none|Discount amount|
|Id|integer(int32)|false|none|Order id|
|Name|string|false|none|Product alias|
|Note|string|false|none|Customer note to seller|
|OrderBillingDetails|[OrderBillingDetailsApiModel](#schemaorderbillingdetailsapimodel)|false|none|none|
|OrderShippingDetails|[OrderShippingDetailsApiModel](#schemaordershippingdetailsapimodel)|false|none|none|
|ProductId|integer(int32)|false|none|Product id|
|Referral|string|false|none|Represent the referral for this order|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Order status|
|SubTotalAmount|number(double)|false|none|Sub total amount|
|TaxAmount|number(double)|false|none|Tax amount|
|TotalAmount|number(double)|false|none|Total amount|
|TotalWithShipping|number(double)|false|none|Total amount with shipping|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|PendingPayment|
|Status|Processing|
|Status|Shipped|
|Status|Completed|
|Status|OnHold|
|Status|Cancelled|
|Status|Refunded|
|Status|Failed|

<h2 id="tocS_OrderFullDetailsApiModel">OrderFullDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderfulldetailsapimodel"></a>
<a id="schema_OrderFullDetailsApiModel"></a>
<a id="tocSorderfulldetailsapimodel"></a>
<a id="tocsorderfulldetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "CouponCode": "string",
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "DiscountAmount": 0,
  "Id": 0,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "ProductItemId": 0,
      "Quantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "Note": "string",
  "OrderBillingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "OrderShippingDetails": {
    "Address": "string",
    "CountryId": 0,
    "Email": "string",
    "Name": "string",
    "PhoneNumber": "string"
  },
  "ProductId": 0,
  "Referral": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "PendingPayment",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Product short link|
|AfterPaymentDescription|string|false|none|After payment description|
|Attachments|[[OrderAttachmentApiModel](#schemaorderattachmentapimodel)]|false|none|List of Order attachments|
|CouponCode|string|false|none|Coupon to apply in order to get the discount|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|DiscountAmount|number(double)|false|none|Discount amount|
|Id|integer(int32)|false|none|Order id|
|Items|[[OrderItemApiModel](#schemaorderitemapimodel)]|false|none|List of Order items|
|Name|string|false|none|Product alias|
|Note|string|false|none|Customer note to seller|
|OrderBillingDetails|[OrderBillingDetailsApiModel](#schemaorderbillingdetailsapimodel)|false|none|none|
|OrderShippingDetails|[OrderShippingDetailsApiModel](#schemaordershippingdetailsapimodel)|false|none|none|
|ProductId|integer(int32)|false|none|Product id|
|Referral|string|false|none|Represent the referral for this order|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Order status|
|SubTotalAmount|number(double)|false|none|Sub total amount|
|TaxAmount|number(double)|false|none|Tax amount|
|TotalAmount|number(double)|false|none|Total amount|
|TotalWithShipping|number(double)|false|none|Total amount with shipping|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|PendingPayment|
|Status|Processing|
|Status|Shipped|
|Status|Completed|
|Status|OnHold|
|Status|Cancelled|
|Status|Refunded|
|Status|Failed|

<h2 id="tocS_OrderItemApiModel">OrderItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaorderitemapimodel"></a>
<a id="schema_OrderItemApiModel"></a>
<a id="tocSorderitemapimodel"></a>
<a id="tocsorderitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "ProductItemId": 0,
  "Quantity": 0,
  "ReferenceId": "string",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Work item cost|
|Description|string|false|none|General description|
|ProductItemId|integer(int32)|false|none|Foreign key product item id|
|Quantity|number(double)|false|none|Work item quantity|
|ReferenceId|string|false|none|Order SKU|
|SubTotalAmount|number(double)|false|none|Subtotal amount of product|
|TaxAmount|number(double)|false|none|Tax amount|
|TaxId|integer(int32)|false|none|Foreign key Tax id|
|TaxPercentage|number(double)|false|none|Tax percentage|
|TotalAmount|number(double)|false|none|Total amount of product|
|WorkTypeId|integer(int32)|false|none|Foreign key work type id|

<h2 id="tocS_OrderShippingDetailsApiModel">OrderShippingDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaordershippingdetailsapimodel"></a>
<a id="schema_OrderShippingDetailsApiModel"></a>
<a id="tocSordershippingdetailsapimodel"></a>
<a id="tocsordershippingdetailsapimodel"></a>

```json
{
  "Address": "string",
  "CountryId": 0,
  "Email": "string",
  "Name": "string",
  "PhoneNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Address|string|false|none|Client street and number|
|CountryId|integer(int32)|false|none|Client country id|
|Email|string|false|none|Client email|
|Name|string|false|none|Client name|
|PhoneNumber|string|false|none|Client phone number|

<h2 id="tocS_Payment">Payment</h2>
<!-- backwards compatibility -->
<a id="schemapayment"></a>
<a id="schema_Payment"></a>
<a id="tocSpayment"></a>
<a id="tocspayment"></a>

```json
{
  "Amount": 0,
  "Id": 0,
  "Invoice": {
    "AccessToken": "string",
    "Activities": [
      {
        "EstimationId": 0,
        "EstimationNumber": "string",
        "Id": 0,
        "InvoiceId": 0,
        "InvoiceNumber": "string",
        "Link": "string",
        "Message": "string",
        "OrderId": 0,
        "OrderNumber": "string",
        "Type": "Created",
        "UserId": 0
      }
    ],
    "Attachments": [
      {
        "Id": 0,
        "InvoiceId": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "EnablePartialPayments": true,
    "EstimationId": 0,
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IsDigitallySigned": true,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "InvoiceId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "OrderId": 0,
    "PaymentGateways": [
      {
        "Id": 0,
        "Name": "string"
      }
    ],
    "PaymentLinkId": 0,
    "Payments": [
      {}
    ],
    "PoNumber": "string",
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "Terms": "string",
    "TotalAmount": 0,
    "UserId": 0
  },
  "InvoiceId": 0,
  "IsAutomatic": true,
  "Note": "string",
  "PaidOn": "1970-01-01T00:00:00Z",
  "ReferenceId": "string",
  "Type": "Other"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|number(double)|false|none|none|
|Id|integer(int32)|false|none|none|
|Invoice|[Invoice](#schemainvoice)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|IsAutomatic|boolean|false|none|none|
|Note|string|false|none|none|
|PaidOn|string(date-time)|false|none|none|
|ReferenceId|string|false|none|none|
|Type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Other|
|Type|Paypal|
|Type|Stripe|
|Type|Payoneer|
|Type|Bank|
|Type|Cash|
|Type|Cheque|
|Type|Ach|
|Type|Sepa|
|Type|Square|
|Type|KlikAndPay|
|Type|Razorpay|
|Type|Wepay|
|Type|Halkbank|
|Type|TwoCheckout|
|Type|PaymentWall|
|Type|BamboraEU|
|Type|BamboraNA|
|Type|Nlb|
|Type|AuthorizeNet|
|Type|Braintree|

<h2 id="tocS_PaymentGateway">PaymentGateway</h2>
<!-- backwards compatibility -->
<a id="schemapaymentgateway"></a>
<a id="schema_PaymentGateway"></a>
<a id="tocSpaymentgateway"></a>
<a id="tocspaymentgateway"></a>

```json
{
  "CanDisconnect": true,
  "ClientImportUri": "string",
  "ConnectionType": "OAuth",
  "ExternalConnectionId": 0,
  "Fields": [
    {
      "IsConfigurable": true,
      "Name": "string",
      "Type": "Input",
      "Value": "string",
      "Values": [
        "string"
      ]
    }
  ],
  "IsConnected": true,
  "IsEnabled": true,
  "MaximumAmount": 0,
  "MinimumAmount": 0,
  "Name": "string",
  "OAuthUri": "string",
  "RefundUri": "string",
  "SupportedCurrencies": [
    {
      "Code": "string",
      "Id": 0,
      "Name": "string",
      "Symbol": "string",
      "Value": "string"
    }
  ],
  "SupportsClientsImport": true,
  "SupportsInstantCheckout": true,
  "SupportsRefund": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CanDisconnect|boolean|false|none|none|
|ClientImportUri|string|false|none|none|
|ConnectionType|string|false|none|none|
|ExternalConnectionId|integer(int32)|false|none|none|
|Fields|[[PaymentGatewayInputField](#schemapaymentgatewayinputfield)]|false|none|none|
|IsConnected|boolean|false|none|none|
|IsEnabled|boolean|false|none|none|
|MaximumAmount|number(double)|false|none|none|
|MinimumAmount|number(double)|false|none|none|
|Name|string|false|none|none|
|OAuthUri|string|false|none|none|
|RefundUri|string|false|none|none|
|SupportedCurrencies|[[Currency](#schemacurrency)]|false|none|none|
|SupportsClientsImport|boolean|false|none|none|
|SupportsInstantCheckout|boolean|false|none|none|
|SupportsRefund|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|ConnectionType|OAuth|
|ConnectionType|InputFields|
|ConnectionType|Dropdown|

<h2 id="tocS_PaymentGatewayDetailsApiModel">PaymentGatewayDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemapaymentgatewaydetailsapimodel"></a>
<a id="schema_PaymentGatewayDetailsApiModel"></a>
<a id="tocSpaymentgatewaydetailsapimodel"></a>
<a id="tocspaymentgatewaydetailsapimodel"></a>

```json
{
  "Name": "string",
  "SupportedCurrencies": [
    {
      "Name": "string",
      "Value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the payment gateway|
|SupportedCurrencies|[[CurrencyApiModel](#schemacurrencyapimodel)]|false|none|List of supported currencies.|

<h2 id="tocS_PaymentGatewayForInvoice">PaymentGatewayForInvoice</h2>
<!-- backwards compatibility -->
<a id="schemapaymentgatewayforinvoice"></a>
<a id="schema_PaymentGatewayForInvoice"></a>
<a id="tocSpaymentgatewayforinvoice"></a>
<a id="tocspaymentgatewayforinvoice"></a>

```json
{
  "Id": 0,
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|

<h2 id="tocS_PaymentGatewayInputField">PaymentGatewayInputField</h2>
<!-- backwards compatibility -->
<a id="schemapaymentgatewayinputfield"></a>
<a id="schema_PaymentGatewayInputField"></a>
<a id="tocSpaymentgatewayinputfield"></a>
<a id="tocspaymentgatewayinputfield"></a>

```json
{
  "IsConfigurable": true,
  "Name": "string",
  "Type": "Input",
  "Value": "string",
  "Values": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|IsConfigurable|boolean|false|none|none|
|Name|string|false|none|none|
|Type|string|false|none|none|
|Value|string|false|none|none|
|Values|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|Input|
|Type|Dropdown|

<h2 id="tocS_PaymentLink">PaymentLink</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlink"></a>
<a id="schema_PaymentLink"></a>
<a id="tocSpaymentlink"></a>
<a id="tocspaymentlink"></a>

```json
{
  "AccessToken": "string",
  "Client": {
    "Address": "string",
    "ClientCountryId": 0,
    "ClientCurrencyId": 0,
    "CompanyRegistrationNumber": "string",
    "DefaultDueDateInDays": 0,
    "Email": "string",
    "Id": 0,
    "Name": "string",
    "PhoneNumber": "string",
    "UiLanguageId": 0,
    "UserId": 0,
    "Vat": "string"
  },
  "ClientId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "DiscountAmount": 0,
  "Id": 0,
  "Invoice": {
    "AccessToken": "string",
    "Activities": [
      {
        "EstimationId": 0,
        "EstimationNumber": "string",
        "Id": 0,
        "InvoiceId": 0,
        "InvoiceNumber": "string",
        "Link": "string",
        "Message": "string",
        "OrderId": 0,
        "OrderNumber": "string",
        "Type": "Created",
        "UserId": 0
      }
    ],
    "Attachments": [
      {
        "Id": 0,
        "InvoiceId": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "EnablePartialPayments": true,
    "EstimationId": 0,
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IsDigitallySigned": true,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "InvoiceId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "OrderId": 0,
    "PaymentGateways": [
      {
        "Id": 0,
        "Name": "string"
      }
    ],
    "PaymentLinkId": 0,
    "Payments": [
      {}
    ],
    "PoNumber": "string",
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "Terms": "string",
    "TotalAmount": 0,
    "UserId": 0
  },
  "Items": [
    {
      "Cost": 0,
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "PaymentLinkId": 0,
      "Quantity": 0,
      "SubTotalAmount": 0,
      "Tax": {
        "Id": 0,
        "Name": "string",
        "Percentage": 0,
        "UserId": 0
      },
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkType": {
        "Id": 0,
        "Title": "string",
        "UserId": 0
      },
      "WorkTypeId": 0
    }
  ],
  "Number": "string",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TotalAmount": 0,
  "User": {
    "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "Email": "string",
    "ExternalConnections": [
      {
        "AccessToken": "string",
        "AccessTokenSecret": "string",
        "Data": "string",
        "ExpiresOn": "1970-01-01T00:00:00Z",
        "ExternalUserId": "string",
        "ExternalUsername": "string",
        "Id": 0,
        "Provider": "string",
        "UserId": 0
      }
    ],
    "HasBeenOnboarded": true,
    "Id": 0,
    "IsLocked": true,
    "IsVerified": true,
    "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
    "LastSeenOn": "1970-01-01T00:00:00Z",
    "Name": "string",
    "Password": "string",
    "PasswordSalt": "string",
    "ReferralPath": "string",
    "ReferredUsers": 0,
    "ReferrerKey": "string",
    "Settings": {
      "AccountantEmail": "string",
      "Address": "string",
      "ApiKey": "string",
      "ApiSecret": "string",
      "BackgroundImage": "string",
      "Bank": "string",
      "BankAccount": "string",
      "Cname": "string",
      "CompanyRegistrationNumber": "string",
      "Country": {
        "Id": 0,
        "Name": "string",
        "Value": "string"
      },
      "CountryId": 0,
      "Currency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "CurrencyId": 0,
      "CurrencySymbol": "string",
      "DefaultDateFormat": "string",
      "DefaultDueDateInDays": 0,
      "DoNotTrack": true,
      "EnableClientPortal": true,
      "EnablePredictiveInvoicing": true,
      "EnableRecurringInvoicing": true,
      "HasInvoiceLogo": true,
      "Iban": "string",
      "Id": 0,
      "InvoiceTemplate": "Default",
      "InvoiceTemplateColorHex": "string",
      "PhoneNumber": "string",
      "Profession": "Other",
      "ReceiveSmsNotifications": true,
      "ReferralProgram": "Enabled",
      "StoreCheckoutFields": "ShowMinimumRequiredFields",
      "StoreColorHex": "string",
      "StoreCurrency": {
        "Code": "string",
        "Id": 0,
        "Name": "string",
        "Symbol": "string",
        "Value": "string"
      },
      "StoreCurrencyId": 0,
      "StoreCustomJavaScript": "string",
      "StoreDescription": "string",
      "StoreEmail": "string",
      "StoreLanguage": {
        "Id": 0,
        "Name": "string",
        "UiCulture": "string"
      },
      "StoreLanguageId": 0,
      "StoreName": "string",
      "StorePurchaseEmailMessage": "string",
      "StorePurchaseThankYouMessage": "string",
      "StoreTextColorHex": "string",
      "StoreUrl": "string",
      "SubscribeToProductEmails": true,
      "Swift": "string",
      "Terms": "string",
      "UserId": 0,
      "UserSignature": "string",
      "VatNumber": "string",
      "YearsOfExperience": 0
    },
    "Status": "Normal",
    "SubscriptionPlan": {
      "CancellatedOn": "1970-01-01T00:00:00Z",
      "CouponCode": "string",
      "CurrencyCode": "string",
      "ExternalIdentifier": "string",
      "Features": [
        "Api"
      ],
      "HasDuePayment": true,
      "HasDuePaymentSince": "1970-01-01T00:00:00Z",
      "Id": 0,
      "Identifier": "string",
      "IsActive": true,
      "IsLifetime": true,
      "LastPaymentOn": "1970-01-01T00:00:00Z",
      "MaxClients": 0,
      "Name": "string",
      "OnHold": true,
      "OrderIdentifier": "string",
      "Price": 0,
      "Recurrence": "Monthly",
      "SaleId": 0,
      "Status": "ActiveTrial",
      "SystemCancelationReason": "FailToCaptureFee",
      "TrialEndsOn": "1970-01-01T00:00:00Z",
      "TrialNumberOfDays": 0,
      "TrialStartsOn": "1970-01-01T00:00:00Z",
      "UserId": 0,
      "Version": 0
    },
    "Type": "Anonymous",
    "Username": "string",
    "VerifiedOn": "1970-01-01T00:00:00Z",
    "YearsOfExperience": "One"
  },
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|none|
|Client|[Client](#schemaclient)|false|none|none|
|ClientId|integer(int32)|false|none|none|
|Currency|[Currency](#schemacurrency)|false|none|none|
|CurrencyId|integer(int32)|false|none|none|
|DiscountAmount|number(double)|false|none|none|
|Id|integer(int32)|false|none|none|
|Invoice|[Invoice](#schemainvoice)|false|none|none|
|Items|[[PaymentLinkItem](#schemapaymentlinkitem)]|false|none|none|
|Number|string|false|none|none|
|SubTotalAmount|number(double)|false|none|none|
|TaxAmount|number(double)|false|none|none|
|TotalAmount|number(double)|false|none|none|
|User|[User](#schemauser)|false|none|none|
|UserId|integer(int32)|false|none|none|

<h2 id="tocS_PaymentLinkItem">PaymentLinkItem</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkitem"></a>
<a id="schema_PaymentLinkItem"></a>
<a id="tocSpaymentlinkitem"></a>
<a id="tocspaymentlinkitem"></a>

```json
{
  "Cost": 0,
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "PaymentLinkId": 0,
  "Quantity": 0,
  "SubTotalAmount": 0,
  "Tax": {
    "Id": 0,
    "Name": "string",
    "Percentage": 0,
    "UserId": 0
  },
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkType": {
    "Id": 0,
    "Title": "string",
    "UserId": 0
  },
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|none|
|DiscountAmount|number(double)|false|none|none|
|DiscountPercentage|number(double)|false|none|none|
|Id|integer(int32)|false|none|none|
|PaymentLinkId|integer(int32)|false|none|none|
|Quantity|number(double)|false|none|none|
|SubTotalAmount|number(double)|false|none|none|
|Tax|[Tax](#schematax)|false|none|none|
|TaxAmount|number(double)|false|none|none|
|TaxId|integer(int32)|false|none|none|
|TaxPercentage|number(double)|false|none|none|
|TotalAmount|number(double)|false|none|none|
|WorkType|[WorkType](#schemaworktype)|false|none|none|
|WorkTypeId|integer(int32)|false|none|none|

<h2 id="tocS_PaymentLinkUriApiModel">PaymentLinkUriApiModel</h2>
<!-- backwards compatibility -->
<a id="schemapaymentlinkuriapimodel"></a>
<a id="schema_PaymentLinkUriApiModel"></a>
<a id="tocSpaymentlinkuriapimodel"></a>
<a id="tocspaymentlinkuriapimodel"></a>

```json
{
  "Link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Link|string|false|none|Unique link to the invoice|

<h2 id="tocS_ProductAttachmentApiModel">ProductAttachmentApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductattachmentapimodel"></a>
<a id="schema_ProductAttachmentApiModel"></a>
<a id="tocSproductattachmentapimodel"></a>
<a id="tocsproductattachmentapimodel"></a>

```json
{
  "Id": 0,
  "Link": "string",
  "ObfuscatedFileName": "string",
  "OriginalFileName": "string",
  "Size": 0,
  "Type": "External"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Product attachment id|
|Link|string|false|none|Link to the file|
|ObfuscatedFileName|string|false|none|Hashed file name to avoid url wildguessing|
|OriginalFileName|string|false|none|Name of the file|
|Size|integer(int64)|false|none|File size number in bytes|
|Type|string|false|none|Type of the link (Attached or external)|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|External|
|Type|Uploaded|

<h2 id="tocS_ProductCouponApiModel">ProductCouponApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductcouponapimodel"></a>
<a id="schema_ProductCouponApiModel"></a>
<a id="tocSproductcouponapimodel"></a>
<a id="tocsproductcouponapimodel"></a>

```json
{
  "Code": "string",
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "ValidUntil": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|false|none|Coupon to apply in order to get the discount|
|DiscountAmount|number(double)|false|none|Discount amount|
|DiscountPercentage|number(double)|false|none|Discount percentage|
|Id|integer(int32)|false|none|Product coupon id|
|ValidUntil|string(date-time)|false|none|Coupon expiration date|

<h2 id="tocS_ProductCreateApiModel">ProductCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductcreateapimodel"></a>
<a id="schema_ProductCreateApiModel"></a>
<a id="tocSproductcreateapimodel"></a>
<a id="tocsproductcreateapimodel"></a>

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterPaymentDescription|string|false|none|After payment description|
|Attachments|[[ProductAttachmentApiModel](#schemaproductattachmentapimodel)]|false|none|List of product attachments|
|ButtonCallToAction|string|false|none|Default button call to action<br>Ex: Buy now, subscribe, ...|
|Coupons|[[ProductCouponApiModel](#schemaproductcouponapimodel)]|false|none|List of product coupons|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|Discounts|[[ProductDiscountApiModel](#schemaproductdiscountapimodel)]|false|none|List of product discounts|
|IsFeatured|boolean|false|none|Indicate that the product is set as featured|
|Items|[[ProductItemApiModel](#schemaproductitemapimodel)]|false|none|List of product items|
|Name|string|false|none|Product alias|
|PaymentGateways|[[ProductGatewayApiModel](#schemaproductgatewayapimodel)]|false|none|List of enabled payment gateways for this product|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Product availability status|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Active|
|Status|NotAvailable|
|Status|Inactive|

<h2 id="tocS_ProductDeleteApiModel">ProductDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductdeleteapimodel"></a>
<a id="schema_ProductDeleteApiModel"></a>
<a id="tocSproductdeleteapimodel"></a>
<a id="tocsproductdeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of product to be deleted|

<h2 id="tocS_ProductDetailsApiModel">ProductDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetailsapimodel"></a>
<a id="schema_ProductDetailsApiModel"></a>
<a id="tocSproductdetailsapimodel"></a>
<a id="tocsproductdetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "ButtonCallToAction": "string",
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "Id": 0,
  "IsFeatured": true,
  "Name": "string",
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "SubTotalAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Product short link|
|AfterPaymentDescription|string|false|none|After payment description|
|ButtonCallToAction|string|false|none|Default button call to action<br>Ex: Buy now, subscribe, ...|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|Id|integer(int32)|false|none|Product id|
|IsFeatured|boolean|false|none|Indicate that the product is set as featured|
|Name|string|false|none|Product alias|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Product availability status|
|SubTotalAmount|number(double)|false|none|Subtotal amount of product|
|TotalAmount|number(double)|false|none|Total amount of product|
|TotalWithShipping|number(double)|false|none|Total amount of product with shipping|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Active|
|Status|NotAvailable|
|Status|Inactive|

<h2 id="tocS_ProductDiscountApiModel">ProductDiscountApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductdiscountapimodel"></a>
<a id="schema_ProductDiscountApiModel"></a>
<a id="tocSproductdiscountapimodel"></a>
<a id="tocsproductdiscountapimodel"></a>

```json
{
  "DiscountAmount": 0,
  "DiscountPercentage": 0,
  "Id": 0,
  "Name": "string",
  "ValidFrom": "1970-01-01T00:00:00Z",
  "ValidTo": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DiscountAmount|number(double)|false|none|Discount amount|
|DiscountPercentage|number(double)|false|none|Discount percentage|
|Id|integer(int32)|false|none|Product discount id|
|Name|string|false|none|Name|
|ValidFrom|string(date-time)|false|none|Discount start date|
|ValidTo|string(date-time)|false|none|Discount expiration date|

<h2 id="tocS_ProductFullDetailsApiModel">ProductFullDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductfulldetailsapimodel"></a>
<a id="schema_ProductFullDetailsApiModel"></a>
<a id="tocSproductfulldetailsapimodel"></a>
<a id="tocsproductfulldetailsapimodel"></a>

```json
{
  "AccessToken": "string",
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "Id": 0,
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "SubTotalAmount": 0,
  "TotalAmount": 0,
  "TotalWithShipping": 0,
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccessToken|string|false|none|Product short link|
|AfterPaymentDescription|string|false|none|After payment description|
|Attachments|[[ProductAttachmentApiModel](#schemaproductattachmentapimodel)]|false|none|List of product attachments|
|ButtonCallToAction|string|false|none|Default button call to action<br>Ex: Buy now, subscribe, ...|
|Coupons|[[ProductCouponApiModel](#schemaproductcouponapimodel)]|false|none|List of product coupons|
|Currency|[CurrencyDetailsApiModel](#schemacurrencydetailsapimodel)|false|none|none|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|Discounts|[[ProductDiscountApiModel](#schemaproductdiscountapimodel)]|false|none|List of product discounts|
|Id|integer(int32)|false|none|Product id|
|IsFeatured|boolean|false|none|Indicate that the product is set as featured|
|Items|[[ProductItemApiModel](#schemaproductitemapimodel)]|false|none|List of product items|
|Name|string|false|none|Product alias|
|PaymentGateways|[[ProductGatewayApiModel](#schemaproductgatewayapimodel)]|false|none|List of enabled payment gateways for this product|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Product availability status|
|SubTotalAmount|number(double)|false|none|Subtotal amount of product|
|TotalAmount|number(double)|false|none|Total amount of product|
|TotalWithShipping|number(double)|false|none|Total amount of product with shipping|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Active|
|Status|NotAvailable|
|Status|Inactive|

<h2 id="tocS_ProductGatewayApiModel">ProductGatewayApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductgatewayapimodel"></a>
<a id="schema_ProductGatewayApiModel"></a>
<a id="tocSproductgatewayapimodel"></a>
<a id="tocsproductgatewayapimodel"></a>

```json
{
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Payment gateway name|

<h2 id="tocS_ProductItemApiModel">ProductItemApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductitemapimodel"></a>
<a id="schema_ProductItemApiModel"></a>
<a id="tocSproductitemapimodel"></a>
<a id="tocsproductitemapimodel"></a>

```json
{
  "Cost": 0,
  "Description": "string",
  "Id": 0,
  "MinimumQuantity": 0,
  "ReferenceId": "string",
  "SubTotalAmount": 0,
  "TaxAmount": 0,
  "TaxId": 0,
  "TaxPercentage": 0,
  "TotalAmount": 0,
  "WorkTypeId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Cost|number(double)|false|none|Work item cost|
|Description|string|false|none|General description|
|Id|integer(int32)|false|none|Product item id|
|MinimumQuantity|number(double)|false|none|Minimum required quantity in order to buy a work item|
|ReferenceId|string|false|none|Product SKU|
|SubTotalAmount|number(double)|false|none|Subtotal amount of product|
|TaxAmount|number(double)|false|none|Tax amount|
|TaxId|integer(int32)|false|none|Foreign key Tax id|
|TaxPercentage|number(double)|false|none|Tax percentage|
|TotalAmount|number(double)|false|none|Total amount of product|
|WorkTypeId|integer(int32)|false|none|Foreign key work type id|

<h2 id="tocS_ProductUpdateApiModel">ProductUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaproductupdateapimodel"></a>
<a id="schema_ProductUpdateApiModel"></a>
<a id="tocSproductupdateapimodel"></a>
<a id="tocsproductupdateapimodel"></a>

```json
{
  "AfterPaymentDescription": "string",
  "Attachments": [
    {
      "Id": 0,
      "Link": "string",
      "ObfuscatedFileName": "string",
      "OriginalFileName": "string",
      "Size": 0,
      "Type": "External"
    }
  ],
  "ButtonCallToAction": "string",
  "Coupons": [
    {
      "Code": "string",
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "ValidUntil": "1970-01-01T00:00:00Z"
    }
  ],
  "CurrencyId": 0,
  "Description": "string",
  "Discounts": [
    {
      "DiscountAmount": 0,
      "DiscountPercentage": 0,
      "Id": 0,
      "Name": "string",
      "ValidFrom": "1970-01-01T00:00:00Z",
      "ValidTo": "1970-01-01T00:00:00Z"
    }
  ],
  "Id": 0,
  "IsFeatured": true,
  "Items": [
    {
      "Cost": 0,
      "Description": "string",
      "Id": 0,
      "MinimumQuantity": 0,
      "ReferenceId": "string",
      "SubTotalAmount": 0,
      "TaxAmount": 0,
      "TaxId": 0,
      "TaxPercentage": 0,
      "TotalAmount": 0,
      "WorkTypeId": 0
    }
  ],
  "Name": "string",
  "PaymentGateways": [
    {
      "Name": "string"
    }
  ],
  "ShippingAmount": 0,
  "ShippingDescription": "string",
  "Status": "Active",
  "WhatHappensNextDescription": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AfterPaymentDescription|string|false|none|After payment description|
|Attachments|[[ProductAttachmentApiModel](#schemaproductattachmentapimodel)]|false|none|List of product attachments|
|ButtonCallToAction|string|false|none|Default button call to action<br>Ex: Buy now, subscribe, ...|
|Coupons|[[ProductCouponApiModel](#schemaproductcouponapimodel)]|false|none|List of product coupons|
|CurrencyId|integer(int32)|false|none|Foreign key Currency|
|Description|string|false|none|Product description|
|Discounts|[[ProductDiscountApiModel](#schemaproductdiscountapimodel)]|false|none|List of product discounts|
|Id|integer(int32)|false|none|Product id|
|IsFeatured|boolean|false|none|Indicate that the product is set as featured|
|Items|[[ProductItemApiModel](#schemaproductitemapimodel)]|false|none|List of product items|
|Name|string|false|none|Product alias|
|PaymentGateways|[[ProductGatewayApiModel](#schemaproductgatewayapimodel)]|false|none|List of enabled payment gateways for this product|
|ShippingAmount|number(double)|false|none|Cost for shipping the product|
|ShippingDescription|string|false|none|Client instructions for shipping|
|Status|string|false|none|Product availability status|
|WhatHappensNextDescription|string|false|none|What happens next description|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Active|
|Status|NotAvailable|
|Status|Inactive|

<h2 id="tocS_QueryOptions">QueryOptions</h2>
<!-- backwards compatibility -->
<a id="schemaqueryoptions"></a>
<a id="schema_QueryOptions"></a>
<a id="tocSqueryoptions"></a>
<a id="tocsqueryoptions"></a>

```json
{
  "Page": 0,
  "PageSize": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Page|integer(int32)|false|none|none|
|PageSize|integer(int32)|false|none|none|

<h2 id="tocS_QueuedInvoice">QueuedInvoice</h2>
<!-- backwards compatibility -->
<a id="schemaqueuedinvoice"></a>
<a id="schema_QueuedInvoice"></a>
<a id="tocSqueuedinvoice"></a>
<a id="tocsqueuedinvoice"></a>

```json
{
  "ClonedFromId": 0,
  "Id": 0,
  "Invoice": {
    "AccessToken": "string",
    "Activities": [
      {
        "EstimationId": 0,
        "EstimationNumber": "string",
        "Id": 0,
        "InvoiceId": 0,
        "InvoiceNumber": "string",
        "Link": "string",
        "Message": "string",
        "OrderId": 0,
        "OrderNumber": "string",
        "Type": "Created",
        "UserId": 0
      }
    ],
    "Attachments": [
      {
        "Id": 0,
        "InvoiceId": 0,
        "Link": "string",
        "ObfuscatedFileName": "string",
        "OriginalFileName": "string",
        "Size": 0,
        "Type": "External"
      }
    ],
    "ClientId": 0,
    "ClonedFromId": 0,
    "CurrencyId": 0,
    "DiscountAmount": 0,
    "Duedate": "1970-01-01T00:00:00Z",
    "EnablePartialPayments": true,
    "EstimationId": 0,
    "Id": 0,
    "InvoiceCategoryId": 0,
    "IsDigitallySigned": true,
    "IssuedOn": "1970-01-01T00:00:00Z",
    "Items": [
      {
        "Cost": 0,
        "Description": "string",
        "DiscountAmount": 0,
        "DiscountPercentage": 0,
        "Id": 0,
        "InvoiceId": 0,
        "Quantity": 0,
        "SubTotalAmount": 0,
        "TaxAmount": 0,
        "TaxId": 0,
        "TaxPercentage": 0,
        "TotalAmount": 0,
        "WorkTypeId": 0
      }
    ],
    "Notes": "string",
    "Number": "string",
    "OrderId": 0,
    "PaymentGateways": [
      {
        "Id": 0,
        "Name": "string"
      }
    ],
    "PaymentLinkId": 0,
    "Payments": [
      {}
    ],
    "PoNumber": "string",
    "RecurringProfileId": 0,
    "ShouldSendReminders": true,
    "Status": "Draft",
    "SubTotalAmount": 0,
    "TaxAmount": 0,
    "Terms": "string",
    "TotalAmount": 0,
    "UserId": 0
  },
  "InvoiceId": 0,
  "RecurringProfileId": 0,
  "ScheduledFor": "1970-01-01T00:00:00Z",
  "Status": "Pending",
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ClonedFromId|integer(int32)|false|none|none|
|Id|integer(int32)|false|none|none|
|Invoice|[Invoice](#schemainvoice)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|RecurringProfileId|integer(int32)|false|none|none|
|ScheduledFor|string(date-time)|false|none|none|
|Status|string|false|none|none|
|UserId|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Pending|
|Status|Cancelled|
|Status|Failed|
|Status|Processed|

<h2 id="tocS_RecurringProfile">RecurringProfile</h2>
<!-- backwards compatibility -->
<a id="schemarecurringprofile"></a>
<a id="schema_RecurringProfile"></a>
<a id="tocSrecurringprofile"></a>
<a id="tocsrecurringprofile"></a>

```json
{
  "DayOfMonth": 0,
  "DayOfWeek": "Sunday",
  "DueDateInDays": 0,
  "EndOfRecurrance": "1970-01-01T00:00:00Z",
  "Id": 0,
  "InvoiceId": 0,
  "Month": 0,
  "RecurrancePattern": "Daily",
  "RecurranceValue": 0,
  "StartOfRecurrance": "1970-01-01T00:00:00Z",
  "Status": "Pending",
  "Title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|DayOfMonth|integer(int32)|false|none|none|
|DayOfWeek|string|false|none|none|
|DueDateInDays|integer(int32)|false|none|none|
|EndOfRecurrance|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceId|integer(int32)|false|none|none|
|Month|integer(int32)|false|none|none|
|RecurrancePattern|string|false|none|none|
|RecurranceValue|integer(int32)|false|none|none|
|StartOfRecurrance|string(date-time)|false|none|none|
|Status|string|false|none|none|
|Title|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|DayOfWeek|Sunday|
|DayOfWeek|Monday|
|DayOfWeek|Tuesday|
|DayOfWeek|Wednesday|
|DayOfWeek|Thursday|
|DayOfWeek|Friday|
|DayOfWeek|Saturday|
|RecurrancePattern|Daily|
|RecurrancePattern|Weekly|
|RecurrancePattern|Monthly|
|RecurrancePattern|Yearly|
|Status|Pending|
|Status|Active|
|Status|Cancelled|
|Status|Finished|

<h2 id="tocS_SearchRequest">SearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchrequest"></a>
<a id="schema_SearchRequest"></a>
<a id="tocSsearchrequest"></a>
<a id="tocssearchrequest"></a>

```json
{
  "Order": "None",
  "OrderBy": "string",
  "Page": 0,
  "PageSize": 0,
  "Query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Order|string|false|none|none|
|OrderBy|string|false|none|none|
|Page|integer(int32)|false|none|none|
|PageSize|integer(int32)|false|none|none|
|Query|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Order|None|
|Order|Asc|
|Order|Desc|

<h2 id="tocS_SendEstimationToClientApiModel">SendEstimationToClientApiModel</h2>
<!-- backwards compatibility -->
<a id="schemasendestimationtoclientapimodel"></a>
<a id="schema_SendEstimationToClientApiModel"></a>
<a id="tocSsendestimationtoclientapimodel"></a>
<a id="tocssendestimationtoclientapimodel"></a>

```json
{
  "AttachPdf": true,
  "EstimationId": 0,
  "Id": 0,
  "Message": "string",
  "SendToSelf": true,
  "Subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachPdf|boolean|false|none|Should attach pdf file|
|EstimationId|integer(int32)|false|none|Id of the estimation|
|Id|integer(int32)|false|none|Id of the estimation|
|Message|string|false|none|Message to be embedded in the email|
|SendToSelf|boolean|false|none|Should email copy be send to self|
|Subject|string|false|none|Subject for the email|

<h2 id="tocS_SendInvoiceToAccountantApiModel">SendInvoiceToAccountantApiModel</h2>
<!-- backwards compatibility -->
<a id="schemasendinvoicetoaccountantapimodel"></a>
<a id="schema_SendInvoiceToAccountantApiModel"></a>
<a id="tocSsendinvoicetoaccountantapimodel"></a>
<a id="tocssendinvoicetoaccountantapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of the invoice|

<h2 id="tocS_SendInvoiceToClientApiModel">SendInvoiceToClientApiModel</h2>
<!-- backwards compatibility -->
<a id="schemasendinvoicetoclientapimodel"></a>
<a id="schema_SendInvoiceToClientApiModel"></a>
<a id="tocSsendinvoicetoclientapimodel"></a>
<a id="tocssendinvoicetoclientapimodel"></a>

```json
{
  "AttachPdf": true,
  "Id": 0,
  "InvoiceId": 0,
  "Message": "string",
  "SendToSelf": true,
  "Subject": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AttachPdf|boolean|false|none|Should attach pdf file|
|Id|integer(int32)|false|none|Id of the invoice|
|InvoiceId|integer(int32)|false|none|Id of the invoice|
|Message|string|false|none|Message to be embedded in the email|
|SendToSelf|boolean|false|none|Should email copy be send to self|
|Subject|string|false|none|Subject for the email|

<h2 id="tocS_SubscriptionPlan">SubscriptionPlan</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionplan"></a>
<a id="schema_SubscriptionPlan"></a>
<a id="tocSsubscriptionplan"></a>
<a id="tocssubscriptionplan"></a>

```json
{
  "CancellatedOn": "1970-01-01T00:00:00Z",
  "CouponCode": "string",
  "CurrencyCode": "string",
  "ExternalIdentifier": "string",
  "Features": [
    "Api"
  ],
  "HasDuePayment": true,
  "HasDuePaymentSince": "1970-01-01T00:00:00Z",
  "Id": 0,
  "Identifier": "string",
  "IsActive": true,
  "IsLifetime": true,
  "LastPaymentOn": "1970-01-01T00:00:00Z",
  "MaxClients": 0,
  "Name": "string",
  "OnHold": true,
  "OrderIdentifier": "string",
  "Price": 0,
  "Recurrence": "Monthly",
  "SaleId": 0,
  "Status": "ActiveTrial",
  "SystemCancelationReason": "FailToCaptureFee",
  "TrialEndsOn": "1970-01-01T00:00:00Z",
  "TrialNumberOfDays": 0,
  "TrialStartsOn": "1970-01-01T00:00:00Z",
  "UserId": 0,
  "Version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CancellatedOn|string(date-time)|false|none|none|
|CouponCode|string|false|none|none|
|CurrencyCode|string|false|none|none|
|ExternalIdentifier|string|false|none|none|
|Features|[string]|false|none|none|
|HasDuePayment|boolean|false|none|none|
|HasDuePaymentSince|string(date-time)|false|none|none|
|Id|integer(int32)|false|none|none|
|Identifier|string|false|none|none|
|IsActive|boolean|false|none|none|
|IsLifetime|boolean|false|none|none|
|LastPaymentOn|string(date-time)|false|none|none|
|MaxClients|integer(int32)|false|none|none|
|Name|string|false|none|none|
|OnHold|boolean|false|none|none|
|OrderIdentifier|string|false|none|none|
|Price|number(double)|false|none|none|
|Recurrence|string|false|none|none|
|SaleId|integer(int64)|false|none|none|
|Status|string|false|none|none|
|SystemCancelationReason|string|false|none|none|
|TrialEndsOn|string(date-time)|false|none|none|
|TrialNumberOfDays|integer(int32)|false|none|none|
|TrialStartsOn|string(date-time)|false|none|none|
|UserId|integer(int32)|false|none|none|
|Version|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Features|Api|
|Features|Teams|
|Features|Clients|
|Features|Shop|
|Features|PaymentLinks|
|Features|Cname|
|Recurrence|Monthly|
|Recurrence|Yearly|
|Status|ActiveTrial|
|Status|ExpiredTrial|
|Status|Active|
|Status|Canceled|
|Status|Fraudlent|
|SystemCancelationReason|FailToCaptureFee|
|SystemCancelationReason|Fraud|

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "Percentage": 0,
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|
|Percentage|number(double)|false|none|none|
|UserId|integer(int32)|false|none|none|

<h2 id="tocS_TaxCreateApiModel">TaxCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemataxcreateapimodel"></a>
<a id="schema_TaxCreateApiModel"></a>
<a id="tocStaxcreateapimodel"></a>
<a id="tocstaxcreateapimodel"></a>

```json
{
  "Name": "string",
  "Percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name of the task|
|Percentage|number(double)|false|none|Task percentage. Ex: 18%|

<h2 id="tocS_TaxDeleteApiModel">TaxDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemataxdeleteapimodel"></a>
<a id="schema_TaxDeleteApiModel"></a>
<a id="tocStaxdeleteapimodel"></a>
<a id="tocstaxdeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of tax to be deleted|

<h2 id="tocS_TaxDetailsApiModel">TaxDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemataxdetailsapimodel"></a>
<a id="schema_TaxDetailsApiModel"></a>
<a id="tocStaxdetailsapimodel"></a>
<a id="tocstaxdetailsapimodel"></a>

```json
{
  "CreatedOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "Name": "string",
  "Percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedOn|string(date-time)|false|none|Date of creation|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the task|
|Percentage|number(double)|false|none|Task percentage. Ex: 18%|

<h2 id="tocS_TaxUpdateApiModel">TaxUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemataxupdateapimodel"></a>
<a id="schema_TaxUpdateApiModel"></a>
<a id="tocStaxupdateapimodel"></a>
<a id="tocstaxupdateapimodel"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "Percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the task|
|Percentage|number(double)|false|none|Task percentage. Ex: 18%|

<h2 id="tocS_UILanguageDetailsApiModel">UILanguageDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemauilanguagedetailsapimodel"></a>
<a id="schema_UILanguageDetailsApiModel"></a>
<a id="tocSuilanguagedetailsapimodel"></a>
<a id="tocsuilanguagedetailsapimodel"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "UiCulture": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Name|string|false|none|Name of the country|
|UiCulture|string|false|none|Ui culture options|

<h2 id="tocS_UiLanguage">UiLanguage</h2>
<!-- backwards compatibility -->
<a id="schemauilanguage"></a>
<a id="schema_UiLanguage"></a>
<a id="tocSuilanguage"></a>
<a id="tocsuilanguage"></a>

```json
{
  "Id": 0,
  "Name": "string",
  "UiCulture": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|Name|string|false|none|none|
|UiCulture|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "ActionNotificationsLastReadOn": "1970-01-01T00:00:00Z",
  "Email": "string",
  "ExternalConnections": [
    {
      "AccessToken": "string",
      "AccessTokenSecret": "string",
      "Data": "string",
      "ExpiresOn": "1970-01-01T00:00:00Z",
      "ExternalUserId": "string",
      "ExternalUsername": "string",
      "Id": 0,
      "Provider": "string",
      "UserId": 0
    }
  ],
  "HasBeenOnboarded": true,
  "Id": 0,
  "IsLocked": true,
  "IsVerified": true,
  "KnowledgeNotificationsLastReadOn": "1970-01-01T00:00:00Z",
  "LastSeenOn": "1970-01-01T00:00:00Z",
  "Name": "string",
  "Password": "string",
  "PasswordSalt": "string",
  "ReferralPath": "string",
  "ReferredUsers": 0,
  "ReferrerKey": "string",
  "Settings": {
    "AccountantEmail": "string",
    "Address": "string",
    "ApiKey": "string",
    "ApiSecret": "string",
    "BackgroundImage": "string",
    "Bank": "string",
    "BankAccount": "string",
    "Cname": "string",
    "CompanyRegistrationNumber": "string",
    "Country": {
      "Id": 0,
      "Name": "string",
      "Value": "string"
    },
    "CountryId": 0,
    "Currency": {
      "Code": "string",
      "Id": 0,
      "Name": "string",
      "Symbol": "string",
      "Value": "string"
    },
    "CurrencyId": 0,
    "CurrencySymbol": "string",
    "DefaultDateFormat": "string",
    "DefaultDueDateInDays": 0,
    "DoNotTrack": true,
    "EnableClientPortal": true,
    "EnablePredictiveInvoicing": true,
    "EnableRecurringInvoicing": true,
    "HasInvoiceLogo": true,
    "Iban": "string",
    "Id": 0,
    "InvoiceTemplate": "Default",
    "InvoiceTemplateColorHex": "string",
    "PhoneNumber": "string",
    "Profession": "Other",
    "ReceiveSmsNotifications": true,
    "ReferralProgram": "Enabled",
    "StoreCheckoutFields": "ShowMinimumRequiredFields",
    "StoreColorHex": "string",
    "StoreCurrency": {
      "Code": "string",
      "Id": 0,
      "Name": "string",
      "Symbol": "string",
      "Value": "string"
    },
    "StoreCurrencyId": 0,
    "StoreCustomJavaScript": "string",
    "StoreDescription": "string",
    "StoreEmail": "string",
    "StoreLanguage": {
      "Id": 0,
      "Name": "string",
      "UiCulture": "string"
    },
    "StoreLanguageId": 0,
    "StoreName": "string",
    "StorePurchaseEmailMessage": "string",
    "StorePurchaseThankYouMessage": "string",
    "StoreTextColorHex": "string",
    "StoreUrl": "string",
    "SubscribeToProductEmails": true,
    "Swift": "string",
    "Terms": "string",
    "UserId": 0,
    "UserSignature": "string",
    "VatNumber": "string",
    "YearsOfExperience": 0
  },
  "Status": "Normal",
  "SubscriptionPlan": {
    "CancellatedOn": "1970-01-01T00:00:00Z",
    "CouponCode": "string",
    "CurrencyCode": "string",
    "ExternalIdentifier": "string",
    "Features": [
      "Api"
    ],
    "HasDuePayment": true,
    "HasDuePaymentSince": "1970-01-01T00:00:00Z",
    "Id": 0,
    "Identifier": "string",
    "IsActive": true,
    "IsLifetime": true,
    "LastPaymentOn": "1970-01-01T00:00:00Z",
    "MaxClients": 0,
    "Name": "string",
    "OnHold": true,
    "OrderIdentifier": "string",
    "Price": 0,
    "Recurrence": "Monthly",
    "SaleId": 0,
    "Status": "ActiveTrial",
    "SystemCancelationReason": "FailToCaptureFee",
    "TrialEndsOn": "1970-01-01T00:00:00Z",
    "TrialNumberOfDays": 0,
    "TrialStartsOn": "1970-01-01T00:00:00Z",
    "UserId": 0,
    "Version": 0
  },
  "Type": "Anonymous",
  "Username": "string",
  "VerifiedOn": "1970-01-01T00:00:00Z",
  "YearsOfExperience": "One"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ActionNotificationsLastReadOn|string(date-time)|false|none|none|
|Email|string|false|none|none|
|ExternalConnections|[[ExternalConnection](#schemaexternalconnection)]|false|none|none|
|HasBeenOnboarded|boolean|false|none|none|
|Id|integer(int32)|false|none|none|
|IsLocked|boolean|false|none|none|
|IsVerified|boolean|false|none|none|
|KnowledgeNotificationsLastReadOn|string(date-time)|false|none|none|
|LastSeenOn|string(date-time)|false|none|none|
|Name|string|false|none|none|
|Password|string|false|none|none|
|PasswordSalt|string|false|none|none|
|ReferralPath|string|false|none|none|
|ReferredUsers|integer(int32)|false|none|none|
|ReferrerKey|string|false|none|none|
|Settings|[UserSettings](#schemausersettings)|false|none|none|
|Status|string|false|none|none|
|SubscriptionPlan|[SubscriptionPlan](#schemasubscriptionplan)|false|none|none|
|Type|string|false|none|none|
|Username|string|false|none|none|
|VerifiedOn|string(date-time)|false|none|none|
|YearsOfExperience|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Normal|
|Status|Fraudlent|
|Status|Locked|
|Type|Anonymous|
|Type|Customer|
|Type|SystemAdministrator|
|Type|Collaborator|
|YearsOfExperience|One|
|YearsOfExperience|OneToThree|
|YearsOfExperience|ThreeToFive|
|YearsOfExperience|SixPlus|

<h2 id="tocS_UserSettings">UserSettings</h2>
<!-- backwards compatibility -->
<a id="schemausersettings"></a>
<a id="schema_UserSettings"></a>
<a id="tocSusersettings"></a>
<a id="tocsusersettings"></a>

```json
{
  "AccountantEmail": "string",
  "Address": "string",
  "ApiKey": "string",
  "ApiSecret": "string",
  "BackgroundImage": "string",
  "Bank": "string",
  "BankAccount": "string",
  "Cname": "string",
  "CompanyRegistrationNumber": "string",
  "Country": {
    "Id": 0,
    "Name": "string",
    "Value": "string"
  },
  "CountryId": 0,
  "Currency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "CurrencyId": 0,
  "CurrencySymbol": "string",
  "DefaultDateFormat": "string",
  "DefaultDueDateInDays": 0,
  "DoNotTrack": true,
  "EnableClientPortal": true,
  "EnablePredictiveInvoicing": true,
  "EnableRecurringInvoicing": true,
  "HasInvoiceLogo": true,
  "Iban": "string",
  "Id": 0,
  "InvoiceTemplate": "Default",
  "InvoiceTemplateColorHex": "string",
  "PhoneNumber": "string",
  "Profession": "Other",
  "ReceiveSmsNotifications": true,
  "ReferralProgram": "Enabled",
  "StoreCheckoutFields": "ShowMinimumRequiredFields",
  "StoreColorHex": "string",
  "StoreCurrency": {
    "Code": "string",
    "Id": 0,
    "Name": "string",
    "Symbol": "string",
    "Value": "string"
  },
  "StoreCurrencyId": 0,
  "StoreCustomJavaScript": "string",
  "StoreDescription": "string",
  "StoreEmail": "string",
  "StoreLanguage": {
    "Id": 0,
    "Name": "string",
    "UiCulture": "string"
  },
  "StoreLanguageId": 0,
  "StoreName": "string",
  "StorePurchaseEmailMessage": "string",
  "StorePurchaseThankYouMessage": "string",
  "StoreTextColorHex": "string",
  "StoreUrl": "string",
  "SubscribeToProductEmails": true,
  "Swift": "string",
  "Terms": "string",
  "UserId": 0,
  "UserSignature": "string",
  "VatNumber": "string",
  "YearsOfExperience": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountantEmail|string|false|none|none|
|Address|string|false|none|none|
|ApiKey|string|false|none|none|
|ApiSecret|string|false|none|none|
|BackgroundImage|string|false|none|none|
|Bank|string|false|none|none|
|BankAccount|string|false|none|none|
|Cname|string|false|none|none|
|CompanyRegistrationNumber|string|false|none|none|
|Country|[Country](#schemacountry)|false|none|none|
|CountryId|integer(int32)|false|none|none|
|Currency|[Currency](#schemacurrency)|false|none|none|
|CurrencyId|integer(int32)|false|none|none|
|CurrencySymbol|string|false|none|none|
|DefaultDateFormat|string|false|none|none|
|DefaultDueDateInDays|integer(int32)|false|none|none|
|DoNotTrack|boolean|false|none|none|
|EnableClientPortal|boolean|false|none|none|
|EnablePredictiveInvoicing|boolean|false|none|none|
|EnableRecurringInvoicing|boolean|false|none|none|
|HasInvoiceLogo|boolean|false|none|none|
|Iban|string|false|none|none|
|Id|integer(int32)|false|none|none|
|InvoiceTemplate|string|false|none|none|
|InvoiceTemplateColorHex|string|false|none|none|
|PhoneNumber|string|false|none|none|
|Profession|string|false|none|none|
|ReceiveSmsNotifications|boolean|false|none|none|
|ReferralProgram|string|false|none|none|
|StoreCheckoutFields|string|false|none|none|
|StoreColorHex|string|false|none|none|
|StoreCurrency|[Currency](#schemacurrency)|false|none|none|
|StoreCurrencyId|integer(int32)|false|none|none|
|StoreCustomJavaScript|string|false|none|none|
|StoreDescription|string|false|none|none|
|StoreEmail|string|false|none|none|
|StoreLanguage|[UiLanguage](#schemauilanguage)|false|none|none|
|StoreLanguageId|integer(int32)|false|none|none|
|StoreName|string|false|none|none|
|StorePurchaseEmailMessage|string|false|none|none|
|StorePurchaseThankYouMessage|string|false|none|none|
|StoreTextColorHex|string|false|none|none|
|StoreUrl|string|false|none|none|
|SubscribeToProductEmails|boolean|false|none|none|
|Swift|string|false|none|none|
|Terms|string|false|none|none|
|UserId|integer(int32)|false|none|none|
|UserSignature|string|false|none|none|
|VatNumber|string|false|none|none|
|YearsOfExperience|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|InvoiceTemplate|Default|
|InvoiceTemplate|Template1|
|InvoiceTemplate|Template2|
|Profession|Other|
|Profession|DesignAndCreative|
|Profession|SoftwareDevelopment|
|Profession|ContentWritingAndMarketing|
|Profession|Freelancers|
|Profession|Consultants|
|Profession|Smes|
|Profession|Enterprise|
|Profession|ECommerce|
|Profession|Individual|
|ReferralProgram|Enabled|
|ReferralProgram|Disabled|
|StoreCheckoutFields|ShowMinimumRequiredFields|
|StoreCheckoutFields|ShowAllFields|

<h2 id="tocS_WorkType">WorkType</h2>
<!-- backwards compatibility -->
<a id="schemaworktype"></a>
<a id="schema_WorkType"></a>
<a id="tocSworktype"></a>
<a id="tocsworktype"></a>

```json
{
  "Id": 0,
  "Title": "string",
  "UserId": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|none|
|Title|string|false|none|none|
|UserId|integer(int32)|false|none|none|

<h2 id="tocS_WorkTypeCreateApiModel">WorkTypeCreateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaworktypecreateapimodel"></a>
<a id="schema_WorkTypeCreateApiModel"></a>
<a id="tocSworktypecreateapimodel"></a>
<a id="tocsworktypecreateapimodel"></a>

```json
{
  "Title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Title|string|false|none|Indicates the title of of the work type (Logo design, development...)|

<h2 id="tocS_WorkTypeDeleteApiModel">WorkTypeDeleteApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaworktypedeleteapimodel"></a>
<a id="schema_WorkTypeDeleteApiModel"></a>
<a id="tocSworktypedeleteapimodel"></a>
<a id="tocsworktypedeleteapimodel"></a>

```json
{
  "Id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Id of work type to be deleted|

<h2 id="tocS_WorkTypeDetailsApiModel">WorkTypeDetailsApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaworktypedetailsapimodel"></a>
<a id="schema_WorkTypeDetailsApiModel"></a>
<a id="tocSworktypedetailsapimodel"></a>
<a id="tocsworktypedetailsapimodel"></a>

```json
{
  "CreatedOn": "1970-01-01T00:00:00Z",
  "Id": 0,
  "Title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreatedOn|string(date-time)|false|none|Date of creation|
|Id|integer(int32)|false|none|Entity id|
|Title|string|false|none|Indicates the title of of the work type (Logo design, development...)|

<h2 id="tocS_WorkTypeUpdateApiModel">WorkTypeUpdateApiModel</h2>
<!-- backwards compatibility -->
<a id="schemaworktypeupdateapimodel"></a>
<a id="schema_WorkTypeUpdateApiModel"></a>
<a id="tocSworktypeupdateapimodel"></a>
<a id="tocsworktypeupdateapimodel"></a>

```json
{
  "Id": 0,
  "Title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|integer(int32)|false|none|Entity id|
|Title|string|false|none|Indicates the title of of the work type (Logo design, development...)|
