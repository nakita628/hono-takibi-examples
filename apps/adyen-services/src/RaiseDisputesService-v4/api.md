<h1 id="raise-disputes-api">Raise disputes API v4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Disputes API for Issuing that you can use to raise disputes on transactions made with an Adyen-issued card, or to report instances of fraud. You can also add attachments as supporting information for a raised dispute, update information about the dispute, submit the dispute for a chargeback, or close the dispute.

## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-H "Content-Type: application/json" \
-U "ws@BalancePlatform.YOUR_BALANCE_PLATFORM":"YOUR_WS_PASSWORD" \
...
```
## Roles and permissions
To use the Disputes API, you need an additional role for your API credential. Your Adyen contact will set up the roles and permissions for you.
## Versioning
The Disputes API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://balanceplatform-api-test.adyen.com/btl/api/v{version}/disputes
```
## Going live
When going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://balanceplatform-api-live.adyen.com/btl/api/v{version}`.

Base URLs:

* <a href="https://balanceplatform-api-test.adyen.com/btl/api/v4">https://balanceplatform-api-test.adyen.com/btl/api/v4</a> - Test Environment

* <a href="https://balanceplatform-api-live.adyen.com/btl/api/v4">https://balanceplatform-api-live.adyen.com/btl/api/v4</a> - Live Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="raise-disputes-api-dispute-attachments">Dispute Attachments</h1>

## Get all attachments linked to a raised dispute

<a id="opIdget-disputes-disputeId-attachments"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string/attachments \
  -H 'Accept: application/json'
```

`GET /disputes/{disputeId}/attachments`

Get a list of attachments associated with a dispute ID.

<h3 id="get-all-attachments-linked-to-a-raised-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disputeId|path|string|true|The unique identifier of the raised dispute.|

> Example responses

> 200 Response

```json
[
  {
    "attachmentType": "receipt",
    "content": "string",
    "fileName": "string",
    "id": "string"
  }
]
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-all-attachments-linked-to-a-raised-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|Inline|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<h3 id="get-all-attachments-linked-to-a-raised-dispute-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DisputeAttachment](#schemadisputeattachment)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Add an attachment to a dispute

<a id="opIdpost-disputes-disputeId-attachments"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attachmentType": "receipt",
    "content": "string",
    "fileName": "string"
  }'
```

`POST /disputes/{disputeId}/attachments`

Add supporting information as an attachment for the raised dispute. Upload receipts, communication, or any other documentation to support the dispute.

> Body parameter

```json
{
  "attachmentType": "receipt",
  "content": "string",
  "fileName": "string"
}
```

<h3 id="add-an-attachment-to-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disputeId|path|string|true|The unique identifier of the raised dispute.|
|body|body|[DisputeAttachment](#schemadisputeattachment)|true|none|
|» attachmentType|body|[AttachmentType](#schemaattachmenttype)|true|The type of information contained in the attachment: **receipt**, **correspondence**, **other**.|
|» content|body|string|true|The content of the image. An attachment must be base64-encoded data. Make sure that all base64-encoded data strings are generated without line breaks or "wrapping". For example, do not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at the end of the base64-encoded data string will also result in a malformed input error.|
|» fileName|body|string|true|The name of the attachment, including its filename extension. Supported filename extensions: **jpeg**, **pdf**, **tiff**.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» attachmentType|receipt|
|» attachmentType|correspondence|
|» attachmentType|other|

> Example responses

> 200 Response

```json
{
  "attachmentId": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="add-an-attachment-to-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[AttachDocumentResponse](#schemaattachdocumentresponse)|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get an attachment

<a id="opIdget-disputes-disputeId-attachments-attachmentId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string/attachments/string \
  -H 'Accept: application/json'
```

`GET /disputes/{disputeId}/attachments/{attachmentId}`

Search for a single attachment, providing the specific dispute ID and attachment ID.

<h3 id="get-an-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disputeId|path|string|true|The unique identifier of the raised dispute.|
|attachmentId|path|string|true|The unique identifier of the attachment.|

> Example responses

> 200 Response

```json
{
  "attachmentType": "receipt",
  "content": "string",
  "fileName": "string",
  "id": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-an-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisputeAttachment](#schemadisputeattachment)|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete attachment from a dispute

<a id="opIddelete-disputes-disputeId-attachments-attachmentId"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string/attachments/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /disputes/{disputeId}/attachments/{attachmentId}`

Removes the attachment from the raised dispute. Adyen may keep this file for compliance purposes.

<h3 id="delete-attachment-from-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|disputeId|path|string|true|The unique identifier of the raised dispute.|
|attachmentId|path|string|true|The unique identifier of the attachment.|

> Example responses

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="delete-attachment-from-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The attachment was successfully removed|None|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="raise-disputes-api-raise-disputes">Raise Disputes</h1>

## Get a list of raised disputes

<a id="opIdget-disputes"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes \
  -H 'Accept: application/json'
```

`GET /disputes`

Returns a list of raised disputes that match the query parameters.

This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.

<h3 id="get-a-list-of-raised-disputes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|The current status of the dispute.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|
|paymentInstrument|query|string|false|The unique identifier of the payment instrument.|
|createdSince|query|string|false|Only include disputes that have been created on or after this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\)  format. For example, 2021-05-30T15:07:40Z.|
|createdUntil|query|string|false|Only include disputes that have been created on or before this point in time. The value must be in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601\) format. For example, **2021-05-30T15:07:40Z**.|
|offset|query|string|false|The number of items that you want to skip.|
|limit|query|string|false|The number of items returned per page, maximum of 500 items. By default, the response returns 100 items per page.|

> Example responses

> 200 Response

```json
[
  [
    {
      "arn": "string",
      "cancelledInfo": {
        "attemptedToReturn": true,
        "certificationGuaranteedReservation": "GR",
        "dateOfAttemptedReturn": "1970-01-01",
        "dateOfCancellation": "1970-01-01",
        "dateOfReturn": "1970-01-01",
        "dateOfService": "1970-01-01",
        "dateReturnReceived": "1970-01-01",
        "descriptionOfIssue": "string",
        "didCardholderCancelBeforeShipment": true,
        "didCardholderReceiveGoods": true,
        "didCardholderReturn": true,
        "goodsOrServices": "goods",
        "lastExpectedDate": "1970-01-01",
        "merchantRefuseAdvise": "MRRA",
        "returnMethod": "faceToFace",
        "serviceType": "timeshare",
        "shippingTrackingNumber": "string",
        "timeshareDate": "1970-01-01",
        "wasCancellationPolicyProvided": true,
        "whoCancelled": "merchant"
      },
      "description": "string",
      "disputedAmount": {
        "currency": "string",
        "value": 0
      },
      "duplicateInfo": {
        "duplicateTransactionId": "string",
        "sameCard": true,
        "sameIssuer": true
      },
      "fraudInfo": {
        "cardDoesNotBelongToCardholder": true,
        "cardWasCounterfeited": true,
        "descriptionOfIssue": "string",
        "reportOnly": true
      },
      "id": "string",
      "notAsDescribedInfo": {
        "attemptedToReturn": true,
        "dateAttemptedToReturn": "1970-01-01",
        "dateOfCancellation": "1970-01-01",
        "dateOfFirstNegotiations": "1970-01-01",
        "dateOfReturn": "1970-01-01",
        "dateReturnReceived": "1970-01-01",
        "descriptionOfIssue": "string",
        "didAttemptToResolve": true,
        "didCardholderReturn": true,
        "didMerchantAcceptCancellation": true,
        "disputeDueTo": "notAsDescribed",
        "evidenceOfNegotiationsWithMerchant": true,
        "goodsOrServices": "goods",
        "isNonFiatOrNft": true,
        "lastExpectedDate": "1970-01-01",
        "reasonMerchantRefused": "MRRA",
        "resolutionProhibitedByLaw": true,
        "returnMethod": "faceToFace",
        "shippingTrackingNumber": "string",
        "whoCancelled": "merchant"
      },
      "notDeliveredInfo": {
        "agreedDeliveryLocation": "string",
        "dateOfCancellation": "1970-01-01",
        "deliveredToWrongLocation": true,
        "descriptionOfIssue": "string",
        "didCardholderReturn": true,
        "isDeliveryLate": true,
        "isMerchantBankrupt": true,
        "isNonFiatOrNft": true,
        "lastExpectedDate": "1970-01-01",
        "whatWasNotDelivered": "goods",
        "whoCancelled": "merchant"
      },
      "otherInfo": {
        "descriptionOfIssue": "string",
        "subType": "atmDispute",
        "whatWasPurchased": "goods"
      },
      "status": "draft",
      "transactionId": "string",
      "type": "string"
    }
  ]
]
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-a-list-of-raised-disputes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|Inline|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<h3 id="get-a-list-of-raised-disputes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[[DisputeResponse](#schemadisputeresponse)]]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Raise a dispute

<a id="opIdpost-disputes"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cancelledInfo": {
      "attemptedToReturn": true,
      "certificationGuaranteedReservation": "GR",
      "dateOfAttemptedReturn": "1970-01-01",
      "dateOfCancellation": "1970-01-01",
      "dateOfReturn": "1970-01-01",
      "dateOfService": "1970-01-01",
      "dateReturnReceived": "1970-01-01",
      "descriptionOfIssue": "string",
      "didCardholderCancelBeforeShipment": true,
      "didCardholderReceiveGoods": true,
      "didCardholderReturn": true,
      "goodsOrServices": "goods",
      "lastExpectedDate": "1970-01-01",
      "merchantRefuseAdvise": "MRRA",
      "returnMethod": "faceToFace",
      "serviceType": "timeshare",
      "shippingTrackingNumber": "string",
      "timeshareDate": "1970-01-01",
      "wasCancellationPolicyProvided": true,
      "whoCancelled": "merchant"
    },
    "description": "string",
    "disputedAmount": {
      "currency": "string",
      "value": 0
    },
    "duplicateInfo": {
      "duplicateTransactionId": "string",
      "sameCard": true,
      "sameIssuer": true
    },
    "fraudInfo": {
      "cardDoesNotBelongToCardholder": true,
      "cardWasCounterfeited": true,
      "descriptionOfIssue": "string",
      "reportOnly": true
    },
    "notAsDescribedInfo": {
      "attemptedToReturn": true,
      "dateAttemptedToReturn": "1970-01-01",
      "dateOfCancellation": "1970-01-01",
      "dateOfFirstNegotiations": "1970-01-01",
      "dateOfReturn": "1970-01-01",
      "dateReturnReceived": "1970-01-01",
      "descriptionOfIssue": "string",
      "didAttemptToResolve": true,
      "didCardholderReturn": true,
      "didMerchantAcceptCancellation": true,
      "disputeDueTo": "notAsDescribed",
      "evidenceOfNegotiationsWithMerchant": true,
      "goodsOrServices": "goods",
      "isNonFiatOrNft": true,
      "lastExpectedDate": "1970-01-01",
      "reasonMerchantRefused": "MRRA",
      "resolutionProhibitedByLaw": true,
      "returnMethod": "faceToFace",
      "shippingTrackingNumber": "string",
      "whoCancelled": "merchant"
    },
    "notDeliveredInfo": {
      "agreedDeliveryLocation": "string",
      "dateOfCancellation": "1970-01-01",
      "deliveredToWrongLocation": true,
      "descriptionOfIssue": "string",
      "didCardholderReturn": true,
      "isDeliveryLate": true,
      "isMerchantBankrupt": true,
      "isNonFiatOrNft": true,
      "lastExpectedDate": "1970-01-01",
      "whatWasNotDelivered": "goods",
      "whoCancelled": "merchant"
    },
    "otherInfo": {
      "descriptionOfIssue": "string",
      "subType": "atmDispute",
      "whatWasPurchased": "goods"
    },
    "status": "draft",
    "transactionId": "string",
    "type": "string"
  }'
```

`POST /disputes`

Raise a dispute for an underlying transaction, providing a dispute type and the amount you want to dispute.

Raising a dispute returns a dispute ID, which you can use to update details about the dispute, provide supporting documentation, close the dispute, or submit the dispute for a chargeback. You can also use the dispute ID to view the status of the dispute.

> Body parameter

```json
{
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

<h3 id="raise-a-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DisputeRequest](#schemadisputerequest)|true|none|
|» cancelledInfo|body|[CancelledInfo](#schemacancelledinfo)|false|Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.|
|» description|body|string|false|Your description for the dispute.|
|» disputedAmount|body|[Amount](#schemaamount)|false|The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed.|
|» duplicateInfo|body|[DuplicateInfo](#schemaduplicateinfo)|false|Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.|
|» fraudInfo|body|[FraudInfo](#schemafraudinfo)|false|Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.|
|» notAsDescribedInfo|body|[NotAsDescribedInfo](#schemanotasdescribedinfo)|false|Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.|
|» notDeliveredInfo|body|[NotDeliveredInfo](#schemanotdeliveredinfo)|false|Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.|
|» otherInfo|body|[OtherInfo](#schemaotherinfo)|false|Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|
|» status|body|[DisputeStatus](#schemadisputestatus)|false|The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|
|» transactionId|body|string|true|The unique reference of the transaction for which you are raising the dispute.|
|» type|body|[DisputeType](#schemadisputetype)|true|The type of the dispute.<br><br>Possible values: **cancelled**, **duplicate**, **fraud**, **notAsDescribed**, **notDelivered**, **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|draft|
|» status|submitted|
|» status|chargeback|
|» status|secondPresentment|
|» status|won|
|» status|closed|

> Example responses

> 200 Response

```json
{
  "arn": "string",
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "id": "string",
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="raise-a-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisputeResponse](#schemadisputeresponse)|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get dispute by ID

<a id="opIdget-disputes-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string \
  -H 'Accept: application/json'
```

`GET /disputes/{id}`

Get a raised dispute by ID.

<h3 id="get-dispute-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the raised dispute.|

> Example responses

> 200 Response

```json
{
  "arn": "string",
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "id": "string",
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="get-dispute-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisputeResponse](#schemadisputeresponse)|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a raised dispute

<a id="opIdpatch-disputes-id"></a>

> Code samples

```bash
curl https://balanceplatform-api-test.adyen.com/btl/api/v4/disputes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cancelledInfo": {
      "attemptedToReturn": true,
      "certificationGuaranteedReservation": "GR",
      "dateOfAttemptedReturn": "1970-01-01",
      "dateOfCancellation": "1970-01-01",
      "dateOfReturn": "1970-01-01",
      "dateOfService": "1970-01-01",
      "dateReturnReceived": "1970-01-01",
      "descriptionOfIssue": "string",
      "didCardholderCancelBeforeShipment": true,
      "didCardholderReceiveGoods": true,
      "didCardholderReturn": true,
      "goodsOrServices": "goods",
      "lastExpectedDate": "1970-01-01",
      "merchantRefuseAdvise": "MRRA",
      "returnMethod": "faceToFace",
      "serviceType": "timeshare",
      "shippingTrackingNumber": "string",
      "timeshareDate": "1970-01-01",
      "wasCancellationPolicyProvided": true,
      "whoCancelled": "merchant"
    },
    "duplicateInfo": {
      "duplicateTransactionId": "string",
      "sameCard": true,
      "sameIssuer": true
    },
    "fraudInfo": {
      "cardDoesNotBelongToCardholder": true,
      "cardWasCounterfeited": true,
      "descriptionOfIssue": "string",
      "reportOnly": true
    },
    "notAsDescribedInfo": {
      "attemptedToReturn": true,
      "dateAttemptedToReturn": "1970-01-01",
      "dateOfCancellation": "1970-01-01",
      "dateOfFirstNegotiations": "1970-01-01",
      "dateOfReturn": "1970-01-01",
      "dateReturnReceived": "1970-01-01",
      "descriptionOfIssue": "string",
      "didAttemptToResolve": true,
      "didCardholderReturn": true,
      "didMerchantAcceptCancellation": true,
      "disputeDueTo": "notAsDescribed",
      "evidenceOfNegotiationsWithMerchant": true,
      "goodsOrServices": "goods",
      "isNonFiatOrNft": true,
      "lastExpectedDate": "1970-01-01",
      "reasonMerchantRefused": "MRRA",
      "resolutionProhibitedByLaw": true,
      "returnMethod": "faceToFace",
      "shippingTrackingNumber": "string",
      "whoCancelled": "merchant"
    },
    "notDeliveredInfo": {
      "agreedDeliveryLocation": "string",
      "dateOfCancellation": "1970-01-01",
      "deliveredToWrongLocation": true,
      "descriptionOfIssue": "string",
      "didCardholderReturn": true,
      "isDeliveryLate": true,
      "isMerchantBankrupt": true,
      "isNonFiatOrNft": true,
      "lastExpectedDate": "1970-01-01",
      "whatWasNotDelivered": "goods",
      "whoCancelled": "merchant"
    },
    "otherInfo": {
      "descriptionOfIssue": "string",
      "subType": "atmDispute",
      "whatWasPurchased": "goods"
    },
    "status": "draft"
  }'
```

`PATCH /disputes/{id}`

Update information related to a raised dispute, or change a dispute's status from **draft** to **submitted** or **closed**.

**Note:** Changing the status of a dispute to **submitted** or **closed** is a final action. You cannot make updates to a **submitted** or **closed** dispute. Make sure to upload all supporting attachments using the `POST /disputes/{id}/attachments` endpoint before you submit a dispute. When you update a dispute to **submitted**, Adyen sends the raised dispute to the card scheme for review and acquirer defense. When you update a raised dispute to **closed**, Adyen closes the dispute, and the dispute is no longer eligible for review by the card scheme.

> Body parameter

```json
{
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft"
}
```

<h3 id="update-a-raised-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the raised dispute.|
|body|body|[PatchableDisputeRequest](#schemapatchabledisputerequest)|false|none|
|» cancelledInfo|body|object|false|Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.|
|» » *oneOf*|body|[CancelledInfoUpdate](#schemacancelledinfoupdate)|false|none|
|» » *oneOf*|body|null|false|none|
|» duplicateInfo|body|object|false|Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.|
|» » *oneOf*|body|[PatchableDuplicateInfo](#schemapatchableduplicateinfo)|false|none|
|» » *oneOf*|body|null|false|none|
|» fraudInfo|body|object|false|Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.|
|» » *oneOf*|body|[PatchableFraudInfo](#schemapatchablefraudinfo)|false|none|
|» » *oneOf*|body|null|false|none|
|» notAsDescribedInfo|body|object|false|Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.|
|» » *oneOf*|body|[NotAsDescribedInfoUpdate](#schemanotasdescribedinfoupdate)|false|none|
|» » *oneOf*|body|null|false|none|
|» notDeliveredInfo|body|object|false|Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.|
|» » *oneOf*|body|[PatchableNotDeliveredInfo](#schemapatchablenotdeliveredinfo)|false|none|
|» » *oneOf*|body|null|false|none|
|» otherInfo|body|object|false|Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|
|» » *oneOf*|body|[PatchableOtherInfo](#schemapatchableotherinfo)|false|none|
|» » *oneOf*|body|null|false|none|
|» status|body|object|false|The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|
|» » *oneOf*|body|[DisputeStatus](#schemadisputestatus)|false|none|
|» » *oneOf*|body|null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » *oneOf*|draft|
|» » *oneOf*|submitted|
|» » *oneOf*|chargeback|
|» » *oneOf*|secondPresentment|
|» » *oneOf*|won|
|» » *oneOf*|closed|

> Example responses

> 200 Response

```json
{
  "arn": "string",
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "id": "string",
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

> 401 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 403 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

> 422 Response

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

<h3 id="update-a-raised-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[DisputeResponse](#schemadisputeresponse)|
|401|Unauthorized|Authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|A request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Amount">Amount</h2>
<!-- backwards compatibility -->
<a id="schemaamount"></a>
<a id="schema_Amount"></a>
<a id="tocSamount"></a>
<a id="tocsamount"></a>

```json
{
  "currency": "string",
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.|
|value|integer(int64)|true|none|The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).|

<h2 id="tocS_AttachDocumentResponse">AttachDocumentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachdocumentresponse"></a>
<a id="schema_AttachDocumentResponse"></a>
<a id="tocSattachdocumentresponse"></a>
<a id="tocsattachdocumentresponse"></a>

```json
{
  "attachmentId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentId|string|false|read-only|The unique identifier of the attachment.|

<h2 id="tocS_AttachmentType">AttachmentType</h2>
<!-- backwards compatibility -->
<a id="schemaattachmenttype"></a>
<a id="schema_AttachmentType"></a>
<a id="tocSattachmenttype"></a>
<a id="tocsattachmenttype"></a>

```json
"receipt"
```

<h2 id="tocS_CancelledInfo">CancelledInfo</h2>
<!-- backwards compatibility -->
<a id="schemacancelledinfo"></a>
<a id="schema_CancelledInfo"></a>
<a id="tocScancelledinfo"></a>
<a id="tocscancelledinfo"></a>

```json
{
  "attemptedToReturn": true,
  "certificationGuaranteedReservation": "GR",
  "dateOfAttemptedReturn": "1970-01-01",
  "dateOfCancellation": "1970-01-01",
  "dateOfReturn": "1970-01-01",
  "dateOfService": "1970-01-01",
  "dateReturnReceived": "1970-01-01",
  "descriptionOfIssue": "string",
  "didCardholderCancelBeforeShipment": true,
  "didCardholderReceiveGoods": true,
  "didCardholderReturn": true,
  "goodsOrServices": "goods",
  "lastExpectedDate": "1970-01-01",
  "merchantRefuseAdvise": "MRRA",
  "returnMethod": "faceToFace",
  "serviceType": "timeshare",
  "shippingTrackingNumber": "string",
  "timeshareDate": "1970-01-01",
  "wasCancellationPolicyProvided": true,
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptedToReturn|boolean|false|none|Indicates if the cardholder attempted to return the merchandise but was unable to.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReturn` is **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).|
|certificationGuaranteedReservation|[CertificationGuaranteedReservation](#schemacertificationguaranteedreservation)|false|none|The certification code for the guaranteed reservation.<br><br>Required if the value of `serviceType` is **guaranteedReservation** (a guaranteed reservation).<br><br>Possible values:<br><br> * **GR**: The cardholder properly cancelled the guaranteed reservation.<br><br> * **RC**: The cardholder attempted to cancel within 24 hours of delivery of the reservation confirmation.<br><br> * **AR**: The merchant billed a "no-show transaction" for more than one day's accommodation or rental.|
|dateOfAttemptedReturn|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the goods they purchased.<br><br>Required if the value of `attemptedToReturn` is **true**.|
|dateOfCancellation|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the purchase was cancelled.<br><br>Required if the value of `certificationGuaranteedReservation` is **GR** or **RC**, or if the value of `didCardholderCancelBeforeShipment` is **true**.|
|dateOfReturn|string(date)|false|none|The date, in **YYYY-MM-DD** format, that the cardholder shipped or handed back the merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.|
|dateOfService|string(date)|false|none|The date, in **YYYY-MM-DD** format, that the service was scheduled to take place.<br><br>Required if the value of `serviceType` is **other** (any other type of service) or **guaranteedReservation** (a guaranteed reservation).|
|dateReturnReceived|string(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant received the returned merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.|
|descriptionOfIssue|string|false|none|Your description of the issue for raising a dispute of `type` **cancelled**. Make sure the cardholder provides information that covers the following:<br><br> * A description of the goods or services purchased, and why they are cancelling the purchase.<br><br> * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.<br><br> * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).<br><br> * If the cardholder attempted to return the goods in a way other than through direct return shipment or face-to-face return at a merchant, how they attempted to return the goods.<br><br>Not required if the value of `goodsOrServices` is **services**, the value of `serviceType` is **timeshare** or **guaranteedReservation**, and the value of `didCardholderCancelBeforeShipment` is **false**.|
|didCardholderCancelBeforeShipment|boolean|false|none|Indicates if the cardholder cancelled the purchase before the goods were shipped.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to cancel the goods or services.|
|didCardholderReceiveGoods|boolean|false|none|Indicates if the cardholder received the merchandise.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `goodsOrServices` is **goods**.|
|didCardholderReturn|boolean|false|none|Indicates if the cardholder returned the merchandise to the merchant.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReceiveGoods` is **true**.|
|goodsOrServices|[ProductType](#schemaproducttype)|true|none|The type of purchase being disputed.<br><br>Possible values: **goods**, **services**.|
|lastExpectedDate|string(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant promised delivery.<br><br>Required if the value of `goodsOrServices` is **goods**.|
|merchantRefuseAdvise|[MerchantRefuseAdvise](#schemamerchantrefuseadvise)|false|none|The reason the merchant gave for refusing the return.<br><br>Required if the value of `attemptedToReturn` is **true**.<br><br>Possible values:<br><br> * **MRRA**: The merchant refused to provide return authorization.<br><br> * **MRRM**: The merchant refused to accept returned merchandise.<br><br> * **MICNRM**: The merchant informed cardholder not to return the merchandise.|
|returnMethod|[ReturnMethod](#schemareturnmethod)|false|none|The method used to return the merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.<br><br>Possible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.<br><br>If the value of this parameter is **other**, or if the cardholder attempted a return but did not complete it, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods or services.|
|serviceType|[ServiceType](#schemaservicetype)|false|none|The type of service purchased.<br><br>Required if the value of `goodsOrServices` is **services**.<br><br>Possible values:<br><br> * **timeshare**: A reservation for a timeshare.<br><br> * **guaranteedReservation**: A guaranteed reservation (for example, a hotel or a car rental booking).<br><br> * **other**: Any other type of service.|
|shippingTrackingNumber|string|false|none|The tracking number for the shipment used to return the merchandise.|
|timeshareDate|string(date)|false|none|The date, in **YYYY-MM-DD** format, associated with the timeshare purchase.<br><br>Required if the value of `serviceType` is **timeshare**.|
|wasCancellationPolicyProvided|boolean|false|none|Indicates if the merchant provided the cardholder with a cancellation policy.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReceiveGoods` is **false**, the value of `didCardholderCancelBeforeShipment` is **true**, or the value of `serviceType` is **guaranteedReservation**.|
|whoCancelled|[CancellingEntity](#schemacancellingentity)|false|none|The party that initiated the cancellation of the purchase.<br><br>Required if the value of `serviceType` is **timeshare** (a timeshare) or **other** (any other type of service), or if the value of `didCardholderReceiveGoods` is **false**.<br><br>Possible values: **merchant**, **cardholder**.|

#### Enumerated Values

|Property|Value|
|---|---|
|certificationGuaranteedReservation|GR|
|certificationGuaranteedReservation|RC|
|certificationGuaranteedReservation|AR|
|goodsOrServices|goods|
|goodsOrServices|services|
|merchantRefuseAdvise|MRRA|
|merchantRefuseAdvise|MRRM|
|merchantRefuseAdvise|MICNRM|
|returnMethod|faceToFace|
|returnMethod|fedEx|
|returnMethod|dhl|
|returnMethod|ups|
|returnMethod|postalService|
|returnMethod|other|
|serviceType|timeshare|
|serviceType|guaranteedReservation|
|serviceType|other|
|whoCancelled|merchant|
|whoCancelled|cardholder|

<h2 id="tocS_CancelledInfoUpdate">CancelledInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemacancelledinfoupdate"></a>
<a id="schema_CancelledInfoUpdate"></a>
<a id="tocScancelledinfoupdate"></a>
<a id="tocscancelledinfoupdate"></a>

```json
{
  "attemptedToReturn": true,
  "certificationGuaranteedReservation": "GR",
  "dateOfAttemptedReturn": "1970-01-01",
  "dateOfCancellation": "1970-01-01",
  "dateOfReturn": "1970-01-01",
  "dateOfService": "1970-01-01",
  "dateReturnReceived": "1970-01-01",
  "descriptionOfIssue": "string",
  "didCardholderCancelBeforeShipment": true,
  "didCardholderReceiveGoods": true,
  "didCardholderReturn": true,
  "goodsOrServices": "goods",
  "lastExpectedDate": "1970-01-01",
  "merchantRefuseAdvise": "MRRA",
  "returnMethod": "faceToFace",
  "serviceType": "timeshare",
  "shippingTrackingNumber": "string",
  "timeshareDate": "1970-01-01",
  "wasCancellationPolicyProvided": true,
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptedToReturn|boolean \| null|false|none|Indicates if the cardholder attempted to return the merchandise but was unable to.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReturn` is **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).|
|certificationGuaranteedReservation|object|false|none|The certification code for the guaranteed reservation.<br><br>Required if the value of `serviceType` is **guaranteedReservation** (a guaranteed reservation).<br><br>Possible values:<br><br> * **GR**: The cardholder properly cancelled the guaranteed reservation.<br><br> * **RC**: The cardholder attempted to cancel within 24 hours of delivery of the reservation confirmation.<br><br> * **AR**: The merchant billed a "no-show transaction" for more than one day's accommodation or rental.|
|dateOfAttemptedReturn|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the goods they purchased.<br><br>Required if the value of `attemptedToReturn` is **true**.|
|dateOfCancellation|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the purchase was cancelled.<br><br>Required if the value of `certificationGuaranteedReservation` is **GR** or **RC**, or if the value of `didCardholderCancelBeforeShipment` is **true**.|
|dateOfReturn|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that the cardholder shipped or handed back the merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.|
|dateOfService|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that the service was scheduled to take place.<br><br>Required if the value of `serviceType` is **other** (any other type of service) or **guaranteedReservation** (a guaranteed reservation).|
|dateReturnReceived|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant received the returned merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.|
|descriptionOfIssue|string \| null|false|none|Your description of the issue for raising a dispute of `type` **cancelled**. Make sure the cardholder provides information that covers the following:<br><br> * A description of the goods or services purchased, and why they are cancelling the purchase.<br><br> * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.<br><br> * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods, and what they did with the goods (for example, destroyed them).<br><br> * If the cardholder attempted to return the goods in a way other than through direct return shipment or face-to-face return at a merchant, how they attempted to return the goods.<br><br>Not required if the value of `goodsOrServices` is **services**, the value of `serviceType` is **timeshare** or **guaranteedReservation**, and the value of `didCardholderCancelBeforeShipment` is **false**.|
|didCardholderCancelBeforeShipment|boolean \| null|false|none|Indicates if the cardholder cancelled the purchase before the goods were shipped.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to cancel the goods or services.|
|didCardholderReceiveGoods|boolean \| null|false|none|Indicates if the cardholder received the merchandise.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `goodsOrServices` is **goods**.|
|didCardholderReturn|boolean \| null|false|none|Indicates if the cardholder returned the merchandise to the merchant.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReceiveGoods` is **true**.|
|goodsOrServices|[ProductType](#schemaproducttype)|false|none|The type of purchase being disputed.<br><br>Possible values: **goods**, **services**.|
|lastExpectedDate|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant promised delivery.<br><br>Required if the value of `goodsOrServices` is **goods**.|
|merchantRefuseAdvise|object|false|none|The reason the merchant gave for refusing the return.<br><br>Required if the value of `attemptedToReturn` is **true**.<br><br>Possible values:<br><br> * **MRRA**: The merchant refused to provide return authorization.<br><br> * **MRRM**: The merchant refused to accept returned merchandise.<br><br> * **MICNRM**: The merchant informed cardholder not to return the merchandise.|
|returnMethod|object|false|none|The method used to return the merchandise.<br><br>Required if the value of `didCardholderReturn` is **true**.<br><br>Possible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.<br><br>If the value of this parameter is **other**, or if the cardholder attempted a return but did not complete it, provide information in `descriptionOfIssue` about how the cardholder attempted to return the goods or services.|
|serviceType|object|false|none|The type of service purchased.<br><br>Required if the value of `goodsOrServices` is **services**.<br><br>Possible values:<br><br> * **timeshare**: A reservation for a timeshare.<br><br> * **guaranteedReservation**: A guaranteed reservation (for example, a hotel or a car rental booking).<br><br> * **other**: Any other type of service.|
|shippingTrackingNumber|string \| null|false|none|The tracking number for the shipment used to return the merchandise.|
|timeshareDate|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, associated with the timeshare purchase.<br><br>Required if the value of `serviceType` is **timeshare**.|
|wasCancellationPolicyProvided|boolean \| null|false|none|Indicates if the merchant provided the cardholder with a cancellation policy.<br><br>Possible values: **true**, **false**.<br><br>Required if the value of `didCardholderReceiveGoods` is **false**, the value of `didCardholderCancelBeforeShipment` is **true**, or the value of `serviceType` is **guaranteedReservation**.|
|whoCancelled|object|false|none|The party that initiated the cancellation of the purchase.<br><br>Required if the value of `serviceType` is **timeshare** (a timeshare) or **other** (any other type of service), or if the value of `didCardholderReceiveGoods` is **false**.<br><br>Possible values: **merchant**, **cardholder**.|

#### Enumerated Values

|Property|Value|
|---|---|
|goodsOrServices|goods|
|goodsOrServices|services|

<h2 id="tocS_CancellingEntity">CancellingEntity</h2>
<!-- backwards compatibility -->
<a id="schemacancellingentity"></a>
<a id="schema_CancellingEntity"></a>
<a id="tocScancellingentity"></a>
<a id="tocscancellingentity"></a>

```json
"merchant"
```

<h2 id="tocS_CertificationGuaranteedReservation">CertificationGuaranteedReservation</h2>
<!-- backwards compatibility -->
<a id="schemacertificationguaranteedreservation"></a>
<a id="schema_CertificationGuaranteedReservation"></a>
<a id="tocScertificationguaranteedreservation"></a>
<a id="tocscertificationguaranteedreservation"></a>

```json
"GR"
```

<h2 id="tocS_DefaultErrorResponseEntity">DefaultErrorResponseEntity</h2>
<!-- backwards compatibility -->
<a id="schemadefaulterrorresponseentity"></a>
<a id="schema_DefaultErrorResponseEntity"></a>
<a id="tocSdefaulterrorresponseentity"></a>
<a id="tocsdefaulterrorresponseentity"></a>

```json
{
  "detail": "string",
  "errorCode": "string",
  "instance": "string",
  "invalidFields": [
    {
      "message": "string",
      "name": "string",
      "value": "string"
    }
  ],
  "requestId": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Standardized error response following RFC-7807 format

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|A human-readable explanation specific to this occurrence of the problem.|
|errorCode|string|false|none|Unique business error code.|
|instance|string|false|none|A URI that identifies the specific occurrence of the problem if applicable.|
|invalidFields|[[InvalidField](#schemainvalidfield)]|false|none|Array of fields with validation errors when applicable.|
|requestId|string|false|none|The unique reference for the request.|
|status|integer(int32)|false|none|The HTTP status code.|
|title|string|false|none|A short, human-readable summary of the problem type.|
|type|string|false|none|A URI that identifies the validation error type. It points to human-readable documentation for the problem type.|

<h2 id="tocS_DisputeAttachment">DisputeAttachment</h2>
<!-- backwards compatibility -->
<a id="schemadisputeattachment"></a>
<a id="schema_DisputeAttachment"></a>
<a id="tocSdisputeattachment"></a>
<a id="tocsdisputeattachment"></a>

```json
{
  "attachmentType": "receipt",
  "content": "string",
  "fileName": "string",
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachmentType|[AttachmentType](#schemaattachmenttype)|true|none|The type of information contained in the attachment: **receipt**, **correspondence**, **other**.|
|content|string|true|none|The content of the image. An attachment must be base64-encoded data. Make sure that all base64-encoded data strings are generated without line breaks or "wrapping". For example, do not use `Base64.NO_WRAP` in Java, or its equivalent in other languages. Newline characters at the end of the base64-encoded data string will also result in a malformed input error.|
|fileName|string|true|none|The name of the attachment, including its filename extension. Supported filename extensions: **jpeg**, **pdf**, **tiff**.|
|id|string|false|read-only|The unique identifier of the attachment.|

#### Enumerated Values

|Property|Value|
|---|---|
|attachmentType|receipt|
|attachmentType|correspondence|
|attachmentType|other|

<h2 id="tocS_DisputeDueTo">DisputeDueTo</h2>
<!-- backwards compatibility -->
<a id="schemadisputedueto"></a>
<a id="schema_DisputeDueTo"></a>
<a id="tocSdisputedueto"></a>
<a id="tocsdisputedueto"></a>

```json
"notAsDescribed"
```

<h2 id="tocS_DisputeRequest">DisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemadisputerequest"></a>
<a id="schema_DisputeRequest"></a>
<a id="tocSdisputerequest"></a>
<a id="tocsdisputerequest"></a>

```json
{
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelledInfo|[CancelledInfo](#schemacancelledinfo)|false|none|Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.|
|description|string|false|none|Your description for the dispute.|
|disputedAmount|[Amount](#schemaamount)|false|none|The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed.|
|duplicateInfo|[DuplicateInfo](#schemaduplicateinfo)|false|none|Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.|
|fraudInfo|[FraudInfo](#schemafraudinfo)|false|none|Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.|
|notAsDescribedInfo|[NotAsDescribedInfo](#schemanotasdescribedinfo)|false|none|Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.|
|notDeliveredInfo|[NotDeliveredInfo](#schemanotdeliveredinfo)|false|none|Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.|
|otherInfo|[OtherInfo](#schemaotherinfo)|false|none|Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|
|status|[DisputeStatus](#schemadisputestatus)|false|none|The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|
|transactionId|string|true|none|The unique reference of the transaction for which you are raising the dispute.|
|type|[DisputeType](#schemadisputetype)|true|none|The type of the dispute.<br><br>Possible values: **cancelled**, **duplicate**, **fraud**, **notAsDescribed**, **notDelivered**, **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|submitted|
|status|chargeback|
|status|secondPresentment|
|status|won|
|status|closed|

<h2 id="tocS_DisputeResponse">DisputeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadisputeresponse"></a>
<a id="schema_DisputeResponse"></a>
<a id="tocSdisputeresponse"></a>
<a id="tocsdisputeresponse"></a>

```json
{
  "arn": "string",
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "description": "string",
  "disputedAmount": {
    "currency": "string",
    "value": 0
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "id": "string",
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft",
  "transactionId": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arn|string|false|read-only|The unique Acquirer Reference Number (arn) generated by the card scheme for each capture. You can use the `arn` to trace the transaction through its lifecycle.|
|cancelledInfo|[CancelledInfo](#schemacancelledinfo)|false|none|Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.|
|description|string|false|none|Your description for the dispute.|
|disputedAmount|[Amount](#schemaamount)|false|none|The amount for which you dispute the transaction. The disputed amount cannot be greater than the transaction amount. If you do not provide an amount, the entire transaction amount will be disputed.|
|duplicateInfo|[DuplicateInfo](#schemaduplicateinfo)|false|none|Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.|
|fraudInfo|[FraudInfo](#schemafraudinfo)|false|none|Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.|
|id|string|false|read-only|The unique identifier of the raised dispute.|
|notAsDescribedInfo|[NotAsDescribedInfo](#schemanotasdescribedinfo)|false|none|Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.|
|notDeliveredInfo|[NotDeliveredInfo](#schemanotdeliveredinfo)|false|none|Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.|
|otherInfo|[OtherInfo](#schemaotherinfo)|false|none|Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|
|status|[DisputeStatus](#schemadisputestatus)|false|none|The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|
|transactionId|string|true|none|The unique reference of the transaction for which you are raising the dispute.|
|type|[DisputeType](#schemadisputetype)|true|none|The type of the dispute.<br><br>Possible values: **cancelled**, **duplicate**, **fraud**, **notAsDescribed**, **notDelivered**, **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|draft|
|status|submitted|
|status|chargeback|
|status|secondPresentment|
|status|won|
|status|closed|

<h2 id="tocS_DisputeStatus">DisputeStatus</h2>
<!-- backwards compatibility -->
<a id="schemadisputestatus"></a>
<a id="schema_DisputeStatus"></a>
<a id="tocSdisputestatus"></a>
<a id="tocsdisputestatus"></a>

```json
"draft"
```

<h2 id="tocS_DisputeType">DisputeType</h2>
<!-- backwards compatibility -->
<a id="schemadisputetype"></a>
<a id="schema_DisputeType"></a>
<a id="tocSdisputetype"></a>
<a id="tocsdisputetype"></a>

```json
"string"
```

<h2 id="tocS_DuplicateInfo">DuplicateInfo</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateinfo"></a>
<a id="schema_DuplicateInfo"></a>
<a id="tocSduplicateinfo"></a>
<a id="tocsduplicateinfo"></a>

```json
{
  "duplicateTransactionId": "string",
  "sameCard": true,
  "sameIssuer": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicateTransactionId|string|true|none|The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.|
|sameCard|boolean|true|none|The duplicate charge was made on the same card. Possible values: **true**, **false**.|
|sameIssuer|boolean|false|none|The issuer associated with each charge is the same. Possible values: **true**, **false**.|

<h2 id="tocS_FraudInfo">FraudInfo</h2>
<!-- backwards compatibility -->
<a id="schemafraudinfo"></a>
<a id="schema_FraudInfo"></a>
<a id="tocSfraudinfo"></a>
<a id="tocsfraudinfo"></a>

```json
{
  "cardDoesNotBelongToCardholder": true,
  "cardWasCounterfeited": true,
  "descriptionOfIssue": "string",
  "reportOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardDoesNotBelongToCardholder|boolean|true|none|The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen.|
|cardWasCounterfeited|boolean|true|none|The card was counterfeited.|
|descriptionOfIssue|string|true|none|Your description of the issue for raising a dispute of `type` **fraud**.|
|reportOnly|boolean|false|none|Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**.|

<h2 id="tocS_InvalidField">InvalidField</h2>
<!-- backwards compatibility -->
<a id="schemainvalidfield"></a>
<a id="schema_InvalidField"></a>
<a id="tocSinvalidfield"></a>
<a id="tocsinvalidfield"></a>

```json
{
  "message": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Description of the validation error.|
|name|string|true|none|The field that has an invalid value.|
|value|string|true|none|The invalid value.|

<h2 id="tocS_MerchantRefuseAdvise">MerchantRefuseAdvise</h2>
<!-- backwards compatibility -->
<a id="schemamerchantrefuseadvise"></a>
<a id="schema_MerchantRefuseAdvise"></a>
<a id="tocSmerchantrefuseadvise"></a>
<a id="tocsmerchantrefuseadvise"></a>

```json
"MRRA"
```

<h2 id="tocS_NotAsDescribedInfo">NotAsDescribedInfo</h2>
<!-- backwards compatibility -->
<a id="schemanotasdescribedinfo"></a>
<a id="schema_NotAsDescribedInfo"></a>
<a id="tocSnotasdescribedinfo"></a>
<a id="tocsnotasdescribedinfo"></a>

```json
{
  "attemptedToReturn": true,
  "dateAttemptedToReturn": "1970-01-01",
  "dateOfCancellation": "1970-01-01",
  "dateOfFirstNegotiations": "1970-01-01",
  "dateOfReturn": "1970-01-01",
  "dateReturnReceived": "1970-01-01",
  "descriptionOfIssue": "string",
  "didAttemptToResolve": true,
  "didCardholderReturn": true,
  "didMerchantAcceptCancellation": true,
  "disputeDueTo": "notAsDescribed",
  "evidenceOfNegotiationsWithMerchant": true,
  "goodsOrServices": "goods",
  "isNonFiatOrNft": true,
  "lastExpectedDate": "1970-01-01",
  "reasonMerchantRefused": "MRRA",
  "resolutionProhibitedByLaw": true,
  "returnMethod": "faceToFace",
  "shippingTrackingNumber": "string",
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptedToReturn|boolean|false|none|Indicates if the cardholder attempted to return the merchandise, but was unsuccessful. Required if the value of `didCardholderReturn` is **false**.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the merchandise and what happened to the merchandise when the return was unsuccessful.|
|dateAttemptedToReturn|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the merchandise. Required if the value of `attemptedToReturn` is **true**.|
|dateOfCancellation|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the goods or services were cancelled by the cardholder. Required if the value of `whoCancelled` is **cardholder**.|
|dateOfFirstNegotiations|string(date)|false|none|The date, in **YYYY-MM-DD** format, that negotiations with the merchant began. Required if the value of `evidenceOfNegotiationsWithMerchant` is **true**.|
|dateOfReturn|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder shipped or handed back the merchandise to the merchant. Required if the value of `didCardholderReturn` is **true**.|
|dateReturnReceived|string(date)|false|none|The date, in **YYYY-MM-DD** format, when the merchant received the returned merchandise. Required if the value of `didCardholderReturn` is **true**.|
|descriptionOfIssue|string|true|none|Your description of the issue for raising a dispute of `type` **notAsDescribed**. Make sure the cardholder provides information that covers the following:<br><br> * A description of the goods or services purchased, and why they did not fit the description of what they thought they purchased.<br><br> * If the cardholder cancelled services that they purchased: A description of how the services were cancelled.<br><br> * If the cardholder attempted to negotiate a resolution: A description of the negotiations that took place with the merchant.<br><br> * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.<br><br> * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods and what they did with the goods (for example, destroyed them).|
|didAttemptToResolve|boolean|true|none|Indicates if the cardholder attempted to resolve the issue directly with the merchant before raising the dispute.<br><br>Possible values: **true**, **false**.|
|didCardholderReturn|boolean|false|none|Indicates if the cardholder returned the merchandise to the merchant. Required if the value of `goodsOrServices` is **goods**, or if the value of `disputeDueTo` is **defectiveMerchandise**.<br><br>Possible values: **true**, **false**.|
|didMerchantAcceptCancellation|boolean|false|none|Indicates if the merchant accepted the cancellation. Required if the cardholder cancelled the service within 15 days of the current date.<br><br>Possible values: **true**, **false**.|
|disputeDueTo|[DisputeDueTo](#schemadisputedueto)|true|none|Indicates the kind of dispute being raised by the cardholder.<br><br>Possible values: **notAsDescribed**, **defectiveMerchandise**.|
|evidenceOfNegotiationsWithMerchant|boolean|false|none|Indicates if the cardholder attempted to negotiate a resolution with the merchant before raising the dispute. Required if more than 120 days have passed since both the `lastExpectedDate` and the transaction processing date.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about the negotiations that took place with the merchant.|
|goodsOrServices|[ProductType](#schemaproducttype)|false|none|The type of purchase being disputed. Required if the value of `disputeDueTo` is **notAsDescribed**.<br><br>Possible values: **goods**, **services**.|
|isNonFiatOrNft|boolean|false|none|Indicates if the transaction is non-fiat or non-fungible token (NFT) related. Required if the value of `goodsOrServices` is **services**.<br><br>Possible values: **true**, **false**.|
|lastExpectedDate|string(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant promised delivery of the goods or services.|
|reasonMerchantRefused|[NotAsDescribedMerchantRefuseAdvise](#schemanotasdescribedmerchantrefuseadvise)|false|none|The reason the merchant gave for refusing the return. Required if the value of `attemptedToReturn` is **true**.<br><br>Possible values:<br><br> * **MRRA**: The merchant refused to provide return authorization.<br><br> * **MRRM**: The merchant refused to accept the returned merchandise.<br><br> * **MICNRM**: The merchant told the cardholder not to return the merchandise.<br><br> * **MNLER**: The merchant no longer exists or is not responding.<br><br> * **MNPCIR**: The merchant did not provide clear instructions on how to return the merchandise.|
|resolutionProhibitedByLaw|boolean|false|none|Indicates if local law prohibits the cardholder from attempting to resolve the issue with the merchant. Required if the value of `didAttemptToResolve` is **false**. If this value is also **false**, the dispute cannot proceed.<br><br>Possible values: **true**, **false**.|
|returnMethod|[ReturnMethod](#schemareturnmethod)|false|none|The method used to return the merchandise. Required if the value of `didCardholderReturn` is **true**.<br><br>Possible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.<br><br>If the value of this parameter is **other**, provide information in `descriptionOfIssue` about how the merchandise was returned.|
|shippingTrackingNumber|string|false|none|The tracking number for the shipment used to return the merchandise.|
|whoCancelled|[CancellingEntity](#schemacancellingentity)|false|none|The party that initiated cancellation of the service. Required if the value of `goodsOrServices` is **services**.<br><br>Possible values: **merchant**, **cardholder**.<br><br>If the value of this parameter is **cardholder**, provide information in `descriptionOfIssue` about how the service was cancelled.|

#### Enumerated Values

|Property|Value|
|---|---|
|disputeDueTo|notAsDescribed|
|disputeDueTo|defectiveMerchandise|
|goodsOrServices|goods|
|goodsOrServices|services|
|reasonMerchantRefused|MRRA|
|reasonMerchantRefused|MRRM|
|reasonMerchantRefused|MICNRM|
|reasonMerchantRefused|MNLER|
|reasonMerchantRefused|MNPCIR|
|returnMethod|faceToFace|
|returnMethod|fedEx|
|returnMethod|dhl|
|returnMethod|ups|
|returnMethod|postalService|
|returnMethod|other|
|whoCancelled|merchant|
|whoCancelled|cardholder|

<h2 id="tocS_NotAsDescribedInfoUpdate">NotAsDescribedInfoUpdate</h2>
<!-- backwards compatibility -->
<a id="schemanotasdescribedinfoupdate"></a>
<a id="schema_NotAsDescribedInfoUpdate"></a>
<a id="tocSnotasdescribedinfoupdate"></a>
<a id="tocsnotasdescribedinfoupdate"></a>

```json
{
  "attemptedToReturn": true,
  "dateAttemptedToReturn": "1970-01-01",
  "dateOfCancellation": "1970-01-01",
  "dateOfFirstNegotiations": "1970-01-01",
  "dateOfReturn": "1970-01-01",
  "dateReturnReceived": "1970-01-01",
  "descriptionOfIssue": "string",
  "didAttemptToResolve": true,
  "didCardholderReturn": true,
  "didMerchantAcceptCancellation": true,
  "disputeDueTo": "notAsDescribed",
  "evidenceOfNegotiationsWithMerchant": true,
  "goodsOrServices": "goods",
  "isNonFiatOrNft": true,
  "lastExpectedDate": "1970-01-01",
  "reasonMerchantRefused": "MRRA",
  "resolutionProhibitedByLaw": true,
  "returnMethod": "faceToFace",
  "shippingTrackingNumber": "string",
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attemptedToReturn|boolean \| null|false|none|Indicates if the cardholder attempted to return the merchandise, but was unsuccessful. Required if the value of `didCardholderReturn` is **false**.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about how the cardholder attempted to return the merchandise and what happened to the merchandise when the return was unsuccessful.|
|dateAttemptedToReturn|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder attempted to return the merchandise. Required if the value of `attemptedToReturn` is **true**.|
|dateOfCancellation|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the goods or services were cancelled by the cardholder. Required if the value of `whoCancelled` is **cardholder**.|
|dateOfFirstNegotiations|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that negotiations with the merchant began. Required if the value of `evidenceOfNegotiationsWithMerchant` is **true**.|
|dateOfReturn|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the cardholder shipped or handed back the merchandise to the merchant. Required if the value of `didCardholderReturn` is **true**.|
|dateReturnReceived|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, when the merchant received the returned merchandise. Required if the value of `didCardholderReturn` is **true**.|
|descriptionOfIssue|string|false|none|Your description of the issue for raising a dispute of `type` **notAsDescribed**. Make sure the cardholder provides information that covers the following:<br><br> * A description of the goods or services purchased, and why they did not fit the description of what they thought they purchased.<br><br> * If the cardholder cancelled services that they purchased: A description of how the services were cancelled.<br><br> * If the cardholder attempted to negotiate a resolution: A description of the negotiations that took place with the merchant.<br><br> * If the goods or services were cancelled before shipment: A description of how the cardholder attempted to cancel the goods or services.<br><br> * If the cardholder attempted to return the goods: A description of how the cardholder attempted to return the goods and what they did with the goods (for example, destroyed them).|
|didAttemptToResolve|boolean|false|none|Indicates if the cardholder attempted to resolve the issue directly with the merchant before raising the dispute.<br><br>Possible values: **true**, **false**.|
|didCardholderReturn|boolean \| null|false|none|Indicates if the cardholder returned the merchandise to the merchant. Required if the value of `goodsOrServices` is **goods**, or if the value of `disputeDueTo` is **defectiveMerchandise**.<br><br>Possible values: **true**, **false**.|
|didMerchantAcceptCancellation|boolean \| null|false|none|Indicates if the merchant accepted the cancellation. Required if the cardholder cancelled the service within 15 days of the current date.<br><br>Possible values: **true**, **false**.|
|disputeDueTo|[DisputeDueTo](#schemadisputedueto)|false|none|Indicates the kind of dispute being raised by the cardholder.<br><br>Possible values: **notAsDescribed**, **defectiveMerchandise**.|
|evidenceOfNegotiationsWithMerchant|boolean \| null|false|none|Indicates if the cardholder attempted to negotiate a resolution with the merchant before raising the dispute. Required if more than 120 days have passed since both the `lastExpectedDate` and the transaction processing date.<br><br>Possible values: **true**, **false**.<br><br>If the value of this parameter is **true**, provide information in `descriptionOfIssue` about the negotiations that took place with the merchant.|
|goodsOrServices|object|false|none|The type of purchase being disputed. Required if the value of `disputeDueTo` is **notAsDescribed**.<br><br>Possible values: **goods**, **services**.|
|isNonFiatOrNft|boolean \| null|false|none|Indicates if the transaction is non-fiat or non-fungible token (NFT) related. Required if the value of `goodsOrServices` is **services**.<br><br>Possible values: **true**, **false**.|
|lastExpectedDate|string \| null(date)|false|none|The date, in **YYYY-MM-DD** format, that the merchant promised delivery of the goods or services.|
|reasonMerchantRefused|object|false|none|The reason the merchant gave for refusing the return. Required if the value of `attemptedToReturn` is **true**.<br><br>Possible values:<br><br> * **MRRA**: The merchant refused to provide return authorization.<br><br> * **MRRM**: The merchant refused to accept the returned merchandise.<br><br> * **MICNRM**: The merchant told the cardholder not to return the merchandise.<br><br> * **MNLER**: The merchant no longer exists or is not responding.<br><br> * **MNPCIR**: The merchant did not provide clear instructions on how to return the merchandise.|
|resolutionProhibitedByLaw|boolean \| null|false|none|Indicates if local law prohibits the cardholder from attempting to resolve the issue with the merchant. Required if the value of `didAttemptToResolve` is **false**. If this value is also **false**, the dispute cannot proceed.<br><br>Possible values: **true**, **false**.|
|returnMethod|object|false|none|The method used to return the merchandise. Required if the value of `didCardholderReturn` is **true**.<br><br>Possible values: **faceToFace**, **fedEx**, **dhl**, **ups**, **postalService**, **other**.<br><br>If the value of this parameter is **other**, provide information in `descriptionOfIssue` about how the merchandise was returned.|
|shippingTrackingNumber|string \| null|false|none|The tracking number for the shipment used to return the merchandise.|
|whoCancelled|object|false|none|The party that initiated cancellation of the service. Required if the value of `goodsOrServices` is **services**.<br><br>Possible values: **merchant**, **cardholder**.<br><br>If the value of this parameter is **cardholder**, provide information in `descriptionOfIssue` about how the service was cancelled.|

#### Enumerated Values

|Property|Value|
|---|---|
|disputeDueTo|notAsDescribed|
|disputeDueTo|defectiveMerchandise|

<h2 id="tocS_NotAsDescribedMerchantRefuseAdvise">NotAsDescribedMerchantRefuseAdvise</h2>
<!-- backwards compatibility -->
<a id="schemanotasdescribedmerchantrefuseadvise"></a>
<a id="schema_NotAsDescribedMerchantRefuseAdvise"></a>
<a id="tocSnotasdescribedmerchantrefuseadvise"></a>
<a id="tocsnotasdescribedmerchantrefuseadvise"></a>

```json
"MRRA"
```

<h2 id="tocS_NotDeliveredInfo">NotDeliveredInfo</h2>
<!-- backwards compatibility -->
<a id="schemanotdeliveredinfo"></a>
<a id="schema_NotDeliveredInfo"></a>
<a id="tocSnotdeliveredinfo"></a>
<a id="tocsnotdeliveredinfo"></a>

```json
{
  "agreedDeliveryLocation": "string",
  "dateOfCancellation": "1970-01-01",
  "deliveredToWrongLocation": true,
  "descriptionOfIssue": "string",
  "didCardholderReturn": true,
  "isDeliveryLate": true,
  "isMerchantBankrupt": true,
  "isNonFiatOrNft": true,
  "lastExpectedDate": "1970-01-01",
  "whatWasNotDelivered": "goods",
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreedDeliveryLocation|string|false|none|The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.|
|dateOfCancellation|string(date)|false|none|The date the undelivered goods or services were cancelled in YYYY-MM-DD format.|
|deliveredToWrongLocation|boolean|false|none|Indicates goods were delivered to the wrong location.<br><br>Possible values: **true**, **false**.|
|descriptionOfIssue|string|true|none|Your description of the issue for raising a dispute of `type` **notDelivered**.|
|didCardholderReturn|boolean|false|none|Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.<br><br>Possible values: **true**, **false**.|
|isDeliveryLate|boolean|false|none|Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.<br><br>Possible values: **true**, **false**.|
|isMerchantBankrupt|boolean|false|none|Indicates if the transaction was processed by a bankrupt merchant.<br><br>Possible values: **true**, **false**.|
|isNonFiatOrNft|boolean|false|none|Indicates if the transaction is non-fiat or non-fungible token (NFT) related.<br><br>Possible values: **true**, **false**.|
|lastExpectedDate|string(date)|true|none|The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.|
|whatWasNotDelivered|[ProductType](#schemaproducttype)|true|none|The type of product that you expected to receive.<br><br>Possible values: **goods**, **services**.|
|whoCancelled|[CancellingEntity](#schemacancellingentity)|false|none|The party that initiated the cancellation of the transaction.<br><br>Possible values: **merchant**, **cardholder**.|

#### Enumerated Values

|Property|Value|
|---|---|
|whatWasNotDelivered|goods|
|whatWasNotDelivered|services|
|whoCancelled|merchant|
|whoCancelled|cardholder|

<h2 id="tocS_OtherInfo">OtherInfo</h2>
<!-- backwards compatibility -->
<a id="schemaotherinfo"></a>
<a id="schema_OtherInfo"></a>
<a id="tocSotherinfo"></a>
<a id="tocsotherinfo"></a>

```json
{
  "descriptionOfIssue": "string",
  "subType": "atmDispute",
  "whatWasPurchased": "goods"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptionOfIssue|string|true|none|Your description of the issue for raising a dispute of `type` **other**.|
|subType|[SubType](#schemasubtype)|true|none|The specific category of **other** dispute that you are raising.<br><br>Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**.|
|whatWasPurchased|[ProductType](#schemaproducttype)|true|none|The type of product that you purchased.<br><br>Possible values: **goods**, **services**.|

#### Enumerated Values

|Property|Value|
|---|---|
|subType|atmDispute|
|subType|cancelledGoodsServices|
|subType|cancelledRecurring|
|subType|creditNotProcessed|
|subType|counterfeit|
|subType|notAsDescribed|
|whatWasPurchased|goods|
|whatWasPurchased|services|

<h2 id="tocS_PatchableDisputeRequest">PatchableDisputeRequest</h2>
<!-- backwards compatibility -->
<a id="schemapatchabledisputerequest"></a>
<a id="schema_PatchableDisputeRequest"></a>
<a id="tocSpatchabledisputerequest"></a>
<a id="tocspatchabledisputerequest"></a>

```json
{
  "cancelledInfo": {
    "attemptedToReturn": true,
    "certificationGuaranteedReservation": "GR",
    "dateOfAttemptedReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateOfService": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didCardholderCancelBeforeShipment": true,
    "didCardholderReceiveGoods": true,
    "didCardholderReturn": true,
    "goodsOrServices": "goods",
    "lastExpectedDate": "1970-01-01",
    "merchantRefuseAdvise": "MRRA",
    "returnMethod": "faceToFace",
    "serviceType": "timeshare",
    "shippingTrackingNumber": "string",
    "timeshareDate": "1970-01-01",
    "wasCancellationPolicyProvided": true,
    "whoCancelled": "merchant"
  },
  "duplicateInfo": {
    "duplicateTransactionId": "string",
    "sameCard": true,
    "sameIssuer": true
  },
  "fraudInfo": {
    "cardDoesNotBelongToCardholder": true,
    "cardWasCounterfeited": true,
    "descriptionOfIssue": "string",
    "reportOnly": true
  },
  "notAsDescribedInfo": {
    "attemptedToReturn": true,
    "dateAttemptedToReturn": "1970-01-01",
    "dateOfCancellation": "1970-01-01",
    "dateOfFirstNegotiations": "1970-01-01",
    "dateOfReturn": "1970-01-01",
    "dateReturnReceived": "1970-01-01",
    "descriptionOfIssue": "string",
    "didAttemptToResolve": true,
    "didCardholderReturn": true,
    "didMerchantAcceptCancellation": true,
    "disputeDueTo": "notAsDescribed",
    "evidenceOfNegotiationsWithMerchant": true,
    "goodsOrServices": "goods",
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "reasonMerchantRefused": "MRRA",
    "resolutionProhibitedByLaw": true,
    "returnMethod": "faceToFace",
    "shippingTrackingNumber": "string",
    "whoCancelled": "merchant"
  },
  "notDeliveredInfo": {
    "agreedDeliveryLocation": "string",
    "dateOfCancellation": "1970-01-01",
    "deliveredToWrongLocation": true,
    "descriptionOfIssue": "string",
    "didCardholderReturn": true,
    "isDeliveryLate": true,
    "isMerchantBankrupt": true,
    "isNonFiatOrNft": true,
    "lastExpectedDate": "1970-01-01",
    "whatWasNotDelivered": "goods",
    "whoCancelled": "merchant"
  },
  "otherInfo": {
    "descriptionOfIssue": "string",
    "subType": "atmDispute",
    "whatWasPurchased": "goods"
  },
  "status": "draft"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancelledInfo|object|false|none|Additional information for raising a dispute of `type` **cancelled**. Required for disputes of `type` **cancelled**.|
|duplicateInfo|object|false|none|Additional information for raising a dispute of `type` **duplicate**. Required for disputes of `type` **duplicate**.|
|fraudInfo|object|false|none|Additional information for raising a dispute of `type` **fraud**. Required for disputes of `type` **fraud**.|
|notAsDescribedInfo|object|false|none|Additional information for raising a dispute of `type` **notAsDescribed**. Required for disputes of `type` **notAsDescribed**.|
|notDeliveredInfo|object|false|none|Additional information for raising a dispute of `type` **notDelivered**. Required for disputes of `type` **notDelivered**.|
|otherInfo|object|false|none|Additional information for raising a dispute of `type` **other**. Required for disputes of `type` **other**.<br><br>**Note:** The **other** dispute `type` is deprecated. Do not create or submit any disputes for this dispute `type`.|
|status|object|false|none|The current status of the dispute.<br><br>When you create a dispute, you can only set the `status` to **draft**. When you update a dispute, you can set the `status` to **submitted** or **closed**.<br><br>Possible values: **draft**, **submitted**, **closed**, **won**, **chargeback**, **secondPresentment**.|

<h2 id="tocS_PatchableDuplicateInfo">PatchableDuplicateInfo</h2>
<!-- backwards compatibility -->
<a id="schemapatchableduplicateinfo"></a>
<a id="schema_PatchableDuplicateInfo"></a>
<a id="tocSpatchableduplicateinfo"></a>
<a id="tocspatchableduplicateinfo"></a>

```json
{
  "duplicateTransactionId": "string",
  "sameCard": true,
  "sameIssuer": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicateTransactionId|string|false|none|The transaction id associated with the duplicate charge for which you are disputing. The disputed transaction must be in the same amount as the duplicate transaction.|
|sameCard|boolean|false|none|The duplicate charge was made on the same card. Possible values: **true**, **false**.|
|sameIssuer|boolean \| null|false|none|The issuer associated with each charge is the same. Possible values: **true**, **false**.|

<h2 id="tocS_PatchableFraudInfo">PatchableFraudInfo</h2>
<!-- backwards compatibility -->
<a id="schemapatchablefraudinfo"></a>
<a id="schema_PatchableFraudInfo"></a>
<a id="tocSpatchablefraudinfo"></a>
<a id="tocspatchablefraudinfo"></a>

```json
{
  "cardDoesNotBelongToCardholder": true,
  "cardWasCounterfeited": true,
  "descriptionOfIssue": "string",
  "reportOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardDoesNotBelongToCardholder|boolean|false|none|The card is no longer in the cardholder's possession. Set to **true** if the card is lost or stolen.|
|cardWasCounterfeited|boolean|false|none|The card was counterfeited.|
|descriptionOfIssue|string|false|none|Your description of the issue for raising a dispute of `type` **fraud**.|
|reportOnly|boolean \| null|false|none|Set to **true** to report fraud to Adyen with no further action, such as a request for a chargeback or fee reversal. The default value is **false**.|

<h2 id="tocS_PatchableNotDeliveredInfo">PatchableNotDeliveredInfo</h2>
<!-- backwards compatibility -->
<a id="schemapatchablenotdeliveredinfo"></a>
<a id="schema_PatchableNotDeliveredInfo"></a>
<a id="tocSpatchablenotdeliveredinfo"></a>
<a id="tocspatchablenotdeliveredinfo"></a>

```json
{
  "agreedDeliveryLocation": "string",
  "dateOfCancellation": "1970-01-01",
  "deliveredToWrongLocation": true,
  "descriptionOfIssue": "string",
  "didCardholderReturn": true,
  "isDeliveryLate": true,
  "isMerchantBankrupt": true,
  "isNonFiatOrNft": true,
  "lastExpectedDate": "1970-01-01",
  "whatWasNotDelivered": "goods",
  "whoCancelled": "merchant"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agreedDeliveryLocation|string \| null|false|none|The delivery location specified by the cardholder. Required if **deliveredToWrongLocation** is **true**.|
|dateOfCancellation|string \| null(date)|false|none|The date the undelivered goods or services were cancelled in YYYY-MM-DD format.|
|deliveredToWrongLocation|boolean \| null|false|none|Indicates goods were delivered to the wrong location.<br><br>Possible values: **true**, **false**.|
|descriptionOfIssue|string|false|none|Your description of the issue for raising a dispute of `type` **notDelivered**.|
|didCardholderReturn|boolean \| null|false|none|Indicates if the cardholder returned the goods to the merchant. Required if **isDeliveryLate** is **true**.<br><br>Possible values: **true**, **false**.|
|isDeliveryLate|boolean \| null|false|none|Indicates if the goods or services were delivered late. Required if **whatWasNotDelivered** is **goods**.<br><br>Possible values: **true**, **false**.|
|isMerchantBankrupt|boolean \| null|false|none|Indicates if the transaction was processed by a bankrupt merchant.<br><br>Possible values: **true**, **false**.|
|isNonFiatOrNft|boolean \| null|false|none|Indicates if the transaction is non-fiat or non-fungible token (NFT) related.<br><br>Possible values: **true**, **false**.|
|lastExpectedDate|string(date)|false|none|The date the undelivered goods or services were expected to be delivered in YYYY-MM-DD format.|
|whatWasNotDelivered|[ProductType](#schemaproducttype)|false|none|The type of product that you expected to receive.<br><br>Possible values: **goods**, **services**.|
|whoCancelled|object|false|none|The party that initiated the cancellation of the transaction.<br><br>Possible values: **merchant**, **cardholder**.|

#### Enumerated Values

|Property|Value|
|---|---|
|whatWasNotDelivered|goods|
|whatWasNotDelivered|services|

<h2 id="tocS_PatchableOtherInfo">PatchableOtherInfo</h2>
<!-- backwards compatibility -->
<a id="schemapatchableotherinfo"></a>
<a id="schema_PatchableOtherInfo"></a>
<a id="tocSpatchableotherinfo"></a>
<a id="tocspatchableotherinfo"></a>

```json
{
  "descriptionOfIssue": "string",
  "subType": "atmDispute",
  "whatWasPurchased": "goods"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptionOfIssue|string|false|none|Your description of the issue for raising a dispute of `type` **other**.|
|subType|[SubType](#schemasubtype)|false|none|The specific category of **other** dispute that you are raising.<br><br>Possible values: **atmDispute**, **cancelledGoodsServices**, **cancelledRecurring**, **counterfeit**, **creditNotProcessed**, **notAsDescribed**.|
|whatWasPurchased|[ProductType](#schemaproducttype)|false|none|The type of product that you purchased.<br><br>Possible values: **goods**, **services**.|

#### Enumerated Values

|Property|Value|
|---|---|
|subType|atmDispute|
|subType|cancelledGoodsServices|
|subType|cancelledRecurring|
|subType|creditNotProcessed|
|subType|counterfeit|
|subType|notAsDescribed|
|whatWasPurchased|goods|
|whatWasPurchased|services|

<h2 id="tocS_ProductType">ProductType</h2>
<!-- backwards compatibility -->
<a id="schemaproducttype"></a>
<a id="schema_ProductType"></a>
<a id="tocSproducttype"></a>
<a id="tocsproducttype"></a>

```json
"goods"
```

<h2 id="tocS_ReturnMethod">ReturnMethod</h2>
<!-- backwards compatibility -->
<a id="schemareturnmethod"></a>
<a id="schema_ReturnMethod"></a>
<a id="tocSreturnmethod"></a>
<a id="tocsreturnmethod"></a>

```json
"faceToFace"
```

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
"timeshare"
```

<h2 id="tocS_SubType">SubType</h2>
<!-- backwards compatibility -->
<a id="schemasubtype"></a>
<a id="schema_SubType"></a>
<a id="tocSsubtype"></a>
<a id="tocssubtype"></a>

```json
"atmDispute"
```
