<h1 id="storecove-api">Storecove API v2.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Storecove API

Base URLs:

* <a href="https://api.storecove.com/api/v2">https://api.storecove.com/api/v2</a>

Email: <a href="mailto:apisupport@storecove.nl">apisupport@storecove.nl</a> 

# Authentication

* API Key (Bearer)
    - Parameter Name: **Authorization**, in: header.

<h1 id="storecove-api-invoicesubmissions">InvoiceSubmissions</h1>

## Submit a new invoice

<a id="opIdcreate_invoice_submission"></a>

> Code samples

```bash
curl https://example.com/invoice_submissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "createPrimaryImage": true,
    "document": "string",
    "documentUrl": "http://example.com",
    "idempotencyGuid": "stringstringstringstringstringstring",
    "invoice": {
      "accountingCost": "string",
      "accountingCurrencyTaxAmount": 0,
      "accountingCurrencyTaxAmountCurrency": "AED",
      "accountingCustomerParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        },
        "publicIdentifiers": [
          {
            "id": "string",
            "scheme": "string"
          }
        ]
      },
      "accountingSupplierParty": {
        "party": {
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "amountExcludingVat": 0,
          "baseAmountExcludingTax": 0,
          "reason": "Agreed settlement",
          "reasonCode": "string",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "amountIncludingVat": 0,
      "attachments": [
        {
          "description": "string",
          "document": "string",
          "documentId": "string",
          "filename": "string",
          "mimeType": "application/pdf",
          "primaryImage": false
        }
      ],
      "billingReference": "string",
      "buyerReference": "string",
      "consumerTaxMode": false,
      "contractDocumentReference": "string",
      "delivery": {
        "actualDate": "string",
        "deliveryLocation": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "id": "string",
          "locationName": "string",
          "schemeAgencyId": "string",
          "schemeId": "string"
        },
        "deliveryParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "deliveryPartyName": "string",
        "quantity": 1,
        "requestedDeliveryPeriod": "string",
        "shippingMarks": "string"
      },
      "documentCurrencyCode": "AED",
      "dueDate": "string",
      "invoiceLines": [
        {
          "accountingCost": "string",
          "additionalItemProperties": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "allowanceCharge": 0,
          "allowanceCharges": [
            {
              "amountExcludingTax": 0,
              "baseAmountExcludingTax": 0,
              "reason": "string",
              "reasonCode": "string"
            }
          ],
          "amountExcludingVat": 0,
          "buyersItemIdentification": "string",
          "description": "string",
          "invoicePeriod": "string",
          "itemPrice": 1,
          "lineId": "string",
          "name": "string",
          "note": "string",
          "orderLineReferenceLineId": "string",
          "quantity": 1,
          "quantityUnitCode": "C62",
          "references": [
            {
              "documentId": "string",
              "documentType": "purchase_order",
              "issueDate": "string",
              "lineId": "string"
            }
          ],
          "sellersItemIdentification": "string",
          "standardItemIdentification": "string",
          "standardItemIdentificationSchemeAgencyId": "9",
          "standardItemIdentificationSchemeId": "GTIN",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "invoiceNumber": "string",
      "invoicePeriod": "string",
      "invoiceType": "380",
      "issueDate": "string",
      "issueReasons": [
        "string"
      ],
      "note": "string",
      "orderReference": "string",
      "paymentMeansArray": [
        {
          "account": "string",
          "amount": 0,
          "branche_code": "string",
          "code": "credit_transfer",
          "holder": "string",
          "mandate": "string",
          "network": "string",
          "paymentId": "string"
        }
      ],
      "paymentMeansBic": "string",
      "paymentMeansCode": "online_payment_service",
      "paymentMeansIban": "string",
      "paymentMeansPaymentId": "string",
      "paymentTerms": {
        "note": "string"
      },
      "preferredInvoiceType": "prefer_autodetect",
      "prepaidAmount": 0,
      "projectReference": "string",
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "salesOrderId": "string",
      "selfBillingMode": false,
      "taxExemptReason": "export",
      "taxPointDate": "string",
      "taxSubtotals": [
        {
          "category": "standard",
          "country": "AD",
          "percentage": 0,
          "taxAmount": 0,
          "taxableAmount": 0
        }
      ],
      "taxSystem": "tax_line_amounts",
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ],
      "transactionType": "b2b",
      "ublExtensions": [
        "string"
      ],
      "vatReverseCharge": false,
      "x2y": "b2b"
    },
    "invoiceData": {
      "conversionStrategy": "ubl",
      "document": "string"
    },
    "invoiceRecipient": {
      "emails": [
        "user@example.com"
      ],
      "publicIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ]
    },
    "legalEntityId": 0,
    "legalSupplierId": 0,
    "mode": "direct",
    "routing": {
      "clearWithoutSending": false,
      "eIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ],
      "emails": [
        "user@example.com"
      ]
    },
    "supplierId": 0
  }'
```

`POST /invoice_submissions`

DEPRECATED. Use the new /document_submissions endpoint. Submit an invoice for delivery.

> Body parameter

```json
{
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "createPrimaryImage": true,
  "document": "string",
  "documentUrl": "http://example.com",
  "idempotencyGuid": "stringstringstringstringstringstring",
  "invoice": {
    "accountingCost": "string",
    "accountingCurrencyTaxAmount": 0,
    "accountingCurrencyTaxAmountCurrency": "AED",
    "accountingCustomerParty": {
      "party": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "companyName": "string",
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      },
      "publicIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ]
    },
    "accountingSupplierParty": {
      "party": {
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      }
    },
    "allowanceCharges": [
      {
        "amountExcludingTax": 0,
        "amountExcludingVat": 0,
        "baseAmountExcludingTax": 0,
        "reason": "Agreed settlement",
        "reasonCode": "string",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "amountIncludingVat": 0,
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "billingReference": "string",
    "buyerReference": "string",
    "consumerTaxMode": false,
    "contractDocumentReference": "string",
    "delivery": {
      "actualDate": "string",
      "deliveryLocation": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "id": "string",
        "locationName": "string",
        "schemeAgencyId": "string",
        "schemeId": "string"
      },
      "deliveryParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "deliveryPartyName": "string",
      "quantity": 1,
      "requestedDeliveryPeriod": "string",
      "shippingMarks": "string"
    },
    "documentCurrencyCode": "AED",
    "dueDate": "string",
    "invoiceLines": [
      {
        "accountingCost": "string",
        "additionalItemProperties": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "allowanceCharge": 0,
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "baseAmountExcludingTax": 0,
            "reason": "string",
            "reasonCode": "string"
          }
        ],
        "amountExcludingVat": 0,
        "buyersItemIdentification": "string",
        "description": "string",
        "invoicePeriod": "string",
        "itemPrice": 1,
        "lineId": "string",
        "name": "string",
        "note": "string",
        "orderLineReferenceLineId": "string",
        "quantity": 1,
        "quantityUnitCode": "C62",
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "sellersItemIdentification": "string",
        "standardItemIdentification": "string",
        "standardItemIdentificationSchemeAgencyId": "9",
        "standardItemIdentificationSchemeId": "GTIN",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "invoiceNumber": "string",
    "invoicePeriod": "string",
    "invoiceType": "380",
    "issueDate": "string",
    "issueReasons": [
      "string"
    ],
    "note": "string",
    "orderReference": "string",
    "paymentMeansArray": [
      {
        "account": "string",
        "amount": 0,
        "branche_code": "string",
        "code": "credit_transfer",
        "holder": "string",
        "mandate": "string",
        "network": "string",
        "paymentId": "string"
      }
    ],
    "paymentMeansBic": "string",
    "paymentMeansCode": "online_payment_service",
    "paymentMeansIban": "string",
    "paymentMeansPaymentId": "string",
    "paymentTerms": {
      "note": "string"
    },
    "preferredInvoiceType": "prefer_autodetect",
    "prepaidAmount": 0,
    "projectReference": "string",
    "references": [
      {
        "documentId": "string",
        "documentType": "purchase_order",
        "issueDate": "string",
        "lineId": "string"
      }
    ],
    "salesOrderId": "string",
    "selfBillingMode": false,
    "taxExemptReason": "export",
    "taxPointDate": "string",
    "taxSubtotals": [
      {
        "category": "standard",
        "country": "AD",
        "percentage": 0,
        "taxAmount": 0,
        "taxableAmount": 0
      }
    ],
    "taxSystem": "tax_line_amounts",
    "taxesDutiesFees": [
      {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      }
    ],
    "transactionType": "b2b",
    "ublExtensions": [
      "string"
    ],
    "vatReverseCharge": false,
    "x2y": "b2b"
  },
  "invoiceData": {
    "conversionStrategy": "ubl",
    "document": "string"
  },
  "invoiceRecipient": {
    "emails": [
      "user@example.com"
    ],
    "publicIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ]
  },
  "legalEntityId": 0,
  "legalSupplierId": 0,
  "mode": "direct",
  "routing": {
    "clearWithoutSending": false,
    "eIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ],
    "emails": [
      "user@example.com"
    ]
  },
  "supplierId": 0
}
```

<h3 id="submit-a-new-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InvoiceSubmission](#schemainvoicesubmission)|true|Invoice to submit|
|» attachments|body|[[Attachment](#schemaattachment)]|false|An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|» createPrimaryImage|body|boolean|false|DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true.|
|» document|body|string|false|DEPRECATED. Use attachments.|
|» documentUrl|body|string(uri)|false|DEPRECATED. Use attachments.|
|» idempotencyGuid|body|string|false|A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed.|
|» invoice|body|[Invoice](#schemainvoice)|false|The invoice to send. Provide either invoice, or invoiceData, but not both.|
|» invoiceData|body|[InvoiceData](#schemainvoicedata)|false|The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.|
|» invoiceRecipient|body|[InvoiceRecipient](#schemainvoicerecipient)|false|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|
|» legalEntityId|body|integer|false|The id of the LegalEntity this invoice should be sent for.|
|» legalSupplierId|body|integer|false|DEPRECATED. Use legalEntityId|
|» mode|body|string|false|DEPRECATED.|
|» routing|body|[Routing](#schemarouting)|false|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|
|» supplierId|body|integer|false|DEPRECATED.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|direct|

> Example responses

> 200 Response

```json
{
  "guid": "string"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="submit-a-new-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvoiceSubmissionResult](#schemainvoicesubmissionresult)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="submit-a-new-invoice-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DEPRECATED. Preflight an invoice recipient

<a id="opIdpreflight_invoice_recipient"></a>

> Code samples

```bash
curl https://example.com/invoice_submissions/preflight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "publicIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ]
  }'
```

`POST /invoice_submissions/preflight`

Deprecated. Use the new /discovery endpoint. Check whether Storecove can deliver an invoice for a list of ids.

> Body parameter

```json
{
  "publicIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ]
}
```

<h3 id="deprecated-preflight-an-invoice-recipient-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InvoiceRecipientPreflight](#schemainvoicerecipientpreflight)|true|The invoice recipient to preflight|
|» publicIdentifiers|body|[PublicIdentifiers](#schemapublicidentifiers)|false|A list of public identifiers that uniquely identify this customer.|

> Example responses

> 200 Response

```json
{
  "code": "ok"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="deprecated-preflight-an-invoice-recipient-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PreflightInvoiceRecipientResult](#schemapreflightinvoicerecipientresult)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="deprecated-preflight-an-invoice-recipient-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DEPRECATED. Get InvoiceSubmission Evidence

<a id="opIdshow_invoice_submission_evidence"></a>

> Code samples

```bash
curl https://example.com/invoice_submissions/497f6eca-6276-4993-bfeb-53cbbbba6f08/evidence \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /invoice_submissions/{guid}/evidence`

Deprecated. Use the new /document_submissions/{guid}/evidence endpoint. Get evidence for an InvoiceSubmission by GUID with corresponding status

<h3 id="deprecated-get-invoicesubmission-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|InvoiceSubmission GUID|

> Example responses

> 200 Response

```json
{
  "actions": [
    {
      "receiver_response": "string",
      "transmission_datetime": "string",
      "transmission_result": "unknown",
      "transmission_type": "email",
      "transmitted_document": "string"
    }
  ],
  "guid": "string",
  "status": "string"
}
```

<h3 id="deprecated-get-invoicesubmission-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[InvoiceSubmissionEvidence](#schemainvoicesubmissionevidence)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-documentsubmissions">DocumentSubmissions</h1>

## Submit a new document.

<a id="opIdcreate_document_submission"></a>

> Code samples

```bash
curl https://example.com/document_submissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "createPrimaryImage": true,
    "document": {
      "documentType": "invoice",
      "invoice": {
        "accountingCost": "string",
        "accountingCurrencyTaxAmount": 0,
        "accountingCurrencyTaxAmountCurrency": "AED",
        "accountingCustomerParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          },
          "publicIdentifiers": [
            {
              "id": "string",
              "scheme": "string"
            }
          ]
        },
        "accountingSupplierParty": {
          "party": {
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "amountExcludingVat": 0,
            "baseAmountExcludingTax": 0,
            "reason": "Agreed settlement",
            "reasonCode": "string",
            "tax": {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            },
            "taxesDutiesFees": [
              {
                "amount": 0,
                "category": "standard",
                "country": "AD",
                "percentage": 0
              }
            ]
          }
        ],
        "amountIncludingVat": 0,
        "attachments": [
          {
            "description": "string",
            "document": "string",
            "documentId": "string",
            "filename": "string",
            "mimeType": "application/pdf",
            "primaryImage": false
          }
        ],
        "billingReference": "string",
        "buyerReference": "string",
        "consumerTaxMode": false,
        "contractDocumentReference": "string",
        "delivery": {
          "actualDate": "string",
          "deliveryLocation": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "id": "string",
            "locationName": "string",
            "schemeAgencyId": "string",
            "schemeId": "string"
          },
          "deliveryParty": {
            "party": {
              "address": {
                "city": "string",
                "country": "AD",
                "county": "string",
                "street1": "string",
                "street2": "string",
                "zip": "string"
              },
              "companyName": "string",
              "contact": {
                "email": "user@example.com",
                "firstName": "string",
                "id": "string",
                "lastName": "string",
                "phone": "string"
              }
            }
          },
          "deliveryPartyName": "string",
          "quantity": 1,
          "requestedDeliveryPeriod": "string",
          "shippingMarks": "string"
        },
        "documentCurrencyCode": "AED",
        "dueDate": "string",
        "invoiceLines": [
          {
            "accountingCost": "string",
            "additionalItemProperties": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "allowanceCharge": 0,
            "allowanceCharges": [
              {
                "amountExcludingTax": 0,
                "baseAmountExcludingTax": 0,
                "reason": "string",
                "reasonCode": "string"
              }
            ],
            "amountExcludingVat": 0,
            "buyersItemIdentification": "string",
            "description": "string",
            "invoicePeriod": "string",
            "itemPrice": 1,
            "lineId": "string",
            "name": "string",
            "note": "string",
            "orderLineReferenceLineId": "string",
            "quantity": 1,
            "quantityUnitCode": "C62",
            "references": [
              {
                "documentId": "string",
                "documentType": "purchase_order",
                "issueDate": "string",
                "lineId": "string"
              }
            ],
            "sellersItemIdentification": "string",
            "standardItemIdentification": "string",
            "standardItemIdentificationSchemeAgencyId": "9",
            "standardItemIdentificationSchemeId": "GTIN",
            "tax": {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            },
            "taxesDutiesFees": [
              {
                "amount": 0,
                "category": "standard",
                "country": "AD",
                "percentage": 0
              }
            ]
          }
        ],
        "invoiceNumber": "string",
        "invoicePeriod": "string",
        "invoiceType": "380",
        "issueDate": "string",
        "issueReasons": [
          "string"
        ],
        "note": "string",
        "orderReference": "string",
        "paymentMeansArray": [
          {
            "account": "string",
            "amount": 0,
            "branche_code": "string",
            "code": "credit_transfer",
            "holder": "string",
            "mandate": "string",
            "network": "string",
            "paymentId": "string"
          }
        ],
        "paymentMeansBic": "string",
        "paymentMeansCode": "online_payment_service",
        "paymentMeansIban": "string",
        "paymentMeansPaymentId": "string",
        "paymentTerms": {
          "note": "string"
        },
        "preferredInvoiceType": "prefer_autodetect",
        "prepaidAmount": 0,
        "projectReference": "string",
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "salesOrderId": "string",
        "selfBillingMode": false,
        "taxExemptReason": "export",
        "taxPointDate": "string",
        "taxSubtotals": [
          {
            "category": "standard",
            "country": "AD",
            "percentage": 0,
            "taxAmount": 0,
            "taxableAmount": 0
          }
        ],
        "taxSystem": "tax_line_amounts",
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ],
        "transactionType": "b2b",
        "ublExtensions": [
          "string"
        ],
        "vatReverseCharge": false,
        "x2y": "b2b"
      },
      "invoiceResponse": {
        "clarifications": [
          {
            "clarification": "string",
            "clarificationCode": "REF",
            "clarificationCodeType": "OPStatusReason"
          }
        ],
        "effectiveDate": "string",
        "note": "string",
        "responseCode": "AB"
      },
      "order": {
        "accountingCost": "string",
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "amountExcludingVat": 0,
            "baseAmountExcludingTax": 0,
            "reason": "Agreed settlement",
            "reasonCode": "string",
            "tax": {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            },
            "taxesDutiesFees": [
              {
                "amount": 0,
                "category": "standard",
                "country": "AD",
                "percentage": 0
              }
            ]
          }
        ],
        "amountIncludingTax": 0,
        "attachments": [
          {
            "description": "string",
            "document": "string",
            "documentId": "string",
            "filename": "string",
            "mimeType": "application/pdf",
            "primaryImage": false
          }
        ],
        "delivery": {
          "actualDate": "string",
          "deliveryLocation": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "id": "string",
            "locationName": "string",
            "schemeAgencyId": "string",
            "schemeId": "string"
          },
          "deliveryParty": {
            "party": {
              "address": {
                "city": "string",
                "country": "AD",
                "county": "string",
                "street1": "string",
                "street2": "string",
                "zip": "string"
              },
              "companyName": "string",
              "contact": {
                "email": "user@example.com",
                "firstName": "string",
                "id": "string",
                "lastName": "string",
                "phone": "string"
              }
            }
          },
          "deliveryPartyName": "string",
          "quantity": 1,
          "requestedDeliveryPeriod": "string",
          "shippingMarks": "string"
        },
        "deliveryTerms": {
          "deliveryLocationId": "string",
          "incoterms": "EXW",
          "specialTerms": "string"
        },
        "documentCurrencyCode": "AED",
        "documentNumber": "string",
        "issueDate": "string",
        "issueTime": "string",
        "note": "string",
        "orderLines": [
          {
            "accountingCost": "string",
            "additionalItemProperties": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "allowPartialDelivery": false,
            "allowanceCharges": [
              {
                "amountExcludingTax": 0,
                "baseAmountExcludingTax": 0,
                "reason": "string",
                "reasonCode": "string"
              }
            ],
            "amountExcludingTax": 0,
            "baseQuantity": 1,
            "delivery": {
              "deliveryLocation": {
                "id": "string",
                "schemeId": "string"
              }
            },
            "description": "string",
            "itemPrice": 1,
            "lineId": "string",
            "lotNumberIds": [
              "string"
            ],
            "name": "string",
            "note": "string",
            "quantity": 1,
            "quantityUnitCode": "C62",
            "references": [
              {
                "documentId": "string",
                "documentType": "purchase_order",
                "issueDate": "string",
                "lineId": "string"
              }
            ],
            "taxesDutiesFees": [
              {
                "amount": 0,
                "category": "standard",
                "country": "AD",
                "percentage": 0
              }
            ]
          }
        ],
        "orderType": "regular",
        "paymentTerms": {
          "note": "string"
        },
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "sellerSupplierParty": {
          "party": {
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          },
          "publicIdentifiers": [
            {
              "id": "string",
              "scheme": "string"
            }
          ]
        },
        "taxSystem": "tax_line_percentages",
        "timeZone": "string",
        "validityPeriod": "string"
      },
      "rawDocumentData": {
        "document": "string",
        "documentTypeId": "string",
        "parse": true,
        "parseStrategy": "ubl",
        "processId": "string"
      }
    },
    "idempotencyGuid": "stringstringstringstringstringstring",
    "legalEntityId": 0,
    "receiveGuid": "string",
    "routing": {
      "clearWithoutSending": false,
      "eIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ],
      "emails": [
        "user@example.com"
      ]
    }
  }'
```

`POST /document_submissions`

Submit a document for delivery. This endpoint will replaces the /invoice_submissions endpoint which will soon be deprecated.

> Body parameter

```json
{
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "createPrimaryImage": true,
  "document": {
    "documentType": "invoice",
    "invoice": {
      "accountingCost": "string",
      "accountingCurrencyTaxAmount": 0,
      "accountingCurrencyTaxAmountCurrency": "AED",
      "accountingCustomerParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        },
        "publicIdentifiers": [
          {
            "id": "string",
            "scheme": "string"
          }
        ]
      },
      "accountingSupplierParty": {
        "party": {
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "amountExcludingVat": 0,
          "baseAmountExcludingTax": 0,
          "reason": "Agreed settlement",
          "reasonCode": "string",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "amountIncludingVat": 0,
      "attachments": [
        {
          "description": "string",
          "document": "string",
          "documentId": "string",
          "filename": "string",
          "mimeType": "application/pdf",
          "primaryImage": false
        }
      ],
      "billingReference": "string",
      "buyerReference": "string",
      "consumerTaxMode": false,
      "contractDocumentReference": "string",
      "delivery": {
        "actualDate": "string",
        "deliveryLocation": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "id": "string",
          "locationName": "string",
          "schemeAgencyId": "string",
          "schemeId": "string"
        },
        "deliveryParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "deliveryPartyName": "string",
        "quantity": 1,
        "requestedDeliveryPeriod": "string",
        "shippingMarks": "string"
      },
      "documentCurrencyCode": "AED",
      "dueDate": "string",
      "invoiceLines": [
        {
          "accountingCost": "string",
          "additionalItemProperties": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "allowanceCharge": 0,
          "allowanceCharges": [
            {
              "amountExcludingTax": 0,
              "baseAmountExcludingTax": 0,
              "reason": "string",
              "reasonCode": "string"
            }
          ],
          "amountExcludingVat": 0,
          "buyersItemIdentification": "string",
          "description": "string",
          "invoicePeriod": "string",
          "itemPrice": 1,
          "lineId": "string",
          "name": "string",
          "note": "string",
          "orderLineReferenceLineId": "string",
          "quantity": 1,
          "quantityUnitCode": "C62",
          "references": [
            {
              "documentId": "string",
              "documentType": "purchase_order",
              "issueDate": "string",
              "lineId": "string"
            }
          ],
          "sellersItemIdentification": "string",
          "standardItemIdentification": "string",
          "standardItemIdentificationSchemeAgencyId": "9",
          "standardItemIdentificationSchemeId": "GTIN",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "invoiceNumber": "string",
      "invoicePeriod": "string",
      "invoiceType": "380",
      "issueDate": "string",
      "issueReasons": [
        "string"
      ],
      "note": "string",
      "orderReference": "string",
      "paymentMeansArray": [
        {
          "account": "string",
          "amount": 0,
          "branche_code": "string",
          "code": "credit_transfer",
          "holder": "string",
          "mandate": "string",
          "network": "string",
          "paymentId": "string"
        }
      ],
      "paymentMeansBic": "string",
      "paymentMeansCode": "online_payment_service",
      "paymentMeansIban": "string",
      "paymentMeansPaymentId": "string",
      "paymentTerms": {
        "note": "string"
      },
      "preferredInvoiceType": "prefer_autodetect",
      "prepaidAmount": 0,
      "projectReference": "string",
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "salesOrderId": "string",
      "selfBillingMode": false,
      "taxExemptReason": "export",
      "taxPointDate": "string",
      "taxSubtotals": [
        {
          "category": "standard",
          "country": "AD",
          "percentage": 0,
          "taxAmount": 0,
          "taxableAmount": 0
        }
      ],
      "taxSystem": "tax_line_amounts",
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ],
      "transactionType": "b2b",
      "ublExtensions": [
        "string"
      ],
      "vatReverseCharge": false,
      "x2y": "b2b"
    },
    "invoiceResponse": {
      "clarifications": [
        {
          "clarification": "string",
          "clarificationCode": "REF",
          "clarificationCodeType": "OPStatusReason"
        }
      ],
      "effectiveDate": "string",
      "note": "string",
      "responseCode": "AB"
    },
    "order": {
      "accountingCost": "string",
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "amountExcludingVat": 0,
          "baseAmountExcludingTax": 0,
          "reason": "Agreed settlement",
          "reasonCode": "string",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "amountIncludingTax": 0,
      "attachments": [
        {
          "description": "string",
          "document": "string",
          "documentId": "string",
          "filename": "string",
          "mimeType": "application/pdf",
          "primaryImage": false
        }
      ],
      "delivery": {
        "actualDate": "string",
        "deliveryLocation": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "id": "string",
          "locationName": "string",
          "schemeAgencyId": "string",
          "schemeId": "string"
        },
        "deliveryParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "deliveryPartyName": "string",
        "quantity": 1,
        "requestedDeliveryPeriod": "string",
        "shippingMarks": "string"
      },
      "deliveryTerms": {
        "deliveryLocationId": "string",
        "incoterms": "EXW",
        "specialTerms": "string"
      },
      "documentCurrencyCode": "AED",
      "documentNumber": "string",
      "issueDate": "string",
      "issueTime": "string",
      "note": "string",
      "orderLines": [
        {
          "accountingCost": "string",
          "additionalItemProperties": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "allowPartialDelivery": false,
          "allowanceCharges": [
            {
              "amountExcludingTax": 0,
              "baseAmountExcludingTax": 0,
              "reason": "string",
              "reasonCode": "string"
            }
          ],
          "amountExcludingTax": 0,
          "baseQuantity": 1,
          "delivery": {
            "deliveryLocation": {
              "id": "string",
              "schemeId": "string"
            }
          },
          "description": "string",
          "itemPrice": 1,
          "lineId": "string",
          "lotNumberIds": [
            "string"
          ],
          "name": "string",
          "note": "string",
          "quantity": 1,
          "quantityUnitCode": "C62",
          "references": [
            {
              "documentId": "string",
              "documentType": "purchase_order",
              "issueDate": "string",
              "lineId": "string"
            }
          ],
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "orderType": "regular",
      "paymentTerms": {
        "note": "string"
      },
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "sellerSupplierParty": {
        "party": {
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        },
        "publicIdentifiers": [
          {
            "id": "string",
            "scheme": "string"
          }
        ]
      },
      "taxSystem": "tax_line_percentages",
      "timeZone": "string",
      "validityPeriod": "string"
    },
    "rawDocumentData": {
      "document": "string",
      "documentTypeId": "string",
      "parse": true,
      "parseStrategy": "ubl",
      "processId": "string"
    }
  },
  "idempotencyGuid": "stringstringstringstringstringstring",
  "legalEntityId": 0,
  "receiveGuid": "string",
  "routing": {
    "clearWithoutSending": false,
    "eIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ],
    "emails": [
      "user@example.com"
    ]
  }
}
```

<h3 id="submit-a-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocumentSubmission](#schemadocumentsubmission)|true|Document to submit|
|» attachments|body|[[Attachment](#schemaattachment)]|false|DEPRECATED. Use the attachments array inside the 'document' property. An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|» createPrimaryImage|body|boolean|false|DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true.|
|» document|body|[SendableDocument](#schemasendabledocument)|false|The document to send.|
|» idempotencyGuid|body|string|false|A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response.|
|» legalEntityId|body|integer|false|The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory.|
|» receiveGuid|body|string|false|The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse.|
|» routing|body|[Routing](#schemarouting)|false|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|

> Example responses

> 200 Response

```json
{
  "guid": "string"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="submit-a-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentSubmissionResult](#schemadocumentsubmissionresult)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="submit-a-new-document-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get DocumentSubmission Evidence

<a id="opIdshow_document_submission_evidence"></a>

> Code samples

```bash
curl https://example.com/document_submissions/497f6eca-6276-4993-bfeb-53cbbbba6f08/evidence/sending \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /document_submissions/{guid}/evidence/{evidence_type}`

Get evidence for a DocumentSubmission by GUID with corresponding status

<h3 id="get-documentsubmission-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|DocumentSubmission GUID|
|evidence_type|path|string|true|Type of evidence requested|

#### Enumerated Values

|Parameter|Value|
|---|---|
|evidence_type|sending|
|evidence_type|clearing|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "document": "string",
      "expires_at": "string",
      "mime_type": "message/rfc822"
    }
  ],
  "evidence": {
    "message_id": "string",
    "receiving_accesspoint": "string",
    "remote_mta_ip": "string",
    "reporting_mta": "string",
    "smtp_response": "string",
    "timestamp": "string",
    "transmission_id": "string",
    "xml": "string"
  },
  "network": "as2",
  "receiver": "string",
  "sender": "string"
}
```

<h3 id="get-documentsubmission-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DocumentSubmissionEvidence](#schemadocumentsubmissionevidence)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-legalentities">LegalEntities</h1>

## Create a new LegalEntity

<a id="opIdcreate_legal_entity"></a>

> Code samples

```bash
curl https://example.com/legal_entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "advertisements": [
      "invoice"
    ],
    "city": "string",
    "country": "AD",
    "county": "string",
    "line1": "string",
    "line2": "string",
    "party_name": "string",
    "public": true,
    "rea": {
      "capital": 0,
      "identifier": "string",
      "liquidation_status": "LN",
      "partners": "SU",
      "province": "AG"
    },
    "tenant_id": "string",
    "third_party_password": "string",
    "third_party_username": "string",
    "zip": "string"
  }'
```

`POST /legal_entities`

Create a new LegalEntity.

> Body parameter

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string"
}
```

<h3 id="create-a-new-legalentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LegalEntityCreate](#schemalegalentitycreate)|true|LegalEntity to create|
|» advertisements|body|[string]|false|A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.|
|» city|body|string|true|The city.|
|» country|body|[Country](#schemacountry)|true|An ISO 3166-1 alpha-2 country code.|
|» county|body|string|false|County, if applicable|
|» line1|body|string|true|The first address line.|
|» line2|body|string|false|The second address line, if applicable|
|» party_name|body|string|true|The name of the company.|
|» public|body|boolean|false|Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/|
|» rea|body|[Rea](#schemarea)|false|none|
|» tenant_id|body|string|false|The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events.|
|» third_party_password|body|string|false|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|» third_party_username|body|string|false|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|» zip|body|string|true|The zipcode.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» advertisements|invoice|
|» advertisements|invoice_response|
|» advertisements|order|
|» advertisements|ordering|
|» advertisements|order_response|
|» country|AD|
|» country|AE|
|» country|AF|
|» country|AG|
|» country|AI|
|» country|AL|
|» country|AM|
|» country|AO|
|» country|AQ|
|» country|AR|
|» country|AS|
|» country|AT|
|» country|AU|
|» country|AW|
|» country|AX|
|» country|AZ|
|» country|BA|
|» country|BB|
|» country|BD|
|» country|BE|
|» country|BF|
|» country|BG|
|» country|BH|
|» country|BI|
|» country|BJ|
|» country|BL|
|» country|BM|
|» country|BN|
|» country|BO|
|» country|BQ|
|» country|BR|
|» country|BS|
|» country|BT|
|» country|BV|
|» country|BW|
|» country|BY|
|» country|BZ|
|» country|CA|
|» country|CC|
|» country|CD|
|» country|CF|
|» country|CG|
|» country|CH|
|» country|CI|
|» country|CK|
|» country|CL|
|» country|CM|
|» country|CN|
|» country|CO|
|» country|CR|
|» country|CU|
|» country|CV|
|» country|CW|
|» country|CX|
|» country|CY|
|» country|CZ|
|» country|DE|
|» country|DJ|
|» country|DK|
|» country|DM|
|» country|DO|
|» country|DZ|
|» country|EC|
|» country|EE|
|» country|EG|
|» country|EH|
|» country|ER|
|» country|ES|
|» country|ET|
|» country|FI|
|» country|FJ|
|» country|FK|
|» country|FM|
|» country|FO|
|» country|FR|
|» country|GA|
|» country|GB|
|» country|GD|
|» country|GE|
|» country|GF|
|» country|GG|
|» country|GH|
|» country|GI|
|» country|GL|
|» country|GM|
|» country|GN|
|» country|GP|
|» country|GQ|
|» country|GR|
|» country|GS|
|» country|GT|
|» country|GU|
|» country|GW|
|» country|GY|
|» country|HK|
|» country|HM|
|» country|HN|
|» country|HR|
|» country|HT|
|» country|HU|
|» country|ID|
|» country|IE|
|» country|IL|
|» country|IM|
|» country|IN|
|» country|IO|
|» country|IQ|
|» country|IR|
|» country|IS|
|» country|IT|
|» country|JE|
|» country|JM|
|» country|JO|
|» country|JP|
|» country|KE|
|» country|KG|
|» country|KH|
|» country|KI|
|» country|KM|
|» country|KN|
|» country|KP|
|» country|KR|
|» country|KW|
|» country|KY|
|» country|KZ|
|» country|LA|
|» country|LB|
|» country|LC|
|» country|LI|
|» country|LK|
|» country|LR|
|» country|LS|
|» country|LT|
|» country|LU|
|» country|LV|
|» country|LY|
|» country|MA|
|» country|MC|
|» country|MD|
|» country|ME|
|» country|MF|
|» country|MG|
|» country|MH|
|» country|MK|
|» country|ML|
|» country|MM|
|» country|MN|
|» country|MO|
|» country|MP|
|» country|MQ|
|» country|MR|
|» country|MS|
|» country|MT|
|» country|MU|
|» country|MV|
|» country|MW|
|» country|MX|
|» country|MY|
|» country|MZ|
|» country|NA|
|» country|NC|
|» country|NE|
|» country|NF|
|» country|NG|
|» country|NI|
|» country|NL|
|» country|NO|
|» country|NP|
|» country|NR|
|» country|NU|
|» country|NZ|
|» country|OM|
|» country|PA|
|» country|PE|
|» country|PF|
|» country|PG|
|» country|PH|
|» country|PK|
|» country|PL|
|» country|PM|
|» country|PN|
|» country|PR|
|» country|PS|
|» country|PT|
|» country|PW|
|» country|PY|
|» country|QA|
|» country|RE|
|» country|RO|
|» country|RS|
|» country|RU|
|» country|RW|
|» country|SA|
|» country|SB|
|» country|SC|
|» country|SD|
|» country|SE|
|» country|SG|
|» country|SH|
|» country|SI|
|» country|SJ|
|» country|SK|
|» country|SL|
|» country|SM|
|» country|SN|
|» country|SO|
|» country|SR|
|» country|SS|
|» country|ST|
|» country|SV|
|» country|SX|
|» country|SY|
|» country|SZ|
|» country|TC|
|» country|TD|
|» country|TF|
|» country|TG|
|» country|TH|
|» country|TJ|
|» country|TK|
|» country|TL|
|» country|TM|
|» country|TN|
|» country|TO|
|» country|TR|
|» country|TT|
|» country|TV|
|» country|TW|
|» country|TZ|
|» country|UA|
|» country|UG|
|» country|UM|
|» country|US|
|» country|UY|
|» country|UZ|
|» country|VA|
|» country|VC|
|» country|VE|
|» country|VG|
|» country|VI|
|» country|VN|
|» country|VU|
|» country|WF|
|» country|WS|
|» country|XI|
|» country|YE|
|» country|YT|
|» country|ZA|
|» country|ZM|
|» country|ZW|

> Example responses

> 200 Response

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string",
  "peppol_identifiers": [
    {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "additional_tax_identifiers": [
    {
      "country": "st",
      "county": "st",
      "id": 0,
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "api_keys": [
    "string"
  ]
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="create-a-new-legalentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LegalEntity](#schemalegalentity)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="create-a-new-legalentity-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get LegalEntity

<a id="opIdget_legal_entity"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal_entities/{id}`

Get a specific LegalEntity.

<h3 id="get-legalentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|legal_entity id|

> Example responses

> 200 Response

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string",
  "peppol_identifiers": [
    {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "additional_tax_identifiers": [
    {
      "country": "st",
      "county": "st",
      "id": 0,
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "api_keys": [
    "string"
  ]
}
```

<h3 id="get-legalentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LegalEntity](#schemalegalentity)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete LegalEntity

<a id="opIddelete_legal_entity"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /legal_entities/{id}`

Delete a specific LegalEntity.

<h3 id="delete-legalentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|legal_entity id|

<h3 id="delete-legalentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update LegalEntity

<a id="opIdupdate_legal_entity"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "advertisements": [
      "invoice"
    ],
    "city": "string",
    "country": "AD",
    "county": "string",
    "id": 0,
    "line1": "string",
    "line2": "string",
    "party_name": "string",
    "public": true,
    "rea": {
      "capital": 0,
      "identifier": "string",
      "liquidation_status": "LN",
      "partners": "SU",
      "province": "AG"
    },
    "smart_inbox": "string",
    "tenant_id": "string",
    "third_party_password": "string",
    "third_party_username": "string",
    "zip": "string"
  }'
```

`PATCH /legal_entities/{id}`

Update a specific LegalEntity.

> Body parameter

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string"
}
```

<h3 id="update-legalentity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|legal_entity id|
|body|body|[LegalEntityUpdate](#schemalegalentityupdate)|true|LegalEntity updates|
|» advertisements|body|[string]|false|A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.|
|» city|body|string|false|The city.|
|» country|body|[Country](#schemacountry)|false|An ISO 3166-1 alpha-2 country code.|
|» county|body|string|false|County, if applicable|
|» id|body|integer(int64)|false|The Storecove assigned id for the LegalEntity.|
|» line1|body|string|false|The first address line.|
|» line2|body|string|false|The second address line, if applicable|
|» party_name|body|string|false|The name of the company.|
|» public|body|boolean|false|Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.|
|» rea|body|[Rea](#schemarea)|false|none|
|» smart_inbox|body|string|false|DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity.|
|» tenant_id|body|string|false|The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.|
|» third_party_password|body|string|false|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|» third_party_username|body|string|false|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|» zip|body|string|false|The zipcode.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» advertisements|invoice|
|» advertisements|invoice_response|
|» advertisements|order|
|» advertisements|ordering|
|» advertisements|order_response|
|» country|AD|
|» country|AE|
|» country|AF|
|» country|AG|
|» country|AI|
|» country|AL|
|» country|AM|
|» country|AO|
|» country|AQ|
|» country|AR|
|» country|AS|
|» country|AT|
|» country|AU|
|» country|AW|
|» country|AX|
|» country|AZ|
|» country|BA|
|» country|BB|
|» country|BD|
|» country|BE|
|» country|BF|
|» country|BG|
|» country|BH|
|» country|BI|
|» country|BJ|
|» country|BL|
|» country|BM|
|» country|BN|
|» country|BO|
|» country|BQ|
|» country|BR|
|» country|BS|
|» country|BT|
|» country|BV|
|» country|BW|
|» country|BY|
|» country|BZ|
|» country|CA|
|» country|CC|
|» country|CD|
|» country|CF|
|» country|CG|
|» country|CH|
|» country|CI|
|» country|CK|
|» country|CL|
|» country|CM|
|» country|CN|
|» country|CO|
|» country|CR|
|» country|CU|
|» country|CV|
|» country|CW|
|» country|CX|
|» country|CY|
|» country|CZ|
|» country|DE|
|» country|DJ|
|» country|DK|
|» country|DM|
|» country|DO|
|» country|DZ|
|» country|EC|
|» country|EE|
|» country|EG|
|» country|EH|
|» country|ER|
|» country|ES|
|» country|ET|
|» country|FI|
|» country|FJ|
|» country|FK|
|» country|FM|
|» country|FO|
|» country|FR|
|» country|GA|
|» country|GB|
|» country|GD|
|» country|GE|
|» country|GF|
|» country|GG|
|» country|GH|
|» country|GI|
|» country|GL|
|» country|GM|
|» country|GN|
|» country|GP|
|» country|GQ|
|» country|GR|
|» country|GS|
|» country|GT|
|» country|GU|
|» country|GW|
|» country|GY|
|» country|HK|
|» country|HM|
|» country|HN|
|» country|HR|
|» country|HT|
|» country|HU|
|» country|ID|
|» country|IE|
|» country|IL|
|» country|IM|
|» country|IN|
|» country|IO|
|» country|IQ|
|» country|IR|
|» country|IS|
|» country|IT|
|» country|JE|
|» country|JM|
|» country|JO|
|» country|JP|
|» country|KE|
|» country|KG|
|» country|KH|
|» country|KI|
|» country|KM|
|» country|KN|
|» country|KP|
|» country|KR|
|» country|KW|
|» country|KY|
|» country|KZ|
|» country|LA|
|» country|LB|
|» country|LC|
|» country|LI|
|» country|LK|
|» country|LR|
|» country|LS|
|» country|LT|
|» country|LU|
|» country|LV|
|» country|LY|
|» country|MA|
|» country|MC|
|» country|MD|
|» country|ME|
|» country|MF|
|» country|MG|
|» country|MH|
|» country|MK|
|» country|ML|
|» country|MM|
|» country|MN|
|» country|MO|
|» country|MP|
|» country|MQ|
|» country|MR|
|» country|MS|
|» country|MT|
|» country|MU|
|» country|MV|
|» country|MW|
|» country|MX|
|» country|MY|
|» country|MZ|
|» country|NA|
|» country|NC|
|» country|NE|
|» country|NF|
|» country|NG|
|» country|NI|
|» country|NL|
|» country|NO|
|» country|NP|
|» country|NR|
|» country|NU|
|» country|NZ|
|» country|OM|
|» country|PA|
|» country|PE|
|» country|PF|
|» country|PG|
|» country|PH|
|» country|PK|
|» country|PL|
|» country|PM|
|» country|PN|
|» country|PR|
|» country|PS|
|» country|PT|
|» country|PW|
|» country|PY|
|» country|QA|
|» country|RE|
|» country|RO|
|» country|RS|
|» country|RU|
|» country|RW|
|» country|SA|
|» country|SB|
|» country|SC|
|» country|SD|
|» country|SE|
|» country|SG|
|» country|SH|
|» country|SI|
|» country|SJ|
|» country|SK|
|» country|SL|
|» country|SM|
|» country|SN|
|» country|SO|
|» country|SR|
|» country|SS|
|» country|ST|
|» country|SV|
|» country|SX|
|» country|SY|
|» country|SZ|
|» country|TC|
|» country|TD|
|» country|TF|
|» country|TG|
|» country|TH|
|» country|TJ|
|» country|TK|
|» country|TL|
|» country|TM|
|» country|TN|
|» country|TO|
|» country|TR|
|» country|TT|
|» country|TV|
|» country|TW|
|» country|TZ|
|» country|UA|
|» country|UG|
|» country|UM|
|» country|US|
|» country|UY|
|» country|UZ|
|» country|VA|
|» country|VC|
|» country|VE|
|» country|VG|
|» country|VI|
|» country|VN|
|» country|VU|
|» country|WF|
|» country|WS|
|» country|XI|
|» country|YE|
|» country|YT|
|» country|ZA|
|» country|ZM|
|» country|ZW|

> Example responses

> 200 Response

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string",
  "peppol_identifiers": [
    {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "additional_tax_identifiers": [
    {
      "country": "st",
      "county": "st",
      "id": 0,
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "api_keys": [
    "string"
  ]
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="update-legalentity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[LegalEntity](#schemalegalentity)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="update-legalentity-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-peppolidentifiers">PeppolIdentifiers</h1>

## Create a new PeppolIdentifier

<a id="opIdcreate_peppol_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/peppol_identifiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "corppass": {
      "client_redirect_fail_url": "stringstrin",
      "client_redirect_success_url": "stringstrin",
      "enabled": true,
      "flow_type": "corppass_flow_redirect",
      "signer_email": "string",
      "signer_name": "string",
      "simulate_corppass": false
    },
    "identifier": "string",
    "scheme": "string",
    "superscheme": "string"
  }'
```

`POST /legal_entities/{legal_entity_id}/peppol_identifiers`

Create a brand new new PeppolIdentifier. For <<_sg_singapore>>, special rules apply.

> Body parameter

```json
{
  "corppass": {
    "client_redirect_fail_url": "stringstrin",
    "client_redirect_success_url": "stringstrin",
    "enabled": true,
    "flow_type": "corppass_flow_redirect",
    "signer_email": "string",
    "signer_name": "string",
    "simulate_corppass": false
  },
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

<h3 id="create-a-new-peppolidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity for which to create the PeppolIdentifier|
|body|body|[PeppolIdentifierCreate](#schemapeppolidentifiercreate)|true|PeppolIdentifier to create|
|» corppass|body|[CorpPassCreate](#schemacorppasscreate)|false|none|
|» identifier|body|string|true|The identifier.|
|» scheme|body|string|true|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|
|» superscheme|body|string|true|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|

> Example responses

> 200 Response

```json
{
  "corppass": {
    "client_redirect_fail_url": "stringstrin",
    "client_redirect_success_url": "stringstrin",
    "corppass_url": "stringstrin",
    "enabled": false,
    "flow_type": "corppass_flow_redirect",
    "signer_email": "string",
    "signer_name": "string",
    "simulate_corppass": false,
    "status": "corppass_no_status,"
  },
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="create-a-new-peppolidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PeppolIdentifier](#schemapeppolidentifier)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="create-a-new-peppolidentifier-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete PeppolIdentifier

<a id="opIddelete_peppol_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/peppol_identifiers/string/string/string \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier}`

Delete a PeppolIdentifier.

<h3 id="delete-peppolidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity this PeppolIdentifier belongs to|
|superscheme|path|string|true|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|
|scheme|path|string|true|PEPPOL identifier scheme id, e.g. "DE:VAT". For a full list see <<_receiver_identifiers_list>>.|
|identifier|path|string|true|PEPPOL identifier|

<h3 id="delete-peppolidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-administrations">Administrations</h1>

## Create a new Administration

<a id="opIdcreate_administration"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/administrations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "legal_entity_id": 0,
    "package_version": "peppol_bis_v3",
    "packaging": "ubl",
    "sender_email_identity_id": 0
  }'
```

`POST /legal_entities/{legal_entity_id}/administrations`

Deprecated. Create a new Administration. An Administration is an email destination for purchase invoices.

> Body parameter

```json
{
  "email": "string",
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

<h3 id="create-a-new-administration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity for which to create the Administration|
|body|body|[AdministrationCreate](#schemaadministrationcreate)|true|Administration to create|
|» email|body|string|false|The email address to send the received document to|
|» legal_entity_id|body|integer(int64)|false|The LegalEntity the Administration belongs to.|
|» package_version|body|string|false|The version of the package.|
|» packaging|body|string|false|How to package the purchase invoice.|
|» sender_email_identity_id|body|integer(int64)|false|The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» package_version|peppol_bis_v3|
|» package_version|aunz|
|» package_version|sg|
|» packaging|ubl|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": 0,
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="create-a-new-administration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Administration](#schemaadministration)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="create-a-new-administration-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Administration

<a id="opIdget_administration"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/administrations/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal_entities/{legal_entity_id}/administrations/{id}`

Deprecated. Get an Administration

<h3 id="get-administration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the Administration belongs to|
|id|path|integer(int64)|true|The id of the Administration|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": 0,
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

<h3 id="get-administration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Administration](#schemaadministration)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete Administration

<a id="opIddelete_administration"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/administrations/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /legal_entities/{legal_entity_id}/administrations/{id}`

Deprecated. Delete an Administration

<h3 id="delete-administration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the Administration belongs to|
|id|path|integer(int64)|true|The id of the Administration|

<h3 id="delete-administration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update Administration

<a id="opIdupdate_administration"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/administrations/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "email": "string",
    "package_version": "peppol_bis_v3",
    "packaging": "ubl",
    "sender_email_identity_id": 0
  }'
```

`PATCH /legal_entities/{legal_entity_id}/administrations/{id}`

Deprecated. Update an Administration

> Body parameter

```json
{
  "email": "string",
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

<h3 id="update-administration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the Administration belongs to|
|id|path|integer(int64)|true|The id of the Administration to be updated|
|body|body|[AdministrationUpdate](#schemaadministrationupdate)|true|Administration to update|
|» email|body|string|false|The email address to send the received document to|
|» package_version|body|string|false|The version of the package.|
|» packaging|body|string|false|How to package the purchase invoice.|
|» sender_email_identity_id|body|integer(int64)|false|The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» package_version|peppol_bis_v3|
|» package_version|aunz|
|» package_version|sg|
|» packaging|ubl|

> Example responses

> 200 Response

```json
{
  "email": "string",
  "id": 0,
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

<h3 id="update-administration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Administration](#schemaadministration)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-receiveddocuments">ReceivedDocuments</h1>

## Receive a new Document

<a id="opIdreceive_documenht"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/received_documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "document": "string",
    "legal_entity_id": 0,
    "parseStrategy": "rfc822"
  }'
```

`POST /legal_entities/{legal_entity_id}/received_documents`

DEPRECATED - use new path /received_documents. Receive a new Document.

> Body parameter

```json
{
  "document": "string",
  "legal_entity_id": 0,
  "parseStrategy": "rfc822"
}
```

<h3 id="receive-a-new-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity for which the document was received.|
|body|body|[ReceivedDocumentCreate](#schemareceiveddocumentcreate)|true|Received document to process.|
|» document|body|string|false|The Base64 encoded document.|
|» legal_entity_id|body|integer(int64)|false|The of the LegalEntity this document was received for.|
|» parseStrategy|body|string|false|The attachment content type (mime type).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» parseStrategy|rfc822|

> Example responses

> 200 Response

```json
{
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="receive-a-new-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReceivedDocument](#schemareceiveddocument)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="receive-a-new-document-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Create a new received document

<a id="opIdcreate_received_document"></a>

> Code samples

```bash
curl https://example.com/received_documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "document": "string",
    "legal_entity_id": 0,
    "parseStrategy": "rfc822"
  }'
```

`POST /received_documents`

Create a new received document.

> Body parameter

```json
{
  "document": "string",
  "legal_entity_id": 0,
  "parseStrategy": "rfc822"
}
```

<h3 id="create-a-new-received-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceivedDocumentCreate](#schemareceiveddocumentcreate)|true|The received document to process.|
|» document|body|string|false|The Base64 encoded document.|
|» legal_entity_id|body|integer(int64)|false|The of the LegalEntity this document was received for.|
|» parseStrategy|body|string|false|The attachment content type (mime type).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» parseStrategy|rfc822|

> Example responses

> 200 Response

```json
{
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="create-a-new-received-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReceivedDocument](#schemareceiveddocument)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="create-a-new-received-document-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get a new ReceivedDocument

<a id="opIdget_received_document"></a>

> Code samples

```bash
curl 'https://example.com/received_documents/497f6eca-6276-4993-bfeb-53cbbbba6f08/string?syntax=json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /received_documents/{guid}/{format}`

EXPERIMENTAL: use only for orders. Get a new ReceivedDocument.

<h3 id="get-a-new-receiveddocument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|The guid of the document that was received. This is the "document_guid" property of the "received_document" webhook.|
|syntax|query|string|true|The syntax in which to receive the received document.|
|format|path|string|true|Automatically added|

#### Enumerated Values

|Parameter|Value|
|---|---|
|syntax|json|
|syntax|original|

> Example responses

> 200 Response

```json
{
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-new-receiveddocument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ReceivedDocument](#schemareceiveddocument)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-additionaltaxidentifiers">AdditionalTaxIdentifiers</h1>

## Create a new AdditionalTaxIdentifier

<a id="opIdcreate_additional_tax_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/additional_tax_identifiers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "country": "st",
    "county": "st",
    "identifier": "string",
    "scheme": "string",
    "superscheme": "string",
    "third_party_password": "string",
    "third_party_username": "string"
  }'
```

`POST /legal_entities/{legal_entity_id}/additional_tax_identifiers`

Create a new AdditionalTaxIdentifier. An AdditionalTaxIdentifier is a seconday tax identifier that is used inside the EU when sending invoices to consumers. In that case, the VAT of the receiving country is used and if the sender has a local VAT identifier, that is used to identifiy the sender, instead of the sender's origin country VAT number. To use these identifiers, use the invoice.consumerTaxMode = true property.

> Body parameter

```json
{
  "country": "st",
  "county": "st",
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string",
  "third_party_password": "string",
  "third_party_username": "string"
}
```

<h3 id="create-a-new-additionaltaxidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity for which to create the AdditionalTaxIdentifier|
|body|body|[AdditionalTaxIdentifierCreate](#schemaadditionaltaxidentifiercreate)|true|AdditionalTaxIdentifier to create|
|» country|body|string|true|The ISO3166 country code to use this identifier for in case of consumerTaxMode.|
|» county|body|string|false|The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).|
|» identifier|body|string|true|The identifier.|
|» scheme|body|string|true|The scheme of the identifier.|
|» superscheme|body|string|true|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|
|» third_party_password|body|string|false|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|
|» third_party_username|body|string|false|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|

> Example responses

> 200 Response

```json
{
  "country": "st",
  "county": "st",
  "id": 0,
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="create-a-new-additionaltaxidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdditionalTaxIdentifier](#schemaadditionaltaxidentifier)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="create-a-new-additionaltaxidentifier-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get AdditionalTaxIdentifier

<a id="opIdget_additional_tax_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/additional_tax_identifiers/0 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}`

Get an AdditionalTaxIdentifier

<h3 id="get-additionaltaxidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the AdditionalTaxIdentifier belongs to|
|id|path|integer(int64)|true|The id of the AdditionalTaxIdentifier|

> Example responses

> 200 Response

```json
{
  "country": "st",
  "county": "st",
  "id": 0,
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

<h3 id="get-additionaltaxidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdditionalTaxIdentifier](#schemaadditionaltaxidentifier)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Delete AdditionalTaxIdentifier

<a id="opIddelete_additional_tax_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/additional_tax_identifiers/0 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}`

Delete an AdditionalTaxIdentifier

<h3 id="delete-additionaltaxidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the AdditionalTaxIdentifier belongs to|
|id|path|integer(int64)|true|The id of the AdditionalTaxIdentifier|

<h3 id="delete-additionaltaxidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Update AdditionalTaxIdentifier

<a id="opIdupdate_additional_tax_identifier"></a>

> Code samples

```bash
curl https://example.com/legal_entities/0/additional_tax_identifiers/0 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "identifier": "string",
    "third_party_password": "string",
    "third_party_username": "string"
  }'
```

`PATCH /legal_entities/{legal_entity_id}/additional_tax_identifiers/{id}`

Update an AdditionalTaxIdentifier

> Body parameter

```json
{
  "identifier": "string",
  "third_party_password": "string",
  "third_party_username": "string"
}
```

<h3 id="update-additionaltaxidentifier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legal_entity_id|path|integer(int64)|true|The id of the LegalEntity the AdditionalTaxIdentifier belongs to|
|id|path|integer(int64)|true|The id of the AdditionalTaxIdentifier to be updated|
|body|body|[AdditionalTaxIdentifierUpdate](#schemaadditionaltaxidentifierupdate)|true|AdditionalTaxIdentifier to update|
|» identifier|body|string|true|The identifier.|
|» third_party_password|body|string|false|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|
|» third_party_username|body|string|false|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|

> Example responses

> 200 Response

```json
{
  "country": "st",
  "county": "st",
  "id": 0,
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

<h3 id="update-additionaltaxidentifier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[AdditionalTaxIdentifier](#schemaadditionaltaxidentifier)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-purchaseinvoices">PurchaseInvoices</h1>

## Get Purchase invoice data as JSON

<a id="opIdget_invoice_json"></a>

> Code samples

```bash
curl https://example.com/purchase_invoices/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /purchase_invoices/{guid}`

Get a specific PurchaseInvoice, in JSON format.

<h3 id="get-purchase-invoice-data-as-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|The guid of the purchase invoice, from the webhook.|
|pmv|query|string|false|The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.<br><br>Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.|

> Example responses

> 200 Response

```json
{
  "accounting": {
    "code": "string",
    "list": "string",
    "list_version": "string",
    "name": "string"
  },
  "accounting_cost": "string",
  "allowance_charge": 0,
  "allowance_charges": [
    {
      "amount_excluding_tax": 0,
      "amount_excluding_vat": "string",
      "reason": "string",
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "vat": {
        "amount": "string",
        "percentage": "string"
      }
    }
  ],
  "amount_including_vat": 0,
  "attachments": [
    {
      "content_type": "string",
      "document": "string"
    }
  ],
  "billing_reference": "string",
  "buyer_reference": "string",
  "contract_document_reference": "string",
  "delivery": {
    "actual_date": "string",
    "location": {
      "building_number": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "department": "string",
      "id": "string",
      "line1": "string",
      "line2": "string",
      "neighborhood": "string",
      "scheme_id": "string",
      "secondary_number": "string",
      "zip": "string"
    },
    "party": {
      "name": "string"
    }
  },
  "document": "string",
  "document_currency_code": "string",
  "document_totals": {
    "payable": 0,
    "prepaid": 0,
    "rounding": 0,
    "total": 0
  },
  "document_type": "invoice",
  "due_date": "string",
  "external_key": "string",
  "external_user_id": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "invoice_lines": [
    {
      "accounting": {
        "code": "string",
        "list": "string",
        "list_version": "string",
        "name": "string"
      },
      "allowance_charge": 0,
      "allowance_charge_array": [
        {
          "amount": 0,
          "reason": "string"
        }
      ],
      "allowance_charges": [
        0
      ],
      "amount_excluding_tax": 0,
      "amount_excluding_vat": 0,
      "description": "string",
      "name": "string",
      "period_end": "string",
      "period_start": "string",
      "price": {
        "base_quantity": 0,
        "price_amount": 0
      },
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "units": {
        "quantity": 0,
        "unit_code": "string"
      },
      "vat": {
        "amount": 0,
        "country": "string",
        "percentage": 0
      }
    }
  ],
  "invoice_number": "string",
  "invoice_type": "invoice",
  "issue_date": "string",
  "legal_entity_id": 0,
  "note": "string",
  "order_reference": "string",
  "payment_means": {
    "iban": "string",
    "id": "string"
  },
  "payment_means_array": [
    {
      "account": "string",
      "branch_code": "string",
      "holder": "string",
      "mandate": "string",
      "network": "string",
      "payment_id": "string",
      "type": "BankPaymentMean"
    }
  ],
  "payment_means_payment_id": "string",
  "payment_terms_note": "string",
  "period_end": "string",
  "period_start": "string",
  "project_reference": "string",
  "sender": {
    "billing_contact": {
      "email": "string",
      "first_name": "string",
      "last_name": "string"
    },
    "building_number": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "department": "string",
    "identifiers": [
      {
        "corppass": {
          "client_redirect_fail_url": "stringstrin",
          "client_redirect_success_url": "stringstrin",
          "corppass_url": "stringstrin",
          "enabled": false,
          "flow_type": "corppass_flow_redirect",
          "signer_email": "string",
          "signer_name": "string",
          "simulate_corppass": false,
          "status": "corppass_no_status,"
        },
        "identifier": "string",
        "scheme": "string",
        "superscheme": "string"
      }
    ],
    "legal_name": "string",
    "line1": "string",
    "line2": "string",
    "neighborhood": "string",
    "party_name": "string",
    "peppol_identifiers": {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    },
    "secondary_number": "string",
    "zip": "string"
  },
  "source": "peppol",
  "sub_type": "invoice",
  "system_generated_primary_image": true,
  "tax_point_date": "string",
  "tax_subtotals": [
    {
      "amount_excluding_tax": 0,
      "amount_excluding_vat": "string",
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "vat": {
        "amount": "string",
        "percentage": "string"
      }
    }
  ],
  "tax_system": "string",
  "vat_reverse_charge": true
}
```

<h3 id="get-purchase-invoice-data-as-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseInvoice](#schemapurchaseinvoice)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Purchase invoice data in a selectable format

<a id="opIdget_invoice_ubl"></a>

> Code samples

```bash
curl https://example.com/purchase_invoices/497f6eca-6276-4993-bfeb-53cbbbba6f08/json \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /purchase_invoices/{guid}/{packaging}`

Get a specific PurchaseInvoice.

<h3 id="get-purchase-invoice-data-in-a-selectable-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|purchase invoice guid|
|packaging|path|string|true|How to package the purchase invoice.|
|pmv|query|string|false|The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.<br><br>Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|packaging|json|
|packaging|ubl|
|packaging|original|

> Example responses

> 200 Response

```json
{
  "external_key": "string",
  "external_user_id": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legal_entity_id": 0,
  "system_generated_primary_image": true,
  "tax_system": "string",
  "ubl": "string"
}
```

<h3 id="get-purchase-invoice-data-in-a-selectable-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseInvoiceUbl](#schemapurchaseinvoiceubl)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version

<a id="opIdget_invoice_ubl_versioned"></a>

> Code samples

```bash
curl https://example.com/purchase_invoices/497f6eca-6276-4993-bfeb-53cbbbba6f08/ubl/si11 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /purchase_invoices/{guid}/{packaging}/{package_version}`

Get a specific PurchaseInvoice in UBL format

<h3 id="get-purchase-invoice-data-as-json-with-a-base64-encoded-ubl-string-in-the-specified-version-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|purchase invoice guid|
|packaging|path|string|true|How to package the purchase invoice.|
|package_version|path|string|true|The version of the package.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|packaging|ubl|
|package_version|si11|
|package_version|si12|
|package_version|si20|
|package_version|aunz|
|package_version|sg|
|package_version|jp|
|package_version|en16931|
|package_version|original|

> Example responses

> 200 Response

```json
{
  "external_key": "string",
  "external_user_id": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legal_entity_id": 0,
  "system_generated_primary_image": true,
  "tax_system": "string",
  "ubl": "string"
}
```

<h3 id="get-purchase-invoice-data-as-json-with-a-base64-encoded-ubl-string-in-the-specified-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PurchaseInvoiceUbl](#schemapurchaseinvoiceubl)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-webhookinstances">WebhookInstances</h1>

## GET a WebhookInstance

<a id="opIdget_webhook_instances"></a>

> Code samples

```bash
curl https://example.com/webhook_instances/ \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /webhook_instances/`

GET a WebhookInstance from the queue. After processing it successfully, DELETE it and GET the next one. When a 204 is received, the queue is empty and the polling process can sleep for a while.

> Example responses

> 200 Response

```json
{
  "body": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="get-a-webhookinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[WebhookInstance](#schemawebhookinstance)|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## DELETE a WebhookInstance

<a id="opIddelete_webhook_instance"></a>

> Code samples

```bash
curl https://example.com/webhook_instances/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /webhook_instances/{guid}`

DELETE a specific WebhookInstance

<h3 id="delete-a-webhookinstance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|guid|path|string(uuid)|true|WebhookInstance guid|

<h3 id="delete-a-webhookinstance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not Found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="storecove-api-discovery">Discovery</h1>

## Discover Network Participant Existence

<a id="opIddiscovery_exists"></a>

> Code samples

```bash
curl https://example.com/discovery/exists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "documentTypes": [
      "invoice"
    ],
    "identifier": "string",
    "metaScheme": "iso6523-actorid-upis",
    "network": "peppol",
    "scheme": "string"
  }'
```

`POST /discovery/exists`

Discover if a network participant exists.

> Body parameter

```json
{
  "documentTypes": [
    "invoice"
  ],
  "identifier": "string",
  "metaScheme": "iso6523-actorid-upis",
  "network": "peppol",
  "scheme": "string"
}
```

<h3 id="discover-network-participant-existence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DiscoverableParticipant](#schemadiscoverableparticipant)|true|The participant to check|
|» documentTypes|body|[string]|false|An array of document types to discover. The default is '["invoice", "creditnote"]'. This is ignored when only checking existence.|
|» identifier|body|string|true|The actual identifier.|
|» metaScheme|body|string|false|The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.|
|» network|body|string|false|The network to check. Currently only 'peppol' is supported.|
|» scheme|body|string|true|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» documentTypes|invoice|
|» documentTypes|creditnote|
|» documentTypes|invoice_response|
|» documentTypes|order|
|» documentTypes|ordering|
|» documentTypes|order_response|

> Example responses

> 200 Response

```json
{
  "code": "OK",
  "email": true
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="discover-network-participant-existence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoveredParticipant](#schemadiscoveredparticipant)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="discover-network-participant-existence-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Discover Country Identifiers ** EXPERIMENTAL

<a id="opIddiscovery_identifiers"></a>

> Code samples

```bash
curl https://example.com/discovery/identifiers \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /discovery/identifiers`

Discover the identifiers used in each country, for routing, for legal identification as well as for tax identification purposes. We are currently testing this endpoint with selected Customers. If you would like to participate, please contact us.

> Example responses

> 200 Response

```json
{
  "countries": [
    {
      "country": "AD",
      "receiver": {
        "business": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        },
        "consumer": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        },
        "government": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        }
      },
      "region": "eu_eea",
      "sender": {
        "legal": {
          "centalized_identifier_test": "string",
          "centralized": true,
          "centralized_identifier": "string",
          "description": "string",
          "scheme": "string",
          "scheme_numercial": "string",
          "scheme_type": "iso6523-actorid-upis"
        },
        "tax": {
          "centalized_identifier_test": "string",
          "centralized": true,
          "centralized_identifier": "string",
          "description": "string",
          "scheme": "string",
          "scheme_numercial": "string",
          "scheme_type": "iso6523-actorid-upis"
        }
      }
    }
  ]
}
```

<h3 id="discover-country-identifiers-experimental-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CountrySpecifications](#schemacountryspecifications)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## Disover Network Participant

<a id="opIddiscovery_receives"></a>

> Code samples

```bash
curl https://example.com/discovery/receives \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "documentTypes": [
      "invoice"
    ],
    "identifier": "string",
    "metaScheme": "iso6523-actorid-upis",
    "network": "peppol",
    "scheme": "string"
  }'
```

`POST /discovery/receives`

Discover a network participant and capabilities.

> Body parameter

```json
{
  "documentTypes": [
    "invoice"
  ],
  "identifier": "string",
  "metaScheme": "iso6523-actorid-upis",
  "network": "peppol",
  "scheme": "string"
}
```

<h3 id="disover-network-participant-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DiscoverableParticipant](#schemadiscoverableparticipant)|true|The participant to check|
|» documentTypes|body|[string]|false|An array of document types to discover. The default is '["invoice", "creditnote"]'. This is ignored when only checking existence.|
|» identifier|body|string|true|The actual identifier.|
|» metaScheme|body|string|false|The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.|
|» network|body|string|false|The network to check. Currently only 'peppol' is supported.|
|» scheme|body|string|true|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» documentTypes|invoice|
|» documentTypes|creditnote|
|» documentTypes|invoice_response|
|» documentTypes|order|
|» documentTypes|ordering|
|» documentTypes|order_response|

> Example responses

> 200 Response

```json
{
  "code": "OK",
  "email": true
}
```

> 422 Response

```json
[
  {
    "details": "string",
    "source": "string"
  }
]
```

<h3 id="disover-network-participant-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[DiscoveredParticipant](#schemadiscoveredparticipant)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|422|Unprocessable Entity|Unprocessable Entity|Inline|

<h3 id="disover-network-participant-responseschema">Response Schema</h3>

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ErrorModel](#schemaerrormodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_AccountingCustomerParty">AccountingCustomerParty</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingcustomerparty"></a>
<a id="schema_AccountingCustomerParty"></a>
<a id="tocSaccountingcustomerparty"></a>
<a id="tocsaccountingcustomerparty"></a>

```json
{
  "party": {
    "address": {
      "city": "string",
      "country": "AD",
      "county": "string",
      "street1": "string",
      "street2": "string",
      "zip": "string"
    },
    "companyName": "string",
    "contact": {
      "email": "user@example.com",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phone": "string"
    }
  },
  "publicIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ]
}
```

The customer receiving the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|[Party](#schemaparty)|true|none|A party that can receive or send invoices|
|publicIdentifiers|[[PublicIdentifier](#schemapublicidentifier)]|false|none|A list of legal and tax identifiers for this customer.|

<h2 id="tocS_AccountingSupplierParty">AccountingSupplierParty</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingsupplierparty"></a>
<a id="schema_AccountingSupplierParty"></a>
<a id="tocSaccountingsupplierparty"></a>
<a id="tocsaccountingsupplierparty"></a>

```json
{
  "party": {
    "contact": {
      "email": "user@example.com",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phone": "string"
    }
  }
}
```

The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|[SenderParty](#schemasenderparty)|false|none|A party that can send documents|

<h2 id="tocS_AdditionalItemProperty">AdditionalItemProperty</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalitemproperty"></a>
<a id="schema_AdditionalItemProperty"></a>
<a id="tocSadditionalitemproperty"></a>
<a id="tocsadditionalitemproperty"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

An additional property for the item

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the property.|
|value|string|true|none|The value of the property.|

<h2 id="tocS_AdditionalTaxIdentifier">AdditionalTaxIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaltaxidentifier"></a>
<a id="schema_AdditionalTaxIdentifier"></a>
<a id="tocSadditionaltaxidentifier"></a>
<a id="tocsadditionaltaxidentifier"></a>

```json
{
  "country": "st",
  "county": "st",
  "id": 0,
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|The ISO3166 country code to use this identifier for in case of consumerTaxMode.|
|county|string|false|none|The county/state inside the country code to use this identifier for in case of consumerTaxMode.|
|id|integer(int64)|false|none|The Storecove assigned id for the AdditionalTaxIdentifier.|
|identifier|string|false|none|The identifier.|
|scheme|string|false|none|The scheme of the identifier.|
|superscheme|string|false|none|The superscheme of the identifier.|

<h2 id="tocS_AdditionalTaxIdentifierCreate">AdditionalTaxIdentifierCreate</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaltaxidentifiercreate"></a>
<a id="schema_AdditionalTaxIdentifierCreate"></a>
<a id="tocSadditionaltaxidentifiercreate"></a>
<a id="tocsadditionaltaxidentifiercreate"></a>

```json
{
  "country": "st",
  "county": "st",
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string",
  "third_party_password": "string",
  "third_party_username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|true|none|The ISO3166 country code to use this identifier for in case of consumerTaxMode.|
|county|string|false|none|The county/state inside the country code to use this identifier for in case of consumerTaxMode. Leave empty to create an additional tax identifier for the entire country. For India, use the two last characters of ISO 3166-2:IN (https://en.wikipedia.org/wiki/States_and_union_territories_of_India).|
|identifier|string|true|none|The identifier.|
|scheme|string|true|none|The scheme of the identifier.|
|superscheme|string|true|none|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|
|third_party_password|string|false|none|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|
|third_party_username|string|false|none|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|

<h2 id="tocS_AdditionalTaxIdentifierUpdate">AdditionalTaxIdentifierUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaadditionaltaxidentifierupdate"></a>
<a id="schema_AdditionalTaxIdentifierUpdate"></a>
<a id="tocSadditionaltaxidentifierupdate"></a>
<a id="tocsadditionaltaxidentifierupdate"></a>

```json
{
  "identifier": "string",
  "third_party_password": "string",
  "third_party_username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|true|none|The identifier.|
|third_party_password|string|false|none|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|
|third_party_username|string|false|none|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN tax identifier.|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "city": "string",
  "country": "AD",
  "county": "string",
  "street1": "string",
  "street2": "string",
  "zip": "string"
}
```

The address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The name of the city. Mandatory in most countries.|
|country|[Country](#schemacountry)|true|none|An ISO 3166-1 alpha-2 country code.|
|county|string|false|none|An optional county name.|
|street1|string|false|none|The street name and number. Mandatory in most countries.|
|street2|string|false|none|The second street field. Use this if you used the first field for the building name.|
|zip|string|false|none|The zipcode/postalzone. Mandatory unless the country does not have zip codes.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_Administration">Administration</h2>
<!-- backwards compatibility -->
<a id="schemaadministration"></a>
<a id="schema_Administration"></a>
<a id="tocSadministration"></a>
<a id="tocsadministration"></a>

```json
{
  "email": "string",
  "id": 0,
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address to send the received document to|
|id|integer(int64)|false|none|The Storecove assigned id for the Administration.|
|legal_entity_id|integer(int64)|false|none|The LegalEntity the Administration belongs to.|
|package_version|string|false|none|The version of the package.|
|packaging|string|false|none|How to package the purchase invoice.|
|sender_email_identity_id|integer(int64)|false|none|The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used|

#### Enumerated Values

|Property|Value|
|---|---|
|package_version|peppol_bis_v3|
|package_version|aunz|
|package_version|sg|
|packaging|ubl|

<h2 id="tocS_AdministrationCreate">AdministrationCreate</h2>
<!-- backwards compatibility -->
<a id="schemaadministrationcreate"></a>
<a id="schema_AdministrationCreate"></a>
<a id="tocSadministrationcreate"></a>
<a id="tocsadministrationcreate"></a>

```json
{
  "email": "string",
  "legal_entity_id": 0,
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address to send the received document to|
|legal_entity_id|integer(int64)|false|none|The LegalEntity the Administration belongs to.|
|package_version|string|false|none|The version of the package.|
|packaging|string|false|none|How to package the purchase invoice.|
|sender_email_identity_id|integer(int64)|false|none|The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used|

#### Enumerated Values

|Property|Value|
|---|---|
|package_version|peppol_bis_v3|
|package_version|aunz|
|package_version|sg|
|packaging|ubl|

<h2 id="tocS_AdministrationUpdate">AdministrationUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaadministrationupdate"></a>
<a id="schema_AdministrationUpdate"></a>
<a id="tocSadministrationupdate"></a>
<a id="tocsadministrationupdate"></a>

```json
{
  "email": "string",
  "package_version": "peppol_bis_v3",
  "packaging": "ubl",
  "sender_email_identity_id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address to send the received document to|
|package_version|string|false|none|The version of the package.|
|packaging|string|false|none|How to package the purchase invoice.|
|sender_email_identity_id|integer(int64)|false|none|The id of the SenderEmailIdentity. If not provided, the Storecove default sender will be used|

#### Enumerated Values

|Property|Value|
|---|---|
|package_version|peppol_bis_v3|
|package_version|aunz|
|package_version|sg|
|packaging|ubl|

<h2 id="tocS_AllowanceCharge">AllowanceCharge</h2>
<!-- backwards compatibility -->
<a id="schemaallowancecharge"></a>
<a id="schema_AllowanceCharge"></a>
<a id="tocSallowancecharge"></a>
<a id="tocsallowancecharge"></a>

```json
{
  "amountExcludingTax": 0,
  "amountExcludingVat": 0,
  "baseAmountExcludingTax": 0,
  "reason": "Agreed settlement",
  "reasonCode": "string",
  "tax": {
    "amount": 0,
    "category": "standard",
    "country": "AD",
    "percentage": 0
  },
  "taxesDutiesFees": [
    {
      "amount": 0,
      "category": "standard",
      "country": "AD",
      "percentage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountExcludingTax|number|false|none|The amount for the allowance or charge, excluding tax.|
|amountExcludingVat|number|false|none|DEPRECATED. Use amountExcludingTax. The amount for the allowance or charge, excluding VAT.|
|baseAmountExcludingTax|number|false|none|The base amount for the allowance or charge, excluding tax.|
|reason|string|false|none|The reason for the allowance or charge, free text|
|reasonCode|string|false|none|Do not use. Contact Storecove first if you want to use this field.|
|tax|[Tax](#schematax)|false|none|none|
|taxesDutiesFees|[[Tax](#schematax)]|false|none|An array of taxes, duties and fees for this invoice line. At this moment, multiple Tax items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "description": "string",
  "document": "string",
  "documentId": "string",
  "filename": "string",
  "mimeType": "application/pdf",
  "primaryImage": false
}
```

A document attachment to the invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|A description for the file attachment.|
|document|string|true|none|The base64 encoded version of the document attachment.|
|documentId|string|false|none|An id for the file attachment.|
|filename|string|false|none|The name of the file attachment.|
|mimeType|string|true|none|The document attachment mime type. Currently only application/pdf is allowed.|
|primaryImage|boolean|false|none|Whether or not this document is a visual representation of the invoice data. Note that although this property is not yet deprecated, using value 'true' is discouraged, since the invoice data itself is leading, not the image, and including an image may lead to confusion. Peppol no longer allows including primary images.|

#### Enumerated Values

|Property|Value|
|---|---|
|mimeType|application/pdf|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "user@example.com",
  "firstName": "string",
  "id": "string",
  "lastName": "string",
  "phone": "string"
}
```

Contact details for the invoice

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|none|
|firstName|string|false|none|none|
|id|string|false|none|Only supported for AccountingCustomerParty.|
|lastName|string|false|none|none|
|phone|string|false|none|none|

<h2 id="tocS_CorpPass">CorpPass</h2>
<!-- backwards compatibility -->
<a id="schemacorppass"></a>
<a id="schema_CorpPass"></a>
<a id="tocScorppass"></a>
<a id="tocscorppass"></a>

```json
{
  "client_redirect_fail_url": "stringstrin",
  "client_redirect_success_url": "stringstrin",
  "corppass_url": "stringstrin",
  "enabled": false,
  "flow_type": "corppass_flow_redirect",
  "signer_email": "string",
  "signer_name": "string",
  "simulate_corppass": false,
  "status": "corppass_no_status,"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_redirect_fail_url|string|false|none|The URL the CorpPass system will redirect to in case of a failure to perform identity verfication.|
|client_redirect_success_url|string|false|none|The URL the CorpPass system will redirect to in case of successful identity verfication.|
|corppass_url|string|false|none|The CorpPass redirect URL.|
|enabled|boolean|false|none|Whether or not the CorpPass flow is enabled.|
|flow_type|string|false|none|The CorpPass flow type.|
|signer_email|string|false|none|The email of the person who is going to perform the CorpPass process.|
|signer_name|string|false|none|The name of the person who is going to perform the CorpPass process.|
|simulate_corppass|boolean|false|none|Whether or not CorpPass is being simulated.|
|status|string|false|none|The status of the CorpPass process.|

#### Enumerated Values

|Property|Value|
|---|---|
|flow_type|corppass_flow_redirect|
|flow_type|corppass_flow_email|
|status|corppass_no_status,|
|status|corppass_initiated,|
|status|corppass_cancelled,|
|status|corppass_failed,|
|status|corppass_succeeded|

<h2 id="tocS_CorpPassCreate">CorpPassCreate</h2>
<!-- backwards compatibility -->
<a id="schemacorppasscreate"></a>
<a id="schema_CorpPassCreate"></a>
<a id="tocScorppasscreate"></a>
<a id="tocscorppasscreate"></a>

```json
{
  "client_redirect_fail_url": "stringstrin",
  "client_redirect_success_url": "stringstrin",
  "enabled": true,
  "flow_type": "corppass_flow_redirect",
  "signer_email": "string",
  "signer_name": "string",
  "simulate_corppass": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_redirect_fail_url|string|false|none|The URL the CorpPass system will redirect to in case of a failure to perform identity verfication. Mandatory for flow_type="corppass_flow_redirect"|
|client_redirect_success_url|string|false|none|The URL the CorpPass system will redirect to in case of successful identity verfication. Mandatory for flow_type="corppass_flow_redirect"|
|enabled|boolean|false|none|DEPRECATED. Whether or not to enable the CorpPass flow. Must be true if provided.|
|flow_type|string|true|none|The CorpPass flow type.|
|signer_email|string|false|none|The email of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"|
|signer_name|string|false|none|The name of the person who is going to perform the CorpPass process. Mandatory for flow_type="corppass_flow_email"|
|simulate_corppass|boolean|false|none|Whether or not to simulate CorpPass. Instead of redirecting to a CorpPass URL, you will receive a redirect to a Storecove URL which will show a page with two buttons: success and fail. This makes development without having test CorpPass credentials possible. Note this only works in sandbox, not in the production environment.|

#### Enumerated Values

|Property|Value|
|---|---|
|flow_type|corppass_flow_redirect|
|flow_type|corppass_flow_email|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
"AD"
```

An ISO 3166-1 alpha-2 country code.

<h2 id="tocS_CountrySpecification">CountrySpecification</h2>
<!-- backwards compatibility -->
<a id="schemacountryspecification"></a>
<a id="schema_CountrySpecification"></a>
<a id="tocScountryspecification"></a>
<a id="tocscountryspecification"></a>

```json
{
  "country": "AD",
  "receiver": {
    "business": {
      "legal": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "routing": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "tax": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      }
    },
    "consumer": {
      "legal": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "routing": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "tax": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      }
    },
    "government": {
      "legal": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "routing": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      },
      "tax": {
        "centalized_identifier_test": "string",
        "centralized": true,
        "centralized_identifier": "string",
        "description": "string",
        "scheme": "string",
        "scheme_numercial": "string",
        "scheme_type": "iso6523-actorid-upis"
      }
    }
  },
  "region": "eu_eea",
  "sender": {
    "legal": {
      "centalized_identifier_test": "string",
      "centralized": true,
      "centralized_identifier": "string",
      "description": "string",
      "scheme": "string",
      "scheme_numercial": "string",
      "scheme_type": "iso6523-actorid-upis"
    },
    "tax": {
      "centalized_identifier_test": "string",
      "centralized": true,
      "centralized_identifier": "string",
      "description": "string",
      "scheme": "string",
      "scheme_numercial": "string",
      "scheme_type": "iso6523-actorid-upis"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[Country](#schemacountry)|false|none|An ISO 3166-1 alpha-2 country code.|
|receiver|object|false|none|The receiver of the document.|
|region|string|false|none|The region this country belongs to. Within this region exchanging invoices is well defined. Between regions some care needs to be taken and Storecove may help in automatically converting some items. Contact us for details of inter-regional document exchange.|
|sender|object|false|none|The sender of the document.|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|
|region|eu_eea|
|region|sg|
|region|aunz|
|region|in|
|region|world|

<h2 id="tocS_CountrySpecificationIdentifier">CountrySpecificationIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemacountryspecificationidentifier"></a>
<a id="schema_CountrySpecificationIdentifier"></a>
<a id="tocScountryspecificationidentifier"></a>
<a id="tocscountryspecificationidentifier"></a>

```json
{
  "centalized_identifier_test": "string",
  "centralized": true,
  "centralized_identifier": "string",
  "description": "string",
  "scheme": "string",
  "scheme_numercial": "string",
  "scheme_type": "iso6523-actorid-upis"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|centalized_identifier_test|string|false|none|The centralized identifier to use for routing in test cases, if the "centralized" proprerty is true. May not always be available depending on the country and network.|
|centralized|boolean|false|none|Whether or not the identifier represents a centralized routing identifier. This is used in SG, AT and FR where all government invoices are routed to a central accesspoint with a single identifier. This field can only be present for routing identifiers.|
|centralized_identifier|string|false|none|The centralized identifier to use for routing, if the "centralized" proprerty is true.|
|description|string|false|none|Identifier description.|
|scheme|string|false|none|The scheme of the identifier|
|scheme_numercial|string|false|none|The numerical version of the scheme of the identifier|
|scheme_type|string|false|none|The scheme type of the identifier. Currently always "iso6523-actorid-upis"|

#### Enumerated Values

|Property|Value|
|---|---|
|scheme_type|iso6523-actorid-upis|

<h2 id="tocS_CountrySpecifications">CountrySpecifications</h2>
<!-- backwards compatibility -->
<a id="schemacountryspecifications"></a>
<a id="schema_CountrySpecifications"></a>
<a id="tocScountryspecifications"></a>
<a id="tocscountryspecifications"></a>

```json
{
  "countries": [
    {
      "country": "AD",
      "receiver": {
        "business": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        },
        "consumer": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        },
        "government": {
          "legal": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "routing": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          },
          "tax": {
            "centalized_identifier_test": "string",
            "centralized": true,
            "centralized_identifier": "string",
            "description": "string",
            "scheme": "string",
            "scheme_numercial": "string",
            "scheme_type": "iso6523-actorid-upis"
          }
        }
      },
      "region": "eu_eea",
      "sender": {
        "legal": {
          "centalized_identifier_test": "string",
          "centralized": true,
          "centralized_identifier": "string",
          "description": "string",
          "scheme": "string",
          "scheme_numercial": "string",
          "scheme_type": "iso6523-actorid-upis"
        },
        "tax": {
          "centalized_identifier_test": "string",
          "centralized": true,
          "centralized_identifier": "string",
          "description": "string",
          "scheme": "string",
          "scheme_numercial": "string",
          "scheme_type": "iso6523-actorid-upis"
        }
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[CountrySpecification](#schemacountryspecification)]|false|none|none|

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"AED"
```

The ISO 4217 currency code.

<h2 id="tocS_Delivery">Delivery</h2>
<!-- backwards compatibility -->
<a id="schemadelivery"></a>
<a id="schema_Delivery"></a>
<a id="tocSdelivery"></a>
<a id="tocsdelivery"></a>

```json
{
  "actualDate": "string",
  "deliveryLocation": {
    "address": {
      "city": "string",
      "country": "AD",
      "county": "string",
      "street1": "string",
      "street2": "string",
      "zip": "string"
    },
    "id": "string",
    "locationName": "string",
    "schemeAgencyId": "string",
    "schemeId": "string"
  },
  "deliveryParty": {
    "party": {
      "address": {
        "city": "string",
        "country": "AD",
        "county": "string",
        "street1": "string",
        "street2": "string",
        "zip": "string"
      },
      "companyName": "string",
      "contact": {
        "email": "user@example.com",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phone": "string"
      }
    }
  },
  "deliveryPartyName": "string",
  "quantity": 1,
  "requestedDeliveryPeriod": "string",
  "shippingMarks": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actualDate|string|false|none|The actual date of the delivery. Used only for Invoice|
|deliveryLocation|object|false|none|none|
|deliveryParty|[DeliveryParty](#schemadeliveryparty)|false|none|The party receiving the shipment.|
|deliveryPartyName|string|false|none|Use deliveryParty. The name of the party that took delivery. Used only for Invoice|
|quantity|number|false|none|The quantity of the delivery. Used only for Invoice|
|requestedDeliveryPeriod|string|false|none|The requested delivery period. Used only for DocumentOrder.|
|shippingMarks|string|false|none|A text that the buyer requests to be printed on the packing labels. Used only for DocumentOrder.|

<h2 id="tocS_DeliveryParty">DeliveryParty</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryparty"></a>
<a id="schema_DeliveryParty"></a>
<a id="tocSdeliveryparty"></a>
<a id="tocsdeliveryparty"></a>

```json
{
  "party": {
    "address": {
      "city": "string",
      "country": "AD",
      "county": "string",
      "street1": "string",
      "street2": "string",
      "zip": "string"
    },
    "companyName": "string",
    "contact": {
      "email": "user@example.com",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phone": "string"
    }
  }
}
```

The party receiving the shipment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|[Party](#schemaparty)|true|none|A party that can receive or send invoices|

<h2 id="tocS_DeliveryTerms">DeliveryTerms</h2>
<!-- backwards compatibility -->
<a id="schemadeliveryterms"></a>
<a id="schema_DeliveryTerms"></a>
<a id="tocSdeliveryterms"></a>
<a id="tocsdeliveryterms"></a>

```json
{
  "deliveryLocationId": "string",
  "incoterms": "EXW",
  "specialTerms": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryLocationId|string|false|none|The location to which the delivery terms refer.|
|incoterms|string|false|none|The incoterms:<br>++++<br><ul>    <li>        <strong>EXW – Ex Works</strong><br/>        The seller must give the buyer access to goods at an agreed location. From that moment, the buyer bears almost all costs and risks during the entire shipping process.<br/>    </li>    <li>        <strong>FCA – Free Carrier</strong><br/>        The seller must make the goods available at his own risk and expense at his own premises or at an agreed place. In both cases, the seller is responsible for the clearance of the goods for export. It can be agreed that the buyer must instruct the carrier to transfer a “Bill of Lading (BL)” with a note on board to the seller.    </li>    <li>        <strong>CPT – Carriage Paid To</strong><br/>        The seller has the same responsibilities as with FCA, but in this case also pays the delivery costs.    </li>    <li>        <strong>CIP – Carriage Insurance Paid To</strong><br/>        The same seller responsibilities as with CPT, only in this case the seller is obliged to pay the insurance with a high coverage ratio. Parties can agree separately to apply limited coverage.    </li>    <li>        <strong>DAP – Delivered At Place</strong><br/>        The seller bears the costs and risks during the transport of the goods to an agreed address. As soon as the goods have arrived at this address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>DPU – Delivered at Place Unloaded</strong><br/>        The seller is responsible for the costs and risks of delivering goods to an agreed destination where goods can be unloaded for further transport. The selling party arranges customs and unloads the goods at the agreed place. The buyer arranges the customs clearance and any associated rights.    </li>    <li>        <strong>DDP – Delivered Duty Paid</strong><br/>        The seller bears the costs and risks of transport, carries out the export and import responsibilities and pays any import duties. As soon as the goods have arrived at the address and are ready for unloading, the risk passes to the buyer.    </li>    <li>        <strong>FAS – Free Alongside Ship</strong><br/>        The seller bears all costs and risks until the goods are delivered next to the ship. From that point, the risk is for the buyer and he also arranges the export clearance and import clearance.    </li>    <li>        <strong>FOB – Free On Board</strong><br/>        The seller bears all costs and risks until the goods are on board the ship and also arranges the export clearance. As soon as the goods have been delivered to the ship, the buyer bears all responsibilities.    </li>    <li>        <strong>CFR – Cost And Freight</strong><br/>        The same applies to the seller and buyer as with FOB, but in this case, the seller must also pay for the transport of the goods to the port.    </li>    <li>        <strong>CIF – Cost, Insurance, and Freight</strong><br/>        The seller has the same obligations as with CFR but also pays the (minimum) insurance costs. The buyer must pay for more comprehensive insurance.    </li></ul><br>++++|
|specialTerms|string|false|none|A description of special conditions relating to the delivery terms.|

#### Enumerated Values

|Property|Value|
|---|---|
|incoterms|EXW|
|incoterms|FCA|
|incoterms|CPT|
|incoterms|CIP|
|incoterms|DAP|
|incoterms|DPU|
|incoterms|DDP|
|incoterms|FAS|
|incoterms|FOB|
|incoterms|CFR|
|incoterms|CIF|

<h2 id="tocS_DiscoverableParticipant">DiscoverableParticipant</h2>
<!-- backwards compatibility -->
<a id="schemadiscoverableparticipant"></a>
<a id="schema_DiscoverableParticipant"></a>
<a id="tocSdiscoverableparticipant"></a>
<a id="tocsdiscoverableparticipant"></a>

```json
{
  "documentTypes": [
    "invoice"
  ],
  "identifier": "string",
  "metaScheme": "iso6523-actorid-upis",
  "network": "peppol",
  "scheme": "string"
}
```

A participant to be discovered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentTypes|[string]|false|none|An array of document types to discover. The default is '["invoice", "creditnote"]'. This is ignored when only checking existence.|
|identifier|string|true|none|The actual identifier.|
|metaScheme|string|false|none|The meta scheme of the identifier. For Peppol this is always 'iso6523-actorid-upis'.|
|network|string|false|none|The network to check. Currently only 'peppol' is supported.|
|scheme|string|true|none|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentTypes|invoice|
|documentTypes|creditnote|
|documentTypes|invoice_response|
|documentTypes|order|
|documentTypes|ordering|
|documentTypes|order_response|

<h2 id="tocS_DiscoveredParticipant">DiscoveredParticipant</h2>
<!-- backwards compatibility -->
<a id="schemadiscoveredparticipant"></a>
<a id="schema_DiscoveredParticipant"></a>
<a id="tocSdiscoveredparticipant"></a>
<a id="tocsdiscoveredparticipant"></a>

```json
{
  "code": "OK",
  "email": true
}
```

A public identifier for this customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The response code.|
|email|boolean|false|none|Whether or not an 'OK' response means the document will be sent via Peppol, but delivered by email. This happens in the Belgian Hermes system where all identifiers have been registered, but if the receiver hasn't registered with a service provider, the Hermes system will send a PDF created from the electronic invoice and email that. The electronic document will itself not be emailed. Also see https://einvoice.belgium.be/en/article/send-structured-invoices-all-your-customers-hermes[Hermes^].|

#### Enumerated Values

|Property|Value|
|---|---|
|code|OK|
|code|NOK|

<h2 id="tocS_DocumentInvoiceResponse">DocumentInvoiceResponse</h2>
<!-- backwards compatibility -->
<a id="schemadocumentinvoiceresponse"></a>
<a id="schema_DocumentInvoiceResponse"></a>
<a id="tocSdocumentinvoiceresponse"></a>
<a id="tocsdocumentinvoiceresponse"></a>

```json
{
  "clarifications": [
    {
      "clarification": "string",
      "clarificationCode": "REF",
      "clarificationCodeType": "OPStatusReason"
    }
  ],
  "effectiveDate": "string",
  "note": "string",
  "responseCode": "AB"
}
```

The invoice response to send.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clarifications|[[InvoiceResponseClarification](#schemainvoiceresponseclarification)]|false|none|A list of clarifications why a received invoice was rejected (RE) or under query (UQ) and what action to take.|
|effectiveDate|string|false|none|The date when the status became effective. Format: yyyy-mm-dd.|
|note|string|false|none|A note to add to the invoice reponse|
|responseCode|string|true|none|The response code. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/UNCL4343-T111/|

#### Enumerated Values

|Property|Value|
|---|---|
|responseCode|AB|
|responseCode|IP|
|responseCode|UQ|
|responseCode|RE|
|responseCode|AP|
|responseCode|PD|

<h2 id="tocS_DocumentOrder">DocumentOrder</h2>
<!-- backwards compatibility -->
<a id="schemadocumentorder"></a>
<a id="schema_DocumentOrder"></a>
<a id="tocSdocumentorder"></a>
<a id="tocsdocumentorder"></a>

```json
{
  "accountingCost": "string",
  "allowanceCharges": [
    {
      "amountExcludingTax": 0,
      "amountExcludingVat": 0,
      "baseAmountExcludingTax": 0,
      "reason": "Agreed settlement",
      "reasonCode": "string",
      "tax": {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      },
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ]
    }
  ],
  "amountIncludingTax": 0,
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "delivery": {
    "actualDate": "string",
    "deliveryLocation": {
      "address": {
        "city": "string",
        "country": "AD",
        "county": "string",
        "street1": "string",
        "street2": "string",
        "zip": "string"
      },
      "id": "string",
      "locationName": "string",
      "schemeAgencyId": "string",
      "schemeId": "string"
    },
    "deliveryParty": {
      "party": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "companyName": "string",
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      }
    },
    "deliveryPartyName": "string",
    "quantity": 1,
    "requestedDeliveryPeriod": "string",
    "shippingMarks": "string"
  },
  "deliveryTerms": {
    "deliveryLocationId": "string",
    "incoterms": "EXW",
    "specialTerms": "string"
  },
  "documentCurrencyCode": "AED",
  "documentNumber": "string",
  "issueDate": "string",
  "issueTime": "string",
  "note": "string",
  "orderLines": [
    {
      "accountingCost": "string",
      "additionalItemProperties": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "allowPartialDelivery": false,
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "baseAmountExcludingTax": 0,
          "reason": "string",
          "reasonCode": "string"
        }
      ],
      "amountExcludingTax": 0,
      "baseQuantity": 1,
      "delivery": {
        "deliveryLocation": {
          "id": "string",
          "schemeId": "string"
        }
      },
      "description": "string",
      "itemPrice": 1,
      "lineId": "string",
      "lotNumberIds": [
        "string"
      ],
      "name": "string",
      "note": "string",
      "quantity": 1,
      "quantityUnitCode": "C62",
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ]
    }
  ],
  "orderType": "regular",
  "paymentTerms": {
    "note": "string"
  },
  "references": [
    {
      "documentId": "string",
      "documentType": "purchase_order",
      "issueDate": "string",
      "lineId": "string"
    }
  ],
  "sellerSupplierParty": {
    "party": {
      "contact": {
        "email": "user@example.com",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phone": "string"
      }
    },
    "publicIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ]
  },
  "taxSystem": "tax_line_percentages",
  "timeZone": "string",
  "validityPeriod": "string"
}
```

The order to send.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingCost|string|false|none|The buyer's accounting cost centre for this document.|
|allowanceCharges|[[AllowanceCharge](#schemaallowancecharge)]|false|none|An array of allowance charges.|
|amountIncludingTax|number|true|none|Total amount including Tax.|
|attachments|[[Attachment](#schemaattachment)]|false|none|An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|delivery|[Delivery](#schemadelivery)|false|none|none|
|deliveryTerms|[DeliveryTerms](#schemadeliveryterms)|false|none|none|
|documentCurrencyCode|[CurrencyCode](#schemacurrencycode)|false|none|The ISO 4217 currency code.|
|documentNumber|string|true|none|The number you assigned to the document.|
|issueDate|string|true|none|Format: yyyy-mm-dd.|
|issueTime|string|false|none|Format: hh:mm:ss±zzzz |
|note|string|false|none|A note to add to the document|
|orderLines|[[OrderLine](#schemaorderline)]|true|none|An array of order lines.|
|orderType|string|false|none|The type of this order.|
|paymentTerms|[PaymentTerms](#schemapaymentterms)|false|none|The payment terms of the document.|
|references|[[Reference](#schemareference)]|false|none|An array of references to other documents. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes and doucments support all documentTypes.|
|sellerSupplierParty|[SellerSupplierParty](#schemasellersupplierparty)|true|none|The party sending the order.|
|taxSystem|string|false|none|The tax system used for the invoice. The system 'tax_line_percentages' is the only one currently supported.|
|timeZone|string|false|none|Format: ±zzzz, where ±zzzz is the difference from UTC, e.g. +0100 or -0900 etc. The timezone will also apply to the document issue date if this field is provided.|
|validityPeriod|string|false|none|The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentCurrencyCode|AED|
|documentCurrencyCode|AFN|
|documentCurrencyCode|ALL|
|documentCurrencyCode|AMD|
|documentCurrencyCode|ANG|
|documentCurrencyCode|AOA|
|documentCurrencyCode|ARS|
|documentCurrencyCode|AUD|
|documentCurrencyCode|AWG|
|documentCurrencyCode|AZN|
|documentCurrencyCode|BAM|
|documentCurrencyCode|BBD|
|documentCurrencyCode|BDT|
|documentCurrencyCode|BGN|
|documentCurrencyCode|BHD|
|documentCurrencyCode|BIF|
|documentCurrencyCode|BMD|
|documentCurrencyCode|BND|
|documentCurrencyCode|BOB|
|documentCurrencyCode|BOV|
|documentCurrencyCode|BRL|
|documentCurrencyCode|BSD|
|documentCurrencyCode|BTN|
|documentCurrencyCode|BWP|
|documentCurrencyCode|BYN|
|documentCurrencyCode|BYR|
|documentCurrencyCode|BZD|
|documentCurrencyCode|CAD|
|documentCurrencyCode|CDF|
|documentCurrencyCode|CHE|
|documentCurrencyCode|CHF|
|documentCurrencyCode|CHW|
|documentCurrencyCode|CLF|
|documentCurrencyCode|CLP|
|documentCurrencyCode|CNY|
|documentCurrencyCode|COP|
|documentCurrencyCode|COU|
|documentCurrencyCode|CRC|
|documentCurrencyCode|CUC|
|documentCurrencyCode|CUP|
|documentCurrencyCode|CVE|
|documentCurrencyCode|CZK|
|documentCurrencyCode|DJF|
|documentCurrencyCode|DKK|
|documentCurrencyCode|DOP|
|documentCurrencyCode|DZD|
|documentCurrencyCode|EGP|
|documentCurrencyCode|ERN|
|documentCurrencyCode|ETB|
|documentCurrencyCode|EUR|
|documentCurrencyCode|FJD|
|documentCurrencyCode|FKP|
|documentCurrencyCode|GBP|
|documentCurrencyCode|GEL|
|documentCurrencyCode|GHS|
|documentCurrencyCode|GIP|
|documentCurrencyCode|GMD|
|documentCurrencyCode|GNF|
|documentCurrencyCode|GTQ|
|documentCurrencyCode|GYD|
|documentCurrencyCode|HKD|
|documentCurrencyCode|HNL|
|documentCurrencyCode|HRK|
|documentCurrencyCode|HTG|
|documentCurrencyCode|HUF|
|documentCurrencyCode|IDR|
|documentCurrencyCode|ILS|
|documentCurrencyCode|INR|
|documentCurrencyCode|IQD|
|documentCurrencyCode|IRR|
|documentCurrencyCode|ISK|
|documentCurrencyCode|JMD|
|documentCurrencyCode|JOD|
|documentCurrencyCode|JPY|
|documentCurrencyCode|KES|
|documentCurrencyCode|KGS|
|documentCurrencyCode|KHR|
|documentCurrencyCode|KMF|
|documentCurrencyCode|KPW|
|documentCurrencyCode|KRW|
|documentCurrencyCode|KWD|
|documentCurrencyCode|KYD|
|documentCurrencyCode|KZT|
|documentCurrencyCode|LAK|
|documentCurrencyCode|LBP|
|documentCurrencyCode|LKR|
|documentCurrencyCode|LRD|
|documentCurrencyCode|LSL|
|documentCurrencyCode|LYD|
|documentCurrencyCode|MAD|
|documentCurrencyCode|MDL|
|documentCurrencyCode|MGA|
|documentCurrencyCode|MKD|
|documentCurrencyCode|MMK|
|documentCurrencyCode|MNT|
|documentCurrencyCode|MOP|
|documentCurrencyCode|MRO|
|documentCurrencyCode|MUR|
|documentCurrencyCode|MVR|
|documentCurrencyCode|MWK|
|documentCurrencyCode|MXN|
|documentCurrencyCode|MXV|
|documentCurrencyCode|MYR|
|documentCurrencyCode|MZN|
|documentCurrencyCode|NAD|
|documentCurrencyCode|NGN|
|documentCurrencyCode|NIO|
|documentCurrencyCode|NOK|
|documentCurrencyCode|NPR|
|documentCurrencyCode|NZD|
|documentCurrencyCode|OMR|
|documentCurrencyCode|PAB|
|documentCurrencyCode|PEN|
|documentCurrencyCode|PGK|
|documentCurrencyCode|PHP|
|documentCurrencyCode|PKR|
|documentCurrencyCode|PLN|
|documentCurrencyCode|PYG|
|documentCurrencyCode|QAR|
|documentCurrencyCode|RON|
|documentCurrencyCode|RSD|
|documentCurrencyCode|RUB|
|documentCurrencyCode|RWF|
|documentCurrencyCode|SAR|
|documentCurrencyCode|SBD|
|documentCurrencyCode|SCR|
|documentCurrencyCode|SDG|
|documentCurrencyCode|SEK|
|documentCurrencyCode|SGD|
|documentCurrencyCode|SHP|
|documentCurrencyCode|SLE|
|documentCurrencyCode|SLL|
|documentCurrencyCode|SOS|
|documentCurrencyCode|SRD|
|documentCurrencyCode|SSP|
|documentCurrencyCode|STD|
|documentCurrencyCode|SYP|
|documentCurrencyCode|SZL|
|documentCurrencyCode|THB|
|documentCurrencyCode|TJS|
|documentCurrencyCode|TMT|
|documentCurrencyCode|TND|
|documentCurrencyCode|TOP|
|documentCurrencyCode|TRY|
|documentCurrencyCode|TTD|
|documentCurrencyCode|TWD|
|documentCurrencyCode|TZS|
|documentCurrencyCode|UAH|
|documentCurrencyCode|UGX|
|documentCurrencyCode|USD|
|documentCurrencyCode|USN|
|documentCurrencyCode|UYI|
|documentCurrencyCode|UYU|
|documentCurrencyCode|UZS|
|documentCurrencyCode|VEF|
|documentCurrencyCode|VND|
|documentCurrencyCode|VUV|
|documentCurrencyCode|WST|
|documentCurrencyCode|XAF|
|documentCurrencyCode|XAG|
|documentCurrencyCode|XAU|
|documentCurrencyCode|XBA|
|documentCurrencyCode|XBB|
|documentCurrencyCode|XBC|
|documentCurrencyCode|XBD|
|documentCurrencyCode|XCD|
|documentCurrencyCode|XDR|
|documentCurrencyCode|XFU|
|documentCurrencyCode|XOF|
|documentCurrencyCode|XPD|
|documentCurrencyCode|XPF|
|documentCurrencyCode|XPT|
|documentCurrencyCode|XSU|
|documentCurrencyCode|XTS|
|documentCurrencyCode|XUA|
|documentCurrencyCode|XXX|
|documentCurrencyCode|YER|
|documentCurrencyCode|ZAR|
|documentCurrencyCode|ZMW|
|orderType|regular|
|orderType|consignment|
|taxSystem|tax_line_percentages|

<h2 id="tocS_DocumentSubmission">DocumentSubmission</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubmission"></a>
<a id="schema_DocumentSubmission"></a>
<a id="tocSdocumentsubmission"></a>
<a id="tocsdocumentsubmission"></a>

```json
{
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "createPrimaryImage": true,
  "document": {
    "documentType": "invoice",
    "invoice": {
      "accountingCost": "string",
      "accountingCurrencyTaxAmount": 0,
      "accountingCurrencyTaxAmountCurrency": "AED",
      "accountingCustomerParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        },
        "publicIdentifiers": [
          {
            "id": "string",
            "scheme": "string"
          }
        ]
      },
      "accountingSupplierParty": {
        "party": {
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "amountExcludingVat": 0,
          "baseAmountExcludingTax": 0,
          "reason": "Agreed settlement",
          "reasonCode": "string",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "amountIncludingVat": 0,
      "attachments": [
        {
          "description": "string",
          "document": "string",
          "documentId": "string",
          "filename": "string",
          "mimeType": "application/pdf",
          "primaryImage": false
        }
      ],
      "billingReference": "string",
      "buyerReference": "string",
      "consumerTaxMode": false,
      "contractDocumentReference": "string",
      "delivery": {
        "actualDate": "string",
        "deliveryLocation": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "id": "string",
          "locationName": "string",
          "schemeAgencyId": "string",
          "schemeId": "string"
        },
        "deliveryParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "deliveryPartyName": "string",
        "quantity": 1,
        "requestedDeliveryPeriod": "string",
        "shippingMarks": "string"
      },
      "documentCurrencyCode": "AED",
      "dueDate": "string",
      "invoiceLines": [
        {
          "accountingCost": "string",
          "additionalItemProperties": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "allowanceCharge": 0,
          "allowanceCharges": [
            {
              "amountExcludingTax": 0,
              "baseAmountExcludingTax": 0,
              "reason": "string",
              "reasonCode": "string"
            }
          ],
          "amountExcludingVat": 0,
          "buyersItemIdentification": "string",
          "description": "string",
          "invoicePeriod": "string",
          "itemPrice": 1,
          "lineId": "string",
          "name": "string",
          "note": "string",
          "orderLineReferenceLineId": "string",
          "quantity": 1,
          "quantityUnitCode": "C62",
          "references": [
            {
              "documentId": "string",
              "documentType": "purchase_order",
              "issueDate": "string",
              "lineId": "string"
            }
          ],
          "sellersItemIdentification": "string",
          "standardItemIdentification": "string",
          "standardItemIdentificationSchemeAgencyId": "9",
          "standardItemIdentificationSchemeId": "GTIN",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "invoiceNumber": "string",
      "invoicePeriod": "string",
      "invoiceType": "380",
      "issueDate": "string",
      "issueReasons": [
        "string"
      ],
      "note": "string",
      "orderReference": "string",
      "paymentMeansArray": [
        {
          "account": "string",
          "amount": 0,
          "branche_code": "string",
          "code": "credit_transfer",
          "holder": "string",
          "mandate": "string",
          "network": "string",
          "paymentId": "string"
        }
      ],
      "paymentMeansBic": "string",
      "paymentMeansCode": "online_payment_service",
      "paymentMeansIban": "string",
      "paymentMeansPaymentId": "string",
      "paymentTerms": {
        "note": "string"
      },
      "preferredInvoiceType": "prefer_autodetect",
      "prepaidAmount": 0,
      "projectReference": "string",
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "salesOrderId": "string",
      "selfBillingMode": false,
      "taxExemptReason": "export",
      "taxPointDate": "string",
      "taxSubtotals": [
        {
          "category": "standard",
          "country": "AD",
          "percentage": 0,
          "taxAmount": 0,
          "taxableAmount": 0
        }
      ],
      "taxSystem": "tax_line_amounts",
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ],
      "transactionType": "b2b",
      "ublExtensions": [
        "string"
      ],
      "vatReverseCharge": false,
      "x2y": "b2b"
    },
    "invoiceResponse": {
      "clarifications": [
        {
          "clarification": "string",
          "clarificationCode": "REF",
          "clarificationCodeType": "OPStatusReason"
        }
      ],
      "effectiveDate": "string",
      "note": "string",
      "responseCode": "AB"
    },
    "order": {
      "accountingCost": "string",
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "amountExcludingVat": 0,
          "baseAmountExcludingTax": 0,
          "reason": "Agreed settlement",
          "reasonCode": "string",
          "tax": {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          },
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "amountIncludingTax": 0,
      "attachments": [
        {
          "description": "string",
          "document": "string",
          "documentId": "string",
          "filename": "string",
          "mimeType": "application/pdf",
          "primaryImage": false
        }
      ],
      "delivery": {
        "actualDate": "string",
        "deliveryLocation": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "id": "string",
          "locationName": "string",
          "schemeAgencyId": "string",
          "schemeId": "string"
        },
        "deliveryParty": {
          "party": {
            "address": {
              "city": "string",
              "country": "AD",
              "county": "string",
              "street1": "string",
              "street2": "string",
              "zip": "string"
            },
            "companyName": "string",
            "contact": {
              "email": "user@example.com",
              "firstName": "string",
              "id": "string",
              "lastName": "string",
              "phone": "string"
            }
          }
        },
        "deliveryPartyName": "string",
        "quantity": 1,
        "requestedDeliveryPeriod": "string",
        "shippingMarks": "string"
      },
      "deliveryTerms": {
        "deliveryLocationId": "string",
        "incoterms": "EXW",
        "specialTerms": "string"
      },
      "documentCurrencyCode": "AED",
      "documentNumber": "string",
      "issueDate": "string",
      "issueTime": "string",
      "note": "string",
      "orderLines": [
        {
          "accountingCost": "string",
          "additionalItemProperties": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "allowPartialDelivery": false,
          "allowanceCharges": [
            {
              "amountExcludingTax": 0,
              "baseAmountExcludingTax": 0,
              "reason": "string",
              "reasonCode": "string"
            }
          ],
          "amountExcludingTax": 0,
          "baseQuantity": 1,
          "delivery": {
            "deliveryLocation": {
              "id": "string",
              "schemeId": "string"
            }
          },
          "description": "string",
          "itemPrice": 1,
          "lineId": "string",
          "lotNumberIds": [
            "string"
          ],
          "name": "string",
          "note": "string",
          "quantity": 1,
          "quantityUnitCode": "C62",
          "references": [
            {
              "documentId": "string",
              "documentType": "purchase_order",
              "issueDate": "string",
              "lineId": "string"
            }
          ],
          "taxesDutiesFees": [
            {
              "amount": 0,
              "category": "standard",
              "country": "AD",
              "percentage": 0
            }
          ]
        }
      ],
      "orderType": "regular",
      "paymentTerms": {
        "note": "string"
      },
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "sellerSupplierParty": {
        "party": {
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        },
        "publicIdentifiers": [
          {
            "id": "string",
            "scheme": "string"
          }
        ]
      },
      "taxSystem": "tax_line_percentages",
      "timeZone": "string",
      "validityPeriod": "string"
    },
    "rawDocumentData": {
      "document": "string",
      "documentTypeId": "string",
      "parse": true,
      "parseStrategy": "ubl",
      "processId": "string"
    }
  },
  "idempotencyGuid": "stringstringstringstringstringstring",
  "legalEntityId": 0,
  "receiveGuid": "string",
  "routing": {
    "clearWithoutSending": false,
    "eIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ],
    "emails": [
      "user@example.com"
    ]
  }
}
```

The document you want Storecove to send, with some meta-data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|DEPRECATED. Use the attachments array inside the 'document' property. An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|createPrimaryImage|boolean|false|none|DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true.|
|document|[SendableDocument](#schemasendabledocument)|false|none|The document to send.|
|idempotencyGuid|string|false|none|A guid that you generated for this DocumentSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed and any subsequent ones will trigger an HTTP 422 Unprocessable Entity response.|
|legalEntityId|integer|false|none|The id of the LegalEntity this document should be sent on behalf of. Either legalEntityId or receiveGuid is mandatory.|
|receiveGuid|string|false|none|The GUID that was in the received_document webhook. Either legalEntityId or receiveGuid is mandatory. This field is used for sending response documents, such as InvoiceReponse and OrderResponse.|
|routing|[Routing](#schemarouting)|false|none|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|

<h2 id="tocS_DocumentSubmissionEvidence">DocumentSubmissionEvidence</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubmissionevidence"></a>
<a id="schema_DocumentSubmissionEvidence"></a>
<a id="tocSdocumentsubmissionevidence"></a>
<a id="tocsdocumentsubmissionevidence"></a>

```json
{
  "documents": [
    {
      "document": "string",
      "expires_at": "string",
      "mime_type": "message/rfc822"
    }
  ],
  "evidence": {
    "message_id": "string",
    "receiving_accesspoint": "string",
    "remote_mta_ip": "string",
    "reporting_mta": "string",
    "smtp_response": "string",
    "timestamp": "string",
    "transmission_id": "string",
    "xml": "string"
  },
  "network": "as2",
  "receiver": "string",
  "sender": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[[DocumentSubmissionEvidenceDocument](#schemadocumentsubmissionevidencedocument)]|false|none|An array of documents that were sent. For OpenPeppol, this is always a single document (it may contain a PDF inside). For Email, the number of documents depends on the number of attachments, which in turn depends on the country of the receiver. For email, the raw email in RFC822 format is also included.|
|evidence|[DocumentSubmissionEvidenceEvidence](#schemadocumentsubmissionevidenceevidence)|false|none|none|
|network|string|false|none|The exchange network that was used to send the document|
|receiver|string|false|none|The legal identifier of the receiver, or the tax identifier if there is no legal identifier.|
|sender|string|false|none|The legal identifier of the sender, or the tax identifier if there is no legal identifier.|

#### Enumerated Values

|Property|Value|
|---|---|
|network|as2|
|network|email|
|network|peppol|
|network|sdi|

<h2 id="tocS_DocumentSubmissionEvidenceDocument">DocumentSubmissionEvidenceDocument</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubmissionevidencedocument"></a>
<a id="schema_DocumentSubmissionEvidenceDocument"></a>
<a id="tocSdocumentsubmissionevidencedocument"></a>
<a id="tocsdocumentsubmissionevidencedocument"></a>

```json
{
  "document": "string",
  "expires_at": "string",
  "mime_type": "message/rfc822"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|false|none|The URL where the document can be retrieved.|
|expires_at|string|false|none|The datetime the URL expires. Format: 'YYYY-MM-DD HH:mm:ss.'|
|mime_type|string|false|none|The mime type of the document.|

#### Enumerated Values

|Property|Value|
|---|---|
|mime_type|message/rfc822|
|mime_type|application/xml|
|mime_type|application/json|
|mime_type|application/pdf|

<h2 id="tocS_DocumentSubmissionEvidenceEvidence">DocumentSubmissionEvidenceEvidence</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubmissionevidenceevidence"></a>
<a id="schema_DocumentSubmissionEvidenceEvidence"></a>
<a id="tocSdocumentsubmissionevidenceevidence"></a>
<a id="tocsdocumentsubmissionevidenceevidence"></a>

```json
{
  "message_id": "string",
  "receiving_accesspoint": "string",
  "remote_mta_ip": "string",
  "reporting_mta": "string",
  "smtp_response": "string",
  "timestamp": "string",
  "transmission_id": "string",
  "xml": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message_id|string|false|none|The unique message id used in the OpenPeppol SBDH.|
|receiving_accesspoint|string|false|none|An identification of the OpenPeppol accesspoint that the invoice was sent to.|
|remote_mta_ip|string|false|none|The IP address of the sending SMTP server.|
|reporting_mta|string|false|none|An identification for the sending SMTP.|
|smtp_response|string|false|none|The response of the receiving SMTP server.|
|timestamp|string|false|none|The timestamp of the delivery to the receiving SMTP server.|
|transmission_id|string|false|none|The unique id for this OpenPeppol transmission.|
|xml|string|false|none|The XML evidence for the transmission. This is the XML returned by the receiving OpenPeppol accesspoint.|

<h2 id="tocS_DocumentSubmissionResult">DocumentSubmissionResult</h2>
<!-- backwards compatibility -->
<a id="schemadocumentsubmissionresult"></a>
<a id="schema_DocumentSubmissionResult"></a>
<a id="tocSdocumentsubmissionresult"></a>
<a id="tocsdocumentsubmissionresult"></a>

```json
{
  "guid": "string"
}
```

The result of a document submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|A (V4) GUID for the document submission|

<h2 id="tocS_EIdentifiers">EIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemaeidentifiers"></a>
<a id="schema_EIdentifiers"></a>
<a id="tocSeidentifiers"></a>
<a id="tocseidentifiers"></a>

```json
[
  {
    "id": "string",
    "scheme": "string"
  }
]
```

A list of electronic routing identifiers. These are the identifiers used on the Peppol network or for other destinations.

<h2 id="tocS_ErrorModel">ErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemaerrormodel"></a>
<a id="schema_ErrorModel"></a>
<a id="tocSerrormodel"></a>
<a id="tocserrormodel"></a>

```json
{
  "details": "string",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|string|false|none|none|
|source|string|false|none|none|

<h2 id="tocS_Invoice">Invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_Invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "accountingCost": "string",
  "accountingCurrencyTaxAmount": 0,
  "accountingCurrencyTaxAmountCurrency": "AED",
  "accountingCustomerParty": {
    "party": {
      "address": {
        "city": "string",
        "country": "AD",
        "county": "string",
        "street1": "string",
        "street2": "string",
        "zip": "string"
      },
      "companyName": "string",
      "contact": {
        "email": "user@example.com",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phone": "string"
      }
    },
    "publicIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ]
  },
  "accountingSupplierParty": {
    "party": {
      "contact": {
        "email": "user@example.com",
        "firstName": "string",
        "id": "string",
        "lastName": "string",
        "phone": "string"
      }
    }
  },
  "allowanceCharges": [
    {
      "amountExcludingTax": 0,
      "amountExcludingVat": 0,
      "baseAmountExcludingTax": 0,
      "reason": "Agreed settlement",
      "reasonCode": "string",
      "tax": {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      },
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ]
    }
  ],
  "amountIncludingVat": 0,
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "billingReference": "string",
  "buyerReference": "string",
  "consumerTaxMode": false,
  "contractDocumentReference": "string",
  "delivery": {
    "actualDate": "string",
    "deliveryLocation": {
      "address": {
        "city": "string",
        "country": "AD",
        "county": "string",
        "street1": "string",
        "street2": "string",
        "zip": "string"
      },
      "id": "string",
      "locationName": "string",
      "schemeAgencyId": "string",
      "schemeId": "string"
    },
    "deliveryParty": {
      "party": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "companyName": "string",
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      }
    },
    "deliveryPartyName": "string",
    "quantity": 1,
    "requestedDeliveryPeriod": "string",
    "shippingMarks": "string"
  },
  "documentCurrencyCode": "AED",
  "dueDate": "string",
  "invoiceLines": [
    {
      "accountingCost": "string",
      "additionalItemProperties": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "allowanceCharge": 0,
      "allowanceCharges": [
        {
          "amountExcludingTax": 0,
          "baseAmountExcludingTax": 0,
          "reason": "string",
          "reasonCode": "string"
        }
      ],
      "amountExcludingVat": 0,
      "buyersItemIdentification": "string",
      "description": "string",
      "invoicePeriod": "string",
      "itemPrice": 1,
      "lineId": "string",
      "name": "string",
      "note": "string",
      "orderLineReferenceLineId": "string",
      "quantity": 1,
      "quantityUnitCode": "C62",
      "references": [
        {
          "documentId": "string",
          "documentType": "purchase_order",
          "issueDate": "string",
          "lineId": "string"
        }
      ],
      "sellersItemIdentification": "string",
      "standardItemIdentification": "string",
      "standardItemIdentificationSchemeAgencyId": "9",
      "standardItemIdentificationSchemeId": "GTIN",
      "tax": {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      },
      "taxesDutiesFees": [
        {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        }
      ]
    }
  ],
  "invoiceNumber": "string",
  "invoicePeriod": "string",
  "invoiceType": "380",
  "issueDate": "string",
  "issueReasons": [
    "string"
  ],
  "note": "string",
  "orderReference": "string",
  "paymentMeansArray": [
    {
      "account": "string",
      "amount": 0,
      "branche_code": "string",
      "code": "credit_transfer",
      "holder": "string",
      "mandate": "string",
      "network": "string",
      "paymentId": "string"
    }
  ],
  "paymentMeansBic": "string",
  "paymentMeansCode": "online_payment_service",
  "paymentMeansIban": "string",
  "paymentMeansPaymentId": "string",
  "paymentTerms": {
    "note": "string"
  },
  "preferredInvoiceType": "prefer_autodetect",
  "prepaidAmount": 0,
  "projectReference": "string",
  "references": [
    {
      "documentId": "string",
      "documentType": "purchase_order",
      "issueDate": "string",
      "lineId": "string"
    }
  ],
  "salesOrderId": "string",
  "selfBillingMode": false,
  "taxExemptReason": "export",
  "taxPointDate": "string",
  "taxSubtotals": [
    {
      "category": "standard",
      "country": "AD",
      "percentage": 0,
      "taxAmount": 0,
      "taxableAmount": 0
    }
  ],
  "taxSystem": "tax_line_amounts",
  "taxesDutiesFees": [
    {
      "amount": 0,
      "category": "standard",
      "country": "AD",
      "percentage": 0
    }
  ],
  "transactionType": "b2b",
  "ublExtensions": [
    "string"
  ],
  "vatReverseCharge": false,
  "x2y": "b2b"
}
```

The invoice to send. Provide either invoice, or invoiceData, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingCost|string|false|none|The buyer's accounting cost centre for this invoice, expressed as text.|
|accountingCurrencyTaxAmount|number|false|none|The total amount of tax in the accounting currency. If included, must be non-zero.|
|accountingCurrencyTaxAmountCurrency|[CurrencyCode](#schemacurrencycode)|false|none|The ISO 4217 currency code.|
|accountingCustomerParty|[AccountingCustomerParty](#schemaaccountingcustomerparty)|true|none|The customer receiving the document.|
|accountingSupplierParty|[AccountingSupplierParty](#schemaaccountingsupplierparty)|false|none|The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.|
|allowanceCharges|[[AllowanceCharge](#schemaallowancecharge)]|false|none|An array of allowance charges.|
|amountIncludingVat|number|true|none|amountIncludingVat is important because of rounding differences. In many invoices, the sum of the line item amounts excluding VAT and the VAT amounts is not equal to first summing the line items without VAT, and then applying VAT. The difference is automatically calculated and included in the electronic invoice, so the receiving accounting package can process the electronic invoice without problems.|
|attachments|[[Attachment](#schemaattachment)]|false|none|An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|billingReference|string|false|none|DEPRECATED. Use a reference object with a documentType 'billing'. A reference to a commercial invoice or corrective invoice of which the current invoice is a correction. This field is mandatory when sending invoiceType 384.|
|buyerReference|string|false|none|DEPRECATED. Use a reference object with a documentType 'buyer_reference'. A reference provided by the buyer used for internal routing of the document.|
|consumerTaxMode|boolean|false|none|Whether or not to process the invoice in consumer tax mode. In this mode, the VAT identifier of the sender will not be the default VAT identifier, but the one that matches with the country of the receiving consumer, if that additional VAT identifier for that country is available. These additional VAT identifiers need to be added to the sending LegalEntity by Storecove, so if you need to send invoices in this mode, please contact us.|
|contractDocumentReference|string|false|none|DEPRECATED. Use a reference object with a documentType 'contract'. A reference to a contract or framework agreement that this invoice relates to.|
|delivery|[Delivery](#schemadelivery)|false|none|none|
|documentCurrencyCode|[CurrencyCode](#schemacurrencycode)|false|none|The ISO 4217 currency code.|
|dueDate|string|false|none|Format: yyyy-mm-dd.|
|invoiceLines|[[InvoiceLine](#schemainvoiceline)]|true|none|An array of invoice lines.|
|invoiceNumber|string|true|none|The invoice number you assigned to the invoice. The invoiceNumber should be unique for the legalEntityId and year of the issueDate. This means invoice numbers can be reused in different years, as is customary in some countries.|
|invoicePeriod|string|false|none|The period (or specific date) to which the invoice applies. Format: yyyy-mm-dd - yyyy-mm-dd.|
|invoiceType|string|false|none|DEPRECATED. Do not use. This field is available for legacy reasons only. If you want to send a regular invoice (aka UBL type '380'), make sure you have a positive invoice amount. For a credit note (aka UBL type '381'), simply provide a negative invoice amount. If you, in addition to a negative invoice amount, also specify a billingReferences, your invoice will become a corrective invoice (aka UBL type '384'). If your invoice is not sent in the UBL syntax, Storecove will provide the appropriate type for the syntax the invoice is sent in.|
|issueDate|string|true|none|Format: yyyy-mm-dd.|
|issueReasons|[string]|false|none|An array reasons for issuing the invoice.|
|note|string|false|none|A note to add to the invoice|
|orderReference|string|false|none|DEPRECATED. Use a reference object with a documentType 'purchase_order'. A reference to an order for this invoice, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible.|
|paymentMeansArray|[[PaymentMeans](#schemapaymentmeans)]|false|none|An array of payment means (ways to pay the invoice).|
|paymentMeansBic|string|false|none|DEPRECATED. Use paymentMeansArray. The BIC (Swift) of the bank where the amount payable should be transferred to|
|paymentMeansCode|string|false|none|DEPRECATED. Use paymentMeansArray. How the invoice has been / will be paid. Use only online_payment_service (payment will be made or has been made by an online payment service), bank_card (e.g. debit card, credit card), direct_debit (the amount has been / will be taken out of the client's bank account), standing_agreement (an unspecified payment means known to both buyer and seller) or credit_transfer (the buyer will do / has done a bank transfer). The numeric codes are for legacy purposes, they should not be used.|
|paymentMeansIban|string|false|none|DEPRECATED. Use paymentMeansArray. The IBAN the amount payable should be transferred to|
|paymentMeansPaymentId|string|false|none|DEPRECATED. Use the paymentId in the individual PaymentMeans object. The payment id that you will use to match the payment against the invoice.|
|paymentTerms|[PaymentTerms](#schemapaymentterms)|false|none|The payment terms of the document.|
|preferredInvoiceType|string|false|none|In auto mode, the choice between invoice or creditnote is made by Storecove based on what is appropriate for the receiver and the receiver country, in combination with the invoice amount sign. If you wish to state a preference, use this field. It is not guaranteed that the preference will be used, since it depends also on the receiver's document capabilities.|
|prepaidAmount|number|false|none|The amount already paid.|
|projectReference|string|false|none|DEPRECATED. Information about the project this invoice relates to.|
|references|[[Reference](#schemareference)]|false|none|An array of references to other documents. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.|
|salesOrderId|string|false|none|DEPRECATED. Use a reference object with a documentType 'sales_order'. A reference to an order for this invoice, assigned by the seller.|
|selfBillingMode|boolean|false|none|In self billing mode, the AccountingCustomerParty and the AccountingSupplierParty are be switched. Such an invoice can only be sent via email. Also, your account will need to allow the use of this mode, so before trying to use this please first contact Storecove.|
|taxExemptReason|string|false|none|DEPRECATED. Use Tax/category and specify this per invoice line. If you do specify this field, it will be applied to all invoice lines and it is an error to specify a Tax/category at the invoice line level. This field holds the reason no tax is present in the invoice. Note that this is an invoice level field and you cannot specify it per invoice line. This field is mandatory unless tax is present in the invoice.|
|taxPointDate|string|false|none|The tax date is the date on which the supply of goods or of services was made or completed or the date on which the payment on account was made insofar as that date can be determined and differs from the date of the issue of the invoice. EU 2006-112 Article 226 Point 7. Note: For the Dutch TAX authorities the tac date should be the same as the issue date.|
|taxSubtotals|[[TaxSubtotal](#schemataxsubtotal)]|false|none|An array of tax subtotals. This element is mandatory for taxSystem 'tax_line_percentages'.|
|taxSystem|string|false|none|The tax system used for the invoice. The system 'tax_line_percentages' is preferred, but for historic purposes 'tax_line_amounts' is supported and the default. Since not all invoice formats that we are required to send support 'tax_line_amounts' we will need to convert the invoice to the 'tax_line_percentags' system if we are forced to send the invoice in that tax system. Note that an invoice must always contain tax information, even if that is 0% or an item or sender is exempt or tax is completely outside scope. In that case, use the correct tax categories (see <<_openapi_tax>>)|
|taxesDutiesFees|[[Tax](#schematax)]|false|none|An array of taxes, duties and fees for this invoice. At this moment, the only invoice level tax allowed is the Italian '€2 bollo virtuale'|
|transactionType|string|false|none|The type of transaction. Currently used only for India.|
|ublExtensions|[string]|false|none|An array of ubl extensions.|
|vatReverseCharge|boolean|false|none|DEPRECATED. Use taxExemptReason.|
|x2y|string|false|none|The type of entities the document is sent from/to: b2b (business-to-business), b2g (business-to-government) or b2c (business-to-consumer). This field does not have a default, but it in mose cases it will be treated as b2b. Only when you explicitly specify b2g or b2c OR when it is clear from the context will a different value be used. For instance, when we see the document is being routed to DE:LWID or NL:OINO number, this tells us it is b2g. But in many cases we are unable to determine this and so it is best to always specify this field. Note that b2b_sez is for use inside India only.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountingCurrencyTaxAmountCurrency|AED|
|accountingCurrencyTaxAmountCurrency|AFN|
|accountingCurrencyTaxAmountCurrency|ALL|
|accountingCurrencyTaxAmountCurrency|AMD|
|accountingCurrencyTaxAmountCurrency|ANG|
|accountingCurrencyTaxAmountCurrency|AOA|
|accountingCurrencyTaxAmountCurrency|ARS|
|accountingCurrencyTaxAmountCurrency|AUD|
|accountingCurrencyTaxAmountCurrency|AWG|
|accountingCurrencyTaxAmountCurrency|AZN|
|accountingCurrencyTaxAmountCurrency|BAM|
|accountingCurrencyTaxAmountCurrency|BBD|
|accountingCurrencyTaxAmountCurrency|BDT|
|accountingCurrencyTaxAmountCurrency|BGN|
|accountingCurrencyTaxAmountCurrency|BHD|
|accountingCurrencyTaxAmountCurrency|BIF|
|accountingCurrencyTaxAmountCurrency|BMD|
|accountingCurrencyTaxAmountCurrency|BND|
|accountingCurrencyTaxAmountCurrency|BOB|
|accountingCurrencyTaxAmountCurrency|BOV|
|accountingCurrencyTaxAmountCurrency|BRL|
|accountingCurrencyTaxAmountCurrency|BSD|
|accountingCurrencyTaxAmountCurrency|BTN|
|accountingCurrencyTaxAmountCurrency|BWP|
|accountingCurrencyTaxAmountCurrency|BYN|
|accountingCurrencyTaxAmountCurrency|BYR|
|accountingCurrencyTaxAmountCurrency|BZD|
|accountingCurrencyTaxAmountCurrency|CAD|
|accountingCurrencyTaxAmountCurrency|CDF|
|accountingCurrencyTaxAmountCurrency|CHE|
|accountingCurrencyTaxAmountCurrency|CHF|
|accountingCurrencyTaxAmountCurrency|CHW|
|accountingCurrencyTaxAmountCurrency|CLF|
|accountingCurrencyTaxAmountCurrency|CLP|
|accountingCurrencyTaxAmountCurrency|CNY|
|accountingCurrencyTaxAmountCurrency|COP|
|accountingCurrencyTaxAmountCurrency|COU|
|accountingCurrencyTaxAmountCurrency|CRC|
|accountingCurrencyTaxAmountCurrency|CUC|
|accountingCurrencyTaxAmountCurrency|CUP|
|accountingCurrencyTaxAmountCurrency|CVE|
|accountingCurrencyTaxAmountCurrency|CZK|
|accountingCurrencyTaxAmountCurrency|DJF|
|accountingCurrencyTaxAmountCurrency|DKK|
|accountingCurrencyTaxAmountCurrency|DOP|
|accountingCurrencyTaxAmountCurrency|DZD|
|accountingCurrencyTaxAmountCurrency|EGP|
|accountingCurrencyTaxAmountCurrency|ERN|
|accountingCurrencyTaxAmountCurrency|ETB|
|accountingCurrencyTaxAmountCurrency|EUR|
|accountingCurrencyTaxAmountCurrency|FJD|
|accountingCurrencyTaxAmountCurrency|FKP|
|accountingCurrencyTaxAmountCurrency|GBP|
|accountingCurrencyTaxAmountCurrency|GEL|
|accountingCurrencyTaxAmountCurrency|GHS|
|accountingCurrencyTaxAmountCurrency|GIP|
|accountingCurrencyTaxAmountCurrency|GMD|
|accountingCurrencyTaxAmountCurrency|GNF|
|accountingCurrencyTaxAmountCurrency|GTQ|
|accountingCurrencyTaxAmountCurrency|GYD|
|accountingCurrencyTaxAmountCurrency|HKD|
|accountingCurrencyTaxAmountCurrency|HNL|
|accountingCurrencyTaxAmountCurrency|HRK|
|accountingCurrencyTaxAmountCurrency|HTG|
|accountingCurrencyTaxAmountCurrency|HUF|
|accountingCurrencyTaxAmountCurrency|IDR|
|accountingCurrencyTaxAmountCurrency|ILS|
|accountingCurrencyTaxAmountCurrency|INR|
|accountingCurrencyTaxAmountCurrency|IQD|
|accountingCurrencyTaxAmountCurrency|IRR|
|accountingCurrencyTaxAmountCurrency|ISK|
|accountingCurrencyTaxAmountCurrency|JMD|
|accountingCurrencyTaxAmountCurrency|JOD|
|accountingCurrencyTaxAmountCurrency|JPY|
|accountingCurrencyTaxAmountCurrency|KES|
|accountingCurrencyTaxAmountCurrency|KGS|
|accountingCurrencyTaxAmountCurrency|KHR|
|accountingCurrencyTaxAmountCurrency|KMF|
|accountingCurrencyTaxAmountCurrency|KPW|
|accountingCurrencyTaxAmountCurrency|KRW|
|accountingCurrencyTaxAmountCurrency|KWD|
|accountingCurrencyTaxAmountCurrency|KYD|
|accountingCurrencyTaxAmountCurrency|KZT|
|accountingCurrencyTaxAmountCurrency|LAK|
|accountingCurrencyTaxAmountCurrency|LBP|
|accountingCurrencyTaxAmountCurrency|LKR|
|accountingCurrencyTaxAmountCurrency|LRD|
|accountingCurrencyTaxAmountCurrency|LSL|
|accountingCurrencyTaxAmountCurrency|LYD|
|accountingCurrencyTaxAmountCurrency|MAD|
|accountingCurrencyTaxAmountCurrency|MDL|
|accountingCurrencyTaxAmountCurrency|MGA|
|accountingCurrencyTaxAmountCurrency|MKD|
|accountingCurrencyTaxAmountCurrency|MMK|
|accountingCurrencyTaxAmountCurrency|MNT|
|accountingCurrencyTaxAmountCurrency|MOP|
|accountingCurrencyTaxAmountCurrency|MRO|
|accountingCurrencyTaxAmountCurrency|MUR|
|accountingCurrencyTaxAmountCurrency|MVR|
|accountingCurrencyTaxAmountCurrency|MWK|
|accountingCurrencyTaxAmountCurrency|MXN|
|accountingCurrencyTaxAmountCurrency|MXV|
|accountingCurrencyTaxAmountCurrency|MYR|
|accountingCurrencyTaxAmountCurrency|MZN|
|accountingCurrencyTaxAmountCurrency|NAD|
|accountingCurrencyTaxAmountCurrency|NGN|
|accountingCurrencyTaxAmountCurrency|NIO|
|accountingCurrencyTaxAmountCurrency|NOK|
|accountingCurrencyTaxAmountCurrency|NPR|
|accountingCurrencyTaxAmountCurrency|NZD|
|accountingCurrencyTaxAmountCurrency|OMR|
|accountingCurrencyTaxAmountCurrency|PAB|
|accountingCurrencyTaxAmountCurrency|PEN|
|accountingCurrencyTaxAmountCurrency|PGK|
|accountingCurrencyTaxAmountCurrency|PHP|
|accountingCurrencyTaxAmountCurrency|PKR|
|accountingCurrencyTaxAmountCurrency|PLN|
|accountingCurrencyTaxAmountCurrency|PYG|
|accountingCurrencyTaxAmountCurrency|QAR|
|accountingCurrencyTaxAmountCurrency|RON|
|accountingCurrencyTaxAmountCurrency|RSD|
|accountingCurrencyTaxAmountCurrency|RUB|
|accountingCurrencyTaxAmountCurrency|RWF|
|accountingCurrencyTaxAmountCurrency|SAR|
|accountingCurrencyTaxAmountCurrency|SBD|
|accountingCurrencyTaxAmountCurrency|SCR|
|accountingCurrencyTaxAmountCurrency|SDG|
|accountingCurrencyTaxAmountCurrency|SEK|
|accountingCurrencyTaxAmountCurrency|SGD|
|accountingCurrencyTaxAmountCurrency|SHP|
|accountingCurrencyTaxAmountCurrency|SLE|
|accountingCurrencyTaxAmountCurrency|SLL|
|accountingCurrencyTaxAmountCurrency|SOS|
|accountingCurrencyTaxAmountCurrency|SRD|
|accountingCurrencyTaxAmountCurrency|SSP|
|accountingCurrencyTaxAmountCurrency|STD|
|accountingCurrencyTaxAmountCurrency|SYP|
|accountingCurrencyTaxAmountCurrency|SZL|
|accountingCurrencyTaxAmountCurrency|THB|
|accountingCurrencyTaxAmountCurrency|TJS|
|accountingCurrencyTaxAmountCurrency|TMT|
|accountingCurrencyTaxAmountCurrency|TND|
|accountingCurrencyTaxAmountCurrency|TOP|
|accountingCurrencyTaxAmountCurrency|TRY|
|accountingCurrencyTaxAmountCurrency|TTD|
|accountingCurrencyTaxAmountCurrency|TWD|
|accountingCurrencyTaxAmountCurrency|TZS|
|accountingCurrencyTaxAmountCurrency|UAH|
|accountingCurrencyTaxAmountCurrency|UGX|
|accountingCurrencyTaxAmountCurrency|USD|
|accountingCurrencyTaxAmountCurrency|USN|
|accountingCurrencyTaxAmountCurrency|UYI|
|accountingCurrencyTaxAmountCurrency|UYU|
|accountingCurrencyTaxAmountCurrency|UZS|
|accountingCurrencyTaxAmountCurrency|VEF|
|accountingCurrencyTaxAmountCurrency|VND|
|accountingCurrencyTaxAmountCurrency|VUV|
|accountingCurrencyTaxAmountCurrency|WST|
|accountingCurrencyTaxAmountCurrency|XAF|
|accountingCurrencyTaxAmountCurrency|XAG|
|accountingCurrencyTaxAmountCurrency|XAU|
|accountingCurrencyTaxAmountCurrency|XBA|
|accountingCurrencyTaxAmountCurrency|XBB|
|accountingCurrencyTaxAmountCurrency|XBC|
|accountingCurrencyTaxAmountCurrency|XBD|
|accountingCurrencyTaxAmountCurrency|XCD|
|accountingCurrencyTaxAmountCurrency|XDR|
|accountingCurrencyTaxAmountCurrency|XFU|
|accountingCurrencyTaxAmountCurrency|XOF|
|accountingCurrencyTaxAmountCurrency|XPD|
|accountingCurrencyTaxAmountCurrency|XPF|
|accountingCurrencyTaxAmountCurrency|XPT|
|accountingCurrencyTaxAmountCurrency|XSU|
|accountingCurrencyTaxAmountCurrency|XTS|
|accountingCurrencyTaxAmountCurrency|XUA|
|accountingCurrencyTaxAmountCurrency|XXX|
|accountingCurrencyTaxAmountCurrency|YER|
|accountingCurrencyTaxAmountCurrency|ZAR|
|accountingCurrencyTaxAmountCurrency|ZMW|
|documentCurrencyCode|AED|
|documentCurrencyCode|AFN|
|documentCurrencyCode|ALL|
|documentCurrencyCode|AMD|
|documentCurrencyCode|ANG|
|documentCurrencyCode|AOA|
|documentCurrencyCode|ARS|
|documentCurrencyCode|AUD|
|documentCurrencyCode|AWG|
|documentCurrencyCode|AZN|
|documentCurrencyCode|BAM|
|documentCurrencyCode|BBD|
|documentCurrencyCode|BDT|
|documentCurrencyCode|BGN|
|documentCurrencyCode|BHD|
|documentCurrencyCode|BIF|
|documentCurrencyCode|BMD|
|documentCurrencyCode|BND|
|documentCurrencyCode|BOB|
|documentCurrencyCode|BOV|
|documentCurrencyCode|BRL|
|documentCurrencyCode|BSD|
|documentCurrencyCode|BTN|
|documentCurrencyCode|BWP|
|documentCurrencyCode|BYN|
|documentCurrencyCode|BYR|
|documentCurrencyCode|BZD|
|documentCurrencyCode|CAD|
|documentCurrencyCode|CDF|
|documentCurrencyCode|CHE|
|documentCurrencyCode|CHF|
|documentCurrencyCode|CHW|
|documentCurrencyCode|CLF|
|documentCurrencyCode|CLP|
|documentCurrencyCode|CNY|
|documentCurrencyCode|COP|
|documentCurrencyCode|COU|
|documentCurrencyCode|CRC|
|documentCurrencyCode|CUC|
|documentCurrencyCode|CUP|
|documentCurrencyCode|CVE|
|documentCurrencyCode|CZK|
|documentCurrencyCode|DJF|
|documentCurrencyCode|DKK|
|documentCurrencyCode|DOP|
|documentCurrencyCode|DZD|
|documentCurrencyCode|EGP|
|documentCurrencyCode|ERN|
|documentCurrencyCode|ETB|
|documentCurrencyCode|EUR|
|documentCurrencyCode|FJD|
|documentCurrencyCode|FKP|
|documentCurrencyCode|GBP|
|documentCurrencyCode|GEL|
|documentCurrencyCode|GHS|
|documentCurrencyCode|GIP|
|documentCurrencyCode|GMD|
|documentCurrencyCode|GNF|
|documentCurrencyCode|GTQ|
|documentCurrencyCode|GYD|
|documentCurrencyCode|HKD|
|documentCurrencyCode|HNL|
|documentCurrencyCode|HRK|
|documentCurrencyCode|HTG|
|documentCurrencyCode|HUF|
|documentCurrencyCode|IDR|
|documentCurrencyCode|ILS|
|documentCurrencyCode|INR|
|documentCurrencyCode|IQD|
|documentCurrencyCode|IRR|
|documentCurrencyCode|ISK|
|documentCurrencyCode|JMD|
|documentCurrencyCode|JOD|
|documentCurrencyCode|JPY|
|documentCurrencyCode|KES|
|documentCurrencyCode|KGS|
|documentCurrencyCode|KHR|
|documentCurrencyCode|KMF|
|documentCurrencyCode|KPW|
|documentCurrencyCode|KRW|
|documentCurrencyCode|KWD|
|documentCurrencyCode|KYD|
|documentCurrencyCode|KZT|
|documentCurrencyCode|LAK|
|documentCurrencyCode|LBP|
|documentCurrencyCode|LKR|
|documentCurrencyCode|LRD|
|documentCurrencyCode|LSL|
|documentCurrencyCode|LYD|
|documentCurrencyCode|MAD|
|documentCurrencyCode|MDL|
|documentCurrencyCode|MGA|
|documentCurrencyCode|MKD|
|documentCurrencyCode|MMK|
|documentCurrencyCode|MNT|
|documentCurrencyCode|MOP|
|documentCurrencyCode|MRO|
|documentCurrencyCode|MUR|
|documentCurrencyCode|MVR|
|documentCurrencyCode|MWK|
|documentCurrencyCode|MXN|
|documentCurrencyCode|MXV|
|documentCurrencyCode|MYR|
|documentCurrencyCode|MZN|
|documentCurrencyCode|NAD|
|documentCurrencyCode|NGN|
|documentCurrencyCode|NIO|
|documentCurrencyCode|NOK|
|documentCurrencyCode|NPR|
|documentCurrencyCode|NZD|
|documentCurrencyCode|OMR|
|documentCurrencyCode|PAB|
|documentCurrencyCode|PEN|
|documentCurrencyCode|PGK|
|documentCurrencyCode|PHP|
|documentCurrencyCode|PKR|
|documentCurrencyCode|PLN|
|documentCurrencyCode|PYG|
|documentCurrencyCode|QAR|
|documentCurrencyCode|RON|
|documentCurrencyCode|RSD|
|documentCurrencyCode|RUB|
|documentCurrencyCode|RWF|
|documentCurrencyCode|SAR|
|documentCurrencyCode|SBD|
|documentCurrencyCode|SCR|
|documentCurrencyCode|SDG|
|documentCurrencyCode|SEK|
|documentCurrencyCode|SGD|
|documentCurrencyCode|SHP|
|documentCurrencyCode|SLE|
|documentCurrencyCode|SLL|
|documentCurrencyCode|SOS|
|documentCurrencyCode|SRD|
|documentCurrencyCode|SSP|
|documentCurrencyCode|STD|
|documentCurrencyCode|SYP|
|documentCurrencyCode|SZL|
|documentCurrencyCode|THB|
|documentCurrencyCode|TJS|
|documentCurrencyCode|TMT|
|documentCurrencyCode|TND|
|documentCurrencyCode|TOP|
|documentCurrencyCode|TRY|
|documentCurrencyCode|TTD|
|documentCurrencyCode|TWD|
|documentCurrencyCode|TZS|
|documentCurrencyCode|UAH|
|documentCurrencyCode|UGX|
|documentCurrencyCode|USD|
|documentCurrencyCode|USN|
|documentCurrencyCode|UYI|
|documentCurrencyCode|UYU|
|documentCurrencyCode|UZS|
|documentCurrencyCode|VEF|
|documentCurrencyCode|VND|
|documentCurrencyCode|VUV|
|documentCurrencyCode|WST|
|documentCurrencyCode|XAF|
|documentCurrencyCode|XAG|
|documentCurrencyCode|XAU|
|documentCurrencyCode|XBA|
|documentCurrencyCode|XBB|
|documentCurrencyCode|XBC|
|documentCurrencyCode|XBD|
|documentCurrencyCode|XCD|
|documentCurrencyCode|XDR|
|documentCurrencyCode|XFU|
|documentCurrencyCode|XOF|
|documentCurrencyCode|XPD|
|documentCurrencyCode|XPF|
|documentCurrencyCode|XPT|
|documentCurrencyCode|XSU|
|documentCurrencyCode|XTS|
|documentCurrencyCode|XUA|
|documentCurrencyCode|XXX|
|documentCurrencyCode|YER|
|documentCurrencyCode|ZAR|
|documentCurrencyCode|ZMW|
|invoiceType|380|
|invoiceType|381|
|invoiceType|384|
|paymentMeansCode|online_payment_service|
|paymentMeansCode|bank_card|
|paymentMeansCode|direct_debit|
|paymentMeansCode|standing_agreement|
|paymentMeansCode|credit_transfer|
|paymentMeansCode|se_bankgiro|
|paymentMeansCode|se_plusgiro|
|paymentMeansCode|aunz_npp|
|paymentMeansCode|""|
|paymentMeansCode|1|
|paymentMeansCode|30|
|paymentMeansCode|31|
|paymentMeansCode|42|
|paymentMeansCode|48|
|paymentMeansCode|49|
|paymentMeansCode|57|
|paymentMeansCode|58|
|preferredInvoiceType|prefer_autodetect|
|preferredInvoiceType|prefer_invoice|
|preferredInvoiceType|prefer_creditnote|
|taxExemptReason|export|
|taxExemptReason|reverse_charge|
|taxExemptReason|zero_rated|
|taxExemptReason|exempt|
|taxExemptReason|outside_scope|
|taxExemptReason|intra_community|
|taxSystem|tax_line_amounts|
|taxSystem|tax_line_percentages|
|transactionType|b2b|
|transactionType|sezwp|
|transactionType|sezwop|
|transactionType|expwp|
|transactionType|expwop|
|transactionType|dexp|
|x2y|b2b|
|x2y|b2g|
|x2y|b2c|
|x2y|b2b_sez|

<h2 id="tocS_InvoiceData">InvoiceData</h2>
<!-- backwards compatibility -->
<a id="schemainvoicedata"></a>
<a id="schema_InvoiceData"></a>
<a id="tocSinvoicedata"></a>
<a id="tocsinvoicedata"></a>

```json
{
  "conversionStrategy": "ubl",
  "document": "string"
}
```

The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionStrategy|string|false|none|How to interpret the document.|
|document|string|false|none|The base64 encoded version of the document.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversionStrategy|ubl|
|conversionStrategy|cii|
|conversionStrategy|idoc|

<h2 id="tocS_InvoiceLine">InvoiceLine</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceline"></a>
<a id="schema_InvoiceLine"></a>
<a id="tocSinvoiceline"></a>
<a id="tocsinvoiceline"></a>

```json
{
  "accountingCost": "string",
  "additionalItemProperties": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "allowanceCharge": 0,
  "allowanceCharges": [
    {
      "amountExcludingTax": 0,
      "baseAmountExcludingTax": 0,
      "reason": "string",
      "reasonCode": "string"
    }
  ],
  "amountExcludingVat": 0,
  "buyersItemIdentification": "string",
  "description": "string",
  "invoicePeriod": "string",
  "itemPrice": 1,
  "lineId": "string",
  "name": "string",
  "note": "string",
  "orderLineReferenceLineId": "string",
  "quantity": 1,
  "quantityUnitCode": "C62",
  "references": [
    {
      "documentId": "string",
      "documentType": "purchase_order",
      "issueDate": "string",
      "lineId": "string"
    }
  ],
  "sellersItemIdentification": "string",
  "standardItemIdentification": "string",
  "standardItemIdentificationSchemeAgencyId": "9",
  "standardItemIdentificationSchemeId": "GTIN",
  "tax": {
    "amount": 0,
    "category": "standard",
    "country": "AD",
    "percentage": 0
  },
  "taxesDutiesFees": [
    {
      "amount": 0,
      "category": "standard",
      "country": "AD",
      "percentage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingCost|string|false|none|The buyer's accounting cost centre for this invoice line, expressed as text.|
|additionalItemProperties|[[AdditionalItemProperty](#schemaadditionalitemproperty)]|false|none|An array of additional item properties.|
|allowanceCharge|number|false|none|The discount or surcharge on this item. Should be negative for discounts|
|allowanceCharges|[[LineAllowanceCharge](#schemalineallowancecharge)]|false|none|An array of allowance charges. NOTE: this is currently supported only when sending from/to Italy.|
|amountExcludingVat|number|true|none|The amount excluding VAT. Should equal quantity x itemPrice + allowanceCharge.|
|buyersItemIdentification|string|false|none|DEPRECATED. Use the references array with 'line_buyers_item_identification' documentType. The ID the buyer assigned to this item.|
|description|string|false|none|The description for this invoice line.|
|invoicePeriod|string|false|none|The period (or specific date) to which the invoice line applies. Format: yyyy-mm-dd - yyyy-mm-dd.|
|itemPrice|number|false|none|The price per item (may be fractional)|
|lineId|string|false|none|The id for this invoice line.|
|name|string|false|none|A short name for this invoice line. If not provided, it will be taken from description and description will be set to an emtpy string.|
|note|string|false|none|A note to add to the document line|
|orderLineReferenceLineId|string|false|none|A reference to the LineID of the order. The order itself is specified as the orderReference at the invoice level. It is not possible to specify an orderReference at the invoice line level. An invoice MUST at this time be for a single order only.|
|quantity|number|false|none|The number of items (may be fractional).|
|quantityUnitCode|string|false|none|The unit of measure that applies to the invoiced quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8|
|references|[[Reference](#schemareference)]|false|none|An array of references to other documents or codes. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.|
|sellersItemIdentification|string|false|none|DEPRECATED. Use the references array with 'line_sellers_item_identification' documentType. The ID the seller assigned to this item.|
|standardItemIdentification|string|false|none|Standardized ID for the item.|
|standardItemIdentificationSchemeAgencyId|string|false|none|DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme agency for the standardized ID for the item.|
|standardItemIdentificationSchemeId|string|false|none|DEPRECATED. Use the references array with 'line_standard_item_identification' documentType. The scheme for the standardized ID for the item.|
|tax|[Tax](#schematax)|false|none|none|
|taxesDutiesFees|[[Tax](#schematax)]|false|none|An array of taxes, duties and fees for this invoice line. Multiple taxesDutiesFees items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.|

#### Enumerated Values

|Property|Value|
|---|---|
|quantityUnitCode|10|
|quantityUnitCode|11|
|quantityUnitCode|13|
|quantityUnitCode|14|
|quantityUnitCode|15|
|quantityUnitCode|20|
|quantityUnitCode|21|
|quantityUnitCode|22|
|quantityUnitCode|23|
|quantityUnitCode|24|
|quantityUnitCode|25|
|quantityUnitCode|27|
|quantityUnitCode|28|
|quantityUnitCode|33|
|quantityUnitCode|34|
|quantityUnitCode|35|
|quantityUnitCode|37|
|quantityUnitCode|38|
|quantityUnitCode|40|
|quantityUnitCode|41|
|quantityUnitCode|56|
|quantityUnitCode|57|
|quantityUnitCode|58|
|quantityUnitCode|59|
|quantityUnitCode|60|
|quantityUnitCode|61|
|quantityUnitCode|74|
|quantityUnitCode|77|
|quantityUnitCode|80|
|quantityUnitCode|81|
|quantityUnitCode|85|
|quantityUnitCode|87|
|quantityUnitCode|89|
|quantityUnitCode|91|
|quantityUnitCode|1I|
|quantityUnitCode|2A|
|quantityUnitCode|2B|
|quantityUnitCode|2C|
|quantityUnitCode|2G|
|quantityUnitCode|2H|
|quantityUnitCode|2I|
|quantityUnitCode|2J|
|quantityUnitCode|2K|
|quantityUnitCode|2L|
|quantityUnitCode|2M|
|quantityUnitCode|2N|
|quantityUnitCode|2P|
|quantityUnitCode|2Q|
|quantityUnitCode|2R|
|quantityUnitCode|2U|
|quantityUnitCode|2X|
|quantityUnitCode|2Y|
|quantityUnitCode|2Z|
|quantityUnitCode|3B|
|quantityUnitCode|3C|
|quantityUnitCode|4C|
|quantityUnitCode|4G|
|quantityUnitCode|4H|
|quantityUnitCode|4K|
|quantityUnitCode|4L|
|quantityUnitCode|4M|
|quantityUnitCode|4N|
|quantityUnitCode|4O|
|quantityUnitCode|4P|
|quantityUnitCode|4Q|
|quantityUnitCode|4R|
|quantityUnitCode|4T|
|quantityUnitCode|4U|
|quantityUnitCode|4W|
|quantityUnitCode|4X|
|quantityUnitCode|5A|
|quantityUnitCode|5B|
|quantityUnitCode|5E|
|quantityUnitCode|5J|
|quantityUnitCode|A10|
|quantityUnitCode|A11|
|quantityUnitCode|A12|
|quantityUnitCode|A13|
|quantityUnitCode|A14|
|quantityUnitCode|A15|
|quantityUnitCode|A16|
|quantityUnitCode|A17|
|quantityUnitCode|A18|
|quantityUnitCode|A19|
|quantityUnitCode|A2|
|quantityUnitCode|A20|
|quantityUnitCode|A21|
|quantityUnitCode|A22|
|quantityUnitCode|A23|
|quantityUnitCode|A24|
|quantityUnitCode|A26|
|quantityUnitCode|A27|
|quantityUnitCode|A28|
|quantityUnitCode|A29|
|quantityUnitCode|A3|
|quantityUnitCode|A30|
|quantityUnitCode|A31|
|quantityUnitCode|A32|
|quantityUnitCode|A33|
|quantityUnitCode|A34|
|quantityUnitCode|A35|
|quantityUnitCode|A36|
|quantityUnitCode|A37|
|quantityUnitCode|A38|
|quantityUnitCode|A39|
|quantityUnitCode|A4|
|quantityUnitCode|A40|
|quantityUnitCode|A41|
|quantityUnitCode|A42|
|quantityUnitCode|A43|
|quantityUnitCode|A44|
|quantityUnitCode|A45|
|quantityUnitCode|A47|
|quantityUnitCode|A48|
|quantityUnitCode|A49|
|quantityUnitCode|A5|
|quantityUnitCode|A53|
|quantityUnitCode|A54|
|quantityUnitCode|A55|
|quantityUnitCode|A56|
|quantityUnitCode|A59|
|quantityUnitCode|A6|
|quantityUnitCode|A68|
|quantityUnitCode|A69|
|quantityUnitCode|A7|
|quantityUnitCode|A70|
|quantityUnitCode|A71|
|quantityUnitCode|A73|
|quantityUnitCode|A74|
|quantityUnitCode|A75|
|quantityUnitCode|A76|
|quantityUnitCode|A8|
|quantityUnitCode|A84|
|quantityUnitCode|A85|
|quantityUnitCode|A86|
|quantityUnitCode|A87|
|quantityUnitCode|A88|
|quantityUnitCode|A89|
|quantityUnitCode|A9|
|quantityUnitCode|A90|
|quantityUnitCode|A91|
|quantityUnitCode|A93|
|quantityUnitCode|A94|
|quantityUnitCode|A95|
|quantityUnitCode|A96|
|quantityUnitCode|A97|
|quantityUnitCode|A98|
|quantityUnitCode|A99|
|quantityUnitCode|AA|
|quantityUnitCode|AB|
|quantityUnitCode|ACR|
|quantityUnitCode|ACT|
|quantityUnitCode|AD|
|quantityUnitCode|AE|
|quantityUnitCode|AH|
|quantityUnitCode|AI|
|quantityUnitCode|AK|
|quantityUnitCode|AL|
|quantityUnitCode|AMH|
|quantityUnitCode|AMP|
|quantityUnitCode|ANN|
|quantityUnitCode|APZ|
|quantityUnitCode|AQ|
|quantityUnitCode|AS|
|quantityUnitCode|ASM|
|quantityUnitCode|ASU|
|quantityUnitCode|ATM|
|quantityUnitCode|AWG|
|quantityUnitCode|AY|
|quantityUnitCode|AZ|
|quantityUnitCode|B1|
|quantityUnitCode|B10|
|quantityUnitCode|B11|
|quantityUnitCode|B12|
|quantityUnitCode|B13|
|quantityUnitCode|B14|
|quantityUnitCode|B15|
|quantityUnitCode|B16|
|quantityUnitCode|B17|
|quantityUnitCode|B18|
|quantityUnitCode|B19|
|quantityUnitCode|B20|
|quantityUnitCode|B21|
|quantityUnitCode|B22|
|quantityUnitCode|B23|
|quantityUnitCode|B24|
|quantityUnitCode|B25|
|quantityUnitCode|B26|
|quantityUnitCode|B27|
|quantityUnitCode|B28|
|quantityUnitCode|B29|
|quantityUnitCode|B3|
|quantityUnitCode|B30|
|quantityUnitCode|B31|
|quantityUnitCode|B32|
|quantityUnitCode|B33|
|quantityUnitCode|B34|
|quantityUnitCode|B35|
|quantityUnitCode|B4|
|quantityUnitCode|B41|
|quantityUnitCode|B42|
|quantityUnitCode|B43|
|quantityUnitCode|B44|
|quantityUnitCode|B45|
|quantityUnitCode|B46|
|quantityUnitCode|B47|
|quantityUnitCode|B48|
|quantityUnitCode|B49|
|quantityUnitCode|B50|
|quantityUnitCode|B52|
|quantityUnitCode|B53|
|quantityUnitCode|B54|
|quantityUnitCode|B55|
|quantityUnitCode|B56|
|quantityUnitCode|B57|
|quantityUnitCode|B58|
|quantityUnitCode|B59|
|quantityUnitCode|B60|
|quantityUnitCode|B61|
|quantityUnitCode|B62|
|quantityUnitCode|B63|
|quantityUnitCode|B64|
|quantityUnitCode|B66|
|quantityUnitCode|B67|
|quantityUnitCode|B68|
|quantityUnitCode|B69|
|quantityUnitCode|B7|
|quantityUnitCode|B70|
|quantityUnitCode|B71|
|quantityUnitCode|B72|
|quantityUnitCode|B73|
|quantityUnitCode|B74|
|quantityUnitCode|B75|
|quantityUnitCode|B76|
|quantityUnitCode|B77|
|quantityUnitCode|B78|
|quantityUnitCode|B79|
|quantityUnitCode|B8|
|quantityUnitCode|B80|
|quantityUnitCode|B81|
|quantityUnitCode|B82|
|quantityUnitCode|B83|
|quantityUnitCode|B84|
|quantityUnitCode|B85|
|quantityUnitCode|B86|
|quantityUnitCode|B87|
|quantityUnitCode|B88|
|quantityUnitCode|B89|
|quantityUnitCode|B90|
|quantityUnitCode|B91|
|quantityUnitCode|B92|
|quantityUnitCode|B93|
|quantityUnitCode|B94|
|quantityUnitCode|B95|
|quantityUnitCode|B96|
|quantityUnitCode|B97|
|quantityUnitCode|B98|
|quantityUnitCode|B99|
|quantityUnitCode|BAR|
|quantityUnitCode|BB|
|quantityUnitCode|BFT|
|quantityUnitCode|BHP|
|quantityUnitCode|BIL|
|quantityUnitCode|BLD|
|quantityUnitCode|BLL|
|quantityUnitCode|BP|
|quantityUnitCode|BPM|
|quantityUnitCode|BQL|
|quantityUnitCode|BTU|
|quantityUnitCode|BUA|
|quantityUnitCode|BUI|
|quantityUnitCode|C0|
|quantityUnitCode|C10|
|quantityUnitCode|C11|
|quantityUnitCode|C12|
|quantityUnitCode|C13|
|quantityUnitCode|C14|
|quantityUnitCode|C15|
|quantityUnitCode|C16|
|quantityUnitCode|C17|
|quantityUnitCode|C18|
|quantityUnitCode|C19|
|quantityUnitCode|C20|
|quantityUnitCode|C21|
|quantityUnitCode|C22|
|quantityUnitCode|C23|
|quantityUnitCode|C24|
|quantityUnitCode|C25|
|quantityUnitCode|C26|
|quantityUnitCode|C27|
|quantityUnitCode|C28|
|quantityUnitCode|C29|
|quantityUnitCode|C3|
|quantityUnitCode|C30|
|quantityUnitCode|C31|
|quantityUnitCode|C32|
|quantityUnitCode|C33|
|quantityUnitCode|C34|
|quantityUnitCode|C35|
|quantityUnitCode|C36|
|quantityUnitCode|C37|
|quantityUnitCode|C38|
|quantityUnitCode|C39|
|quantityUnitCode|C40|
|quantityUnitCode|C41|
|quantityUnitCode|C42|
|quantityUnitCode|C43|
|quantityUnitCode|C44|
|quantityUnitCode|C45|
|quantityUnitCode|C46|
|quantityUnitCode|C47|
|quantityUnitCode|C48|
|quantityUnitCode|C49|
|quantityUnitCode|C50|
|quantityUnitCode|C51|
|quantityUnitCode|C52|
|quantityUnitCode|C53|
|quantityUnitCode|C54|
|quantityUnitCode|C55|
|quantityUnitCode|C56|
|quantityUnitCode|C57|
|quantityUnitCode|C58|
|quantityUnitCode|C59|
|quantityUnitCode|C60|
|quantityUnitCode|C61|
|quantityUnitCode|C62|
|quantityUnitCode|C63|
|quantityUnitCode|C64|
|quantityUnitCode|C65|
|quantityUnitCode|C66|
|quantityUnitCode|C67|
|quantityUnitCode|C68|
|quantityUnitCode|C69|
|quantityUnitCode|C7|
|quantityUnitCode|C70|
|quantityUnitCode|C71|
|quantityUnitCode|C72|
|quantityUnitCode|C73|
|quantityUnitCode|C74|
|quantityUnitCode|C75|
|quantityUnitCode|C76|
|quantityUnitCode|C78|
|quantityUnitCode|C79|
|quantityUnitCode|C8|
|quantityUnitCode|C80|
|quantityUnitCode|C81|
|quantityUnitCode|C82|
|quantityUnitCode|C83|
|quantityUnitCode|C84|
|quantityUnitCode|C85|
|quantityUnitCode|C86|
|quantityUnitCode|C87|
|quantityUnitCode|C88|
|quantityUnitCode|C89|
|quantityUnitCode|C9|
|quantityUnitCode|C90|
|quantityUnitCode|C91|
|quantityUnitCode|C92|
|quantityUnitCode|C93|
|quantityUnitCode|C94|
|quantityUnitCode|C95|
|quantityUnitCode|C96|
|quantityUnitCode|C97|
|quantityUnitCode|C99|
|quantityUnitCode|CCT|
|quantityUnitCode|CDL|
|quantityUnitCode|CEL|
|quantityUnitCode|CEN|
|quantityUnitCode|CG|
|quantityUnitCode|CGM|
|quantityUnitCode|CKG|
|quantityUnitCode|CLF|
|quantityUnitCode|CLT|
|quantityUnitCode|CMK|
|quantityUnitCode|CMQ|
|quantityUnitCode|CMT|
|quantityUnitCode|CNP|
|quantityUnitCode|CNT|
|quantityUnitCode|COU|
|quantityUnitCode|CTG|
|quantityUnitCode|CTM|
|quantityUnitCode|CTN|
|quantityUnitCode|CUR|
|quantityUnitCode|CWA|
|quantityUnitCode|CWI|
|quantityUnitCode|D03|
|quantityUnitCode|D04|
|quantityUnitCode|D1|
|quantityUnitCode|D10|
|quantityUnitCode|D11|
|quantityUnitCode|D12|
|quantityUnitCode|D13|
|quantityUnitCode|D15|
|quantityUnitCode|D16|
|quantityUnitCode|D17|
|quantityUnitCode|D18|
|quantityUnitCode|D19|
|quantityUnitCode|D2|
|quantityUnitCode|D20|
|quantityUnitCode|D21|
|quantityUnitCode|D22|
|quantityUnitCode|D23|
|quantityUnitCode|D24|
|quantityUnitCode|D25|
|quantityUnitCode|D26|
|quantityUnitCode|D27|
|quantityUnitCode|D29|
|quantityUnitCode|D30|
|quantityUnitCode|D31|
|quantityUnitCode|D32|
|quantityUnitCode|D33|
|quantityUnitCode|D34|
|quantityUnitCode|D36|
|quantityUnitCode|D41|
|quantityUnitCode|D42|
|quantityUnitCode|D43|
|quantityUnitCode|D44|
|quantityUnitCode|D45|
|quantityUnitCode|D46|
|quantityUnitCode|D47|
|quantityUnitCode|D48|
|quantityUnitCode|D49|
|quantityUnitCode|D5|
|quantityUnitCode|D50|
|quantityUnitCode|D51|
|quantityUnitCode|D52|
|quantityUnitCode|D53|
|quantityUnitCode|D54|
|quantityUnitCode|D55|
|quantityUnitCode|D56|
|quantityUnitCode|D57|
|quantityUnitCode|D58|
|quantityUnitCode|D59|
|quantityUnitCode|D6|
|quantityUnitCode|D60|
|quantityUnitCode|D61|
|quantityUnitCode|D62|
|quantityUnitCode|D63|
|quantityUnitCode|D65|
|quantityUnitCode|D68|
|quantityUnitCode|D69|
|quantityUnitCode|D73|
|quantityUnitCode|D74|
|quantityUnitCode|D77|
|quantityUnitCode|D78|
|quantityUnitCode|D80|
|quantityUnitCode|D81|
|quantityUnitCode|D82|
|quantityUnitCode|D83|
|quantityUnitCode|D85|
|quantityUnitCode|D86|
|quantityUnitCode|D87|
|quantityUnitCode|D88|
|quantityUnitCode|D89|
|quantityUnitCode|D91|
|quantityUnitCode|D93|
|quantityUnitCode|D94|
|quantityUnitCode|D95|
|quantityUnitCode|DAA|
|quantityUnitCode|DAD|
|quantityUnitCode|DAY|
|quantityUnitCode|DB|
|quantityUnitCode|DD|
|quantityUnitCode|DEC|
|quantityUnitCode|DG|
|quantityUnitCode|DJ|
|quantityUnitCode|DLT|
|quantityUnitCode|DMA|
|quantityUnitCode|DMK|
|quantityUnitCode|DMO|
|quantityUnitCode|DMQ|
|quantityUnitCode|DMT|
|quantityUnitCode|DN|
|quantityUnitCode|DPC|
|quantityUnitCode|DPR|
|quantityUnitCode|DPT|
|quantityUnitCode|DRA|
|quantityUnitCode|DRI|
|quantityUnitCode|DRL|
|quantityUnitCode|DT|
|quantityUnitCode|DTN|
|quantityUnitCode|DWT|
|quantityUnitCode|DZN|
|quantityUnitCode|DZP|
|quantityUnitCode|E01|
|quantityUnitCode|E07|
|quantityUnitCode|E08|
|quantityUnitCode|E09|
|quantityUnitCode|E10|
|quantityUnitCode|E12|
|quantityUnitCode|E14|
|quantityUnitCode|E15|
|quantityUnitCode|E16|
|quantityUnitCode|E17|
|quantityUnitCode|E18|
|quantityUnitCode|E19|
|quantityUnitCode|E20|
|quantityUnitCode|E21|
|quantityUnitCode|E22|
|quantityUnitCode|E23|
|quantityUnitCode|E25|
|quantityUnitCode|E27|
|quantityUnitCode|E28|
|quantityUnitCode|E30|
|quantityUnitCode|E31|
|quantityUnitCode|E32|
|quantityUnitCode|E33|
|quantityUnitCode|E34|
|quantityUnitCode|E35|
|quantityUnitCode|E36|
|quantityUnitCode|E37|
|quantityUnitCode|E38|
|quantityUnitCode|E39|
|quantityUnitCode|E4|
|quantityUnitCode|E40|
|quantityUnitCode|E41|
|quantityUnitCode|E42|
|quantityUnitCode|E43|
|quantityUnitCode|E44|
|quantityUnitCode|E45|
|quantityUnitCode|E46|
|quantityUnitCode|E47|
|quantityUnitCode|E48|
|quantityUnitCode|E49|
|quantityUnitCode|E50|
|quantityUnitCode|E51|
|quantityUnitCode|E52|
|quantityUnitCode|E53|
|quantityUnitCode|E54|
|quantityUnitCode|E55|
|quantityUnitCode|E56|
|quantityUnitCode|E57|
|quantityUnitCode|E58|
|quantityUnitCode|E59|
|quantityUnitCode|E60|
|quantityUnitCode|E61|
|quantityUnitCode|E62|
|quantityUnitCode|E63|
|quantityUnitCode|E64|
|quantityUnitCode|E65|
|quantityUnitCode|E66|
|quantityUnitCode|E67|
|quantityUnitCode|E68|
|quantityUnitCode|E69|
|quantityUnitCode|E70|
|quantityUnitCode|E71|
|quantityUnitCode|E72|
|quantityUnitCode|E73|
|quantityUnitCode|E74|
|quantityUnitCode|E75|
|quantityUnitCode|E76|
|quantityUnitCode|E77|
|quantityUnitCode|E78|
|quantityUnitCode|E79|
|quantityUnitCode|E80|
|quantityUnitCode|E81|
|quantityUnitCode|E82|
|quantityUnitCode|E83|
|quantityUnitCode|E84|
|quantityUnitCode|E85|
|quantityUnitCode|E86|
|quantityUnitCode|E87|
|quantityUnitCode|E88|
|quantityUnitCode|E89|
|quantityUnitCode|E90|
|quantityUnitCode|E91|
|quantityUnitCode|E92|
|quantityUnitCode|E93|
|quantityUnitCode|E94|
|quantityUnitCode|E95|
|quantityUnitCode|E96|
|quantityUnitCode|E97|
|quantityUnitCode|E98|
|quantityUnitCode|E99|
|quantityUnitCode|EA|
|quantityUnitCode|EB|
|quantityUnitCode|EQ|
|quantityUnitCode|F01|
|quantityUnitCode|F02|
|quantityUnitCode|F03|
|quantityUnitCode|F04|
|quantityUnitCode|F05|
|quantityUnitCode|F06|
|quantityUnitCode|F07|
|quantityUnitCode|F08|
|quantityUnitCode|F10|
|quantityUnitCode|F11|
|quantityUnitCode|F12|
|quantityUnitCode|F13|
|quantityUnitCode|F14|
|quantityUnitCode|F15|
|quantityUnitCode|F16|
|quantityUnitCode|F17|
|quantityUnitCode|F18|
|quantityUnitCode|F19|
|quantityUnitCode|F20|
|quantityUnitCode|F21|
|quantityUnitCode|F22|
|quantityUnitCode|F23|
|quantityUnitCode|F24|
|quantityUnitCode|F25|
|quantityUnitCode|F26|
|quantityUnitCode|F27|
|quantityUnitCode|F28|
|quantityUnitCode|F29|
|quantityUnitCode|F30|
|quantityUnitCode|F31|
|quantityUnitCode|F32|
|quantityUnitCode|F33|
|quantityUnitCode|F34|
|quantityUnitCode|F35|
|quantityUnitCode|F36|
|quantityUnitCode|F37|
|quantityUnitCode|F38|
|quantityUnitCode|F39|
|quantityUnitCode|F40|
|quantityUnitCode|F41|
|quantityUnitCode|F42|
|quantityUnitCode|F43|
|quantityUnitCode|F44|
|quantityUnitCode|F45|
|quantityUnitCode|F46|
|quantityUnitCode|F47|
|quantityUnitCode|F48|
|quantityUnitCode|F49|
|quantityUnitCode|F50|
|quantityUnitCode|F51|
|quantityUnitCode|F52|
|quantityUnitCode|F53|
|quantityUnitCode|F54|
|quantityUnitCode|F55|
|quantityUnitCode|F56|
|quantityUnitCode|F57|
|quantityUnitCode|F58|
|quantityUnitCode|F59|
|quantityUnitCode|F60|
|quantityUnitCode|F61|
|quantityUnitCode|F62|
|quantityUnitCode|F63|
|quantityUnitCode|F64|
|quantityUnitCode|F65|
|quantityUnitCode|F66|
|quantityUnitCode|F67|
|quantityUnitCode|F68|
|quantityUnitCode|F69|
|quantityUnitCode|F70|
|quantityUnitCode|F71|
|quantityUnitCode|F72|
|quantityUnitCode|F73|
|quantityUnitCode|F74|
|quantityUnitCode|F75|
|quantityUnitCode|F76|
|quantityUnitCode|F77|
|quantityUnitCode|F78|
|quantityUnitCode|F79|
|quantityUnitCode|F80|
|quantityUnitCode|F81|
|quantityUnitCode|F82|
|quantityUnitCode|F83|
|quantityUnitCode|F84|
|quantityUnitCode|F85|
|quantityUnitCode|F86|
|quantityUnitCode|F87|
|quantityUnitCode|F88|
|quantityUnitCode|F89|
|quantityUnitCode|F90|
|quantityUnitCode|F91|
|quantityUnitCode|F92|
|quantityUnitCode|F93|
|quantityUnitCode|F94|
|quantityUnitCode|F95|
|quantityUnitCode|F96|
|quantityUnitCode|F97|
|quantityUnitCode|F98|
|quantityUnitCode|F99|
|quantityUnitCode|FAH|
|quantityUnitCode|FAR|
|quantityUnitCode|FBM|
|quantityUnitCode|FC|
|quantityUnitCode|FF|
|quantityUnitCode|FH|
|quantityUnitCode|FIT|
|quantityUnitCode|FL|
|quantityUnitCode|FOT|
|quantityUnitCode|FP|
|quantityUnitCode|FR|
|quantityUnitCode|FS|
|quantityUnitCode|FTK|
|quantityUnitCode|FTQ|
|quantityUnitCode|G01|
|quantityUnitCode|G04|
|quantityUnitCode|G05|
|quantityUnitCode|G06|
|quantityUnitCode|G08|
|quantityUnitCode|G09|
|quantityUnitCode|G10|
|quantityUnitCode|G11|
|quantityUnitCode|G12|
|quantityUnitCode|G13|
|quantityUnitCode|G14|
|quantityUnitCode|G15|
|quantityUnitCode|G16|
|quantityUnitCode|G17|
|quantityUnitCode|G18|
|quantityUnitCode|G19|
|quantityUnitCode|G2|
|quantityUnitCode|G20|
|quantityUnitCode|G21|
|quantityUnitCode|G23|
|quantityUnitCode|G24|
|quantityUnitCode|G25|
|quantityUnitCode|G26|
|quantityUnitCode|G27|
|quantityUnitCode|G28|
|quantityUnitCode|G29|
|quantityUnitCode|G3|
|quantityUnitCode|G30|
|quantityUnitCode|G31|
|quantityUnitCode|G32|
|quantityUnitCode|G33|
|quantityUnitCode|G34|
|quantityUnitCode|G35|
|quantityUnitCode|G36|
|quantityUnitCode|G37|
|quantityUnitCode|G38|
|quantityUnitCode|G39|
|quantityUnitCode|G40|
|quantityUnitCode|G41|
|quantityUnitCode|G42|
|quantityUnitCode|G43|
|quantityUnitCode|G44|
|quantityUnitCode|G45|
|quantityUnitCode|G46|
|quantityUnitCode|G47|
|quantityUnitCode|G48|
|quantityUnitCode|G49|
|quantityUnitCode|G50|
|quantityUnitCode|G51|
|quantityUnitCode|G52|
|quantityUnitCode|G53|
|quantityUnitCode|G54|
|quantityUnitCode|G55|
|quantityUnitCode|G56|
|quantityUnitCode|G57|
|quantityUnitCode|G58|
|quantityUnitCode|G59|
|quantityUnitCode|G60|
|quantityUnitCode|G61|
|quantityUnitCode|G62|
|quantityUnitCode|G63|
|quantityUnitCode|G64|
|quantityUnitCode|G65|
|quantityUnitCode|G66|
|quantityUnitCode|G67|
|quantityUnitCode|G68|
|quantityUnitCode|G69|
|quantityUnitCode|G70|
|quantityUnitCode|G71|
|quantityUnitCode|G72|
|quantityUnitCode|G73|
|quantityUnitCode|G74|
|quantityUnitCode|G75|
|quantityUnitCode|G76|
|quantityUnitCode|G77|
|quantityUnitCode|G78|
|quantityUnitCode|G79|
|quantityUnitCode|G80|
|quantityUnitCode|G81|
|quantityUnitCode|G82|
|quantityUnitCode|G83|
|quantityUnitCode|G84|
|quantityUnitCode|G85|
|quantityUnitCode|G86|
|quantityUnitCode|G87|
|quantityUnitCode|G88|
|quantityUnitCode|G89|
|quantityUnitCode|G90|
|quantityUnitCode|G91|
|quantityUnitCode|G92|
|quantityUnitCode|G93|
|quantityUnitCode|G94|
|quantityUnitCode|G95|
|quantityUnitCode|G96|
|quantityUnitCode|G97|
|quantityUnitCode|G98|
|quantityUnitCode|G99|
|quantityUnitCode|GB|
|quantityUnitCode|GBQ|
|quantityUnitCode|GDW|
|quantityUnitCode|GE|
|quantityUnitCode|GF|
|quantityUnitCode|GFI|
|quantityUnitCode|GGR|
|quantityUnitCode|GIA|
|quantityUnitCode|GIC|
|quantityUnitCode|GII|
|quantityUnitCode|GIP|
|quantityUnitCode|GJ|
|quantityUnitCode|GL|
|quantityUnitCode|GLD|
|quantityUnitCode|GLI|
|quantityUnitCode|GLL|
|quantityUnitCode|GM|
|quantityUnitCode|GO|
|quantityUnitCode|GP|
|quantityUnitCode|GQ|
|quantityUnitCode|GRM|
|quantityUnitCode|GRN|
|quantityUnitCode|GRO|
|quantityUnitCode|GV|
|quantityUnitCode|GWH|
|quantityUnitCode|H03|
|quantityUnitCode|H04|
|quantityUnitCode|H05|
|quantityUnitCode|H06|
|quantityUnitCode|H07|
|quantityUnitCode|H08|
|quantityUnitCode|H09|
|quantityUnitCode|H10|
|quantityUnitCode|H11|
|quantityUnitCode|H12|
|quantityUnitCode|H13|
|quantityUnitCode|H14|
|quantityUnitCode|H15|
|quantityUnitCode|H16|
|quantityUnitCode|H18|
|quantityUnitCode|H19|
|quantityUnitCode|H20|
|quantityUnitCode|H21|
|quantityUnitCode|H22|
|quantityUnitCode|H23|
|quantityUnitCode|H24|
|quantityUnitCode|H25|
|quantityUnitCode|H26|
|quantityUnitCode|H27|
|quantityUnitCode|H28|
|quantityUnitCode|H29|
|quantityUnitCode|H30|
|quantityUnitCode|H31|
|quantityUnitCode|H32|
|quantityUnitCode|H33|
|quantityUnitCode|H34|
|quantityUnitCode|H35|
|quantityUnitCode|H36|
|quantityUnitCode|H37|
|quantityUnitCode|H38|
|quantityUnitCode|H39|
|quantityUnitCode|H40|
|quantityUnitCode|H41|
|quantityUnitCode|H42|
|quantityUnitCode|H43|
|quantityUnitCode|H44|
|quantityUnitCode|H45|
|quantityUnitCode|H46|
|quantityUnitCode|H47|
|quantityUnitCode|H48|
|quantityUnitCode|H49|
|quantityUnitCode|H50|
|quantityUnitCode|H51|
|quantityUnitCode|H52|
|quantityUnitCode|H53|
|quantityUnitCode|H54|
|quantityUnitCode|H55|
|quantityUnitCode|H56|
|quantityUnitCode|H57|
|quantityUnitCode|H58|
|quantityUnitCode|H59|
|quantityUnitCode|H60|
|quantityUnitCode|H61|
|quantityUnitCode|H62|
|quantityUnitCode|H63|
|quantityUnitCode|H64|
|quantityUnitCode|H65|
|quantityUnitCode|H66|
|quantityUnitCode|H67|
|quantityUnitCode|H68|
|quantityUnitCode|H69|
|quantityUnitCode|H70|
|quantityUnitCode|H71|
|quantityUnitCode|H72|
|quantityUnitCode|H73|
|quantityUnitCode|H74|
|quantityUnitCode|H75|
|quantityUnitCode|H76|
|quantityUnitCode|H77|
|quantityUnitCode|H79|
|quantityUnitCode|H80|
|quantityUnitCode|H81|
|quantityUnitCode|H82|
|quantityUnitCode|H83|
|quantityUnitCode|H84|
|quantityUnitCode|H85|
|quantityUnitCode|H87|
|quantityUnitCode|H88|
|quantityUnitCode|H89|
|quantityUnitCode|H90|
|quantityUnitCode|H91|
|quantityUnitCode|H92|
|quantityUnitCode|H93|
|quantityUnitCode|H94|
|quantityUnitCode|H95|
|quantityUnitCode|H96|
|quantityUnitCode|H98|
|quantityUnitCode|H99|
|quantityUnitCode|HA|
|quantityUnitCode|HBA|
|quantityUnitCode|HBX|
|quantityUnitCode|HC|
|quantityUnitCode|HDW|
|quantityUnitCode|HEA|
|quantityUnitCode|HGM|
|quantityUnitCode|HH|
|quantityUnitCode|HIU|
|quantityUnitCode|HKM|
|quantityUnitCode|HLT|
|quantityUnitCode|HM|
|quantityUnitCode|HMQ|
|quantityUnitCode|HMT|
|quantityUnitCode|HPA|
|quantityUnitCode|HTZ|
|quantityUnitCode|HUR|
|quantityUnitCode|IA|
|quantityUnitCode|IE|
|quantityUnitCode|INH|
|quantityUnitCode|INK|
|quantityUnitCode|INQ|
|quantityUnitCode|ISD|
|quantityUnitCode|IU|
|quantityUnitCode|IV|
|quantityUnitCode|J10|
|quantityUnitCode|J12|
|quantityUnitCode|J13|
|quantityUnitCode|J14|
|quantityUnitCode|J15|
|quantityUnitCode|J16|
|quantityUnitCode|J17|
|quantityUnitCode|J18|
|quantityUnitCode|J19|
|quantityUnitCode|J2|
|quantityUnitCode|J20|
|quantityUnitCode|J21|
|quantityUnitCode|J22|
|quantityUnitCode|J23|
|quantityUnitCode|J24|
|quantityUnitCode|J25|
|quantityUnitCode|J26|
|quantityUnitCode|J27|
|quantityUnitCode|J28|
|quantityUnitCode|J29|
|quantityUnitCode|J30|
|quantityUnitCode|J31|
|quantityUnitCode|J32|
|quantityUnitCode|J33|
|quantityUnitCode|J34|
|quantityUnitCode|J35|
|quantityUnitCode|J36|
|quantityUnitCode|J38|
|quantityUnitCode|J39|
|quantityUnitCode|J40|
|quantityUnitCode|J41|
|quantityUnitCode|J42|
|quantityUnitCode|J43|
|quantityUnitCode|J44|
|quantityUnitCode|J45|
|quantityUnitCode|J46|
|quantityUnitCode|J47|
|quantityUnitCode|J48|
|quantityUnitCode|J49|
|quantityUnitCode|J50|
|quantityUnitCode|J51|
|quantityUnitCode|J52|
|quantityUnitCode|J53|
|quantityUnitCode|J54|
|quantityUnitCode|J55|
|quantityUnitCode|J56|
|quantityUnitCode|J57|
|quantityUnitCode|J58|
|quantityUnitCode|J59|
|quantityUnitCode|J60|
|quantityUnitCode|J61|
|quantityUnitCode|J62|
|quantityUnitCode|J63|
|quantityUnitCode|J64|
|quantityUnitCode|J65|
|quantityUnitCode|J66|
|quantityUnitCode|J67|
|quantityUnitCode|J68|
|quantityUnitCode|J69|
|quantityUnitCode|J70|
|quantityUnitCode|J71|
|quantityUnitCode|J72|
|quantityUnitCode|J73|
|quantityUnitCode|J74|
|quantityUnitCode|J75|
|quantityUnitCode|J76|
|quantityUnitCode|J78|
|quantityUnitCode|J79|
|quantityUnitCode|J81|
|quantityUnitCode|J82|
|quantityUnitCode|J83|
|quantityUnitCode|J84|
|quantityUnitCode|J85|
|quantityUnitCode|J87|
|quantityUnitCode|J90|
|quantityUnitCode|J91|
|quantityUnitCode|J92|
|quantityUnitCode|J93|
|quantityUnitCode|J95|
|quantityUnitCode|J96|
|quantityUnitCode|J97|
|quantityUnitCode|J98|
|quantityUnitCode|J99|
|quantityUnitCode|JE|
|quantityUnitCode|JK|
|quantityUnitCode|JM|
|quantityUnitCode|JNT|
|quantityUnitCode|JOU|
|quantityUnitCode|JPS|
|quantityUnitCode|JWL|
|quantityUnitCode|K1|
|quantityUnitCode|K10|
|quantityUnitCode|K11|
|quantityUnitCode|K12|
|quantityUnitCode|K13|
|quantityUnitCode|K14|
|quantityUnitCode|K15|
|quantityUnitCode|K16|
|quantityUnitCode|K17|
|quantityUnitCode|K18|
|quantityUnitCode|K19|
|quantityUnitCode|K2|
|quantityUnitCode|K20|
|quantityUnitCode|K21|
|quantityUnitCode|K22|
|quantityUnitCode|K23|
|quantityUnitCode|K26|
|quantityUnitCode|K27|
|quantityUnitCode|K28|
|quantityUnitCode|K3|
|quantityUnitCode|K30|
|quantityUnitCode|K31|
|quantityUnitCode|K32|
|quantityUnitCode|K33|
|quantityUnitCode|K34|
|quantityUnitCode|K35|
|quantityUnitCode|K36|
|quantityUnitCode|K37|
|quantityUnitCode|K38|
|quantityUnitCode|K39|
|quantityUnitCode|K40|
|quantityUnitCode|K41|
|quantityUnitCode|K42|
|quantityUnitCode|K43|
|quantityUnitCode|K45|
|quantityUnitCode|K46|
|quantityUnitCode|K47|
|quantityUnitCode|K48|
|quantityUnitCode|K49|
|quantityUnitCode|K50|
|quantityUnitCode|K51|
|quantityUnitCode|K52|
|quantityUnitCode|K53|
|quantityUnitCode|K54|
|quantityUnitCode|K55|
|quantityUnitCode|K58|
|quantityUnitCode|K59|
|quantityUnitCode|K6|
|quantityUnitCode|K60|
|quantityUnitCode|K61|
|quantityUnitCode|K62|
|quantityUnitCode|K63|
|quantityUnitCode|K64|
|quantityUnitCode|K65|
|quantityUnitCode|K66|
|quantityUnitCode|K67|
|quantityUnitCode|K68|
|quantityUnitCode|K69|
|quantityUnitCode|K70|
|quantityUnitCode|K71|
|quantityUnitCode|K73|
|quantityUnitCode|K74|
|quantityUnitCode|K75|
|quantityUnitCode|K76|
|quantityUnitCode|K77|
|quantityUnitCode|K78|
|quantityUnitCode|K79|
|quantityUnitCode|K80|
|quantityUnitCode|K81|
|quantityUnitCode|K82|
|quantityUnitCode|K83|
|quantityUnitCode|K84|
|quantityUnitCode|K85|
|quantityUnitCode|K86|
|quantityUnitCode|K87|
|quantityUnitCode|K88|
|quantityUnitCode|K89|
|quantityUnitCode|K90|
|quantityUnitCode|K91|
|quantityUnitCode|K92|
|quantityUnitCode|K93|
|quantityUnitCode|K94|
|quantityUnitCode|K95|
|quantityUnitCode|K96|
|quantityUnitCode|K97|
|quantityUnitCode|K98|
|quantityUnitCode|K99|
|quantityUnitCode|KA|
|quantityUnitCode|KAT|
|quantityUnitCode|KB|
|quantityUnitCode|KBA|
|quantityUnitCode|KCC|
|quantityUnitCode|KDW|
|quantityUnitCode|KEL|
|quantityUnitCode|KGM|
|quantityUnitCode|KGS|
|quantityUnitCode|KHY|
|quantityUnitCode|KHZ|
|quantityUnitCode|KI|
|quantityUnitCode|KIC|
|quantityUnitCode|KIP|
|quantityUnitCode|KJ|
|quantityUnitCode|KJO|
|quantityUnitCode|KL|
|quantityUnitCode|KLK|
|quantityUnitCode|KLX|
|quantityUnitCode|KMA|
|quantityUnitCode|KMH|
|quantityUnitCode|KMK|
|quantityUnitCode|KMQ|
|quantityUnitCode|KMT|
|quantityUnitCode|KNI|
|quantityUnitCode|KNM|
|quantityUnitCode|KNS|
|quantityUnitCode|KNT|
|quantityUnitCode|KO|
|quantityUnitCode|KPA|
|quantityUnitCode|KPH|
|quantityUnitCode|KPO|
|quantityUnitCode|KPP|
|quantityUnitCode|KR|
|quantityUnitCode|KSD|
|quantityUnitCode|KSH|
|quantityUnitCode|KT|
|quantityUnitCode|KTN|
|quantityUnitCode|KUR|
|quantityUnitCode|KVA|
|quantityUnitCode|KVR|
|quantityUnitCode|KVT|
|quantityUnitCode|KW|
|quantityUnitCode|KWH|
|quantityUnitCode|KWO|
|quantityUnitCode|KWT|
|quantityUnitCode|KX|
|quantityUnitCode|L10|
|quantityUnitCode|L11|
|quantityUnitCode|L12|
|quantityUnitCode|L13|
|quantityUnitCode|L14|
|quantityUnitCode|L15|
|quantityUnitCode|L16|
|quantityUnitCode|L17|
|quantityUnitCode|L18|
|quantityUnitCode|L19|
|quantityUnitCode|L2|
|quantityUnitCode|L20|
|quantityUnitCode|L21|
|quantityUnitCode|L23|
|quantityUnitCode|L24|
|quantityUnitCode|L25|
|quantityUnitCode|L26|
|quantityUnitCode|L27|
|quantityUnitCode|L28|
|quantityUnitCode|L29|
|quantityUnitCode|L30|
|quantityUnitCode|L31|
|quantityUnitCode|L32|
|quantityUnitCode|L33|
|quantityUnitCode|L34|
|quantityUnitCode|L35|
|quantityUnitCode|L36|
|quantityUnitCode|L37|
|quantityUnitCode|L38|
|quantityUnitCode|L39|
|quantityUnitCode|L40|
|quantityUnitCode|L41|
|quantityUnitCode|L42|
|quantityUnitCode|L43|
|quantityUnitCode|L44|
|quantityUnitCode|L45|
|quantityUnitCode|L46|
|quantityUnitCode|L47|
|quantityUnitCode|L48|
|quantityUnitCode|L49|
|quantityUnitCode|L50|
|quantityUnitCode|L51|
|quantityUnitCode|L52|
|quantityUnitCode|L53|
|quantityUnitCode|L54|
|quantityUnitCode|L55|
|quantityUnitCode|L56|
|quantityUnitCode|L57|
|quantityUnitCode|L58|
|quantityUnitCode|L59|
|quantityUnitCode|L60|
|quantityUnitCode|L63|
|quantityUnitCode|L64|
|quantityUnitCode|L65|
|quantityUnitCode|L66|
|quantityUnitCode|L67|
|quantityUnitCode|L68|
|quantityUnitCode|L69|
|quantityUnitCode|L70|
|quantityUnitCode|L71|
|quantityUnitCode|L72|
|quantityUnitCode|L73|
|quantityUnitCode|L74|
|quantityUnitCode|L75|
|quantityUnitCode|L76|
|quantityUnitCode|L77|
|quantityUnitCode|L78|
|quantityUnitCode|L79|
|quantityUnitCode|L80|
|quantityUnitCode|L81|
|quantityUnitCode|L82|
|quantityUnitCode|L83|
|quantityUnitCode|L84|
|quantityUnitCode|L85|
|quantityUnitCode|L86|
|quantityUnitCode|L87|
|quantityUnitCode|L88|
|quantityUnitCode|L89|
|quantityUnitCode|L90|
|quantityUnitCode|L91|
|quantityUnitCode|L92|
|quantityUnitCode|L93|
|quantityUnitCode|L94|
|quantityUnitCode|L95|
|quantityUnitCode|L96|
|quantityUnitCode|L98|
|quantityUnitCode|L99|
|quantityUnitCode|LA|
|quantityUnitCode|LAC|
|quantityUnitCode|LBR|
|quantityUnitCode|LBT|
|quantityUnitCode|LD|
|quantityUnitCode|LEF|
|quantityUnitCode|LF|
|quantityUnitCode|LH|
|quantityUnitCode|LK|
|quantityUnitCode|LM|
|quantityUnitCode|LN|
|quantityUnitCode|LO|
|quantityUnitCode|LP|
|quantityUnitCode|LPA|
|quantityUnitCode|LR|
|quantityUnitCode|LS|
|quantityUnitCode|LTN|
|quantityUnitCode|LTR|
|quantityUnitCode|LUB|
|quantityUnitCode|LUM|
|quantityUnitCode|LUX|
|quantityUnitCode|LY|
|quantityUnitCode|M1|
|quantityUnitCode|M10|
|quantityUnitCode|M11|
|quantityUnitCode|M12|
|quantityUnitCode|M13|
|quantityUnitCode|M14|
|quantityUnitCode|M15|
|quantityUnitCode|M16|
|quantityUnitCode|M17|
|quantityUnitCode|M18|
|quantityUnitCode|M19|
|quantityUnitCode|M20|
|quantityUnitCode|M21|
|quantityUnitCode|M22|
|quantityUnitCode|M23|
|quantityUnitCode|M24|
|quantityUnitCode|M25|
|quantityUnitCode|M26|
|quantityUnitCode|M27|
|quantityUnitCode|M29|
|quantityUnitCode|M30|
|quantityUnitCode|M31|
|quantityUnitCode|M32|
|quantityUnitCode|M33|
|quantityUnitCode|M34|
|quantityUnitCode|M35|
|quantityUnitCode|M36|
|quantityUnitCode|M37|
|quantityUnitCode|M38|
|quantityUnitCode|M39|
|quantityUnitCode|M4|
|quantityUnitCode|M40|
|quantityUnitCode|M41|
|quantityUnitCode|M42|
|quantityUnitCode|M43|
|quantityUnitCode|M44|
|quantityUnitCode|M45|
|quantityUnitCode|M46|
|quantityUnitCode|M47|
|quantityUnitCode|M48|
|quantityUnitCode|M49|
|quantityUnitCode|M5|
|quantityUnitCode|M50|
|quantityUnitCode|M51|
|quantityUnitCode|M52|
|quantityUnitCode|M53|
|quantityUnitCode|M55|
|quantityUnitCode|M56|
|quantityUnitCode|M57|
|quantityUnitCode|M58|
|quantityUnitCode|M59|
|quantityUnitCode|M60|
|quantityUnitCode|M61|
|quantityUnitCode|M62|
|quantityUnitCode|M63|
|quantityUnitCode|M64|
|quantityUnitCode|M65|
|quantityUnitCode|M66|
|quantityUnitCode|M67|
|quantityUnitCode|M68|
|quantityUnitCode|M69|
|quantityUnitCode|M7|
|quantityUnitCode|M70|
|quantityUnitCode|M71|
|quantityUnitCode|M72|
|quantityUnitCode|M73|
|quantityUnitCode|M74|
|quantityUnitCode|M75|
|quantityUnitCode|M76|
|quantityUnitCode|M77|
|quantityUnitCode|M78|
|quantityUnitCode|M79|
|quantityUnitCode|M80|
|quantityUnitCode|M81|
|quantityUnitCode|M82|
|quantityUnitCode|M83|
|quantityUnitCode|M84|
|quantityUnitCode|M85|
|quantityUnitCode|M86|
|quantityUnitCode|M87|
|quantityUnitCode|M88|
|quantityUnitCode|M89|
|quantityUnitCode|M9|
|quantityUnitCode|M90|
|quantityUnitCode|M91|
|quantityUnitCode|M92|
|quantityUnitCode|M93|
|quantityUnitCode|M94|
|quantityUnitCode|M95|
|quantityUnitCode|M96|
|quantityUnitCode|M97|
|quantityUnitCode|M98|
|quantityUnitCode|M99|
|quantityUnitCode|MAH|
|quantityUnitCode|MAL|
|quantityUnitCode|MAM|
|quantityUnitCode|MAR|
|quantityUnitCode|MAW|
|quantityUnitCode|MBE|
|quantityUnitCode|MBF|
|quantityUnitCode|MBR|
|quantityUnitCode|MC|
|quantityUnitCode|MCU|
|quantityUnitCode|MD|
|quantityUnitCode|MGM|
|quantityUnitCode|MHZ|
|quantityUnitCode|MIK|
|quantityUnitCode|MIL|
|quantityUnitCode|MIN|
|quantityUnitCode|MIO|
|quantityUnitCode|MIU|
|quantityUnitCode|MLD|
|quantityUnitCode|MLT|
|quantityUnitCode|MMK|
|quantityUnitCode|MMQ|
|quantityUnitCode|MMT|
|quantityUnitCode|MND|
|quantityUnitCode|MON|
|quantityUnitCode|MPA|
|quantityUnitCode|MQH|
|quantityUnitCode|MQS|
|quantityUnitCode|MSK|
|quantityUnitCode|MTK|
|quantityUnitCode|MTQ|
|quantityUnitCode|MTR|
|quantityUnitCode|MTS|
|quantityUnitCode|MVA|
|quantityUnitCode|MWH|
|quantityUnitCode|N1|
|quantityUnitCode|N10|
|quantityUnitCode|N11|
|quantityUnitCode|N12|
|quantityUnitCode|N13|
|quantityUnitCode|N14|
|quantityUnitCode|N15|
|quantityUnitCode|N16|
|quantityUnitCode|N17|
|quantityUnitCode|N18|
|quantityUnitCode|N19|
|quantityUnitCode|N20|
|quantityUnitCode|N21|
|quantityUnitCode|N22|
|quantityUnitCode|N23|
|quantityUnitCode|N24|
|quantityUnitCode|N25|
|quantityUnitCode|N26|
|quantityUnitCode|N27|
|quantityUnitCode|N28|
|quantityUnitCode|N29|
|quantityUnitCode|N3|
|quantityUnitCode|N30|
|quantityUnitCode|N31|
|quantityUnitCode|N32|
|quantityUnitCode|N33|
|quantityUnitCode|N34|
|quantityUnitCode|N35|
|quantityUnitCode|N36|
|quantityUnitCode|N37|
|quantityUnitCode|N38|
|quantityUnitCode|N39|
|quantityUnitCode|N40|
|quantityUnitCode|N41|
|quantityUnitCode|N42|
|quantityUnitCode|N43|
|quantityUnitCode|N44|
|quantityUnitCode|N45|
|quantityUnitCode|N46|
|quantityUnitCode|N47|
|quantityUnitCode|N48|
|quantityUnitCode|N49|
|quantityUnitCode|N50|
|quantityUnitCode|N51|
|quantityUnitCode|N52|
|quantityUnitCode|N53|
|quantityUnitCode|N54|
|quantityUnitCode|N55|
|quantityUnitCode|N56|
|quantityUnitCode|N57|
|quantityUnitCode|N58|
|quantityUnitCode|N59|
|quantityUnitCode|N60|
|quantityUnitCode|N61|
|quantityUnitCode|N62|
|quantityUnitCode|N63|
|quantityUnitCode|N64|
|quantityUnitCode|N65|
|quantityUnitCode|N66|
|quantityUnitCode|N67|
|quantityUnitCode|N68|
|quantityUnitCode|N69|
|quantityUnitCode|N70|
|quantityUnitCode|N71|
|quantityUnitCode|N72|
|quantityUnitCode|N73|
|quantityUnitCode|N74|
|quantityUnitCode|N75|
|quantityUnitCode|N76|
|quantityUnitCode|N77|
|quantityUnitCode|N78|
|quantityUnitCode|N79|
|quantityUnitCode|N80|
|quantityUnitCode|N81|
|quantityUnitCode|N82|
|quantityUnitCode|N83|
|quantityUnitCode|N84|
|quantityUnitCode|N85|
|quantityUnitCode|N86|
|quantityUnitCode|N87|
|quantityUnitCode|N88|
|quantityUnitCode|N89|
|quantityUnitCode|N90|
|quantityUnitCode|N91|
|quantityUnitCode|N92|
|quantityUnitCode|N93|
|quantityUnitCode|N94|
|quantityUnitCode|N95|
|quantityUnitCode|N96|
|quantityUnitCode|N97|
|quantityUnitCode|N98|
|quantityUnitCode|N99|
|quantityUnitCode|NA|
|quantityUnitCode|NAR|
|quantityUnitCode|NCL|
|quantityUnitCode|NEW|
|quantityUnitCode|NF|
|quantityUnitCode|NIL|
|quantityUnitCode|NIU|
|quantityUnitCode|NL|
|quantityUnitCode|NM3|
|quantityUnitCode|NMI|
|quantityUnitCode|NMP|
|quantityUnitCode|NPT|
|quantityUnitCode|NT|
|quantityUnitCode|NU|
|quantityUnitCode|NX|
|quantityUnitCode|OA|
|quantityUnitCode|ODE|
|quantityUnitCode|OHM|
|quantityUnitCode|ON|
|quantityUnitCode|ONZ|
|quantityUnitCode|OPM|
|quantityUnitCode|OT|
|quantityUnitCode|OZA|
|quantityUnitCode|OZI|
|quantityUnitCode|P1|
|quantityUnitCode|P10|
|quantityUnitCode|P11|
|quantityUnitCode|P12|
|quantityUnitCode|P13|
|quantityUnitCode|P14|
|quantityUnitCode|P15|
|quantityUnitCode|P16|
|quantityUnitCode|P17|
|quantityUnitCode|P18|
|quantityUnitCode|P19|
|quantityUnitCode|P2|
|quantityUnitCode|P20|
|quantityUnitCode|P21|
|quantityUnitCode|P22|
|quantityUnitCode|P23|
|quantityUnitCode|P24|
|quantityUnitCode|P25|
|quantityUnitCode|P26|
|quantityUnitCode|P27|
|quantityUnitCode|P28|
|quantityUnitCode|P29|
|quantityUnitCode|P30|
|quantityUnitCode|P31|
|quantityUnitCode|P32|
|quantityUnitCode|P33|
|quantityUnitCode|P34|
|quantityUnitCode|P35|
|quantityUnitCode|P36|
|quantityUnitCode|P37|
|quantityUnitCode|P38|
|quantityUnitCode|P39|
|quantityUnitCode|P40|
|quantityUnitCode|P41|
|quantityUnitCode|P42|
|quantityUnitCode|P43|
|quantityUnitCode|P44|
|quantityUnitCode|P45|
|quantityUnitCode|P46|
|quantityUnitCode|P47|
|quantityUnitCode|P48|
|quantityUnitCode|P49|
|quantityUnitCode|P5|
|quantityUnitCode|P50|
|quantityUnitCode|P51|
|quantityUnitCode|P52|
|quantityUnitCode|P53|
|quantityUnitCode|P54|
|quantityUnitCode|P55|
|quantityUnitCode|P56|
|quantityUnitCode|P57|
|quantityUnitCode|P58|
|quantityUnitCode|P59|
|quantityUnitCode|P60|
|quantityUnitCode|P61|
|quantityUnitCode|P62|
|quantityUnitCode|P63|
|quantityUnitCode|P64|
|quantityUnitCode|P65|
|quantityUnitCode|P66|
|quantityUnitCode|P67|
|quantityUnitCode|P68|
|quantityUnitCode|P69|
|quantityUnitCode|P70|
|quantityUnitCode|P71|
|quantityUnitCode|P72|
|quantityUnitCode|P73|
|quantityUnitCode|P74|
|quantityUnitCode|P75|
|quantityUnitCode|P76|
|quantityUnitCode|P77|
|quantityUnitCode|P78|
|quantityUnitCode|P79|
|quantityUnitCode|P80|
|quantityUnitCode|P81|
|quantityUnitCode|P82|
|quantityUnitCode|P83|
|quantityUnitCode|P84|
|quantityUnitCode|P85|
|quantityUnitCode|P86|
|quantityUnitCode|P87|
|quantityUnitCode|P88|
|quantityUnitCode|P89|
|quantityUnitCode|P90|
|quantityUnitCode|P91|
|quantityUnitCode|P92|
|quantityUnitCode|P93|
|quantityUnitCode|P94|
|quantityUnitCode|P95|
|quantityUnitCode|P96|
|quantityUnitCode|P97|
|quantityUnitCode|P98|
|quantityUnitCode|P99|
|quantityUnitCode|PAL|
|quantityUnitCode|PD|
|quantityUnitCode|PFL|
|quantityUnitCode|PGL|
|quantityUnitCode|PI|
|quantityUnitCode|PLA|
|quantityUnitCode|PO|
|quantityUnitCode|PQ|
|quantityUnitCode|PR|
|quantityUnitCode|PS|
|quantityUnitCode|PTD|
|quantityUnitCode|PTI|
|quantityUnitCode|PTL|
|quantityUnitCode|PTN|
|quantityUnitCode|Q10|
|quantityUnitCode|Q11|
|quantityUnitCode|Q12|
|quantityUnitCode|Q13|
|quantityUnitCode|Q14|
|quantityUnitCode|Q15|
|quantityUnitCode|Q16|
|quantityUnitCode|Q17|
|quantityUnitCode|Q18|
|quantityUnitCode|Q19|
|quantityUnitCode|Q20|
|quantityUnitCode|Q21|
|quantityUnitCode|Q22|
|quantityUnitCode|Q23|
|quantityUnitCode|Q24|
|quantityUnitCode|Q25|
|quantityUnitCode|Q26|
|quantityUnitCode|Q27|
|quantityUnitCode|Q28|
|quantityUnitCode|Q29|
|quantityUnitCode|Q30|
|quantityUnitCode|Q31|
|quantityUnitCode|Q32|
|quantityUnitCode|Q33|
|quantityUnitCode|Q34|
|quantityUnitCode|Q35|
|quantityUnitCode|Q36|
|quantityUnitCode|Q37|
|quantityUnitCode|Q38|
|quantityUnitCode|Q39|
|quantityUnitCode|Q40|
|quantityUnitCode|Q3|
|quantityUnitCode|QA|
|quantityUnitCode|QAN|
|quantityUnitCode|QB|
|quantityUnitCode|QR|
|quantityUnitCode|QTD|
|quantityUnitCode|QTI|
|quantityUnitCode|QTL|
|quantityUnitCode|QTR|
|quantityUnitCode|R1|
|quantityUnitCode|R9|
|quantityUnitCode|RH|
|quantityUnitCode|RM|
|quantityUnitCode|ROM|
|quantityUnitCode|RP|
|quantityUnitCode|RPM|
|quantityUnitCode|RPS|
|quantityUnitCode|RT|
|quantityUnitCode|S3|
|quantityUnitCode|S4|
|quantityUnitCode|SAN|
|quantityUnitCode|SCO|
|quantityUnitCode|SCR|
|quantityUnitCode|SEC|
|quantityUnitCode|SET|
|quantityUnitCode|SG|
|quantityUnitCode|SIE|
|quantityUnitCode|SM3|
|quantityUnitCode|SMI|
|quantityUnitCode|SQ|
|quantityUnitCode|SQR|
|quantityUnitCode|SR|
|quantityUnitCode|STC|
|quantityUnitCode|STI|
|quantityUnitCode|STK|
|quantityUnitCode|STL|
|quantityUnitCode|STN|
|quantityUnitCode|STW|
|quantityUnitCode|SW|
|quantityUnitCode|SX|
|quantityUnitCode|SYR|
|quantityUnitCode|T0|
|quantityUnitCode|T3|
|quantityUnitCode|TAH|
|quantityUnitCode|TAN|
|quantityUnitCode|TI|
|quantityUnitCode|TIC|
|quantityUnitCode|TIP|
|quantityUnitCode|TKM|
|quantityUnitCode|TMS|
|quantityUnitCode|TNE|
|quantityUnitCode|TP|
|quantityUnitCode|TPI|
|quantityUnitCode|TPR|
|quantityUnitCode|TQD|
|quantityUnitCode|TRL|
|quantityUnitCode|TST|
|quantityUnitCode|TTS|
|quantityUnitCode|U1|
|quantityUnitCode|U2|
|quantityUnitCode|UB|
|quantityUnitCode|UC|
|quantityUnitCode|VA|
|quantityUnitCode|VLT|
|quantityUnitCode|VP|
|quantityUnitCode|W2|
|quantityUnitCode|WA|
|quantityUnitCode|WB|
|quantityUnitCode|WCD|
|quantityUnitCode|WE|
|quantityUnitCode|WEB|
|quantityUnitCode|WEE|
|quantityUnitCode|WG|
|quantityUnitCode|WHR|
|quantityUnitCode|WM|
|quantityUnitCode|WSD|
|quantityUnitCode|WTT|
|quantityUnitCode|X1|
|quantityUnitCode|YDK|
|quantityUnitCode|YDQ|
|quantityUnitCode|YRD|
|quantityUnitCode|Z11|
|quantityUnitCode|ZP|
|quantityUnitCode|ZZ|
|quantityUnitCode|X1A|
|quantityUnitCode|X1B|
|quantityUnitCode|X1D|
|quantityUnitCode|X1F|
|quantityUnitCode|X1G|
|quantityUnitCode|X1W|
|quantityUnitCode|X2C|
|quantityUnitCode|X3A|
|quantityUnitCode|X3H|
|quantityUnitCode|X43|
|quantityUnitCode|X44|
|quantityUnitCode|X4A|
|quantityUnitCode|X4B|
|quantityUnitCode|X4C|
|quantityUnitCode|X4D|
|quantityUnitCode|X4F|
|quantityUnitCode|X4G|
|quantityUnitCode|X4H|
|quantityUnitCode|X5H|
|quantityUnitCode|X5L|
|quantityUnitCode|X5M|
|quantityUnitCode|X6H|
|quantityUnitCode|X6P|
|quantityUnitCode|X7A|
|quantityUnitCode|X7B|
|quantityUnitCode|X8A|
|quantityUnitCode|X8B|
|quantityUnitCode|X8C|
|quantityUnitCode|XAA|
|quantityUnitCode|XAB|
|quantityUnitCode|XAC|
|quantityUnitCode|XAD|
|quantityUnitCode|XAE|
|quantityUnitCode|XAF|
|quantityUnitCode|XAG|
|quantityUnitCode|XAH|
|quantityUnitCode|XAI|
|quantityUnitCode|XAJ|
|quantityUnitCode|XAL|
|quantityUnitCode|XAM|
|quantityUnitCode|XAP|
|quantityUnitCode|XAT|
|quantityUnitCode|XAV|
|quantityUnitCode|XB4|
|quantityUnitCode|XBA|
|quantityUnitCode|XBB|
|quantityUnitCode|XBC|
|quantityUnitCode|XBD|
|quantityUnitCode|XBE|
|quantityUnitCode|XBF|
|quantityUnitCode|XBG|
|quantityUnitCode|XBH|
|quantityUnitCode|XBI|
|quantityUnitCode|XBJ|
|quantityUnitCode|XBK|
|quantityUnitCode|XBL|
|quantityUnitCode|XBM|
|quantityUnitCode|XBN|
|quantityUnitCode|XBO|
|quantityUnitCode|XBP|
|quantityUnitCode|XBQ|
|quantityUnitCode|XBR|
|quantityUnitCode|XBS|
|quantityUnitCode|XBT|
|quantityUnitCode|XBU|
|quantityUnitCode|XBV|
|quantityUnitCode|XBW|
|quantityUnitCode|XBX|
|quantityUnitCode|XBY|
|quantityUnitCode|XBZ|
|quantityUnitCode|XCA|
|quantityUnitCode|XCB|
|quantityUnitCode|XCC|
|quantityUnitCode|XCD|
|quantityUnitCode|XCE|
|quantityUnitCode|XCF|
|quantityUnitCode|XCG|
|quantityUnitCode|XCH|
|quantityUnitCode|XCI|
|quantityUnitCode|XCJ|
|quantityUnitCode|XCK|
|quantityUnitCode|XCL|
|quantityUnitCode|XCM|
|quantityUnitCode|XCN|
|quantityUnitCode|XCO|
|quantityUnitCode|XCP|
|quantityUnitCode|XCQ|
|quantityUnitCode|XCR|
|quantityUnitCode|XCS|
|quantityUnitCode|XCT|
|quantityUnitCode|XCU|
|quantityUnitCode|XCV|
|quantityUnitCode|XCW|
|quantityUnitCode|XCX|
|quantityUnitCode|XCY|
|quantityUnitCode|XCZ|
|quantityUnitCode|XDA|
|quantityUnitCode|XDB|
|quantityUnitCode|XDC|
|quantityUnitCode|XDG|
|quantityUnitCode|XDH|
|quantityUnitCode|XDI|
|quantityUnitCode|XDJ|
|quantityUnitCode|XDK|
|quantityUnitCode|XDL|
|quantityUnitCode|XDM|
|quantityUnitCode|XDN|
|quantityUnitCode|XDP|
|quantityUnitCode|XDR|
|quantityUnitCode|XDS|
|quantityUnitCode|XDT|
|quantityUnitCode|XDU|
|quantityUnitCode|XDV|
|quantityUnitCode|XDW|
|quantityUnitCode|XDX|
|quantityUnitCode|XDY|
|quantityUnitCode|XEC|
|quantityUnitCode|XED|
|quantityUnitCode|XEE|
|quantityUnitCode|XEF|
|quantityUnitCode|XEG|
|quantityUnitCode|XEH|
|quantityUnitCode|XEI|
|quantityUnitCode|XEN|
|quantityUnitCode|XFB|
|quantityUnitCode|XFC|
|quantityUnitCode|XFD|
|quantityUnitCode|XFE|
|quantityUnitCode|XFI|
|quantityUnitCode|XFL|
|quantityUnitCode|XFO|
|quantityUnitCode|XFP|
|quantityUnitCode|XFR|
|quantityUnitCode|XFT|
|quantityUnitCode|XFW|
|quantityUnitCode|XFX|
|quantityUnitCode|XGB|
|quantityUnitCode|XGI|
|quantityUnitCode|XGL|
|quantityUnitCode|XGR|
|quantityUnitCode|XGU|
|quantityUnitCode|XGY|
|quantityUnitCode|XGZ|
|quantityUnitCode|XHA|
|quantityUnitCode|XHB|
|quantityUnitCode|XHC|
|quantityUnitCode|XHG|
|quantityUnitCode|XHN|
|quantityUnitCode|XHR|
|quantityUnitCode|XIA|
|quantityUnitCode|XIB|
|quantityUnitCode|XIC|
|quantityUnitCode|XID|
|quantityUnitCode|XIE|
|quantityUnitCode|XIF|
|quantityUnitCode|XIG|
|quantityUnitCode|XIH|
|quantityUnitCode|XIK|
|quantityUnitCode|XIL|
|quantityUnitCode|XIN|
|quantityUnitCode|XIZ|
|quantityUnitCode|XJB|
|quantityUnitCode|XJC|
|quantityUnitCode|XJG|
|quantityUnitCode|XJR|
|quantityUnitCode|XJT|
|quantityUnitCode|XJY|
|quantityUnitCode|XKG|
|quantityUnitCode|XKI|
|quantityUnitCode|XLE|
|quantityUnitCode|XLG|
|quantityUnitCode|XLT|
|quantityUnitCode|XLU|
|quantityUnitCode|XLV|
|quantityUnitCode|XLZ|
|quantityUnitCode|XMA|
|quantityUnitCode|XMB|
|quantityUnitCode|XMC|
|quantityUnitCode|XME|
|quantityUnitCode|XMR|
|quantityUnitCode|XMS|
|quantityUnitCode|XMT|
|quantityUnitCode|XMW|
|quantityUnitCode|XMX|
|quantityUnitCode|XNA|
|quantityUnitCode|XNE|
|quantityUnitCode|XNF|
|quantityUnitCode|XNG|
|quantityUnitCode|XNS|
|quantityUnitCode|XNT|
|quantityUnitCode|XNU|
|quantityUnitCode|XNV|
|quantityUnitCode|XOA|
|quantityUnitCode|XOB|
|quantityUnitCode|XOC|
|quantityUnitCode|XOD|
|quantityUnitCode|XOE|
|quantityUnitCode|XOF|
|quantityUnitCode|XOK|
|quantityUnitCode|XOT|
|quantityUnitCode|XOU|
|quantityUnitCode|XP2|
|quantityUnitCode|XPA|
|quantityUnitCode|XPB|
|quantityUnitCode|XPC|
|quantityUnitCode|XPD|
|quantityUnitCode|XPE|
|quantityUnitCode|XPF|
|quantityUnitCode|XPG|
|quantityUnitCode|XPH|
|quantityUnitCode|XPI|
|quantityUnitCode|XPJ|
|quantityUnitCode|XPK|
|quantityUnitCode|XPL|
|quantityUnitCode|XPN|
|quantityUnitCode|XPO|
|quantityUnitCode|XPP|
|quantityUnitCode|XPR|
|quantityUnitCode|XPT|
|quantityUnitCode|XPU|
|quantityUnitCode|XPV|
|quantityUnitCode|XPX|
|quantityUnitCode|XPY|
|quantityUnitCode|XPZ|
|quantityUnitCode|XQA|
|quantityUnitCode|XQB|
|quantityUnitCode|XQC|
|quantityUnitCode|XQD|
|quantityUnitCode|XQF|
|quantityUnitCode|XQG|
|quantityUnitCode|XQH|
|quantityUnitCode|XQJ|
|quantityUnitCode|XQK|
|quantityUnitCode|XQL|
|quantityUnitCode|XQM|
|quantityUnitCode|XQN|
|quantityUnitCode|XQP|
|quantityUnitCode|XQQ|
|quantityUnitCode|XQR|
|quantityUnitCode|XQS|
|quantityUnitCode|XRD|
|quantityUnitCode|XRG|
|quantityUnitCode|XRJ|
|quantityUnitCode|XRK|
|quantityUnitCode|XRL|
|quantityUnitCode|XRO|
|quantityUnitCode|XRT|
|quantityUnitCode|XRZ|
|quantityUnitCode|XSA|
|quantityUnitCode|XSB|
|quantityUnitCode|XSC|
|quantityUnitCode|XSD|
|quantityUnitCode|XSE|
|quantityUnitCode|XSH|
|quantityUnitCode|XSI|
|quantityUnitCode|XSK|
|quantityUnitCode|XSL|
|quantityUnitCode|XSM|
|quantityUnitCode|XSO|
|quantityUnitCode|XSP|
|quantityUnitCode|XSS|
|quantityUnitCode|XST|
|quantityUnitCode|XSU|
|quantityUnitCode|XSV|
|quantityUnitCode|XSW|
|quantityUnitCode|XSY|
|quantityUnitCode|XSZ|
|quantityUnitCode|XT1|
|quantityUnitCode|XTB|
|quantityUnitCode|XTC|
|quantityUnitCode|XTD|
|quantityUnitCode|XTE|
|quantityUnitCode|XTG|
|quantityUnitCode|XTI|
|quantityUnitCode|XTK|
|quantityUnitCode|XTL|
|quantityUnitCode|XTN|
|quantityUnitCode|XTO|
|quantityUnitCode|XTR|
|quantityUnitCode|XTS|
|quantityUnitCode|XTT|
|quantityUnitCode|XTU|
|quantityUnitCode|XTV|
|quantityUnitCode|XTW|
|quantityUnitCode|XTY|
|quantityUnitCode|XTZ|
|quantityUnitCode|XUC|
|quantityUnitCode|XUN|
|quantityUnitCode|XVA|
|quantityUnitCode|XVG|
|quantityUnitCode|XVI|
|quantityUnitCode|XVK|
|quantityUnitCode|XVL|
|quantityUnitCode|XVO|
|quantityUnitCode|XVP|
|quantityUnitCode|XVQ|
|quantityUnitCode|XVN|
|quantityUnitCode|XVR|
|quantityUnitCode|XVS|
|quantityUnitCode|XVY|
|quantityUnitCode|XWA|
|quantityUnitCode|XWB|
|quantityUnitCode|XWC|
|quantityUnitCode|XWD|
|quantityUnitCode|XWF|
|quantityUnitCode|XWG|
|quantityUnitCode|XWH|
|quantityUnitCode|XWJ|
|quantityUnitCode|XWK|
|quantityUnitCode|XWL|
|quantityUnitCode|XWM|
|quantityUnitCode|XWN|
|quantityUnitCode|XWP|
|quantityUnitCode|XWQ|
|quantityUnitCode|XWR|
|quantityUnitCode|XWS|
|quantityUnitCode|XWT|
|quantityUnitCode|XWU|
|quantityUnitCode|XWV|
|quantityUnitCode|XWW|
|quantityUnitCode|XWX|
|quantityUnitCode|XWY|
|quantityUnitCode|XWZ|
|quantityUnitCode|XXA|
|quantityUnitCode|XXB|
|quantityUnitCode|XXC|
|quantityUnitCode|XXD|
|quantityUnitCode|XXF|
|quantityUnitCode|XXG|
|quantityUnitCode|XXH|
|quantityUnitCode|XXJ|
|quantityUnitCode|XXK|
|quantityUnitCode|XYA|
|quantityUnitCode|XYB|
|quantityUnitCode|XYC|
|quantityUnitCode|XYD|
|quantityUnitCode|XYF|
|quantityUnitCode|XYG|
|quantityUnitCode|XYH|
|quantityUnitCode|XYJ|
|quantityUnitCode|XYK|
|quantityUnitCode|XYL|
|quantityUnitCode|XYM|
|quantityUnitCode|XYN|
|quantityUnitCode|XYP|
|quantityUnitCode|XYQ|
|quantityUnitCode|XYR|
|quantityUnitCode|XYS|
|quantityUnitCode|XYT|
|quantityUnitCode|XYV|
|quantityUnitCode|XYW|
|quantityUnitCode|XYX|
|quantityUnitCode|XYY|
|quantityUnitCode|XYZ|
|quantityUnitCode|XZA|
|quantityUnitCode|XZB|
|quantityUnitCode|XZC|
|quantityUnitCode|XZD|
|quantityUnitCode|XZF|
|quantityUnitCode|XZG|
|quantityUnitCode|XZH|
|quantityUnitCode|XZJ|
|quantityUnitCode|XZK|
|quantityUnitCode|XZL|
|quantityUnitCode|XZM|
|quantityUnitCode|XZN|
|quantityUnitCode|XZP|
|quantityUnitCode|XZQ|
|quantityUnitCode|XZR|
|quantityUnitCode|XZS|
|quantityUnitCode|XZT|
|quantityUnitCode|XZU|
|quantityUnitCode|XZV|
|quantityUnitCode|XZW|
|quantityUnitCode|XZX|
|quantityUnitCode|XZY|
|quantityUnitCode|XZZ|
|quantityUnitCode|04|
|quantityUnitCode|05|
|quantityUnitCode|08|
|quantityUnitCode|16|
|quantityUnitCode|17|
|quantityUnitCode|18|
|quantityUnitCode|19|
|quantityUnitCode|26|
|quantityUnitCode|29|
|quantityUnitCode|30|
|quantityUnitCode|31|
|quantityUnitCode|32|
|quantityUnitCode|36|
|quantityUnitCode|43|
|quantityUnitCode|44|
|quantityUnitCode|45|
|quantityUnitCode|46|
|quantityUnitCode|47|
|quantityUnitCode|48|
|quantityUnitCode|53|
|quantityUnitCode|54|
|quantityUnitCode|62|
|quantityUnitCode|63|
|quantityUnitCode|64|
|quantityUnitCode|66|
|quantityUnitCode|69|
|quantityUnitCode|71|
|quantityUnitCode|72|
|quantityUnitCode|73|
|quantityUnitCode|76|
|quantityUnitCode|78|
|quantityUnitCode|84|
|quantityUnitCode|90|
|quantityUnitCode|92|
|quantityUnitCode|93|
|quantityUnitCode|94|
|quantityUnitCode|95|
|quantityUnitCode|96|
|quantityUnitCode|97|
|quantityUnitCode|98|
|quantityUnitCode|1A|
|quantityUnitCode|1B|
|quantityUnitCode|1C|
|quantityUnitCode|1D|
|quantityUnitCode|1E|
|quantityUnitCode|1F|
|quantityUnitCode|1G|
|quantityUnitCode|1H|
|quantityUnitCode|1J|
|quantityUnitCode|1K|
|quantityUnitCode|1L|
|quantityUnitCode|1M|
|quantityUnitCode|1X|
|quantityUnitCode|2V|
|quantityUnitCode|2W|
|quantityUnitCode|3E|
|quantityUnitCode|3G|
|quantityUnitCode|3H|
|quantityUnitCode|3I|
|quantityUnitCode|4A|
|quantityUnitCode|4B|
|quantityUnitCode|4E|
|quantityUnitCode|5C|
|quantityUnitCode|5F|
|quantityUnitCode|5G|
|quantityUnitCode|5H|
|quantityUnitCode|5I|
|quantityUnitCode|5K|
|quantityUnitCode|5P|
|quantityUnitCode|5Q|
|quantityUnitCode|A1|
|quantityUnitCode|A25|
|quantityUnitCode|A50|
|quantityUnitCode|A51|
|quantityUnitCode|A52|
|quantityUnitCode|A57|
|quantityUnitCode|A58|
|quantityUnitCode|A60|
|quantityUnitCode|A61|
|quantityUnitCode|A62|
|quantityUnitCode|A63|
|quantityUnitCode|A64|
|quantityUnitCode|A65|
|quantityUnitCode|A66|
|quantityUnitCode|A67|
|quantityUnitCode|A77|
|quantityUnitCode|A78|
|quantityUnitCode|A79|
|quantityUnitCode|A80|
|quantityUnitCode|A81|
|quantityUnitCode|A82|
|quantityUnitCode|A83|
|quantityUnitCode|AJ|
|quantityUnitCode|AM|
|quantityUnitCode|AP|
|quantityUnitCode|AR|
|quantityUnitCode|ARE|
|quantityUnitCode|ATT|
|quantityUnitCode|AV|
|quantityUnitCode|AW|
|quantityUnitCode|B0|
|quantityUnitCode|B2|
|quantityUnitCode|B36|
|quantityUnitCode|B37|
|quantityUnitCode|B38|
|quantityUnitCode|B39|
|quantityUnitCode|B40|
|quantityUnitCode|B5|
|quantityUnitCode|B51|
|quantityUnitCode|B6|
|quantityUnitCode|B65|
|quantityUnitCode|B9|
|quantityUnitCode|BD|
|quantityUnitCode|BE|
|quantityUnitCode|BG|
|quantityUnitCode|BH|
|quantityUnitCode|BJ|
|quantityUnitCode|BK|
|quantityUnitCode|BL|
|quantityUnitCode|BO|
|quantityUnitCode|BR|
|quantityUnitCode|BT|
|quantityUnitCode|BW|
|quantityUnitCode|BX|
|quantityUnitCode|BZ|
|quantityUnitCode|C1|
|quantityUnitCode|C2|
|quantityUnitCode|C4|
|quantityUnitCode|C5|
|quantityUnitCode|C6|
|quantityUnitCode|C77|
|quantityUnitCode|C98|
|quantityUnitCode|CA|
|quantityUnitCode|CH|
|quantityUnitCode|CJ|
|quantityUnitCode|CK|
|quantityUnitCode|CL|
|quantityUnitCode|CO|
|quantityUnitCode|CQ|
|quantityUnitCode|CR|
|quantityUnitCode|CS|
|quantityUnitCode|CT|
|quantityUnitCode|CU|
|quantityUnitCode|CV|
|quantityUnitCode|CY|
|quantityUnitCode|CZ|
|quantityUnitCode|D14|
|quantityUnitCode|D28|
|quantityUnitCode|D35|
|quantityUnitCode|D37|
|quantityUnitCode|D38|
|quantityUnitCode|D39|
|quantityUnitCode|D40|
|quantityUnitCode|D64|
|quantityUnitCode|D66|
|quantityUnitCode|D67|
|quantityUnitCode|D7|
|quantityUnitCode|D70|
|quantityUnitCode|D71|
|quantityUnitCode|D72|
|quantityUnitCode|D75|
|quantityUnitCode|D76|
|quantityUnitCode|D79|
|quantityUnitCode|D8|
|quantityUnitCode|D9|
|quantityUnitCode|D90|
|quantityUnitCode|D92|
|quantityUnitCode|D96|
|quantityUnitCode|D97|
|quantityUnitCode|D98|
|quantityUnitCode|D99|
|quantityUnitCode|DC|
|quantityUnitCode|DE|
|quantityUnitCode|DI|
|quantityUnitCode|DQ|
|quantityUnitCode|DR|
|quantityUnitCode|DRM|
|quantityUnitCode|DS|
|quantityUnitCode|DU|
|quantityUnitCode|DX|
|quantityUnitCode|DY|
|quantityUnitCode|E2|
|quantityUnitCode|E3|
|quantityUnitCode|E5|
|quantityUnitCode|EC|
|quantityUnitCode|EP|
|quantityUnitCode|EV|
|quantityUnitCode|F1|
|quantityUnitCode|F9|
|quantityUnitCode|FB|
|quantityUnitCode|FD|
|quantityUnitCode|FE|
|quantityUnitCode|FG|
|quantityUnitCode|FM|
|quantityUnitCode|G7|
|quantityUnitCode|GC|
|quantityUnitCode|GD|
|quantityUnitCode|GH|
|quantityUnitCode|GK|
|quantityUnitCode|GN|
|quantityUnitCode|GRT|
|quantityUnitCode|GT|
|quantityUnitCode|GW|
|quantityUnitCode|GY|
|quantityUnitCode|GZ|
|quantityUnitCode|H1|
|quantityUnitCode|H2|
|quantityUnitCode|HAR|
|quantityUnitCode|HD|
|quantityUnitCode|HE|
|quantityUnitCode|HF|
|quantityUnitCode|HI|
|quantityUnitCode|HJ|
|quantityUnitCode|HK|
|quantityUnitCode|HL|
|quantityUnitCode|HN|
|quantityUnitCode|HO|
|quantityUnitCode|HP|
|quantityUnitCode|HS|
|quantityUnitCode|HT|
|quantityUnitCode|HY|
|quantityUnitCode|IC|
|quantityUnitCode|IF|
|quantityUnitCode|II|
|quantityUnitCode|IL|
|quantityUnitCode|IM|
|quantityUnitCode|IP|
|quantityUnitCode|IT|
|quantityUnitCode|JB|
|quantityUnitCode|JG|
|quantityUnitCode|JO|
|quantityUnitCode|JR|
|quantityUnitCode|K5|
|quantityUnitCode|KD|
|quantityUnitCode|KF|
|quantityUnitCode|KG|
|quantityUnitCode|KS|
|quantityUnitCode|KTM|
|quantityUnitCode|LC|
|quantityUnitCode|LE|
|quantityUnitCode|LI|
|quantityUnitCode|LJ|
|quantityUnitCode|LX|
|quantityUnitCode|M0|
|quantityUnitCode|MA|
|quantityUnitCode|MF|
|quantityUnitCode|MK|
|quantityUnitCode|MQ|
|quantityUnitCode|MT|
|quantityUnitCode|MV|
|quantityUnitCode|N2|
|quantityUnitCode|NB|
|quantityUnitCode|NBB|
|quantityUnitCode|NC|
|quantityUnitCode|ND|
|quantityUnitCode|NE|
|quantityUnitCode|NG|
|quantityUnitCode|NH|
|quantityUnitCode|NI|
|quantityUnitCode|NJ|
|quantityUnitCode|NN|
|quantityUnitCode|NPL|
|quantityUnitCode|NPR|
|quantityUnitCode|NQ|
|quantityUnitCode|NR|
|quantityUnitCode|NRL|
|quantityUnitCode|NTT|
|quantityUnitCode|NV|
|quantityUnitCode|NY|
|quantityUnitCode|OP|
|quantityUnitCode|OZ|
|quantityUnitCode|P0|
|quantityUnitCode|P3|
|quantityUnitCode|P4|
|quantityUnitCode|P6|
|quantityUnitCode|P7|
|quantityUnitCode|P8|
|quantityUnitCode|P9|
|quantityUnitCode|PA|
|quantityUnitCode|PB|
|quantityUnitCode|PE|
|quantityUnitCode|PF|
|quantityUnitCode|PG|
|quantityUnitCode|PK|
|quantityUnitCode|PL|
|quantityUnitCode|PM|
|quantityUnitCode|PN|
|quantityUnitCode|PT|
|quantityUnitCode|PU|
|quantityUnitCode|PV|
|quantityUnitCode|PW|
|quantityUnitCode|PY|
|quantityUnitCode|PZ|
|quantityUnitCode|QD|
|quantityUnitCode|QH|
|quantityUnitCode|QK|
|quantityUnitCode|QT|
|quantityUnitCode|R4|
|quantityUnitCode|RA|
|quantityUnitCode|RD|
|quantityUnitCode|RG|
|quantityUnitCode|RK|
|quantityUnitCode|RL|
|quantityUnitCode|RN|
|quantityUnitCode|RO|
|quantityUnitCode|RS|
|quantityUnitCode|RU|
|quantityUnitCode|S5|
|quantityUnitCode|S6|
|quantityUnitCode|S7|
|quantityUnitCode|S8|
|quantityUnitCode|SA|
|quantityUnitCode|SD|
|quantityUnitCode|SE|
|quantityUnitCode|SHT|
|quantityUnitCode|SK|
|quantityUnitCode|SL|
|quantityUnitCode|SN|
|quantityUnitCode|SO|
|quantityUnitCode|SP|
|quantityUnitCode|SS|
|quantityUnitCode|SST|
|quantityUnitCode|ST|
|quantityUnitCode|SV|
|quantityUnitCode|T1|
|quantityUnitCode|T4|
|quantityUnitCode|T5|
|quantityUnitCode|T6|
|quantityUnitCode|T7|
|quantityUnitCode|T8|
|quantityUnitCode|TA|
|quantityUnitCode|TC|
|quantityUnitCode|TD|
|quantityUnitCode|TE|
|quantityUnitCode|TF|
|quantityUnitCode|TJ|
|quantityUnitCode|TK|
|quantityUnitCode|TL|
|quantityUnitCode|TN|
|quantityUnitCode|TQ|
|quantityUnitCode|TR|
|quantityUnitCode|TS|
|quantityUnitCode|TSD|
|quantityUnitCode|TSH|
|quantityUnitCode|TT|
|quantityUnitCode|TU|
|quantityUnitCode|TV|
|quantityUnitCode|TW|
|quantityUnitCode|TY|
|quantityUnitCode|UA|
|quantityUnitCode|UD|
|quantityUnitCode|UE|
|quantityUnitCode|UF|
|quantityUnitCode|UH|
|quantityUnitCode|UM|
|quantityUnitCode|VI|
|quantityUnitCode|VQ|
|quantityUnitCode|VS|
|quantityUnitCode|W4|
|quantityUnitCode|WH|
|quantityUnitCode|WI|
|quantityUnitCode|WR|
|quantityUnitCode|WW|
|quantityUnitCode|YL|
|quantityUnitCode|YT|
|quantityUnitCode|Z1|
|quantityUnitCode|Z2|
|quantityUnitCode|Z3|
|quantityUnitCode|Z4|
|quantityUnitCode|Z5|
|quantityUnitCode|Z6|
|quantityUnitCode|Z8|

<h2 id="tocS_InvoiceRecipient">InvoiceRecipient</h2>
<!-- backwards compatibility -->
<a id="schemainvoicerecipient"></a>
<a id="schema_InvoiceRecipient"></a>
<a id="tocSinvoicerecipient"></a>
<a id="tocsinvoicerecipient"></a>

```json
{
  "emails": [
    "user@example.com"
  ],
  "publicIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ]
}
```

The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emails|[string(email)]|false|none|The email addresses the invoice should be sent to if none of the other identifiers can be used|
|publicIdentifiers|[PublicIdentifiers](#schemapublicidentifiers)|false|none|A list of public identifiers that uniquely identify this customer.|

<h2 id="tocS_InvoiceRecipientPreflight">InvoiceRecipientPreflight</h2>
<!-- backwards compatibility -->
<a id="schemainvoicerecipientpreflight"></a>
<a id="schema_InvoiceRecipientPreflight"></a>
<a id="tocSinvoicerecipientpreflight"></a>
<a id="tocsinvoicerecipientpreflight"></a>

```json
{
  "publicIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ]
}
```

Identifies the invoice recipient to preflight

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|publicIdentifiers|[PublicIdentifiers](#schemapublicidentifiers)|false|none|A list of public identifiers that uniquely identify this customer.|

<h2 id="tocS_InvoiceResponseClarification">InvoiceResponseClarification</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceresponseclarification"></a>
<a id="schema_InvoiceResponseClarification"></a>
<a id="tocSinvoiceresponseclarification"></a>
<a id="tocsinvoiceresponseclarification"></a>

```json
{
  "clarification": "string",
  "clarificationCode": "REF",
  "clarificationCodeType": "OPStatusReason"
}
```

A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clarification|string|false|none|A textual description of the clarification|
|clarificationCode|string|true|none|The code for the clarification. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusReason/ and https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusAction/|
|clarificationCodeType|string|true|none|The type of the clarification.|

#### Enumerated Values

|Property|Value|
|---|---|
|clarificationCode|REF|
|clarificationCode|LEG|
|clarificationCode|REC|
|clarificationCode|QUA|
|clarificationCode|DEL|
|clarificationCode|PRI|
|clarificationCode|QTY|
|clarificationCode|ITM|
|clarificationCode|PAY|
|clarificationCode|UNR|
|clarificationCode|FIN|
|clarificationCode|OTH|
|clarificationCode|PIN|
|clarificationCode|NIN|
|clarificationCode|CNF|
|clarificationCode|CNP|
|clarificationCode|CNA|
|clarificationCodeType|OPStatusReason|
|clarificationCodeType|OPStatusAction|

<h2 id="tocS_InvoiceSubmission">InvoiceSubmission</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesubmission"></a>
<a id="schema_InvoiceSubmission"></a>
<a id="tocSinvoicesubmission"></a>
<a id="tocsinvoicesubmission"></a>

```json
{
  "attachments": [
    {
      "description": "string",
      "document": "string",
      "documentId": "string",
      "filename": "string",
      "mimeType": "application/pdf",
      "primaryImage": false
    }
  ],
  "createPrimaryImage": true,
  "document": "string",
  "documentUrl": "http://example.com",
  "idempotencyGuid": "stringstringstringstringstringstring",
  "invoice": {
    "accountingCost": "string",
    "accountingCurrencyTaxAmount": 0,
    "accountingCurrencyTaxAmountCurrency": "AED",
    "accountingCustomerParty": {
      "party": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "companyName": "string",
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      },
      "publicIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ]
    },
    "accountingSupplierParty": {
      "party": {
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      }
    },
    "allowanceCharges": [
      {
        "amountExcludingTax": 0,
        "amountExcludingVat": 0,
        "baseAmountExcludingTax": 0,
        "reason": "Agreed settlement",
        "reasonCode": "string",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "amountIncludingVat": 0,
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "billingReference": "string",
    "buyerReference": "string",
    "consumerTaxMode": false,
    "contractDocumentReference": "string",
    "delivery": {
      "actualDate": "string",
      "deliveryLocation": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "id": "string",
        "locationName": "string",
        "schemeAgencyId": "string",
        "schemeId": "string"
      },
      "deliveryParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "deliveryPartyName": "string",
      "quantity": 1,
      "requestedDeliveryPeriod": "string",
      "shippingMarks": "string"
    },
    "documentCurrencyCode": "AED",
    "dueDate": "string",
    "invoiceLines": [
      {
        "accountingCost": "string",
        "additionalItemProperties": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "allowanceCharge": 0,
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "baseAmountExcludingTax": 0,
            "reason": "string",
            "reasonCode": "string"
          }
        ],
        "amountExcludingVat": 0,
        "buyersItemIdentification": "string",
        "description": "string",
        "invoicePeriod": "string",
        "itemPrice": 1,
        "lineId": "string",
        "name": "string",
        "note": "string",
        "orderLineReferenceLineId": "string",
        "quantity": 1,
        "quantityUnitCode": "C62",
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "sellersItemIdentification": "string",
        "standardItemIdentification": "string",
        "standardItemIdentificationSchemeAgencyId": "9",
        "standardItemIdentificationSchemeId": "GTIN",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "invoiceNumber": "string",
    "invoicePeriod": "string",
    "invoiceType": "380",
    "issueDate": "string",
    "issueReasons": [
      "string"
    ],
    "note": "string",
    "orderReference": "string",
    "paymentMeansArray": [
      {
        "account": "string",
        "amount": 0,
        "branche_code": "string",
        "code": "credit_transfer",
        "holder": "string",
        "mandate": "string",
        "network": "string",
        "paymentId": "string"
      }
    ],
    "paymentMeansBic": "string",
    "paymentMeansCode": "online_payment_service",
    "paymentMeansIban": "string",
    "paymentMeansPaymentId": "string",
    "paymentTerms": {
      "note": "string"
    },
    "preferredInvoiceType": "prefer_autodetect",
    "prepaidAmount": 0,
    "projectReference": "string",
    "references": [
      {
        "documentId": "string",
        "documentType": "purchase_order",
        "issueDate": "string",
        "lineId": "string"
      }
    ],
    "salesOrderId": "string",
    "selfBillingMode": false,
    "taxExemptReason": "export",
    "taxPointDate": "string",
    "taxSubtotals": [
      {
        "category": "standard",
        "country": "AD",
        "percentage": 0,
        "taxAmount": 0,
        "taxableAmount": 0
      }
    ],
    "taxSystem": "tax_line_amounts",
    "taxesDutiesFees": [
      {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      }
    ],
    "transactionType": "b2b",
    "ublExtensions": [
      "string"
    ],
    "vatReverseCharge": false,
    "x2y": "b2b"
  },
  "invoiceData": {
    "conversionStrategy": "ubl",
    "document": "string"
  },
  "invoiceRecipient": {
    "emails": [
      "user@example.com"
    ],
    "publicIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ]
  },
  "legalEntityId": 0,
  "legalSupplierId": 0,
  "mode": "direct",
  "routing": {
    "clearWithoutSending": false,
    "eIdentifiers": [
      {
        "id": "string",
        "scheme": "string"
      }
    ],
    "emails": [
      "user@example.com"
    ]
  },
  "supplierId": 0
}
```

DEPRECATED. The invoice you want Storecove to process, with some meta-data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[Attachment](#schemaattachment)]|false|none|An array of attachments. You may provide up to 10 attchments, but the total size must not exceed 10MB after Base64 encoding.|
|createPrimaryImage|boolean|false|none|DEPRECATED. In the future we will no longer support creating PDF invoices. Whether or not to create a primary image (PDF) if one is not provided. For customers who started from December 1st 2022, the default is false. For customers who started before that, the default is true.|
|document|string|false|none|DEPRECATED. Use attachments.|
|documentUrl|string(uri)|false|none|DEPRECATED. Use attachments.|
|idempotencyGuid|string|false|none|A guid that you generated for this InvoiceSubmission to achieve idempotency. If you submit multiple documents with the same idempotencyGuid, only the first one will be processed.|
|invoice|[Invoice](#schemainvoice)|false|none|The invoice to send. Provide either invoice, or invoiceData, but not both.|
|invoiceData|[InvoiceData](#schemainvoicedata)|false|none|The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.|
|invoiceRecipient|[InvoiceRecipient](#schemainvoicerecipient)|false|none|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|
|legalEntityId|integer|false|none|The id of the LegalEntity this invoice should be sent for.|
|legalSupplierId|integer|false|none|DEPRECATED. Use legalEntityId|
|mode|string|false|none|DEPRECATED.|
|routing|[Routing](#schemarouting)|false|none|The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.|
|supplierId|integer|false|none|DEPRECATED.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|direct|

<h2 id="tocS_InvoiceSubmissionActionEvidence">InvoiceSubmissionActionEvidence</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesubmissionactionevidence"></a>
<a id="schema_InvoiceSubmissionActionEvidence"></a>
<a id="tocSinvoicesubmissionactionevidence"></a>
<a id="tocsinvoicesubmissionactionevidence"></a>

```json
{
  "receiver_response": "string",
  "transmission_datetime": "string",
  "transmission_result": "unknown",
  "transmission_type": "email",
  "transmitted_document": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|receiver_response|string|false|none|The response the receiver sent.|
|transmission_datetime|string|false|none|The DateTime of the transmission, as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z.|
|transmission_result|string|false|none|The result of this transmission.|
|transmission_type|string|false|none|How the document was transmitted.|
|transmitted_document|string|false|none|The document that was transmitted.|

#### Enumerated Values

|Property|Value|
|---|---|
|transmission_result|unknown|
|transmission_result|accepted|
|transmission_result|rejected|
|transmission_result|send_error|
|transmission_result|internal_error|
|transmission_type|email|
|transmission_type|edi|
|transmission_type|as2|
|transmission_type|peppol|
|transmission_type|sandbox|

<h2 id="tocS_InvoiceSubmissionEvidence">InvoiceSubmissionEvidence</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesubmissionevidence"></a>
<a id="schema_InvoiceSubmissionEvidence"></a>
<a id="tocSinvoicesubmissionevidence"></a>
<a id="tocsinvoicesubmissionevidence"></a>

```json
{
  "actions": [
    {
      "receiver_response": "string",
      "transmission_datetime": "string",
      "transmission_result": "unknown",
      "transmission_type": "email",
      "transmitted_document": "string"
    }
  ],
  "guid": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[[InvoiceSubmissionActionEvidence](#schemainvoicesubmissionactionevidence)]|false|none|An array of actions taken to deliver the document.|
|guid|string|false|none|The guid for the InvoiceSubmission.|
|status|string|false|none|The overall status for this InvoiceSubmission.|

<h2 id="tocS_InvoiceSubmissionResult">InvoiceSubmissionResult</h2>
<!-- backwards compatibility -->
<a id="schemainvoicesubmissionresult"></a>
<a id="schema_InvoiceSubmissionResult"></a>
<a id="tocSinvoicesubmissionresult"></a>
<a id="tocsinvoicesubmissionresult"></a>

```json
{
  "guid": "string"
}
```

The result of an invoice submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string|false|none|A (V4) GUID for the invoice submission|

<h2 id="tocS_LegalEntity">LegalEntity</h2>
<!-- backwards compatibility -->
<a id="schemalegalentity"></a>
<a id="schema_LegalEntity"></a>
<a id="tocSlegalentity"></a>
<a id="tocslegalentity"></a>

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string",
  "peppol_identifiers": [
    {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "additional_tax_identifiers": [
    {
      "country": "st",
      "county": "st",
      "id": 0,
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "api_keys": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisements|[string]|false|none|A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.|
|city|string|false|none|The city.|
|country|[Country](#schemacountry)|false|none|An ISO 3166-1 alpha-2 country code.|
|county|string|false|none|County, if applicable|
|id|integer(int64)|false|none|The Storecove assigned id for the LegalEntity.|
|line1|string|false|none|The first address line.|
|line2|string|false|none|The second address line, if applicable|
|party_name|string|false|none|The name of the company.|
|public|boolean|false|none|Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.|
|rea|[Rea](#schemarea)|false|none|none|
|smart_inbox|string|false|none|DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity.|
|tenant_id|string|false|none|The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.|
|third_party_password|string|false|none|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|third_party_username|string|false|none|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|zip|string|false|none|The zipcode.|
|peppol_identifiers|[[PeppolIdentifier](#schemapeppolidentifier)]|false|none|none|
|additional_tax_identifiers|[[AdditionalTaxIdentifier](#schemaadditionaltaxidentifier)]|false|none|none|
|api_keys|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|advertisements|invoice|
|advertisements|invoice_response|
|advertisements|order|
|advertisements|ordering|
|advertisements|order_response|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_LegalEntityCreate">LegalEntityCreate</h2>
<!-- backwards compatibility -->
<a id="schemalegalentitycreate"></a>
<a id="schema_LegalEntityCreate"></a>
<a id="tocSlegalentitycreate"></a>
<a id="tocslegalentitycreate"></a>

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisements|[string]|false|none|A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.|
|city|string|true|none|The city.|
|country|[Country](#schemacountry)|true|none|An ISO 3166-1 alpha-2 country code.|
|county|string|false|none|County, if applicable|
|line1|string|true|none|The first address line.|
|line2|string|false|none|The second address line, if applicable|
|party_name|string|true|none|The name of the company.|
|public|boolean|false|none|Whether or not this LegalEntity is public. Public means it will be entered into the PEPPOL directory at https://directory.peppol.eu/|
|rea|[Rea](#schemarea)|false|none|none|
|tenant_id|string|false|none|The id of the tenant, to be used in case of single-tenant solutions that share webhook URLs. This property will included in webhook events.|
|third_party_password|string|false|none|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|third_party_username|string|false|none|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|zip|string|true|none|The zipcode.|

#### Enumerated Values

|Property|Value|
|---|---|
|advertisements|invoice|
|advertisements|invoice_response|
|advertisements|order|
|advertisements|ordering|
|advertisements|order_response|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_LegalEntityUpdate">LegalEntityUpdate</h2>
<!-- backwards compatibility -->
<a id="schemalegalentityupdate"></a>
<a id="schema_LegalEntityUpdate"></a>
<a id="tocSlegalentityupdate"></a>
<a id="tocslegalentityupdate"></a>

```json
{
  "advertisements": [
    "invoice"
  ],
  "city": "string",
  "country": "AD",
  "county": "string",
  "id": 0,
  "line1": "string",
  "line2": "string",
  "party_name": "string",
  "public": true,
  "rea": {
    "capital": 0,
    "identifier": "string",
    "liquidation_status": "LN",
    "partners": "SU",
    "province": "AG"
  },
  "smart_inbox": "string",
  "tenant_id": "string",
  "third_party_password": "string",
  "third_party_username": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advertisements|[string]|false|none|A list of document types to advertise. Use if this LegalEntity needs the ability to receive more than only invoice documents.|
|city|string|false|none|The city.|
|country|[Country](#schemacountry)|false|none|An ISO 3166-1 alpha-2 country code.|
|county|string|false|none|County, if applicable|
|id|integer(int64)|false|none|The Storecove assigned id for the LegalEntity.|
|line1|string|false|none|The first address line.|
|line2|string|false|none|The second address line, if applicable|
|party_name|string|false|none|The name of the company.|
|public|boolean|false|none|Whether or not this LegalEntity is public. Public means it will be listed in the PEPPOL directory at https://directory.peppol.eu/ which is normally what you want. If you have a good reason to not want the LegalEntity listed, provide false. This property is ignored when for country SG, where it is always true.|
|rea|[Rea](#schemarea)|false|none|none|
|smart_inbox|string|false|none|DEPRECATED. Use the <<_openapi_receiveddocuments_resource>> endpoint. The email address of the Smart Inbox for this LegalEntity.|
|tenant_id|string|false|none|The id of the tenant, to be used in case of multi-tenant solutions. This property will included in webhook events.|
|third_party_password|string|false|none|The password to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|third_party_username|string|false|none|The username to use to authenticate to a system through which to send the document, or to obtain tax authority approval to send it. This field is currently relevant only for India and mandatory when creating an IN LegalEntity.|
|zip|string|false|none|The zipcode.|

#### Enumerated Values

|Property|Value|
|---|---|
|advertisements|invoice|
|advertisements|invoice_response|
|advertisements|order|
|advertisements|ordering|
|advertisements|order_response|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_LineAllowanceCharge">LineAllowanceCharge</h2>
<!-- backwards compatibility -->
<a id="schemalineallowancecharge"></a>
<a id="schema_LineAllowanceCharge"></a>
<a id="tocSlineallowancecharge"></a>
<a id="tocslineallowancecharge"></a>

```json
{
  "amountExcludingTax": 0,
  "baseAmountExcludingTax": 0,
  "reason": "string",
  "reasonCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amountExcludingTax|number|true|none|The amount for the allowance or charge, excluding tax.|
|baseAmountExcludingTax|number|false|none|The base amount for the allowance or charge, excluding tax.|
|reason|string|false|none|The reason for the allowance or charge, free text|
|reasonCode|string|false|none|Do not use. Contact Storecove first if you want to use this field.|

<h2 id="tocS_LineDelivery">LineDelivery</h2>
<!-- backwards compatibility -->
<a id="schemalinedelivery"></a>
<a id="schema_LineDelivery"></a>
<a id="tocSlinedelivery"></a>
<a id="tocslinedelivery"></a>

```json
{
  "deliveryLocation": {
    "id": "string",
    "schemeId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deliveryLocation|object|false|none|none|

<h2 id="tocS_OrderLine">OrderLine</h2>
<!-- backwards compatibility -->
<a id="schemaorderline"></a>
<a id="schema_OrderLine"></a>
<a id="tocSorderline"></a>
<a id="tocsorderline"></a>

```json
{
  "accountingCost": "string",
  "additionalItemProperties": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "allowPartialDelivery": false,
  "allowanceCharges": [
    {
      "amountExcludingTax": 0,
      "baseAmountExcludingTax": 0,
      "reason": "string",
      "reasonCode": "string"
    }
  ],
  "amountExcludingTax": 0,
  "baseQuantity": 1,
  "delivery": {
    "deliveryLocation": {
      "id": "string",
      "schemeId": "string"
    }
  },
  "description": "string",
  "itemPrice": 1,
  "lineId": "string",
  "lotNumberIds": [
    "string"
  ],
  "name": "string",
  "note": "string",
  "quantity": 1,
  "quantityUnitCode": "C62",
  "references": [
    {
      "documentId": "string",
      "documentType": "purchase_order",
      "issueDate": "string",
      "lineId": "string"
    }
  ],
  "taxesDutiesFees": [
    {
      "amount": 0,
      "category": "standard",
      "country": "AD",
      "percentage": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountingCost|string|false|none|The buyer's accounting cost centre for this line.|
|additionalItemProperties|[[AdditionalItemProperty](#schemaadditionalitemproperty)]|false|none|An array of additional item properties.|
|allowPartialDelivery|boolean|false|none|Whether or not the line items must be delivered in a single shipment.|
|allowanceCharges|[[LineAllowanceCharge](#schemalineallowancecharge)]|false|none|An array of allowance charges.|
|amountExcludingTax|number|true|none|The amount excluding tax. Should equal quantity x itemPrice + allowanceCharge.|
|baseQuantity|number|false|none|The number of items the price is for.|
|delivery|[LineDelivery](#schemalinedelivery)|false|none|none|
|description|string|false|none|The description for this line.|
|itemPrice|number|false|none|The price per item (may be fractional)|
|lineId|string|true|none|The id for this invoice line.|
|lotNumberIds|[string]|false|none|An identifier for the production lot which the line items come from.|
|name|string|false|none|A short name for this line.|
|note|string|false|none|A note to add to the line|
|quantity|number|true|none|The number of items (may be fractional).|
|quantityUnitCode|string|true|none|The unit of measure that applies to the quantity. Codes for unit of packaging from UNECE Recommendation No. 21 can be used in accordance with the descriptions in the "Intro" section of UN/ECE Recommendation 20, Revision 11 (2015): The 2 character alphanumeric code values in UNECE Recommendation 21 shall be used. To avoid duplication with existing code values in UNECE Recommendation No. 20, each code value from UNECE Recommendation 21 shall be prefixed with an “X”, resulting in a 3 alphanumeric code when used as a unit of measure. Note that the following additionally allowed codes are deprecated and will be converted to C62: 04, 05, 08, 16, 17, 18, 19, 26, 29, 30, 31, 32, 36, 43, 44, 45, 46, 47, 48, 53, 54, 62, 63, 64, 66, 69, 71, 72, 73, 76, 78, 84, 90, 92, 93, 94, 95, 96, 97, 98, 1A, 1B, 1C, 1D, 1E, 1F, 1G, 1H, 1J, 1K, 1L, 1M, 1X, 2V, 2W, 3E, 3G, 3H, 3I, 4A, 4B, 4E, 5C, 5F, 5G, 5H, 5I, 5K, 5P, 5Q, A1, A25, A50, A51, A52, A57, A58, A60, A61, A62, A63, A64, A65, A66, A67, A77, A78, A79, A80, A81, A82, A83, AJ, AM, AP, AR, ARE, ATT, AV, AW, B0, B2, B36, B37, B38, B39, B40, B5, B51, B6, B65, B9, BD, BE, BG, BH, BJ, BK, BL, BO, BR, BT, BW, BX, BZ, C1, C2, C4, C5, C6, C77, C98, CA, CH, CJ, CK, CL, CO, CQ, CR, CS, CT, CU, CV, CY, CZ, D14, D28, D35, D37, D38, D39, D40, D64, D66, D67, D7, D70, D71, D72, D75, D76, D79, D8, D9, D90, D92, D96, D97, D98, D99, DC, DE, DI, DQ, DR, DRM, DS, DU, DX, DY, E2, E3, E5, EC, EP, EV, F1, F9, FB, FD, FE, FG, FM, G7, GC, GD, GH, GK, GN, GRT, GT, GW, GY, GZ, H1, H2, HAR, HD, HE, HF, HI, HJ, HK, HL, HN, HO, HP, HS, HT, HY, IC, IF, II, IL, IM, IP, IT, JB, JG, JO, JR, K5, KD, KF, KG, KS, KTM, LC, LE, LI, LJ, LX, M0, MA, MF, MK, MQ, MT, MV, N2, NB, NBB, NC, ND, NE, NG, NH, NI, NJ, NN, NPL, NPR, NQ, NR, NRL, NTT, NV, NY, OP, OZ, P0, P3, P4, P6, P7, P8, P9, PA, PB, PE, PF, PG, PK, PL, PM, PN, PT, PU, PV, PW, PY, PZ, QD, QH, QK, QT, R4, RA, RD, RG, RK, RL, RN, RO, RS, RU, S5, S6, S7, S8, SA, SD, SE, SHT, SK, SL, SN, SO, SP, SS, SST, ST, SV, T1, T4, T5, T6, T7, T8, TA, TC, TD, TE, TF, TJ, TK, TL, TN, TQ, TR, TS, TSD, TSH, TT, TU, TV, TW, TY, UA, UD, UE, UF, UH, UM, VI, VQ, VS, W4, WH, WI, WR, WW, YL, YT, Z1, Z2, Z3, Z4, Z5, Z6, Z8|
|references|[[Reference](#schemareference)]|false|none|An array of references to other documents or codes. Note that many syntaxes do not support multiple references of the same type in which case they will be concatenated with ','. Also, not all syntaxes support all documentTypes.|
|taxesDutiesFees|[[Tax](#schematax)]|false|none|An array of taxes, duties and fees for this invoice line. Multiple taxesDutiesFees items is allowed only for IN (India) and US (USA) taxes. All other countries can only have a single Tax item in this array.|

#### Enumerated Values

|Property|Value|
|---|---|
|quantityUnitCode|10|
|quantityUnitCode|11|
|quantityUnitCode|13|
|quantityUnitCode|14|
|quantityUnitCode|15|
|quantityUnitCode|20|
|quantityUnitCode|21|
|quantityUnitCode|22|
|quantityUnitCode|23|
|quantityUnitCode|24|
|quantityUnitCode|25|
|quantityUnitCode|27|
|quantityUnitCode|28|
|quantityUnitCode|33|
|quantityUnitCode|34|
|quantityUnitCode|35|
|quantityUnitCode|37|
|quantityUnitCode|38|
|quantityUnitCode|40|
|quantityUnitCode|41|
|quantityUnitCode|56|
|quantityUnitCode|57|
|quantityUnitCode|58|
|quantityUnitCode|59|
|quantityUnitCode|60|
|quantityUnitCode|61|
|quantityUnitCode|74|
|quantityUnitCode|77|
|quantityUnitCode|80|
|quantityUnitCode|81|
|quantityUnitCode|85|
|quantityUnitCode|87|
|quantityUnitCode|89|
|quantityUnitCode|91|
|quantityUnitCode|1I|
|quantityUnitCode|2A|
|quantityUnitCode|2B|
|quantityUnitCode|2C|
|quantityUnitCode|2G|
|quantityUnitCode|2H|
|quantityUnitCode|2I|
|quantityUnitCode|2J|
|quantityUnitCode|2K|
|quantityUnitCode|2L|
|quantityUnitCode|2M|
|quantityUnitCode|2N|
|quantityUnitCode|2P|
|quantityUnitCode|2Q|
|quantityUnitCode|2R|
|quantityUnitCode|2U|
|quantityUnitCode|2X|
|quantityUnitCode|2Y|
|quantityUnitCode|2Z|
|quantityUnitCode|3B|
|quantityUnitCode|3C|
|quantityUnitCode|4C|
|quantityUnitCode|4G|
|quantityUnitCode|4H|
|quantityUnitCode|4K|
|quantityUnitCode|4L|
|quantityUnitCode|4M|
|quantityUnitCode|4N|
|quantityUnitCode|4O|
|quantityUnitCode|4P|
|quantityUnitCode|4Q|
|quantityUnitCode|4R|
|quantityUnitCode|4T|
|quantityUnitCode|4U|
|quantityUnitCode|4W|
|quantityUnitCode|4X|
|quantityUnitCode|5A|
|quantityUnitCode|5B|
|quantityUnitCode|5E|
|quantityUnitCode|5J|
|quantityUnitCode|A10|
|quantityUnitCode|A11|
|quantityUnitCode|A12|
|quantityUnitCode|A13|
|quantityUnitCode|A14|
|quantityUnitCode|A15|
|quantityUnitCode|A16|
|quantityUnitCode|A17|
|quantityUnitCode|A18|
|quantityUnitCode|A19|
|quantityUnitCode|A2|
|quantityUnitCode|A20|
|quantityUnitCode|A21|
|quantityUnitCode|A22|
|quantityUnitCode|A23|
|quantityUnitCode|A24|
|quantityUnitCode|A26|
|quantityUnitCode|A27|
|quantityUnitCode|A28|
|quantityUnitCode|A29|
|quantityUnitCode|A3|
|quantityUnitCode|A30|
|quantityUnitCode|A31|
|quantityUnitCode|A32|
|quantityUnitCode|A33|
|quantityUnitCode|A34|
|quantityUnitCode|A35|
|quantityUnitCode|A36|
|quantityUnitCode|A37|
|quantityUnitCode|A38|
|quantityUnitCode|A39|
|quantityUnitCode|A4|
|quantityUnitCode|A40|
|quantityUnitCode|A41|
|quantityUnitCode|A42|
|quantityUnitCode|A43|
|quantityUnitCode|A44|
|quantityUnitCode|A45|
|quantityUnitCode|A47|
|quantityUnitCode|A48|
|quantityUnitCode|A49|
|quantityUnitCode|A5|
|quantityUnitCode|A53|
|quantityUnitCode|A54|
|quantityUnitCode|A55|
|quantityUnitCode|A56|
|quantityUnitCode|A59|
|quantityUnitCode|A6|
|quantityUnitCode|A68|
|quantityUnitCode|A69|
|quantityUnitCode|A7|
|quantityUnitCode|A70|
|quantityUnitCode|A71|
|quantityUnitCode|A73|
|quantityUnitCode|A74|
|quantityUnitCode|A75|
|quantityUnitCode|A76|
|quantityUnitCode|A8|
|quantityUnitCode|A84|
|quantityUnitCode|A85|
|quantityUnitCode|A86|
|quantityUnitCode|A87|
|quantityUnitCode|A88|
|quantityUnitCode|A89|
|quantityUnitCode|A9|
|quantityUnitCode|A90|
|quantityUnitCode|A91|
|quantityUnitCode|A93|
|quantityUnitCode|A94|
|quantityUnitCode|A95|
|quantityUnitCode|A96|
|quantityUnitCode|A97|
|quantityUnitCode|A98|
|quantityUnitCode|A99|
|quantityUnitCode|AA|
|quantityUnitCode|AB|
|quantityUnitCode|ACR|
|quantityUnitCode|ACT|
|quantityUnitCode|AD|
|quantityUnitCode|AE|
|quantityUnitCode|AH|
|quantityUnitCode|AI|
|quantityUnitCode|AK|
|quantityUnitCode|AL|
|quantityUnitCode|AMH|
|quantityUnitCode|AMP|
|quantityUnitCode|ANN|
|quantityUnitCode|APZ|
|quantityUnitCode|AQ|
|quantityUnitCode|AS|
|quantityUnitCode|ASM|
|quantityUnitCode|ASU|
|quantityUnitCode|ATM|
|quantityUnitCode|AWG|
|quantityUnitCode|AY|
|quantityUnitCode|AZ|
|quantityUnitCode|B1|
|quantityUnitCode|B10|
|quantityUnitCode|B11|
|quantityUnitCode|B12|
|quantityUnitCode|B13|
|quantityUnitCode|B14|
|quantityUnitCode|B15|
|quantityUnitCode|B16|
|quantityUnitCode|B17|
|quantityUnitCode|B18|
|quantityUnitCode|B19|
|quantityUnitCode|B20|
|quantityUnitCode|B21|
|quantityUnitCode|B22|
|quantityUnitCode|B23|
|quantityUnitCode|B24|
|quantityUnitCode|B25|
|quantityUnitCode|B26|
|quantityUnitCode|B27|
|quantityUnitCode|B28|
|quantityUnitCode|B29|
|quantityUnitCode|B3|
|quantityUnitCode|B30|
|quantityUnitCode|B31|
|quantityUnitCode|B32|
|quantityUnitCode|B33|
|quantityUnitCode|B34|
|quantityUnitCode|B35|
|quantityUnitCode|B4|
|quantityUnitCode|B41|
|quantityUnitCode|B42|
|quantityUnitCode|B43|
|quantityUnitCode|B44|
|quantityUnitCode|B45|
|quantityUnitCode|B46|
|quantityUnitCode|B47|
|quantityUnitCode|B48|
|quantityUnitCode|B49|
|quantityUnitCode|B50|
|quantityUnitCode|B52|
|quantityUnitCode|B53|
|quantityUnitCode|B54|
|quantityUnitCode|B55|
|quantityUnitCode|B56|
|quantityUnitCode|B57|
|quantityUnitCode|B58|
|quantityUnitCode|B59|
|quantityUnitCode|B60|
|quantityUnitCode|B61|
|quantityUnitCode|B62|
|quantityUnitCode|B63|
|quantityUnitCode|B64|
|quantityUnitCode|B66|
|quantityUnitCode|B67|
|quantityUnitCode|B68|
|quantityUnitCode|B69|
|quantityUnitCode|B7|
|quantityUnitCode|B70|
|quantityUnitCode|B71|
|quantityUnitCode|B72|
|quantityUnitCode|B73|
|quantityUnitCode|B74|
|quantityUnitCode|B75|
|quantityUnitCode|B76|
|quantityUnitCode|B77|
|quantityUnitCode|B78|
|quantityUnitCode|B79|
|quantityUnitCode|B8|
|quantityUnitCode|B80|
|quantityUnitCode|B81|
|quantityUnitCode|B82|
|quantityUnitCode|B83|
|quantityUnitCode|B84|
|quantityUnitCode|B85|
|quantityUnitCode|B86|
|quantityUnitCode|B87|
|quantityUnitCode|B88|
|quantityUnitCode|B89|
|quantityUnitCode|B90|
|quantityUnitCode|B91|
|quantityUnitCode|B92|
|quantityUnitCode|B93|
|quantityUnitCode|B94|
|quantityUnitCode|B95|
|quantityUnitCode|B96|
|quantityUnitCode|B97|
|quantityUnitCode|B98|
|quantityUnitCode|B99|
|quantityUnitCode|BAR|
|quantityUnitCode|BB|
|quantityUnitCode|BFT|
|quantityUnitCode|BHP|
|quantityUnitCode|BIL|
|quantityUnitCode|BLD|
|quantityUnitCode|BLL|
|quantityUnitCode|BP|
|quantityUnitCode|BPM|
|quantityUnitCode|BQL|
|quantityUnitCode|BTU|
|quantityUnitCode|BUA|
|quantityUnitCode|BUI|
|quantityUnitCode|C0|
|quantityUnitCode|C10|
|quantityUnitCode|C11|
|quantityUnitCode|C12|
|quantityUnitCode|C13|
|quantityUnitCode|C14|
|quantityUnitCode|C15|
|quantityUnitCode|C16|
|quantityUnitCode|C17|
|quantityUnitCode|C18|
|quantityUnitCode|C19|
|quantityUnitCode|C20|
|quantityUnitCode|C21|
|quantityUnitCode|C22|
|quantityUnitCode|C23|
|quantityUnitCode|C24|
|quantityUnitCode|C25|
|quantityUnitCode|C26|
|quantityUnitCode|C27|
|quantityUnitCode|C28|
|quantityUnitCode|C29|
|quantityUnitCode|C3|
|quantityUnitCode|C30|
|quantityUnitCode|C31|
|quantityUnitCode|C32|
|quantityUnitCode|C33|
|quantityUnitCode|C34|
|quantityUnitCode|C35|
|quantityUnitCode|C36|
|quantityUnitCode|C37|
|quantityUnitCode|C38|
|quantityUnitCode|C39|
|quantityUnitCode|C40|
|quantityUnitCode|C41|
|quantityUnitCode|C42|
|quantityUnitCode|C43|
|quantityUnitCode|C44|
|quantityUnitCode|C45|
|quantityUnitCode|C46|
|quantityUnitCode|C47|
|quantityUnitCode|C48|
|quantityUnitCode|C49|
|quantityUnitCode|C50|
|quantityUnitCode|C51|
|quantityUnitCode|C52|
|quantityUnitCode|C53|
|quantityUnitCode|C54|
|quantityUnitCode|C55|
|quantityUnitCode|C56|
|quantityUnitCode|C57|
|quantityUnitCode|C58|
|quantityUnitCode|C59|
|quantityUnitCode|C60|
|quantityUnitCode|C61|
|quantityUnitCode|C62|
|quantityUnitCode|C63|
|quantityUnitCode|C64|
|quantityUnitCode|C65|
|quantityUnitCode|C66|
|quantityUnitCode|C67|
|quantityUnitCode|C68|
|quantityUnitCode|C69|
|quantityUnitCode|C7|
|quantityUnitCode|C70|
|quantityUnitCode|C71|
|quantityUnitCode|C72|
|quantityUnitCode|C73|
|quantityUnitCode|C74|
|quantityUnitCode|C75|
|quantityUnitCode|C76|
|quantityUnitCode|C78|
|quantityUnitCode|C79|
|quantityUnitCode|C8|
|quantityUnitCode|C80|
|quantityUnitCode|C81|
|quantityUnitCode|C82|
|quantityUnitCode|C83|
|quantityUnitCode|C84|
|quantityUnitCode|C85|
|quantityUnitCode|C86|
|quantityUnitCode|C87|
|quantityUnitCode|C88|
|quantityUnitCode|C89|
|quantityUnitCode|C9|
|quantityUnitCode|C90|
|quantityUnitCode|C91|
|quantityUnitCode|C92|
|quantityUnitCode|C93|
|quantityUnitCode|C94|
|quantityUnitCode|C95|
|quantityUnitCode|C96|
|quantityUnitCode|C97|
|quantityUnitCode|C99|
|quantityUnitCode|CCT|
|quantityUnitCode|CDL|
|quantityUnitCode|CEL|
|quantityUnitCode|CEN|
|quantityUnitCode|CG|
|quantityUnitCode|CGM|
|quantityUnitCode|CKG|
|quantityUnitCode|CLF|
|quantityUnitCode|CLT|
|quantityUnitCode|CMK|
|quantityUnitCode|CMQ|
|quantityUnitCode|CMT|
|quantityUnitCode|CNP|
|quantityUnitCode|CNT|
|quantityUnitCode|COU|
|quantityUnitCode|CTG|
|quantityUnitCode|CTM|
|quantityUnitCode|CTN|
|quantityUnitCode|CUR|
|quantityUnitCode|CWA|
|quantityUnitCode|CWI|
|quantityUnitCode|D03|
|quantityUnitCode|D04|
|quantityUnitCode|D1|
|quantityUnitCode|D10|
|quantityUnitCode|D11|
|quantityUnitCode|D12|
|quantityUnitCode|D13|
|quantityUnitCode|D15|
|quantityUnitCode|D16|
|quantityUnitCode|D17|
|quantityUnitCode|D18|
|quantityUnitCode|D19|
|quantityUnitCode|D2|
|quantityUnitCode|D20|
|quantityUnitCode|D21|
|quantityUnitCode|D22|
|quantityUnitCode|D23|
|quantityUnitCode|D24|
|quantityUnitCode|D25|
|quantityUnitCode|D26|
|quantityUnitCode|D27|
|quantityUnitCode|D29|
|quantityUnitCode|D30|
|quantityUnitCode|D31|
|quantityUnitCode|D32|
|quantityUnitCode|D33|
|quantityUnitCode|D34|
|quantityUnitCode|D36|
|quantityUnitCode|D41|
|quantityUnitCode|D42|
|quantityUnitCode|D43|
|quantityUnitCode|D44|
|quantityUnitCode|D45|
|quantityUnitCode|D46|
|quantityUnitCode|D47|
|quantityUnitCode|D48|
|quantityUnitCode|D49|
|quantityUnitCode|D5|
|quantityUnitCode|D50|
|quantityUnitCode|D51|
|quantityUnitCode|D52|
|quantityUnitCode|D53|
|quantityUnitCode|D54|
|quantityUnitCode|D55|
|quantityUnitCode|D56|
|quantityUnitCode|D57|
|quantityUnitCode|D58|
|quantityUnitCode|D59|
|quantityUnitCode|D6|
|quantityUnitCode|D60|
|quantityUnitCode|D61|
|quantityUnitCode|D62|
|quantityUnitCode|D63|
|quantityUnitCode|D65|
|quantityUnitCode|D68|
|quantityUnitCode|D69|
|quantityUnitCode|D73|
|quantityUnitCode|D74|
|quantityUnitCode|D77|
|quantityUnitCode|D78|
|quantityUnitCode|D80|
|quantityUnitCode|D81|
|quantityUnitCode|D82|
|quantityUnitCode|D83|
|quantityUnitCode|D85|
|quantityUnitCode|D86|
|quantityUnitCode|D87|
|quantityUnitCode|D88|
|quantityUnitCode|D89|
|quantityUnitCode|D91|
|quantityUnitCode|D93|
|quantityUnitCode|D94|
|quantityUnitCode|D95|
|quantityUnitCode|DAA|
|quantityUnitCode|DAD|
|quantityUnitCode|DAY|
|quantityUnitCode|DB|
|quantityUnitCode|DD|
|quantityUnitCode|DEC|
|quantityUnitCode|DG|
|quantityUnitCode|DJ|
|quantityUnitCode|DLT|
|quantityUnitCode|DMA|
|quantityUnitCode|DMK|
|quantityUnitCode|DMO|
|quantityUnitCode|DMQ|
|quantityUnitCode|DMT|
|quantityUnitCode|DN|
|quantityUnitCode|DPC|
|quantityUnitCode|DPR|
|quantityUnitCode|DPT|
|quantityUnitCode|DRA|
|quantityUnitCode|DRI|
|quantityUnitCode|DRL|
|quantityUnitCode|DT|
|quantityUnitCode|DTN|
|quantityUnitCode|DWT|
|quantityUnitCode|DZN|
|quantityUnitCode|DZP|
|quantityUnitCode|E01|
|quantityUnitCode|E07|
|quantityUnitCode|E08|
|quantityUnitCode|E09|
|quantityUnitCode|E10|
|quantityUnitCode|E12|
|quantityUnitCode|E14|
|quantityUnitCode|E15|
|quantityUnitCode|E16|
|quantityUnitCode|E17|
|quantityUnitCode|E18|
|quantityUnitCode|E19|
|quantityUnitCode|E20|
|quantityUnitCode|E21|
|quantityUnitCode|E22|
|quantityUnitCode|E23|
|quantityUnitCode|E25|
|quantityUnitCode|E27|
|quantityUnitCode|E28|
|quantityUnitCode|E30|
|quantityUnitCode|E31|
|quantityUnitCode|E32|
|quantityUnitCode|E33|
|quantityUnitCode|E34|
|quantityUnitCode|E35|
|quantityUnitCode|E36|
|quantityUnitCode|E37|
|quantityUnitCode|E38|
|quantityUnitCode|E39|
|quantityUnitCode|E4|
|quantityUnitCode|E40|
|quantityUnitCode|E41|
|quantityUnitCode|E42|
|quantityUnitCode|E43|
|quantityUnitCode|E44|
|quantityUnitCode|E45|
|quantityUnitCode|E46|
|quantityUnitCode|E47|
|quantityUnitCode|E48|
|quantityUnitCode|E49|
|quantityUnitCode|E50|
|quantityUnitCode|E51|
|quantityUnitCode|E52|
|quantityUnitCode|E53|
|quantityUnitCode|E54|
|quantityUnitCode|E55|
|quantityUnitCode|E56|
|quantityUnitCode|E57|
|quantityUnitCode|E58|
|quantityUnitCode|E59|
|quantityUnitCode|E60|
|quantityUnitCode|E61|
|quantityUnitCode|E62|
|quantityUnitCode|E63|
|quantityUnitCode|E64|
|quantityUnitCode|E65|
|quantityUnitCode|E66|
|quantityUnitCode|E67|
|quantityUnitCode|E68|
|quantityUnitCode|E69|
|quantityUnitCode|E70|
|quantityUnitCode|E71|
|quantityUnitCode|E72|
|quantityUnitCode|E73|
|quantityUnitCode|E74|
|quantityUnitCode|E75|
|quantityUnitCode|E76|
|quantityUnitCode|E77|
|quantityUnitCode|E78|
|quantityUnitCode|E79|
|quantityUnitCode|E80|
|quantityUnitCode|E81|
|quantityUnitCode|E82|
|quantityUnitCode|E83|
|quantityUnitCode|E84|
|quantityUnitCode|E85|
|quantityUnitCode|E86|
|quantityUnitCode|E87|
|quantityUnitCode|E88|
|quantityUnitCode|E89|
|quantityUnitCode|E90|
|quantityUnitCode|E91|
|quantityUnitCode|E92|
|quantityUnitCode|E93|
|quantityUnitCode|E94|
|quantityUnitCode|E95|
|quantityUnitCode|E96|
|quantityUnitCode|E97|
|quantityUnitCode|E98|
|quantityUnitCode|E99|
|quantityUnitCode|EA|
|quantityUnitCode|EB|
|quantityUnitCode|EQ|
|quantityUnitCode|F01|
|quantityUnitCode|F02|
|quantityUnitCode|F03|
|quantityUnitCode|F04|
|quantityUnitCode|F05|
|quantityUnitCode|F06|
|quantityUnitCode|F07|
|quantityUnitCode|F08|
|quantityUnitCode|F10|
|quantityUnitCode|F11|
|quantityUnitCode|F12|
|quantityUnitCode|F13|
|quantityUnitCode|F14|
|quantityUnitCode|F15|
|quantityUnitCode|F16|
|quantityUnitCode|F17|
|quantityUnitCode|F18|
|quantityUnitCode|F19|
|quantityUnitCode|F20|
|quantityUnitCode|F21|
|quantityUnitCode|F22|
|quantityUnitCode|F23|
|quantityUnitCode|F24|
|quantityUnitCode|F25|
|quantityUnitCode|F26|
|quantityUnitCode|F27|
|quantityUnitCode|F28|
|quantityUnitCode|F29|
|quantityUnitCode|F30|
|quantityUnitCode|F31|
|quantityUnitCode|F32|
|quantityUnitCode|F33|
|quantityUnitCode|F34|
|quantityUnitCode|F35|
|quantityUnitCode|F36|
|quantityUnitCode|F37|
|quantityUnitCode|F38|
|quantityUnitCode|F39|
|quantityUnitCode|F40|
|quantityUnitCode|F41|
|quantityUnitCode|F42|
|quantityUnitCode|F43|
|quantityUnitCode|F44|
|quantityUnitCode|F45|
|quantityUnitCode|F46|
|quantityUnitCode|F47|
|quantityUnitCode|F48|
|quantityUnitCode|F49|
|quantityUnitCode|F50|
|quantityUnitCode|F51|
|quantityUnitCode|F52|
|quantityUnitCode|F53|
|quantityUnitCode|F54|
|quantityUnitCode|F55|
|quantityUnitCode|F56|
|quantityUnitCode|F57|
|quantityUnitCode|F58|
|quantityUnitCode|F59|
|quantityUnitCode|F60|
|quantityUnitCode|F61|
|quantityUnitCode|F62|
|quantityUnitCode|F63|
|quantityUnitCode|F64|
|quantityUnitCode|F65|
|quantityUnitCode|F66|
|quantityUnitCode|F67|
|quantityUnitCode|F68|
|quantityUnitCode|F69|
|quantityUnitCode|F70|
|quantityUnitCode|F71|
|quantityUnitCode|F72|
|quantityUnitCode|F73|
|quantityUnitCode|F74|
|quantityUnitCode|F75|
|quantityUnitCode|F76|
|quantityUnitCode|F77|
|quantityUnitCode|F78|
|quantityUnitCode|F79|
|quantityUnitCode|F80|
|quantityUnitCode|F81|
|quantityUnitCode|F82|
|quantityUnitCode|F83|
|quantityUnitCode|F84|
|quantityUnitCode|F85|
|quantityUnitCode|F86|
|quantityUnitCode|F87|
|quantityUnitCode|F88|
|quantityUnitCode|F89|
|quantityUnitCode|F90|
|quantityUnitCode|F91|
|quantityUnitCode|F92|
|quantityUnitCode|F93|
|quantityUnitCode|F94|
|quantityUnitCode|F95|
|quantityUnitCode|F96|
|quantityUnitCode|F97|
|quantityUnitCode|F98|
|quantityUnitCode|F99|
|quantityUnitCode|FAH|
|quantityUnitCode|FAR|
|quantityUnitCode|FBM|
|quantityUnitCode|FC|
|quantityUnitCode|FF|
|quantityUnitCode|FH|
|quantityUnitCode|FIT|
|quantityUnitCode|FL|
|quantityUnitCode|FOT|
|quantityUnitCode|FP|
|quantityUnitCode|FR|
|quantityUnitCode|FS|
|quantityUnitCode|FTK|
|quantityUnitCode|FTQ|
|quantityUnitCode|G01|
|quantityUnitCode|G04|
|quantityUnitCode|G05|
|quantityUnitCode|G06|
|quantityUnitCode|G08|
|quantityUnitCode|G09|
|quantityUnitCode|G10|
|quantityUnitCode|G11|
|quantityUnitCode|G12|
|quantityUnitCode|G13|
|quantityUnitCode|G14|
|quantityUnitCode|G15|
|quantityUnitCode|G16|
|quantityUnitCode|G17|
|quantityUnitCode|G18|
|quantityUnitCode|G19|
|quantityUnitCode|G2|
|quantityUnitCode|G20|
|quantityUnitCode|G21|
|quantityUnitCode|G23|
|quantityUnitCode|G24|
|quantityUnitCode|G25|
|quantityUnitCode|G26|
|quantityUnitCode|G27|
|quantityUnitCode|G28|
|quantityUnitCode|G29|
|quantityUnitCode|G3|
|quantityUnitCode|G30|
|quantityUnitCode|G31|
|quantityUnitCode|G32|
|quantityUnitCode|G33|
|quantityUnitCode|G34|
|quantityUnitCode|G35|
|quantityUnitCode|G36|
|quantityUnitCode|G37|
|quantityUnitCode|G38|
|quantityUnitCode|G39|
|quantityUnitCode|G40|
|quantityUnitCode|G41|
|quantityUnitCode|G42|
|quantityUnitCode|G43|
|quantityUnitCode|G44|
|quantityUnitCode|G45|
|quantityUnitCode|G46|
|quantityUnitCode|G47|
|quantityUnitCode|G48|
|quantityUnitCode|G49|
|quantityUnitCode|G50|
|quantityUnitCode|G51|
|quantityUnitCode|G52|
|quantityUnitCode|G53|
|quantityUnitCode|G54|
|quantityUnitCode|G55|
|quantityUnitCode|G56|
|quantityUnitCode|G57|
|quantityUnitCode|G58|
|quantityUnitCode|G59|
|quantityUnitCode|G60|
|quantityUnitCode|G61|
|quantityUnitCode|G62|
|quantityUnitCode|G63|
|quantityUnitCode|G64|
|quantityUnitCode|G65|
|quantityUnitCode|G66|
|quantityUnitCode|G67|
|quantityUnitCode|G68|
|quantityUnitCode|G69|
|quantityUnitCode|G70|
|quantityUnitCode|G71|
|quantityUnitCode|G72|
|quantityUnitCode|G73|
|quantityUnitCode|G74|
|quantityUnitCode|G75|
|quantityUnitCode|G76|
|quantityUnitCode|G77|
|quantityUnitCode|G78|
|quantityUnitCode|G79|
|quantityUnitCode|G80|
|quantityUnitCode|G81|
|quantityUnitCode|G82|
|quantityUnitCode|G83|
|quantityUnitCode|G84|
|quantityUnitCode|G85|
|quantityUnitCode|G86|
|quantityUnitCode|G87|
|quantityUnitCode|G88|
|quantityUnitCode|G89|
|quantityUnitCode|G90|
|quantityUnitCode|G91|
|quantityUnitCode|G92|
|quantityUnitCode|G93|
|quantityUnitCode|G94|
|quantityUnitCode|G95|
|quantityUnitCode|G96|
|quantityUnitCode|G97|
|quantityUnitCode|G98|
|quantityUnitCode|G99|
|quantityUnitCode|GB|
|quantityUnitCode|GBQ|
|quantityUnitCode|GDW|
|quantityUnitCode|GE|
|quantityUnitCode|GF|
|quantityUnitCode|GFI|
|quantityUnitCode|GGR|
|quantityUnitCode|GIA|
|quantityUnitCode|GIC|
|quantityUnitCode|GII|
|quantityUnitCode|GIP|
|quantityUnitCode|GJ|
|quantityUnitCode|GL|
|quantityUnitCode|GLD|
|quantityUnitCode|GLI|
|quantityUnitCode|GLL|
|quantityUnitCode|GM|
|quantityUnitCode|GO|
|quantityUnitCode|GP|
|quantityUnitCode|GQ|
|quantityUnitCode|GRM|
|quantityUnitCode|GRN|
|quantityUnitCode|GRO|
|quantityUnitCode|GV|
|quantityUnitCode|GWH|
|quantityUnitCode|H03|
|quantityUnitCode|H04|
|quantityUnitCode|H05|
|quantityUnitCode|H06|
|quantityUnitCode|H07|
|quantityUnitCode|H08|
|quantityUnitCode|H09|
|quantityUnitCode|H10|
|quantityUnitCode|H11|
|quantityUnitCode|H12|
|quantityUnitCode|H13|
|quantityUnitCode|H14|
|quantityUnitCode|H15|
|quantityUnitCode|H16|
|quantityUnitCode|H18|
|quantityUnitCode|H19|
|quantityUnitCode|H20|
|quantityUnitCode|H21|
|quantityUnitCode|H22|
|quantityUnitCode|H23|
|quantityUnitCode|H24|
|quantityUnitCode|H25|
|quantityUnitCode|H26|
|quantityUnitCode|H27|
|quantityUnitCode|H28|
|quantityUnitCode|H29|
|quantityUnitCode|H30|
|quantityUnitCode|H31|
|quantityUnitCode|H32|
|quantityUnitCode|H33|
|quantityUnitCode|H34|
|quantityUnitCode|H35|
|quantityUnitCode|H36|
|quantityUnitCode|H37|
|quantityUnitCode|H38|
|quantityUnitCode|H39|
|quantityUnitCode|H40|
|quantityUnitCode|H41|
|quantityUnitCode|H42|
|quantityUnitCode|H43|
|quantityUnitCode|H44|
|quantityUnitCode|H45|
|quantityUnitCode|H46|
|quantityUnitCode|H47|
|quantityUnitCode|H48|
|quantityUnitCode|H49|
|quantityUnitCode|H50|
|quantityUnitCode|H51|
|quantityUnitCode|H52|
|quantityUnitCode|H53|
|quantityUnitCode|H54|
|quantityUnitCode|H55|
|quantityUnitCode|H56|
|quantityUnitCode|H57|
|quantityUnitCode|H58|
|quantityUnitCode|H59|
|quantityUnitCode|H60|
|quantityUnitCode|H61|
|quantityUnitCode|H62|
|quantityUnitCode|H63|
|quantityUnitCode|H64|
|quantityUnitCode|H65|
|quantityUnitCode|H66|
|quantityUnitCode|H67|
|quantityUnitCode|H68|
|quantityUnitCode|H69|
|quantityUnitCode|H70|
|quantityUnitCode|H71|
|quantityUnitCode|H72|
|quantityUnitCode|H73|
|quantityUnitCode|H74|
|quantityUnitCode|H75|
|quantityUnitCode|H76|
|quantityUnitCode|H77|
|quantityUnitCode|H79|
|quantityUnitCode|H80|
|quantityUnitCode|H81|
|quantityUnitCode|H82|
|quantityUnitCode|H83|
|quantityUnitCode|H84|
|quantityUnitCode|H85|
|quantityUnitCode|H87|
|quantityUnitCode|H88|
|quantityUnitCode|H89|
|quantityUnitCode|H90|
|quantityUnitCode|H91|
|quantityUnitCode|H92|
|quantityUnitCode|H93|
|quantityUnitCode|H94|
|quantityUnitCode|H95|
|quantityUnitCode|H96|
|quantityUnitCode|H98|
|quantityUnitCode|H99|
|quantityUnitCode|HA|
|quantityUnitCode|HBA|
|quantityUnitCode|HBX|
|quantityUnitCode|HC|
|quantityUnitCode|HDW|
|quantityUnitCode|HEA|
|quantityUnitCode|HGM|
|quantityUnitCode|HH|
|quantityUnitCode|HIU|
|quantityUnitCode|HKM|
|quantityUnitCode|HLT|
|quantityUnitCode|HM|
|quantityUnitCode|HMQ|
|quantityUnitCode|HMT|
|quantityUnitCode|HPA|
|quantityUnitCode|HTZ|
|quantityUnitCode|HUR|
|quantityUnitCode|IA|
|quantityUnitCode|IE|
|quantityUnitCode|INH|
|quantityUnitCode|INK|
|quantityUnitCode|INQ|
|quantityUnitCode|ISD|
|quantityUnitCode|IU|
|quantityUnitCode|IV|
|quantityUnitCode|J10|
|quantityUnitCode|J12|
|quantityUnitCode|J13|
|quantityUnitCode|J14|
|quantityUnitCode|J15|
|quantityUnitCode|J16|
|quantityUnitCode|J17|
|quantityUnitCode|J18|
|quantityUnitCode|J19|
|quantityUnitCode|J2|
|quantityUnitCode|J20|
|quantityUnitCode|J21|
|quantityUnitCode|J22|
|quantityUnitCode|J23|
|quantityUnitCode|J24|
|quantityUnitCode|J25|
|quantityUnitCode|J26|
|quantityUnitCode|J27|
|quantityUnitCode|J28|
|quantityUnitCode|J29|
|quantityUnitCode|J30|
|quantityUnitCode|J31|
|quantityUnitCode|J32|
|quantityUnitCode|J33|
|quantityUnitCode|J34|
|quantityUnitCode|J35|
|quantityUnitCode|J36|
|quantityUnitCode|J38|
|quantityUnitCode|J39|
|quantityUnitCode|J40|
|quantityUnitCode|J41|
|quantityUnitCode|J42|
|quantityUnitCode|J43|
|quantityUnitCode|J44|
|quantityUnitCode|J45|
|quantityUnitCode|J46|
|quantityUnitCode|J47|
|quantityUnitCode|J48|
|quantityUnitCode|J49|
|quantityUnitCode|J50|
|quantityUnitCode|J51|
|quantityUnitCode|J52|
|quantityUnitCode|J53|
|quantityUnitCode|J54|
|quantityUnitCode|J55|
|quantityUnitCode|J56|
|quantityUnitCode|J57|
|quantityUnitCode|J58|
|quantityUnitCode|J59|
|quantityUnitCode|J60|
|quantityUnitCode|J61|
|quantityUnitCode|J62|
|quantityUnitCode|J63|
|quantityUnitCode|J64|
|quantityUnitCode|J65|
|quantityUnitCode|J66|
|quantityUnitCode|J67|
|quantityUnitCode|J68|
|quantityUnitCode|J69|
|quantityUnitCode|J70|
|quantityUnitCode|J71|
|quantityUnitCode|J72|
|quantityUnitCode|J73|
|quantityUnitCode|J74|
|quantityUnitCode|J75|
|quantityUnitCode|J76|
|quantityUnitCode|J78|
|quantityUnitCode|J79|
|quantityUnitCode|J81|
|quantityUnitCode|J82|
|quantityUnitCode|J83|
|quantityUnitCode|J84|
|quantityUnitCode|J85|
|quantityUnitCode|J87|
|quantityUnitCode|J90|
|quantityUnitCode|J91|
|quantityUnitCode|J92|
|quantityUnitCode|J93|
|quantityUnitCode|J95|
|quantityUnitCode|J96|
|quantityUnitCode|J97|
|quantityUnitCode|J98|
|quantityUnitCode|J99|
|quantityUnitCode|JE|
|quantityUnitCode|JK|
|quantityUnitCode|JM|
|quantityUnitCode|JNT|
|quantityUnitCode|JOU|
|quantityUnitCode|JPS|
|quantityUnitCode|JWL|
|quantityUnitCode|K1|
|quantityUnitCode|K10|
|quantityUnitCode|K11|
|quantityUnitCode|K12|
|quantityUnitCode|K13|
|quantityUnitCode|K14|
|quantityUnitCode|K15|
|quantityUnitCode|K16|
|quantityUnitCode|K17|
|quantityUnitCode|K18|
|quantityUnitCode|K19|
|quantityUnitCode|K2|
|quantityUnitCode|K20|
|quantityUnitCode|K21|
|quantityUnitCode|K22|
|quantityUnitCode|K23|
|quantityUnitCode|K26|
|quantityUnitCode|K27|
|quantityUnitCode|K28|
|quantityUnitCode|K3|
|quantityUnitCode|K30|
|quantityUnitCode|K31|
|quantityUnitCode|K32|
|quantityUnitCode|K33|
|quantityUnitCode|K34|
|quantityUnitCode|K35|
|quantityUnitCode|K36|
|quantityUnitCode|K37|
|quantityUnitCode|K38|
|quantityUnitCode|K39|
|quantityUnitCode|K40|
|quantityUnitCode|K41|
|quantityUnitCode|K42|
|quantityUnitCode|K43|
|quantityUnitCode|K45|
|quantityUnitCode|K46|
|quantityUnitCode|K47|
|quantityUnitCode|K48|
|quantityUnitCode|K49|
|quantityUnitCode|K50|
|quantityUnitCode|K51|
|quantityUnitCode|K52|
|quantityUnitCode|K53|
|quantityUnitCode|K54|
|quantityUnitCode|K55|
|quantityUnitCode|K58|
|quantityUnitCode|K59|
|quantityUnitCode|K6|
|quantityUnitCode|K60|
|quantityUnitCode|K61|
|quantityUnitCode|K62|
|quantityUnitCode|K63|
|quantityUnitCode|K64|
|quantityUnitCode|K65|
|quantityUnitCode|K66|
|quantityUnitCode|K67|
|quantityUnitCode|K68|
|quantityUnitCode|K69|
|quantityUnitCode|K70|
|quantityUnitCode|K71|
|quantityUnitCode|K73|
|quantityUnitCode|K74|
|quantityUnitCode|K75|
|quantityUnitCode|K76|
|quantityUnitCode|K77|
|quantityUnitCode|K78|
|quantityUnitCode|K79|
|quantityUnitCode|K80|
|quantityUnitCode|K81|
|quantityUnitCode|K82|
|quantityUnitCode|K83|
|quantityUnitCode|K84|
|quantityUnitCode|K85|
|quantityUnitCode|K86|
|quantityUnitCode|K87|
|quantityUnitCode|K88|
|quantityUnitCode|K89|
|quantityUnitCode|K90|
|quantityUnitCode|K91|
|quantityUnitCode|K92|
|quantityUnitCode|K93|
|quantityUnitCode|K94|
|quantityUnitCode|K95|
|quantityUnitCode|K96|
|quantityUnitCode|K97|
|quantityUnitCode|K98|
|quantityUnitCode|K99|
|quantityUnitCode|KA|
|quantityUnitCode|KAT|
|quantityUnitCode|KB|
|quantityUnitCode|KBA|
|quantityUnitCode|KCC|
|quantityUnitCode|KDW|
|quantityUnitCode|KEL|
|quantityUnitCode|KGM|
|quantityUnitCode|KGS|
|quantityUnitCode|KHY|
|quantityUnitCode|KHZ|
|quantityUnitCode|KI|
|quantityUnitCode|KIC|
|quantityUnitCode|KIP|
|quantityUnitCode|KJ|
|quantityUnitCode|KJO|
|quantityUnitCode|KL|
|quantityUnitCode|KLK|
|quantityUnitCode|KLX|
|quantityUnitCode|KMA|
|quantityUnitCode|KMH|
|quantityUnitCode|KMK|
|quantityUnitCode|KMQ|
|quantityUnitCode|KMT|
|quantityUnitCode|KNI|
|quantityUnitCode|KNM|
|quantityUnitCode|KNS|
|quantityUnitCode|KNT|
|quantityUnitCode|KO|
|quantityUnitCode|KPA|
|quantityUnitCode|KPH|
|quantityUnitCode|KPO|
|quantityUnitCode|KPP|
|quantityUnitCode|KR|
|quantityUnitCode|KSD|
|quantityUnitCode|KSH|
|quantityUnitCode|KT|
|quantityUnitCode|KTN|
|quantityUnitCode|KUR|
|quantityUnitCode|KVA|
|quantityUnitCode|KVR|
|quantityUnitCode|KVT|
|quantityUnitCode|KW|
|quantityUnitCode|KWH|
|quantityUnitCode|KWO|
|quantityUnitCode|KWT|
|quantityUnitCode|KX|
|quantityUnitCode|L10|
|quantityUnitCode|L11|
|quantityUnitCode|L12|
|quantityUnitCode|L13|
|quantityUnitCode|L14|
|quantityUnitCode|L15|
|quantityUnitCode|L16|
|quantityUnitCode|L17|
|quantityUnitCode|L18|
|quantityUnitCode|L19|
|quantityUnitCode|L2|
|quantityUnitCode|L20|
|quantityUnitCode|L21|
|quantityUnitCode|L23|
|quantityUnitCode|L24|
|quantityUnitCode|L25|
|quantityUnitCode|L26|
|quantityUnitCode|L27|
|quantityUnitCode|L28|
|quantityUnitCode|L29|
|quantityUnitCode|L30|
|quantityUnitCode|L31|
|quantityUnitCode|L32|
|quantityUnitCode|L33|
|quantityUnitCode|L34|
|quantityUnitCode|L35|
|quantityUnitCode|L36|
|quantityUnitCode|L37|
|quantityUnitCode|L38|
|quantityUnitCode|L39|
|quantityUnitCode|L40|
|quantityUnitCode|L41|
|quantityUnitCode|L42|
|quantityUnitCode|L43|
|quantityUnitCode|L44|
|quantityUnitCode|L45|
|quantityUnitCode|L46|
|quantityUnitCode|L47|
|quantityUnitCode|L48|
|quantityUnitCode|L49|
|quantityUnitCode|L50|
|quantityUnitCode|L51|
|quantityUnitCode|L52|
|quantityUnitCode|L53|
|quantityUnitCode|L54|
|quantityUnitCode|L55|
|quantityUnitCode|L56|
|quantityUnitCode|L57|
|quantityUnitCode|L58|
|quantityUnitCode|L59|
|quantityUnitCode|L60|
|quantityUnitCode|L63|
|quantityUnitCode|L64|
|quantityUnitCode|L65|
|quantityUnitCode|L66|
|quantityUnitCode|L67|
|quantityUnitCode|L68|
|quantityUnitCode|L69|
|quantityUnitCode|L70|
|quantityUnitCode|L71|
|quantityUnitCode|L72|
|quantityUnitCode|L73|
|quantityUnitCode|L74|
|quantityUnitCode|L75|
|quantityUnitCode|L76|
|quantityUnitCode|L77|
|quantityUnitCode|L78|
|quantityUnitCode|L79|
|quantityUnitCode|L80|
|quantityUnitCode|L81|
|quantityUnitCode|L82|
|quantityUnitCode|L83|
|quantityUnitCode|L84|
|quantityUnitCode|L85|
|quantityUnitCode|L86|
|quantityUnitCode|L87|
|quantityUnitCode|L88|
|quantityUnitCode|L89|
|quantityUnitCode|L90|
|quantityUnitCode|L91|
|quantityUnitCode|L92|
|quantityUnitCode|L93|
|quantityUnitCode|L94|
|quantityUnitCode|L95|
|quantityUnitCode|L96|
|quantityUnitCode|L98|
|quantityUnitCode|L99|
|quantityUnitCode|LA|
|quantityUnitCode|LAC|
|quantityUnitCode|LBR|
|quantityUnitCode|LBT|
|quantityUnitCode|LD|
|quantityUnitCode|LEF|
|quantityUnitCode|LF|
|quantityUnitCode|LH|
|quantityUnitCode|LK|
|quantityUnitCode|LM|
|quantityUnitCode|LN|
|quantityUnitCode|LO|
|quantityUnitCode|LP|
|quantityUnitCode|LPA|
|quantityUnitCode|LR|
|quantityUnitCode|LS|
|quantityUnitCode|LTN|
|quantityUnitCode|LTR|
|quantityUnitCode|LUB|
|quantityUnitCode|LUM|
|quantityUnitCode|LUX|
|quantityUnitCode|LY|
|quantityUnitCode|M1|
|quantityUnitCode|M10|
|quantityUnitCode|M11|
|quantityUnitCode|M12|
|quantityUnitCode|M13|
|quantityUnitCode|M14|
|quantityUnitCode|M15|
|quantityUnitCode|M16|
|quantityUnitCode|M17|
|quantityUnitCode|M18|
|quantityUnitCode|M19|
|quantityUnitCode|M20|
|quantityUnitCode|M21|
|quantityUnitCode|M22|
|quantityUnitCode|M23|
|quantityUnitCode|M24|
|quantityUnitCode|M25|
|quantityUnitCode|M26|
|quantityUnitCode|M27|
|quantityUnitCode|M29|
|quantityUnitCode|M30|
|quantityUnitCode|M31|
|quantityUnitCode|M32|
|quantityUnitCode|M33|
|quantityUnitCode|M34|
|quantityUnitCode|M35|
|quantityUnitCode|M36|
|quantityUnitCode|M37|
|quantityUnitCode|M38|
|quantityUnitCode|M39|
|quantityUnitCode|M4|
|quantityUnitCode|M40|
|quantityUnitCode|M41|
|quantityUnitCode|M42|
|quantityUnitCode|M43|
|quantityUnitCode|M44|
|quantityUnitCode|M45|
|quantityUnitCode|M46|
|quantityUnitCode|M47|
|quantityUnitCode|M48|
|quantityUnitCode|M49|
|quantityUnitCode|M5|
|quantityUnitCode|M50|
|quantityUnitCode|M51|
|quantityUnitCode|M52|
|quantityUnitCode|M53|
|quantityUnitCode|M55|
|quantityUnitCode|M56|
|quantityUnitCode|M57|
|quantityUnitCode|M58|
|quantityUnitCode|M59|
|quantityUnitCode|M60|
|quantityUnitCode|M61|
|quantityUnitCode|M62|
|quantityUnitCode|M63|
|quantityUnitCode|M64|
|quantityUnitCode|M65|
|quantityUnitCode|M66|
|quantityUnitCode|M67|
|quantityUnitCode|M68|
|quantityUnitCode|M69|
|quantityUnitCode|M7|
|quantityUnitCode|M70|
|quantityUnitCode|M71|
|quantityUnitCode|M72|
|quantityUnitCode|M73|
|quantityUnitCode|M74|
|quantityUnitCode|M75|
|quantityUnitCode|M76|
|quantityUnitCode|M77|
|quantityUnitCode|M78|
|quantityUnitCode|M79|
|quantityUnitCode|M80|
|quantityUnitCode|M81|
|quantityUnitCode|M82|
|quantityUnitCode|M83|
|quantityUnitCode|M84|
|quantityUnitCode|M85|
|quantityUnitCode|M86|
|quantityUnitCode|M87|
|quantityUnitCode|M88|
|quantityUnitCode|M89|
|quantityUnitCode|M9|
|quantityUnitCode|M90|
|quantityUnitCode|M91|
|quantityUnitCode|M92|
|quantityUnitCode|M93|
|quantityUnitCode|M94|
|quantityUnitCode|M95|
|quantityUnitCode|M96|
|quantityUnitCode|M97|
|quantityUnitCode|M98|
|quantityUnitCode|M99|
|quantityUnitCode|MAH|
|quantityUnitCode|MAL|
|quantityUnitCode|MAM|
|quantityUnitCode|MAR|
|quantityUnitCode|MAW|
|quantityUnitCode|MBE|
|quantityUnitCode|MBF|
|quantityUnitCode|MBR|
|quantityUnitCode|MC|
|quantityUnitCode|MCU|
|quantityUnitCode|MD|
|quantityUnitCode|MGM|
|quantityUnitCode|MHZ|
|quantityUnitCode|MIK|
|quantityUnitCode|MIL|
|quantityUnitCode|MIN|
|quantityUnitCode|MIO|
|quantityUnitCode|MIU|
|quantityUnitCode|MLD|
|quantityUnitCode|MLT|
|quantityUnitCode|MMK|
|quantityUnitCode|MMQ|
|quantityUnitCode|MMT|
|quantityUnitCode|MND|
|quantityUnitCode|MON|
|quantityUnitCode|MPA|
|quantityUnitCode|MQH|
|quantityUnitCode|MQS|
|quantityUnitCode|MSK|
|quantityUnitCode|MTK|
|quantityUnitCode|MTQ|
|quantityUnitCode|MTR|
|quantityUnitCode|MTS|
|quantityUnitCode|MVA|
|quantityUnitCode|MWH|
|quantityUnitCode|N1|
|quantityUnitCode|N10|
|quantityUnitCode|N11|
|quantityUnitCode|N12|
|quantityUnitCode|N13|
|quantityUnitCode|N14|
|quantityUnitCode|N15|
|quantityUnitCode|N16|
|quantityUnitCode|N17|
|quantityUnitCode|N18|
|quantityUnitCode|N19|
|quantityUnitCode|N20|
|quantityUnitCode|N21|
|quantityUnitCode|N22|
|quantityUnitCode|N23|
|quantityUnitCode|N24|
|quantityUnitCode|N25|
|quantityUnitCode|N26|
|quantityUnitCode|N27|
|quantityUnitCode|N28|
|quantityUnitCode|N29|
|quantityUnitCode|N3|
|quantityUnitCode|N30|
|quantityUnitCode|N31|
|quantityUnitCode|N32|
|quantityUnitCode|N33|
|quantityUnitCode|N34|
|quantityUnitCode|N35|
|quantityUnitCode|N36|
|quantityUnitCode|N37|
|quantityUnitCode|N38|
|quantityUnitCode|N39|
|quantityUnitCode|N40|
|quantityUnitCode|N41|
|quantityUnitCode|N42|
|quantityUnitCode|N43|
|quantityUnitCode|N44|
|quantityUnitCode|N45|
|quantityUnitCode|N46|
|quantityUnitCode|N47|
|quantityUnitCode|N48|
|quantityUnitCode|N49|
|quantityUnitCode|N50|
|quantityUnitCode|N51|
|quantityUnitCode|N52|
|quantityUnitCode|N53|
|quantityUnitCode|N54|
|quantityUnitCode|N55|
|quantityUnitCode|N56|
|quantityUnitCode|N57|
|quantityUnitCode|N58|
|quantityUnitCode|N59|
|quantityUnitCode|N60|
|quantityUnitCode|N61|
|quantityUnitCode|N62|
|quantityUnitCode|N63|
|quantityUnitCode|N64|
|quantityUnitCode|N65|
|quantityUnitCode|N66|
|quantityUnitCode|N67|
|quantityUnitCode|N68|
|quantityUnitCode|N69|
|quantityUnitCode|N70|
|quantityUnitCode|N71|
|quantityUnitCode|N72|
|quantityUnitCode|N73|
|quantityUnitCode|N74|
|quantityUnitCode|N75|
|quantityUnitCode|N76|
|quantityUnitCode|N77|
|quantityUnitCode|N78|
|quantityUnitCode|N79|
|quantityUnitCode|N80|
|quantityUnitCode|N81|
|quantityUnitCode|N82|
|quantityUnitCode|N83|
|quantityUnitCode|N84|
|quantityUnitCode|N85|
|quantityUnitCode|N86|
|quantityUnitCode|N87|
|quantityUnitCode|N88|
|quantityUnitCode|N89|
|quantityUnitCode|N90|
|quantityUnitCode|N91|
|quantityUnitCode|N92|
|quantityUnitCode|N93|
|quantityUnitCode|N94|
|quantityUnitCode|N95|
|quantityUnitCode|N96|
|quantityUnitCode|N97|
|quantityUnitCode|N98|
|quantityUnitCode|N99|
|quantityUnitCode|NA|
|quantityUnitCode|NAR|
|quantityUnitCode|NCL|
|quantityUnitCode|NEW|
|quantityUnitCode|NF|
|quantityUnitCode|NIL|
|quantityUnitCode|NIU|
|quantityUnitCode|NL|
|quantityUnitCode|NM3|
|quantityUnitCode|NMI|
|quantityUnitCode|NMP|
|quantityUnitCode|NPT|
|quantityUnitCode|NT|
|quantityUnitCode|NU|
|quantityUnitCode|NX|
|quantityUnitCode|OA|
|quantityUnitCode|ODE|
|quantityUnitCode|OHM|
|quantityUnitCode|ON|
|quantityUnitCode|ONZ|
|quantityUnitCode|OPM|
|quantityUnitCode|OT|
|quantityUnitCode|OZA|
|quantityUnitCode|OZI|
|quantityUnitCode|P1|
|quantityUnitCode|P10|
|quantityUnitCode|P11|
|quantityUnitCode|P12|
|quantityUnitCode|P13|
|quantityUnitCode|P14|
|quantityUnitCode|P15|
|quantityUnitCode|P16|
|quantityUnitCode|P17|
|quantityUnitCode|P18|
|quantityUnitCode|P19|
|quantityUnitCode|P2|
|quantityUnitCode|P20|
|quantityUnitCode|P21|
|quantityUnitCode|P22|
|quantityUnitCode|P23|
|quantityUnitCode|P24|
|quantityUnitCode|P25|
|quantityUnitCode|P26|
|quantityUnitCode|P27|
|quantityUnitCode|P28|
|quantityUnitCode|P29|
|quantityUnitCode|P30|
|quantityUnitCode|P31|
|quantityUnitCode|P32|
|quantityUnitCode|P33|
|quantityUnitCode|P34|
|quantityUnitCode|P35|
|quantityUnitCode|P36|
|quantityUnitCode|P37|
|quantityUnitCode|P38|
|quantityUnitCode|P39|
|quantityUnitCode|P40|
|quantityUnitCode|P41|
|quantityUnitCode|P42|
|quantityUnitCode|P43|
|quantityUnitCode|P44|
|quantityUnitCode|P45|
|quantityUnitCode|P46|
|quantityUnitCode|P47|
|quantityUnitCode|P48|
|quantityUnitCode|P49|
|quantityUnitCode|P5|
|quantityUnitCode|P50|
|quantityUnitCode|P51|
|quantityUnitCode|P52|
|quantityUnitCode|P53|
|quantityUnitCode|P54|
|quantityUnitCode|P55|
|quantityUnitCode|P56|
|quantityUnitCode|P57|
|quantityUnitCode|P58|
|quantityUnitCode|P59|
|quantityUnitCode|P60|
|quantityUnitCode|P61|
|quantityUnitCode|P62|
|quantityUnitCode|P63|
|quantityUnitCode|P64|
|quantityUnitCode|P65|
|quantityUnitCode|P66|
|quantityUnitCode|P67|
|quantityUnitCode|P68|
|quantityUnitCode|P69|
|quantityUnitCode|P70|
|quantityUnitCode|P71|
|quantityUnitCode|P72|
|quantityUnitCode|P73|
|quantityUnitCode|P74|
|quantityUnitCode|P75|
|quantityUnitCode|P76|
|quantityUnitCode|P77|
|quantityUnitCode|P78|
|quantityUnitCode|P79|
|quantityUnitCode|P80|
|quantityUnitCode|P81|
|quantityUnitCode|P82|
|quantityUnitCode|P83|
|quantityUnitCode|P84|
|quantityUnitCode|P85|
|quantityUnitCode|P86|
|quantityUnitCode|P87|
|quantityUnitCode|P88|
|quantityUnitCode|P89|
|quantityUnitCode|P90|
|quantityUnitCode|P91|
|quantityUnitCode|P92|
|quantityUnitCode|P93|
|quantityUnitCode|P94|
|quantityUnitCode|P95|
|quantityUnitCode|P96|
|quantityUnitCode|P97|
|quantityUnitCode|P98|
|quantityUnitCode|P99|
|quantityUnitCode|PAL|
|quantityUnitCode|PD|
|quantityUnitCode|PFL|
|quantityUnitCode|PGL|
|quantityUnitCode|PI|
|quantityUnitCode|PLA|
|quantityUnitCode|PO|
|quantityUnitCode|PQ|
|quantityUnitCode|PR|
|quantityUnitCode|PS|
|quantityUnitCode|PTD|
|quantityUnitCode|PTI|
|quantityUnitCode|PTL|
|quantityUnitCode|PTN|
|quantityUnitCode|Q10|
|quantityUnitCode|Q11|
|quantityUnitCode|Q12|
|quantityUnitCode|Q13|
|quantityUnitCode|Q14|
|quantityUnitCode|Q15|
|quantityUnitCode|Q16|
|quantityUnitCode|Q17|
|quantityUnitCode|Q18|
|quantityUnitCode|Q19|
|quantityUnitCode|Q20|
|quantityUnitCode|Q21|
|quantityUnitCode|Q22|
|quantityUnitCode|Q23|
|quantityUnitCode|Q24|
|quantityUnitCode|Q25|
|quantityUnitCode|Q26|
|quantityUnitCode|Q27|
|quantityUnitCode|Q28|
|quantityUnitCode|Q29|
|quantityUnitCode|Q30|
|quantityUnitCode|Q31|
|quantityUnitCode|Q32|
|quantityUnitCode|Q33|
|quantityUnitCode|Q34|
|quantityUnitCode|Q35|
|quantityUnitCode|Q36|
|quantityUnitCode|Q37|
|quantityUnitCode|Q38|
|quantityUnitCode|Q39|
|quantityUnitCode|Q40|
|quantityUnitCode|Q3|
|quantityUnitCode|QA|
|quantityUnitCode|QAN|
|quantityUnitCode|QB|
|quantityUnitCode|QR|
|quantityUnitCode|QTD|
|quantityUnitCode|QTI|
|quantityUnitCode|QTL|
|quantityUnitCode|QTR|
|quantityUnitCode|R1|
|quantityUnitCode|R9|
|quantityUnitCode|RH|
|quantityUnitCode|RM|
|quantityUnitCode|ROM|
|quantityUnitCode|RP|
|quantityUnitCode|RPM|
|quantityUnitCode|RPS|
|quantityUnitCode|RT|
|quantityUnitCode|S3|
|quantityUnitCode|S4|
|quantityUnitCode|SAN|
|quantityUnitCode|SCO|
|quantityUnitCode|SCR|
|quantityUnitCode|SEC|
|quantityUnitCode|SET|
|quantityUnitCode|SG|
|quantityUnitCode|SIE|
|quantityUnitCode|SM3|
|quantityUnitCode|SMI|
|quantityUnitCode|SQ|
|quantityUnitCode|SQR|
|quantityUnitCode|SR|
|quantityUnitCode|STC|
|quantityUnitCode|STI|
|quantityUnitCode|STK|
|quantityUnitCode|STL|
|quantityUnitCode|STN|
|quantityUnitCode|STW|
|quantityUnitCode|SW|
|quantityUnitCode|SX|
|quantityUnitCode|SYR|
|quantityUnitCode|T0|
|quantityUnitCode|T3|
|quantityUnitCode|TAH|
|quantityUnitCode|TAN|
|quantityUnitCode|TI|
|quantityUnitCode|TIC|
|quantityUnitCode|TIP|
|quantityUnitCode|TKM|
|quantityUnitCode|TMS|
|quantityUnitCode|TNE|
|quantityUnitCode|TP|
|quantityUnitCode|TPI|
|quantityUnitCode|TPR|
|quantityUnitCode|TQD|
|quantityUnitCode|TRL|
|quantityUnitCode|TST|
|quantityUnitCode|TTS|
|quantityUnitCode|U1|
|quantityUnitCode|U2|
|quantityUnitCode|UB|
|quantityUnitCode|UC|
|quantityUnitCode|VA|
|quantityUnitCode|VLT|
|quantityUnitCode|VP|
|quantityUnitCode|W2|
|quantityUnitCode|WA|
|quantityUnitCode|WB|
|quantityUnitCode|WCD|
|quantityUnitCode|WE|
|quantityUnitCode|WEB|
|quantityUnitCode|WEE|
|quantityUnitCode|WG|
|quantityUnitCode|WHR|
|quantityUnitCode|WM|
|quantityUnitCode|WSD|
|quantityUnitCode|WTT|
|quantityUnitCode|X1|
|quantityUnitCode|YDK|
|quantityUnitCode|YDQ|
|quantityUnitCode|YRD|
|quantityUnitCode|Z11|
|quantityUnitCode|ZP|
|quantityUnitCode|ZZ|
|quantityUnitCode|X1A|
|quantityUnitCode|X1B|
|quantityUnitCode|X1D|
|quantityUnitCode|X1F|
|quantityUnitCode|X1G|
|quantityUnitCode|X1W|
|quantityUnitCode|X2C|
|quantityUnitCode|X3A|
|quantityUnitCode|X3H|
|quantityUnitCode|X43|
|quantityUnitCode|X44|
|quantityUnitCode|X4A|
|quantityUnitCode|X4B|
|quantityUnitCode|X4C|
|quantityUnitCode|X4D|
|quantityUnitCode|X4F|
|quantityUnitCode|X4G|
|quantityUnitCode|X4H|
|quantityUnitCode|X5H|
|quantityUnitCode|X5L|
|quantityUnitCode|X5M|
|quantityUnitCode|X6H|
|quantityUnitCode|X6P|
|quantityUnitCode|X7A|
|quantityUnitCode|X7B|
|quantityUnitCode|X8A|
|quantityUnitCode|X8B|
|quantityUnitCode|X8C|
|quantityUnitCode|XAA|
|quantityUnitCode|XAB|
|quantityUnitCode|XAC|
|quantityUnitCode|XAD|
|quantityUnitCode|XAE|
|quantityUnitCode|XAF|
|quantityUnitCode|XAG|
|quantityUnitCode|XAH|
|quantityUnitCode|XAI|
|quantityUnitCode|XAJ|
|quantityUnitCode|XAL|
|quantityUnitCode|XAM|
|quantityUnitCode|XAP|
|quantityUnitCode|XAT|
|quantityUnitCode|XAV|
|quantityUnitCode|XB4|
|quantityUnitCode|XBA|
|quantityUnitCode|XBB|
|quantityUnitCode|XBC|
|quantityUnitCode|XBD|
|quantityUnitCode|XBE|
|quantityUnitCode|XBF|
|quantityUnitCode|XBG|
|quantityUnitCode|XBH|
|quantityUnitCode|XBI|
|quantityUnitCode|XBJ|
|quantityUnitCode|XBK|
|quantityUnitCode|XBL|
|quantityUnitCode|XBM|
|quantityUnitCode|XBN|
|quantityUnitCode|XBO|
|quantityUnitCode|XBP|
|quantityUnitCode|XBQ|
|quantityUnitCode|XBR|
|quantityUnitCode|XBS|
|quantityUnitCode|XBT|
|quantityUnitCode|XBU|
|quantityUnitCode|XBV|
|quantityUnitCode|XBW|
|quantityUnitCode|XBX|
|quantityUnitCode|XBY|
|quantityUnitCode|XBZ|
|quantityUnitCode|XCA|
|quantityUnitCode|XCB|
|quantityUnitCode|XCC|
|quantityUnitCode|XCD|
|quantityUnitCode|XCE|
|quantityUnitCode|XCF|
|quantityUnitCode|XCG|
|quantityUnitCode|XCH|
|quantityUnitCode|XCI|
|quantityUnitCode|XCJ|
|quantityUnitCode|XCK|
|quantityUnitCode|XCL|
|quantityUnitCode|XCM|
|quantityUnitCode|XCN|
|quantityUnitCode|XCO|
|quantityUnitCode|XCP|
|quantityUnitCode|XCQ|
|quantityUnitCode|XCR|
|quantityUnitCode|XCS|
|quantityUnitCode|XCT|
|quantityUnitCode|XCU|
|quantityUnitCode|XCV|
|quantityUnitCode|XCW|
|quantityUnitCode|XCX|
|quantityUnitCode|XCY|
|quantityUnitCode|XCZ|
|quantityUnitCode|XDA|
|quantityUnitCode|XDB|
|quantityUnitCode|XDC|
|quantityUnitCode|XDG|
|quantityUnitCode|XDH|
|quantityUnitCode|XDI|
|quantityUnitCode|XDJ|
|quantityUnitCode|XDK|
|quantityUnitCode|XDL|
|quantityUnitCode|XDM|
|quantityUnitCode|XDN|
|quantityUnitCode|XDP|
|quantityUnitCode|XDR|
|quantityUnitCode|XDS|
|quantityUnitCode|XDT|
|quantityUnitCode|XDU|
|quantityUnitCode|XDV|
|quantityUnitCode|XDW|
|quantityUnitCode|XDX|
|quantityUnitCode|XDY|
|quantityUnitCode|XEC|
|quantityUnitCode|XED|
|quantityUnitCode|XEE|
|quantityUnitCode|XEF|
|quantityUnitCode|XEG|
|quantityUnitCode|XEH|
|quantityUnitCode|XEI|
|quantityUnitCode|XEN|
|quantityUnitCode|XFB|
|quantityUnitCode|XFC|
|quantityUnitCode|XFD|
|quantityUnitCode|XFE|
|quantityUnitCode|XFI|
|quantityUnitCode|XFL|
|quantityUnitCode|XFO|
|quantityUnitCode|XFP|
|quantityUnitCode|XFR|
|quantityUnitCode|XFT|
|quantityUnitCode|XFW|
|quantityUnitCode|XFX|
|quantityUnitCode|XGB|
|quantityUnitCode|XGI|
|quantityUnitCode|XGL|
|quantityUnitCode|XGR|
|quantityUnitCode|XGU|
|quantityUnitCode|XGY|
|quantityUnitCode|XGZ|
|quantityUnitCode|XHA|
|quantityUnitCode|XHB|
|quantityUnitCode|XHC|
|quantityUnitCode|XHG|
|quantityUnitCode|XHN|
|quantityUnitCode|XHR|
|quantityUnitCode|XIA|
|quantityUnitCode|XIB|
|quantityUnitCode|XIC|
|quantityUnitCode|XID|
|quantityUnitCode|XIE|
|quantityUnitCode|XIF|
|quantityUnitCode|XIG|
|quantityUnitCode|XIH|
|quantityUnitCode|XIK|
|quantityUnitCode|XIL|
|quantityUnitCode|XIN|
|quantityUnitCode|XIZ|
|quantityUnitCode|XJB|
|quantityUnitCode|XJC|
|quantityUnitCode|XJG|
|quantityUnitCode|XJR|
|quantityUnitCode|XJT|
|quantityUnitCode|XJY|
|quantityUnitCode|XKG|
|quantityUnitCode|XKI|
|quantityUnitCode|XLE|
|quantityUnitCode|XLG|
|quantityUnitCode|XLT|
|quantityUnitCode|XLU|
|quantityUnitCode|XLV|
|quantityUnitCode|XLZ|
|quantityUnitCode|XMA|
|quantityUnitCode|XMB|
|quantityUnitCode|XMC|
|quantityUnitCode|XME|
|quantityUnitCode|XMR|
|quantityUnitCode|XMS|
|quantityUnitCode|XMT|
|quantityUnitCode|XMW|
|quantityUnitCode|XMX|
|quantityUnitCode|XNA|
|quantityUnitCode|XNE|
|quantityUnitCode|XNF|
|quantityUnitCode|XNG|
|quantityUnitCode|XNS|
|quantityUnitCode|XNT|
|quantityUnitCode|XNU|
|quantityUnitCode|XNV|
|quantityUnitCode|XOA|
|quantityUnitCode|XOB|
|quantityUnitCode|XOC|
|quantityUnitCode|XOD|
|quantityUnitCode|XOE|
|quantityUnitCode|XOF|
|quantityUnitCode|XOK|
|quantityUnitCode|XOT|
|quantityUnitCode|XOU|
|quantityUnitCode|XP2|
|quantityUnitCode|XPA|
|quantityUnitCode|XPB|
|quantityUnitCode|XPC|
|quantityUnitCode|XPD|
|quantityUnitCode|XPE|
|quantityUnitCode|XPF|
|quantityUnitCode|XPG|
|quantityUnitCode|XPH|
|quantityUnitCode|XPI|
|quantityUnitCode|XPJ|
|quantityUnitCode|XPK|
|quantityUnitCode|XPL|
|quantityUnitCode|XPN|
|quantityUnitCode|XPO|
|quantityUnitCode|XPP|
|quantityUnitCode|XPR|
|quantityUnitCode|XPT|
|quantityUnitCode|XPU|
|quantityUnitCode|XPV|
|quantityUnitCode|XPX|
|quantityUnitCode|XPY|
|quantityUnitCode|XPZ|
|quantityUnitCode|XQA|
|quantityUnitCode|XQB|
|quantityUnitCode|XQC|
|quantityUnitCode|XQD|
|quantityUnitCode|XQF|
|quantityUnitCode|XQG|
|quantityUnitCode|XQH|
|quantityUnitCode|XQJ|
|quantityUnitCode|XQK|
|quantityUnitCode|XQL|
|quantityUnitCode|XQM|
|quantityUnitCode|XQN|
|quantityUnitCode|XQP|
|quantityUnitCode|XQQ|
|quantityUnitCode|XQR|
|quantityUnitCode|XQS|
|quantityUnitCode|XRD|
|quantityUnitCode|XRG|
|quantityUnitCode|XRJ|
|quantityUnitCode|XRK|
|quantityUnitCode|XRL|
|quantityUnitCode|XRO|
|quantityUnitCode|XRT|
|quantityUnitCode|XRZ|
|quantityUnitCode|XSA|
|quantityUnitCode|XSB|
|quantityUnitCode|XSC|
|quantityUnitCode|XSD|
|quantityUnitCode|XSE|
|quantityUnitCode|XSH|
|quantityUnitCode|XSI|
|quantityUnitCode|XSK|
|quantityUnitCode|XSL|
|quantityUnitCode|XSM|
|quantityUnitCode|XSO|
|quantityUnitCode|XSP|
|quantityUnitCode|XSS|
|quantityUnitCode|XST|
|quantityUnitCode|XSU|
|quantityUnitCode|XSV|
|quantityUnitCode|XSW|
|quantityUnitCode|XSY|
|quantityUnitCode|XSZ|
|quantityUnitCode|XT1|
|quantityUnitCode|XTB|
|quantityUnitCode|XTC|
|quantityUnitCode|XTD|
|quantityUnitCode|XTE|
|quantityUnitCode|XTG|
|quantityUnitCode|XTI|
|quantityUnitCode|XTK|
|quantityUnitCode|XTL|
|quantityUnitCode|XTN|
|quantityUnitCode|XTO|
|quantityUnitCode|XTR|
|quantityUnitCode|XTS|
|quantityUnitCode|XTT|
|quantityUnitCode|XTU|
|quantityUnitCode|XTV|
|quantityUnitCode|XTW|
|quantityUnitCode|XTY|
|quantityUnitCode|XTZ|
|quantityUnitCode|XUC|
|quantityUnitCode|XUN|
|quantityUnitCode|XVA|
|quantityUnitCode|XVG|
|quantityUnitCode|XVI|
|quantityUnitCode|XVK|
|quantityUnitCode|XVL|
|quantityUnitCode|XVO|
|quantityUnitCode|XVP|
|quantityUnitCode|XVQ|
|quantityUnitCode|XVN|
|quantityUnitCode|XVR|
|quantityUnitCode|XVS|
|quantityUnitCode|XVY|
|quantityUnitCode|XWA|
|quantityUnitCode|XWB|
|quantityUnitCode|XWC|
|quantityUnitCode|XWD|
|quantityUnitCode|XWF|
|quantityUnitCode|XWG|
|quantityUnitCode|XWH|
|quantityUnitCode|XWJ|
|quantityUnitCode|XWK|
|quantityUnitCode|XWL|
|quantityUnitCode|XWM|
|quantityUnitCode|XWN|
|quantityUnitCode|XWP|
|quantityUnitCode|XWQ|
|quantityUnitCode|XWR|
|quantityUnitCode|XWS|
|quantityUnitCode|XWT|
|quantityUnitCode|XWU|
|quantityUnitCode|XWV|
|quantityUnitCode|XWW|
|quantityUnitCode|XWX|
|quantityUnitCode|XWY|
|quantityUnitCode|XWZ|
|quantityUnitCode|XXA|
|quantityUnitCode|XXB|
|quantityUnitCode|XXC|
|quantityUnitCode|XXD|
|quantityUnitCode|XXF|
|quantityUnitCode|XXG|
|quantityUnitCode|XXH|
|quantityUnitCode|XXJ|
|quantityUnitCode|XXK|
|quantityUnitCode|XYA|
|quantityUnitCode|XYB|
|quantityUnitCode|XYC|
|quantityUnitCode|XYD|
|quantityUnitCode|XYF|
|quantityUnitCode|XYG|
|quantityUnitCode|XYH|
|quantityUnitCode|XYJ|
|quantityUnitCode|XYK|
|quantityUnitCode|XYL|
|quantityUnitCode|XYM|
|quantityUnitCode|XYN|
|quantityUnitCode|XYP|
|quantityUnitCode|XYQ|
|quantityUnitCode|XYR|
|quantityUnitCode|XYS|
|quantityUnitCode|XYT|
|quantityUnitCode|XYV|
|quantityUnitCode|XYW|
|quantityUnitCode|XYX|
|quantityUnitCode|XYY|
|quantityUnitCode|XYZ|
|quantityUnitCode|XZA|
|quantityUnitCode|XZB|
|quantityUnitCode|XZC|
|quantityUnitCode|XZD|
|quantityUnitCode|XZF|
|quantityUnitCode|XZG|
|quantityUnitCode|XZH|
|quantityUnitCode|XZJ|
|quantityUnitCode|XZK|
|quantityUnitCode|XZL|
|quantityUnitCode|XZM|
|quantityUnitCode|XZN|
|quantityUnitCode|XZP|
|quantityUnitCode|XZQ|
|quantityUnitCode|XZR|
|quantityUnitCode|XZS|
|quantityUnitCode|XZT|
|quantityUnitCode|XZU|
|quantityUnitCode|XZV|
|quantityUnitCode|XZW|
|quantityUnitCode|XZX|
|quantityUnitCode|XZY|
|quantityUnitCode|XZZ|
|quantityUnitCode|04|
|quantityUnitCode|05|
|quantityUnitCode|08|
|quantityUnitCode|16|
|quantityUnitCode|17|
|quantityUnitCode|18|
|quantityUnitCode|19|
|quantityUnitCode|26|
|quantityUnitCode|29|
|quantityUnitCode|30|
|quantityUnitCode|31|
|quantityUnitCode|32|
|quantityUnitCode|36|
|quantityUnitCode|43|
|quantityUnitCode|44|
|quantityUnitCode|45|
|quantityUnitCode|46|
|quantityUnitCode|47|
|quantityUnitCode|48|
|quantityUnitCode|53|
|quantityUnitCode|54|
|quantityUnitCode|62|
|quantityUnitCode|63|
|quantityUnitCode|64|
|quantityUnitCode|66|
|quantityUnitCode|69|
|quantityUnitCode|71|
|quantityUnitCode|72|
|quantityUnitCode|73|
|quantityUnitCode|76|
|quantityUnitCode|78|
|quantityUnitCode|84|
|quantityUnitCode|90|
|quantityUnitCode|92|
|quantityUnitCode|93|
|quantityUnitCode|94|
|quantityUnitCode|95|
|quantityUnitCode|96|
|quantityUnitCode|97|
|quantityUnitCode|98|
|quantityUnitCode|1A|
|quantityUnitCode|1B|
|quantityUnitCode|1C|
|quantityUnitCode|1D|
|quantityUnitCode|1E|
|quantityUnitCode|1F|
|quantityUnitCode|1G|
|quantityUnitCode|1H|
|quantityUnitCode|1J|
|quantityUnitCode|1K|
|quantityUnitCode|1L|
|quantityUnitCode|1M|
|quantityUnitCode|1X|
|quantityUnitCode|2V|
|quantityUnitCode|2W|
|quantityUnitCode|3E|
|quantityUnitCode|3G|
|quantityUnitCode|3H|
|quantityUnitCode|3I|
|quantityUnitCode|4A|
|quantityUnitCode|4B|
|quantityUnitCode|4E|
|quantityUnitCode|5C|
|quantityUnitCode|5F|
|quantityUnitCode|5G|
|quantityUnitCode|5H|
|quantityUnitCode|5I|
|quantityUnitCode|5K|
|quantityUnitCode|5P|
|quantityUnitCode|5Q|
|quantityUnitCode|A1|
|quantityUnitCode|A25|
|quantityUnitCode|A50|
|quantityUnitCode|A51|
|quantityUnitCode|A52|
|quantityUnitCode|A57|
|quantityUnitCode|A58|
|quantityUnitCode|A60|
|quantityUnitCode|A61|
|quantityUnitCode|A62|
|quantityUnitCode|A63|
|quantityUnitCode|A64|
|quantityUnitCode|A65|
|quantityUnitCode|A66|
|quantityUnitCode|A67|
|quantityUnitCode|A77|
|quantityUnitCode|A78|
|quantityUnitCode|A79|
|quantityUnitCode|A80|
|quantityUnitCode|A81|
|quantityUnitCode|A82|
|quantityUnitCode|A83|
|quantityUnitCode|AJ|
|quantityUnitCode|AM|
|quantityUnitCode|AP|
|quantityUnitCode|AR|
|quantityUnitCode|ARE|
|quantityUnitCode|ATT|
|quantityUnitCode|AV|
|quantityUnitCode|AW|
|quantityUnitCode|B0|
|quantityUnitCode|B2|
|quantityUnitCode|B36|
|quantityUnitCode|B37|
|quantityUnitCode|B38|
|quantityUnitCode|B39|
|quantityUnitCode|B40|
|quantityUnitCode|B5|
|quantityUnitCode|B51|
|quantityUnitCode|B6|
|quantityUnitCode|B65|
|quantityUnitCode|B9|
|quantityUnitCode|BD|
|quantityUnitCode|BE|
|quantityUnitCode|BG|
|quantityUnitCode|BH|
|quantityUnitCode|BJ|
|quantityUnitCode|BK|
|quantityUnitCode|BL|
|quantityUnitCode|BO|
|quantityUnitCode|BR|
|quantityUnitCode|BT|
|quantityUnitCode|BW|
|quantityUnitCode|BX|
|quantityUnitCode|BZ|
|quantityUnitCode|C1|
|quantityUnitCode|C2|
|quantityUnitCode|C4|
|quantityUnitCode|C5|
|quantityUnitCode|C6|
|quantityUnitCode|C77|
|quantityUnitCode|C98|
|quantityUnitCode|CA|
|quantityUnitCode|CH|
|quantityUnitCode|CJ|
|quantityUnitCode|CK|
|quantityUnitCode|CL|
|quantityUnitCode|CO|
|quantityUnitCode|CQ|
|quantityUnitCode|CR|
|quantityUnitCode|CS|
|quantityUnitCode|CT|
|quantityUnitCode|CU|
|quantityUnitCode|CV|
|quantityUnitCode|CY|
|quantityUnitCode|CZ|
|quantityUnitCode|D14|
|quantityUnitCode|D28|
|quantityUnitCode|D35|
|quantityUnitCode|D37|
|quantityUnitCode|D38|
|quantityUnitCode|D39|
|quantityUnitCode|D40|
|quantityUnitCode|D64|
|quantityUnitCode|D66|
|quantityUnitCode|D67|
|quantityUnitCode|D7|
|quantityUnitCode|D70|
|quantityUnitCode|D71|
|quantityUnitCode|D72|
|quantityUnitCode|D75|
|quantityUnitCode|D76|
|quantityUnitCode|D79|
|quantityUnitCode|D8|
|quantityUnitCode|D9|
|quantityUnitCode|D90|
|quantityUnitCode|D92|
|quantityUnitCode|D96|
|quantityUnitCode|D97|
|quantityUnitCode|D98|
|quantityUnitCode|D99|
|quantityUnitCode|DC|
|quantityUnitCode|DE|
|quantityUnitCode|DI|
|quantityUnitCode|DQ|
|quantityUnitCode|DR|
|quantityUnitCode|DRM|
|quantityUnitCode|DS|
|quantityUnitCode|DU|
|quantityUnitCode|DX|
|quantityUnitCode|DY|
|quantityUnitCode|E2|
|quantityUnitCode|E3|
|quantityUnitCode|E5|
|quantityUnitCode|EC|
|quantityUnitCode|EP|
|quantityUnitCode|EV|
|quantityUnitCode|F1|
|quantityUnitCode|F9|
|quantityUnitCode|FB|
|quantityUnitCode|FD|
|quantityUnitCode|FE|
|quantityUnitCode|FG|
|quantityUnitCode|FM|
|quantityUnitCode|G7|
|quantityUnitCode|GC|
|quantityUnitCode|GD|
|quantityUnitCode|GH|
|quantityUnitCode|GK|
|quantityUnitCode|GN|
|quantityUnitCode|GRT|
|quantityUnitCode|GT|
|quantityUnitCode|GW|
|quantityUnitCode|GY|
|quantityUnitCode|GZ|
|quantityUnitCode|H1|
|quantityUnitCode|H2|
|quantityUnitCode|HAR|
|quantityUnitCode|HD|
|quantityUnitCode|HE|
|quantityUnitCode|HF|
|quantityUnitCode|HI|
|quantityUnitCode|HJ|
|quantityUnitCode|HK|
|quantityUnitCode|HL|
|quantityUnitCode|HN|
|quantityUnitCode|HO|
|quantityUnitCode|HP|
|quantityUnitCode|HS|
|quantityUnitCode|HT|
|quantityUnitCode|HY|
|quantityUnitCode|IC|
|quantityUnitCode|IF|
|quantityUnitCode|II|
|quantityUnitCode|IL|
|quantityUnitCode|IM|
|quantityUnitCode|IP|
|quantityUnitCode|IT|
|quantityUnitCode|JB|
|quantityUnitCode|JG|
|quantityUnitCode|JO|
|quantityUnitCode|JR|
|quantityUnitCode|K5|
|quantityUnitCode|KD|
|quantityUnitCode|KF|
|quantityUnitCode|KG|
|quantityUnitCode|KS|
|quantityUnitCode|KTM|
|quantityUnitCode|LC|
|quantityUnitCode|LE|
|quantityUnitCode|LI|
|quantityUnitCode|LJ|
|quantityUnitCode|LX|
|quantityUnitCode|M0|
|quantityUnitCode|MA|
|quantityUnitCode|MF|
|quantityUnitCode|MK|
|quantityUnitCode|MQ|
|quantityUnitCode|MT|
|quantityUnitCode|MV|
|quantityUnitCode|N2|
|quantityUnitCode|NB|
|quantityUnitCode|NBB|
|quantityUnitCode|NC|
|quantityUnitCode|ND|
|quantityUnitCode|NE|
|quantityUnitCode|NG|
|quantityUnitCode|NH|
|quantityUnitCode|NI|
|quantityUnitCode|NJ|
|quantityUnitCode|NN|
|quantityUnitCode|NPL|
|quantityUnitCode|NPR|
|quantityUnitCode|NQ|
|quantityUnitCode|NR|
|quantityUnitCode|NRL|
|quantityUnitCode|NTT|
|quantityUnitCode|NV|
|quantityUnitCode|NY|
|quantityUnitCode|OP|
|quantityUnitCode|OZ|
|quantityUnitCode|P0|
|quantityUnitCode|P3|
|quantityUnitCode|P4|
|quantityUnitCode|P6|
|quantityUnitCode|P7|
|quantityUnitCode|P8|
|quantityUnitCode|P9|
|quantityUnitCode|PA|
|quantityUnitCode|PB|
|quantityUnitCode|PE|
|quantityUnitCode|PF|
|quantityUnitCode|PG|
|quantityUnitCode|PK|
|quantityUnitCode|PL|
|quantityUnitCode|PM|
|quantityUnitCode|PN|
|quantityUnitCode|PT|
|quantityUnitCode|PU|
|quantityUnitCode|PV|
|quantityUnitCode|PW|
|quantityUnitCode|PY|
|quantityUnitCode|PZ|
|quantityUnitCode|QD|
|quantityUnitCode|QH|
|quantityUnitCode|QK|
|quantityUnitCode|QT|
|quantityUnitCode|R4|
|quantityUnitCode|RA|
|quantityUnitCode|RD|
|quantityUnitCode|RG|
|quantityUnitCode|RK|
|quantityUnitCode|RL|
|quantityUnitCode|RN|
|quantityUnitCode|RO|
|quantityUnitCode|RS|
|quantityUnitCode|RU|
|quantityUnitCode|S5|
|quantityUnitCode|S6|
|quantityUnitCode|S7|
|quantityUnitCode|S8|
|quantityUnitCode|SA|
|quantityUnitCode|SD|
|quantityUnitCode|SE|
|quantityUnitCode|SHT|
|quantityUnitCode|SK|
|quantityUnitCode|SL|
|quantityUnitCode|SN|
|quantityUnitCode|SO|
|quantityUnitCode|SP|
|quantityUnitCode|SS|
|quantityUnitCode|SST|
|quantityUnitCode|ST|
|quantityUnitCode|SV|
|quantityUnitCode|T1|
|quantityUnitCode|T4|
|quantityUnitCode|T5|
|quantityUnitCode|T6|
|quantityUnitCode|T7|
|quantityUnitCode|T8|
|quantityUnitCode|TA|
|quantityUnitCode|TC|
|quantityUnitCode|TD|
|quantityUnitCode|TE|
|quantityUnitCode|TF|
|quantityUnitCode|TJ|
|quantityUnitCode|TK|
|quantityUnitCode|TL|
|quantityUnitCode|TN|
|quantityUnitCode|TQ|
|quantityUnitCode|TR|
|quantityUnitCode|TS|
|quantityUnitCode|TSD|
|quantityUnitCode|TSH|
|quantityUnitCode|TT|
|quantityUnitCode|TU|
|quantityUnitCode|TV|
|quantityUnitCode|TW|
|quantityUnitCode|TY|
|quantityUnitCode|UA|
|quantityUnitCode|UD|
|quantityUnitCode|UE|
|quantityUnitCode|UF|
|quantityUnitCode|UH|
|quantityUnitCode|UM|
|quantityUnitCode|VI|
|quantityUnitCode|VQ|
|quantityUnitCode|VS|
|quantityUnitCode|W4|
|quantityUnitCode|WH|
|quantityUnitCode|WI|
|quantityUnitCode|WR|
|quantityUnitCode|WW|
|quantityUnitCode|YL|
|quantityUnitCode|YT|
|quantityUnitCode|Z1|
|quantityUnitCode|Z2|
|quantityUnitCode|Z3|
|quantityUnitCode|Z4|
|quantityUnitCode|Z5|
|quantityUnitCode|Z6|
|quantityUnitCode|Z8|

<h2 id="tocS_OriginatorCustomerParty">OriginatorCustomerParty</h2>
<!-- backwards compatibility -->
<a id="schemaoriginatorcustomerparty"></a>
<a id="schema_OriginatorCustomerParty"></a>
<a id="tocSoriginatorcustomerparty"></a>
<a id="tocsoriginatorcustomerparty"></a>

```json
{
  "party": {
    "address": {
      "city": "string",
      "country": "AD",
      "county": "string",
      "street1": "string",
      "street2": "string",
      "zip": "string"
    },
    "companyName": "string",
    "contact": {
      "email": "user@example.com",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phone": "string"
    }
  }
}
```

The originator of the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|[Party](#schemaparty)|true|none|A party that can receive or send invoices|

<h2 id="tocS_OriginatorParty">OriginatorParty</h2>
<!-- backwards compatibility -->
<a id="schemaoriginatorparty"></a>
<a id="schema_OriginatorParty"></a>
<a id="tocSoriginatorparty"></a>
<a id="tocsoriginatorparty"></a>

```json
{
  "party": {}
}
```

The originator of the line.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|object|true|none|none|

<h2 id="tocS_Party">Party</h2>
<!-- backwards compatibility -->
<a id="schemaparty"></a>
<a id="schema_Party"></a>
<a id="tocSparty"></a>
<a id="tocsparty"></a>

```json
{
  "address": {
    "city": "string",
    "country": "AD",
    "county": "string",
    "street1": "string",
    "street2": "string",
    "zip": "string"
  },
  "companyName": "string",
  "contact": {
    "email": "user@example.com",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "phone": "string"
  }
}
```

A party that can receive or send invoices

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The address|
|companyName|string|true|none|The name of the company receiving the invoice|
|contact|[Contact](#schemacontact)|false|none|Contact details for the invoice|

<h2 id="tocS_PaymentMeans">PaymentMeans</h2>
<!-- backwards compatibility -->
<a id="schemapaymentmeans"></a>
<a id="schema_PaymentMeans"></a>
<a id="tocSpaymentmeans"></a>
<a id="tocspaymentmeans"></a>

```json
{
  "account": "string",
  "amount": 0,
  "branche_code": "string",
  "code": "credit_transfer",
  "holder": "string",
  "mandate": "string",
  "network": "string",
  "paymentId": "string"
}
```

A PaymentMeans is a way to pay the invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account number.|
|amount|number|false|none|The amount to be paid for this category. Only used for Dutch G-Account invoices. The amount nl_ga_beneficiary + amount nl_ga_gaccount must add up to the amountExcludingVat|
|branche_code|string|false|none|The bank branch code. Not required for IBAN numbers. Often referred to as Swift or Bic code.|
|code|string|true|none|How the invoice has been / will be paid. The code determines which type of PaymentMeans is used and which fields are mandatory.<br>++++<br><ul>    <li>        <strong>cash</strong><br/>        The invoice was/is paid in cash.<br/>    </li>    <li>        <strong>bank_cheque</strong><br/>        The invoice was/is paid via a bank cheque.<br/>    </li>    <li>        <strong>cashiers_cheque</strong><br/>        The invoice was/is paid via a cashiers cheque.<br/>    </li>    <li>        <strong>credit_transfer</strong><br/>        The amount is to be transfered into a bank account. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>debit_transfer</strong><br/>        Used for CreditNotes. The amount is to be transfered by the sender of the document into the bank account of the receiver of the document. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number. For New Zealand, this should hold the full 16 digit bank account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>branche_code</strong><br/>                In case of an IBAN, the account alone number is sufficient. In other cases, like a BBAN, a BIC code or other additional identifier is required. For Australia, the BSB goes here. Optional.            </li>        </ul>    </li>    <li>        <strong>direct_debit</strong><br/>        Direct debit. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                The direct debit mandate id. Mandatory.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>card, credit_card, bank_card (credit_card, bank_card are deprecated)</strong><br/>        E.g. credit or debit card. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The card number, but never more than the last four digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>            <li>                <strong>network</strong><br/>                The payment network, e.g. VISA, SEPA. Optional, but recommended since a default of "N/A" may be used if not provided.            </li>        </ul>    </li>    <li>        <strong>online_payment_service</strong><br/>        An online payment service has been or will be used. Relevant additional fields:<br/>        <ul>            <li>                <strong>network</strong><br/>                The payment network, e.g. PayPal. <strong>Mandatory unless url is provided</strong>.            </li>            <li>                <strong>url</strong><br/>                The URL to execute the payment. <strong>Mandatory unless network is provided</strong>.            </li>        </ul>        It is possible to provide both url and network. Note that for UBL, in countries where this payment means is not allowed, this will translate into an AdditionalDocumentReference.Attachment.ExternalReference element.    </li>    <li>        <strong>standing_agreement</strong><br/>        The payment means has been agreed out of band. Relevant additional fields: none.    </li>    <li>        <strong>aunz_npp_payid, aunz_npp (aunz_npp is deprecated)</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                PayID. May be an email address, ABN, mobile phone number etc. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_npp_payto</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Account number. <strong>Mandatory</strong>.            </li>            <li>                <strong>mandate</strong><br/>                Mandate/direct debit authority reference/PayTo Agreement. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>aunz_bpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_postbillpay</strong><br/>        Australia/New Zealand New Payments Platform. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Biller code. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>aunz_uri</strong><br/>        Australia/New Zealand URI. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                Payment URI. <strong>Mandatory.</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>    </li>    <li>        <strong>se_bankgiro</strong><br/>        Swedish Bankgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 7 or 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>se_plusgiro</strong><br/>        Swedish Plusgiro. Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The account number from which the funds will be debited, 2 - 8 digits. <strong>Mandatory</strong>.            </li>            <li>                <strong>holder</strong><br/>                The account holder name. Optional.            </li>        </ul>        <br/>    </li>    <li>        <strong>sg_giro</strong><br/>        Singapore GIRO-system (direct debit). Relevant additional fields: none.    </li>    <li>        <strong>sg_card</strong><br/>        Singapore CreditCard payment. Relevant additional fields: none.    </li>    <li>        <strong>sg_paynow</strong><br/>        Singapore PayNow Corporate.  Relevant additional fields:<br/>        <ul>            <li>                <strong>account</strong><br/>                The UEN, format: UENxxxxxxxxxx. <strong>Mandatory</strong>.            </li>        </ul>    </li>    <li>        <strong>it_mav</strong><br/>        Italy MAV payment.    </li>    <li>        <strong>it_pagopa</strong><br/>        Italy PagoPA payment.    </li></ul><br>++++<br>|
|holder|string|false|none|The name of the account holder.|
|mandate|string|false|none|The direct debit mandate code.|
|network|string|false|none|The name of the card network, e.g. VISA.|
|paymentId|string|false|none|The payment id that you will use to match the payment against the invoice.|

#### Enumerated Values

|Property|Value|
|---|---|
|code|credit_transfer|
|code|debit_transfer|
|code|direct_debit|
|code|card|
|code|bank_card|
|code|credit_card|
|code|online_payment_service|
|code|cash|
|code|bank_cheque|
|code|cashiers_cheque|
|code|standing_agreement|
|code|aunz_npp|
|code|aunz_npp_payid|
|code|aunz_npp_payto|
|code|aunz_bpay|
|code|aunz_postbillpay|
|code|aunz_uri|
|code|se_bankgiro|
|code|se_plusgiro|
|code|sg_giro|
|code|sg_card|
|code|sg_paynow|
|code|it_mav|
|code|it_pagopa|
|code|nl_ga_beneficiary|
|code|nl_ga_gaccount|
|code|undefined|

<h2 id="tocS_PaymentTerms">PaymentTerms</h2>
<!-- backwards compatibility -->
<a id="schemapaymentterms"></a>
<a id="schema_PaymentTerms"></a>
<a id="tocSpaymentterms"></a>
<a id="tocspaymentterms"></a>

```json
{
  "note": "string"
}
```

The payment terms of the document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|The note for the payment terms.|

<h2 id="tocS_PeppolIdentifier">PeppolIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapeppolidentifier"></a>
<a id="schema_PeppolIdentifier"></a>
<a id="tocSpeppolidentifier"></a>
<a id="tocspeppolidentifier"></a>

```json
{
  "corppass": {
    "client_redirect_fail_url": "stringstrin",
    "client_redirect_success_url": "stringstrin",
    "corppass_url": "stringstrin",
    "enabled": false,
    "flow_type": "corppass_flow_redirect",
    "signer_email": "string",
    "signer_name": "string",
    "simulate_corppass": false,
    "status": "corppass_no_status,"
  },
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corppass|[CorpPass](#schemacorppass)|false|none|none|
|identifier|string|false|none|The identifier.|
|scheme|string|false|none|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|
|superscheme|string|false|none|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|

<h2 id="tocS_PeppolIdentifierCreate">PeppolIdentifierCreate</h2>
<!-- backwards compatibility -->
<a id="schemapeppolidentifiercreate"></a>
<a id="schema_PeppolIdentifierCreate"></a>
<a id="tocSpeppolidentifiercreate"></a>
<a id="tocspeppolidentifiercreate"></a>

```json
{
  "corppass": {
    "client_redirect_fail_url": "stringstrin",
    "client_redirect_success_url": "stringstrin",
    "enabled": true,
    "flow_type": "corppass_flow_redirect",
    "signer_email": "string",
    "signer_name": "string",
    "simulate_corppass": false
  },
  "identifier": "string",
  "scheme": "string",
  "superscheme": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corppass|[CorpPassCreate](#schemacorppasscreate)|false|none|none|
|identifier|string|true|none|The identifier.|
|scheme|string|true|none|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|
|superscheme|string|true|none|The superscheme of the identifier. Should always be "iso6523-actorid-upis".|

<h2 id="tocS_PreflightInvoiceRecipientResult">PreflightInvoiceRecipientResult</h2>
<!-- backwards compatibility -->
<a id="schemapreflightinvoicerecipientresult"></a>
<a id="schema_PreflightInvoiceRecipientResult"></a>
<a id="tocSpreflightinvoicerecipientresult"></a>
<a id="tocspreflightinvoicerecipientresult"></a>

```json
{
  "code": "ok"
}
```

The result of preflighting an invoice recipient

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The result code of the preflight request|

#### Enumerated Values

|Property|Value|
|---|---|
|code|ok|
|code|nok|

<h2 id="tocS_PublicIdentifier">PublicIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemapublicidentifier"></a>
<a id="schema_PublicIdentifier"></a>
<a id="tocSpublicidentifier"></a>
<a id="tocspublicidentifier"></a>

```json
{
  "id": "string",
  "scheme": "string"
}
```

A public identifier for this customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The actual identifier.|
|scheme|string|true|none|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|

<h2 id="tocS_PublicIdentifiers">PublicIdentifiers</h2>
<!-- backwards compatibility -->
<a id="schemapublicidentifiers"></a>
<a id="schema_PublicIdentifiers"></a>
<a id="tocSpublicidentifiers"></a>
<a id="tocspublicidentifiers"></a>

```json
[
  {
    "id": "string",
    "scheme": "string"
  }
]
```

A list of public identifiers that uniquely identify this customer.

<h2 id="tocS_PurchaseInvoice">PurchaseInvoice</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoice"></a>
<a id="schema_PurchaseInvoice"></a>
<a id="tocSpurchaseinvoice"></a>
<a id="tocspurchaseinvoice"></a>

```json
{
  "accounting": {
    "code": "string",
    "list": "string",
    "list_version": "string",
    "name": "string"
  },
  "accounting_cost": "string",
  "allowance_charge": 0,
  "allowance_charges": [
    {
      "amount_excluding_tax": 0,
      "amount_excluding_vat": "string",
      "reason": "string",
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "vat": {
        "amount": "string",
        "percentage": "string"
      }
    }
  ],
  "amount_including_vat": 0,
  "attachments": [
    {
      "content_type": "string",
      "document": "string"
    }
  ],
  "billing_reference": "string",
  "buyer_reference": "string",
  "contract_document_reference": "string",
  "delivery": {
    "actual_date": "string",
    "location": {
      "building_number": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "department": "string",
      "id": "string",
      "line1": "string",
      "line2": "string",
      "neighborhood": "string",
      "scheme_id": "string",
      "secondary_number": "string",
      "zip": "string"
    },
    "party": {
      "name": "string"
    }
  },
  "document": "string",
  "document_currency_code": "string",
  "document_totals": {
    "payable": 0,
    "prepaid": 0,
    "rounding": 0,
    "total": 0
  },
  "document_type": "invoice",
  "due_date": "string",
  "external_key": "string",
  "external_user_id": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "invoice_lines": [
    {
      "accounting": {
        "code": "string",
        "list": "string",
        "list_version": "string",
        "name": "string"
      },
      "allowance_charge": 0,
      "allowance_charge_array": [
        {
          "amount": 0,
          "reason": "string"
        }
      ],
      "allowance_charges": [
        0
      ],
      "amount_excluding_tax": 0,
      "amount_excluding_vat": 0,
      "description": "string",
      "name": "string",
      "period_end": "string",
      "period_start": "string",
      "price": {
        "base_quantity": 0,
        "price_amount": 0
      },
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "units": {
        "quantity": 0,
        "unit_code": "string"
      },
      "vat": {
        "amount": 0,
        "country": "string",
        "percentage": 0
      }
    }
  ],
  "invoice_number": "string",
  "invoice_type": "invoice",
  "issue_date": "string",
  "legal_entity_id": 0,
  "note": "string",
  "order_reference": "string",
  "payment_means": {
    "iban": "string",
    "id": "string"
  },
  "payment_means_array": [
    {
      "account": "string",
      "branch_code": "string",
      "holder": "string",
      "mandate": "string",
      "network": "string",
      "payment_id": "string",
      "type": "BankPaymentMean"
    }
  ],
  "payment_means_payment_id": "string",
  "payment_terms_note": "string",
  "period_end": "string",
  "period_start": "string",
  "project_reference": "string",
  "sender": {
    "billing_contact": {
      "email": "string",
      "first_name": "string",
      "last_name": "string"
    },
    "building_number": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "department": "string",
    "identifiers": [
      {
        "corppass": {
          "client_redirect_fail_url": "stringstrin",
          "client_redirect_success_url": "stringstrin",
          "corppass_url": "stringstrin",
          "enabled": false,
          "flow_type": "corppass_flow_redirect",
          "signer_email": "string",
          "signer_name": "string",
          "simulate_corppass": false,
          "status": "corppass_no_status,"
        },
        "identifier": "string",
        "scheme": "string",
        "superscheme": "string"
      }
    ],
    "legal_name": "string",
    "line1": "string",
    "line2": "string",
    "neighborhood": "string",
    "party_name": "string",
    "peppol_identifiers": {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    },
    "secondary_number": "string",
    "zip": "string"
  },
  "source": "peppol",
  "sub_type": "invoice",
  "system_generated_primary_image": true,
  "tax_point_date": "string",
  "tax_subtotals": [
    {
      "amount_excluding_tax": 0,
      "amount_excluding_vat": "string",
      "tax": {
        "tax": {
          "amount": 0,
          "category": "standard",
          "category_code": "string",
          "country": "string",
          "percentage": 0,
          "type": "VAT"
        }
      },
      "vat": {
        "amount": "string",
        "percentage": "string"
      }
    }
  ],
  "tax_system": "string",
  "vat_reverse_charge": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounting|[PurchaseInvoiceAccountingDetails](#schemapurchaseinvoiceaccountingdetails)|false|none|none|
|accounting_cost|string|false|none|The accounting cost code.|
|allowance_charge|number|false|none|DEPRECATED - Use the allowance_charges array.|
|allowance_charges|[[PurchaseInvoiceAllowanceCharge](#schemapurchaseinvoiceallowancecharge)]|false|none|none|
|amount_including_vat|number|false|none|DEPRECATED - Use amount_including_tax.|
|attachments|[[PurchaseInvoiceAttachment](#schemapurchaseinvoiceattachment)]|false|none|none|
|billing_reference|string|false|none|Reference to the previous invoice this invoice relates to.|
|buyer_reference|string|false|none|Reference provided by the buyer. Used for routing.|
|contract_document_reference|string|false|none|Reference to the contract.|
|delivery|object|false|none|The details of the delivery associated with this invoice.|
|document|string|false|none|DEPRECATED. Use the new atatchments array.|
|document_currency_code|string|false|none|The ISO 4217 currency for the invoice.|
|document_totals|[PurchaseInvoiceDocumentTotals](#schemapurchaseinvoicedocumenttotals)|false|none|none|
|document_type|string|false|none|The type of document. Only "invoice" for now.|
|due_date|string|false|none|The date the invoice must be payed by. Format "YYYY-MM-DD".|
|external_key|string|false|none|Deprecated. Used for accountants. The id you specified for the organization.|
|external_user_id|string|false|none|Deprecated. Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created.|
|guid|string(uuid)|false|none|The GUID of the invoice|
|invoice_lines|[[PurchaseInvoiceInvoiceLine](#schemapurchaseinvoiceinvoiceline)]|false|none|none|
|invoice_number|string|false|none|The invoicenumber.|
|invoice_type|string|false|none|The type of invoice.|
|issue_date|string|false|none|The date the invoice was issued. Format "YYYY-MM-DD".|
|legal_entity_id|integer(int64)|false|none|The id of the LegalEntity the invoice was received for.|
|note|string|false|none|The invoice level note.|
|order_reference|string|false|none|Reference to the order. Used for matching the invoice to an order.|
|payment_means|object|false|none|DEPRECATED - Use the new payment_means_array array.|
|payment_means_array|[[PurchaseInvoicePaymentMeans](#schemapurchaseinvoicepaymentmeans)]|false|none|The different payment means that can be used to pay the invoice.|
|payment_means_payment_id|string|false|none|DEPRECATED - use the payment_id property in the payment_means_array|
|payment_terms_note|string|false|none|A textual description of the payment terms.|
|period_end|string|false|none|The end date of the period this invoice relates to. Format "YYYY-MM-DD".|
|period_start|string|false|none|The start date of the period this invoice relates to. Format "YYYY-MM-DD".|
|project_reference|string|false|none|Reference to the project.|
|sender|[PurchaseInvoiceSender](#schemapurchaseinvoicesender)|false|none|none|
|source|string|false|none|The source the invoice was received from.|
|sub_type|string|false|none|The subtype of document.|
|system_generated_primary_image|boolean|false|none|Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender.|
|tax_point_date|string|false|none|The date the invoice was issued for tax purposes. In most countries MUST match the issue_date. Format "YYYY-MM-DD".|
|tax_subtotals|[[PurchaseInvoiceTaxSubtotal](#schemapurchaseinvoicetaxsubtotal)]|false|none|none|
|tax_system|string|false|none|The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding.|
|vat_reverse_charge|boolean|false|none|DEPRECATED - This is now part of each invoice line.|

#### Enumerated Values

|Property|Value|
|---|---|
|document_type|invoice|
|invoice_type|invoice|
|invoice_type|creditnote|
|invoice_type|correctioninvoice|
|source|peppol|
|source|script|
|source|supplier|
|source|email|
|sub_type|invoice|
|sub_type|creditnote|
|sub_type|correctioninvoice|

<h2 id="tocS_PurchaseInvoiceAccountingDetails">PurchaseInvoiceAccountingDetails</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceaccountingdetails"></a>
<a id="schema_PurchaseInvoiceAccountingDetails"></a>
<a id="tocSpurchaseinvoiceaccountingdetails"></a>
<a id="tocspurchaseinvoiceaccountingdetails"></a>

```json
{
  "code": "string",
  "list": "string",
  "list_version": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The the code of the general ledger account.|
|list|string|false|none|The name of the list for the code, e.g. "RGS".|
|list_version|string|false|none|The version of the list for the code, e.g. "1.1".|
|name|string|false|none|A textual description of the code.|

<h2 id="tocS_PurchaseInvoiceAllowanceCharge">PurchaseInvoiceAllowanceCharge</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceallowancecharge"></a>
<a id="schema_PurchaseInvoiceAllowanceCharge"></a>
<a id="tocSpurchaseinvoiceallowancecharge"></a>
<a id="tocspurchaseinvoiceallowancecharge"></a>

```json
{
  "amount_excluding_tax": 0,
  "amount_excluding_vat": "string",
  "reason": "string",
  "tax": {
    "tax": {
      "amount": 0,
      "category": "standard",
      "category_code": "string",
      "country": "string",
      "percentage": 0,
      "type": "VAT"
    }
  },
  "vat": {
    "amount": "string",
    "percentage": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_excluding_tax|number|false|none|The amount excluding tax.|
|amount_excluding_vat|string|false|none|DEPRECATED - use amount_excluding_tax.|
|reason|string|false|none|The reason for the allowance or charge.|
|tax|[PurchaseInvoiceTax](#schemapurchaseinvoicetax)|false|none|none|
|vat|[PurchaseInvoiceVat](#schemapurchaseinvoicevat)|false|none|DEPRECATED - Use tax.|

<h2 id="tocS_PurchaseInvoiceAttachment">PurchaseInvoiceAttachment</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceattachment"></a>
<a id="schema_PurchaseInvoiceAttachment"></a>
<a id="tocSpurchaseinvoiceattachment"></a>
<a id="tocspurchaseinvoiceattachment"></a>

```json
{
  "content_type": "string",
  "document": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|false|none|The attachment content type (mime type).|
|document|string|false|none|The Base64 encoded document attachment.|

<h2 id="tocS_PurchaseInvoiceDocumentTotals">PurchaseInvoiceDocumentTotals</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicedocumenttotals"></a>
<a id="schema_PurchaseInvoiceDocumentTotals"></a>
<a id="tocSpurchaseinvoicedocumenttotals"></a>
<a id="tocspurchaseinvoicedocumenttotals"></a>

```json
{
  "payable": 0,
  "prepaid": 0,
  "rounding": 0,
  "total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payable|number|false|none|The total invoice amount payable including tax.|
|prepaid|number|false|none|The amount already paid.|
|rounding|number|false|none|The difference between the payable amount and the total invoice amount including tax.|
|total|number|false|none|The total invoice amount, including tax. This is equal to the sum of the invoice_lines (amount_excluding_tax + tax.amount) and the allowances and charges.|

<h2 id="tocS_PurchaseInvoiceInvoiceLine">PurchaseInvoiceInvoiceLine</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceinvoiceline"></a>
<a id="schema_PurchaseInvoiceInvoiceLine"></a>
<a id="tocSpurchaseinvoiceinvoiceline"></a>
<a id="tocspurchaseinvoiceinvoiceline"></a>

```json
{
  "accounting": {
    "code": "string",
    "list": "string",
    "list_version": "string",
    "name": "string"
  },
  "allowance_charge": 0,
  "allowance_charge_array": [
    {
      "amount": 0,
      "reason": "string"
    }
  ],
  "allowance_charges": [
    0
  ],
  "amount_excluding_tax": 0,
  "amount_excluding_vat": 0,
  "description": "string",
  "name": "string",
  "period_end": "string",
  "period_start": "string",
  "price": {
    "base_quantity": 0,
    "price_amount": 0
  },
  "tax": {
    "tax": {
      "amount": 0,
      "category": "standard",
      "category_code": "string",
      "country": "string",
      "percentage": 0,
      "type": "VAT"
    }
  },
  "units": {
    "quantity": 0,
    "unit_code": "string"
  },
  "vat": {
    "amount": 0,
    "country": "string",
    "percentage": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounting|[PurchaseInvoiceAccountingDetails](#schemapurchaseinvoiceaccountingdetails)|false|none|none|
|allowance_charge|number|false|none|DEPRECATED - use allowance_charges.|
|allowance_charge_array|[[PurchaseInvoiceInvoiceLineAllowanceCharge](#schemapurchaseinvoiceinvoicelineallowancecharge)]|false|none|none|
|allowance_charges|[number]|false|none|Deprecated.|
|amount_excluding_tax|number|false|none|The amount excluding Tax. This is equal to quantity x price_amount + ∑ allowance_charges.|
|amount_excluding_vat|number|false|none|DEPRECATED - use amount_excluding_tax. The amount excluding VAT.|
|description|string|false|none|The description for the invoice line.|
|name|string|false|none|A short name for the invoice line.|
|period_end|string|false|none|The end date of the period this invoice line relates to. Format "YYYY-MM-DD".|
|period_start|string|false|none|The start date of the period this invoice line relates to. Format "YYYY-MM-DD".|
|price|[PurchaseInvoiceInvoiceLinePrice](#schemapurchaseinvoiceinvoicelineprice)|false|none|none|
|tax|[PurchaseInvoiceTax](#schemapurchaseinvoicetax)|false|none|none|
|units|[PurchaseInvoiceInvoiceLineItem](#schemapurchaseinvoiceinvoicelineitem)|false|none|none|
|vat|object|false|none|DEPRECATED - use tax. The VAT details for the invoice line.|

<h2 id="tocS_PurchaseInvoiceInvoiceLineAllowanceCharge">PurchaseInvoiceInvoiceLineAllowanceCharge</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceinvoicelineallowancecharge"></a>
<a id="schema_PurchaseInvoiceInvoiceLineAllowanceCharge"></a>
<a id="tocSpurchaseinvoiceinvoicelineallowancecharge"></a>
<a id="tocspurchaseinvoiceinvoicelineallowancecharge"></a>

```json
{
  "amount": 0,
  "reason": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount of the allowance or charge.|
|reason|string|false|none|The reason for the allowance or charge.|

<h2 id="tocS_PurchaseInvoiceInvoiceLineItem">PurchaseInvoiceInvoiceLineItem</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceinvoicelineitem"></a>
<a id="schema_PurchaseInvoiceInvoiceLineItem"></a>
<a id="tocSpurchaseinvoiceinvoicelineitem"></a>
<a id="tocspurchaseinvoiceinvoicelineitem"></a>

```json
{
  "quantity": 0,
  "unit_code": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|quantity|number|false|none|The quantity of the item. Can have up to digits.|
|unit_code|string|false|none|The unit code of the quantity.|

<h2 id="tocS_PurchaseInvoiceInvoiceLinePrice">PurchaseInvoiceInvoiceLinePrice</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceinvoicelineprice"></a>
<a id="schema_PurchaseInvoiceInvoiceLinePrice"></a>
<a id="tocSpurchaseinvoiceinvoicelineprice"></a>
<a id="tocspurchaseinvoiceinvoicelineprice"></a>

```json
{
  "base_quantity": 0,
  "price_amount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_quantity|number|false|none|The number of items the price is for. Can have up to digits.|
|price_amount|number|false|none|The price for one item, excluding VAT. Can have up to digits.|

<h2 id="tocS_PurchaseInvoicePaymentMeans">PurchaseInvoicePaymentMeans</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicepaymentmeans"></a>
<a id="schema_PurchaseInvoicePaymentMeans"></a>
<a id="tocSpurchaseinvoicepaymentmeans"></a>
<a id="tocspurchaseinvoicepaymentmeans"></a>

```json
{
  "account": "string",
  "branch_code": "string",
  "holder": "string",
  "mandate": "string",
  "network": "string",
  "payment_id": "string",
  "type": "BankPaymentMean"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account number to which to transfer.|
|branch_code|string|false|none|The code identifying the bank branch. May contain a BIC/SWIFT or something appropriate for the payment method, such as "NPP" for type NppPaymentMean.|
|holder|string|false|none|The account holder name to which to transfer.|
|mandate|string|false|none|The mandate, used only for type DirectDebitPaymentMean.|
|network|string|false|none|The payment network. Used only for type CardPaymentType.|
|payment_id|string|false|none|The payment id to use when making the payment. The invoice sender will use this to match the received funds to the invoice.|
|type|string|false|none|The type of payment means. Which type are returned is determined by the &pmv= query parameter. For details see documentation for that field.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|BankPaymentMean|
|type|DirectDebitPaymentMean|
|type|CardPaymentMean|
|type|NppPaymentMean|
|type|SeBankGiroPaymentMean|
|type|SePlusgiroPaymentMean|
|type|SgCardPaymentMean|
|type|SgGiroPaymentMean|
|type|SgPaynowPaymentMean|
|type|CreditTransferPaymentMean|
|type|CreditCardPaymentMean|
|type|SeBankgiroPaymentMean|
|type|AunzNppPayidPaymentMean|
|type|OnlinePaymentServicePaymentMean|
|type|StandingAgreementPaymentMean|
|type|AunzNppPaytoPaymentMean|
|type|AunzBpayPaymentMean|
|type|AunzPostbillpayPaymentMean|
|type|AunzUriPaymentMean|

<h2 id="tocS_PurchaseInvoiceSender">PurchaseInvoiceSender</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicesender"></a>
<a id="schema_PurchaseInvoiceSender"></a>
<a id="tocSpurchaseinvoicesender"></a>
<a id="tocspurchaseinvoicesender"></a>

```json
{
  "billing_contact": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  },
  "building_number": "string",
  "city": "string",
  "country": "string",
  "county": "string",
  "department": "string",
  "identifiers": [
    {
      "corppass": {
        "client_redirect_fail_url": "stringstrin",
        "client_redirect_success_url": "stringstrin",
        "corppass_url": "stringstrin",
        "enabled": false,
        "flow_type": "corppass_flow_redirect",
        "signer_email": "string",
        "signer_name": "string",
        "simulate_corppass": false,
        "status": "corppass_no_status,"
      },
      "identifier": "string",
      "scheme": "string",
      "superscheme": "string"
    }
  ],
  "legal_name": "string",
  "line1": "string",
  "line2": "string",
  "neighborhood": "string",
  "party_name": "string",
  "peppol_identifiers": {
    "corppass": {
      "client_redirect_fail_url": "stringstrin",
      "client_redirect_success_url": "stringstrin",
      "corppass_url": "stringstrin",
      "enabled": false,
      "flow_type": "corppass_flow_redirect",
      "signer_email": "string",
      "signer_name": "string",
      "simulate_corppass": false,
      "status": "corppass_no_status,"
    },
    "identifier": "string",
    "scheme": "string",
    "superscheme": "string"
  },
  "secondary_number": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_contact|[PurchaseInvoiceSenderBillingContact](#schemapurchaseinvoicesenderbillingcontact)|false|none|none|
|building_number|string|false|none|The building number. Used in SA.|
|city|string|false|none|The city.|
|country|string|false|none|The country.|
|county|string|false|none|The county.|
|department|string|false|none|The department who sent the invoice.|
|identifiers|[[PeppolIdentifier](#schemapeppolidentifier)]|false|none|The array of identifiers for this sender.|
|legal_name|string|false|none|The legal name of the party who sent the invoice.|
|line1|string|false|none|The address|
|line2|string|false|none|The address, line 2|
|neighborhood|string|false|none|The neighborhood. Used in SA.|
|party_name|string|false|none|The party who sent the invoice.|
|peppol_identifiers|[PeppolIdentifier](#schemapeppolidentifier)|false|none|none|
|secondary_number|string|false|none|The secondary number. Used in SA.|
|zip|string|false|none|The zip code.|

<h2 id="tocS_PurchaseInvoiceSenderBillingContact">PurchaseInvoiceSenderBillingContact</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicesenderbillingcontact"></a>
<a id="schema_PurchaseInvoiceSenderBillingContact"></a>
<a id="tocSpurchaseinvoicesenderbillingcontact"></a>
<a id="tocspurchaseinvoicesenderbillingcontact"></a>

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email of the billing contact.|
|first_name|string|false|none|The first name of the billing contact.|
|last_name|string|false|none|The last name of the billing contact.|

<h2 id="tocS_PurchaseInvoiceTax">PurchaseInvoiceTax</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicetax"></a>
<a id="schema_PurchaseInvoiceTax"></a>
<a id="tocSpurchaseinvoicetax"></a>
<a id="tocspurchaseinvoicetax"></a>

```json
{
  "tax": {
    "amount": 0,
    "category": "standard",
    "category_code": "string",
    "country": "string",
    "percentage": 0,
    "type": "VAT"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tax|object|false|none|The tax element.|

<h2 id="tocS_PurchaseInvoiceTaxSubtotal">PurchaseInvoiceTaxSubtotal</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicetaxsubtotal"></a>
<a id="schema_PurchaseInvoiceTaxSubtotal"></a>
<a id="tocSpurchaseinvoicetaxsubtotal"></a>
<a id="tocspurchaseinvoicetaxsubtotal"></a>

```json
{
  "amount_excluding_tax": 0,
  "amount_excluding_vat": "string",
  "tax": {
    "tax": {
      "amount": 0,
      "category": "standard",
      "category_code": "string",
      "country": "string",
      "percentage": 0,
      "type": "VAT"
    }
  },
  "vat": {
    "amount": "string",
    "percentage": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount_excluding_tax|number|false|none|The amount excluding tax.|
|amount_excluding_vat|string|false|none|DEPRECATED - use amount_excluding_tax.|
|tax|[PurchaseInvoiceTax](#schemapurchaseinvoicetax)|false|none|none|
|vat|[PurchaseInvoiceVat](#schemapurchaseinvoicevat)|false|none|DEPRECATED - Use tax.|

<h2 id="tocS_PurchaseInvoiceUbl">PurchaseInvoiceUbl</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoiceubl"></a>
<a id="schema_PurchaseInvoiceUbl"></a>
<a id="tocSpurchaseinvoiceubl"></a>
<a id="tocspurchaseinvoiceubl"></a>

```json
{
  "external_key": "string",
  "external_user_id": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "legal_entity_id": 0,
  "system_generated_primary_image": true,
  "tax_system": "string",
  "ubl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|external_key|string|false|none|Used for accountants. The id you specified for the organization.|
|external_user_id|string|false|none|Used for the embedded portal retrieval service. The external_user_id you provided when the ShopAccount was created.|
|guid|string(uuid)|false|none|The GUID of the invoice|
|legal_entity_id|integer(int64)|false|none|The id of the LegalEntity the invoice was received for.|
|system_generated_primary_image|boolean|false|none|Whether or not the document image (PDF) was generated by Storecove. If true, it means the invoice was received without any attachments and Storecove generated one for you. If false, the invoice will contain at least one attachment, which was received from the invoice sender.|
|tax_system|string|false|none|The tax system of the invoice. Either tax_line_percentages or tax_line_amounts. The first tax system means the invoice lines contain only the tax percentages and the tax amounts are included only in the tax subtotals at the invoice level and so are only calculated at the invoice level. The tax system tax_line_amounts means that in addition to the percentage, each invoice line also contains the tax amount. The tax subtotals at the invoice level are calculated as the sum of the tax of the invoice lines. The distinction between the two tax systems has has implications for rounding.|
|ubl|string|false|none|The Base64 encoded UBL invoice.|

<h2 id="tocS_PurchaseInvoiceVat">PurchaseInvoiceVat</h2>
<!-- backwards compatibility -->
<a id="schemapurchaseinvoicevat"></a>
<a id="schema_PurchaseInvoiceVat"></a>
<a id="tocSpurchaseinvoicevat"></a>
<a id="tocspurchaseinvoicevat"></a>

```json
{
  "amount": "string",
  "percentage": "string"
}
```

DEPRECATED - Use tax.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|false|none|The VAT country.|
|percentage|string|false|none|The VAT percentage.|

<h2 id="tocS_RawDocumentData">RawDocumentData</h2>
<!-- backwards compatibility -->
<a id="schemarawdocumentdata"></a>
<a id="schema_RawDocumentData"></a>
<a id="tocSrawdocumentdata"></a>
<a id="tocsrawdocumentdata"></a>

```json
{
  "document": "string",
  "documentTypeId": "string",
  "parse": true,
  "parseStrategy": "ubl",
  "processId": "string"
}
```

A document to send, in base64 encoded format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|true|none|The base64 encoded version of the document.|
|documentTypeId|string|false|none|The document type id of the document. Required when parse == false.|
|parse|boolean|false|none|*** NOTE: only parse == true is currently supported *** *** NOTE: parsing is only supported for documentType == 'invoice' *** Whether or not to parse the document. If true, the data will be extracted from the document and used to construct a new document. If false, the document will be sent as is. In this case, you must ensure the document validates without any errors against the relevant validation artifacts for that processId/documentTypeId. We automatically apply updates of the validation artificats, respecting the grace period provided by the issuer. During that period, documents that validate against either the old as well as against the new artifacts are accepted. After the grace period, your document must validate against the new artifacts. You are also responsible for making sure your receiver is able to receive the updated document.|
|parseStrategy|string|false|none|How to parse the document. Only needed when parse == true.|
|processId|string|false|none|The process id of the document. Required when parse == false.|

#### Enumerated Values

|Property|Value|
|---|---|
|parseStrategy|ubl|
|parseStrategy|cii|
|parseStrategy|idoc|

<h2 id="tocS_Rea">Rea</h2>
<!-- backwards compatibility -->
<a id="schemarea"></a>
<a id="schema_Rea"></a>
<a id="tocSrea"></a>
<a id="tocsrea"></a>

```json
{
  "capital": 0,
  "identifier": "string",
  "liquidation_status": "LN",
  "partners": "SU",
  "province": "AG"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capital|number|false|none|The captial for the company.|
|identifier|string|false|none|The identifier.|
|liquidation_status|string|false|none|The liquidation status of the company.|
|partners|string|false|none|The number of partners.|
|province|string|false|none|The provincia of the ufficio that issued the identifier.|

#### Enumerated Values

|Property|Value|
|---|---|
|liquidation_status|LN|
|liquidation_status|LS|
|partners|SU|
|partners|SM|
|province|AG|
|province|AL|
|province|AN|
|province|AO|
|province|AQ|
|province|AR|
|province|AP|
|province|AT|
|province|AV|
|province|BA|
|province|BT|
|province|BL|
|province|BN|
|province|BG|
|province|BI|
|province|BO|
|province|BZ|
|province|BS|
|province|BR|
|province|CA|
|province|CL|
|province|CB|
|province|CI|
|province|CE|
|province|CT|
|province|CZ|
|province|CH|
|province|CO|
|province|CS|
|province|CR|
|province|KR|
|province|CN|
|province|EN|
|province|FM|
|province|FE|
|province|FI|
|province|FG|
|province|FC|
|province|FR|
|province|GE|
|province|GO|
|province|GR|
|province|IM|
|province|IS|
|province|SP|
|province|LT|
|province|LE|
|province|LC|
|province|LI|
|province|LO|
|province|LU|
|province|MC|
|province|MN|
|province|MS|
|province|MT|
|province|VS|
|province|ME|
|province|MI|
|province|MO|
|province|MB|
|province|NA|
|province|NO|
|province|NU|
|province|OG|
|province|OT|
|province|OR|
|province|PD|
|province|PA|
|province|PR|
|province|PV|
|province|PG|
|province|PU|
|province|PE|
|province|PC|
|province|PI|
|province|PT|
|province|PN|
|province|PZ|
|province|PO|
|province|RG|
|province|RA|
|province|RC|
|province|RE|
|province|RI|
|province|RN|
|province|RO|
|province|SA|
|province|SS|
|province|SV|
|province|SI|
|province|SR|
|province|SO|
|province|TA|
|province|TE|
|province|TR|
|province|TO|
|province|TP|
|province|TN|
|province|TV|
|province|TS|
|province|UD|
|province|VA|
|province|VE|
|province|VB|
|province|VC|
|province|VR|
|province|VV|
|province|VI|
|province|VT|

<h2 id="tocS_ReceivedDocument">ReceivedDocument</h2>
<!-- backwards compatibility -->
<a id="schemareceiveddocument"></a>
<a id="schema_ReceivedDocument"></a>
<a id="tocSreceiveddocument"></a>
<a id="tocsreceiveddocument"></a>

```json
{
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|guid|string(uuid)|false|none|The GUID of the received document|

<h2 id="tocS_ReceivedDocumentCreate">ReceivedDocumentCreate</h2>
<!-- backwards compatibility -->
<a id="schemareceiveddocumentcreate"></a>
<a id="schema_ReceivedDocumentCreate"></a>
<a id="tocSreceiveddocumentcreate"></a>
<a id="tocsreceiveddocumentcreate"></a>

```json
{
  "document": "string",
  "legal_entity_id": 0,
  "parseStrategy": "rfc822"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|document|string|false|none|The Base64 encoded document.|
|legal_entity_id|integer(int64)|false|none|The of the LegalEntity this document was received for.|
|parseStrategy|string|false|none|The attachment content type (mime type).|

#### Enumerated Values

|Property|Value|
|---|---|
|parseStrategy|rfc822|

<h2 id="tocS_ReceiverParty">ReceiverParty</h2>
<!-- backwards compatibility -->
<a id="schemareceiverparty"></a>
<a id="schema_ReceiverParty"></a>
<a id="tocSreceiverparty"></a>
<a id="tocsreceiverparty"></a>

```json
{
  "address": {
    "city": "string",
    "country": "AD",
    "county": "string",
    "street1": "string",
    "street2": "string",
    "zip": "string"
  },
  "companyName": "string",
  "contact": {
    "email": "user@example.com",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "phone": "string"
  }
}
```

A party that can receive or send invoices

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|true|none|The address|
|companyName|string|true|none|The name of the company receiving the invoice|
|contact|[Contact](#schemacontact)|false|none|Contact details for the invoice|

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
{
  "documentId": "string",
  "documentType": "purchase_order",
  "issueDate": "string",
  "lineId": "string"
}
```

A reference to a document.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|string|false|none|The id of the referenced document.|
|documentType|string|true|none|The type of the referenced document. The following types are supported:<br>++++<br><ul>    <li>        <b>purchase_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the buyer. Note that this often is a key field, since many receivers of invoices will use this field to automatically match the invoice to an order they placed. Many receivers refuse invoices that cannot be automatically matched, in particular government agencies. So it is highly recommended to fill this field whenever possible.</p>    </li>    <li>        <b>billing</b> (document level, Invoice)        <p>A reference to a billing document. For instance, credit notes may refer to an invoice they are a credit note for.</p>    </li>    <li>        <b>sales_order</b> (document level, Invoice + Order)        <p>A reference to an order for this document, assigned by the seller.</p>    </li>    <li>        <b>buyer_reference</b> (document level, Invoice, Order)        <p>The buyer's reference. Used for internal routing by the receiver. For orders, this becomes the customer reference which the receiver of the order should put back in the buyer reference field in the invoice.</p>    </li>    <li>        <b>contract</b> (document level, Invoice + Order)        <p>A reference to a contract or framework agreement that this document relates to.</p>    </li>    <li>        <b>despatch_advice</b> (document level, Invoice)        <p>A reference to a despatch advice for this document. In the FatturaPA, this is what will become the DDT.</p>    </li>    <li>        <b>originator</b> (document level, Invoice + Order)        <p>A reference to an originator document for this invoice.</p>    </li>    <li>        <b>receipt</b> (document level, Invoice)        <p>A reference to a receipt document for this document.</p>    </li>    <li>        <b>project</b> (document level, Invoice)        <p>A reference to a project document for this document.</p>    </li>    <li>        <b>quotation</b> (document level, Order)        <p>A reference to a quotation document for this document.</p>    </li>    <li>        <b>payment_url</b> (document level, Invoice)        <p>A to a payment URL for the invoice.</p>    </li>    <li>        <b>item_classification_code</b> (line level)        <p>A reference to a commodity classification / item classification code for this line.</p>    </li>    <li>        <b>item_commodity_code</b> (line level)        <p>A reference to a commodity classification / commodity code for this line.</p>    </li>    <li>        <b>line_document_reference</b> (line level)        <p>A reference to another document for this line.</p>    </li>    <li>        <b>line_standard_item_identification</b> (line level)        <p>A standard item identification.</p>    </li>    <li>        <b>line_sellers_item_identification</b> (line level)        <p>The seller's item identification.</p>    </li>    <li>        <b>line_buyers_item_identification</b> (line level)        <p>The buyer's item identification.</p>    </li>    <li>        <b>item_specification</b> (line level)        <p>Referece to an item specification document</p>    </li></ul><br>++++<br>|
|issueDate|string|false|none|The issue date of the referenced document.|
|lineId|string|false|none|The line in the referenced document.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentType|purchase_order|
|documentType|buyer_reference|
|documentType|billing|
|documentType|sales_order|
|documentType|contract|
|documentType|despatch_advice|
|documentType|originator|
|documentType|receipt|
|documentType|project|
|documentType|quotation|
|documentType|payment_url|
|documentType|item_classification_code|
|documentType|item_commodity_code|
|documentType|line_document_reference|
|documentType|line_standard_item_identification|
|documentType|line_sellers_item_identification|
|documentType|line_buyers_item_identification|
|documentType|item_specification|

<h2 id="tocS_Routing">Routing</h2>
<!-- backwards compatibility -->
<a id="schemarouting"></a>
<a id="schema_Routing"></a>
<a id="tocSrouting"></a>
<a id="tocsrouting"></a>

```json
{
  "clearWithoutSending": false,
  "eIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ],
  "emails": [
    "user@example.com"
  ]
}
```

The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clearWithoutSending|boolean|false|none|If you wish to send the document yourself in a Y-flow, use this flag. Wait for the 'cleared' webhook and use the <<_openapi_show_document_submission_evidence>> endpoint to retrieve the clearing evidence. This will include a sendable document.|
|eIdentifiers|[EIdentifiers](#schemaeidentifiers)|false|none|A list of electronic routing identifiers. These are the identifiers used on the Peppol network or for other destinations.|
|emails|[string(email)]|false|none|The email addresses the invoice should be sent to if none of the other identifiers can be used|

<h2 id="tocS_RoutingIdentifier">RoutingIdentifier</h2>
<!-- backwards compatibility -->
<a id="schemaroutingidentifier"></a>
<a id="schema_RoutingIdentifier"></a>
<a id="tocSroutingidentifier"></a>
<a id="tocsroutingidentifier"></a>

```json
{
  "id": "string",
  "scheme": "string"
}
```

An electronic routing identifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The actual identifier.|
|scheme|string|false|none|The scheme of the identifier. See <<_receiver_identifiers_list>> for a list.|

<h2 id="tocS_SellerSupplierParty">SellerSupplierParty</h2>
<!-- backwards compatibility -->
<a id="schemasellersupplierparty"></a>
<a id="schema_SellerSupplierParty"></a>
<a id="tocSsellersupplierparty"></a>
<a id="tocssellersupplierparty"></a>

```json
{
  "party": {
    "contact": {
      "email": "user@example.com",
      "firstName": "string",
      "id": "string",
      "lastName": "string",
      "phone": "string"
    }
  },
  "publicIdentifiers": [
    {
      "id": "string",
      "scheme": "string"
    }
  ]
}
```

The party sending the order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|[SenderParty](#schemasenderparty)|true|none|A party that can send documents|
|publicIdentifiers|[[PublicIdentifier](#schemapublicidentifier)]|false|none|A list of legal and tax identifiers for this customer.|

<h2 id="tocS_SendableDocument">SendableDocument</h2>
<!-- backwards compatibility -->
<a id="schemasendabledocument"></a>
<a id="schema_SendableDocument"></a>
<a id="tocSsendabledocument"></a>
<a id="tocssendabledocument"></a>

```json
{
  "documentType": "invoice",
  "invoice": {
    "accountingCost": "string",
    "accountingCurrencyTaxAmount": 0,
    "accountingCurrencyTaxAmountCurrency": "AED",
    "accountingCustomerParty": {
      "party": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "companyName": "string",
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      },
      "publicIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ]
    },
    "accountingSupplierParty": {
      "party": {
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      }
    },
    "allowanceCharges": [
      {
        "amountExcludingTax": 0,
        "amountExcludingVat": 0,
        "baseAmountExcludingTax": 0,
        "reason": "Agreed settlement",
        "reasonCode": "string",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "amountIncludingVat": 0,
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "billingReference": "string",
    "buyerReference": "string",
    "consumerTaxMode": false,
    "contractDocumentReference": "string",
    "delivery": {
      "actualDate": "string",
      "deliveryLocation": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "id": "string",
        "locationName": "string",
        "schemeAgencyId": "string",
        "schemeId": "string"
      },
      "deliveryParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "deliveryPartyName": "string",
      "quantity": 1,
      "requestedDeliveryPeriod": "string",
      "shippingMarks": "string"
    },
    "documentCurrencyCode": "AED",
    "dueDate": "string",
    "invoiceLines": [
      {
        "accountingCost": "string",
        "additionalItemProperties": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "allowanceCharge": 0,
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "baseAmountExcludingTax": 0,
            "reason": "string",
            "reasonCode": "string"
          }
        ],
        "amountExcludingVat": 0,
        "buyersItemIdentification": "string",
        "description": "string",
        "invoicePeriod": "string",
        "itemPrice": 1,
        "lineId": "string",
        "name": "string",
        "note": "string",
        "orderLineReferenceLineId": "string",
        "quantity": 1,
        "quantityUnitCode": "C62",
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "sellersItemIdentification": "string",
        "standardItemIdentification": "string",
        "standardItemIdentificationSchemeAgencyId": "9",
        "standardItemIdentificationSchemeId": "GTIN",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "invoiceNumber": "string",
    "invoicePeriod": "string",
    "invoiceType": "380",
    "issueDate": "string",
    "issueReasons": [
      "string"
    ],
    "note": "string",
    "orderReference": "string",
    "paymentMeansArray": [
      {
        "account": "string",
        "amount": 0,
        "branche_code": "string",
        "code": "credit_transfer",
        "holder": "string",
        "mandate": "string",
        "network": "string",
        "paymentId": "string"
      }
    ],
    "paymentMeansBic": "string",
    "paymentMeansCode": "online_payment_service",
    "paymentMeansIban": "string",
    "paymentMeansPaymentId": "string",
    "paymentTerms": {
      "note": "string"
    },
    "preferredInvoiceType": "prefer_autodetect",
    "prepaidAmount": 0,
    "projectReference": "string",
    "references": [
      {
        "documentId": "string",
        "documentType": "purchase_order",
        "issueDate": "string",
        "lineId": "string"
      }
    ],
    "salesOrderId": "string",
    "selfBillingMode": false,
    "taxExemptReason": "export",
    "taxPointDate": "string",
    "taxSubtotals": [
      {
        "category": "standard",
        "country": "AD",
        "percentage": 0,
        "taxAmount": 0,
        "taxableAmount": 0
      }
    ],
    "taxSystem": "tax_line_amounts",
    "taxesDutiesFees": [
      {
        "amount": 0,
        "category": "standard",
        "country": "AD",
        "percentage": 0
      }
    ],
    "transactionType": "b2b",
    "ublExtensions": [
      "string"
    ],
    "vatReverseCharge": false,
    "x2y": "b2b"
  },
  "invoiceResponse": {
    "clarifications": [
      {
        "clarification": "string",
        "clarificationCode": "REF",
        "clarificationCodeType": "OPStatusReason"
      }
    ],
    "effectiveDate": "string",
    "note": "string",
    "responseCode": "AB"
  },
  "order": {
    "accountingCost": "string",
    "allowanceCharges": [
      {
        "amountExcludingTax": 0,
        "amountExcludingVat": 0,
        "baseAmountExcludingTax": 0,
        "reason": "Agreed settlement",
        "reasonCode": "string",
        "tax": {
          "amount": 0,
          "category": "standard",
          "country": "AD",
          "percentage": 0
        },
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "amountIncludingTax": 0,
    "attachments": [
      {
        "description": "string",
        "document": "string",
        "documentId": "string",
        "filename": "string",
        "mimeType": "application/pdf",
        "primaryImage": false
      }
    ],
    "delivery": {
      "actualDate": "string",
      "deliveryLocation": {
        "address": {
          "city": "string",
          "country": "AD",
          "county": "string",
          "street1": "string",
          "street2": "string",
          "zip": "string"
        },
        "id": "string",
        "locationName": "string",
        "schemeAgencyId": "string",
        "schemeId": "string"
      },
      "deliveryParty": {
        "party": {
          "address": {
            "city": "string",
            "country": "AD",
            "county": "string",
            "street1": "string",
            "street2": "string",
            "zip": "string"
          },
          "companyName": "string",
          "contact": {
            "email": "user@example.com",
            "firstName": "string",
            "id": "string",
            "lastName": "string",
            "phone": "string"
          }
        }
      },
      "deliveryPartyName": "string",
      "quantity": 1,
      "requestedDeliveryPeriod": "string",
      "shippingMarks": "string"
    },
    "deliveryTerms": {
      "deliveryLocationId": "string",
      "incoterms": "EXW",
      "specialTerms": "string"
    },
    "documentCurrencyCode": "AED",
    "documentNumber": "string",
    "issueDate": "string",
    "issueTime": "string",
    "note": "string",
    "orderLines": [
      {
        "accountingCost": "string",
        "additionalItemProperties": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "allowPartialDelivery": false,
        "allowanceCharges": [
          {
            "amountExcludingTax": 0,
            "baseAmountExcludingTax": 0,
            "reason": "string",
            "reasonCode": "string"
          }
        ],
        "amountExcludingTax": 0,
        "baseQuantity": 1,
        "delivery": {
          "deliveryLocation": {
            "id": "string",
            "schemeId": "string"
          }
        },
        "description": "string",
        "itemPrice": 1,
        "lineId": "string",
        "lotNumberIds": [
          "string"
        ],
        "name": "string",
        "note": "string",
        "quantity": 1,
        "quantityUnitCode": "C62",
        "references": [
          {
            "documentId": "string",
            "documentType": "purchase_order",
            "issueDate": "string",
            "lineId": "string"
          }
        ],
        "taxesDutiesFees": [
          {
            "amount": 0,
            "category": "standard",
            "country": "AD",
            "percentage": 0
          }
        ]
      }
    ],
    "orderType": "regular",
    "paymentTerms": {
      "note": "string"
    },
    "references": [
      {
        "documentId": "string",
        "documentType": "purchase_order",
        "issueDate": "string",
        "lineId": "string"
      }
    ],
    "sellerSupplierParty": {
      "party": {
        "contact": {
          "email": "user@example.com",
          "firstName": "string",
          "id": "string",
          "lastName": "string",
          "phone": "string"
        }
      },
      "publicIdentifiers": [
        {
          "id": "string",
          "scheme": "string"
        }
      ]
    },
    "taxSystem": "tax_line_percentages",
    "timeZone": "string",
    "validityPeriod": "string"
  },
  "rawDocumentData": {
    "document": "string",
    "documentTypeId": "string",
    "parse": true,
    "parseStrategy": "ubl",
    "processId": "string"
  }
}
```

The document to send.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentType|string|true|none|The type of document to be sent.|
|invoice|[Invoice](#schemainvoice)|false|none|The invoice to send. Provide either invoice, or invoiceData, but not both.|
|invoiceResponse|[DocumentInvoiceResponse](#schemadocumentinvoiceresponse)|false|none|The invoice response to send.|
|order|[DocumentOrder](#schemadocumentorder)|false|none|The order to send.|
|rawDocumentData|[RawDocumentData](#schemarawdocumentdata)|false|none|A document to send, in base64 encoded format.|

#### Enumerated Values

|Property|Value|
|---|---|
|documentType|invoice|
|documentType|invoice_response|
|documentType|order|

<h2 id="tocS_SenderParty">SenderParty</h2>
<!-- backwards compatibility -->
<a id="schemasenderparty"></a>
<a id="schema_SenderParty"></a>
<a id="tocSsenderparty"></a>
<a id="tocssenderparty"></a>

```json
{
  "contact": {
    "email": "user@example.com",
    "firstName": "string",
    "id": "string",
    "lastName": "string",
    "phone": "string"
  }
}
```

A party that can send documents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contact|[Contact](#schemacontact)|false|none|Contact details for the invoice|

<h2 id="tocS_Tax">Tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_Tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "amount": 0,
  "category": "standard",
  "country": "AD",
  "percentage": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount of tax. Mandatory if taxSystem == 'tax_line_amounts'. However, it is best to use taxSystem tax_line_percentages and provide only the percentage, not the actual amount. The amount is then provided at the invoice level, in the taxSubtotals element.|
|category|string|false|none|The allowed values depend on the country of the tax:<br>++++<br><ul>    <li>        AU:        <ul>            <li>standard (10%, 5.5%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        EU:        <ul>            <li>standard (percentages country dependent)</li>            <li>zero_rated (0%)</li>            <li>reverse_charge (0%)</li>            <li>intra_community (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        IN:        <ul>            <li>igst (28%, 18%, 12%, 5%, 3%, 0.25%)</li>            <li>sgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cgst (14%, 9%, 6%, 2.5%, 1.5%</li>            <li>cess (any percentage)</li>            <li>state_cess (any percentage)</li>            <li>reverse_charge (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        JP:        <ul>            <li>standard (10%, 8%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        MY:        <ul>            <li>standard (10%, 6%, 5%)</li>            <li>zero_rated (0%)</li>        </ul>    </li>    <li>        NZ:        <ul>            <li>standard (15%)</li>            <li>zero_rated (0%)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li>    <li>        SG:        <ul>            <li>standard (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>deemed_supply (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_c (7%; 8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr (7%; NOT to be used from 2023-01-01)</li>            <li>srovr_rs (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srovr_lvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srlvg (8% from 2023-01-01; 9% from 2024-01-01)</li>            <li>srca_s (0%)</li>            <li>outside_scope (0%)</li>            <li>not_registered (0%)</li>            <li>zero_rated (0%)</li>            <li>regulation33_exempt (0%)</li>            <li>nonregulation33_exempt (0%)</li>            <li>export (0%)</li>        </ul>    </li>    <li>        US:        <ul>            <li>standard (any percentage)</li>            <li>export (0%)</li>            <li>exempt (0%)</li>            <li>outside_scope (0%)</li>        </ul>    </li></ul><br>++++|
|country|[Country](#schemacountry)|true|none|An ISO 3166-1 alpha-2 country code.|
|percentage|number|false|none|The percentage Tax. This should be a valid Tax percentage in the country at the time of the issueDate of this invoice. Mandatory if taxSystem == 'tax_line_percentages'|

#### Enumerated Values

|Property|Value|
|---|---|
|category|standard|
|category|zero_rated|
|category|reverse_charge|
|category|intra_community|
|category|exempt|
|category|export|
|category|outside_scope|
|category|regulation33_exempt|
|category|nonregulation33_exempt|
|category|deemed_supply|
|category|srca_s|
|category|srca_c|
|category|not_registered|
|category|igst|
|category|cgst|
|category|sgst|
|category|cess|
|category|state_cess|
|category|srovr|
|category|srovr_rs|
|category|srovr_lvg|
|category|srlvg|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_TaxSubtotal">TaxSubtotal</h2>
<!-- backwards compatibility -->
<a id="schemataxsubtotal"></a>
<a id="schema_TaxSubtotal"></a>
<a id="tocStaxsubtotal"></a>
<a id="tocstaxsubtotal"></a>

```json
{
  "category": "standard",
  "country": "AD",
  "percentage": 0,
  "taxAmount": 0,
  "taxableAmount": 0
}
```

The total amount of tax of this type in the invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The tax category. For a description see <<_openapi_tax>>|
|country|[Country](#schemacountry)|true|none|An ISO 3166-1 alpha-2 country code.|
|percentage|number|true|none|The tax percentage. This should be a valid tax percentage in the country at the time of the taxpointDate of this invoice.|
|taxAmount|number|true|none|The amount of tax.|
|taxableAmount|number|true|none|The amount on which the tax is levied.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|standard|
|category|zero_rated|
|category|reverse_charge|
|category|intra_community|
|category|exempt|
|category|export|
|category|outside_scope|
|category|regulation33_exempt|
|category|nonregulation33_exempt|
|category|deemed_supply|
|category|srca_s|
|category|srca_c|
|category|not_registered|
|category|igst|
|category|cgst|
|category|sgst|
|category|cess|
|category|state_cess|
|category|srovr|
|category|srovr_rs|
|category|srovr_lvg|
|category|srlvg|
|country|AD|
|country|AE|
|country|AF|
|country|AG|
|country|AI|
|country|AL|
|country|AM|
|country|AO|
|country|AQ|
|country|AR|
|country|AS|
|country|AT|
|country|AU|
|country|AW|
|country|AX|
|country|AZ|
|country|BA|
|country|BB|
|country|BD|
|country|BE|
|country|BF|
|country|BG|
|country|BH|
|country|BI|
|country|BJ|
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BQ|
|country|BR|
|country|BS|
|country|BT|
|country|BV|
|country|BW|
|country|BY|
|country|BZ|
|country|CA|
|country|CC|
|country|CD|
|country|CF|
|country|CG|
|country|CH|
|country|CI|
|country|CK|
|country|CL|
|country|CM|
|country|CN|
|country|CO|
|country|CR|
|country|CU|
|country|CV|
|country|CW|
|country|CX|
|country|CY|
|country|CZ|
|country|DE|
|country|DJ|
|country|DK|
|country|DM|
|country|DO|
|country|DZ|
|country|EC|
|country|EE|
|country|EG|
|country|EH|
|country|ER|
|country|ES|
|country|ET|
|country|FI|
|country|FJ|
|country|FK|
|country|FM|
|country|FO|
|country|FR|
|country|GA|
|country|GB|
|country|GD|
|country|GE|
|country|GF|
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GP|
|country|GQ|
|country|GR|
|country|GS|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
|country|HM|
|country|HN|
|country|HR|
|country|HT|
|country|HU|
|country|ID|
|country|IE|
|country|IL|
|country|IM|
|country|IN|
|country|IO|
|country|IQ|
|country|IR|
|country|IS|
|country|IT|
|country|JE|
|country|JM|
|country|JO|
|country|JP|
|country|KE|
|country|KG|
|country|KH|
|country|KI|
|country|KM|
|country|KN|
|country|KP|
|country|KR|
|country|KW|
|country|KY|
|country|KZ|
|country|LA|
|country|LB|
|country|LC|
|country|LI|
|country|LK|
|country|LR|
|country|LS|
|country|LT|
|country|LU|
|country|LV|
|country|LY|
|country|MA|
|country|MC|
|country|MD|
|country|ME|
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
|country|MQ|
|country|MR|
|country|MS|
|country|MT|
|country|MU|
|country|MV|
|country|MW|
|country|MX|
|country|MY|
|country|MZ|
|country|NA|
|country|NC|
|country|NE|
|country|NF|
|country|NG|
|country|NI|
|country|NL|
|country|NO|
|country|NP|
|country|NR|
|country|NU|
|country|NZ|
|country|OM|
|country|PA|
|country|PE|
|country|PF|
|country|PG|
|country|PH|
|country|PK|
|country|PL|
|country|PM|
|country|PN|
|country|PR|
|country|PS|
|country|PT|
|country|PW|
|country|PY|
|country|QA|
|country|RE|
|country|RO|
|country|RS|
|country|RU|
|country|RW|
|country|SA|
|country|SB|
|country|SC|
|country|SD|
|country|SE|
|country|SG|
|country|SH|
|country|SI|
|country|SJ|
|country|SK|
|country|SL|
|country|SM|
|country|SN|
|country|SO|
|country|SR|
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TF|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
|country|UM|
|country|US|
|country|UY|
|country|UZ|
|country|VA|
|country|VC|
|country|VE|
|country|VG|
|country|VI|
|country|VN|
|country|VU|
|country|WF|
|country|WS|
|country|XI|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|

<h2 id="tocS_WebhookInstance">WebhookInstance</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinstance"></a>
<a id="schema_WebhookInstance"></a>
<a id="tocSwebhookinstance"></a>
<a id="tocswebhookinstance"></a>

```json
{
  "body": "string",
  "guid": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|The webhook body that would have been pushed if this were a push-mode webhook.|
|guid|string(uuid)|false|none|The GUID of the WebhookInstance. Use this to delete it.|
